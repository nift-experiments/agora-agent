import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Media Push Overview",
  description: "Introduces the RESTful APIs for Media Push provided by Agora."
};
export let _markdown = `

This article contains detailed help for the Media Push RESTful APIs.

## Authentication [#authentication]

The RESTful APIs require basic HTTP authentication. You need to set the \`Authorization\` parameter in every HTTP request header. For how to get the value for Authorization, see [RESTful API authentication](./restful-authentication).

## Understand the tech [#understand-the-tech]

You can implement different types of Media Push depending on the live streaming use-case requires transcoded or non-transcoded streaming. Transcoding is essentially an encoding and decoding function used to mix multiple audio and video streams into one audio and video stream, which can guarantee the synchronization of multiple hosts' live streams seen by the audience. Therefore, generally speaking, in the case of multiple-hosts live streaming, you need to enable transcoding when pushing streams to CDN; in the case of single-host live streaming, only one media stream is pushed to the CDN, so you do not need to enable transcoding.
Processing the media streams and pushing it to the CDN creates a Media Push task (shown as "Converter" in the rest of the article) in the Agora channel. You can control a Converter through the following methods:

* \`Create\`: Create a Converter for your project, and set up the relevant configuration of transcoded or non-transcoded streaming. The media stream in the channel is processed by the Converter according to this configuration and then pushed to the CDN.
* \`Delete\`: Destroy the specified Converter. The user's media stream in this channel will no longer be processed by the Converter or pushed to the CDN after you destroy the Converter.
* \`Update\`: Update the specified Converter configuration.
* \`Get\`: Get the streaming status of the specified Converter.

## Create: Create a Converter [#create-create-a-converter]

### HTTP request [#http-request]

\`\`\`html
POST https://api.agora.io/{region}/v1/projects/{appId}/rtmp-converters
\`\`\`

<CalloutContainer type="warning">
  <CalloutDescription>
    The Agora RESTful API only supports HTTPS with TLS 1.0, 1.1, or 1.2 for encrypted communication. Requests over plain HTTP are not supported and will fail to connect.
  </CalloutDescription>
</CalloutContainer>

#### Path parameter [#path-parameter]

* \`appId\`: (Required) String. The **App ID** provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project.
* \`region\`: (Required) String. The region that the Converter was created in. Agora supports the creation of Converters in different regions. Currently, four regions are supported:
  * \`cn\`: China Mainland
  * \`ap\`: Asia, excluding Mainland China
  * \`na\`: North America
  * \`eu\`: Europe

<CalloutContainer type="info">
  <CalloutDescription>
    - Please ensure that the region you set is the same region as where your CDN originates is located.
    - Please make sure the value of \`region\` is lowercase.
  </CalloutDescription>
</CalloutContainer>

#### Query parameters [#query-parameters]

\`regionHintIp\`: (Optional) String. The IP address of the CDN source station. It must be a valid IPv4 address. This parameter can help ensure the stability of the RTMP stream.

\`\`\`html
POST https://api.agora.io/{region}/v1/projects/{appId}/rtmp-converters?regionHintIp={regionHintIp}
\`\`\`

#### Request header [#request-header]

* \`Content-Type\`: \`application/json\`

* \`Authorization\`: The value of this field must refer to the [Authentication instructions](./restful-authentication).

* \`X-Request-ID\`: The UUID (Universal Unique Identifier) that identifies this **request**. Agora server generates a UUID to pass in and returns \`X-Request-ID\` field in the response header.

  > Agora recommends that you assign a value to \`X-Request-ID\`. Agora server returns an \`X-Custom-Request-ID\` field in the response header for trouble shooting.

<a id="createbody"></a>

#### Request body [#request-body]

You can implement different types of Media Push depending on the live streaming use-case requires transcoded or non-transcoded streaming. Generally speaking, in the case of multiple-hosts live streaming, you need to enable transcoding when using Media Push RESTful APIs; in the case of single-host live streaming, only one media stream is pushed to the CDN, so you do not need to enable transcoding. For details, see [Media Push Features](/en/realtime-media/media-push#key-features).

**Media Push with transcoding**

The request Body is the \`converter\` field of JSON Object type. The field structure is shown in the following figure:

![1654595558221](https://web-cdn.agora.io/docs-files/1654595558221)

Details for these fields are shown in the following table:

| Field                                                      | Type                   | Descriptions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :--------------------------------------------------------- | :--------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                                                       | (Optional) String      | The name of the Converter. The maximum length is 64 characters. The supported character set range is:- All lowercase English letters (a-z)
- All uppercase English letters (A-Z)
- Numbers 0-9
- "-", "\\_"The field is empty when no value is passed. Multiple converters with an empty name field can be created under a project. Two converters cannot have the same name, however; you will receive a response status code of \`409\` (Conflict) if you try to create a converter with the same name as one that already exists under that project.<CalloutContainer type="info">
  <CalloutDescription>
    To avoid repeatedly creating multiple Converters and repetitively pushing streams, please use the \`name\` field to manage the Converters under the specified project. Agora recommends that you combine "channel name (\`rtcChannel\`)" and "Converter feature" to assign a value to the \`name\`. For example, \`show68_horizontal\` and \`show68_vertical\` would represent converters for the user screen created in channel \`show68\` with horizontal and vertical layouts, respectively.
  </CalloutDescription>
</CalloutContainer> |
| transcodeOptions                                           | (Required) JSON Object | The Converter’s transcoding configuration.- When the \`audioOptions\` and \`videoOptions\` fields in \`converter.transcodeOptions\` are not defined, the converter will output a video stream only (without audio).
- When there is no \`rtcStreamUids\` field in the \`converter.transcodeOptions.audioOptions\` field, Agora will mix the audio streams of all users in the channel and output the mixed audio stream through the Converter.
- When there is an \`rtcStreamUids\` field in the \`converter.transcodeOptions.audioOptions\` field, Agora will mix the audio stream of the specified user and output the mixed audio stream through the Converter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| transcodeOptions.rtcChannel                                | (Required) String      | The Agora channel name. This is the channel to which the stream processed by the Converter belongs. The maximum length of the string is 64 characters, and the following character sets (89 characters in total) are supported:- All lowercase English letters (a-z)
- All uppercase English letters (A-Z)
- Numbers 0-9
- The space character "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", " \\{", "}", "\\|", "\\~", ","                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| transcodeOptions.audioOptions                              | (Optional) JSON Object | The audio transcoding configuration of the Converter. See [audioOptions](./restful-type-definition#audiooptions) for details.<CalloutContainer type="info">
  <CalloutDescription>
    * There is no need to set \`audioOptions\` and related fields in a video stream only (without audio) use-case.
    * In an audio & video use-case, \`audioOptions\` is a required field. If there is no field setting requirement, you can set \`audioOptions\` to empty, for example: "audioOptions":\\{}.
  </CalloutDescription>
</CalloutContainer>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| transcodeOptions.videoOptions                              | (Optional) JSON Object | The video transcoding configuration of the Converter.<CalloutContainer type="info">
  <CalloutDescription>
    * There is no need to set \`videoOptions\` and related fields in an audio stream only (without video) use-case.
    * In an audio & video use-case, \`videoOptions\` is a required field and cannot be empty.
  </CalloutDescription>
</CalloutContainer>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| transcodeOptions.videoOptions.canvas                       | (Required) JSON Object | The video canvas. See [canvas](./restful-type-definition#canvas) for details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| transcodeOptions.videoOptions.layoutType                   | (Optional) Number      | The screen layout type of the output video:- \`0\` or empty: (Default) Custom layout, which is set through the\`transcodeOptions.videoOptions.layout\` parameter.
- \`1\`: Vertical layout. Specify one user to display in the large window on the left side of the screen, while the other users are vertically arranged in the small windows on the right side of the screen. For details, see [Set Vertical Layout](/en/realtime-media/media-push/reference/set-vertical-layout).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| transcodeOptions.videoOptions.layout                       | (Optional) JSON Array  | The content description of the video screen on the canvas. Two elements are supported: RtcStreamView and ImageView.<CalloutContainer type="info">
  <CalloutDescription>
    If \`layoutType\` is 0 or empty, this field is required.
  </CalloutDescription>
</CalloutContainer>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| transcodeOptions.videoOptions.layout.RtcStreamView element | None                   | The video screen of each user on the canvas. See [RtcStreamView](./restful-type-definition#layout) for details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| transcodeOptions.videoOptions.layout.ImageView element     | None                   | The video image on the canvas, which can be used as a watermark. See [ImageView](./restful-type-definition#layoutimageview) for details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| transcodeOptions.videoOptions.vertical                     | (Optional) JSON Object | Vertical layout. This parameter must be set when \`layoutType\` is 1. See [vertical](./restful-type-definition#vertical) for details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| transcodeOptions.videoOptions.defaultPlaceholderImageUrl   | (Optional) String      | The default user screen background image URL address. Supports images in JPG, PNG and GIF formats. This controls what happens when a user in a channel stops publishing their video stream:- If this field is set, the user's window switches to this background image.
- If this field is not set, the user's window initially displays the last frame of the user's video. Once the layout refreshes, the window displays the background color of the canvas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| transcodeOptions.videoOptions.bitrate                      | (Required) Number      | The encoding bitrate (Kbps) of the video. The value range is \\[1,10000].                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| transcodeOptions.videoOptions.gop                          | (Optional) Number      | The GOP of the video. The default value is the value of \`frameRate\` \\* 2.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| transcodeOptions.videoOptions.frameRate                    | (Optional) Number      | The encoding frame rate (fps) of the video. The value range is \\[1,30]. The default value is 15.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| transcodeOptions.videoOptions.codec                        | (Optional) String      | The video codec type of the output video stream. The following values are supported:- (Default) H.264
- H.265                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| transcodeOptions.videoOptions.codecProfile                 | (Optional) String      | The encoding specification of the video. The following values are supported:* \`high\` (Default): High video codec profile, generally used for high-resolution broadcasts or television.
* \`baseline\`: Baseline video codec profile, generally used for video calls on mobile phones.
* \`main\`: Main video codec profile, generally used for mainstream electronics, such as MP4 players, portable video players, PSPs, and iPads.<CalloutContainer type="info">
  <CalloutDescription>
    If \`codec\` is set to \`H.256\`, \`codecProfile\` is automatically set to \`main\`.
  </CalloutDescription>
</CalloutContainer>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| transcodeOptions.videoOptions.seiOptions                   | JSON Object            | Sets the user SEI information carried in the output video stream. The default is empty. If it is not set, it means that no SEI information is output. See [seiOptions](./restful-type-definition#seioptions) for details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| rtmpUrl                                                    | (Required) String      | The address of Media Push. It must be a valid RTMP address with a length of 1,024 characters or less.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| idleTimeOut                                                | (Optional) Number      | The maximum time (seconds) that the Converter is idle. Idle means that all users corresponding to the media stream processed by the Converter have left the channel. After the idle state exceeds the set \`idleTimeOut\`, the Converter will be destroyed automatically.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| jitterBufferSizeMs                                         | (Optional) Int         | Network delay (ms) from the receiver to the jitter buffer. The default value is 1000. The value range is \\[0, 1000].- The Media Push service rounds up to the nearest 100 multiples with the value you set.

- If the value is set to 0, jitter buffer delay does not take effect. Agora recommends that you do not set the \`jitterBufferSizeMs\` to 0 because poor network may cause low audio quality.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

**Media Push without transcoding**

The request body is the \`converter\` field of JSON Object type. The field structure is shown in the following figure:

<img src="https://web-cdn.agora.io/docs-files/1654595914132" />

Details for these fields are shown in the following table:

| Field                   | Category              | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| :---------------------- | :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name                    | String                | The name of the Converter.                                                                                                                                                                                                                                                                                                                                                                              |
| rawOptions              | (Required)JSON Object | Media Push configuration for the Converter.                                                                                                                                                                                                                                                                                                                                                             |
| rawOptions.rtcChannel   | String                | The Agora channel name. The channel to which the stream processed by the Converter belongs.                                                                                                                                                                                                                                                                                                             |
| rawOptions.rtcStreamUid | Number                | The UID of the user to which the media stream belongs.                                                                                                                                                                                                                                                                                                                                                  |
| rtmpUrl                 | (Required)String      | The CDN streaming address.                                                                                                                                                                                                                                                                                                                                                                              |
| idleTimeOut             | Number                | The maximum time (s) that the Converter is idle. Idle means that all users of the corresponding media streams processed by the Converter have left the channel. When the Converter is in the idle state for longer than \`idleTimeout\`, the Converter is automatically destroyed and the streaming stops.                                                                                                |
| jitterBufferSizeMs      | (Optional) Int        | Network delay (ms) from the receiver to the jitter buffer. The default value is 1000. The value range is \\[0, 1000].- The Media Push service rounds up to the nearest 100 multiples with the value you set.

- If the value is set to 0, jitter buffer delay does not take effect. Agora recommends that you do not set the \`jitterBufferSizeMs\` to 0 because poor network may cause low audio quality. |

### HTTP response [#http-response]

All possible response status codes. See [Status codes](#status-codes) for details.

#### Response header [#response-header]

* \`X-Request-ID\`: The UUID (Universal Unique Identifier) that identifies this **request**. This value is the same as the \`X-Request-ID\` in the header of this request. If there is an error in the request, please print out the value in the log to troubleshoot the problem.

  > If the response status code of this request is not 2XX, this field may be missing from the response header.

* \`X-Resource-ID\`: The UUID (Universal Unique Identifier) that identifies the **ID** of the Converter updated in this request.

#### Response body [#response-body]

If the status code is 2XX, the request is successful. The field structure is shown in the following figure:

![img](https://web-cdn.agora.io/docs-files/1624003059693)

Details for these fields are shown in the following table:

| Field      | Type   | Descriptions                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :--------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`id\`       | String | The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter.                                                                                                                                                                                                                                                                                                      |
| \`createTs\` | Number | The Unix timestamp(seconds) when the Converter was created.                                                                                                                                                                                                                                                                                                                                                                               |
| \`updateTs\` | Number | The Unix timestamp(seconds) when the Converter configuration was last updated.                                                                                                                                                                                                                                                                                                                                                            |
| \`state\`    | String | The running status of the Converter:- \`connecting\`: Connecting to the Agora streaming server and the CDN server.

- \`running\`: The Agora streaming server is pushing the streams.

- \`failed\`: The Media Push fails.                                                                                                                                                                                                                      |
| \`fields\`   | String | The field mask of the converter JSON Object. See [Google protobuf FieldMask Document](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask) for details. This is used to describe the set of fields contained in the returned \`converter\`. In this example, \`fields\` specifies that the Agora server returns a subset of the \`id\`, \`createTs\`, \`updateTs\` and \`state\` fields in the \`converter\` field. |

If the status code is not 2XX, the request fails. The body contains a String type \`message\` field that describes the specific reason for the failure.

\`\`\`json
{
    "message": "Invalid authentication credentials."
 }
\`\`\`

### Request example [#request-example]

**Custom layout for Media Push with transcoding**

This example shows that the video of the two specified users in the \`show68\` channel are mixed with a custom layout and pushed to the CDN. The audio of all users in the channel is also mixed.

\`\`\`json
{
    "converter": {
        "name": "show68_vertical",
        "transcodeOptions": {
            "rtcChannel": "show68",
            "audioOptions": {
                "codecProfile": "LC-AAC",
                "sampleRate": 48000,
                "bitrate": 48,
                "audioChannels": 1
            },
            "videoOptions": {
                "canvas": {
                    "width": 360,
                    "height": 640
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
                        "fillMode": "fill",
                        "placeholderImageUrl": "http://example.agora.io/user_placeholder.jpg"
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
                    }
                ],
                "codecProfile": "High",
                "frameRate": 15,
                "gop": 30,
                "bitrate": 400,
                "seiOptions": {}
            }
        },
        "rtmpUrl": "rtmp://example/live/show68"
    }
}
\`\`\`

The sample code for setting SEI information (\`seiOptions\`) is as follows:

\`\`\`json
{
    "converter": {
        "transcodeOptions": {
            "videoOptions": {
                "seiOptions": {
                    "source": {
                        "metadata": true,
                        "datastream": true,
                        "customized": {
                            "payload": "example"
                        }
                    },
                    "sink": {
                        "type": 100
                    }
                }
            }
        }
    }
}
\`\`\`

**Vertical layout for Media Push with transcoding**
This example shows that the video of the two specified users in the \`show68\` channel are mixed with a vertical layout and pushed to the CDN. The audio of two specified users in the channel are mixed.

\`\`\`json
{
    "converter": {
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
                            "height": 640
                        },
                        "fillMode": "fill",
                        "placeholderImageUrl": "http://example/host_placeholder.jpg"
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
                    }
                ],
                "codec": "H.264",
                "codecProfile": "high",
                "frameRate": 15,
                "gop": 30,
                "bitrate": 400,
                "layoutType": 1,
                "vertical": {
                    "maxResolutionUid": 201,
                    "fillMode": "fill",
                    "refreshIntervalSec": 4
                },
                "defaultPlaceholderImageUrl": "http://example/host_placeholder.jpg",
                "seiOptions": {
                    "source": {
                        "metadata": true,
                        "datastream": true,
                        "customized": {
                            "payload": "example"
                        }
                    },
                    "sink": {
                        "type": 100
                    }
                }
            }
        },
        "rtmpUrl": "rtmp://example/live/show68",
        "idleTimeout": 300
    }
}
\`\`\`

**Media Push without transcoding**

This example shows that the media stream of the specified user in the \`show68\` channel is pushed to the CDN.

\`\`\`json
{
    "converter": {
      "name": "show68_vertical",
      "rawOptions": {
        "rtcChannel": "show68",
        "rtcStreamUid": 201
      },
      "rtmpUrl": "rtmp://example/live/global"
    }
}
\`\`\`

### Response example [#response-example]

\`\`\`json
{
   "converter": {
     "id": "4c014467d647bb87b60b719f6fa57686",
     "createTs": 1591786766,
     "updateTs": 1591786766,
     "state": "connecting"
   },
   "fields": "id,createTs,updateTs,state"
}
\`\`\`

## Delete: Destroy the Converter [#delete-destroy-the-converter]

### HTTP request [#http-request-1]

\`\`\`html
DELETE https://api.agora.io/{region}/v1/projects/{appId}/rtmp-converters/{converterId}
\`\`\`

#### Path parameter [#path-parameter-1]

* \`region\`: (Required) String. The region where the Converter is created in, which must be the same as the \`region\` set when creating Converter.
* \`appId\`: (Required) String type parameter. The **App ID** provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project.
* \`converterId\`: (Required) String type parameter. The **ID** of the Converter.

#### Request header [#request-header-1]

* \`Authorization\`: The value of this field must refer to the [Authentication instructions](./restful-authentication).

* \`X-Request-ID\`: The UUID (Universal Unique Identifier) that identifies this **request**. Agora server generates a UUID to pass in and returns \`X-Request-ID\` field in the response header.

  > Agora recommends that you assign a value to \`X-Request-ID\`. Agora server returns an \`X-Custom-Request-ID\` field in the response header for trouble shooting.

### HTTP response [#http-response-1]

All possible response status codes. See [Status codes](#status-codes) for details.

#### Response header [#response-header-1]

* \`X-Request-ID\`: The UUID (Universal Unique Identifier) that identifies this **request**. This value is the same as the \`X-Request-ID\` in the header of this request. If there is an error in the request, please print out the value in the log to troubleshoot the problem.

  > If the response status code of this request is not 2XX, this field may be missing from the response header.

* \`X-Resource-ID\`: The UUID (Universal Unique Identifier) that identifies the **ID** of the Converter created in this request.

#### Response body [#response-body-1]

* If the status code is 2XX, the request is successful. The body is empty.
* If the status code is not 2XX, the request fails. The body contains a String type \`message\` field that describes the specific reason for the failure.

## Update: Update the Converter [#update-update-the-converter]

### HTTP request [#http-request-2]

\`\`\`html
PATCH https://api.agora.io/{region}/v1/projects/{appId}/rtmp-converters/{converterId}
\`\`\`

#### Path parameter [#path-parameter-2]

* \`region\`: (Required) String. The region where the Converter is created in, which must be the same as the \`region\` set when creating Converter.
* \`appId\`: (Required) String type parameter. The **App ID** provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project.
* \`converterId\`: (Required) String type parameter. The **ID** of the Converter.

#### Query Parameters [#query-parameters-1]

\`sequence\`: (Required) Number type parameter. The serial number of the \`Update\` request. The value must be greater than or equal to 0. Please make sure that the serial number of the next \`Update\` request is greater than the serial number of the previous \`Update\` request. The serial number can ensure that the Agora server updates the Converter according to the latest configuration you specify.

> Agora recommends that you fill in \`sequence\` sequentially, using 0 when calling Update for the first time, 1 for the second time, 2 for the third time, and so on. The Agora server will update the Converter according to the latest Update request (the largest serial number).

\`\`\`html
PATCH https://api.agora.io/v1/projects/<appId>/rtmp-converters/<converterId>?sequence={sequence}
\`\`\`

#### Request header [#request-header-2]

* \`Content-Type\`: \`application/json\`

* \`Authorization\`: The value of this field must refer to the [Authentication instructions](./restful-authentication).

* \`X-Request-ID\`: The UUID (Universal Unique Identifier) that identifies this **request**. Agora server generates a UUID to pass in and returns \`X-Request-ID\` field in the response header.

  > Agora recommends that you assign a value to \`X-Request-ID\`. Agora server returns an \`X-Custom-Request-ID\` field in the response header for trouble shooting.

#### Request body [#request-body-1]

For details about the fields, see the [Create request body](#request-body).

> \`Update\` method does not support updating the following configurations of a Converter:
>
> * \`name\`
> * \`idleTimeOut\`
> * \`transcodeOptions.rtcChannel\`
> * \`transcodeOptions.audioOptions\`
> * \`transcodeOptions.audioOptions.codecProfile\`
> * \`transcodeOptions.audioOptions.sampleRate\`
> * \`transcodeOptions.audioOptions.bitrate\`
> * \`transcodeOptions.audioOptions.audioChannels\`
> * \`transcodeOptions.videoOptions.codec\`
> * \`transcodeOptions.videoOptions.codecProfile\`

<CalloutContainer type="info">
  <CalloutDescription>
    * After calling the \`Create\` method to create a Converter that outputs video stream only or audio stream only, you cannot update it to a Converter that outputs audio stream only or video stream only through the \`Update\` method.
    * When using Media Push with vertical layout (\`layoutType\` is \`1\`), you can only update the \`rtmpUrl\` field.
  </CalloutDescription>
</CalloutContainer>

### HTTP response [#http-response-2]

All possible response status codes. See [Status codes](#status-codes) for details.

#### Response header [#response-header-2]

* \`X-Request-ID\`:The UUID (Universal Unique Identifier) that identifies this **request**. This value is the same as the \`X-Request-ID\` in the header of this request. If there is an error in the request, please print out the value in the log to troubleshoot the problem.

  > If the response status code of this request is not 2XX, this field may be missing from the response header.

* \`X-Resource-ID\`: The UUID (Universal Unique Identifier) that identifies the **ID** of the Converter updated in this request.

#### Response body [#response-body-2]

If the status code is 2XX, the request is successful. The field structure is shown in the following figure:

![img](https://web-cdn.agora.io/docs-files/1624003059693)

Details of these fields are shown in the following table:

| Field      | Type   | Descriptions                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :--------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`id\`       | String | The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter.                                                                                                                                                                                                                                                                                                            |
| \`createTs\` | Number | The Unix timestamp(seconds) when the Converter was created.                                                                                                                                                                                                                                                                                                                                                                                     |
| \`updateTs\` | Number | The Unix timestamp(seconds) when the Converter configuration was last updated.                                                                                                                                                                                                                                                                                                                                                                  |
| \`state\`    | String | The running status of the Converter:- \`connecting\`: Connecting to the Agora streaming server and the CDN server.

- \`running\`: The Agora streaming server is pushing the streams.

- \`failed\`: The Media Push Fails.                                                                                                                                                                                                                            |
| \`fields\`   | String | The field mask of the converter JSON Object. See [Google protobuf FieldMask Document](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask) for details. This is used to describe the set of fields contained in the returned \`converter\`. <br/>In this example, \`fields\` specifies that the Agora server returns a subset of the \`id\`, \`createTs\`, \`updateTs\`, and \`state\` fields in the \`converter\` field. |

If the status code is not 2XX, the request fails. The body contains a String type \`message\` field that describes the specific reason for the failure.

### Request example [#request-example-1]

You can update multiple fields at the same time, such as updating \`transcodeOptions.videoOptions.canvas\` and \`converter.transcodeOptions.videoOptions.layout\`. Refer to the following sample code:

\`\`\`json
{
    "converter": {
        "transcodeOptions": {
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
                        "fillMode": "fill",
                        "placeholderImageUrl": "http://example/host_placeholder.jpg"
                    }
                ]
            }
        }
    },
    "fields": "transcodeOptions.videoOptions.canvas,transcodeOptions.videoOptions.layout"
}
\`\`\`

### Response example [#response-example-1]

\`\`\`json
{
   "converter": {
     "id": "4c014467d647bb87b60b719f6fa57686",
     "createTs": 1591786766,
     "updateTs": 1591788746,
     "state": "running"
   },
   "fields": "id,createTs,updateTs,state"
}
\`\`\`

## Get: Get the streaming status of the Converter [#get-get-the-streaming-status-of-the-converter]

### HTTP request [#http-request-3]

\`\`\`html
GET https://api.agora.io/{region}/v1/projects/{appId}/rtmp-converters/{converterId}
\`\`\`

#### Path parameter [#path-parameter-3]

* \`region\`: (Required) String. The region where the Converter is created in, which must be the same as the \`region\` set when creating Converter.
* \`appId\`: (Required) String type parameter. The **App ID** provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project.
* \`converterId\`: (Required) String type parameter. The **ID** of the Converter.

#### Request header [#request-header-3]

* \`Content-Type\`: \`application/json\`

* \`Authorization\`: The value of this field must refer to the [Authentication instructions](./restful-authentication).

* \`X-Request-ID\`: The UUID (Universal Unique Identifier) that identifies this **request**. Agora server generates a UUID to pass in and returns \`X-Request-ID\` field in the response header.

  > Agora recommends that you assign a value to \`X-Request-ID\`. Agora server returns an \`X-Custom-Request-ID\` field in the response header for trouble shooting.

### HTTP response [#http-response-3]

All possible response status codes. See [Status codes](#status-codes) for details.

#### Response header [#response-header-3]

* \`X-Request-ID\`: The UUID (Universal Unique Identifier) that identifies this **request**. This value is the same as the \`X-Request-ID\` in the header of this request. If there is an error in the request, please print out the value in the log to troubleshoot the problem.

  > If the response status code of this request is not 2XX, this field may be missing from the response header.

* \`X-Resource-ID\`: The UUID (Universal Unique Identifier) that identifies the **ID** of the Converter created in this request.

#### Response body [#response-body-3]

If the status code is 2XX, the request is successful. The field structure is shown in the following figure:

![1646374583131](https://web-cdn.agora.io/docs-files/1646374583131)

Details of these fields are shown in the following table:

| Field                                                      | Type        | Descriptions                                                                                                                                                                               |
| :--------------------------------------------------------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                                                       | String      | The name of the Converter.                                                                                                                                                                 |
| transcodeOptions                                           | JSON Object | The transcoding configuration of the Converter.                                                                                                                                            |
| transcodeOptions.rtcChannel                                | String      | The Agora channel name.                                                                                                                                                                    |
| transcodeOptions.audioOptions                              | JSON Object | The audio transcoding configuration of the Converter. See [audioOptions](./restful-type-definition#audiooptions) for details.                                                              |
| transcodeOptions.videoOptions                              | JSON Object | The video transcoding configuration of the Converter.                                                                                                                                      |
| transcodeOptions.videoOptions.canvas                       | JSON Object | The video canvas. See [canvas](./restful-type-definition#canvas) for details.                                                                                                              |
| transcodeOptions.videoOptions.layout                       | JSON Array  | The content description of the video screen on the canvas. Two elements are supported: RtcStreamView and ImageView.                                                                        |
| transcodeOptions.videoOptions.layout.RtcStreamView element | NA          | The video screen of each user on the canvas. See [RtcStreamView](./restful-type-definition#layout) for details.                                                                            |
| transcodeOptions.videoOptions.layout.ImageView element     | NA          | The video image on the canvas, which can be used as a watermark. See [ImageView](./restful-type-definition#layoutimageview) for details.                                                   |
| transcodeOptions.videoOptions.bitrate                      | Number      | The encoding bitrate (Kbps) of the video.                                                                                                                                                  |
| transcodeOptions.videoOptions.frameRate                    | Number      | The encoding frame rate (fps) of the video.                                                                                                                                                |
| transcodeOptions.videoOptions.codec                        | String      | The video codec type of the output video stream.                                                                                                                                           |
| transcodeOptions.videoOptions.codecProfile                 | String      | The encoding specification of the video.                                                                                                                                                   |
| transcodeOptions.videoOptions.seiOptions                   | JSON Object | The user SEI information carried in the output video stream. See [seiOptions](./restful-type-definition#seioptions) for details.                                                           |
| rtmpUrl                                                    | String      | The address of Media Push.                                                                                                                                                                 |
| idleTimeout                                                | Number      | The maximum time (seconds) that the Converter is idle. Idle means that all users corresponding to the media stream processed by the Converter have left the channel.                       |
| createTs                                                   | Number      | The Unix timestamp(seconds) when the Converter was created.                                                                                                                                |
| state                                                      | String      | The running status of the Converter:- \`connecting\`: Connecting to the Agora streaming server and the CDN server.

- \`running\`: Pushing the stream.

- \`failed\`: Failed to push the stream. |

If the status code is not 2XX, the request fails. The body contains a String type \`message\` field that describes the specific reason for the failed.

\`\`\`json
{
    "reason": "Resource is not found and destroyed."
}
\`\`\`

**Media Push without transcoding**

If the status code is 2XX, the request is successful. The field structure is shown in the following figure:

<img src="https://web-cdn.agora.io/docs-files/1654595914132"  />

Details of these fields are shown in the following table:

| Field name              | Category    | Description                                                                                                                                                                                                                                                                                              |
| :---------------------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                    | String      | The name of the Converter.                                                                                                                                                                                                                                                                               |
| rawOptions              | JSON Object | Media Push configuration for the Converter.                                                                                                                                                                                                                                                              |
| rawOptions.rtcChannel   | String      | The Agora channel name. The channel to which the stream processed by the Converter belongs.                                                                                                                                                                                                              |
| rawOptions.rtcStreamUid | Number      | The UID of the user to which the media stream belongs.                                                                                                                                                                                                                                                   |
| rtmpUrl                 | String      | The CDN streaming address.                                                                                                                                                                                                                                                                               |
| idleTimeOut             | Number      | The maximum time (s) that the Converter is idle. Idle means that all users of the corresponding media streams processed by the Converter have left the channel. When the Converter is in the idle state for longer than \`idleTimeout\`, the Converter is automatically destroyed and the streaming stops. |

### Response example [#response-example-2]

**Custom layout for Media Push with transcoding**

If the status code is 2XX, the request is successful.

\`\`\`json
{
    "name": "show68_vertical",
    "transcodeOptions": {
        "rtcChannel": "show68",
        "audioOptions": {
            "codecProfile": "HE-AAC",
            "sampleRate": 48000,
            "bitrate": 128,
            "audioChannels": 1,
            "rtcStreamUids": [
                201
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
                    "fillMode": "fill",
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
                    },
                    "fillMode": "fit"
                }
            ],
            "codec": "H.264",
            "codecProfile": "High",
            "frameRate": 15,
            "gop": 30,
            "bitrate": 400,
            "seiOptions": {}
        }
    },
    "rtmpUrl": "rtmp://example.agora.io/live/show68",
    "idleTimeout": 300,
    "createTs": 1616946970,
    "updateTs": 1783656785,
    "state": "running"
}
\`\`\`

**Vertical layout for Media Push with transcoding**

If the status code is 2XX, the request is successful.

\`\`\`json
{
    "name": "show68_vertical",
    "transcodeOptions": {
        "rtcChannel": "show68",
        "audioOptions": {
            "codecProfile": "HE-AAC",
            "sampleRate": 48000,
            "bitrate": 128,
            "audioChannels": 1,
            "rtcStreamUids": [
                201
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
                        "height": 640
                    },
                    "fillMode": "fill",
                    "placeholderImageUrl": "http://example.agora.io/host_placeholder.jpg"
                }
            ],
            "codec": "H.264",
            "codecProfile": "high",
            "frameRate": 15,
            "gop": 30,
            "bitrate": 400,
            "layoutType": 1,
            "vertical": {
                "maxResolutionUid": 201,
                "fillMode": "fill",
                "refreshIntervalSec": 4
            },
            "defaultPlaceholderImageUrl": "http://example.agora.io/host_placeholder.jpg",
            "seiOptions": {
                "source": {
                    "metadata": true,
                    "datastream": true,
                    "customized": {
                        "payload": "example"
                    }
                },
                "sink": {
                    "type": 100
                }
            }
        }
    },
    "rtmpUrl": "rtmp://example.agora.io/live/show68",
    "idleTimeout": 300
}
\`\`\`

**Media Push without transcoding**

\`\`\`json
{
    "converter": {
      "name": "wX8210Ce1VWVyGVHyaHA0W",
      "rawOptions": {
        "rtcChannel": "example",
        "rtcStreamUid": XXXX
      },
      "rtmpUrl": "rtmp://vid-218.push.chinanetcenter.broadcastapp.agora.io/live/global",
      "idleTimeout": 120
    }
}
\`\`\`

## List: Query the Converters of all or specified channels under a project [#list-query-the-converters-of-all-or-specified-channels-under-a-project]

### HTTP request [#http-request-4]

* Query all Converters under a project: \`GET https://api.agora.io/v1/projects/{appId}/rtmp-converters\`

* Query the Converter of a specified channel under a project: \`GET https://api.agora.io/v1/projects/{appId}/channels/{cname}/rtmp-converters\`

#### Path parameter [#path-parameter-4]

* \`appId\`: (Required) String. The App ID provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project.

* \`cname\`: (Required) String. The Agora channel name. This is the channel to which the stream processed by the Converter belongs. The maximum length of the string is 64 characters, and the following character sets (89 characters in total) are supported:
  * All lowercase English letters (a-z)
  * All uppercase English letters (A-Z)
  * Numbers 0-9 and the space character
  * "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", " \\{", "}", "|", "\\~", ","

#### Query Parameters [#query-parameters-2]

\`cursor\`: (Optional) String. Cursor for paging query Converters. The value must be greater than or equal to 0.

> * You do not need to set the cursor when you initiate a \`List\` request for the first time. After the request is successful, the list of Converters on the first page return.
> * Each request returns information about a maximum of 500 Converters. If the number of Converters under the project exceeds 500, get the \`cursor\` from the response body, and pass the \`cursor\` in the URL of the next request. Until the value of the \`cursor\` field in the response body is \`0\`, it means that all Converters under the project or the specified channel have been queried.

The HTTPS URL using Query Parameters is as follows:

* Query all Converters under a project: \`GET https://api.agora.io/v1/projects/{appId}/rtmp-converters?cursor={cursor}\`

* Query the Converter of a specified channel under a project: \`GET https://api.agora.io/v1/projects/{appId}/channels/{cname}/rtmp-converters?cursor={cursor}\`

#### Request header [#request-header-4]

* \`Content-Type\`: \`application/json\`

* \`Authorization\`: The value of this field must refer to the [Authentication instructions](./restful-authentication).

* \`X-Request-ID\`: The UUID (Universal Unique Identifier) that identifies this **request**. Agora server generates a UUID to pass in and returns \`X-Request-ID\` field in the response header.

  > Agora recommends that you assign a value to \`X-Request-ID\`. Agora server returns an \`X-Custom-Request-ID\` field in the response header for troubleshooting.

### HTTP response [#http-response-4]

All possible response status codes. See [Status codes](#status-codes) for details.

#### Response header [#response-header-4]

\`X-Request-ID\`: The UUID (Universal Unique Identifier) that identifies this request. This value is the same as the X-Request-ID in the header of this request. If there is an error in the request, print out the value in the log to troubleshoot the problem.

> If the response status code of this request is not 2XX, this field may be missing from the response header.

#### Response body [#response-body-4]

If the status code is 2XX, the request is successful. The field structure is shown in the following figure:

<img src="https://web-cdn.agora.io/docs-files/1645513457718" />

Details for these fields are shown in the following table:

| Field                        | Type        | Descriptions                                                                                                                                                                                                     |
| :--------------------------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`success\`                    | Bool        | The request was successful.                                                                                                                                                                                      |
| \`data\`                       | JSON Object | Returns data details.                                                                                                                                                                                            |
| \`data.total_count\`           | String      | The number of all Converters under the queried project or channel.                                                                                                                                               |
| \`data.cursor\`                | JSON        | Cursor for paging query Converter information list. If the cursor is \`0\`, it means that all Converters under the project or the specified channel have been queried; otherwise, the query needs to be continued. |
| \`data.members.rtcChannel\`    | String      | The Agora channel name. This is the channel to which the stream processed by the Converter belongs.                                                                                                              |
| \`data.members.converterName\` | String      | The name of the Converter.                                                                                                                                                                                       |
| \`data.members.updateTs\`      | Number      | The Unix timestamp(seconds) when the Converter configuration was last updated.                                                                                                                                   |
| \`data.members.appId\`         | String      | The **App ID** provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project.                                                      |
| \`data.members.rtmpUrl\`       | String      | The CDN streaming address.                                                                                                                                                                                       |
| \`data.members.converterId\`   | String      | The **ID** of the Converter. The unique identifier for the Converter.                                                                                                                                            |
| \`data.members.create\`        | Number      | The Unix timestamp(seconds) when the Converter was created.                                                                                                                                                      |
| \`data.members.idleTimeout\`   | Number      | The maximum time (seconds) that the Converter is idle. Idle means that all users corresponding to the media stream processed by the Converter have left the channel.                                             |
| \`data.members.state\`         | String      | The running status of the Converter:- \`connecting\`: Connecting to the Agora streaming server and the CDN server.

- \`running\`: Pushing the stream.

- \`failed\`: Failed to push the stream.                       |

### Response example [#response-example-3]

\`\`\`json
{
    "success": true,
    "data": {
        "total_count": 1,
        "cursor": 0,
        "members": [
            {
                "rtcChannel": "testchannel",
                "status": "200",
                "converterName": "wX8210XXXXWVyGVHyaHA0W",
                "updateTs": "1641267823",
                "appId": "abc123xxxxxxxxxxxxxxxxxxxxxxxxx",
                "rtmpUrl": "rtmp://example/live/areu",
                "ip": "183.131.160.244",
                "converterId": "889B6D4BEC4XXXXE68CCDA978BF21350",
                "create": "1641267818",
                "idleTimeout": "120",
                "state": "running"
            }
        ]
    }
}
\`\`\`

## API call rate limits [#api-call-rate-limits]

The Agora server limits the call rate for the Media Push API by method. When a call rate exceeds its limit, the status code \`429 (Too Many Requests)\` is returned. If you need a higher call rate, please contact technical support.

| API      | Rate limits                                                                                                      |
| :------- | :--------------------------------------------------------------------------------------------------------------- |
| \`Create\` | In a project, the rate limit for the rate of creating a Converter is 50 times per second.                        |
| \`Delete\` | In a project, the rate limit for the converter destruction is 50 times per second.                               |
| \`Update\` | In a project, the rate limit for the rate of updating a specified Converter is 2 times per second.               |
| \`Get\`    | In a project, the rate limit for the rate of getting the status of a specified Converter is 50 times per second. |

<a id="code"></a>

## Status codes [#status-codes]

* If the status code is 2XX, the request is successful.
* If the status code is not 2XX, the request fails. Please troubleshoot the problem based on the content of the \`message\` field in the corresponding response message Body.

| Status codes            | Possible message field content                                                                                                                                                            |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200 OK                  | /                                                                                                                                                                                         |
| 400 Bad Request         | - Invalid parameter: rtmpUrl. Replace it, and retry.

- Invalid parameter: idleTimeout. Replace it, and retry.                                                                            |
| 401 Unauthorized        | Invalid authentication credentials.                                                                                                                                                       |
| 403 Forbidden           | The project lacks permission to use this function. Contact [Agora technical support](mailto\\:support@agora.io).                                                                           |
| 404 Not Found           | Resource cannot be found/has been destroyed.                                                                                                                                              |
| 409 Conflict            | Resource with the same name already exists. Use the existing resource; otherwise, delete it, and create a new resource.                                                                   |
| 429 Too Many Requests   | Request rate limit exceeded.Resource quota limit exceeded.No available resources.                                                                                                         |
| 500 Unknown             | Internal errors. Contact Agora for assistance with troubleshooting.                                                                                                                       |
| 501 Not Implemented     | The method requested has not been implemented.                                                                                                                                            |
| 503 Service Unavailable | The server is temporarily overloading. Retry with a backoff strategy and contact Agora for assistance with troubleshooting.The server is temporarily down. Retry with a backoff strategy. |
| 504 Gateway Timeout     | Gateway timeout. Check whether the resource is created; if not, re-create a new resource.                                                                                                 |

## Consideration [#consideration]

This section summarizes the basic considerations for using the Media Push RESTful API:

* Please make sure that the Agora channel profile is live broadcasting.
* In case of request errors, make sure to print the values of the \`X-Request-ID\` and \`X-Resource-ID\` fields in the response header for troubleshooting.
* As explained in the name description, you should use the name parameter if only one Converter is needed in a channel.
* Set the \`region\` parameter to the region associated with the CDN source, as explained in the \`region\` parameter description.
* If the Converter is automatically destroyed due to a service failure or other reasons, Agora recommends that you create a new Converter.
* If the CDN side's pulling stream is abnormal after creating a Converter, Agora recommends that you delete the Converter and create a new one.
* When updating the same Converter multiple times, ensure that the \`sequence\` value is incremented, as explained in the \`sequence\` parameter description.
* Agora does not support performing both transcoding and non-transcoding live streaming in the same Converter. To use a different streaming mode, create a new Converter and configure it accordingly.
* In non-transcoding mode, the Converter can only forward video streams with RTMP, not transcode video streams. To ensure that CDN audiences can watch the video, use video codec formats that comply with the RTMP standard protocol, such as H.264 or H.265. If the video codec format at the streaming end is VP8, use the Converter's transcoding mode.

For more integration recommendations, see [Integration Best Practices](./integration-best-practices).

## Commonly used video profile [#commonly-used-video-profile]

Agora recommends that you use the default values when setting the video resolution, frame rate, and bitrate of the output transcoded stream. You can also refer to the following table to set the values. If you set a bitrate beyond a reasonable range, the Agora server automatically adjusts the bitrate to stay within a reasonable range.

| Resolution | Frame rate (fps) | Bitrate (Kbps) |
| :--------- | :--------------- | :------------- |
| 160 × 120  | 15               | 130            |
| 120 × 120  | 15               | 100            |
| 320 × 180  | 15               | 280            |
| 180 × 180  | 15               | 200            |
| 240 × 180  | 15               | 240            |
| 320 × 240  | 15               | 400            |
| 240 × 240  | 15               | 280            |
| 424 × 240  | 15               | 440            |
| 640 × 360  | 15               | 800            |
| 360 × 360  | 15               | 520            |
| 640 × 360  | 30               | 1200           |
| 360 × 360  | 30               | 800            |
| 480 × 360  | 15               | 640            |
| 480 × 360  | 30               | 980            |
| 640 × 480  | 15               | 1000           |
| 480 × 480  | 15               | 800            |
| 640 × 480  | 30               | 1500           |
| 480 × 480  | 30               | 1200           |
| 848 × 480  | 15               | 1220           |
| 848 × 480  | 30               | 1860           |
| 640 × 480  | 10               | 800            |
| 1280 × 720 | 15               | 2260           |
| 1280 × 720 | 30               | 3420           |
| 960 × 720  | 15               | 1820           |
| 960 × 720  | 30               | 2760           |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This article contains detailed help for the Media Push RESTful APIs."
  }, {
    heading: "authentication",
    content: "The RESTful APIs require basic HTTP authentication. You need to set the `Authorization` parameter in every HTTP request header. For how to get the value for Authorization, see RESTful API authentication."
  }, {
    heading: "understand-the-tech",
    content: `You can implement different types of Media Push depending on the live streaming use-case requires transcoded or non-transcoded streaming. Transcoding is essentially an encoding and decoding function used to mix multiple audio and video streams into one audio and video stream, which can guarantee the synchronization of multiple hosts' live streams seen by the audience. Therefore, generally speaking, in the case of multiple-hosts live streaming, you need to enable transcoding when pushing streams to CDN; in the case of single-host live streaming, only one media stream is pushed to the CDN, so you do not need to enable transcoding.
