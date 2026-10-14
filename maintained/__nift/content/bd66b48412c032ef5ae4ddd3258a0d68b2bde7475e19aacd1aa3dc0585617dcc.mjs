import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Optimize first-frame rendering",
  description: "Best practices for reducing first-frame video rendering time."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;windows&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    First frame output time is the duration between when a user joins a channel and when they first see the remote video. A shorter first frame output time reduces perceived wait time by rendering video more quickly.

    This guide describes two best practices to reduce video rendering time in Video Calling.

    ## Prerequisites [#prerequisites]

    Complete the steps in the [SDK Quickstart](/en/realtime-media/rtc/get-started-sdk) to build a basic Video Calling app.

    ## Understand the tech [#understand-the-tech]

    To reduce video rendering time, Agora provides the following solutions:

    * **Preload and initialize before joining the channel**
      Complete time-consuming operations ahead of time, such as preloading the channel, configuring the rendering view, and enabling accelerated rendering for audio and video frames.

    * **Join early, subscribe later**
      Join the channel in advance but delay subscribing to the audio and video stream. When the user triggers the join operation, subscribe to the host's stream and begin rendering immediately.

    The following table compares both solutions:

    | Characteristic       | Preload and initialize early                           | Join early, subscribe on demand                                        |
    | -------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------- |
    | Applicable scenarios | Most audio and video use cases                         | Scenarios with very high requirements for first frame rendering speed  |
    | Core implementation  | Initialize and configure video settings before joining | Join the channel early without subscribing; subscribe only when needed |
    | Cost                 | Normal billing                                         | May incur additional channel usage fees                                |

    The following figure shows the time to output the first frame before optimization and with each solution:

    ![Optimize video rendering](https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-tech.jpg)

    ## Implement fast first-frame rendering [#implement-fast-first-frame-rendering]

    This section describes the implementation logic for both solutions.

    <Tabs defaultValue="preload">
      <TabsList>
        <TabsTrigger value="preload">
          Preload and initialize early
        </TabsTrigger>

        <TabsTrigger value="subscribe">
          Join early, subscribe on demand
        </TabsTrigger>
      </TabsList>

      <TabsContent value="preload">
        The following figure illustrates the essential steps:

        ### Sequence diagram for implementation [#sequence-diagram-for-implementation]

        ![Sequence diagram for optimized video rendering](https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-solution-1.svg)

        ### Set up an RTC SDK instance [#set-up-an-rtc-sdk-instance]

        Creating and initializing the RTC engine takes time. To reduce the time to first frame, Agora recommends initializing the engine when the module loads rather than when your app first calls an SDK method.

        <CalloutContainer type="info">
          <CalloutDescription>
            Initialize the engine only once. Avoid creating and destroying it multiple times.
          </CalloutDescription>
        </CalloutContainer>

        \`\`\`kotlin
        class AgoraQuickStartActivity : AppCompatActivity() {
            private var mRtcEngine: RtcEngine? = null

            override fun onCreate(savedInstanceState: Bundle?) {
                super.onCreate(savedInstanceState)

                // Create and initialize the engine during activity creation
                initializeAgoraEngine()
            }

            private fun initializeAgoraEngine() {
                try {
                    val config = RtcEngineConfig().apply {
                        mContext = applicationContext
                        mAppId = "Your App ID"
                        mChannelProfile = Constants.CHANNEL_PROFILE_LIVE_BROADCASTING
                        mEventHandler = mRtcEventHandler // You'll need to define this
                    }

                    mRtcEngine = RtcEngine.create(config)
                } catch (e: Exception) {
                    throw RuntimeException("Error initializing RTC engine: \${e.message}")
                }
            }
        }
        \`\`\`

        ### Enable accelerated rendering [#enable-accelerated-rendering]

        Call [\`enableInstantMediaRendering\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enableinstantmediarendering) to reduce the time it takes to render the first video frame and play audio after joining a channel.

        * Call this method **before** joining a channel. Ideally, call it right after engine initialization.
        * Both host and audience must call this method to benefit from faster rendering.
        * To disable this feature, destroy the engine with \`release\`, then reinitialize it.

        \`\`\`kotlin
        // Enable accelerated rendering before joining the channel
        mRtcEngine?.enableInstantMediaRendering()
        \`\`\`

        ### Set a video scenario [#set-a-video-scenario]

        Use [\`setVideoScenario\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setvideoscenario) to optimize performance for your specific use case. The SDK applies strategies tailored to the selected scenario.

        For example, for a one-on-one call, use \`APPLICATION_SCENARIO_1V1\`.

        \`\`\`kotlin
        // Set the video scenario
        mRtcEngine?.setVideoScenario(Constants.APPLICATION_SCENARIO_1V1)
        \`\`\`

        ### Preload a channel [#preload-a-channel]

        Joining a channel involves acquiring server resources and establishing a connection. Call [\`preloadChannel\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_preloadchannel) to handle resource acquisition early and reduce join time.

        * The \`token\`, \`channelId\`, and \`uid\` must match the values used in \`joinChannel\`.
        * Call \`preloadChannel\` as soon as you retrieve the required info.
        * Don’t call \`joinChannel\` immediately after \`preloadChannel\`.

        \`\`\`kotlin
        private fun prepareChannelInfo(): Int {
            uid = getUid()
            channelId = getChannelInfo()
            token = getTokenFromServer(channelId, uid)

            // Preload the channel
            mRtcEngine?.preloadChannel(token, channelId, uid)

            return 0 // Return success code, adjust as needed
        }
        \`\`\`

        ### Set up the rendering view [#set-up-the-rendering-view]

        Setting the rendering view early ensures the first frame displays properly. If the view is not ready, the first frame might be skipped.

        If your app knows the remote user ID (For example, from Signaling), set the view immediately. Otherwise, use the \`onUserJoined\` callback.

        * **Set the remote view early:**

        \`\`\`kotlin
        fun onShowChannels(channelId: String, remoteUid: Int) {
            val canvas = VideoCanvas(null, VideoCanvas.RENDER_MODE_FIT, remoteUid)
            mRtcEngine?.setupRemoteVideo(canvas)
        }

        fun onEIDUserJoined(uid: Int, elapsed: Int) {
            // Already set - no additional setup needed
        }
        \`\`\`

        * **Set the view when the user joins:**

        \`\`\`kotlin
        // Event handler class
        private val mRtcEventHandler = object : IRtcEngineEventHandler() {
            override fun onUserJoined(uid: Int, elapsed: Int) {
                // Forward to UI logic
                runOnUiThread {
                    onEIDUserJoined(uid, elapsed)
                }
            }
        }

        fun onEIDUserJoined(uid: Int, elapsed: Int) {
            val canvas = VideoCanvas(surfaceView, VideoCanvas.RENDER_MODE_FIT, uid)
            mRtcEngine?.setupRemoteVideo(canvas)
        }
        \`\`\`

        ### Monitor rendering performance [#monitor-rendering-performance]

        Use [\`startMediaRenderingTracing\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_startmediarenderingtracing) to monitor first-frame rendering metrics. Results are reported via [\`onVideoRenderingTracingResult\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onvideorenderingtracingresult).

        <CalloutContainer type="info">
          <CalloutDescription>
            Call this method when the user initiates joining. For example, on a **Join** button tap. This gives accurate first-frame timing.
          </CalloutDescription>
        </CalloutContainer>

        \`\`\`kotlin
        private fun onJoinClicked() {
            mRtcEngine?.startMediaRenderingTracing()
            mRtcEngine?.joinChannel(token, channelId, uid, options)
        }
        \`\`\`

        ### Join a channel [#join-a-channel]

        Call [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2) to enter the channel. To speed up first-frame playback, avoid delays like fetching a token in this method.

        If you can’t retrieve a token early, consider using a [wildcard token](/en/realtime-media/rtc/build/authenticate-users/deploy-token-server#generate-wildcard-tokens).

        \`\`\`kotlin
        private fun prepareChannelInfo(): Int {
            uid = getUid()
            channelId = getChannelInfo()
            token = getTokenFromServer(channelId, uid)
            return 0 // Return success code
        }

        private fun joinChannel(): Int {
            val options = ChannelMediaOptions()
            return mRtcEngine?.joinChannel(token, channelId, uid, options) ?: -1
        }
        \`\`\`

        ### Optimize callback performance [#optimize-callback-performance]

        The SDK runs callbacks like \`onJoinChannelSuccess\` on the same thread. If one callback is slow, it can delay others—including rendering events.

        <CalloutContainer type="info">
          <CalloutDescription>
            Don’t block the callback thread with network calls, file I/O, or heavy processing.
          </CalloutDescription>
        </CalloutContainer>

        #### Best practices [#best-practices]

        * Avoid complex operations in \`onJoinChannelSuccess\`.
        * Don’t block \`onUserJoined\` or other rendering-related callbacks.
        * Use background threads for heavy logic.
      </TabsContent>

      <TabsContent value="subscribe">
        The following figure illustrates the essential steps:

        ### Sequence diagram for implementation [#sequence-diagram-for-implementation-1]

        ![Sequence diagram for optimized video rendering](https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-solution-2.svg)

        ### Set up the rendering view [#set-up-the-rendering-view-1]

        If you know the host’s user ID before joining the channel, call [\`setupRemoteVideoEx\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineex.html#api_irtcengineex_setupremotevideoex) as early as possible to set up the rendering view. This ensures the rendering pipeline is initialized in advance, helping avoid delays in displaying the first decoded frame.

        If the host’s user ID is not available beforehand, wait for the \`onUserJoined\` callback, then call [\`setupRemoteVideoEx\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineex.html#api_irtcengineex_setupremotevideoex).

        \`\`\`kotlin
        val canvas = VideoCanvas(getView(), VideoCanvas.RENDER_MODE_FIT, farNextChannel.remoteUid)
        mRtcEngine?.setupRemoteVideoEx(canvas, connection)
        \`\`\`

        ### Join a channel without automatically subscribing [#join-a-channel-without-automatically-subscribing]

        Joining a channel typically takes the most time before the first video frame appears. For use cases like fast channel switching, delay subscribing to media streams to speed up rendering:

        1. Call [\`joinChannelEx\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineex.html#api_irtcengineex_joinchannelex) to join the channel.
        2. In [\`ChannelMediaOptions\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_channelmediaoptions.html), set \`autoSubscribeAudio\` and \`autoSubscribeVideo\` to \`false\`.
        3. Subscribe manually when the user is ready to view content.

           \`\`\`kotlin
           // Define connection and event handler
           val connection = RtcConnection(channelId, uid)
           val eventHandler = mRtcEventHandler

           // Set channel media options
           val options = ChannelMediaOptions().apply {
               channelProfile = Constants.CHANNEL_PROFILE_LIVE_BROADCASTING
               clientRoleType = Constants.CLIENT_ROLE_AUDIENCE
               autoSubscribeAudio = false
               autoSubscribeVideo = false
           }

           // Join the channel without subscribing
           mRtcEngine?.joinChannelEx(token, connection, options, mRtcEventHandler)
           \`\`\`

        ### Subscribe to streams and start rendering [#subscribe-to-streams-and-start-rendering]

        When the user chooses to view content:

        1. Resume media subscription using [\`muteRemoteVideoStreamEx\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineex.html#api_irtcengineex_muteremotevideostreamex) and [\`muteRemoteAudioStreamEx\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineex.html#api_irtcengineex_muteremoteaudiostreamex).
        2. Call [\`startMediaRenderingTracingEx\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineex.html#api_irtcengineex_startmediarenderingtracingex) to log rendering metrics.
        3. The SDK reports results in the [\`onVideoRenderingTracingResult\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onvideorenderingtracingresult) callback, which you can use for performance analysis.

           \`\`\`kotlin
           fun switchToChannel() {
               // Start video rendering tracing
               mRtcEngine?.startMediaRenderingTracingEx(connection)

               // Resume remote media subscriptions
               mRtcEngine?.muteRemoteVideoStreamEx(remoteUid, false, connection)
               mRtcEngine?.muteRemoteAudioStreamEx(remoteUid, false, connection)
           }
           \`\`\`
      </TabsContent>
    </Tabs>

    ## Troubleshooting [#troubleshooting]

    Refer to [Slow first-frame rendering of remote video when using the Agora RTC SDK](/en/api-reference/faq/quality/optimize_video_rendering).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    First frame output time is the duration between when a user joins a channel and when they first see the remote video. A shorter first frame output time reduces perceived wait time by rendering video more quickly.

    This guide describes two best practices to reduce video rendering time in Video Calling.

    ## Prerequisites [#prerequisites-1]

    Complete the steps in the [SDK Quickstart](/en/realtime-media/rtc/get-started-sdk) to build a basic Video Calling app.

    ## Understand the tech [#understand-the-tech-1]

    To reduce video rendering time, Agora provides the following solutions:

    * **Preload and initialize before joining the channel**
      Complete time-consuming operations ahead of time, such as preloading the channel, configuring the rendering view, and enabling accelerated rendering for audio and video frames.

    * **Join early, subscribe later**
      Join the channel in advance but delay subscribing to the audio and video stream. When the user triggers the join operation, subscribe to the host's stream and begin rendering immediately.

    The following table compares both solutions:

    | Characteristic       | Preload and initialize early                           | Join early, subscribe on demand                                        |
    | -------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------- |
    | Applicable scenarios | Most audio and video use cases                         | Scenarios with very high requirements for first frame rendering speed  |
    | Core implementation  | Initialize and configure video settings before joining | Join the channel early without subscribing; subscribe only when needed |
    | Cost                 | Normal billing                                         | May incur additional channel usage fees                                |

    The following figure shows the time to output the first frame before optimization and with each solution:

    ![Optimize video rendering](https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-tech.jpg)

    ## Implement fast first-frame rendering [#implement-fast-first-frame-rendering-1]

    This section describes the implementation logic for both solutions.

    <Tabs defaultValue="preload">
      <TabsList>
        <TabsTrigger value="preload">
          Preload and initialize early
        </TabsTrigger>

        <TabsTrigger value="subscribe">
          Join early, subscribe on demand
        </TabsTrigger>
      </TabsList>

      <TabsContent value="preload">
        The following figure illustrates the essential steps:

        ### Sequence diagram for implementation [#sequence-diagram-for-implementation-2]

        ![Sequence diagram for optimized video rendering](https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-solution-1.svg)

        ### Set up an RTC SDK instance [#set-up-an-rtc-sdk-instance-1]

        Creating and initializing the RTC engine takes time. To reduce the time to first frame, Agora recommends initializing the engine when the module loads rather than when your app first calls an SDK method.

        <CalloutContainer type="info">
          <CalloutDescription>
            Initialize the engine only once. Avoid creating and destroying it multiple times.
          </CalloutDescription>
        </CalloutContainer>

        \`\`\`swift
        class AgoraQuickStartViewController: UIViewController {
            var agoraKit: AgoraRtcEngineKit?

            override func viewDidLoad() {
                super.viewDidLoad()

                // Create and initialize the engine during view controller creation
                initializeAgoraEngine()
            }

            private func initializeAgoraEngine() {
                let config = AgoraRtcEngineConfig()
                config.appId = "Your App ID"
                config.channelProfile = .liveBroadcasting
                config.delegate = self // You'll need to implement AgoraRtcEngineDelegate

                agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)
            }
        }
        \`\`\`

        ### Enable accelerated rendering [#enable-accelerated-rendering-1]

        Call [\`enableInstantMediaRendering\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableinstantmediarendering\\(\\)) to reduce the time it takes to render the first video frame and play audio after joining a channel.

        * Call this method **before** joining a channel. Ideally, call it right after engine initialization.
        * Both host and audience must call this method to benefit from faster rendering.
        * To disable this feature, destroy the engine with \`release\`, then reinitialize it.

        \`\`\`swift
        // Enable accelerated rendering before joining the channel
        agoraKit?.enableInstantMediaRendering()
        \`\`\`

        ### Set a video scenario [#set-a-video-scenario-1]

        Use [\`setVideoScenario\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setvideoscenario\\(_:\\)) to optimize performance for your specific use case. The SDK applies strategies tailored to the selected scenario.

        For example, for a one-on-one call, use \`APPLICATION_SCENARIO_1V1\`.

        \`\`\`swift
        // Set the video scenario
        agoraKit?.setVideoScenario(.application1V1Scenario)
        \`\`\`

        ### Preload a channel [#preload-a-channel-1]

        Joining a channel involves acquiring server resources and establishing a connection. Call [\`preloadChannel\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/preloadchannel\\(bytoken\\:channelid\\:uid:\\)) to handle resource acquisition early and reduce join time.

        * The \`token\`, \`channelId\`, and \`uid\` must match the values used in \`joinChannel\`.
        * Call \`preloadChannel\` as soon as you retrieve the required info.
        * Don’t call \`joinChannel\` immediately after \`preloadChannel\`.

        \`\`\`swift
        private func prepareChannelInfo() -> Int {
            uid = getUid()
            channelId = getChannelInfo()
            token = getTokenFromServer(channelId: channelId, uid: uid)

            // Preload the channel
            agoraKit?.preloadChannel(byToken: token, channelId: channelId, uid: uid)

            return 0 // Return success code, adjust as needed
        }
        \`\`\`

        ### Set up the rendering view [#set-up-the-rendering-view-2]

        Setting the rendering view early ensures the first frame displays properly. If the view is not ready, the first frame might be skipped.

        If your app knows the remote user ID (For example, from Signaling), set the view immediately. Otherwise, use the \`onUserJoined\` callback.

        * **Set the remote view early:**

        \`\`\`swift
        func onShowChannels(channelId: String, remoteUid: UInt) {
            let canvas = AgoraRtcVideoCanvas()
            canvas.uid = remoteUid
            canvas.renderMode = .fit
            canvas.view = nil
            agoraKit?.setupRemoteVideo(canvas)
        }

        func onEIDUserJoined(uid: UInt, elapsed: Int) {
            // Already set - no additional setup needed
        }
        \`\`\`

        * **Set the view when the user joins:**

        \`\`\`swift
        // Event handler class
        extension AgoraQuickStartViewController: AgoraRtcEngineDelegate {
            func rtcEngine(_ engine: AgoraRtcEngineKit, didJoinedOfUid uid: UInt, elapsed: Int) {
                // Forward to UI logic
                DispatchQueue.main.async {
                    self.onEIDUserJoined(uid: uid, elapsed: elapsed)
                }
            }
        }

        func onEIDUserJoined(uid: UInt, elapsed: Int) {
            let canvas = AgoraRtcVideoCanvas()
            canvas.uid = uid
            canvas.renderMode = .fit
            canvas.view = surfaceView
            agoraKit?.setupRemoteVideo(canvas)
        }
        \`\`\`

        ### Monitor rendering performance [#monitor-rendering-performance-1]

        Use [\`startMediaRenderingTracing\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startmediarenderingtracing\\(\\)) to monitor first-frame rendering metrics. Results are reported via [\`videoRenderingTracingResultOfUid\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:videorenderingtracingresultofuid\\:currentevent\\:tracinginfo:\\)).

        <CalloutContainer type="info">
          <CalloutDescription>
            Call this method when the user initiates joining. For example, on a **Join** button tap. This gives accurate first-frame timing.
          </CalloutDescription>
        </CalloutContainer>

        \`\`\`swift
        private func onJoinClicked() {
            agoraKit?.startMediaRenderingTracing()
            agoraKit?.joinChannel(byToken: token, channelId: channelId, info: nil, uid: uid, joinSuccess: nil)
        }
        \`\`\`

        ### Join a channel [#join-a-channel-1]

        Call [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/joinchannel\\(bytoken\\:channelid\\:uid\\:mediaoptions\\:joinsuccess:\\)) to enter the channel. To speed up first-frame playback, avoid delays like fetching a token in this method.

        If you can’t retrieve a token early, consider using a [wildcard token](/en/realtime-media/rtc/build/authenticate-users/deploy-token-server#generate-wildcard-tokens).

        \`\`\`swift
        private func prepareChannelInfo() -> Int {
            uid = getUid()
            channelId = getChannelInfo()
            token = getTokenFromServer(channelId: channelId, uid: uid)
            return 0 // Return success code
        }

        private func joinChannel() -> Int {
            let options = AgoraRtcChannelMediaOptions()
            let result = agoraKit?.joinChannel(byToken: token, channelId: channelId, uid: uid, mediaOptions: options)
            return result == 0 ? 0 : -1
        }
        \`\`\`

        ### Optimize callback performance [#optimize-callback-performance-1]

        The SDK runs callbacks like \`onJoinChannelSuccess\` on the same thread. If one callback is slow, it can delay others—including rendering events.

        <CalloutContainer type="info">
          <CalloutDescription>
            Don’t block the callback thread with network calls, file I/O, or heavy processing.
          </CalloutDescription>
        </CalloutContainer>

        #### Best practices [#best-practices-1]

        * Avoid complex operations in \`onJoinChannelSuccess\`.
        * Don’t block \`onUserJoined\` or other rendering-related callbacks.
        * Use background threads for heavy logic.
      </TabsContent>

      <TabsContent value="subscribe">
        The following figure illustrates the essential steps:

        ### Sequence diagram for implementation [#sequence-diagram-for-implementation-3]

        ![Sequence diagram for optimized video rendering](https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-solution-2.svg)

        ### Set up the rendering view [#set-up-the-rendering-view-3]

        If you know the host’s user ID before joining the channel, call [\`setupRemoteVideoEx\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setupremotevideoex\\(_\\:connection:\\)) as early as possible to set up the rendering view. This ensures the rendering pipeline is initialized in advance, helping avoid delays in displaying the first decoded frame.

        If the host’s user ID is not available beforehand, wait for the \`onUserJoined\` callback, then call [\`setupRemoteVideoEx\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setupremotevideoex\\(_\\:connection:\\)).

        \`\`\`swift
        // Define necessary variables first
        let connection = AgoraRtcConnection(channelId: channelId, localUid: uid)
        let remoteUid: UInt = 12345 // Replace with actual remote user ID

        // Set the host's rendering view
        let canvas = AgoraRtcVideoCanvas()
        canvas.uid = remoteUid
        canvas.renderMode = .fit
        canvas.view = getView()
        agoraKit?.setupRemoteVideoEx(canvas, connection: connection)
        \`\`\`

        ### Join a channel without automatically subscribing [#join-a-channel-without-automatically-subscribing-1]

        Joining a channel typically takes the most time before the first video frame appears. For use cases like fast channel switching, delay subscribing to media streams to speed up rendering:

        1. Call [\`joinChannelEx\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/joinchannelex\\(bytoken\\:connection\\:delegate\\:mediaoptions\\:joinsuccess:\\)) to join the channel.
        2. In [\`AgoraRtcChannelMediaOptions\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcchannelmediaoptions), set \`autoSubscribeAudio\` and \`autoSubscribeVideo\` to \`false\`.
        3. Subscribe manually when the user is ready to view content.

           \`\`\`swift
           // Define connection and event handler
           let connection = AgoraRtcConnection(channelId: channelId, localUid: uid)
           let eventHandler = self

           // Set channel media options
           let options = AgoraRtcChannelMediaOptions()
           options.channelProfile = .liveBroadcasting
           options.clientRoleType = .audience
           options.autoSubscribeAudio = false
           options.autoSubscribeVideo = false

           // Join the channel without subscribing
           agoraKit?.joinChannelEx(byToken: token, connection: connection, delegate: self, mediaOptions: options, joinSuccess: nil)
           \`\`\`

        ### Subscribe to streams and start rendering [#subscribe-to-streams-and-start-rendering-1]

        When the user chooses to view content:

        1. Resume media subscription using [\`muteRemoteVideoStreamEx\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/muteremotevideostreamex\\(_\\:mute\\:connection:\\)) and [\`muteRemoteAudioStreamEx\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/muteremoteaudiostreamex\\(_\\:mute\\:connection:\\)).
        2. Call [\`startMediaRenderingTracingEx\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startmediarenderingtracingex\\(_:\\)) to log rendering metrics.
        3. The SDK reports results in the [\`videoRenderingTracingResultOfUid\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:videorenderingtracingresultofuid\\:currentevent\\:tracinginfo:\\)) callback, which you can use for performance analysis.

           \`\`\`swift
           func switchToChannel() {
               // Start video rendering tracing
               agoraKit?.startMediaRenderingTracingEx(connection)

               // Resume remote media subscriptions
               agoraKit?.muteRemoteVideoStreamEx(remoteUid, mute: false, connection: connection)
               agoraKit?.muteRemoteAudioStreamEx(remoteUid, mute: false, connection: connection)
           }
           \`\`\`
      </TabsContent>
    </Tabs>

    ## Troubleshooting [#troubleshooting-1]

    Refer to [Slow first-frame rendering of remote video when using the Agora RTC SDK](/en/api-reference/faq/quality/optimize_video_rendering).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="macos" />

    First frame output time is the duration between when a user joins a channel and when they first see the remote video. A shorter first frame output time reduces perceived wait time by rendering video more quickly.

    This guide describes two best practices to reduce video rendering time in Video Calling.

    ## Prerequisites [#prerequisites-2]

    Complete the steps in the [SDK Quickstart](/en/realtime-media/rtc/get-started-sdk) to build a basic Video Calling app.

    ## Understand the tech [#understand-the-tech-2]

    To reduce video rendering time, Agora provides the following solutions:

    * **Preload and initialize before joining the channel**
      Complete time-consuming operations ahead of time, such as preloading the channel, configuring the rendering view, and enabling accelerated rendering for audio and video frames.

    * **Join early, subscribe later**
      Join the channel in advance but delay subscribing to the audio and video stream. When the user triggers the join operation, subscribe to the host's stream and begin rendering immediately.

    The following table compares both solutions:

    | Characteristic       | Preload and initialize early                           | Join early, subscribe on demand                                        |
    | -------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------- |
    | Applicable scenarios | Most audio and video use cases                         | Scenarios with very high requirements for first frame rendering speed  |
    | Core implementation  | Initialize and configure video settings before joining | Join the channel early without subscribing; subscribe only when needed |
    | Cost                 | Normal billing                                         | May incur additional channel usage fees                                |

    The following figure shows the time to output the first frame before optimization and with each solution:

    ![Optimize video rendering](https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-tech.jpg)

    ## Implement fast first-frame rendering [#implement-fast-first-frame-rendering-2]

    This section describes the implementation logic for both solutions.

    <Tabs defaultValue="preload">
      <TabsList>
        <TabsTrigger value="preload">
          Preload and initialize early
        </TabsTrigger>

        <TabsTrigger value="subscribe">
          Join early, subscribe on demand
        </TabsTrigger>
      </TabsList>

      <TabsContent value="preload">
        The following figure illustrates the essential steps:

        ### Sequence diagram for implementation [#sequence-diagram-for-implementation-4]

        ![Sequence diagram for optimized video rendering](https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-solution-1.svg)

        ### Set up an RTC SDK instance [#set-up-an-rtc-sdk-instance-2]

        Creating and initializing the RTC engine takes time. To reduce the time to first frame, Agora recommends initializing the engine when the module loads rather than when your app first calls an SDK method.

        <CalloutContainer type="info">
          <CalloutDescription>
            Initialize the engine only once. Avoid creating and destroying it multiple times.
          </CalloutDescription>
        </CalloutContainer>

        \`\`\`swift
        class AgoraQuickStartViewController: UIViewController {
            var agoraKit: AgoraRtcEngineKit?

            override func viewDidLoad() {
                super.viewDidLoad()

                // Create and initialize the engine during view controller creation
                initializeAgoraEngine()
            }

            private func initializeAgoraEngine() {
                let config = AgoraRtcEngineConfig()
                config.appId = "Your App ID"
                config.channelProfile = .liveBroadcasting
                config.delegate = self // You'll need to implement AgoraRtcEngineDelegate

                agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)
            }
        }
        \`\`\`

        ### Enable accelerated rendering [#enable-accelerated-rendering-2]

        Call [\`enableInstantMediaRendering\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enableinstantmediarendering\\(\\)) to reduce the time it takes to render the first video frame and play audio after joining a channel.

        * Call this method **before** joining a channel. Ideally, call it right after engine initialization.
        * Both host and audience must call this method to benefit from faster rendering.
        * To disable this feature, destroy the engine with \`release\`, then reinitialize it.

        \`\`\`swift
        // Enable accelerated rendering before joining the channel
        agoraKit?.enableInstantMediaRendering()
        \`\`\`

        ### Set a video scenario [#set-a-video-scenario-2]

        Use [\`setVideoScenario\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setvideoscenario\\(_:\\)) to optimize performance for your specific use case. The SDK applies strategies tailored to the selected scenario.

        For example, for a one-on-one call, use \`APPLICATION_SCENARIO_1V1\`.

        \`\`\`swift
        // Set the video scenario
        agoraKit?.setVideoScenario(.application1V1Scenario)
        \`\`\`

        ### Preload a channel [#preload-a-channel-2]

        Joining a channel involves acquiring server resources and establishing a connection. Call [\`preloadChannel\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/preloadchannel\\(bytoken\\:channelid\\:uid:\\)) to handle resource acquisition early and reduce join time.

        * The \`token\`, \`channelId\`, and \`uid\` must match the values used in \`joinChannel\`.
        * Call \`preloadChannel\` as soon as you retrieve the required info.
        * Don’t call \`joinChannel\` immediately after \`preloadChannel\`.

        \`\`\`swift
        private func prepareChannelInfo() -> Int {
            uid = getUid()
            channelId = getChannelInfo()
            token = getTokenFromServer(channelId: channelId, uid: uid)

            // Preload the channel
            agoraKit?.preloadChannel(byToken: token, channelId: channelId, uid: uid)

            return 0 // Return success code, adjust as needed
        }
        \`\`\`

        ### Set up the rendering view [#set-up-the-rendering-view-4]

        Setting the rendering view early ensures the first frame displays properly. If the view is not ready, the first frame might be skipped.

        If your app knows the remote user ID (For example, from Signaling), set the view immediately. Otherwise, use the \`onUserJoined\` callback.

        * **Set the remote view early:**

        \`\`\`swift
        func onShowChannels(channelId: String, remoteUid: UInt) {
            let canvas = AgoraRtcVideoCanvas()
            canvas.uid = remoteUid
            canvas.renderMode = .fit
            canvas.view = nil
            agoraKit?.setupRemoteVideo(canvas)
        }

        func onEIDUserJoined(uid: UInt, elapsed: Int) {
            // Already set - no additional setup needed
        }
        \`\`\`

        * **Set the view when the user joins:**

        \`\`\`swift
        // Event handler class
        extension AgoraQuickStartViewController: AgoraRtcEngineDelegate {
            func rtcEngine(_ engine: AgoraRtcEngineKit, didJoinedOfUid uid: UInt, elapsed: Int) {
                // Forward to UI logic
                DispatchQueue.main.async {
                    self.onEIDUserJoined(uid: uid, elapsed: elapsed)
                }
            }
        }

        func onEIDUserJoined(uid: UInt, elapsed: Int) {
            let canvas = AgoraRtcVideoCanvas()
            canvas.uid = uid
            canvas.renderMode = .fit
            canvas.view = surfaceView
            agoraKit?.setupRemoteVideo(canvas)
        }
        \`\`\`

        ### Monitor rendering performance [#monitor-rendering-performance-2]

        Use [\`startMediaRenderingTracing\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startmediarenderingtracing\\(\\)) to monitor first-frame rendering metrics. Results are reported via [\`videoRenderingTracingResultOfUid\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:videorenderingtracingresultofuid\\:currentevent\\:tracinginfo:\\)).

        <CalloutContainer type="info">
          <CalloutDescription>
            Call this method when the user initiates joining. For example, on a **Join** button tap. This gives accurate first-frame timing.
          </CalloutDescription>
        </CalloutContainer>

        \`\`\`swift
        private func onJoinClicked() {
            agoraKit?.startMediaRenderingTracing()
            agoraKit?.joinChannel(byToken: token, channelId: channelId, info: nil, uid: uid, joinSuccess: nil)
        }
        \`\`\`

        ### Join a channel [#join-a-channel-2]

        Call [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/joinchannel\\(bytoken\\:channelid\\:uid\\:mediaoptions\\:joinsuccess:\\)) to enter the channel. To speed up first-frame playback, avoid delays like fetching a token in this method.

        If you can’t retrieve a token early, consider using a [wildcard token](/en/realtime-media/rtc/build/authenticate-users/deploy-token-server#generate-wildcard-tokens).

        \`\`\`swift
        private func prepareChannelInfo() -> Int {
            uid = getUid()
            channelId = getChannelInfo()
            token = getTokenFromServer(channelId: channelId, uid: uid)
            return 0 // Return success code
        }

        private func joinChannel() -> Int {
            let options = AgoraRtcChannelMediaOptions()
            let result = agoraKit?.joinChannel(byToken: token, channelId: channelId, uid: uid, mediaOptions: options)
            return result == 0 ? 0 : -1
        }
        \`\`\`

        ### Optimize callback performance [#optimize-callback-performance-2]

        The SDK runs callbacks like \`onJoinChannelSuccess\` on the same thread. If one callback is slow, it can delay others—including rendering events.

        <CalloutContainer type="info">
          <CalloutDescription>
            Don’t block the callback thread with network calls, file I/O, or heavy processing.
          </CalloutDescription>
        </CalloutContainer>

        #### Best practices [#best-practices-2]

        * Avoid complex operations in \`onJoinChannelSuccess\`.
        * Don’t block \`onUserJoined\` or other rendering-related callbacks.
        * Use background threads for heavy logic.
      </TabsContent>

      <TabsContent value="subscribe">
        The following figure illustrates the essential steps:

        ### Sequence diagram for implementation [#sequence-diagram-for-implementation-5]

        ![Sequence diagram for optimized video rendering](https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-solution-2.svg)

        ### Set up the rendering view [#set-up-the-rendering-view-5]

        If you know the host’s user ID before joining the channel, call [\`setupRemoteVideoEx\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setupremotevideoex\\(_\\:connection:\\)) as early as possible to set up the rendering view. This ensures the rendering pipeline is initialized in advance, helping avoid delays in displaying the first decoded frame.

        If the host’s user ID is not available beforehand, wait for the \`onUserJoined\` callback, then call [\`setupRemoteVideoEx\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setupremotevideoex\\(_\\:connection:\\)).

        \`\`\`swift
        // Define necessary variables first
        let connection = AgoraRtcConnection(channelId: channelId, localUid: uid)
        let remoteUid: UInt = 12345 // Replace with actual remote user ID

        // Set the host's rendering view
        let canvas = AgoraRtcVideoCanvas()
        canvas.uid = remoteUid
        canvas.renderMode = .fit
        canvas.view = getView()
        agoraKit?.setupRemoteVideoEx(canvas, connection: connection)
        \`\`\`

        ### Join a channel without automatically subscribing [#join-a-channel-without-automatically-subscribing-2]

        Joining a channel typically takes the most time before the first video frame appears. For use cases like fast channel switching, delay subscribing to media streams to speed up rendering:

        1. Call [\`joinChannelEx\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/joinchannelex\\(bytoken\\:connection\\:delegate\\:mediaoptions\\:joinsuccess:\\)) to join the channel.
        2. In [\`AgoraRtcChannelMediaOptions\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcchannelmediaoptions), set \`autoSubscribeAudio\` and \`autoSubscribeVideo\` to \`false\`.
        3. Subscribe manually when the user is ready to view content.

           \`\`\`swift
           // Define connection and event handler
           let connection = AgoraRtcConnection(channelId: channelId, localUid: uid)
           let eventHandler = self

           // Set channel media options
           let options = AgoraRtcChannelMediaOptions()
           options.channelProfile = .liveBroadcasting
           options.clientRoleType = .audience
           options.autoSubscribeAudio = false
           options.autoSubscribeVideo = false

           // Join the channel without subscribing
           agoraKit?.joinChannelEx(byToken: token, connection: connection, delegate: self, mediaOptions: options, joinSuccess: nil)
           \`\`\`

        ### Subscribe to streams and start rendering [#subscribe-to-streams-and-start-rendering-2]

        When the user chooses to view content:

        1. Resume media subscription using [\`muteRemoteVideoStreamEx\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/muteremotevideostreamex\\(_\\:mute\\:connection:\\)) and [\`muteRemoteAudioStreamEx\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/muteremoteaudiostreamex\\(_\\:mute\\:connection:\\)).
        2. Call [\`startMediaRenderingTracingEx\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startmediarenderingtracingex\\(_:\\)) to log rendering metrics.
        3. The SDK reports results in the [\`videoRenderingTracingResultOfUid\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:videorenderingtracingresultofuid\\:currentevent\\:tracinginfo:\\)) callback, which you can use for performance analysis.

           \`\`\`swift
           func switchToChannel() {
               // Start video rendering tracing
               agoraKit?.startMediaRenderingTracingEx(connection)

               // Resume remote media subscriptions
               agoraKit?.muteRemoteVideoStreamEx(remoteUid, mute: false, connection: connection)
               agoraKit?.muteRemoteAudioStreamEx(remoteUid, mute: false, connection: connection)
           }
           \`\`\`
      </TabsContent>
    </Tabs>

    ## Troubleshooting [#troubleshooting-2]

    Refer to [Slow first-frame rendering of remote video when using the Agora RTC SDK](/en/api-reference/faq/quality/optimize_video_rendering).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="windows" />

    First frame output time is the duration between when a user joins a channel and when they first see the remote video. A shorter first frame output time reduces perceived wait time by rendering video more quickly.

    This guide describes two best practices to reduce video rendering time in Video Calling.

    ## Prerequisites [#prerequisites-3]

    Complete the steps in the [SDK Quickstart](/en/realtime-media/rtc/get-started-sdk) to build a basic Video Calling app.

    ## Understand the tech [#understand-the-tech-3]

    To reduce video rendering time, Agora provides the following solutions:

    * **Preload and initialize before joining the channel**
      Complete time-consuming operations ahead of time, such as preloading the channel, configuring the rendering view, and enabling accelerated rendering for audio and video frames.

    * **Join early, subscribe later**
      Join the channel in advance but delay subscribing to the audio and video stream. When the user triggers the join operation, subscribe to the host's stream and begin rendering immediately.

    The following table compares both solutions:

    | Characteristic       | Preload and initialize early                           | Join early, subscribe on demand                                        |
    | -------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------- |
    | Applicable scenarios | Most audio and video use cases                         | Scenarios with very high requirements for first frame rendering speed  |
    | Core implementation  | Initialize and configure video settings before joining | Join the channel early without subscribing; subscribe only when needed |
    | Cost                 | Normal billing                                         | May incur additional channel usage fees                                |

    The following figure shows the time to output the first frame before optimization and with each solution:

    ![Optimize video rendering](https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-tech.jpg)

    ## Implement fast first-frame rendering [#implement-fast-first-frame-rendering-3]

    This section describes the implementation logic for both solutions.

    <Tabs defaultValue="preload">
      <TabsList>
        <TabsTrigger value="preload">
          Preload and initialize early
        </TabsTrigger>

        <TabsTrigger value="subscribe">
          Join early, subscribe on demand
        </TabsTrigger>
      </TabsList>

      <TabsContent value="preload">
        The following figure illustrates the essential steps:

        ### Sequence diagram for implementation [#sequence-diagram-for-implementation-6]

        ![Sequence diagram for optimized video rendering](https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-solution-1.svg)

        ### Set up an RTC SDK instance [#set-up-an-rtc-sdk-instance-3]

        Creating and initializing the RTC engine takes time. To reduce the time to first frame, Agora recommends initializing the engine when the module loads rather than when your app first calls an SDK method.

        <CalloutContainer type="info">
          <CalloutDescription>
            Initialize the engine only once. Avoid creating and destroying it multiple times.
          </CalloutDescription>
        </CalloutContainer>

        \`\`\`cpp
        class CAgoraQuickStartDlg {
        private:
            IRtcEngine* m_rtcEngine;

        public:
            // Create and initialize the engine during dialog initialization
            CAgoraQuickStartDlg() {
                m_rtcEngine = createAgoraRtcEngine();
                RtcEngineContext context;
                context.appId = "Your App ID";
                context.channelProfile = CHANNEL_PROFILE_LIVE_BROADCASTING;
                // ... other necessary configurations

                m_rtcEngine->initialize(context);
            }
        };
        \`\`\`

        ### Enable accelerated rendering [#enable-accelerated-rendering-3]

        Call [\`enableInstantMediaRendering\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_enableinstantmediarendering) to reduce the time it takes to render the first video frame and play audio after joining a channel.

        * Call this method **before** joining a channel. Ideally, call it right after engine initialization.
        * Both host and audience must call this method to benefit from faster rendering.
        * To disable this feature, destroy the engine with \`release\`, then reinitialize it.

        \`\`\`cpp
        // Enable accelerated rendering before joining the channel
        m_rtcEngine->enableInstantMediaRendering();
        \`\`\`

        ### Set a video scenario [#set-a-video-scenario-3]

        Use [\`setVideoScenario\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setvideoscenario) to optimize performance for your specific use case. The SDK applies strategies tailored to the selected scenario.

        For example, for a one-on-one call, use \`APPLICATION_SCENARIO_1V1\`.

        \`\`\`cpp
        // Set the video scenario
        m_rtcEngine->setVideoScenarios(agora::rtc::APPLICATION_SCENARIO_1V1);
        \`\`\`

        ### Preload a channel [#preload-a-channel-3]

        Joining a channel involves acquiring server resources and establishing a connection. Call [\`preloadChannel\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_preloadchannel) to handle resource acquisition early and reduce join time.

        * The \`token\`, \`channelId\`, and \`uid\` must match the values used in \`joinChannel\`.
        * Call \`preloadChannel\` as soon as you retrieve the required info.
        * Don’t call \`joinChannel\` immediately after \`preloadChannel\`.

        \`\`\`cpp
        int CAgoraQuickStartDlg::prepareChannelInfo() {
            m_uid = get_uid();
            m_channelId = get_channel_info();
            m_token = getTokenFromServer(m_channelId, m_uid);

            // Preload the channel
            m_rtcEngine->preloadChannel(m_token, m_channelId, m_uid);
        }
        \`\`\`

        ### Set up the rendering view [#set-up-the-rendering-view-6]

        Setting the rendering view early ensures the first frame displays properly. If the view is not ready, the first frame might be skipped.

        If your app knows the remote user ID (For example, from Signaling), set the view immediately. Otherwise, use the \`onUserJoined\` callback.

        * **Set the remote view early:**

        \`\`\`cpp
        void CAgoraQuickStartDlg::onShowChannels(const char* channelId, uid_t remoteUid) {
            VideoCanvas canvas;
            canvas.uid = remoteUid;
            m_rtcEngine->setupRemoteVideo(canvas);
        }

        void CAgoraQuickStartDlg::onEIDUserJoined(uid_t uid, int elapsed) {
            // Already set
        }
        \`\`\`

        * **Set the view when the user joins:**

        \`\`\`cpp
        void EventHandler::onUserJoined(uid_t uid, int elapsed) {
            // Forward to UI logic
        }

        void CAgoraQuickStartDlg::onEIDUserJoined(uid_t uid, int elapsed) {
            VideoCanvas canvas;
            canvas.uid = uid;
            m_rtcEngine->setupRemoteVideo(canvas);
        }
        \`\`\`

        ### Monitor rendering performance [#monitor-rendering-performance-3]

        Use [\`startMediaRenderingTracing\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_startmediarenderingtracing) to monitor first-frame rendering metrics. Results are reported via [\`onVideoRenderingTracingResult\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onvideorenderingtracingresult).

        <CalloutContainer type="info">
          <CalloutDescription>
            Call this method when the user initiates joining. For example, on a **Join** button tap. This gives accurate first-frame timing.
          </CalloutDescription>
        </CalloutContainer>

        \`\`\`cpp
        void on_join_clicked() {
            m_rtcEngine->startMediaRenderingTracing();
            m_rtcEngine->joinChannel(token, channelId, uid, options);
        }
        \`\`\`

        ### Join a channel [#join-a-channel-3]

        Call [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2) to enter the channel. To speed up first-frame playback, avoid delays like fetching a token in this method.

        If you can’t retrieve a token early, consider using a [wildcard token](/en/realtime-media/rtc/build/authenticate-users/deploy-token-server#generate-wildcard-tokens).

        \`\`\`cpp
        int CAgoraQuickStartDlg::prepareChannelInfo() {
            m_uid = get_uid();
            m_channelId = get_channel_info();
            m_token = getTokenFromServer(m_channelId, m_uid);
        }

        int CAgoraQuickStartDlg::joinChannel() {
            ChannelMediaOptions options;
            return m_rtcEngine->joinChannel(m_token, m_channelId, m_uid, options);
        }
        \`\`\`

        ### Optimize callback performance [#optimize-callback-performance-3]

        The SDK runs callbacks like \`onJoinChannelSuccess\` on the same thread. If one callback is slow, it can delay others—including rendering events.

        <CalloutContainer type="info">
          <CalloutDescription>
            Don’t block the callback thread with network calls, file I/O, or heavy processing.
          </CalloutDescription>
        </CalloutContainer>

        #### Best practices [#best-practices-3]

        * Avoid complex operations in \`onJoinChannelSuccess\`.
        * Don’t block \`onUserJoined\` or other rendering-related callbacks.
        * Use background threads for heavy logic.
      </TabsContent>

      <TabsContent value="subscribe">
        The following figure illustrates the essential steps:

        ### Sequence diagram for implementation [#sequence-diagram-for-implementation-7]

        ![Sequence diagram for optimized video rendering](https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-solution-2.svg)

        ### Set up the rendering view [#set-up-the-rendering-view-7]

        If you know the host’s user ID before joining the channel, call [\`setupRemoteVideoEx\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineex.html#api_irtcengineex_setupremotevideoex) as early as possible to set up the rendering view. This ensures the rendering pipeline is initialized in advance, helping avoid delays in displaying the first decoded frame.

        If the host’s user ID is not available beforehand, wait for the \`onUserJoined\` callback, then call [\`setupRemoteVideoEx\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineex.html#api_irtcengineex_setupremotevideoex).

        \`\`\`cpp
        // Set the host’s rendering view
        VideoCanvas canvas;
        canvas.uid = far_next_channel.remoteUid;
        canvas.view = getView();  // Replace with your rendering view
        m_rtcEngine->setupRemoteVideoEx(canvas, connection);
        \`\`\`

        ### Join a channel without automatically subscribing [#join-a-channel-without-automatically-subscribing-3]

        Joining a channel typically takes the most time before the first video frame appears. For use cases like fast channel switching, delay subscribing to media streams to speed up rendering:

        1. Call [\`joinChannelEx\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineex.html#api_irtcengineex_joinchannelex) to join the channel.
        2. In [\`ChannelMediaOptions\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_channelmediaoptions.html), set \`autoSubscribeAudio\` and \`autoSubscribeVideo\` to \`false\`.
        3. Subscribe manually when the user is ready to view content.

           \`\`\`cpp
           // Set channel media options
           ChannelMediaOptions options;
           options.channelProfile = CHANNEL_PROFILE_LIVE_BROADCASTING;
           options.clientRoleType = CHANNEL_ROLE_AUDIENCE;
           options.autoSubscribeAudio = false;
           options.autoSubscribeVideo = false;

           RtcConnection connection(far_next_channel.channel_id.c_str(), m_localUid);

           // Join the channel without subscribing
           m_rtcEngine->joinChannelEx(APP_TOKEN, connection, options, m_handler);
           \`\`\`

        ### Subscribe to streams and start rendering [#subscribe-to-streams-and-start-rendering-3]

        When the user chooses to view content:

        1. Resume media subscription using [\`muteRemoteVideoStreamEx\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineex.html#api_irtcengineex_muteremotevideostreamex) and [\`muteRemoteAudioStreamEx\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineex.html#api_irtcengineex_muteremoteaudiostreamex).
        2. Call [\`startMediaRenderingTracingEx\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineex.html#api_irtcengineex_startmediarenderingtracingex) to log rendering metrics.
        3. The SDK reports results in the [\`onVideoRenderingTracingResult\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onvideorenderingtracingresult) callback, which you can use for performance analysis.

           \`\`\`cpp
           void CAgoraQuickStartDlg::switchNextChannel() {
               RtcConnection connection(next_channel.channel_id.c_str(), localUid);

               // Start video rendering tracing
               m_rtcEngine->startMediaRenderingTracingEx(connection);

               // Resume remote media subscriptions
               m_rtcEngine->muteRemoteVideoStreamEx(next_channel.remoteUid, false, connection);
               m_rtcEngine->muteRemoteAudioStreamEx(next_channel.remoteUid, false, connection);
           }
           \`\`\`
      </TabsContent>
    </Tabs>

    ## Troubleshooting [#troubleshooting-3]

    Refer to [Slow first-frame rendering of remote video when using the Agora RTC SDK](/en/api-reference/faq/quality/optimize_video_rendering).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "First frame output time is the duration between when a user joins a channel and when they first see the remote video. A shorter first frame output time reduces perceived wait time by rendering video more quickly."
  }, {
    heading: undefined,
    content: "This guide describes two best practices to reduce video rendering time in Video Calling."
  }, {
    heading: "prerequisites",
    content: "Complete the steps in the SDK Quickstart to build a basic Video Calling app."
  }, {
    heading: "understand-the-tech",
    content: "To reduce video rendering time, Agora provides the following solutions:"
  }, {
    heading: "understand-the-tech",
    content: `**Preload and initialize before joining the channel**
