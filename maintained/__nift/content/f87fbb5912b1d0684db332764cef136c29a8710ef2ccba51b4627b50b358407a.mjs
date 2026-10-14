import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Custom video source",
  description: "Integrate a custom video or audio capture into your client"
};
export let _markdown = `

Custom video capture refers to the collection of a video stream from a custom source. Unlike the default video capture method, custom video capture enables you to control the capture source, and precisely adjust video attributes. You can dynamically adjust parameters such as video quality, resolution, and frame rate to adapt to various application use-cases. For example, you can capture video from high-definition cameras, and drone cameras.

Agora recommends default video capture for its stability, reliability, and ease of integration. Custom video capture offers flexibility and customization for specific video capture use-cases where default video capture does not fulfill your requirements.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;,&#x22;unreal&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    ## Understand the tech [#understand-the-tech]

    RTC SDK provides a custom video track method for video self-collection. You can create and publish custom video tracks to one or more channels. You use the self-capture module to drive the capture device, and send the captured video frames to the SDK through the video track.

    The following figure illustrates the video data transmission process when custom video capture is implemented:

    ![Custom video source](https://assets-docs.agora.io/images/video-sdk/publish-custom-tracks-in-a-channel.svg)

    ## Prerequisites [#prerequisites]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement the logic [#implement-the-logic]

    This section shows you how to implement custom video capture and custom video rendering in your app.

    ### Custom video capture [#custom-video-capture]

    The following figure shows the workflow you implement to capture and stream a custom video source in your app.

    **Custom video capture**

    ![API call sequence](https://assets-docs.agora.io/images/video-sdk/custom-video-capture.svg)

    Take the following steps to implement this workflow:

    1. Create a custom video track

       To create a custom video track and obtain the video track ID, call \`createCustomVideoTrack\` after initializing an instance of \`RtcEngine\`. To create multiple custom video tracks, call the method multiple times.

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
           int videoTrackId = RtcEngine.createCustomVideoTrack();
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           val videoTrackId = RtcEngine.createCustomVideoTrack()
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>

    2. Join a channel and publish the custom video track

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
           // Create a ChannelMediaOptions instance
             ChannelMediaOptions option = new ChannelMediaOptions();
             // Set the client role to BROADCASTER
             option.clientRoleType = Constants.CLIENT_ROLE_BROADCASTER;
             // Enable auto subscription of audio and video
             option.autoSubscribeAudio = true;
             option.autoSubscribeVideo = true;
             // Publish self-captured video stream
             option.publishCustomVideoTrack = true;
             // Set custom video track ID
             option.customVideoTrackId = videoTrackId;
             // Join a channel with the specified options
             int res = engine.joinChannel(accessToken, channelId, 0, option);
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           // Create a ChannelMediaOptions instance
            val option = ChannelMediaOptions().apply {
              // Set the client role to BROADCASTER
              clientRoleType = Constants.CLIENT_ROLE_BROADCASTER
              // Enable auto subscription of audio and video
              autoSubscribeAudio = true
              autoSubscribeVideo = true
              // Publish self-captured video stream
              publishCustomVideoTrack = true
              // Set custom video track ID
              customVideoTrackId = videoTrackId
            }

            // Join a channel with the specified options
            val res = engine.joinChannel(accessToken, channelId, 0, option)
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>

    3. Implement your self-capture module

       Agora provides the [VideoFileReader](https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/utils/VideoFileReader.java) demo project that shows you how to read \`YUV\` format video data from a local file. In a production environment, create a custom video module for your device using RTC SDK based on your business requirements.

    4. Push video data to the SDK

       Before sending captured video frames to RTC SDK, integrate your video module with the \`VideoFrame\`. To ensure audio-video synchronization, best practice is to obtain the current monotonic time from RTC SDK and pass it as the timestamp parameter in the \`VideoFrame\`.

       <CalloutContainer type="info">
         <CalloutDescription>
           To ensure audio-video synchronization, set the timestamp parameter of \`VideoFrame\` to the system's Monotonic Time. Use \`getCurrentMonotonicTimeInMs\` to obtain the current monotonic Time.
         </CalloutDescription>
       </CalloutContainer>

       Call \`pushExternalVideoFrameById\` \\[2/2] to push the captured video frames through the video track to RTC SDK. Ensure that the \`videoTrackId\` matches the track ID you specified when joining the channel. Customize parameters like pixel format, data type, and timestamp in the \`VideoFrame\`.

       The following code samples demonstrate pushing \`I420\`, \`NV21\`, \`NV12\`, and \`Texture\` format video data:

       * **I420**

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
             private void pushVideoFrameByI420(int trackId, byte[] yuv, int width, int height) {
               // Create an i420Buffer object and store the original YUV data in the buffer
               JavaI420Buffer i420Buffer = JavaI420Buffer.allocate(width, height);
               i420Buffer.getDataY().put(yuv, 0, i420Buffer.getDataY().limit());
               i420Buffer.getDataU().put(yuv, i420Buffer.getDataY().limit(), i420Buffer.getDataU().limit());
               i420Buffer.getDataV().put(yuv, i420Buffer.getDataY().limit() + i420Buffer.getDataU().limit(), i420Buffer.getDataV().limit());
               // Get the current monotonic time from the SDK
               long currentMonotonicTimeInMs = engine.getCurrentMonotonicTimeInMs();
               // Create a VideoFrame object, passing the I420 video frame to be pushed and the monotonic time of the video frame (in nanoseconds)
               VideoFrame videoFrame = new VideoFrame(i420Buffer, 0, currentMonotonicTimeInMs * 1000000);

               // Push the video frame to the SDK through the video track
               int ret = engine.pushExternalVideoFrameById(videoFrame, trackId);
               // Release the memory resources occupied by the i420Buffer object
               i420Buffer.release();

               if (ret != Constants.ERR_OK) {
                 Log.w(TAG, "pushExternalVideoFrame error");
               }
             }
             \`\`\`
           </CodeBlockTab>

           <CodeBlockTab value="kotlin">
             \`\`\`kotlin
             private fun pushVideoFrameByI420(trackId: Int, yuv: ByteArray, width: Int, height: Int) {
               // Create an i420Buffer object and store the original YUV data in the buffer
               val i420Buffer = JavaI420Buffer.allocate(width, height)
               i420Buffer.getDataY().put(yuv, 0, i420Buffer.getDataY().limit())
               i420Buffer.getDataU().put(yuv, i420Buffer.getDataY().limit(), i420Buffer.getDataU().limit())
               i420Buffer.getDataV().put(yuv, i420Buffer.getDataY().limit() + i420Buffer.getDataU().limit(), i420Buffer.getDataV().limit())

               // Get the current monotonic time from the SDK
               val currentMonotonicTimeInMs = engine.getCurrentMonotonicTimeInMs()

               // Create a VideoFrame object, passing the I420 video frame to be pushed and the monotonic time of the video frame (in nanoseconds)
               val videoFrame = VideoFrame(i420Buffer, 0, currentMonotonicTimeInMs * 1_000_000)

               // Push the video frame to the SDK through the video track
               val ret = engine.pushExternalVideoFrameById(videoFrame, trackId)

               // Release the memory resources occupied by the i420Buffer object
               i420Buffer.release()

               if (ret != Constants.ERR_OK) {
                 Log.w(TAG, "pushExternalVideoFrame error")
               }
             }
             \`\`\`
           </CodeBlockTab>
         </CodeBlockTabs>

       * **NV21**

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
             private void pushVideoFrameByNV21(int trackId, byte[] nv21, int width, height) {
               // Create a frameBuffer object and store the original YUV data in the NV21 format buffer
               VideoFrame.Buffer frameBuffer = new NV21Buffer(nv21, width, height, null);

               // Get the current monotonic time from the SDK
               long currentMonotonicTimeInMs = engine.getCurrentMonotonicTimeInMs();
               // Create a VideoFrame object, pass the NV21 video frame to be pushed and the monotonic time of the video frame (in nanoseconds)
               VideoFrame videoFrame = new VideoFrame(frameBuffer, 0, currentMonotonicTimeInMs * 1000000);

               // Push the video frame to the SDK through the video track
               int ret = engine.pushExternalVideoFrameById(videoFrame, trackId);

               if (ret != Constants.ERR_OK) {
                 Log.w(TAG, "pushExternalVideoFrame error");
               }
             }
             \`\`\`
           </CodeBlockTab>

           <CodeBlockTab value="kotlin">
             \`\`\`kotlin
             private fun pushVideoFrameByNV21(trackId: Int, nv21: ByteArray, width: Int, height: Int) {
               // Create a frameBuffer object and store the original YUV data in the NV21 format buffer
               val frameBuffer: VideoFrame.Buffer = NV21Buffer(nv21, width, height, null)

               // Get the current monotonic time from the SDK
               val currentMonotonicTimeInMs = engine.getCurrentMonotonicTimeInMs()

               // Create a VideoFrame object, pass the NV21 video frame to be pushed and the monotonic time of the video frame (in nanoseconds)
               val videoFrame = VideoFrame(frameBuffer, 0, currentMonotonicTimeInMs * 1_000_000)

               // Push the video frame to the SDK through the video track
               val ret = engine.pushExternalVideoFrameById(videoFrame, trackId)

               if (ret != Constants.ERR_OK) {
                 Log.w(TAG, "pushExternalVideoFrame error")
               }
             }
             \`\`\`
           </CodeBlockTab>
         </CodeBlockTabs>

       * **NV12**

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
             private void pushVideoFrameByNV12(int trackId, ByteBuffer nv12, int width, int height) {
               // Create a frameBuffer object and store the original YUV data in the NV12 format buffer
               VideoFrame.Buffer frameBuffer = new NV12Buffer(width, height, width, height, nv12, null);
               // Get the current monotonic time from the SDK
               long currentMonotonicTimeInMs = engine.getCurrentMonotonicTimeInMs();
               // Create a VideoFrame object, pass the NV12 video frame to be pushed and the monotonic time of the video frame (in nanoseconds)
               VideoFrame videoFrame = new VideoFrame(frameBuffer, 0, currentMonotonicTimeInMs * 1000000);

               // Push the video frame to the SDK through the video track
               int ret = engine.pushExternalVideoFrameById(videoFrame, trackId);
               if (ret != Constants.ERR_OK) {
                   Log.w(TAG, "pushExternalVideoFrame error");
               }
             }
             \`\`\`
           </CodeBlockTab>

           <CodeBlockTab value="kotlin">
             \`\`\`kotlin
             private fun pushVideoFrameByNV12(trackId: Int, nv12: ByteBuffer, width: Int, height: Int) {
               // Create a frameBuffer object and store the original YUV data in the NV12 format buffer
               val frameBuffer: VideoFrame.Buffer = NV12Buffer(width, height, width, height, nv12, null)
               // Get the current monotonic time from the SDK
               val currentMonotonicTimeInMs = engine.getCurrentMonotonicTimeInMs()
               // Create a VideoFrame object, pass the NV12 video frame to be pushed and the monotonic time of the video frame (in nanoseconds)
               val videoFrame = VideoFrame(frameBuffer, 0, currentMonotonicTimeInMs * 1_000_000)
               // Push the video frame to the SDK through the video track
               val ret = engine.pushExternalVideoFrameById(videoFrame, trackId)

               if (ret != Constants.ERR_OK) {
                 Log.w(TAG, "pushExternalVideoFrame error")
               }
             }
             \`\`\`
           </CodeBlockTab>
         </CodeBlockTabs>

       * **Texture**

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
             private void pushVideoFrameByTexture(int trackId, int textureId, VideoFrame.TextureBuffer.Type textureType, int width, int height) {
               // Create a frameBuffer object to store the texture format video frame
               VideoFrame.Buffer frameBuffer = new TextureBuffer(
                 EglBaseProvider.getCurrentEglContext(),
                 width,
                 height,
                 textureType,
                 textureId,
                 new Matrix(),
                 null,
                 null,
                 null
               );
               // Get the current monotonic time from the SDK
               long currentMonotonicTimeInMs = engine.getCurrentMonotonicTimeInMs();
               // Create a VideoFrame object, passing the texture video frame to be pushed and the monotonic time of the video frame (in nanoseconds)
               VideoFrame videoFrame = new VideoFrame(frameBuffer, 0, currentMonotonicTimeInMs * 1000000);
               // Push the video frame to the SDK through the video track
               int ret = engine.pushExternalVideoFrameById(videoFrame, trackId);
               if (ret != Constants.ERR_OK) {
                 Log.w(TAG, "pushExternalVideoFrame error");
               }
             }
             \`\`\`
           </CodeBlockTab>

           <CodeBlockTab value="kotlin">
             \`\`\`kotlin
             private fun pushVideoFrameByTexture(
                 trackId: Int,
                 textureId: Int,
                 textureType: VideoFrame.TextureBuffer.Type,
                 width: Int,
                 height: Int
               ) {
               // Create a frameBuffer object to store the texture format video frame
               val frameBuffer: VideoFrame.Buffer = TextureBuffer(
                 EglBaseProvider.getCurrentEglContext(),
                 width,
                 height,
                 textureType,
                 textureId,
                 Matrix(),
                 null,
                 null,
                 null
               )

               // Get the current monotonic time from the SDK
               val currentMonotonicTimeInMs = engine.getCurrentMonotonicTimeInMs()
               // Create a VideoFrame object, passing the texture video frame to be pushed and the monotonic time of the video frame (in nanoseconds)
               val videoFrame = VideoFrame(frameBuffer, 0, currentMonotonicTimeInMs * 1_000_000)
               // Push the video frame to the SDK through the video track
               val ret = engine.pushExternalVideoFrameById(videoFrame, trackId)

               if (ret != Constants.ERR_OK) {
                 Log.w(TAG, "pushExternalVideoFrame error")
               }
             }
             \`\`\`
           </CodeBlockTab>
         </CodeBlockTabs>

       <CalloutContainer type="info">
         <CalloutDescription>
           If the captured custom video format is Texture and remote users experience flickering or distortion in the captured video, it is recommended to first duplicate the video data and then send both the original and duplicated video data back to the RTC SDK. This helps eliminate anomalies during internal data encoding processes.
         </CalloutDescription>
       </CalloutContainer>

    5. Destroy custom video tracks

       To stop custom video capture and destroy the video track, call \`destroyCustomVideoTrack\`.

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
           // Destroy custom video track
            engine.destroyCustomVideoTrack(videoTrack);
            // Leave the channel
            engine.leaveChannelEx(connection);
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           // Destroy custom video track
            engine.destroyCustomVideoTrack(videoTrack)
            // Leave the channel
            engine.leaveChannelEx(connection)
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>

    ### Custom video rendering [#custom-video-rendering]

    To implement custom video rendering in your app, refer to the following steps:

    1. Set up \`onCaptureVideoFrame\` or \`onRenderVideoFrame\` callback to obtain the video data to be played.
    2. Implement video rendering and playback yourself.

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Applicable use-cases [#applicable-use-cases]

    Use custom video capture in the following industries and use-cases:

    **Specialized video processing and enhancement**

    In specific gaming or virtual reality use-cases, real-time effects processing, filter handling, or other enhancement effects necessitate direct access to the original video stream. Custom video capture facilitates this, enabling seamless real-time processing and enhances the overall gaming or virtual reality experience for a more realistic outcome.

    **High-precision video capture**

    In video surveillance applications, detailed observation and analysis of scene details is necessary. Custom video capture enables higher image quality and finer control over capture to meet the requirements of video monitoring.

    **Capture from specific video sources**

    Industries such as IoT and live streaming often require the use of specific cameras, monitoring devices, or non-camera video sources, such as video capture cards or screen recording data. In such situations, default RTC SDK capture may not meet your requirements, necessitating use of custom video capture.

    **Seamless integration with specific devices or third-party applications**

    In smart home or IoT applications, transmitting video from devices to users' smartphones or computers for monitoring and control may require the use of specific devices or applications for video capture. Custom video capture facilitates seamless integration of specific devices or applications with the RTC SDK.

    **Specific video encoding formats**

    In certain live streaming use-cases, specific video encoding formats may be needed to meet business requirements. In such cases, RTC SDK default capture might not suffice, and custom video capture is required to capture and encode videos in specific formats.

    ### Advantages [#advantages]

    Using custom video capture offers the following advantages:

    **More types of video streams**

    Custom video capture allows the use of higher quality and a greater variety of capture devices and cameras, resulting in clearer and smoother video streams. This enhances the user viewing experience and makes the product more competitive.

    **More flexible video effects**

    Custom video capture enables you to implement richer and more personalized video effects and filters, enhancing the user experience. You can implement effects such as beautification filters and dynamic stickers.

    **Adaptation to diverse use-case requirements**

    Custom video capture helps applications better adapt to the requirements of various use-cases, such as live streaming, video conferencing, and online education. You can customize different video capture solutions based on the use-case requirements to provide a more robust application.

    ### Sample projects [#sample-projects]

    Agora provides the following open-source sample projects for your reference. Download the project or view the source code for a more detailed example.

    * [MultiVideoSourceTracks](https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/examples/advanced/MultiVideoSourceTracks.java): Video self-capture
    * [CustomRemoteVideoRender](https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/examples/advanced/CustomRemoteVideoRender.java): Custom remote video rendering

    ### API reference [#api-reference]

    * [\`createCustomVideoTrack\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_createcustomvideotrack)
    * [\`destroyCustomVideoTrack\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_destroycustomvideotrack)
    * [\`getCurrentMonotonicTimeInMs\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_getcurrentmonotonictimeinms)
    * [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel)
    * [\`pushExternalVideoFrameById\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_pushvideoframe3)
    * [\`onCaptureVideoFrame\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_ivideoframeobserver.html#callback_ivideoframeobserver_oncapturevideoframe)
    * [\`onRenderVideoFrame\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_ivideoframeobserver.html#callback_ivideoframeobserver_onrendervideoframe)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    ## Understand the tech [#understand-the-tech-1]

    RTC SDK provides a custom video track method for video self-collection. You can create and publish custom video tracks to one or more channels. You use the self-capture module to drive the capture device, and send the captured video frames to the SDK through the video track.

    The following figure illustrates the video data transmission process when custom video capture is implemented:

    ![Custom video source](https://assets-docs.agora.io/images/video-sdk/publish-custom-tracks-in-a-channel.svg)

    ## Prerequisites [#prerequisites-1]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement the logic [#implement-the-logic-1]

    This section shows you how to implement custom video capture and custom video rendering in your app.

    ### Custom video capture [#custom-video-capture-1]

    The figure below shows the workflow you need to implement to stream a custom video source in your app.

    **Custom video capture**

    ![API call sequence](https://assets-docs.agora.io/images/video-sdk/custom-video-capture.svg)

    Take the following steps to implement this workflow:

    1. Create a custom video track

       To create a custom video track and obtain the video track ID, call \`createCustomVideoTrack\` after initializing an instance of \`AgoraRtcEngineKit\`. To create multiple custom video tracks, call the method multiple times.

       \`\`\`swift
       customCamera?.trackId = agoraKit.createCustomVideoTrack()
       \`\`\`

    2. Join a channel and publish the custom video track

       \`\`\`swift
       // Create an AgoraRtcChannelMediaOptions instance
       let option = AgoraRtcChannelMediaOptions()
       // Set the client role to broadcaster
       option.clientRoleType = .broadcaster
       // Enable auto subscription for audio and video
       option.autoSubscribeAudio = true
       option.autoSubscribeVideo = true
       // Publish the self-collected video stream
       option.publishCustomVideoTrack = true
       // Set the custom video track ID
       option.customVideoTrackId = Int(customCamera?.trackId ?? 0)
       // Generate a token for the channel
       NetworkManager.shared.generateToken(channelName: channel, success: { token in
         // Join a channel with the specified options
         let result = self.agoraKit.joinChannel(byToken: token, channelId: channel, uid: 0, mediaOptions: option)
         if result != 0 {
           self.isProcessing = false
           self.showAlert(title: "Error", message: "joinChannel call failed: \\(result), please check your params")
         }
       })
       \`\`\`

    3. Implement your self-capture module

       Agora provides the [CustomVideoSourcePushMulti](https://github.com/AgoraIO/API-Examples/blob/main/iOS/APIExample/APIExample/Examples/Advanced/CustomVideoSourcePushMulti/CustomVideoSourcePushMulti.swift) demo project that shows you how to read \`YUV\` format video data from a local file. In a production environment, create a custom video module for your device using RTC SDK based on your business requirements.

    4. Push video data to the SDK

       Use \`pushExternalVideoFrame\` to send the captured video frame to the SDK through the video track. Ensure that the \`videoTrackId\` matches the video track ID specified when joining the channel. In \`AgoraVideoFrame\`, you can set the pixel format, data type, timestamp, and other parameters of the video frame.

       The following code demonstrates how to push video data in the \`CVPixelBufferRef\` format. For other supported video frame formats, refer to the \`format\` field in [AgoraVideoFrame](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoravideoframe).

       \`\`\`swift
       let videoFrame = AgoraVideoFrame()
       videoFrame.format = 12
       videoFrame.textureBuf = buffer
       videoFrame.rotation = Int32(rotation)
       agoraKit?.pushExternalVideoFrame(videoFrame, videoTrackId: trackId)
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           To ensure audio and video synchronization, Agora recommends setting the \`time\` (timestamp) of \`AgoraVideoFrame\` to the system monotonic time. To retrieve the current monotonic time, call \`getCurrentMonotonicTimeInMs\`.
         </CalloutDescription>
       </CalloutContainer>

       <CalloutContainer type="info">
         <CalloutDescription>
           If the captured custom video format is Texture and remote users experience flickering or distortion in the captured video, it is recommended to first duplicate the video data and then send both the original and duplicated video data back to the RTC SDK. This helps eliminate anomalies during internal data encoding processes.
         </CalloutDescription>
       </CalloutContainer>

    5. Destroy custom video track

       To stop publishing the custom video track, call \`destroyCustomVideoTrack\`.

       \`\`\`swift
       // Destroy the custom video track
       agoraKit.destroyCustomVideoTrack(UInt(userModel?.trackId ?? 0))
       // Leave the channel
       agoraKit.leaveChannelEx(connection) { state in
         LogUtils.log(message: "warning: \\(state.description)", level: .info)
       }
       \`\`\`

    ### Custom video rendering [#custom-video-rendering-1]

    To implement custom video rendering in your app, refer to the following steps:

    1. Set up \`onCaptureVideoFrame\` or \`onRenderVideoFrame\` callback to obtain the video data to be played.
    2. Implement video rendering and playback yourself.
       <CalloutContainer type="info">
         <CalloutDescription>
           In \`renderPixelBuffer\` or \`renderRawData\`, the \`rotation\` parameter of the video frame may not be 0. You need to set the rotation parameters yourself.
         </CalloutDescription>
       </CalloutContainer>

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Applicable use-cases [#applicable-use-cases-1]

    Use custom video capture in the following industries and use-cases:

    **Specialized video processing and enhancement**

    In specific gaming or virtual reality use-cases, real-time effects processing, filter handling, or other enhancement effects necessitate direct access to the original video stream. Custom video capture facilitates this, enabling seamless real-time processing and enhances the overall gaming or virtual reality experience for a more realistic outcome.

    **High-precision video capture**

    In video surveillance applications, detailed observation and analysis of scene details is necessary. Custom video capture enables higher image quality and finer control over capture to meet the requirements of video monitoring.

    **Capture from specific video sources**

    Industries such as IoT and live streaming often require the use of specific cameras, monitoring devices, or non-camera video sources, such as video capture cards or screen recording data. In such situations, default RTC SDK capture may not meet your requirements, necessitating use of custom video capture.

    **Seamless integration with specific devices or third-party applications**

    In smart home or IoT applications, transmitting video from devices to users' smartphones or computers for monitoring and control may require the use of specific devices or applications for video capture. Custom video capture facilitates seamless integration of specific devices or applications with the RTC SDK.

    **Specific video encoding formats**

    In certain live streaming use-cases, specific video encoding formats may be needed to meet business requirements. In such cases, RTC SDK default capture might not suffice, and custom video capture is required to capture and encode videos in specific formats.

    ### Advantages [#advantages-1]

    Using custom video capture offers the following advantages:

    **More types of video streams**

    Custom video capture allows the use of higher quality and a greater variety of capture devices and cameras, resulting in clearer and smoother video streams. This enhances the user viewing experience and makes the product more competitive.

    **More flexible video effects**

    Custom video capture enables you to implement richer and more personalized video effects and filters, enhancing the user experience. You can implement effects such as beautification filters and dynamic stickers.

    **Adaptation to diverse use-case requirements**

    Custom video capture helps applications better adapt to the requirements of various use-cases, such as live streaming, video conferencing, and online education. You can customize different video capture solutions based on the use-case requirements to provide a more robust application.

    ### Sample projects [#sample-projects-1]

    Agora provides the following open-source sample projects for your reference. Download the project or view the source code for a more detailed example.

    * [CustomVideoSourcePush](https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Advanced/CustomVideoSourcePush): Video self-capture
    * [CustomVideoRender](https://github.com/AgoraIO/API-Examples/blob/main/iOS/APIExample/APIExample/Examples/Advanced/CustomVideoRender/CustomVideoRender.swift): Custom video rendering
    * [CustomVideoSourcePushMulti.swift](https://github.com/AgoraIO/API-Examples/blob/main/iOS/APIExample/APIExample/Examples/Advanced/CustomVideoSourcePushMulti/CustomVideoSourcePushMulti.swift): Read YUV format video data from a local file.

    ### API reference [#api-reference-1]

    * [\`createCustomVideoTrack\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/createcustomvideotrack\\(\\))
    * [\`destroyCustomVideoTrack\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/destroycustomvideotrack\\(_:\\))
    * [\`setExternalVideoSource\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setexternalvideosource\\(_\\:usetexture\\:sourcetype\\:encodedvideotrackoption:\\))
    * [\`pushExternalVideoFrame\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/pushexternalvideoframe\\(_\\:videotrackid:\\))
    * [\`onRenderVideoFrame(_:uid:channelId:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoravideoframedelegate/onrendervideoframe\\(_\\:uid\\:channelid:\\))
    * [\`onCapture(_:sourceType:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoravideoframedelegate/oncapture\\(_\\:sourcetype:\\))
    * [\`getCurrentMonotonicTimeInMs\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/getcurrentmonotonictimeinms\\(\\))
    * [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/joinchannel\\(bytoken\\:channelid\\:info\\:uid\\:joinsuccess:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    ## Understand the tech [#understand-the-tech-2]

    RTC SDK provides a custom video track method for video self-collection. You can create and publish custom video tracks to one or more channels. You use the self-capture module to drive the capture device, and send the captured video frames to the SDK through the video track.

    The following figure illustrates the video data transmission process when custom video capture is implemented:

    ![Custom video source](https://assets-docs.agora.io/images/video-sdk/publish-custom-tracks-in-a-channel.svg)

    ## Prerequisites [#prerequisites-2]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement the logic [#implement-the-logic-2]

    This section shows you how to implement custom video capture and custom video rendering in your app.

    ### Custom video capture [#custom-video-capture-2]

    The figure below shows the workflow you need to implement to stream a custom video source in your app.

    ![API call sequence](https://assets-docs.agora.io/images/video-sdk/custom-video-capture.svg)

    Take the following steps to implement this workflow:

    1. Create a custom video track

       To create a custom video track and obtain the video track ID, call \`createCustomVideoTrack\` after initializing an instance of \`AgoraRtcEngineKit\`. To create multiple custom video tracks, call the method multiple times.

       \`\`\`swift
       customCamera?.trackId = agoraKit.createCustomVideoTrack()
       \`\`\`

    2. Join a channel and publish the custom video track

       \`\`\`swift
       // Create an AgoraRtcChannelMediaOptions instance
       let option = AgoraRtcChannelMediaOptions()
       // Set the client role to broadcaster
       option.clientRoleType = .broadcaster
       // Enable auto subscription for audio and video
       option.autoSubscribeAudio = true
       option.autoSubscribeVideo = true
       // Publish the self-collected video stream
       option.publishCustomVideoTrack = true
       // Set the custom video track ID
       option.customVideoTrackId = Int(customCamera?.trackId ?? 0)
       // Generate a token for the channel
       NetworkManager.shared.generateToken(channelName: channel, success: { token in
         // Join a channel with the specified options
         let result = self.agoraKit.joinChannel(byToken: token, channelId: channel, uid: 0, mediaOptions: option)
         if result != 0 {
           self.isProcessing = false
           self.showAlert(title: "Error", message: "joinChannel call failed: \\(result), please check your params")
         }
       })
       \`\`\`

    3. Implement your self-capture module

       Agora provides the [CustomVideoSourcePushMulti](https://github.com/AgoraIO/API-Examples/blob/main/macOS/APIExample/Examples/Advanced/CustomVideoSourcePushMulti/CustomVideoSourcePushMulti.swift) demo project that shows you how to read \`YUV\` format video data from a local file. In a production environment, create a custom video module for your device using RTC SDK based on your business requirements.

    4. Push video data to the SDK

       Use \`pushExternalVideoFrame\` to send the captured video frame to the SDK through the video track. Ensure that the \`videoTrackId\` matches the video track ID specified when joining the channel. In \`AgoraVideoFrame\`, you can set the pixel format, data type, timestamp, and other parameters of the video frame.

       The following code demonstrates how to push video data in the \`CVPixelBufferRef\` format. For other supported video frame formats, refer to the \`format\` field in [AgoraVideoFrame](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoravideoframe).

       \`\`\`swift
       let videoFrame = AgoraVideoFrame()
       videoFrame.format = 12
       videoFrame.textureBuf = buffer
       videoFrame.rotation = Int32(rotation)
       agoraKit?.pushExternalVideoFrame(videoFrame, videoTrackId: trackId)
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           To ensure audio and video synchronization, Agora recommends setting the \`time\` (timestamp) of \`AgoraVideoFrame\` to the system monotonic time. To retrieve the current monotonic time, call \`getCurrentMonotonicTimeInMs\`.
         </CalloutDescription>
       </CalloutContainer>

       <CalloutContainer type="info">
         <CalloutDescription>
           If the captured custom video format is Texture and remote users experience flickering or distortion in the captured video, it is recommended to first duplicate the video data and then send both the original and duplicated video data back to the RTC SDK. This helps eliminate anomalies during internal data encoding processes.
         </CalloutDescription>
       </CalloutContainer>

    5. Destroy custom video track

       To stop publishing the custom video track, call \`destroyCustomVideoTrack\`.

       \`\`\`swift
       // Destroy the custom video track
       agoraKit.destroyCustomVideoTrack(UInt(userModel?.trackId ?? 0))
       // Leave the channel
       agoraKit.leaveChannelEx(connection) { state in
         LogUtils.log(message: "warning: \\(state.description)", level: .info)
       }
       \`\`\`

    ### Custom video rendering [#custom-video-rendering-2]

    To implement custom video rendering in your app, refer to the following steps:

    1. Set up \`onCaptureVideoFrame\` or \`onRenderVideoFrame\` callback to obtain the video data to be played.
    2. Implement video rendering and playback yourself.

       <CalloutContainer type="info">
         <CalloutDescription>
           In \`renderPixelBuffer\` or \`renderRawData\`, the \`rotation\` parameter of the video frame may not be 0. You need to set the rotation parameters yourself.
         </CalloutDescription>
       </CalloutContainer>

    ## Reference [#reference-2]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Applicable use-cases [#applicable-use-cases-2]

    Use custom video capture in the following industries and use-cases:

    **Specialized video processing and enhancement**

    In specific gaming or virtual reality use-cases, real-time effects processing, filter handling, or other enhancement effects necessitate direct access to the original video stream. Custom video capture facilitates this, enabling seamless real-time processing and enhances the overall gaming or virtual reality experience for a more realistic outcome.

    **High-precision video capture**

    In video surveillance applications, detailed observation and analysis of scene details is necessary. Custom video capture enables higher image quality and finer control over capture to meet the requirements of video monitoring.

    **Capture from specific video sources**

    Industries such as IoT and live streaming often require the use of specific cameras, monitoring devices, or non-camera video sources, such as video capture cards or screen recording data. In such situations, default RTC SDK capture may not meet your requirements, necessitating use of custom video capture.

    **Seamless integration with specific devices or third-party applications**

    In smart home or IoT applications, transmitting video from devices to users' smartphones or computers for monitoring and control may require the use of specific devices or applications for video capture. Custom video capture facilitates seamless integration of specific devices or applications with the RTC SDK.

    **Specific video encoding formats**

    In certain live streaming use-cases, specific video encoding formats may be needed to meet business requirements. In such cases, RTC SDK default capture might not suffice, and custom video capture is required to capture and encode videos in specific formats.

    ### Advantages [#advantages-2]

    Using custom video capture offers the following advantages:

    **More types of video streams**

    Custom video capture allows the use of higher quality and a greater variety of capture devices and cameras, resulting in clearer and smoother video streams. This enhances the user viewing experience and makes the product more competitive.

    **More flexible video effects**

    Custom video capture enables you to implement richer and more personalized video effects and filters, enhancing the user experience. You can implement effects such as beautification filters and dynamic stickers.

    **Adaptation to diverse use-case requirements**

    Custom video capture helps applications better adapt to the requirements of various use-cases, such as live streaming, video conferencing, and online education. You can customize different video capture solutions based on the use-case requirements to provide a more robust application.

    ### Sample projects [#sample-projects-2]

    Agora provides the following open-source sample projects for your reference. Download the project or view the source code for a more detailed example.

    * [CustomVideoSourcePush](https://github.com/AgoraIO/API-Examples/blob/main/macOS/APIExample/Examples/Advanced/CustomVideoSourcePush/CustomVideoSourcePush.swift): Video self-capture
    * [CustomVideoRender](https://github.com/AgoraIO/API-Examples/blob/main/macOS/APIExample/Examples/Advanced/CustomVideoRender/CustomVideoRender.swift): Custom video rendering

    ### API reference [#api-reference-2]

    * [\`createCustomVideoTrack\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/createcustomvideotrack\\(\\))
    * [\`destroyCustomVideoTrack\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/destroycustomvideotrack\\(_:\\))
    * [\`setExternalVideoSource\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setexternalvideosource\\(_\\:usetexture\\:sourcetype\\:encodedvideotrackoption:\\))
    * [\`pushExternalVideoFrame\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/pushexternalvideoframe\\(_\\:videotrackid:\\))
    * [\`onRenderVideoFrame(_:uid:channelId:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoravideoframedelegate/onrendervideoframe\\(_\\:uid\\:channelid:\\))
    * [\`onCapture(_:sourceType:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoravideoframedelegate/oncapture\\(_\\:sourcetype:\\))
    * [\`getCurrentMonotonicTimeInMs\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/getcurrentmonotonictimeinms\\(\\))
    * [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/joinchannel\\(bytoken\\:channelid\\:info\\:uid\\:joinsuccess:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    Try out the [online demo](https://webdemo-global.agora.io/index.html) for [Custom video source](https://webdemo-global.agora.io/example/advanced/customVideoSource/index.html).

    ## Understand the tech [#understand-the-tech-3]

    RTC SDK provides support for creating local video tracks by passing in a [MediaStreamTrack](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack) object to \`createCustomVideoTrack\`.

    ## Prerequisites [#prerequisites-3]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement the logic [#implement-the-logic-3]

    This section shows you how to create and publish a custom video track from a media streams or a canvas stream.

    ### Create a custom video track a media stream [#create-a-custom-video-track-a-media-stream]

    You can implement custom video capture or preprocessing by obtaining a \`MediaStreamTrack\` object. For example, manually call the \`getUserMedia\` method to obtain a \`MediaStreamTrack\`, then use the \`createCustomVideoTrack\` method to create a local video track object for use in RTC SDK.

    \`\`\`javascript
    async function createAndPublishCustomVideoTrack() {
      try {
        // Get the video media stream
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

        // Extract the video track from the media stream
        const videoMediaStreamTrack = mediaStream.getVideoTracks()[0];

        // Create a custom video track
        const customVideoTrack = await AgoraRTC.createCustomVideoTrack({
          mediaStreamTrack: videoMediaStreamTrack,
        });

        // Store the custom video track for later use in a shared object
        rtc.localVideoTrack = customVideoTrack;

        // Publish the custom video track to the RTC channel
        await rtc.client.publish([rtc.localVideoTrack]);

        console.log("Custom video track published successfully!");
      } catch (error) {
        console.error("Failed to create or publish custom video track:", error);
      }
    }
    \`\`\`

    You can also use [HTMLMediaElement.captureStream](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/captureStream) or [HTMLCanvasElement.captureStream](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream) to obtain the \`MediaStreamTrack\` object.

    <CalloutContainer type="info">
      <CalloutDescription>
        The \`MediaStreamTrack\` object refers to the browser-native \`MediaStreamTrack\` API. For details on usage and browser support, see th \`MediaStreamTrack\` [API documentation](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStreamTrack).
      </CalloutDescription>
    </CalloutContainer>

    ### Create a custom video track from a canvas stream [#create-a-custom-video-track-from-a-canvas-stream]

    To create and publish a custom video track generated from a canvas stream, follow these steps:

    1. Create a canvas element and set its dimensions.
    2. Continuously draw content on the canvas using [\`requestAnimationFrame\`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) to ensure the stream updates in real time.
    3. Capture a media stream from the canvas.
    4. Create a custom video track using the canvas stream.
    5. Publish the custom video track to the channel.

    Refer to the following example:

    \`\`\`javascript
    // Function to create and publish a custom video track
    async function createAndPublishCustomVideoTrack() {
      try {
        // Create and draw on the canvas
        const canvas = createAndDrawCanvas();

        // Get the media stream from the canvas
        const canvasStream = canvas.captureStream();
        const canvasMediaStreamTrack = canvasStream.getVideoTracks()[0];

        // Create a custom video track from the canvas stream
        rtc.localVideoTrack = await AgoraRTC.createCustomVideoTrack({
          mediaStreamTrack: canvasMediaStreamTrack,
        });

        // Publish the custom video track to the RTC channel
        await rtc.client.publish([rtc.localVideoTrack]);

        console.log("Custom video track published successfully!");
      } catch (error) {
        console.error("Failed to create or publish custom video track:", error);
      }
    }

    // Function to create a canvas and start drawing
    function createAndDrawCanvas() {
      const canvas = document.createElement("canvas");
      canvas.width = 640;
      canvas.height = 480;
      const context = canvas.getContext("2d");

      // Continuously draw on the canvas
      function drawCanvas() {
        // Clear previous drawings
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "blue";
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Add your code to draw on the canvas

        // Keep refreshing the canvas
        requestAnimationFrame(drawCanvas);
      }
      drawCanvas();

      return canvas;
    }

    // Call the function to create and publish the track
    createAndPublishCustomVideoTrack();
    \`\`\`

    ## Reference [#reference-3]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-3]

    * [\`createCustomVideoTrack\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createcustomvideotrack)
    * [\`LocalVideoTrack\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocalvideotrack.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    ## Understand the tech [#understand-the-tech-4]

    RTC SDK provides a custom video track method for video self-collection. You can create and publish custom video tracks to one or more channels. You use the self-capture module to drive the capture device, and send the captured video frames to the SDK through the video track.

    The following figure illustrates the video data transmission process when custom video capture is implemented:

    ![Custom video source](https://assets-docs.agora.io/images/video-sdk/publish-custom-tracks-in-a-channel.svg)

    ## Prerequisites [#prerequisites-4]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement the logic [#implement-the-logic-4]

    This section shows you how to implement custom video capture and custom video rendering in your app.

    ### Custom video capture [#custom-video-capture-3]

    The following figure shows the workflow you implement to capture and stream a custom video source in your app.

    **Custom video capture**

    ![API call sequence](https://assets-docs.agora.io/images/video-sdk/custom-video-capture.svg)

    Take the following steps to implement this workflow:

    1. Create a custom video track

       To create a custom video track and obtain the video track ID, call \`createCustomVideoTrack\` after initializing an instance of \`IRtcEngine\`. To create multiple custom video tracks, call the method multiple times.

       \`\`\`cpp
       // For creating multiple custom video tracks, call createCustomVideoTrack multiple times
       int videoTrackId = m_rtcEngine->createCustomVideoTrack();
       m_trackVideoTrackIds[trackIndex] = videoTrackId;
       \`\`\`

    2. Join a channel and publish the custom video track

       \`\`\`cpp
       // Create a ChannelMediaOptions instance
       ChannelMediaOptions mediaOptions;
       // Set the client role to broadcaster
       mediaOptions.clientRoleType = CLIENT_ROLE_BROADCASTER;
       // Publish the self-captured video stream
       mediaOptions.publishCustomVideoTrack = true;
       // Disable auto subscription for video and audio
       mediaOptions.autoSubscribeVideo = false;
       mediaOptions.autoSubscribeAudio = false;
       // Set the custom video track ID
       mediaOptions.customVideoTrackId = videoTrackId;
       // Join the channel with the specified options
       int ret = m_rtcEngine->joinChannel(APP_TOKEN, szChannelId.data(), 0, mediaOptions);
       \`\`\`

    3. Implement self-capture module

       Agora provides the [YUVReader.cpp](https://github.com/AgoraIO/API-Examples/blob/main/windows/APIExample/APIExample/YUVReader.cpp) and [YUVReader.h](https://github.com/AgoraIO/API-Examples/blob/main/windows/APIExample/APIExample/YUVReader.h) demo projects that show you how to read \`YUV\` format video data from a local file. In a production environment, create a custom video module for your device using RTC SDK based on your business requirements.

       \`\`\`cpp
       // Use the custom YUVReader class to continuously read YUV-format video data in the YUVReader thread and pass the data to the OnYUVRead callback for further processing
       m_yuvReaderHandlers[trackIndex].Setup(m_rtcEngine, m_mediaEngine.get(), videoTrackId);
       m_yuvReaders[trackIndex].start(std::bind(&MultiVideoSourceTracksYUVReaderHander::OnYUVRead, m_yuvReaderHandlers[trackIndex], std::placeholders::_1, std::placeholders::_2, std::placeholders::_3, std::placeholders::_4));
       \`\`\`

    4. Push video data to the SDK

       Call \`pushVideoFrame\` to push the captured video frames through the video track to RTC SDK. Ensure that the \`videoTrackId\` matches the track ID you specified when joining the channel. Customize parameters like pixel format, data type, and timestamp in the \`VideoFrame\`.

       <CalloutContainer type="info">
         <CalloutDescription>
           To ensure audio-video synchronization, set the timestamp parameter of \`VideoFrame\` to the system's Monotonic Time. Use \`getCurrentMonotonicTimeInMs\` to obtain the current Monotonic Time.
         </CalloutDescription>
       </CalloutContainer>

       \`\`\`cpp
       void MultiVideoSourceTracksYUVReaderHander::OnYUVRead(int width, int height,
                                  unsigned char* buffer,
                                  int size) {
         if (m_mediaEngine == nullptr || m_rtcEngine == nullptr) {
           return;
         }

         // Set the video pixel format to I420
         m_videoFrame.format = agora::media::base::VIDEO_PIXEL_I420;
         // Set the video data type to raw data
         m_videoFrame.type = agora::media::base::ExternalVideoFrame::
           VIDEO_BUFFER_TYPE::VIDEO_BUFFER_RAW_DATA;
         // Pass the width, height, and buffer of the captured YUV video data to videoFrame
         m_videoFrame.height = height;
         m_videoFrame.stride = width;
         m_videoFrame.buffer = buffer;
         // Get the current Monotonic Time from the SDK and assign it to the timestamp parameter of videoFrame
         m_videoFrame.timestamp = m_rtcEngine->getCurrentMonotonicTimeInMs();
         // Push the video frame to the SDK
         m_mediaEngine->pushVideoFrame(&m_videoFrame, m_videoTrackId);
       }
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           The sample code demonstrates converting YUV format to raw video data in \`I420\` format. Agora video self-capture supports pushing external video frames in other formats; refer to [\`VIDEO_PIXEL_FORMAT\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/enum_videopixelformat.html).
         </CalloutDescription>
       </CalloutContainer>

       <CalloutContainer type="info">
         <CalloutDescription>
           If the captured custom video format is Texture and remote users experience flickering or distortion in the captured video, it is recommended to first duplicate the video data and then send both the original and duplicated video data back to the RTC SDK. This helps eliminate anomalies during internal data encoding processes.
         </CalloutDescription>
       </CalloutContainer>

    5. Destroy custom video tracks

       To stop custom video capture and destroy the video track, call \`destroyCustomVideoTrack\`. To destroy multiple video tracks, call the method for each track.

       \`\`\`cpp
       // Stop self-captured video data
       m_yuvReaders[trackIndex].stop();
       m_yuvReaderHandlers[trackIndex].Release();
       // Destroy the custom video track
       m_rtcEngine->destroyCustomVideoTrack(m_trackVideoTrackIds[trackIndex]);
       // Leave the channel
       m_rtcEngine->leaveChannelEx(m_trackConnections[trackIndex]);
       \`\`\`

    ### Custom video rendering [#custom-video-rendering-3]

    To implement custom video rendering in your app, refer to the following steps:

    1. Set up \`onCaptureVideoFrame\` or \`onRenderVideoFrame\` callback to obtain the video data to be played.
    2. Implement video rendering and playback yourself.

    ## Reference [#reference-4]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Applicable use-cases [#applicable-use-cases-3]

    Use custom video capture in the following industries and use-cases:

    **Specialized video processing and enhancement**

    In specific gaming or virtual reality use-cases, real-time effects processing, filter handling, or other enhancement effects necessitate direct access to the original video stream. Custom video capture facilitates this, enabling seamless real-time processing and enhances the overall gaming or virtual reality experience for a more realistic outcome.

    **High-precision video capture**

    In video surveillance applications, detailed observation and analysis of scene details is necessary. Custom video capture enables higher image quality and finer control over capture to meet the requirements of video monitoring.

    **Capture from specific video sources**

    Industries such as IoT and live streaming often require the use of specific cameras, monitoring devices, or non-camera video sources, such as video capture cards or screen recording data. In such situations, default RTC SDK capture may not meet your requirements, necessitating use of custom video capture.

    **Seamless integration with specific devices or third-party applications**

    In smart home or IoT applications, transmitting video from devices to users' smartphones or computers for monitoring and control may require the use of specific devices or applications for video capture. Custom video capture facilitates seamless integration of specific devices or applications with the RTC SDK.

    **Specific video encoding formats**

    In certain live streaming use-cases, specific video encoding formats may be needed to meet business requirements. In such cases, RTC SDK default capture might not suffice, and custom video capture is required to capture and encode videos in specific formats.

    ### Advantages [#advantages-3]

    Using custom video capture offers the following advantages:

    **More types of video streams**

    Custom video capture allows the use of higher quality and a greater variety of capture devices and cameras, resulting in clearer and smoother video streams. This enhances the user viewing experience and makes the product more competitive.

    **More flexible video effects**

    Custom video capture enables you to implement richer and more personalized video effects and filters, enhancing the user experience. You can implement effects such as beautification filters and dynamic stickers.

    **Adaptation to diverse use-case requirements**

    Custom video capture helps applications better adapt to the requirements of various use-cases, such as live streaming, video conferencing, and online education. You can customize different video capture solutions based on the use-case requirements to provide a more robust application.

    ### Sample project [#sample-project]

    Agora provides the following open-source sample projects for your reference. Download the project or view the source code for a more detailed example.

    * [MultiVideoSourceTracks](https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/MultiVideoSourceTracks): Video self-capture
    * [CustomVideoCapture](https://github.com/AgoraIO/API-Examples/blob/main/windows/APIExample/APIExample/Advanced/CustomVideoCapture/CAgoraCaptureVideoDlg.cpp): Custom video rendering

    ### API reference [#api-reference-4]

    * [\`createCustomVideoTrack\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_createcustomvideotrack)
    * [\`destroyCustomVideoTrack\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_destroycustomvideotrack)
    * [\`getCurrentMonotonicTimeInMs\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_getcurrentmonotonictimeinms)
    * [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel)
    * [\`pushVideoFrame\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_imediaengine.html#api_imediaengine_pushvideoframe)
    * [\`onCaptureVideoFrame\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_ivideoframeobserver.html#callback_ivideoframeobserver_oncapturevideoframe)
    * [\`onRenderVideoFrame\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_ivideoframeobserver.html#callback_ivideoframeobserver_onrendervideoframe)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    ## Understand the tech [#understand-the-tech-5]

    RTC SDK provides a custom video track method for video self-collection. You can create and publish custom video tracks to one or more channels. You use the self-capture module to drive the capture device, and send the captured video frames to the SDK through the video track.

    The following figure illustrates the video data transmission process when custom video capture is implemented:

    ![Custom video source](https://assets-docs.agora.io/images/video-sdk/publish-custom-tracks-in-a-channel.svg)

    ## Prerequisites [#prerequisites-5]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement the logic [#implement-the-logic-5]

    This section shows you how to implement custom video capture and custom video rendering in your game.

    ### Initialize MediaEngine [#initialize-mediaengine]

    Before implementing custom video features, obtain the \`MediaEngine\` interface from the initialized \`RtcEngine\`:

    \`\`\`cpp
    void InitAgoraEngine(FString APP_ID, FString TOKEN, FString CHANNEL_NAME)
    {
      // Initialize RtcEngine context and event handler
      agora::rtc::RtcEngineContext RtcEngineContext;
      UserRtcEventHandler = MakeShared<FUserRtcEventHandler>(this);
      std::string StdStrAppId = TCHAR_TO_UTF8(*APP_ID);
      RtcEngineContext.appId = StdStrAppId.c_str();
      RtcEngineContext.eventHandler = UserRtcEventHandler.Get();
      RtcEngineContext.channelProfile = agora::CHANNEL_PROFILE_TYPE::CHANNEL_PROFILE_LIVE_BROADCASTING;

      // Initialize the RtcEngine
      int ret = AgoraUERtcEngine::Get()->initialize(RtcEngineContext);

      // Query for the MediaEngine interface
      int ret = AgoraUERtcEngine::Get()->queryInterface(INTERFACE_ID_TYPE::AGORA_IID_MEDIA_ENGINE, (void**)&MediaEngineManager);
    }
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        The MediaEngine is not created directly. Instead, it's obtained as an interface from the initialized RtcEngine using the \`queryInterface\` method with \`AGORA_IID_MEDIA_ENGINE\`.
      </CalloutDescription>
    </CalloutContainer>

    ### Custom video capture [#custom-video-capture-4]

    The following figure shows the workflow you implement to capture and stream a custom video source in your game.

    **Custom video capture**

    ![API call sequence](https://assets-docs.agora.io/images/video-sdk/custom-video-capture-unreal.svg)

    Take the following steps to implement this workflow:

    1. **Set up the external video source**

       To use custom video frames instead of the camera feed, configure the SDK to accept external video data.

       The following code enables the external video source mode and specifies the type as \`VIDEO_FRAME\`, indicating you will push raw pixel data to the SDK.

       \`\`\`cpp
       void SetExternalVideoSource()
       {
         agora::rtc::SenderOptions sendoptions;
         int ret = MediaEngineManager->setExternalVideoSource(true, false, agora::media::EXTERNAL_VIDEO_SOURCE_TYPE::VIDEO_FRAME, sendoptions);
         UBFL_Logger::Print(FString::Printf(TEXT("%s setExternalVideoSource ret %d"), *FString(FUNCTION_MACRO), ret), LogMsgViewPtr);
       }
       \`\`\`

    2. **Join a channel**

       Enable audio and video, set the client role, and join the channel.

       \`\`\`cpp
       void JoinChannel()
       {
         AgoraUERtcEngine::Get()->enableAudio();
         AgoraUERtcEngine::Get()->enableVideo();
         AgoraUERtcEngine::Get()->setClientRole(CLIENT_ROLE_BROADCASTER);
         int ret = AgoraUERtcEngine::Get()->joinChannel(TCHAR_TO_UTF8(*Token), TCHAR_TO_UTF8(*ChannelName), "", 0);
       }
       \`\`\`

    3. **Implement custom video capture**

       Set up a callback to capture frames from Unreal Engine's rendering pipeline. Register for the back buffer ready event to capture rendered frames.

       \`\`\`cpp
       void InitAgoraWidget(FString APP_ID, FString TOKEN, FString CHANNEL_NAME)
       {
         // ... other initialization code ...

         // Register for back buffer ready callback
         if (FSlateApplication::IsInitialized())
         {
           eventId = FSlateApplication::Get().GetRenderer()->OnBackBufferReadyToPresent().AddUObject(this, &UCustomCaptureVideoScene::OnBackBufferReady_RenderThread);
         }
       }
       \`\`\`

    4. **Push video frames**

       Capture frames from Unreal Engine's rendering pipeline on the render thread, convert them to raw BGRA pixel format, and send them to the Agora SDK as external video frames.

       <CalloutContainer type="info">
         <CalloutDescription>
           To synchronize audio and video streams, use system timestamp for the \`timestamp\` field in the \`ExternalVideoFrame\`.
         </CalloutDescription>
       </CalloutContainer>

       \`\`\`cpp
       void OnBackBufferReady_RenderThread(SWindow& window, const FTexture2DRHIRef& BackBuffer)
       {
         FRHICommandListImmediate& RHICmdList = FRHICommandListExecutor::GetImmediateCommandList();
         auto width = BackBuffer->GetSizeX();
         auto height = BackBuffer->GetSizeY();
         FIntRect Rect(0, 0, BackBuffer->GetSizeX(), BackBuffer->GetSizeY());
         TArray<FColor> Data;

         RHICmdList.ReadSurfaceData(BackBuffer, Rect, Data, FReadSurfaceDataFlags());

         if (UserExternalVideoFrame == nullptr)
         {
           UserExternalVideoFrame = new agora::media::base::ExternalVideoFrame();
         }

         // Configure the video frame
         UserExternalVideoFrame->type = agora::media::base::ExternalVideoFrame::VIDEO_BUFFER_TYPE::VIDEO_BUFFER_RAW_DATA;
         UserExternalVideoFrame->format = agora::media::base::VIDEO_PIXEL_FORMAT::VIDEO_PIXEL_BGRA;
         UserExternalVideoFrame->stride = BackBuffer->GetSizeX();
         UserExternalVideoFrame->height = BackBuffer->GetSizeY();
         UserExternalVideoFrame->cropLeft = 10;
         UserExternalVideoFrame->cropTop = 10;
         UserExternalVideoFrame->cropRight = 10;
         UserExternalVideoFrame->cropBottom = 10;
         UserExternalVideoFrame->rotation = 0;
         UserExternalVideoFrame->timestamp = getTimeStamp();

         if (UserExternalVideoFrame->buffer == nullptr)
         {
           UserExternalVideoFrame->buffer = (uint8*)FMemory::Malloc(BackBuffer->GetSizeX() * BackBuffer->GetSizeY() * 4);
         }

         if (Data.Num() > 4)
         {
           FMemory::Memcpy(UserExternalVideoFrame->buffer, Data.GetData(), BackBuffer->GetSizeX() * BackBuffer->GetSizeY() * 4);
           if (MediaEngineManager != nullptr)
           {
             // Push the video frame to the SDK
             MediaEngineManager->pushVideoFrame(UserExternalVideoFrame);
           }
         }
       }

       std::time_t getTimeStamp()
       {
         std::chrono::time_point<std::chrono::system_clock, std::chrono::milliseconds> tp =
           std::chrono::time_point_cast<std::chrono::milliseconds>(std::chrono::system_clock::now());
         std::time_t timestamp = tp.time_since_epoch().count();
         return timestamp;
       }
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           The sample code demonstrates converting Unreal's BGRA format to raw video data. Agora video capture supports pushing external video frames in other formats; refer to \`VIDEO_PIXEL_FORMAT\`.
         </CalloutDescription>
       </CalloutContainer>

    5. **Cleanup**

       When finished unregister the callback and clean up resources.

       \`\`\`cpp
       void NativeDestruct()
       {
         Super::NativeDestruct();

         // Remove the back buffer callback
         FSlateApplication::Get().GetRenderer()->OnBackBufferReadyToPresent().Remove(eventId);

         UnInitAgoraEngine();
       }

       void UnInitAgoraEngine()
       {
         if (AgoraUERtcEngine::Get() != nullptr)
         {
           AgoraUERtcEngine::Get()->leaveChannel();
           AgoraUERtcEngine::Get()->unregisterEventHandler(UserRtcEventHandler.Get());
           AgoraUERtcEngine::Release();
           MediaEngineManager = nullptr;
         }
       }
       \`\`\`

    ### Custom video rendering [#custom-video-rendering-4]

    To implement custom video rendering in your game, refer to the following steps:

    1. Set up \`onCaptureVideoFrame\` or \`onRenderVideoFrame\` callback to obtain the video data to be played.
    2. Implement video rendering and playback yourself.

    ## Reference [#reference-5]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Applicable use-cases [#applicable-use-cases-4]

    Use custom video capture in the following industries and use-cases:

    **Specialized video processing and enhancement**

    In specific gaming or virtual reality use-cases, real-time effects processing, filter handling, or other enhancement effects necessitate direct access to the original video stream. Custom video capture facilitates this, enabling seamless real-time processing and enhances the overall gaming or virtual reality experience for a more realistic outcome.

    **High-precision video capture**

    In video surveillance applications, detailed observation and analysis of scene details is necessary. Custom video capture enables higher image quality and finer control over capture to meet the requirements of video monitoring.

    **Capture from specific video sources**

    Industries such as IoT and live streaming often require the use of specific cameras, monitoring devices, or non-camera video sources, such as video capture cards or screen recording data. In such situations, default RTC SDK capture may not meet your requirements, necessitating use of custom video capture.

    **Seamless integration with specific devices or third-party applications**

    In smart home or IoT applications, transmitting video from devices to users' smartphones or computers for monitoring and control may require the use of specific devices or applications for video capture. Custom video capture facilitates seamless integration of specific devices or applications with the RTC SDK.

    **Specific video encoding formats**

    In certain live streaming use-cases, specific video encoding formats may be needed to meet business requirements. In such cases, RTC SDK default capture might not suffice, and custom video capture is required to capture and encode videos in specific formats.

    ### Advantages [#advantages-4]

    Using custom video capture offers the following advantages:

    **More types of video streams**

    Custom video capture allows the use of higher quality and a greater variety of capture devices and cameras, resulting in clearer and smoother video streams. This enhances the user viewing experience and makes the product more competitive.

    **More flexible video effects**

    Custom video capture enables you to implement richer and more personalized video effects and filters, enhancing the user experience. You can implement effects such as beautification filters and dynamic stickers.

    **Adaptation to diverse use-case requirements**

    Custom video capture helps applications better adapt to the requirements of various use-cases, such as live streaming, video conferencing, and online education. You can customize different video capture solutions based on the use-case requirements to provide a more robust application.

    ### Sample projects [#sample-projects-3]

    Agora provides a open-source sample project for your reference. Download [CustomCaptureVideo](https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-CPP-Example/Source/AgoraExample/Examples/Advanced/CustomCaptureVideo) or view the source code for a more detailed example.

    ### API reference [#api-reference-5]

    * [\`setExternalVideoSource\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_imediaengine.html#api_imediaengine_setexternalvideosource)
    * [\`pushVideoFrame\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_imediaengine.html#api_imediaengine_pushvideoframe)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Custom video capture refers to the collection of a video stream from a custom source. Unlike the default video capture method, custom video capture enables you to control the capture source, and precisely adjust video attributes. You can dynamically adjust parameters such as video quality, resolution, and frame rate to adapt to various application use-cases. For example, you can capture video from high-definition cameras, and drone cameras."
  }, {
    heading: undefined,
    content: "Agora recommends default video capture for its stability, reliability, and ease of integration. Custom video capture offers flexibility and customization for specific video capture use-cases where default video capture does not fulfill your requirements."
  }, {
    heading: "understand-the-tech",
    content: "RTC SDK provides a custom video track method for video self-collection. You can create and publish custom video tracks to one or more channels. You use the self-capture module to drive the capture device, and send the captured video frames to the SDK through the video track."
  }, {
    heading: "understand-the-tech",
    content: "The following figure illustrates the video data transmission process when custom video capture is implemented:"
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-the-logic",
    content: "This section shows you how to implement custom video capture and custom video rendering in your app."
  }, {
    heading: "custom-video-capture",
    content: "The following figure shows the workflow you implement to capture and stream a custom video source in your app."
  }, {
    heading: "custom-video-capture",
    content: "**Custom video capture**"
  }, {
    heading: "custom-video-capture",
    content: "Take the following steps to implement this workflow:"
  }, {
    heading: "custom-video-capture",
    content: "Create a custom video track"
  }, {
    heading: "custom-video-capture",
    content: "To create a custom video track and obtain the video track ID, call `createCustomVideoTrack` after initializing an instance of `RtcEngine`. To create multiple custom video tracks, call the method multiple times."
  }, {
    heading: "custom-video-capture",
    content: "Join a channel and publish the custom video track"
  }, {
    heading: "custom-video-capture",
    content: "Implement your self-capture module"
  }, {
    heading: "custom-video-capture",
    content: "Agora provides the VideoFileReader demo project that shows you how to read `YUV` format video data from a local file. In a production environment, create a custom video module for your device using RTC SDK based on your business requirements."
  }, {
    heading: "custom-video-capture",
    content: "Push video data to the SDK"
  }, {
    heading: "custom-video-capture",
    content: "Before sending captured video frames to RTC SDK, integrate your video module with the `VideoFrame`. To ensure audio-video synchronization, best practice is to obtain the current monotonic time from RTC SDK and pass it as the timestamp parameter in the `VideoFrame`."
  }, {
    heading: "custom-video-capture",
    content: "To ensure audio-video synchronization, set the timestamp parameter of `VideoFrame` to the system's Monotonic Time. Use `getCurrentMonotonicTimeInMs` to obtain the current monotonic Time."
  }, {
    heading: "custom-video-capture",
    content: "Call `pushExternalVideoFrameById` \\[2/2] to push the captured video frames through the video track to RTC SDK. Ensure that the `videoTrackId` matches the track ID you specified when joining the channel. Customize parameters like pixel format, data type, and timestamp in the `VideoFrame`."
  }, {
    heading: "custom-video-capture",
    content: "The following code samples demonstrate pushing `I420`, `NV21`, `NV12`, and `Texture` format video data:"
  }, {
    heading: "custom-video-capture",
    content: "**I420**"
  }, {
    heading: "custom-video-capture",
    content: "**NV21**"
  }, {
    heading: "custom-video-capture",
    content: "**NV12**"
  }, {
    heading: "custom-video-capture",
    content: "**Texture**"
  }, {
    heading: "custom-video-capture",
    content: "If the captured custom video format is Texture and remote users experience flickering or distortion in the captured video, it is recommended to first duplicate the video data and then send both the original and duplicated video data back to the RTC SDK. This helps eliminate anomalies during internal data encoding processes."
  }, {
    heading: "custom-video-capture",
    content: "Destroy custom video tracks"
  }, {
    heading: "custom-video-capture",
    content: "To stop custom video capture and destroy the video track, call `destroyCustomVideoTrack`."
  }, {
    heading: "custom-video-rendering",
    content: "To implement custom video rendering in your app, refer to the following steps:"
  }, {
    heading: "custom-video-rendering",
    content: "Set up `onCaptureVideoFrame` or `onRenderVideoFrame` callback to obtain the video data to be played."
  }, {
    heading: "custom-video-rendering",
    content: "Implement video rendering and playback yourself."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "applicable-use-cases",
    content: "Use custom video capture in the following industries and use-cases:"
  }, {
    heading: "applicable-use-cases",
    content: "**Specialized video processing and enhancement**"
  }, {
    heading: "applicable-use-cases",
    content: "In specific gaming or virtual reality use-cases, real-time effects processing, filter handling, or other enhancement effects necessitate direct access to the original video stream. Custom video capture facilitates this, enabling seamless real-time processing and enhances the overall gaming or virtual reality experience for a more realistic outcome."
  }, {
    heading: "applicable-use-cases",
    content: "**High-precision video capture**"
  }, {
    heading: "applicable-use-cases",
    content: "In video surveillance applications, detailed observation and analysis of scene details is necessary. Custom video capture enables higher image quality and finer control over capture to meet the requirements of video monitoring."
  }, {
    heading: "applicable-use-cases",
    content: "**Capture from specific video sources**"
  }, {
    heading: "applicable-use-cases",
    content: "Industries such as IoT and live streaming often require the use of specific cameras, monitoring devices, or non-camera video sources, such as video capture cards or screen recording data. In such situations, default RTC SDK capture may not meet your requirements, necessitating use of custom video capture."
  }, {
    heading: "applicable-use-cases",
    content: "**Seamless integration with specific devices or third-party applications**"
  }, {
    heading: "applicable-use-cases",
    content: "In smart home or IoT applications, transmitting video from devices to users' smartphones or computers for monitoring and control may require the use of specific devices or applications for video capture. Custom video capture facilitates seamless integration of specific devices or applications with the RTC SDK."
  }, {
    heading: "applicable-use-cases",
    content: "**Specific video encoding formats**"
  }, {
    heading: "applicable-use-cases",
    content: "In certain live streaming use-cases, specific video encoding formats may be needed to meet business requirements. In such cases, RTC SDK default capture might not suffice, and custom video capture is required to capture and encode videos in specific formats."
  }, {
    heading: "advantages",
    content: "Using custom video capture offers the following advantages:"
  }, {
    heading: "advantages",
    content: "**More types of video streams**"
  }, {
    heading: "advantages",
    content: "Custom video capture allows the use of higher quality and a greater variety of capture devices and cameras, resulting in clearer and smoother video streams. This enhances the user viewing experience and makes the product more competitive."
  }, {
    heading: "advantages",
    content: "**More flexible video effects**"
  }, {
    heading: "advantages",
    content: "Custom video capture enables you to implement richer and more personalized video effects and filters, enhancing the user experience. You can implement effects such as beautification filters and dynamic stickers."
  }, {
    heading: "advantages",
    content: "**Adaptation to diverse use-case requirements**"
  }, {
    heading: "advantages",
    content: "Custom video capture helps applications better adapt to the requirements of various use-cases, such as live streaming, video conferencing, and online education. You can customize different video capture solutions based on the use-case requirements to provide a more robust application."
  }, {
    heading: "sample-projects",
    content: "Agora provides the following open-source sample projects for your reference. Download the project or view the source code for a more detailed example."
  }, {
    heading: "sample-projects",
    content: "MultiVideoSourceTracks: Video self-capture"
  }, {
    heading: "sample-projects",
    content: "CustomRemoteVideoRender: Custom remote video rendering"
  }, {
    heading: "api-reference",
    content: "`createCustomVideoTrack`"
  }, {
    heading: "api-reference",
    content: "`destroyCustomVideoTrack`"
  }, {
    heading: "api-reference",
    content: "`getCurrentMonotonicTimeInMs`"
  }, {
    heading: "api-reference",
    content: "`joinChannel`"
  }, {
    heading: "api-reference",
    content: "`pushExternalVideoFrameById` \\[2/2]"
  }, {
    heading: "api-reference",
    content: "`onCaptureVideoFrame`"
  }, {
    heading: "api-reference",
    content: "`onRenderVideoFrame`"
  }, {
    heading: "understand-the-tech-1",
    content: "RTC SDK provides a custom video track method for video self-collection. You can create and publish custom video tracks to one or more channels. You use the self-capture module to drive the capture device, and send the captured video frames to the SDK through the video track."
  }, {
    heading: "understand-the-tech-1",
    content: "The following figure illustrates the video data transmission process when custom video capture is implemented:"
  }, {
    heading: "prerequisites-1",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-the-logic-1",
    content: "This section shows you how to implement custom video capture and custom video rendering in your app."
  }, {
    heading: "custom-video-capture-1",
    content: "The figure below shows the workflow you need to implement to stream a custom video source in your app."
  }, {
    heading: "custom-video-capture-1",
    content: "**Custom video capture**"
  }, {
    heading: "custom-video-capture-1",
    content: "Take the following steps to implement this workflow:"
  }, {
    heading: "custom-video-capture-1",
    content: "Create a custom video track"
  }, {
    heading: "custom-video-capture-1",
    content: "To create a custom video track and obtain the video track ID, call `createCustomVideoTrack` after initializing an instance of `AgoraRtcEngineKit`. To create multiple custom video tracks, call the method multiple times."
  }, {
    heading: "custom-video-capture-1",
    content: "Join a channel and publish the custom video track"
  }, {
    heading: "custom-video-capture-1",
    content: "Implement your self-capture module"
  }, {
    heading: "custom-video-capture-1",
    content: "Agora provides the CustomVideoSourcePushMulti demo project that shows you how to read `YUV` format video data from a local file. In a production environment, create a custom video module for your device using RTC SDK based on your business requirements."
  }, {
    heading: "custom-video-capture-1",
    content: "Push video data to the SDK"
  }, {
    heading: "custom-video-capture-1",
    content: "Use `pushExternalVideoFrame` to send the captured video frame to the SDK through the video track. Ensure that the `videoTrackId` matches the video track ID specified when joining the channel. In `AgoraVideoFrame`, you can set the pixel format, data type, timestamp, and other parameters of the video frame."
  }, {
    heading: "custom-video-capture-1",
    content: "The following code demonstrates how to push video data in the `CVPixelBufferRef` format. For other supported video frame formats, refer to the `format` field in AgoraVideoFrame."
  }, {
    heading: "custom-video-capture-1",
    content: "To ensure audio and video synchronization, Agora recommends setting the `time` (timestamp) of `AgoraVideoFrame` to the system monotonic time. To retrieve the current monotonic time, call `getCurrentMonotonicTimeInMs`."
  }, {
    heading: "custom-video-capture-1",
    content: "If the captured custom video format is Texture and remote users experience flickering or distortion in the captured video, it is recommended to first duplicate the video data and then send both the original and duplicated video data back to the RTC SDK. This helps eliminate anomalies during internal data encoding processes."
  }, {
    heading: "custom-video-capture-1",
    content: "Destroy custom video track"
  }, {
    heading: "custom-video-capture-1",
    content: "To stop publishing the custom video track, call `destroyCustomVideoTrack`."
  }, {
    heading: "custom-video-rendering-1",
    content: "To implement custom video rendering in your app, refer to the following steps:"
  }, {
    heading: "custom-video-rendering-1",
    content: "Set up `onCaptureVideoFrame` or `onRenderVideoFrame` callback to obtain the video data to be played."
  }, {
    heading: "custom-video-rendering-1",
    content: "Implement video rendering and playback yourself."
  }, {
    heading: "custom-video-rendering-1",
    content: "In `renderPixelBuffer` or `renderRawData`, the `rotation` parameter of the video frame may not be 0. You need to set the rotation parameters yourself."
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "applicable-use-cases-1",
    content: "Use custom video capture in the following industries and use-cases:"
  }, {
    heading: "applicable-use-cases-1",
    content: "**Specialized video processing and enhancement**"
  }, {
    heading: "applicable-use-cases-1",
    content: "In specific gaming or virtual reality use-cases, real-time effects processing, filter handling, or other enhancement effects necessitate direct access to the original video stream. Custom video capture facilitates this, enabling seamless real-time processing and enhances the overall gaming or virtual reality experience for a more realistic outcome."
  }, {
    heading: "applicable-use-cases-1",
    content: "**High-precision video capture**"
  }, {
    heading: "applicable-use-cases-1",
    content: "In video surveillance applications, detailed observation and analysis of scene details is necessary. Custom video capture enables higher image quality and finer control over capture to meet the requirements of video monitoring."
  }, {
    heading: "applicable-use-cases-1",
    content: "**Capture from specific video sources**"
  }, {
    heading: "applicable-use-cases-1",
    content: "Industries such as IoT and live streaming often require the use of specific cameras, monitoring devices, or non-camera video sources, such as video capture cards or screen recording data. In such situations, default RTC SDK capture may not meet your requirements, necessitating use of custom video capture."
  }, {
    heading: "applicable-use-cases-1",
    content: "**Seamless integration with specific devices or third-party applications**"
  }, {
    heading: "applicable-use-cases-1",
    content: "In smart home or IoT applications, transmitting video from devices to users' smartphones or computers for monitoring and control may require the use of specific devices or applications for video capture. Custom video capture facilitates seamless integration of specific devices or applications with the RTC SDK."
  }, {
    heading: "applicable-use-cases-1",
    content: "**Specific video encoding formats**"
  }, {
    heading: "applicable-use-cases-1",
    content: "In certain live streaming use-cases, specific video encoding formats may be needed to meet business requirements. In such cases, RTC SDK default capture might not suffice, and custom video capture is required to capture and encode videos in specific formats."
  }, {
    heading: "advantages-1",
    content: "Using custom video capture offers the following advantages:"
  }, {
    heading: "advantages-1",
    content: "**More types of video streams**"
  }, {
    heading: "advantages-1",
    content: "Custom video capture allows the use of higher quality and a greater variety of capture devices and cameras, resulting in clearer and smoother video streams. This enhances the user viewing experience and makes the product more competitive."
  }, {
    heading: "advantages-1",
    content: "**More flexible video effects**"
  }, {
    heading: "advantages-1",
    content: "Custom video capture enables you to implement richer and more personalized video effects and filters, enhancing the user experience. You can implement effects such as beautification filters and dynamic stickers."
  }, {
    heading: "advantages-1",
    content: "**Adaptation to diverse use-case requirements**"
  }, {
    heading: "advantages-1",
    content: "Custom video capture helps applications better adapt to the requirements of various use-cases, such as live streaming, video conferencing, and online education. You can customize different video capture solutions based on the use-case requirements to provide a more robust application."
  }, {
    heading: "sample-projects-1",
    content: "Agora provides the following open-source sample projects for your reference. Download the project or view the source code for a more detailed example."
  }, {
    heading: "sample-projects-1",
    content: "CustomVideoSourcePush: Video self-capture"
  }, {
    heading: "sample-projects-1",
    content: "CustomVideoRender: Custom video rendering"
  }, {
    heading: "sample-projects-1",
    content: "CustomVideoSourcePushMulti.swift: Read YUV format video data from a local file."
  }, {
    heading: "api-reference-1",
    content: "`createCustomVideoTrack`"
  }, {
    heading: "api-reference-1",
    content: "`destroyCustomVideoTrack`"
  }, {
    heading: "api-reference-1",
    content: "`setExternalVideoSource`"
  }, {
    heading: "api-reference-1",
    content: "`pushExternalVideoFrame` \\[2/2]"
  }, {
    heading: "api-reference-1",
    content: "`onRenderVideoFrame(_:uid:channelId:)`"
  }, {
    heading: "api-reference-1",
    content: "`onCapture(_:sourceType:)`"
  }, {
    heading: "api-reference-1",
    content: "`getCurrentMonotonicTimeInMs`"
  }, {
    heading: "api-reference-1",
    content: "`joinChannel`"
  }, {
    heading: "understand-the-tech-2",
    content: "RTC SDK provides a custom video track method for video self-collection. You can create and publish custom video tracks to one or more channels. You use the self-capture module to drive the capture device, and send the captured video frames to the SDK through the video track."
  }, {
    heading: "understand-the-tech-2",
    content: "The following figure illustrates the video data transmission process when custom video capture is implemented:"
  }, {
    heading: "prerequisites-2",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-the-logic-2",
    content: "This section shows you how to implement custom video capture and custom video rendering in your app."
  }, {
    heading: "custom-video-capture-2",
    content: "The figure below shows the workflow you need to implement to stream a custom video source in your app."
  }, {
    heading: "custom-video-capture-2",
    content: "Take the following steps to implement this workflow:"
  }, {
    heading: "custom-video-capture-2",
    content: "Create a custom video track"
  }, {
    heading: "custom-video-capture-2",
    content: "To create a custom video track and obtain the video track ID, call `createCustomVideoTrack` after initializing an instance of `AgoraRtcEngineKit`. To create multiple custom video tracks, call the method multiple times."
  }, {
    heading: "custom-video-capture-2",
    content: "Join a channel and publish the custom video track"
  }, {
    heading: "custom-video-capture-2",
    content: "Implement your self-capture module"
  }, {
    heading: "custom-video-capture-2",
    content: "Agora provides the CustomVideoSourcePushMulti demo project that shows you how to read `YUV` format video data from a local file. In a production environment, create a custom video module for your device using RTC SDK based on your business requirements."
  }, {
    heading: "custom-video-capture-2",
    content: "Push video data to the SDK"
  }, {
    heading: "custom-video-capture-2",
    content: "Use `pushExternalVideoFrame` to send the captured video frame to the SDK through the video track. Ensure that the `videoTrackId` matches the video track ID specified when joining the channel. In `AgoraVideoFrame`, you can set the pixel format, data type, timestamp, and other parameters of the video frame."
  }, {
    heading: "custom-video-capture-2",
    content: "The following code demonstrates how to push video data in the `CVPixelBufferRef` format. For other supported video frame formats, refer to the `format` field in AgoraVideoFrame."
  }, {
    heading: "custom-video-capture-2",
    content: "To ensure audio and video synchronization, Agora recommends setting the `time` (timestamp) of `AgoraVideoFrame` to the system monotonic time. To retrieve the current monotonic time, call `getCurrentMonotonicTimeInMs`."
  }, {
    heading: "custom-video-capture-2",
    content: "If the captured custom video format is Texture and remote users experience flickering or distortion in the captured video, it is recommended to first duplicate the video data and then send both the original and duplicated video data back to the RTC SDK. This helps eliminate anomalies during internal data encoding processes."
  }, {
    heading: "custom-video-capture-2",
    content: "Destroy custom video track"
  }, {
    heading: "custom-video-capture-2",
    content: "To stop publishing the custom video track, call `destroyCustomVideoTrack`."
  }, {
    heading: "custom-video-rendering-2",
    content: "To implement custom video rendering in your app, refer to the following steps:"
  }, {
    heading: "custom-video-rendering-2",
    content: "Set up `onCaptureVideoFrame` or `onRenderVideoFrame` callback to obtain the video data to be played."
  }, {
    heading: "custom-video-rendering-2",
    content: "Implement video rendering and playback yourself."
  }, {
    heading: "custom-video-rendering-2",
    content: "In `renderPixelBuffer` or `renderRawData`, the `rotation` parameter of the video frame may not be 0. You need to set the rotation parameters yourself."
  }, {
    heading: "reference-2",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "applicable-use-cases-2",
    content: "Use custom video capture in the following industries and use-cases:"
  }, {
    heading: "applicable-use-cases-2",
    content: "**Specialized video processing and enhancement**"
  }, {
    heading: "applicable-use-cases-2",
    content: "In specific gaming or virtual reality use-cases, real-time effects processing, filter handling, or other enhancement effects necessitate direct access to the original video stream. Custom video capture facilitates this, enabling seamless real-time processing and enhances the overall gaming or virtual reality experience for a more realistic outcome."
  }, {
    heading: "applicable-use-cases-2",
    content: "**High-precision video capture**"
  }, {
    heading: "applicable-use-cases-2",
    content: "In video surveillance applications, detailed observation and analysis of scene details is necessary. Custom video capture enables higher image quality and finer control over capture to meet the requirements of video monitoring."
  }, {
    heading: "applicable-use-cases-2",
    content: "**Capture from specific video sources**"
  }, {
    heading: "applicable-use-cases-2",
    content: "Industries such as IoT and live streaming often require the use of specific cameras, monitoring devices, or non-camera video sources, such as video capture cards or screen recording data. In such situations, default RTC SDK capture may not meet your requirements, necessitating use of custom video capture."
  }, {
    heading: "applicable-use-cases-2",
    content: "**Seamless integration with specific devices or third-party applications**"
  }, {
    heading: "applicable-use-cases-2",
    content: "In smart home or IoT applications, transmitting video from devices to users' smartphones or computers for monitoring and control may require the use of specific devices or applications for video capture. Custom video capture facilitates seamless integration of specific devices or applications with the RTC SDK."
  }, {
    heading: "applicable-use-cases-2",
    content: "**Specific video encoding formats**"
  }, {
    heading: "applicable-use-cases-2",
    content: "In certain live streaming use-cases, specific video encoding formats may be needed to meet business requirements. In such cases, RTC SDK default capture might not suffice, and custom video capture is required to capture and encode videos in specific formats."
  }, {
    heading: "advantages-2",
    content: "Using custom video capture offers the following advantages:"
  }, {
    heading: "advantages-2",
    content: "**More types of video streams**"
  }, {
    heading: "advantages-2",
    content: "Custom video capture allows the use of higher quality and a greater variety of capture devices and cameras, resulting in clearer and smoother video streams. This enhances the user viewing experience and makes the product more competitive."
  }, {
    heading: "advantages-2",
    content: "**More flexible video effects**"
  }, {
    heading: "advantages-2",
    content: "Custom video capture enables you to implement richer and more personalized video effects and filters, enhancing the user experience. You can implement effects such as beautification filters and dynamic stickers."
  }, {
    heading: "advantages-2",
    content: "**Adaptation to diverse use-case requirements**"
  }, {
    heading: "advantages-2",
    content: "Custom video capture helps applications better adapt to the requirements of various use-cases, such as live streaming, video conferencing, and online education. You can customize different video capture solutions based on the use-case requirements to provide a more robust application."
  }, {
    heading: "sample-projects-2",
    content: "Agora provides the following open-source sample projects for your reference. Download the project or view the source code for a more detailed example."
  }, {
    heading: "sample-projects-2",
    content: "CustomVideoSourcePush: Video self-capture"
  }, {
    heading: "sample-projects-2",
    content: "CustomVideoRender: Custom video rendering"
  }, {
    heading: "api-reference-2",
    content: "`createCustomVideoTrack`"
  }, {
    heading: "api-reference-2",
    content: "`destroyCustomVideoTrack`"
  }, {
    heading: "api-reference-2",
    content: "`setExternalVideoSource`"
  }, {
    heading: "api-reference-2",
    content: "`pushExternalVideoFrame` \\[2/2]"
  }, {
    heading: "api-reference-2",
    content: "`onRenderVideoFrame(_:uid:channelId:)`"
  }, {
    heading: "api-reference-2",
    content: "`onCapture(_:sourceType:)`"
  }, {
    heading: "api-reference-2",
    content: "`getCurrentMonotonicTimeInMs`"
  }, {
    heading: "api-reference-2",
    content: "`joinChannel`"
  }, {
    heading: "api-reference-2",
    content: "Try out the online demo for Custom video source."
  }, {
    heading: "understand-the-tech-3",
    content: "RTC SDK provides support for creating local video tracks by passing in a MediaStreamTrack object to `createCustomVideoTrack`."
  }, {
    heading: "prerequisites-3",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-the-logic-3",
    content: "This section shows you how to create and publish a custom video track from a media streams or a canvas stream."
  }, {
    heading: "create-a-custom-video-track-a-media-stream",
    content: "You can implement custom video capture or preprocessing by obtaining a `MediaStreamTrack` object. For example, manually call the `getUserMedia` method to obtain a `MediaStreamTrack`, then use the `createCustomVideoTrack` method to create a local video track object for use in RTC SDK."
  }, {
    heading: "create-a-custom-video-track-a-media-stream",
    content: "You can also use HTMLMediaElement.captureStream or HTMLCanvasElement.captureStream to obtain the `MediaStreamTrack` object."
  }, {
    heading: "create-a-custom-video-track-a-media-stream",
    content: "The `MediaStreamTrack` object refers to the browser-native `MediaStreamTrack` API. For details on usage and browser support, see th `MediaStreamTrack` API documentation."
  }, {
    heading: "create-a-custom-video-track-from-a-canvas-stream",
    content: "To create and publish a custom video track generated from a canvas stream, follow these steps:"
  }, {
    heading: "create-a-custom-video-track-from-a-canvas-stream",
    content: "Create a canvas element and set its dimensions."
  }, {
    heading: "create-a-custom-video-track-from-a-canvas-stream",
    content: "Continuously draw content on the canvas using `requestAnimationFrame` to ensure the stream updates in real time."
  }, {
    heading: "create-a-custom-video-track-from-a-canvas-stream",
    content: "Capture a media stream from the canvas."
  }, {
    heading: "create-a-custom-video-track-from-a-canvas-stream",
    content: "Create a custom video track using the canvas stream."
  }, {
    heading: "create-a-custom-video-track-from-a-canvas-stream",
    content: "Publish the custom video track to the channel."
  }, {
    heading: "create-a-custom-video-track-from-a-canvas-stream",
    content: "Refer to the following example:"
  }, {
    heading: "reference-3",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-3",
    content: "`createCustomVideoTrack`"
  }, {
    heading: "api-reference-3",
    content: "`LocalVideoTrack`"
  }, {
    heading: "understand-the-tech-4",
    content: "RTC SDK provides a custom video track method for video self-collection. You can create and publish custom video tracks to one or more channels. You use the self-capture module to drive the capture device, and send the captured video frames to the SDK through the video track."
  }, {
    heading: "understand-the-tech-4",
    content: "The following figure illustrates the video data transmission process when custom video capture is implemented:"
  }, {
    heading: "prerequisites-4",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-the-logic-4",
    content: "This section shows you how to implement custom video capture and custom video rendering in your app."
  }, {
    heading: "custom-video-capture-3",
    content: "The following figure shows the workflow you implement to capture and stream a custom video source in your app."
  }, {
    heading: "custom-video-capture-3",
    content: "**Custom video capture**"
  }, {
    heading: "custom-video-capture-3",
    content: "Take the following steps to implement this workflow:"
  }, {
    heading: "custom-video-capture-3",
    content: "Create a custom video track"
  }, {
    heading: "custom-video-capture-3",
    content: "To create a custom video track and obtain the video track ID, call `createCustomVideoTrack` after initializing an instance of `IRtcEngine`. To create multiple custom video tracks, call the method multiple times."
  }, {
    heading: "custom-video-capture-3",
    content: "Join a channel and publish the custom video track"
  }, {
    heading: "custom-video-capture-3",
    content: "Implement self-capture module"
  }, {
    heading: "custom-video-capture-3",
    content: "Agora provides the YUVReader.cpp and YUVReader.h demo projects that show you how to read `YUV` format video data from a local file. In a production environment, create a custom video module for your device using RTC SDK based on your business requirements."
  }, {
    heading: "custom-video-capture-3",
    content: "Push video data to the SDK"
  }, {
    heading: "custom-video-capture-3",
    content: "Call `pushVideoFrame` to push the captured video frames through the video track to RTC SDK. Ensure that the `videoTrackId` matches the track ID you specified when joining the channel. Customize parameters like pixel format, data type, and timestamp in the `VideoFrame`."
  }, {
    heading: "custom-video-capture-3",
    content: "To ensure audio-video synchronization, set the timestamp parameter of `VideoFrame` to the system's Monotonic Time. Use `getCurrentMonotonicTimeInMs` to obtain the current Monotonic Time."
  }, {
    heading: "custom-video-capture-3",
    content: "The sample code demonstrates converting YUV format to raw video data in `I420` format. Agora video self-capture supports pushing external video frames in other formats; refer to `VIDEO_PIXEL_FORMAT`."
  }, {
    heading: "custom-video-capture-3",
    content: "If the captured custom video format is Texture and remote users experience flickering or distortion in the captured video, it is recommended to first duplicate the video data and then send both the original and duplicated video data back to the RTC SDK. This helps eliminate anomalies during internal data encoding processes."
  }, {
    heading: "custom-video-capture-3",
    content: "Destroy custom video tracks"
  }, {
    heading: "custom-video-capture-3",
    content: "To stop custom video capture and destroy the video track, call `destroyCustomVideoTrack`. To destroy multiple video tracks, call the method for each track."
  }, {
    heading: "custom-video-rendering-3",
    content: "To implement custom video rendering in your app, refer to the following steps:"
  }, {
    heading: "custom-video-rendering-3",
    content: "Set up `onCaptureVideoFrame` or `onRenderVideoFrame` callback to obtain the video data to be played."
  }, {
    heading: "custom-video-rendering-3",
    content: "Implement video rendering and playback yourself."
  }, {
    heading: "reference-4",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "applicable-use-cases-3",
    content: "Use custom video capture in the following industries and use-cases:"
  }, {
    heading: "applicable-use-cases-3",
    content: "**Specialized video processing and enhancement**"
  }, {
    heading: "applicable-use-cases-3",
    content: "In specific gaming or virtual reality use-cases, real-time effects processing, filter handling, or other enhancement effects necessitate direct access to the original video stream. Custom video capture facilitates this, enabling seamless real-time processing and enhances the overall gaming or virtual reality experience for a more realistic outcome."
  }, {
    heading: "applicable-use-cases-3",
    content: "**High-precision video capture**"
  }, {
    heading: "applicable-use-cases-3",
    content: "In video surveillance applications, detailed observation and analysis of scene details is necessary. Custom video capture enables higher image quality and finer control over capture to meet the requirements of video monitoring."
  }, {
    heading: "applicable-use-cases-3",
    content: "**Capture from specific video sources**"
  }, {
    heading: "applicable-use-cases-3",
    content: "Industries such as IoT and live streaming often require the use of specific cameras, monitoring devices, or non-camera video sources, such as video capture cards or screen recording data. In such situations, default RTC SDK capture may not meet your requirements, necessitating use of custom video capture."
  }, {
    heading: "applicable-use-cases-3",
    content: "**Seamless integration with specific devices or third-party applications**"
  }, {
    heading: "applicable-use-cases-3",
    content: "In smart home or IoT applications, transmitting video from devices to users' smartphones or computers for monitoring and control may require the use of specific devices or applications for video capture. Custom video capture facilitates seamless integration of specific devices or applications with the RTC SDK."
  }, {
    heading: "applicable-use-cases-3",
    content: "**Specific video encoding formats**"
  }, {
    heading: "applicable-use-cases-3",
    content: "In certain live streaming use-cases, specific video encoding formats may be needed to meet business requirements. In such cases, RTC SDK default capture might not suffice, and custom video capture is required to capture and encode videos in specific formats."
  }, {
    heading: "advantages-3",
    content: "Using custom video capture offers the following advantages:"
  }, {
    heading: "advantages-3",
    content: "**More types of video streams**"
  }, {
    heading: "advantages-3",
    content: "Custom video capture allows the use of higher quality and a greater variety of capture devices and cameras, resulting in clearer and smoother video streams. This enhances the user viewing experience and makes the product more competitive."
  }, {
    heading: "advantages-3",
    content: "**More flexible video effects**"
  }, {
    heading: "advantages-3",
    content: "Custom video capture enables you to implement richer and more personalized video effects and filters, enhancing the user experience. You can implement effects such as beautification filters and dynamic stickers."
  }, {
    heading: "advantages-3",
    content: "**Adaptation to diverse use-case requirements**"
  }, {
    heading: "advantages-3",
    content: "Custom video capture helps applications better adapt to the requirements of various use-cases, such as live streaming, video conferencing, and online education. You can customize different video capture solutions based on the use-case requirements to provide a more robust application."
  }, {
    heading: "sample-project",
    content: "Agora provides the following open-source sample projects for your reference. Download the project or view the source code for a more detailed example."
  }, {
    heading: "sample-project",
    content: "MultiVideoSourceTracks: Video self-capture"
  }, {
    heading: "sample-project",
    content: "CustomVideoCapture: Custom video rendering"
  }, {
    heading: "api-reference-4",
    content: "`createCustomVideoTrack`"
  }, {
    heading: "api-reference-4",
    content: "`destroyCustomVideoTrack`"
  }, {
    heading: "api-reference-4",
    content: "`getCurrentMonotonicTimeInMs`"
  }, {
    heading: "api-reference-4",
    content: "`joinChannel`"
  }, {
    heading: "api-reference-4",
    content: "`pushVideoFrame`"
  }, {
    heading: "api-reference-4",
    content: "`onCaptureVideoFrame`"
  }, {
    heading: "api-reference-4",
    content: "`onRenderVideoFrame`"
  }, {
    heading: "understand-the-tech-5",
    content: "RTC SDK provides a custom video track method for video self-collection. You can create and publish custom video tracks to one or more channels. You use the self-capture module to drive the capture device, and send the captured video frames to the SDK through the video track."
  }, {
    heading: "understand-the-tech-5",
    content: "The following figure illustrates the video data transmission process when custom video capture is implemented:"
  }, {
    heading: "prerequisites-5",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-the-logic-5",
    content: "This section shows you how to implement custom video capture and custom video rendering in your game."
  }, {
    heading: "initialize-mediaengine",
    content: "Before implementing custom video features, obtain the `MediaEngine` interface from the initialized `RtcEngine`:"
  }, {
    heading: "initialize-mediaengine",
    content: "The MediaEngine is not created directly. Instead, it's obtained as an interface from the initialized RtcEngine using the `queryInterface` method with `AGORA_IID_MEDIA_ENGINE`."
  }, {
    heading: "custom-video-capture-4",
    content: "The following figure shows the workflow you implement to capture and stream a custom video source in your game."
  }, {
    heading: "custom-video-capture-4",
    content: "**Custom video capture**"
  }, {
    heading: "custom-video-capture-4",
    content: "Take the following steps to implement this workflow:"
  }, {
    heading: "custom-video-capture-4",
    content: "**Set up the external video source**"
  }, {
    heading: "custom-video-capture-4",
    content: "To use custom video frames instead of the camera feed, configure the SDK to accept external video data."
  }, {
    heading: "custom-video-capture-4",
    content: "The following code enables the external video source mode and specifies the type as `VIDEO_FRAME`, indicating you will push raw pixel data to the SDK."
  }, {
    heading: "custom-video-capture-4",
    content: "**Join a channel**"
  }, {
    heading: "custom-video-capture-4",
    content: "Enable audio and video, set the client role, and join the channel."
  }, {
    heading: "custom-video-capture-4",
    content: "**Implement custom video capture**"
  }, {
    heading: "custom-video-capture-4",
    content: "Set up a callback to capture frames from Unreal Engine's rendering pipeline. Register for the back buffer ready event to capture rendered frames."
  }, {
    heading: "custom-video-capture-4",
    content: "**Push video frames**"
  }, {
    heading: "custom-video-capture-4",
    content: "Capture frames from Unreal Engine's rendering pipeline on the render thread, convert them to raw BGRA pixel format, and send them to the Agora SDK as external video frames."
  }, {
    heading: "custom-video-capture-4",
    content: "To synchronize audio and video streams, use system timestamp for the `timestamp` field in the `ExternalVideoFrame`."
  }, {
    heading: "custom-video-capture-4",
    content: "The sample code demonstrates converting Unreal's BGRA format to raw video data. Agora video capture supports pushing external video frames in other formats; refer to `VIDEO_PIXEL_FORMAT`."
  }, {
    heading: "custom-video-capture-4",
    content: "**Cleanup**"
  }, {
    heading: "custom-video-capture-4",
    content: "When finished unregister the callback and clean up resources."
  }, {
    heading: "custom-video-rendering-4",
    content: "To implement custom video rendering in your game, refer to the following steps:"
  }, {
    heading: "custom-video-rendering-4",
    content: "Set up `onCaptureVideoFrame` or `onRenderVideoFrame` callback to obtain the video data to be played."
  }, {
    heading: "custom-video-rendering-4",
    content: "Implement video rendering and playback yourself."
  }, {
    heading: "reference-5",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "applicable-use-cases-4",
    content: "Use custom video capture in the following industries and use-cases:"
  }, {
    heading: "applicable-use-cases-4",
    content: "**Specialized video processing and enhancement**"
  }, {
    heading: "applicable-use-cases-4",
    content: "In specific gaming or virtual reality use-cases, real-time effects processing, filter handling, or other enhancement effects necessitate direct access to the original video stream. Custom video capture facilitates this, enabling seamless real-time processing and enhances the overall gaming or virtual reality experience for a more realistic outcome."
  }, {
    heading: "applicable-use-cases-4",
    content: "**High-precision video capture**"
  }, {
    heading: "applicable-use-cases-4",
    content: "In video surveillance applications, detailed observation and analysis of scene details is necessary. Custom video capture enables higher image quality and finer control over capture to meet the requirements of video monitoring."
  }, {
    heading: "applicable-use-cases-4",
    content: "**Capture from specific video sources**"
  }, {
    heading: "applicable-use-cases-4",
    content: "Industries such as IoT and live streaming often require the use of specific cameras, monitoring devices, or non-camera video sources, such as video capture cards or screen recording data. In such situations, default RTC SDK capture may not meet your requirements, necessitating use of custom video capture."
  }, {
    heading: "applicable-use-cases-4",
    content: "**Seamless integration with specific devices or third-party applications**"
  }, {
    heading: "applicable-use-cases-4",
    content: "In smart home or IoT applications, transmitting video from devices to users' smartphones or computers for monitoring and control may require the use of specific devices or applications for video capture. Custom video capture facilitates seamless integration of specific devices or applications with the RTC SDK."
  }, {
    heading: "applicable-use-cases-4",
    content: "**Specific video encoding formats**"
  }, {
    heading: "applicable-use-cases-4",
    content: "In certain live streaming use-cases, specific video encoding formats may be needed to meet business requirements. In such cases, RTC SDK default capture might not suffice, and custom video capture is required to capture and encode videos in specific formats."
  }, {
    heading: "advantages-4",
    content: "Using custom video capture offers the following advantages:"
  }, {
    heading: "advantages-4",
    content: "**More types of video streams**"
  }, {
    heading: "advantages-4",
    content: "Custom video capture allows the use of higher quality and a greater variety of capture devices and cameras, resulting in clearer and smoother video streams. This enhances the user viewing experience and makes the product more competitive."
  }, {
    heading: "advantages-4",
    content: "**More flexible video effects**"
  }, {
    heading: "advantages-4",
    content: "Custom video capture enables you to implement richer and more personalized video effects and filters, enhancing the user experience. You can implement effects such as beautification filters and dynamic stickers."
  }, {
    heading: "advantages-4",
    content: "**Adaptation to diverse use-case requirements**"
  }, {
    heading: "advantages-4",
    content: "Custom video capture helps applications better adapt to the requirements of various use-cases, such as live streaming, video conferencing, and online education. You can customize different video capture solutions based on the use-case requirements to provide a more robust application."
  }, {
    heading: "sample-projects-3",
    content: "Agora provides a open-source sample project for your reference. Download CustomCaptureVideo or view the source code for a more detailed example."
  }, {
    heading: "api-reference-5",
    content: "`setExternalVideoSource`"
  }, {
    heading: "api-reference-5",
    content: "`pushVideoFrame`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-the-logic",
    content: "Implement the logic"
  }, {
    id: "custom-video-capture",
    content: "Custom video capture"
  }, {
    id: "custom-video-rendering",
    content: "Custom video rendering"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "applicable-use-cases",
    content: "Applicable use-cases"
  }, {
    id: "advantages",
    content: "Advantages"
  }, {
    id: "sample-projects",
    content: "Sample projects"
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
    id: "implement-the-logic-1",
    content: "Implement the logic"
  }, {
    id: "custom-video-capture-1",
    content: "Custom video capture"
  }, {
    id: "custom-video-rendering-1",
    content: "Custom video rendering"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "applicable-use-cases-1",
    content: "Applicable use-cases"
  }, {
    id: "advantages-1",
    content: "Advantages"
  }, {
    id: "sample-projects-1",
    content: "Sample projects"
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
    id: "implement-the-logic-2",
    content: "Implement the logic"
  }, {
    id: "custom-video-capture-2",
    content: "Custom video capture"
  }, {
    id: "custom-video-rendering-2",
    content: "Custom video rendering"
  }, {
    id: "reference-2",
    content: "Reference"
  }, {
    id: "applicable-use-cases-2",
    content: "Applicable use-cases"
  }, {
    id: "advantages-2",
    content: "Advantages"
  }, {
    id: "sample-projects-2",
    content: "Sample projects"
  }, {
    id: "api-reference-2",
    content: "API reference"
  }, {
    id: "understand-the-tech-3",
    content: "Understand the tech"
  }, {
    id: "prerequisites-3",
    content: "Prerequisites"
  }, {
    id: "implement-the-logic-3",
    content: "Implement the logic"
  }, {
    id: "create-a-custom-video-track-a-media-stream",
    content: "Create a custom video track a media stream"
  }, {
    id: "create-a-custom-video-track-from-a-canvas-stream",
    content: "Create a custom video track from a canvas stream"
  }, {
    id: "reference-3",
    content: "Reference"
  }, {
    id: "api-reference-3",
    content: "API reference"
  }, {
    id: "understand-the-tech-4",
    content: "Understand the tech"
  }, {
    id: "prerequisites-4",
    content: "Prerequisites"
  }, {
    id: "implement-the-logic-4",
    content: "Implement the logic"
  }, {
    id: "custom-video-capture-3",
    content: "Custom video capture"
  }, {
    id: "custom-video-rendering-3",
    content: "Custom video rendering"
  }, {
    id: "reference-4",
    content: "Reference"
  }, {
    id: "applicable-use-cases-3",
    content: "Applicable use-cases"
  }, {
    id: "advantages-3",
    content: "Advantages"
  }, {
    id: "sample-project",
    content: "Sample project"
  }, {
    id: "api-reference-4",
    content: "API reference"
  }, {
    id: "understand-the-tech-5",
    content: "Understand the tech"
  }, {
    id: "prerequisites-5",
    content: "Prerequisites"
  }, {
    id: "implement-the-logic-5",
    content: "Implement the logic"
  }, {
    id: "initialize-mediaengine",
    content: "Initialize MediaEngine"
  }, {
    id: "custom-video-capture-4",
    content: "Custom video capture"
  }, {
    id: "custom-video-rendering-4",
    content: "Custom video rendering"
  }, {
    id: "reference-5",
    content: "Reference"
  }, {
    id: "applicable-use-cases-4",
    content: "Applicable use-cases"
  }, {
    id: "advantages-4",
    content: "Advantages"
  }, {
    id: "sample-projects-3",
    content: "Sample projects"
  }, {
    id: "api-reference-5",
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
  url: "#implement-the-logic",
  title: _jsx(_Fragment, {
    children: "Implement the logic"
  })
}, {
  depth: 3,
  url: "#custom-video-capture",
  title: _jsx(_Fragment, {
    children: "Custom video capture"
  })
}, {
  depth: 3,
  url: "#custom-video-rendering",
  title: _jsx(_Fragment, {
    children: "Custom video rendering"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#applicable-use-cases",
  title: _jsx(_Fragment, {
    children: "Applicable use-cases"
  })
}, {
  depth: 3,
  url: "#advantages",
  title: _jsx(_Fragment, {
    children: "Advantages"
  })
}, {
  depth: 3,
  url: "#sample-projects",
  title: _jsx(_Fragment, {
    children: "Sample projects"
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
  url: "#implement-the-logic-1",
  title: _jsx(_Fragment, {
    children: "Implement the logic"
  })
}, {
  depth: 3,
  url: "#custom-video-capture-1",
  title: _jsx(_Fragment, {
    children: "Custom video capture"
  })
}, {
  depth: 3,
  url: "#custom-video-rendering-1",
  title: _jsx(_Fragment, {
    children: "Custom video rendering"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#applicable-use-cases-1",
  title: _jsx(_Fragment, {
    children: "Applicable use-cases"
  })
}, {
  depth: 3,
  url: "#advantages-1",
  title: _jsx(_Fragment, {
    children: "Advantages"
  })
}, {
  depth: 3,
  url: "#sample-projects-1",
  title: _jsx(_Fragment, {
    children: "Sample projects"
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
  url: "#implement-the-logic-2",
  title: _jsx(_Fragment, {
    children: "Implement the logic"
  })
}, {
  depth: 3,
  url: "#custom-video-capture-2",
  title: _jsx(_Fragment, {
    children: "Custom video capture"
  })
}, {
  depth: 3,
  url: "#custom-video-rendering-2",
  title: _jsx(_Fragment, {
    children: "Custom video rendering"
  })
}, {
  depth: 2,
  url: "#reference-2",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#applicable-use-cases-2",
  title: _jsx(_Fragment, {
    children: "Applicable use-cases"
  })
}, {
  depth: 3,
  url: "#advantages-2",
  title: _jsx(_Fragment, {
    children: "Advantages"
  })
}, {
  depth: 3,
  url: "#sample-projects-2",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#api-reference-2",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-3",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-3",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-the-logic-3",
  title: _jsx(_Fragment, {
    children: "Implement the logic"
  })
}, {
  depth: 3,
  url: "#create-a-custom-video-track-a-media-stream",
  title: _jsx(_Fragment, {
    children: "Create a custom video track a media stream"
  })
}, {
  depth: 3,
  url: "#create-a-custom-video-track-from-a-canvas-stream",
  title: _jsx(_Fragment, {
    children: "Create a custom video track from a canvas stream"
  })
}, {
  depth: 2,
  url: "#reference-3",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-3",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-4",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-4",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-the-logic-4",
  title: _jsx(_Fragment, {
    children: "Implement the logic"
  })
}, {
  depth: 3,
  url: "#custom-video-capture-3",
  title: _jsx(_Fragment, {
    children: "Custom video capture"
  })
}, {
  depth: 3,
  url: "#custom-video-rendering-3",
  title: _jsx(_Fragment, {
    children: "Custom video rendering"
  })
}, {
  depth: 2,
  url: "#reference-4",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#applicable-use-cases-3",
  title: _jsx(_Fragment, {
    children: "Applicable use-cases"
  })
}, {
  depth: 3,
  url: "#advantages-3",
  title: _jsx(_Fragment, {
    children: "Advantages"
  })
}, {
  depth: 3,
  url: "#sample-project",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference-4",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-5",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-5",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-the-logic-5",
  title: _jsx(_Fragment, {
    children: "Implement the logic"
  })
}, {
  depth: 3,
  url: "#initialize-mediaengine",
  title: _jsx(_Fragment, {
    children: "Initialize MediaEngine"
  })
}, {
  depth: 3,
  url: "#custom-video-capture-4",
  title: _jsx(_Fragment, {
    children: "Custom video capture"
  })
}, {
  depth: 3,
  url: "#custom-video-rendering-4",
  title: _jsx(_Fragment, {
    children: "Custom video rendering"
  })
}, {
  depth: 2,
  url: "#reference-5",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#applicable-use-cases-4",
  title: _jsx(_Fragment, {
    children: "Applicable use-cases"
  })
}, {
  depth: 3,
  url: "#advantages-4",
  title: _jsx(_Fragment, {
    children: "Advantages"
  })
}, {
  depth: 3,
  url: "#sample-projects-3",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#api-reference-5",
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
      children: "Custom video capture refers to the collection of a video stream from a custom source. Unlike the default video capture method, custom video capture enables you to control the capture source, and precisely adjust video attributes. You can dynamically adjust parameters such as video quality, resolution, and frame rate to adapt to various application use-cases. For example, you can capture video from high-definition cameras, and drone cameras."
    }), `
