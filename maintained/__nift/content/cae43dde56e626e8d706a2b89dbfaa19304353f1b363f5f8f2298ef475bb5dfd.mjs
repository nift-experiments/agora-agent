import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Optimize video experience in multi-host scenarios",
  description: "Video experience optimization when multiple hosts are streaming."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;flutter&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    In multi-host streaming scenarios where 4 or more hosts stream videos simultaneously, users with the audience role face the following challenges:

    * **Device performance and bandwidth pressure**: Subscribing to multiple video streams can put significant pressure on device performance and downstream bandwidth, especially for mid-to-low-end devices. Audience members might experience lag or frame drops, leading to a suboptimal viewing experience.

    * **Flexible layout needs**: A custom video layout is often required, allowing viewers to adjust the position of each host's video to suit their individual preferences.

    * **Window switching and zooming**: With multiple hosts, the video size of each host may be limited. Flexible switching and resizing allow for a more personalized viewing experience.

    Agora offers a video experience optimization solution for multi-host video scenarios through a client-customized composite layout, designed to enhance user experience by focusing on smooth, personalized viewing.

    This solution is ideal for scenarios such as:

    * Team battle PK
    * Multi-person conference
    * Online education for large classes

    ## Understand the tech [#understand-the-tech]

    The following figure shows how the client-customized composite layout is used in conjunction with the Cloud Transcoding service:

    ![Multihost video streaming optimization](https://assets-docs.agora.io/images/video-sdk/multihost-video-optimization.png)

    After the audience receives the transcoded composite video stream, the custom composite layout is implemented locally as follows:

    ![Multihost composite layout](https://assets-docs.agora.io/images/video-sdk/multihost-composite-layout.png)

    ## Prerequisites [#prerequisites]

    Make sure you have:

    * Implemented basic real-time audio and video functionality with SDK version 4.5 or later. See the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).
    * Implemented [Cloud Transcoding](/en/realtime-media/transcoding) to forward composite video to other channels. Make sure you set the following parameters when you configure transcoding:

      \`\`\`json
      "outputs": [
        {
          "seiOption": {
            "source": {
              "agora": {
                "uidvideoLayout": true
              }
            },
            "sink": {
              "type": 100
            }
          }
        }
      ]
      \`\`\`

    ## Implementation [#implementation]

    This section explains how to implement a client-customized composite layout, with the API call sequence illustrated in the diagram.

    ![Multihost workflow](https://assets-docs.agora.io/images/video-sdk/multihost-workflow.svg)

    To implement a client-customized composite layout for the audience, follow these steps:

    1. Call \`joinChannel\` \\[2/2] to join the channel where the composite stream is located.

    2. Obtain the following information about the composite video stream through the \`onTranscodedStreamLayoutInfo\` callback triggered by the SDK:

       * The width and height of the composite stream, and the user ID of the user publishing it.
       * The user ID of each host publishing a sub-stream within the composite stream.
       * The x and y coordinates of each sub-stream on the composite canvas.
       * The width and height of each sub-stream.
       * The rendering state of each sub-stream on the composite canvas:
         * Normal rendering
         * Displayed as a placeholder
         * Displayed as a black image

    3. Call \`setupRemoteVideo\` to configure local rendering of the remote video stream. Set the following key parameters:

       * \`uid\`: The user ID of the user forwarding the composite stream to the current channel, obtained from the \`onTranscodedStreamLayoutInfo\` callback.
       * \`view\`: The remote video view displayed locally. Use this parameter to set the display position of each sub-stream in the local view.
       * \`subviewUid\`: The user ID corresponding to a specific sub-stream within the composite stream.

       <CalloutContainer type="info">
         <CalloutDescription>
           - When \`subviewUid\` is not \`0\`, the default value of \`setupMode\` is \`VIEW_SETUP_MODE_REPLACE\` (add a view).
           - If \`subviewUid\` is set, the setting of \`rect\` does not take effect.
         </CalloutDescription>
       </CalloutContainer>

       Use the following sample code as a reference for calling \`setupRemoteVideoEx\` in a multi-channel scenario. Calling \`setupRemoteVideo\` in a single-channel scenario is similar.

       \`\`\`java
       mRtcEngine.joinChannelEx(null, connection, mediaOptions, new IRtcEngineEventHandler() {
           @Override
           public void onTranscodedStreamLayoutInfo(final int uid, final VideoLayoutInfo info) {
               super.onTranscodedStreamLayoutInfo(uid, info);
               runOnUiThread(new Runnable() {
                   @Override
                   public void run() {
                       int size = info.layoutNumber;
                       viewGrids.setChildCount(info.layoutNumber);
                       for (int i = 0; i < size; i++) {
                           if (mUserViews.containsKey(info.layoutList[i].uid)) {
                               continue;
                           }

                           // Dynamically add the view
                           TextureView textureView = new TextureView(VideoChatViewActivity.this);
                           textureView.setLayoutParams(new ViewGroup.LayoutParams(
                               ViewGroup.LayoutParams.MATCH_PARENT,
                               ViewGroup.LayoutParams.MATCH_PARENT));
                           users.add(info.layoutList[i].uid);
                           views.add(textureView);
                           mUserViews.put(info.layoutList[i].uid, textureView);
                           viewGrids.addView(textureView);

                           // Configure VideoCanvas; set uid and subviewUid as shown,
                           // and configure other parameters as needed
                           VideoCanvas canvas = new VideoCanvas(textureView);
                           // User ID of the user forwarding the composite stream to the current channel
                           canvas.uid = uid;
                           // User ID corresponding to a specific sub-stream
                           canvas.subviewUid = info.layoutList[i].uid;
                           canvas.renderMode = Constants.RENDER_MODE_FIT;
                           mRtcEngine.setupRemoteVideoEx(canvas, connection);

                           // To remove a specific sub-stream, use the following code
                           // Do not include this in the same flow as the add code above.
                           VideoCanvas canvasToRemove = new VideoCanvas(textureView);
                           canvasToRemove.uid = uid;
                           canvasToRemove.subviewUid = info.layoutList[i].uid;
                           canvasToRemove.setupMode = VideoCanvas.VIEW_SETUP_MODE_REMOVE;
                           mRtcEngine.setupRemoteVideoEx(canvasToRemove);
                       }
                   }
               });
           }
       });
       \`\`\`

    4. When the layout of the composite stream changes, the \`onTranscodedStreamLayoutInfo\` callback fires again. Each time it fires, call \`setupRemoteVideo\` with the updated information to adjust the local rendering layout.

       <CalloutContainer type="info">
         <CalloutDescription>
           Layout changes can occur in the following situations:

           * The coordinates of a sub-stream on the composite canvas change.
           * The width or height of the composite stream or a sub-stream changes.
           * The state of a sub-stream changes. When the host publishing a sub-stream leaves the channel, the \`videoState\` parameter for that sub-stream changes from \`0\` (normal) to \`1\` (no video available). To stop rendering that host's video, call \`setupRemoteVideo\` with \`subviewUid\` set to that host's user ID and \`setupMode\` set to \`VIEW_SETUP_MODE_REMOVE\`.
         </CalloutDescription>
       </CalloutContainer>

    5. Listen for the \`onUserOffline\` callback. When the user forwarding the composite stream leaves the channel, stop rendering the composite stream on the receiving end.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Note
      </CalloutTitle>

      <CalloutDescription>
        * Client-customized composite layout is currently supported on mobile platforms only.
        * If a watermark is applied to the composite stream, the watermark renders within its designated region and may appear split across sub-stream boundaries.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product.

    ### API reference [#api-reference]

    * [\`onTranscodedStreamLayoutInfo\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo)
    * [\`setupRemoteVideo\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setupremotevideo)
    * [\`setupRemoteVideoEx\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineex.html#api_irtcengineex_setupremotevideoex)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    In multi-host streaming scenarios where 4 or more hosts stream videos simultaneously, users with the audience role face the following challenges:

    * **Device performance and bandwidth pressure**: Subscribing to multiple video streams can put significant pressure on device performance and downstream bandwidth, especially for mid-to-low-end devices. Audience members might experience lag or frame drops, leading to a suboptimal viewing experience.

    * **Flexible layout needs**: A custom video layout is often required, allowing viewers to adjust the position of each host's video to suit their individual preferences.

    * **Window switching and zooming**: With multiple hosts, the video size of each host may be limited. Flexible switching and resizing allow for a more personalized viewing experience.

    Agora offers a video experience optimization solution for multi-host video scenarios through a client-customized composite layout, designed to enhance user experience by focusing on smooth, personalized viewing.

    This solution is ideal for scenarios such as:

    * Team battle PK
    * Multi-person conference
    * Online education for large classes

    ## Understand the tech [#understand-the-tech-1]

    The following figure shows how the client-customized composite layout is used in conjunction with the Cloud Transcoding service:

    ![Multihost video streaming optimization](https://assets-docs.agora.io/images/video-sdk/multihost-video-optimization.png)

    After the audience receives the transcoded composite video stream, the custom composite layout is implemented locally as follows:

    ![Multihost composite layout](https://assets-docs.agora.io/images/video-sdk/multihost-composite-layout.png)

    ## Prerequisites [#prerequisites-1]

    Make sure you have:

    * Implemented basic real-time audio and video functionality with SDK version 4.5 or later. See the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).
    * Implemented [Cloud Transcoding](/en/realtime-media/transcoding) to forward composite video to other channels. Make sure you set the following parameters when you configure transcoding:

      \`\`\`json
      "outputs": [
        {
          "seiOption": {
            "source": {
              "agora": {
                "uidvideoLayout": true
              }
            },
            "sink": {
              "type": 100
            }
          }
        }
      ]
      \`\`\`

    ## Implementation [#implementation-1]

    This section explains how to implement a client-customized composite layout, with the API call sequence illustrated in the diagram.

    ![Multihost workflow](https://assets-docs.agora.io/images/video-sdk/multihost-workflow.svg)

    To implement a client-customized composite layout for the audience, follow these steps:

    1. Call \`joinChannel\` \\[2/2] to join the channel where the composite stream is located.

    2. Obtain the following information about the composite video stream through the \`didTranscodedStreamLayoutInfoUpdatedWithUserId\` callback triggered by the SDK:

       * The width and height of the composite stream, and the user ID of the user publishing it.
       * The user ID of each host publishing a sub-stream within the composite stream.
       * The x and y coordinates of each sub-stream on the composite canvas.
       * The width and height of each sub-stream.
       * The rendering state of each sub-stream on the composite canvas:
         * Normal rendering
         * Displayed as a placeholder
         * Displayed as a black image

    3. Call \`setupRemoteVideo\` to configure local rendering of the remote video stream. Set the following key parameters:

       * \`sourceType\`: Set to \`.transCoded\`, indicating the video source is a transcoded composite stream.
       * \`uid\`: The user ID of the user forwarding the composite stream to the current channel, obtained from the \`didTranscodedStreamLayoutInfoUpdatedWithUserId\` callback.
       * \`view\`: The remote video view displayed locally. Use this parameter to set the display position of each sub-stream in the local view.
       * \`subviewUid\`: The user ID corresponding to a specific sub-stream within the composite stream.

       <CalloutContainer type="info">
         <CalloutDescription>
           - When \`subviewUid\` is not \`0\`, the default value of \`setupMode\` is \`.replace\` (add a view).
           - If \`subviewUid\` is set, the setting of \`cropArea\` does not take effect.
         </CalloutDescription>
       </CalloutContainer>

       Use the following sample code as a reference for calling \`setupRemoteVideoEx\` in a multi-channel scenario. Calling \`setupRemoteVideo\` in a single-channel scenario is similar.

       \`\`\`swift
       agoraKit.joinChannelEx(byToken: nil, connection: connection, delegate: self, mediaOptions: mediaOptions)

       func rtcEngine(_ engine: AgoraRtcEngineKit, didTranscodedStreamLayoutInfoUpdatedWithUserId uid: UInt, videoLayoutInfo: AgoraVideoLayoutInfo) {
           DispatchQueue.main.async { [weak self] in
               guard let self = self else { return }

               guard let layoutList = videoLayoutInfo.layoutList else { return }

               for subLayout in layoutList {
                   let subUid = subLayout.uid
                   if self.userViews[subUid] != nil {
                       continue
                   }
                   // Dynamically add the view
                   let view = UIView()
                   view.translatesAutoresizingMaskIntoConstraints = false
                   self.containerView.addSubview(view)
                   self.userViews[subUid] = view

                   // Configure AgoraRtcVideoCanvas; set uid and subviewUid as shown,
                   // and configure other parameters as needed
                   let canvas = AgoraRtcVideoCanvas()
                   // User ID of the user forwarding the composite stream to the current channel
                   canvas.uid = uid
                   // User ID corresponding to a specific sub-stream
                   canvas.subviewUid = subUid
                   canvas.view = view
                   canvas.renderMode = .fit
                   canvas.sourceType = .transCoded
                   self.agoraKit.setupRemoteVideoEx(canvas, connection: connection)

                   // To remove a specific sub-stream, use the following code
                   // Do not include this in the same flow as the add code above.
                   let canvasToRemove = AgoraRtcVideoCanvas()
                   canvasToRemove.uid = uid
                   canvasToRemove.subviewUid = subUid
                   canvasToRemove.view = view
                   canvasToRemove.setupMode = .remove
                   self.agoraKit.setupRemoteVideoEx(canvasToRemove, connection: connection)
               }
           }
       }
       \`\`\`

    4. When the layout of the composite stream changes, the \`didTranscodedStreamLayoutInfoUpdatedWithUserId\` callback fires again. Each time it fires, call \`setupRemoteVideo\` with the updated information to adjust the local rendering layout.

       <CalloutContainer type="info">
         <CalloutDescription>
           Layout changes can occur in the following situations:

           * The coordinates of a sub-stream on the composite canvas change.
           * The width or height of the composite stream or a sub-stream changes.
           * The state of a sub-stream changes. When the host publishing a sub-stream leaves the channel, the \`videoState\` parameter for that sub-stream changes from \`0\` (normal) to \`1\` (no video available). To stop rendering that host's video, call \`setupRemoteVideo\` with \`subviewUid\` set to that host's user ID and \`setupMode\` set to \`.remove\`.
         </CalloutDescription>
       </CalloutContainer>

    5. Listen for the \`didOfflineOfUid\` callback. When the user forwarding the composite stream leaves the channel, stop rendering the composite stream on the receiving end.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Note
      </CalloutTitle>

      <CalloutDescription>
        * Client-customized composite layout is currently supported on mobile platforms only.
        * If a watermark is applied to the composite stream, the watermark renders within its designated region and may appear split across sub-stream boundaries.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product.

    ### API reference [#api-reference-1]

    * [\`rtcEngine(_:didTranscodedStreamLayoutInfoUpdatedWithUserId:videoLayoutInfo:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:didtranscodedstreamlayoutinfoupdatedwithuserid\\:videolayoutinfo:\\))
    * [\`setupRemoteVideo(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setupremotevideo\\(_:\\))
    * [\`setupRemoteVideoEx(_:connection:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setupremotevideoex\\(_\\:connection:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="flutter" />

    In multi-host streaming scenarios where 4 or more hosts stream videos simultaneously, users with the audience role face the following challenges:

    * **Device performance and bandwidth pressure**: Subscribing to multiple video streams can put significant pressure on device performance and downstream bandwidth, especially for mid-to-low-end devices. Audience members might experience lag or frame drops, leading to a suboptimal viewing experience.

    * **Flexible layout needs**: A custom video layout is often required, allowing viewers to adjust the position of each host's video to suit their individual preferences.

    * **Window switching and zooming**: With multiple hosts, the video size of each host may be limited. Flexible switching and resizing allow for a more personalized viewing experience.

    Agora offers a video experience optimization solution for multi-host video scenarios through a client-customized composite layout, designed to enhance user experience by focusing on smooth, personalized viewing.

    This solution is ideal for scenarios such as:

    * Team battle PK
    * Multi-person conference
    * Online education for large classes

    ## Understand the tech [#understand-the-tech-2]

    The following figure shows how the client-customized composite layout is used in conjunction with the Cloud Transcoding service:

    ![Multihost video streaming optimization](https://assets-docs.agora.io/images/video-sdk/multihost-video-optimization.png)

    After the audience receives the transcoded composite video stream, the custom composite layout is implemented locally as follows:

    ![Multihost composite layout](https://assets-docs.agora.io/images/video-sdk/multihost-composite-layout.png)

    ## Prerequisites [#prerequisites-2]

    Make sure you have:

    * Implemented basic real-time audio and video functionality with SDK version 4.5 or later. See the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).
    * Implemented [Cloud Transcoding](/en/realtime-media/transcoding) to forward composite video to other channels. Make sure you set the following parameters when you configure transcoding:

      \`\`\`json
      "outputs": [
        {
          "seiOption": {
            "source": {
              "agora": {
                "uidvideoLayout": true
              }
            },
            "sink": {
              "type": 100
            }
          }
        }
      ]
      \`\`\`

    ## Implementation [#implementation-2]

    This section explains how to implement a client-customized composite layout, with the API call sequence illustrated in the diagram.

    ![Multihost workflow](https://assets-docs.agora.io/images/video-sdk/multihost-workflow.svg)

    To implement a client-customized composite layout for the audience, follow these steps:

    1. Call \`joinChannelEx\` to join the channel where the composite stream is located.

    2. Register an \`RtcEngineEventHandler\` and listen for the \`onTranscodedStreamLayoutInfo\` callback triggered by the SDK. Use it to obtain the following information about the composite video stream:

       * The width and height of the composite stream, and the user ID of the user publishing it.
       * The user ID of each host publishing a sub-stream within the composite stream.
       * The x and y coordinates of each sub-stream on the composite canvas.
       * The width and height of each sub-stream.
       * The rendering state of each sub-stream on the composite canvas:
         * Normal rendering
         * Displayed as a placeholder
         * Displayed as a black image

    3. For each sub-stream in the layout list, create an \`AgoraVideoView\` widget using \`VideoViewController.remote\` and configure the \`VideoCanvas\` with the following key parameters:

       * \`sourceType\`: Set to \`VideoSourceType.videoSourceTranscoded\`, indicating the video source is a transcoded composite stream.
       * \`uid\`: The user ID of the user forwarding the composite stream to the current channel, obtained from the \`onTranscodedStreamLayoutInfo\` callback.
       * \`subviewUid\`: The user ID corresponding to a specific sub-stream within the composite stream.
       * \`renderMode\`: Set to \`RenderModeType.renderModeFit\`.

       <CalloutContainer type="info">
         <CalloutDescription>
           - When \`subviewUid\` is not \`0\`, the default value of \`setupMode\` is \`VideoViewSetupMode.videoViewSetupReplace\` (add a view).
           - If \`subviewUid\` is set, the setting of \`cropArea\` does not take effect.
         </CalloutDescription>
       </CalloutContainer>

       The following sample code demonstrates this in a multi-channel scenario. The usage in a single-channel scenario is similar.

       \`\`\`dart
       // Register the event handler
       _engine.registerEventHandler(
         RtcEngineEventHandler(
           onTranscodedStreamLayoutInfo: (RtcConnection connection, int uid,
               int width, int height, int layoutCount, List<VideoLayout> layoutlist) {
             setState(() {
               _compositeUid = uid;
               _layoutList = layoutlist;
             });
           },
         ),
       );

       // Join the channel containing the composite stream
       await _engine.joinChannelEx(
         token: token,
         connection: RtcConnection(channelId: compositeChannelId, localUid: localUid),
         options: const ChannelMediaOptions(
           autoSubscribeVideo: true,
           autoSubscribeAudio: true,
           clientRoleType: ClientRoleType.clientRoleAudience,
         ),
       );

       // Build AgoraVideoView widgets for each sub-stream
       Widget _buildSubStreamViews() {
         if (_layoutList == null || _compositeUid == null) {
           return const SizedBox.shrink();
         }
         return Stack(
           children: _layoutList!.map((layout) {
             return AgoraVideoView(
               controller: VideoViewController.remote(
                 rtcEngine: _engine,
                 canvas: VideoCanvas(
                   // User ID of the user forwarding the composite stream
                   uid: _compositeUid,
                   // User ID corresponding to a specific sub-stream
                   subviewUid: layout.uid,
                   sourceType: VideoSourceType.videoSourceTranscoded,
                   renderMode: RenderModeType.renderModeFit,
                 ),
                 connection: RtcConnection(channelId: compositeChannelId),
               ),
             );
           }).toList(),
         );
       }

       // To remove a specific sub-stream view, rebuild the widget tree
       // without that sub-stream's AgoraVideoView, or use setupMode:
       VideoCanvas(
         uid: _compositeUid,
         subviewUid: layout.uid,
         setupMode: VideoViewSetupMode.videoViewSetupRemove,
       )
       \`\`\`

    4. When the layout of the composite stream changes, the \`onTranscodedStreamLayoutInfo\` callback fires again. Each time it fires, update your widget state with the new layout list and rebuild the \`AgoraVideoView\` widgets to reflect the updated layout.

       <CalloutContainer type="info">
         <CalloutDescription>
           Layout changes can occur in the following situations:

           * The coordinates of a sub-stream on the composite canvas change.
           * The width or height of the composite stream or a sub-stream changes.
           * The state of a sub-stream changes. When the host publishing a sub-stream leaves the channel, the \`videoState\` parameter for that sub-stream changes from \`0\` (normal) to \`1\` (no video available). Remove the corresponding \`AgoraVideoView\` from the widget tree to stop rendering that host's video.
         </CalloutDescription>
       </CalloutContainer>

    5. Listen for the \`onUserOffline\` callback. When the user forwarding the composite stream leaves the channel, clear the layout list and stop rendering the composite stream.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Note
      </CalloutTitle>

      <CalloutDescription>
        * Client-customized composite layout is currently supported on mobile platforms only.
        * If a watermark is applied to the composite stream, the watermark renders within its designated region and may appear split across sub-stream boundaries.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-2]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product.

    ### API reference [#api-reference-2]

    * [\`onTranscodedStreamLayoutInfo\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo)
    * [\`setupRemoteVideo\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setupremotevideo)
    * [\`setupRemoteVideoEx\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineex.html#api_irtcengineex_setupremotevideoex)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In multi-host streaming scenarios where 4 or more hosts stream videos simultaneously, users with the audience role face the following challenges:"
  }, {
    heading: undefined,
    content: "**Device performance and bandwidth pressure**: Subscribing to multiple video streams can put significant pressure on device performance and downstream bandwidth, especially for mid-to-low-end devices. Audience members might experience lag or frame drops, leading to a suboptimal viewing experience."
  }, {
    heading: undefined,
    content: "**Flexible layout needs**: A custom video layout is often required, allowing viewers to adjust the position of each host's video to suit their individual preferences."
  }, {
    heading: undefined,
    content: "**Window switching and zooming**: With multiple hosts, the video size of each host may be limited. Flexible switching and resizing allow for a more personalized viewing experience."
  }, {
    heading: undefined,
    content: "Agora offers a video experience optimization solution for multi-host video scenarios through a client-customized composite layout, designed to enhance user experience by focusing on smooth, personalized viewing."
  }, {
    heading: undefined,
    content: "This solution is ideal for scenarios such as:"
  }, {
    heading: undefined,
    content: "Team battle PK"
  }, {
    heading: undefined,
    content: "Multi-person conference"
  }, {
    heading: undefined,
    content: "Online education for large classes"
  }, {
    heading: "understand-the-tech",
    content: "The following figure shows how the client-customized composite layout is used in conjunction with the Cloud Transcoding service:"
  }, {
    heading: "understand-the-tech",
    content: "After the audience receives the transcoded composite video stream, the custom composite layout is implemented locally as follows:"
  }, {
    heading: "prerequisites",
    content: "Make sure you have:"
  }, {
    heading: "prerequisites",
    content: "Implemented basic real-time audio and video functionality with SDK version 4.5 or later. See the SDK quickstart."
  }, {
    heading: "prerequisites",
    content: "Implemented Cloud Transcoding to forward composite video to other channels. Make sure you set the following parameters when you configure transcoding:"
  }, {
    heading: "implementation",
    content: "This section explains how to implement a client-customized composite layout, with the API call sequence illustrated in the diagram."
  }, {
    heading: "implementation",
    content: "To implement a client-customized composite layout for the audience, follow these steps:"
  }, {
    heading: "implementation",
    content: "Call `joinChannel` \\[2/2] to join the channel where the composite stream is located."
  }, {
    heading: "implementation",
    content: "Obtain the following information about the composite video stream through the `onTranscodedStreamLayoutInfo` callback triggered by the SDK:"
  }, {
    heading: "implementation",
    content: "The width and height of the composite stream, and the user ID of the user publishing it."
  }, {
    heading: "implementation",
    content: "The user ID of each host publishing a sub-stream within the composite stream."
  }, {
    heading: "implementation",
    content: "The x and y coordinates of each sub-stream on the composite canvas."
  }, {
    heading: "implementation",
    content: "The width and height of each sub-stream."
  }, {
    heading: "implementation",
    content: "The rendering state of each sub-stream on the composite canvas:"
  }, {
    heading: "implementation",
    content: "Normal rendering"
  }, {
    heading: "implementation",
    content: "Displayed as a placeholder"
  }, {
    heading: "implementation",
    content: "Displayed as a black image"
  }, {
    heading: "implementation",
    content: "Call `setupRemoteVideo` to configure local rendering of the remote video stream. Set the following key parameters:"
  }, {
    heading: "implementation",
    content: "`uid`: The user ID of the user forwarding the composite stream to the current channel, obtained from the `onTranscodedStreamLayoutInfo` callback."
  }, {
    heading: "implementation",
    content: "`view`: The remote video view displayed locally. Use this parameter to set the display position of each sub-stream in the local view."
  }, {
    heading: "implementation",
    content: "`subviewUid`: The user ID corresponding to a specific sub-stream within the composite stream."
  }, {
    heading: "implementation",
    content: "When `subviewUid` is not `0`, the default value of `setupMode` is `VIEW_SETUP_MODE_REPLACE` (add a view)."
  }, {
    heading: "implementation",
    content: "If `subviewUid` is set, the setting of `rect` does not take effect."
  }, {
    heading: "implementation",
    content: "Use the following sample code as a reference for calling `setupRemoteVideoEx` in a multi-channel scenario. Calling `setupRemoteVideo` in a single-channel scenario is similar."
  }, {
    heading: "implementation",
    content: "When the layout of the composite stream changes, the `onTranscodedStreamLayoutInfo` callback fires again. Each time it fires, call `setupRemoteVideo` with the updated information to adjust the local rendering layout."
  }, {
    heading: "implementation",
    content: "Layout changes can occur in the following situations:"
  }, {
    heading: "implementation",
    content: "The coordinates of a sub-stream on the composite canvas change."
  }, {
    heading: "implementation",
    content: "The width or height of the composite stream or a sub-stream changes."
  }, {
    heading: "implementation",
    content: "The state of a sub-stream changes. When the host publishing a sub-stream leaves the channel, the `videoState` parameter for that sub-stream changes from `0` (normal) to `1` (no video available). To stop rendering that host's video, call `setupRemoteVideo` with `subviewUid` set to that host's user ID and `setupMode` set to `VIEW_SETUP_MODE_REMOVE`."
  }, {
    heading: "implementation",
    content: "Listen for the `onUserOffline` callback. When the user forwarding the composite stream leaves the channel, stop rendering the composite stream on the receiving end."
  }, {
    heading: "implementation",
    content: "Client-customized composite layout is currently supported on mobile platforms only."
  }, {
    heading: "implementation",
    content: "If a watermark is applied to the composite stream, the watermark renders within its designated region and may appear split across sub-stream boundaries."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product."
  }, {
    heading: "api-reference",
    content: "`onTranscodedStreamLayoutInfo`"
  }, {
    heading: "api-reference",
    content: "`setupRemoteVideo`"
  }, {
    heading: "api-reference",
    content: "`setupRemoteVideoEx`"
  }, {
    heading: "api-reference",
    content: "In multi-host streaming scenarios where 4 or more hosts stream videos simultaneously, users with the audience role face the following challenges:"
  }, {
    heading: "api-reference",
    content: "**Device performance and bandwidth pressure**: Subscribing to multiple video streams can put significant pressure on device performance and downstream bandwidth, especially for mid-to-low-end devices. Audience members might experience lag or frame drops, leading to a suboptimal viewing experience."
  }, {
    heading: "api-reference",
    content: "**Flexible layout needs**: A custom video layout is often required, allowing viewers to adjust the position of each host's video to suit their individual preferences."
  }, {
    heading: "api-reference",
    content: "**Window switching and zooming**: With multiple hosts, the video size of each host may be limited. Flexible switching and resizing allow for a more personalized viewing experience."
  }, {
    heading: "api-reference",
    content: "Agora offers a video experience optimization solution for multi-host video scenarios through a client-customized composite layout, designed to enhance user experience by focusing on smooth, personalized viewing."
  }, {
    heading: "api-reference",
    content: "This solution is ideal for scenarios such as:"
  }, {
    heading: "api-reference",
    content: "Team battle PK"
  }, {
    heading: "api-reference",
    content: "Multi-person conference"
  }, {
    heading: "api-reference",
    content: "Online education for large classes"
  }, {
    heading: "understand-the-tech-1",
    content: "The following figure shows how the client-customized composite layout is used in conjunction with the Cloud Transcoding service:"
  }, {
    heading: "understand-the-tech-1",
    content: "After the audience receives the transcoded composite video stream, the custom composite layout is implemented locally as follows:"
  }, {
    heading: "prerequisites-1",
    content: "Make sure you have:"
  }, {
    heading: "prerequisites-1",
    content: "Implemented basic real-time audio and video functionality with SDK version 4.5 or later. See the SDK quickstart."
  }, {
    heading: "prerequisites-1",
    content: "Implemented Cloud Transcoding to forward composite video to other channels. Make sure you set the following parameters when you configure transcoding:"
  }, {
    heading: "implementation-1",
    content: "This section explains how to implement a client-customized composite layout, with the API call sequence illustrated in the diagram."
  }, {
    heading: "implementation-1",
    content: "To implement a client-customized composite layout for the audience, follow these steps:"
  }, {
    heading: "implementation-1",
    content: "Call `joinChannel` \\[2/2] to join the channel where the composite stream is located."
  }, {
    heading: "implementation-1",
    content: "Obtain the following information about the composite video stream through the `didTranscodedStreamLayoutInfoUpdatedWithUserId` callback triggered by the SDK:"
  }, {
    heading: "implementation-1",
    content: "The width and height of the composite stream, and the user ID of the user publishing it."
  }, {
    heading: "implementation-1",
    content: "The user ID of each host publishing a sub-stream within the composite stream."
  }, {
    heading: "implementation-1",
    content: "The x and y coordinates of each sub-stream on the composite canvas."
  }, {
    heading: "implementation-1",
    content: "The width and height of each sub-stream."
  }, {
    heading: "implementation-1",
    content: "The rendering state of each sub-stream on the composite canvas:"
  }, {
    heading: "implementation-1",
    content: "Normal rendering"
  }, {
    heading: "implementation-1",
    content: "Displayed as a placeholder"
  }, {
    heading: "implementation-1",
    content: "Displayed as a black image"
  }, {
    heading: "implementation-1",
    content: "Call `setupRemoteVideo` to configure local rendering of the remote video stream. Set the following key parameters:"
  }, {
    heading: "implementation-1",
    content: "`sourceType`: Set to `.transCoded`, indicating the video source is a transcoded composite stream."
  }, {
    heading: "implementation-1",
    content: "`uid`: The user ID of the user forwarding the composite stream to the current channel, obtained from the `didTranscodedStreamLayoutInfoUpdatedWithUserId` callback."
  }, {
    heading: "implementation-1",
    content: "`view`: The remote video view displayed locally. Use this parameter to set the display position of each sub-stream in the local view."
  }, {
    heading: "implementation-1",
    content: "`subviewUid`: The user ID corresponding to a specific sub-stream within the composite stream."
  }, {
    heading: "implementation-1",
    content: "When `subviewUid` is not `0`, the default value of `setupMode` is `.replace` (add a view)."
  }, {
    heading: "implementation-1",
    content: "If `subviewUid` is set, the setting of `cropArea` does not take effect."
  }, {
    heading: "implementation-1",
    content: "Use the following sample code as a reference for calling `setupRemoteVideoEx` in a multi-channel scenario. Calling `setupRemoteVideo` in a single-channel scenario is similar."
  }, {
    heading: "implementation-1",
    content: "When the layout of the composite stream changes, the `didTranscodedStreamLayoutInfoUpdatedWithUserId` callback fires again. Each time it fires, call `setupRemoteVideo` with the updated information to adjust the local rendering layout."
  }, {
    heading: "implementation-1",
    content: "Layout changes can occur in the following situations:"
  }, {
    heading: "implementation-1",
    content: "The coordinates of a sub-stream on the composite canvas change."
  }, {
    heading: "implementation-1",
    content: "The width or height of the composite stream or a sub-stream changes."
  }, {
    heading: "implementation-1",
    content: "The state of a sub-stream changes. When the host publishing a sub-stream leaves the channel, the `videoState` parameter for that sub-stream changes from `0` (normal) to `1` (no video available). To stop rendering that host's video, call `setupRemoteVideo` with `subviewUid` set to that host's user ID and `setupMode` set to `.remove`."
  }, {
    heading: "implementation-1",
    content: "Listen for the `didOfflineOfUid` callback. When the user forwarding the composite stream leaves the channel, stop rendering the composite stream on the receiving end."
  }, {
    heading: "implementation-1",
    content: "Client-customized composite layout is currently supported on mobile platforms only."
  }, {
    heading: "implementation-1",
    content: "If a watermark is applied to the composite stream, the watermark renders within its designated region and may appear split across sub-stream boundaries."
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product."
  }, {
    heading: "api-reference-1",
    content: "`rtcEngine(_:didTranscodedStreamLayoutInfoUpdatedWithUserId:videoLayoutInfo:)`"
  }, {
    heading: "api-reference-1",
    content: "`setupRemoteVideo(_:)`"
  }, {
    heading: "api-reference-1",
    content: "`setupRemoteVideoEx(_:connection:)`"
  }, {
    heading: "api-reference-1",
    content: "In multi-host streaming scenarios where 4 or more hosts stream videos simultaneously, users with the audience role face the following challenges:"
  }, {
    heading: "api-reference-1",
    content: "**Device performance and bandwidth pressure**: Subscribing to multiple video streams can put significant pressure on device performance and downstream bandwidth, especially for mid-to-low-end devices. Audience members might experience lag or frame drops, leading to a suboptimal viewing experience."
  }, {
    heading: "api-reference-1",
    content: "**Flexible layout needs**: A custom video layout is often required, allowing viewers to adjust the position of each host's video to suit their individual preferences."
  }, {
    heading: "api-reference-1",
    content: "**Window switching and zooming**: With multiple hosts, the video size of each host may be limited. Flexible switching and resizing allow for a more personalized viewing experience."
  }, {
    heading: "api-reference-1",
    content: "Agora offers a video experience optimization solution for multi-host video scenarios through a client-customized composite layout, designed to enhance user experience by focusing on smooth, personalized viewing."
  }, {
    heading: "api-reference-1",
    content: "This solution is ideal for scenarios such as:"
  }, {
    heading: "api-reference-1",
    content: "Team battle PK"
  }, {
    heading: "api-reference-1",
    content: "Multi-person conference"
  }, {
    heading: "api-reference-1",
    content: "Online education for large classes"
  }, {
    heading: "understand-the-tech-2",
    content: "The following figure shows how the client-customized composite layout is used in conjunction with the Cloud Transcoding service:"
  }, {
    heading: "understand-the-tech-2",
    content: "After the audience receives the transcoded composite video stream, the custom composite layout is implemented locally as follows:"
  }, {
    heading: "prerequisites-2",
    content: "Make sure you have:"
  }, {
    heading: "prerequisites-2",
    content: "Implemented basic real-time audio and video functionality with SDK version 4.5 or later. See the SDK quickstart."
  }, {
    heading: "prerequisites-2",
    content: "Implemented Cloud Transcoding to forward composite video to other channels. Make sure you set the following parameters when you configure transcoding:"
  }, {
    heading: "implementation-2",
    content: "This section explains how to implement a client-customized composite layout, with the API call sequence illustrated in the diagram."
  }, {
    heading: "implementation-2",
    content: "To implement a client-customized composite layout for the audience, follow these steps:"
  }, {
    heading: "implementation-2",
    content: "Call `joinChannelEx` to join the channel where the composite stream is located."
  }, {
    heading: "implementation-2",
    content: "Register an `RtcEngineEventHandler` and listen for the `onTranscodedStreamLayoutInfo` callback triggered by the SDK. Use it to obtain the following information about the composite video stream:"
  }, {
    heading: "implementation-2",
    content: "The width and height of the composite stream, and the user ID of the user publishing it."
  }, {
    heading: "implementation-2",
    content: "The user ID of each host publishing a sub-stream within the composite stream."
  }, {
    heading: "implementation-2",
    content: "The x and y coordinates of each sub-stream on the composite canvas."
  }, {
    heading: "implementation-2",
    content: "The width and height of each sub-stream."
  }, {
    heading: "implementation-2",
    content: "The rendering state of each sub-stream on the composite canvas:"
  }, {
    heading: "implementation-2",
    content: "Normal rendering"
  }, {
    heading: "implementation-2",
    content: "Displayed as a placeholder"
  }, {
    heading: "implementation-2",
    content: "Displayed as a black image"
  }, {
    heading: "implementation-2",
    content: "For each sub-stream in the layout list, create an `AgoraVideoView` widget using `VideoViewController.remote` and configure the `VideoCanvas` with the following key parameters:"
  }, {
    heading: "implementation-2",
    content: "`sourceType`: Set to `VideoSourceType.videoSourceTranscoded`, indicating the video source is a transcoded composite stream."
  }, {
    heading: "implementation-2",
    content: "`uid`: The user ID of the user forwarding the composite stream to the current channel, obtained from the `onTranscodedStreamLayoutInfo` callback."
  }, {
    heading: "implementation-2",
    content: "`subviewUid`: The user ID corresponding to a specific sub-stream within the composite stream."
  }, {
    heading: "implementation-2",
    content: "`renderMode`: Set to `RenderModeType.renderModeFit`."
  }, {
    heading: "implementation-2",
    content: "When `subviewUid` is not `0`, the default value of `setupMode` is `VideoViewSetupMode.videoViewSetupReplace` (add a view)."
  }, {
    heading: "implementation-2",
    content: "If `subviewUid` is set, the setting of `cropArea` does not take effect."
  }, {
    heading: "implementation-2",
    content: "The following sample code demonstrates this in a multi-channel scenario. The usage in a single-channel scenario is similar."
  }, {
    heading: "implementation-2",
    content: "When the layout of the composite stream changes, the `onTranscodedStreamLayoutInfo` callback fires again. Each time it fires, update your widget state with the new layout list and rebuild the `AgoraVideoView` widgets to reflect the updated layout."
  }, {
    heading: "implementation-2",
    content: "Layout changes can occur in the following situations:"
  }, {
    heading: "implementation-2",
    content: "The coordinates of a sub-stream on the composite canvas change."
  }, {
    heading: "implementation-2",
    content: "The width or height of the composite stream or a sub-stream changes."
  }, {
    heading: "implementation-2",
    content: "The state of a sub-stream changes. When the host publishing a sub-stream leaves the channel, the `videoState` parameter for that sub-stream changes from `0` (normal) to `1` (no video available). Remove the corresponding `AgoraVideoView` from the widget tree to stop rendering that host's video."
  }, {
    heading: "implementation-2",
    content: "Listen for the `onUserOffline` callback. When the user forwarding the composite stream leaves the channel, clear the layout list and stop rendering the composite stream."
  }, {
    heading: "implementation-2",
    content: "Client-customized composite layout is currently supported on mobile platforms only."
  }, {
    heading: "implementation-2",
    content: "If a watermark is applied to the composite stream, the watermark renders within its designated region and may appear split across sub-stream boundaries."
  }, {
    heading: "reference-2",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product."
  }, {
    heading: "api-reference-2",
    content: "`onTranscodedStreamLayoutInfo`"
  }, {
    heading: "api-reference-2",
    content: "`setupRemoteVideo`"
  }, {
    heading: "api-reference-2",
    content: "`setupRemoteVideoEx`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "implementation-1",
    content: "Implementation"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "api-reference-1",
    content: "API reference"
  }, {
    id: "understand-the-tech-2",
    content: "Understand the tech"
  }, {
    id: "prerequisites-2",
    content: "Prerequisites"
  }, {
    id: "implementation-2",
    content: "Implementation"
  }, {
    id: "reference-2",
    content: "Reference"
  }, {
    id: "api-reference-2",
    content: "API reference"
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
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-1",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-1",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-1",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-1",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-2",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-2",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-2",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 2,
  url: "#reference-2",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-2",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "android",
    platforms: '["android","ios","flutter"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "android",
        platform: "android"
      }), _jsx(_components.p, {
        children: "In multi-host streaming scenarios where 4 or more hosts stream videos simultaneously, users with the audience role face the following challenges:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Device performance and bandwidth pressure"
            }), ": Subscribing to multiple video streams can put significant pressure on device performance and downstream bandwidth, especially for mid-to-low-end devices. Audience members might experience lag or frame drops, leading to a suboptimal viewing experience."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Flexible layout needs"
            }), ": A custom video layout is often required, allowing viewers to adjust the position of each host's video to suit their individual preferences."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Window switching and zooming"
            }), ": With multiple hosts, the video size of each host may be limited. Flexible switching and resizing allow for a more personalized viewing experience."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Agora offers a video experience optimization solution for multi-host video scenarios through a client-customized composite layout, designed to enhance user experience by focusing on smooth, personalized viewing."
      }), _jsx(_components.p, {
        children: "This solution is ideal for scenarios such as:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Team battle PK"
        }), `
`, _jsx(_components.li, {
          children: "Multi-person conference"
        }), `
`, _jsx(_components.li, {
          children: "Online education for large classes"
        }), `
`]
      }), _jsx(_components.h2, {
        id: "understand-the-tech",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "The following figure shows how the client-customized composite layout is used in conjunction with the Cloud Transcoding service:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/multihost-video-optimization.png",
          alt: "Multihost video streaming optimization"
        })
      }), _jsx(_components.p, {
        children: "After the audience receives the transcoded composite video stream, the custom composite layout is implemented locally as follows:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/multihost-composite-layout.png",
          alt: "Multihost composite layout"
        })
      }), _jsx(_components.h2, {
        id: "prerequisites",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Make sure you have:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Implemented basic real-time audio and video functionality with SDK version 4.5 or later. See the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Implemented ", _jsx(_components.a, {
              href: "/en/realtime-media/transcoding",
              children: "Cloud Transcoding"
            }), " to forward composite video to other channels. Make sure you set the following parameters when you configure transcoding:"]
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
                    children: '"outputs"'
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
                    children: '    "seiOption"'
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
                    children: '      "source"'
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
                    children: '        "agora"'
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
                    children: '          "uidvideoLayout"'
                  }), _jsx(_components.span, {
                    style: {
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
                    children: '      "sink"'
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
                    children: '        "type"'
                  }), _jsx(_components.span, {
                    style: {
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
                    children: "]"
                  })
                })]
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "implementation",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section explains how to implement a client-customized composite layout, with the API call sequence illustrated in the diagram."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/multihost-workflow.svg",
          alt: "Multihost workflow"
        })
      }), _jsx(_components.p, {
        children: "To implement a client-customized composite layout for the audience, follow these steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "joinChannel"
            }), " [2/2] to join the channel where the composite stream is located."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Obtain the following information about the composite video stream through the ", _jsx(_components.code, {
              children: "onTranscodedStreamLayoutInfo"
            }), " callback triggered by the SDK:"]
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "The width and height of the composite stream, and the user ID of the user publishing it."
            }), `
`, _jsx(_components.li, {
              children: "The user ID of each host publishing a sub-stream within the composite stream."
            }), `
`, _jsx(_components.li, {
              children: "The x and y coordinates of each sub-stream on the composite canvas."
            }), `
`, _jsx(_components.li, {
              children: "The width and height of each sub-stream."
            }), `
`, _jsxs(_components.li, {
              children: ["The rendering state of each sub-stream on the composite canvas:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "Normal rendering"
                }), `
`, _jsx(_components.li, {
                  children: "Displayed as a placeholder"
                }), `
`, _jsx(_components.li, {
                  children: "Displayed as a black image"
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
            children: ["Call ", _jsx(_components.code, {
              children: "setupRemoteVideo"
            }), " to configure local rendering of the remote video stream. Set the following key parameters:"]
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "uid"
              }), ": The user ID of the user forwarding the composite stream to the current channel, obtained from the ", _jsx(_components.code, {
                children: "onTranscodedStreamLayoutInfo"
              }), " callback."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "view"
              }), ": The remote video view displayed locally. Use this parameter to set the display position of each sub-stream in the local view."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "subviewUid"
              }), ": The user ID corresponding to a specific sub-stream within the composite stream."]
            }), `
`]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: ["When ", _jsx(_components.code, {
                    children: "subviewUid"
                  }), " is not ", _jsx(_components.code, {
                    children: "0"
                  }), ", the default value of ", _jsx(_components.code, {
                    children: "setupMode"
                  }), " is ", _jsx(_components.code, {
                    children: "VIEW_SETUP_MODE_REPLACE"
                  }), " (add a view)."]
                }), `
`, _jsxs(_components.li, {
                  children: ["If ", _jsx(_components.code, {
                    children: "subviewUid"
                  }), " is set, the setting of ", _jsx(_components.code, {
                    children: "rect"
                  }), " does not take effect."]
                }), `
`]
              })
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Use the following sample code as a reference for calling ", _jsx(_components.code, {
              children: "setupRemoteVideoEx"
            }), " in a multi-channel scenario. Calling ", _jsx(_components.code, {
              children: "setupRemoteVideo"
            }), " in a single-channel scenario is similar."]
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "mRtcEngine."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "joinChannelEx"
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
                    children: "null"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", connection, mediaOptions, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "new"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " IRtcEngineEventHandler"
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
                    children: "    @"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "Override"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    public"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " void"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " onTranscodedStreamLayoutInfo"
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
                    children: "final"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: " uid"
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
                    children: "final"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " VideoLayoutInfo "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "info"
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "        super"
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
                    children: "onTranscodedStreamLayoutInfo"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(uid, info);"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "        runOnUiThread"
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
                    children: "new"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " Runnable"
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
                    children: "            @"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "Override"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "            public"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " void"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " run"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "                int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " size "
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
                    children: " info.layoutNumber;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                viewGrids."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setChildCount"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(info.layoutNumber);"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "                for"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " ("
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
                    children: " i "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " 0"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "; i "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " size; i"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "++"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "                    if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (mUserViews."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "containsKey"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(info.layoutList[i].uid)) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "                        continue"
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
                    children: "                    }"
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
                    children: "                    // Dynamically add the view"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    TextureView textureView "
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
                    children: " new"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " TextureView"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(VideoChatViewActivity.this);"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    textureView."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setLayoutParams"
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
                    children: "new"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " ViewGroup."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "LayoutParams"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                        ViewGroup.LayoutParams.MATCH_PARENT,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                        ViewGroup.LayoutParams.MATCH_PARENT));"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    users."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "add"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(info.layoutList[i].uid);"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    views."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "add"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(textureView);"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    mUserViews."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "put"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(info.layoutList[i].uid, textureView);"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    viewGrids."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "addView"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(textureView);"
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
                    children: "                    // Configure VideoCanvas; set uid and subviewUid as shown,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "                    // and configure other parameters as needed"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    VideoCanvas canvas "
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
                    children: " new"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " VideoCanvas"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(textureView);"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "                    // User ID of the user forwarding the composite stream to the current channel"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    canvas.uid "
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
                    children: " uid;"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "                    // User ID corresponding to a specific sub-stream"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    canvas.subviewUid "
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
                    children: " info.layoutList[i].uid;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    canvas.renderMode "
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
                    children: " Constants.RENDER_MODE_FIT;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    mRtcEngine."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setupRemoteVideoEx"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(canvas, connection);"
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
                    children: "                    // To remove a specific sub-stream, use the following code"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "                    // Do not include this in the same flow as the add code above."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    VideoCanvas canvasToRemove "
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
                    children: " new"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " VideoCanvas"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(textureView);"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    canvasToRemove.uid "
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
                    children: " uid;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    canvasToRemove.subviewUid "
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
                    children: " info.layoutList[i].uid;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    canvasToRemove.setupMode "
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
                    children: " VideoCanvas.VIEW_SETUP_MODE_REMOVE;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                    mRtcEngine."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setupRemoteVideoEx"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(canvasToRemove);"
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
                    children: "        });"
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
                    children: "});"
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
            children: ["When the layout of the composite stream changes, the ", _jsx(_components.code, {
              children: "onTranscodedStreamLayoutInfo"
            }), " callback fires again. Each time it fires, call ", _jsx(_components.code, {
              children: "setupRemoteVideo"
            }), " with the updated information to adjust the local rendering layout."]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsxs(CalloutDescription, {
              children: [_jsx(_components.p, {
                children: "Layout changes can occur in the following situations:"
              }), _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "The coordinates of a sub-stream on the composite canvas change."
                }), `
`, _jsx(_components.li, {
                  children: "The width or height of the composite stream or a sub-stream changes."
                }), `
`, _jsxs(_components.li, {
                  children: ["The state of a sub-stream changes. When the host publishing a sub-stream leaves the channel, the ", _jsx(_components.code, {
                    children: "videoState"
                  }), " parameter for that sub-stream changes from ", _jsx(_components.code, {
                    children: "0"
                  }), " (normal) to ", _jsx(_components.code, {
                    children: "1"
                  }), " (no video available). To stop rendering that host's video, call ", _jsx(_components.code, {
                    children: "setupRemoteVideo"
                  }), " with ", _jsx(_components.code, {
                    children: "subviewUid"
                  }), " set to that host's user ID and ", _jsx(_components.code, {
                    children: "setupMode"
                  }), " set to ", _jsx(_components.code, {
                    children: "VIEW_SETUP_MODE_REMOVE"
                  }), "."]
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
            children: ["Listen for the ", _jsx(_components.code, {
              children: "onUserOffline"
            }), " callback. When the user forwarding the composite stream leaves the channel, stop rendering the composite stream on the receiving end."]
          }), `
`]
        }), `
`]
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Note"
        }), _jsx(CalloutDescription, {
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Client-customized composite layout is currently supported on mobile platforms only."
            }), `
`, _jsx(_components.li, {
              children: "If a watermark is applied to the composite stream, the watermark renders within its designated region and may appear split across sub-stream boundaries."
            }), `
`]
          })
        })]
      }), _jsx(_components.h2, {
        id: "reference",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product."
      }), _jsx(_components.h3, {
        id: "api-reference",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo",
            children: _jsx(_components.code, {
              children: "onTranscodedStreamLayoutInfo"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setupremotevideo",
            children: _jsx(_components.code, {
              children: "setupRemoteVideo"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineex.html#api_irtcengineex_setupremotevideoex",
            children: _jsx(_components.code, {
              children: "setupRemoteVideoEx"
            })
          })
        }), `
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "ios",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "android",
        platform: "ios"
      }), _jsx(_components.p, {
        children: "In multi-host streaming scenarios where 4 or more hosts stream videos simultaneously, users with the audience role face the following challenges:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Device performance and bandwidth pressure"
            }), ": Subscribing to multiple video streams can put significant pressure on device performance and downstream bandwidth, especially for mid-to-low-end devices. Audience members might experience lag or frame drops, leading to a suboptimal viewing experience."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Flexible layout needs"
            }), ": A custom video layout is often required, allowing viewers to adjust the position of each host's video to suit their individual preferences."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Window switching and zooming"
            }), ": With multiple hosts, the video size of each host may be limited. Flexible switching and resizing allow for a more personalized viewing experience."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Agora offers a video experience optimization solution for multi-host video scenarios through a client-customized composite layout, designed to enhance user experience by focusing on smooth, personalized viewing."
      }), _jsx(_components.p, {
        children: "This solution is ideal for scenarios such as:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Team battle PK"
        }), `
`, _jsx(_components.li, {
          children: "Multi-person conference"
        }), `
`, _jsx(_components.li, {
          children: "Online education for large classes"
        }), `
`]
      }), _jsx(_components.h2, {
        id: "understand-the-tech-1",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "The following figure shows how the client-customized composite layout is used in conjunction with the Cloud Transcoding service:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/multihost-video-optimization.png",
          alt: "Multihost video streaming optimization"
        })
      }), _jsx(_components.p, {
        children: "After the audience receives the transcoded composite video stream, the custom composite layout is implemented locally as follows:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/multihost-composite-layout.png",
          alt: "Multihost composite layout"
        })
      }), _jsx(_components.h2, {
        id: "prerequisites-1",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Make sure you have:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Implemented basic real-time audio and video functionality with SDK version 4.5 or later. See the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Implemented ", _jsx(_components.a, {
              href: "/en/realtime-media/transcoding",
              children: "Cloud Transcoding"
            }), " to forward composite video to other channels. Make sure you set the following parameters when you configure transcoding:"]
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
                    children: '"outputs"'
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
                    children: '    "seiOption"'
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
                    children: '      "source"'
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
                    children: '        "agora"'
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
                    children: '          "uidvideoLayout"'
                  }), _jsx(_components.span, {
                    style: {
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
                    children: '      "sink"'
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
                    children: '        "type"'
                  }), _jsx(_components.span, {
                    style: {
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
                    children: "]"
                  })
                })]
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "implementation-1",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section explains how to implement a client-customized composite layout, with the API call sequence illustrated in the diagram."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/multihost-workflow.svg",
          alt: "Multihost workflow"
        })
      }), _jsx(_components.p, {
        children: "To implement a client-customized composite layout for the audience, follow these steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "joinChannel"
            }), " [2/2] to join the channel where the composite stream is located."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Obtain the following information about the composite video stream through the ", _jsx(_components.code, {
              children: "didTranscodedStreamLayoutInfoUpdatedWithUserId"
            }), " callback triggered by the SDK:"]
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "The width and height of the composite stream, and the user ID of the user publishing it."
            }), `
`, _jsx(_components.li, {
              children: "The user ID of each host publishing a sub-stream within the composite stream."
            }), `
`, _jsx(_components.li, {
              children: "The x and y coordinates of each sub-stream on the composite canvas."
            }), `
`, _jsx(_components.li, {
              children: "The width and height of each sub-stream."
            }), `
`, _jsxs(_components.li, {
              children: ["The rendering state of each sub-stream on the composite canvas:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "Normal rendering"
                }), `
`, _jsx(_components.li, {
                  children: "Displayed as a placeholder"
                }), `
`, _jsx(_components.li, {
                  children: "Displayed as a black image"
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
            children: ["Call ", _jsx(_components.code, {
              children: "setupRemoteVideo"
            }), " to configure local rendering of the remote video stream. Set the following key parameters:"]
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "sourceType"
              }), ": Set to ", _jsx(_components.code, {
                children: ".transCoded"
              }), ", indicating the video source is a transcoded composite stream."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "uid"
              }), ": The user ID of the user forwarding the composite stream to the current channel, obtained from the ", _jsx(_components.code, {
                children: "didTranscodedStreamLayoutInfoUpdatedWithUserId"
              }), " callback."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "view"
              }), ": The remote video view displayed locally. Use this parameter to set the display position of each sub-stream in the local view."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "subviewUid"
              }), ": The user ID corresponding to a specific sub-stream within the composite stream."]
            }), `
`]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: ["When ", _jsx(_components.code, {
                    children: "subviewUid"
                  }), " is not ", _jsx(_components.code, {
                    children: "0"
                  }), ", the default value of ", _jsx(_components.code, {
                    children: "setupMode"
                  }), " is ", _jsx(_components.code, {
                    children: ".replace"
                  }), " (add a view)."]
                }), `
`, _jsxs(_components.li, {
                  children: ["If ", _jsx(_components.code, {
                    children: "subviewUid"
                  }), " is set, the setting of ", _jsx(_components.code, {
                    children: "cropArea"
                  }), " does not take effect."]
                }), `
`]
              })
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Use the following sample code as a reference for calling ", _jsx(_components.code, {
              children: "setupRemoteVideoEx"
            }), " in a multi-channel scenario. Calling ", _jsx(_components.code, {
              children: "setupRemoteVideo"
            }), " in a single-channel scenario is similar."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "agoraKit."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "joinChannelEx"
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
                    children: "byToken"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": "
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
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "connection"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": connection, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "delegate"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "self"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "mediaOptions"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": mediaOptions)"
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
                    children: " rtcEngine"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "_"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " engine: AgoraRtcEngineKit, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "didTranscodedStreamLayoutInfoUpdatedWithUserId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " uid: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "UInt"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "videoLayoutInfo"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": AgoraVideoLayoutInfo) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    DispatchQueue.main."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "async"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " { ["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "weak"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " self"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "in"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "        guard"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " let"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " self"
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
                    children: " self"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " else"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " { "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "return"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " }"
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
                    children: "        guard"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " let"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " layoutList "
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
                    children: " videoLayoutInfo.layoutList "
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
                    children: " { "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "return"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " }"
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
                    children: "        for"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " subLayout "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "in"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " layoutList {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "            let"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " subUid "
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
                    children: " subLayout.uid"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "            if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " self"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".userViews[subUid] "
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
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "                continue"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "            // Dynamically add the view"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "            let"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " view "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " UIView"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            view.translatesAutoresizingMaskIntoConstraints "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " false"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "            self"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".containerView."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "addSubview"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(view)"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "            self"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".userViews[subUid] "
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
                    children: " view"
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
                    children: "            // Configure AgoraRtcVideoCanvas; set uid and subviewUid as shown,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "            // and configure other parameters as needed"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "            let"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " canvas "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " AgoraRtcVideoCanvas"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "()"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "            // User ID of the user forwarding the composite stream to the current channel"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            canvas.uid "
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
                    children: " uid"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "            // User ID corresponding to a specific sub-stream"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            canvas.subviewUid "
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
                    children: " subUid"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            canvas."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "view"
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
                    children: " view"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            canvas.renderMode "
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
                    children: " .fit"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            canvas.sourceType "
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
                    children: " .transCoded"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "            self"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".agoraKit."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "setupRemoteVideoEx"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(canvas, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "connection"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": connection)"
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
                    children: "            // To remove a specific sub-stream, use the following code"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "            // Do not include this in the same flow as the add code above."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "            let"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " canvasToRemove "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " AgoraRtcVideoCanvas"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            canvasToRemove.uid "
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
                    children: " uid"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            canvasToRemove.subviewUid "
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
                    children: " subUid"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            canvasToRemove."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "view"
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
                    children: " view"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            canvasToRemove.setupMode "
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
                    children: " .remove"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "            self"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".agoraKit."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "setupRemoteVideoEx"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(canvasToRemove, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "connection"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": connection)"
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
`, _jsxs(_components.p, {
            children: ["When the layout of the composite stream changes, the ", _jsx(_components.code, {
              children: "didTranscodedStreamLayoutInfoUpdatedWithUserId"
            }), " callback fires again. Each time it fires, call ", _jsx(_components.code, {
              children: "setupRemoteVideo"
            }), " with the updated information to adjust the local rendering layout."]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsxs(CalloutDescription, {
              children: [_jsx(_components.p, {
                children: "Layout changes can occur in the following situations:"
              }), _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "The coordinates of a sub-stream on the composite canvas change."
                }), `
`, _jsx(_components.li, {
                  children: "The width or height of the composite stream or a sub-stream changes."
                }), `
`, _jsxs(_components.li, {
                  children: ["The state of a sub-stream changes. When the host publishing a sub-stream leaves the channel, the ", _jsx(_components.code, {
                    children: "videoState"
                  }), " parameter for that sub-stream changes from ", _jsx(_components.code, {
                    children: "0"
                  }), " (normal) to ", _jsx(_components.code, {
                    children: "1"
                  }), " (no video available). To stop rendering that host's video, call ", _jsx(_components.code, {
                    children: "setupRemoteVideo"
                  }), " with ", _jsx(_components.code, {
                    children: "subviewUid"
                  }), " set to that host's user ID and ", _jsx(_components.code, {
                    children: "setupMode"
                  }), " set to ", _jsx(_components.code, {
                    children: ".remove"
                  }), "."]
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
            children: ["Listen for the ", _jsx(_components.code, {
              children: "didOfflineOfUid"
            }), " callback. When the user forwarding the composite stream leaves the channel, stop rendering the composite stream on the receiving end."]
          }), `
`]
        }), `
`]
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Note"
        }), _jsx(CalloutDescription, {
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Client-customized composite layout is currently supported on mobile platforms only."
            }), `
`, _jsx(_components.li, {
              children: "If a watermark is applied to the composite stream, the watermark renders within its designated region and may appear split across sub-stream boundaries."
            }), `
`]
          })
        })]
      }), _jsx(_components.h2, {
        id: "reference-1",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product."
      }), _jsx(_components.h3, {
        id: "api-reference-1",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:didtranscodedstreamlayoutinfoupdatedwithuserid:videolayoutinfo:)",
            children: _jsx(_components.code, {
              children: "rtcEngine(_:didTranscodedStreamLayoutInfoUpdatedWithUserId:videoLayoutInfo:)"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setupremotevideo(_:)",
            children: _jsx(_components.code, {
              children: "setupRemoteVideo(_:)"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setupremotevideoex(_:connection:)",
            children: _jsx(_components.code, {
              children: "setupRemoteVideoEx(_:connection:)"
            })
          })
        }), `
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "flutter",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "android",
        platform: "flutter"
      }), _jsx(_components.p, {
        children: "In multi-host streaming scenarios where 4 or more hosts stream videos simultaneously, users with the audience role face the following challenges:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Device performance and bandwidth pressure"
            }), ": Subscribing to multiple video streams can put significant pressure on device performance and downstream bandwidth, especially for mid-to-low-end devices. Audience members might experience lag or frame drops, leading to a suboptimal viewing experience."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Flexible layout needs"
            }), ": A custom video layout is often required, allowing viewers to adjust the position of each host's video to suit their individual preferences."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Window switching and zooming"
            }), ": With multiple hosts, the video size of each host may be limited. Flexible switching and resizing allow for a more personalized viewing experience."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Agora offers a video experience optimization solution for multi-host video scenarios through a client-customized composite layout, designed to enhance user experience by focusing on smooth, personalized viewing."
      }), _jsx(_components.p, {
        children: "This solution is ideal for scenarios such as:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Team battle PK"
        }), `
`, _jsx(_components.li, {
          children: "Multi-person conference"
        }), `
`, _jsx(_components.li, {
          children: "Online education for large classes"
        }), `
`]
      }), _jsx(_components.h2, {
        id: "understand-the-tech-2",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "The following figure shows how the client-customized composite layout is used in conjunction with the Cloud Transcoding service:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/multihost-video-optimization.png",
          alt: "Multihost video streaming optimization"
        })
      }), _jsx(_components.p, {
        children: "After the audience receives the transcoded composite video stream, the custom composite layout is implemented locally as follows:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/multihost-composite-layout.png",
          alt: "Multihost composite layout"
        })
      }), _jsx(_components.h2, {
        id: "prerequisites-2",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Make sure you have:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Implemented basic real-time audio and video functionality with SDK version 4.5 or later. See the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Implemented ", _jsx(_components.a, {
              href: "/en/realtime-media/transcoding",
              children: "Cloud Transcoding"
            }), " to forward composite video to other channels. Make sure you set the following parameters when you configure transcoding:"]
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
                    children: '"outputs"'
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
                    children: '    "seiOption"'
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
                    children: '      "source"'
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
                    children: '        "agora"'
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
                    children: '          "uidvideoLayout"'
                  }), _jsx(_components.span, {
                    style: {
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
                    children: '      "sink"'
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
                    children: '        "type"'
                  }), _jsx(_components.span, {
                    style: {
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
                    children: "]"
                  })
                })]
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "implementation-2",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section explains how to implement a client-customized composite layout, with the API call sequence illustrated in the diagram."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/multihost-workflow.svg",
          alt: "Multihost workflow"
        })
      }), _jsx(_components.p, {
        children: "To implement a client-customized composite layout for the audience, follow these steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "joinChannelEx"
            }), " to join the channel where the composite stream is located."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Register an ", _jsx(_components.code, {
              children: "RtcEngineEventHandler"
            }), " and listen for the ", _jsx(_components.code, {
              children: "onTranscodedStreamLayoutInfo"
            }), " callback triggered by the SDK. Use it to obtain the following information about the composite video stream:"]
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "The width and height of the composite stream, and the user ID of the user publishing it."
            }), `
`, _jsx(_components.li, {
              children: "The user ID of each host publishing a sub-stream within the composite stream."
            }), `
`, _jsx(_components.li, {
              children: "The x and y coordinates of each sub-stream on the composite canvas."
            }), `
`, _jsx(_components.li, {
              children: "The width and height of each sub-stream."
            }), `
`, _jsxs(_components.li, {
              children: ["The rendering state of each sub-stream on the composite canvas:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "Normal rendering"
                }), `
`, _jsx(_components.li, {
                  children: "Displayed as a placeholder"
                }), `
`, _jsx(_components.li, {
                  children: "Displayed as a black image"
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
            children: ["For each sub-stream in the layout list, create an ", _jsx(_components.code, {
              children: "AgoraVideoView"
            }), " widget using ", _jsx(_components.code, {
              children: "VideoViewController.remote"
            }), " and configure the ", _jsx(_components.code, {
              children: "VideoCanvas"
            }), " with the following key parameters:"]
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "sourceType"
              }), ": Set to ", _jsx(_components.code, {
                children: "VideoSourceType.videoSourceTranscoded"
              }), ", indicating the video source is a transcoded composite stream."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "uid"
              }), ": The user ID of the user forwarding the composite stream to the current channel, obtained from the ", _jsx(_components.code, {
                children: "onTranscodedStreamLayoutInfo"
              }), " callback."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "subviewUid"
              }), ": The user ID corresponding to a specific sub-stream within the composite stream."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "renderMode"
              }), ": Set to ", _jsx(_components.code, {
                children: "RenderModeType.renderModeFit"
              }), "."]
            }), `
`]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: ["When ", _jsx(_components.code, {
                    children: "subviewUid"
                  }), " is not ", _jsx(_components.code, {
                    children: "0"
                  }), ", the default value of ", _jsx(_components.code, {
                    children: "setupMode"
                  }), " is ", _jsx(_components.code, {
                    children: "VideoViewSetupMode.videoViewSetupReplace"
                  }), " (add a view)."]
                }), `
`, _jsxs(_components.li, {
                  children: ["If ", _jsx(_components.code, {
                    children: "subviewUid"
                  }), " is set, the setting of ", _jsx(_components.code, {
                    children: "cropArea"
                  }), " does not take effect."]
                }), `
`]
              })
            })
          }), `
`, _jsx(_components.p, {
            children: "The following sample code demonstrates this in a multi-channel scenario. The usage in a single-channel scenario is similar."
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Register the event handler"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "_engine."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "registerEventHandler"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "  RtcEngineEventHandler"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    onTranscodedStreamLayoutInfo"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " ("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "RtcConnection"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " connection, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " uid,"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "        int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " width, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " height, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " layoutCount, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "List"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "VideoLayout"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "> layoutlist) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "      setState"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(() {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        _compositeUid "
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
                    children: " uid;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        _layoutList "
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
                    children: " layoutlist;"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "      });"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  ),"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ");"
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
                    children: "// Join the channel containing the composite stream"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "await"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " _engine."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "joinChannelEx"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  token"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " token,"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  connection"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " RtcConnection"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(channelId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " compositeChannelId, localUid"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " localUid),"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  options"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " const"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " ChannelMediaOptions"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    autoSubscribeVideo"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " true"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ","
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    autoSubscribeAudio"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " true"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ","
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    clientRoleType"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " ClientRoleType"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".clientRoleAudience,"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  ),"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ");"
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
                    children: "// Build AgoraVideoView widgets for each sub-stream"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "Widget"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " _buildSubStreamViews"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "  if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (_layoutList "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "=="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " null"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " ||"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " _compositeUid "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "=="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " null"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    return"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " const"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " SizedBox"
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
                    children: "shrink"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "();"
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " Stack"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    children"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " _layoutList"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "!"
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
                    children: "map"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "((layout) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "      return"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " AgoraVideoView"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        controller"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " VideoViewController"
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
                    children: "remote"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "          rtcEngine"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " _engine,"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "          canvas"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " VideoCanvas"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "            // User ID of the user forwarding the composite stream"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            uid"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " _compositeUid,"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "            // User ID corresponding to a specific sub-stream"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            subviewUid"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " layout.uid,"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            sourceType"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " VideoSourceType"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".videoSourceTranscoded,"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            renderMode"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " RenderModeType"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".renderModeFit,"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "          ),"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "          connection"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " RtcConnection"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(channelId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " compositeChannelId),"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        ),"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "      );"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    })."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "toList"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(),"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  );"
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
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// To remove a specific sub-stream view, rebuild the widget tree"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// without that sub-stream's AgoraVideoView, or use setupMode:"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "VideoCanvas"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  uid"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " _compositeUid,"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  subviewUid"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " layout.uid,"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  setupMode"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " VideoViewSetupMode"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".videoViewSetupRemove,"
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
`, _jsxs(_components.p, {
            children: ["When the layout of the composite stream changes, the ", _jsx(_components.code, {
              children: "onTranscodedStreamLayoutInfo"
            }), " callback fires again. Each time it fires, update your widget state with the new layout list and rebuild the ", _jsx(_components.code, {
              children: "AgoraVideoView"
            }), " widgets to reflect the updated layout."]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsxs(CalloutDescription, {
              children: [_jsx(_components.p, {
                children: "Layout changes can occur in the following situations:"
              }), _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "The coordinates of a sub-stream on the composite canvas change."
                }), `
`, _jsx(_components.li, {
                  children: "The width or height of the composite stream or a sub-stream changes."
                }), `
`, _jsxs(_components.li, {
                  children: ["The state of a sub-stream changes. When the host publishing a sub-stream leaves the channel, the ", _jsx(_components.code, {
                    children: "videoState"
                  }), " parameter for that sub-stream changes from ", _jsx(_components.code, {
                    children: "0"
                  }), " (normal) to ", _jsx(_components.code, {
                    children: "1"
                  }), " (no video available). Remove the corresponding ", _jsx(_components.code, {
                    children: "AgoraVideoView"
                  }), " from the widget tree to stop rendering that host's video."]
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
            children: ["Listen for the ", _jsx(_components.code, {
              children: "onUserOffline"
            }), " callback. When the user forwarding the composite stream leaves the channel, clear the layout list and stop rendering the composite stream."]
          }), `
`]
        }), `
`]
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Note"
        }), _jsx(CalloutDescription, {
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Client-customized composite layout is currently supported on mobile platforms only."
            }), `
`, _jsx(_components.li, {
              children: "If a watermark is applied to the composite stream, the watermark renders within its designated region and may appear split across sub-stream boundaries."
            }), `
`]
          })
        })]
      }), _jsx(_components.h2, {
        id: "reference-2",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product."
      }), _jsx(_components.h3, {
        id: "api-reference-2",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo",
            children: _jsx(_components.code, {
              children: "onTranscodedStreamLayoutInfo"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setupremotevideo",
            children: _jsx(_components.code, {
              children: "setupRemoteVideo"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineex.html#api_irtcengineex_setupremotevideoex",
            children: _jsx(_components.code, {
              children: "setupRemoteVideoEx"
            })
          })
        }), `
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
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