Complete time-consuming operations ahead of time, such as preloading the channel, configuring the rendering view, and enabling accelerated rendering for audio and video frames.`
  }, {
    heading: "understand-the-tech",
    content: `**Join early, subscribe later**
Join the channel in advance but delay subscribing to the audio and video stream. When the user triggers the join operation, subscribe to the host's stream and begin rendering immediately.`
  }, {
    heading: "understand-the-tech",
    content: "The following table compares both solutions:"
  }, {
    heading: "understand-the-tech",
    content: "Characteristic"
  }, {
    heading: "understand-the-tech",
    content: "Preload and initialize early"
  }, {
    heading: "understand-the-tech",
    content: "Join early, subscribe on demand"
  }, {
    heading: "understand-the-tech",
    content: "Applicable scenarios"
  }, {
    heading: "understand-the-tech",
    content: "Most audio and video use cases"
  }, {
    heading: "understand-the-tech",
    content: "Scenarios with very high requirements for first frame rendering speed"
  }, {
    heading: "understand-the-tech",
    content: "Core implementation"
  }, {
    heading: "understand-the-tech",
    content: "Initialize and configure video settings before joining"
  }, {
    heading: "understand-the-tech",
    content: "Join the channel early without subscribing; subscribe only when needed"
  }, {
    heading: "understand-the-tech",
    content: "Cost"
  }, {
    heading: "understand-the-tech",
    content: "Normal billing"
  }, {
    heading: "understand-the-tech",
    content: "May incur additional channel usage fees"
  }, {
    heading: "understand-the-tech",
    content: "The following figure shows the time to output the first frame before optimization and with each solution:"
  }, {
    heading: "implement-fast-first-frame-rendering",
    content: "This section describes the implementation logic for both solutions."
  }, {
    heading: "implement-fast-first-frame-rendering",
    content: "The following figure illustrates the essential steps:"
  }, {
    heading: "set-up-an-rtc-sdk-instance",
    content: "Creating and initializing the RTC engine takes time. To reduce the time to first frame, Agora recommends initializing the engine when the module loads rather than when your app first calls an SDK method."
  }, {
    heading: "set-up-an-rtc-sdk-instance",
    content: "Initialize the engine only once. Avoid creating and destroying it multiple times."
  }, {
    heading: "enable-accelerated-rendering",
    content: "Call `enableInstantMediaRendering` to reduce the time it takes to render the first video frame and play audio after joining a channel."
  }, {
    heading: "enable-accelerated-rendering",
    content: "Call this method **before** joining a channel. Ideally, call it right after engine initialization."
  }, {
    heading: "enable-accelerated-rendering",
    content: "Both host and audience must call this method to benefit from faster rendering."
  }, {
    heading: "enable-accelerated-rendering",
    content: "To disable this feature, destroy the engine with `release`, then reinitialize it."
  }, {
    heading: "set-a-video-scenario",
    content: "Use `setVideoScenario` to optimize performance for your specific use case. The SDK applies strategies tailored to the selected scenario."
  }, {
    heading: "set-a-video-scenario",
    content: "For example, for a one-on-one call, use `APPLICATION_SCENARIO_1V1`."
  }, {
    heading: "preload-a-channel",
    content: "Joining a channel involves acquiring server resources and establishing a connection. Call `preloadChannel` to handle resource acquisition early and reduce join time."
  }, {
    heading: "preload-a-channel",
    content: "The `token`, `channelId`, and `uid` must match the values used in `joinChannel`."
  }, {
    heading: "preload-a-channel",
    content: "Call `preloadChannel` as soon as you retrieve the required info."
  }, {
    heading: "preload-a-channel",
    content: "Don’t call `joinChannel` immediately after `preloadChannel`."
  }, {
    heading: "set-up-the-rendering-view",
    content: "Setting the rendering view early ensures the first frame displays properly. If the view is not ready, the first frame might be skipped."
  }, {
    heading: "set-up-the-rendering-view",
    content: "If your app knows the remote user ID (For example, from Signaling), set the view immediately. Otherwise, use the `onUserJoined` callback."
  }, {
    heading: "set-up-the-rendering-view",
    content: "**Set the remote view early:**"
  }, {
    heading: "set-up-the-rendering-view",
    content: "**Set the view when the user joins:**"
  }, {
    heading: "monitor-rendering-performance",
    content: "Use `startMediaRenderingTracing` to monitor first-frame rendering metrics. Results are reported via `onVideoRenderingTracingResult`."
  }, {
    heading: "monitor-rendering-performance",
    content: "Call this method when the user initiates joining. For example, on a **Join** button tap. This gives accurate first-frame timing."
  }, {
    heading: "join-a-channel",
    content: "Call `joinChannel` to enter the channel. To speed up first-frame playback, avoid delays like fetching a token in this method."
  }, {
    heading: "join-a-channel",
    content: "If you can’t retrieve a token early, consider using a wildcard token."
  }, {
    heading: "optimize-callback-performance",
    content: "The SDK runs callbacks like `onJoinChannelSuccess` on the same thread. If one callback is slow, it can delay others—including rendering events."
  }, {
    heading: "optimize-callback-performance",
    content: "Don’t block the callback thread with network calls, file I/O, or heavy processing."
  }, {
    heading: "best-practices",
    content: "Avoid complex operations in `onJoinChannelSuccess`."
  }, {
    heading: "best-practices",
    content: "Don’t block `onUserJoined` or other rendering-related callbacks."
  }, {
    heading: "best-practices",
    content: "Use background threads for heavy logic."
  }, {
    heading: "best-practices",
    content: "The following figure illustrates the essential steps:"
  }, {
    heading: "set-up-the-rendering-view-1",
    content: "If you know the host’s user ID before joining the channel, call `setupRemoteVideoEx` as early as possible to set up the rendering view. This ensures the rendering pipeline is initialized in advance, helping avoid delays in displaying the first decoded frame."
  }, {
    heading: "set-up-the-rendering-view-1",
    content: "If the host’s user ID is not available beforehand, wait for the `onUserJoined` callback, then call `setupRemoteVideoEx`."
  }, {
    heading: "join-a-channel-without-automatically-subscribing",
    content: "Joining a channel typically takes the most time before the first video frame appears. For use cases like fast channel switching, delay subscribing to media streams to speed up rendering:"
  }, {
    heading: "join-a-channel-without-automatically-subscribing",
    content: "Call `joinChannelEx` to join the channel."
  }, {
    heading: "join-a-channel-without-automatically-subscribing",
    content: "In `ChannelMediaOptions`, set `autoSubscribeAudio` and `autoSubscribeVideo` to `false`."
  }, {
    heading: "join-a-channel-without-automatically-subscribing",
    content: "Subscribe manually when the user is ready to view content."
  }, {
    heading: "subscribe-to-streams-and-start-rendering",
    content: "When the user chooses to view content:"
  }, {
    heading: "subscribe-to-streams-and-start-rendering",
    content: "Resume media subscription using `muteRemoteVideoStreamEx` and `muteRemoteAudioStreamEx`."
  }, {
    heading: "subscribe-to-streams-and-start-rendering",
    content: "Call `startMediaRenderingTracingEx` to log rendering metrics."
  }, {
    heading: "subscribe-to-streams-and-start-rendering",
    content: "The SDK reports results in the `onVideoRenderingTracingResult` callback, which you can use for performance analysis."
  }, {
    heading: "troubleshooting",
    content: "Refer to Slow first-frame rendering of remote video when using the Agora RTC SDK."
  }, {
    heading: "troubleshooting",
    content: "First frame output time is the duration between when a user joins a channel and when they first see the remote video. A shorter first frame output time reduces perceived wait time by rendering video more quickly."
  }, {
    heading: "troubleshooting",
    content: "This guide describes two best practices to reduce video rendering time in Video Calling."
  }, {
    heading: "prerequisites-1",
    content: "Complete the steps in the SDK Quickstart to build a basic Video Calling app."
  }, {
    heading: "understand-the-tech-1",
    content: "To reduce video rendering time, Agora provides the following solutions:"
  }, {
    heading: "understand-the-tech-1",
    content: `**Preload and initialize before joining the channel**
Complete time-consuming operations ahead of time, such as preloading the channel, configuring the rendering view, and enabling accelerated rendering for audio and video frames.`
  }, {
    heading: "understand-the-tech-1",
    content: `**Join early, subscribe later**
Join the channel in advance but delay subscribing to the audio and video stream. When the user triggers the join operation, subscribe to the host's stream and begin rendering immediately.`
  }, {
    heading: "understand-the-tech-1",
    content: "The following table compares both solutions:"
  }, {
    heading: "understand-the-tech-1",
    content: "Characteristic"
  }, {
    heading: "understand-the-tech-1",
    content: "Preload and initialize early"
  }, {
    heading: "understand-the-tech-1",
    content: "Join early, subscribe on demand"
  }, {
    heading: "understand-the-tech-1",
    content: "Applicable scenarios"
  }, {
    heading: "understand-the-tech-1",
    content: "Most audio and video use cases"
  }, {
    heading: "understand-the-tech-1",
    content: "Scenarios with very high requirements for first frame rendering speed"
  }, {
    heading: "understand-the-tech-1",
    content: "Core implementation"
  }, {
    heading: "understand-the-tech-1",
    content: "Initialize and configure video settings before joining"
  }, {
    heading: "understand-the-tech-1",
    content: "Join the channel early without subscribing; subscribe only when needed"
  }, {
    heading: "understand-the-tech-1",
    content: "Cost"
  }, {
    heading: "understand-the-tech-1",
    content: "Normal billing"
  }, {
    heading: "understand-the-tech-1",
    content: "May incur additional channel usage fees"
  }, {
    heading: "understand-the-tech-1",
    content: "The following figure shows the time to output the first frame before optimization and with each solution:"
  }, {
    heading: "implement-fast-first-frame-rendering-1",
    content: "This section describes the implementation logic for both solutions."
  }, {
    heading: "implement-fast-first-frame-rendering-1",
    content: "The following figure illustrates the essential steps:"
  }, {
    heading: "set-up-an-rtc-sdk-instance-1",
    content: "Creating and initializing the RTC engine takes time. To reduce the time to first frame, Agora recommends initializing the engine when the module loads rather than when your app first calls an SDK method."
  }, {
    heading: "set-up-an-rtc-sdk-instance-1",
    content: "Initialize the engine only once. Avoid creating and destroying it multiple times."
  }, {
    heading: "enable-accelerated-rendering-1",
    content: "Call `enableInstantMediaRendering` to reduce the time it takes to render the first video frame and play audio after joining a channel."
  }, {
    heading: "enable-accelerated-rendering-1",
    content: "Call this method **before** joining a channel. Ideally, call it right after engine initialization."
  }, {
    heading: "enable-accelerated-rendering-1",
    content: "Both host and audience must call this method to benefit from faster rendering."
  }, {
    heading: "enable-accelerated-rendering-1",
    content: "To disable this feature, destroy the engine with `release`, then reinitialize it."
  }, {
    heading: "set-a-video-scenario-1",
    content: "Use `setVideoScenario` to optimize performance for your specific use case. The SDK applies strategies tailored to the selected scenario."
  }, {
    heading: "set-a-video-scenario-1",
    content: "For example, for a one-on-one call, use `APPLICATION_SCENARIO_1V1`."
  }, {
    heading: "preload-a-channel-1",
    content: "Joining a channel involves acquiring server resources and establishing a connection. Call `preloadChannel` to handle resource acquisition early and reduce join time."
  }, {
    heading: "preload-a-channel-1",
    content: "The `token`, `channelId`, and `uid` must match the values used in `joinChannel`."
  }, {
    heading: "preload-a-channel-1",
    content: "Call `preloadChannel` as soon as you retrieve the required info."
  }, {
    heading: "preload-a-channel-1",
    content: "Don’t call `joinChannel` immediately after `preloadChannel`."
  }, {
    heading: "set-up-the-rendering-view-2",
    content: "Setting the rendering view early ensures the first frame displays properly. If the view is not ready, the first frame might be skipped."
  }, {
    heading: "set-up-the-rendering-view-2",
    content: "If your app knows the remote user ID (For example, from Signaling), set the view immediately. Otherwise, use the `onUserJoined` callback."
  }, {
    heading: "set-up-the-rendering-view-2",
    content: "**Set the remote view early:**"
  }, {
    heading: "set-up-the-rendering-view-2",
    content: "**Set the view when the user joins:**"
  }, {
    heading: "monitor-rendering-performance-1",
    content: "Use `startMediaRenderingTracing` to monitor first-frame rendering metrics. Results are reported via `videoRenderingTracingResultOfUid`."
  }, {
    heading: "monitor-rendering-performance-1",
    content: "Call this method when the user initiates joining. For example, on a **Join** button tap. This gives accurate first-frame timing."
  }, {
    heading: "join-a-channel-1",
    content: "Call `joinChannel` to enter the channel. To speed up first-frame playback, avoid delays like fetching a token in this method."
  }, {
    heading: "join-a-channel-1",
    content: "If you can’t retrieve a token early, consider using a wildcard token."
  }, {
    heading: "optimize-callback-performance-1",
    content: "The SDK runs callbacks like `onJoinChannelSuccess` on the same thread. If one callback is slow, it can delay others—including rendering events."
  }, {
    heading: "optimize-callback-performance-1",
    content: "Don’t block the callback thread with network calls, file I/O, or heavy processing."
  }, {
    heading: "best-practices-1",
    content: "Avoid complex operations in `onJoinChannelSuccess`."
  }, {
    heading: "best-practices-1",
    content: "Don’t block `onUserJoined` or other rendering-related callbacks."
  }, {
    heading: "best-practices-1",
    content: "Use background threads for heavy logic."
  }, {
    heading: "best-practices-1",
    content: "The following figure illustrates the essential steps:"
  }, {
    heading: "set-up-the-rendering-view-3",
    content: "If you know the host’s user ID before joining the channel, call `setupRemoteVideoEx` as early as possible to set up the rendering view. This ensures the rendering pipeline is initialized in advance, helping avoid delays in displaying the first decoded frame."
  }, {
    heading: "set-up-the-rendering-view-3",
    content: "If the host’s user ID is not available beforehand, wait for the `onUserJoined` callback, then call `setupRemoteVideoEx`."
  }, {
    heading: "join-a-channel-without-automatically-subscribing-1",
    content: "Joining a channel typically takes the most time before the first video frame appears. For use cases like fast channel switching, delay subscribing to media streams to speed up rendering:"
  }, {
    heading: "join-a-channel-without-automatically-subscribing-1",
    content: "Call `joinChannelEx` to join the channel."
  }, {
    heading: "join-a-channel-without-automatically-subscribing-1",
    content: "In `AgoraRtcChannelMediaOptions`, set `autoSubscribeAudio` and `autoSubscribeVideo` to `false`."
  }, {
    heading: "join-a-channel-without-automatically-subscribing-1",
    content: "Subscribe manually when the user is ready to view content."
  }, {
    heading: "subscribe-to-streams-and-start-rendering-1",
    content: "When the user chooses to view content:"
  }, {
    heading: "subscribe-to-streams-and-start-rendering-1",
    content: "Resume media subscription using `muteRemoteVideoStreamEx` and `muteRemoteAudioStreamEx`."
  }, {
    heading: "subscribe-to-streams-and-start-rendering-1",
    content: "Call `startMediaRenderingTracingEx` to log rendering metrics."
  }, {
    heading: "subscribe-to-streams-and-start-rendering-1",
    content: "The SDK reports results in the `videoRenderingTracingResultOfUid` callback, which you can use for performance analysis."
  }, {
    heading: "troubleshooting-1",
    content: "Refer to Slow first-frame rendering of remote video when using the Agora RTC SDK."
  }, {
    heading: "troubleshooting-1",
    content: "First frame output time is the duration between when a user joins a channel and when they first see the remote video. A shorter first frame output time reduces perceived wait time by rendering video more quickly."
  }, {
    heading: "troubleshooting-1",
    content: "This guide describes two best practices to reduce video rendering time in Video Calling."
  }, {
    heading: "prerequisites-2",
    content: "Complete the steps in the SDK Quickstart to build a basic Video Calling app."
  }, {
    heading: "understand-the-tech-2",
    content: "To reduce video rendering time, Agora provides the following solutions:"
  }, {
    heading: "understand-the-tech-2",
    content: `**Preload and initialize before joining the channel**
Complete time-consuming operations ahead of time, such as preloading the channel, configuring the rendering view, and enabling accelerated rendering for audio and video frames.`
  }, {
    heading: "understand-the-tech-2",
    content: `**Join early, subscribe later**
Join the channel in advance but delay subscribing to the audio and video stream. When the user triggers the join operation, subscribe to the host's stream and begin rendering immediately.`
  }, {
    heading: "understand-the-tech-2",
    content: "The following table compares both solutions:"
  }, {
    heading: "understand-the-tech-2",
    content: "Characteristic"
  }, {
    heading: "understand-the-tech-2",
    content: "Preload and initialize early"
  }, {
    heading: "understand-the-tech-2",
    content: "Join early, subscribe on demand"
  }, {
    heading: "understand-the-tech-2",
    content: "Applicable scenarios"
  }, {
    heading: "understand-the-tech-2",
    content: "Most audio and video use cases"
  }, {
    heading: "understand-the-tech-2",
    content: "Scenarios with very high requirements for first frame rendering speed"
  }, {
    heading: "understand-the-tech-2",
    content: "Core implementation"
  }, {
    heading: "understand-the-tech-2",
    content: "Initialize and configure video settings before joining"
  }, {
    heading: "understand-the-tech-2",
    content: "Join the channel early without subscribing; subscribe only when needed"
  }, {
    heading: "understand-the-tech-2",
    content: "Cost"
  }, {
    heading: "understand-the-tech-2",
    content: "Normal billing"
  }, {
    heading: "understand-the-tech-2",
    content: "May incur additional channel usage fees"
  }, {
    heading: "understand-the-tech-2",
    content: "The following figure shows the time to output the first frame before optimization and with each solution:"
  }, {
    heading: "implement-fast-first-frame-rendering-2",
    content: "This section describes the implementation logic for both solutions."
  }, {
    heading: "implement-fast-first-frame-rendering-2",
    content: "The following figure illustrates the essential steps:"
  }, {
    heading: "set-up-an-rtc-sdk-instance-2",
    content: "Creating and initializing the RTC engine takes time. To reduce the time to first frame, Agora recommends initializing the engine when the module loads rather than when your app first calls an SDK method."
  }, {
    heading: "set-up-an-rtc-sdk-instance-2",
    content: "Initialize the engine only once. Avoid creating and destroying it multiple times."
  }, {
    heading: "enable-accelerated-rendering-2",
    content: "Call `enableInstantMediaRendering` to reduce the time it takes to render the first video frame and play audio after joining a channel."
  }, {
    heading: "enable-accelerated-rendering-2",
    content: "Call this method **before** joining a channel. Ideally, call it right after engine initialization."
  }, {
    heading: "enable-accelerated-rendering-2",
    content: "Both host and audience must call this method to benefit from faster rendering."
  }, {
    heading: "enable-accelerated-rendering-2",
    content: "To disable this feature, destroy the engine with `release`, then reinitialize it."
  }, {
    heading: "set-a-video-scenario-2",
    content: "Use `setVideoScenario` to optimize performance for your specific use case. The SDK applies strategies tailored to the selected scenario."
  }, {
    heading: "set-a-video-scenario-2",
    content: "For example, for a one-on-one call, use `APPLICATION_SCENARIO_1V1`."
  }, {
    heading: "preload-a-channel-2",
    content: "Joining a channel involves acquiring server resources and establishing a connection. Call `preloadChannel` to handle resource acquisition early and reduce join time."
  }, {
    heading: "preload-a-channel-2",
    content: "The `token`, `channelId`, and `uid` must match the values used in `joinChannel`."
  }, {
    heading: "preload-a-channel-2",
    content: "Call `preloadChannel` as soon as you retrieve the required info."
  }, {
    heading: "preload-a-channel-2",
    content: "Don’t call `joinChannel` immediately after `preloadChannel`."
  }, {
    heading: "set-up-the-rendering-view-4",
    content: "Setting the rendering view early ensures the first frame displays properly. If the view is not ready, the first frame might be skipped."
  }, {
    heading: "set-up-the-rendering-view-4",
    content: "If your app knows the remote user ID (For example, from Signaling), set the view immediately. Otherwise, use the `onUserJoined` callback."
  }, {
    heading: "set-up-the-rendering-view-4",
    content: "**Set the remote view early:**"
  }, {
    heading: "set-up-the-rendering-view-4",
    content: "**Set the view when the user joins:**"
  }, {
    heading: "monitor-rendering-performance-2",
    content: "Use `startMediaRenderingTracing` to monitor first-frame rendering metrics. Results are reported via `videoRenderingTracingResultOfUid`."
  }, {
    heading: "monitor-rendering-performance-2",
    content: "Call this method when the user initiates joining. For example, on a **Join** button tap. This gives accurate first-frame timing."
  }, {
    heading: "join-a-channel-2",
    content: "Call `joinChannel` to enter the channel. To speed up first-frame playback, avoid delays like fetching a token in this method."
  }, {
    heading: "join-a-channel-2",
    content: "If you can’t retrieve a token early, consider using a wildcard token."
  }, {
    heading: "optimize-callback-performance-2",
    content: "The SDK runs callbacks like `onJoinChannelSuccess` on the same thread. If one callback is slow, it can delay others—including rendering events."
  }, {
    heading: "optimize-callback-performance-2",
    content: "Don’t block the callback thread with network calls, file I/O, or heavy processing."
  }, {
    heading: "best-practices-2",
    content: "Avoid complex operations in `onJoinChannelSuccess`."
  }, {
    heading: "best-practices-2",
    content: "Don’t block `onUserJoined` or other rendering-related callbacks."
  }, {
    heading: "best-practices-2",
    content: "Use background threads for heavy logic."
  }, {
    heading: "best-practices-2",
    content: "The following figure illustrates the essential steps:"
  }, {
    heading: "set-up-the-rendering-view-5",
    content: "If you know the host’s user ID before joining the channel, call `setupRemoteVideoEx` as early as possible to set up the rendering view. This ensures the rendering pipeline is initialized in advance, helping avoid delays in displaying the first decoded frame."
  }, {
    heading: "set-up-the-rendering-view-5",
    content: "If the host’s user ID is not available beforehand, wait for the `onUserJoined` callback, then call `setupRemoteVideoEx`."
  }, {
    heading: "join-a-channel-without-automatically-subscribing-2",
    content: "Joining a channel typically takes the most time before the first video frame appears. For use cases like fast channel switching, delay subscribing to media streams to speed up rendering:"
  }, {
    heading: "join-a-channel-without-automatically-subscribing-2",
    content: "Call `joinChannelEx` to join the channel."
  }, {
    heading: "join-a-channel-without-automatically-subscribing-2",
    content: "In `AgoraRtcChannelMediaOptions`, set `autoSubscribeAudio` and `autoSubscribeVideo` to `false`."
  }, {
    heading: "join-a-channel-without-automatically-subscribing-2",
    content: "Subscribe manually when the user is ready to view content."
  }, {
    heading: "subscribe-to-streams-and-start-rendering-2",
    content: "When the user chooses to view content:"
  }, {
    heading: "subscribe-to-streams-and-start-rendering-2",
    content: "Resume media subscription using `muteRemoteVideoStreamEx` and `muteRemoteAudioStreamEx`."
  }, {
    heading: "subscribe-to-streams-and-start-rendering-2",
    content: "Call `startMediaRenderingTracingEx` to log rendering metrics."
  }, {
    heading: "subscribe-to-streams-and-start-rendering-2",
    content: "The SDK reports results in the `videoRenderingTracingResultOfUid` callback, which you can use for performance analysis."
  }, {
    heading: "troubleshooting-2",
    content: "Refer to Slow first-frame rendering of remote video when using the Agora RTC SDK."
  }, {
    heading: "troubleshooting-2",
    content: "First frame output time is the duration between when a user joins a channel and when they first see the remote video. A shorter first frame output time reduces perceived wait time by rendering video more quickly."
  }, {
    heading: "troubleshooting-2",
    content: "This guide describes two best practices to reduce video rendering time in Video Calling."
  }, {
    heading: "prerequisites-3",
    content: "Complete the steps in the SDK Quickstart to build a basic Video Calling app."
  }, {
    heading: "understand-the-tech-3",
    content: "To reduce video rendering time, Agora provides the following solutions:"
  }, {
    heading: "understand-the-tech-3",
    content: `**Preload and initialize before joining the channel**
Complete time-consuming operations ahead of time, such as preloading the channel, configuring the rendering view, and enabling accelerated rendering for audio and video frames.`
  }, {
    heading: "understand-the-tech-3",
    content: `**Join early, subscribe later**
Join the channel in advance but delay subscribing to the audio and video stream. When the user triggers the join operation, subscribe to the host's stream and begin rendering immediately.`
  }, {
    heading: "understand-the-tech-3",
    content: "The following table compares both solutions:"
  }, {
    heading: "understand-the-tech-3",
    content: "Characteristic"
  }, {
    heading: "understand-the-tech-3",
    content: "Preload and initialize early"
  }, {
    heading: "understand-the-tech-3",
    content: "Join early, subscribe on demand"
  }, {
    heading: "understand-the-tech-3",
    content: "Applicable scenarios"
  }, {
    heading: "understand-the-tech-3",
    content: "Most audio and video use cases"
  }, {
    heading: "understand-the-tech-3",
    content: "Scenarios with very high requirements for first frame rendering speed"
  }, {
    heading: "understand-the-tech-3",
    content: "Core implementation"
  }, {
    heading: "understand-the-tech-3",
    content: "Initialize and configure video settings before joining"
  }, {
    heading: "understand-the-tech-3",
    content: "Join the channel early without subscribing; subscribe only when needed"
  }, {
    heading: "understand-the-tech-3",
    content: "Cost"
  }, {
    heading: "understand-the-tech-3",
    content: "Normal billing"
  }, {
    heading: "understand-the-tech-3",
    content: "May incur additional channel usage fees"
  }, {
    heading: "understand-the-tech-3",
    content: "The following figure shows the time to output the first frame before optimization and with each solution:"
  }, {
    heading: "implement-fast-first-frame-rendering-3",
    content: "This section describes the implementation logic for both solutions."
  }, {
    heading: "implement-fast-first-frame-rendering-3",
    content: "The following figure illustrates the essential steps:"
  }, {
    heading: "set-up-an-rtc-sdk-instance-3",
    content: "Creating and initializing the RTC engine takes time. To reduce the time to first frame, Agora recommends initializing the engine when the module loads rather than when your app first calls an SDK method."
  }, {
    heading: "set-up-an-rtc-sdk-instance-3",
    content: "Initialize the engine only once. Avoid creating and destroying it multiple times."
  }, {
    heading: "enable-accelerated-rendering-3",
    content: "Call `enableInstantMediaRendering` to reduce the time it takes to render the first video frame and play audio after joining a channel."
  }, {
    heading: "enable-accelerated-rendering-3",
    content: "Call this method **before** joining a channel. Ideally, call it right after engine initialization."
  }, {
    heading: "enable-accelerated-rendering-3",
    content: "Both host and audience must call this method to benefit from faster rendering."
  }, {
    heading: "enable-accelerated-rendering-3",
    content: "To disable this feature, destroy the engine with `release`, then reinitialize it."
  }, {
    heading: "set-a-video-scenario-3",
    content: "Use `setVideoScenario` to optimize performance for your specific use case. The SDK applies strategies tailored to the selected scenario."
  }, {
    heading: "set-a-video-scenario-3",
    content: "For example, for a one-on-one call, use `APPLICATION_SCENARIO_1V1`."
  }, {
    heading: "preload-a-channel-3",
    content: "Joining a channel involves acquiring server resources and establishing a connection. Call `preloadChannel` to handle resource acquisition early and reduce join time."
  }, {
    heading: "preload-a-channel-3",
    content: "The `token`, `channelId`, and `uid` must match the values used in `joinChannel`."
  }, {
    heading: "preload-a-channel-3",
    content: "Call `preloadChannel` as soon as you retrieve the required info."
  }, {
    heading: "preload-a-channel-3",
    content: "Don’t call `joinChannel` immediately after `preloadChannel`."
  }, {
    heading: "set-up-the-rendering-view-6",
    content: "Setting the rendering view early ensures the first frame displays properly. If the view is not ready, the first frame might be skipped."
  }, {
    heading: "set-up-the-rendering-view-6",
    content: "If your app knows the remote user ID (For example, from Signaling), set the view immediately. Otherwise, use the `onUserJoined` callback."
  }, {
    heading: "set-up-the-rendering-view-6",
    content: "**Set the remote view early:**"
  }, {
    heading: "set-up-the-rendering-view-6",
    content: "**Set the view when the user joins:**"
  }, {
    heading: "monitor-rendering-performance-3",
    content: "Use `startMediaRenderingTracing` to monitor first-frame rendering metrics. Results are reported via `onVideoRenderingTracingResult`."
  }, {
    heading: "monitor-rendering-performance-3",
    content: "Call this method when the user initiates joining. For example, on a **Join** button tap. This gives accurate first-frame timing."
  }, {
    heading: "join-a-channel-3",
    content: "Call `joinChannel` to enter the channel. To speed up first-frame playback, avoid delays like fetching a token in this method."
  }, {
    heading: "join-a-channel-3",
    content: "If you can’t retrieve a token early, consider using a wildcard token."
  }, {
    heading: "optimize-callback-performance-3",
    content: "The SDK runs callbacks like `onJoinChannelSuccess` on the same thread. If one callback is slow, it can delay others—including rendering events."
  }, {
    heading: "optimize-callback-performance-3",
    content: "Don’t block the callback thread with network calls, file I/O, or heavy processing."
  }, {
    heading: "best-practices-3",
    content: "Avoid complex operations in `onJoinChannelSuccess`."
  }, {
    heading: "best-practices-3",
    content: "Don’t block `onUserJoined` or other rendering-related callbacks."
  }, {
    heading: "best-practices-3",
    content: "Use background threads for heavy logic."
  }, {
    heading: "best-practices-3",
    content: "The following figure illustrates the essential steps:"
  }, {
    heading: "set-up-the-rendering-view-7",
    content: "If you know the host’s user ID before joining the channel, call `setupRemoteVideoEx` as early as possible to set up the rendering view. This ensures the rendering pipeline is initialized in advance, helping avoid delays in displaying the first decoded frame."
  }, {
    heading: "set-up-the-rendering-view-7",
    content: "If the host’s user ID is not available beforehand, wait for the `onUserJoined` callback, then call `setupRemoteVideoEx`."
  }, {
    heading: "join-a-channel-without-automatically-subscribing-3",
    content: "Joining a channel typically takes the most time before the first video frame appears. For use cases like fast channel switching, delay subscribing to media streams to speed up rendering:"
  }, {
    heading: "join-a-channel-without-automatically-subscribing-3",
    content: "Call `joinChannelEx` to join the channel."
  }, {
    heading: "join-a-channel-without-automatically-subscribing-3",
    content: "In `ChannelMediaOptions`, set `autoSubscribeAudio` and `autoSubscribeVideo` to `false`."
  }, {
    heading: "join-a-channel-without-automatically-subscribing-3",
    content: "Subscribe manually when the user is ready to view content."
  }, {
    heading: "subscribe-to-streams-and-start-rendering-3",
    content: "When the user chooses to view content:"
  }, {
    heading: "subscribe-to-streams-and-start-rendering-3",
    content: "Resume media subscription using `muteRemoteVideoStreamEx` and `muteRemoteAudioStreamEx`."
  }, {
    heading: "subscribe-to-streams-and-start-rendering-3",
    content: "Call `startMediaRenderingTracingEx` to log rendering metrics."
  }, {
    heading: "subscribe-to-streams-and-start-rendering-3",
    content: "The SDK reports results in the `onVideoRenderingTracingResult` callback, which you can use for performance analysis."
  }, {
    heading: "troubleshooting-3",
    content: "Refer to Slow first-frame rendering of remote video when using the Agora RTC SDK."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "implement-fast-first-frame-rendering",
    content: "Implement fast first-frame rendering"
  }, {
    id: "sequence-diagram-for-implementation",
    content: "Sequence diagram for implementation"
  }, {
    id: "set-up-an-rtc-sdk-instance",
    content: "Set up an RTC SDK instance"
  }, {
    id: "enable-accelerated-rendering",
    content: "Enable accelerated rendering"
  }, {
    id: "set-a-video-scenario",
    content: "Set a video scenario"
  }, {
    id: "preload-a-channel",
    content: "Preload a channel"
  }, {
    id: "set-up-the-rendering-view",
    content: "Set up the rendering view"
  }, {
    id: "monitor-rendering-performance",
    content: "Monitor rendering performance"
  }, {
    id: "join-a-channel",
    content: "Join a channel"
  }, {
    id: "optimize-callback-performance",
    content: "Optimize callback performance"
  }, {
    id: "best-practices",
    content: "Best practices"
  }, {
    id: "sequence-diagram-for-implementation-1",
    content: "Sequence diagram for implementation"
  }, {
    id: "set-up-the-rendering-view-1",
    content: "Set up the rendering view"
  }, {
    id: "join-a-channel-without-automatically-subscribing",
    content: "Join a channel without automatically subscribing"
  }, {
    id: "subscribe-to-streams-and-start-rendering",
    content: "Subscribe to streams and start rendering"
  }, {
    id: "troubleshooting",
    content: "Troubleshooting"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "implement-fast-first-frame-rendering-1",
    content: "Implement fast first-frame rendering"
  }, {
    id: "sequence-diagram-for-implementation-2",
    content: "Sequence diagram for implementation"
  }, {
    id: "set-up-an-rtc-sdk-instance-1",
    content: "Set up an RTC SDK instance"
  }, {
    id: "enable-accelerated-rendering-1",
    content: "Enable accelerated rendering"
  }, {
    id: "set-a-video-scenario-1",
    content: "Set a video scenario"
  }, {
    id: "preload-a-channel-1",
    content: "Preload a channel"
  }, {
    id: "set-up-the-rendering-view-2",
    content: "Set up the rendering view"
  }, {
    id: "monitor-rendering-performance-1",
    content: "Monitor rendering performance"
  }, {
    id: "join-a-channel-1",
    content: "Join a channel"
  }, {
    id: "optimize-callback-performance-1",
    content: "Optimize callback performance"
  }, {
    id: "best-practices-1",
    content: "Best practices"
  }, {
    id: "sequence-diagram-for-implementation-3",
    content: "Sequence diagram for implementation"
  }, {
    id: "set-up-the-rendering-view-3",
    content: "Set up the rendering view"
  }, {
    id: "join-a-channel-without-automatically-subscribing-1",
    content: "Join a channel without automatically subscribing"
  }, {
    id: "subscribe-to-streams-and-start-rendering-1",
    content: "Subscribe to streams and start rendering"
  }, {
    id: "troubleshooting-1",
    content: "Troubleshooting"
  }, {
    id: "prerequisites-2",
    content: "Prerequisites"
  }, {
    id: "understand-the-tech-2",
    content: "Understand the tech"
  }, {
    id: "implement-fast-first-frame-rendering-2",
    content: "Implement fast first-frame rendering"
  }, {
    id: "sequence-diagram-for-implementation-4",
    content: "Sequence diagram for implementation"
  }, {
    id: "set-up-an-rtc-sdk-instance-2",
    content: "Set up an RTC SDK instance"
  }, {
    id: "enable-accelerated-rendering-2",
    content: "Enable accelerated rendering"
  }, {
    id: "set-a-video-scenario-2",
    content: "Set a video scenario"
  }, {
    id: "preload-a-channel-2",
    content: "Preload a channel"
  }, {
    id: "set-up-the-rendering-view-4",
    content: "Set up the rendering view"
  }, {
    id: "monitor-rendering-performance-2",
    content: "Monitor rendering performance"
  }, {
    id: "join-a-channel-2",
    content: "Join a channel"
  }, {
    id: "optimize-callback-performance-2",
    content: "Optimize callback performance"
  }, {
    id: "best-practices-2",
    content: "Best practices"
  }, {
    id: "sequence-diagram-for-implementation-5",
    content: "Sequence diagram for implementation"
  }, {
    id: "set-up-the-rendering-view-5",
    content: "Set up the rendering view"
  }, {
    id: "join-a-channel-without-automatically-subscribing-2",
    content: "Join a channel without automatically subscribing"
  }, {
    id: "subscribe-to-streams-and-start-rendering-2",
    content: "Subscribe to streams and start rendering"
  }, {
    id: "troubleshooting-2",
    content: "Troubleshooting"
  }, {
    id: "prerequisites-3",
    content: "Prerequisites"
  }, {
    id: "understand-the-tech-3",
    content: "Understand the tech"
  }, {
    id: "implement-fast-first-frame-rendering-3",
    content: "Implement fast first-frame rendering"
  }, {
    id: "sequence-diagram-for-implementation-6",
    content: "Sequence diagram for implementation"
  }, {
    id: "set-up-an-rtc-sdk-instance-3",
    content: "Set up an RTC SDK instance"
  }, {
    id: "enable-accelerated-rendering-3",
    content: "Enable accelerated rendering"
  }, {
    id: "set-a-video-scenario-3",
    content: "Set a video scenario"
  }, {
    id: "preload-a-channel-3",
    content: "Preload a channel"
  }, {
    id: "set-up-the-rendering-view-6",
    content: "Set up the rendering view"
  }, {
    id: "monitor-rendering-performance-3",
    content: "Monitor rendering performance"
  }, {
    id: "join-a-channel-3",
    content: "Join a channel"
  }, {
    id: "optimize-callback-performance-3",
    content: "Optimize callback performance"
  }, {
    id: "best-practices-3",
    content: "Best practices"
  }, {
    id: "sequence-diagram-for-implementation-7",
    content: "Sequence diagram for implementation"
  }, {
    id: "set-up-the-rendering-view-7",
    content: "Set up the rendering view"
  }, {
    id: "join-a-channel-without-automatically-subscribing-3",
    content: "Join a channel without automatically subscribing"
  }, {
    id: "subscribe-to-streams-and-start-rendering-3",
    content: "Subscribe to streams and start rendering"
  }, {
    id: "troubleshooting-3",
    content: "Troubleshooting"
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
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#implement-fast-first-frame-rendering",
  title: _jsx(_Fragment, {
    children: "Implement fast first-frame rendering"
  })
}, {
  depth: 3,
  url: "#sequence-diagram-for-implementation",
  title: _jsx(_Fragment, {
    children: "Sequence diagram for implementation"
  })
}, {
  depth: 3,
  url: "#set-up-an-rtc-sdk-instance",
  title: _jsx(_Fragment, {
    children: "Set up an RTC SDK instance"
  })
}, {
  depth: 3,
  url: "#enable-accelerated-rendering",
  title: _jsx(_Fragment, {
    children: "Enable accelerated rendering"
  })
}, {
  depth: 3,
  url: "#set-a-video-scenario",
  title: _jsx(_Fragment, {
    children: "Set a video scenario"
  })
}, {
  depth: 3,
  url: "#preload-a-channel",
  title: _jsx(_Fragment, {
    children: "Preload a channel"
  })
}, {
  depth: 3,
  url: "#set-up-the-rendering-view",
  title: _jsx(_Fragment, {
    children: "Set up the rendering view"
  })
}, {
  depth: 3,
  url: "#monitor-rendering-performance",
  title: _jsx(_Fragment, {
    children: "Monitor rendering performance"
  })
}, {
  depth: 3,
  url: "#join-a-channel",
  title: _jsx(_Fragment, {
    children: "Join a channel"
  })
}, {
  depth: 3,
  url: "#optimize-callback-performance",
  title: _jsx(_Fragment, {
    children: "Optimize callback performance"
  })
}, {
  depth: 4,
  url: "#best-practices",
  title: _jsx(_Fragment, {
    children: "Best practices"
  })
}, {
  depth: 3,
  url: "#sequence-diagram-for-implementation-1",
  title: _jsx(_Fragment, {
    children: "Sequence diagram for implementation"
  })
}, {
  depth: 3,
  url: "#set-up-the-rendering-view-1",
  title: _jsx(_Fragment, {
    children: "Set up the rendering view"
  })
}, {
  depth: 3,
  url: "#join-a-channel-without-automatically-subscribing",
  title: _jsx(_Fragment, {
    children: "Join a channel without automatically subscribing"
  })
}, {
  depth: 3,
  url: "#subscribe-to-streams-and-start-rendering",
  title: _jsx(_Fragment, {
    children: "Subscribe to streams and start rendering"
  })
}, {
  depth: 2,
  url: "#troubleshooting",
  title: _jsx(_Fragment, {
    children: "Troubleshooting"
  })
}, {
  depth: 2,
  url: "#prerequisites-1",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-1",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#implement-fast-first-frame-rendering-1",
  title: _jsx(_Fragment, {
    children: "Implement fast first-frame rendering"
  })
}, {
  depth: 3,
  url: "#sequence-diagram-for-implementation-2",
  title: _jsx(_Fragment, {
    children: "Sequence diagram for implementation"
  })
}, {
  depth: 3,
  url: "#set-up-an-rtc-sdk-instance-1",
  title: _jsx(_Fragment, {
    children: "Set up an RTC SDK instance"
  })
}, {
  depth: 3,
  url: "#enable-accelerated-rendering-1",
  title: _jsx(_Fragment, {
    children: "Enable accelerated rendering"
  })
}, {
  depth: 3,
  url: "#set-a-video-scenario-1",
  title: _jsx(_Fragment, {
    children: "Set a video scenario"
  })
}, {
  depth: 3,
  url: "#preload-a-channel-1",
  title: _jsx(_Fragment, {
    children: "Preload a channel"
  })
}, {
  depth: 3,
  url: "#set-up-the-rendering-view-2",
  title: _jsx(_Fragment, {
    children: "Set up the rendering view"
  })
}, {
  depth: 3,
  url: "#monitor-rendering-performance-1",
  title: _jsx(_Fragment, {
    children: "Monitor rendering performance"
  })
}, {
  depth: 3,
  url: "#join-a-channel-1",
  title: _jsx(_Fragment, {
    children: "Join a channel"
  })
}, {
  depth: 3,
  url: "#optimize-callback-performance-1",
  title: _jsx(_Fragment, {
    children: "Optimize callback performance"
  })
}, {
  depth: 4,
  url: "#best-practices-1",
  title: _jsx(_Fragment, {
    children: "Best practices"
  })
}, {
  depth: 3,
  url: "#sequence-diagram-for-implementation-3",
  title: _jsx(_Fragment, {
    children: "Sequence diagram for implementation"
  })
}, {
  depth: 3,
  url: "#set-up-the-rendering-view-3",
  title: _jsx(_Fragment, {
    children: "Set up the rendering view"
  })
}, {
  depth: 3,
  url: "#join-a-channel-without-automatically-subscribing-1",
  title: _jsx(_Fragment, {
    children: "Join a channel without automatically subscribing"
  })
}, {
  depth: 3,
  url: "#subscribe-to-streams-and-start-rendering-1",
  title: _jsx(_Fragment, {
    children: "Subscribe to streams and start rendering"
  })
}, {
  depth: 2,
  url: "#troubleshooting-1",
  title: _jsx(_Fragment, {
    children: "Troubleshooting"
  })
}, {
  depth: 2,
  url: "#prerequisites-2",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-2",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#implement-fast-first-frame-rendering-2",
  title: _jsx(_Fragment, {
    children: "Implement fast first-frame rendering"
  })
}, {
  depth: 3,
  url: "#sequence-diagram-for-implementation-4",
  title: _jsx(_Fragment, {
    children: "Sequence diagram for implementation"
  })
}, {
  depth: 3,
  url: "#set-up-an-rtc-sdk-instance-2",
  title: _jsx(_Fragment, {
    children: "Set up an RTC SDK instance"
  })
}, {
  depth: 3,
  url: "#enable-accelerated-rendering-2",
  title: _jsx(_Fragment, {
    children: "Enable accelerated rendering"
  })
}, {
  depth: 3,
  url: "#set-a-video-scenario-2",
  title: _jsx(_Fragment, {
    children: "Set a video scenario"
  })
}, {
  depth: 3,
  url: "#preload-a-channel-2",
  title: _jsx(_Fragment, {
    children: "Preload a channel"
  })
}, {
  depth: 3,
  url: "#set-up-the-rendering-view-4",
  title: _jsx(_Fragment, {
    children: "Set up the rendering view"
  })
}, {
  depth: 3,
  url: "#monitor-rendering-performance-2",
  title: _jsx(_Fragment, {
    children: "Monitor rendering performance"
  })
}, {
  depth: 3,
  url: "#join-a-channel-2",
  title: _jsx(_Fragment, {
    children: "Join a channel"
  })
}, {
  depth: 3,
  url: "#optimize-callback-performance-2",
  title: _jsx(_Fragment, {
    children: "Optimize callback performance"
  })
}, {
  depth: 4,
  url: "#best-practices-2",
  title: _jsx(_Fragment, {
    children: "Best practices"
  })
}, {
  depth: 3,
  url: "#sequence-diagram-for-implementation-5",
  title: _jsx(_Fragment, {
    children: "Sequence diagram for implementation"
  })
}, {
  depth: 3,
  url: "#set-up-the-rendering-view-5",
  title: _jsx(_Fragment, {
    children: "Set up the rendering view"
  })
}, {
  depth: 3,
  url: "#join-a-channel-without-automatically-subscribing-2",
  title: _jsx(_Fragment, {
    children: "Join a channel without automatically subscribing"
  })
}, {
  depth: 3,
  url: "#subscribe-to-streams-and-start-rendering-2",
  title: _jsx(_Fragment, {
    children: "Subscribe to streams and start rendering"
  })
}, {
  depth: 2,
  url: "#troubleshooting-2",
  title: _jsx(_Fragment, {
    children: "Troubleshooting"
  })
}, {
  depth: 2,
  url: "#prerequisites-3",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-3",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#implement-fast-first-frame-rendering-3",
  title: _jsx(_Fragment, {
    children: "Implement fast first-frame rendering"
  })
}, {
  depth: 3,
  url: "#sequence-diagram-for-implementation-6",
  title: _jsx(_Fragment, {
    children: "Sequence diagram for implementation"
  })
}, {
  depth: 3,
  url: "#set-up-an-rtc-sdk-instance-3",
  title: _jsx(_Fragment, {
    children: "Set up an RTC SDK instance"
  })
}, {
  depth: 3,
  url: "#enable-accelerated-rendering-3",
  title: _jsx(_Fragment, {
    children: "Enable accelerated rendering"
  })
}, {
  depth: 3,
  url: "#set-a-video-scenario-3",
  title: _jsx(_Fragment, {
    children: "Set a video scenario"
  })
}, {
  depth: 3,
  url: "#preload-a-channel-3",
  title: _jsx(_Fragment, {
    children: "Preload a channel"
  })
}, {
  depth: 3,
  url: "#set-up-the-rendering-view-6",
  title: _jsx(_Fragment, {
    children: "Set up the rendering view"
  })
}, {
  depth: 3,
  url: "#monitor-rendering-performance-3",
  title: _jsx(_Fragment, {
    children: "Monitor rendering performance"
  })
}, {
  depth: 3,
  url: "#join-a-channel-3",
  title: _jsx(_Fragment, {
    children: "Join a channel"
  })
}, {
  depth: 3,
  url: "#optimize-callback-performance-3",
  title: _jsx(_Fragment, {
    children: "Optimize callback performance"
  })
}, {
  depth: 4,
  url: "#best-practices-3",
  title: _jsx(_Fragment, {
    children: "Best practices"
  })
}, {
  depth: 3,
  url: "#sequence-diagram-for-implementation-7",
  title: _jsx(_Fragment, {
    children: "Sequence diagram for implementation"
  })
}, {
  depth: 3,
  url: "#set-up-the-rendering-view-7",
  title: _jsx(_Fragment, {
    children: "Set up the rendering view"
  })
}, {
  depth: 3,
  url: "#join-a-channel-without-automatically-subscribing-3",
  title: _jsx(_Fragment, {
    children: "Join a channel without automatically subscribing"
  })
}, {
  depth: 3,
  url: "#subscribe-to-streams-and-start-rendering-3",
  title: _jsx(_Fragment, {
    children: "Subscribe to streams and start rendering"
  })
}, {
  depth: 2,
  url: "#troubleshooting-3",
  title: _jsx(_Fragment, {
    children: "Troubleshooting"
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, Tabs, TabsContent, TabsList, TabsTrigger, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "android",
    platforms: '["android","ios","macos","windows"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "android",
        platform: "android"
      }), _jsx(_components.p, {
        children: "First frame output time is the duration between when a user joins a channel and when they first see the remote video. A shorter first frame output time reduces perceived wait time by rendering video more quickly."
      }), _jsx(_components.p, {
        children: "This guide describes two best practices to reduce video rendering time in Video Calling."
      }), _jsx(_components.h2, {
        id: "prerequisites",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Complete the steps in the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "SDK Quickstart"
        }), " to build a basic Video Calling app."]
      }), _jsx(_components.h2, {
        id: "understand-the-tech",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "To reduce video rendering time, Agora provides the following solutions:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Preload and initialize before joining the channel"
            }), `
Complete time-consuming operations ahead of time, such as preloading the channel, configuring the rendering view, and enabling accelerated rendering for audio and video frames.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Join early, subscribe later"
            }), `