`, _jsx(_components.p, {
      children: "Agora recommends default video capture for its stability, reliability, and ease of integration. Custom video capture offers flexibility and customization for specific video capture use-cases where default video capture does not fulfill your requirements."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","ios","macos","web","windows","unreal"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsx(_components.h2, {
          id: "understand-the-tech",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK provides a custom video track method for video self-collection. You can create and publish custom video tracks to one or more channels. You use the self-capture module to drive the capture device, and send the captured video frames to the SDK through the video track."
        }), _jsx(_components.p, {
          children: "The following figure illustrates the video data transmission process when custom video capture is implemented:"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/publish-custom-tracks-in-a-channel.svg",
            alt: "Custom video source"
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
          id: "implement-the-logic",
          children: "Implement the logic"
        }), _jsx(_components.p, {
          children: "This section shows you how to implement custom video capture and custom video rendering in your app."
        }), _jsx(_components.h3, {
          id: "custom-video-capture",
          children: "Custom video capture"
        }), _jsx(_components.p, {
          children: "The following figure shows the workflow you implement to capture and stream a custom video source in your app."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Custom video capture"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/custom-video-capture.svg",
            alt: "API call sequence"
          })
        }), _jsx(_components.p, {
          children: "Take the following steps to implement this workflow:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Create a custom video track"
            }), `
