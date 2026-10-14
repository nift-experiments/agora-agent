import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Set video layout",
  description: "Explains the layout types you can choose in a composite recording."
};
export let _markdown = `

This page explains the layout types you can choose in a composite recording. See [Composite Recording](/en/realtime-media/cloud-recording/build/start-a-recording/composite-mode) for more details about this recording mode

When there are multiple users sending streams in a channel, the Agora Cloud Recording Service mixes the streams of all the users into one stream. This is called **composite recording** mode. This page shows you how to set the video layout for composite recording.

As shown in the following image, the background of the video is **canvas**, and each user occupies a **region** on the canvas.

![](https://web-cdn.agora.io/docs-files/1577697787996)

You can set the video layout in two ways:

* [Select from the predefined layout types](#select-from-the-predefined-layout-types) (Floating Layout, Best Fit Layout, and Vertical Layout).
* [Customize the video layout](#customize-the-video-layout).

<CalloutContainer type="info">
  <CalloutDescription>
    - The canvas can display up to 17 regions.
    - If a user sends only audio, the user occupies a region.
    - If the aspect ratio of a user's video does not match that of the user's region, the video may be cropped or scaled to fit the region. The aspect ratio of the user's region depends on the aspect ratio of the canvas and the layout type.
  </CalloutDescription>
</CalloutContainer>

## Select from the predefined layout types [#select-from-the-predefined-layout-types]

The Agora Cloud Recording Service provides the following predefined layout types:

* [Floating Layout](#float): (Default) The first user in the channel occupies the full canvas. The other users occupy the small regions on top of the canvas, starting from the bottom left corner. The small regions are arranged in the order of the users joining the channel. This layout supports one full-size region and up to four rows of small regions on top with four regions per row, comprising 17 users.
* [Best Fit Layout](#bestfit): This is a grid layout. The number of columns and rows and the grid size vary depending on the number of users in the channel. This layout supports up to 17 users.
* [Vertical Layout](#vertical): One large region is displayed on the left edge of the canvas, and several smaller regions are displayed along the right edge of the canvas. The space on the right supports up to two columns of small regions with eight regions per column. This layout supports up to 17 users.

### Implementation [#implementation]

Set the \`mixedVideoLayout\` parameter in \`transcodingConfig\` as 0 (floating layout), 1 (best fit layout), or 2 (vertical layout) when calling the [\`start\`](/en/api-reference/api-ref/cloud-recording#start) or [\`updateLayout\`](/en/api-reference/api-ref/cloud-recording#updatelayout) method.

<CalloutContainer type="info">
  <CalloutDescription>
    If you set the \`mixedVideoLayout\` parameter as 0, 1, or 2, do not pass in the \`layoutConfig\` parameter.
  </CalloutDescription>
</CalloutContainer>

### Predefined layout types [#predefined-layout-types]

This section describes the predefined layout types.

The numbers in the following figures indicate the order of users joining the channel. If user 1 leaves the channel, user 2 takes over user 1's region, and so on.

#### Floating layout [#floating-layout]

This is the default layout, where small regions are on top of a full-size region. The first user in the channel occupies the full canvas. The other users occupy the small regions on top of the canvas, starting from the bottom left corner. The small regions are arranged in the order of the users joining the channel. This layout supports up to four rows of regions on top with four regions per row.

* If a user sends only audio, the user's region is transparent.
* If the aspect ratio of a user's video does not match that of the user's region, the video is cropped to fit the region.
* The width and height of each small region are 23.5% of those of the canvas. The gaps between two horizontally or vertically adjacent regions are 1.2 % of the width and height of the canvas respectively. The gap between the bottom row and the border-bottom is 1.2 % of the height of the canvas, and the left/right margin is also 1.2 % of the width of the canvas.

The following figures show the layouts with different number of users in the channel.

![](https://web-cdn.agora.io/docs-files/1577697865676)

![](https://web-cdn.agora.io/docs-files/1577697930206)

![](https://web-cdn.agora.io/docs-files/1577697950264)

#### Best fit layout [#best-fit-layout]

This is a grid layout. In this layout, the grid size varies depending on the number of users in the channel.

* The region that is not occupied by any user shows the background color.
* If a user sends only audio, the user's region shows the background color.
* If the aspect ratio of a user's video does not match that of the user's region, the video is cropped to fit the region.

The following figures show the layouts with different number of users in the channel.

![](https://web-cdn.agora.io/docs-files/1577697975441)

![](https://web-cdn.agora.io/docs-files/1577697997849)

![](https://web-cdn.agora.io/docs-files/1577698010532)

**17 Users**

The best fit layout for 17 users in a channel is unique.

As shown in the following figure, the regions are displayed across the middle of the canvas with bands on the left and right of the canvas. The width and height of each region are 20% of those of the canvas respectively, while the width of the two bands is 10% of that of the canvas. The 17th region is placed in the middle of the bottom row.

![](https://web-cdn.agora.io/docs-files/1577698032073)

#### Vertical layout [#vertical-layout]

In this layout, one large region is displayed on the left edge of the screen, and several smaller regions are displayed along the right edge of the screen.

Therefore, when you start cloud recording, you must specify a uid, whose region is displayed on the left edge of the screen in a large size.

To specify a uid, set the \`maxResolutionUid\` parameter when calling the [\`start\`](/en/api-reference/api-ref/cloud-recording#start) or [\`updateLayout\`](/en/api-reference/api-ref/cloud-recording#updatelayout) method.

Sample code:

\`\`\`json
"transcodingConfig": {
  "mixedVideoLayout": 2,
  "maxResolutionUid": "123456"
}
\`\`\`

This layout supports up to two columns of small regions on the right edge with eight regions per column.

* In the following figures, "Large" refers to the large region displaying the video of the specified user.
  * If you do not specify a user or the specified user does not join the channel, the "Large" region shows the background color.
  * If the aspect ratio of the specified user's video does not match that of the large region, the video is scaled to fit the region, ensuring the completeness of the video.
* The small regions are tiled in the order of the users joining the channel.
  * If user small 1 leaves the channel, user small 2 takes over user small 1's region, and so on.
  * If the aspect ratio of a user's video does not match that of the user's region, the video is cropped to fit the region.
* The region that is not occupied by any user shows the background color.
* If a user sends only audio, the user's region shows the background color.

See the following pictures for the layouts with different number of users in the channel.

![](https://web-cdn.agora.io/docs-files/1577698419720)

* For the layout of 1 to 5 users, the regions of users 1 to 4 are tiled along the right edge of the canvas. The width and height of the small region are one-fifth and one-fourth of those of the canvas respectively.
* For the layout of 6 to 7 users, the regions of users 1 to 6 are tiled along the right edge of the canvas. The width and height of the small region are one-seventh and one-sixth of those of the canvas respectively.

![](https://assets-docs.agora.io/images/cloud-recording/vertical-layout.png)

* For the layout of 6 to 7 users, the regions of users 1 to 8 are tiled along the right edge of the canvas. The width and height of the small region are one-ninth and one-eighth of those of the canvas respectively.
* For the layout of 6 to 7 users, the regions of users 1 to 16 are tiled along the right edge of the canvas. The width and height of the small region are one-tenth and one-eighth of those of the canvas respectively.

## Customize the video layout [#customize-the-video-layout]

You can customize the video layout by setting the size and position of each user's region on the canvas.

<CalloutContainer type="info">
  <CalloutDescription>
    Regardless of the number of users displaying in the canvas, the Cloud Recording Service subscribes to all the streams in the channel.
  </CalloutDescription>
</CalloutContainer>

### Implementation [#implementation-1]

#### Customize the video layout when starting recording [#customize-the-video-layout-when-starting-recording]

Set \`mixedVideoLayout\` as 3 (customized layout) and pass in the \`layoutConfig\` parameter when calling the [\`start\`](/en/api-reference/api-ref/cloud-recording#start) method to start the recording.

\`\`\`json
Body:
{
  ......
  "clientRequest": {
    .......
    "recordingConfig": {
      ........
      "transcodingConfig": {
        .......
        "mixedVideoLayout": 3
        "layoutConfig":[
        {
          ........
        }]
      }
    },
  .......
  }
}
\`\`\`

\`layoutConfig\` is an array consisting of the configurations of the user regions. You can configure up to 17 regions.

The configuration of a user region is a JSON object with the following parameters:

| Parameter     | Type    | Description                                                                                                                                                                                                                                 |
| :------------ | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`uid\`         | String  | (Optional) A string that contains the user ID of the user whose video you want to display in the region, for example, "527841". If this parameter is not specified, the configurations apply in the order of the users joining the channel. |
| \`x_axis\`      | Float   | (Mandatory) The relative horizontal position of the top-left corner of the region. The value is between 0.0 (leftmost) and 1.0 (rightmost).                                                                                                 |
| \`y_axis\`      | Float   | (Mandatory)  The relative vertical position of the top-left corner of the region. The value is between 0.0 (top) and 1.0 (bottom).                                                                                                          |
| \`width\`       | Float   | (Mandatory) The relative width of the region. The value is between 0.0 and 1.0.                                                                                                                                                             |
| \`height\`      | Float   | (Mandatory) The relative height of the region. The value is between 0.0 and 1.0.                                                                                                                                                            |
| \`alpha\`       | Float   | (Optional) The transparency of the image. The value is between 0.0 (transparent) and 1.0 (opaque). The default value is 1.0.                                                                                                                |
| \`render_mode\` | Integer | (Optional) The video display mode. \`0\`: (Default) Cropped mode. \`1\`: Scaled to fit mode.                                                                                                                                                    |

![](https://web-cdn.agora.io/docs-files/1563180630268)

As shown in the figure above, we set the upper left corner of the video canvas as the origin. The \`x_axis\` and \`y_axis\` parameters define the relative position of a user's region on the canvas, representing the horizontal and vertical distance between the upper left corner of the region and the origin respectively. The \`width\` and \`height\` parameters define the relative width and relative height of the region. The \`x_axis\`, \`y_axis\`, \`width\`, and \`height\` parameters are floats between 0.0 and 1.0. Ensure that \`x_axis + width <= 1\` and \`y_axis + height <= 1\`.

For example, in the interactive live streaming, a host can invite the audience to become guest hosts. When you start the recording, you know the user ID of the host but the user IDs of the guest hosts change. The following sample code is for the layout of three hosts: one large region for the main host and two small regions for the guest hosts. The guest hosts occupy the small regions in the order of joining the channel.

Sample code:

\`\`\`json
"transcodingConfig": {
  "mixedVideoLayout": 3,
  "backgroudColor": "#FF0000",
  "layoutConfig": [
  {
    "uid": "1",
    "x_axis": 0.0,
    "y_axis": 0.0,
    "width": 1.0,
    "height": 0.5,
    "alpha": 1.0,
    "render_mode": 1
  },
  {
    "x_axis": 0.0,
    "y_axis": 0.5,
    "width": 0.5,
    "height": 0.5,
    "alpha": 1.0,
    "render_mode": 1
  },
  {
    "x_axis": 0.5,
    "y_axis": 0.5,
    "width": 0.5,
    "height": 0.5,
    "alpha": 1.0,
    "render_mode": 1
  }]
}
\`\`\`

The following figure shows the layout of the sample code:

![](https://web-cdn.agora.io/docs-files/1563183775409)

#### Update the customized layout during a recording [#update-the-customized-layout-during-a-recording]

During a recording, you can call the [\`updateLayout\`](/en/api-reference/api-ref/cloud-recording#updatelayout) method to update the video mixing layout multiple times.

To update a customized layout, set the \`mixedVideoLayout\` parameter as 3 (customized layout), and populate \`layoutConfig\`.

Sample code:

\`\`\`json
"clientRequest": {
  "mixedVideoLayout": 3,
  "backgroundColor": "#0000FF",
  "layoutConfig": [
  {
    "uid": "1",
    "x_axis": 0.0,
    "y_axis": 0.1,
    "width": 0.1,
    "height": 0.1,
    "alpha": 1.0,
    "render_mode": 1
  },
  {
    "uid": "2",
    "x_axis": 0.2,
    "y_axis": 0.2,
    "width": 0.1,
    "height": 0.1,
    "alpha": 1.0,
    "render_mode": 1
  }]
},
\`\`\`

## Set the background color or background image [#set-the-background-color-or-background-image]

You can set the background color or background image of the canvas or a user region when you call the \`start\` or \`updateLayout\` methods. 3.5 seconds after a user stops sending video streams, the user region switches to the background image or background color.

### Sample code [#sample-code]

\`\`\`json
"transcodingConfig": {
    ......
    "backgroundColor": "#FF0000",
    "defaultUserBackgroundImage": "https://xx.xxx/xxx.jpg",
    "backgroundConfig": [{
        "uid": "16",
        "image_url": "https://xx.xxx.xxx/xxx.bmp",
        "render_mode": 0
    },
    {
        "uid": "17",
        "image_url": "https://xx.xxx.xxx/xxx.bmp",
        "render_mode": 0
    }]
}
\`\`\`

The following figure shows the corresponding layout of the sample code:

![](https://web-cdn.agora.io/docs-files/1617180127672)

* The canvas uses \`"#FF0000"\` (black) as the background color, set by the \`backgroundColor\` parameter.
* User 1-15 use the default background image for the user region, set by the \`defaultUserBackgroundImage\` parameter.
* User 16 and17 use the background image for individual user regions, set by the \`image_url\` parameter.

### Considerations [#considerations]

* Settings for the background color and the background image are overridden if their priorities are low. The parameters are listed from high to low priority as follows:
  * The \`image_url\` field in \`backgroundConfig\` (the background image of an individual user)
  * \`defaultUserBackgroundImage\` (the default background image of user regions)
  * \`backgroundImage\` (the background image of the canvas)
  * \`backgroundColor\` (the background color of the canvas)
* If a user leaves the channel in the middle of a call, the user region displays different contents in different circumstances. Refer to [Considerations](/en/realtime-media/cloud-recording/build/start-a-recording/composite-mode#considerations) in *Composite Recording* for details.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page explains the layout types you can choose in a composite recording. See Composite Recording for more details about this recording mode"
  }, {
    heading: undefined,
    content: "When there are multiple users sending streams in a channel, the Agora Cloud Recording Service mixes the streams of all the users into one stream. This is called **composite recording** mode. This page shows you how to set the video layout for composite recording."
  }, {
    heading: undefined,
    content: "As shown in the following image, the background of the video is **canvas**, and each user occupies a **region** on the canvas."
  }, {
    heading: undefined,
    content: "You can set the video layout in two ways:"
  }, {
    heading: undefined,
    content: "Select from the predefined layout types (Floating Layout, Best Fit Layout, and Vertical Layout)."
  }, {
    heading: undefined,
    content: "Customize the video layout."
  }, {
    heading: undefined,
    content: "The canvas can display up to 17 regions."
  }, {
    heading: undefined,
    content: "If a user sends only audio, the user occupies a region."
  }, {
    heading: undefined,
    content: "If the aspect ratio of a user's video does not match that of the user's region, the video may be cropped or scaled to fit the region. The aspect ratio of the user's region depends on the aspect ratio of the canvas and the layout type."
  }, {
    heading: "select-from-the-predefined-layout-types",
    content: "The Agora Cloud Recording Service provides the following predefined layout types:"
  }, {
    heading: "select-from-the-predefined-layout-types",
    content: "Floating Layout: (Default) The first user in the channel occupies the full canvas. The other users occupy the small regions on top of the canvas, starting from the bottom left corner. The small regions are arranged in the order of the users joining the channel. This layout supports one full-size region and up to four rows of small regions on top with four regions per row, comprising 17 users."
  }, {
    heading: "select-from-the-predefined-layout-types",
    content: "Best Fit Layout: This is a grid layout. The number of columns and rows and the grid size vary depending on the number of users in the channel. This layout supports up to 17 users."
  }, {
    heading: "select-from-the-predefined-layout-types",
    content: "Vertical Layout: One large region is displayed on the left edge of the canvas, and several smaller regions are displayed along the right edge of the canvas. The space on the right supports up to two columns of small regions with eight regions per column. This layout supports up to 17 users."
  }, {
    heading: "implementation",
    content: "Set the `mixedVideoLayout` parameter in `transcodingConfig` as 0 (floating layout), 1 (best fit layout), or 2 (vertical layout) when calling the `start` or `updateLayout` method."
  }, {
    heading: "implementation",
    content: "If you set the `mixedVideoLayout` parameter as 0, 1, or 2, do not pass in the `layoutConfig` parameter."
  }, {
    heading: "predefined-layout-types",
    content: "This section describes the predefined layout types."
  }, {
    heading: "predefined-layout-types",
    content: "The numbers in the following figures indicate the order of users joining the channel. If user 1 leaves the channel, user 2 takes over user 1's region, and so on."
  }, {
    heading: "floating-layout",
    content: "This is the default layout, where small regions are on top of a full-size region. The first user in the channel occupies the full canvas. The other users occupy the small regions on top of the canvas, starting from the bottom left corner. The small regions are arranged in the order of the users joining the channel. This layout supports up to four rows of regions on top with four regions per row."
  }, {
    heading: "floating-layout",
    content: "If a user sends only audio, the user's region is transparent."
  }, {
    heading: "floating-layout",
    content: "If the aspect ratio of a user's video does not match that of the user's region, the video is cropped to fit the region."
  }, {
    heading: "floating-layout",
    content: "The width and height of each small region are 23.5% of those of the canvas. The gaps between two horizontally or vertically adjacent regions are 1.2 % of the width and height of the canvas respectively. The gap between the bottom row and the border-bottom is 1.2 % of the height of the canvas, and the left/right margin is also 1.2 % of the width of the canvas."
  }, {
    heading: "floating-layout",
    content: "The following figures show the layouts with different number of users in the channel."
  }, {
    heading: "best-fit-layout",
    content: "This is a grid layout. In this layout, the grid size varies depending on the number of users in the channel."
  }, {
    heading: "best-fit-layout",
    content: "The region that is not occupied by any user shows the background color."
  }, {
    heading: "best-fit-layout",
    content: "If a user sends only audio, the user's region shows the background color."
  }, {
    heading: "best-fit-layout",
    content: "If the aspect ratio of a user's video does not match that of the user's region, the video is cropped to fit the region."
  }, {
    heading: "best-fit-layout",
    content: "The following figures show the layouts with different number of users in the channel."
  }, {
    heading: "best-fit-layout",
    content: "**17 Users**"
  }, {
    heading: "best-fit-layout",
    content: "The best fit layout for 17 users in a channel is unique."
  }, {
    heading: "best-fit-layout",
    content: "As shown in the following figure, the regions are displayed across the middle of the canvas with bands on the left and right of the canvas. The width and height of each region are 20% of those of the canvas respectively, while the width of the two bands is 10% of that of the canvas. The 17th region is placed in the middle of the bottom row."
  }, {
    heading: "vertical-layout",
    content: "In this layout, one large region is displayed on the left edge of the screen, and several smaller regions are displayed along the right edge of the screen."
  }, {
    heading: "vertical-layout",
    content: "Therefore, when you start cloud recording, you must specify a uid, whose region is displayed on the left edge of the screen in a large size."
  }, {
    heading: "vertical-layout",
    content: "To specify a uid, set the `maxResolutionUid` parameter when calling the `start` or `updateLayout` method."
  }, {
    heading: "vertical-layout",
    content: "Sample code:"
  }, {
    heading: "vertical-layout",
    content: "This layout supports up to two columns of small regions on the right edge with eight regions per column."
  }, {
    heading: "vertical-layout",
    content: 'In the following figures, "Large" refers to the large region displaying the video of the specified user.'
  }, {
    heading: "vertical-layout",
    content: 'If you do not specify a user or the specified user does not join the channel, the "Large" region shows the background color.'
  }, {
    heading: "vertical-layout",
    content: "If the aspect ratio of the specified user's video does not match that of the large region, the video is scaled to fit the region, ensuring the completeness of the video."
  }, {
    heading: "vertical-layout",
    content: "The small regions are tiled in the order of the users joining the channel."
  }, {
    heading: "vertical-layout",
    content: "If user small 1 leaves the channel, user small 2 takes over user small 1's region, and so on."
  }, {
    heading: "vertical-layout",
    content: "If the aspect ratio of a user's video does not match that of the user's region, the video is cropped to fit the region."
  }, {
    heading: "vertical-layout",
    content: "The region that is not occupied by any user shows the background color."
  }, {
    heading: "vertical-layout",
    content: "If a user sends only audio, the user's region shows the background color."
  }, {
    heading: "vertical-layout",
    content: "See the following pictures for the layouts with different number of users in the channel."
  }, {
    heading: "vertical-layout",
    content: "For the layout of 1 to 5 users, the regions of users 1 to 4 are tiled along the right edge of the canvas. The width and height of the small region are one-fifth and one-fourth of those of the canvas respectively."
  }, {
    heading: "vertical-layout",
    content: "For the layout of 6 to 7 users, the regions of users 1 to 6 are tiled along the right edge of the canvas. The width and height of the small region are one-seventh and one-sixth of those of the canvas respectively."
  }, {
    heading: "vertical-layout",
    content: "For the layout of 6 to 7 users, the regions of users 1 to 8 are tiled along the right edge of the canvas. The width and height of the small region are one-ninth and one-eighth of those of the canvas respectively."
  }, {
    heading: "vertical-layout",
    content: "For the layout of 6 to 7 users, the regions of users 1 to 16 are tiled along the right edge of the canvas. The width and height of the small region are one-tenth and one-eighth of those of the canvas respectively."
  }, {
    heading: "customize-the-video-layout",
    content: "You can customize the video layout by setting the size and position of each user's region on the canvas."
  }, {
    heading: "customize-the-video-layout",
    content: "Regardless of the number of users displaying in the canvas, the Cloud Recording Service subscribes to all the streams in the channel."
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "Set `mixedVideoLayout` as 3 (customized layout) and pass in the `layoutConfig` parameter when calling the `start` method to start the recording."
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "`layoutConfig` is an array consisting of the configurations of the user regions. You can configure up to 17 regions."
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "The configuration of a user region is a JSON object with the following parameters:"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "Parameter"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "Type"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "Description"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "`uid`"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "String"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: '(Optional) A string that contains the user ID of the user whose video you want to display in the region, for example, "527841". If this parameter is not specified, the configurations apply in the order of the users joining the channel.'
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "`x_axis`"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "Float"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "(Mandatory) The relative horizontal position of the top-left corner of the region. The value is between 0.0 (leftmost) and 1.0 (rightmost)."
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "`y_axis`"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "Float"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "(Mandatory)  The relative vertical position of the top-left corner of the region. The value is between 0.0 (top) and 1.0 (bottom)."
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "`width`"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "Float"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "(Mandatory) The relative width of the region. The value is between 0.0 and 1.0."
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "`height`"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "Float"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "(Mandatory) The relative height of the region. The value is between 0.0 and 1.0."
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "`alpha`"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "Float"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "(Optional) The transparency of the image. The value is between 0.0 (transparent) and 1.0 (opaque). The default value is 1.0."
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "`render_mode`"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "Integer"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "(Optional) The video display mode. `0`: (Default) Cropped mode. `1`: Scaled to fit mode."
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "As shown in the figure above, we set the upper left corner of the video canvas as the origin. The `x_axis` and `y_axis` parameters define the relative position of a user's region on the canvas, representing the horizontal and vertical distance between the upper left corner of the region and the origin respectively. The `width` and `height` parameters define the relative width and relative height of the region. The `x_axis`, `y_axis`, `width`, and `height` parameters are floats between 0.0 and 1.0. Ensure that `x_axis + width <= 1` and `y_axis + height <= 1`."
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "For example, in the interactive live streaming, a host can invite the audience to become guest hosts. When you start the recording, you know the user ID of the host but the user IDs of the guest hosts change. The following sample code is for the layout of three hosts: one large region for the main host and two small regions for the guest hosts. The guest hosts occupy the small regions in the order of joining the channel."
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "Sample code:"
  }, {
    heading: "customize-the-video-layout-when-starting-recording",
    content: "The following figure shows the layout of the sample code:"
  }, {
    heading: "update-the-customized-layout-during-a-recording",
    content: "During a recording, you can call the `updateLayout` method to update the video mixing layout multiple times."
  }, {
    heading: "update-the-customized-layout-during-a-recording",
    content: "To update a customized layout, set the `mixedVideoLayout` parameter as 3 (customized layout), and populate `layoutConfig`."
  }, {
    heading: "update-the-customized-layout-during-a-recording",
    content: "Sample code:"
  }, {
    heading: "set-the-background-color-or-background-image",
    content: "You can set the background color or background image of the canvas or a user region when you call the `start` or `updateLayout` methods. 3.5 seconds after a user stops sending video streams, the user region switches to the background image or background color."
  }, {
    heading: "sample-code",
    content: "The following figure shows the corresponding layout of the sample code:"
  }, {
    heading: "sample-code",
    content: 'The canvas uses `"#FF0000"` (black) as the background color, set by the `backgroundColor` parameter.'
  }, {
    heading: "sample-code",
    content: "User 1-15 use the default background image for the user region, set by the `defaultUserBackgroundImage` parameter."
  }, {
    heading: "sample-code",
    content: "User 16 and17 use the background image for individual user regions, set by the `image_url` parameter."
  }, {
    heading: "considerations",
    content: "Settings for the background color and the background image are overridden if their priorities are low. The parameters are listed from high to low priority as follows:"
  }, {
    heading: "considerations",
    content: "The `image_url` field in `backgroundConfig` (the background image of an individual user)"
  }, {
    heading: "considerations",
    content: "`defaultUserBackgroundImage` (the default background image of user regions)"
  }, {
    heading: "considerations",
    content: "`backgroundImage` (the background image of the canvas)"
  }, {
    heading: "considerations",
    content: "`backgroundColor` (the background color of the canvas)"
  }, {
    heading: "considerations",
    content: "If a user leaves the channel in the middle of a call, the user region displays different contents in different circumstances. Refer to Considerations in *Composite Recording* for details."
  }],
  headings: [{
    id: "select-from-the-predefined-layout-types",
    content: "Select from the predefined layout types"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "predefined-layout-types",
    content: "Predefined layout types"
  }, {
    id: "floating-layout",
    content: "Floating layout"
  }, {
    id: "best-fit-layout",
    content: "Best fit layout"
  }, {
    id: "vertical-layout",
    content: "Vertical layout"
  }, {
    id: "customize-the-video-layout",
    content: "Customize the video layout"
  }, {
    id: "implementation-1",
    content: "Implementation"
  }, {
    id: "customize-the-video-layout-when-starting-recording",
    content: "Customize the video layout when starting recording"
  }, {
    id: "update-the-customized-layout-during-a-recording",
    content: "Update the customized layout during a recording"
  }, {
    id: "set-the-background-color-or-background-image",
    content: "Set the background color or background image"
  }, {
    id: "sample-code",
    content: "Sample code"
  }, {
    id: "considerations",
    content: "Considerations"
  }]
};
export let toc = [{
  depth: 2,
  url: "#select-from-the-predefined-layout-types",
  title: _jsx(_Fragment, {
    children: "Select from the predefined layout types"
  })
}, {
  depth: 3,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#predefined-layout-types",
  title: _jsx(_Fragment, {
    children: "Predefined layout types"
  })
}, {
  depth: 4,
  url: "#floating-layout",
  title: _jsx(_Fragment, {
    children: "Floating layout"
  })
}, {
  depth: 4,
  url: "#best-fit-layout",
  title: _jsx(_Fragment, {
    children: "Best fit layout"
  })
}, {
  depth: 4,
  url: "#vertical-layout",
  title: _jsx(_Fragment, {
    children: "Vertical layout"
  })
}, {
  depth: 2,
  url: "#customize-the-video-layout",
  title: _jsx(_Fragment, {
    children: "Customize the video layout"
  })
}, {
  depth: 3,
  url: "#implementation-1",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 4,
  url: "#customize-the-video-layout-when-starting-recording",
  title: _jsx(_Fragment, {
    children: "Customize the video layout when starting recording"
  })
}, {
  depth: 4,
  url: "#update-the-customized-layout-during-a-recording",
  title: _jsx(_Fragment, {
    children: "Update the customized layout during a recording"
  })
}, {
  depth: 2,
  url: "#set-the-background-color-or-background-image",
  title: _jsx(_Fragment, {
    children: "Set the background color or background image"
  })
}, {
  depth: 3,
  url: "#sample-code",
  title: _jsx(_Fragment, {
    children: "Sample code"
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
    em: "em",
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
    children: [_jsxs(_components.p, {
      children: ["This page explains the layout types you can choose in a composite recording. See ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/start-a-recording/composite-mode",
        children: "Composite Recording"
      }), " for more details about this recording mode"]
    }), `