Join the channel in advance but delay subscribing to the audio and video stream. When the user triggers the join operation, subscribe to the host's stream and begin rendering immediately.`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following table compares both solutions:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Characteristic"
            }), _jsx(_components.th, {
              children: "Preload and initialize early"
            }), _jsx(_components.th, {
              children: "Join early, subscribe on demand"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Applicable scenarios"
            }), _jsx(_components.td, {
              children: "Most audio and video use cases"
            }), _jsx(_components.td, {
              children: "Scenarios with very high requirements for first frame rendering speed"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Core implementation"
            }), _jsx(_components.td, {
              children: "Initialize and configure video settings before joining"
            }), _jsx(_components.td, {
              children: "Join the channel early without subscribing; subscribe only when needed"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Cost"
            }), _jsx(_components.td, {
              children: "Normal billing"
            }), _jsx(_components.td, {
              children: "May incur additional channel usage fees"
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The following figure shows the time to output the first frame before optimization and with each solution:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-tech.jpg",
          alt: "Optimize video rendering"
        })
      }), _jsx(_components.h2, {
        id: "implement-fast-first-frame-rendering",
        children: "Implement fast first-frame rendering"
      }), _jsx(_components.p, {
        children: "This section describes the implementation logic for both solutions."
      }), _jsxs(Tabs, {
        defaultValue: "preload",
        children: [_jsxs(TabsList, {
          children: [_jsx(TabsTrigger, {
            value: "preload",
            children: "Preload and initialize early"
          }), _jsx(TabsTrigger, {
            value: "subscribe",
            children: "Join early, subscribe on demand"
          })]
        }), _jsxs(TabsContent, {
          value: "preload",
          children: [_jsx(_components.p, {
            children: "The following figure illustrates the essential steps:"
          }), _jsx(_components.h3, {
            id: "sequence-diagram-for-implementation",
            children: "Sequence diagram for implementation"
          }), _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-solution-1.svg",
              alt: "Sequence diagram for optimized video rendering"
            })
          }), _jsx(_components.h3, {
            id: "set-up-an-rtc-sdk-instance",
            children: "Set up an RTC SDK instance"
          }), _jsx(_components.p, {
            children: "Creating and initializing the RTC engine takes time. To reduce the time to first frame, Agora recommends initializing the engine when the module loads rather than when your app first calls an SDK method."
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "Initialize the engine only once. Avoid creating and destroying it multiple times."
              })
            })
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
              icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "class"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " AgoraQuickStartActivity"
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
                    children: "AppCompatActivity"
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
                    children: "    private"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " var"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " mRtcEngine: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "RtcEngine"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "? "
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
                    children: " onCreate"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(savedInstanceState: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "Bundle"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "?) {"
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
                    children: "onCreate"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(savedInstanceState)"
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
                    children: "        // Create and initialize the engine during activity creation"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "        initializeAgoraEngine"
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
                    children: "    private"
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
                    children: " initializeAgoraEngine"
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
                    children: "        try"
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
                    children: "            val"
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
                    children: " RtcEngineConfig"
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                mContext "
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
                    children: " applicationContext"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                mAppId "
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
                    children: ' "Your App ID"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                mChannelProfile "
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
                    children: " Constants.CHANNEL_PROFILE_LIVE_BROADCASTING"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                mEventHandler "
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
                    children: " mRtcEventHandler "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// You'll need to define this"
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
                  className: "line"
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            mRtcEngine "
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
                    children: "create"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(config)"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        } "
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
                    children: " (e: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "Exception"
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
                    children: "            throw"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " RuntimeException"
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
                    children: '"Error initializing RTC engine: ${e.message}"'
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
          }), _jsx(_components.h3, {
            id: "enable-accelerated-rendering",
            children: "Enable accelerated rendering"
          }), _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enableinstantmediarendering",
              children: _jsx(_components.code, {
                children: "enableInstantMediaRendering"
              })
            }), " to reduce the time it takes to render the first video frame and play audio after joining a channel."]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Call this method ", _jsx(_components.strong, {
                children: "before"
              }), " joining a channel. Ideally, call it right after engine initialization."]
            }), `
`, _jsx(_components.li, {
              children: "Both host and audience must call this method to benefit from faster rendering."
            }), `
`, _jsxs(_components.li, {
              children: ["To disable this feature, destroy the engine with ", _jsx(_components.code, {
                children: "release"
              }), ", then reinitialize it."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Enable accelerated rendering before joining the channel"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "mRtcEngine?."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "enableInstantMediaRendering"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "()"
                  })]
                })]
              })
            })
          }), _jsx(_components.h3, {
            id: "set-a-video-scenario",
            children: "Set a video scenario"
          }), _jsxs(_components.p, {
            children: ["Use ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setvideoscenario",
              children: _jsx(_components.code, {
                children: "setVideoScenario"
              })
            }), " to optimize performance for your specific use case. The SDK applies strategies tailored to the selected scenario."]
          }), _jsxs(_components.p, {
            children: ["For example, for a one-on-one call, use ", _jsx(_components.code, {
              children: "APPLICATION_SCENARIO_1V1"
            }), "."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set the video scenario"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "mRtcEngine?."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setVideoScenario"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(Constants.APPLICATION_SCENARIO_1V1)"
                  })]
                })]
              })
            })
          }), _jsx(_components.h3, {
            id: "preload-a-channel",
            children: "Preload a channel"
          }), _jsxs(_components.p, {
            children: ["Joining a channel involves acquiring server resources and establishing a connection. Call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_preloadchannel",
              children: _jsx(_components.code, {
                children: "preloadChannel"
              })
            }), " to handle resource acquisition early and reduce join time."]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "token"
              }), ", ", _jsx(_components.code, {
                children: "channelId"
              }), ", and ", _jsx(_components.code, {
                children: "uid"
              }), " must match the values used in ", _jsx(_components.code, {
                children: "joinChannel"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Call ", _jsx(_components.code, {
                children: "preloadChannel"
              }), " as soon as you retrieve the required info."]
            }), `
`, _jsxs(_components.li, {
              children: ["Don’t call ", _jsx(_components.code, {
                children: "joinChannel"
              }), " immediately after ", _jsx(_components.code, {
                children: "preloadChannel"
              }), "."]
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
                    children: " prepareChannelInfo"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(): "
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
                    children: "    uid "
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
                    children: " getUid"
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
                    children: "    channelId "
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
                    children: " getChannelInfo"
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
                    children: "    token "
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
                    children: " getTokenFromServer"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(channelId, uid)"
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
                    children: "    // Preload the channel"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    mRtcEngine?."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "preloadChannel"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(token, channelId, uid)"
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
                    children: "    return"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " 0"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // Return success code, adjust as needed"
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
          }), _jsx(_components.h3, {
            id: "set-up-the-rendering-view",
            children: "Set up the rendering view"
          }), _jsx(_components.p, {
            children: "Setting the rendering view early ensures the first frame displays properly. If the view is not ready, the first frame might be skipped."
          }), _jsxs(_components.p, {
            children: ["If your app knows the remote user ID (For example, from Signaling), set the view immediately. Otherwise, use the ", _jsx(_components.code, {
              children: "onUserJoined"
            }), " callback."]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.strong, {
                children: "Set the remote view early:"
              })
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
              icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "fun"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " onShowChannels"
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
                    children: ", remoteUid: "
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
                    children: " canvas "
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
                    children: ", VideoCanvas.RENDER_MODE_FIT, remoteUid)"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    mRtcEngine?."
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
                    children: "(canvas)"
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
                    children: "fun"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " onEIDUserJoined"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(uid: "
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
                    children: ", elapsed: "
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
                    children: "    // Already set - no additional setup needed"
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
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.strong, {
                children: "Set the view when the user joins:"
              })
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
              icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Event handler class"
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
                    children: " val"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " mRtcEventHandler "
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
                    children: " object"
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
                    children: "IRtcEngineEventHandler"
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
                    children: " onUserJoined"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(uid: "
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
                    children: ", elapsed: "
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
                    children: "        // Forward to UI logic"
                  })
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
                    children: "            onEIDUserJoined"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(uid, elapsed)"
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
                    children: "fun"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " onEIDUserJoined"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(uid: "
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
                    children: ", elapsed: "
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
                    children: " canvas "
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
                    children: "(surfaceView, VideoCanvas.RENDER_MODE_FIT, uid)"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    mRtcEngine?."
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
                    children: "(canvas)"
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
          }), _jsx(_components.h3, {
            id: "monitor-rendering-performance",
            children: "Monitor rendering performance"
          }), _jsxs(_components.p, {
            children: ["Use ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_startmediarenderingtracing",
              children: _jsx(_components.code, {
                children: "startMediaRenderingTracing"
              })
            }), " to monitor first-frame rendering metrics. Results are reported via ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onvideorenderingtracingresult",
              children: _jsx(_components.code, {
                children: "onVideoRenderingTracingResult"
              })
            }), "."]
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["Call this method when the user initiates joining. For example, on a ", _jsx(_components.strong, {
                  children: "Join"
                }), " button tap. This gives accurate first-frame timing."]
              })
            })
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
                    children: " onJoinClicked"
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
                    children: "    mRtcEngine?."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "startMediaRenderingTracing"
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
                    children: "    mRtcEngine?."
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
                    children: "(token, channelId, uid, options)"
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
          }), _jsx(_components.h3, {
            id: "join-a-channel",
            children: "Join a channel"
          }), _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            }), " to enter the channel. To speed up first-frame playback, avoid delays like fetching a token in this method."]
          }), _jsxs(_components.p, {
            children: ["If you can’t retrieve a token early, consider using a ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/build/authenticate-users/deploy-token-server#generate-wildcard-tokens",
              children: "wildcard token"
            }), "."]
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
                    children: " prepareChannelInfo"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(): "
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
                    children: "    uid "
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
                    children: " getUid"
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
                    children: "    channelId "
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
                    children: " getChannelInfo"
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
                    children: "    token "
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
                    children: " getTokenFromServer"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(channelId, uid)"
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
                    children: " 0"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // Return success code"
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
                    children: " joinChannel"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(): "
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
                    children: "    val"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " options "
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
                    children: "    return"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " mRtcEngine?."
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
                    children: "(token, channelId, uid, options) ?: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "-"
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
                    children: "}"
                  })
                })]
              })
            })
          }), _jsx(_components.h3, {
            id: "optimize-callback-performance",
            children: "Optimize callback performance"
          }), _jsxs(_components.p, {
            children: ["The SDK runs callbacks like ", _jsx(_components.code, {
              children: "onJoinChannelSuccess"
            }), " on the same thread. If one callback is slow, it can delay others—including rendering events."]
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "Don’t block the callback thread with network calls, file I/O, or heavy processing."
              })
            })
          }), _jsx(_components.h4, {
            id: "best-practices",
            children: "Best practices"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Avoid complex operations in ", _jsx(_components.code, {
                children: "onJoinChannelSuccess"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Don’t block ", _jsx(_components.code, {
                children: "onUserJoined"
              }), " or other rendering-related callbacks."]
            }), `
`, _jsx(_components.li, {
              children: "Use background threads for heavy logic."
            }), `
`]
          })]
        }), _jsxs(TabsContent, {
          value: "subscribe",
          children: [_jsx(_components.p, {
            children: "The following figure illustrates the essential steps:"
          }), _jsx(_components.h3, {
            id: "sequence-diagram-for-implementation-1",
            children: "Sequence diagram for implementation"
          }), _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-solution-2.svg",
              alt: "Sequence diagram for optimized video rendering"
            })
          }), _jsx(_components.h3, {
            id: "set-up-the-rendering-view-1",
            children: "Set up the rendering view"
          }), _jsxs(_components.p, {
            children: ["If you know the host’s user ID before joining the channel, call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineex.html#api_irtcengineex_setupremotevideoex",
              children: _jsx(_components.code, {
                children: "setupRemoteVideoEx"
              })
            }), " as early as possible to set up the rendering view. This ensures the rendering pipeline is initialized in advance, helping avoid delays in displaying the first decoded frame."]
          }), _jsxs(_components.p, {
            children: ["If the host’s user ID is not available beforehand, wait for the ", _jsx(_components.code, {
              children: "onUserJoined"
            }), " callback, then call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineex.html#api_irtcengineex_setupremotevideoex",
              children: _jsx(_components.code, {
                children: "setupRemoteVideoEx"
              })
            }), "."]
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
                    children: " canvas "
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
                    children: "("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "getView"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(), VideoCanvas.RENDER_MODE_FIT, farNextChannel.remoteUid)"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "mRtcEngine?."
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
                    children: "(canvas, connection)"
                  })]
                })]
              })
            })
          }), _jsx(_components.h3, {
            id: "join-a-channel-without-automatically-subscribing",
            children: "Join a channel without automatically subscribing"
          }), _jsx(_components.p, {
            children: "Joining a channel typically takes the most time before the first video frame appears. For use cases like fast channel switching, delay subscribing to media streams to speed up rendering:"
          }), _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Call ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineex.html#api_irtcengineex_joinchannelex",
                  children: _jsx(_components.code, {
                    children: "joinChannelEx"
                  })
                }), " to join the channel."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_channelmediaoptions.html",
                  children: _jsx(_components.code, {
                    children: "ChannelMediaOptions"
                  })
                }), ", set ", _jsx(_components.code, {
                  children: "autoSubscribeAudio"
                }), " and ", _jsx(_components.code, {
                  children: "autoSubscribeVideo"
                }), " to ", _jsx(_components.code, {
                  children: "false"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Subscribe manually when the user is ready to view content."
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
                  icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                  children: _jsxs(_components.code, {
                    children: [_jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "// Define connection and event handler"
                      })
                    }), `
`, _jsxs(_components.span, {
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
                        children: " connection "
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
                        children: " RtcConnection"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(channelId, uid)"
                      })]
                    }), `
`, _jsxs(_components.span, {
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
                        children: " eventHandler "
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
                        children: " mRtcEventHandler"
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
                        children: "// Set channel media options"
                      })
                    }), `
`, _jsxs(_components.span, {
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
                        children: " options "
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
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    channelProfile "
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
                        children: " Constants.CHANNEL_PROFILE_LIVE_BROADCASTING"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    clientRoleType "
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
                        children: " Constants.CLIENT_ROLE_AUDIENCE"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    autoSubscribeAudio "
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
                        children: "    autoSubscribeVideo "
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
                        children: "// Join the channel without subscribing"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "mRtcEngine?."
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
                        children: "(token, connection, options, mRtcEventHandler)"
                      })]
                    })]
                  })
                })
              }), `
`]
            }), `
`]
          }), _jsx(_components.h3, {
            id: "subscribe-to-streams-and-start-rendering",
            children: "Subscribe to streams and start rendering"
          }), _jsx(_components.p, {
            children: "When the user chooses to view content:"
          }), _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Resume media subscription using ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineex.html#api_irtcengineex_muteremotevideostreamex",
                  children: _jsx(_components.code, {
                    children: "muteRemoteVideoStreamEx"
                  })
                }), " and ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineex.html#api_irtcengineex_muteremoteaudiostreamex",
                  children: _jsx(_components.code, {
                    children: "muteRemoteAudioStreamEx"
                  })
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Call ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineex.html#api_irtcengineex_startmediarenderingtracingex",
                  children: _jsx(_components.code, {
                    children: "startMediaRenderingTracingEx"
                  })
                }), " to log rendering metrics."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["The SDK reports results in the ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onvideorenderingtracingresult",
                  children: _jsx(_components.code, {
                    children: "onVideoRenderingTracingResult"
                  })
                }), " callback, which you can use for performance analysis."]
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
                  icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                  children: _jsxs(_components.code, {
                    children: [_jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "fun"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " switchToChannel"
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
                        children: "    // Start video rendering tracing"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    mRtcEngine?."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "startMediaRenderingTracingEx"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(connection)"
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
                        children: "    // Resume remote media subscriptions"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    mRtcEngine?."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "muteRemoteVideoStreamEx"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(remoteUid, "
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
                        children: ", connection)"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    mRtcEngine?."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "muteRemoteAudioStreamEx"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(remoteUid, "
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
                        children: ", connection)"
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
          })]
        })]
      }), _jsx(_components.h2, {
        id: "troubleshooting",
        children: "Troubleshooting"
      }), _jsxs(_components.p, {
        children: ["Refer to ", _jsx(_components.a, {
          href: "/en/api-reference/faq/quality/optimize_video_rendering",
          children: "Slow first-frame rendering of remote video when using the Agora RTC SDK"
        }), "."]
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
        children: "First frame output time is the duration between when a user joins a channel and when they first see the remote video. A shorter first frame output time reduces perceived wait time by rendering video more quickly."
      }), _jsx(_components.p, {
        children: "This guide describes two best practices to reduce video rendering time in Video Calling."
      }), _jsx(_components.h2, {
        id: "prerequisites-1",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Complete the steps in the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "SDK Quickstart"
        }), " to build a basic Video Calling app."]
      }), _jsx(_components.h2, {
        id: "understand-the-tech-1",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "To reduce video rendering time, Agora provides the following solutions:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Preload and initialize before joining the channel"
            }), `
Complete time-consuming operations ahead of time, such as preloading the channel, configuring the rendering view, and enabling accelerated rendering for audio and video frames.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Join early, subscribe later"
            }), `