Processing the media streams and pushing it to the CDN creates a Media Push task (shown as "Converter" in the rest of the article) in the Agora channel. You can control a Converter through the following methods:`
  }, {
    heading: "understand-the-tech",
    content: "`Create`: Create a Converter for your project, and set up the relevant configuration of transcoded or non-transcoded streaming. The media stream in the channel is processed by the Converter according to this configuration and then pushed to the CDN."
  }, {
    heading: "understand-the-tech",
    content: "`Delete`: Destroy the specified Converter. The user's media stream in this channel will no longer be processed by the Converter or pushed to the CDN after you destroy the Converter."
  }, {
    heading: "understand-the-tech",
    content: "`Update`: Update the specified Converter configuration."
  }, {
    heading: "understand-the-tech",
    content: "`Get`: Get the streaming status of the specified Converter."
  }, {
    heading: "http-request",
    content: "The Agora RESTful API only supports HTTPS with TLS 1.0, 1.1, or 1.2 for encrypted communication. Requests over plain HTTP are not supported and will fail to connect."
  }, {
    heading: "path-parameter",
    content: "`appId`: (Required) String. The **App ID** provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project."
  }, {
    heading: "path-parameter",
    content: "`region`: (Required) String. The region that the Converter was created in. Agora supports the creation of Converters in different regions. Currently, four regions are supported:"
  }, {
    heading: "path-parameter",
    content: "`cn`: China Mainland"
  }, {
    heading: "path-parameter",
    content: "`ap`: Asia, excluding Mainland China"
  }, {
    heading: "path-parameter",
    content: "`na`: North America"
  }, {
    heading: "path-parameter",
    content: "`eu`: Europe"
  }, {
    heading: "path-parameter",
    content: "Please ensure that the region you set is the same region as where your CDN originates is located."
  }, {
    heading: "path-parameter",
    content: "Please make sure the value of `region` is lowercase."
  }, {
    heading: "query-parameters",
    content: "`regionHintIp`: (Optional) String. The IP address of the CDN source station. It must be a valid IPv4 address. This parameter can help ensure the stability of the RTMP stream."
  }, {
    heading: "request-header",
    content: "`Content-Type`: `application/json`"
  }, {
    heading: "request-header",
    content: "`Authorization`: The value of this field must refer to the Authentication instructions."
  }, {
    heading: "request-header",
    content: "`X-Request-ID`: The UUID (Universal Unique Identifier) that identifies this **request**. Agora server generates a UUID to pass in and returns `X-Request-ID` field in the response header."
  }, {
    heading: "request-header",
    content: "> Agora recommends that you assign a value to `X-Request-ID`. Agora server returns an `X-Custom-Request-ID` field in the response header for trouble shooting."
  }, {
    heading: "request-header",
    content: '<a id="createbody"></a>'
  }, {
    heading: "request-body",
    content: "You can implement different types of Media Push depending on the live streaming use-case requires transcoded or non-transcoded streaming. Generally speaking, in the case of multiple-hosts live streaming, you need to enable transcoding when using Media Push RESTful APIs; in the case of single-host live streaming, only one media stream is pushed to the CDN, so you do not need to enable transcoding. For details, see Media Push Features."
  }, {
    heading: "request-body",
    content: "**Media Push with transcoding**"
  }, {
    heading: "request-body",
    content: "The request Body is the `converter` field of JSON Object type. The field structure is shown in the following figure:"
  }, {
    heading: "request-body",
    content: "Details for these fields are shown in the following table:"
  }, {
    heading: "request-body",
    content: "Field"
  }, {
    heading: "request-body",
    content: "Type"
  }, {
    heading: "request-body",
    content: "Descriptions"
  }, {
    heading: "request-body",
    content: "name"
  }, {
    heading: "request-body",
    content: "(Optional) String"
  }, {
    heading: "request-body",
    content: 'The name of the Converter. The maximum length is 64 characters. The supported character set range is:- All lowercase English letters (a-z)\n- All uppercase English letters (A-Z)\n- Numbers 0-9\n- "-", "\\_"The field is empty when no value is passed. Multiple converters with an empty name field can be created under a project. Two converters cannot have the same name, however; you will receive a response status code of `409` (Conflict) if you try to create a converter with the same name as one that already exists under that project.To avoid repeatedly creating multiple Converters and repetitively pushing streams, please use the `name` field to manage the Converters under the specified project. Agora recommends that you combine "channel name (`rtcChannel`)" and "Converter feature" to assign a value to the `name`. For example, `show68_horizontal` and `show68_vertical` would represent converters for the user screen created in channel `show68` with horizontal and vertical layouts, respectively.'
  }, {
    heading: "request-body",
    content: "transcodeOptions"
  }, {
    heading: "request-body",
    content: "(Required) JSON Object"
  }, {
    heading: "request-body",
    content: "The Converter’s transcoding configuration.- When the `audioOptions` and `videoOptions` fields in `converter.transcodeOptions` are not defined, the converter will output a video stream only (without audio).\n- When there is no `rtcStreamUids` field in the `converter.transcodeOptions.audioOptions` field, Agora will mix the audio streams of all users in the channel and output the mixed audio stream through the Converter.\n- When there is an `rtcStreamUids` field in the `converter.transcodeOptions.audioOptions` field, Agora will mix the audio stream of the specified user and output the mixed audio stream through the Converter."
  }, {
    heading: "request-body",
    content: "transcodeOptions.rtcChannel"
  }, {
    heading: "request-body",
    content: "(Required) String"
  }, {
    heading: "request-body",
    content: `The Agora channel name. This is the channel to which the stream processed by the Converter belongs. The maximum length of the string is 64 characters, and the following character sets (89 characters in total) are supported:- All lowercase English letters (a-z)
