import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Alpha transparency effect",
  description: "Segment the host's background and apply transparent special effects to enhance real-time video interactions."
};
export let _markdown = `

In various real-time video interaction use-cases, segmenting the host's background and applying transparent special effects can make the interaction more engaging, enhance immersion, and improve the overall interactive experience.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;windows&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    Consider the following sample use-cases:

    * **Broadcaster background replacement**: The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions.

    * **Animated virtual gifts**: Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged.

    * **Chroma keying during live game streaming**: The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game.

    ![image](https://assets-docs.agora.io/images/video-sdk/alpha-transparency-demo.png)

    ## Prerequisites [#prerequisites]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement alpha transparency [#implement-alpha-transparency]

    Choose one of the following methods to implement the Alpha transparency effect based on your specific business use-case.

    ### Custom video capture use-case [#custom-video-capture-use-case]

    The implementation process for this use-case is illustrated in the figure below:

    **Alpha transparency custom video capture use-case**

    ![Custom Video Capture Process 1](https://assets-docs.agora.io/images/video-sdk/alpha-transparency-scenario-1.svg)

    Take the following steps to implement this logic:

    1. Process the captured video frames and generate Alpha data. You can choose from the following methods:

       * **Method 1**: Call the \`pushExternalVideoFrame\`\\[2/2] method and set the \`alphaBuffer\` parameter to specify Alpha channel data for the video frames. This data matches the size of the video frames, with each pixel value ranging from 0 to 255, where 0 represents the background and 255 represents the foreground.

         <CalloutContainer type="warning">
           <CalloutDescription>
             Ensure that \`alphaBuffer\` is exactly the same size as the video frame (width × height), otherwise the app may crash.
           </CalloutDescription>
         </CalloutContainer>

         <CodeBlockTabs defaultValue="java">
           <CodeBlockTabsList>
             <CodeBlockTabsTrigger value="java">
               Java
             </CodeBlockTabsTrigger>

             <CodeBlockTabsTrigger value="kotlin">
               Kotlin
             </CodeBlockTabsTrigger>
           </CodeBlockTabsList>

           <CodeBlockTab value="java">
             \`\`\`java
             JavaI420Buffer javaI420Buffer = JavaI420Buffer.wrap(width, height, dataY, width, dataU, strideUV, dataV, strideUV, null);
                VideoFrame frame = new VideoFrame(javaI420Buffer, 0, timestamp);
                ByteBuffer alphaBuffer = ByteBuffer.allocateDirect(width * height);
                frame.fillAlphaData(alphaBuffer);
                rtcEngine.pushExternalVideoFrame(frame);
             \`\`\`
           </CodeBlockTab>

           <CodeBlockTab value="kotlin">
             \`\`\`kotlin
             val javaI420Buffer = JavaI420Buffer.wrap(width, height, dataY, width, dataU, strideUV, dataV, strideUV, null)
                val frame = VideoFrame(javaI420Buffer, 0, timestamp)
                val alphaBuffer = ByteBuffer.allocateDirect(width * height)
                frame.fillAlphaData(alphaBuffer)
                rtcEngine.pushExternalVideoFrame(frame)
             \`\`\`
           </CodeBlockTab>
         </CodeBlockTabs>

       * **Method 2**: Call the \`pushExternalVideoFrame\` method and use the \`setAlphaStitchMode\` method in the \`VideoFrame\` class to set the Alpha stitching mode. Construct a \`VideoFrame\` with the stitched Alpha data.

         <CodeBlockTabs defaultValue="java">
           <CodeBlockTabsList>
             <CodeBlockTabsTrigger value="java">
               Java
             </CodeBlockTabsTrigger>

             <CodeBlockTabsTrigger value="kotlin">
               Kotlin
             </CodeBlockTabsTrigger>
           </CodeBlockTabsList>

           <CodeBlockTab value="java">
             \`\`\`java
             JavaI420Buffer javaI420Buffer = JavaI420Buffer.wrap(width, height, dataY, width, dataU, strideUV, dataV, strideUV, null);
                VideoFrame frame = new VideoFrame(javaI420Buffer, 0, timestamp);
                // Set the Alpha stitching mode, in the example below, Alpha is set to be below the video image
                frame.setAlphaStitchMode(Constants.VIDEO_ALPHA_STITCH_BELOW);
                rtcEngine.pushExternalVideoFrame(frame);
             \`\`\`
           </CodeBlockTab>

           <CodeBlockTab value="kotlin">
             \`\`\`kotlin
             val javaI420Buffer = JavaI420Buffer.wrap(width, height, dataY, width, dataU, strideUV, dataV, strideUV, null)
                val frame = VideoFrame(javaI420Buffer, 0, timestamp)
                // Set the Alpha stitching mode, in the example below, Alpha is set to be below the video image
                frame.setAlphaStitchMode(Constants.VIDEO_ALPHA_STITCH_BELOW)
                rtcEngine.pushExternalVideoFrame(frame)
             \`\`\`
           </CodeBlockTab>
         </CodeBlockTabs>

    2. Render the local view and implement the Alpha transparency effect.

       * Create a \`TextureView\` object for rendering the local view.
       * Call the \`setupLocalVideo\` method to set the local view:
         * Set the \`enableAlphaMask\` parameter to \`true\` to enable alpha mask rendering.
         * Set \`TextureView\` as the display window for the local video.

       <CodeBlockTabs defaultValue="java">
         <CodeBlockTabsList>
           <CodeBlockTabsTrigger value="java">
             Java
           </CodeBlockTabsTrigger>

           <CodeBlockTabsTrigger value="kotlin">
             Kotlin
           </CodeBlockTabsTrigger>
         </CodeBlockTabsList>

         <CodeBlockTab value="java">
           \`\`\`java
           // Alpha data input on the sender side and Alpha transmission is enabled
               VideoEncoderConfiguration config = new VideoEncoderConfiguration(...);
               // Alpha transfer needs to be enabled when setting encoding parameters.
               config.advanceOptions.encodeAlpha = true;
               rtcEngine.setVideoEncoderConfiguration(videoEncoderConfiguration);

               // Set the view to TextureView
               TextureView textureView = new TextureView(context);
               // Enable transparent mode, allowing transparent portions in the view background and content
               textureView.setOpaque(false);
               fl_local.addView(textureView, new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

               VideoCanvas local = new VideoCanvas(textureView, RENDER_MODE_FIT, 0);
               local.enableAlphaMask = true;
               rtcEngine.setupLocalVideo(local);
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           // Alpha data input on the sender side and Alpha transmission is enabled
               val config = VideoEncoderConfiguration(...)
               // Alpha transfer needs to be enabled when setting encoding parameters.
               config.advanceOptions.encodeAlpha = true
               rtcEngine.setVideoEncoderConfiguration(videoEncoderConfiguration)

               // Set the view to TextureView
               val textureView = TextureView(context)
               // Enable transparent mode, allowing transparent portions in the view background and content
               textureView.isOpaque = false
               fl_local.addView(textureView, FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT))

               val local = VideoCanvas(textureView, RENDER_MODE_FIT, 0)
               local.enableAlphaMask = true
               rtcEngine.setupLocalVideo(local)
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>

    3. Render the local view of the remote video stream and implement alpha transparency effects.

       * After receiving the \`onUserJoined\` callback, a \`TextureView\` object is created for rendering the remote view.
       * Call the \`setupRemoteVideo\` method to set the remote view:
         * Set the \`enableAlphaMask\` parameter to true to enable alpha mask rendering.
         * Set the display window of the remote video stream in the local video.

       <CodeBlockTabs defaultValue="java">
         <CodeBlockTabsList>
           <CodeBlockTabsTrigger value="java">
             Java
           </CodeBlockTabsTrigger>

           <CodeBlockTabsTrigger value="kotlin">
             Kotlin
           </CodeBlockTabsTrigger>
         </CodeBlockTabsList>

         <CodeBlockTab value="java">
           \`\`\`java
           // Enable transparent mode at the receiving end
               TextureView textureView = new TextureView(context);
               textureView.setOpaque(false);
               fl_remote.addView(textureView, new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

               VideoCanvas remote = new VideoCanvas(textureView, VideoCanvas.RENDER_MODE_FIT, uid);
               remote.enableAlphaMask = true;
               rtcEngine.setupRemoteVideo(remote);
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           // Enable transparent mode at the receiving end
               val textureView = TextureView(context)
               textureView.isOpaque = false
               fl_remote.addView(textureView, FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT))

               val remote = VideoCanvas(textureView, VideoCanvas.RENDER_MODE_FIT, uid)
               remote.enableAlphaMask = true
               rtcEngine.setupRemoteVideo(remote)
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>

    ### SDK Capture use-case [#sdk-capture-use-case]

    The implementation process for this use-case is illustrated in the following figure:

    **Alpha transparency SDK capture use-case**

    ![Custom Video Capture Process 2](https://assets-docs.agora.io/images/video-sdk/alpha-transparency-scenario-2.svg)

    Take the following steps to implement this logic:

    1. On the broadcasting end, call the \`enableVirtualBackground\` \\[2/2] method to enable the background segmentation algorithm and obtain the Alpha data for the portrait area. Set the parameters as follows:

       * \`enabled\`: Set to \`true\` to enable the virtual background.
       * \`backgroundSourceType\`: Set to \`BACKGROUND_NONE\`(0), to segment the portrait and background, and process the background as Alpha data.

       <CodeBlockTabs defaultValue="java">
         <CodeBlockTabsList>
           <CodeBlockTabsTrigger value="java">
             Java
           </CodeBlockTabsTrigger>

           <CodeBlockTabsTrigger value="kotlin">
             Kotlin
           </CodeBlockTabsTrigger>
         </CodeBlockTabsList>

         <CodeBlockTab value="java">
           \`\`\`java
           VirtualBackgroundSource virtualBackgroundSource = new VirtualBackgroundSource(...);
              virtualBackgroundSource.backgroundSourceType = VirtualBackgroundSource.BACKGROUND_NONE; // Only generate alpha data, no background replacement
              SegmentationProperty segmentationProperty = new SegmentationProperty(...);
              rtcEngine.enableVirtualBackground(true, virtualBackgroundSource, segmentationProperty, sourceType);
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           val virtualBackgroundSource = VirtualBackgroundSource(...)
              virtualBackgroundSource.backgroundSourceType = VirtualBackgroundSource.BACKGROUND_NONE // Only generate alpha data, no background replacement
              val segmentationProperty = SegmentationProperty(...)
              rtcEngine.enableVirtualBackground(true, virtualBackgroundSource, segmentationProperty, sourceType)
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>

    2. Call \`setVideoEncoderConfiguration\` on the broadcasting end to set the video encoding property and set \`encodeAlpha\` to \`true\`. Then the Alpha data will be encoded and sent to the remote end.

       <CodeBlockTabs defaultValue="java">
         <CodeBlockTabsList>
           <CodeBlockTabsTrigger value="java">
             Java
           </CodeBlockTabsTrigger>

           <CodeBlockTabsTrigger value="kotlin">
             Kotlin
           </CodeBlockTabsTrigger>
         </CodeBlockTabsList>

         <CodeBlockTab value="java">
           \`\`\`java
           VideoEncoderConfiguration videoEncoderConfiguration = new VideoEncoderConfiguration(...);
             videoEncoderConfiguration.advanceOptions = new VideoEncoderConfiguration.AdvanceOptions(...);
             videoEncoderConfiguration.advanceOptions.encodeAlpha = true;
             rtcEngine.setVideoEncoderConfiguration(videoEncoderConfiguration);
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           val videoEncoderConfiguration = VideoEncoderConfiguration(...)
             videoEncoderConfiguration.advanceOptions = VideoEncoderConfiguration.AdvanceOptions(...)
             videoEncoderConfiguration.advanceOptions.encodeAlpha = true
             rtcEngine.setVideoEncoderConfiguration(videoEncoderConfiguration)
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>

    3. Render the local and remote views and implement the Alpha transparency effect. See the steps in the [Custom Video Capture use-case](#custom-video-capture-use-case) for details.

    ### Raw video data use-case [#raw-video-data-use-case]

    The implementation process for this use-case is illustrated in the following figure:

    **Alpha transparency raw video data use-case**

    ![Custom Video Capture Process 3](https://assets-docs.agora.io/images/video-sdk/alpha-transparency-scenario-3.svg)

    Take the following steps to implement this logic:

    1. Call the \`registerVideoFrameObserver\` method to register a raw video frame observer and implement the corresponding callbacks as required.

       <CodeBlockTabs defaultValue="java">
         <CodeBlockTabsList>
           <CodeBlockTabsTrigger value="java">
             Java
           </CodeBlockTabsTrigger>

           <CodeBlockTabsTrigger value="kotlin">
             Kotlin
           </CodeBlockTabsTrigger>
         </CodeBlockTabsList>

         <CodeBlockTab value="java">
           \`\`\`java
           // Register IVideoFrameObserver
             public class MyVideoFrameObserver implements IVideoFrameObserver {
               @Override
               public boolean onRenderVideoFrame(String channelId, int uId, VideoFrame videoFrame) {
                 // ...
                 return false;
               }

               @Override
               public boolean onCaptureVideoFrame(int type, VideoFrame videoFrame) {
                 // ...
                 return false;
               }

               @Override
               public boolean onPreEncodeVideoFrame(int type, VideoFrame videoFrame) {
                 // ...
                 return false;
               }
             }
             MyVideoFrameObserver observer = new MyVideoFrameObserver();
             rtcEngine.registerVideoFrameObserver(observer);
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           // Register IVideoFrameObserver
             class MyVideoFrameObserver : IVideoFrameObserver {
               override fun onRenderVideoFrame(channelId: String, uId: Int, videoFrame: VideoFrame): Boolean {
                 // ...
                 return false
               }

               override fun onCaptureVideoFrame(type: Int, videoFrame: VideoFrame): Boolean {
                 // ...
                 return false
               }

               override fun onPreEncodeVideoFrame(type: Int, videoFrame: VideoFrame): Boolean {
                 // ...
                 return false
               }
             }
             val observer = MyVideoFrameObserver()
             rtcEngine.registerVideoFrameObserver(observer)
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>
    2. Use the \`onCaptureVideoFrame\` callback to obtain the captured video data and pre-process it as needed. You can modify the Alpha data or directly add Alpha data.

       <CodeBlockTabs defaultValue="java">
         <CodeBlockTabsList>
           <CodeBlockTabsTrigger value="java">
             Java
           </CodeBlockTabsTrigger>

           <CodeBlockTabsTrigger value="kotlin">
             Kotlin
           </CodeBlockTabsTrigger>
         </CodeBlockTabsList>

         <CodeBlockTab value="java">
           \`\`\`java
           public boolean onCaptureVideoFrame(int type, VideoFrame videoFrame) {
               // Modify Alpha data or directly add Alpha data
               ByteBuffer alphaBuffer = videoFrame.getAlphaBuffer();
               // ...
               videoFrame.fillAlphaData(byteBuffer);
               return false;
             }
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           override fun onCaptureVideoFrame(type: Int, videoFrame: VideoFrame): Boolean {
               // Modify Alpha data or directly add Alpha data
               val alphaBuffer = videoFrame.alphaBuffer
               // ...
               videoFrame.fillAlphaData(byteBuffer)
               return false
             }
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>
    3. Use the \`onPreEncodeVideoFrame\` callback to obtain the local video data before encoding, and modify or directly add Alpha data as needed.

       <CodeBlockTabs defaultValue="java">
         <CodeBlockTabsList>
           <CodeBlockTabsTrigger value="java">
             Java
           </CodeBlockTabsTrigger>

           <CodeBlockTabsTrigger value="kotlin">
             Kotlin
           </CodeBlockTabsTrigger>
         </CodeBlockTabsList>

         <CodeBlockTab value="java">
           \`\`\`java
           public boolean onPreEncodeVideoFrame(int type, VideoFrame videoFrame) {
               // Modify Alpha data or directly add Alpha data
               ByteBuffer alphaBuffer = videoFrame.getAlphaBuffer();
               // ...
               videoFrame.fillAlphaData(byteBuffer);
               return false;
             }
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           override fun onPreEncodeVideoFrame(type: Int, videoFrame: VideoFrame): Boolean {
               // Modify Alpha data or directly add Alpha data
               val alphaBuffer = videoFrame.alphaBuffer
               // ...
               videoFrame.fillAlphaData(byteBuffer)
               return false
             }
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>
    4. Use the \`onRenderVideoFrame\` callback to obtain the remote video data before rendering it locally. Modify the Alpha data, add Alpha data directly, or render the video image yourself based on the obtained Alpha data.

       <CodeBlockTabs defaultValue="java">
         <CodeBlockTabsList>
           <CodeBlockTabsTrigger value="java">
             Java
           </CodeBlockTabsTrigger>

           <CodeBlockTabsTrigger value="kotlin">
             Kotlin
           </CodeBlockTabsTrigger>
         </CodeBlockTabsList>

         <CodeBlockTab value="java">
           \`\`\`java
           public boolean onRenderVideoFrame(int type, VideoFrame videoFrame) {
               // Modify Alpha data, directly add Alpha data, or render the video image yourself based on the obtained Alpha data
               ByteBuffer alphaBuffer = videoFrame.getAlphaBuffer();
               // ...
               videoFrame.fillAlphaData(byteBuffer);
               return false;
             }
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           override fun onRenderVideoFrame(type: Int, videoFrame: VideoFrame): Boolean {
               // Modify Alpha data, directly add Alpha data, or render the video image yourself based on the obtained Alpha data
               val alphaBuffer = videoFrame.alphaBuffer
               // ...
               videoFrame.fillAlphaData(byteBuffer)
               return false
             }
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>

    ### Development notes [#development-notes]

    * Implement the transparency properties of the app window yourself and handle the transparency relationship when multiple windows are stacked on top of each other (achieved by adjusting the \`zOrder\` of the window).

    * On Android, only \`TextureView\` and \`SurfaceView\` are supported when setting the view due to system limitations.

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference]

    * [\`VideoFrame\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_videoframe.html)
    * [\`pushExternalVideoFrame\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_pushvideoframe4)
    * [\`setupLocalVideo\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setuplocalvideo)
    * [\`setupRemoteVideo\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setupremotevideo)
    * [\`enableVirtualBackground\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enablevirtualbackground2)
    * [\`registerVideoFrameObserver\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_imediaengine_registervideoframeobserver)
    * [\`onCaptureVideoFrame\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_ivideoframeobserver.html#callback_ivideoframeobserver_oncapturevideoframe)
    * [\`onPreEncodeVideoFrame\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_ivideoframeobserver.html#callback_ivideoframeobserver_onpreencodevideoframe)
    * [\`onRenderVideoFrame\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_ivideoframeobserver.html#callback_ivideoframeobserver_onrendervideoframe)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    Consider the following sample use-cases:

    * **Broadcaster background replacement**: The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions.

    * **Animated virtual gifts**: Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged.

    * **Chroma keying during live game streaming**: The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game.

    ![image](https://assets-docs.agora.io/images/video-sdk/alpha-transparency-demo.png)

    ## Prerequisites [#prerequisites-1]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement alpha transparency [#implement-alpha-transparency-1]

    <CalloutContainer type="info">
      <CalloutDescription>
        Sample code is currently available for the Android, Unity, and React Native platforms only. If your target platform is different, please refer to the code samples on the Android page and implement similar logic for your platform using the API reference.
      </CalloutDescription>
    </CalloutContainer>

    ### Development notes [#development-notes-1]

    * Implement the transparency properties of the app window yourself and handle the transparency relationship when multiple windows are stacked on top of each other (achieved by adjusting the \`zOrder\` of the window).

    * For iOS, set \`opaque\` to \`false\` in the view's \`layer\` property when setting up the view.

    * For macOS, You don't need to additionally set the transparency properties of the window. Follow the settings described for iOS.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="macos" />

    Consider the following sample use-cases:

    * **Broadcaster background replacement**: The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions.

    * **Animated virtual gifts**: Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged.

    * **Chroma keying during live game streaming**: The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game.

    ![image](https://assets-docs.agora.io/images/video-sdk/alpha-transparency-demo.png)

    ## Prerequisites [#prerequisites-2]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement alpha transparency [#implement-alpha-transparency-2]

    <CalloutContainer type="info">
      <CalloutDescription>
        Sample code is currently available for the Android, Unity, and React Native platforms only. If your target platform is different, please refer to the code samples on the Android page and implement similar logic for your platform using the API reference.
      </CalloutDescription>
    </CalloutContainer>

    ### Development notes [#development-notes-2]

    * Implement the transparency properties of the app window yourself and handle the transparency relationship when multiple windows are stacked on top of each other (achieved by adjusting the \`zOrder\` of the window).

    * For iOS, set \`opaque\` to \`false\` in the view's \`layer\` property when setting up the view.

    * For macOS, You don't need to additionally set the transparency properties of the window. Follow the settings described for iOS.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="windows" />

    Consider the following sample use-cases:

    * **Broadcaster background replacement**: The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions.

    * **Animated virtual gifts**: Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged.

    * **Chroma keying during live game streaming**: The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game.

    ![image](https://assets-docs.agora.io/images/video-sdk/alpha-transparency-demo.png)

    ## Prerequisites [#prerequisites-3]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement alpha transparency [#implement-alpha-transparency-3]

    <CalloutContainer type="info">
      <CalloutDescription>
        Sample code is currently available for the Android, Unity, and React Native platforms only. If your target platform is different, please refer to the code samples on the Android page and implement similar logic for your platform using the API reference.
      </CalloutDescription>
    </CalloutContainer>

    ### Development notes [#development-notes-3]

    * Implement the transparency properties of the app window yourself and handle the transparency relationship when multiple windows are stacked on top of each other (achieved by adjusting the \`zOrder\` of the window).

    * For Windows, create a separate window using \`CreateWindowEx\` when creating the project and set the \`High Transparency\` property. If the target window is a child window, you need to additionally specify the \`WS_POPUP\` property.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="react-native" />

    Consider the following sample use-cases:

    * **Broadcaster background replacement**: The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions.

    * **Animated virtual gifts**: Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged.

    * **Chroma keying during live game streaming**: The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game.

    ![image](https://assets-docs.agora.io/images/video-sdk/alpha-transparency-demo.png)

    ## Prerequisites [#prerequisites-4]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement alpha transparency [#implement-alpha-transparency-4]

    Choose one of the following methods to implement the Alpha transparency effect based on your specific business use-case.

    When using the SDK to capture video frames, you can achieve the Alpha transparency effect in the following ways:

    **Alpha transparency use-case**

    ![Custom Video Capture Process 1](https://assets-docs.agora.io/images/video-sdk/alpha-transparency-scenario-2.svg)

    ### Enable virtual background [#enable-virtual-background]

    Call \`enableVirtualBackground\` on the host to enable the background segmentation algorithm and get the alpha data of the portrait area. Set the following parameters:

    * \`enabled\`: Set to \`true\` to enable virtual background.
    * \`background_source_type\` in \`backgroundSource\`: Set to \`BackgroundNone\`. This separates the portrait and background and the background is processed as Alpha data.

    \`\`\`typescript
    // Initialize the RtcEngine object
    const rtcEngine = createAgoraRtcEngine();

    // Enable virtual background
    rtcEngine.enableVirtualBackground(
      true,
      backgroundSource,
      { modelType: SegModelType.SegModelAi },
      { background_source_type: BackgroundSourceType.BackgroundNone }
    );
    \`\`\`

    ### Set video encoding properties [#set-video-encoding-properties]

    Call \`setVideoEncoderConfiguration\` on the host to set the video encoding properties. Set \`encodeAlpha\` to \`true\` to encode the alpha data and send to the remote end.

    \`\`\`typescript
    rtcEngine.setVideoEncoderConfiguration({advanceOptions: {encodeAlpha: true}});
    \`\`\`

    ### Enable Alpha rendering [#enable-alpha-rendering]

    1. Use the \`RtcSurfaceView\` component to create local and remote views.
    2. In the \`canvas\` parameter of the \`RtcRenderViewProps\` property, set \`enableAlphaMask\` of the \`VideoCanvas\` to \`true\` to enable alpha mask rendering and alpha transparency effects.

       \`\`\`tsx
       <RtcSurfaceView
         canvas={{ uid: 0, enableAlphaMask: true }}
         style={styles.videoView}
       />
       \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="unity" />

    Consider the following sample use-cases:

    * **Broadcaster background replacement**: The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions.

    * **Animated virtual gifts**: Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged.

    * **Chroma keying during live game streaming**: The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game.

    ![image](https://assets-docs.agora.io/images/video-sdk/alpha-transparency-demo.png)

    ## Prerequisites [#prerequisites-5]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement alpha transparency [#implement-alpha-transparency-5]

    Choose one of the following methods to implement the alpha transparency effect based on your specific business use-case.

    ### Custom video capture use-case [#custom-video-capture-use-case-1]

    The following figure illustrates the implementation process for this use-case:

    **Alpha transparency custom video capture use-case**

    ![Custom Video Capture Process 1](https://assets-docs.agora.io/images/video-sdk/alpha-transparency-scenario-1.svg)

    Agora provides the following options to push self-captured video frames with alpha information to the SDK for publishing to the channel. Choose the method that best fits your needs.

    <CalloutContainer type="info">
      <CalloutDescription>
        Due to limitations of the Unity SDK, it is currently not possible to locally preview the custom captured video streams to be pushed through the \`VideoSurfaceYUVA\` component. You must view the effects of the push streams on the receiving end.
      </CalloutDescription>
    </CalloutContainer>

    #### Set alpha information for video frames [#set-alpha-information-for-video-frames]

    Refer to the following steps to process the self-captured video data, push the self-captured video stream within the channel, and set the alpha information for each frame individually to realize dynamic visual effects. The following sample code uses the following picture as an example:

    1. Process texture data. Extract and convert the color data of the \`Texture2D\` object into two byte arrays, one containing the RGBA data and the other containing the alpha channel data for subsequent processing and transmission.

       \`\`\`csharp
       // The Read/Write enable property is set to true and bound to the TextureWithAlphaBuffer variable
       public Texture2D TextureWithAlphaBuffer;
       private byte[] _rgbaData = null;
       private byte[] _alphaData = null;
       private int _textureWidth;
       private int _textureHeight;
       // Customized video track IDs
       private uint _videoTrackId = 0;

       // Convert color data from the Color32 array to rgbaData and alphaData arrays
       private void ConvertColor32(Color32[] colors, byte[] rgbaData, byte[] alphaData)
       {
         int i = 0;
         int l = 0;
         foreach (var color in colors)
         {
           rgbaData[i++] = color.r;
           rgbaData[i++] = color.g;
           rgbaData[i++] = color.b;
           rgbaData[i++] = color.a;

           alphaData[l++] = color.a;
         }
       }

       // Read the color data from the texture and initialize the _rgbaData and _alphaData arrays, as well as record the width and height of the texture
       public void InitTextureDataWithAlphaBuffer()
       {
         Color32[] color32s = TextureWithAlphaBuffer.GetPixels32(0);
         _rgbaData = new byte[color32s.Length * 4];
         _alphaData = new byte[color32s.Length];
         ConvertColor32(color32s, _rgbaData, _alphaData);
         _textureWidth = TextureWithAlphaBuffer.width;
         _textureHeight = TextureWithAlphaBuffer.height;
         this.Log.UpdateLog(string.Format("AlphaBuffer width: {0}, height: {1}", _textureWidth, _textureHeight));
       }
       \`\`\`

    2. Configure the video encoding parameters to send alpha data to the remote end. Call \`SetVideoEncoderConfiguration\` to set the video encoding properties and set \`encodeAlpha\` to \`true\` to encode and send alpha data to the remote end.

    3. Create a video track for posting custom captured video to the channel. Call \`CreateCustomVideoTrack\` to create a custom video track.

    4. Call \`JoinChannel\`\\[2/2] to join the channel and set the channel media options:

       * Set \`customVideoTrackId\` to the video track ID obtained using \`CreateCustomVideoTrack\`.
       * Set \`publishCameraTrack\` to \`false\` to stop publishing the video stream captured by the camera.
       * Set \`publishCustomVideoTrack\` to true to publish the custom captured video stream.

       Refer to the following sample code:

       \`\`\`csharp
       public void OnStartPushVideoFrameWithAlphaBuffer()
       {
         // Read RGBA data and alpha data from an image
         InitTextureDataWithAlphaBuffer();
         // Set video encoding properties
         VideoEncoderConfiguration videoEncoderConfiguration = new VideoEncoderConfiguration();
         videoEncoderConfiguration.dimensions.width = _textureWidth;  videoEncoderConfiguration.dimensions.height = _textureHeight;
         // Set the Transmit Code alpha Data
         videoEncoderConfiguration.advanceOptions.encodeAlpha = true;
         RtcEngine.SetVideoEncoderConfiguration(videoEncoderConfiguration);
         // Create custom video tracks for posting custom captured video streams within the channel
         _videoTrackId = RtcEngine.CreateCustomVideoTrack();
         // Set Channel Media Options
         var options = new ChannelMediaOptions();
         // No release of video streams captured by cameras
         options.publishCameraTrack.SetValue(false);
         // Publish audio streams captured by microphones
         options.publishMicrophoneTrack.SetValue(true);
         // Publish custom captured video streams
         options.publishCustomVideoTrack.SetValue(true);
         // Set customVideoTrackId to the video track ID you returned when calling the CreateCustomVideoTrack method.
         options.customVideoTrackId.SetValue(_videoTrackId);
         // Join the channel.
         RtcEngine.JoinChannel(_token, _channelName, 0, options)
         InvokeRepeating("UpdateForPushVideoFrameWithAlphaBuffer", 0.1f, 0.1f);
       }
       \`\`\`

    5. Push a custom captured video stream to the SDK. Call the \`PushVideoFrame\` method to push the video frame and set the alpha data for the video frame. Set the alpha channel data for the video frame by setting the \`alphaBuffer\` or \`fillAlphaBuffer\` parameter.

       * \`alphaBuffer\`: Alpha channel data. This data is consistent with the size of the video frame, and each pixel point takes the value in the range of \\[0,255], where 0 represents the background; 255 represents the foreground (portrait).

       * \`fillAlphaBuffer\`: When set to true, the SDK can extracts and fills the alpha channel data automatically, and you don't need to additionally set an \`alphaBuffer\`. \`fillAlphaBuffer\` parameter currently only supports video data in BGRA or RGBA format.

       <CalloutContainer type="warning">
         <CalloutDescription>
           Make sure the \`alphaBuffer\` is exactly the same size (width × height) as the video frame, otherwise the game may crash.
         </CalloutDescription>
       </CalloutContainer>

       \`\`\`csharp
       public void UpdateForPushVideoFrameWithAlphaBuffer()
       {
         var timetick = System.DateTime.Now.Ticks / 10000;
         ExternalVideoFrame externalVideoFrame = new ExternalVideoFrame();
         // Video buffer type is raw data
         externalVideoFrame.type = VIDEO_BUFFER_TYPE.VIDEO_BUFFER_RAW_DATA;
         // Video pixels in RGBA format
         externalVideoFrame.format = VIDEO_PIXEL_FORMAT.VIDEO_PIXEL_RGBA;
         externalVideoFrame.buffer = _rgbaData;
         externalVideoFrame.alphaStitchMode = ALPHA_STITCH_MODE.NO_ALPHA_STITCH
         externalVideoFrame.alphaBuffer = null;
         // Extracts and fills alpha channel data, currently only available for video data in RGBA or BGRA format.
         externalVideoFrame.fillAlphaBuffer = true;
         // Extracts and fills alpha channel data, currently only available for video data in RGBA or BGRA format.
         //externalVideoFrame.alphaBuffer = _alphaData;
         //externalVideoFrame.fillAlphaBuffer = false
         externalVideoFrame.stride = _textureWidth;
         externalVideoFrame.height = _textureHeight;
         externalVideoFrame.rotation = 180;
         externalVideoFrame.timestamp = timetick;
         // Push custom captured video to the SDK
         var ret = RtcEngine.PushVideoFrame(externalVideoFrame,
         _videoTrackId);
         Debug.Log("PushVideoFrame ret = " + ret + " time: " + timetick);
       }
       \`\`\`

    #### Merge video data and alpha data [#merge-video-data-and-alpha-data]

    Refer to the following steps to merge the captured video data with the alpha channel data and push the combined video data to the SDK for publishing to the channel. The following steps show how to integrate the alpha channel data with the video data.

    1. Merge the captured video data with the alpha data.

       \`\`\`csharp
       public void InitTextureDataWithAlphaStitchMode()
       {
         // Read raw texture data
         Color32[] color32s = TextureWithAlphaBuffer.GetPixels32(0);

         // Get the width and height of the original texture
         var width = TextureWithAlphaBuffer.width;
         var height = TextureWithAlphaBuffer.height;

         // Create a new texture that is twice the height of the original texture.
         TextureWithAlphaStitchMode = new Texture2D(width, height * 2, TextureFormat.RGBA32, false);

         // Initialize a new color array to store the spliced pixel data
         Color32[] newColor32s = new Color32[color32s.Length * 2];

         // Copy the original color data to the top half of the new color array  Array.Copy(color32s, newColor32s, color32s.Length);

         // Splice the alpha channel data into the lower half of the new color array
         for (int i = color32s.Length; i < newColor32s.Length; i++)  {
           newColor32s[i].r = color32s[i - color32s.Length].a;
           newColor32s[i].g = newColor32s[i].r;
           newColor32s[i].b = newColor32s[i].r;
           newColor32s[i].a = 255;
         }

         // Apply the new color array to the new texture
         TextureWithAlphaStitchMode.SetPixels32(newColor32s);  TextureWithAlphaStitchMode.Apply();

         // Convert color data and stores it in _rgbaData and _alphaData arrays
         _rgbaData = new byte[newColor32s.Length * 4];
         _alphaData = new byte[newColor32s.Length];
         ConvertColor32(newColor32s, _rgbaData, _alphaData);

         // Update texture width and height
         _textureWidth = TextureWithAlphaStitchMode.width;
         _textureHeight = TextureWithAlphaStitchMode.height;
         this.Log.UpdateLog(string.Format("AlphaStitchMode width: {0}, height: {1}", _textureWidth, _textureHeight));

         // Bind the new texture to the RawImage component in the UI.
         GameObject.Find("RawImage").GetComponent<RawImage>().texture = TextureWithAlphaStitchMode;
         GameObject.Find("RawImage").GetComponent<RectTransform>().sizeDelta = new Vector2(_textureWidth, _textureHeight);
       }
       \`\`\`

    2. Configure the video encoding parameters to send alpha data to the remote end. Call \`SetVideoEncoderConfiguration\` to set the video encoding properties and set \`encodeAlpha\` to \`true\` to encode and send alpha data to the remote end.

    3. Create a video track for posting custom captured video to the channel. Call \`CreateCustomVideoTrack\` to create a custom video track.

    4. Call \`JoinChannel\`\\[2/2] to join the channel and set the channel media options:

       * Set \`customVideoTrackId\` to the video track ID obtained by calling \`CreateCustomVideoTrack\`.
       * Set \`publishCameraTrack\` to \`false\` to stop publishing the video stream captured by the camera.
       * Set \`publishCustomVideoTrack\` to \`true\` to publish a custom captured video stream.

       The sample code is as follows:

       \`\`\`csharp
       public void OnStartPushVideoFrameWithAlphaStitchMode()
       {
         InitTextureDataWithAlphaStitchMode();
         VideoEncoderConfiguration videoEncoderConfiguration = new VideoEncoderConfiguration();
         videoEncoderConfiguration.dimensions.width = _textureWidth;
         // The actual height sent is half the height of the stitched texture
         videoEncoderConfiguration.dimensions.height = _textureHeight / 2;
         // Encodes and sends Alpha data to the remote end
         videoEncoderConfiguration.advanceOptions.encodeAlpha = true;
         // Set video encoding properties
         RtcEngine.SetVideoEncoderConfiguration(videoEncoderConfiguration);
         // Create custom video tracks for posting custom captured video streams within the channel
         _videoTrackId = RtcEngine.CreateCustomVideoTrack();
         var options = new ChannelMediaOptions();
         // Set not to publish video streams captured by the camera
         options.publishCameraTrack.SetValue(false);
         // Setting Up Audio Streams for Publishing Microphone Capture
         options.publishMicrophoneTrack.SetValue(true);
         // Setting up to publish custom captured video streams
         options.publishCustomVideoTrack.SetValue(true);
         // Set customVideoTrackId to the video track ID you returned when calling the CreateCustomVideoTrack method.
         options.customVideoTrackId.SetValue(_videoTrackId);
         // Join the channel
         RtcEngine.JoinChannel(_token, _channelName, 0, options);
         InvokeRepeating("UpdateForPushVideoFrameWithAlphaStitchMode", 0.1f, 0.1f);
       }
       \`\`\`

    5. Push the merged video frame to the SDK. Call the \`PushVideoFrame\` method and set the relative position of the alpha data and the video frame with the \`alphaStitchMode\` parameter.

       Refer to the following sample code:

       \`\`\`csharp
       public void UpdateForPushVideoFrameWithAlphaStitchMode()
       {
         var timetick = System.DateTime.Now.Ticks / 10000;
         ExternalVideoFrame externalVideoFrame = new ExternalVideoFrame();
         // Video buffer type is raw data
         externalVideoFrame.type = VIDEO_BUFFER_TYPE.VIDEO_BUFFER_RAW_DATA;
         // Video pixels in RGBA format
         externalVideoFrame.format = VIDEO_PIXEL_FORMAT.VIDEO_PIXEL_RGBA;
         externalVideoFrame.buffer = _rgbaData;
         // highlight-start
         // Since Unity texture coordinates and SDK coordinates are different, if you need to splice the alpha data to the top of the original data, you need to set the splice position to the bottom when the SDK reads it here.
         externalVideoFrame.alphaStitchMode = ALPHA_STITCH_MODE.ALPHA_STITCH_BELOW;
         // highlight-end
         externalVideoFrame.stride = _textureWidth;
         externalVideoFrame.height = _textureHeight;
         externalVideoFrame.rotation = 180;
         externalVideoFrame.timestamp = timetick;
         // Push video frames to SDK
         var ret = RtcEngine.PushVideoFrame(externalVideoFrame, _videoTrackId);
         Debug.Log("PushVideoFrame ret = " + ret + " time: " + timetick);
       }
       \`\`\`

    ### SDK Capture use-case [#sdk-capture-use-case-1]

    The following figure illustrates the implementation process for this use-case:

    **Alpha transparency SDK capture use-case**

    ![Custom Video Capture Process 2](https://assets-docs.agora.io/images/video-sdk/alpha-transparency-scenario-2.svg)

    Take the following steps to implement this logic:

    1. When rendering local video using the \`VideoSurface\` component, call \`SetLocalVideoDataSourcePosition\` to get the position of the video frame. Setting the position to \`POSITION_POST_CAPTURER\` means getting the video frame after the local video capture is done.

       \`\`\`csharp
       // Set the local video frame position to POSITION_POST_CAPTURER
       RtcEngine.SetLocalVideoDataSourcePosition(VIDEO_MODULE_POSITION.POSITION_POST_CAPTURER);
       \`\`\`

    2. Call \`EnableVirtualBackground\` on the host to enable the background segmentation algorithm and get the alpha data of the portrait area. The recommended parameters are as follows:

       * \`enabled\`: Set to \`true\` to enable virtual background.
       * \`backgroundSourceType\`: Set to \`BACKGROUND_NONE\` to split the portrait and background and process the background as an alpha channel.

       \`\`\`csharp
       var source = new VirtualBackgroundSource();
       source.background_source_type = BACKGROUND_SOURCE_TYPE.BACKGROUND_NONE;
       var segproperty = new SegmentationProperty();
       var nRet = RtcEngine.EnableVirtualBackground(true, source, segproperty, MEDIA_SOURCE_TYPE.PRIMARY_CAMERA_SOURCE);
       this.Log.UpdateLog("EnableVirtualBackground true :" + nRet);
       \`\`\`

    3. Call \`SetVideoEncoderConfiguration\` to set \`encodeAlpha\` to \`true\`. This encodes the alpha information and sends it to the remote end. Call \`JoinChannel\`\\[2/2] to join the channel.

       \`\`\`csharp
       VideoEncoderConfiguration videoEncoderConfiguration = new VideoEncoderConfiguration();
       videoEncoderConfiguration.advanceOptions.encodeAlpha = true;
       RtcEngine.SetVideoEncoderConfiguration(videoEncoderConfiguration);
       RtcEngine.JoinChannel(_token, _channelName, "", 0);
       \`\`\`

    4. Render views with alpha transparency effects using the \`VideoSurfaceYUVA\` component.

       \`\`\`csharp
       private VideoSurface MakeImageSurface(string goName)
       {
         // ......
         // Render with VideoSurfaceYUVA
         VideoSurface videoSurface = go.AddComponent<VideoSurfaceYUVA>();
         return videoSurface;
       }
       \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In various real-time video interaction use-cases, segmenting the host's background and applying transparent special effects can make the interaction more engaging, enhance immersion, and improve the overall interactive experience."
  }, {
    heading: undefined,
    content: "Consider the following sample use-cases:"
  }, {
    heading: undefined,
    content: "**Broadcaster background replacement**: The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions."
  }, {
    heading: undefined,
    content: "**Animated virtual gifts**: Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged."
  }, {
    heading: undefined,
    content: "**Chroma keying during live game streaming**: The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game."
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-alpha-transparency",
    content: "Choose one of the following methods to implement the Alpha transparency effect based on your specific business use-case."
  }, {
    heading: "custom-video-capture-use-case",
    content: "The implementation process for this use-case is illustrated in the figure below:"
  }, {
    heading: "custom-video-capture-use-case",
    content: "**Alpha transparency custom video capture use-case**"
  }, {
    heading: "custom-video-capture-use-case",
    content: "Take the following steps to implement this logic:"
  }, {
    heading: "custom-video-capture-use-case",
    content: "Process the captured video frames and generate Alpha data. You can choose from the following methods:"
  }, {
    heading: "custom-video-capture-use-case",
    content: "**Method 1**: Call the `pushExternalVideoFrame`\\[2/2] method and set the `alphaBuffer` parameter to specify Alpha channel data for the video frames. This data matches the size of the video frames, with each pixel value ranging from 0 to 255, where 0 represents the background and 255 represents the foreground."
  }, {
    heading: "custom-video-capture-use-case",
    content: "Ensure that `alphaBuffer` is exactly the same size as the video frame (width × height), otherwise the app may crash."
  }, {
    heading: "custom-video-capture-use-case",
    content: "**Method 2**: Call the `pushExternalVideoFrame` method and use the `setAlphaStitchMode` method in the `VideoFrame` class to set the Alpha stitching mode. Construct a `VideoFrame` with the stitched Alpha data."
  }, {
    heading: "custom-video-capture-use-case",
    content: "Render the local view and implement the Alpha transparency effect."
  }, {
    heading: "custom-video-capture-use-case",
    content: "Create a `TextureView` object for rendering the local view."
  }, {
    heading: "custom-video-capture-use-case",
    content: "Call the `setupLocalVideo` method to set the local view:"
  }, {
    heading: "custom-video-capture-use-case",
    content: "Set the `enableAlphaMask` parameter to `true` to enable alpha mask rendering."
  }, {
    heading: "custom-video-capture-use-case",
    content: "Set `TextureView` as the display window for the local video."
  }, {
    heading: "custom-video-capture-use-case",
    content: "Render the local view of the remote video stream and implement alpha transparency effects."
  }, {
    heading: "custom-video-capture-use-case",
    content: "After receiving the `onUserJoined` callback, a `TextureView` object is created for rendering the remote view."
  }, {
    heading: "custom-video-capture-use-case",
    content: "Call the `setupRemoteVideo` method to set the remote view:"
  }, {
    heading: "custom-video-capture-use-case",
    content: "Set the `enableAlphaMask` parameter to true to enable alpha mask rendering."
  }, {
    heading: "custom-video-capture-use-case",
    content: "Set the display window of the remote video stream in the local video."
  }, {
    heading: "sdk-capture-use-case",
    content: "The implementation process for this use-case is illustrated in the following figure:"
  }, {
    heading: "sdk-capture-use-case",
    content: "**Alpha transparency SDK capture use-case**"
  }, {
    heading: "sdk-capture-use-case",
    content: "Take the following steps to implement this logic:"
  }, {
    heading: "sdk-capture-use-case",
    content: "On the broadcasting end, call the `enableVirtualBackground` \\[2/2] method to enable the background segmentation algorithm and obtain the Alpha data for the portrait area. Set the parameters as follows:"
  }, {
    heading: "sdk-capture-use-case",
    content: "`enabled`: Set to `true` to enable the virtual background."
  }, {
    heading: "sdk-capture-use-case",
    content: "`backgroundSourceType`: Set to `BACKGROUND_NONE`(0), to segment the portrait and background, and process the background as Alpha data."
  }, {
    heading: "sdk-capture-use-case",
    content: "Call `setVideoEncoderConfiguration` on the broadcasting end to set the video encoding property and set `encodeAlpha` to `true`. Then the Alpha data will be encoded and sent to the remote end."
  }, {
    heading: "sdk-capture-use-case",
    content: "Render the local and remote views and implement the Alpha transparency effect. See the steps in the Custom Video Capture use-case for details."
  }, {
    heading: "raw-video-data-use-case",
    content: "The implementation process for this use-case is illustrated in the following figure:"
  }, {
    heading: "raw-video-data-use-case",
    content: "**Alpha transparency raw video data use-case**"
  }, {
    heading: "raw-video-data-use-case",
    content: "Take the following steps to implement this logic:"
  }, {
    heading: "raw-video-data-use-case",
    content: "Call the `registerVideoFrameObserver` method to register a raw video frame observer and implement the corresponding callbacks as required."
  }, {
    heading: "raw-video-data-use-case",
    content: "Use the `onCaptureVideoFrame` callback to obtain the captured video data and pre-process it as needed. You can modify the Alpha data or directly add Alpha data."
  }, {
    heading: "raw-video-data-use-case",
    content: "Use the `onPreEncodeVideoFrame` callback to obtain the local video data before encoding, and modify or directly add Alpha data as needed."
  }, {
    heading: "raw-video-data-use-case",
    content: "Use the `onRenderVideoFrame` callback to obtain the remote video data before rendering it locally. Modify the Alpha data, add Alpha data directly, or render the video image yourself based on the obtained Alpha data."
  }, {
    heading: "development-notes",
    content: "Implement the transparency properties of the app window yourself and handle the transparency relationship when multiple windows are stacked on top of each other (achieved by adjusting the `zOrder` of the window)."
  }, {
    heading: "development-notes",
    content: "On Android, only `TextureView` and `SurfaceView` are supported when setting the view due to system limitations."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference",
    content: "`VideoFrame`"
  }, {
    heading: "api-reference",
    content: "`pushExternalVideoFrame` \\[2/2]"
  }, {
    heading: "api-reference",
    content: "`setupLocalVideo`"
  }, {
    heading: "api-reference",
    content: "`setupRemoteVideo`"
  }, {
    heading: "api-reference",
    content: "`enableVirtualBackground`"
  }, {
    heading: "api-reference",
    content: "`registerVideoFrameObserver`"
  }, {
    heading: "api-reference",
    content: "`onCaptureVideoFrame`"
  }, {
    heading: "api-reference",
    content: "`onPreEncodeVideoFrame`"
  }, {
    heading: "api-reference",
    content: "`onRenderVideoFrame`"
  }, {
    heading: "api-reference",
    content: "Consider the following sample use-cases:"
  }, {
    heading: "api-reference",
    content: "**Broadcaster background replacement**: The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions."
  }, {
    heading: "api-reference",
    content: "**Animated virtual gifts**: Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged."
  }, {
    heading: "api-reference",
    content: "**Chroma keying during live game streaming**: The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game."
  }, {
    heading: "prerequisites-1",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-alpha-transparency-1",
    content: "Sample code is currently available for the Android, Unity, and React Native platforms only. If your target platform is different, please refer to the code samples on the Android page and implement similar logic for your platform using the API reference."
  }, {
    heading: "development-notes-1",
    content: "Implement the transparency properties of the app window yourself and handle the transparency relationship when multiple windows are stacked on top of each other (achieved by adjusting the `zOrder` of the window)."
  }, {
    heading: "development-notes-1",
    content: "For iOS, set `opaque` to `false` in the view's `layer` property when setting up the view."
  }, {
    heading: "development-notes-1",
    content: "For macOS, You don't need to additionally set the transparency properties of the window. Follow the settings described for iOS."
  }, {
    heading: "development-notes-1",
    content: "Consider the following sample use-cases:"
  }, {
    heading: "development-notes-1",
    content: "**Broadcaster background replacement**: The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions."
  }, {
    heading: "development-notes-1",
    content: "**Animated virtual gifts**: Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged."
  }, {
    heading: "development-notes-1",
    content: "**Chroma keying during live game streaming**: The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game."
  }, {
    heading: "prerequisites-2",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-alpha-transparency-2",
    content: "Sample code is currently available for the Android, Unity, and React Native platforms only. If your target platform is different, please refer to the code samples on the Android page and implement similar logic for your platform using the API reference."
  }, {
    heading: "development-notes-2",
    content: "Implement the transparency properties of the app window yourself and handle the transparency relationship when multiple windows are stacked on top of each other (achieved by adjusting the `zOrder` of the window)."
  }, {
    heading: "development-notes-2",
    content: "For iOS, set `opaque` to `false` in the view's `layer` property when setting up the view."
  }, {
    heading: "development-notes-2",
    content: "For macOS, You don't need to additionally set the transparency properties of the window. Follow the settings described for iOS."
  }, {
    heading: "development-notes-2",
    content: "Consider the following sample use-cases:"
  }, {
    heading: "development-notes-2",
    content: "**Broadcaster background replacement**: The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions."
  }, {
    heading: "development-notes-2",
    content: "**Animated virtual gifts**: Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged."
  }, {
    heading: "development-notes-2",
    content: "**Chroma keying during live game streaming**: The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game."
  }, {
    heading: "prerequisites-3",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-alpha-transparency-3",
    content: "Sample code is currently available for the Android, Unity, and React Native platforms only. If your target platform is different, please refer to the code samples on the Android page and implement similar logic for your platform using the API reference."
  }, {
    heading: "development-notes-3",
    content: "Implement the transparency properties of the app window yourself and handle the transparency relationship when multiple windows are stacked on top of each other (achieved by adjusting the `zOrder` of the window)."
  }, {
    heading: "development-notes-3",
    content: "For Windows, create a separate window using `CreateWindowEx` when creating the project and set the `High Transparency` property. If the target window is a child window, you need to additionally specify the `WS_POPUP` property."
  }, {
    heading: "development-notes-3",
    content: "Consider the following sample use-cases:"
  }, {
    heading: "development-notes-3",
    content: "**Broadcaster background replacement**: The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions."
  }, {
    heading: "development-notes-3",
    content: "**Animated virtual gifts**: Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged."
  }, {
    heading: "development-notes-3",
    content: "**Chroma keying during live game streaming**: The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game."
  }, {
    heading: "prerequisites-4",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-alpha-transparency-4",
    content: "Choose one of the following methods to implement the Alpha transparency effect based on your specific business use-case."
  }, {
    heading: "implement-alpha-transparency-4",
    content: "When using the SDK to capture video frames, you can achieve the Alpha transparency effect in the following ways:"
  }, {
    heading: "implement-alpha-transparency-4",
    content: "**Alpha transparency use-case**"
  }, {
    heading: "enable-virtual-background",
    content: "Call `enableVirtualBackground` on the host to enable the background segmentation algorithm and get the alpha data of the portrait area. Set the following parameters:"
  }, {
    heading: "enable-virtual-background",
    content: "`enabled`: Set to `true` to enable virtual background."
  }, {
    heading: "enable-virtual-background",
    content: "`background_source_type` in `backgroundSource`: Set to `BackgroundNone`. This separates the portrait and background and the background is processed as Alpha data."
  }, {
    heading: "set-video-encoding-properties",
    content: "Call `setVideoEncoderConfiguration` on the host to set the video encoding properties. Set `encodeAlpha` to `true` to encode the alpha data and send to the remote end."
  }, {
    heading: "enable-alpha-rendering",
    content: "Use the `RtcSurfaceView` component to create local and remote views."
  }, {
    heading: "enable-alpha-rendering",
    content: "In the `canvas` parameter of the `RtcRenderViewProps` property, set `enableAlphaMask` of the `VideoCanvas` to `true` to enable alpha mask rendering and alpha transparency effects."
  }, {
    heading: "enable-alpha-rendering",
    content: "Consider the following sample use-cases:"
  }, {
    heading: "enable-alpha-rendering",
    content: "**Broadcaster background replacement**: The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions."
  }, {
    heading: "enable-alpha-rendering",
    content: "**Animated virtual gifts**: Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged."
  }, {
    heading: "enable-alpha-rendering",
    content: "**Chroma keying during live game streaming**: The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game."
  }, {
    heading: "prerequisites-5",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-alpha-transparency-5",
    content: "Choose one of the following methods to implement the alpha transparency effect based on your specific business use-case."
  }, {
    heading: "custom-video-capture-use-case-1",
    content: "The following figure illustrates the implementation process for this use-case:"
  }, {
    heading: "custom-video-capture-use-case-1",
    content: "**Alpha transparency custom video capture use-case**"
  }, {
    heading: "custom-video-capture-use-case-1",
    content: "Agora provides the following options to push self-captured video frames with alpha information to the SDK for publishing to the channel. Choose the method that best fits your needs."
  }, {
    heading: "custom-video-capture-use-case-1",
    content: "Due to limitations of the Unity SDK, it is currently not possible to locally preview the custom captured video streams to be pushed through the `VideoSurfaceYUVA` component. You must view the effects of the push streams on the receiving end."
  }, {
    heading: "set-alpha-information-for-video-frames",
    content: "Refer to the following steps to process the self-captured video data, push the self-captured video stream within the channel, and set the alpha information for each frame individually to realize dynamic visual effects. The following sample code uses the following picture as an example:"
  }, {
    heading: "set-alpha-information-for-video-frames",
    content: "Process texture data. Extract and convert the color data of the `Texture2D` object into two byte arrays, one containing the RGBA data and the other containing the alpha channel data for subsequent processing and transmission."
  }, {
    heading: "set-alpha-information-for-video-frames",
    content: "Configure the video encoding parameters to send alpha data to the remote end. Call `SetVideoEncoderConfiguration` to set the video encoding properties and set `encodeAlpha` to `true` to encode and send alpha data to the remote end."
  }, {
    heading: "set-alpha-information-for-video-frames",
    content: "Create a video track for posting custom captured video to the channel. Call `CreateCustomVideoTrack` to create a custom video track."
  }, {
    heading: "set-alpha-information-for-video-frames",
    content: "Call `JoinChannel`\\[2/2] to join the channel and set the channel media options:"
  }, {
    heading: "set-alpha-information-for-video-frames",
    content: "Set `customVideoTrackId` to the video track ID obtained using `CreateCustomVideoTrack`."
  }, {
    heading: "set-alpha-information-for-video-frames",
    content: "Set `publishCameraTrack` to `false` to stop publishing the video stream captured by the camera."
  }, {
    heading: "set-alpha-information-for-video-frames",
    content: "Set `publishCustomVideoTrack` to true to publish the custom captured video stream."
  }, {
    heading: "set-alpha-information-for-video-frames",
    content: "Refer to the following sample code:"
  }, {
    heading: "set-alpha-information-for-video-frames",
    content: "Push a custom captured video stream to the SDK. Call the `PushVideoFrame` method to push the video frame and set the alpha data for the video frame. Set the alpha channel data for the video frame by setting the `alphaBuffer` or `fillAlphaBuffer` parameter."
  }, {
    heading: "set-alpha-information-for-video-frames",
    content: "`alphaBuffer`: Alpha channel data. This data is consistent with the size of the video frame, and each pixel point takes the value in the range of \\[0,255], where 0 represents the background; 255 represents the foreground (portrait)."
  }, {
    heading: "set-alpha-information-for-video-frames",
    content: "`fillAlphaBuffer`: When set to true, the SDK can extracts and fills the alpha channel data automatically, and you don't need to additionally set an `alphaBuffer`. `fillAlphaBuffer` parameter currently only supports video data in BGRA or RGBA format."
  }, {
    heading: "set-alpha-information-for-video-frames",
    content: "Make sure the `alphaBuffer` is exactly the same size (width × height) as the video frame, otherwise the game may crash."
  }, {
    heading: "merge-video-data-and-alpha-data",
    content: "Refer to the following steps to merge the captured video data with the alpha channel data and push the combined video data to the SDK for publishing to the channel. The following steps show how to integrate the alpha channel data with the video data."
  }, {
    heading: "merge-video-data-and-alpha-data",
    content: "Merge the captured video data with the alpha data."
  }, {
    heading: "merge-video-data-and-alpha-data",
    content: "Configure the video encoding parameters to send alpha data to the remote end. Call `SetVideoEncoderConfiguration` to set the video encoding properties and set `encodeAlpha` to `true` to encode and send alpha data to the remote end."
  }, {
    heading: "merge-video-data-and-alpha-data",
    content: "Create a video track for posting custom captured video to the channel. Call `CreateCustomVideoTrack` to create a custom video track."
  }, {
    heading: "merge-video-data-and-alpha-data",
    content: "Call `JoinChannel`\\[2/2] to join the channel and set the channel media options:"
  }, {
    heading: "merge-video-data-and-alpha-data",
    content: "Set `customVideoTrackId` to the video track ID obtained by calling `CreateCustomVideoTrack`."
  }, {
    heading: "merge-video-data-and-alpha-data",
    content: "Set `publishCameraTrack` to `false` to stop publishing the video stream captured by the camera."
  }, {
    heading: "merge-video-data-and-alpha-data",
    content: "Set `publishCustomVideoTrack` to `true` to publish a custom captured video stream."
  }, {
    heading: "merge-video-data-and-alpha-data",
    content: "The sample code is as follows:"
  }, {
    heading: "merge-video-data-and-alpha-data",
    content: "Push the merged video frame to the SDK. Call the `PushVideoFrame` method and set the relative position of the alpha data and the video frame with the `alphaStitchMode` parameter."
  }, {
    heading: "merge-video-data-and-alpha-data",
    content: "Refer to the following sample code:"
  }, {
    heading: "sdk-capture-use-case-1",
    content: "The following figure illustrates the implementation process for this use-case:"
  }, {
    heading: "sdk-capture-use-case-1",
    content: "**Alpha transparency SDK capture use-case**"
  }, {
    heading: "sdk-capture-use-case-1",
    content: "Take the following steps to implement this logic:"
  }, {
    heading: "sdk-capture-use-case-1",
    content: "When rendering local video using the `VideoSurface` component, call `SetLocalVideoDataSourcePosition` to get the position of the video frame. Setting the position to `POSITION_POST_CAPTURER` means getting the video frame after the local video capture is done."
  }, {
    heading: "sdk-capture-use-case-1",
    content: "Call `EnableVirtualBackground` on the host to enable the background segmentation algorithm and get the alpha data of the portrait area. The recommended parameters are as follows:"
  }, {
    heading: "sdk-capture-use-case-1",
    content: "`enabled`: Set to `true` to enable virtual background."
  }, {
    heading: "sdk-capture-use-case-1",
    content: "`backgroundSourceType`: Set to `BACKGROUND_NONE` to split the portrait and background and process the background as an alpha channel."
  }, {
    heading: "sdk-capture-use-case-1",
    content: "Call `SetVideoEncoderConfiguration` to set `encodeAlpha` to `true`. This encodes the alpha information and sends it to the remote end. Call `JoinChannel`\\[2/2] to join the channel."
  }, {
    heading: "sdk-capture-use-case-1",
    content: "Render views with alpha transparency effects using the `VideoSurfaceYUVA` component."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-alpha-transparency",
    content: "Implement alpha transparency"
  }, {
    id: "custom-video-capture-use-case",
    content: "Custom video capture use-case"
  }, {
    id: "sdk-capture-use-case",
    content: "SDK Capture use-case"
  }, {
    id: "raw-video-data-use-case",
    content: "Raw video data use-case"
  }, {
    id: "development-notes",
    content: "Development notes"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "implement-alpha-transparency-1",
    content: "Implement alpha transparency"
  }, {
    id: "development-notes-1",
    content: "Development notes"
  }, {
    id: "prerequisites-2",
    content: "Prerequisites"
  }, {
    id: "implement-alpha-transparency-2",
    content: "Implement alpha transparency"
  }, {
    id: "development-notes-2",
    content: "Development notes"
  }, {
    id: "prerequisites-3",
    content: "Prerequisites"
  }, {
    id: "implement-alpha-transparency-3",
    content: "Implement alpha transparency"
  }, {
    id: "development-notes-3",
    content: "Development notes"
  }, {
    id: "prerequisites-4",
    content: "Prerequisites"
  }, {
    id: "implement-alpha-transparency-4",
    content: "Implement alpha transparency"
  }, {
    id: "enable-virtual-background",
    content: "Enable virtual background"
  }, {
    id: "set-video-encoding-properties",
    content: "Set video encoding properties"
  }, {
    id: "enable-alpha-rendering",
    content: "Enable Alpha rendering"
  }, {
    id: "prerequisites-5",
    content: "Prerequisites"
  }, {
    id: "implement-alpha-transparency-5",
    content: "Implement alpha transparency"
  }, {
    id: "custom-video-capture-use-case-1",
    content: "Custom video capture use-case"
  }, {
    id: "set-alpha-information-for-video-frames",
    content: "Set alpha information for video frames"
  }, {
    id: "merge-video-data-and-alpha-data",
    content: "Merge video data and alpha data"
  }, {
    id: "sdk-capture-use-case-1",
    content: "SDK Capture use-case"
  }]
};
export let toc = [{
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-alpha-transparency",
  title: _jsx(_Fragment, {
    children: "Implement alpha transparency"
  })
}, {
  depth: 3,
  url: "#custom-video-capture-use-case",
  title: _jsx(_Fragment, {
    children: "Custom video capture use-case"
  })
}, {
  depth: 3,
  url: "#sdk-capture-use-case",
  title: _jsx(_Fragment, {
    children: "SDK Capture use-case"
  })
}, {
  depth: 3,
  url: "#raw-video-data-use-case",
  title: _jsx(_Fragment, {
    children: "Raw video data use-case"
  })
}, {
  depth: 3,
  url: "#development-notes",
  title: _jsx(_Fragment, {
    children: "Development notes"
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
  url: "#prerequisites-1",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-alpha-transparency-1",
  title: _jsx(_Fragment, {
    children: "Implement alpha transparency"
  })
}, {
  depth: 3,
  url: "#development-notes-1",
  title: _jsx(_Fragment, {
    children: "Development notes"
  })
}, {
  depth: 2,
  url: "#prerequisites-2",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-alpha-transparency-2",
  title: _jsx(_Fragment, {
    children: "Implement alpha transparency"
  })
}, {
  depth: 3,
  url: "#development-notes-2",
  title: _jsx(_Fragment, {
    children: "Development notes"
  })
}, {
  depth: 2,
  url: "#prerequisites-3",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-alpha-transparency-3",
  title: _jsx(_Fragment, {
    children: "Implement alpha transparency"
  })
}, {
  depth: 3,
  url: "#development-notes-3",
  title: _jsx(_Fragment, {
    children: "Development notes"
  })
}, {
  depth: 2,
  url: "#prerequisites-4",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-alpha-transparency-4",
  title: _jsx(_Fragment, {
    children: "Implement alpha transparency"
  })
}, {
  depth: 3,
  url: "#enable-virtual-background",
  title: _jsx(_Fragment, {
    children: "Enable virtual background"
  })
}, {
  depth: 3,
  url: "#set-video-encoding-properties",
  title: _jsx(_Fragment, {
    children: "Set video encoding properties"
  })
}, {
  depth: 3,
  url: "#enable-alpha-rendering",
  title: _jsx(_Fragment, {
    children: "Enable Alpha rendering"
  })
}, {
  depth: 2,
  url: "#prerequisites-5",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-alpha-transparency-5",
  title: _jsx(_Fragment, {
    children: "Implement alpha transparency"
  })
}, {
  depth: 3,
  url: "#custom-video-capture-use-case-1",
  title: _jsx(_Fragment, {
    children: "Custom video capture use-case"
  })
}, {
  depth: 4,
  url: "#set-alpha-information-for-video-frames",
  title: _jsx(_Fragment, {
    children: "Set alpha information for video frames"
  })
}, {
  depth: 4,
  url: "#merge-video-data-and-alpha-data",
  title: _jsx(_Fragment, {
    children: "Merge video data and alpha data"
  })
}, {
  depth: 3,
  url: "#sdk-capture-use-case-1",
  title: _jsx(_Fragment, {
    children: "SDK Capture use-case"
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
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CodeBlockTab)
    _missingMdxReference("CodeBlockTab", true);
  if (!CodeBlockTabs)
    _missingMdxReference("CodeBlockTabs", true);
  if (!CodeBlockTabsList)
    _missingMdxReference("CodeBlockTabsList", true);
  if (!CodeBlockTabsTrigger)
    _missingMdxReference("CodeBlockTabsTrigger", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "In various real-time video interaction use-cases, segmenting the host's background and applying transparent special effects can make the interaction more engaging, enhance immersion, and improve the overall interactive experience."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "android",
      platforms: '["android","ios","macos","windows","react-native","unity"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "android"
        }), _jsx(_components.p, {
          children: "Consider the following sample use-cases:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Broadcaster background replacement"
              }), ": The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Animated virtual gifts"
              }), ": Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Chroma keying during live game streaming"
              }), ": The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/alpha-transparency-demo.png",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implement-alpha-transparency",
          children: "Implement alpha transparency"
        }), _jsx(_components.p, {
          children: "Choose one of the following methods to implement the Alpha transparency effect based on your specific business use-case."
        }), _jsx(_components.h3, {
          id: "custom-video-capture-use-case",
          children: "Custom video capture use-case"
        }), _jsx(_components.p, {
          children: "The implementation process for this use-case is illustrated in the figure below:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Alpha transparency custom video capture use-case"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/alpha-transparency-scenario-1.svg",
            alt: "Custom Video Capture Process 1"
          })
        }), _jsx(_components.p, {
          children: "Take the following steps to implement this logic:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Process the captured video frames and generate Alpha data. You can choose from the following methods:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Method 1"
                  }), ": Call the ", _jsx(_components.code, {
                    children: "pushExternalVideoFrame"
                  }), "[2/2] method and set the ", _jsx(_components.code, {
                    children: "alphaBuffer"
                  }), " parameter to specify Alpha channel data for the video frames. This data matches the size of the video frames, with each pixel value ranging from 0 to 255, where 0 represents the background and 255 represents the foreground."]
                }), `