Join the channel in advance but delay subscribing to the audio and video stream. When the user triggers the join operation, subscribe to the host's stream and begin rendering immediately.`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following table compares both solutions:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Characteristic"
            }), _jsx(_components.th, {
              children: "Preload and initialize early"
            }), _jsx(_components.th, {
              children: "Join early, subscribe on demand"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Applicable scenarios"
            }), _jsx(_components.td, {
              children: "Most audio and video use cases"
            }), _jsx(_components.td, {
              children: "Scenarios with very high requirements for first frame rendering speed"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Core implementation"
            }), _jsx(_components.td, {
              children: "Initialize and configure video settings before joining"
            }), _jsx(_components.td, {
              children: "Join the channel early without subscribing; subscribe only when needed"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Cost"
            }), _jsx(_components.td, {
              children: "Normal billing"
            }), _jsx(_components.td, {
              children: "May incur additional channel usage fees"
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The following figure shows the time to output the first frame before optimization and with each solution:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-tech.jpg",
          alt: "Optimize video rendering"
        })
      }), _jsx(_components.h2, {
        id: "implement-fast-first-frame-rendering-1",
        children: "Implement fast first-frame rendering"
      }), _jsx(_components.p, {
        children: "This section describes the implementation logic for both solutions."
      }), _jsxs(Tabs, {
        defaultValue: "preload",
        children: [_jsxs(TabsList, {
          children: [_jsx(TabsTrigger, {
            value: "preload",
            children: "Preload and initialize early"
          }), _jsx(TabsTrigger, {
            value: "subscribe",
            children: "Join early, subscribe on demand"
          })]
        }), _jsxs(TabsContent, {
          value: "preload",
          children: [_jsx(_components.p, {
            children: "The following figure illustrates the essential steps:"
          }), _jsx(_components.h3, {
            id: "sequence-diagram-for-implementation-2",
            children: "Sequence diagram for implementation"
          }), _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-solution-1.svg",
              alt: "Sequence diagram for optimized video rendering"
            })
          }), _jsx(_components.h3, {
            id: "set-up-an-rtc-sdk-instance-1",
            children: "Set up an RTC SDK instance"
          }), _jsx(_components.p, {
            children: "Creating and initializing the RTC engine takes time. To reduce the time to first frame, Agora recommends initializing the engine when the module loads rather than when your app first calls an SDK method."
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "Initialize the engine only once. Avoid creating and destroying it multiple times."
              })
            })
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "class"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " AgoraQuickStartViewController"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "UIViewController "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "{"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    var"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " agoraKit: AgoraRtcEngineKit"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "?"
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
                    children: "    override"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " func"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " viewDidLoad"
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "viewDidLoad"
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
                    children: "        // Create and initialize the engine during view controller creation"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "        initializeAgoraEngine"
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
                    children: "    private"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " func"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " initializeAgoraEngine"
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
                    children: "        let"
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " AgoraRtcEngineConfig"
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
                    children: "        config.appId "
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
                    children: ' "Your App ID"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        config.channelProfile "
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
                    children: " .liveBroadcasting"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        config.delegate "
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // You'll need to implement AgoraRtcEngineDelegate"
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
                    children: "        agoraKit "
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
                    children: " AgoraRtcEngineKit."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "sharedEngine"
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
                    children: "with"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": config, "
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
          }), _jsx(_components.h3, {
            id: "enable-accelerated-rendering-1",
            children: "Enable accelerated rendering"
          }), _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableinstantmediarendering()",
              children: _jsx(_components.code, {
                children: "enableInstantMediaRendering"
              })
            }), " to reduce the time it takes to render the first video frame and play audio after joining a channel."]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Call this method ", _jsx(_components.strong, {
                children: "before"
              }), " joining a channel. Ideally, call it right after engine initialization."]
            }), `
`, _jsx(_components.li, {
              children: "Both host and audience must call this method to benefit from faster rendering."
            }), `
`, _jsxs(_components.li, {
              children: ["To disable this feature, destroy the engine with ", _jsx(_components.code, {
                children: "release"
              }), ", then reinitialize it."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Enable accelerated rendering before joining the channel"
                  })
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
                    children: "enableInstantMediaRendering"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "()"
                  })]
                })]
              })
            })
          }), _jsx(_components.h3, {
            id: "set-a-video-scenario-1",
            children: "Set a video scenario"
          }), _jsxs(_components.p, {
            children: ["Use ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setvideoscenario(_:)",
              children: _jsx(_components.code, {
                children: "setVideoScenario"
              })
            }), " to optimize performance for your specific use case. The SDK applies strategies tailored to the selected scenario."]
          }), _jsxs(_components.p, {
            children: ["For example, for a one-on-one call, use ", _jsx(_components.code, {
              children: "APPLICATION_SCENARIO_1V1"
            }), "."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set the video scenario"
                  })
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
                    children: "setVideoScenario"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(.application1V1Scenario)"
                  })]
                })]
              })
            })
          }), _jsx(_components.h3, {
            id: "preload-a-channel-1",
            children: "Preload a channel"
          }), _jsxs(_components.p, {
            children: ["Joining a channel involves acquiring server resources and establishing a connection. Call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/preloadchannel(bytoken:channelid:uid:)",
              children: _jsx(_components.code, {
                children: "preloadChannel"
              })
            }), " to handle resource acquisition early and reduce join time."]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "token"
              }), ", ", _jsx(_components.code, {
                children: "channelId"
              }), ", and ", _jsx(_components.code, {
                children: "uid"
              }), " must match the values used in ", _jsx(_components.code, {
                children: "joinChannel"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Call ", _jsx(_components.code, {
                children: "preloadChannel"
              }), " as soon as you retrieve the required info."]
            }), `
`, _jsxs(_components.li, {
              children: ["Don’t call ", _jsx(_components.code, {
                children: "joinChannel"
              }), " immediately after ", _jsx(_components.code, {
                children: "preloadChannel"
              }), "."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
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
                    children: " func"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " prepareChannelInfo"
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
                    children: "->"
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
                    children: "    uid "
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
                    children: " getUid"
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
                    children: "    channelId "
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
                    children: " getChannelInfo"
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
                    children: "    token "
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
                    children: " getTokenFromServer"
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
                    children: "channelId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": channelId, "
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
                    children: ": uid)"
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
                    children: "    // Preload the channel"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    agoraKit"
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
                    children: "preloadChannel"
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
                    children: ": channelId, "
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
                    children: ": uid)"
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
                    children: "    return"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " 0"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // Return success code, adjust as needed"
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
          }), _jsx(_components.h3, {
            id: "set-up-the-rendering-view-2",
            children: "Set up the rendering view"
          }), _jsx(_components.p, {
            children: "Setting the rendering view early ensures the first frame displays properly. If the view is not ready, the first frame might be skipped."
          }), _jsxs(_components.p, {
            children: ["If your app knows the remote user ID (For example, from Signaling), set the view immediately. Otherwise, use the ", _jsx(_components.code, {
              children: "onUserJoined"
            }), " callback."]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.strong, {
                children: "Set the remote view early:"
              })
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
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
                    children: " onShowChannels"
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
                    children: "channelId"
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
                    children: "String"
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
                    children: "remoteUid"
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
                    children: "UInt"
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
                    children: "    let"
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    canvas.uid "
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
                    children: " remoteUid"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    canvas.renderMode "
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
                    children: "    canvas."
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " nil"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    agoraKit"
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
                    children: "setupRemoteVideo"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(canvas)"
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
                    children: " onEIDUserJoined"
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
                    children: "elapsed"
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
                    children: "    // Already set - no additional setup needed"
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
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.strong, {
                children: "Set the view when the user joins:"
              })
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Event handler class"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "extension"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " AgoraQuickStartViewController"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "AgoraRtcEngineDelegate "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "{"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    func"
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
                    children: "didJoinedOfUid"
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
                    children: "elapsed"
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
                    children: "        // Forward to UI logic"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        DispatchQueue.main."
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
                    children: "            self"
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
                    children: "onEIDUserJoined"
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
                    children: "uid"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": uid, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "elapsed"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": elapsed)"
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
                    children: " onEIDUserJoined"
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
                    children: "elapsed"
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
                    children: "Int"
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
                    children: "    let"
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    canvas.uid "
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
                    children: "    canvas.renderMode "
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
                    children: "    canvas."
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
                    children: " surfaceView"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    agoraKit"
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
                    children: "setupRemoteVideo"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(canvas)"
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
          }), _jsx(_components.h3, {
            id: "monitor-rendering-performance-1",
            children: "Monitor rendering performance"
          }), _jsxs(_components.p, {
            children: ["Use ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startmediarenderingtracing()",
              children: _jsx(_components.code, {
                children: "startMediaRenderingTracing"
              })
            }), " to monitor first-frame rendering metrics. Results are reported via ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:videorenderingtracingresultofuid:currentevent:tracinginfo:)",
              children: _jsx(_components.code, {
                children: "videoRenderingTracingResultOfUid"
              })
            }), "."]
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["Call this method when the user initiates joining. For example, on a ", _jsx(_components.strong, {
                  children: "Join"
                }), " button tap. This gives accurate first-frame timing."]
              })
            })
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
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
                    children: " func"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " onJoinClicked"
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
                    children: "    agoraKit"
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
                    children: "startMediaRenderingTracing"
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
                    children: "    agoraKit"
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
                    children: ": channelId, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "info"
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
                    children: "uid"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": uid, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "joinSuccess"
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
                    children: "}"
                  })
                })]
              })
            })
          }), _jsx(_components.h3, {
            id: "join-a-channel-1",
            children: "Join a channel"
          }), _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/joinchannel(bytoken:channelid:uid:mediaoptions:joinsuccess:)",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            }), " to enter the channel. To speed up first-frame playback, avoid delays like fetching a token in this method."]
          }), _jsxs(_components.p, {
            children: ["If you can’t retrieve a token early, consider using a ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/build/authenticate-users/deploy-token-server#generate-wildcard-tokens",
              children: "wildcard token"
            }), "."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
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
                    children: " func"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " prepareChannelInfo"
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
                    children: "->"
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
                    children: "    uid "
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
                    children: " getUid"
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
                    children: "    channelId "
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
                    children: " getChannelInfo"
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
                    children: "    token "
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
                    children: " getTokenFromServer"
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
                    children: "channelId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": channelId, "
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
                    children: ": uid)"
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
                    children: " 0"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // Return success code"
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
                    children: "private"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " func"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " joinChannel"
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
                    children: "->"
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
                    children: "    let"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " options "
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    let"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " agoraKit"
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
                    children: ": channelId, "
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
                    children: ": uid, "
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
                    children: ": options)"
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
                    children: " result "
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
                    children: " 0"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " ?"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " 0"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " :"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " -1"
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
          }), _jsx(_components.h3, {
            id: "optimize-callback-performance-1",
            children: "Optimize callback performance"
          }), _jsxs(_components.p, {
            children: ["The SDK runs callbacks like ", _jsx(_components.code, {
              children: "onJoinChannelSuccess"
            }), " on the same thread. If one callback is slow, it can delay others—including rendering events."]
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "Don’t block the callback thread with network calls, file I/O, or heavy processing."
              })
            })
          }), _jsx(_components.h4, {
            id: "best-practices-1",
            children: "Best practices"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Avoid complex operations in ", _jsx(_components.code, {
                children: "onJoinChannelSuccess"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Don’t block ", _jsx(_components.code, {
                children: "onUserJoined"
              }), " or other rendering-related callbacks."]
            }), `
`, _jsx(_components.li, {
              children: "Use background threads for heavy logic."
            }), `
`]
          })]
        }), _jsxs(TabsContent, {
          value: "subscribe",
          children: [_jsx(_components.p, {
            children: "The following figure illustrates the essential steps:"
          }), _jsx(_components.h3, {
            id: "sequence-diagram-for-implementation-3",
            children: "Sequence diagram for implementation"
          }), _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-solution-2.svg",
              alt: "Sequence diagram for optimized video rendering"
            })
          }), _jsx(_components.h3, {
            id: "set-up-the-rendering-view-3",
            children: "Set up the rendering view"
          }), _jsxs(_components.p, {
            children: ["If you know the host’s user ID before joining the channel, call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setupremotevideoex(_:connection:)",
              children: _jsx(_components.code, {
                children: "setupRemoteVideoEx"
              })
            }), " as early as possible to set up the rendering view. This ensures the rendering pipeline is initialized in advance, helping avoid delays in displaying the first decoded frame."]
          }), _jsxs(_components.p, {
            children: ["If the host’s user ID is not available beforehand, wait for the ", _jsx(_components.code, {
              children: "onUserJoined"
            }), " callback, then call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setupremotevideoex(_:connection:)",
              children: _jsx(_components.code, {
                children: "setupRemoteVideoEx"
              })
            }), "."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Define necessary variables first"
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
                    children: " connection "
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
                    children: " AgoraRtcConnection"
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
                    children: "channelId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": channelId, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "localUid"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": uid)"
                  })]
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
                    children: " remoteUid: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "UInt"
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
                    children: " 12345"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // Replace with actual remote user ID"
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
                    children: "// Set the host's rendering view"
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "canvas.uid "
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
                    children: " remoteUid"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "canvas.renderMode "
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
                    children: "canvas."
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " getView"
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
                })]
              })
            })
          }), _jsx(_components.h3, {
            id: "join-a-channel-without-automatically-subscribing-1",
            children: "Join a channel without automatically subscribing"
          }), _jsx(_components.p, {
            children: "Joining a channel typically takes the most time before the first video frame appears. For use cases like fast channel switching, delay subscribing to media streams to speed up rendering:"
          }), _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Call ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/joinchannelex(bytoken:connection:delegate:mediaoptions:joinsuccess:)",
                  children: _jsx(_components.code, {
                    children: "joinChannelEx"
                  })
                }), " to join the channel."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcchannelmediaoptions",
                  children: _jsx(_components.code, {
                    children: "AgoraRtcChannelMediaOptions"
                  })
                }), ", set ", _jsx(_components.code, {
                  children: "autoSubscribeAudio"
                }), " and ", _jsx(_components.code, {
                  children: "autoSubscribeVideo"
                }), " to ", _jsx(_components.code, {
                  children: "false"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Subscribe manually when the user is ready to view content."
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
                        children: "// Define connection and event handler"
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
                        children: " connection "
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
                        children: " AgoraRtcConnection"
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
                        children: "channelId"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ": channelId, "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "localUid"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ": uid)"
                      })]
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
                        children: " eventHandler "
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
                        children: "// Set channel media options"
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
                        children: " options "
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
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "options.channelProfile "
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
                        children: " .liveBroadcasting"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "options.clientRoleType "
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
                        children: " .audience"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "options.autoSubscribeAudio "
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
                        children: "options.autoSubscribeVideo "
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
                        children: "// Join the channel without subscribing"
                      })
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
                        children: ": token, "
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
                        children: ": options, "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "joinSuccess"
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
                        children: ")"
                      })]
                    })]
                  })
                })
              }), `
`]
            }), `
`]
          }), _jsx(_components.h3, {
            id: "subscribe-to-streams-and-start-rendering-1",
            children: "Subscribe to streams and start rendering"
          }), _jsx(_components.p, {
            children: "When the user chooses to view content:"
          }), _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Resume media subscription using ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/muteremotevideostreamex(_:mute:connection:)",
                  children: _jsx(_components.code, {
                    children: "muteRemoteVideoStreamEx"
                  })
                }), " and ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/muteremoteaudiostreamex(_:mute:connection:)",
                  children: _jsx(_components.code, {
                    children: "muteRemoteAudioStreamEx"
                  })
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Call ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startmediarenderingtracingex(_:)",
                  children: _jsx(_components.code, {
                    children: "startMediaRenderingTracingEx"
                  })
                }), " to log rendering metrics."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["The SDK reports results in the ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:videorenderingtracingresultofuid:currentevent:tracinginfo:)",
                  children: _jsx(_components.code, {
                    children: "videoRenderingTracingResultOfUid"
                  })
                }), " callback, which you can use for performance analysis."]
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
                        children: "func"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " switchToChannel"
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
                        children: "    // Start video rendering tracing"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    agoraKit"
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
                        children: "startMediaRenderingTracingEx"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(connection)"
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
                        children: "    // Resume remote media subscriptions"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    agoraKit"
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
                        children: "muteRemoteVideoStreamEx"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(remoteUid, "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "mute"
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
                        children: ": connection)"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    agoraKit"
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
                        children: "muteRemoteAudioStreamEx"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(remoteUid, "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "mute"
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
                        children: "}"
                      })
                    })]
                  })
                })
              }), `
`]
            }), `
`]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "troubleshooting-1",
        children: "Troubleshooting"
      }), _jsxs(_components.p, {
        children: ["Refer to ", _jsx(_components.a, {
          href: "/en/api-reference/faq/quality/optimize_video_rendering",
          children: "Slow first-frame rendering of remote video when using the Agora RTC SDK"
        }), "."]
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
        children: "First frame output time is the duration between when a user joins a channel and when they first see the remote video. A shorter first frame output time reduces perceived wait time by rendering video more quickly."
      }), _jsx(_components.p, {
        children: "This guide describes two best practices to reduce video rendering time in Video Calling."
      }), _jsx(_components.h2, {
        id: "prerequisites-2",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Complete the steps in the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "SDK Quickstart"
        }), " to build a basic Video Calling app."]
      }), _jsx(_components.h2, {
        id: "understand-the-tech-2",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "To reduce video rendering time, Agora provides the following solutions:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Preload and initialize before joining the channel"
            }), `
Complete time-consuming operations ahead of time, such as preloading the channel, configuring the rendering view, and enabling accelerated rendering for audio and video frames.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Join early, subscribe later"
            }), `