- All uppercase English letters (A-Z)
- Numbers 0-9
- The space character "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", " \\{", "}", "\\|", "\\~", ","`
  }, {
    heading: "request-body",
    content: "transcodeOptions.audioOptions"
  }, {
    heading: "request-body",
    content: "(Optional) JSON Object"
  }, {
    heading: "request-body",
    content: 'The audio transcoding configuration of the Converter. See audioOptions for details.* There is no need to set `audioOptions` and related fields in a video stream only (without audio) use-case.\n* In an audio & video use-case, `audioOptions` is a required field. If there is no field setting requirement, you can set `audioOptions` to empty, for example: "audioOptions":\\{}.'
  }, {
    heading: "request-body",
    content: "transcodeOptions.videoOptions"
  }, {
    heading: "request-body",
    content: "(Optional) JSON Object"
  }, {
    heading: "request-body",
    content: "The video transcoding configuration of the Converter.* There is no need to set `videoOptions` and related fields in an audio stream only (without video) use-case.\n* In an audio & video use-case, `videoOptions` is a required field and cannot be empty."
  }, {
    heading: "request-body",
    content: "transcodeOptions.videoOptions.canvas"
  }, {
    heading: "request-body",
    content: "(Required) JSON Object"
  }, {
    heading: "request-body",
    content: "The video canvas. See canvas for details."
  }, {
    heading: "request-body",
    content: "transcodeOptions.videoOptions.layoutType"
  }, {
    heading: "request-body",
    content: "(Optional) Number"
  }, {
    heading: "request-body",
    content: "The screen layout type of the output video:- `0` or empty: (Default) Custom layout, which is set through the`transcodeOptions.videoOptions.layout` parameter.\n- `1`: Vertical layout. Specify one user to display in the large window on the left side of the screen, while the other users are vertically arranged in the small windows on the right side of the screen. For details, see Set Vertical Layout."
  }, {
    heading: "request-body",
    content: "transcodeOptions.videoOptions.layout"
  }, {
    heading: "request-body",
    content: "(Optional) JSON Array"
  }, {
    heading: "request-body",
    content: "The content description of the video screen on the canvas. Two elements are supported: RtcStreamView and ImageView\\.If `layoutType` is 0 or empty, this field is required."
  }, {
    heading: "request-body",
    content: "transcodeOptions.videoOptions.layout.RtcStreamView element"
  }, {
    heading: "request-body",
    content: "None"
  }, {
    heading: "request-body",
    content: "The video screen of each user on the canvas. See RtcStreamView for details."
  }, {
    heading: "request-body",
    content: "transcodeOptions.videoOptions.layout.ImageView element"
  }, {
    heading: "request-body",
    content: "None"
  }, {
    heading: "request-body",
    content: "The video image on the canvas, which can be used as a watermark. See ImageView for details."
  }, {
    heading: "request-body",
    content: "transcodeOptions.videoOptions.vertical"
  }, {
    heading: "request-body",
    content: "(Optional) JSON Object"
  }, {
    heading: "request-body",
    content: "Vertical layout. This parameter must be set when `layoutType` is 1. See vertical for details."
  }, {
    heading: "request-body",
    content: "transcodeOptions.videoOptions.defaultPlaceholderImageUrl"
  }, {
    heading: "request-body",
    content: "(Optional) String"
  }, {
    heading: "request-body",
    content: `The default user screen background image URL address. Supports images in JPG, PNG and GIF formats. This controls what happens when a user in a channel stops publishing their video stream:- If this field is set, the user's window switches to this background image.
- If this field is not set, the user's window initially displays the last frame of the user's video. Once the layout refreshes, the window displays the background color of the canvas.`
  }, {
    heading: "request-body",
    content: "transcodeOptions.videoOptions.bitrate"
  }, {
    heading: "request-body",
    content: "(Required) Number"
  }, {
    heading: "request-body",
    content: "The encoding bitrate (Kbps) of the video. The value range is \\[1,10000]."
  }, {
    heading: "request-body",
    content: "transcodeOptions.videoOptions.gop"
  }, {
    heading: "request-body",
    content: "(Optional) Number"
  }, {
    heading: "request-body",
    content: "The GOP of the video. The default value is the value of `frameRate` \\* 2."
  }, {
    heading: "request-body",
    content: "transcodeOptions.videoOptions.frameRate"
  }, {
    heading: "request-body",
    content: "(Optional) Number"
  }, {
    heading: "request-body",
    content: "The encoding frame rate (fps) of the video. The value range is \\[1,30]. The default value is 15."
  }, {
    heading: "request-body",
    content: "transcodeOptions.videoOptions.codec"
  }, {
    heading: "request-body",
    content: "(Optional) String"
  }, {
    heading: "request-body",
    content: `The video codec type of the output video stream. The following values are supported:- (Default) H.264