`, _jsxs(_components.p, {
      children: ["When there are multiple users sending streams in a channel, the Agora Cloud Recording Service mixes the streams of all the users into one stream. This is called ", _jsx(_components.strong, {
        children: "composite recording"
      }), " mode. This page shows you how to set the video layout for composite recording."]
    }), `
`, _jsxs(_components.p, {
      children: ["As shown in the following image, the background of the video is ", _jsx(_components.strong, {
        children: "canvas"
      }), ", and each user occupies a ", _jsx(_components.strong, {
        children: "region"
      }), " on the canvas."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1577697787996",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "You can set the video layout in two ways:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "#select-from-the-predefined-layout-types",
          children: "Select from the predefined layout types"
        }), " (Floating Layout, Best Fit Layout, and Vertical Layout)."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "#customize-the-video-layout",
          children: "Customize the video layout"
        }), "."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The canvas can display up to 17 regions."
          }), `
`, _jsx(_components.li, {
            children: "If a user sends only audio, the user occupies a region."
          }), `
`, _jsx(_components.li, {
            children: "If the aspect ratio of a user's video does not match that of the user's region, the video may be cropped or scaled to fit the region. The aspect ratio of the user's region depends on the aspect ratio of the canvas and the layout type."
          }), `
`]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "select-from-the-predefined-layout-types",
      children: "Select from the predefined layout types"
    }), `