`, _jsxs(_components.p, {
              children: ["To create a custom video track and obtain the video track ID, call ", _jsx(_components.code, {
                children: "createCustomVideoTrack"
              }), " after initializing an instance of ", _jsx(_components.code, {
                children: "RtcEngine"
              }), ". To create multiple custom video tracks, call the method multiple times."]
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
                    children: _jsx(_components.code, {
                      children: _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: " videoTrackId "
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
                          children: "createCustomVideoTrack"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "();"
                        })]
                      })
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
                    children: _jsx(_components.code, {
                      children: _jsxs(_components.span, {
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
                          children: " videoTrackId "
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
                          children: "createCustomVideoTrack"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "()"
                        })]
                      })
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
              children: "Join a channel and publish the custom video track"
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
                          children: "// Create a ChannelMediaOptions instance"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "  ChannelMediaOptions option "
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
                          children: "  // Set the client role to BROADCASTER"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "  option.clientRoleType "
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
                          children: " Constants.CLIENT_ROLE_BROADCASTER;"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "  // Enable auto subscription of audio and video"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "  option.autoSubscribeAudio "
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
                          children: "  option.autoSubscribeVideo "
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
                          children: "  // Publish self-captured video stream"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "  option.publishCustomVideoTrack "
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
                          children: "  // Set custom video track ID"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "  option.customVideoTrackId "
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
                          children: " videoTrackId;"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "  // Join a channel with the specified options"
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
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " res "
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
                          children: " engine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "joinChannel"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(accessToken, channelId, "
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
                          children: ", option);"
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
                          children: "// Create a ChannelMediaOptions instance"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " val"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " option "
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
                          children: " ChannelMediaOptions"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "()."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "apply"
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
                          children: "   // Set the client role to BROADCASTER"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "   clientRoleType "
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
                          children: " Constants.CLIENT_ROLE_BROADCASTER"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "   // Enable auto subscription of audio and video"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "   autoSubscribeAudio "
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
                          children: "   autoSubscribeVideo "
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
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "   // Publish self-captured video stream"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "   publishCustomVideoTrack "
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
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "   // Set custom video track ID"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "   customVideoTrackId "
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
                          children: " videoTrackId"
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
                        className: "line"
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Join a channel with the specified options"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " val"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " res "
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
                          children: " engine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "joinChannel"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(accessToken, channelId, "
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
                          children: ", option)"
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
              children: "Implement your self-capture module"
            }), `