- H.265`
  }, {
    heading: "request-body",
    content: "transcodeOptions.videoOptions.codecProfile"
  }, {
    heading: "request-body",
    content: "(Optional) String"
  }, {
    heading: "request-body",
    content: "The encoding specification of the video. The following values are supported:* `high` (Default): High video codec profile, generally used for high-resolution broadcasts or television.\n* `baseline`: Baseline video codec profile, generally used for video calls on mobile phones.\n* `main`: Main video codec profile, generally used for mainstream electronics, such as MP4 players, portable video players, PSPs, and iPads.If `codec` is set to `H.256`, `codecProfile` is automatically set to `main`."
  }, {
    heading: "request-body",
    content: "transcodeOptions.videoOptions.seiOptions"
  }, {
    heading: "request-body",
    content: "JSON Object"
  }, {
    heading: "request-body",
    content: "Sets the user SEI information carried in the output video stream. The default is empty. If it is not set, it means that no SEI information is output. See seiOptions for details."
  }, {
    heading: "request-body",
    content: "rtmpUrl"
  }, {
    heading: "request-body",
    content: "(Required) String"
  }, {
    heading: "request-body",
    content: "The address of Media Push. It must be a valid RTMP address with a length of 1,024 characters or less."
  }, {
    heading: "request-body",
    content: "idleTimeOut"
  }, {
    heading: "request-body",
    content: "(Optional) Number"
  }, {
    heading: "request-body",
    content: "The maximum time (seconds) that the Converter is idle. Idle means that all users corresponding to the media stream processed by the Converter have left the channel. After the idle state exceeds the set `idleTimeOut`, the Converter will be destroyed automatically."
  }, {
    heading: "request-body",
    content: "jitterBufferSizeMs"
  }, {
    heading: "request-body",
    content: "(Optional) Int"
  }, {
    heading: "request-body",
    content: "Network delay (ms) from the receiver to the jitter buffer. The default value is 1000. The value range is \\[0, 1000].- The Media Push service rounds up to the nearest 100 multiples with the value you set.\n\n- If the value is set to 0, jitter buffer delay does not take effect. Agora recommends that you do not set the `jitterBufferSizeMs` to 0 because poor network may cause low audio quality."
  }, {
    heading: "request-body",
    content: "**Media Push without transcoding**"
  }, {
    heading: "request-body",
    content: "The request body is the `converter` field of JSON Object type. The field structure is shown in the following figure:"
  }, {
    heading: "request-body",
    content: "Details for these fields are shown in the following table:"
  }, {
    heading: "request-body",
    content: "Field"
  }, {
    heading: "request-body",
    content: "Category"
  }, {
    heading: "request-body",
    content: "Description"
  }, {
    heading: "request-body",
    content: "name"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "The name of the Converter."
  }, {
    heading: "request-body",
    content: "rawOptions"
  }, {
    heading: "request-body",
    content: "(Required)JSON Object"
  }, {
    heading: "request-body",
    content: "Media Push configuration for the Converter."
  }, {
    heading: "request-body",
    content: "rawOptions.rtcChannel"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "The Agora channel name. The channel to which the stream processed by the Converter belongs."
  }, {
    heading: "request-body",
    content: "rawOptions.rtcStreamUid"
  }, {
    heading: "request-body",
    content: "Number"
  }, {
    heading: "request-body",
    content: "The UID of the user to which the media stream belongs."
  }, {
    heading: "request-body",
    content: "rtmpUrl"
  }, {
    heading: "request-body",
    content: "(Required)String"
  }, {
    heading: "request-body",
    content: "The CDN streaming address."
  }, {
    heading: "request-body",
    content: "idleTimeOut"
  }, {
    heading: "request-body",
    content: "Number"
  }, {
    heading: "request-body",
    content: "The maximum time (s) that the Converter is idle. Idle means that all users of the corresponding media streams processed by the Converter have left the channel. When the Converter is in the idle state for longer than `idleTimeout`, the Converter is automatically destroyed and the streaming stops."
  }, {
    heading: "request-body",
    content: "jitterBufferSizeMs"
  }, {
    heading: "request-body",
    content: "(Optional) Int"
  }, {
    heading: "request-body",
    content: "Network delay (ms) from the receiver to the jitter buffer. The default value is 1000. The value range is \\[0, 1000].- The Media Push service rounds up to the nearest 100 multiples with the value you set.\n\n- If the value is set to 0, jitter buffer delay does not take effect. Agora recommends that you do not set the `jitterBufferSizeMs` to 0 because poor network may cause low audio quality."
  }, {
    heading: "http-response",
    content: "All possible response status codes. See Status codes for details."
  }, {
    heading: "response-header",
    content: "`X-Request-ID`: The UUID (Universal Unique Identifier) that identifies this **request**. This value is the same as the `X-Request-ID` in the header of this request. If there is an error in the request, please print out the value in the log to troubleshoot the problem."
  }, {
    heading: "response-header",
    content: "> If the response status code of this request is not 2XX, this field may be missing from the response header."
  }, {
    heading: "response-header",
    content: "`X-Resource-ID`: The UUID (Universal Unique Identifier) that identifies the **ID** of the Converter updated in this request."
  }, {
    heading: "response-body",
    content: "If the status code is 2XX, the request is successful. The field structure is shown in the following figure:"
  }, {
    heading: "response-body",
    content: "Details for these fields are shown in the following table:"
  }, {
    heading: "response-body",
    content: "Field"
  }, {
    heading: "response-body",
    content: "Type"
  }, {
    heading: "response-body",
    content: "Descriptions"
  }, {
    heading: "response-body",
    content: "`id`"
  }, {
    heading: "response-body",
    content: "String"
  }, {
    heading: "response-body",
    content: "The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter."
  }, {
    heading: "response-body",
    content: "`createTs`"
  }, {
    heading: "response-body",
    content: "Number"
  }, {
    heading: "response-body",
    content: "The Unix timestamp(seconds) when the Converter was created."
  }, {
    heading: "response-body",
    content: "`updateTs`"
  }, {
    heading: "response-body",
    content: "Number"
  }, {
    heading: "response-body",
    content: "The Unix timestamp(seconds) when the Converter configuration was last updated."
  }, {
    heading: "response-body",
    content: "`state`"
  }, {
    heading: "response-body",
    content: "String"
  }, {
    heading: "response-body",
    content: "The running status of the Converter:- `connecting`: Connecting to the Agora streaming server and the CDN server.\n\n- `running`: The Agora streaming server is pushing the streams.\n\n- `failed`: The Media Push fails."
  }, {
    heading: "response-body",
    content: "`fields`"
  }, {
    heading: "response-body",
    content: "String"
  }, {
    heading: "response-body",
    content: "The field mask of the converter JSON Object. See Google protobuf FieldMask Document for details. This is used to describe the set of fields contained in the returned `converter`. In this example, `fields` specifies that the Agora server returns a subset of the `id`, `createTs`, `updateTs` and `state` fields in the `converter` field."
  }, {
    heading: "response-body",
    content: "If the status code is not 2XX, the request fails. The body contains a String type `message` field that describes the specific reason for the failure."
  }, {
    heading: "request-example",
    content: "**Custom layout for Media Push with transcoding**"
  }, {
    heading: "request-example",
    content: "This example shows that the video of the two specified users in the `show68` channel are mixed with a custom layout and pushed to the CDN. The audio of all users in the channel is also mixed."
  }, {
    heading: "request-example",
    content: "The sample code for setting SEI information (`seiOptions`) is as follows:"
  }, {
    heading: "request-example",
    content: "**Vertical layout for Media Push with transcoding**\nThis example shows that the video of the two specified users in the `show68` channel are mixed with a vertical layout and pushed to the CDN. The audio of two specified users in the channel are mixed."
  }, {
    heading: "request-example",
    content: "**Media Push without transcoding**"
  }, {
    heading: "request-example",
    content: "This example shows that the media stream of the specified user in the `show68` channel is pushed to the CDN."
  }, {
    heading: "path-parameter-1",
    content: "`region`: (Required) String. The region where the Converter is created in, which must be the same as the `region` set when creating Converter."
  }, {
    heading: "path-parameter-1",
    content: "`appId`: (Required) String type parameter. The **App ID** provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project."
  }, {
    heading: "path-parameter-1",
    content: "`converterId`: (Required) String type parameter. The **ID** of the Converter."
  }, {
    heading: "request-header-1",
    content: "`Authorization`: The value of this field must refer to the Authentication instructions."
  }, {
    heading: "request-header-1",
    content: "`X-Request-ID`: The UUID (Universal Unique Identifier) that identifies this **request**. Agora server generates a UUID to pass in and returns `X-Request-ID` field in the response header."
  }, {
    heading: "request-header-1",
    content: "> Agora recommends that you assign a value to `X-Request-ID`. Agora server returns an `X-Custom-Request-ID` field in the response header for trouble shooting."
  }, {
    heading: "http-response-1",
    content: "All possible response status codes. See Status codes for details."
  }, {
    heading: "response-header-1",
    content: "`X-Request-ID`: The UUID (Universal Unique Identifier) that identifies this **request**. This value is the same as the `X-Request-ID` in the header of this request. If there is an error in the request, please print out the value in the log to troubleshoot the problem."
  }, {
    heading: "response-header-1",
    content: "> If the response status code of this request is not 2XX, this field may be missing from the response header."
  }, {
    heading: "response-header-1",
    content: "`X-Resource-ID`: The UUID (Universal Unique Identifier) that identifies the **ID** of the Converter created in this request."
  }, {
    heading: "response-body-1",
    content: "If the status code is 2XX, the request is successful. The body is empty."
  }, {
    heading: "response-body-1",
    content: "If the status code is not 2XX, the request fails. The body contains a String type `message` field that describes the specific reason for the failure."
  }, {
    heading: "path-parameter-2",
    content: "`region`: (Required) String. The region where the Converter is created in, which must be the same as the `region` set when creating Converter."
  }, {
    heading: "path-parameter-2",
    content: "`appId`: (Required) String type parameter. The **App ID** provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project."
  }, {
    heading: "path-parameter-2",
    content: "`converterId`: (Required) String type parameter. The **ID** of the Converter."
  }, {
    heading: "query-parameters-1",
    content: "`sequence`: (Required) Number type parameter. The serial number of the `Update` request. The value must be greater than or equal to 0. Please make sure that the serial number of the next `Update` request is greater than the serial number of the previous `Update` request. The serial number can ensure that the Agora server updates the Converter according to the latest configuration you specify."
  }, {
    heading: "query-parameters-1",
    content: "> Agora recommends that you fill in `sequence` sequentially, using 0 when calling Update for the first time, 1 for the second time, 2 for the third time, and so on. The Agora server will update the Converter according to the latest Update request (the largest serial number)."
  }, {
    heading: "request-header-2",
    content: "`Content-Type`: `application/json`"
  }, {
    heading: "request-header-2",
    content: "`Authorization`: The value of this field must refer to the Authentication instructions."
  }, {
    heading: "request-header-2",
    content: "`X-Request-ID`: The UUID (Universal Unique Identifier) that identifies this **request**. Agora server generates a UUID to pass in and returns `X-Request-ID` field in the response header."
  }, {
    heading: "request-header-2",
    content: "> Agora recommends that you assign a value to `X-Request-ID`. Agora server returns an `X-Custom-Request-ID` field in the response header for trouble shooting."
  }, {
    heading: "request-body-1",
    content: "For details about the fields, see the Create request body."
  }, {
    heading: "request-body-1",
    content: "> `Update` method does not support updating the following configurations of a Converter:\n>\n> * `name`\n> * `idleTimeOut`\n> * `transcodeOptions.rtcChannel`\n> * `transcodeOptions.audioOptions`\n> * `transcodeOptions.audioOptions.codecProfile`\n> * `transcodeOptions.audioOptions.sampleRate`\n> * `transcodeOptions.audioOptions.bitrate`\n> * `transcodeOptions.audioOptions.audioChannels`\n> * `transcodeOptions.videoOptions.codec`\n> * `transcodeOptions.videoOptions.codecProfile`"
  }, {
    heading: "request-body-1",
    content: "After calling the `Create` method to create a Converter that outputs video stream only or audio stream only, you cannot update it to a Converter that outputs audio stream only or video stream only through the `Update` method."
  }, {
    heading: "request-body-1",
    content: "When using Media Push with vertical layout (`layoutType` is `1`), you can only update the `rtmpUrl` field."
  }, {
    heading: "http-response-2",
    content: "All possible response status codes. See Status codes for details."
  }, {
    heading: "response-header-2",
    content: "`X-Request-ID`:The UUID (Universal Unique Identifier) that identifies this **request**. This value is the same as the `X-Request-ID` in the header of this request. If there is an error in the request, please print out the value in the log to troubleshoot the problem."
  }, {
    heading: "response-header-2",
    content: "> If the response status code of this request is not 2XX, this field may be missing from the response header."
  }, {
    heading: "response-header-2",
    content: "`X-Resource-ID`: The UUID (Universal Unique Identifier) that identifies the **ID** of the Converter updated in this request."
  }, {
    heading: "response-body-2",
    content: "If the status code is 2XX, the request is successful. The field structure is shown in the following figure:"
  }, {
    heading: "response-body-2",
    content: "Details of these fields are shown in the following table:"
  }, {
    heading: "response-body-2",
    content: "Field"
  }, {
    heading: "response-body-2",
    content: "Type"
  }, {
    heading: "response-body-2",
    content: "Descriptions"
  }, {
    heading: "response-body-2",
    content: "`id`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: "The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter."
  }, {
    heading: "response-body-2",
    content: "`createTs`"
  }, {
    heading: "response-body-2",
    content: "Number"
  }, {
    heading: "response-body-2",
    content: "The Unix timestamp(seconds) when the Converter was created."
  }, {
    heading: "response-body-2",
    content: "`updateTs`"
  }, {
    heading: "response-body-2",
    content: "Number"
  }, {
    heading: "response-body-2",
    content: "The Unix timestamp(seconds) when the Converter configuration was last updated."
  }, {
    heading: "response-body-2",
    content: "`state`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: "The running status of the Converter:- `connecting`: Connecting to the Agora streaming server and the CDN server.\n\n- `running`: The Agora streaming server is pushing the streams.\n\n- `failed`: The Media Push Fails."
  }, {
    heading: "response-body-2",
    content: "`fields`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: "The field mask of the converter JSON Object. See Google protobuf FieldMask Document for details. This is used to describe the set of fields contained in the returned `converter`. <br/>In this example, `fields` specifies that the Agora server returns a subset of the `id`, `createTs`, `updateTs`, and `state` fields in the `converter` field."
  }, {
    heading: "response-body-2",
    content: "If the status code is not 2XX, the request fails. The body contains a String type `message` field that describes the specific reason for the failure."
  }, {
    heading: "request-example-1",
    content: "You can update multiple fields at the same time, such as updating `transcodeOptions.videoOptions.canvas` and `converter.transcodeOptions.videoOptions.layout`. Refer to the following sample code:"
  }, {
    heading: "path-parameter-3",
    content: "`region`: (Required) String. The region where the Converter is created in, which must be the same as the `region` set when creating Converter."
  }, {
    heading: "path-parameter-3",
    content: "`appId`: (Required) String type parameter. The **App ID** provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project."
  }, {
    heading: "path-parameter-3",
    content: "`converterId`: (Required) String type parameter. The **ID** of the Converter."
  }, {
    heading: "request-header-3",
    content: "`Content-Type`: `application/json`"
  }, {
    heading: "request-header-3",
    content: "`Authorization`: The value of this field must refer to the Authentication instructions."
  }, {
    heading: "request-header-3",
    content: "`X-Request-ID`: The UUID (Universal Unique Identifier) that identifies this **request**. Agora server generates a UUID to pass in and returns `X-Request-ID` field in the response header."
  }, {
    heading: "request-header-3",
    content: "> Agora recommends that you assign a value to `X-Request-ID`. Agora server returns an `X-Custom-Request-ID` field in the response header for trouble shooting."
  }, {
    heading: "http-response-3",
    content: "All possible response status codes. See Status codes for details."
  }, {
    heading: "response-header-3",
    content: "`X-Request-ID`: The UUID (Universal Unique Identifier) that identifies this **request**. This value is the same as the `X-Request-ID` in the header of this request. If there is an error in the request, please print out the value in the log to troubleshoot the problem."
  }, {
    heading: "response-header-3",
    content: "> If the response status code of this request is not 2XX, this field may be missing from the response header."
  }, {
    heading: "response-header-3",
    content: "`X-Resource-ID`: The UUID (Universal Unique Identifier) that identifies the **ID** of the Converter created in this request."
  }, {
    heading: "response-body-3",
    content: "If the status code is 2XX, the request is successful. The field structure is shown in the following figure:"
  }, {
    heading: "response-body-3",
    content: "Details of these fields are shown in the following table:"
  }, {
    heading: "response-body-3",
    content: "Field"
  }, {
    heading: "response-body-3",
    content: "Type"
  }, {
    heading: "response-body-3",
    content: "Descriptions"
  }, {
    heading: "response-body-3",
    content: "name"
  }, {
    heading: "response-body-3",
    content: "String"
  }, {
    heading: "response-body-3",
    content: "The name of the Converter."
  }, {
    heading: "response-body-3",
    content: "transcodeOptions"
  }, {
    heading: "response-body-3",
    content: "JSON Object"
  }, {
    heading: "response-body-3",
    content: "The transcoding configuration of the Converter."
  }, {
    heading: "response-body-3",
    content: "transcodeOptions.rtcChannel"
  }, {
    heading: "response-body-3",
    content: "String"
  }, {
    heading: "response-body-3",
    content: "The Agora channel name."
  }, {
    heading: "response-body-3",
    content: "transcodeOptions.audioOptions"
  }, {
    heading: "response-body-3",
    content: "JSON Object"
  }, {
    heading: "response-body-3",
    content: "The audio transcoding configuration of the Converter. See audioOptions for details."
  }, {
    heading: "response-body-3",
    content: "transcodeOptions.videoOptions"
  }, {
    heading: "response-body-3",
    content: "JSON Object"
  }, {
    heading: "response-body-3",
    content: "The video transcoding configuration of the Converter."
  }, {
    heading: "response-body-3",
    content: "transcodeOptions.videoOptions.canvas"
  }, {
    heading: "response-body-3",
    content: "JSON Object"
  }, {
    heading: "response-body-3",
    content: "The video canvas. See canvas for details."
  }, {
    heading: "response-body-3",
    content: "transcodeOptions.videoOptions.layout"
  }, {
    heading: "response-body-3",
    content: "JSON Array"
  }, {
    heading: "response-body-3",
    content: "The content description of the video screen on the canvas. Two elements are supported: RtcStreamView and ImageView."
  }, {
    heading: "response-body-3",
    content: "transcodeOptions.videoOptions.layout.RtcStreamView element"
  }, {
    heading: "response-body-3",
    content: "NA"
  }, {
    heading: "response-body-3",
    content: "The video screen of each user on the canvas. See RtcStreamView for details."
  }, {
    heading: "response-body-3",
    content: "transcodeOptions.videoOptions.layout.ImageView element"
  }, {
    heading: "response-body-3",
    content: "NA"
  }, {
    heading: "response-body-3",
    content: "The video image on the canvas, which can be used as a watermark. See ImageView for details."
  }, {
    heading: "response-body-3",
    content: "transcodeOptions.videoOptions.bitrate"
  }, {
    heading: "response-body-3",
    content: "Number"
  }, {
    heading: "response-body-3",
    content: "The encoding bitrate (Kbps) of the video."
  }, {
    heading: "response-body-3",
    content: "transcodeOptions.videoOptions.frameRate"
  }, {
    heading: "response-body-3",
    content: "Number"
  }, {
    heading: "response-body-3",
    content: "The encoding frame rate (fps) of the video."
  }, {
    heading: "response-body-3",
    content: "transcodeOptions.videoOptions.codec"
  }, {
    heading: "response-body-3",
    content: "String"
  }, {
    heading: "response-body-3",
    content: "The video codec type of the output video stream."
  }, {
    heading: "response-body-3",
    content: "transcodeOptions.videoOptions.codecProfile"
  }, {
    heading: "response-body-3",
    content: "String"
  }, {
    heading: "response-body-3",
    content: "The encoding specification of the video."
  }, {
    heading: "response-body-3",
    content: "transcodeOptions.videoOptions.seiOptions"
  }, {
    heading: "response-body-3",
    content: "JSON Object"
  }, {
    heading: "response-body-3",
    content: "The user SEI information carried in the output video stream. See seiOptions for details."
  }, {
    heading: "response-body-3",
    content: "rtmpUrl"
  }, {
    heading: "response-body-3",
    content: "String"
  }, {
    heading: "response-body-3",
    content: "The address of Media Push."
  }, {
    heading: "response-body-3",
    content: "idleTimeout"
  }, {
    heading: "response-body-3",
    content: "Number"
  }, {
    heading: "response-body-3",
    content: "The maximum time (seconds) that the Converter is idle. Idle means that all users corresponding to the media stream processed by the Converter have left the channel."
  }, {
    heading: "response-body-3",
    content: "createTs"
  }, {
    heading: "response-body-3",
    content: "Number"
  }, {
    heading: "response-body-3",
    content: "The Unix timestamp(seconds) when the Converter was created."
  }, {
    heading: "response-body-3",
    content: "state"
  }, {
    heading: "response-body-3",
    content: "String"
  }, {
    heading: "response-body-3",
    content: "The running status of the Converter:- `connecting`: Connecting to the Agora streaming server and the CDN server.\n\n- `running`: Pushing the stream.\n\n- `failed`: Failed to push the stream."
  }, {
    heading: "response-body-3",
    content: "If the status code is not 2XX, the request fails. The body contains a String type `message` field that describes the specific reason for the failed."
  }, {
    heading: "response-body-3",
    content: "**Media Push without transcoding**"
  }, {
    heading: "response-body-3",
    content: "If the status code is 2XX, the request is successful. The field structure is shown in the following figure:"
  }, {
    heading: "response-body-3",
    content: "Details of these fields are shown in the following table:"
  }, {
    heading: "response-body-3",
    content: "Field name"
  }, {
    heading: "response-body-3",
    content: "Category"
  }, {
    heading: "response-body-3",
    content: "Description"
  }, {
    heading: "response-body-3",
    content: "name"
  }, {
    heading: "response-body-3",
    content: "String"
  }, {
    heading: "response-body-3",
    content: "The name of the Converter."
  }, {
    heading: "response-body-3",
    content: "rawOptions"
  }, {
    heading: "response-body-3",
    content: "JSON Object"
  }, {
    heading: "response-body-3",
    content: "Media Push configuration for the Converter."
  }, {
    heading: "response-body-3",
    content: "rawOptions.rtcChannel"
  }, {
    heading: "response-body-3",
    content: "String"
  }, {
    heading: "response-body-3",
    content: "The Agora channel name. The channel to which the stream processed by the Converter belongs."
  }, {
    heading: "response-body-3",
    content: "rawOptions.rtcStreamUid"
  }, {
    heading: "response-body-3",
    content: "Number"
  }, {
    heading: "response-body-3",
    content: "The UID of the user to which the media stream belongs."
  }, {
    heading: "response-body-3",
    content: "rtmpUrl"
  }, {
    heading: "response-body-3",
    content: "String"
  }, {
    heading: "response-body-3",
    content: "The CDN streaming address."
  }, {
    heading: "response-body-3",
    content: "idleTimeOut"
  }, {
    heading: "response-body-3",
    content: "Number"
  }, {
    heading: "response-body-3",
    content: "The maximum time (s) that the Converter is idle. Idle means that all users of the corresponding media streams processed by the Converter have left the channel. When the Converter is in the idle state for longer than `idleTimeout`, the Converter is automatically destroyed and the streaming stops."
  }, {
    heading: "response-example-2",
    content: "**Custom layout for Media Push with transcoding**"
  }, {
    heading: "response-example-2",
    content: "If the status code is 2XX, the request is successful."
  }, {
    heading: "response-example-2",
    content: "**Vertical layout for Media Push with transcoding**"
  }, {
    heading: "response-example-2",
    content: "If the status code is 2XX, the request is successful."
  }, {
    heading: "response-example-2",
    content: "**Media Push without transcoding**"
  }, {
    heading: "http-request-4",
    content: "Query all Converters under a project: `GET https://api.agora.io/v1/projects/{appId}/rtmp-converters`"
  }, {
    heading: "http-request-4",
    content: "Query the Converter of a specified channel under a project: `GET https://api.agora.io/v1/projects/{appId}/channels/{cname}/rtmp-converters`"
  }, {
    heading: "path-parameter-4",
    content: "`appId`: (Required) String. The App ID provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project."
  }, {
    heading: "path-parameter-4",
    content: "`cname`: (Required) String. The Agora channel name. This is the channel to which the stream processed by the Converter belongs. The maximum length of the string is 64 characters, and the following character sets (89 characters in total) are supported:"
  }, {
    heading: "path-parameter-4",
    content: "All lowercase English letters (a-z)"
  }, {
    heading: "path-parameter-4",
    content: "All uppercase English letters (A-Z)"
  }, {
    heading: "path-parameter-4",
    content: "Numbers 0-9 and the space character"
  }, {
    heading: "path-parameter-4",
    content: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", " \\{", "}", "|", "\\~", ","'
  }, {
    heading: "query-parameters-2",
    content: "`cursor`: (Optional) String. Cursor for paging query Converters. The value must be greater than or equal to 0."
  }, {
    heading: "query-parameters-2",
    content: "> * You do not need to set the cursor when you initiate a `List` request for the first time. After the request is successful, the list of Converters on the first page return.\n> * Each request returns information about a maximum of 500 Converters. If the number of Converters under the project exceeds 500, get the `cursor` from the response body, and pass the `cursor` in the URL of the next request. Until the value of the `cursor` field in the response body is `0`, it means that all Converters under the project or the specified channel have been queried."
  }, {
    heading: "query-parameters-2",
    content: "The HTTPS URL using Query Parameters is as follows:"
  }, {
    heading: "query-parameters-2",
    content: "Query all Converters under a project: `GET https://api.agora.io/v1/projects/{appId}/rtmp-converters?cursor={cursor}`"
  }, {
    heading: "query-parameters-2",
    content: "Query the Converter of a specified channel under a project: `GET https://api.agora.io/v1/projects/{appId}/channels/{cname}/rtmp-converters?cursor={cursor}`"
  }, {
    heading: "request-header-4",
    content: "`Content-Type`: `application/json`"
  }, {
    heading: "request-header-4",
    content: "`Authorization`: The value of this field must refer to the Authentication instructions."
  }, {
    heading: "request-header-4",
    content: "`X-Request-ID`: The UUID (Universal Unique Identifier) that identifies this **request**. Agora server generates a UUID to pass in and returns `X-Request-ID` field in the response header."
  }, {
    heading: "request-header-4",
    content: "> Agora recommends that you assign a value to `X-Request-ID`. Agora server returns an `X-Custom-Request-ID` field in the response header for troubleshooting."
  }, {
    heading: "http-response-4",
    content: "All possible response status codes. See Status codes for details."
  }, {
    heading: "response-header-4",
    content: "`X-Request-ID`: The UUID (Universal Unique Identifier) that identifies this request. This value is the same as the X-Request-ID in the header of this request. If there is an error in the request, print out the value in the log to troubleshoot the problem."
  }, {
    heading: "response-header-4",
    content: "> If the response status code of this request is not 2XX, this field may be missing from the response header."
  }, {
    heading: "response-body-4",
    content: "If the status code is 2XX, the request is successful. The field structure is shown in the following figure:"
  }, {
    heading: "response-body-4",
    content: "Details for these fields are shown in the following table:"
  }, {
    heading: "response-body-4",
    content: "Field"
  }, {
    heading: "response-body-4",
    content: "Type"
  }, {
    heading: "response-body-4",
    content: "Descriptions"
  }, {
    heading: "response-body-4",
    content: "`success`"
  }, {
    heading: "response-body-4",
    content: "Bool"
  }, {
    heading: "response-body-4",
    content: "The request was successful."
  }, {
    heading: "response-body-4",
    content: "`data`"
  }, {
    heading: "response-body-4",
    content: "JSON Object"
  }, {
    heading: "response-body-4",
    content: "Returns data details."
  }, {
    heading: "response-body-4",
    content: "`data.total_count`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The number of all Converters under the queried project or channel."
  }, {
    heading: "response-body-4",
    content: "`data.cursor`"
  }, {
    heading: "response-body-4",
    content: "JSON"
  }, {
    heading: "response-body-4",
    content: "Cursor for paging query Converter information list. If the cursor is `0`, it means that all Converters under the project or the specified channel have been queried; otherwise, the query needs to be continued."
  }, {
    heading: "response-body-4",
    content: "`data.members.rtcChannel`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The Agora channel name. This is the channel to which the stream processed by the Converter belongs."
  }, {
    heading: "response-body-4",
    content: "`data.members.converterName`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The name of the Converter."
  }, {
    heading: "response-body-4",
    content: "`data.members.updateTs`"
  }, {
    heading: "response-body-4",
    content: "Number"
  }, {
    heading: "response-body-4",
    content: "The Unix timestamp(seconds) when the Converter configuration was last updated."
  }, {
    heading: "response-body-4",
    content: "`data.members.appId`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The **App ID** provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project."
  }, {
    heading: "response-body-4",
    content: "`data.members.rtmpUrl`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The CDN streaming address."
  }, {
    heading: "response-body-4",
    content: "`data.members.converterId`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The **ID** of the Converter. The unique identifier for the Converter."
  }, {
    heading: "response-body-4",
    content: "`data.members.create`"
  }, {
    heading: "response-body-4",
    content: "Number"
  }, {
    heading: "response-body-4",
    content: "The Unix timestamp(seconds) when the Converter was created."
  }, {
    heading: "response-body-4",
    content: "`data.members.idleTimeout`"
  }, {
    heading: "response-body-4",
    content: "Number"
  }, {
    heading: "response-body-4",
    content: "The maximum time (seconds) that the Converter is idle. Idle means that all users corresponding to the media stream processed by the Converter have left the channel."
  }, {
    heading: "response-body-4",
    content: "`data.members.state`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The running status of the Converter:- `connecting`: Connecting to the Agora streaming server and the CDN server.\n\n- `running`: Pushing the stream.\n\n- `failed`: Failed to push the stream."
  }, {
    heading: "api-call-rate-limits",
    content: "The Agora server limits the call rate for the Media Push API by method. When a call rate exceeds its limit, the status code `429 (Too Many Requests)` is returned. If you need a higher call rate, please contact technical support."
  }, {
    heading: "api-call-rate-limits",
    content: "API"
  }, {
    heading: "api-call-rate-limits",
    content: "Rate limits"
  }, {
    heading: "api-call-rate-limits",
    content: "`Create`"
  }, {
    heading: "api-call-rate-limits",
    content: "In a project, the rate limit for the rate of creating a Converter is 50 times per second."
  }, {
    heading: "api-call-rate-limits",
    content: "`Delete`"
  }, {
    heading: "api-call-rate-limits",
    content: "In a project, the rate limit for the converter destruction is 50 times per second."
  }, {
    heading: "api-call-rate-limits",
    content: "`Update`"
  }, {
    heading: "api-call-rate-limits",
    content: "In a project, the rate limit for the rate of updating a specified Converter is 2 times per second."
  }, {
    heading: "api-call-rate-limits",
    content: "`Get`"
  }, {
    heading: "api-call-rate-limits",
    content: "In a project, the rate limit for the rate of getting the status of a specified Converter is 50 times per second."
  }, {
    heading: "api-call-rate-limits",
    content: '<a id="code"></a>'
  }, {
    heading: "status-codes",
    content: "If the status code is 2XX, the request is successful."
  }, {
    heading: "status-codes",
    content: "If the status code is not 2XX, the request fails. Please troubleshoot the problem based on the content of the `message` field in the corresponding response message Body."
  }, {
    heading: "status-codes",
    content: "Status codes"
  }, {
    heading: "status-codes",
    content: "Possible message field content"
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
    content: `* Invalid parameter: rtmpUrl. Replace it, and retry.

* Invalid parameter: idleTimeout. Replace it, and retry.`
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
    content: "The project lacks permission to use this function. Contact Agora technical support."
  }, {
    heading: "status-codes",
    content: "404 Not Found"
  }, {
    heading: "status-codes",
    content: "Resource cannot be found/has been destroyed."
  }, {
    heading: "status-codes",
    content: "409 Conflict"
  }, {
    heading: "status-codes",
    content: "Resource with the same name already exists. Use the existing resource; otherwise, delete it, and create a new resource."
  }, {
    heading: "status-codes",
    content: "429 Too Many Requests"
  }, {
    heading: "status-codes",
    content: "Request rate limit exceeded.Resource quota limit exceeded.No available resources."
  }, {
    heading: "status-codes",
    content: "500 Unknown"
  }, {
    heading: "status-codes",
    content: "Internal errors. Contact Agora for assistance with troubleshooting."
  }, {
    heading: "status-codes",
    content: "501 Not Implemented"
  }, {
    heading: "status-codes",
    content: "The method requested has not been implemented."
  }, {
    heading: "status-codes",
    content: "503 Service Unavailable"
  }, {
    heading: "status-codes",
    content: "The server is temporarily overloading. Retry with a backoff strategy and contact Agora for assistance with troubleshooting.The server is temporarily down. Retry with a backoff strategy."
  }, {
    heading: "status-codes",
    content: "504 Gateway Timeout"
  }, {
    heading: "status-codes",
    content: "Gateway timeout. Check whether the resource is created; if not, re-create a new resource."
  }, {
    heading: "consideration",
    content: "This section summarizes the basic considerations for using the Media Push RESTful API:"
  }, {
    heading: "consideration",
    content: "Please make sure that the Agora channel profile is live broadcasting."
  }, {
    heading: "consideration",
    content: "In case of request errors, make sure to print the values of the `X-Request-ID` and `X-Resource-ID` fields in the response header for troubleshooting."
  }, {
    heading: "consideration",
    content: "As explained in the name description, you should use the name parameter if only one Converter is needed in a channel."
  }, {
    heading: "consideration",
    content: "Set the `region` parameter to the region associated with the CDN source, as explained in the `region` parameter description."
  }, {
    heading: "consideration",
    content: "If the Converter is automatically destroyed due to a service failure or other reasons, Agora recommends that you create a new Converter."
  }, {
    heading: "consideration",
    content: "If the CDN side's pulling stream is abnormal after creating a Converter, Agora recommends that you delete the Converter and create a new one."
  }, {
    heading: "consideration",
    content: "When updating the same Converter multiple times, ensure that the `sequence` value is incremented, as explained in the `sequence` parameter description."
  }, {
    heading: "consideration",
    content: "Agora does not support performing both transcoding and non-transcoding live streaming in the same Converter. To use a different streaming mode, create a new Converter and configure it accordingly."
  }, {
    heading: "consideration",
    content: "In non-transcoding mode, the Converter can only forward video streams with RTMP, not transcode video streams. To ensure that CDN audiences can watch the video, use video codec formats that comply with the RTMP standard protocol, such as H.264 or H.265. If the video codec format at the streaming end is VP8, use the Converter's transcoding mode."
  }, {
    heading: "consideration",
    content: "For more integration recommendations, see Integration Best Practices."
  }, {
    heading: "commonly-used-video-profile",
    content: "Agora recommends that you use the default values when setting the video resolution, frame rate, and bitrate of the output transcoded stream. You can also refer to the following table to set the values. If you set a bitrate beyond a reasonable range, the Agora server automatically adjusts the bitrate to stay within a reasonable range."
  }, {
    heading: "commonly-used-video-profile",
    content: "Resolution"
  }, {
    heading: "commonly-used-video-profile",
    content: "Frame rate (fps)"
  }, {
    heading: "commonly-used-video-profile",
    content: "Bitrate (Kbps)"
  }, {
    heading: "commonly-used-video-profile",
    content: "160 × 120"
  }, {
    heading: "commonly-used-video-profile",
    content: "15"
  }, {
    heading: "commonly-used-video-profile",
    content: "130"
  }, {
    heading: "commonly-used-video-profile",
    content: "120 × 120"
  }, {
    heading: "commonly-used-video-profile",
    content: "15"
  }, {
    heading: "commonly-used-video-profile",
    content: "100"
  }, {
    heading: "commonly-used-video-profile",
    content: "320 × 180"
  }, {
    heading: "commonly-used-video-profile",
    content: "15"
  }, {
    heading: "commonly-used-video-profile",
    content: "280"
  }, {
    heading: "commonly-used-video-profile",
    content: "180 × 180"
  }, {
    heading: "commonly-used-video-profile",
    content: "15"
  }, {
    heading: "commonly-used-video-profile",
    content: "200"
  }, {
    heading: "commonly-used-video-profile",
    content: "240 × 180"
  }, {
    heading: "commonly-used-video-profile",
    content: "15"
  }, {
    heading: "commonly-used-video-profile",
    content: "240"
  }, {
    heading: "commonly-used-video-profile",
    content: "320 × 240"
  }, {
    heading: "commonly-used-video-profile",
    content: "15"
  }, {
    heading: "commonly-used-video-profile",
    content: "400"
  }, {
    heading: "commonly-used-video-profile",
    content: "240 × 240"
  }, {
    heading: "commonly-used-video-profile",
    content: "15"
  }, {
    heading: "commonly-used-video-profile",
    content: "280"
  }, {
    heading: "commonly-used-video-profile",
    content: "424 × 240"
  }, {
    heading: "commonly-used-video-profile",
    content: "15"
  }, {
    heading: "commonly-used-video-profile",
    content: "440"
  }, {
    heading: "commonly-used-video-profile",
    content: "640 × 360"
  }, {
    heading: "commonly-used-video-profile",
    content: "15"
  }, {
    heading: "commonly-used-video-profile",
    content: "800"
  }, {
    heading: "commonly-used-video-profile",
    content: "360 × 360"
  }, {
    heading: "commonly-used-video-profile",
    content: "15"
  }, {
    heading: "commonly-used-video-profile",
    content: "520"
  }, {
    heading: "commonly-used-video-profile",
    content: "640 × 360"
  }, {
    heading: "commonly-used-video-profile",
    content: "30"
  }, {
    heading: "commonly-used-video-profile",
    content: "1200"
  }, {
    heading: "commonly-used-video-profile",
    content: "360 × 360"
  }, {
    heading: "commonly-used-video-profile",
    content: "30"
  }, {
    heading: "commonly-used-video-profile",
    content: "800"
  }, {
    heading: "commonly-used-video-profile",
    content: "480 × 360"
  }, {
    heading: "commonly-used-video-profile",
    content: "15"
  }, {
    heading: "commonly-used-video-profile",
    content: "640"
  }, {
    heading: "commonly-used-video-profile",
    content: "480 × 360"
  }, {
    heading: "commonly-used-video-profile",
    content: "30"
  }, {
    heading: "commonly-used-video-profile",
    content: "980"
  }, {
    heading: "commonly-used-video-profile",
    content: "640 × 480"
  }, {
    heading: "commonly-used-video-profile",
    content: "15"
  }, {
    heading: "commonly-used-video-profile",
    content: "1000"
  }, {
    heading: "commonly-used-video-profile",
    content: "480 × 480"
  }, {
    heading: "commonly-used-video-profile",
    content: "15"
  }, {
    heading: "commonly-used-video-profile",
    content: "800"
  }, {
    heading: "commonly-used-video-profile",
    content: "640 × 480"
  }, {
    heading: "commonly-used-video-profile",
    content: "30"
  }, {
    heading: "commonly-used-video-profile",
    content: "1500"
  }, {
    heading: "commonly-used-video-profile",
    content: "480 × 480"
  }, {
    heading: "commonly-used-video-profile",
    content: "30"
  }, {
    heading: "commonly-used-video-profile",
    content: "1200"
  }, {
    heading: "commonly-used-video-profile",
    content: "848 × 480"
  }, {
    heading: "commonly-used-video-profile",
    content: "15"
  }, {
    heading: "commonly-used-video-profile",
    content: "1220"
  }, {
    heading: "commonly-used-video-profile",
    content: "848 × 480"
  }, {
    heading: "commonly-used-video-profile",
    content: "30"
  }, {
    heading: "commonly-used-video-profile",
    content: "1860"
  }, {
    heading: "commonly-used-video-profile",
    content: "640 × 480"
  }, {
    heading: "commonly-used-video-profile",
    content: "10"
  }, {
    heading: "commonly-used-video-profile",
    content: "800"
  }, {
    heading: "commonly-used-video-profile",
    content: "1280 × 720"
  }, {
    heading: "commonly-used-video-profile",
    content: "15"
  }, {
    heading: "commonly-used-video-profile",
    content: "2260"
  }, {
    heading: "commonly-used-video-profile",
    content: "1280 × 720"
  }, {
    heading: "commonly-used-video-profile",
    content: "30"
  }, {
    heading: "commonly-used-video-profile",
    content: "3420"
  }, {
    heading: "commonly-used-video-profile",
    content: "960 × 720"
  }, {
    heading: "commonly-used-video-profile",
    content: "15"
  }, {
    heading: "commonly-used-video-profile",
    content: "1820"
  }, {
    heading: "commonly-used-video-profile",
    content: "960 × 720"
  }, {
    heading: "commonly-used-video-profile",
    content: "30"
  }, {
    heading: "commonly-used-video-profile",
    content: "2760"
  }],
  headings: [{
    id: "authentication",
    content: "Authentication"
  }, {
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "create-create-a-converter",
    content: "Create: Create a Converter"
  }, {
    id: "http-request",
    content: "HTTP request"
  }, {
    id: "path-parameter",
    content: "Path parameter"
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
    id: "delete-destroy-the-converter",
    content: "Delete: Destroy the Converter"
  }, {
    id: "http-request-1",
    content: "HTTP request"
  }, {
    id: "path-parameter-1",
    content: "Path parameter"
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
    id: "update-update-the-converter",
    content: "Update: Update the Converter"
  }, {
    id: "http-request-2",
    content: "HTTP request"
  }, {
    id: "path-parameter-2",
    content: "Path parameter"
  }, {
    id: "query-parameters-1",
    content: "Query Parameters"
  }, {
    id: "request-header-2",
    content: "Request header"
  }, {
    id: "request-body-1",
    content: "Request body"
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
    id: "request-example-1",
    content: "Request example"
  }, {
    id: "response-example-1",
    content: "Response example"
  }, {
    id: "get-get-the-streaming-status-of-the-converter",
    content: "Get: Get the streaming status of the Converter"
  }, {
    id: "http-request-3",
    content: "HTTP request"
  }, {
    id: "path-parameter-3",
    content: "Path parameter"
  }, {
    id: "request-header-3",
    content: "Request header"
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
    id: "response-example-2",
    content: "Response example"
  }, {
    id: "list-query-the-converters-of-all-or-specified-channels-under-a-project",
    content: "List: Query the Converters of all or specified channels under a project"
  }, {
    id: "http-request-4",
    content: "HTTP request"
  }, {
    id: "path-parameter-4",
    content: "Path parameter"
  }, {
    id: "query-parameters-2",
    content: "Query Parameters"
  }, {
    id: "request-header-4",
    content: "Request header"
  }, {
    id: "http-response-4",
    content: "HTTP response"
  }, {
    id: "response-header-4",
    content: "Response header"
  }, {
    id: "response-body-4",
    content: "Response body"
  }, {
    id: "response-example-3",
    content: "Response example"
  }, {
    id: "api-call-rate-limits",
    content: "API call rate limits"
  }, {
    id: "status-codes",
    content: "Status codes"
  }, {
    id: "consideration",
    content: "Consideration"
  }, {
    id: "commonly-used-video-profile",
    content: "Commonly used video profile"
  }]
};
export let toc = [{
  depth: 2,
  url: "#authentication",
  title: _jsx(_Fragment, {
    children: "Authentication"
  })
}, {
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#create-create-a-converter",
  title: _jsx(_Fragment, {
    children: "Create: Create a Converter"
  })
}, {
  depth: 3,
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
  url: "#delete-destroy-the-converter",
  title: _jsx(_Fragment, {
    children: "Delete: Destroy the Converter"
  })
}, {
  depth: 3,
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
  url: "#update-update-the-converter",
  title: _jsx(_Fragment, {
    children: "Update: Update the Converter"
  })
}, {
  depth: 3,
  url: "#http-request-2",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameter-2",
  title: _jsx(_Fragment, {
    children: "Path parameter"
  })
}, {
  depth: 4,
  url: "#query-parameters-1",
  title: _jsx(_Fragment, {
    children: "Query Parameters"
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
  url: "#request-example-1",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 3,
  url: "#response-example-1",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#get-get-the-streaming-status-of-the-converter",
  title: _jsx(_Fragment, {
    children: "Get: Get the streaming status of the Converter"
  })
}, {
  depth: 3,
  url: "#http-request-3",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameter-3",
  title: _jsx(_Fragment, {
    children: "Path parameter"
  })
}, {
  depth: 4,
  url: "#request-header-3",
  title: _jsx(_Fragment, {
    children: "Request header"
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
  url: "#response-example-2",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#list-query-the-converters-of-all-or-specified-channels-under-a-project",
  title: _jsx(_Fragment, {
    children: "List: Query the Converters of all or specified channels under a project"
  })
}, {
  depth: 3,
  url: "#http-request-4",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameter-4",
  title: _jsx(_Fragment, {
    children: "Path parameter"
  })
}, {
  depth: 4,
  url: "#query-parameters-2",
  title: _jsx(_Fragment, {
    children: "Query Parameters"
  })
}, {
  depth: 4,
  url: "#request-header-4",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#http-response-4",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 4,
  url: "#response-header-4",
  title: _jsx(_Fragment, {
    children: "Response header"
  })
}, {
  depth: 4,
  url: "#response-body-4",
  title: _jsx(_Fragment, {
    children: "Response body"
  })
}, {
  depth: 3,
  url: "#response-example-3",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#api-call-rate-limits",
  title: _jsx(_Fragment, {
    children: "API call rate limits"
  })
}, {
  depth: 2,
  url: "#status-codes",
  title: _jsx(_Fragment, {
    children: "Status codes"
  })
}, {
  depth: 2,
  url: "#consideration",
  title: _jsx(_Fragment, {
    children: "Consideration"
  })
}, {
  depth: 2,
  url: "#commonly-used-video-profile",
  title: _jsx(_Fragment, {
    children: "Commonly used video profile"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    div: "div",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This article contains detailed help for the Media Push RESTful APIs."
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
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: `You can implement different types of Media Push depending on the live streaming use-case requires transcoded or non-transcoded streaming. Transcoding is essentially an encoding and decoding function used to mix multiple audio and video streams into one audio and video stream, which can guarantee the synchronization of multiple hosts' live streams seen by the audience. Therefore, generally speaking, in the case of multiple-hosts live streaming, you need to enable transcoding when pushing streams to CDN; in the case of single-host live streaming, only one media stream is pushed to the CDN, so you do not need to enable transcoding.
Processing the media streams and pushing it to the CDN creates a Media Push task (shown as "Converter" in the rest of the article) in the Agora channel. You can control a Converter through the following methods:`
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Create"
        }), ": Create a Converter for your project, and set up the relevant configuration of transcoded or non-transcoded streaming. The media stream in the channel is processed by the Converter according to this configuration and then pushed to the CDN."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Delete"
        }), ": Destroy the specified Converter. The user's media stream in this channel will no longer be processed by the Converter or pushed to the CDN after you destroy the Converter."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Update"
        }), ": Update the specified Converter configuration."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Get"
        }), ": Get the streaming status of the specified Converter."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "create-create-a-converter",
      children: "Create: Create a Converter"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "POST https://api.agora.io/{region}/v1/projects/{appId}/rtmp-converters"
            })
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
      id: "path-parameter",
      children: "Path parameter"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "appId"
        }), ": (Required) String. The ", _jsx(_components.strong, {
          children: "App ID"
        }), " provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "region"
        }), ": (Required) String. The region that the Converter was created in. Agora supports the creation of Converters in different regions. Currently, four regions are supported:", `
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
            }), ": Asia, excluding Mainland China"]
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
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Please ensure that the region you set is the same region as where your CDN originates is located."
          }), `