`, _jsx(_components.p, {
      children: "The Agora Cloud Recording Service provides the following predefined layout types:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "#float",
          children: "Floating Layout"
        }), ": (Default) The first user in the channel occupies the full canvas. The other users occupy the small regions on top of the canvas, starting from the bottom left corner. The small regions are arranged in the order of the users joining the channel. This layout supports one full-size region and up to four rows of small regions on top with four regions per row, comprising 17 users."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "#bestfit",
          children: "Best Fit Layout"
        }), ": This is a grid layout. The number of columns and rows and the grid size vary depending on the number of users in the channel. This layout supports up to 17 users."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "#vertical",
          children: "Vertical Layout"
        }), ": One large region is displayed on the left edge of the canvas, and several smaller regions are displayed along the right edge of the canvas. The space on the right supports up to two columns of small regions with eight regions per column. This layout supports up to 17 users."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsxs(_components.p, {
      children: ["Set the ", _jsx(_components.code, {
        children: "mixedVideoLayout"
      }), " parameter in ", _jsx(_components.code, {
        children: "transcodingConfig"
      }), " as 0 (floating layout), 1 (best fit layout), or 2 (vertical layout) when calling the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#start",
        children: _jsx(_components.code, {
          children: "start"
        })
      }), " or ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#updatelayout",
        children: _jsx(_components.code, {
          children: "updateLayout"
        })
      }), " method."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you set the ", _jsx(_components.code, {
            children: "mixedVideoLayout"
          }), " parameter as 0, 1, or 2, do not pass in the ", _jsx(_components.code, {
            children: "layoutConfig"
          }), " parameter."]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "predefined-layout-types",
      children: "Predefined layout types"
    }), `