Join the channel in advance but delay subscribing to the audio and video stream. When the user triggers the join operation, subscribe to the host's stream and begin rendering immediately.`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following table compares both solutions:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Characteristic"
            }), _jsx(_components.th, {
              children: "Preload and initialize early"
            }), _jsx(_components.th, {
              children: "Join early, subscribe on demand"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Applicable scenarios"
            }), _jsx(_components.td, {
              children: "Most audio and video use cases"
            }), _jsx(_components.td, {
              children: "Scenarios with very high requirements for first frame rendering speed"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Core implementation"
            }), _jsx(_components.td, {
              children: "Initialize and configure video settings before joining"
            }), _jsx(_components.td, {
              children: "Join the channel early without subscribing; subscribe only when needed"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Cost"
            }), _jsx(_components.td, {
              children: "Normal billing"
            }), _jsx(_components.td, {
              children: "May incur additional channel usage fees"
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The following figure shows the time to output the first frame before optimization and with each solution:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-tech.jpg",
          alt: "Optimize video rendering"
        })
      }), _jsx(_components.h2, {
        id: "implement-fast-first-frame-rendering-2",
        children: "Implement fast first-frame rendering"
      }), _jsx(_components.p, {
        children: "This section describes the implementation logic for both solutions."
      }), _jsxs(Tabs, {
        defaultValue: "preload",
        children: [_jsxs(TabsList, {
          children: [_jsx(TabsTrigger, {
            value: "preload",
            children: "Preload and initialize early"
          }), _jsx(TabsTrigger, {
            value: "subscribe",
            children: "Join early, subscribe on demand"
          })]
        }), _jsxs(TabsContent, {
          value: "preload",
          children: [_jsx(_components.p, {
            children: "The following figure illustrates the essential steps:"
          }), _jsx(_components.h3, {
            id: "sequence-diagram-for-implementation-4",
            children: "Sequence diagram for implementation"
          }), _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-solution-1.svg",
              alt: "Sequence diagram for optimized video rendering"
            })
          }), _jsx(_components.h3, {
            id: "set-up-an-rtc-sdk-instance-2",
            children: "Set up an RTC SDK instance"
          }), _jsx(_components.p, {
            children: "Creating and initializing the RTC engine takes time. To reduce the time to first frame, Agora recommends initializing the engine when the module loads rather than when your app first calls an SDK method."
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "Initialize the engine only once. Avoid creating and destroying it multiple times."
              })
            })
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "class"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " AgoraQuickStartViewController"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "UIViewController "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "{"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    var"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " agoraKit: AgoraRtcEngineKit"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "?"
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
                    children: "    override"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " func"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " viewDidLoad"
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "viewDidLoad"
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
                    children: "        // Create and initialize the engine during view controller creation"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "        initializeAgoraEngine"
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
                    children: "    private"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " func"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " initializeAgoraEngine"
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
                    children: "        let"
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " AgoraRtcEngineConfig"
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
                    children: "        config.appId "
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
                    children: ' "Your App ID"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        config.channelProfile "
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
                    children: " .liveBroadcasting"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        config.delegate "
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // You'll need to implement AgoraRtcEngineDelegate"
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
                    children: "        agoraKit "
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
                    children: " AgoraRtcEngineKit."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "sharedEngine"
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
                    children: "with"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": config, "
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
          }), _jsx(_components.h3, {
            id: "enable-accelerated-rendering-2",
            children: "Enable accelerated rendering"
          }), _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enableinstantmediarendering()",
              children: _jsx(_components.code, {
                children: "enableInstantMediaRendering"
              })
            }), " to reduce the time it takes to render the first video frame and play audio after joining a channel."]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Call this method ", _jsx(_components.strong, {
                children: "before"
              }), " joining a channel. Ideally, call it right after engine initialization."]
            }), `
`, _jsx(_components.li, {
              children: "Both host and audience must call this method to benefit from faster rendering."
            }), `
`, _jsxs(_components.li, {
              children: ["To disable this feature, destroy the engine with ", _jsx(_components.code, {
                children: "release"
              }), ", then reinitialize it."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Enable accelerated rendering before joining the channel"
                  })
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
                    children: "enableInstantMediaRendering"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "()"
                  })]
                })]
              })
            })
          }), _jsx(_components.h3, {
            id: "set-a-video-scenario-2",
            children: "Set a video scenario"
          }), _jsxs(_components.p, {
            children: ["Use ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setvideoscenario(_:)",
              children: _jsx(_components.code, {
                children: "setVideoScenario"
              })
            }), " to optimize performance for your specific use case. The SDK applies strategies tailored to the selected scenario."]
          }), _jsxs(_components.p, {
            children: ["For example, for a one-on-one call, use ", _jsx(_components.code, {
              children: "APPLICATION_SCENARIO_1V1"
            }), "."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set the video scenario"
                  })
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
                    children: "setVideoScenario"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(.application1V1Scenario)"
                  })]
                })]
              })
            })
          }), _jsx(_components.h3, {
            id: "preload-a-channel-2",
            children: "Preload a channel"
          }), _jsxs(_components.p, {
            children: ["Joining a channel involves acquiring server resources and establishing a connection. Call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/preloadchannel(bytoken:channelid:uid:)",
              children: _jsx(_components.code, {
                children: "preloadChannel"
              })
            }), " to handle resource acquisition early and reduce join time."]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "token"
              }), ", ", _jsx(_components.code, {
                children: "channelId"
              }), ", and ", _jsx(_components.code, {
                children: "uid"
              }), " must match the values used in ", _jsx(_components.code, {
                children: "joinChannel"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Call ", _jsx(_components.code, {
                children: "preloadChannel"
              }), " as soon as you retrieve the required info."]
            }), `
`, _jsxs(_components.li, {
              children: ["Don’t call ", _jsx(_components.code, {
                children: "joinChannel"
              }), " immediately after ", _jsx(_components.code, {
                children: "preloadChannel"
              }), "."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
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
                    children: " func"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " prepareChannelInfo"
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
                    children: "->"
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
                    children: "    uid "
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
                    children: " getUid"
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
                    children: "    channelId "
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
                    children: " getChannelInfo"
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
                    children: "    token "
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
                    children: " getTokenFromServer"
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
                    children: "channelId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": channelId, "
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
                    children: ": uid)"
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
                    children: "    // Preload the channel"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    agoraKit"
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
                    children: "preloadChannel"
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
                    children: ": channelId, "
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
                    children: ": uid)"
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
                    children: "    return"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " 0"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // Return success code, adjust as needed"
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
          }), _jsx(_components.h3, {
            id: "set-up-the-rendering-view-4",
            children: "Set up the rendering view"
          }), _jsx(_components.p, {
            children: "Setting the rendering view early ensures the first frame displays properly. If the view is not ready, the first frame might be skipped."
          }), _jsxs(_components.p, {
            children: ["If your app knows the remote user ID (For example, from Signaling), set the view immediately. Otherwise, use the ", _jsx(_components.code, {
              children: "onUserJoined"
            }), " callback."]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.strong, {
                children: "Set the remote view early:"
              })
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
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
                    children: " onShowChannels"
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
                    children: "channelId"
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
                    children: "String"
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
                    children: "remoteUid"
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
                    children: "UInt"
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
                    children: "    let"
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    canvas.uid "
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
                    children: " remoteUid"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    canvas.renderMode "
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
                    children: "    canvas."
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " nil"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    agoraKit"
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
                    children: "setupRemoteVideo"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(canvas)"
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
                    children: " onEIDUserJoined"
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
                    children: "elapsed"
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
                    children: "    // Already set - no additional setup needed"
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
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.strong, {
                children: "Set the view when the user joins:"
              })
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Event handler class"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "extension"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " AgoraQuickStartViewController"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "AgoraRtcEngineDelegate "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "{"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    func"
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
                    children: "didJoinedOfUid"
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
                    children: "elapsed"
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
                    children: "        // Forward to UI logic"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        DispatchQueue.main."
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
                    children: "            self"
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
                    children: "onEIDUserJoined"
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
                    children: "uid"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": uid, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "elapsed"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": elapsed)"
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
                    children: " onEIDUserJoined"
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
                    children: "elapsed"
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
                    children: "Int"
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
                    children: "    let"
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    canvas.uid "
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
                    children: "    canvas.renderMode "
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
                    children: "    canvas."
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
                    children: " surfaceView"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    agoraKit"
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
                    children: "setupRemoteVideo"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(canvas)"
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
          }), _jsx(_components.h3, {
            id: "monitor-rendering-performance-2",
            children: "Monitor rendering performance"
          }), _jsxs(_components.p, {
            children: ["Use ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startmediarenderingtracing()",
              children: _jsx(_components.code, {
                children: "startMediaRenderingTracing"
              })
            }), " to monitor first-frame rendering metrics. Results are reported via ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:videorenderingtracingresultofuid:currentevent:tracinginfo:)",
              children: _jsx(_components.code, {
                children: "videoRenderingTracingResultOfUid"
              })
            }), "."]
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["Call this method when the user initiates joining. For example, on a ", _jsx(_components.strong, {
                  children: "Join"
                }), " button tap. This gives accurate first-frame timing."]
              })
            })
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
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
                    children: " func"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " onJoinClicked"
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
                    children: "    agoraKit"
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
                    children: "startMediaRenderingTracing"
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
                    children: "    agoraKit"
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
                    children: ": channelId, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "info"
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
                    children: "uid"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": uid, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "joinSuccess"
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
                    children: "}"
                  })
                })]
              })
            })
          }), _jsx(_components.h3, {
            id: "join-a-channel-2",
            children: "Join a channel"
          }), _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/joinchannel(bytoken:channelid:uid:mediaoptions:joinsuccess:)",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            }), " to enter the channel. To speed up first-frame playback, avoid delays like fetching a token in this method."]
          }), _jsxs(_components.p, {
            children: ["If you can’t retrieve a token early, consider using a ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/build/authenticate-users/deploy-token-server#generate-wildcard-tokens",
              children: "wildcard token"
            }), "."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
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
                    children: " func"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " prepareChannelInfo"
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
                    children: "->"
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
                    children: "    uid "
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
                    children: " getUid"
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
                    children: "    channelId "
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
                    children: " getChannelInfo"
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
                    children: "    token "
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
                    children: " getTokenFromServer"
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
                    children: "channelId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": channelId, "
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
                    children: ": uid)"
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
                    children: " 0"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // Return success code"
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
                    children: "private"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " func"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " joinChannel"
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
                    children: "->"
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
                    children: "    let"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " options "
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    let"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " agoraKit"
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
                    children: ": channelId, "
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
                    children: ": uid, "
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
                    children: ": options)"
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
                    children: " result "
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
                    children: " 0"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " ?"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " 0"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " :"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " -1"
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
          }), _jsx(_components.h3, {
            id: "optimize-callback-performance-2",
            children: "Optimize callback performance"
          }), _jsxs(_components.p, {
            children: ["The SDK runs callbacks like ", _jsx(_components.code, {
              children: "onJoinChannelSuccess"
            }), " on the same thread. If one callback is slow, it can delay others—including rendering events."]
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "Don’t block the callback thread with network calls, file I/O, or heavy processing."
              })
            })
          }), _jsx(_components.h4, {
            id: "best-practices-2",
            children: "Best practices"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Avoid complex operations in ", _jsx(_components.code, {
                children: "onJoinChannelSuccess"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Don’t block ", _jsx(_components.code, {
                children: "onUserJoined"
              }), " or other rendering-related callbacks."]
            }), `
`, _jsx(_components.li, {
              children: "Use background threads for heavy logic."
            }), `
`]
          })]
        }), _jsxs(TabsContent, {
          value: "subscribe",
          children: [_jsx(_components.p, {
            children: "The following figure illustrates the essential steps:"
          }), _jsx(_components.h3, {
            id: "sequence-diagram-for-implementation-5",
            children: "Sequence diagram for implementation"
          }), _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-solution-2.svg",
              alt: "Sequence diagram for optimized video rendering"
            })
          }), _jsx(_components.h3, {
            id: "set-up-the-rendering-view-5",
            children: "Set up the rendering view"
          }), _jsxs(_components.p, {
            children: ["If you know the host’s user ID before joining the channel, call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setupremotevideoex(_:connection:)",
              children: _jsx(_components.code, {
                children: "setupRemoteVideoEx"
              })
            }), " as early as possible to set up the rendering view. This ensures the rendering pipeline is initialized in advance, helping avoid delays in displaying the first decoded frame."]
          }), _jsxs(_components.p, {
            children: ["If the host’s user ID is not available beforehand, wait for the ", _jsx(_components.code, {
              children: "onUserJoined"
            }), " callback, then call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setupremotevideoex(_:connection:)",
              children: _jsx(_components.code, {
                children: "setupRemoteVideoEx"
              })
            }), "."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Define necessary variables first"
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
                    children: " connection "
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
                    children: " AgoraRtcConnection"
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
                    children: "channelId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": channelId, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "localUid"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": uid)"
                  })]
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
                    children: " remoteUid: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "UInt"
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
                    children: " 12345"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // Replace with actual remote user ID"
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
                    children: "// Set the host's rendering view"
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "canvas.uid "
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
                    children: " remoteUid"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "canvas.renderMode "
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
                    children: "canvas."
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " getView"
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
                })]
              })
            })
          }), _jsx(_components.h3, {
            id: "join-a-channel-without-automatically-subscribing-2",
            children: "Join a channel without automatically subscribing"
          }), _jsx(_components.p, {
            children: "Joining a channel typically takes the most time before the first video frame appears. For use cases like fast channel switching, delay subscribing to media streams to speed up rendering:"
          }), _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Call ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/joinchannelex(bytoken:connection:delegate:mediaoptions:joinsuccess:)",
                  children: _jsx(_components.code, {
                    children: "joinChannelEx"
                  })
                }), " to join the channel."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcchannelmediaoptions",
                  children: _jsx(_components.code, {
                    children: "AgoraRtcChannelMediaOptions"
                  })
                }), ", set ", _jsx(_components.code, {
                  children: "autoSubscribeAudio"
                }), " and ", _jsx(_components.code, {
                  children: "autoSubscribeVideo"
                }), " to ", _jsx(_components.code, {
                  children: "false"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Subscribe manually when the user is ready to view content."
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
                        children: "// Define connection and event handler"
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
                        children: " connection "
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
                        children: " AgoraRtcConnection"
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
                        children: "channelId"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ": channelId, "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "localUid"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ": uid)"
                      })]
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
                        children: " eventHandler "
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
                        children: "// Set channel media options"
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
                        children: " options "
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
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "options.channelProfile "
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
                        children: " .liveBroadcasting"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "options.clientRoleType "
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
                        children: " .audience"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "options.autoSubscribeAudio "
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
                        children: "options.autoSubscribeVideo "
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
                        children: "// Join the channel without subscribing"
                      })
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
                        children: ": token, "
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
                        children: ": options, "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "joinSuccess"
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
                        children: ")"
                      })]
                    })]
                  })
                })
              }), `
`]
            }), `
`]
          }), _jsx(_components.h3, {
            id: "subscribe-to-streams-and-start-rendering-2",
            children: "Subscribe to streams and start rendering"
          }), _jsx(_components.p, {
            children: "When the user chooses to view content:"
          }), _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Resume media subscription using ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/muteremotevideostreamex(_:mute:connection:)",
                  children: _jsx(_components.code, {
                    children: "muteRemoteVideoStreamEx"
                  })
                }), " and ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/muteremoteaudiostreamex(_:mute:connection:)",
                  children: _jsx(_components.code, {
                    children: "muteRemoteAudioStreamEx"
                  })
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Call ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startmediarenderingtracingex(_:)",
                  children: _jsx(_components.code, {
                    children: "startMediaRenderingTracingEx"
                  })
                }), " to log rendering metrics."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["The SDK reports results in the ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:videorenderingtracingresultofuid:currentevent:tracinginfo:)",
                  children: _jsx(_components.code, {
                    children: "videoRenderingTracingResultOfUid"
                  })
                }), " callback, which you can use for performance analysis."]
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
                        children: "func"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " switchToChannel"
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
                        children: "    // Start video rendering tracing"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    agoraKit"
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
                        children: "startMediaRenderingTracingEx"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(connection)"
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
                        children: "    // Resume remote media subscriptions"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    agoraKit"
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
                        children: "muteRemoteVideoStreamEx"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(remoteUid, "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "mute"
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
                        children: ": connection)"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    agoraKit"
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
                        children: "muteRemoteAudioStreamEx"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(remoteUid, "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "mute"
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
                        children: "}"
                      })
                    })]
                  })
                })
              }), `
`]
            }), `
`]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "troubleshooting-2",
        children: "Troubleshooting"
      }), _jsxs(_components.p, {
        children: ["Refer to ", _jsx(_components.a, {
          href: "/en/api-reference/faq/quality/optimize_video_rendering",
          children: "Slow first-frame rendering of remote video when using the Agora RTC SDK"
        }), "."]
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
        children: "First frame output time is the duration between when a user joins a channel and when they first see the remote video. A shorter first frame output time reduces perceived wait time by rendering video more quickly."
      }), _jsx(_components.p, {
        children: "This guide describes two best practices to reduce video rendering time in Video Calling."
      }), _jsx(_components.h2, {
        id: "prerequisites-3",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Complete the steps in the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "SDK Quickstart"
        }), " to build a basic Video Calling app."]
      }), _jsx(_components.h2, {
        id: "understand-the-tech-3",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "To reduce video rendering time, Agora provides the following solutions:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Preload and initialize before joining the channel"
            }), `
Complete time-consuming operations ahead of time, such as preloading the channel, configuring the rendering view, and enabling accelerated rendering for audio and video frames.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Join early, subscribe later"
            }), `