`, _jsx(CalloutContainer, {
                  type: "warning",
                  children: _jsx(CalloutDescription, {
                    children: _jsxs(_components.p, {
                      children: ["Ensure that ", _jsx(_components.code, {
                        children: "alphaBuffer"
                      }), " is exactly the same size as the video frame (width × height), otherwise the app may crash."]
                    })
                  })
                }), `
`, _jsxs(CodeBlockTabs, {
                  defaultValue: "java",
                  children: [_jsxs(CodeBlockTabsList, {
                    children: [_jsx(CodeBlockTabsTrigger, {
                      value: "java",
                      children: "Java"
                    }), _jsx(CodeBlockTabsTrigger, {
                      value: "kotlin",
                      children: "Kotlin"
                    })]
                  }), _jsx(CodeBlockTab, {
                    value: "java",
                    children: _jsx(_Fragment, {
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
                              children: "JavaI420Buffer javaI420Buffer "
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
                              children: " JavaI420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "wrap"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(width, height, dataY, width, dataU, strideUV, dataV, strideUV, "
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
                              children: ");"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "   VideoFrame frame "
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
                              children: " VideoFrame"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(javaI420Buffer, "
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
                              children: ", timestamp);"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "   ByteBuffer alphaBuffer "
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
                              children: " ByteBuffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "allocateDirect"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(width "
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
                              children: " height);"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "   frame."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "fillAlphaData"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(alphaBuffer);"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "   rtcEngine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "pushExternalVideoFrame"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(frame);"
                            })]
                          })]
                        })
                      })
                    })
                  }), _jsx(CodeBlockTab, {
                    value: "kotlin",
                    children: _jsx(_Fragment, {
                      children: _jsx(_components.pre, {
                        className: "shiki shiki-themes github-light github-dark",
                        style: {
                          "--shiki-light": "#24292e",
                          "--shiki-dark": "#e1e4e8",
                          "--shiki-light-bg": "#fff",
                          "--shiki-dark-bg": "#24292e"
                        },
                        tabIndex: "0",
                        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                        children: _jsxs(_components.code, {
                          children: [_jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "val"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " javaI420Buffer "
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
                              children: " JavaI420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "wrap"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(width, height, dataY, width, dataU, strideUV, dataV, strideUV, "
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
                              children: ")"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "   val"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " frame "
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
                              children: " VideoFrame"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(javaI420Buffer, "
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
                              children: ", timestamp)"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "   val"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " alphaBuffer "
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
                              children: " ByteBuffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "allocateDirect"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(width "
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
                              children: " height)"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "   frame."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "fillAlphaData"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(alphaBuffer)"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "   rtcEngine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "pushExternalVideoFrame"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(frame)"
                            })]
                          })]
                        })
                      })
                    })
                  })]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Method 2"
                  }), ": Call the ", _jsx(_components.code, {
                    children: "pushExternalVideoFrame"
                  }), " method and use the ", _jsx(_components.code, {
                    children: "setAlphaStitchMode"
                  }), " method in the ", _jsx(_components.code, {
                    children: "VideoFrame"
                  }), " class to set the Alpha stitching mode. Construct a ", _jsx(_components.code, {
                    children: "VideoFrame"
                  }), " with the stitched Alpha data."]
                }), `