`, _jsxs(_components.p, {
              children: ["Agora provides the ", _jsx(_components.a, {
                href: "https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/utils/VideoFileReader.java",
                children: "VideoFileReader"
              }), " demo project that shows you how to read ", _jsx(_components.code, {
                children: "YUV"
              }), " format video data from a local file. In a production environment, create a custom video module for your device using RTC SDK based on your business requirements."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Push video data to the SDK"
            }), `
`, _jsxs(_components.p, {
              children: ["Before sending captured video frames to RTC SDK, integrate your video module with the ", _jsx(_components.code, {
                children: "VideoFrame"
              }), ". To ensure audio-video synchronization, best practice is to obtain the current monotonic time from RTC SDK and pass it as the timestamp parameter in the ", _jsx(_components.code, {
                children: "VideoFrame"
              }), "."]
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["To ensure audio-video synchronization, set the timestamp parameter of ", _jsx(_components.code, {
                    children: "VideoFrame"
                  }), " to the system's Monotonic Time. Use ", _jsx(_components.code, {
                    children: "getCurrentMonotonicTimeInMs"
                  }), " to obtain the current monotonic Time."]
                })
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "pushExternalVideoFrameById"
              }), " [2/2] to push the captured video frames through the video track to RTC SDK. Ensure that the ", _jsx(_components.code, {
                children: "videoTrackId"
              }), " matches the track ID you specified when joining the channel. Customize parameters like pixel format, data type, and timestamp in the ", _jsx(_components.code, {
                children: "VideoFrame"
              }), "."]
            }), `
