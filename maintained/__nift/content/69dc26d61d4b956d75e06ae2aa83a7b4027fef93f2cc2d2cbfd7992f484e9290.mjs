import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RESTful API type definition",
  description: "Lists all the type definitions of the Media Push RESTful API."
};
export let _markdown = `

This page lists all the type definitions of the Media Push RESTful API.

## audioOptions [#audiooptions]

The audio transcoding configuration of the Converter.

| Field                  | Type                             | Descriptions                                                                                                                                                                                                                                                                                                                                                                                      |
| :--------------------- | :------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`codecProfile\`         | (Optional) String                | The audio codec output by the Converter. The following values are supported:- \`LC-AAC\` (Default): MPEG-4 AAC LC
- \`HE-AAC\`: High-Efficiency AAC                                                                                                                                                                                                                                                   |
| \`sampleRate\`           | (Optional) Number                | The audio coding sampling rate (Hz) output by the Converter, which can be \`32000\`, \`44100,\` or \`48000 \`(Default value).                                                                                                                                                                                                                                                                           |
| \`bitrate\`              | (Optional) Number                | The audio encoding bit rate (Kbps) output by the Converter. The value range is \\[32,128]. The default value is 48. If the audio codec is LC-AAC, the recommended audio code rate range is \\[32,112]. If the audio codec is HE-AAC, the recommended audio code rate range is \\[40,96].                                                                                                             |
| \`audioChannels\`        | (Optional) Number                | The number of audio channels output by the Converter, which can be \`1\` (Default) or \`2\`.                                                                                                                                                                                                                                                                                                          |
| \`rtcStreamUids\`        | (Optional) JSON Array of Numbers | The user IDs of the users participating in the mixing.- The default value is user IDs of all users in the channel, which means that Agora mixes all users's audio streams in the channel.
- An empty array means that Agora does not mix any user's audio streams.                                                                                                                                |
| \`volumes\`              | (Optional) JSON Array            | Set the volume of users participating in the mixing.- This field takes effect only when mixing user IDs are specified (set \`rtcStreamUids\`).
- You can call the [\`Update\`](./index#update-update-the-converter) method to adjust the volume of the specified user. Each time the \`Update\` request is successful, the volume of other users in the mixing is reseted to the default value (\`100\`). |
| \`volumes.rtcStreamUid\` | Number                           | The user IDs of the mixing users to set the volume.<CalloutContainer type="info">
  <CalloutDescription>
    \`volumes.rtcStreamUid\` needs to exist in the \`rtcStreamUids\` array, otherwise the request \`fails\` with a response status code of \`400\`.
  </CalloutDescription>
</CalloutContainer>                                                                                                  |
| \`volumes.volume\`       | Number                           | The volume of the specified mix user. The default value is \`100\`, and the value range is \\[0, 200].                                                                                                                                                                                                                                                                                               |

## videoOptions [#videooptions]

The video transcoding configuration of the Converter.

### canvas [#canvas]

The video canvas.

| Field    | Type              | Descriptions                                                                                                                                                                                               |
| :------- | :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`width\`  | (Required) Number | The width of the canvas (pixels). The value range is \\[66,1920].                                                                                                                                           |
| \`height\` | (Required) Number | The height of the canvas (pixels). The value range is \\[66,1920].                                                                                                                                          |
| \`color\`  | (Optional) Number | The background color of the canvas. This is an RGB color value, expressed as a decimal number. For example, 255 represents blue. The value range is \\[0,16777215]. The default value is 0, which is black. |

### layout [#layout]

The content description of the video screen on the canvas.

#### layout.RtcStreamView [#layoutrtcstreamview]

The video screen of each user on the canvas.

| Field                 | Type                   | Descriptions                                                                                                                                                                                                                                                                                                                                                                                            |
| :-------------------- | :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`rtcStreamUid\`        | (Required) Number      | The user ID of the user to which the video stream belongs.                                                                                                                                                                                                                                                                                                                                              |
| \`region\`              | (Required) JSON Object | The display area of the user's video screen on the canvas. If the video screen dimensions exceed the canvas, the screen will be cropped, and the excess image will not be displayed.                                                                                                                                                                                                                    |
| \`region.xPos\`         | (Required) Number      | The x coordinate (pixels) of the screen on the canvas. This is the lateral displacement relative to the origin, where the upper left corner of the canvas is the origin, and the x coordinate is the upper left corner of the screen.                                                                                                                                                                   |
| \`region.yPos\`         | (Required) Number      | The y coordinate (pixels) of the screen on the canvas. This is the longitudinal displacement relative to the origin, where the upper left corner of the canvas is the origin, and the y coordinate is the upper left corner of the screen.                                                                                                                                                              |
| \`region.zIndex\`       | (Required) Number      | The layer number of the screen. The value range is \\[0,100]. \`0\` represents the lowest layer. \`100\` represents the top layer.                                                                                                                                                                                                                                                                           |
| \`region.width\`        | (Required) Number      | The width of the screen (pixels).                                                                                                                                                                                                                                                                                                                                                                       |
| \`region.height\`       | (Required) Number      | The height of the screen (pixels).                                                                                                                                                                                                                                                                                                                                                                      |
| \`fillMode\`            | (Optional) String      | The display types of the screen.- \`fill\`: (Default) Under the premise of maintaining the aspect ratio, zoom the screen to fill the container. ![1628837665989](https://web-cdn.agora.io/docs-files/1628837665989)

- \`fit\`: Zoom the screen while maintaining the aspect ratio so that the screen is in the container Full display. ![1628837708782](https://web-cdn.agora.io/docs-files/1628837708782) |
| \`placeholderImageUrl\` | (Required) String      | The HTTP(S) URL of the substitute image. Images in JPG, PNG and GIF formats are supported. When the user in the channel does not publish the video stream, if this field is set, this substitute image will replace the user's video screen; otherwise, the last frame of the user's video will be displayed.                                                                                           |

#### layout.ImageView [#layoutimageview]

The video image on the canvas, which can be used as a watermark.

| Field           | Type                   | Descriptions                                                                                                                                                                                                                                                                                                                                                                                 |
| :-------------- | :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`imageUrl\`      | (Required) String      | The HTTP(S) URL of the image. Images in JPG, PNG and GIF formats are supported.                                                                                                                                                                                                                                                                                                              |
| \`region\`        | (Required) JSON Object | The display area of the image on the canvas. If the video screen dimensions exceed the canvas, the screen will be cropped, and the excess image will not be displayed.                                                                                                                                                                                                                       |
| \`region.xPos\`   | (Required) Number      | The x coordinate (pixels) of the image on the canvas. This is the lateral displacement relative to the origin, where the upper left corner of the canvas is the origin, and the x coordinate is the upper left corner of the screen.                                                                                                                                                         |
| \`region.yPos\`   | (Required) Number      | The y coordinate (pixels) of the picture on the canvas. This is the longitudinal displacement relative to the origin, where the upper left corner of the canvas is the origin and the y coordinate is the upper left corner of the screen.                                                                                                                                                   |
| \`region.zIndex\` | (Required) Number      | The layer number of the image. The value range is \\[0,100]. \`0\` represents the lowest layer. \`100\` represents the top layer.                                                                                                                                                                                                                                                                 |
| \`region.width\`  | (Required) Number      | The width of the image (pixels).                                                                                                                                                                                                                                                                                                                                                             |
| \`region.height\` | (Required) Number      | The height of the image (pixels).                                                                                                                                                                                                                                                                                                                                                            |
| \`fillMode\`      | (Optional) String      | The display types of the image.- \`fill\`: Under the premise of maintaining the aspect ratio, zoom the image so that the image fills the container. ![](https://web-cdn.agora.io/docs-files/1628837665989)

- \`fit\`: zoom the image while maintaining the aspect ratio so that the image is in the container Full display. ![1628837708782](https://web-cdn.agora.io/docs-files/1628837708782) |

### vertical [#vertical]

Vertical layout. The field is optional.

See [Set Vertical Layout](./set-vertical-layout).

| Field              | Type   | Descriptions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :----------------- | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`maxResolutionUid\` | Number | The user ID of the user who is displayed in the large window. If \`maxResolutionUid\` is not set, the user with the loudest volume when the layout refreshes is displayed in the large window.- By default, the screen layout is refreshed every 3 seconds. Contact [support@agora.io](mailto\\:support@agora.io) if you need to adjust the refresh interval.

- Not setting \`maxResolutionUid\` may cause the screen layout to change every 3 seconds. If the layout needs to be stable, set this parameter. |
| \`fillMode\`         | String | The display options of the screen:- \`fill\`: (Default) Zoom the image to fill the window completely while maintaining the aspect ratio of the image.![1628837665989](https://web-cdn.agora.io/docs-files/1628837665989)

- \`fit\`: Zoom the image only until it fills the window vertically or horizontally, displaying the entire image while possibly leaving some of the window blank. ![1628837708782](https://web-cdn.agora.io/docs-files/1628837708782)                                               |

### seiOptions [#seioptions]

The user SEI information carried in the output video stream. The field is optional.

| Field                                 | Type        | Descriptions                                                                                                                                                                                                                                                  |
| :------------------------------------ | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`source\`                              | JSON Object | Set the data source of SEI information. The default value is empty.                                                                                                                                                                                           |
| \`source.metadata\`                     | Bool        | Set whether to pass in metadata-type SEI information.- \`true\`: Metadata-type SEI information is passed in.

- (Default) \`false\`: Metadata-type SEI information is not passed in.                                                                              |
| \`source.datastream\`                   | Bool        | Set whether to pass in Agora Datastream-type SEI information type.- true: Agora Datastream-type SEI information is passed in.

- (Default) false: Agora Datastream-type SEI information is not passed in.                                                     |
| \`source.customized\`                   | JSON Object | Custom SEI information. Custom SEI information is converted into [Agora SEI information](./sei-information). The default value is empty.                                                                                                                      |
| \`source.customized.prefixForAgoraSei\` | String      | Set the payload prefix of SEI information. The maximum length is 32 characters, and the default value is blank.                                                                                                                                               |
| \`source.customized.payload\`           | String      | Set the payload of the SEI information. The maximum length is 4096 characters, and the default value is blank. When the SEI information is converted into [Agora SEI information](./sei-information), the payload is corresponds to the app\\_data of the SEI. |
| \`sink\`                                | JSON Object | Set the attributes of the output SEI information. The default value is empty.                                                                                                                                                                                 |
| \`sink.type\`                           | Int         | Set the payload type of the output SEI information. The default value is 100.                                                                                                                                                                                 |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page lists all the type definitions of the Media Push RESTful API."
  }, {
    heading: "audiooptions",
    content: "The audio transcoding configuration of the Converter."
  }, {
    heading: "audiooptions",
    content: "Field"
  }, {
    heading: "audiooptions",
    content: "Type"
  }, {
    heading: "audiooptions",
    content: "Descriptions"
  }, {
    heading: "audiooptions",
    content: "`codecProfile`"
  }, {
    heading: "audiooptions",
    content: "(Optional) String"
  }, {
    heading: "audiooptions",
    content: "The audio codec output by the Converter. The following values are supported:- `LC-AAC` (Default): MPEG-4 AAC LC\n- `HE-AAC`: High-Efficiency AAC"
  }, {
    heading: "audiooptions",
    content: "`sampleRate`"
  }, {
    heading: "audiooptions",
    content: "(Optional) Number"
  }, {
    heading: "audiooptions",
    content: "The audio coding sampling rate (Hz) output by the Converter, which can be `32000`, `44100,` or `48000 `(Default value)."
  }, {
    heading: "audiooptions",
    content: "`bitrate`"
  }, {
    heading: "audiooptions",
    content: "(Optional) Number"
  }, {
    heading: "audiooptions",
    content: "The audio encoding bit rate (Kbps) output by the Converter. The value range is \\[32,128]. The default value is 48. If the audio codec is LC-AAC, the recommended audio code rate range is \\[32,112]. If the audio codec is HE-AAC, the recommended audio code rate range is \\[40,96]."
  }, {
    heading: "audiooptions",
    content: "`audioChannels`"
  }, {
    heading: "audiooptions",
    content: "(Optional) Number"
  }, {
    heading: "audiooptions",
    content: "The number of audio channels output by the Converter, which can be `1` (Default) or `2`."
  }, {
    heading: "audiooptions",
    content: "`rtcStreamUids`"
  }, {
    heading: "audiooptions",
    content: "(Optional) JSON Array of Numbers"
  }, {
    heading: "audiooptions",
    content: `The user IDs of the users participating in the mixing.- The default value is user IDs of all users in the channel, which means that Agora mixes all users's audio streams in the channel.
