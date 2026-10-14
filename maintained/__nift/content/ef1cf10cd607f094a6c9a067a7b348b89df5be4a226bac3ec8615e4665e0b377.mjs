import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Enable adaptive bitrate",
  description: "Configure ABR layers for Media Gateway video transcoding."
};
export let _markdown = `

Adaptive Bitrate (ABR) streaming delivers multiple video quality levels from a single source, allowing viewers to automatically switch between different bitrates based on their network conditions and device capabilities. This ensures optimal viewing experience by reducing buffering and maintaining the highest possible quality for each viewer's situation.

This guide explains how to configure Adaptive Bitrate (ABR) encoding for video transcoding in Media Gateway.

## Understand the tech [#understand-the-tech]

ABR works by encoding the same video content at multiple resolutions and bitrates, called layers. Viewers can then select or automatically switch between different layers based on their available bandwidth and device performance. Media Gateway supports ABR through the \`simulcastStreamLayers\` configuration in stream templates. When enabled, the system creates multiple encoding layers from your source stream.

Following are the key ABR concepts:

* **Source stream**: The original stream pushed by the client without transcoding.
* **Main stream**: The primary transcoded stream output by Media Gateway when video transcoding is enabled. Resolution does not exceed the source stream resolution.
* **Layer**: Additional streams with lower bitrates that Media Gateway outputs based on your configuration.
* **Layer ID**: A unique identifier for each layer stream, ranging from 1 to 7.
* **Low stream**: A lower-quality stream option that was available before full ABR support. It is now implemented as Layer ID 7 to maintain compatibility with existing applications that expect this stream type.

<CalloutContainer type="info">
  <CalloutDescription>
    ABR layers are independent. Enabling ABR does not automatically create a low stream.
    Use Layer ID 7 for backward compatibility with older applications that don't support full ABR functionality.
  </CalloutDescription>
</CalloutContainer>

## ABR configuration [#abr-configuration]

Configure ABR encoding in stream configuration templates using the \`settings.transcoding.video.simulcastStreamLayers\` parameter.

### API endpoint [#api-endpoint]

Use the **Create or reset template** API to configure ABR layers:

* Method: \`PUT\`
* Endpoint: \`https://api.agora.io/{region}/v1/projects/{appId}/rtls/ingress/stream-templates/{templateId}\`
* Authentication: HTTP Basic authentication or HMAC authentication

Path parameters:

| Parameter    | Required | Description                                                                                                                         |
| ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| \`region\`     | Yes      | Region for the streaming template. Supported values are \`na\`, \`eu\`, \`ap\`, and \`cn\`. Use the same region as the input source stream. |
| \`appId\`      | Yes      | The App ID of your Agora project.                                                                                                   |
| \`templateId\` | Yes      | The flow configuration template ID. The value can contain only letters and numbers and cannot exceed 12 bytes.                      |

Relevant request fields:

| Field                                                        | Required | Description                                                                                                                                                                 |
| ------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`settings.transcoding.video.enabled\`                         | Yes      | Enables video transcoding. Set this field to \`true\` when you configure ABR layers.                                                                                          |
| \`settings.transcoding.video.width\`                           | Yes      | Encoding width of the main stream in pixels. Required when adaptive bitrate is enabled.                                                                                     |
| \`settings.transcoding.video.height\`                          | Yes      | Encoding height of the main stream in pixels. Required when adaptive bitrate is enabled.                                                                                    |
| \`settings.transcoding.video.fps\`                             | No       | Video encoding frame rate in fps. If omitted or set to \`0\`, the source stream frame rate is used.                                                                           |
| \`settings.transcoding.video.bitrate\`                         | No       | Encoding bitrate of the main stream in Kbps. If omitted, the source stream bitrate is used. If set to \`0\`, Agora automatically chooses a bitrate based on width and height. |
| \`settings.transcoding.video.simulcastStreamLayers\`           | Yes      | Array of layer transcoding parameters. If specified, ABR is enabled.                                                                                                        |
| \`settings.transcoding.video.simulcastStreamLayers[].id\`      | Yes      | Layer ID. Supported values range from \`1\` to \`7\`.                                                                                                                           |
| \`settings.transcoding.video.simulcastStreamLayers[].width\`   | No       | Encoding width of the layer in pixels. If specified, it must be smaller than \`video.width\` and decrease monotonically as the layer ID increases.                            |
| \`settings.transcoding.video.simulcastStreamLayers[].height\`  | No       | Encoding height of the layer in pixels. If specified, it must be smaller than \`video.height\` and decrease monotonically as the layer ID increases.                          |
| \`settings.transcoding.video.simulcastStreamLayers[].fps\`     | No       | Encoding frame rate of the layer in fps. If specified, it must be smaller than \`video.fps\`. If omitted or set to \`0\`, the main stream frame rate is used.                   |
| \`settings.transcoding.video.simulcastStreamLayers[].bitrate\` | Yes      | Encoding bitrate of the layer in Kbps. It must be smaller than \`video.bitrate\` and decrease monotonically by layer ID.                                                      |

### Request example [#request-example]

\`\`\`bash
curl --request PUT \\
  --url https://api.agora.io/\${region}/v1/projects/\${appId}/rtls/ingress/stream-templates/\${templateId} \\
  --header 'Content-Type: application/json' \\
  --header 'Authorization: Basic XXXXXX' \\
  --data '{
    "settings": {
      "transcoding": {
        "video": {
          "enabled": true,
          "width": 1920,
          "height": 1080,
          "fps": 30,
          "bitrate": 3800,
          "simulcastStreamLayers": [
            { "id": 1, "width": 1280, "height": 720, "fps": 30, "bitrate": 2400 },
            { "id": 2, "width": 960, "height": 540, "fps": 30, "bitrate": 1500 },
            { "id": 3, "width": 854, "height": 480, "fps": 30, "bitrate": 800 },
            { "id": 7, "width": 640, "height": 360, "fps": 30, "bitrate": 500 }
          ]
        },
        "audio": {
          "enabled": true,
          "profile": 3
        }
      }
    }
  }'
\`\`\`

### Configuration requirements [#configuration-requirements]

* Maximum 5 simultaneous layers per stream
* Specify at least one dimension for the main stream when ABR is enabled
* Specify at least one dimension for each ABR layer
* Specify bitrates in decreasing order by Layer ID
* If specified, layer width and height must decrease monotonically as the Layer ID increases
* If specified, each layer FPS must be lower than the main stream FPS
* Clients must specify the Layer ID when subscribing to receive the corresponding quality layer

### Layer ID selection [#layer-id-selection]

When specifying layer IDs, best practice is to bind each ID to a specific resolution. This enables you to dynamically add or delete ABR layers without needing to modify the mapping between layer ID and resolution.

**Recommended Layer ID mapping:**

| Layer ID | Resolution        |
| -------- | ----------------- |
| 1        | 3840x2160 (4K)    |
| 2        | 2560x1440 (2K)    |
| 3        | 1920x1080 (1080p) |
| 4        | 1280x720 (720p)   |
| 5        | 960x540 (540p)    |
| 6        | 854x480 (480p)    |
| 7        | 640x360 (360p)    |

**Example configuration:**

If your source stream is 1080p and you want to output 1080p, 720p, 480p, and 360p video streams, configure the ABR layer IDs as follows:

| Layer ID    | Resolution |
| ----------- | ---------- |
| Main Stream | 1080p      |
| 4           | 720p       |
| 6           | 480p       |
| 7           | 360p       |

## Webhook notifications [#webhook-notifications]

To help you monitor the ABR configuration for each stream, Media Gateway provides this information through webhooks. When video transcoding is enabled, the \`live_stream_connected\` event includes the transcoding configuration details for your stream. See [Receive notifications about channel events](./receive-notifications.md).

**Example notification payload**

The \`transcoding.video.simulcastStreamLayers\` array shows the active ABR layers for this stream, including their resolution, bitrate, and Layer ID configuration.

\`\`\`json
{
    "beginAt": "2025-03-11T17:56:23.60Z",
    "domain": "rtls-ingress-test-cn.agoramdn.com",
    "region": "dev-cn",
    "rtcInfo": {
        "channel": "abrtest0224",
        "uid": "1000"
    },
    "sid": "66ff5811-7baa-0298-8244-f2de5ae2a047",
    "streamKey": "123456rlg-RSQ_TqkhqgF373zAll4vz",
    "transcoding": {
        "audio": {
            "enabled": true,
            "profile": 3
        },
        "video": {
            "enabled": true,
            "bitrate": 3000,
            "fps": 30,
            "width": 1920,
            "height": 1080,
            "simulcastStreamLayers": [
                {
                    "id": 4,
                    "bitrate": 2000,
                    "fps": 30,
                    "height": 720,
                    "width": 1280
                },
                {
                    "id": 5,
                    "bitrate": 1200,
                    "fps": 30,
                    "height": 540,
                    "width": 960
                },
                {
                    "id": 7,
                    "bitrate": 700,
                    "fps": 30,
                    "height": 360,
                    "width": 640
                }
            ]
        }
    }
}
\`\`\`

## Subscriber-side ABR stream [#subscriber-side-abr-stream]

Subscribers can choose ABR layers on the receiving side and let the SDK adapt to changing network conditions.

### Integration guidelines [#integration-guidelines]

* **Web SDK**:
  * **Minimum version**: 4.22.1 or later
  * **Recommended**: Use the latest SDK from the [official website](https://docs.agora.io/en/sdks)
  * **Note**: To use the latest Agora Web FLS Player, contact [technical support](mailto\\:support@agora.io)

* **Native SDK**:
  * **Minimum version**: 4.3.2 or later
  * **Recommended**: Use the latest SDK from the [official website](https://docs.agora.io/en/sdks)

### Stream quality levels [#stream-quality-levels]

| RTMPG Layer ID | Native SDK (\`VideoStreamType\`) | Web SDK (\`RemoteStreamType\`) |
| -------------- | ------------------------------ | ---------------------------- |
| 1              | \`VIDEO_STREAM_LAYER_1\`         | \`HIGH_STREAM_LAYER1\`         |
| 2              | \`VIDEO_STREAM_LAYER_2\`         | \`HIGH_STREAM_LAYER2\`         |
| 3              | \`VIDEO_STREAM_LAYER_3\`         | \`HIGH_STREAM_LAYER3\`         |
| 4              | \`VIDEO_STREAM_LAYER_4\`         | \`HIGH_STREAM_LAYER4\`         |
| 5              | \`VIDEO_STREAM_LAYER_5\`         | \`HIGH_STREAM_LAYER5\`         |
| 6              | \`VIDEO_STREAM_LAYER_6\`         | \`HIGH_STREAM_LAYER6\`         |
| 7              | \`VIDEO_STREAM_LOW\`             | \`LOW_STREAM\`                 |
| Push streaming | \`VIDEO_STREAM_HIGH\`            | \`HIGH_STREAM\`                |

### Native SDK: Subscriber-side APIs [#native-sdk-subscriber-side-apis]

#### Configure remote subscriber fallback [#configure-remote-subscriber-fallback]

* API: \`setRemoteSubscribeFallbackOption(StreamFallbackOptions option)\`

* Description: Sets the fallback option for subscribed audio and video streams under poor network conditions. In suboptimal network environments, real-time audio and video quality may degrade. Use this method to set a \`StreamFallbackOptions\` value. When the downlink network is weak and the quality is severely affected, the SDK automatically reduces the video stream to a lower layer to maintain smooth playback. The SDK continuously monitors the network and restores the higher layer when conditions improve.

  Specify the minimum acceptable fallback level:

  * To fall back to a lower video stream, use \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW\`.
  * To fall back to audio only, use \`STREAM_FALLBACK_OPTION_AUDIO_ONLY\`.

* Supported values:
  * \`STREAM_FALLBACK_OPTION_DISABLED\`
  * \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW\`
  * \`STREAM_FALLBACK_OPTION_AUDIO_ONLY\`
  * \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_1\`
  * \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_2\`
  * \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_3\`
  * \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_4\`
  * \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_5\`
  * \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_6\`

* Enum: \`StreamFallbackOptions\`

  \`\`\`ts
  enum StreamFallbackOptions {
      STREAM_FALLBACK_OPTION_DISABLED,
      STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW,
      STREAM_FALLBACK_OPTION_AUDIO_ONLY,
      STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_1,
      STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_2,
      STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_3,
      STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_4,
      STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_5,
      STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_6
  }
  \`\`\`

#### Manual stream selection [#manual-stream-selection]

* API: \`setRemoteVideoStreamType(int uid, VideoStreamType streamType)\`
* Description: Sets the stream type to subscribe to for a specific remote user.

#### Set the default stream type [#set-the-default-stream-type]

* API: \`setRemoteDefaultVideoStreamType(VideoStreamType streamType)\`
* Description: Sets the default stream type for new subscriptions.
* Enum: \`VideoStreamType\`

  \`\`\`ts
  enum VideoStreamType {
      VIDEO_STREAM_HIGH,
      VIDEO_STREAM_LOW,
      VIDEO_STREAM_LAYER_1,
      VIDEO_STREAM_LAYER_2,
      VIDEO_STREAM_LAYER_3,
      VIDEO_STREAM_LAYER_4,
      VIDEO_STREAM_LAYER_5,
      VIDEO_STREAM_LAYER_6;
  }
  \`\`\`

### Web SDK: Subscriber-side APIs [#web-sdk-subscriber-side-apis]

#### Enable bandwidth estimation [#enable-bandwidth-estimation]

* API: \`.setParameter("ENABLE_AUT_CC", true);\`
* Description: AUT-CC is a server-side Bandwidth Estimation (BWE) mechanism that relies on packet loss. Its main inputs include the number of packets, packet size, feedback on packet loss, and the timing of that feedback. The output is the currently available bandwidth.

#### Configure remote subscriber fallback [#configure-remote-subscriber-fallback-1]

* API: \`setStreamFallbackOption(uid: UID, fallbackType: RemoteStreamFallbackType): Promise<void>\`

* Description: Enables automatic switching on the subscriber side under poor network conditions.

* Example:

  \`\`\`js
  // the range supports up to LOW_STREAM
  client.setStreamFallbackOption(uid, 1);
  \`\`\`

#### Manual stream selection [#manual-stream-selection-1]

* API: \`setRemoteVideoStreamType(uid: UID, streamType: RemoteStreamType): Promise<void>\`

* Description: Selects the high or low stream for a specific remote user.

* Example:

  \`\`\`js
  client.setRemoteVideoStreamType(uid, 0); // HIGH_STREAM = 0
  \`\`\`

* Enum: \`VideoStreamType\`

  \`\`\`ts
  enum VideoStreamType {
      HIGH_STREAM,
      LOW_STREAM,
      HIGH_STREAM_LAYER1,
      HIGH_STREAM_LAYER2,
      HIGH_STREAM_LAYER3,
      HIGH_STREAM_LAYER4,
      HIGH_STREAM_LAYER5,
      HIGH_STREAM_LAYER6;
  }
  \`\`\`

For manual switching, consider the network conditions. The following example shows how to obtain the network status:

\`\`\`js
const NetworkQualityDesc = [
        "Unknown",
        "Excellent",
        "Good",
        "Poor",
        "Bad",
        "Very Bad",
        "Down",
];
client.on("network-quality", (quality) => {
        uplinkQuality = NetworkQualityDesc[quality.uplinkNetworkQuality];
        downlinkQuality = NetworkQualityDesc[quality.downlinkNetworkQuality];
        console.log(uplinkQuality, downlinkQuality);
});
\`\`\`

#### Set the default stream type [#set-the-default-stream-type-1]

* API: \`setRemoteDefaultVideoStreamType(streamType: RemoteStreamType): Promise<void>\`
* Description: Sets the default stream type for all remote users.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Adaptive Bitrate (ABR) streaming delivers multiple video quality levels from a single source, allowing viewers to automatically switch between different bitrates based on their network conditions and device capabilities. This ensures optimal viewing experience by reducing buffering and maintaining the highest possible quality for each viewer's situation."
  }, {
    heading: undefined,
    content: "This guide explains how to configure Adaptive Bitrate (ABR) encoding for video transcoding in Media Gateway."
  }, {
    heading: "understand-the-tech",
    content: "ABR works by encoding the same video content at multiple resolutions and bitrates, called layers. Viewers can then select or automatically switch between different layers based on their available bandwidth and device performance. Media Gateway supports ABR through the `simulcastStreamLayers` configuration in stream templates. When enabled, the system creates multiple encoding layers from your source stream."
  }, {
    heading: "understand-the-tech",
    content: "Following are the key ABR concepts:"
  }, {
    heading: "understand-the-tech",
    content: "**Source stream**: The original stream pushed by the client without transcoding."
  }, {
    heading: "understand-the-tech",
    content: "**Main stream**: The primary transcoded stream output by Media Gateway when video transcoding is enabled. Resolution does not exceed the source stream resolution."
  }, {
    heading: "understand-the-tech",
    content: "**Layer**: Additional streams with lower bitrates that Media Gateway outputs based on your configuration."
  }, {
    heading: "understand-the-tech",
    content: "**Layer ID**: A unique identifier for each layer stream, ranging from 1 to 7."
  }, {
    heading: "understand-the-tech",
    content: "**Low stream**: A lower-quality stream option that was available before full ABR support. It is now implemented as Layer ID 7 to maintain compatibility with existing applications that expect this stream type."
  }, {
    heading: "understand-the-tech",
    content: `ABR layers are independent. Enabling ABR does not automatically create a low stream.