`, _jsxs(_components.p, {
              children: ["The following code samples demonstrate pushing ", _jsx(_components.code, {
                children: "I420"
              }), ", ", _jsx(_components.code, {
                children: "NV21"
              }), ", ", _jsx(_components.code, {
                children: "NV12"
              }), ", and ", _jsx(_components.code, {
                children: "Texture"
              }), " format video data:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "I420"
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
                              children: " pushVideoFrameByI420"
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
                              children: " trackId, "
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
                              children: "[] yuv, "
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
                              children: " width, "
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
                              children: " height) {"
                            })]
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "  // Create an i420Buffer object and store the original YUV data in the buffer"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  JavaI420Buffer i420Buffer "
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
                              children: "allocate"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(width, height);"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataY"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
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
                              children: "(yuv, "
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
                              children: ", i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataY"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "limit"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "());"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataU"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
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
                              children: "(yuv, i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataY"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "limit"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(), i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataU"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "limit"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "());"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataV"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
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
                              children: "(yuv, i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataY"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "limit"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "() "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "+"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataU"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "limit"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(), i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataV"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "limit"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "());"
                            })]
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "  // Get the current monotonic time from the SDK"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "  long"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " currentMonotonicTimeInMs "
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
                              children: " engine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getCurrentMonotonicTimeInMs"
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
                              children: "  // Create a VideoFrame object, passing the I420 video frame to be pushed and the monotonic time of the video frame (in nanoseconds)"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  VideoFrame videoFrame "
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
                              children: "(i420Buffer, "
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
                              children: ", currentMonotonicTimeInMs "
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
                              children: " 1000000"
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
                              children: "  // Push the video frame to the SDK through the video track"
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
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " ret "
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
                              children: " engine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "pushExternalVideoFrameById"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(videoFrame, trackId);"
                            })]
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "  // Release the memory resources occupied by the i420Buffer object"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "release"
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
                              children: " (ret "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "!="
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " Constants.ERR_OK) {"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "    Log."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "w"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(TAG, "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: '"pushExternalVideoFrame error"'
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
                              children: "private"
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
                              children: " pushVideoFrameByI420"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(trackId: "
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
                              children: ", yuv: "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "ByteArray"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: ", width: "
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
                              children: ", height: "
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
                              children: "  // Create an i420Buffer object and store the original YUV data in the buffer"
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
                              children: " i420Buffer "
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
                              children: "allocate"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(width, height)"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataY"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
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
                              children: "(yuv, "
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
                              children: ", i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataY"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "limit"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "())"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataU"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
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
                              children: "(yuv, i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataY"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "limit"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(), i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataU"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "limit"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "())"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataV"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
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
                              children: "(yuv, i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataY"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "limit"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "() "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "+"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataU"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "limit"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(), i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getDataV"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "()."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "limit"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "())"
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
                              children: "  // Get the current monotonic time from the SDK"
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
                              children: " currentMonotonicTimeInMs "
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
                              children: " engine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getCurrentMonotonicTimeInMs"
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
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "  // Create a VideoFrame object, passing the I420 video frame to be pushed and the monotonic time of the video frame (in nanoseconds)"
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
                              children: " videoFrame "
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
                              children: "(i420Buffer, "
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
                              children: ", currentMonotonicTimeInMs "
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
                              children: " 1_000_000"
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
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "  // Push the video frame to the SDK through the video track"
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
                              children: " ret "
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
                              children: " engine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "pushExternalVideoFrameById"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(videoFrame, trackId)"
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
                              children: "  // Release the memory resources occupied by the i420Buffer object"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  i420Buffer."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "release"
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
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " (ret "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "!="
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " Constants.ERR_OK) {"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "    Log."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "w"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(TAG, "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: '"pushExternalVideoFrame error"'
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
                    })
                  })]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "NV21"
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
                              children: " pushVideoFrameByNV21"
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
                              children: " trackId, "
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
                              children: "[] nv21, "
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
                              children: " width, height) {"
                            })]
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "  // Create a frameBuffer object and store the original YUV data in the NV21 format buffer"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  VideoFrame.Buffer frameBuffer "
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
                              children: " NV21Buffer"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(nv21, width, height, "
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
                              children: "  // Get the current monotonic time from the SDK"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "  long"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " currentMonotonicTimeInMs "
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
                              children: " engine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getCurrentMonotonicTimeInMs"
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
                              children: "  // Create a VideoFrame object, pass the NV21 video frame to be pushed and the monotonic time of the video frame (in nanoseconds)"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  VideoFrame videoFrame "
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
                              children: "(frameBuffer, "
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
                              children: ", currentMonotonicTimeInMs "
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
                              children: " 1000000"
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
                              children: "  // Push the video frame to the SDK through the video track"
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
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " ret "
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
                              children: " engine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "pushExternalVideoFrameById"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(videoFrame, trackId);"
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
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " (ret "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "!="
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " Constants.ERR_OK) {"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "    Log."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "w"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(TAG, "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: '"pushExternalVideoFrame error"'
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
                              children: "private"
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
                              children: " pushVideoFrameByNV21"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(trackId: "
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
                              children: ", nv21: "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "ByteArray"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: ", width: "
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
                              children: ", height: "
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
                              children: "  // Create a frameBuffer object and store the original YUV data in the NV21 format buffer"
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
                              children: " frameBuffer: "
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
                              children: ".Buffer "
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
                              children: " NV21Buffer"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(nv21, width, height, "
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
                              children: "  // Get the current monotonic time from the SDK"
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
                              children: " currentMonotonicTimeInMs "
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
                              children: " engine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getCurrentMonotonicTimeInMs"
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
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "  // Create a VideoFrame object, pass the NV21 video frame to be pushed and the monotonic time of the video frame (in nanoseconds)"
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
                              children: " videoFrame "
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
                              children: "(frameBuffer, "
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
                              children: ", currentMonotonicTimeInMs "
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
                              children: " 1_000_000"
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
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "  // Push the video frame to the SDK through the video track"
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
                              children: " ret "
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
                              children: " engine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "pushExternalVideoFrameById"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(videoFrame, trackId)"
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
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " (ret "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "!="
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " Constants.ERR_OK) {"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "    Log."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "w"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(TAG, "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: '"pushExternalVideoFrame error"'
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
                    })
                  })]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "NV12"
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
                              children: " pushVideoFrameByNV12"
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
                              children: " trackId, ByteBuffer nv12, "
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
                              children: " width, "
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
                              children: " height) {"
                            })]
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "  // Create a frameBuffer object and store the original YUV data in the NV12 format buffer"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  VideoFrame.Buffer frameBuffer "
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
                              children: " NV12Buffer"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(width, height, width, height, nv12, "
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
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "  // Get the current monotonic time from the SDK"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "  long"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " currentMonotonicTimeInMs "
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
                              children: " engine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getCurrentMonotonicTimeInMs"
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
                              children: "  // Create a VideoFrame object, pass the NV12 video frame to be pushed and the monotonic time of the video frame (in nanoseconds)"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  VideoFrame videoFrame "
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
                              children: "(frameBuffer, "
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
                              children: ", currentMonotonicTimeInMs "
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
                              children: " 1000000"
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
                              children: "  // Push the video frame to the SDK through the video track"
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
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " ret "
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
                              children: " engine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "pushExternalVideoFrameById"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(videoFrame, trackId);"
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
                              children: " (ret "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "!="
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " Constants.ERR_OK) {"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "      Log."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "w"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(TAG, "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: '"pushExternalVideoFrame error"'
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
                              children: "private"
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
                              children: " pushVideoFrameByNV12"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(trackId: "
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
                              children: ", nv12: "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "ByteBuffer"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: ", width: "
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
                              children: ", height: "
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
                              children: "  // Create a frameBuffer object and store the original YUV data in the NV12 format buffer"
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
                              children: " frameBuffer: "
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
                              children: ".Buffer "
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
                              children: " NV12Buffer"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(width, height, width, height, nv12, "
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
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "  // Get the current monotonic time from the SDK"
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
                              children: " currentMonotonicTimeInMs "
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
                              children: " engine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getCurrentMonotonicTimeInMs"
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
                              children: "  // Create a VideoFrame object, pass the NV12 video frame to be pushed and the monotonic time of the video frame (in nanoseconds)"
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
                              children: " videoFrame "
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
                              children: "(frameBuffer, "
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
                              children: ", currentMonotonicTimeInMs "
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
                              children: " 1_000_000"
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
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "  // Push the video frame to the SDK through the video track"
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
                              children: " ret "
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
                              children: " engine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "pushExternalVideoFrameById"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(videoFrame, trackId)"
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
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " (ret "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "!="
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " Constants.ERR_OK) {"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "    Log."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "w"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(TAG, "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: '"pushExternalVideoFrame error"'
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
                    })
                  })]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Texture"
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
                              children: " pushVideoFrameByTexture"
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
                              children: " trackId, "
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
                              children: " textureId, VideoFrame.TextureBuffer.Type textureType, "
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
                              children: " width, "
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
                              children: " height) {"
                            })]
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "  // Create a frameBuffer object to store the texture format video frame"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  VideoFrame.Buffer frameBuffer "
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
                              children: " TextureBuffer"
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
                              children: "    EglBaseProvider."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getCurrentEglContext"
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
                              children: "    width,"
                            })
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "    height,"
                            })
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "    textureType,"
                            })
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "    textureId,"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "    new"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: " Matrix"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(),"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#005CC5",
                                "--shiki-dark": "#79B8FF"
                              },
                              children: "    null"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: ","
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#005CC5",
                                "--shiki-dark": "#79B8FF"
                              },
                              children: "    null"
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
                              children: "    null"
                            })
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
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "  // Get the current monotonic time from the SDK"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "  long"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " currentMonotonicTimeInMs "
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
                              children: " engine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getCurrentMonotonicTimeInMs"
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
                              children: "  // Create a VideoFrame object, passing the texture video frame to be pushed and the monotonic time of the video frame (in nanoseconds)"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  VideoFrame videoFrame "
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
                              children: "(frameBuffer, "
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
                              children: ", currentMonotonicTimeInMs "
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
                              children: " 1000000"
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
                              children: "  // Push the video frame to the SDK through the video track"
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
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " ret "
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
                              children: " engine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "pushExternalVideoFrameById"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(videoFrame, trackId);"
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
                              children: " (ret "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "!="
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " Constants.ERR_OK) {"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "    Log."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "w"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(TAG, "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: '"pushExternalVideoFrame error"'
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
                              children: "private"
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
                              children: " pushVideoFrameByTexture"
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
                              children: "    trackId: "
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
                              children: "    textureId: "
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
                              children: "    textureType: "
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
                              children: ".TextureBuffer.Type,"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "    width: "
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
                              children: "    height: "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "Int"
                            })]
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  ) {"
                            })
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "  // Create a frameBuffer object to store the texture format video frame"
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
                              children: " frameBuffer: "
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
                              children: ".Buffer "
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
                              children: " TextureBuffer"
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
                              children: "    EglBaseProvider."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getCurrentEglContext"
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
                              children: "    width,"
                            })
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "    height,"
                            })
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "    textureType,"
                            })
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "    textureId,"
                            })
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "    Matrix"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(),"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#005CC5",
                                "--shiki-dark": "#79B8FF"
                              },
                              children: "    null"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: ","
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#005CC5",
                                "--shiki-dark": "#79B8FF"
                              },
                              children: "    null"
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
                              children: "    null"
                            })
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "  )"
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
                              children: "  // Get the current monotonic time from the SDK"
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
                              children: " currentMonotonicTimeInMs "
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
                              children: " engine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "getCurrentMonotonicTimeInMs"
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
                              children: "  // Create a VideoFrame object, passing the texture video frame to be pushed and the monotonic time of the video frame (in nanoseconds)"
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
                              children: " videoFrame "
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
                              children: "(frameBuffer, "
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
                              children: ", currentMonotonicTimeInMs "
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
                              children: " 1_000_000"
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
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "  // Push the video frame to the SDK through the video track"
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
                              children: " ret "
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
                              children: " engine."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "pushExternalVideoFrameById"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(videoFrame, trackId)"
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
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " (ret "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "!="
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " Constants.ERR_OK) {"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "    Log."
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "w"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "(TAG, "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: '"pushExternalVideoFrame error"'
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
                    })
                  })]
                }), `