- An empty array means that Agora does not mix any user's audio streams.`
  }, {
    heading: "audiooptions",
    content: "`volumes`"
  }, {
    heading: "audiooptions",
    content: "(Optional) JSON Array"
  }, {
    heading: "audiooptions",
    content: "Set the volume of users participating in the mixing.- This field takes effect only when mixing user IDs are specified (set `rtcStreamUids`).\n- You can call the `Update` method to adjust the volume of the specified user. Each time the `Update` request is successful, the volume of other users in the mixing is reseted to the default value (`100`)."
  }, {
    heading: "audiooptions",
    content: "`volumes.rtcStreamUid`"
  }, {
    heading: "audiooptions",
    content: "Number"
  }, {
    heading: "audiooptions",
    content: "The user IDs of the mixing users to set the volume.`volumes.rtcStreamUid` needs to exist in the `rtcStreamUids` array, otherwise the request `fails` with a response status code of `400`."
  }, {
    heading: "audiooptions",
    content: "`volumes.volume`"
  }, {
    heading: "audiooptions",
    content: "Number"
  }, {
    heading: "audiooptions",
    content: "The volume of the specified mix user. The default value is `100`, and the value range is \\[0, 200]."
  }, {
    heading: "videooptions",
    content: "The video transcoding configuration of the Converter."
  }, {
    heading: "canvas",
    content: "The video canvas."
  }, {
    heading: "canvas",
    content: "Field"
  }, {
    heading: "canvas",
    content: "Type"
  }, {
    heading: "canvas",
    content: "Descriptions"
  }, {
    heading: "canvas",
    content: "`width`"
  }, {
    heading: "canvas",
    content: "(Required) Number"
  }, {
    heading: "canvas",
    content: "The width of the canvas (pixels). The value range is \\[66,1920]."
  }, {
    heading: "canvas",
    content: "`height`"
  }, {
    heading: "canvas",
    content: "(Required) Number"
  }, {
    heading: "canvas",
    content: "The height of the canvas (pixels). The value range is \\[66,1920]."
  }, {
    heading: "canvas",
    content: "`color`"
  }, {
    heading: "canvas",
    content: "(Optional) Number"
  }, {
    heading: "canvas",
    content: "The background color of the canvas. This is an RGB color value, expressed as a decimal number. For example, 255 represents blue. The value range is \\[0,16777215]. The default value is 0, which is black."
  }, {
    heading: "layout",
    content: "The content description of the video screen on the canvas."
  }, {
    heading: "layoutrtcstreamview",
    content: "The video screen of each user on the canvas."
  }, {
    heading: "layoutrtcstreamview",
    content: "Field"
  }, {
    heading: "layoutrtcstreamview",
    content: "Type"
  }, {
    heading: "layoutrtcstreamview",
    content: "Descriptions"
  }, {
    heading: "layoutrtcstreamview",
    content: "`rtcStreamUid`"
  }, {
    heading: "layoutrtcstreamview",
    content: "(Required) Number"
  }, {
    heading: "layoutrtcstreamview",
    content: "The user ID of the user to which the video stream belongs."
  }, {
    heading: "layoutrtcstreamview",
    content: "`region`"
  }, {
    heading: "layoutrtcstreamview",
    content: "(Required) JSON Object"
  }, {
    heading: "layoutrtcstreamview",
    content: "The display area of the user's video screen on the canvas. If the video screen dimensions exceed the canvas, the screen will be cropped, and the excess image will not be displayed."
  }, {
    heading: "layoutrtcstreamview",
    content: "`region.xPos`"
  }, {
    heading: "layoutrtcstreamview",
    content: "(Required) Number"
  }, {
    heading: "layoutrtcstreamview",
    content: "The x coordinate (pixels) of the screen on the canvas. This is the lateral displacement relative to the origin, where the upper left corner of the canvas is the origin, and the x coordinate is the upper left corner of the screen."
  }, {
    heading: "layoutrtcstreamview",
    content: "`region.yPos`"
  }, {
    heading: "layoutrtcstreamview",
    content: "(Required) Number"
  }, {
    heading: "layoutrtcstreamview",
    content: "The y coordinate (pixels) of the screen on the canvas. This is the longitudinal displacement relative to the origin, where the upper left corner of the canvas is the origin, and the y coordinate is the upper left corner of the screen."
  }, {
    heading: "layoutrtcstreamview",
    content: "`region.zIndex`"
  }, {
    heading: "layoutrtcstreamview",
    content: "(Required) Number"
  }, {
    heading: "layoutrtcstreamview",
    content: "The layer number of the screen. The value range is \\[0,100]. `0` represents the lowest layer. `100` represents the top layer."
  }, {
    heading: "layoutrtcstreamview",
    content: "`region.width`"
  }, {
    heading: "layoutrtcstreamview",
    content: "(Required) Number"
  }, {
    heading: "layoutrtcstreamview",
    content: "The width of the screen (pixels)."
  }, {
    heading: "layoutrtcstreamview",
    content: "`region.height`"
  }, {
    heading: "layoutrtcstreamview",
    content: "(Required) Number"
  }, {
    heading: "layoutrtcstreamview",
    content: "The height of the screen (pixels)."
  }, {
    heading: "layoutrtcstreamview",
    content: "`fillMode`"
  }, {
    heading: "layoutrtcstreamview",
    content: "(Optional) String"
  }, {
    heading: "layoutrtcstreamview",
    content: "The display types of the screen.- `fill`: (Default) Under the premise of maintaining the aspect ratio, zoom the screen to fill the container. \n\n- `fit`: Zoom the screen while maintaining the aspect ratio so that the screen is in the container Full display."
  }, {
    heading: "layoutrtcstreamview",
    content: "`placeholderImageUrl`"
  }, {
    heading: "layoutrtcstreamview",
    content: "(Required) String"
  }, {
    heading: "layoutrtcstreamview",
    content: "The HTTP(S) URL of the substitute image. Images in JPG, PNG and GIF formats are supported. When the user in the channel does not publish the video stream, if this field is set, this substitute image will replace the user's video screen; otherwise, the last frame of the user's video will be displayed."
  }, {
    heading: "layoutimageview",
    content: "The video image on the canvas, which can be used as a watermark."
  }, {
    heading: "layoutimageview",
    content: "Field"
  }, {
    heading: "layoutimageview",
    content: "Type"
  }, {
    heading: "layoutimageview",
    content: "Descriptions"
  }, {
    heading: "layoutimageview",
    content: "`imageUrl`"
  }, {
    heading: "layoutimageview",
    content: "(Required) String"
  }, {
    heading: "layoutimageview",
    content: "The HTTP(S) URL of the image. Images in JPG, PNG and GIF formats are supported."
  }, {
    heading: "layoutimageview",
    content: "`region`"
  }, {
    heading: "layoutimageview",
    content: "(Required) JSON Object"
  }, {
    heading: "layoutimageview",
    content: "The display area of the image on the canvas. If the video screen dimensions exceed the canvas, the screen will be cropped, and the excess image will not be displayed."
  }, {
    heading: "layoutimageview",
    content: "`region.xPos`"
  }, {
    heading: "layoutimageview",
    content: "(Required) Number"
  }, {
    heading: "layoutimageview",
    content: "The x coordinate (pixels) of the image on the canvas. This is the lateral displacement relative to the origin, where the upper left corner of the canvas is the origin, and the x coordinate is the upper left corner of the screen."
  }, {
    heading: "layoutimageview",
    content: "`region.yPos`"
  }, {
    heading: "layoutimageview",
    content: "(Required) Number"
  }, {
    heading: "layoutimageview",
    content: "The y coordinate (pixels) of the picture on the canvas. This is the longitudinal displacement relative to the origin, where the upper left corner of the canvas is the origin and the y coordinate is the upper left corner of the screen."
  }, {
    heading: "layoutimageview",
    content: "`region.zIndex`"
  }, {
    heading: "layoutimageview",
    content: "(Required) Number"
  }, {
    heading: "layoutimageview",
    content: "The layer number of the image. The value range is \\[0,100]. `0` represents the lowest layer. `100` represents the top layer."
  }, {
    heading: "layoutimageview",
    content: "`region.width`"
  }, {
    heading: "layoutimageview",
    content: "(Required) Number"
  }, {
    heading: "layoutimageview",
    content: "The width of the image (pixels)."
  }, {
    heading: "layoutimageview",
    content: "`region.height`"
  }, {
    heading: "layoutimageview",
    content: "(Required) Number"
  }, {
    heading: "layoutimageview",
    content: "The height of the image (pixels)."
  }, {
    heading: "layoutimageview",
    content: "`fillMode`"
  }, {
    heading: "layoutimageview",
    content: "(Optional) String"
  }, {
    heading: "layoutimageview",
    content: "The display types of the image.- `fill`: Under the premise of maintaining the aspect ratio, zoom the image so that the image fills the container. \n\n- `fit`: zoom the image while maintaining the aspect ratio so that the image is in the container Full display."
  }, {
    heading: "vertical",
    content: "Vertical layout. The field is optional."
  }, {
    heading: "vertical",
    content: "See Set Vertical Layout."
  }, {
    heading: "vertical",
    content: "Field"
  }, {
    heading: "vertical",
    content: "Type"
  }, {
    heading: "vertical",
    content: "Descriptions"
  }, {
    heading: "vertical",
    content: "`maxResolutionUid`"
  }, {
    heading: "vertical",
    content: "Number"
  }, {
    heading: "vertical",
    content: "The user ID of the user who is displayed in the large window. If `maxResolutionUid` is not set, the user with the loudest volume when the layout refreshes is displayed in the large window.- By default, the screen layout is refreshed every 3 seconds. Contact support\\@agora.io if you need to adjust the refresh interval.\n\n- Not setting `maxResolutionUid` may cause the screen layout to change every 3 seconds. If the layout needs to be stable, set this parameter."
  }, {
    heading: "vertical",
    content: "`fillMode`"
  }, {
    heading: "vertical",
    content: "String"
  }, {
    heading: "vertical",
    content: "The display options of the screen:- `fill`: (Default) Zoom the image to fill the window completely while maintaining the aspect ratio of the image.\n\n- `fit`: Zoom the image only until it fills the window vertically or horizontally, displaying the entire image while possibly leaving some of the window blank."
  }, {
    heading: "seioptions",
    content: "The user SEI information carried in the output video stream. The field is optional."
  }, {
    heading: "seioptions",
    content: "Field"
  }, {
    heading: "seioptions",
    content: "Type"
  }, {
    heading: "seioptions",
    content: "Descriptions"
  }, {
    heading: "seioptions",
    content: "`source`"
  }, {
    heading: "seioptions",
    content: "JSON Object"
  }, {
    heading: "seioptions",
    content: "Set the data source of SEI information. The default value is empty."
  }, {
    heading: "seioptions",
    content: "`source.metadata`"
  }, {
    heading: "seioptions",
    content: "Bool"
  }, {
    heading: "seioptions",
    content: "Set whether to pass in metadata-type SEI information.- `true`: Metadata-type SEI information is passed in.\n\n- (Default) `false`: Metadata-type SEI information is not passed in."
  }, {
    heading: "seioptions",
    content: "`source.datastream`"
  }, {
    heading: "seioptions",
    content: "Bool"
  }, {
    heading: "seioptions",
    content: `Set whether to pass in Agora Datastream-type SEI information type.- true: Agora Datastream-type SEI information is passed in.

- (Default) false: Agora Datastream-type SEI information is not passed in.`
  }, {
    heading: "seioptions",
    content: "`source.customized`"
  }, {
    heading: "seioptions",
    content: "JSON Object"
  }, {
    heading: "seioptions",
    content: "Custom SEI information. Custom SEI information is converted into Agora SEI information. The default value is empty."
  }, {
    heading: "seioptions",
    content: "`source.customized.prefixForAgoraSei`"
  }, {
    heading: "seioptions",
    content: "String"
  }, {
    heading: "seioptions",
    content: "Set the payload prefix of SEI information. The maximum length is 32 characters, and the default value is blank."
  }, {
    heading: "seioptions",
    content: "`source.customized.payload`"
  }, {
    heading: "seioptions",
    content: "String"
  }, {
    heading: "seioptions",
    content: "Set the payload of the SEI information. The maximum length is 4096 characters, and the default value is blank. When the SEI information is converted into Agora SEI information, the payload is corresponds to the app\\_data of the SEI."
  }, {
    heading: "seioptions",
    content: "`sink`"
  }, {
    heading: "seioptions",
    content: "JSON Object"
  }, {
    heading: "seioptions",
    content: "Set the attributes of the output SEI information. The default value is empty."
  }, {
    heading: "seioptions",
    content: "`sink.type`"
  }, {
    heading: "seioptions",
    content: "Int"
  }, {
    heading: "seioptions",
    content: "Set the payload type of the output SEI information. The default value is 100."
  }],
  headings: [{
    id: "audiooptions",
    content: "audioOptions"
  }, {
    id: "videooptions",
    content: "videoOptions"
  }, {
    id: "canvas",
    content: "canvas"
  }, {
    id: "layout",
    content: "layout"
  }, {
    id: "layoutrtcstreamview",
    content: "layout.RtcStreamView"
  }, {
    id: "layoutimageview",
    content: "layout.ImageView"
  }, {
    id: "vertical",
    content: "vertical"
  }, {
    id: "seioptions",
    content: "seiOptions"
  }]
};
export let toc = [{
  depth: 2,
  url: "#audiooptions",
  title: _jsx(_Fragment, {
    children: "audioOptions"
  })
}, {
  depth: 2,
  url: "#videooptions",
  title: _jsx(_Fragment, {
    children: "videoOptions"
  })
}, {
  depth: 3,
  url: "#canvas",
  title: _jsx(_Fragment, {
    children: "canvas"
  })
}, {
  depth: 3,
  url: "#layout",
  title: _jsx(_Fragment, {
    children: "layout"
  })
}, {
  depth: 4,
  url: "#layoutrtcstreamview",
  title: _jsx(_Fragment, {
    children: "layout.RtcStreamView"
  })
}, {
  depth: 4,
  url: "#layoutimageview",
  title: _jsx(_Fragment, {
    children: "layout.ImageView"
  })
}, {
  depth: 3,
  url: "#vertical",
  title: _jsx(_Fragment, {
    children: "vertical"
  })
}, {
  depth: 3,
  url: "#seioptions",
  title: _jsx(_Fragment, {
    children: "seiOptions"
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
    p: "p",
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
      children: "This page lists all the type definitions of the Media Push RESTful API."
    }), `
`, _jsx(_components.h2, {
      id: "audiooptions",
      children: "audioOptions"
    }), `
`, _jsx(_components.p, {
      children: "The audio transcoding configuration of the Converter."
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
              children: "codecProfile"
            })
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
              children: "The audio codec output by the Converter. The following values are supported:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "LC-AAC"
                }), " (Default): MPEG-4 AAC LC"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "HE-AAC"
                }), ": High-Efficiency AAC"]
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
              children: "sampleRate"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) Number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The audio coding sampling rate (Hz) output by the Converter, which can be ", _jsx(_components.code, {
              children: "32000"
            }), ", ", _jsx(_components.code, {
              children: "44100,"
            }), " or ", _jsx(_components.code, {
              children: "48000 "
            }), "(Default value)."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "bitrate"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The audio encoding bit rate (Kbps) output by the Converter. The value range is [32,128]. The default value is 48. If the audio codec is LC-AAC, the recommended audio code rate range is [32,112]. If the audio codec is HE-AAC, the recommended audio code rate range is [40,96]."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "audioChannels"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) Number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The number of audio channels output by the Converter, which can be ", _jsx(_components.code, {
              children: "1"
            }), " (Default) or ", _jsx(_components.code, {
              children: "2"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "rtcStreamUids"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) JSON Array of Numbers"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "The user IDs of the users participating in the mixing."
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "The default value is user IDs of all users in the channel, which means that Agora mixes all users's audio streams in the channel."
              }), `
`, _jsx(_components.li, {
                children: "An empty array means that Agora does not mix any user's audio streams."
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
              children: "volumes"
            })
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
              children: "Set the volume of users participating in the mixing."
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["This field takes effect only when mixing user IDs are specified (set ", _jsx(_components.code, {
                  children: "rtcStreamUids"
                }), ")."]
              }), `
`, _jsxs(_components.li, {
                children: ["You can call the ", _jsx(_components.a, {
                  href: "./index#update-update-the-converter",
                  children: _jsx(_components.code, {
                    children: "Update"
                  })
                }), " method to adjust the volume of the specified user. Each time the ", _jsx(_components.code, {
                  children: "Update"
                }), " request is successful, the volume of other users in the mixing is reseted to the default value (", _jsx(_components.code, {
                  children: "100"
                }), ")."]
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
              children: "volumes.rtcStreamUid"
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
              children: "The user IDs of the mixing users to set the volume."
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "volumes.rtcStreamUid"
                  }), " needs to exist in the ", _jsx(_components.code, {
                    children: "rtcStreamUids"
                  }), " array, otherwise the request ", _jsx(_components.code, {
                    children: "fails"
                  }), " with a response status code of ", _jsx(_components.code, {
                    children: "400"
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
            children: _jsx(_components.code, {
              children: "volumes.volume"
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
            children: ["The volume of the specified mix user. The default value is ", _jsx(_components.code, {
              children: "100"
            }), ", and the value range is [0, 200]."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "videooptions",
      children: "videoOptions"
    }), `
`, _jsx(_components.p, {
      children: "The video transcoding configuration of the Converter."
    }), `
`, _jsx(_components.h3, {
      id: "canvas",
      children: "canvas"
    }), `
`, _jsx(_components.p, {
      children: "The video canvas."
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
              children: "width"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The width of the canvas (pixels). The value range is [66,1920]."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "height"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The height of the canvas (pixels). The value range is [66,1920]."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "color"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The background color of the canvas. This is an RGB color value, expressed as a decimal number. For example, 255 represents blue. The value range is [0,16777215]. The default value is 0, which is black."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "layout",
      children: "layout"
    }), `
`, _jsx(_components.p, {
      children: "The content description of the video screen on the canvas."
    }), `
`, _jsx(_components.h4, {
      id: "layoutrtcstreamview",
      children: "layout.RtcStreamView"
    }), `
`, _jsx(_components.p, {
      children: "The video screen of each user on the canvas."
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
              children: "rtcStreamUid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The user ID of the user to which the video stream belongs."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) JSON Object"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The display area of the user's video screen on the canvas. If the video screen dimensions exceed the canvas, the screen will be cropped, and the excess image will not be displayed."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region.xPos"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The x coordinate (pixels) of the screen on the canvas. This is the lateral displacement relative to the origin, where the upper left corner of the canvas is the origin, and the x coordinate is the upper left corner of the screen."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region.yPos"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The y coordinate (pixels) of the screen on the canvas. This is the longitudinal displacement relative to the origin, where the upper left corner of the canvas is the origin, and the y coordinate is the upper left corner of the screen."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region.zIndex"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) Number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The layer number of the screen. The value range is [0,100]. ", _jsx(_components.code, {
              children: "0"
            }), " represents the lowest layer. ", _jsx(_components.code, {
              children: "100"
            }), " represents the top layer."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region.width"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The width of the screen (pixels)."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region.height"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The height of the screen (pixels)."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "fillMode"
            })
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
              children: "The display types of the screen."
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "fill"
                  }), ": (Default) Under the premise of maintaining the aspect ratio, zoom the screen to fill the container. ", _jsx(_components.img, {
                    src: "https://web-cdn.agora.io/docs-files/1628837665989",
                    alt: "1628837665989"
                  })]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "fit"
                  }), ": Zoom the screen while maintaining the aspect ratio so that the screen is in the container Full display. ", _jsx(_components.img, {
                    src: "https://web-cdn.agora.io/docs-files/1628837708782",
                    alt: "1628837708782"
                  })]
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
              children: "placeholderImageUrl"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The HTTP(S) URL of the substitute image. Images in JPG, PNG and GIF formats are supported. When the user in the channel does not publish the video stream, if this field is set, this substitute image will replace the user's video screen; otherwise, the last frame of the user's video will be displayed."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "layoutimageview",
      children: "layout.ImageView"
    }), `
`, _jsx(_components.p, {
      children: "The video image on the canvas, which can be used as a watermark."
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
              children: "imageUrl"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The HTTP(S) URL of the image. Images in JPG, PNG and GIF formats are supported."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) JSON Object"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The display area of the image on the canvas. If the video screen dimensions exceed the canvas, the screen will be cropped, and the excess image will not be displayed."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region.xPos"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The x coordinate (pixels) of the image on the canvas. This is the lateral displacement relative to the origin, where the upper left corner of the canvas is the origin, and the x coordinate is the upper left corner of the screen."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region.yPos"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The y coordinate (pixels) of the picture on the canvas. This is the longitudinal displacement relative to the origin, where the upper left corner of the canvas is the origin and the y coordinate is the upper left corner of the screen."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region.zIndex"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) Number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The layer number of the image. The value range is [0,100]. ", _jsx(_components.code, {
              children: "0"
            }), " represents the lowest layer. ", _jsx(_components.code, {
              children: "100"
            }), " represents the top layer."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region.width"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The width of the image (pixels)."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region.height"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Required) Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The height of the image (pixels)."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "fillMode"
            })
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
              children: "The display types of the image."
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "fill"
                  }), ": Under the premise of maintaining the aspect ratio, zoom the image so that the image fills the container. ", _jsx(_components.img, {
                    src: "https://web-cdn.agora.io/docs-files/1628837665989",
                    alt: ""
                  })]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "fit"
                  }), ": zoom the image while maintaining the aspect ratio so that the image is in the container Full display. ", _jsx(_components.img, {
                    src: "https://web-cdn.agora.io/docs-files/1628837708782",
                    alt: "1628837708782"
                  })]
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
      id: "vertical",
      children: "vertical"
    }), `
`, _jsx(_components.p, {
      children: "Vertical layout. The field is optional."
    }), `
`, _jsxs(_components.p, {
      children: ["See ", _jsx(_components.a, {
        href: "./set-vertical-layout",
        children: "Set Vertical Layout"
      }), "."]
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
              children: "maxResolutionUid"
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
            children: [_jsxs(_components.p, {
              children: ["The user ID of the user who is displayed in the large window. If ", _jsx(_components.code, {
                children: "maxResolutionUid"
              }), " is not set, the user with the loudest volume when the layout refreshes is displayed in the large window."]
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["By default, the screen layout is refreshed every 3 seconds. Contact ", _jsx(_components.a, {
                    href: "mailto:support@agora.io",
                    children: "support@agora.io"
                  }), " if you need to adjust the refresh interval."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Not setting ", _jsx(_components.code, {
                    children: "maxResolutionUid"
                  }), " may cause the screen layout to change every 3 seconds. If the layout needs to be stable, set this parameter."]
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
              children: "fillMode"
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
              children: "The display options of the screen:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "fill"
                  }), ": (Default) Zoom the image to fill the window completely while maintaining the aspect ratio of the image.", _jsx(_components.img, {
                    src: "https://web-cdn.agora.io/docs-files/1628837665989",
                    alt: "1628837665989"
                  })]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "fit"
                  }), ": Zoom the image only until it fills the window vertically or horizontally, displaying the entire image while possibly leaving some of the window blank. ", _jsx(_components.img, {
                    src: "https://web-cdn.agora.io/docs-files/1628837708782",
                    alt: "1628837708782"
                  })]
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
      id: "seioptions",
      children: "seiOptions"
    }), `
`, _jsx(_components.p, {
      children: "The user SEI information carried in the output video stream. The field is optional."
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
              children: "source"
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
            children: "Set the data source of SEI information. The default value is empty."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "source.metadata"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Bool"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "Set whether to pass in metadata-type SEI information."
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "true"
                  }), ": Metadata-type SEI information is passed in."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["(Default) ", _jsx(_components.code, {
                    children: "false"
                  }), ": Metadata-type SEI information is not passed in."]
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
              children: "source.datastream"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Bool"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "Set whether to pass in Agora Datastream-type SEI information type."
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "true: Agora Datastream-type SEI information is passed in."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "(Default) false: Agora Datastream-type SEI information is not passed in."
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
              children: "source.customized"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Custom SEI information. Custom SEI information is converted into ", _jsx(_components.a, {
              href: "./sei-information",
              children: "Agora SEI information"
            }), ". The default value is empty."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "source.customized.prefixForAgoraSei"
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
            children: "Set the payload prefix of SEI information. The maximum length is 32 characters, and the default value is blank."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "source.customized.payload"
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
            children: ["Set the payload of the SEI information. The maximum length is 4096 characters, and the default value is blank. When the SEI information is converted into ", _jsx(_components.a, {
              href: "./sei-information",
              children: "Agora SEI information"
            }), ", the payload is corresponds to the app_data of the SEI."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "sink"
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
            children: "Set the attributes of the output SEI information. The default value is empty."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "sink.type"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Int"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Set the payload type of the output SEI information. The default value is 100."
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