Use Layer ID 7 for backward compatibility with older applications that don't support full ABR functionality.`
  }, {
    heading: "abr-configuration",
    content: "Configure ABR encoding in stream configuration templates using the `settings.transcoding.video.simulcastStreamLayers` parameter."
  }, {
    heading: "api-endpoint",
    content: "Use the **Create or reset template** API to configure ABR layers:"
  }, {
    heading: "api-endpoint",
    content: "Method: `PUT`"
  }, {
    heading: "api-endpoint",
    content: "Endpoint: `https://api.agora.io/{region}/v1/projects/{appId}/rtls/ingress/stream-templates/{templateId}`"
  }, {
    heading: "api-endpoint",
    content: "Authentication: HTTP Basic authentication or HMAC authentication"
  }, {
    heading: "api-endpoint",
    content: "Path parameters:"
  }, {
    heading: "api-endpoint",
    content: "Parameter"
  }, {
    heading: "api-endpoint",
    content: "Required"
  }, {
    heading: "api-endpoint",
    content: "Description"
  }, {
    heading: "api-endpoint",
    content: "`region`"
  }, {
    heading: "api-endpoint",
    content: "Yes"
  }, {
    heading: "api-endpoint",
    content: "Region for the streaming template. Supported values are `na`, `eu`, `ap`, and `cn`. Use the same region as the input source stream."
  }, {
    heading: "api-endpoint",
    content: "`appId`"
  }, {
    heading: "api-endpoint",
    content: "Yes"
  }, {
    heading: "api-endpoint",
    content: "The App ID of your Agora project."
  }, {
    heading: "api-endpoint",
    content: "`templateId`"
  }, {
    heading: "api-endpoint",
    content: "Yes"
  }, {
    heading: "api-endpoint",
    content: "The flow configuration template ID. The value can contain only letters and numbers and cannot exceed 12 bytes."
  }, {
    heading: "api-endpoint",
    content: "Relevant request fields:"
  }, {
    heading: "api-endpoint",
    content: "Field"
  }, {
    heading: "api-endpoint",
    content: "Required"
  }, {
    heading: "api-endpoint",
    content: "Description"
  }, {
    heading: "api-endpoint",
    content: "`settings.transcoding.video.enabled`"
  }, {
    heading: "api-endpoint",
    content: "Yes"
  }, {
    heading: "api-endpoint",
    content: "Enables video transcoding. Set this field to `true` when you configure ABR layers."
  }, {
    heading: "api-endpoint",
    content: "`settings.transcoding.video.width`"
  }, {
    heading: "api-endpoint",
    content: "Yes"
  }, {
    heading: "api-endpoint",
    content: "Encoding width of the main stream in pixels. Required when adaptive bitrate is enabled."
  }, {
    heading: "api-endpoint",
    content: "`settings.transcoding.video.height`"
  }, {
    heading: "api-endpoint",
    content: "Yes"
  }, {
    heading: "api-endpoint",
    content: "Encoding height of the main stream in pixels. Required when adaptive bitrate is enabled."
  }, {
    heading: "api-endpoint",
    content: "`settings.transcoding.video.fps`"
  }, {
    heading: "api-endpoint",
    content: "No"
  }, {
    heading: "api-endpoint",
    content: "Video encoding frame rate in fps. If omitted or set to `0`, the source stream frame rate is used."
  }, {
    heading: "api-endpoint",
    content: "`settings.transcoding.video.bitrate`"
  }, {
    heading: "api-endpoint",
    content: "No"
  }, {
    heading: "api-endpoint",
    content: "Encoding bitrate of the main stream in Kbps. If omitted, the source stream bitrate is used. If set to `0`, Agora automatically chooses a bitrate based on width and height."
  }, {
    heading: "api-endpoint",
    content: "`settings.transcoding.video.simulcastStreamLayers`"
  }, {
    heading: "api-endpoint",
    content: "Yes"
  }, {
    heading: "api-endpoint",
    content: "Array of layer transcoding parameters. If specified, ABR is enabled."
  }, {
    heading: "api-endpoint",
    content: "`settings.transcoding.video.simulcastStreamLayers[].id`"
  }, {
    heading: "api-endpoint",
    content: "Yes"
  }, {
    heading: "api-endpoint",
    content: "Layer ID. Supported values range from `1` to `7`."
  }, {
    heading: "api-endpoint",
    content: "`settings.transcoding.video.simulcastStreamLayers[].width`"
  }, {
    heading: "api-endpoint",
    content: "No"
  }, {
    heading: "api-endpoint",
    content: "Encoding width of the layer in pixels. If specified, it must be smaller than `video.width` and decrease monotonically as the layer ID increases."
  }, {
    heading: "api-endpoint",
    content: "`settings.transcoding.video.simulcastStreamLayers[].height`"
  }, {
    heading: "api-endpoint",
    content: "No"
  }, {
    heading: "api-endpoint",
    content: "Encoding height of the layer in pixels. If specified, it must be smaller than `video.height` and decrease monotonically as the layer ID increases."
  }, {
    heading: "api-endpoint",
    content: "`settings.transcoding.video.simulcastStreamLayers[].fps`"
  }, {
    heading: "api-endpoint",
    content: "No"
  }, {
    heading: "api-endpoint",
    content: "Encoding frame rate of the layer in fps. If specified, it must be smaller than `video.fps`. If omitted or set to `0`, the main stream frame rate is used."
  }, {
    heading: "api-endpoint",
    content: "`settings.transcoding.video.simulcastStreamLayers[].bitrate`"
  }, {
    heading: "api-endpoint",
    content: "Yes"
  }, {
    heading: "api-endpoint",
    content: "Encoding bitrate of the layer in Kbps. It must be smaller than `video.bitrate` and decrease monotonically by layer ID."
  }, {
    heading: "configuration-requirements",
    content: "Maximum 5 simultaneous layers per stream"
  }, {
    heading: "configuration-requirements",
    content: "Specify at least one dimension for the main stream when ABR is enabled"
  }, {
    heading: "configuration-requirements",
    content: "Specify at least one dimension for each ABR layer"
  }, {
    heading: "configuration-requirements",
    content: "Specify bitrates in decreasing order by Layer ID"
  }, {
    heading: "configuration-requirements",
    content: "If specified, layer width and height must decrease monotonically as the Layer ID increases"
  }, {
    heading: "configuration-requirements",
    content: "If specified, each layer FPS must be lower than the main stream FPS"
  }, {
    heading: "configuration-requirements",
    content: "Clients must specify the Layer ID when subscribing to receive the corresponding quality layer"
  }, {
    heading: "layer-id-selection",
    content: "When specifying layer IDs, best practice is to bind each ID to a specific resolution. This enables you to dynamically add or delete ABR layers without needing to modify the mapping between layer ID and resolution."
  }, {
    heading: "layer-id-selection",
    content: "**Recommended Layer ID mapping:**"
  }, {
    heading: "layer-id-selection",
    content: "Layer ID"
  }, {
    heading: "layer-id-selection",
    content: "Resolution"
  }, {
    heading: "layer-id-selection",
    content: "1"
  }, {
    heading: "layer-id-selection",
    content: "3840x2160 (4K)"
  }, {
    heading: "layer-id-selection",
    content: "2"
  }, {
    heading: "layer-id-selection",
    content: "2560x1440 (2K)"
  }, {
    heading: "layer-id-selection",
    content: "3"
  }, {
    heading: "layer-id-selection",
    content: "1920x1080 (1080p)"
  }, {
    heading: "layer-id-selection",
    content: "4"
  }, {
    heading: "layer-id-selection",
    content: "1280x720 (720p)"
  }, {
    heading: "layer-id-selection",
    content: "5"
  }, {
    heading: "layer-id-selection",
    content: "960x540 (540p)"
  }, {
    heading: "layer-id-selection",
    content: "6"
  }, {
    heading: "layer-id-selection",
    content: "854x480 (480p)"
  }, {
    heading: "layer-id-selection",
    content: "7"
  }, {
    heading: "layer-id-selection",
    content: "640x360 (360p)"
  }, {
    heading: "layer-id-selection",
    content: "**Example configuration:**"
  }, {
    heading: "layer-id-selection",
    content: "If your source stream is 1080p and you want to output 1080p, 720p, 480p, and 360p video streams, configure the ABR layer IDs as follows:"
  }, {
    heading: "layer-id-selection",
    content: "Layer ID"
  }, {
    heading: "layer-id-selection",
    content: "Resolution"
  }, {
    heading: "layer-id-selection",
    content: "Main Stream"
  }, {
    heading: "layer-id-selection",
    content: "1080p"
  }, {
    heading: "layer-id-selection",
    content: "4"
  }, {
    heading: "layer-id-selection",
    content: "720p"
  }, {
    heading: "layer-id-selection",
    content: "6"
  }, {
    heading: "layer-id-selection",
    content: "480p"
  }, {
    heading: "layer-id-selection",
    content: "7"
  }, {
    heading: "layer-id-selection",
    content: "360p"
  }, {
    heading: "webhook-notifications",
    content: "To help you monitor the ABR configuration for each stream, Media Gateway provides this information through webhooks. When video transcoding is enabled, the `live_stream_connected` event includes the transcoding configuration details for your stream. See Receive notifications about channel events."
  }, {
    heading: "webhook-notifications",
    content: "**Example notification payload**"
  }, {
    heading: "webhook-notifications",
    content: "The `transcoding.video.simulcastStreamLayers` array shows the active ABR layers for this stream, including their resolution, bitrate, and Layer ID configuration."
  }, {
    heading: "subscriber-side-abr-stream",
    content: "Subscribers can choose ABR layers on the receiving side and let the SDK adapt to changing network conditions."
  }, {
    heading: "integration-guidelines",
    content: "**Web SDK**:"
  }, {
    heading: "integration-guidelines",
    content: "**Minimum version**: 4.22.1 or later"
  }, {
    heading: "integration-guidelines",
    content: "**Recommended**: Use the latest SDK from the official website"
  }, {
    heading: "integration-guidelines",
    content: "**Note**: To use the latest Agora Web FLS Player, contact technical support"
  }, {
    heading: "integration-guidelines",
    content: "**Native SDK**:"
  }, {
    heading: "integration-guidelines",
    content: "**Minimum version**: 4.3.2 or later"
  }, {
    heading: "integration-guidelines",
    content: "**Recommended**: Use the latest SDK from the official website"
  }, {
    heading: "stream-quality-levels",
    content: "RTMPG Layer ID"
  }, {
    heading: "stream-quality-levels",
    content: "Native SDK (`VideoStreamType`)"
  }, {
    heading: "stream-quality-levels",
    content: "Web SDK (`RemoteStreamType`)"
  }, {
    heading: "stream-quality-levels",
    content: "1"
  }, {
    heading: "stream-quality-levels",
    content: "`VIDEO_STREAM_LAYER_1`"
  }, {
    heading: "stream-quality-levels",
    content: "`HIGH_STREAM_LAYER1`"
  }, {
    heading: "stream-quality-levels",
    content: "2"
  }, {
    heading: "stream-quality-levels",
    content: "`VIDEO_STREAM_LAYER_2`"
  }, {
    heading: "stream-quality-levels",
    content: "`HIGH_STREAM_LAYER2`"
  }, {
    heading: "stream-quality-levels",
    content: "3"
  }, {
    heading: "stream-quality-levels",
    content: "`VIDEO_STREAM_LAYER_3`"
  }, {
    heading: "stream-quality-levels",
    content: "`HIGH_STREAM_LAYER3`"
  }, {
    heading: "stream-quality-levels",
    content: "4"
  }, {
    heading: "stream-quality-levels",
    content: "`VIDEO_STREAM_LAYER_4`"
  }, {
    heading: "stream-quality-levels",
    content: "`HIGH_STREAM_LAYER4`"
  }, {
    heading: "stream-quality-levels",
    content: "5"
  }, {
    heading: "stream-quality-levels",
    content: "`VIDEO_STREAM_LAYER_5`"
  }, {
    heading: "stream-quality-levels",
    content: "`HIGH_STREAM_LAYER5`"
  }, {
    heading: "stream-quality-levels",
    content: "6"
  }, {
    heading: "stream-quality-levels",
    content: "`VIDEO_STREAM_LAYER_6`"
  }, {
    heading: "stream-quality-levels",
    content: "`HIGH_STREAM_LAYER6`"
  }, {
    heading: "stream-quality-levels",
    content: "7"
  }, {
    heading: "stream-quality-levels",
    content: "`VIDEO_STREAM_LOW`"
  }, {
    heading: "stream-quality-levels",
    content: "`LOW_STREAM`"
  }, {
    heading: "stream-quality-levels",
    content: "Push streaming"
  }, {
    heading: "stream-quality-levels",
    content: "`VIDEO_STREAM_HIGH`"
  }, {
    heading: "stream-quality-levels",
    content: "`HIGH_STREAM`"
  }, {
    heading: "configure-remote-subscriber-fallback",
    content: "API: `setRemoteSubscribeFallbackOption(StreamFallbackOptions option)`"
  }, {
    heading: "configure-remote-subscriber-fallback",
    content: "Description: Sets the fallback option for subscribed audio and video streams under poor network conditions. In suboptimal network environments, real-time audio and video quality may degrade. Use this method to set a `StreamFallbackOptions` value. When the downlink network is weak and the quality is severely affected, the SDK automatically reduces the video stream to a lower layer to maintain smooth playback. The SDK continuously monitors the network and restores the higher layer when conditions improve."
  }, {
    heading: "configure-remote-subscriber-fallback",
    content: "Specify the minimum acceptable fallback level:"
  }, {
    heading: "configure-remote-subscriber-fallback",
    content: "To fall back to a lower video stream, use `STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW`."
  }, {
    heading: "configure-remote-subscriber-fallback",
    content: "To fall back to audio only, use `STREAM_FALLBACK_OPTION_AUDIO_ONLY`."
  }, {
    heading: "configure-remote-subscriber-fallback",
    content: "Supported values:"
  }, {
    heading: "configure-remote-subscriber-fallback",
    content: "`STREAM_FALLBACK_OPTION_DISABLED`"
  }, {
    heading: "configure-remote-subscriber-fallback",
    content: "`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW`"
  }, {
    heading: "configure-remote-subscriber-fallback",
    content: "`STREAM_FALLBACK_OPTION_AUDIO_ONLY`"
  }, {
    heading: "configure-remote-subscriber-fallback",
    content: "`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_1`"
  }, {
    heading: "configure-remote-subscriber-fallback",
    content: "`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_2`"
  }, {
    heading: "configure-remote-subscriber-fallback",
    content: "`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_3`"
  }, {
    heading: "configure-remote-subscriber-fallback",
    content: "`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_4`"
  }, {
    heading: "configure-remote-subscriber-fallback",
    content: "`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_5`"
  }, {
    heading: "configure-remote-subscriber-fallback",
    content: "`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_6`"
  }, {
    heading: "configure-remote-subscriber-fallback",
    content: "Enum: `StreamFallbackOptions`"
  }, {
    heading: "manual-stream-selection",
    content: "API: `setRemoteVideoStreamType(int uid, VideoStreamType streamType)`"
  }, {
    heading: "manual-stream-selection",
    content: "Description: Sets the stream type to subscribe to for a specific remote user."
  }, {
    heading: "set-the-default-stream-type",
    content: "API: `setRemoteDefaultVideoStreamType(VideoStreamType streamType)`"
  }, {
    heading: "set-the-default-stream-type",
    content: "Description: Sets the default stream type for new subscriptions."
  }, {
    heading: "set-the-default-stream-type",
    content: "Enum: `VideoStreamType`"
  }, {
    heading: "enable-bandwidth-estimation",
    content: 'API: `.setParameter("ENABLE_AUT_CC", true);`'
  }, {
    heading: "enable-bandwidth-estimation",
    content: "Description: AUT-CC is a server-side Bandwidth Estimation (BWE) mechanism that relies on packet loss. Its main inputs include the number of packets, packet size, feedback on packet loss, and the timing of that feedback. The output is the currently available bandwidth."
  }, {
    heading: "configure-remote-subscriber-fallback-1",
    content: "API: `setStreamFallbackOption(uid: UID, fallbackType: RemoteStreamFallbackType): Promise<void>`"
  }, {
    heading: "configure-remote-subscriber-fallback-1",
    content: "Description: Enables automatic switching on the subscriber side under poor network conditions."
  }, {
    heading: "configure-remote-subscriber-fallback-1",
    content: "Example:"
  }, {
    heading: "manual-stream-selection-1",
    content: "API: `setRemoteVideoStreamType(uid: UID, streamType: RemoteStreamType): Promise<void>`"
  }, {
    heading: "manual-stream-selection-1",
    content: "Description: Selects the high or low stream for a specific remote user."
  }, {
    heading: "manual-stream-selection-1",
    content: "Example:"
  }, {
    heading: "manual-stream-selection-1",
    content: "Enum: `VideoStreamType`"
  }, {
    heading: "manual-stream-selection-1",
    content: "For manual switching, consider the network conditions. The following example shows how to obtain the network status:"
  }, {
    heading: "set-the-default-stream-type-1",
    content: "API: `setRemoteDefaultVideoStreamType(streamType: RemoteStreamType): Promise<void>`"
  }, {
    heading: "set-the-default-stream-type-1",
    content: "Description: Sets the default stream type for all remote users."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "abr-configuration",
    content: "ABR configuration"
  }, {
    id: "api-endpoint",
    content: "API endpoint"
  }, {
    id: "request-example",
    content: "Request example"
  }, {
    id: "configuration-requirements",
    content: "Configuration requirements"
  }, {
    id: "layer-id-selection",
    content: "Layer ID selection"
  }, {
    id: "webhook-notifications",
    content: "Webhook notifications"
  }, {
    id: "subscriber-side-abr-stream",
    content: "Subscriber-side ABR stream"
  }, {
    id: "integration-guidelines",
    content: "Integration guidelines"
  }, {
    id: "stream-quality-levels",
    content: "Stream quality levels"
  }, {
    id: "native-sdk-subscriber-side-apis",
    content: "Native SDK: Subscriber-side APIs"
  }, {
    id: "configure-remote-subscriber-fallback",
    content: "Configure remote subscriber fallback"
  }, {
    id: "manual-stream-selection",
    content: "Manual stream selection"
  }, {
    id: "set-the-default-stream-type",
    content: "Set the default stream type"
  }, {
    id: "web-sdk-subscriber-side-apis",
    content: "Web SDK: Subscriber-side APIs"
  }, {
    id: "enable-bandwidth-estimation",
    content: "Enable bandwidth estimation"
  }, {
    id: "configure-remote-subscriber-fallback-1",
    content: "Configure remote subscriber fallback"
  }, {
    id: "manual-stream-selection-1",
    content: "Manual stream selection"
  }, {
    id: "set-the-default-stream-type-1",
    content: "Set the default stream type"
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
  url: "#abr-configuration",
  title: _jsx(_Fragment, {
    children: "ABR configuration"
  })
}, {
  depth: 3,
  url: "#api-endpoint",
  title: _jsx(_Fragment, {
    children: "API endpoint"
  })
}, {
  depth: 3,
  url: "#request-example",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 3,
  url: "#configuration-requirements",
  title: _jsx(_Fragment, {
    children: "Configuration requirements"
  })
}, {
  depth: 3,
  url: "#layer-id-selection",
  title: _jsx(_Fragment, {
    children: "Layer ID selection"
  })
}, {
  depth: 2,
  url: "#webhook-notifications",
  title: _jsx(_Fragment, {
    children: "Webhook notifications"
  })
}, {
  depth: 2,
  url: "#subscriber-side-abr-stream",
  title: _jsx(_Fragment, {
    children: "Subscriber-side ABR stream"
  })
}, {
  depth: 3,
  url: "#integration-guidelines",
  title: _jsx(_Fragment, {
    children: "Integration guidelines"
  })
}, {
  depth: 3,
  url: "#stream-quality-levels",
  title: _jsx(_Fragment, {
    children: "Stream quality levels"
  })
}, {
  depth: 3,
  url: "#native-sdk-subscriber-side-apis",
  title: _jsx(_Fragment, {
    children: "Native SDK: Subscriber-side APIs"
  })
}, {
  depth: 4,
  url: "#configure-remote-subscriber-fallback",
  title: _jsx(_Fragment, {
    children: "Configure remote subscriber fallback"
  })
}, {
  depth: 4,
  url: "#manual-stream-selection",
  title: _jsx(_Fragment, {
    children: "Manual stream selection"
  })
}, {
  depth: 4,
  url: "#set-the-default-stream-type",
  title: _jsx(_Fragment, {
    children: "Set the default stream type"
  })
}, {
  depth: 3,
  url: "#web-sdk-subscriber-side-apis",
  title: _jsx(_Fragment, {
    children: "Web SDK: Subscriber-side APIs"
  })
}, {
  depth: 4,
  url: "#enable-bandwidth-estimation",
  title: _jsx(_Fragment, {
    children: "Enable bandwidth estimation"
  })
}, {
  depth: 4,
  url: "#configure-remote-subscriber-fallback-1",
  title: _jsx(_Fragment, {
    children: "Configure remote subscriber fallback"
  })
}, {
  depth: 4,
  url: "#manual-stream-selection-1",
  title: _jsx(_Fragment, {
    children: "Manual stream selection"
  })
}, {
  depth: 4,
  url: "#set-the-default-stream-type-1",
  title: _jsx(_Fragment, {
    children: "Set the default stream type"
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Adaptive Bitrate (ABR) streaming delivers multiple video quality levels from a single source, allowing viewers to automatically switch between different bitrates based on their network conditions and device capabilities. This ensures optimal viewing experience by reducing buffering and maintaining the highest possible quality for each viewer's situation."
    }), `
`, _jsx(_components.p, {
      children: "This guide explains how to configure Adaptive Bitrate (ABR) encoding for video transcoding in Media Gateway."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsxs(_components.p, {
      children: ["ABR works by encoding the same video content at multiple resolutions and bitrates, called layers. Viewers can then select or automatically switch between different layers based on their available bandwidth and device performance. Media Gateway supports ABR through the ", _jsx(_components.code, {
        children: "simulcastStreamLayers"
      }), " configuration in stream templates. When enabled, the system creates multiple encoding layers from your source stream."]
    }), `
`, _jsx(_components.p, {
      children: "Following are the key ABR concepts:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Source stream"
        }), ": The original stream pushed by the client without transcoding."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Main stream"
        }), ": The primary transcoded stream output by Media Gateway when video transcoding is enabled. Resolution does not exceed the source stream resolution."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Layer"
        }), ": Additional streams with lower bitrates that Media Gateway outputs based on your configuration."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Layer ID"
        }), ": A unique identifier for each layer stream, ranging from 1 to 7."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Low stream"
        }), ": A lower-quality stream option that was available before full ABR support. It is now implemented as Layer ID 7 to maintain compatibility with existing applications that expect this stream type."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: `ABR layers are independent. Enabling ABR does not automatically create a low stream.
Use Layer ID 7 for backward compatibility with older applications that don't support full ABR functionality.`
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "abr-configuration",
      children: "ABR configuration"
    }), `
`, _jsxs(_components.p, {
      children: ["Configure ABR encoding in stream configuration templates using the ", _jsx(_components.code, {
        children: "settings.transcoding.video.simulcastStreamLayers"
      }), " parameter."]
    }), `
`, _jsx(_components.h3, {
      id: "api-endpoint",
      children: "API endpoint"
    }), `
`, _jsxs(_components.p, {
      children: ["Use the ", _jsx(_components.strong, {
        children: "Create or reset template"
      }), " API to configure ABR layers:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "PUT"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "https://api.agora.io/{region}/v1/projects/{appId}/rtls/ingress/stream-templates/{templateId}"
        })]
      }), `
`, _jsx(_components.li, {
        children: "Authentication: HTTP Basic authentication or HMAC authentication"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Path parameters:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "region"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["Region for the streaming template. Supported values are ", _jsx(_components.code, {
              children: "na"
            }), ", ", _jsx(_components.code, {
              children: "eu"
            }), ", ", _jsx(_components.code, {
              children: "ap"
            }), ", and ", _jsx(_components.code, {
              children: "cn"
            }), ". Use the same region as the input source stream."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appId"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "The App ID of your Agora project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "templateId"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "The flow configuration template ID. The value can contain only letters and numbers and cannot exceed 12 bytes."
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Relevant request fields:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "settings.transcoding.video.enabled"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["Enables video transcoding. Set this field to ", _jsx(_components.code, {
              children: "true"
            }), " when you configure ABR layers."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "settings.transcoding.video.width"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Encoding width of the main stream in pixels. Required when adaptive bitrate is enabled."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "settings.transcoding.video.height"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Encoding height of the main stream in pixels. Required when adaptive bitrate is enabled."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "settings.transcoding.video.fps"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Video encoding frame rate in fps. If omitted or set to ", _jsx(_components.code, {
              children: "0"
            }), ", the source stream frame rate is used."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "settings.transcoding.video.bitrate"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Encoding bitrate of the main stream in Kbps. If omitted, the source stream bitrate is used. If set to ", _jsx(_components.code, {
              children: "0"
            }), ", Agora automatically chooses a bitrate based on width and height."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "settings.transcoding.video.simulcastStreamLayers"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Array of layer transcoding parameters. If specified, ABR is enabled."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "settings.transcoding.video.simulcastStreamLayers[].id"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["Layer ID. Supported values range from ", _jsx(_components.code, {
              children: "1"
            }), " to ", _jsx(_components.code, {
              children: "7"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "settings.transcoding.video.simulcastStreamLayers[].width"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Encoding width of the layer in pixels. If specified, it must be smaller than ", _jsx(_components.code, {
              children: "video.width"
            }), " and decrease monotonically as the layer ID increases."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "settings.transcoding.video.simulcastStreamLayers[].height"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Encoding height of the layer in pixels. If specified, it must be smaller than ", _jsx(_components.code, {
              children: "video.height"
            }), " and decrease monotonically as the layer ID increases."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "settings.transcoding.video.simulcastStreamLayers[].fps"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Encoding frame rate of the layer in fps. If specified, it must be smaller than ", _jsx(_components.code, {
              children: "video.fps"
            }), ". If omitted or set to ", _jsx(_components.code, {
              children: "0"
            }), ", the main stream frame rate is used."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "settings.transcoding.video.simulcastStreamLayers[].bitrate"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["Encoding bitrate of the layer in Kbps. It must be smaller than ", _jsx(_components.code, {
              children: "video.bitrate"
            }), " and decrease monotonically by layer ID."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
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
              children: " --request"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " PUT"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --url"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "${region}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "/v1/projects/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "${appId}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "/rtls/ingress/stream-templates/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "${templateId} "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --header"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Content-Type: application/json'"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --header"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Authorization: Basic XXXXXX'"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " '{"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "settings": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "transcoding": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "video": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "enabled": true,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "width": 1920,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "height": 1080,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "fps": 30,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "bitrate": 3800,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "simulcastStreamLayers": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            { "id": 1, "width": 1280, "height": 720, "fps": 30, "bitrate": 2400 },'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            { "id": 2, "width": 960, "height": 540, "fps": 30, "bitrate": 1500 },'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            { "id": 3, "width": 854, "height": 480, "fps": 30, "bitrate": 800 },'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            { "id": 7, "width": 640, "height": 360, "fps": 30, "bitrate": 500 }'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "          ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "audio": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "enabled": true,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "profile": 3'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "      }"
            })
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
              children: "  }'"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "configuration-requirements",
      children: "Configuration requirements"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Maximum 5 simultaneous layers per stream"
      }), `
`, _jsx(_components.li, {
        children: "Specify at least one dimension for the main stream when ABR is enabled"
      }), `
`, _jsx(_components.li, {
        children: "Specify at least one dimension for each ABR layer"
      }), `
`, _jsx(_components.li, {
        children: "Specify bitrates in decreasing order by Layer ID"
      }), `
`, _jsx(_components.li, {
        children: "If specified, layer width and height must decrease monotonically as the Layer ID increases"
      }), `
`, _jsx(_components.li, {
        children: "If specified, each layer FPS must be lower than the main stream FPS"
      }), `
`, _jsx(_components.li, {
        children: "Clients must specify the Layer ID when subscribing to receive the corresponding quality layer"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "layer-id-selection",
      children: "Layer ID selection"
    }), `
`, _jsx(_components.p, {
      children: "When specifying layer IDs, best practice is to bind each ID to a specific resolution. This enables you to dynamically add or delete ABR layers without needing to modify the mapping between layer ID and resolution."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Recommended Layer ID mapping:"
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Layer ID"
          }), _jsx(_components.th, {
            children: "Resolution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1"
          }), _jsx(_components.td, {
            children: "3840x2160 (4K)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "2"
          }), _jsx(_components.td, {
            children: "2560x1440 (2K)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "3"
          }), _jsx(_components.td, {
            children: "1920x1080 (1080p)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "4"
          }), _jsx(_components.td, {
            children: "1280x720 (720p)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "5"
          }), _jsx(_components.td, {
            children: "960x540 (540p)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "6"
          }), _jsx(_components.td, {
            children: "854x480 (480p)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "7"
          }), _jsx(_components.td, {
            children: "640x360 (360p)"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example configuration:"
      })
    }), `
`, _jsx(_components.p, {
      children: "If your source stream is 1080p and you want to output 1080p, 720p, 480p, and 360p video streams, configure the ABR layer IDs as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Layer ID"
          }), _jsx(_components.th, {
            children: "Resolution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Main Stream"
          }), _jsx(_components.td, {
            children: "1080p"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "4"
          }), _jsx(_components.td, {
            children: "720p"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "6"
          }), _jsx(_components.td, {
            children: "480p"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "7"
          }), _jsx(_components.td, {
            children: "360p"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "webhook-notifications",
      children: "Webhook notifications"
    }), `
`, _jsxs(_components.p, {
      children: ["To help you monitor the ABR configuration for each stream, Media Gateway provides this information through webhooks. When video transcoding is enabled, the ", _jsx(_components.code, {
        children: "live_stream_connected"
      }), " event includes the transcoding configuration details for your stream. See ", _jsx(_components.a, {
        href: "./receive-notifications.md",
        children: "Receive notifications about channel events"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example notification payload"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "transcoding.video.simulcastStreamLayers"
      }), " array shows the active ABR layers for this stream, including their resolution, bitrate, and Layer ID configuration."]
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
              children: '    "beginAt"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"2025-03-11T17:56:23.60Z"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "domain"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"rtls-ingress-test-cn.agoramdn.com"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"dev-cn"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "rtcInfo"'
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
              children: '        "channel"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"abrtest0224"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"1000"'
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
              children: '"66ff5811-7baa-0298-8244-f2de5ae2a047"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "streamKey"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"123456rlg-RSQ_TqkhqgF373zAll4vz"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "transcoding"'
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
              children: '        "audio"'
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
              children: '            "enabled"'
            }), _jsx(_components.span, {
              style: {
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
              children: "3"
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
              children: '        "video"'
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
              children: '            "enabled"'
            }), _jsx(_components.span, {
              style: {
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
              children: "3000"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "fps"'
            }), _jsx(_components.span, {
              style: {
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
              children: '            "simulcastStreamLayers"'
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
              children: '                    "id"'
            }), _jsx(_components.span, {
              style: {
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "bitrate"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "2000"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "fps"'
            }), _jsx(_components.span, {
              style: {
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
              children: "720"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: "1280"
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
              children: '                    "id"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "5"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "bitrate"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1200"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "fps"'
            }), _jsx(_components.span, {
              style: {
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
              children: "540"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: "960"
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
              children: '                    "id"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "7"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "bitrate"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "700"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "fps"'
            }), _jsx(_components.span, {
              style: {
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
`, _jsx(_components.h2, {
      id: "subscriber-side-abr-stream",
      children: "Subscriber-side ABR stream"
    }), `
`, _jsx(_components.p, {
      children: "Subscribers can choose ABR layers on the receiving side and let the SDK adapt to changing network conditions."
    }), `
`, _jsx(_components.h3, {
      id: "integration-guidelines",
      children: "Integration guidelines"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Web SDK"
          }), ":"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Minimum version"
            }), ": 4.22.1 or later"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Recommended"
            }), ": Use the latest SDK from the ", _jsx(_components.a, {
              href: "https://docs.agora.io/en/sdks",
              children: "official website"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Note"
            }), ": To use the latest Agora Web FLS Player, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "technical support"
            })]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Native SDK"
          }), ":"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Minimum version"
            }), ": 4.3.2 or later"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Recommended"
            }), ": Use the latest SDK from the ", _jsx(_components.a, {
              href: "https://docs.agora.io/en/sdks",
              children: "official website"
            })]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "stream-quality-levels",
      children: "Stream quality levels"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "RTMPG Layer ID"
          }), _jsxs(_components.th, {
            children: ["Native SDK (", _jsx(_components.code, {
              children: "VideoStreamType"
            }), ")"]
          }), _jsxs(_components.th, {
            children: ["Web SDK (", _jsx(_components.code, {
              children: "RemoteStreamType"
            }), ")"]
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "VIDEO_STREAM_LAYER_1"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "HIGH_STREAM_LAYER1"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "2"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "VIDEO_STREAM_LAYER_2"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "HIGH_STREAM_LAYER2"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "3"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "VIDEO_STREAM_LAYER_3"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "HIGH_STREAM_LAYER3"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "4"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "VIDEO_STREAM_LAYER_4"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "HIGH_STREAM_LAYER4"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "5"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "VIDEO_STREAM_LAYER_5"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "HIGH_STREAM_LAYER5"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "6"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "VIDEO_STREAM_LAYER_6"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "HIGH_STREAM_LAYER6"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "7"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "VIDEO_STREAM_LOW"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LOW_STREAM"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Push streaming"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "VIDEO_STREAM_HIGH"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "HIGH_STREAM"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "native-sdk-subscriber-side-apis",
      children: "Native SDK: Subscriber-side APIs"
    }), `
`, _jsx(_components.h4, {
      id: "configure-remote-subscriber-fallback",
      children: "Configure remote subscriber fallback"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["API: ", _jsx(_components.code, {
            children: "setRemoteSubscribeFallbackOption(StreamFallbackOptions option)"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Description: Sets the fallback option for subscribed audio and video streams under poor network conditions. In suboptimal network environments, real-time audio and video quality may degrade. Use this method to set a ", _jsx(_components.code, {
            children: "StreamFallbackOptions"
          }), " value. When the downlink network is weak and the quality is severely affected, the SDK automatically reduces the video stream to a lower layer to maintain smooth playback. The SDK continuously monitors the network and restores the higher layer when conditions improve."]
        }), `
`, _jsx(_components.p, {
          children: "Specify the minimum acceptable fallback level:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["To fall back to a lower video stream, use ", _jsx(_components.code, {
              children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["To fall back to audio only, use ", _jsx(_components.code, {
              children: "STREAM_FALLBACK_OPTION_AUDIO_ONLY"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Supported values:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "STREAM_FALLBACK_OPTION_DISABLED"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "STREAM_FALLBACK_OPTION_AUDIO_ONLY"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_1"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_2"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_3"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_4"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_5"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_6"
            })
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Enum: ", _jsx(_components.code, {
            children: "StreamFallbackOptions"
          })]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "enum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " StreamFallbackOptions"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    STREAM_FALLBACK_OPTION_DISABLED"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    STREAM_FALLBACK_OPTION_AUDIO_ONLY"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_2"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_3"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_4"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_5"
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
                  children: "    STREAM_FALLBACK_OPTION_VIDEO_STREAM_LAYER_6"
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
`, _jsx(_components.h4, {
      id: "manual-stream-selection",
      children: "Manual stream selection"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["API: ", _jsx(_components.code, {
          children: "setRemoteVideoStreamType(int uid, VideoStreamType streamType)"
        })]
      }), `
`, _jsx(_components.li, {
        children: "Description: Sets the stream type to subscribe to for a specific remote user."
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "set-the-default-stream-type",
      children: "Set the default stream type"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["API: ", _jsx(_components.code, {
            children: "setRemoteDefaultVideoStreamType(VideoStreamType streamType)"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Description: Sets the default stream type for new subscriptions."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Enum: ", _jsx(_components.code, {
            children: "VideoStreamType"
          })]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "enum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " VideoStreamType"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    VIDEO_STREAM_HIGH"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    VIDEO_STREAM_LOW"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    VIDEO_STREAM_LAYER_1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    VIDEO_STREAM_LAYER_2"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    VIDEO_STREAM_LAYER_3"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    VIDEO_STREAM_LAYER_4"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    VIDEO_STREAM_LAYER_5"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    VIDEO_STREAM_LAYER_6"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
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
      id: "web-sdk-subscriber-side-apis",
      children: "Web SDK: Subscriber-side APIs"
    }), `
`, _jsx(_components.h4, {
      id: "enable-bandwidth-estimation",
      children: "Enable bandwidth estimation"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["API: ", _jsx(_components.code, {
          children: '.setParameter("ENABLE_AUT_CC", true);'
        })]
      }), `
`, _jsx(_components.li, {
        children: "Description: AUT-CC is a server-side Bandwidth Estimation (BWE) mechanism that relies on packet loss. Its main inputs include the number of packets, packet size, feedback on packet loss, and the timing of that feedback. The output is the currently available bandwidth."
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "configure-remote-subscriber-fallback-1",
      children: "Configure remote subscriber fallback"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["API: ", _jsx(_components.code, {
            children: "setStreamFallbackOption(uid: UID, fallbackType: RemoteStreamFallbackType): Promise<void>"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Description: Enables automatic switching on the subscriber side under poor network conditions."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Example:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// the range supports up to LOW_STREAM"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "client."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setStreamFallbackOption"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(uid, "
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
                  children: ");"
                })]
              })]
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "manual-stream-selection-1",
      children: "Manual stream selection"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["API: ", _jsx(_components.code, {
            children: "setRemoteVideoStreamType(uid: UID, streamType: RemoteStreamType): Promise<void>"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Description: Selects the high or low stream for a specific remote user."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Example:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "client."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setRemoteVideoStreamType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(uid, "
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
                  children: "); "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// HIGH_STREAM = 0"
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
          children: ["Enum: ", _jsx(_components.code, {
            children: "VideoStreamType"
          })]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "enum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " VideoStreamType"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    HIGH_STREAM"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    LOW_STREAM"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    HIGH_STREAM_LAYER1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    HIGH_STREAM_LAYER2"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    HIGH_STREAM_LAYER3"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    HIGH_STREAM_LAYER4"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    HIGH_STREAM_LAYER5"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    HIGH_STREAM_LAYER6"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
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
`, _jsx(_components.p, {
      children: "For manual switching, consider the network conditions. The following example shows how to obtain the network status:"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
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
              children: " NetworkQualityDesc"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ["
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "Unknown"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
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
              children: '        "Excellent"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
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
              children: '        "Good"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
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
              children: '        "Poor"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
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
              children: '        "Bad"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
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
              children: '        "Very Bad"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
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
              children: '        "Down"'
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
              children: "];"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "client."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "on"
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
              children: '"network-quality"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", ("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "quality"
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
              children: "=>"
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
              children: "        uplinkQuality "
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
              children: " NetworkQualityDesc[quality.uplinkNetworkQuality];"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        downlinkQuality "
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
              children: " NetworkQualityDesc[quality.downlinkNetworkQuality];"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        console."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(uplinkQuality, downlinkQuality);"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "});"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "set-the-default-stream-type-1",
      children: "Set the default stream type"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["API: ", _jsx(_components.code, {
          children: "setRemoteDefaultVideoStreamType(streamType: RemoteStreamType): Promise<void>"
        })]
      }), `
`, _jsx(_components.li, {
        children: "Description: Sets the default stream type for all remote users."
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