`, _jsxs(_components.li, {
            children: ["Please make sure the value of ", _jsx(_components.code, {
              children: "region"
            }), " is lowercase."]
          }), `
`]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters",
      children: "Query parameters"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "regionHintIp"
      }), ": (Optional) String. The IP address of the CDN source station. It must be a valid IPv4 address. This parameter can help ensure the stability of the RTMP stream."]
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "POST https://api.agora.io/{region}/v1/projects/{appId}/rtmp-converters?regionHintIp={regionHintIp}"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "request-header",
      children: "Request header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Content-Type"
          }), ": ", _jsx(_components.code, {
            children: "application/json"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Authorization"
          }), ": The value of this field must refer to the ", _jsx(_components.a, {
            href: "./restful-authentication",
            children: "Authentication instructions"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "X-Request-ID"
          }), ": The UUID (Universal Unique Identifier) that identifies this ", _jsx(_components.strong, {
            children: "request"
          }), ". Agora server generates a UUID to pass in and returns ", _jsx(_components.code, {
            children: "X-Request-ID"
          }), " field in the response header."]
        }), `
`, _jsxs(_components.blockquote, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Agora recommends that you assign a value to ", _jsx(_components.code, {
              children: "X-Request-ID"
            }), ". Agora server returns an ", _jsx(_components.code, {
              children: "X-Custom-Request-ID"
            }), " field in the response header for trouble shooting."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {}), `