`, _jsxs(CodeBlockTabs, {
                  defaultValue: "java",
                  children: [_jsxs(CodeBlockTabsList, {
                    children: [_jsx(CodeBlockTabsTrigger, {
                      value: "java",
                      children: "Java"
                    }), _jsx(CodeBlockTabsTrigger, {
                      value: "kotlin",
                      children: "Kotlin"
                    })]
                  }), _jsx(CodeBlockTab, {
                    value: "java",
                    children: _jsx(_Fragment, {
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
                              children: "JavaI420Buffer javaI420Buffer "
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
                              children: " JavaI420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "wrap"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(width, height, dataY, width, dataU, strideUV, dataV, strideUV, "
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
                              children: ");"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "   VideoFrame frame "
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
                              children: " VideoFrame"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(javaI420Buffer, "
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
                              children: ", timestamp);"
                            })]
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "   // Set the Alpha stitching mode, in the example below, Alpha is set to be below the video image"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "   frame."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "setAlphaStitchMode"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(Constants.VIDEO_ALPHA_STITCH_BELOW);"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "   rtcEngine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "pushExternalVideoFrame"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(frame);"
                            })]
                          })]
                        })
                      })
                    })
                  }), _jsx(CodeBlockTab, {
                    value: "kotlin",
                    children: _jsx(_Fragment, {
                      children: _jsx(_components.pre, {
                        className: "shiki shiki-themes github-light github-dark",
                        style: {
                          "--shiki-light": "#24292e",
                          "--shiki-dark": "#e1e4e8",
                          "--shiki-light-bg": "#fff",
                          "--shiki-dark-bg": "#24292e"
                        },
                        tabIndex: "0",
                        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                        children: _jsxs(_components.code, {
                          children: [_jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "val"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " javaI420Buffer "
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
                              children: " JavaI420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "wrap"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(width, height, dataY, width, dataU, strideUV, dataV, strideUV, "
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
                              children: ")"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "   val"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " frame "
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
                              children: " VideoFrame"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(javaI420Buffer, "
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
                              children: ", timestamp)"
                            })]
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "   // Set the Alpha stitching mode, in the example below, Alpha is set to be below the video image"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "   frame."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "setAlphaStitchMode"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(Constants.VIDEO_ALPHA_STITCH_BELOW)"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "   rtcEngine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "pushExternalVideoFrame"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(frame)"
                            })]
                          })]
                        })
                      })
                    })
                  })]
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
              children: "Render the local view and implement the Alpha transparency effect."
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Create a ", _jsx(_components.code, {
                  children: "TextureView"
                }), " object for rendering the local view."]
              }), `