`, _jsx(_components.p, {
      children: "This section describes the predefined layout types."
    }), `
`, _jsx(_components.p, {
      children: "The numbers in the following figures indicate the order of users joining the channel. If user 1 leaves the channel, user 2 takes over user 1's region, and so on."
    }), `
`, _jsx(_components.h4, {
      id: "floating-layout",
      children: "Floating layout"
    }), `
`, _jsx(_components.p, {
      children: "This is the default layout, where small regions are on top of a full-size region. The first user in the channel occupies the full canvas. The other users occupy the small regions on top of the canvas, starting from the bottom left corner. The small regions are arranged in the order of the users joining the channel. This layout supports up to four rows of regions on top with four regions per row."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If a user sends only audio, the user's region is transparent."
      }), `
`, _jsx(_components.li, {
        children: "If the aspect ratio of a user's video does not match that of the user's region, the video is cropped to fit the region."
      }), `
`, _jsx(_components.li, {
        children: "The width and height of each small region are 23.5% of those of the canvas. The gaps between two horizontally or vertically adjacent regions are 1.2 % of the width and height of the canvas respectively. The gap between the bottom row and the border-bottom is 1.2 % of the height of the canvas, and the left/right margin is also 1.2 % of the width of the canvas."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The following figures show the layouts with different number of users in the channel."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1577697865676",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1577697930206",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1577697950264",
        alt: ""
      })
    }), `