`, _jsx(_components.h4, {
      id: "request-body",
      children: "Request body"
    }), `
`, _jsxs(_components.p, {
      children: ["You can implement different types of Media Push depending on the live streaming use-case requires transcoded or non-transcoded streaming. Generally speaking, in the case of multiple-hosts live streaming, you need to enable transcoding when using Media Push RESTful APIs; in the case of single-host live streaming, only one media stream is pushed to the CDN, so you do not need to enable transcoding. For details, see ", _jsx(_components.a, {
        href: "/en/realtime-media/media-push#key-features",
        children: "Media Push Features"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Media Push with transcoding"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The request Body is the ", _jsx(_components.code, {
        children: "converter"
      }), " field of JSON Object type. The field structure is shown in the following figure:"]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1654595558221",
        alt: "1654595558221"
      })
    }), `
`, _jsx(_components.p, {
      children: "Details for these fields are shown in the following table:"
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
            children: "Descriptions"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "name"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) String"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "The name of the Converter. The maximum length is 64 characters. The supported character set range is:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "All lowercase English letters (a-z)"
              }), `
`, _jsx(_components.li, {
                children: "All uppercase English letters (A-Z)"
              }), `
`, _jsx(_components.li, {
                children: "Numbers 0-9"
              }), `
`, _jsx(_components.li, {
                children: '"-", "_"'
              }), `
`]
            }), _jsxs(_components.p, {
              children: ["The field is empty when no value is passed. Multiple converters with an empty name field can be created under a project. Two converters cannot have the same name, however; you will receive a response status code of ", _jsx(_components.code, {
                children: "409"
              }), " (Conflict) if you try to create a converter with the same name as one that already exists under that project."]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["To avoid repeatedly creating multiple Converters and repetitively pushing streams, please use the ", _jsx(_components.code, {
                    children: "name"
                  }), ' field to manage the Converters under the specified project. Agora recommends that you combine "channel name (', _jsx(_components.code, {
                    children: "rtcChannel"
                  }), ')" and "Converter feature" to assign a value to the ', _jsx(_components.code, {
                    children: "name"
                  }), ". For example, ", _jsx(_components.code, {
                    children: "show68_horizontal"
                  }), " and ", _jsx(_components.code, {
                    children: "show68_vertical"
                  }), " would represent converters for the user screen created in channel ", _jsx(_components.code, {
                    children: "show68"
                  }), " with horizontal and vertical layouts, respectively."]
                })
              })
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "The Converter’s transcoding configuration."
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["When the ", _jsx(_components.code, {
                  children: "audioOptions"
                }), " and ", _jsx(_components.code, {
                  children: "videoOptions"
                }), " fields in ", _jsx(_components.code, {
                  children: "converter.transcodeOptions"
                }), " are not defined, the converter will output a video stream only (without audio)."]
              }), `
`, _jsxs(_components.li, {
                children: ["When there is no ", _jsx(_components.code, {
                  children: "rtcStreamUids"
                }), " field in the ", _jsx(_components.code, {
                  children: "converter.transcodeOptions.audioOptions"
                }), " field, Agora will mix the audio streams of all users in the channel and output the mixed audio stream through the Converter."]
              }), `
`, _jsxs(_components.li, {
                children: ["When there is an ", _jsx(_components.code, {
                  children: "rtcStreamUids"
                }), " field in the ", _jsx(_components.code, {
                  children: "converter.transcodeOptions.audioOptions"
                }), " field, Agora will mix the audio stream of the specified user and output the mixed audio stream through the Converter."]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.rtcChannel"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) String"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "The Agora channel name. This is the channel to which the stream processed by the Converter belongs. The maximum length of the string is 64 characters, and the following character sets (89 characters in total) are supported:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "All lowercase English letters (a-z)"
              }), `
`, _jsx(_components.li, {
                children: "All uppercase English letters (A-Z)"
              }), `
`, _jsx(_components.li, {
                children: "Numbers 0-9"
              }), `
`, _jsx(_components.li, {
                children: 'The space character "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ","'
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.audioOptions"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsxs(_components.p, {
              children: ["The audio transcoding configuration of the Converter. See ", _jsx(_components.a, {
                href: "./restful-type-definition#audiooptions",
                children: "audioOptions"
              }), " for details."]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["There is no need to set ", _jsx(_components.code, {
                      children: "audioOptions"
                    }), " and related fields in a video stream only (without audio) use-case."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["In an audio & video use-case, ", _jsx(_components.code, {
                      children: "audioOptions"
                    }), " is a required field. If there is no field setting requirement, you can set ", _jsx(_components.code, {
                      children: "audioOptions"
                    }), ' to empty, for example: "audioOptions":{}.']
                  }), `
`]
                })
              })
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "The video transcoding configuration of the Converter."
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["There is no need to set ", _jsx(_components.code, {
                      children: "videoOptions"
                    }), " and related fields in an audio stream only (without video) use-case."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["In an audio & video use-case, ", _jsx(_components.code, {
                      children: "videoOptions"
                    }), " is a required field and cannot be empty."]
                  }), `
`]
                })
              })
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.canvas"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The video canvas. See ", _jsx(_components.a, {
              href: "./restful-type-definition#canvas",
              children: "canvas"
            }), " for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.layoutType"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) Number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "The screen layout type of the output video:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), " or empty: (Default) Custom layout, which is set through the", _jsx(_components.code, {
                  children: "transcodeOptions.videoOptions.layout"
                }), " parameter."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": Vertical layout. Specify one user to display in the large window on the left side of the screen, while the other users are vertically arranged in the small windows on the right side of the screen. For details, see ", _jsx(_components.a, {
                  href: "/en/realtime-media/media-push/reference/set-vertical-layout",
                  children: "Set Vertical Layout"
                }), "."]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.layout"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) JSON Array"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "The content description of the video screen on the canvas. Two elements are supported: RtcStreamView and ImageView."
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["If ", _jsx(_components.code, {
                    children: "layoutType"
                  }), " is 0 or empty, this field is required."]
                })
              })
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.layout.RtcStreamView element"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "None"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The video screen of each user on the canvas. See ", _jsx(_components.a, {
              href: "./restful-type-definition#layout",
              children: "RtcStreamView"
            }), " for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.layout.ImageView element"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "None"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The video image on the canvas, which can be used as a watermark. See ", _jsx(_components.a, {
              href: "./restful-type-definition#layoutimageview",
              children: "ImageView"
            }), " for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.vertical"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Vertical layout. This parameter must be set when ", _jsx(_components.code, {
              children: "layoutType"
            }), " is 1. See ", _jsx(_components.a, {
              href: "./restful-type-definition#vertical",
              children: "vertical"
            }), " for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.defaultPlaceholderImageUrl"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) String"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "The default user screen background image URL address. Supports images in JPG, PNG and GIF formats. This controls what happens when a user in a channel stops publishing their video stream:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "If this field is set, the user's window switches to this background image."
              }), `
`, _jsx(_components.li, {
                children: "If this field is not set, the user's window initially displays the last frame of the user's video. Once the layout refreshes, the window displays the background color of the canvas."
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.bitrate"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The encoding bitrate (Kbps) of the video. The value range is [1,10000]."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.gop"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) Number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The GOP of the video. The default value is the value of ", _jsx(_components.code, {
              children: "frameRate"
            }), " * 2."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.frameRate"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The encoding frame rate (fps) of the video. The value range is [1,30]. The default value is 15."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.codec"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) String"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "The video codec type of the output video stream. The following values are supported:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "(Default) H.264"
              }), `
`, _jsx(_components.li, {
                children: "H.265"
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.codecProfile"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) String"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "The encoding specification of the video. The following values are supported:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "high"
                }), " (Default): High video codec profile, generally used for high-resolution broadcasts or television."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "baseline"
                }), ": Baseline video codec profile, generally used for video calls on mobile phones."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "main"
                }), ": Main video codec profile, generally used for mainstream electronics, such as MP4 players, portable video players, PSPs, and iPads."]
              }), `
`]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["If ", _jsx(_components.code, {
                    children: "codec"
                  }), " is set to ", _jsx(_components.code, {
                    children: "H.256"
                  }), ", ", _jsx(_components.code, {
                    children: "codecProfile"
                  }), " is automatically set to ", _jsx(_components.code, {
                    children: "main"
                  }), "."]
                })
              })
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.seiOptions"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Sets the user SEI information carried in the output video stream. The default is empty. If it is not set, it means that no SEI information is output. See ", _jsx(_components.a, {
              href: "./restful-type-definition#seioptions",
              children: "seiOptions"
            }), " for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "rtmpUrl"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The address of Media Push. It must be a valid RTMP address with a length of 1,024 characters or less."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "idleTimeOut"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) Number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The maximum time (seconds) that the Converter is idle. Idle means that all users corresponding to the media stream processed by the Converter have left the channel. After the idle state exceeds the set ", _jsx(_components.code, {
              children: "idleTimeOut"
            }), ", the Converter will be destroyed automatically."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "jitterBufferSizeMs"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) Int"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "Network delay (ms) from the receiver to the jitter buffer. The default value is 1000. The value range is [0, 1000]."
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "The Media Push service rounds up to the nearest 100 multiples with the value you set."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["If the value is set to 0, jitter buffer delay does not take effect. Agora recommends that you do not set the ", _jsx(_components.code, {
                    children: "jitterBufferSizeMs"
                  }), " to 0 because poor network may cause low audio quality."]
                }), `
`]
              }), `
`]
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Media Push without transcoding"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The request body is the ", _jsx(_components.code, {
        children: "converter"
      }), " field of JSON Object type. The field structure is shown in the following figure:"]
    }), `
`, `
`, _jsx(_components.p, {
      children: "Details for these fields are shown in the following table:"
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
            children: "Category"
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
            children: "name"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The name of the Converter."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "rawOptions"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required)JSON Object"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Media Push configuration for the Converter."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "rawOptions.rtcChannel"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The Agora channel name. The channel to which the stream processed by the Converter belongs."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "rawOptions.rtcStreamUid"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The UID of the user to which the media stream belongs."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "rtmpUrl"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required)String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The CDN streaming address."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "idleTimeOut"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The maximum time (s) that the Converter is idle. Idle means that all users of the corresponding media streams processed by the Converter have left the channel. When the Converter is in the idle state for longer than ", _jsx(_components.code, {
              children: "idleTimeout"
            }), ", the Converter is automatically destroyed and the streaming stops."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "jitterBufferSizeMs"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) Int"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "Network delay (ms) from the receiver to the jitter buffer. The default value is 1000. The value range is [0, 1000]."
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "The Media Push service rounds up to the nearest 100 multiples with the value you set."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["If the value is set to 0, jitter buffer delay does not take effect. Agora recommends that you do not set the ", _jsx(_components.code, {
                    children: "jitterBufferSizeMs"
                  }), " to 0 because poor network may cause low audio quality."]
                }), `