`, _jsxs(_components.li, {
                children: ["Call the ", _jsx(_components.code, {
                  children: "setupLocalVideo"
                }), " method to set the local view:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Set the ", _jsx(_components.code, {
                      children: "enableAlphaMask"
                    }), " parameter to ", _jsx(_components.code, {
                      children: "true"
                    }), " to enable alpha mask rendering."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["Set ", _jsx(_components.code, {
                      children: "TextureView"
                    }), " as the display window for the local video."]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(CodeBlockTabs, {
              defaultValue: "java",
              children: [_jsxs(CodeBlockTabsList, {
                children: [_jsx(CodeBlockTabsTrigger, {
                  value: "java",
                  children: "Java"
                }), _jsx(CodeBlockTabsTrigger, {
                  value: "kotlin",
                  children: "Kotlin"
                })]
              }), _jsx(CodeBlockTab, {
                value: "java",
                children: _jsx(_Fragment, {
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
                          children: "// Alpha data input on the sender side and Alpha transmission is enabled"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    VideoEncoderConfiguration config "
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
                          children: " VideoEncoderConfiguration"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(...);"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // Alpha transfer needs to be enabled when setting encoding parameters."
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    config.advanceOptions.encodeAlpha "
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
                          children: " true"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ";"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    rtcEngine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "setVideoEncoderConfiguration"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(videoEncoderConfiguration);"
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
                          children: "    // Set the view to TextureView"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    TextureView textureView "
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
                          children: "(context);"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // Enable transparent mode, allowing transparent portions in the view background and content"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    textureView."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "setOpaque"
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
                          children: "false"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ");"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    fl_local."
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
                          children: "(textureView, "
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
                          children: " FrameLayout."
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
                          children: "(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));"
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
                          children: "    VideoCanvas local "
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
                          children: "(textureView, RENDER_MODE_FIT, "
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
                          children: ");"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    local.enableAlphaMask "
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
                          children: " true"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ";"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    rtcEngine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "setupLocalVideo"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(local);"
                        })]
                      })]
                    })
                  })
                })
              }), _jsx(CodeBlockTab, {
                value: "kotlin",
                children: _jsx(_Fragment, {
                  children: _jsx(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                      "--shiki-light": "#24292e",
                      "--shiki-dark": "#e1e4e8",
                      "--shiki-light-bg": "#fff",
                      "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Alpha data input on the sender side and Alpha transmission is enabled"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "    val"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " config "
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
                          children: " VideoEncoderConfiguration"
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
                          children: ".."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ".)"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // Alpha transfer needs to be enabled when setting encoding parameters."
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    config.advanceOptions.encodeAlpha "
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
                          children: " true"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    rtcEngine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "setVideoEncoderConfiguration"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(videoEncoderConfiguration)"
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
                          children: "    // Set the view to TextureView"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "    val"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " textureView "
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
                          children: " TextureView"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(context)"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // Enable transparent mode, allowing transparent portions in the view background and content"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    textureView.isOpaque "
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
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    fl_local."
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
                          children: "(textureView, FrameLayout."
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
                          children: "(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT))"
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
                          children: "    val"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " local "
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
                          children: " VideoCanvas"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(textureView, RENDER_MODE_FIT, "
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
                          children: "    local.enableAlphaMask "
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
                          children: " true"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    rtcEngine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "setupLocalVideo"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(local)"
                        })]
                      })]
                    })
                  })
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Render the local view of the remote video stream and implement alpha transparency effects."
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["After receiving the ", _jsx(_components.code, {
                  children: "onUserJoined"
                }), " callback, a ", _jsx(_components.code, {
                  children: "TextureView"
                }), " object is created for rendering the remote view."]
              }), `