`]
              }), `
`]
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsx(_components.p, {
                  children: "If the captured custom video format is Texture and remote users experience flickering or distortion in the captured video, it is recommended to first duplicate the video data and then send both the original and duplicated video data back to the RTC SDK. This helps eliminate anomalies during internal data encoding processes."
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Destroy custom video tracks"
            }), `
`, _jsxs(_components.p, {
              children: ["To stop custom video capture and destroy the video track, call ", _jsx(_components.code, {
                children: "destroyCustomVideoTrack"
              }), "."]
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
                          children: "// Destroy custom video track"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " engine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "destroyCustomVideoTrack"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(videoTrack);"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Leave the channel"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " engine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "leaveChannelEx"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(connection);"
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
                          children: "// Destroy custom video track"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " engine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "destroyCustomVideoTrack"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(videoTrack)"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Leave the channel"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " engine."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "leaveChannelEx"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(connection)"
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
          id: "custom-video-rendering",
          children: "Custom video rendering"
        }), _jsx(_components.p, {
          children: "To implement custom video rendering in your app, refer to the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Set up ", _jsx(_components.code, {
              children: "onCaptureVideoFrame"
            }), " or ", _jsx(_components.code, {
              children: "onRenderVideoFrame"
            }), " callback to obtain the video data to be played."]
          }), `
`, _jsx(_components.li, {
            children: "Implement video rendering and playback yourself."
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "applicable-use-cases",
          children: "Applicable use-cases"
        }), _jsx(_components.p, {
          children: "Use custom video capture in the following industries and use-cases:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Specialized video processing and enhancement"
          })
        }), _jsx(_components.p, {
          children: "In specific gaming or virtual reality use-cases, real-time effects processing, filter handling, or other enhancement effects necessitate direct access to the original video stream. Custom video capture facilitates this, enabling seamless real-time processing and enhances the overall gaming or virtual reality experience for a more realistic outcome."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "High-precision video capture"
          })
        }), _jsx(_components.p, {
          children: "In video surveillance applications, detailed observation and analysis of scene details is necessary. Custom video capture enables higher image quality and finer control over capture to meet the requirements of video monitoring."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Capture from specific video sources"
          })
        }), _jsx(_components.p, {
          children: "Industries such as IoT and live streaming often require the use of specific cameras, monitoring devices, or non-camera video sources, such as video capture cards or screen recording data. In such situations, default RTC SDK capture may not meet your requirements, necessitating use of custom video capture."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Seamless integration with specific devices or third-party applications"
          })
        }), _jsx(_components.p, {
          children: "In smart home or IoT applications, transmitting video from devices to users' smartphones or computers for monitoring and control may require the use of specific devices or applications for video capture. Custom video capture facilitates seamless integration of specific devices or applications with the RTC SDK."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Specific video encoding formats"
          })
        }), _jsx(_components.p, {
          children: "In certain live streaming use-cases, specific video encoding formats may be needed to meet business requirements. In such cases, RTC SDK default capture might not suffice, and custom video capture is required to capture and encode videos in specific formats."
        }), _jsx(_components.h3, {
          id: "advantages",
          children: "Advantages"
        }), _jsx(_components.p, {
          children: "Using custom video capture offers the following advantages:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "More types of video streams"
          })
        }), _jsx(_components.p, {
          children: "Custom video capture allows the use of higher quality and a greater variety of capture devices and cameras, resulting in clearer and smoother video streams. This enhances the user viewing experience and makes the product more competitive."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "More flexible video effects"
          })
        }), _jsx(_components.p, {
          children: "Custom video capture enables you to implement richer and more personalized video effects and filters, enhancing the user experience. You can implement effects such as beautification filters and dynamic stickers."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Adaptation to diverse use-case requirements"
          })
        }), _jsx(_components.p, {
          children: "Custom video capture helps applications better adapt to the requirements of various use-cases, such as live streaming, video conferencing, and online education. You can customize different video capture solutions based on the use-case requirements to provide a more robust application."
        }), _jsx(_components.h3, {
          id: "sample-projects",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora provides the following open-source sample projects for your reference. Download the project or view the source code for a more detailed example."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/examples/advanced/MultiVideoSourceTracks.java",
              children: "MultiVideoSourceTracks"
            }), ": Video self-capture"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/examples/advanced/CustomRemoteVideoRender.java",
              children: "CustomRemoteVideoRender"
            }), ": Custom remote video rendering"]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_createcustomvideotrack",
              children: _jsx(_components.code, {
                children: "createCustomVideoTrack"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_destroycustomvideotrack",
              children: _jsx(_components.code, {
                children: "destroyCustomVideoTrack"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_getcurrentmonotonictimeinms",
              children: _jsx(_components.code, {
                children: "getCurrentMonotonicTimeInMs"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsxs(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_pushvideoframe3",
              children: [_jsx(_components.code, {
                children: "pushExternalVideoFrameById"
              }), " [2/2]"]
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
          canonicalPlatform: "web",
          platform: "ios"
        }), _jsx(_components.h2, {
          id: "understand-the-tech-1",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK provides a custom video track method for video self-collection. You can create and publish custom video tracks to one or more channels. You use the self-capture module to drive the capture device, and send the captured video frames to the SDK through the video track."
        }), _jsx(_components.p, {
          children: "The following figure illustrates the video data transmission process when custom video capture is implemented:"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/publish-custom-tracks-in-a-channel.svg",
            alt: "Custom video source"
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
          id: "implement-the-logic-1",
          children: "Implement the logic"
        }), _jsx(_components.p, {
          children: "This section shows you how to implement custom video capture and custom video rendering in your app."
        }), _jsx(_components.h3, {
          id: "custom-video-capture-1",
          children: "Custom video capture"
        }), _jsx(_components.p, {
          children: "The figure below shows the workflow you need to implement to stream a custom video source in your app."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Custom video capture"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/custom-video-capture.svg",
            alt: "API call sequence"
          })
        }), _jsx(_components.p, {
          children: "Take the following steps to implement this workflow:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Create a custom video track"
            }), `
`, _jsxs(_components.p, {
              children: ["To create a custom video track and obtain the video track ID, call ", _jsx(_components.code, {
                children: "createCustomVideoTrack"
              }), " after initializing an instance of ", _jsx(_components.code, {
                children: "AgoraRtcEngineKit"
              }), ". To create multiple custom video tracks, call the method multiple times."]
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
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "customCamera"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "?"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".trackId "
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
                      children: " agoraKit."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "createCustomVideoTrack"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
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
              children: "Join a channel and publish the custom video track"
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
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create an AgoraRtcChannelMediaOptions instance"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " option "
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
                      children: " AgoraRtcChannelMediaOptions"
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
                      children: "// Set the client role to broadcaster"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "option.clientRoleType "
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
                      children: " .broadcaster"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Enable auto subscription for audio and video"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "option.autoSubscribeAudio "
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
                      children: "option.autoSubscribeVideo "
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Publish the self-collected video stream"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "option.publishCustomVideoTrack "
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the custom video track ID"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "option.customVideoTrackId "
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
                      children: " Int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(customCamera"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "?"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".trackId "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "??"
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
                      children: ")"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Generate a token for the channel"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "NetworkManager.shared."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "generateToken"
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
                      children: "channelName"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": channel, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "success"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": { token "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "in"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Join a channel with the specified options"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " result "
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
                      children: " self"
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
                      children: "joinChannel"
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
                      children: ": token, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "channelId"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": channel, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "uid"
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
                      children: ": option)"
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
                      children: " result "
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
                      children: " 0"
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
                      children: "    self"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".isProcessing "
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
                      children: "    self"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "showAlert"
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
                      children: "title"
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
                      children: '"Error"'
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
                      children: "message"
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
                      children: '"joinChannel call failed: '
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "\\(result)"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ', please check your params"'
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
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "})"
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
              children: "Implement your self-capture module"
            }), `
`, _jsxs(_components.p, {
              children: ["Agora provides the ", _jsx(_components.a, {
                href: "https://github.com/AgoraIO/API-Examples/blob/main/iOS/APIExample/APIExample/Examples/Advanced/CustomVideoSourcePushMulti/CustomVideoSourcePushMulti.swift",
                children: "CustomVideoSourcePushMulti"
              }), " demo project that shows you how to read ", _jsx(_components.code, {
                children: "YUV"
              }), " format video data from a local file. In a production environment, create a custom video module for your device using RTC SDK based on your business requirements."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Push video data to the SDK"
            }), `
`, _jsxs(_components.p, {
              children: ["Use ", _jsx(_components.code, {
                children: "pushExternalVideoFrame"
              }), " to send the captured video frame to the SDK through the video track. Ensure that the ", _jsx(_components.code, {
                children: "videoTrackId"
              }), " matches the video track ID specified when joining the channel. In ", _jsx(_components.code, {
                children: "AgoraVideoFrame"
              }), ", you can set the pixel format, data type, timestamp, and other parameters of the video frame."]
            }), `
`, _jsxs(_components.p, {
              children: ["The following code demonstrates how to push video data in the ", _jsx(_components.code, {
                children: "CVPixelBufferRef"
              }), " format. For other supported video frame formats, refer to the ", _jsx(_components.code, {
                children: "format"
              }), " field in ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoravideoframe",
                children: "AgoraVideoFrame"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " videoFrame "
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
                      children: " AgoraVideoFrame"
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
                      children: "videoFrame.format "
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
                      children: " 12"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "videoFrame.textureBuf "
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
                      children: " buffer"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "videoFrame.rotation "
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
                      children: " Int32"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(rotation)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "agoraKit"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "?"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "pushExternalVideoFrame"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(videoFrame, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "videoTrackId"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": trackId)"
                    })]
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["To ensure audio and video synchronization, Agora recommends setting the ", _jsx(_components.code, {
                    children: "time"
                  }), " (timestamp) of ", _jsx(_components.code, {
                    children: "AgoraVideoFrame"
                  }), " to the system monotonic time. To retrieve the current monotonic time, call ", _jsx(_components.code, {
                    children: "getCurrentMonotonicTimeInMs"
                  }), "."]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsx(_components.p, {
                  children: "If the captured custom video format is Texture and remote users experience flickering or distortion in the captured video, it is recommended to first duplicate the video data and then send both the original and duplicated video data back to the RTC SDK. This helps eliminate anomalies during internal data encoding processes."
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Destroy custom video track"
            }), `
`, _jsxs(_components.p, {
              children: ["To stop publishing the custom video track, call ", _jsx(_components.code, {
                children: "destroyCustomVideoTrack"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Destroy the custom video track"
                    })
                  }), `
`, _jsxs(_components.span, {
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
                      children: "destroyCustomVideoTrack"
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
                      children: "UInt"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(userModel"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "?"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".trackId "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "??"
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
                      children: "))"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Leave the channel"
                    })
                  }), `
`, _jsxs(_components.span, {
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
                      children: "leaveChannelEx"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(connection) { state "
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  LogUtils."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "log"
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
                      children: "message"
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
                      children: '"warning: '
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "\\(state."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "description"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ")"
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
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "level"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": .info)"
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
          id: "custom-video-rendering-1",
          children: "Custom video rendering"
        }), _jsx(_components.p, {
          children: "To implement custom video rendering in your app, refer to the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Set up ", _jsx(_components.code, {
              children: "onCaptureVideoFrame"
            }), " or ", _jsx(_components.code, {
              children: "onRenderVideoFrame"
            }), " callback to obtain the video data to be played."]
          }), `