`, _jsx(_components.h4, {
      id: "best-fit-layout",
      children: "Best fit layout"
    }), `
`, _jsx(_components.p, {
      children: "This is a grid layout. In this layout, the grid size varies depending on the number of users in the channel."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The region that is not occupied by any user shows the background color."
      }), `
`, _jsx(_components.li, {
        children: "If a user sends only audio, the user's region shows the background color."
      }), `
`, _jsx(_components.li, {
        children: "If the aspect ratio of a user's video does not match that of the user's region, the video is cropped to fit the region."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The following figures show the layouts with different number of users in the channel."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1577697975441",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1577697997849",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1577698010532",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "17 Users"
      })
    }), `
`, _jsx(_components.p, {
      children: "The best fit layout for 17 users in a channel is unique."
    }), `
`, _jsx(_components.p, {
      children: "As shown in the following figure, the regions are displayed across the middle of the canvas with bands on the left and right of the canvas. The width and height of each region are 20% of those of the canvas respectively, while the width of the two bands is 10% of that of the canvas. The 17th region is placed in the middle of the bottom row."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1577698032073",
        alt: ""
      })
    }), `
`, _jsx(_components.h4, {
      id: "vertical-layout",
      children: "Vertical layout"
    }), `
`, _jsx(_components.p, {
      children: "In this layout, one large region is displayed on the left edge of the screen, and several smaller regions are displayed along the right edge of the screen."
    }), `