`, _jsxs(_components.li, {
                children: ["Call the ", _jsx(_components.code, {
                  children: "setupRemoteVideo"
                }), " method to set the remote view:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Set the ", _jsx(_components.code, {
                      children: "enableAlphaMask"
                    }), " parameter to true to enable alpha mask rendering."]
                  }), `
`, _jsx(_components.li, {
                    children: "Set the display window of the remote video stream in the local video."
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(CodeBlockTabs, {
              defaultValue: "java",
              children: [_jsxs(CodeBlockTabsList, {
                children: [_jsx(CodeBlockTabsTrigger, {
                  value: "java",
                  children: "Java"
                }), _jsx(CodeBlockTabsTrigger, {
                  value: "kotlin",
                  children: "Kotlin"
                })]
              }), _jsx(CodeBlockTab, {
                value: "java",
                children: _jsx(_Fragment, {
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
                          children: "// Enable transparent mode at the receiving end"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    TextureView textureView "
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
                          children: "(context);"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    textureView."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "setOpaque"
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
                          children: "false"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ");"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    fl_remote."
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
                          children: "(textureView, "
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
                          children: " FrameLayout."
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
                          children: "(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));"
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
                          children: "    VideoCanvas remote "
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
                          children: "(textureView, VideoCanvas.RENDER_MODE_FIT, uid);"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    remote.enableAlphaMask "
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
                          children: " true"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ";"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    rtcEngine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "setupRemoteVideo"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(remote);"
                        })]
                      })]
                    })
                  })
                })
              }), _jsx(CodeBlockTab, {
                value: "kotlin",
                children: _jsx(_Fragment, {
                  children: _jsx(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                      "--shiki-light": "#24292e",
                      "--shiki-dark": "#e1e4e8",
                      "--shiki-light-bg": "#fff",
                      "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Enable transparent mode at the receiving end"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "    val"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " textureView "
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
                          children: " TextureView"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(context)"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    textureView.isOpaque "
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
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    fl_remote."
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
                          children: "(textureView, FrameLayout."
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
                          children: "(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT))"
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
                          children: "    val"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " remote "
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
                          children: " VideoCanvas"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(textureView, VideoCanvas.RENDER_MODE_FIT, uid)"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    remote.enableAlphaMask "
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
                          children: " true"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    rtcEngine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "setupRemoteVideo"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(remote)"
                        })]
                      })]
                    })
                  })
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sdk-capture-use-case",
          children: "SDK Capture use-case"
        }), _jsx(_components.p, {
          children: "The implementation process for this use-case is illustrated in the following figure:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Alpha transparency SDK capture use-case"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/alpha-transparency-scenario-2.svg",
            alt: "Custom Video Capture Process 2"
          })
        }), _jsx(_components.p, {
          children: "Take the following steps to implement this logic:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["On the broadcasting end, call the ", _jsx(_components.code, {
                children: "enableVirtualBackground"
              }), " [2/2] method to enable the background segmentation algorithm and obtain the Alpha data for the portrait area. Set the parameters as follows:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "enabled"
                }), ": Set to ", _jsx(_components.code, {
                  children: "true"
                }), " to enable the virtual background."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "backgroundSourceType"
                }), ": Set to ", _jsx(_components.code, {
                  children: "BACKGROUND_NONE"
                }), "(0), to segment the portrait and background, and process the background as Alpha data."]
              }), `