`]
              }), `
`]
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "http-response",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["All possible response status codes. See ", _jsx(_components.a, {
        href: "#status-codes",
        children: "Status codes"
      }), " for details."]
    }), `
`, _jsx(_components.h4, {
      id: "response-header",
      children: "Response header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "X-Request-ID"
          }), ": The UUID (Universal Unique Identifier) that identifies this ", _jsx(_components.strong, {
            children: "request"
          }), ". This value is the same as the ", _jsx(_components.code, {
            children: "X-Request-ID"
          }), " in the header of this request. If there is an error in the request, please print out the value in the log to troubleshoot the problem."]
        }), `
`, _jsxs(_components.blockquote, {
          children: [`
`, _jsx(_components.p, {
            children: "If the response status code of this request is not 2XX, this field may be missing from the response header."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "X-Resource-ID"
          }), ": The UUID (Universal Unique Identifier) that identifies the ", _jsx(_components.strong, {
            children: "ID"
          }), " of the Converter updated in this request."]
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
      children: "If the status code is 2XX, the request is successful. The field structure is shown in the following figure:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1624003059693",
        alt: "img"
      })
    }), `
`, _jsx(_components.p, {
      children: "Details for these fields are shown in the following table:"
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
            children: "Descriptions"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "id"
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
            children: "The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "createTs"
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
            children: "The Unix timestamp(seconds) when the Converter was created."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "updateTs"
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
            children: "The Unix timestamp(seconds) when the Converter configuration was last updated."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "state"
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
            children: [_jsx(_components.p, {
              children: "The running status of the Converter:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "connecting"
                  }), ": Connecting to the Agora streaming server and the CDN server."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "running"
                  }), ": The Agora streaming server is pushing the streams."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "failed"
                  }), ": The Media Push fails."]
                }), `
`]
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
              children: "fields"
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
            children: ["The field mask of the converter JSON Object. See ", _jsx(_components.a, {
              href: "https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask",
              children: "Google protobuf FieldMask Document"
            }), " for details. This is used to describe the set of fields contained in the returned ", _jsx(_components.code, {
              children: "converter"
            }), ". In this example, ", _jsx(_components.code, {
              children: "fields"
            }), " specifies that the Agora server returns a subset of the ", _jsx(_components.code, {
              children: "id"
            }), ", ", _jsx(_components.code, {
              children: "createTs"
            }), ", ", _jsx(_components.code, {
              children: "updateTs"
            }), " and ", _jsx(_components.code, {
              children: "state"
            }), " fields in the ", _jsx(_components.code, {
              children: "converter"
            }), " field."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not 2XX, the request fails. The body contains a String type ", _jsx(_components.code, {
        children: "message"
      }), " field that describes the specific reason for the failure."]
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
              children: '"Invalid authentication credentials."'
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
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "request-example",
      children: "Request example"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Custom layout for Media Push with transcoding"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["This example shows that the video of the two specified users in the ", _jsx(_components.code, {
        children: "show68"
      }), " channel are mixed with a custom layout and pushed to the CDN. The audio of all users in the channel is also mixed."]
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
              children: '"LC-AAC"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: "48"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: '                        "fillMode"'
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
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
              children: '"http://example.agora.io/user_placeholder.jpg"'
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
              children: '                "gop"'
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
              children: ": {}"
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
              children: '"rtmp://example/live/show68"'
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
`, _jsxs(_components.p, {
      children: ["The sample code for setting SEI information (", _jsx(_components.code, {
        children: "seiOptions"
      }), ") is as follows:"]
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
              children: '                "seiOptions"'
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
              children: '                    "source"'
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
              children: '                        "metadata"'
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
              children: '                        "datastream"'
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
              children: '                        "customized"'
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
              children: '                            "payload"'
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
              children: '"example"'
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "sink"'
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
              children: '                        "type"'
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
              children: "100"
            })]
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
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Vertical layout for Media Push with transcoding"
      }), `
This example shows that the video of the two specified users in the `, _jsx(_components.code, {
        children: "show68"
      }), " channel are mixed with a vertical layout and pushed to the CDN. The audio of two specified users in the channel are mixed."]
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
              children: "640"
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
              children: '                        "fillMode"'
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
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
              children: '"http://example/host_placeholder.jpg"'
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
              children: '                "codec"'
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
              children: '"H.264"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: '"high"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: '                "gop"'
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
              children: '                "layoutType"'
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
              children: '                "vertical"'
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
              children: '                    "maxResolutionUid"'
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
              children: '                    "fillMode"'
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "refreshIntervalSec"'
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
              children: "4"
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
              children: '                "defaultPlaceholderImageUrl"'
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
              children: '"http://example/host_placeholder.jpg"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: '                    "source"'
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
              children: '                        "metadata"'
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
              children: '                        "datastream"'
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
              children: '                        "customized"'
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
              children: '                            "payload"'
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
              children: '"example"'
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "sink"'
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
              children: '                        "type"'
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
              children: "100"
            })]
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
              children: '"rtmp://example/live/show68"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
        children: "Media Push without transcoding"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["This example shows that the media stream of the specified user in the ", _jsx(_components.code, {
        children: "show68"
      }), " channel is pushed to the CDN."]
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
              children: '      "name"'
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
              children: '      "rawOptions"'
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
              children: '        "rtcChannel"'
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
              children: '        "rtcStreamUid"'
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
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "rtmpUrl"'
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
              children: '"rtmp://example/live/global"'
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
              children: '   "converter"'
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
              children: '     "id"'
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
              children: '     "createTs"'
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
              children: '     "updateTs"'
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
              children: '     "state"'
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
              children: '   "fields"'
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
`, _jsx(_components.h2, {
      id: "delete-destroy-the-converter",
      children: "Delete: Destroy the Converter"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "DELETE https://api.agora.io/{region}/v1/projects/{appId}/rtmp-converters/{converterId}"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-1",
      children: "Path parameter"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "region"
        }), ": (Required) String. The region where the Converter is created in, which must be the same as the ", _jsx(_components.code, {
          children: "region"
        }), " set when creating Converter."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "appId"
        }), ": (Required) String type parameter. The ", _jsx(_components.strong, {
          children: "App ID"
        }), " provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "converterId"
        }), ": (Required) String type parameter. The ", _jsx(_components.strong, {
          children: "ID"
        }), " of the Converter."]
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
          }), ": The value of this field must refer to the ", _jsx(_components.a, {
            href: "./restful-authentication",
            children: "Authentication instructions"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "X-Request-ID"
          }), ": The UUID (Universal Unique Identifier) that identifies this ", _jsx(_components.strong, {
            children: "request"
          }), ". Agora server generates a UUID to pass in and returns ", _jsx(_components.code, {
            children: "X-Request-ID"
          }), " field in the response header."]
        }), `
`, _jsxs(_components.blockquote, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Agora recommends that you assign a value to ", _jsx(_components.code, {
              children: "X-Request-ID"
            }), ". Agora server returns an ", _jsx(_components.code, {
              children: "X-Custom-Request-ID"
            }), " field in the response header for trouble shooting."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "http-response-1",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["All possible response status codes. See ", _jsx(_components.a, {
        href: "#status-codes",
        children: "Status codes"
      }), " for details."]
    }), `
`, _jsx(_components.h4, {
      id: "response-header-1",
      children: "Response header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "X-Request-ID"
          }), ": The UUID (Universal Unique Identifier) that identifies this ", _jsx(_components.strong, {
            children: "request"
          }), ". This value is the same as the ", _jsx(_components.code, {
            children: "X-Request-ID"
          }), " in the header of this request. If there is an error in the request, please print out the value in the log to troubleshoot the problem."]
        }), `
`, _jsxs(_components.blockquote, {
          children: [`
`, _jsx(_components.p, {
            children: "If the response status code of this request is not 2XX, this field may be missing from the response header."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "X-Resource-ID"
          }), ": The UUID (Universal Unique Identifier) that identifies the ", _jsx(_components.strong, {
            children: "ID"
          }), " of the Converter created in this request."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "response-body-1",
      children: "Response body"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If the status code is 2XX, the request is successful. The body is empty."
      }), `
`, _jsxs(_components.li, {
        children: ["If the status code is not 2XX, the request fails. The body contains a String type ", _jsx(_components.code, {
          children: "message"
        }), " field that describes the specific reason for the failure."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "update-update-the-converter",
      children: "Update: Update the Converter"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "PATCH https://api.agora.io/{region}/v1/projects/{appId}/rtmp-converters/{converterId}"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-2",
      children: "Path parameter"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "region"
        }), ": (Required) String. The region where the Converter is created in, which must be the same as the ", _jsx(_components.code, {
          children: "region"
        }), " set when creating Converter."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "appId"
        }), ": (Required) String type parameter. The ", _jsx(_components.strong, {
          children: "App ID"
        }), " provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "converterId"
        }), ": (Required) String type parameter. The ", _jsx(_components.strong, {
          children: "ID"
        }), " of the Converter."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-1",
      children: "Query Parameters"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "sequence"
      }), ": (Required) Number type parameter. The serial number of the ", _jsx(_components.code, {
        children: "Update"
      }), " request. The value must be greater than or equal to 0. Please make sure that the serial number of the next ", _jsx(_components.code, {
        children: "Update"
      }), " request is greater than the serial number of the previous ", _jsx(_components.code, {
        children: "Update"
      }), " request. The serial number can ensure that the Agora server updates the Converter according to the latest configuration you specify."]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsxs(_components.p, {
        children: ["Agora recommends that you fill in ", _jsx(_components.code, {
          children: "sequence"
        }), " sequentially, using 0 when calling Update for the first time, 1 for the second time, 2 for the third time, and so on. The Agora server will update the Converter according to the latest Update request (the largest serial number)."]
      }), `
`]
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
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "PATCH https://api.agora.io/v1/projects/<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "appId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">/rtmp-converters/<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "converterId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">?sequence={sequence}"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "request-header-2",
      children: "Request header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Content-Type"
          }), ": ", _jsx(_components.code, {
            children: "application/json"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Authorization"
          }), ": The value of this field must refer to the ", _jsx(_components.a, {
            href: "./restful-authentication",
            children: "Authentication instructions"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "X-Request-ID"
          }), ": The UUID (Universal Unique Identifier) that identifies this ", _jsx(_components.strong, {
            children: "request"
          }), ". Agora server generates a UUID to pass in and returns ", _jsx(_components.code, {
            children: "X-Request-ID"
          }), " field in the response header."]
        }), `
`, _jsxs(_components.blockquote, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Agora recommends that you assign a value to ", _jsx(_components.code, {
              children: "X-Request-ID"
            }), ". Agora server returns an ", _jsx(_components.code, {
              children: "X-Custom-Request-ID"
            }), " field in the response header for trouble shooting."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-body-1",
      children: "Request body"
    }), `
`, _jsxs(_components.p, {
      children: ["For details about the fields, see the ", _jsx(_components.a, {
        href: "#request-body",
        children: "Create request body"
      }), "."]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsxs(_components.p, {
        children: [_jsx(_components.code, {
          children: "Update"
        }), " method does not support updating the following configurations of a Converter:"]
      }), `
`, _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.code, {
            children: "name"
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.code, {
            children: "idleTimeOut"
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.code, {
            children: "transcodeOptions.rtcChannel"
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.code, {
            children: "transcodeOptions.audioOptions"
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.code, {
            children: "transcodeOptions.audioOptions.codecProfile"
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.code, {
            children: "transcodeOptions.audioOptions.sampleRate"
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.code, {
            children: "transcodeOptions.audioOptions.bitrate"
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.code, {
            children: "transcodeOptions.audioOptions.audioChannels"
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.code, {
            children: "transcodeOptions.videoOptions.codec"
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.code, {
            children: "transcodeOptions.videoOptions.codecProfile"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["After calling the ", _jsx(_components.code, {
              children: "Create"
            }), " method to create a Converter that outputs video stream only or audio stream only, you cannot update it to a Converter that outputs audio stream only or video stream only through the ", _jsx(_components.code, {
              children: "Update"
            }), " method."]
          }), `
`, _jsxs(_components.li, {
            children: ["When using Media Push with vertical layout (", _jsx(_components.code, {
              children: "layoutType"
            }), " is ", _jsx(_components.code, {
              children: "1"
            }), "), you can only update the ", _jsx(_components.code, {
              children: "rtmpUrl"
            }), " field."]
          }), `
`]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "http-response-2",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["All possible response status codes. See ", _jsx(_components.a, {
        href: "#status-codes",
        children: "Status codes"
      }), " for details."]
    }), `
`, _jsx(_components.h4, {
      id: "response-header-2",
      children: "Response header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "X-Request-ID"
          }), _jsx(_components.div, {}), " UUID (Universal Unique Identifier) that identifies this ", _jsx(_components.strong, {
            children: "request"
          }), ". This value is the same as the ", _jsx(_components.code, {
            children: "X-Request-ID"
          }), " in the header of this request. If there is an error in the request, please print out the value in the log to troubleshoot the problem."]
        }), `
`, _jsxs(_components.blockquote, {
          children: [`
`, _jsx(_components.p, {
            children: "If the response status code of this request is not 2XX, this field may be missing from the response header."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "X-Resource-ID"
          }), ": The UUID (Universal Unique Identifier) that identifies the ", _jsx(_components.strong, {
            children: "ID"
          }), " of the Converter updated in this request."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "response-body-2",
      children: "Response body"
    }), `
`, _jsx(_components.p, {
      children: "If the status code is 2XX, the request is successful. The field structure is shown in the following figure:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1624003059693",
        alt: "img"
      })
    }), `
`, _jsx(_components.p, {
      children: "Details of these fields are shown in the following table:"
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
            children: "Descriptions"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "id"
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
            children: "The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "createTs"
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
            children: "The Unix timestamp(seconds) when the Converter was created."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "updateTs"
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
            children: "The Unix timestamp(seconds) when the Converter configuration was last updated."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "state"
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
            children: [_jsx(_components.p, {
              children: "The running status of the Converter:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "connecting"
                  }), ": Connecting to the Agora streaming server and the CDN server."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "running"
                  }), ": The Agora streaming server is pushing the streams."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "failed"
                  }), ": The Media Push Fails."]
                }), `
`]
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
              children: "fields"
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
            children: ["The field mask of the converter JSON Object. See ", _jsx(_components.a, {
              href: "https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask",
              children: "Google protobuf FieldMask Document"
            }), " for details. This is used to describe the set of fields contained in the returned ", _jsx(_components.code, {
              children: "converter"
            }), ". ", "In this example, ", _jsx(_components.code, {
              children: "fields"
            }), " specifies that the Agora server returns a subset of the ", _jsx(_components.code, {
              children: "id"
            }), ", ", _jsx(_components.code, {
              children: "createTs"
            }), ", ", _jsx(_components.code, {
              children: "updateTs"
            }), ", and ", _jsx(_components.code, {
              children: "state"
            }), " fields in the ", _jsx(_components.code, {
              children: "converter"
            }), " field."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not 2XX, the request fails. The body contains a String type ", _jsx(_components.code, {
        children: "message"
      }), " field that describes the specific reason for the failure."]
    }), `
`, _jsx(_components.h3, {
      id: "request-example-1",
      children: "Request example"
    }), `