Join the channel in advance but delay subscribing to the audio and video stream. When the user triggers the join operation, subscribe to the host's stream and begin rendering immediately.`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following table compares both solutions:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Characteristic"
            }), _jsx(_components.th, {
              children: "Preload and initialize early"
            }), _jsx(_components.th, {
              children: "Join early, subscribe on demand"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Applicable scenarios"
            }), _jsx(_components.td, {
              children: "Most audio and video use cases"
            }), _jsx(_components.td, {
              children: "Scenarios with very high requirements for first frame rendering speed"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Core implementation"
            }), _jsx(_components.td, {
              children: "Initialize and configure video settings before joining"
            }), _jsx(_components.td, {
              children: "Join the channel early without subscribing; subscribe only when needed"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Cost"
            }), _jsx(_components.td, {
              children: "Normal billing"
            }), _jsx(_components.td, {
              children: "May incur additional channel usage fees"
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The following figure shows the time to output the first frame before optimization and with each solution:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-tech.jpg",
          alt: "Optimize video rendering"
        })
      }), _jsx(_components.h2, {
        id: "implement-fast-first-frame-rendering-3",
        children: "Implement fast first-frame rendering"
      }), _jsx(_components.p, {
        children: "This section describes the implementation logic for both solutions."
      }), _jsxs(Tabs, {
        defaultValue: "preload",
        children: [_jsxs(TabsList, {
          children: [_jsx(TabsTrigger, {
            value: "preload",
            children: "Preload and initialize early"
          }), _jsx(TabsTrigger, {
            value: "subscribe",
            children: "Join early, subscribe on demand"
          })]
        }), _jsxs(TabsContent, {
          value: "preload",
          children: [_jsx(_components.p, {
            children: "The following figure illustrates the essential steps:"
          }), _jsx(_components.h3, {
            id: "sequence-diagram-for-implementation-6",
            children: "Sequence diagram for implementation"
          }), _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-solution-1.svg",
              alt: "Sequence diagram for optimized video rendering"
            })
          }), _jsx(_components.h3, {
            id: "set-up-an-rtc-sdk-instance-3",
            children: "Set up an RTC SDK instance"
          }), _jsx(_components.p, {
            children: "Creating and initializing the RTC engine takes time. To reduce the time to first frame, Agora recommends initializing the engine when the module loads rather than when your app first calls an SDK method."
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "Initialize the engine only once. Avoid creating and destroying it multiple times."
              })
            })
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
                    children: "class"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " CAgoraQuickStartDlg"
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
                    children: "private:"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    IRtcEngine"
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
                    children: " m_rtcEngine;"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line"
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "public:"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Create and initialize the engine during dialog initialization"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    CAgoraQuickStartDlg"
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
                    children: "        m_rtcEngine "
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
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        RtcEngineContext context;"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        context.appId "
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
                    children: ' "Your App ID"'
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
                    children: "        context.channelProfile "
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
                    children: " CHANNEL_PROFILE_LIVE_BROADCASTING;"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "        // ... other necessary configurations"
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
                    children: "        m_rtcEngine->"
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
                    children: "(context);"
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
                    children: "};"
                  })
                })]
              })
            })
          }), _jsx(_components.h3, {
            id: "enable-accelerated-rendering-3",
            children: "Enable accelerated rendering"
          }), _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_enableinstantmediarendering",
              children: _jsx(_components.code, {
                children: "enableInstantMediaRendering"
              })
            }), " to reduce the time it takes to render the first video frame and play audio after joining a channel."]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Call this method ", _jsx(_components.strong, {
                children: "before"
              }), " joining a channel. Ideally, call it right after engine initialization."]
            }), `
`, _jsx(_components.li, {
              children: "Both host and audience must call this method to benefit from faster rendering."
            }), `
`, _jsxs(_components.li, {
              children: ["To disable this feature, destroy the engine with ", _jsx(_components.code, {
                children: "release"
              }), ", then reinitialize it."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Enable accelerated rendering before joining the channel"
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
                    children: "enableInstantMediaRendering"
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
          }), _jsx(_components.h3, {
            id: "set-a-video-scenario-3",
            children: "Set a video scenario"
          }), _jsxs(_components.p, {
            children: ["Use ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setvideoscenario",
              children: _jsx(_components.code, {
                children: "setVideoScenario"
              })
            }), " to optimize performance for your specific use case. The SDK applies strategies tailored to the selected scenario."]
          }), _jsxs(_components.p, {
            children: ["For example, for a one-on-one call, use ", _jsx(_components.code, {
              children: "APPLICATION_SCENARIO_1V1"
            }), "."]
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
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set the video scenario"
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
                    children: "setVideoScenarios"
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
                    children: "rtc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "::APPLICATION_SCENARIO_1V1);"
                  })]
                })]
              })
            })
          }), _jsx(_components.h3, {
            id: "preload-a-channel-3",
            children: "Preload a channel"
          }), _jsxs(_components.p, {
            children: ["Joining a channel involves acquiring server resources and establishing a connection. Call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_preloadchannel",
              children: _jsx(_components.code, {
                children: "preloadChannel"
              })
            }), " to handle resource acquisition early and reduce join time."]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "token"
              }), ", ", _jsx(_components.code, {
                children: "channelId"
              }), ", and ", _jsx(_components.code, {
                children: "uid"
              }), " must match the values used in ", _jsx(_components.code, {
                children: "joinChannel"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Call ", _jsx(_components.code, {
                children: "preloadChannel"
              }), " as soon as you retrieve the required info."]
            }), `
`, _jsxs(_components.li, {
              children: ["Don’t call ", _jsx(_components.code, {
                children: "joinChannel"
              }), " immediately after ", _jsx(_components.code, {
                children: "preloadChannel"
              }), "."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
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
                    children: " CAgoraQuickStartDlg"
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
                    children: "prepareChannelInfo"
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
                    children: "    m_uid "
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
                    children: " get_uid"
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
                    children: "    m_channelId "
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
                    children: " get_channel_info"
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
                    children: "    m_token "
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
                    children: " getTokenFromServer"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(m_channelId, m_uid);"
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
                    children: "    // Preload the channel"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    m_rtcEngine->"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "preloadChannel"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(m_token, m_channelId, m_uid);"
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
          }), _jsx(_components.h3, {
            id: "set-up-the-rendering-view-6",
            children: "Set up the rendering view"
          }), _jsx(_components.p, {
            children: "Setting the rendering view early ensures the first frame displays properly. If the view is not ready, the first frame might be skipped."
          }), _jsxs(_components.p, {
            children: ["If your app knows the remote user ID (For example, from Signaling), set the view immediately. Otherwise, use the ", _jsx(_components.code, {
              children: "onUserJoined"
            }), " callback."]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.strong, {
                children: "Set the remote view early:"
              })
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
                    children: " CAgoraQuickStartDlg"
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
                    children: "onShowChannels"
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
                    children: "const"
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
                    children: " channelId"
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
                    children: "uid_t"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: " remoteUid"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    VideoCanvas canvas;"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    canvas.uid "
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
                    children: " remoteUid;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    m_rtcEngine->"
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
                    children: "(canvas);"
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
                    children: " CAgoraQuickStartDlg"
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
                    children: "onEIDUserJoined"
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
                    children: "uid_t"
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
                    children: "int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: " elapsed"
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
                    children: "    // Already set"
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
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.strong, {
                children: "Set the view when the user joins:"
              })
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
                    children: " EventHandler"
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
                    children: "onUserJoined"
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
                    children: "uid_t"
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
                    children: "int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: " elapsed"
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
                    children: "    // Forward to UI logic"
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
                    children: "void"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " CAgoraQuickStartDlg"
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
                    children: "onEIDUserJoined"
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
                    children: "uid_t"
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
                    children: "int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: " elapsed"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    VideoCanvas canvas;"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    canvas.uid "
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
                    children: "    m_rtcEngine->"
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
                    children: "(canvas);"
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
          }), _jsx(_components.h3, {
            id: "monitor-rendering-performance-3",
            children: "Monitor rendering performance"
          }), _jsxs(_components.p, {
            children: ["Use ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_startmediarenderingtracing",
              children: _jsx(_components.code, {
                children: "startMediaRenderingTracing"
              })
            }), " to monitor first-frame rendering metrics. Results are reported via ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onvideorenderingtracingresult",
              children: _jsx(_components.code, {
                children: "onVideoRenderingTracingResult"
              })
            }), "."]
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["Call this method when the user initiates joining. For example, on a ", _jsx(_components.strong, {
                  children: "Join"
                }), " button tap. This gives accurate first-frame timing."]
              })
            })
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
                    children: " on_join_clicked"
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
                    children: "    m_rtcEngine->"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "startMediaRenderingTracing"
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
                    children: "    m_rtcEngine->"
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
                    children: "(token, channelId, uid, options);"
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
          }), _jsx(_components.h3, {
            id: "join-a-channel-3",
            children: "Join a channel"
          }), _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            }), " to enter the channel. To speed up first-frame playback, avoid delays like fetching a token in this method."]
          }), _jsxs(_components.p, {
            children: ["If you can’t retrieve a token early, consider using a ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/build/authenticate-users/deploy-token-server#generate-wildcard-tokens",
              children: "wildcard token"
            }), "."]
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
                    children: "int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " CAgoraQuickStartDlg"
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
                    children: "prepareChannelInfo"
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
                    children: "    m_uid "
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
                    children: " get_uid"
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
                    children: "    m_channelId "
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
                    children: " get_channel_info"
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
                    children: "    m_token "
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
                    children: " getTokenFromServer"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(m_channelId, m_uid);"
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
                    children: "int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " CAgoraQuickStartDlg"
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
                    children: "joinChannel"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    ChannelMediaOptions options;"
                  })
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
                    children: "(m_token, m_channelId, m_uid, options);"
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
          }), _jsx(_components.h3, {
            id: "optimize-callback-performance-3",
            children: "Optimize callback performance"
          }), _jsxs(_components.p, {
            children: ["The SDK runs callbacks like ", _jsx(_components.code, {
              children: "onJoinChannelSuccess"
            }), " on the same thread. If one callback is slow, it can delay others—including rendering events."]
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "Don’t block the callback thread with network calls, file I/O, or heavy processing."
              })
            })
          }), _jsx(_components.h4, {
            id: "best-practices-3",
            children: "Best practices"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Avoid complex operations in ", _jsx(_components.code, {
                children: "onJoinChannelSuccess"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Don’t block ", _jsx(_components.code, {
                children: "onUserJoined"
              }), " or other rendering-related callbacks."]
            }), `
`, _jsx(_components.li, {
              children: "Use background threads for heavy logic."
            }), `
`]
          })]
        }), _jsxs(TabsContent, {
          value: "subscribe",
          children: [_jsx(_components.p, {
            children: "The following figure illustrates the essential steps:"
          }), _jsx(_components.h3, {
            id: "sequence-diagram-for-implementation-7",
            children: "Sequence diagram for implementation"
          }), _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/video-sdk/optimize-video-rendering-solution-2.svg",
              alt: "Sequence diagram for optimized video rendering"
            })
          }), _jsx(_components.h3, {
            id: "set-up-the-rendering-view-7",
            children: "Set up the rendering view"
          }), _jsxs(_components.p, {
            children: ["If you know the host’s user ID before joining the channel, call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineex.html#api_irtcengineex_setupremotevideoex",
              children: _jsx(_components.code, {
                children: "setupRemoteVideoEx"
              })
            }), " as early as possible to set up the rendering view. This ensures the rendering pipeline is initialized in advance, helping avoid delays in displaying the first decoded frame."]
          }), _jsxs(_components.p, {
            children: ["If the host’s user ID is not available beforehand, wait for the ", _jsx(_components.code, {
              children: "onUserJoined"
            }), " callback, then call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineex.html#api_irtcengineex_setupremotevideoex",
              children: _jsx(_components.code, {
                children: "setupRemoteVideoEx"
              })
            }), "."]
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
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set the host’s rendering view"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "VideoCanvas canvas;"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "canvas.uid "
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
                    children: " far_next_channel.remoteUid;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "canvas.view "
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
                    children: " getView"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "();"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "  // Replace with your rendering view"
                  })]
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
                    children: "setupRemoteVideoEx"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(canvas, connection);"
                  })]
                })]
              })
            })
          }), _jsx(_components.h3, {
            id: "join-a-channel-without-automatically-subscribing-3",
            children: "Join a channel without automatically subscribing"
          }), _jsx(_components.p, {
            children: "Joining a channel typically takes the most time before the first video frame appears. For use cases like fast channel switching, delay subscribing to media streams to speed up rendering:"
          }), _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Call ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineex.html#api_irtcengineex_joinchannelex",
                  children: _jsx(_components.code, {
                    children: "joinChannelEx"
                  })
                }), " to join the channel."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_channelmediaoptions.html",
                  children: _jsx(_components.code, {
                    children: "ChannelMediaOptions"
                  })
                }), ", set ", _jsx(_components.code, {
                  children: "autoSubscribeAudio"
                }), " and ", _jsx(_components.code, {
                  children: "autoSubscribeVideo"
                }), " to ", _jsx(_components.code, {
                  children: "false"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Subscribe manually when the user is ready to view content."
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
                        children: "// Set channel media options"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "ChannelMediaOptions options;"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "options.channelProfile "
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
                        children: " CHANNEL_PROFILE_LIVE_BROADCASTING;"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "options.clientRoleType "
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
                        children: " CHANNEL_ROLE_AUDIENCE;"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "options.autoSubscribeAudio "
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
                        children: "options.autoSubscribeVideo "
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
                      className: "line"
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "RtcConnection"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " connection"
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
                        children: "far_next_channel"
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
                        children: "channel_id"
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
                        children: "c_str"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(), "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "m_localUid"
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
                        children: "// Join the channel without subscribing"
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
                        children: "joinChannelEx"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(APP_TOKEN, connection, options, m_handler);"
                      })]
                    })]
                  })
                })
              }), `
`]
            }), `
`]
          }), _jsx(_components.h3, {
            id: "subscribe-to-streams-and-start-rendering-3",
            children: "Subscribe to streams and start rendering"
          }), _jsx(_components.p, {
            children: "When the user chooses to view content:"
          }), _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Resume media subscription using ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineex.html#api_irtcengineex_muteremotevideostreamex",
                  children: _jsx(_components.code, {
                    children: "muteRemoteVideoStreamEx"
                  })
                }), " and ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineex.html#api_irtcengineex_muteremoteaudiostreamex",
                  children: _jsx(_components.code, {
                    children: "muteRemoteAudioStreamEx"
                  })
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Call ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineex.html#api_irtcengineex_startmediarenderingtracingex",
                  children: _jsx(_components.code, {
                    children: "startMediaRenderingTracingEx"
                  })
                }), " to log rendering metrics."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["The SDK reports results in the ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onvideorenderingtracingresult",
                  children: _jsx(_components.code, {
                    children: "onVideoRenderingTracingResult"
                  })
                }), " callback, which you can use for performance analysis."]
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
                        children: " CAgoraQuickStartDlg"
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
                        children: "switchNextChannel"
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
                        children: "    RtcConnection "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "connection"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(next_channel.channel_id."
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
                        children: "(), localUid);"
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
                        children: "    // Start video rendering tracing"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    m_rtcEngine->"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "startMediaRenderingTracingEx"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(connection);"
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
                        children: "    // Resume remote media subscriptions"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    m_rtcEngine->"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "muteRemoteVideoStreamEx"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(next_channel.remoteUid, "
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
                        children: ", connection);"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    m_rtcEngine->"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "muteRemoteAudioStreamEx"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(next_channel.remoteUid, "
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
                        children: ", connection);"
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
          })]
        })]
      }), _jsx(_components.h2, {
        id: "troubleshooting-3",
        children: "Troubleshooting"
      }), _jsxs(_components.p, {
        children: ["Refer to ", _jsx(_components.a, {
          href: "/en/api-reference/faq/quality/optimize_video_rendering",
          children: "Slow first-frame rendering of remote video when using the Agora RTC SDK"
        }), "."]
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