`]
            }), `
`, _jsxs(CodeBlockTabs, {
              defaultValue: "java",
              children: [_jsxs(CodeBlockTabsList, {
                children: [_jsx(CodeBlockTabsTrigger, {
                  value: "java",
                  children: "Java"
                }), _jsx(CodeBlockTabsTrigger, {
                  value: "kotlin",
                  children: "Kotlin"
                })]
              }), _jsx(CodeBlockTab, {
                value: "java",
                children: _jsx(_Fragment, {
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
                          children: "VirtualBackgroundSource virtualBackgroundSource "
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
                          children: " VirtualBackgroundSource"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(...);"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "   virtualBackgroundSource.backgroundSourceType "
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
                          children: " VirtualBackgroundSource.BACKGROUND_NONE; "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Only generate alpha data, no background replacement"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "   SegmentationProperty segmentationProperty "
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
                          children: " SegmentationProperty"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(...);"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "   rtcEngine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "enableVirtualBackground"
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
                          children: "true"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", virtualBackgroundSource, segmentationProperty, sourceType);"
                        })]
                      })]
                    })
                  })
                })
              }), _jsx(CodeBlockTab, {
                value: "kotlin",
                children: _jsx(_Fragment, {
                  children: _jsx(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                      "--shiki-light": "#24292e",
                      "--shiki-dark": "#e1e4e8",
                      "--shiki-light-bg": "#fff",
                      "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "val"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " virtualBackgroundSource "
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
                          children: " VirtualBackgroundSource"
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
                          children: ".."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ".)"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "   virtualBackgroundSource.backgroundSourceType "
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
                          children: " VirtualBackgroundSource.BACKGROUND_NONE "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Only generate alpha data, no background replacement"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "   val"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " segmentationProperty "
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
                          children: " SegmentationProperty"
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
                          children: ".."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ".)"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "   rtcEngine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "enableVirtualBackground"
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
                          children: "true"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", virtualBackgroundSource, segmentationProperty, sourceType)"
                        })]
                      })]
                    })
                  })
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setVideoEncoderConfiguration"
              }), " on the broadcasting end to set the video encoding property and set ", _jsx(_components.code, {
                children: "encodeAlpha"
              }), " to ", _jsx(_components.code, {
                children: "true"
              }), ". Then the Alpha data will be encoded and sent to the remote end."]
            }), `
`, _jsxs(CodeBlockTabs, {
              defaultValue: "java",
              children: [_jsxs(CodeBlockTabsList, {
                children: [_jsx(CodeBlockTabsTrigger, {
                  value: "java",
                  children: "Java"
                }), _jsx(CodeBlockTabsTrigger, {
                  value: "kotlin",
                  children: "Kotlin"
                })]
              }), _jsx(CodeBlockTab, {
                value: "java",
                children: _jsx(_Fragment, {
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
                          children: "VideoEncoderConfiguration videoEncoderConfiguration "
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
                          children: " VideoEncoderConfiguration"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(...);"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "  videoEncoderConfiguration.advanceOptions "
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
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " VideoEncoderConfiguration."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "AdvanceOptions"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(...);"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "  videoEncoderConfiguration.advanceOptions.encodeAlpha "
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
                          children: " true"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ";"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "  rtcEngine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "setVideoEncoderConfiguration"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(videoEncoderConfiguration);"
                        })]
                      })]
                    })
                  })
                })
              }), _jsx(CodeBlockTab, {
                value: "kotlin",
                children: _jsx(_Fragment, {
                  children: _jsx(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                      "--shiki-light": "#24292e",
                      "--shiki-dark": "#e1e4e8",
                      "--shiki-light-bg": "#fff",
                      "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "val"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " videoEncoderConfiguration "
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
                          children: " VideoEncoderConfiguration"
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
                          children: ".."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ".)"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "  videoEncoderConfiguration.advanceOptions "
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
                          children: " VideoEncoderConfiguration."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "AdvanceOptions"
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
                          children: ".."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ".)"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "  videoEncoderConfiguration.advanceOptions.encodeAlpha "
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
                          children: " true"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "  rtcEngine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "setVideoEncoderConfiguration"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(videoEncoderConfiguration)"
                        })]
                      })]
                    })
                  })
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Render the local and remote views and implement the Alpha transparency effect. See the steps in the ", _jsx(_components.a, {
                href: "#custom-video-capture-use-case",
                children: "Custom Video Capture use-case"
              }), " for details."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "raw-video-data-use-case",
          children: "Raw video data use-case"
        }), _jsx(_components.p, {
          children: "The implementation process for this use-case is illustrated in the following figure:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Alpha transparency raw video data use-case"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/alpha-transparency-scenario-3.svg",
            alt: "Custom Video Capture Process 3"
          })
        }), _jsx(_components.p, {
          children: "Take the following steps to implement this logic:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call the ", _jsx(_components.code, {
                children: "registerVideoFrameObserver"
              }), " method to register a raw video frame observer and implement the corresponding callbacks as required."]
            }), `
`, _jsxs(CodeBlockTabs, {
              defaultValue: "java",
              children: [_jsxs(CodeBlockTabsList, {
                children: [_jsx(CodeBlockTabsTrigger, {
                  value: "java",
                  children: "Java"
                }), _jsx(CodeBlockTabsTrigger, {
                  value: "kotlin",
                  children: "Kotlin"
                })]
              }), _jsx(CodeBlockTab, {
                value: "java",
                children: _jsx(_Fragment, {
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
                          children: "// Register IVideoFrameObserver"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "  public"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " class"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " MyVideoFrameObserver"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " implements"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " IVideoFrameObserver"
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
                          children: " boolean"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " onRenderVideoFrame"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(String "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#E36209",
                            "--shiki-dark": "#FFAB70"
                          },
                          children: "channelId"
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
                          children: "int"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#E36209",
                            "--shiki-dark": "#FFAB70"
                          },
                          children: " uId"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", VideoFrame "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#E36209",
                            "--shiki-dark": "#FFAB70"
                          },
                          children: "videoFrame"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ") {"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "      // ..."
                        })
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
                          children: " false"
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
                          children: " boolean"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " onCaptureVideoFrame"
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
                          children: "int"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#E36209",
                            "--shiki-dark": "#FFAB70"
                          },
                          children: " type"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", VideoFrame "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#E36209",
                            "--shiki-dark": "#FFAB70"
                          },
                          children: "videoFrame"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ") {"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "      // ..."
                        })
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
                          children: " false"
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
                          children: " boolean"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " onPreEncodeVideoFrame"
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
                          children: "int"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#E36209",
                            "--shiki-dark": "#FFAB70"
                          },
                          children: " type"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", VideoFrame "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#E36209",
                            "--shiki-dark": "#FFAB70"
                          },
                          children: "videoFrame"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ") {"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "      // ..."
                        })
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
                          children: " false"
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
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "  MyVideoFrameObserver observer "
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
                          children: " MyVideoFrameObserver"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "();"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "  rtcEngine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "registerVideoFrameObserver"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(observer);"
                        })]
                      })]
                    })
                  })
                })
              }), _jsx(CodeBlockTab, {
                value: "kotlin",
                children: _jsx(_Fragment, {
                  children: _jsx(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                      "--shiki-light": "#24292e",
                      "--shiki-dark": "#e1e4e8",
                      "--shiki-light-bg": "#fff",
                      "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Register IVideoFrameObserver"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "  class"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " MyVideoFrameObserver"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " : "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "IVideoFrameObserver"
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
                          children: "    override"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " fun"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " onRenderVideoFrame"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(channelId: "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "String"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", uId: "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "Int"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", videoFrame: "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "VideoFrame"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "): "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "Boolean"
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
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "      // ..."
                        })
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
                          children: " false"
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
                        className: "line"
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "    override"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " fun"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " onCaptureVideoFrame"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(type: "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "Int"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", videoFrame: "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "VideoFrame"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "): "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "Boolean"
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
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "      // ..."
                        })
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
                          children: " false"
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
                        className: "line"
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "    override"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " fun"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " onPreEncodeVideoFrame"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(type: "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "Int"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", videoFrame: "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "VideoFrame"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "): "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "Boolean"
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
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "      // ..."
                        })
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
                          children: " false"
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
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "  val"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " observer "
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
                          children: " MyVideoFrameObserver"
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
                          children: "  rtcEngine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "registerVideoFrameObserver"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(observer)"
                        })]
                      })]
                    })
                  })
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Use the ", _jsx(_components.code, {
                children: "onCaptureVideoFrame"
              }), " callback to obtain the captured video data and pre-process it as needed. You can modify the Alpha data or directly add Alpha data."]
            }), `
`, _jsxs(CodeBlockTabs, {
              defaultValue: "java",
              children: [_jsxs(CodeBlockTabsList, {
                children: [_jsx(CodeBlockTabsTrigger, {
                  value: "java",
                  children: "Java"
                }), _jsx(CodeBlockTabsTrigger, {
                  value: "kotlin",
                  children: "Kotlin"
                })]
              }), _jsx(CodeBlockTab, {
                value: "java",
                children: _jsx(_Fragment, {
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
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "public"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " boolean"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " onCaptureVideoFrame"
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
                          children: "int"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " type, VideoFrame videoFrame) {"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // Modify Alpha data or directly add Alpha data"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    ByteBuffer alphaBuffer "
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
                          children: " videoFrame."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "getAlphaBuffer"
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
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // ..."
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    videoFrame."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "fillAlphaData"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(byteBuffer);"
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
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: " false"
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
                          children: "  }"
                        })
                      })]
                    })
                  })
                })
              }), _jsx(CodeBlockTab, {
                value: "kotlin",
                children: _jsx(_Fragment, {
                  children: _jsx(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                      "--shiki-light": "#24292e",
                      "--shiki-dark": "#e1e4e8",
                      "--shiki-light-bg": "#fff",
                      "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "override"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " fun"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " onCaptureVideoFrame"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(type: "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "Int"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", videoFrame: "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "VideoFrame"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "): "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "Boolean"
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
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // Modify Alpha data or directly add Alpha data"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "    val"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " alphaBuffer "
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
                          children: " videoFrame.alphaBuffer"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // ..."
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    videoFrame."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "fillAlphaData"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(byteBuffer)"
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
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: " false"
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
                      })]
                    })
                  })
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Use the ", _jsx(_components.code, {
                children: "onPreEncodeVideoFrame"
              }), " callback to obtain the local video data before encoding, and modify or directly add Alpha data as needed."]
            }), `
`, _jsxs(CodeBlockTabs, {
              defaultValue: "java",
              children: [_jsxs(CodeBlockTabsList, {
                children: [_jsx(CodeBlockTabsTrigger, {
                  value: "java",
                  children: "Java"
                }), _jsx(CodeBlockTabsTrigger, {
                  value: "kotlin",
                  children: "Kotlin"
                })]
              }), _jsx(CodeBlockTab, {
                value: "java",
                children: _jsx(_Fragment, {
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
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "public"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " boolean"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " onPreEncodeVideoFrame"
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
                          children: "int"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " type, VideoFrame videoFrame) {"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // Modify Alpha data or directly add Alpha data"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    ByteBuffer alphaBuffer "
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
                          children: " videoFrame."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "getAlphaBuffer"
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
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // ..."
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    videoFrame."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "fillAlphaData"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(byteBuffer);"
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
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: " false"
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
                          children: "  }"
                        })
                      })]
                    })
                  })
                })
              }), _jsx(CodeBlockTab, {
                value: "kotlin",
                children: _jsx(_Fragment, {
                  children: _jsx(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                      "--shiki-light": "#24292e",
                      "--shiki-dark": "#e1e4e8",
                      "--shiki-light-bg": "#fff",
                      "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "override"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " fun"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " onPreEncodeVideoFrame"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(type: "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "Int"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", videoFrame: "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "VideoFrame"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "): "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "Boolean"
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
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // Modify Alpha data or directly add Alpha data"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "    val"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " alphaBuffer "
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
                          children: " videoFrame.alphaBuffer"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // ..."
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    videoFrame."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "fillAlphaData"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(byteBuffer)"
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
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: " false"
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
                      })]
                    })
                  })
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Use the ", _jsx(_components.code, {
                children: "onRenderVideoFrame"
              }), " callback to obtain the remote video data before rendering it locally. Modify the Alpha data, add Alpha data directly, or render the video image yourself based on the obtained Alpha data."]
            }), `