`, _jsxs(_components.li, {
            children: ["Implement video rendering and playback yourself.", `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["In ", _jsx(_components.code, {
                    children: "renderPixelBuffer"
                  }), " or ", _jsx(_components.code, {
                    children: "renderRawData"
                  }), ", the ", _jsx(_components.code, {
                    children: "rotation"
                  }), " parameter of the video frame may not be 0. You need to set the rotation parameters yourself."]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference-1",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "applicable-use-cases-1",
          children: "Applicable use-cases"
        }), _jsx(_components.p, {
          children: "Use custom video capture in the following industries and use-cases:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Specialized video processing and enhancement"
          })
        }), _jsx(_components.p, {
          children: "In specific gaming or virtual reality use-cases, real-time effects processing, filter handling, or other enhancement effects necessitate direct access to the original video stream. Custom video capture facilitates this, enabling seamless real-time processing and enhances the overall gaming or virtual reality experience for a more realistic outcome."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "High-precision video capture"
          })
        }), _jsx(_components.p, {
          children: "In video surveillance applications, detailed observation and analysis of scene details is necessary. Custom video capture enables higher image quality and finer control over capture to meet the requirements of video monitoring."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Capture from specific video sources"
          })
        }), _jsx(_components.p, {
          children: "Industries such as IoT and live streaming often require the use of specific cameras, monitoring devices, or non-camera video sources, such as video capture cards or screen recording data. In such situations, default RTC SDK capture may not meet your requirements, necessitating use of custom video capture."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Seamless integration with specific devices or third-party applications"
          })
        }), _jsx(_components.p, {
          children: "In smart home or IoT applications, transmitting video from devices to users' smartphones or computers for monitoring and control may require the use of specific devices or applications for video capture. Custom video capture facilitates seamless integration of specific devices or applications with the RTC SDK."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Specific video encoding formats"
          })
        }), _jsx(_components.p, {
          children: "In certain live streaming use-cases, specific video encoding formats may be needed to meet business requirements. In such cases, RTC SDK default capture might not suffice, and custom video capture is required to capture and encode videos in specific formats."
        }), _jsx(_components.h3, {
          id: "advantages-1",
          children: "Advantages"
        }), _jsx(_components.p, {
          children: "Using custom video capture offers the following advantages:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "More types of video streams"
          })
        }), _jsx(_components.p, {
          children: "Custom video capture allows the use of higher quality and a greater variety of capture devices and cameras, resulting in clearer and smoother video streams. This enhances the user viewing experience and makes the product more competitive."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "More flexible video effects"
          })
        }), _jsx(_components.p, {
          children: "Custom video capture enables you to implement richer and more personalized video effects and filters, enhancing the user experience. You can implement effects such as beautification filters and dynamic stickers."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Adaptation to diverse use-case requirements"
          })
        }), _jsx(_components.p, {
          children: "Custom video capture helps applications better adapt to the requirements of various use-cases, such as live streaming, video conferencing, and online education. You can customize different video capture solutions based on the use-case requirements to provide a more robust application."
        }), _jsx(_components.h3, {
          id: "sample-projects-1",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora provides the following open-source sample projects for your reference. Download the project or view the source code for a more detailed example."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Advanced/CustomVideoSourcePush",
              children: "CustomVideoSourcePush"
            }), ": Video self-capture"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/blob/main/iOS/APIExample/APIExample/Examples/Advanced/CustomVideoRender/CustomVideoRender.swift",
              children: "CustomVideoRender"
            }), ": Custom video rendering"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/blob/main/iOS/APIExample/APIExample/Examples/Advanced/CustomVideoSourcePushMulti/CustomVideoSourcePushMulti.swift",
              children: "CustomVideoSourcePushMulti.swift"
            }), ": Read YUV format video data from a local file."]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-1",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/createcustomvideotrack()",
              children: _jsx(_components.code, {
                children: "createCustomVideoTrack"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/destroycustomvideotrack(_:)",
              children: _jsx(_components.code, {
                children: "destroyCustomVideoTrack"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setexternalvideosource(_:usetexture:sourcetype:encodedvideotrackoption:)",
              children: _jsx(_components.code, {
                children: "setExternalVideoSource"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsxs(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/pushexternalvideoframe(_:videotrackid:)",
              children: [_jsx(_components.code, {
                children: "pushExternalVideoFrame"
              }), " [2/2]"]
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoravideoframedelegate/onrendervideoframe(_:uid:channelid:)",
              children: _jsx(_components.code, {
                children: "onRenderVideoFrame(_:uid:channelId:)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoravideoframedelegate/oncapture(_:sourcetype:)",
              children: _jsx(_components.code, {
                children: "onCapture(_:sourceType:)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/getcurrentmonotonictimeinms()",
              children: _jsx(_components.code, {
                children: "getCurrentMonotonicTimeInMs"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/joinchannel(bytoken:channelid:info:uid:joinsuccess:)",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "macos",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "macos"
        }), _jsx(_components.h2, {
          id: "understand-the-tech-2",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK provides a custom video track method for video self-collection. You can create and publish custom video tracks to one or more channels. You use the self-capture module to drive the capture device, and send the captured video frames to the SDK through the video track."
        }), _jsx(_components.p, {
          children: "The following figure illustrates the video data transmission process when custom video capture is implemented:"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/publish-custom-tracks-in-a-channel.svg",
            alt: "Custom video source"
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
          id: "implement-the-logic-2",
          children: "Implement the logic"
        }), _jsx(_components.p, {
          children: "This section shows you how to implement custom video capture and custom video rendering in your app."
        }), _jsx(_components.h3, {
          id: "custom-video-capture-2",
          children: "Custom video capture"
        }), _jsx(_components.p, {
          children: "The figure below shows the workflow you need to implement to stream a custom video source in your app."
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/custom-video-capture.svg",
            alt: "API call sequence"
          })
        }), _jsx(_components.p, {
          children: "Take the following steps to implement this workflow:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Create a custom video track"
            }), `
`, _jsxs(_components.p, {
              children: ["To create a custom video track and obtain the video track ID, call ", _jsx(_components.code, {
                children: "createCustomVideoTrack"
              }), " after initializing an instance of ", _jsx(_components.code, {
                children: "AgoraRtcEngineKit"
              }), ". To create multiple custom video tracks, call the method multiple times."]
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
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "customCamera"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "?"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".trackId "
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
                      children: " agoraKit."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "createCustomVideoTrack"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
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
              children: "Join a channel and publish the custom video track"
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
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create an AgoraRtcChannelMediaOptions instance"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " option "
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
                      children: " AgoraRtcChannelMediaOptions"
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
                      children: "// Set the client role to broadcaster"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "option.clientRoleType "
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
                      children: " .broadcaster"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Enable auto subscription for audio and video"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "option.autoSubscribeAudio "
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
                      children: "option.autoSubscribeVideo "
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Publish the self-collected video stream"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "option.publishCustomVideoTrack "
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the custom video track ID"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "option.customVideoTrackId "
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
                      children: " Int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(customCamera"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "?"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".trackId "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "??"
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
                      children: ")"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Generate a token for the channel"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "NetworkManager.shared."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "generateToken"
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
                      children: "channelName"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": channel, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "success"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": { token "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "in"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Join a channel with the specified options"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " result "
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
                      children: " self"
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
                      children: "joinChannel"
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
                      children: ": token, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "channelId"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": channel, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "uid"
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
                      children: ": option)"
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
                      children: " result "
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
                      children: " 0"
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
                      children: "    self"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".isProcessing "
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
                      children: "    self"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "showAlert"
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
                      children: "title"
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
                      children: '"Error"'
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
                      children: "message"
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
                      children: '"joinChannel call failed: '
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "\\(result)"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ', please check your params"'
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
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "})"
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
              children: "Implement your self-capture module"
            }), `
`, _jsxs(_components.p, {
              children: ["Agora provides the ", _jsx(_components.a, {
                href: "https://github.com/AgoraIO/API-Examples/blob/main/macOS/APIExample/Examples/Advanced/CustomVideoSourcePushMulti/CustomVideoSourcePushMulti.swift",
                children: "CustomVideoSourcePushMulti"
              }), " demo project that shows you how to read ", _jsx(_components.code, {
                children: "YUV"
              }), " format video data from a local file. In a production environment, create a custom video module for your device using RTC SDK based on your business requirements."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Push video data to the SDK"
            }), `
`, _jsxs(_components.p, {
              children: ["Use ", _jsx(_components.code, {
                children: "pushExternalVideoFrame"
              }), " to send the captured video frame to the SDK through the video track. Ensure that the ", _jsx(_components.code, {
                children: "videoTrackId"
              }), " matches the video track ID specified when joining the channel. In ", _jsx(_components.code, {
                children: "AgoraVideoFrame"
              }), ", you can set the pixel format, data type, timestamp, and other parameters of the video frame."]
            }), `
`, _jsxs(_components.p, {
              children: ["The following code demonstrates how to push video data in the ", _jsx(_components.code, {
                children: "CVPixelBufferRef"
              }), " format. For other supported video frame formats, refer to the ", _jsx(_components.code, {
                children: "format"
              }), " field in ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoravideoframe",
                children: "AgoraVideoFrame"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " videoFrame "
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
                      children: " AgoraVideoFrame"
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
                      children: "videoFrame.format "
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
                      children: " 12"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "videoFrame.textureBuf "
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
                      children: " buffer"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "videoFrame.rotation "
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
                      children: " Int32"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(rotation)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "agoraKit"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "?"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "pushExternalVideoFrame"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(videoFrame, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "videoTrackId"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": trackId)"
                    })]
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["To ensure audio and video synchronization, Agora recommends setting the ", _jsx(_components.code, {
                    children: "time"
                  }), " (timestamp) of ", _jsx(_components.code, {
                    children: "AgoraVideoFrame"
                  }), " to the system monotonic time. To retrieve the current monotonic time, call ", _jsx(_components.code, {
                    children: "getCurrentMonotonicTimeInMs"
                  }), "."]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsx(_components.p, {
                  children: "If the captured custom video format is Texture and remote users experience flickering or distortion in the captured video, it is recommended to first duplicate the video data and then send both the original and duplicated video data back to the RTC SDK. This helps eliminate anomalies during internal data encoding processes."
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Destroy custom video track"
            }), `
`, _jsxs(_components.p, {
              children: ["To stop publishing the custom video track, call ", _jsx(_components.code, {
                children: "destroyCustomVideoTrack"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Destroy the custom video track"
                    })
                  }), `
`, _jsxs(_components.span, {
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
                      children: "destroyCustomVideoTrack"
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
                      children: "UInt"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(userModel"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "?"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".trackId "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "??"
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
                      children: "))"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Leave the channel"
                    })
                  }), `
`, _jsxs(_components.span, {
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
                      children: "leaveChannelEx"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(connection) { state "
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  LogUtils."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "log"
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
                      children: "message"
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
                      children: '"warning: '
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "\\(state."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "description"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ")"
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
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "level"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": .info)"
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
          id: "custom-video-rendering-2",
          children: "Custom video rendering"
        }), _jsx(_components.p, {
          children: "To implement custom video rendering in your app, refer to the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Set up ", _jsx(_components.code, {
                children: "onCaptureVideoFrame"
              }), " or ", _jsx(_components.code, {
                children: "onRenderVideoFrame"
              }), " callback to obtain the video data to be played."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Implement video rendering and playback yourself."
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["In ", _jsx(_components.code, {
                    children: "renderPixelBuffer"
                  }), " or ", _jsx(_components.code, {
                    children: "renderRawData"
                  }), ", the ", _jsx(_components.code, {
                    children: "rotation"
                  }), " parameter of the video frame may not be 0. You need to set the rotation parameters yourself."]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference-2",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "applicable-use-cases-2",
          children: "Applicable use-cases"
        }), _jsx(_components.p, {
          children: "Use custom video capture in the following industries and use-cases:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Specialized video processing and enhancement"
          })
        }), _jsx(_components.p, {
          children: "In specific gaming or virtual reality use-cases, real-time effects processing, filter handling, or other enhancement effects necessitate direct access to the original video stream. Custom video capture facilitates this, enabling seamless real-time processing and enhances the overall gaming or virtual reality experience for a more realistic outcome."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "High-precision video capture"
          })
        }), _jsx(_components.p, {
          children: "In video surveillance applications, detailed observation and analysis of scene details is necessary. Custom video capture enables higher image quality and finer control over capture to meet the requirements of video monitoring."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Capture from specific video sources"
          })
        }), _jsx(_components.p, {
          children: "Industries such as IoT and live streaming often require the use of specific cameras, monitoring devices, or non-camera video sources, such as video capture cards or screen recording data. In such situations, default RTC SDK capture may not meet your requirements, necessitating use of custom video capture."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Seamless integration with specific devices or third-party applications"
          })
        }), _jsx(_components.p, {
          children: "In smart home or IoT applications, transmitting video from devices to users' smartphones or computers for monitoring and control may require the use of specific devices or applications for video capture. Custom video capture facilitates seamless integration of specific devices or applications with the RTC SDK."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Specific video encoding formats"
          })
        }), _jsx(_components.p, {
          children: "In certain live streaming use-cases, specific video encoding formats may be needed to meet business requirements. In such cases, RTC SDK default capture might not suffice, and custom video capture is required to capture and encode videos in specific formats."
        }), _jsx(_components.h3, {
          id: "advantages-2",
          children: "Advantages"
        }), _jsx(_components.p, {
          children: "Using custom video capture offers the following advantages:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "More types of video streams"
          })
        }), _jsx(_components.p, {
          children: "Custom video capture allows the use of higher quality and a greater variety of capture devices and cameras, resulting in clearer and smoother video streams. This enhances the user viewing experience and makes the product more competitive."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "More flexible video effects"
          })
        }), _jsx(_components.p, {
          children: "Custom video capture enables you to implement richer and more personalized video effects and filters, enhancing the user experience. You can implement effects such as beautification filters and dynamic stickers."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Adaptation to diverse use-case requirements"
          })
        }), _jsx(_components.p, {
          children: "Custom video capture helps applications better adapt to the requirements of various use-cases, such as live streaming, video conferencing, and online education. You can customize different video capture solutions based on the use-case requirements to provide a more robust application."
        }), _jsx(_components.h3, {
          id: "sample-projects-2",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora provides the following open-source sample projects for your reference. Download the project or view the source code for a more detailed example."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/blob/main/macOS/APIExample/Examples/Advanced/CustomVideoSourcePush/CustomVideoSourcePush.swift",
              children: "CustomVideoSourcePush"
            }), ": Video self-capture"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/blob/main/macOS/APIExample/Examples/Advanced/CustomVideoRender/CustomVideoRender.swift",
              children: "CustomVideoRender"
            }), ": Custom video rendering"]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-2",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/createcustomvideotrack()",
              children: _jsx(_components.code, {
                children: "createCustomVideoTrack"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/destroycustomvideotrack(_:)",
              children: _jsx(_components.code, {
                children: "destroyCustomVideoTrack"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setexternalvideosource(_:usetexture:sourcetype:encodedvideotrackoption:)",
              children: _jsx(_components.code, {
                children: "setExternalVideoSource"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsxs(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/pushexternalvideoframe(_:videotrackid:)",
              children: [_jsx(_components.code, {
                children: "pushExternalVideoFrame"
              }), " [2/2]"]
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoravideoframedelegate/onrendervideoframe(_:uid:channelid:)",
              children: _jsx(_components.code, {
                children: "onRenderVideoFrame(_:uid:channelId:)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoravideoframedelegate/oncapture(_:sourcetype:)",
              children: _jsx(_components.code, {
                children: "onCapture(_:sourceType:)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/getcurrentmonotonictimeinms()",
              children: _jsx(_components.code, {
                children: "getCurrentMonotonicTimeInMs"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/joinchannel(bytoken:channelid:info:uid:joinsuccess:)",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsxs(_components.p, {
          children: ["Try out the ", _jsx(_components.a, {
            href: "https://webdemo-global.agora.io/index.html",
            children: "online demo"
          }), " for ", _jsx(_components.a, {
            href: "https://webdemo-global.agora.io/example/advanced/customVideoSource/index.html",
            children: "Custom video source"
          }), "."]
        }), _jsx(_components.h2, {
          id: "understand-the-tech-3",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["RTC SDK provides support for creating local video tracks by passing in a ", _jsx(_components.a, {
            href: "https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack",
            children: "MediaStreamTrack"
          }), " object to ", _jsx(_components.code, {
            children: "createCustomVideoTrack"
          }), "."]
        }), _jsx(_components.h2, {
          id: "prerequisites-3",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implement-the-logic-3",
          children: "Implement the logic"
        }), _jsx(_components.p, {
          children: "This section shows you how to create and publish a custom video track from a media streams or a canvas stream."
        }), _jsx(_components.h3, {
          id: "create-a-custom-video-track-a-media-stream",
          children: "Create a custom video track a media stream"
        }), _jsxs(_components.p, {
          children: ["You can implement custom video capture or preprocessing by obtaining a ", _jsx(_components.code, {
            children: "MediaStreamTrack"
          }), " object. For example, manually call the ", _jsx(_components.code, {
            children: "getUserMedia"
          }), " method to obtain a ", _jsx(_components.code, {
            children: "MediaStreamTrack"
          }), ", then use the ", _jsx(_components.code, {
            children: "createCustomVideoTrack"
          }), " method to create a local video track object for use in RTC SDK."]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "async"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " function"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " createAndPublishCustomVideoTrack"
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
                  children: "  try"
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
                  children: "    // Get the video media stream"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " mediaStream"
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
                  children: " await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " navigator.mediaDevices."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getUserMedia"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({ video: "
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
                  children: ", audio: "
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
                  children: " });"
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
                  children: "    // Extract the video track from the media stream"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " videoMediaStreamTrack"
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
                  children: " mediaStream."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getVideoTracks"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()["
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
                  children: "    // Create a custom video track"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " customVideoTrack"
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
                  children: " await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRTC."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "createCustomVideoTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      mediaStreamTrack: videoMediaStreamTrack,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    });"
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
                  children: "    // Store the custom video track for later use in a shared object"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    rtc.localVideoTrack "
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
                  children: " customVideoTrack;"
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
                  children: "    // Publish the custom video track to the RTC channel"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " rtc.client."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "publish"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "([rtc.localVideoTrack]);"
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
                  children: "    console."
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
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Custom video track published successfully!"'
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
                  children: "  } "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "catch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (error) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    console."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "error"
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
                  children: '"Failed to create or publish custom video track:"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", error);"
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
        }), _jsxs(_components.p, {
          children: ["You can also use ", _jsx(_components.a, {
            href: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/captureStream",
            children: "HTMLMediaElement.captureStream"
          }), " or ", _jsx(_components.a, {
            href: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream",
            children: "HTMLCanvasElement.captureStream"
          }), " to obtain the ", _jsx(_components.code, {
            children: "MediaStreamTrack"
          }), " object."]
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["The ", _jsx(_components.code, {
                children: "MediaStreamTrack"
              }), " object refers to the browser-native ", _jsx(_components.code, {
                children: "MediaStreamTrack"
              }), " API. For details on usage and browser support, see th ", _jsx(_components.code, {
                children: "MediaStreamTrack"
              }), " ", _jsx(_components.a, {
                href: "https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStreamTrack",
                children: "API documentation"
              }), "."]
            })
          })
        }), _jsx(_components.h3, {
          id: "create-a-custom-video-track-from-a-canvas-stream",
          children: "Create a custom video track from a canvas stream"
        }), _jsx(_components.p, {
          children: "To create and publish a custom video track generated from a canvas stream, follow these steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsx(_components.li, {
            children: "Create a canvas element and set its dimensions."
          }), `
`, _jsxs(_components.li, {
            children: ["Continuously draw content on the canvas using ", _jsx(_components.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame",
              children: _jsx(_components.code, {
                children: "requestAnimationFrame"
              })
            }), " to ensure the stream updates in real time."]
          }), `
`, _jsx(_components.li, {
            children: "Capture a media stream from the canvas."
          }), `
`, _jsx(_components.li, {
            children: "Create a custom video track using the canvas stream."
          }), `
`, _jsx(_components.li, {
            children: "Publish the custom video track to the channel."
          }), `
`]
        }), _jsx(_components.p, {
          children: "Refer to the following example:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Function to create and publish a custom video track"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "async"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " function"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " createAndPublishCustomVideoTrack"
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
                  children: "  try"
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
                  children: "    // Create and draw on the canvas"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " canvas"
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
                  children: " createAndDrawCanvas"
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
                  children: "    // Get the media stream from the canvas"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " canvasStream"
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
                  children: " canvas."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "captureStream"
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
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " canvasMediaStreamTrack"
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
                  children: " canvasStream."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getVideoTracks"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()["
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
                  children: "    // Create a custom video track from the canvas stream"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    rtc.localVideoTrack "
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
                  children: " await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRTC."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "createCustomVideoTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      mediaStreamTrack: canvasMediaStreamTrack,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    });"
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
                  children: "    // Publish the custom video track to the RTC channel"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " rtc.client."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "publish"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "([rtc.localVideoTrack]);"
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
                  children: "    console."
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
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Custom video track published successfully!"'
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
                  children: "  } "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "catch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (error) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    console."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "error"
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
                  children: '"Failed to create or publish custom video track:"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", error);"
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
                  children: "// Function to create a canvas and start drawing"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "function"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " createAndDrawCanvas"
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
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " canvas"
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
                  children: " document."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "createElement"
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
                  children: '"canvas"'
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
                  children: "  canvas.width "
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
                  children: " 640"
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
                  children: "  canvas.height "
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
                  children: " 480"
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
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " context"
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
                  children: " canvas."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getContext"
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
                  children: '"2d"'
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
                  children: "  // Continuously draw on the canvas"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  function"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " drawCanvas"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "() {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // Clear previous drawings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    context."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "clearRect"
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
                  children: ", canvas.width, canvas.height);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    context.fillStyle "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "blue"'
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
                  children: "    context."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "fillRect"
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
                  children: ", canvas.width, canvas.height);"
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
                  children: "    // Add your code to draw on the canvas"
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
                  children: "    // Keep refreshing the canvas"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    requestAnimationFrame"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(drawCanvas);"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  drawCanvas"
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
                  children: " canvas;"
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
                  children: "// Call the function to create and publish the track"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "createAndPublishCustomVideoTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-3",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "api-reference-3",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createcustomvideotrack",
              children: _jsx(_components.code, {
                children: "createCustomVideoTrack"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocalvideotrack.html",
              children: _jsx(_components.code, {
                children: "LocalVideoTrack"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "windows",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "windows"
        }), _jsx(_components.h2, {
          id: "understand-the-tech-4",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK provides a custom video track method for video self-collection. You can create and publish custom video tracks to one or more channels. You use the self-capture module to drive the capture device, and send the captured video frames to the SDK through the video track."
        }), _jsx(_components.p, {
          children: "The following figure illustrates the video data transmission process when custom video capture is implemented:"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/publish-custom-tracks-in-a-channel.svg",
            alt: "Custom video source"
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
          id: "implement-the-logic-4",
          children: "Implement the logic"
        }), _jsx(_components.p, {
          children: "This section shows you how to implement custom video capture and custom video rendering in your app."
        }), _jsx(_components.h3, {
          id: "custom-video-capture-3",
          children: "Custom video capture"
        }), _jsx(_components.p, {
          children: "The following figure shows the workflow you implement to capture and stream a custom video source in your app."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Custom video capture"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/custom-video-capture.svg",
            alt: "API call sequence"
          })
        }), _jsx(_components.p, {
          children: "Take the following steps to implement this workflow:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Create a custom video track"
            }), `
`, _jsxs(_components.p, {
              children: ["To create a custom video track and obtain the video track ID, call ", _jsx(_components.code, {
                children: "createCustomVideoTrack"
              }), " after initializing an instance of ", _jsx(_components.code, {
                children: "IRtcEngine"
              }), ". To create multiple custom video tracks, call the method multiple times."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// For creating multiple custom video tracks, call createCustomVideoTrack multiple times"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: " videoTrackId "
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
                      children: " m_rtcEngine->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "createCustomVideoTrack"
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
                      children: "m_trackVideoTrackIds[trackIndex] "
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
                      children: " videoTrackId;"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Join a channel and publish the custom video track"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create a ChannelMediaOptions instance"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "ChannelMediaOptions mediaOptions;"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the client role to broadcaster"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mediaOptions.clientRoleType "
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
                      children: " CLIENT_ROLE_BROADCASTER;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Publish the self-captured video stream"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mediaOptions.publishCustomVideoTrack "
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
                      children: "// Disable auto subscription for video and audio"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mediaOptions.autoSubscribeVideo "
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
                      children: "mediaOptions.autoSubscribeAudio "
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
                      children: "// Set the custom video track ID"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mediaOptions.customVideoTrackId "
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
                      children: " videoTrackId;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Join the channel with the specified options"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: " ret "
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
                      children: " m_rtcEngine->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "joinChannel"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(APP_TOKEN, szChannelId."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "data"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(), "
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
                      children: ", mediaOptions);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Implement self-capture module"
            }), `
`, _jsxs(_components.p, {
              children: ["Agora provides the ", _jsx(_components.a, {
                href: "https://github.com/AgoraIO/API-Examples/blob/main/windows/APIExample/APIExample/YUVReader.cpp",
                children: "YUVReader.cpp"
              }), " and ", _jsx(_components.a, {
                href: "https://github.com/AgoraIO/API-Examples/blob/main/windows/APIExample/APIExample/YUVReader.h",
                children: "YUVReader.h"
              }), " demo projects that show you how to read ", _jsx(_components.code, {
                children: "YUV"
              }), " format video data from a local file. In a production environment, create a custom video module for your device using RTC SDK based on your business requirements."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Use the custom YUVReader class to continuously read YUV-format video data in the YUVReader thread and pass the data to the OnYUVRead callback for further processing"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "m_yuvReaderHandlers[trackIndex]."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Setup"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(m_rtcEngine, m_mediaEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "get"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(), videoTrackId);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "m_yuvReaders[trackIndex]."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "start"
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
                      children: "std"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "bind"
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
                      children: "&"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "MultiVideoSourceTracksYUVReaderHander"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::OnYUVRead, m_yuvReaderHandlers[trackIndex], "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "std"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "placeholders"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::_1, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "std"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "placeholders"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::_2, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "std"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "placeholders"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::_3, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "std"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "placeholders"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::_4));"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Push video data to the SDK"
            }), `
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "pushVideoFrame"
              }), " to push the captured video frames through the video track to RTC SDK. Ensure that the ", _jsx(_components.code, {
                children: "videoTrackId"
              }), " matches the track ID you specified when joining the channel. Customize parameters like pixel format, data type, and timestamp in the ", _jsx(_components.code, {
                children: "VideoFrame"
              }), "."]
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["To ensure audio-video synchronization, set the timestamp parameter of ", _jsx(_components.code, {
                    children: "VideoFrame"
                  }), " to the system's Monotonic Time. Use ", _jsx(_components.code, {
                    children: "getCurrentMonotonicTimeInMs"
                  }), " to obtain the current Monotonic Time."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " MultiVideoSourceTracksYUVReaderHander"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "OnYUVRead"
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
                      children: " width"
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
                      children: " height"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ","
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "                           unsigned"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " char*"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: " buffer"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ","
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "                           int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: " size"
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
                      children: "  if"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " (m_mediaEngine "
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
                      children: " nullptr"
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
                      children: " m_rtcEngine "
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
                      children: " nullptr"
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
                      children: "  // Set the video pixel format to I420"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  m_videoFrame.format "
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
                      children: " agora"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "media"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "base"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::VIDEO_PIXEL_I420;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Set the video data type to raw data"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  m_videoFrame.type "
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
                      children: " agora"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "media"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "base"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "ExternalVideoFrame"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    VIDEO_BUFFER_TYPE"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::VIDEO_BUFFER_RAW_DATA;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Pass the width, height, and buffer of the captured YUV video data to videoFrame"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  m_videoFrame.height "
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
                      children: " height;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  m_videoFrame.stride "
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
                      children: " width;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  m_videoFrame.buffer "
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
                      children: " buffer;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Get the current Monotonic Time from the SDK and assign it to the timestamp parameter of videoFrame"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  m_videoFrame.timestamp "
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
                      children: " m_rtcEngine->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getCurrentMonotonicTimeInMs"
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
                      children: "  // Push the video frame to the SDK"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  m_mediaEngine->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pushVideoFrame"
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
                      children: "&"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "m_videoFrame, m_videoTrackId);"
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
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["The sample code demonstrates converting YUV format to raw video data in ", _jsx(_components.code, {
                    children: "I420"
                  }), " format. Agora video self-capture supports pushing external video frames in other formats; refer to ", _jsx(_components.a, {
                    href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/enum_videopixelformat.html",
                    children: _jsx(_components.code, {
                      children: "VIDEO_PIXEL_FORMAT"
                    })
                  }), "."]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsx(_components.p, {
                  children: "If the captured custom video format is Texture and remote users experience flickering or distortion in the captured video, it is recommended to first duplicate the video data and then send both the original and duplicated video data back to the RTC SDK. This helps eliminate anomalies during internal data encoding processes."
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Destroy custom video tracks"
            }), `
`, _jsxs(_components.p, {
              children: ["To stop custom video capture and destroy the video track, call ", _jsx(_components.code, {
                children: "destroyCustomVideoTrack"
              }), ". To destroy multiple video tracks, call the method for each track."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Stop self-captured video data"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "m_yuvReaders[trackIndex]."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "stop"
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
                      children: "m_yuvReaderHandlers[trackIndex]."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Release"
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
                      children: "// Destroy the custom video track"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "m_rtcEngine->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "destroyCustomVideoTrack"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(m_trackVideoTrackIds[trackIndex]);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Leave the channel"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "m_rtcEngine->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "leaveChannelEx"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(m_trackConnections[trackIndex]);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "custom-video-rendering-3",
          children: "Custom video rendering"
        }), _jsx(_components.p, {
          children: "To implement custom video rendering in your app, refer to the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Set up ", _jsx(_components.code, {
              children: "onCaptureVideoFrame"
            }), " or ", _jsx(_components.code, {
              children: "onRenderVideoFrame"
            }), " callback to obtain the video data to be played."]
          }), `
`, _jsx(_components.li, {
            children: "Implement video rendering and playback yourself."
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference-4",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "applicable-use-cases-3",
          children: "Applicable use-cases"
        }), _jsx(_components.p, {
          children: "Use custom video capture in the following industries and use-cases:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Specialized video processing and enhancement"
          })
        }), _jsx(_components.p, {
          children: "In specific gaming or virtual reality use-cases, real-time effects processing, filter handling, or other enhancement effects necessitate direct access to the original video stream. Custom video capture facilitates this, enabling seamless real-time processing and enhances the overall gaming or virtual reality experience for a more realistic outcome."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "High-precision video capture"
          })
        }), _jsx(_components.p, {
          children: "In video surveillance applications, detailed observation and analysis of scene details is necessary. Custom video capture enables higher image quality and finer control over capture to meet the requirements of video monitoring."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Capture from specific video sources"
          })
        }), _jsx(_components.p, {
          children: "Industries such as IoT and live streaming often require the use of specific cameras, monitoring devices, or non-camera video sources, such as video capture cards or screen recording data. In such situations, default RTC SDK capture may not meet your requirements, necessitating use of custom video capture."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Seamless integration with specific devices or third-party applications"
          })
        }), _jsx(_components.p, {
          children: "In smart home or IoT applications, transmitting video from devices to users' smartphones or computers for monitoring and control may require the use of specific devices or applications for video capture. Custom video capture facilitates seamless integration of specific devices or applications with the RTC SDK."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Specific video encoding formats"
          })
        }), _jsx(_components.p, {
          children: "In certain live streaming use-cases, specific video encoding formats may be needed to meet business requirements. In such cases, RTC SDK default capture might not suffice, and custom video capture is required to capture and encode videos in specific formats."
        }), _jsx(_components.h3, {
          id: "advantages-3",
          children: "Advantages"
        }), _jsx(_components.p, {
          children: "Using custom video capture offers the following advantages:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "More types of video streams"
          })
        }), _jsx(_components.p, {
          children: "Custom video capture allows the use of higher quality and a greater variety of capture devices and cameras, resulting in clearer and smoother video streams. This enhances the user viewing experience and makes the product more competitive."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "More flexible video effects"
          })
        }), _jsx(_components.p, {
          children: "Custom video capture enables you to implement richer and more personalized video effects and filters, enhancing the user experience. You can implement effects such as beautification filters and dynamic stickers."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Adaptation to diverse use-case requirements"
          })
        }), _jsx(_components.p, {
          children: "Custom video capture helps applications better adapt to the requirements of various use-cases, such as live streaming, video conferencing, and online education. You can customize different video capture solutions based on the use-case requirements to provide a more robust application."
        }), _jsx(_components.h3, {
          id: "sample-project",
          children: "Sample project"
        }), _jsx(_components.p, {
          children: "Agora provides the following open-source sample projects for your reference. Download the project or view the source code for a more detailed example."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/MultiVideoSourceTracks",
              children: "MultiVideoSourceTracks"
            }), ": Video self-capture"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/blob/main/windows/APIExample/APIExample/Advanced/CustomVideoCapture/CAgoraCaptureVideoDlg.cpp",
              children: "CustomVideoCapture"
            }), ": Custom video rendering"]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-4",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_createcustomvideotrack",
              children: _jsx(_components.code, {
                children: "createCustomVideoTrack"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_destroycustomvideotrack",
              children: _jsx(_components.code, {
                children: "destroyCustomVideoTrack"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_getcurrentmonotonictimeinms",
              children: _jsx(_components.code, {
                children: "getCurrentMonotonicTimeInMs"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_imediaengine.html#api_imediaengine_pushvideoframe",
              children: _jsx(_components.code, {
                children: "pushVideoFrame"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_ivideoframeobserver.html#callback_ivideoframeobserver_oncapturevideoframe",
              children: _jsx(_components.code, {
                children: "onCaptureVideoFrame"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_ivideoframeobserver.html#callback_ivideoframeobserver_onrendervideoframe",
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
        platform: "unreal",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unreal"
        }), _jsx(_components.h2, {
          id: "understand-the-tech-5",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK provides a custom video track method for video self-collection. You can create and publish custom video tracks to one or more channels. You use the self-capture module to drive the capture device, and send the captured video frames to the SDK through the video track."
        }), _jsx(_components.p, {
          children: "The following figure illustrates the video data transmission process when custom video capture is implemented:"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/publish-custom-tracks-in-a-channel.svg",
            alt: "Custom video source"
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
          id: "implement-the-logic-5",
          children: "Implement the logic"
        }), _jsx(_components.p, {
          children: "This section shows you how to implement custom video capture and custom video rendering in your game."
        }), _jsx(_components.h3, {
          id: "initialize-mediaengine",
          children: "Initialize MediaEngine"
        }), _jsxs(_components.p, {
          children: ["Before implementing custom video features, obtain the ", _jsx(_components.code, {
            children: "MediaEngine"
          }), " interface from the initialized ", _jsx(_components.code, {
            children: "RtcEngine"
          }), ":"]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " InitAgoraEngine"
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
                  children: "FString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " APP_ID"
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
                  children: "FString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " TOKEN"
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
                  children: "FString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " CHANNEL_NAME"
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
                  children: "  // Initialize RtcEngine context and event handler"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "rtc"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::RtcEngineContext RtcEngineContext;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  UserRtcEventHandler "
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
                  children: " MakeShared"
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
                  children: "FUserRtcEventHandler"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">("
                }), _jsx(_components.span, {
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
                  children: ");"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  std"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::string StdStrAppId "
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
                  children: " TCHAR_TO_UTF8"
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
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "APP_ID);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  RtcEngineContext.appId "
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
                  children: " StdStrAppId."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "c_str"
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
                  children: "  RtcEngineContext.eventHandler "
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
                  children: " UserRtcEventHandler."
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
                  children: "  RtcEngineContext.channelProfile "
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
                  children: " agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "CHANNEL_PROFILE_TYPE"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::CHANNEL_PROFILE_LIVE_BROADCASTING;"
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
                  children: "  // Initialize the RtcEngine"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ret "
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
                  children: " AgoraUERtcEngine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::"
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
                  children: "()->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(RtcEngineContext);"
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
                  children: "  // Query for the MediaEngine interface"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ret "
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
                  children: " AgoraUERtcEngine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::"
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
                  children: "()->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "queryInterface"
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
                  children: "INTERFACE_ID_TYPE"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::AGORA_IID_MEDIA_ENGINE, ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void**"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "MediaEngineManager);"
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
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["The MediaEngine is not created directly. Instead, it's obtained as an interface from the initialized RtcEngine using the ", _jsx(_components.code, {
                children: "queryInterface"
              }), " method with ", _jsx(_components.code, {
                children: "AGORA_IID_MEDIA_ENGINE"
              }), "."]
            })
          })
        }), _jsx(_components.h3, {
          id: "custom-video-capture-4",
          children: "Custom video capture"
        }), _jsx(_components.p, {
          children: "The following figure shows the workflow you implement to capture and stream a custom video source in your game."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Custom video capture"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/custom-video-capture-unreal.svg",
            alt: "API call sequence"
          })
        }), _jsx(_components.p, {
          children: "Take the following steps to implement this workflow:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Set up the external video source"
              })
            }), `
`, _jsx(_components.p, {
              children: "To use custom video frames instead of the camera feed, configure the SDK to accept external video data."
            }), `
`, _jsxs(_components.p, {
              children: ["The following code enables the external video source mode and specifies the type as ", _jsx(_components.code, {
                children: "VIDEO_FRAME"
              }), ", indicating you will push raw pixel data to the SDK."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " SetExternalVideoSource"
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
                      children: "  agora"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "rtc"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::SenderOptions sendoptions;"
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ret "
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
                      children: " MediaEngineManager->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setExternalVideoSource"
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
                      children: ", "
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
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "agora"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "media"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "EXTERNAL_VIDEO_SOURCE_TYPE"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::VIDEO_FRAME, sendoptions);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  UBFL_Logger"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Print"
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
                      children: "FString"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "TEXT"
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
                      children: "%s"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " setExternalVideoSource ret "
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
                      children: '"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
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
                      children: "FString"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(FUNCTION_MACRO), ret), LogMsgViewPtr);"
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
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Join a channel"
              })
            }), `
`, _jsx(_components.p, {
              children: "Enable audio and video, set the client role, and join the channel."
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " JoinChannel"
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
                      children: "  AgoraUERtcEngine"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
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
                      children: "()->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "enableAudio"
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
                      children: "  AgoraUERtcEngine"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
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
                      children: "()->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "enableVideo"
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
                      children: "  AgoraUERtcEngine"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
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
                      children: "()->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setClientRole"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(CLIENT_ROLE_BROADCASTER);"
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ret "
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
                      children: " AgoraUERtcEngine"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
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
                      children: "()->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "joinChannel"
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
                      children: "TCHAR_TO_UTF8"
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
                      children: "*"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "Token), "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "TCHAR_TO_UTF8"
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
                      children: "*"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "ChannelName), "
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
                children: "Implement custom video capture"
              })
            }), `
`, _jsx(_components.p, {
              children: "Set up a callback to capture frames from Unreal Engine's rendering pipeline. Register for the back buffer ready event to capture rendered frames."
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " InitAgoraWidget"
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
                      children: "FString"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: " APP_ID"
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
                      children: "FString"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: " TOKEN"
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
                      children: "FString"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: " CHANNEL_NAME"
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
                      children: "  // ... other initialization code ..."
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
                      children: "  // Register for back buffer ready callback"
                    })
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
                      children: " ("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "FSlateApplication"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "IsInitialized"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "())"
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
                      children: "    eventId "
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
                      children: " FSlateApplication"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
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
                      children: "()."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetRenderer"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "OnBackBufferReadyToPresent"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "AddUObject"
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
                      children: "this"
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
                      children: "&"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "UCustomCaptureVideoScene"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::OnBackBufferReady_RenderThread);"
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
                children: "Push video frames"
              })
            }), `
`, _jsx(_components.p, {
              children: "Capture frames from Unreal Engine's rendering pipeline on the render thread, convert them to raw BGRA pixel format, and send them to the Agora SDK as external video frames."
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["To synchronize audio and video streams, use system timestamp for the ", _jsx(_components.code, {
                    children: "timestamp"
                  }), " field in the ", _jsx(_components.code, {
                    children: "ExternalVideoFrame"
                  }), "."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " OnBackBufferReady_RenderThread"
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
                      children: "SWindow"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "&"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: " window"
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
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " FTexture2DRHIRef"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "&"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: " BackBuffer"
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  FRHICommandListImmediate"
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
                      children: " RHICmdList "
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
                      children: " FRHICommandListExecutor"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetImmediateCommandList"
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
                      children: "  auto"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " width "
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
                      children: " BackBuffer->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetSizeX"
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
                      children: "  auto"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " height "
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
                      children: " BackBuffer->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetSizeY"
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
                      children: "  FIntRect "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Rect"
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
                      children: ", BackBuffer->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetSizeX"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(), BackBuffer->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetSizeY"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "());"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  TArray"
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
                      children: "FColor"
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
                      children: " Data;"
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
                      children: "  RHICmdList."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "ReadSurfaceData"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(BackBuffer, Rect, Data, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "FReadSurfaceDataFlags"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "());"
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " (UserExternalVideoFrame "
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
                      children: " nullptr"
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
                      children: "    UserExternalVideoFrame "
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
                      children: " agora"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "media"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "base"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "ExternalVideoFrame"
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
                      children: "  // Configure the video frame"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  UserExternalVideoFrame->type "
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
                      children: " agora"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "media"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "base"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "ExternalVideoFrame"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "VIDEO_BUFFER_TYPE"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::VIDEO_BUFFER_RAW_DATA;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  UserExternalVideoFrame->format "
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
                      children: " agora"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "media"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "base"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "VIDEO_PIXEL_FORMAT"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::VIDEO_PIXEL_BGRA;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  UserExternalVideoFrame->stride "
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
                      children: " BackBuffer->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetSizeX"
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
                      children: "  UserExternalVideoFrame->height "
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
                      children: " BackBuffer->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetSizeY"
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
                      children: "  UserExternalVideoFrame->cropLeft "
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
                      children: " 10"
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
                      children: "  UserExternalVideoFrame->cropTop "
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
                      children: " 10"
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
                      children: "  UserExternalVideoFrame->cropRight "
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
                      children: " 10"
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
                      children: "  UserExternalVideoFrame->cropBottom "
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
                      children: " 10"
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
                      children: "  UserExternalVideoFrame->rotation "
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
                      children: "  UserExternalVideoFrame->timestamp "
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
                      children: " getTimeStamp"
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
                      children: " (UserExternalVideoFrame->buffer "
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
                      children: " nullptr"
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
                      children: "    UserExternalVideoFrame->buffer "
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
                      children: " (uint8"
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
                      children: ")"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "FMemory"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Malloc"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(BackBuffer->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetSizeX"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "() "
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
                      children: " BackBuffer->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetSizeY"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "() "
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " (Data."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Num"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "() "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ">"
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
                      children: "  {"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    FMemory"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Memcpy"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(UserExternalVideoFrame->buffer, Data."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetData"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(), BackBuffer->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetSizeX"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "() "
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
                      children: " BackBuffer->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetSizeY"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "() "
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
                      children: ");"
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
                      children: " (MediaEngineManager "
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
                      children: " nullptr"
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
                      children: "    {"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "      // Push the video frame to the SDK"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      MediaEngineManager->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pushVideoFrame"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(UserExternalVideoFrame);"
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "std"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "time_t"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " getTimeStamp"
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
                      children: "  std"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "chrono"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::time_point"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "<"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "std"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "chrono"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::system_clock, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "std"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "chrono"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::milliseconds"
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
                      children: " tp "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    std"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "chrono"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "time_point_cast"
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
                      children: "std"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "chrono"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "milliseconds"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ">("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "std"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "chrono"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "system_clock"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "now"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "());"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  std"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "time_t"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " timestamp "
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
                      children: " tp."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "time_since_epoch"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "count"
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
                      children: "  return"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " timestamp;"
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
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["The sample code demonstrates converting Unreal's BGRA format to raw video data. Agora video capture supports pushing external video frames in other formats; refer to ", _jsx(_components.code, {
                    children: "VIDEO_PIXEL_FORMAT"
                  }), "."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Cleanup"
              })
            }), `
`, _jsx(_components.p, {
              children: "When finished unregister the callback and clean up resources."
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " NativeDestruct"
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
                      children: "  Super"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "NativeDestruct"
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
                      children: "  // Remove the back buffer callback"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  FSlateApplication"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
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
                      children: "()."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetRenderer"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "OnBackBufferReadyToPresent"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Remove"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(eventId);"
                    })]
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
                      children: "  UnInitAgoraEngine"
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
                      children: "void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " UnInitAgoraEngine"
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
                      children: "  if"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "AgoraUERtcEngine"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
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
                      children: "() "
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
                      children: " nullptr"
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
                      children: "  {"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    AgoraUERtcEngine"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
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
                      children: "()->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "leaveChannel"
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
                      children: "    AgoraUERtcEngine"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
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
                      children: "()->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "unregisterEventHandler"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(UserRtcEventHandler."
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
                      children: "());"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    AgoraUERtcEngine"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Release"
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
                      children: "    MediaEngineManager "
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
                      children: " nullptr"
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
          id: "custom-video-rendering-4",
          children: "Custom video rendering"
        }), _jsx(_components.p, {
          children: "To implement custom video rendering in your game, refer to the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Set up ", _jsx(_components.code, {
              children: "onCaptureVideoFrame"
            }), " or ", _jsx(_components.code, {
              children: "onRenderVideoFrame"
            }), " callback to obtain the video data to be played."]
          }), `
`, _jsx(_components.li, {
            children: "Implement video rendering and playback yourself."
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference-5",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "applicable-use-cases-4",
          children: "Applicable use-cases"
        }), _jsx(_components.p, {
          children: "Use custom video capture in the following industries and use-cases:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Specialized video processing and enhancement"
          })
        }), _jsx(_components.p, {
          children: "In specific gaming or virtual reality use-cases, real-time effects processing, filter handling, or other enhancement effects necessitate direct access to the original video stream. Custom video capture facilitates this, enabling seamless real-time processing and enhances the overall gaming or virtual reality experience for a more realistic outcome."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "High-precision video capture"
          })
        }), _jsx(_components.p, {
          children: "In video surveillance applications, detailed observation and analysis of scene details is necessary. Custom video capture enables higher image quality and finer control over capture to meet the requirements of video monitoring."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Capture from specific video sources"
          })
        }), _jsx(_components.p, {
          children: "Industries such as IoT and live streaming often require the use of specific cameras, monitoring devices, or non-camera video sources, such as video capture cards or screen recording data. In such situations, default RTC SDK capture may not meet your requirements, necessitating use of custom video capture."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Seamless integration with specific devices or third-party applications"
          })
        }), _jsx(_components.p, {
          children: "In smart home or IoT applications, transmitting video from devices to users' smartphones or computers for monitoring and control may require the use of specific devices or applications for video capture. Custom video capture facilitates seamless integration of specific devices or applications with the RTC SDK."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Specific video encoding formats"
          })
        }), _jsx(_components.p, {
          children: "In certain live streaming use-cases, specific video encoding formats may be needed to meet business requirements. In such cases, RTC SDK default capture might not suffice, and custom video capture is required to capture and encode videos in specific formats."
        }), _jsx(_components.h3, {
          id: "advantages-4",
          children: "Advantages"
        }), _jsx(_components.p, {
          children: "Using custom video capture offers the following advantages:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "More types of video streams"
          })
        }), _jsx(_components.p, {
          children: "Custom video capture allows the use of higher quality and a greater variety of capture devices and cameras, resulting in clearer and smoother video streams. This enhances the user viewing experience and makes the product more competitive."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "More flexible video effects"
          })
        }), _jsx(_components.p, {
          children: "Custom video capture enables you to implement richer and more personalized video effects and filters, enhancing the user experience. You can implement effects such as beautification filters and dynamic stickers."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Adaptation to diverse use-case requirements"
          })
        }), _jsx(_components.p, {
          children: "Custom video capture helps applications better adapt to the requirements of various use-cases, such as live streaming, video conferencing, and online education. You can customize different video capture solutions based on the use-case requirements to provide a more robust application."
        }), _jsx(_components.h3, {
          id: "sample-projects-3",
          children: "Sample projects"
        }), _jsxs(_components.p, {
          children: ["Agora provides a open-source sample project for your reference. Download ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-CPP-Example/Source/AgoraExample/Examples/Advanced/CustomCaptureVideo",
            children: "CustomCaptureVideo"
          }), " or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-5",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_imediaengine.html#api_imediaengine_setexternalvideosource",
              children: _jsx(_components.code, {
                children: "setExternalVideoSource"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_imediaengine.html#api_imediaengine_pushvideoframe",
              children: _jsx(_components.code, {
                children: "pushVideoFrame"
              })
            })
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