`, _jsx(_components.p, {
      children: "Therefore, when you start cloud recording, you must specify a uid, whose region is displayed on the left edge of the screen in a large size."
    }), `
`, _jsxs(_components.p, {
      children: ["To specify a uid, set the ", _jsx(_components.code, {
        children: "maxResolutionUid"
      }), " parameter when calling the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#start",
        children: _jsx(_components.code, {
          children: "start"
        })
      }), " or ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#updatelayout",
        children: _jsx(_components.code, {
          children: "updateLayout"
        })
      }), " method."]
    }), `
`, _jsx(_components.p, {
      children: "Sample code:"
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
              children: '"transcodingConfig"'
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
              children: '  "mixedVideoLayout"'
            }), _jsx(_components.span, {
              style: {
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
              children: '  "maxResolutionUid"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"123456"'
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
      children: "This layout supports up to two columns of small regions on the right edge with eight regions per column."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ['In the following figures, "Large" refers to the large region displaying the video of the specified user.', `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: 'If you do not specify a user or the specified user does not join the channel, the "Large" region shows the background color.'
          }), `
`, _jsx(_components.li, {
            children: "If the aspect ratio of the specified user's video does not match that of the large region, the video is scaled to fit the region, ensuring the completeness of the video."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["The small regions are tiled in the order of the users joining the channel.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "If user small 1 leaves the channel, user small 2 takes over user small 1's region, and so on."
          }), `
`, _jsx(_components.li, {
            children: "If the aspect ratio of a user's video does not match that of the user's region, the video is cropped to fit the region."
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "The region that is not occupied by any user shows the background color."
      }), `
`, _jsx(_components.li, {
        children: "If a user sends only audio, the user's region shows the background color."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "See the following pictures for the layouts with different number of users in the channel."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1577698419720",
        alt: ""
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "For the layout of 1 to 5 users, the regions of users 1 to 4 are tiled along the right edge of the canvas. The width and height of the small region are one-fifth and one-fourth of those of the canvas respectively."
      }), `
`, _jsx(_components.li, {
        children: "For the layout of 6 to 7 users, the regions of users 1 to 6 are tiled along the right edge of the canvas. The width and height of the small region are one-seventh and one-sixth of those of the canvas respectively."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/cloud-recording/vertical-layout.png",
        alt: ""
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "For the layout of 6 to 7 users, the regions of users 1 to 8 are tiled along the right edge of the canvas. The width and height of the small region are one-ninth and one-eighth of those of the canvas respectively."
      }), `
`, _jsx(_components.li, {
        children: "For the layout of 6 to 7 users, the regions of users 1 to 16 are tiled along the right edge of the canvas. The width and height of the small region are one-tenth and one-eighth of those of the canvas respectively."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "customize-the-video-layout",
      children: "Customize the video layout"
    }), `
`, _jsx(_components.p, {
      children: "You can customize the video layout by setting the size and position of each user's region on the canvas."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Regardless of the number of users displaying in the canvas, the Cloud Recording Service subscribes to all the streams in the channel."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "implementation-1",
      children: "Implementation"
    }), `
`, _jsx(_components.h4, {
      id: "customize-the-video-layout-when-starting-recording",
      children: "Customize the video layout when starting recording"
    }), `
`, _jsxs(_components.p, {
      children: ["Set ", _jsx(_components.code, {
        children: "mixedVideoLayout"
      }), " as 3 (customized layout) and pass in the ", _jsx(_components.code, {
        children: "layoutConfig"
      }), " parameter when calling the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#start",
        children: _jsx(_components.code, {
          children: "start"
        })
      }), " method to start the recording."]
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
              children: "Body:"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
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
              children: "  ......"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "clientRequest"'
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
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "    ......."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "recordingConfig"'
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
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "      ........"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "transcodingConfig"'
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
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "        ......."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "mixedVideoLayout"'
            }), _jsx(_components.span, {
              style: {
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "layoutConfig"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "["
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
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "          ........"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      }"
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
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "  ......."
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
      children: [_jsx(_components.code, {
        children: "layoutConfig"
      }), " is an array consisting of the configurations of the user regions. You can configure up to 17 regions."]
    }), `
`, _jsx(_components.p, {
      children: "The configuration of a user region is a JSON object with the following parameters:"
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
              children: "uid"
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
            children: '(Optional) A string that contains the user ID of the user whose video you want to display in the region, for example, "527841". If this parameter is not specified, the configurations apply in the order of the users joining the channel.'
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "x_axis"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Float"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Mandatory) The relative horizontal position of the top-left corner of the region. The value is between 0.0 (leftmost) and 1.0 (rightmost)."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "y_axis"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Float"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Mandatory)  The relative vertical position of the top-left corner of the region. The value is between 0.0 (top) and 1.0 (bottom)."
          })]
        }), _jsxs(_components.tr, {
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
            children: "Float"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Mandatory) The relative width of the region. The value is between 0.0 and 1.0."
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
            children: "Float"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Mandatory) The relative height of the region. The value is between 0.0 and 1.0."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "alpha"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Float"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Optional) The transparency of the image. The value is between 0.0 (transparent) and 1.0 (opaque). The default value is 1.0."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "render_mode"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Integer"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["(Optional) The video display mode. ", _jsx(_components.code, {
              children: "0"
            }), ": (Default) Cropped mode. ", _jsx(_components.code, {
              children: "1"
            }), ": Scaled to fit mode."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1563180630268",
        alt: ""
      })
    }), `
`, _jsxs(_components.p, {
      children: ["As shown in the figure above, we set the upper left corner of the video canvas as the origin. The ", _jsx(_components.code, {
        children: "x_axis"
      }), " and ", _jsx(_components.code, {
        children: "y_axis"
      }), " parameters define the relative position of a user's region on the canvas, representing the horizontal and vertical distance between the upper left corner of the region and the origin respectively. The ", _jsx(_components.code, {
        children: "width"
      }), " and ", _jsx(_components.code, {
        children: "height"
      }), " parameters define the relative width and relative height of the region. The ", _jsx(_components.code, {
        children: "x_axis"
      }), ", ", _jsx(_components.code, {
        children: "y_axis"
      }), ", ", _jsx(_components.code, {
        children: "width"
      }), ", and ", _jsx(_components.code, {
        children: "height"
      }), " parameters are floats between 0.0 and 1.0. Ensure that ", _jsx(_components.code, {
        children: "x_axis + width <= 1"
      }), " and ", _jsx(_components.code, {
        children: "y_axis + height <= 1"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "For example, in the interactive live streaming, a host can invite the audience to become guest hosts. When you start the recording, you know the user ID of the host but the user IDs of the guest hosts change. The following sample code is for the layout of three hosts: one large region for the main host and two small regions for the guest hosts. The guest hosts occupy the small regions in the order of joining the channel."
    }), `
`, _jsx(_components.p, {
      children: "Sample code:"
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
              children: '"transcodingConfig"'
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
              children: '  "mixedVideoLayout"'
            }), _jsx(_components.span, {
              style: {
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "backgroudColor"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"#FF0000"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "layoutConfig"'
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
              children: "  {"
            })
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"1"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "x_axis"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "y_axis"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "width"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1.0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "height"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.5"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "alpha"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1.0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "render_mode"'
            }), _jsx(_components.span, {
              style: {
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
              children: "  },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "x_axis"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "y_axis"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.5"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "width"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.5"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "height"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.5"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "alpha"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1.0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "render_mode"'
            }), _jsx(_components.span, {
              style: {
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
              children: "  },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "x_axis"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.5"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "y_axis"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.5"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "width"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.5"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "height"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.5"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "alpha"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1.0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "render_mode"'
            }), _jsx(_components.span, {
              style: {
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
              children: "  }]"
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
      children: "The following figure shows the layout of the sample code:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1563183775409",
        alt: ""
      })
    }), `
`, _jsx(_components.h4, {
      id: "update-the-customized-layout-during-a-recording",
      children: "Update the customized layout during a recording"
    }), `
`, _jsxs(_components.p, {
      children: ["During a recording, you can call the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#updatelayout",
        children: _jsx(_components.code, {
          children: "updateLayout"
        })
      }), " method to update the video mixing layout multiple times."]
    }), `
`, _jsxs(_components.p, {
      children: ["To update a customized layout, set the ", _jsx(_components.code, {
        children: "mixedVideoLayout"
      }), " parameter as 3 (customized layout), and populate ", _jsx(_components.code, {
        children: "layoutConfig"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "Sample code:"
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
              children: '"clientRequest"'
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
              children: '  "mixedVideoLayout"'
            }), _jsx(_components.span, {
              style: {
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "backgroundColor"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"#0000FF"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "layoutConfig"'
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
              children: "  {"
            })
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"1"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "x_axis"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "y_axis"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "width"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "height"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "alpha"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1.0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "render_mode"'
            }), _jsx(_components.span, {
              style: {
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
              children: "  },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  {"
            })
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"2"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "x_axis"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.2"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "y_axis"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.2"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "width"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "height"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0.1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "alpha"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1.0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "render_mode"'
            }), _jsx(_components.span, {
              style: {
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
              children: "  }]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "},"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "set-the-background-color-or-background-image",
      children: "Set the background color or background image"
    }), `
`, _jsxs(_components.p, {
      children: ["You can set the background color or background image of the canvas or a user region when you call the ", _jsx(_components.code, {
        children: "start"
      }), " or ", _jsx(_components.code, {
        children: "updateLayout"
      }), " methods. 3.5 seconds after a user stops sending video streams, the user region switches to the background image or background color."]
    }), `
`, _jsx(_components.h3, {
      id: "sample-code",
      children: "Sample code"
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
              children: '"transcodingConfig"'
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
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "    ......"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "backgroundColor"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"#FF0000"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "defaultUserBackgroundImage"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"https://xx.xxx/xxx.jpg"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "backgroundConfig"'
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
              children: '"16"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "image_url"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"https://xx.xxx.xxx/xxx.bmp"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "render_mode"'
            }), _jsx(_components.span, {
              style: {
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
              children: '"17"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "image_url"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"https://xx.xxx.xxx/xxx.bmp"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "render_mode"'
            }), _jsx(_components.span, {
              style: {
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
              children: "    }]"
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
      children: "The following figure shows the corresponding layout of the sample code:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1617180127672",
        alt: ""
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The canvas uses ", _jsx(_components.code, {
          children: '"#FF0000"'
        }), " (black) as the background color, set by the ", _jsx(_components.code, {
          children: "backgroundColor"
        }), " parameter."]
      }), `
`, _jsxs(_components.li, {
        children: ["User 1-15 use the default background image for the user region, set by the ", _jsx(_components.code, {
          children: "defaultUserBackgroundImage"
        }), " parameter."]
      }), `
`, _jsxs(_components.li, {
        children: ["User 16 and17 use the background image for individual user regions, set by the ", _jsx(_components.code, {
          children: "image_url"
        }), " parameter."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Settings for the background color and the background image are overridden if their priorities are low. The parameters are listed from high to low priority as follows:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "image_url"
            }), " field in ", _jsx(_components.code, {
              children: "backgroundConfig"
            }), " (the background image of an individual user)"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "defaultUserBackgroundImage"
            }), " (the default background image of user regions)"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "backgroundImage"
            }), " (the background image of the canvas)"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "backgroundColor"
            }), " (the background color of the canvas)"]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["If a user leaves the channel in the middle of a call, the user region displays different contents in different circumstances. Refer to ", _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/build/start-a-recording/composite-mode#considerations",
          children: "Considerations"
        }), " in ", _jsx(_components.em, {
          children: "Composite Recording"
        }), " for details."]
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