`, _jsxs(CodeBlockTabs, {
              defaultValue: "java",
              children: [_jsxs(CodeBlockTabsList, {
                children: [_jsx(CodeBlockTabsTrigger, {
                  value: "java",
                  children: "Java"
                }), _jsx(CodeBlockTabsTrigger, {
                  value: "kotlin",
                  children: "Kotlin"
                })]
              }), _jsx(CodeBlockTab, {
                value: "java",
                children: _jsx(_Fragment, {
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
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "public"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " boolean"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " onRenderVideoFrame"
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
                          children: "int"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " type, VideoFrame videoFrame) {"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // Modify Alpha data, directly add Alpha data, or render the video image yourself based on the obtained Alpha data"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    ByteBuffer alphaBuffer "
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
                          children: " videoFrame."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "getAlphaBuffer"
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
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // ..."
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    videoFrame."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "fillAlphaData"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(byteBuffer);"
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
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: " false"
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
                          children: "  }"
                        })
                      })]
                    })
                  })
                })
              }), _jsx(CodeBlockTab, {
                value: "kotlin",
                children: _jsx(_Fragment, {
                  children: _jsx(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                      "--shiki-light": "#24292e",
                      "--shiki-dark": "#e1e4e8",
                      "--shiki-light-bg": "#fff",
                      "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "override"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " fun"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " onRenderVideoFrame"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(type: "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "Int"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", videoFrame: "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "VideoFrame"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "): "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "Boolean"
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
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // Modify Alpha data, directly add Alpha data, or render the video image yourself based on the obtained Alpha data"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "    val"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " alphaBuffer "
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
                          children: " videoFrame.alphaBuffer"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // ..."
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "    videoFrame."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "fillAlphaData"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(byteBuffer)"
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
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: " false"
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
                      })]
                    })
                  })
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "development-notes",
          children: "Development notes"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Implement the transparency properties of the app window yourself and handle the transparency relationship when multiple windows are stacked on top of each other (achieved by adjusting the ", _jsx(_components.code, {
                children: "zOrder"
              }), " of the window)."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["On Android, only ", _jsx(_components.code, {
                children: "TextureView"
              }), " and ", _jsx(_components.code, {
                children: "SurfaceView"
              }), " are supported when setting the view due to system limitations."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_videoframe.html",
              children: _jsx(_components.code, {
                children: "VideoFrame"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsxs(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_pushvideoframe4",
              children: [_jsx(_components.code, {
                children: "pushExternalVideoFrame"
              }), " [2/2]"]
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setuplocalvideo",
              children: _jsx(_components.code, {
                children: "setupLocalVideo"
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
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enablevirtualbackground2",
              children: _jsx(_components.code, {
                children: "enableVirtualBackground"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_imediaengine_registervideoframeobserver",
              children: _jsx(_components.code, {
                children: "registerVideoFrameObserver"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_ivideoframeobserver.html#callback_ivideoframeobserver_oncapturevideoframe",
              children: _jsx(_components.code, {
                children: "onCaptureVideoFrame"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_ivideoframeobserver.html#callback_ivideoframeobserver_onpreencodevideoframe",
              children: _jsx(_components.code, {
                children: "onPreEncodeVideoFrame"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_ivideoframeobserver.html#callback_ivideoframeobserver_onrendervideoframe",
              children: _jsx(_components.code, {
                children: "onRenderVideoFrame"
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
          children: "Consider the following sample use-cases:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Broadcaster background replacement"
              }), ": The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Animated virtual gifts"
              }), ": Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Chroma keying during live game streaming"
              }), ": The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/alpha-transparency-demo.png",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-1",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implement-alpha-transparency-1",
          children: "Implement alpha transparency"
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "Sample code is currently available for the Android, Unity, and React Native platforms only. If your target platform is different, please refer to the code samples on the Android page and implement similar logic for your platform using the API reference."
            })
          })
        }), _jsx(_components.h3, {
          id: "development-notes-1",
          children: "Development notes"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Implement the transparency properties of the app window yourself and handle the transparency relationship when multiple windows are stacked on top of each other (achieved by adjusting the ", _jsx(_components.code, {
                children: "zOrder"
              }), " of the window)."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["For iOS, set ", _jsx(_components.code, {
                children: "opaque"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in the view's ", _jsx(_components.code, {
                children: "layer"
              }), " property when setting up the view."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "For macOS, You don't need to additionally set the transparency properties of the window. Follow the settings described for iOS."
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "macos",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "macos"
        }), _jsx(_components.p, {
          children: "Consider the following sample use-cases:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Broadcaster background replacement"
              }), ": The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Animated virtual gifts"
              }), ": Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Chroma keying during live game streaming"
              }), ": The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/alpha-transparency-demo.png",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-2",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implement-alpha-transparency-2",
          children: "Implement alpha transparency"
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "Sample code is currently available for the Android, Unity, and React Native platforms only. If your target platform is different, please refer to the code samples on the Android page and implement similar logic for your platform using the API reference."
            })
          })
        }), _jsx(_components.h3, {
          id: "development-notes-2",
          children: "Development notes"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Implement the transparency properties of the app window yourself and handle the transparency relationship when multiple windows are stacked on top of each other (achieved by adjusting the ", _jsx(_components.code, {
                children: "zOrder"
              }), " of the window)."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["For iOS, set ", _jsx(_components.code, {
                children: "opaque"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in the view's ", _jsx(_components.code, {
                children: "layer"
              }), " property when setting up the view."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "For macOS, You don't need to additionally set the transparency properties of the window. Follow the settings described for iOS."
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "windows",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "windows"
        }), _jsx(_components.p, {
          children: "Consider the following sample use-cases:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Broadcaster background replacement"
              }), ": The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Animated virtual gifts"
              }), ": Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Chroma keying during live game streaming"
              }), ": The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/alpha-transparency-demo.png",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-3",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implement-alpha-transparency-3",
          children: "Implement alpha transparency"
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "Sample code is currently available for the Android, Unity, and React Native platforms only. If your target platform is different, please refer to the code samples on the Android page and implement similar logic for your platform using the API reference."
            })
          })
        }), _jsx(_components.h3, {
          id: "development-notes-3",
          children: "Development notes"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Implement the transparency properties of the app window yourself and handle the transparency relationship when multiple windows are stacked on top of each other (achieved by adjusting the ", _jsx(_components.code, {
                children: "zOrder"
              }), " of the window)."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["For Windows, create a separate window using ", _jsx(_components.code, {
                children: "CreateWindowEx"
              }), " when creating the project and set the ", _jsx(_components.code, {
                children: "High Transparency"
              }), " property. If the target window is a child window, you need to additionally specify the ", _jsx(_components.code, {
                children: "WS_POPUP"
              }), " property."]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "react-native",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "react-native"
        }), _jsx(_components.p, {
          children: "Consider the following sample use-cases:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Broadcaster background replacement"
              }), ": The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Animated virtual gifts"
              }), ": Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Chroma keying during live game streaming"
              }), ": The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/alpha-transparency-demo.png",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-4",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implement-alpha-transparency-4",
          children: "Implement alpha transparency"
        }), _jsx(_components.p, {
          children: "Choose one of the following methods to implement the Alpha transparency effect based on your specific business use-case."
        }), _jsx(_components.p, {
          children: "When using the SDK to capture video frames, you can achieve the Alpha transparency effect in the following ways:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Alpha transparency use-case"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/alpha-transparency-scenario-2.svg",
            alt: "Custom Video Capture Process 1"
          })
        }), _jsx(_components.h3, {
          id: "enable-virtual-background",
          children: "Enable virtual background"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "enableVirtualBackground"
          }), " on the host to enable the background segmentation algorithm and get the alpha data of the portrait area. Set the following parameters:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "enabled"
            }), ": Set to ", _jsx(_components.code, {
              children: "true"
            }), " to enable virtual background."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "background_source_type"
            }), " in ", _jsx(_components.code, {
              children: "backgroundSource"
            }), ": Set to ", _jsx(_components.code, {
              children: "BackgroundNone"
            }), ". This separates the portrait and background and the background is processed as Alpha data."]
          }), `
`]
        }), _jsx(_Fragment, {
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the RtcEngine object"
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
                  children: " rtcEngine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " createAgoraRtcEngine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
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
                  children: "// Enable virtual background"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "enableVirtualBackground"
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
                  children: "  true"
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
                  children: "  backgroundSource,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  { modelType: SegModelType.SegModelAi },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  { background_source_type: BackgroundSourceType.BackgroundNone }"
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
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "set-video-encoding-properties",
          children: "Set video encoding properties"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setVideoEncoderConfiguration"
          }), " on the host to set the video encoding properties. Set ", _jsx(_components.code, {
            children: "encodeAlpha"
          }), " to ", _jsx(_components.code, {
            children: "true"
          }), " to encode the alpha data and send to the remote end."]
        }), _jsx(_Fragment, {
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setVideoEncoderConfiguration"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({advanceOptions: {encodeAlpha: "
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
                  children: "}});"
                })]
              })
            })
          })
        }), _jsx(_components.h3, {
          id: "enable-alpha-rendering",
          children: "Enable Alpha rendering"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Use the ", _jsx(_components.code, {
                children: "RtcSurfaceView"
              }), " component to create local and remote views."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["In the ", _jsx(_components.code, {
                children: "canvas"
              }), " parameter of the ", _jsx(_components.code, {
                children: "RtcRenderViewProps"
              }), " property, set ", _jsx(_components.code, {
                children: "enableAlphaMask"
              }), " of the ", _jsx(_components.code, {
                children: "VideoCanvas"
              }), " to ", _jsx(_components.code, {
                children: "true"
              }), " to enable alpha mask rendering and alpha transparency effects."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: "RtcSurfaceView"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  canvas"
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
                      children: "{{ uid: "
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
                      children: ", enableAlphaMask: "
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
                      children: " }}"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  style"
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
                      children: "{styles.videoView}"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "/>"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unity",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "unity"
        }), _jsx(_components.p, {
          children: "Consider the following sample use-cases:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Broadcaster background replacement"
              }), ": The audience sees the broadcaster's background in the video replaced with a virtual scene, such as a gaming environment, a conference, or a tourist attractions."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Animated virtual gifts"
              }), ": Display dynamic animations with a transparent background to avoid obscuring live content when multiple video streams are merged."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Chroma keying during live game streaming"
              }), ": The audience sees the broadcaster's image cropped and positioned within the local game screen, making it appear as though the broadcaster is part of the game."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/alpha-transparency-demo.png",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-5",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implement-alpha-transparency-5",
          children: "Implement alpha transparency"
        }), _jsx(_components.p, {
          children: "Choose one of the following methods to implement the alpha transparency effect based on your specific business use-case."
        }), _jsx(_components.h3, {
          id: "custom-video-capture-use-case-1",
          children: "Custom video capture use-case"
        }), _jsx(_components.p, {
          children: "The following figure illustrates the implementation process for this use-case:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Alpha transparency custom video capture use-case"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/alpha-transparency-scenario-1.svg",
            alt: "Custom Video Capture Process 1"
          })
        }), _jsx(_components.p, {
          children: "Agora provides the following options to push self-captured video frames with alpha information to the SDK for publishing to the channel. Choose the method that best fits your needs."
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Due to limitations of the Unity SDK, it is currently not possible to locally preview the custom captured video streams to be pushed through the ", _jsx(_components.code, {
                children: "VideoSurfaceYUVA"
              }), " component. You must view the effects of the push streams on the receiving end."]
            })
          })
        }), _jsx(_components.h4, {
          id: "set-alpha-information-for-video-frames",
          children: "Set alpha information for video frames"
        }), _jsx(_components.p, {
          children: "Refer to the following steps to process the self-captured video data, push the self-captured video stream within the channel, and set the alpha information for each frame individually to realize dynamic visual effects. The following sample code uses the following picture as an example:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Process texture data. Extract and convert the color data of the ", _jsx(_components.code, {
                children: "Texture2D"
              }), " object into two byte arrays, one containing the RGBA data and the other containing the alpha channel data for subsequent processing and transmission."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// The Read/Write enable property is set to true and bound to the TextureWithAlphaBuffer variable"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "public"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " Texture2D"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " TextureWithAlphaBuffer"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " byte"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "_rgbaData"
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
                      children: " null"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " byte"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "_alphaData"
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
                      children: " null"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " _textureWidth"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " _textureHeight"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Customized video track IDs"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " uint"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " _videoTrackId"
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
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
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
                      children: "// Convert color data from the Color32 array to rgbaData and alphaData arrays"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
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
                      children: " ConvertColor32"
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
                      children: "Color32"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "colors"
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
                      children: "byte"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "rgbaData"
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
                      children: "byte"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "alphaData"
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
                      children: "{"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " i"
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
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " l"
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
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  foreach"
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
                      children: "var"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " color"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " in"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " colors)"
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    rgbaData[i"
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
                      children: "] "
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
                      children: " color.r;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    rgbaData[i"
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
                      children: "] "
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
                      children: " color.g;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    rgbaData[i"
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
                      children: "] "
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
                      children: " color.b;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    rgbaData[i"
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
                      children: "] "
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
                      children: " color.a;"
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
                      children: "    alphaData[l"
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
                      children: "] "
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
                      children: " color.a;"
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Read the color data from the texture and initialize the _rgbaData and _alphaData arrays, as well as record the width and height of the texture"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "public"
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
                      children: " InitTextureDataWithAlphaBuffer"
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
                      children: "  Color32"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "color32s"
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
                      children: " TextureWithAlphaBuffer."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetPixels32"
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
                      children: "0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  _rgbaData "
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
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " byte"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[color32s.Length "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "*"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 4"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  _alphaData "
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
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " byte"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[color32s.Length];"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  ConvertColor32"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(color32s, _rgbaData, _alphaData);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  _textureWidth "
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
                      children: " TextureWithAlphaBuffer.width;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  _textureHeight "
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
                      children: " TextureWithAlphaBuffer.height;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  this"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".Log."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "UpdateLog"
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
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Format"
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
                      children: '"AlphaBuffer width: {0}, height: {1}"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", _textureWidth, _textureHeight));"
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
              children: ["Configure the video encoding parameters to send alpha data to the remote end. Call ", _jsx(_components.code, {
                children: "SetVideoEncoderConfiguration"
              }), " to set the video encoding properties and set ", _jsx(_components.code, {
                children: "encodeAlpha"
              }), " to ", _jsx(_components.code, {
                children: "true"
              }), " to encode and send alpha data to the remote end."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Create a video track for posting custom captured video to the channel. Call ", _jsx(_components.code, {
                children: "CreateCustomVideoTrack"
              }), " to create a custom video track."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "JoinChannel"
              }), "[2/2] to join the channel and set the channel media options:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Set ", _jsx(_components.code, {
                  children: "customVideoTrackId"
                }), " to the video track ID obtained using ", _jsx(_components.code, {
                  children: "CreateCustomVideoTrack"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["Set ", _jsx(_components.code, {
                  children: "publishCameraTrack"
                }), " to ", _jsx(_components.code, {
                  children: "false"
                }), " to stop publishing the video stream captured by the camera."]
              }), `
`, _jsxs(_components.li, {
                children: ["Set ", _jsx(_components.code, {
                  children: "publishCustomVideoTrack"
                }), " to true to publish the custom captured video stream."]
              }), `
`]
            }), `