`, _jsxs(_components.p, {
      children: ["You can update multiple fields at the same time, such as updating ", _jsx(_components.code, {
        children: "transcodeOptions.videoOptions.canvas"
      }), " and ", _jsx(_components.code, {
        children: "converter.transcodeOptions.videoOptions.layout"
      }), ". Refer to the following sample code:"]
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
              children: '                        "fillMode"'
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
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
              children: '"http://example/host_placeholder.jpg"'
            })]
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
              children: '"transcodeOptions.videoOptions.canvas,transcodeOptions.videoOptions.layout"'
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
              children: '   "converter"'
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
              children: '     "id"'
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
              children: '     "createTs"'
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
              children: '     "updateTs"'
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
              children: "1591788746"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '     "state"'
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
              children: '   "fields"'
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
`, _jsx(_components.h2, {
      id: "get-get-the-streaming-status-of-the-converter",
      children: "Get: Get the streaming status of the Converter"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "GET https://api.agora.io/{region}/v1/projects/{appId}/rtmp-converters/{converterId}"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-3",
      children: "Path parameter"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "region"
        }), ": (Required) String. The region where the Converter is created in, which must be the same as the ", _jsx(_components.code, {
          children: "region"
        }), " set when creating Converter."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "appId"
        }), ": (Required) String type parameter. The ", _jsx(_components.strong, {
          children: "App ID"
        }), " provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "converterId"
        }), ": (Required) String type parameter. The ", _jsx(_components.strong, {
          children: "ID"
        }), " of the Converter."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-header-3",
      children: "Request header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Content-Type"
          }), ": ", _jsx(_components.code, {
            children: "application/json"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Authorization"
          }), ": The value of this field must refer to the ", _jsx(_components.a, {
            href: "./restful-authentication",
            children: "Authentication instructions"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "X-Request-ID"
          }), ": The UUID (Universal Unique Identifier) that identifies this ", _jsx(_components.strong, {
            children: "request"
          }), ". Agora server generates a UUID to pass in and returns ", _jsx(_components.code, {
            children: "X-Request-ID"
          }), " field in the response header."]
        }), `
`, _jsxs(_components.blockquote, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Agora recommends that you assign a value to ", _jsx(_components.code, {
              children: "X-Request-ID"
            }), ". Agora server returns an ", _jsx(_components.code, {
              children: "X-Custom-Request-ID"
            }), " field in the response header for trouble shooting."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "http-response-3",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["All possible response status codes. See ", _jsx(_components.a, {
        href: "#status-codes",
        children: "Status codes"
      }), " for details."]
    }), `
`, _jsx(_components.h4, {
      id: "response-header-3",
      children: "Response header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "X-Request-ID"
          }), ": The UUID (Universal Unique Identifier) that identifies this ", _jsx(_components.strong, {
            children: "request"
          }), ". This value is the same as the ", _jsx(_components.code, {
            children: "X-Request-ID"
          }), " in the header of this request. If there is an error in the request, please print out the value in the log to troubleshoot the problem."]
        }), `
`, _jsxs(_components.blockquote, {
          children: [`
`, _jsx(_components.p, {
            children: "If the response status code of this request is not 2XX, this field may be missing from the response header."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "X-Resource-ID"
          }), ": The UUID (Universal Unique Identifier) that identifies the ", _jsx(_components.strong, {
            children: "ID"
          }), " of the Converter created in this request."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "response-body-3",
      children: "Response body"
    }), `
`, _jsx(_components.p, {
      children: "If the status code is 2XX, the request is successful. The field structure is shown in the following figure:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1646374583131",
        alt: "1646374583131"
      })
    }), `
`, _jsx(_components.p, {
      children: "Details of these fields are shown in the following table:"
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
            children: "Descriptions"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "name"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The name of the Converter."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Object"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The transcoding configuration of the Converter."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.rtcChannel"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The Agora channel name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.audioOptions"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The audio transcoding configuration of the Converter. See ", _jsx(_components.a, {
              href: "./restful-type-definition#audiooptions",
              children: "audioOptions"
            }), " for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Object"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The video transcoding configuration of the Converter."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.canvas"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The video canvas. See ", _jsx(_components.a, {
              href: "./restful-type-definition#canvas",
              children: "canvas"
            }), " for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.layout"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Array"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The content description of the video screen on the canvas. Two elements are supported: RtcStreamView and ImageView."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.layout.RtcStreamView element"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "NA"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The video screen of each user on the canvas. See ", _jsx(_components.a, {
              href: "./restful-type-definition#layout",
              children: "RtcStreamView"
            }), " for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.layout.ImageView element"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "NA"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The video image on the canvas, which can be used as a watermark. See ", _jsx(_components.a, {
              href: "./restful-type-definition#layoutimageview",
              children: "ImageView"
            }), " for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.bitrate"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The encoding bitrate (Kbps) of the video."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.frameRate"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The encoding frame rate (fps) of the video."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.codec"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The video codec type of the output video stream."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.codecProfile"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The encoding specification of the video."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "transcodeOptions.videoOptions.seiOptions"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The user SEI information carried in the output video stream. See ", _jsx(_components.a, {
              href: "./restful-type-definition#seioptions",
              children: "seiOptions"
            }), " for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "rtmpUrl"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The address of Media Push."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "idleTimeout"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The maximum time (seconds) that the Converter is idle. Idle means that all users corresponding to the media stream processed by the Converter have left the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "createTs"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The Unix timestamp(seconds) when the Converter was created."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "state"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "The running status of the Converter:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "connecting"
                  }), ": Connecting to the Agora streaming server and the CDN server."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "running"
                  }), ": Pushing the stream."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "failed"
                  }), ": Failed to push the stream."]
                }), `
`]
              }), `
`]
            })]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not 2XX, the request fails. The body contains a String type ", _jsx(_components.code, {
        children: "message"
      }), " field that describes the specific reason for the failed."]
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
              children: '    "reason"'
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
              children: '"Resource is not found and destroyed."'
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
      children: _jsx(_components.strong, {
        children: "Media Push without transcoding"
      })
    }), `
`, _jsx(_components.p, {
      children: "If the status code is 2XX, the request is successful. The field structure is shown in the following figure:"
    }), `
`, `
`, _jsx(_components.p, {
      children: "Details of these fields are shown in the following table:"
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
            children: "Category"
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
            children: "name"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The name of the Converter."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "rawOptions"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Object"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Media Push configuration for the Converter."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "rawOptions.rtcChannel"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The Agora channel name. The channel to which the stream processed by the Converter belongs."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "rawOptions.rtcStreamUid"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The UID of the user to which the media stream belongs."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "rtmpUrl"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The CDN streaming address."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "idleTimeOut"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The maximum time (s) that the Converter is idle. Idle means that all users of the corresponding media streams processed by the Converter have left the channel. When the Converter is in the idle state for longer than ", _jsx(_components.code, {
              children: "idleTimeout"
            }), ", the Converter is automatically destroyed and the streaming stops."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "response-example-2",
      children: "Response example"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Custom layout for Media Push with transcoding"
      })
    }), `
`, _jsx(_components.p, {
      children: "If the status code is 2XX, the request is successful."
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
              children: '    "transcodeOptions"'
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
              children: '        "rtcChannel"'
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
              children: '            "codecProfile"'
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
              children: '            "sampleRate"'
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
              children: '            "audioChannels"'
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
              children: '            "rtcStreamUids"'
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "                201"
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
              children: '            "canvas"'
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
              children: '                "width"'
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
              children: '                "height"'
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
              children: '                "color"'
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
              children: '            "layout"'
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
              children: '                    "rtcStreamUid"'
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
              children: '                    "region"'
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
              children: '                        "xPos"'
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
              children: '                        "yPos"'
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
              children: '                        "zIndex"'
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
              children: '                        "width"'
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
              children: '                        "height"'
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
              children: "                    },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "fillMode"'
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "placeholderImageUrl"'
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
              children: '                    "rtcStreamUid"'
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
              children: '                    "region"'
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
              children: '                        "xPos"'
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
              children: '                        "yPos"'
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
              children: '                        "zIndex"'
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
              children: '                        "width"'
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
              children: '                        "height"'
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
              children: '                    "imageUrl"'
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
              children: '                    "region"'
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
              children: '                        "xPos"'
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
              children: '                        "yPos"'
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
              children: '                        "zIndex"'
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
              children: '                        "width"'
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
              children: '                        "height"'
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
              children: "                    },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "fillMode"'
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
              children: '"fit"'
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
              children: "            ],"
            })
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
              children: '"H.264"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "codecProfile"'
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
              children: '            "seiOptions"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {}"
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
              children: '    "rtmpUrl"'
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
              children: '    "createTs"'
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
              children: "1616946970"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "updateTs"'
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
              children: "1783656785"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "state"'
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
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Vertical layout for Media Push with transcoding"
      })
    }), `
`, _jsx(_components.p, {
      children: "If the status code is 2XX, the request is successful."
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
              children: '    "transcodeOptions"'
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
              children: '        "rtcChannel"'
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
              children: '            "codecProfile"'
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
              children: '            "sampleRate"'
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
              children: '            "audioChannels"'
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
              children: '            "rtcStreamUids"'
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "                201"
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
              children: '            "canvas"'
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
              children: '                "width"'
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
              children: '                "height"'
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
              children: '                "color"'
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
              children: '            "layout"'
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
              children: '                    "rtcStreamUid"'
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
              children: '                    "region"'
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
              children: '                        "xPos"'
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
              children: '                        "yPos"'
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
              children: '                        "zIndex"'
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
              children: '                        "width"'
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
              children: '                        "height"'
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "fillMode"'
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "placeholderImageUrl"'
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
              children: "            ],"
            })
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
              children: '"H.264"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "codecProfile"'
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
              children: '"high"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: '            "layoutType"'
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
              children: '            "vertical"'
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
              children: '                "maxResolutionUid"'
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
              children: '                "fillMode"'
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "refreshIntervalSec"'
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
              children: "4"
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "defaultPlaceholderImageUrl"'
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "seiOptions"'
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
              children: '                "source"'
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
              children: '                    "metadata"'
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
              children: '                    "datastream"'
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
              children: '                    "customized"'
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
              children: '                        "payload"'
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
              children: '"example"'
            })]
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
              children: '                "sink"'
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
              children: '                    "type"'
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
              children: "100"
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
              children: '    "rtmpUrl"'
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
      children: _jsx(_components.strong, {
        children: "Media Push without transcoding"
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
              children: '      "name"'
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
              children: '"wX8210Ce1VWVyGVHyaHA0W"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "rawOptions"'
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
              children: '        "rtcChannel"'
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
              children: '"example"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "rtcStreamUid"'
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
              children: "XXXX"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "rtmpUrl"'
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
              children: '"rtmp://vid-218.push.chinanetcenter.broadcastapp.agora.io/live/global"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "idleTimeout"'
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
              children: "120"
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
`, _jsx(_components.h2, {
      id: "list-query-the-converters-of-all-or-specified-channels-under-a-project",
      children: "List: Query the Converters of all or specified channels under a project"
    }), `
`, _jsx(_components.h3, {
      id: "http-request-4",
      children: "HTTP request"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Query all Converters under a project: ", _jsx(_components.code, {
            children: "GET https://api.agora.io/v1/projects/{appId}/rtmp-converters"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Query the Converter of a specified channel under a project: ", _jsx(_components.code, {
            children: "GET https://api.agora.io/v1/projects/{appId}/channels/{cname}/rtmp-converters"
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-4",
      children: "Path parameter"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "appId"
          }), ": (Required) String. The App ID provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "cname"
          }), ": (Required) String. The Agora channel name. This is the channel to which the stream processed by the Converter belongs. The maximum length of the string is 64 characters, and the following character sets (89 characters in total) are supported:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "All lowercase English letters (a-z)"
          }), `
`, _jsx(_components.li, {
            children: "All uppercase English letters (A-Z)"
          }), `
`, _jsx(_components.li, {
            children: "Numbers 0-9 and the space character"
          }), `
`, _jsx(_components.li, {
            children: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ","'
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-2",
      children: "Query Parameters"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "cursor"
      }), ": (Optional) String. Cursor for paging query Converters. The value must be greater than or equal to 0."]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["You do not need to set the cursor when you initiate a ", _jsx(_components.code, {
            children: "List"
          }), " request for the first time. After the request is successful, the list of Converters on the first page return."]
        }), `
`, _jsxs(_components.li, {
          children: ["Each request returns information about a maximum of 500 Converters. If the number of Converters under the project exceeds 500, get the ", _jsx(_components.code, {
            children: "cursor"
          }), " from the response body, and pass the ", _jsx(_components.code, {
            children: "cursor"
          }), " in the URL of the next request. Until the value of the ", _jsx(_components.code, {
            children: "cursor"
          }), " field in the response body is ", _jsx(_components.code, {
            children: "0"
          }), ", it means that all Converters under the project or the specified channel have been queried."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The HTTPS URL using Query Parameters is as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Query all Converters under a project: ", _jsx(_components.code, {
            children: "GET https://api.agora.io/v1/projects/{appId}/rtmp-converters?cursor={cursor}"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Query the Converter of a specified channel under a project: ", _jsx(_components.code, {
            children: "GET https://api.agora.io/v1/projects/{appId}/channels/{cname}/rtmp-converters?cursor={cursor}"
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-header-4",
      children: "Request header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Content-Type"
          }), ": ", _jsx(_components.code, {
            children: "application/json"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Authorization"
          }), ": The value of this field must refer to the ", _jsx(_components.a, {
            href: "./restful-authentication",
            children: "Authentication instructions"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "X-Request-ID"
          }), ": The UUID (Universal Unique Identifier) that identifies this ", _jsx(_components.strong, {
            children: "request"
          }), ". Agora server generates a UUID to pass in and returns ", _jsx(_components.code, {
            children: "X-Request-ID"
          }), " field in the response header."]
        }), `
`, _jsxs(_components.blockquote, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Agora recommends that you assign a value to ", _jsx(_components.code, {
              children: "X-Request-ID"
            }), ". Agora server returns an ", _jsx(_components.code, {
              children: "X-Custom-Request-ID"
            }), " field in the response header for troubleshooting."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "http-response-4",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["All possible response status codes. See ", _jsx(_components.a, {
        href: "#status-codes",
        children: "Status codes"
      }), " for details."]
    }), `
`, _jsx(_components.h4, {
      id: "response-header-4",
      children: "Response header"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "X-Request-ID"
      }), ": The UUID (Universal Unique Identifier) that identifies this request. This value is the same as the X-Request-ID in the header of this request. If there is an error in the request, print out the value in the log to troubleshoot the problem."]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: "If the response status code of this request is not 2XX, this field may be missing from the response header."
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "response-body-4",
      children: "Response body"
    }), `
`, _jsx(_components.p, {
      children: "If the status code is 2XX, the request is successful. The field structure is shown in the following figure:"
    }), `
`, `
`, _jsx(_components.p, {
      children: "Details for these fields are shown in the following table:"
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
            children: "Descriptions"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "success"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Bool"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The request was successful."
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
            children: "JSON Object"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Returns data details."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data.total_count"
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
            children: "The number of all Converters under the queried project or channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data.cursor"
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
            children: ["Cursor for paging query Converter information list. If the cursor is ", _jsx(_components.code, {
              children: "0"
            }), ", it means that all Converters under the project or the specified channel have been queried; otherwise, the query needs to be continued."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data.members.rtcChannel"
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
            children: "The Agora channel name. This is the channel to which the stream processed by the Converter belongs."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data.members.converterName"
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
            children: "The name of the Converter."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data.members.updateTs"
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
            children: "The Unix timestamp(seconds) when the Converter configuration was last updated."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data.members.appId"
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
            children: ["The ", _jsx(_components.strong, {
              children: "App ID"
            }), " provided by Agora. You can get an App ID after creating a project in the Agora console. An App ID is the unique identification of a project."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data.members.rtmpUrl"
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
            children: "The CDN streaming address."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data.members.converterId"
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
            children: ["The ", _jsx(_components.strong, {
              children: "ID"
            }), " of the Converter. The unique identifier for the Converter."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data.members.create"
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
            children: "The Unix timestamp(seconds) when the Converter was created."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data.members.idleTimeout"
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
            children: "The maximum time (seconds) that the Converter is idle. Idle means that all users corresponding to the media stream processed by the Converter have left the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data.members.state"
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
            children: [_jsx(_components.p, {
              children: "The running status of the Converter:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "connecting"
                  }), ": Connecting to the Agora streaming server and the CDN server."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "running"
                  }), ": Pushing the stream."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "failed"
                  }), ": Failed to push the stream."]
                }), `
`]
              }), `
`]
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "response-example-3",
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
              children: '    "success"'
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
              children: '        "total_count"'
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
              children: '        "cursor"'
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
              children: '        "members"'
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
              children: '                "rtcChannel"'
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
              children: '"testchannel"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "status"'
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
              children: '"200"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "converterName"'
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
              children: '"wX8210XXXXWVyGVHyaHA0W"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "updateTs"'
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
              children: '"1641267823"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "appId"'
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
              children: '"abc123xxxxxxxxxxxxxxxxxxxxxxxxx"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "rtmpUrl"'
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
              children: '"rtmp://example/live/areu"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "ip"'
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
              children: '"183.131.160.244"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "converterId"'
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
              children: '"889B6D4BEC4XXXXE68CCDA978BF21350"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "create"'
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
              children: '"1641267818"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "idleTimeout"'
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
              children: '"120"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "state"'
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
              children: "        ]"
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
`, _jsx(_components.h2, {
      id: "api-call-rate-limits",
      children: "API call rate limits"
    }), `
`, _jsxs(_components.p, {
      children: ["The Agora server limits the call rate for the Media Push API by method. When a call rate exceeds its limit, the status code ", _jsx(_components.code, {
        children: "429 (Too Many Requests)"
      }), " is returned. If you need a higher call rate, please contact technical support."]
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
            children: "Rate limits"
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
            children: "In a project, the rate limit for the rate of creating a Converter is 50 times per second."
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
            children: "In a project, the rate limit for the converter destruction is 50 times per second."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Update"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "In a project, the rate limit for the rate of updating a specified Converter is 2 times per second."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Get"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "In a project, the rate limit for the rate of getting the status of a specified Converter is 50 times per second."
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
        children: "If the status code is 2XX, the request is successful."
      }), `
`, _jsxs(_components.li, {
        children: ["If the status code is not 2XX, the request fails. Please troubleshoot the problem based on the content of the ", _jsx(_components.code, {
          children: "message"
        }), " field in the corresponding response message Body."]
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
            children: "Status codes"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Possible message field content"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "200 OK"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "/"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "400 Bad Request"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Invalid parameter: rtmpUrl. Replace it, and retry."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Invalid parameter: idleTimeout. Replace it, and retry."
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
            children: "401 Unauthorized"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Invalid authentication credentials."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "403 Forbidden"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The project lacks permission to use this function. Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "Agora technical support"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "404 Not Found"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Resource cannot be found/has been destroyed."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "409 Conflict"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Resource with the same name already exists. Use the existing resource; otherwise, delete it, and create a new resource."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "429 Too Many Requests"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request rate limit exceeded.Resource quota limit exceeded.No available resources."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "500 Unknown"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal errors. Contact Agora for assistance with troubleshooting."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "501 Not Implemented"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The method requested has not been implemented."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "503 Service Unavailable"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The server is temporarily overloading. Retry with a backoff strategy and contact Agora for assistance with troubleshooting.The server is temporarily down. Retry with a backoff strategy."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "504 Gateway Timeout"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Gateway timeout. Check whether the resource is created; if not, re-create a new resource."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "consideration",
      children: "Consideration"
    }), `
`, _jsx(_components.p, {
      children: "This section summarizes the basic considerations for using the Media Push RESTful API:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Please make sure that the Agora channel profile is live broadcasting."
      }), `
`, _jsxs(_components.li, {
        children: ["In case of request errors, make sure to print the values of the ", _jsx(_components.code, {
          children: "X-Request-ID"
        }), " and ", _jsx(_components.code, {
          children: "X-Resource-ID"
        }), " fields in the response header for troubleshooting."]
      }), `
`, _jsx(_components.li, {
        children: "As explained in the name description, you should use the name parameter if only one Converter is needed in a channel."
      }), `
`, _jsxs(_components.li, {
        children: ["Set the ", _jsx(_components.code, {
          children: "region"
        }), " parameter to the region associated with the CDN source, as explained in the ", _jsx(_components.code, {
          children: "region"
        }), " parameter description."]
      }), `
`, _jsx(_components.li, {
        children: "If the Converter is automatically destroyed due to a service failure or other reasons, Agora recommends that you create a new Converter."
      }), `
`, _jsx(_components.li, {
        children: "If the CDN side's pulling stream is abnormal after creating a Converter, Agora recommends that you delete the Converter and create a new one."
      }), `
`, _jsxs(_components.li, {
        children: ["When updating the same Converter multiple times, ensure that the ", _jsx(_components.code, {
          children: "sequence"
        }), " value is incremented, as explained in the ", _jsx(_components.code, {
          children: "sequence"
        }), " parameter description."]
      }), `
`, _jsx(_components.li, {
        children: "Agora does not support performing both transcoding and non-transcoding live streaming in the same Converter. To use a different streaming mode, create a new Converter and configure it accordingly."
      }), `
`, _jsx(_components.li, {
        children: "In non-transcoding mode, the Converter can only forward video streams with RTMP, not transcode video streams. To ensure that CDN audiences can watch the video, use video codec formats that comply with the RTMP standard protocol, such as H.264 or H.265. If the video codec format at the streaming end is VP8, use the Converter's transcoding mode."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For more integration recommendations, see ", _jsx(_components.a, {
        href: "./integration-best-practices",
        children: "Integration Best Practices"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "commonly-used-video-profile",
      children: "Commonly used video profile"
    }), `
`, _jsx(_components.p, {
      children: "Agora recommends that you use the default values when setting the video resolution, frame rate, and bitrate of the output transcoded stream. You can also refer to the following table to set the values. If you set a bitrate beyond a reasonable range, the Agora server automatically adjusts the bitrate to stay within a reasonable range."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Resolution"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Frame rate (fps)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Bitrate (Kbps)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "160 × 120"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "130"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "120 × 120"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "320 × 180"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "280"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "180 × 180"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "200"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "240 × 180"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "240"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "320 × 240"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "400"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "240 × 240"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "280"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "424 × 240"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "440"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "640 × 360"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "800"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 × 360"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "520"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "640 × 360"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1200"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 × 360"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "800"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "480 × 360"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "640"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "480 × 360"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "980"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "640 × 480"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1000"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "480 × 480"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "800"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "640 × 480"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1500"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "480 × 480"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1200"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "848 × 480"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1220"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "848 × 480"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1860"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "640 × 480"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "800"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1280 × 720"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2260"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1280 × 720"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3420"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "960 × 720"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1820"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "960 × 720"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2760"
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