`, _jsx(_components.p, {
              children: "Refer to the following sample code:"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "public"
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
                      children: " OnStartPushVideoFrameWithAlphaBuffer"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Read RGBA data and alpha data from an image"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  InitTextureDataWithAlphaBuffer"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Set video encoding properties"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  VideoEncoderConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " videoEncoderConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
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
                      children: " VideoEncoderConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  videoEncoderConfiguration.dimensions.width "
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
                      children: " _textureWidth;  videoEncoderConfiguration.dimensions.height "
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
                      children: " _textureHeight;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Set the Transmit Code alpha Data"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  videoEncoderConfiguration.advanceOptions.encodeAlpha "
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
                      children: " true"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "SetVideoEncoderConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(videoEncoderConfiguration);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Create custom video tracks for posting custom captured video streams within the channel"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  _videoTrackId "
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
                      children: " RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "CreateCustomVideoTrack"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Set Channel Media Options"
                    })
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " options"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
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
                      children: " ChannelMediaOptions"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // No release of video streams captured by cameras"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  options.publishCameraTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "SetValue"
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
                      children: "false"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Publish audio streams captured by microphones"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  options.publishMicrophoneTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "SetValue"
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
                      children: "true"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Publish custom captured video streams"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  options.publishCustomVideoTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "SetValue"
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
                      children: "true"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Set customVideoTrackId to the video track ID you returned when calling the CreateCustomVideoTrack method."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  options.customVideoTrackId."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "SetValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(_videoTrackId);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Join the channel."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "JoinChannel"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(_token, _channelName, "
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
                      children: ", options)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  InvokeRepeating"
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
                      children: '"UpdateForPushVideoFrameWithAlphaBuffer"'
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
                      children: "0.1f"
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
                      children: "0.1f"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
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
              children: ["Push a custom captured video stream to the SDK. Call the ", _jsx(_components.code, {
                children: "PushVideoFrame"
              }), " method to push the video frame and set the alpha data for the video frame. Set the alpha channel data for the video frame by setting the ", _jsx(_components.code, {
                children: "alphaBuffer"
              }), " or ", _jsx(_components.code, {
                children: "fillAlphaBuffer"
              }), " parameter."]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "alphaBuffer"
                  }), ": Alpha channel data. This data is consistent with the size of the video frame, and each pixel point takes the value in the range of [0,255], where 0 represents the background; 255 represents the foreground (portrait)."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "fillAlphaBuffer"
                  }), ": When set to true, the SDK can extracts and fills the alpha channel data automatically, and you don't need to additionally set an ", _jsx(_components.code, {
                    children: "alphaBuffer"
                  }), ". ", _jsx(_components.code, {
                    children: "fillAlphaBuffer"
                  }), " parameter currently only supports video data in BGRA or RGBA format."]
                }), `
`]
              }), `
`]
            }), `
`, _jsx(CalloutContainer, {
              type: "warning",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Make sure the ", _jsx(_components.code, {
                    children: "alphaBuffer"
                  }), " is exactly the same size (width × height) as the video frame, otherwise the game may crash."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "public"
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
                      children: " UpdateForPushVideoFrameWithAlphaBuffer"
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
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  var"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " timetick"
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
                      children: " System.DateTime.Now.Ticks "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "/"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 10000"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  ExternalVideoFrame"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " externalVideoFrame"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
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
                      children: " ExternalVideoFrame"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Video buffer type is raw data"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.type "
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
                      children: " VIDEO_BUFFER_TYPE.VIDEO_BUFFER_RAW_DATA;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Video pixels in RGBA format"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.format "
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
                      children: " VIDEO_PIXEL_FORMAT.VIDEO_PIXEL_RGBA;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.buffer "
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
                      children: " _rgbaData;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.alphaStitchMode "
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
                      children: " ALPHA_STITCH_MODE.NO_ALPHA_STITCH"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.alphaBuffer "
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
                      children: " null"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Extracts and fills alpha channel data, currently only available for video data in RGBA or BGRA format."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.fillAlphaBuffer "
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
                      children: " true"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Extracts and fills alpha channel data, currently only available for video data in RGBA or BGRA format."
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  //externalVideoFrame.alphaBuffer = _alphaData;"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  //externalVideoFrame.fillAlphaBuffer = false"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.stride "
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
                      children: " _textureWidth;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.height "
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
                      children: " _textureHeight;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.rotation "
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
                      children: " 180"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.timestamp "
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
                      children: " timetick;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Push custom captured video to the SDK"
                    })
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " ret"
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
                      children: " RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "PushVideoFrame"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(externalVideoFrame,"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  _videoTrackId);"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  Debug."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Log"
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
                      children: '"PushVideoFrame ret = "'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " +"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ret "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "+"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' " time: "'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " +"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " timetick);"
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
        }), _jsx(_components.h4, {
          id: "merge-video-data-and-alpha-data",
          children: "Merge video data and alpha data"
        }), _jsx(_components.p, {
          children: "Refer to the following steps to merge the captured video data with the alpha channel data and push the combined video data to the SDK for publishing to the channel. The following steps show how to integrate the alpha channel data with the video data."
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Merge the captured video data with the alpha data."
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "public"
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
                      children: " InitTextureDataWithAlphaStitchMode"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Read raw texture data"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  Color32"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "color32s"
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
                      children: " TextureWithAlphaBuffer."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetPixels32"
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
                      children: "0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
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
                      children: "  // Get the width and height of the original texture"
                    })
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " width"
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
                      children: " TextureWithAlphaBuffer.width;"
                    })]
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " height"
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
                      children: " TextureWithAlphaBuffer.height;"
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
                      children: "  // Create a new texture that is twice the height of the original texture."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  TextureWithAlphaStitchMode "
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
                      children: " Texture2D"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(width, height "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "*"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 2"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", TextureFormat.RGBA32, "
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
                      children: ");"
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
                      children: "  // Initialize a new color array to store the spliced pixel data"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  Color32"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "newColor32s"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
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
                      children: " Color32"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[color32s.Length "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "*"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 2"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
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
                      children: "  // Copy the original color data to the top half of the new color array  Array.Copy(color32s, newColor32s, color32s.Length);"
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
                      children: "  // Splice the alpha channel data into the lower half of the new color array"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  for"
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " i"
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
                      children: " color32s.Length; i "
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
                      children: " newColor32s.Length; i"
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
                      children: ")  {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    newColor32s[i].r "
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
                      children: " color32s[i "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "-"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " color32s.Length].a;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    newColor32s[i].g "
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
                      children: " newColor32s[i].r;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    newColor32s[i].b "
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
                      children: " newColor32s[i].r;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    newColor32s[i].a "
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
                      children: " 255"
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
                      children: "  }"
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
                      children: "  // Apply the new color array to the new texture"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  TextureWithAlphaStitchMode."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "SetPixels32"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(newColor32s);  TextureWithAlphaStitchMode."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Apply"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
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
                      children: "  // Convert color data and stores it in _rgbaData and _alphaData arrays"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  _rgbaData "
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
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " byte"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[newColor32s.Length "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "*"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 4"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  _alphaData "
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
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " byte"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[newColor32s.Length];"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  ConvertColor32"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(newColor32s, _rgbaData, _alphaData);"
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
                      children: "  // Update texture width and height"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  _textureWidth "
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
                      children: " TextureWithAlphaStitchMode.width;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  _textureHeight "
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
                      children: " TextureWithAlphaStitchMode.height;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  this"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".Log."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "UpdateLog"
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
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Format"
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
                      children: '"AlphaStitchMode width: {0}, height: {1}"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", _textureWidth, _textureHeight));"
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
                      children: "  // Bind the new texture to the RawImage component in the UI."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  GameObject."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Find"
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
                      children: '"RawImage"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetComponent"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "<"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "RawImage"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ">().texture "
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
                      children: " TextureWithAlphaStitchMode;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  GameObject."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Find"
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
                      children: '"RawImage"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetComponent"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "<"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "RectTransform"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ">().sizeDelta "
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
                      children: " Vector2"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(_textureWidth, _textureHeight);"
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
              children: ["Configure the video encoding parameters to send alpha data to the remote end. Call ", _jsx(_components.code, {
                children: "SetVideoEncoderConfiguration"
              }), " to set the video encoding properties and set ", _jsx(_components.code, {
                children: "encodeAlpha"
              }), " to ", _jsx(_components.code, {
                children: "true"
              }), " to encode and send alpha data to the remote end."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Create a video track for posting custom captured video to the channel. Call ", _jsx(_components.code, {
                children: "CreateCustomVideoTrack"
              }), " to create a custom video track."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "JoinChannel"
              }), "[2/2] to join the channel and set the channel media options:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Set ", _jsx(_components.code, {
                  children: "customVideoTrackId"
                }), " to the video track ID obtained by calling ", _jsx(_components.code, {
                  children: "CreateCustomVideoTrack"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["Set ", _jsx(_components.code, {
                  children: "publishCameraTrack"
                }), " to ", _jsx(_components.code, {
                  children: "false"
                }), " to stop publishing the video stream captured by the camera."]
              }), `
`, _jsxs(_components.li, {
                children: ["Set ", _jsx(_components.code, {
                  children: "publishCustomVideoTrack"
                }), " to ", _jsx(_components.code, {
                  children: "true"
                }), " to publish a custom captured video stream."]
              }), `
`]
            }), `
`, _jsx(_components.p, {
              children: "The sample code is as follows:"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "public"
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
                      children: " OnStartPushVideoFrameWithAlphaStitchMode"
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
                      children: "  InitTextureDataWithAlphaStitchMode"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  VideoEncoderConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " videoEncoderConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
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
                      children: " VideoEncoderConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  videoEncoderConfiguration.dimensions.width "
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
                      children: " _textureWidth;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // The actual height sent is half the height of the stitched texture"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  videoEncoderConfiguration.dimensions.height "
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
                      children: " _textureHeight "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "/"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 2"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Encodes and sends Alpha data to the remote end"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  videoEncoderConfiguration.advanceOptions.encodeAlpha "
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
                      children: " true"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Set video encoding properties"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "SetVideoEncoderConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(videoEncoderConfiguration);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Create custom video tracks for posting custom captured video streams within the channel"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  _videoTrackId "
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
                      children: " RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "CreateCustomVideoTrack"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " options"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
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
                      children: " ChannelMediaOptions"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Set not to publish video streams captured by the camera"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  options.publishCameraTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "SetValue"
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
                      children: "false"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Setting Up Audio Streams for Publishing Microphone Capture"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  options.publishMicrophoneTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "SetValue"
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
                      children: "true"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Setting up to publish custom captured video streams"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  options.publishCustomVideoTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "SetValue"
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
                      children: "true"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Set customVideoTrackId to the video track ID you returned when calling the CreateCustomVideoTrack method."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  options.customVideoTrackId."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "SetValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(_videoTrackId);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Join the channel"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "JoinChannel"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(_token, _channelName, "
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
                      children: ", options);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  InvokeRepeating"
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
                      children: '"UpdateForPushVideoFrameWithAlphaStitchMode"'
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
                      children: "0.1f"
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
                      children: "0.1f"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
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
              children: ["Push the merged video frame to the SDK. Call the ", _jsx(_components.code, {
                children: "PushVideoFrame"
              }), " method and set the relative position of the alpha data and the video frame with the ", _jsx(_components.code, {
                children: "alphaStitchMode"
              }), " parameter."]
            }), `
`, _jsx(_components.p, {
              children: "Refer to the following sample code:"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "public"
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
                      children: " UpdateForPushVideoFrameWithAlphaStitchMode"
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
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  var"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " timetick"
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
                      children: " System.DateTime.Now.Ticks "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "/"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 10000"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  ExternalVideoFrame"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " externalVideoFrame"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
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
                      children: " ExternalVideoFrame"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Video buffer type is raw data"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.type "
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
                      children: " VIDEO_BUFFER_TYPE.VIDEO_BUFFER_RAW_DATA;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Video pixels in RGBA format"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.format "
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
                      children: " VIDEO_PIXEL_FORMAT.VIDEO_PIXEL_RGBA;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.buffer "
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
                      children: " _rgbaData;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // highlight-start"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Since Unity texture coordinates and SDK coordinates are different, if you need to splice the alpha data to the top of the original data, you need to set the splice position to the bottom when the SDK reads it here."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.alphaStitchMode "
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
                      children: " ALPHA_STITCH_MODE.ALPHA_STITCH_BELOW;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // highlight-end"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.stride "
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
                      children: " _textureWidth;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.height "
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
                      children: " _textureHeight;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.rotation "
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
                      children: " 180"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  externalVideoFrame.timestamp "
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
                      children: " timetick;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Push video frames to SDK"
                    })
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " ret"
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
                      children: " RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "PushVideoFrame"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(externalVideoFrame, _videoTrackId);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  Debug."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Log"
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
                      children: '"PushVideoFrame ret = "'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " +"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ret "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "+"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' " time: "'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " +"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " timetick);"
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
        }), _jsx(_components.h3, {
          id: "sdk-capture-use-case-1",
          children: "SDK Capture use-case"
        }), _jsx(_components.p, {
          children: "The following figure illustrates the implementation process for this use-case:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Alpha transparency SDK capture use-case"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/alpha-transparency-scenario-2.svg",
            alt: "Custom Video Capture Process 2"
          })
        }), _jsx(_components.p, {
          children: "Take the following steps to implement this logic:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When rendering local video using the ", _jsx(_components.code, {
                children: "VideoSurface"
              }), " component, call ", _jsx(_components.code, {
                children: "SetLocalVideoDataSourcePosition"
              }), " to get the position of the video frame. Setting the position to ", _jsx(_components.code, {
                children: "POSITION_POST_CAPTURER"
              }), " means getting the video frame after the local video capture is done."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the local video frame position to POSITION_POST_CAPTURER"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "SetLocalVideoDataSourcePosition"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VIDEO_MODULE_POSITION.POSITION_POST_CAPTURER);"
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
              children: ["Call ", _jsx(_components.code, {
                children: "EnableVirtualBackground"
              }), " on the host to enable the background segmentation algorithm and get the alpha data of the portrait area. The recommended parameters are as follows:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "enabled"
                }), ": Set to ", _jsx(_components.code, {
                  children: "true"
                }), " to enable virtual background."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "backgroundSourceType"
                }), ": Set to ", _jsx(_components.code, {
                  children: "BACKGROUND_NONE"
                }), " to split the portrait and background and process the background as an alpha channel."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "var"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " source"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
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
                      children: " VirtualBackgroundSource"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "source.background_source_type "
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
                      children: " BACKGROUND_SOURCE_TYPE.BACKGROUND_NONE;"
                    })]
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " segproperty"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
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
                      children: " SegmentationProperty"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " nRet"
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
                      children: " RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "EnableVirtualBackground"
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
                      children: "true"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", source, segproperty, MEDIA_SOURCE_TYPE.PRIMARY_CAMERA_SOURCE);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "this"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".Log."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "UpdateLog"
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
                      children: '"EnableVirtualBackground true :"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " +"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " nRet);"
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
              children: ["Call ", _jsx(_components.code, {
                children: "SetVideoEncoderConfiguration"
              }), " to set ", _jsx(_components.code, {
                children: "encodeAlpha"
              }), " to ", _jsx(_components.code, {
                children: "true"
              }), ". This encodes the alpha information and sends it to the remote end. Call ", _jsx(_components.code, {
                children: "JoinChannel"
              }), "[2/2] to join the channel."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "VideoEncoderConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " videoEncoderConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
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
                      children: " VideoEncoderConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "videoEncoderConfiguration.advanceOptions.encodeAlpha "
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
                      children: " true"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "SetVideoEncoderConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(videoEncoderConfiguration);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "JoinChannel"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(_token, _channelName, "
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "0"
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
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Render views with alpha transparency effects using the ", _jsx(_components.code, {
                children: "VideoSurfaceYUVA"
              }), " component."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " VideoSurface"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " MakeImageSurface"
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " goName"
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
                      children: "{"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // ......"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Render with VideoSurfaceYUVA"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  VideoSurface"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " videoSurface"
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
                      children: " go."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "AddComponent"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "<"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "VideoSurfaceYUVA"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ">();"
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
                      children: " videoSurface;"
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
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
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
