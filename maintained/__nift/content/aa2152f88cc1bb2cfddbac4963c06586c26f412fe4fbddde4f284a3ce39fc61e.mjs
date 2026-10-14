import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Picture-in-Picture",
  description: "Keep video visible in a floating overlay when your app moves to the background or the user switches to another app."
};
export let _markdown = `

When your application moves to the background or the user switches to another app, the Picture-in-Picture (PiP) feature in RTC SDK keeps the current video visible as a floating overlay window on screen. This lets users multitask without interrupting an ongoing call or viewing session, improving the multitasking experience and user retention.

PiP is useful in the following scenarios:

| Use case                   | Description                                                                                                                                                           |
| :------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Video calling              | Keeps the call visible when the user switches apps or returns to the home screen. Useful for social calls, remote meetings, and online customer service.              |
| Online education           | Lets students watch a teacher's video explanation while reviewing study materials, taking notes, or using other apps.                                                 |
| Interactive live streaming | Lets viewers browse products, chat, or use other apps while the stream continues in the background. Useful for e-commerce and content live streaming.                 |
| Screen sharing             | Keeps shared content visible when the user switches apps during remote collaboration or a presentation. Useful for remote work, technical support, and product demos. |

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="flutter" platforms="[&#x22;flutter&#x22;,&#x22;react-native&#x22;]" showTabs="true">
  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="flutter" platform="flutter" />

    ## Prerequisites [#prerequisites]

    Before implementing Picture-in-Picture, make sure you have the following:

    * Flutter 3.7.0 or later
    * RTC SDK for Flutter [v6.6.2](../../reference/release-notes) or later integrated into your project. See [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).
    * To use PiP, the target device must run one of the following:
      * Android 8.0 or later
      * iOS 15.0 or later

    ## Set up your project [#set-up-your-project]

    Before using PiP, complete the required configuration for each target platform.

    <Tabs defaultValue="android" groupId="flutter-pip-platform">
      <TabsList>
        <TabsTrigger value="android">
          Android
        </TabsTrigger>

        <TabsTrigger value="ios">
          iOS
        </TabsTrigger>
      </TabsList>

      <TabsContent value="android">
        1. In \`AndroidManifest.xml\`, declare that the current Activity supports PiP mode:

           \`\`\`xml
           <activity
               android:name=".MainActivity"
               android:supportsPictureInPicture="true"
               android:configChanges="screenSize|smallestScreenSize|screenLayout|orientation|uiMode"
               android:exported="true"
               android:launchMode="singleTop">
           </activity>
           \`\`\`

        2. Make \`MainActivity\` extend \`AgoraPIPFlutterActivity\` or \`AgoraPIPFlutterFragmentActivity\`.

           \`\`\`kotlin
           import io.agora.agora_rtc_ng.AgoraPIPFlutterActivity

           class MainActivity : AgoraPIPFlutterActivity()
           \`\`\`

        How PiP is triggered differs by Android version:

        * **Android 12 and later:** The system can automatically enter PiP when the user leaves the current screen in appropriate scenarios. You can use this with \`autoEnterEnabled\`.
        * **Earlier than Android 12:** Automatic PiP entry via \`autoEnterEnabled\` is not supported. You must trigger PiP entry explicitly, for example by calling \`pipStart()\` in response to a user action.

        <CalloutContainer type="info">
          <CalloutDescription>
            When \`MainActivity\` extends \`AgoraPIPFlutterActivity\` or \`AgoraPIPFlutterFragmentActivity\`, the SDK automatically handles the \`onPictureInPictureModeChanged\` and \`onUserLeaveHint\` Activity callbacks required for PiP.
          </CalloutDescription>
        </CalloutContainer>
      </TabsContent>

      <TabsContent value="ios">
        In Xcode, add the Background Modes capability to your app:

        1. Open your target's **Signing & Capabilities** tab.
        2. Click **+ Capability**.
        3. Select **Background Modes**.
        4. Check **Audio, AirPlay, and Picture in Picture**.

        <CalloutContainer type="info">
          <CalloutTitle>
            Information
          </CalloutTitle>

          <CalloutDescription>
            If your use case requires capturing local camera video in multitasking mode, contact [support@agora.io](mailto\\:support@agora.io) for guidance on enabling iOS multitasking capture.
          </CalloutDescription>
        </CalloutContainer>
      </TabsContent>
    </Tabs>

    ## Implement Picture-in-Picture [#implement-picture-in-picture]

    Starting from RTC SDK [v6.6.2](../../reference/release-notes), Agora provides the [\`AgoraPipController\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapip.html) and related configuration options for enabling and managing PiP on Android and iOS. This section describes how to implement PiP in your Flutter project.

    ### Get the PiP controller and register a listener [#get-the-pip-controller-and-register-a-listener]

    After initializing the RTC engine, call \`createPipController()\` to create a PiP controller, then register a state change listener:

    \`\`\`dart
    late final RtcEngine _engine;
    late final AgoraPipController _pip;

    _engine = createAgoraRtcEngine();
    await _engine.initialize(RtcEngineContext(appId: appId));

    _pip = _engine.createPipController();
    await _pip.registerPipStateChangedObserver(
      AgoraPipStateChangedObserver(
        onPipStateChanged: (state, error) {
          debugPrint('[PiP] state=$state error=$error');
        },
      ),
    );
    \`\`\`

    ### Check device support [#check-device-support]

    Check whether the current device and system support the required capabilities:

    \`\`\`dart
    final pipSupported = await _pip.pipIsSupported();
    final pipAutoEnterSupported = await _pip.pipIsAutoEnterSupported();
    \`\`\`

    * \`pipIsSupported()\` checks whether the current device supports PiP.
    * \`pipIsAutoEnterSupported()\` checks whether the current device and system support automatic PiP entry.

    ### Configure PiP options [#configure-pip-options]

    Call \`pipSetup()\` to configure PiP options. Use [\`AgoraPipOptions\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapipoptions.html) to set platform-specific options for Android and iOS.

    <Tabs defaultValue="android" groupId="flutter-pip-platform">
      <TabsList>
        <TabsTrigger value="android">
          Android
        </TabsTrigger>

        <TabsTrigger value="ios">
          iOS
        </TabsTrigger>
      </TabsList>

      <TabsContent value="android">
        On Android, you typically need to configure the aspect ratio, the initial source region, and seamless resize:

        \`\`\`dart
        final options = AgoraPipOptions(
          autoEnterEnabled: pipAutoEnterSupported,
          aspectRatioX: 16,
          aspectRatioY: 9,
          sourceRectHintLeft: 0,
          sourceRectHintTop: 0,
          sourceRectHintRight: 0,
          sourceRectHintBottom: 0,
          seamlessResizeEnabled: true,
          useExternalStateMonitor: false,
          externalStateMonitorInterval: 100,
        );

        await _pip.pipSetup(options);
        \`\`\`

        <CalloutContainer type="info">
          <CalloutDescription>
            If your \`MainActivity\` is configured for PiP as described, but PiP state callbacks are unreliable on certain devices or in certain scenarios, set \`useExternalStateMonitor\` to \`true\` and configure the polling interval using \`externalStateMonitorInterval\` to supplement PiP state synchronization.
          </CalloutDescription>
        </CalloutContainer>
      </TabsContent>

      <TabsContent value="ios">
        On iOS, you can configure the PiP window size, video stream layout, and system control style:

        \`\`\`dart
        final options = AgoraPipOptions(
          preferredContentWidth: 960,
          preferredContentHeight: 540,
          sourceContentView: 0,
          contentView: 0,
          contentViewLayout: const AgoraPipContentViewLayout(
            padding: 0,
            spacing: 2,
            row: 1,
            column: 2,
          ),
          videoStreams: [
            AgoraPipVideoStream(
              connection: RtcConnection(
                channelId: channelId,
                localUid: localUid,
              ),
              canvas: const VideoCanvas(
                uid: 0,
                sourceType: VideoSourceType.videoSourceCamera,
                setupMode: VideoViewSetupMode.videoViewSetupAdd,
                renderMode: RenderModeType.renderModeHidden,
                mirrorMode: VideoMirrorModeType.videoMirrorModeEnabled,
              ),
            ),
            ...remoteUsers.entries.map(
              (entry) => AgoraPipVideoStream(
                connection: entry.value,
                canvas: VideoCanvas(
                  uid: entry.key,
                  sourceType: VideoSourceType.videoSourceRemote,
                  setupMode: VideoViewSetupMode.videoViewSetupAdd,
                  renderMode: RenderModeType.renderModeHidden,
                ),
              ),
            ),
          ],
          controlStyle: 2,
        );

        await _pip.pipSetup(options);
        \`\`\`

        In this example:

        * When \`contentView\` is set to \`0\`, the SDK manages the native views inside the PiP window. If you pass a non-zero value, you are responsible for managing the native view layout.
        * \`videoStreams\` defines the local and remote streams to display.
        * \`contentViewLayout\` configures the grid layout for video streams inside the PiP window. Streams are arranged from left to right, then top to bottom.
        * \`controlStyle: 2\` hides the play/pause button and progress bar, keeping only the essential window control buttons. This is recommended for real-time interactive scenarios.
      </TabsContent>
    </Tabs>

    ### Listen for PiP state changes [#listen-for-pip-state-changes]

    Implement [\`AgoraPipStateChangedObserver\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapipstatechangedobserver.html) to listen for PiP state changes. Use the [\`AgoraPipState\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/enum_agorapipstate.html) value to update the UI or handle errors:

    \`\`\`dart
    await _pip.registerPipStateChangedObserver(
      AgoraPipStateChangedObserver(
        onPipStateChanged: (state, error) async {
          if (state == AgoraPipState.pipStateFailed) {
            await _pip.pipDispose();
          }
        },
      ),
    );
    \`\`\`

    \`AgoraPipState\` defines the following states:

    * \`pipStateStarted\`: PiP has started successfully.
    * \`pipStateStopped\`: PiP has stopped.
    * \`pipStateFailed\`: PiP failed to start or encountered an error while running.

    ### Start, stop, and release PiP [#start-stop-and-release-pip]

    Call \`pipStart()\` to start PiP. The recommended approach for stopping and releasing PiP differs by platform:

    <Tabs defaultValue="android" groupId="flutter-pip-platform">
      <TabsList>
        <TabsTrigger value="android">
          Android
        </TabsTrigger>

        <TabsTrigger value="ios">
          iOS
        </TabsTrigger>
      </TabsList>

      <TabsContent value="android">
        \`\`\`dart
        // Start PiP
        await _pip.pipStart();

        // Release the current PiP session
        await _pip.pipDispose();

        // Destroy the controller
        await _pip.dispose();
        \`\`\`

        <CalloutContainer type="info">
          <CalloutDescription>
            On Android, \`pipStop()\` is not the standard path for exiting PiP and restoring the foreground page. If you no longer need the current PiP session, call \`pipDispose()\` to release resources. Restoring full-screen view is typically handled by the user through the system PiP window controls.
          </CalloutDescription>
        </CalloutContainer>
      </TabsContent>

      <TabsContent value="ios">
        Call \`pipStop()\` to stop PiP and restore the app interface. If the page is about to be destroyed or you no longer need PiP, call \`pipDispose()\` and \`dispose()\` to release resources.

        \`\`\`dart
        // Start PiP
        await _pip.pipStart();

        // Stop PiP and restore the app interface
        await _pip.pipStop();

        // Release the current PiP session
        await _pip.pipDispose();

        // Destroy the controller
        await _pip.dispose();
        \`\`\`
      </TabsContent>
    </Tabs>

    ### Development considerations [#development-considerations]

    This section covers platform-specific behavior and best practices to keep in mind when integrating PiP.

    <Tabs defaultValue="android" groupId="flutter-pip-platform">
      <TabsList>
        <TabsTrigger value="android">
          Android
        </TabsTrigger>

        <TabsTrigger value="ios">
          iOS
        </TabsTrigger>
      </TabsList>

      <TabsContent value="android">
        * After entering PiP on Android, you typically need to update the app UI to match the PiP state. Many apps show only the video area while PiP is active.
        * Android 12 and later support automatic PiP entry when the app moves to the background. On earlier versions, you must trigger PiP entry explicitly, for example by calling \`pipStart()\` in response to a user action.
        * \`pipStart()\` does not guarantee success in all timing scenarios. Calling it when the app moves to the background is generally more reliable.
        * PiP does not bypass Android background restrictions. If you need to continue capturing or playing audio and video in the background, combine PiP with a foreground service. For details, see [Android background restrictions](/en/api-reference/faq/quality/android_background).
        * On Android, \`pipStop()\` moves the task to the background rather than exiting PiP and restoring the foreground page. Full-screen restoration is typically handled by the user through the system PiP window controls.
        * Call \`pipDispose()\` or \`dispose()\` promptly when leaving a channel, destroying the page, or when PiP is no longer needed, to avoid resource leaks.
      </TabsContent>

      <TabsContent value="ios">
        * PiP must be triggered by explicit user action only, such as tapping a button or swiping up to the home screen. Triggering PiP programmatically without a user action may result in App Store review rejection.
        * The PiP window is managed by the system and the SDK. Your app does not need to render a custom floating window.
        * To display multiple video streams in PiP mode, configure the layout explicitly using \`videoStreams\` and \`contentViewLayout\`. When remote users join or leave, call \`pipSetup()\` again with the updated \`videoStreams\`; you do not need to call \`pipDispose()\` first.
        * [\`AgoraPipOptions.controlStyle\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapipoptions.html) supports four control styles. Style \`2\` is recommended for video call scenarios. Style \`3\` hides all controls, including the close and restore buttons.
        * Call \`pipDispose()\` or \`dispose()\` promptly when leaving a channel, destroying the page, or when PiP is no longer needed, to avoid resource leaks.
      </TabsContent>
    </Tabs>

    ## Reference [#reference]

    This section includes links to related API reference and additional resources.

    ### API reference [#api-reference]

    * [\`AgoraPipController\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapip.html)
    * [\`AgoraPipOptions\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapipoptions.html)
    * [\`AgoraPipContentViewLayout\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapipcontentviewlayout.html)
    * [\`AgoraPipVideoStream\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapipvideostream.html)
    * [\`pipIsSupported\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/api_agorapip_pipissupported.html)
    * [\`pipIsAutoEnterSupported\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/api_agorapip_pipisautoentersupported.html)
    * [\`pipSetup\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/api_agorapip_pipsetup.html)
    * [\`pipStart\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/api_agorapip_pipstart.html)
    * [\`pipStop\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/api_agorapip_pipstop.html)
    * [\`pipDispose\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/api_agorapip_pipdispose.html)
    * [\`registerPipStateChangedObserver\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/api_agorapip_registerpipstatechangedobserver.html)
    * [\`AgoraPipStateChangedObserver\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapipstatechangedobserver.html)
    * [\`AgoraPipState\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/enum_agorapipstate.html)
    * [\`onPipStateChanged\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/callback_agorapipstatechangedobserver_onpipstatechanged.html)

    ### Sample project [#sample-project]

    Agora provides a [sample project](https://github.com/AgoraIO-Extensions/Agora-Flutter-SDK/blob/main/example/lib/examples/advanced/picture_in_picture/picture_in_picture.dart) demonstrating Picture-in-Picture. Download or view the source code.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="flutter" platform="react-native" />

    ## Prerequisites [#prerequisites-1]

    Before implementing Picture-in-Picture, make sure you have the following:

    * RTC SDK for React Native [v4.6.2](../../reference/release-notes) or later integrated into your project. See [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).

    * To use PiP, the target device must run one of the following:
      * Android 8.0 or later
      * iOS 15.0 or later

    ## Set up your project [#set-up-your-project-1]

    Before using PiP, complete the required configuration for each target platform.

    <Tabs defaultValue="android" groupId="react-native-host-os">
      <TabsList>
        <TabsTrigger value="android">
          Android
        </TabsTrigger>

        <TabsTrigger value="ios">
          iOS
        </TabsTrigger>
      </TabsList>

      <TabsContent value="android">
        Declare that the current Activity supports PiP mode in your Android project:

        \`\`\`xml
        <activity
         android:name=".MainActivity"
         android:supportsPictureInPicture="true"
         android:configChanges="screenSize|smallestScreenSize|screenLayout|orientation" />
        \`\`\`

        Then, make \`MainActivity\` extend \`AgoraPIPActivity\`:

        \`\`\`kotlin
        import io.agora.rtc.ng.react.AgoraPIPActivity

        class MainActivity : AgoraPIPActivity() {
        }
        \`\`\`

        If you need audio or video capture and playback to continue after the app moves to the background or enters PiP, also complete the foreground service configuration. For the required permissions, manifest declarations, and integration steps, see [Android background restrictions](/en/api-reference/faq/quality/android_background).

        <CalloutContainer type="info">
          <CalloutDescription>
            The way PiP is triggered differs by Android version:

            * **Android 12 and later:** The system can automatically enter PiP when the user leaves the current screen in appropriate scenarios. You can combine this with \`autoEnterEnabled\`.
            * **Earlier than Android 12:** The system does not support automatic PiP entry via \`autoEnterEnabled\`. You typically need to trigger PiP entry explicitly.
              When \`MainActivity\` extends \`AgoraPIPActivity\`, the SDK handles the relevant system callback adaptation.
          </CalloutDescription>
        </CalloutContainer>
      </TabsContent>

      <TabsContent value="ios">
        Add the background playback capability to your app in Xcode:

        1. Open your target's **Signing & Capabilities** tab.
        2. Click **+ Capability**.
        3. Add **Background Modes**.
        4. Select **Audio, AirPlay, and Picture in Picture**.

           <CalloutContainer type="info">
             <CalloutDescription>
               If your use case requires capturing local camera video in multi-tasking mode, contact [support@agora.io](mailto\\:support@agora.io) for guidance on enabling iOS multi-tasking capture.
               The React Native SDK does not directly expose the \`multitaskingCameraAccessEnabled\` configuration. If your use case requires local camera capture during PiP, additional native-side adaptation is needed.
             </CalloutDescription>
           </CalloutContainer>
      </TabsContent>
    </Tabs>

    ## Implement Picture-in-Picture [#implement-picture-in-picture-1]

    Starting from RTC SDK [v4.6.2](../../reference/release-notes), Agora provides the [\`AgoraPip\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapip.html) controller and related configuration options for enabling and managing PiP on Android and iOS. This section describes how to implement Picture-in-Picture in your React Native project.

    ### Get the PiP controller and register a listener [#get-the-pip-controller-and-register-a-listener-1]

    After initializing the RTC engine, call \`getAgoraPip\` to get the PiP controller and register a state change listener:

    \`\`\`typescript
    this.engine = createAgoraRtcEngine();
    this.engine.initialize({
     appId,
     channelProfile: ChannelProfileType.ChannelProfileLiveBroadcasting,
    });
     
    const pip = this.engine.getAgoraPip();
    pip.registerPipStateChangedObserver(this);
    \`\`\`

    ### Check device support [#check-device-support-1]

    Check whether the current device and system support the required capabilities:

    \`\`\`typescript
    const isPipSupported = pip.pipIsSupported();
    const isPipAutoEnterSupported = pip.pipIsAutoEnterSupported();
    \`\`\`

    * \`pipIsSupported\` checks whether the current device supports PiP.
    * \`pipIsAutoEnterSupported\` checks whether the current device and system support automatic PiP entry.

    ### Configure PiP options [#configure-pip-options-1]

    Call \`pipSetup\` to configure PiP options. Use [\`AgoraPipOptions\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapipoptions.html) to set platform-specific options for Android and iOS.

    <Tabs defaultValue="android" groupId="react-native-host-os">
      <TabsList>
        <TabsTrigger value="android">
          Android
        </TabsTrigger>

        <TabsTrigger value="ios">
          iOS
        </TabsTrigger>
      </TabsList>

      <TabsContent value="android">
        Pass the measured bounds of the video view to \`sourceRectHint\` to improve the transition animation when entering PiP.

        On Android, you typically need to configure the aspect ratio, the initial source region, and seamless resize:

        \`\`\`typescript
        const videoViewBounds = {
         left: measuredLeft,
         top: measuredTop,
         right: measuredRight,
         bottom: measuredBottom,
        };

        const options: AgoraPipOptions = {
         autoEnterEnabled: pip.pipIsAutoEnterSupported(),
         aspectRatioX: 960,
         aspectRatioY: 540,
         sourceRectHintLeft: videoViewBounds.left,
         sourceRectHintTop: videoViewBounds.top,
         sourceRectHintRight: videoViewBounds.right,
         sourceRectHintBottom: videoViewBounds.bottom,
         seamlessResizeEnabled: true,
         useExternalStateMonitor: true,
         externalStateMonitorInterval: 100,
        };

        pip.pipSetup(options);
        \`\`\`

        <CalloutContainer type="info">
          <CalloutDescription>
            \`useExternalStateMonitor\` defaults to \`true\`. The example above keeps this value explicit for clarity. Only set it to \`false\` if you have already extended \`AgoraPIPActivity\` and explicitly do not want polling-based state synchronization.
          </CalloutDescription>
        </CalloutContainer>
      </TabsContent>

      <TabsContent value="ios">
        On iOS, you can configure the PiP window size, video stream layout, and system control style:

        \`\`\`typescript
        const options: AgoraPipOptions = {
         autoEnterEnabled: pip.pipIsAutoEnterSupported(),
         preferredContentWidth: 960,
         preferredContentHeight: 540,
         contentView: 0,
         sourceContentView: 0,
         contentViewLayout: {
          padding: 0,
          spacing: 2,
          row: 1,
          column: 2,
         },
         videoStreams: [
          {
           connection: {
            channelId,
            localUid: uid,
           },
           canvas: {
            sourceType: VideoSourceType.VideoSourceCamera,
            setupMode: VideoViewSetupMode.VideoViewSetupAdd,
            renderMode: RenderModeType.RenderModeHidden,
            mirrorMode: VideoMirrorModeType.VideoMirrorModeEnabled,
           },
          },
          ...remoteUsers.map((userUid) => ({
           connection: {
            channelId,
            localUid: userUid,
           },
           canvas: {
            uid: userUid,
            sourceType: VideoSourceType.VideoSourceRemote,
            setupMode: VideoViewSetupMode.VideoViewSetupAdd,
            renderMode: RenderModeType.RenderModeHidden,
           },
          })),
         ],
         controlStyle: 2,
        };

        pip.pipSetup(options);
        \`\`\`

        In this example:

        * When \`contentView\` is set to \`0\`, the SDK manages the native views inside the PiP window. If you pass a non-zero value, you are responsible for managing the native view layout.
        * \`videoStreams\` defines the local and remote streams to display.
        * \`contentViewLayout\` configures the grid layout for video streams inside the PiP window. Streams are arranged from left to right, then top to bottom.
        * \`controlStyle: 2\` hides the play/pause button and progress bar, keeping only the essential window control buttons. This is recommended for real-time interactive scenarios.

        <CalloutContainer type="info">
          <CalloutDescription>
            For standard React Native integrations, keep both \`contentView\` and \`sourceContentView\` set to \`0\`. This lets the SDK manage the native views, layout, and restore target inside the PiP window. Pass non-zero values only if you have already completed the corresponding native view integration.
          </CalloutDescription>
        </CalloutContainer>
      </TabsContent>
    </Tabs>

    ### Listen for PiP state changes [#listen-for-pip-state-changes-1]

    Implement [\`AgoraPipStateChangedObserver\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapipstatechangedobserver.html) to listen for PiP state changes. Use the [\`AgoraPipState\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/enum_agorapipstate.html) value to update the UI or handle errors:

    \`\`\`typescript
    onPipStateChanged(state: AgoraPipState, error: string | null): void {
     if (state === AgoraPipState.pipStateFailed) {
      this.engine?.getAgoraPip().pipDispose();
     }
     
     this.setState({ pipState: state });
    }
    \`\`\`

    \`AgoraPipState\` defines the following states:

    * \`pipStateStarted\`: PiP has started successfully.
    * \`pipStateStopped\`: PiP has stopped.
    * \`pipStateFailed\`: PiP failed to start or encountered an error while running.

    ### Start, stop, and destroy PiP [#start-stop-and-destroy-pip]

    PiP-related calls operate at two lifecycle levels:

    * **Session level:** \`pipStart\`, \`pipStop\`, and \`pipDispose\` control the start, stop, and resource release of a single PiP session.
    * **Controller or page level:** \`release\` performs the final cleanup when the page or controller is no longer needed.

    After completing configuration, call \`pipStart\` to start PiP. Call \`release\` only when destroying the page or when the controller is no longer needed, to avoid redundant session-level calls during teardown.

    <Tabs defaultValue="android" groupId="react-native-host-os">
      <TabsList>
        <TabsTrigger value="android">
          Android
        </TabsTrigger>

        <TabsTrigger value="ios">
          iOS
        </TabsTrigger>
      </TabsList>

      <TabsContent value="android">
        \`\`\`typescript
        // Session level: start PiP
        pip.pipStart();

        // Session level: end the current PiP session
        pip.pipDispose();

        // Controller/page destroy level: final release
        pip.release();
        \`\`\`

        <CalloutContainer type="info">
          <CalloutDescription>
            On Android, \`pipStop\` is not the standard path for exiting PiP and restoring the foreground page. If you no longer need the current PiP session, call \`pipDispose\` to release resources. Restoring full-screen view is typically handled by the user through the system PiP window controls.
          </CalloutDescription>
        </CalloutContainer>
      </TabsContent>

      <TabsContent value="ios">
        Call \`pipStop\` to stop PiP and restore the app interface, then call \`pipDispose\` to release the session resources. Call \`release\` only when destroying the page or when the controller is no longer needed.

        \`\`\`typescript
        // Session level: start PiP
        pip.pipStart();

        // Session level: stop PiP and restore the app interface
        pip.pipStop();

        // Session level: release the current PiP session resources
        pip.pipDispose();

        // Controller/page destroy level: final release
        pip.release();
        \`\`\`
      </TabsContent>
    </Tabs>

    ### Development considerations [#development-considerations-1]

    This section covers platform-specific behavior and best practices to keep in mind when integrating PiP.

    <Tabs defaultValue="android" groupId="react-native-host-os">
      <TabsList>
        <TabsTrigger value="android">
          Android
        </TabsTrigger>

        <TabsTrigger value="ios">
          iOS
        </TabsTrigger>
      </TabsList>

      <TabsContent value="android">
        * After entering PiP on Android, you typically need to update the app UI to match the PiP state.
        * Android 12 and later support automatic PiP entry when the app moves to the background. On earlier versions, you must trigger PiP entry explicitly, for example by calling \`pipStart\` in response to a user action. Extending \`AgoraPIPActivity\` simplifies this adaptation.
        * PiP does not bypass Android background restrictions. If you need to continue capturing or playing audio and video in the background, combine PiP with a foreground service. For details, see [Android background restrictions](/en/api-reference/faq/quality/android_background).
        * On Android, \`pipStop\` moves the task to the background rather than exiting PiP and restoring the foreground page. Full-screen restoration is typically handled by the user through the system PiP window controls.
        * Distinguish between session-level and controller-level release: call \`pipDispose\` to end the current PiP session, and call \`release\` only when the page is destroyed or the controller is no longer needed.
      </TabsContent>

      <TabsContent value="ios">
        * PiP must be triggered by explicit user action only, such as tapping a button or swiping up to the home screen. Triggering PiP programmatically without a user action may result in App Store review rejection.
        * The PiP window is managed by the system and the SDK. Your app does not need to render a custom floating window.
        * To display multiple video streams in PiP mode, configure the layout explicitly using \`videoStreams\` and \`contentViewLayout\`. When remote users join or leave, call \`pipSetup\` again with the updated \`videoStreams\`. You do not need to call \`pipDispose\` first.
        * [\`AgoraPipOptions.controlStyle\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapipoptions.html) accepts values \`0\` to \`3\`. Use \`2\` for video call scenarios, which hides the play/pause button and progress bar. Style \`3\` hides all controls, including the close and restore buttons.
        * Distinguish between session-level and controller-level release: call \`pipStop\` and \`pipDispose\` to end the current PiP session, and call \`release\` only when the page is destroyed or the controller is no longer needed.
      </TabsContent>
    </Tabs>

    ## Reference [#reference-1]

    This section includes links to related API reference and additional resources.

    ### API reference [#api-reference-1]

    * [\`AgoraPip\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapip.html)
    * [\`AgoraPipOptions\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapipoptions.html)
    * [\`AgoraPipContentViewLayout\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapipcontentviewlayout.html)
    * [\`AgoraPipVideoStream\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapipvideostream.html)
    * [\`pipIsSupported\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/api_agorapip_pipissupported.html)
    * [\`pipIsAutoEnterSupported\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/api_agorapip_pipisautoentersupported.html)
    * [\`pipSetup\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/api_agorapip_pipsetup.html)
    * [\`pipStart\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/api_agorapip_pipstart.html)
    * [\`pipStop\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/api_agorapip_pipstop.html)
    * [\`pipDispose\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/api_agorapip_pipdispose.html)
    * [\`registerPipStateChangedObserver\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/api_agorapip_registerpipstatechangedobserver.html)
    * [\`AgoraPipStateChangedObserver\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapipstatechangedobserver.html)
    * [\`AgoraPipState\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/enum_agorapipstate.html)
    * [\`onPipStateChanged\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/callback_agorapipstatechangedobserver_onpipstatechanged.html)

    ### Sample project [#sample-project-1]

    Agora provides a [sample project](https://github.com/AgoraIO-Extensions/react-native-agora/tree/main/examples/expo/app/examples/advanced/PictureInPicture) demonstrating Picture-in-Picture. Download or view the source code.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When your application moves to the background or the user switches to another app, the Picture-in-Picture (PiP) feature in RTC SDK keeps the current video visible as a floating overlay window on screen. This lets users multitask without interrupting an ongoing call or viewing session, improving the multitasking experience and user retention."
  }, {
    heading: undefined,
    content: "PiP is useful in the following scenarios:"
  }, {
    heading: undefined,
    content: "Use case"
  }, {
    heading: undefined,
    content: "Description"
  }, {
    heading: undefined,
    content: "Video calling"
  }, {
    heading: undefined,
    content: "Keeps the call visible when the user switches apps or returns to the home screen. Useful for social calls, remote meetings, and online customer service."
  }, {
    heading: undefined,
    content: "Online education"
  }, {
    heading: undefined,
    content: "Lets students watch a teacher's video explanation while reviewing study materials, taking notes, or using other apps."
  }, {
    heading: undefined,
    content: "Interactive live streaming"
  }, {
    heading: undefined,
    content: "Lets viewers browse products, chat, or use other apps while the stream continues in the background. Useful for e-commerce and content live streaming."
  }, {
    heading: undefined,
    content: "Screen sharing"
  }, {
    heading: undefined,
    content: "Keeps shared content visible when the user switches apps during remote collaboration or a presentation. Useful for remote work, technical support, and product demos."
  }, {
    heading: "prerequisites",
    content: "Before implementing Picture-in-Picture, make sure you have the following:"
  }, {
    heading: "prerequisites",
    content: "Flutter 3.7.0 or later"
  }, {
    heading: "prerequisites",
    content: "RTC SDK for Flutter v6.6.2 or later integrated into your project. See SDK quickstart."
  }, {
    heading: "prerequisites",
    content: "To use PiP, the target device must run one of the following:"
  }, {
    heading: "prerequisites",
    content: "Android 8.0 or later"
  }, {
    heading: "prerequisites",
    content: "iOS 15.0 or later"
  }, {
    heading: "set-up-your-project",
    content: "Before using PiP, complete the required configuration for each target platform."
  }, {
    heading: "set-up-your-project",
    content: "In `AndroidManifest.xml`, declare that the current Activity supports PiP mode:"
  }, {
    heading: "set-up-your-project",
    content: "Make `MainActivity` extend `AgoraPIPFlutterActivity` or `AgoraPIPFlutterFragmentActivity`."
  }, {
    heading: "set-up-your-project",
    content: "How PiP is triggered differs by Android version:"
  }, {
    heading: "set-up-your-project",
    content: "**Android 12 and later:** The system can automatically enter PiP when the user leaves the current screen in appropriate scenarios. You can use this with `autoEnterEnabled`."
  }, {
    heading: "set-up-your-project",
    content: "**Earlier than Android 12:** Automatic PiP entry via `autoEnterEnabled` is not supported. You must trigger PiP entry explicitly, for example by calling `pipStart()` in response to a user action."
  }, {
    heading: "set-up-your-project",
    content: "When `MainActivity` extends `AgoraPIPFlutterActivity` or `AgoraPIPFlutterFragmentActivity`, the SDK automatically handles the `onPictureInPictureModeChanged` and `onUserLeaveHint` Activity callbacks required for PiP."
  }, {
    heading: "set-up-your-project",
    content: "In Xcode, add the Background Modes capability to your app:"
  }, {
    heading: "set-up-your-project",
    content: "Open your target's **Signing & Capabilities** tab."
  }, {
    heading: "set-up-your-project",
    content: "Click **+ Capability**."
  }, {
    heading: "set-up-your-project",
    content: "Select **Background Modes**."
  }, {
    heading: "set-up-your-project",
    content: "Check **Audio, AirPlay, and Picture in Picture**."
  }, {
    heading: "set-up-your-project",
    content: "If your use case requires capturing local camera video in multitasking mode, contact support\\@agora.io for guidance on enabling iOS multitasking capture."
  }, {
    heading: "implement-picture-in-picture",
    content: "Starting from RTC SDK v6.6.2, Agora provides the `AgoraPipController` and related configuration options for enabling and managing PiP on Android and iOS. This section describes how to implement PiP in your Flutter project."
  }, {
    heading: "get-the-pip-controller-and-register-a-listener",
    content: "After initializing the RTC engine, call `createPipController()` to create a PiP controller, then register a state change listener:"
  }, {
    heading: "check-device-support",
    content: "Check whether the current device and system support the required capabilities:"
  }, {
    heading: "check-device-support",
    content: "`pipIsSupported()` checks whether the current device supports PiP."
  }, {
    heading: "check-device-support",
    content: "`pipIsAutoEnterSupported()` checks whether the current device and system support automatic PiP entry."
  }, {
    heading: "configure-pip-options",
    content: "Call `pipSetup()` to configure PiP options. Use `AgoraPipOptions` to set platform-specific options for Android and iOS."
  }, {
    heading: "configure-pip-options",
    content: "On Android, you typically need to configure the aspect ratio, the initial source region, and seamless resize:"
  }, {
    heading: "configure-pip-options",
    content: "If your `MainActivity` is configured for PiP as described, but PiP state callbacks are unreliable on certain devices or in certain scenarios, set `useExternalStateMonitor` to `true` and configure the polling interval using `externalStateMonitorInterval` to supplement PiP state synchronization."
  }, {
    heading: "configure-pip-options",
    content: "On iOS, you can configure the PiP window size, video stream layout, and system control style:"
  }, {
    heading: "configure-pip-options",
    content: "In this example:"
  }, {
    heading: "configure-pip-options",
    content: "When `contentView` is set to `0`, the SDK manages the native views inside the PiP window. If you pass a non-zero value, you are responsible for managing the native view layout."
  }, {
    heading: "configure-pip-options",
    content: "`videoStreams` defines the local and remote streams to display."
  }, {
    heading: "configure-pip-options",
    content: "`contentViewLayout` configures the grid layout for video streams inside the PiP window. Streams are arranged from left to right, then top to bottom."
  }, {
    heading: "configure-pip-options",
    content: "`controlStyle: 2` hides the play/pause button and progress bar, keeping only the essential window control buttons. This is recommended for real-time interactive scenarios."
  }, {
    heading: "listen-for-pip-state-changes",
    content: "Implement `AgoraPipStateChangedObserver` to listen for PiP state changes. Use the `AgoraPipState` value to update the UI or handle errors:"
  }, {
    heading: "listen-for-pip-state-changes",
    content: "`AgoraPipState` defines the following states:"
  }, {
    heading: "listen-for-pip-state-changes",
    content: "`pipStateStarted`: PiP has started successfully."
  }, {
    heading: "listen-for-pip-state-changes",
    content: "`pipStateStopped`: PiP has stopped."
  }, {
    heading: "listen-for-pip-state-changes",
    content: "`pipStateFailed`: PiP failed to start or encountered an error while running."
  }, {
    heading: "start-stop-and-release-pip",
    content: "Call `pipStart()` to start PiP. The recommended approach for stopping and releasing PiP differs by platform:"
  }, {
    heading: "start-stop-and-release-pip",
    content: "On Android, `pipStop()` is not the standard path for exiting PiP and restoring the foreground page. If you no longer need the current PiP session, call `pipDispose()` to release resources. Restoring full-screen view is typically handled by the user through the system PiP window controls."
  }, {
    heading: "start-stop-and-release-pip",
    content: "Call `pipStop()` to stop PiP and restore the app interface. If the page is about to be destroyed or you no longer need PiP, call `pipDispose()` and `dispose()` to release resources."
  }, {
    heading: "development-considerations",
    content: "This section covers platform-specific behavior and best practices to keep in mind when integrating PiP."
  }, {
    heading: "development-considerations",
    content: "After entering PiP on Android, you typically need to update the app UI to match the PiP state. Many apps show only the video area while PiP is active."
  }, {
    heading: "development-considerations",
    content: "Android 12 and later support automatic PiP entry when the app moves to the background. On earlier versions, you must trigger PiP entry explicitly, for example by calling `pipStart()` in response to a user action."
  }, {
    heading: "development-considerations",
    content: "`pipStart()` does not guarantee success in all timing scenarios. Calling it when the app moves to the background is generally more reliable."
  }, {
    heading: "development-considerations",
    content: "PiP does not bypass Android background restrictions. If you need to continue capturing or playing audio and video in the background, combine PiP with a foreground service. For details, see Android background restrictions."
  }, {
    heading: "development-considerations",
    content: "On Android, `pipStop()` moves the task to the background rather than exiting PiP and restoring the foreground page. Full-screen restoration is typically handled by the user through the system PiP window controls."
  }, {
    heading: "development-considerations",
    content: "Call `pipDispose()` or `dispose()` promptly when leaving a channel, destroying the page, or when PiP is no longer needed, to avoid resource leaks."
  }, {
    heading: "development-considerations",
    content: "PiP must be triggered by explicit user action only, such as tapping a button or swiping up to the home screen. Triggering PiP programmatically without a user action may result in App Store review rejection."
  }, {
    heading: "development-considerations",
    content: "The PiP window is managed by the system and the SDK. Your app does not need to render a custom floating window."
  }, {
    heading: "development-considerations",
    content: "To display multiple video streams in PiP mode, configure the layout explicitly using `videoStreams` and `contentViewLayout`. When remote users join or leave, call `pipSetup()` again with the updated `videoStreams`; you do not need to call `pipDispose()` first."
  }, {
    heading: "development-considerations",
    content: "`AgoraPipOptions.controlStyle` supports four control styles. Style `2` is recommended for video call scenarios. Style `3` hides all controls, including the close and restore buttons."
  }, {
    heading: "development-considerations",
    content: "Call `pipDispose()` or `dispose()` promptly when leaving a channel, destroying the page, or when PiP is no longer needed, to avoid resource leaks."
  }, {
    heading: "reference",
    content: "This section includes links to related API reference and additional resources."
  }, {
    heading: "api-reference",
    content: "`AgoraPipController`"
  }, {
    heading: "api-reference",
    content: "`AgoraPipOptions`"
  }, {
    heading: "api-reference",
    content: "`AgoraPipContentViewLayout`"
  }, {
    heading: "api-reference",
    content: "`AgoraPipVideoStream`"
  }, {
    heading: "api-reference",
    content: "`pipIsSupported`"
  }, {
    heading: "api-reference",
    content: "`pipIsAutoEnterSupported`"
  }, {
    heading: "api-reference",
    content: "`pipSetup`"
  }, {
    heading: "api-reference",
    content: "`pipStart`"
  }, {
    heading: "api-reference",
    content: "`pipStop`"
  }, {
    heading: "api-reference",
    content: "`pipDispose`"
  }, {
    heading: "api-reference",
    content: "`registerPipStateChangedObserver`"
  }, {
    heading: "api-reference",
    content: "`AgoraPipStateChangedObserver`"
  }, {
    heading: "api-reference",
    content: "`AgoraPipState`"
  }, {
    heading: "api-reference",
    content: "`onPipStateChanged`"
  }, {
    heading: "sample-project",
    content: "Agora provides a sample project demonstrating Picture-in-Picture. Download or view the source code."
  }, {
    heading: "prerequisites-1",
    content: "Before implementing Picture-in-Picture, make sure you have the following:"
  }, {
    heading: "prerequisites-1",
    content: "RTC SDK for React Native v4.6.2 or later integrated into your project. See SDK quickstart."
  }, {
    heading: "prerequisites-1",
    content: "To use PiP, the target device must run one of the following:"
  }, {
    heading: "prerequisites-1",
    content: "Android 8.0 or later"
  }, {
    heading: "prerequisites-1",
    content: "iOS 15.0 or later"
  }, {
    heading: "set-up-your-project-1",
    content: "Before using PiP, complete the required configuration for each target platform."
  }, {
    heading: "set-up-your-project-1",
    content: "Declare that the current Activity supports PiP mode in your Android project:"
  }, {
    heading: "set-up-your-project-1",
    content: "Then, make `MainActivity` extend `AgoraPIPActivity`:"
  }, {
    heading: "set-up-your-project-1",
    content: "If you need audio or video capture and playback to continue after the app moves to the background or enters PiP, also complete the foreground service configuration. For the required permissions, manifest declarations, and integration steps, see Android background restrictions."
  }, {
    heading: "set-up-your-project-1",
    content: "The way PiP is triggered differs by Android version:"
  }, {
    heading: "set-up-your-project-1",
    content: "**Android 12 and later:** The system can automatically enter PiP when the user leaves the current screen in appropriate scenarios. You can combine this with `autoEnterEnabled`."
  }, {
    heading: "set-up-your-project-1",
    content: "**Earlier than Android 12:** The system does not support automatic PiP entry via `autoEnterEnabled`. You typically need to trigger PiP entry explicitly.\nWhen `MainActivity` extends `AgoraPIPActivity`, the SDK handles the relevant system callback adaptation."
  }, {
    heading: "set-up-your-project-1",
    content: "Add the background playback capability to your app in Xcode:"
  }, {
    heading: "set-up-your-project-1",
    content: "Open your target's **Signing & Capabilities** tab."
  }, {
    heading: "set-up-your-project-1",
    content: "Click **+ Capability**."
  }, {
    heading: "set-up-your-project-1",
    content: "Add **Background Modes**."
  }, {
    heading: "set-up-your-project-1",
    content: "Select **Audio, AirPlay, and Picture in Picture**."
  }, {
    heading: "set-up-your-project-1",
    content: "If your use case requires capturing local camera video in multi-tasking mode, contact support\\@agora.io for guidance on enabling iOS multi-tasking capture.\nThe React Native SDK does not directly expose the `multitaskingCameraAccessEnabled` configuration. If your use case requires local camera capture during PiP, additional native-side adaptation is needed."
  }, {
    heading: "implement-picture-in-picture-1",
    content: "Starting from RTC SDK v4.6.2, Agora provides the `AgoraPip` controller and related configuration options for enabling and managing PiP on Android and iOS. This section describes how to implement Picture-in-Picture in your React Native project."
  }, {
    heading: "get-the-pip-controller-and-register-a-listener-1",
    content: "After initializing the RTC engine, call `getAgoraPip` to get the PiP controller and register a state change listener:"
  }, {
    heading: "check-device-support-1",
    content: "Check whether the current device and system support the required capabilities:"
  }, {
    heading: "check-device-support-1",
    content: "`pipIsSupported` checks whether the current device supports PiP."
  }, {
    heading: "check-device-support-1",
    content: "`pipIsAutoEnterSupported` checks whether the current device and system support automatic PiP entry."
  }, {
    heading: "configure-pip-options-1",
    content: "Call `pipSetup` to configure PiP options. Use `AgoraPipOptions` to set platform-specific options for Android and iOS."
  }, {
    heading: "configure-pip-options-1",
    content: "Pass the measured bounds of the video view to `sourceRectHint` to improve the transition animation when entering PiP."
  }, {
    heading: "configure-pip-options-1",
    content: "On Android, you typically need to configure the aspect ratio, the initial source region, and seamless resize:"
  }, {
    heading: "configure-pip-options-1",
    content: "`useExternalStateMonitor` defaults to `true`. The example above keeps this value explicit for clarity. Only set it to `false` if you have already extended `AgoraPIPActivity` and explicitly do not want polling-based state synchronization."
  }, {
    heading: "configure-pip-options-1",
    content: "On iOS, you can configure the PiP window size, video stream layout, and system control style:"
  }, {
    heading: "configure-pip-options-1",
    content: "In this example:"
  }, {
    heading: "configure-pip-options-1",
    content: "When `contentView` is set to `0`, the SDK manages the native views inside the PiP window. If you pass a non-zero value, you are responsible for managing the native view layout."
  }, {
    heading: "configure-pip-options-1",
    content: "`videoStreams` defines the local and remote streams to display."
  }, {
    heading: "configure-pip-options-1",
    content: "`contentViewLayout` configures the grid layout for video streams inside the PiP window. Streams are arranged from left to right, then top to bottom."
  }, {
    heading: "configure-pip-options-1",
    content: "`controlStyle: 2` hides the play/pause button and progress bar, keeping only the essential window control buttons. This is recommended for real-time interactive scenarios."
  }, {
    heading: "configure-pip-options-1",
    content: "For standard React Native integrations, keep both `contentView` and `sourceContentView` set to `0`. This lets the SDK manage the native views, layout, and restore target inside the PiP window. Pass non-zero values only if you have already completed the corresponding native view integration."
  }, {
    heading: "listen-for-pip-state-changes-1",
    content: "Implement `AgoraPipStateChangedObserver` to listen for PiP state changes. Use the `AgoraPipState` value to update the UI or handle errors:"
  }, {
    heading: "listen-for-pip-state-changes-1",
    content: "`AgoraPipState` defines the following states:"
  }, {
    heading: "listen-for-pip-state-changes-1",
    content: "`pipStateStarted`: PiP has started successfully."
  }, {
    heading: "listen-for-pip-state-changes-1",
    content: "`pipStateStopped`: PiP has stopped."
  }, {
    heading: "listen-for-pip-state-changes-1",
    content: "`pipStateFailed`: PiP failed to start or encountered an error while running."
  }, {
    heading: "start-stop-and-destroy-pip",
    content: "PiP-related calls operate at two lifecycle levels:"
  }, {
    heading: "start-stop-and-destroy-pip",
    content: "**Session level:** `pipStart`, `pipStop`, and `pipDispose` control the start, stop, and resource release of a single PiP session."
  }, {
    heading: "start-stop-and-destroy-pip",
    content: "**Controller or page level:** `release` performs the final cleanup when the page or controller is no longer needed."
  }, {
    heading: "start-stop-and-destroy-pip",
    content: "After completing configuration, call `pipStart` to start PiP. Call `release` only when destroying the page or when the controller is no longer needed, to avoid redundant session-level calls during teardown."
  }, {
    heading: "start-stop-and-destroy-pip",
    content: "On Android, `pipStop` is not the standard path for exiting PiP and restoring the foreground page. If you no longer need the current PiP session, call `pipDispose` to release resources. Restoring full-screen view is typically handled by the user through the system PiP window controls."
  }, {
    heading: "start-stop-and-destroy-pip",
    content: "Call `pipStop` to stop PiP and restore the app interface, then call `pipDispose` to release the session resources. Call `release` only when destroying the page or when the controller is no longer needed."
  }, {
    heading: "development-considerations-1",
    content: "This section covers platform-specific behavior and best practices to keep in mind when integrating PiP."
  }, {
    heading: "development-considerations-1",
    content: "After entering PiP on Android, you typically need to update the app UI to match the PiP state."
  }, {
    heading: "development-considerations-1",
    content: "Android 12 and later support automatic PiP entry when the app moves to the background. On earlier versions, you must trigger PiP entry explicitly, for example by calling `pipStart` in response to a user action. Extending `AgoraPIPActivity` simplifies this adaptation."
  }, {
    heading: "development-considerations-1",
    content: "PiP does not bypass Android background restrictions. If you need to continue capturing or playing audio and video in the background, combine PiP with a foreground service. For details, see Android background restrictions."
  }, {
    heading: "development-considerations-1",
    content: "On Android, `pipStop` moves the task to the background rather than exiting PiP and restoring the foreground page. Full-screen restoration is typically handled by the user through the system PiP window controls."
  }, {
    heading: "development-considerations-1",
    content: "Distinguish between session-level and controller-level release: call `pipDispose` to end the current PiP session, and call `release` only when the page is destroyed or the controller is no longer needed."
  }, {
    heading: "development-considerations-1",
    content: "PiP must be triggered by explicit user action only, such as tapping a button or swiping up to the home screen. Triggering PiP programmatically without a user action may result in App Store review rejection."
  }, {
    heading: "development-considerations-1",
    content: "The PiP window is managed by the system and the SDK. Your app does not need to render a custom floating window."
  }, {
    heading: "development-considerations-1",
    content: "To display multiple video streams in PiP mode, configure the layout explicitly using `videoStreams` and `contentViewLayout`. When remote users join or leave, call `pipSetup` again with the updated `videoStreams`. You do not need to call `pipDispose` first."
  }, {
    heading: "development-considerations-1",
    content: "`AgoraPipOptions.controlStyle` accepts values `0` to `3`. Use `2` for video call scenarios, which hides the play/pause button and progress bar. Style `3` hides all controls, including the close and restore buttons."
  }, {
    heading: "development-considerations-1",
    content: "Distinguish between session-level and controller-level release: call `pipStop` and `pipDispose` to end the current PiP session, and call `release` only when the page is destroyed or the controller is no longer needed."
  }, {
    heading: "reference-1",
    content: "This section includes links to related API reference and additional resources."
  }, {
    heading: "api-reference-1",
    content: "`AgoraPip`"
  }, {
    heading: "api-reference-1",
    content: "`AgoraPipOptions`"
  }, {
    heading: "api-reference-1",
    content: "`AgoraPipContentViewLayout`"
  }, {
    heading: "api-reference-1",
    content: "`AgoraPipVideoStream`"
  }, {
    heading: "api-reference-1",
    content: "`pipIsSupported`"
  }, {
    heading: "api-reference-1",
    content: "`pipIsAutoEnterSupported`"
  }, {
    heading: "api-reference-1",
    content: "`pipSetup`"
  }, {
    heading: "api-reference-1",
    content: "`pipStart`"
  }, {
    heading: "api-reference-1",
    content: "`pipStop`"
  }, {
    heading: "api-reference-1",
    content: "`pipDispose`"
  }, {
    heading: "api-reference-1",
    content: "`registerPipStateChangedObserver`"
  }, {
    heading: "api-reference-1",
    content: "`AgoraPipStateChangedObserver`"
  }, {
    heading: "api-reference-1",
    content: "`AgoraPipState`"
  }, {
    heading: "api-reference-1",
    content: "`onPipStateChanged`"
  }, {
    heading: "sample-project-1",
    content: "Agora provides a sample project demonstrating Picture-in-Picture. Download or view the source code."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "set-up-your-project",
    content: "Set up your project"
  }, {
    id: "implement-picture-in-picture",
    content: "Implement Picture-in-Picture"
  }, {
    id: "get-the-pip-controller-and-register-a-listener",
    content: "Get the PiP controller and register a listener"
  }, {
    id: "check-device-support",
    content: "Check device support"
  }, {
    id: "configure-pip-options",
    content: "Configure PiP options"
  }, {
    id: "listen-for-pip-state-changes",
    content: "Listen for PiP state changes"
  }, {
    id: "start-stop-and-release-pip",
    content: "Start, stop, and release PiP"
  }, {
    id: "development-considerations",
    content: "Development considerations"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "sample-project",
    content: "Sample project"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "set-up-your-project-1",
    content: "Set up your project"
  }, {
    id: "implement-picture-in-picture-1",
    content: "Implement Picture-in-Picture"
  }, {
    id: "get-the-pip-controller-and-register-a-listener-1",
    content: "Get the PiP controller and register a listener"
  }, {
    id: "check-device-support-1",
    content: "Check device support"
  }, {
    id: "configure-pip-options-1",
    content: "Configure PiP options"
  }, {
    id: "listen-for-pip-state-changes-1",
    content: "Listen for PiP state changes"
  }, {
    id: "start-stop-and-destroy-pip",
    content: "Start, stop, and destroy PiP"
  }, {
    id: "development-considerations-1",
    content: "Development considerations"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "api-reference-1",
    content: "API reference"
  }, {
    id: "sample-project-1",
    content: "Sample project"
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
  url: "#set-up-your-project",
  title: _jsx(_Fragment, {
    children: "Set up your project"
  })
}, {
  depth: 2,
  url: "#implement-picture-in-picture",
  title: _jsx(_Fragment, {
    children: "Implement Picture-in-Picture"
  })
}, {
  depth: 3,
  url: "#get-the-pip-controller-and-register-a-listener",
  title: _jsx(_Fragment, {
    children: "Get the PiP controller and register a listener"
  })
}, {
  depth: 3,
  url: "#check-device-support",
  title: _jsx(_Fragment, {
    children: "Check device support"
  })
}, {
  depth: 3,
  url: "#configure-pip-options",
  title: _jsx(_Fragment, {
    children: "Configure PiP options"
  })
}, {
  depth: 3,
  url: "#listen-for-pip-state-changes",
  title: _jsx(_Fragment, {
    children: "Listen for PiP state changes"
  })
}, {
  depth: 3,
  url: "#start-stop-and-release-pip",
  title: _jsx(_Fragment, {
    children: "Start, stop, and release PiP"
  })
}, {
  depth: 3,
  url: "#development-considerations",
  title: _jsx(_Fragment, {
    children: "Development considerations"
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
  depth: 3,
  url: "#sample-project",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 2,
  url: "#prerequisites-1",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#set-up-your-project-1",
  title: _jsx(_Fragment, {
    children: "Set up your project"
  })
}, {
  depth: 2,
  url: "#implement-picture-in-picture-1",
  title: _jsx(_Fragment, {
    children: "Implement Picture-in-Picture"
  })
}, {
  depth: 3,
  url: "#get-the-pip-controller-and-register-a-listener-1",
  title: _jsx(_Fragment, {
    children: "Get the PiP controller and register a listener"
  })
}, {
  depth: 3,
  url: "#check-device-support-1",
  title: _jsx(_Fragment, {
    children: "Check device support"
  })
}, {
  depth: 3,
  url: "#configure-pip-options-1",
  title: _jsx(_Fragment, {
    children: "Configure PiP options"
  })
}, {
  depth: 3,
  url: "#listen-for-pip-state-changes-1",
  title: _jsx(_Fragment, {
    children: "Listen for PiP state changes"
  })
}, {
  depth: 3,
  url: "#start-stop-and-destroy-pip",
  title: _jsx(_Fragment, {
    children: "Start, stop, and destroy PiP"
  })
}, {
  depth: 3,
  url: "#development-considerations-1",
  title: _jsx(_Fragment, {
    children: "Development considerations"
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
  depth: 3,
  url: "#sample-project-1",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle, Tabs, TabsContent, TabsList, TabsTrigger, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
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
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "When your application moves to the background or the user switches to another app, the Picture-in-Picture (PiP) feature in RTC SDK keeps the current video visible as a floating overlay window on screen. This lets users multitask without interrupting an ongoing call or viewing session, improving the multitasking experience and user retention."
    }), `
`, _jsx(_components.p, {
      children: "PiP is useful in the following scenarios:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Use case"
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
            children: "Video calling"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Keeps the call visible when the user switches apps or returns to the home screen. Useful for social calls, remote meetings, and online customer service."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Online education"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Lets students watch a teacher's video explanation while reviewing study materials, taking notes, or using other apps."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Interactive live streaming"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Lets viewers browse products, chat, or use other apps while the stream continues in the background. Useful for e-commerce and content live streaming."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Screen sharing"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Keeps shared content visible when the user switches apps during remote collaboration or a presentation. Useful for remote work, technical support, and product demos."
          })]
        })]
      })]
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "flutter",
      platforms: '["flutter","react-native"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "flutter",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "flutter",
          platform: "flutter"
        }), _jsx(_components.h2, {
          id: "prerequisites",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Before implementing Picture-in-Picture, make sure you have the following:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Flutter 3.7.0 or later"
          }), `
`, _jsxs(_components.li, {
            children: ["RTC SDK for Flutter ", _jsx(_components.a, {
              href: "../../reference/release-notes",
              children: "v6.6.2"
            }), " or later integrated into your project. See ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["To use PiP, the target device must run one of the following:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Android 8.0 or later"
              }), `
`, _jsx(_components.li, {
                children: "iOS 15.0 or later"
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "set-up-your-project",
          children: "Set up your project"
        }), _jsx(_components.p, {
          children: "Before using PiP, complete the required configuration for each target platform."
        }), _jsxs(Tabs, {
          defaultValue: "android",
          groupId: "flutter-pip-platform",
          persist: true,
          children: [_jsxs(TabsList, {
            children: [_jsx(TabsTrigger, {
              value: "android",
              children: "Android"
            }), _jsx(TabsTrigger, {
              value: "ios",
              children: "iOS"
            })]
          }), _jsxs(TabsContent, {
            value: "android",
            children: [_jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["In ", _jsx(_components.code, {
                    children: "AndroidManifest.xml"
                  }), ", declare that the current Activity supports PiP mode:"]
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
                          children: "<"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#22863A",
                            "--shiki-dark": "#85E89D"
                          },
                          children: "activity"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "    android:name"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "="
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: '".MainActivity"'
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "    android:supportsPictureInPicture"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "="
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: '"true"'
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "    android:configChanges"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "="
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: '"screenSize|smallestScreenSize|screenLayout|orientation|uiMode"'
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "    android:exported"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "="
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: '"true"'
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "    android:launchMode"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "="
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: '"singleTop"'
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ">"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "</"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#22863A",
                            "--shiki-dark": "#85E89D"
                          },
                          children: "activity"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ">"
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
                  children: ["Make ", _jsx(_components.code, {
                    children: "MainActivity"
                  }), " extend ", _jsx(_components.code, {
                    children: "AgoraPIPFlutterActivity"
                  }), " or ", _jsx(_components.code, {
                    children: "AgoraPIPFlutterFragmentActivity"
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
                    icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "import"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " io.agora.agora_rtc_ng.AgoraPIPFlutterActivity"
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
                          children: "class"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: " MainActivity"
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
                          children: "AgoraPIPFlutterActivity"
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
                }), `
`]
              }), `
`]
            }), _jsx(_components.p, {
              children: "How PiP is triggered differs by Android version:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Android 12 and later:"
                }), " The system can automatically enter PiP when the user leaves the current screen in appropriate scenarios. You can use this with ", _jsx(_components.code, {
                  children: "autoEnterEnabled"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Earlier than Android 12:"
                }), " Automatic PiP entry via ", _jsx(_components.code, {
                  children: "autoEnterEnabled"
                }), " is not supported. You must trigger PiP entry explicitly, for example by calling ", _jsx(_components.code, {
                  children: "pipStart()"
                }), " in response to a user action."]
              }), `
`]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["When ", _jsx(_components.code, {
                    children: "MainActivity"
                  }), " extends ", _jsx(_components.code, {
                    children: "AgoraPIPFlutterActivity"
                  }), " or ", _jsx(_components.code, {
                    children: "AgoraPIPFlutterFragmentActivity"
                  }), ", the SDK automatically handles the ", _jsx(_components.code, {
                    children: "onPictureInPictureModeChanged"
                  }), " and ", _jsx(_components.code, {
                    children: "onUserLeaveHint"
                  }), " Activity callbacks required for PiP."]
                })
              })
            })]
          }), _jsxs(TabsContent, {
            value: "ios",
            children: [_jsx(_components.p, {
              children: "In Xcode, add the Background Modes capability to your app:"
            }), _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Open your target's ", _jsx(_components.strong, {
                  children: "Signing & Capabilities"
                }), " tab."]
              }), `
`, _jsxs(_components.li, {
                children: ["Click ", _jsx(_components.strong, {
                  children: "+ Capability"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["Select ", _jsx(_components.strong, {
                  children: "Background Modes"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["Check ", _jsx(_components.strong, {
                  children: "Audio, AirPlay, and Picture in Picture"
                }), "."]
              }), `
`]
            }), _jsxs(CalloutContainer, {
              type: "info",
              children: [_jsx(CalloutTitle, {
                children: "Information"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["If your use case requires capturing local camera video in multitasking mode, contact ", _jsx(_components.a, {
                    href: "mailto:support@agora.io",
                    children: "support@agora.io"
                  }), " for guidance on enabling iOS multitasking capture."]
                })
              })]
            })]
          })]
        }), _jsx(_components.h2, {
          id: "implement-picture-in-picture",
          children: "Implement Picture-in-Picture"
        }), _jsxs(_components.p, {
          children: ["Starting from RTC SDK ", _jsx(_components.a, {
            href: "../../reference/release-notes",
            children: "v6.6.2"
          }), ", Agora provides the ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapip.html",
            children: _jsx(_components.code, {
              children: "AgoraPipController"
            })
          }), " and related configuration options for enabling and managing PiP on Android and iOS. This section describes how to implement PiP in your Flutter project."]
        }), _jsx(_components.h3, {
          id: "get-the-pip-controller-and-register-a-listener",
          children: "Get the PiP controller and register a listener"
        }), _jsxs(_components.p, {
          children: ["After initializing the RTC engine, call ", _jsx(_components.code, {
            children: "createPipController()"
          }), " to create a PiP controller, then register a state change listener:"]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "late"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " final"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " RtcEngine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " _engine;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "late"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " final"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " AgoraPipController"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " _pip;"
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
                  children: "_engine "
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
                  children: "initialize"
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
                  children: "RtcEngineContext"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(appId"
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
                  children: " appId));"
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
                  children: "_pip "
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
                  children: " _engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "createPipController"
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
                  children: "await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " _pip."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "registerPipStateChangedObserver"
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
                  children: "  AgoraPipStateChangedObserver"
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
                  children: "    onPipStateChanged"
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
                  children: " (state, error) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "      debugPrint"
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
                  children: "'[PiP] state="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "$"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "state"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " error="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "$"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "error"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'"
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
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "check-device-support",
          children: "Check device support"
        }), _jsx(_components.p, {
          children: "Check whether the current device and system support the required capabilities:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
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
                  children: " pipSupported "
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
                  children: " _pip."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "pipIsSupported"
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
                  children: "final"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " pipAutoEnterSupported "
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
                  children: " _pip."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "pipIsAutoEnterSupported"
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
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "pipIsSupported()"
            }), " checks whether the current device supports PiP."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "pipIsAutoEnterSupported()"
            }), " checks whether the current device and system support automatic PiP entry."]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "configure-pip-options",
          children: "Configure PiP options"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "pipSetup()"
          }), " to configure PiP options. Use ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapipoptions.html",
            children: _jsx(_components.code, {
              children: "AgoraPipOptions"
            })
          }), " to set platform-specific options for Android and iOS."]
        }), _jsxs(Tabs, {
          defaultValue: "android",
          groupId: "flutter-pip-platform",
          persist: true,
          children: [_jsxs(TabsList, {
            children: [_jsx(TabsTrigger, {
              value: "android",
              children: "Android"
            }), _jsx(TabsTrigger, {
              value: "ios",
              children: "iOS"
            })]
          }), _jsxs(TabsContent, {
            value: "android",
            children: [_jsx(_components.p, {
              children: "On Android, you typically need to configure the aspect ratio, the initial source region, and seamless resize:"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: " AgoraPipOptions"
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
                      children: "  autoEnterEnabled"
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
                      children: " pipAutoEnterSupported,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  aspectRatioX"
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
                      children: " 16"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: "  aspectRatioY"
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
                      children: " 9"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: "  sourceRectHintLeft"
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
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: "  sourceRectHintTop"
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
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: "  sourceRectHintRight"
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
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: "  sourceRectHintBottom"
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
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: "  seamlessResizeEnabled"
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
                      children: "  useExternalStateMonitor"
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
                      children: " false"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: "  externalStateMonitorInterval"
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
                      children: " 100"
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
                      children: ");"
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
                      children: "await"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " _pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipSetup"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(options);"
                    })]
                  })]
                })
              })
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["If your ", _jsx(_components.code, {
                    children: "MainActivity"
                  }), " is configured for PiP as described, but PiP state callbacks are unreliable on certain devices or in certain scenarios, set ", _jsx(_components.code, {
                    children: "useExternalStateMonitor"
                  }), " to ", _jsx(_components.code, {
                    children: "true"
                  }), " and configure the polling interval using ", _jsx(_components.code, {
                    children: "externalStateMonitorInterval"
                  }), " to supplement PiP state synchronization."]
                })
              })
            })]
          }), _jsxs(TabsContent, {
            value: "ios",
            children: [_jsx(_components.p, {
              children: "On iOS, you can configure the PiP window size, video stream layout, and system control style:"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: " AgoraPipOptions"
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
                      children: "  preferredContentWidth"
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
                      children: " 960"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: "  preferredContentHeight"
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
                      children: " 540"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: "  sourceContentView"
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
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: "  contentView"
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
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: "  contentViewLayout"
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
                      children: " AgoraPipContentViewLayout"
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
                      children: "    padding"
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
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: "    spacing"
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
                      children: " 2"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: "    row"
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
                      children: " 1"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: "    column"
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
                      children: " 2"
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
                      children: "  ),"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  videoStreams"
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
                      children: " ["
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "    AgoraPipVideoStream"
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
                      children: "      connection"
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
                      children: "        channelId"
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
                      children: " channelId,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        localUid"
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
                      children: " localUid,"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      ),"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      canvas"
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
                      children: " VideoCanvas"
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
                      children: "        uid"
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
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: "        sourceType"
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
                      children: ".videoSourceCamera,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        setupMode"
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
                      children: ".videoViewSetupAdd,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        renderMode"
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
                      children: ".renderModeHidden,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        mirrorMode"
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
                      children: " VideoMirrorModeType"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".videoMirrorModeEnabled,"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      ),"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    ),"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    ...remoteUsers.entries."
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
                      children: "      (entry) "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "=>"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " AgoraPipVideoStream"
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
                      children: "        connection"
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
                      children: " entry.value,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        canvas"
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
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "          uid"
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
                      children: " entry.key,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "          sourceType"
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
                      children: ".videoSourceRemote,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "          setupMode"
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
                      children: ".videoViewSetupAdd,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "          renderMode"
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
                      children: ".renderModeHidden,"
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
                      children: "      ),"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    ),"
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  controlStyle"
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
                      children: " 2"
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
                      children: ");"
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
                      children: "await"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " _pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipSetup"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(options);"
                    })]
                  })]
                })
              })
            }), _jsx(_components.p, {
              children: "In this example:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["When ", _jsx(_components.code, {
                  children: "contentView"
                }), " is set to ", _jsx(_components.code, {
                  children: "0"
                }), ", the SDK manages the native views inside the PiP window. If you pass a non-zero value, you are responsible for managing the native view layout."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "videoStreams"
                }), " defines the local and remote streams to display."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "contentViewLayout"
                }), " configures the grid layout for video streams inside the PiP window. Streams are arranged from left to right, then top to bottom."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "controlStyle: 2"
                }), " hides the play/pause button and progress bar, keeping only the essential window control buttons. This is recommended for real-time interactive scenarios."]
              }), `
`]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "listen-for-pip-state-changes",
          children: "Listen for PiP state changes"
        }), _jsxs(_components.p, {
          children: ["Implement ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapipstatechangedobserver.html",
            children: _jsx(_components.code, {
              children: "AgoraPipStateChangedObserver"
            })
          }), " to listen for PiP state changes. Use the ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/enum_agorapipstate.html",
            children: _jsx(_components.code, {
              children: "AgoraPipState"
            })
          }), " value to update the UI or handle errors:"]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
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
                  children: " _pip."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "registerPipStateChangedObserver"
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
                  children: "  AgoraPipStateChangedObserver"
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
                  children: "    onPipStateChanged"
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
                  children: " (state, error) "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "      if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (state "
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
                  children: " AgoraPipState"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".pipStateFailed) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " _pip."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "pipDispose"
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
              })]
            })
          })
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "AgoraPipState"
          }), " defines the following states:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "pipStateStarted"
            }), ": PiP has started successfully."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "pipStateStopped"
            }), ": PiP has stopped."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "pipStateFailed"
            }), ": PiP failed to start or encountered an error while running."]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "start-stop-and-release-pip",
          children: "Start, stop, and release PiP"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "pipStart()"
          }), " to start PiP. The recommended approach for stopping and releasing PiP differs by platform:"]
        }), _jsxs(Tabs, {
          defaultValue: "android",
          groupId: "flutter-pip-platform",
          persist: true,
          children: [_jsxs(TabsList, {
            children: [_jsx(TabsTrigger, {
              value: "android",
              children: "Android"
            }), _jsx(TabsTrigger, {
              value: "ios",
              children: "iOS"
            })]
          }), _jsxs(TabsContent, {
            value: "android",
            children: [_jsx(_Fragment, {
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
                      children: "// Start PiP"
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
                      children: " _pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipStart"
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
                      children: "// Release the current PiP session"
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
                      children: " _pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipDispose"
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
                      children: "// Destroy the controller"
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
                      children: " _pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "dispose"
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
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["On Android, ", _jsx(_components.code, {
                    children: "pipStop()"
                  }), " is not the standard path for exiting PiP and restoring the foreground page. If you no longer need the current PiP session, call ", _jsx(_components.code, {
                    children: "pipDispose()"
                  }), " to release resources. Restoring full-screen view is typically handled by the user through the system PiP window controls."]
                })
              })
            })]
          }), _jsxs(TabsContent, {
            value: "ios",
            children: [_jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "pipStop()"
              }), " to stop PiP and restore the app interface. If the page is about to be destroyed or you no longer need PiP, call ", _jsx(_components.code, {
                children: "pipDispose()"
              }), " and ", _jsx(_components.code, {
                children: "dispose()"
              }), " to release resources."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Start PiP"
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
                      children: " _pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipStart"
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
                      children: "// Stop PiP and restore the app interface"
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
                      children: " _pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipStop"
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
                      children: "// Release the current PiP session"
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
                      children: " _pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipDispose"
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
                      children: "// Destroy the controller"
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
                      children: " _pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "dispose"
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
            })]
          })]
        }), _jsx(_components.h3, {
          id: "development-considerations",
          children: "Development considerations"
        }), _jsx(_components.p, {
          children: "This section covers platform-specific behavior and best practices to keep in mind when integrating PiP."
        }), _jsxs(Tabs, {
          defaultValue: "android",
          groupId: "flutter-pip-platform",
          persist: true,
          children: [_jsxs(TabsList, {
            children: [_jsx(TabsTrigger, {
              value: "android",
              children: "Android"
            }), _jsx(TabsTrigger, {
              value: "ios",
              children: "iOS"
            })]
          }), _jsx(TabsContent, {
            value: "android",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "After entering PiP on Android, you typically need to update the app UI to match the PiP state. Many apps show only the video area while PiP is active."
              }), `
`, _jsxs(_components.li, {
                children: ["Android 12 and later support automatic PiP entry when the app moves to the background. On earlier versions, you must trigger PiP entry explicitly, for example by calling ", _jsx(_components.code, {
                  children: "pipStart()"
                }), " in response to a user action."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "pipStart()"
                }), " does not guarantee success in all timing scenarios. Calling it when the app moves to the background is generally more reliable."]
              }), `
`, _jsxs(_components.li, {
                children: ["PiP does not bypass Android background restrictions. If you need to continue capturing or playing audio and video in the background, combine PiP with a foreground service. For details, see ", _jsx(_components.a, {
                  href: "/en/api-reference/faq/quality/android_background",
                  children: "Android background restrictions"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["On Android, ", _jsx(_components.code, {
                  children: "pipStop()"
                }), " moves the task to the background rather than exiting PiP and restoring the foreground page. Full-screen restoration is typically handled by the user through the system PiP window controls."]
              }), `
`, _jsxs(_components.li, {
                children: ["Call ", _jsx(_components.code, {
                  children: "pipDispose()"
                }), " or ", _jsx(_components.code, {
                  children: "dispose()"
                }), " promptly when leaving a channel, destroying the page, or when PiP is no longer needed, to avoid resource leaks."]
              }), `
`]
            })
          }), _jsx(TabsContent, {
            value: "ios",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "PiP must be triggered by explicit user action only, such as tapping a button or swiping up to the home screen. Triggering PiP programmatically without a user action may result in App Store review rejection."
              }), `
`, _jsx(_components.li, {
                children: "The PiP window is managed by the system and the SDK. Your app does not need to render a custom floating window."
              }), `
`, _jsxs(_components.li, {
                children: ["To display multiple video streams in PiP mode, configure the layout explicitly using ", _jsx(_components.code, {
                  children: "videoStreams"
                }), " and ", _jsx(_components.code, {
                  children: "contentViewLayout"
                }), ". When remote users join or leave, call ", _jsx(_components.code, {
                  children: "pipSetup()"
                }), " again with the updated ", _jsx(_components.code, {
                  children: "videoStreams"
                }), "; you do not need to call ", _jsx(_components.code, {
                  children: "pipDispose()"
                }), " first."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapipoptions.html",
                  children: _jsx(_components.code, {
                    children: "AgoraPipOptions.controlStyle"
                  })
                }), " supports four control styles. Style ", _jsx(_components.code, {
                  children: "2"
                }), " is recommended for video call scenarios. Style ", _jsx(_components.code, {
                  children: "3"
                }), " hides all controls, including the close and restore buttons."]
              }), `
`, _jsxs(_components.li, {
                children: ["Call ", _jsx(_components.code, {
                  children: "pipDispose()"
                }), " or ", _jsx(_components.code, {
                  children: "dispose()"
                }), " promptly when leaving a channel, destroying the page, or when PiP is no longer needed, to avoid resource leaks."]
              }), `
`]
            })
          })]
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section includes links to related API reference and additional resources."
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapip.html",
              children: _jsx(_components.code, {
                children: "AgoraPipController"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapipoptions.html",
              children: _jsx(_components.code, {
                children: "AgoraPipOptions"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapipcontentviewlayout.html",
              children: _jsx(_components.code, {
                children: "AgoraPipContentViewLayout"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapipvideostream.html",
              children: _jsx(_components.code, {
                children: "AgoraPipVideoStream"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/api_agorapip_pipissupported.html",
              children: _jsx(_components.code, {
                children: "pipIsSupported"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/api_agorapip_pipisautoentersupported.html",
              children: _jsx(_components.code, {
                children: "pipIsAutoEnterSupported"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/api_agorapip_pipsetup.html",
              children: _jsx(_components.code, {
                children: "pipSetup"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/api_agorapip_pipstart.html",
              children: _jsx(_components.code, {
                children: "pipStart"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/api_agorapip_pipstop.html",
              children: _jsx(_components.code, {
                children: "pipStop"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/api_agorapip_pipdispose.html",
              children: _jsx(_components.code, {
                children: "pipDispose"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/api_agorapip_registerpipstatechangedobserver.html",
              children: _jsx(_components.code, {
                children: "registerPipStateChangedObserver"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_agorapipstatechangedobserver.html",
              children: _jsx(_components.code, {
                children: "AgoraPipStateChangedObserver"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/enum_agorapipstate.html",
              children: _jsx(_components.code, {
                children: "AgoraPipState"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/callback_agorapipstatechangedobserver_onpipstatechanged.html",
              children: _jsx(_components.code, {
                children: "onPipStateChanged"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-project",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides a ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Agora-Flutter-SDK/blob/main/example/lib/examples/advanced/picture_in_picture/picture_in_picture.dart",
            children: "sample project"
          }), " demonstrating Picture-in-Picture. Download or view the source code."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "react-native",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "flutter",
          platform: "react-native"
        }), _jsx(_components.h2, {
          id: "prerequisites-1",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Before implementing Picture-in-Picture, make sure you have the following:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["RTC SDK for React Native ", _jsx(_components.a, {
                href: "../../reference/release-notes",
                children: "v4.6.2"
              }), " or later integrated into your project. See ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/get-started-sdk",
                children: "SDK quickstart"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "To use PiP, the target device must run one of the following:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Android 8.0 or later"
              }), `
`, _jsx(_components.li, {
                children: "iOS 15.0 or later"
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "set-up-your-project-1",
          children: "Set up your project"
        }), _jsx(_components.p, {
          children: "Before using PiP, complete the required configuration for each target platform."
        }), _jsxs(Tabs, {
          defaultValue: "android",
          groupId: "react-native-host-os",
          persist: true,
          children: [_jsxs(TabsList, {
            children: [_jsx(TabsTrigger, {
              value: "android",
              children: "Android"
            }), _jsx(TabsTrigger, {
              value: "ios",
              children: "iOS"
            })]
          }), _jsxs(TabsContent, {
            value: "android",
            children: [_jsx(_components.p, {
              children: "Declare that the current Activity supports PiP mode in your Android project:"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
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
                        "--shiki-light": "#22863A",
                        "--shiki-dark": "#85E89D"
                      },
                      children: "activity"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " android:name"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '".MainActivity"'
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " android:supportsPictureInPicture"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"true"'
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " android:configChanges"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"screenSize|smallestScreenSize|screenLayout|orientation"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " />"
                    })]
                  })]
                })
              })
            }), _jsxs(_components.p, {
              children: ["Then, make ", _jsx(_components.code, {
                children: "MainActivity"
              }), " extend ", _jsx(_components.code, {
                children: "AgoraPIPActivity"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "import"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " io.agora.rtc.ng.react.AgoraPIPActivity"
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
                      children: "class"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " MainActivity"
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
                      children: "AgoraPIPActivity"
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
                      children: "}"
                    })
                  })]
                })
              })
            }), _jsxs(_components.p, {
              children: ["If you need audio or video capture and playback to continue after the app moves to the background or enters PiP, also complete the foreground service configuration. For the required permissions, manifest declarations, and integration steps, see ", _jsx(_components.a, {
                href: "/en/api-reference/faq/quality/android_background",
                children: "Android background restrictions"
              }), "."]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsxs(CalloutDescription, {
                children: [_jsx(_components.p, {
                  children: "The way PiP is triggered differs by Android version:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.strong, {
                      children: "Android 12 and later:"
                    }), " The system can automatically enter PiP when the user leaves the current screen in appropriate scenarios. You can combine this with ", _jsx(_components.code, {
                      children: "autoEnterEnabled"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.strong, {
                      children: "Earlier than Android 12:"
                    }), " The system does not support automatic PiP entry via ", _jsx(_components.code, {
                      children: "autoEnterEnabled"
                    }), `. You typically need to trigger PiP entry explicitly.
When `, _jsx(_components.code, {
                      children: "MainActivity"
                    }), " extends ", _jsx(_components.code, {
                      children: "AgoraPIPActivity"
                    }), ", the SDK handles the relevant system callback adaptation."]
                  }), `
`]
                })]
              })
            })]
          }), _jsxs(TabsContent, {
            value: "ios",
            children: [_jsx(_components.p, {
              children: "Add the background playback capability to your app in Xcode:"
            }), _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Open your target's ", _jsx(_components.strong, {
                    children: "Signing & Capabilities"
                  }), " tab."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Click ", _jsx(_components.strong, {
                    children: "+ Capability"
                  }), "."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Add ", _jsx(_components.strong, {
                    children: "Background Modes"
                  }), "."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Select ", _jsx(_components.strong, {
                    children: "Audio, AirPlay, and Picture in Picture"
                  }), "."]
                }), `
`, _jsx(CalloutContainer, {
                  type: "info",
                  children: _jsx(CalloutDescription, {
                    children: _jsxs(_components.p, {
                      children: ["If your use case requires capturing local camera video in multi-tasking mode, contact ", _jsx(_components.a, {
                        href: "mailto:support@agora.io",
                        children: "support@agora.io"
                      }), ` for guidance on enabling iOS multi-tasking capture.
The React Native SDK does not directly expose the `, _jsx(_components.code, {
                        children: "multitaskingCameraAccessEnabled"
                      }), " configuration. If your use case requires local camera capture during PiP, additional native-side adaptation is needed."]
                    })
                  })
                }), `
`]
              }), `
`]
            })]
          })]
        }), _jsx(_components.h2, {
          id: "implement-picture-in-picture-1",
          children: "Implement Picture-in-Picture"
        }), _jsxs(_components.p, {
          children: ["Starting from RTC SDK ", _jsx(_components.a, {
            href: "../../reference/release-notes",
            children: "v4.6.2"
          }), ", Agora provides the ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapip.html",
            children: _jsx(_components.code, {
              children: "AgoraPip"
            })
          }), " controller and related configuration options for enabling and managing PiP on Android and iOS. This section describes how to implement Picture-in-Picture in your React Native project."]
        }), _jsx(_components.h3, {
          id: "get-the-pip-controller-and-register-a-listener-1",
          children: "Get the PiP controller and register a listener"
        }), _jsxs(_components.p, {
          children: ["After initializing the RTC engine, call ", _jsx(_components.code, {
            children: "getAgoraPip"
          }), " to get the PiP controller and register a state change listener:"]
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
              children: [_jsxs(_components.span, {
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
                  children: ".engine "
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
                  children: ".engine."
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
                  children: " appId,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " channelProfile: ChannelProfileType.ChannelProfileLiveBroadcasting,"
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
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " "
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
                  children: " pip"
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
                  children: " this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getAgoraPip"
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
                  children: "pip."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "registerPipStateChangedObserver"
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
                  children: ");"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "check-device-support-1",
          children: "Check device support"
        }), _jsx(_components.p, {
          children: "Check whether the current device and system support the required capabilities:"
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
                  children: " isPipSupported"
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
                  children: " pip."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "pipIsSupported"
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
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " isPipAutoEnterSupported"
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
                  children: " pip."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "pipIsAutoEnterSupported"
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
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "pipIsSupported"
            }), " checks whether the current device supports PiP."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "pipIsAutoEnterSupported"
            }), " checks whether the current device and system support automatic PiP entry."]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "configure-pip-options-1",
          children: "Configure PiP options"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "pipSetup"
          }), " to configure PiP options. Use ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapipoptions.html",
            children: _jsx(_components.code, {
              children: "AgoraPipOptions"
            })
          }), " to set platform-specific options for Android and iOS."]
        }), _jsxs(Tabs, {
          defaultValue: "android",
          groupId: "react-native-host-os",
          persist: true,
          children: [_jsxs(TabsList, {
            children: [_jsx(TabsTrigger, {
              value: "android",
              children: "Android"
            }), _jsx(TabsTrigger, {
              value: "ios",
              children: "iOS"
            })]
          }), _jsxs(TabsContent, {
            value: "android",
            children: [_jsxs(_components.p, {
              children: ["Pass the measured bounds of the video view to ", _jsx(_components.code, {
                children: "sourceRectHint"
              }), " to improve the transition animation when entering PiP."]
            }), _jsx(_components.p, {
              children: "On Android, you typically need to configure the aspect ratio, the initial source region, and seamless resize:"
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
                      children: " videoViewBounds"
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
                      children: " {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " left: measuredLeft,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " top: measuredTop,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " right: measuredRight,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " bottom: measuredBottom,"
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
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " options"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " AgoraPipOptions"
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
                      children: " autoEnterEnabled: pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipIsAutoEnterSupported"
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " aspectRatioX: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "960"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: " aspectRatioY: "
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " sourceRectHintLeft: videoViewBounds.left,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " sourceRectHintTop: videoViewBounds.top,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " sourceRectHintRight: videoViewBounds.right,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " sourceRectHintBottom: videoViewBounds.bottom,"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " seamlessResizeEnabled: "
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " useExternalStateMonitor: "
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " externalStateMonitorInterval: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "100"
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
                      children: "};"
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
                      children: "pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipSetup"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(options);"
                    })]
                  })]
                })
              })
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "useExternalStateMonitor"
                  }), " defaults to ", _jsx(_components.code, {
                    children: "true"
                  }), ". The example above keeps this value explicit for clarity. Only set it to ", _jsx(_components.code, {
                    children: "false"
                  }), " if you have already extended ", _jsx(_components.code, {
                    children: "AgoraPIPActivity"
                  }), " and explicitly do not want polling-based state synchronization."]
                })
              })
            })]
          }), _jsxs(TabsContent, {
            value: "ios",
            children: [_jsx(_components.p, {
              children: "On iOS, you can configure the PiP window size, video stream layout, and system control style:"
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
                      children: " options"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " AgoraPipOptions"
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
                      children: " autoEnterEnabled: pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipIsAutoEnterSupported"
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " preferredContentWidth: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "960"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
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
                      children: " preferredContentHeight: "
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " contentView: "
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " sourceContentView: "
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " contentViewLayout: {"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  padding: "
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  spacing: "
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  row: "
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  column: "
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " },"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " videoStreams: ["
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "   connection: {"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    channelId,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    localUid: uid,"
                    })
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "   canvas: {"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    sourceType: VideoSourceType.VideoSourceCamera,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    setupMode: VideoViewSetupMode.VideoViewSetupAdd,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    renderMode: RenderModeType.RenderModeHidden,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    mirrorMode: VideoMirrorModeType.VideoMirrorModeEnabled,"
                    })
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
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  ..."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "remoteUsers."
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
                      children: "(("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "userUid"
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
                      children: " ({"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "   connection: {"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    channelId,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    localUid: userUid,"
                    })
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "   canvas: {"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    uid: userUid,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    sourceType: VideoSourceType.VideoSourceRemote,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    setupMode: VideoViewSetupMode.VideoViewSetupAdd,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    renderMode: RenderModeType.RenderModeHidden,"
                    })
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  })),"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ],"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " controlStyle: "
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "};"
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
                      children: "pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipSetup"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(options);"
                    })]
                  })]
                })
              })
            }), _jsx(_components.p, {
              children: "In this example:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["When ", _jsx(_components.code, {
                  children: "contentView"
                }), " is set to ", _jsx(_components.code, {
                  children: "0"
                }), ", the SDK manages the native views inside the PiP window. If you pass a non-zero value, you are responsible for managing the native view layout."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "videoStreams"
                }), " defines the local and remote streams to display."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "contentViewLayout"
                }), " configures the grid layout for video streams inside the PiP window. Streams are arranged from left to right, then top to bottom."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "controlStyle: 2"
                }), " hides the play/pause button and progress bar, keeping only the essential window control buttons. This is recommended for real-time interactive scenarios."]
              }), `
`]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["For standard React Native integrations, keep both ", _jsx(_components.code, {
                    children: "contentView"
                  }), " and ", _jsx(_components.code, {
                    children: "sourceContentView"
                  }), " set to ", _jsx(_components.code, {
                    children: "0"
                  }), ". This lets the SDK manage the native views, layout, and restore target inside the PiP window. Pass non-zero values only if you have already completed the corresponding native view integration."]
                })
              })
            })]
          })]
        }), _jsx(_components.h3, {
          id: "listen-for-pip-state-changes-1",
          children: "Listen for PiP state changes"
        }), _jsxs(_components.p, {
          children: ["Implement ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapipstatechangedobserver.html",
            children: _jsx(_components.code, {
              children: "AgoraPipStateChangedObserver"
            })
          }), " to listen for PiP state changes. Use the ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/enum_agorapipstate.html",
            children: _jsx(_components.code, {
              children: "AgoraPipState"
            })
          }), " value to update the UI or handle errors:"]
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
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "onPipStateChanged"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(state: AgoraPipState, error: string "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "|"
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
                  children: "): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
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
                  children: " if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (state "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "==="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraPipState.pipStateFailed) {"
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
                  children: ".engine?."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getAgoraPip"
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
                  children: "pipDispose"
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
                  children: " }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " "
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " this"
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
                  children: "setState"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({ pipState: state });"
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
        }), _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "AgoraPipState"
          }), " defines the following states:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "pipStateStarted"
            }), ": PiP has started successfully."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "pipStateStopped"
            }), ": PiP has stopped."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "pipStateFailed"
            }), ": PiP failed to start or encountered an error while running."]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "start-stop-and-destroy-pip",
          children: "Start, stop, and destroy PiP"
        }), _jsx(_components.p, {
          children: "PiP-related calls operate at two lifecycle levels:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Session level:"
            }), " ", _jsx(_components.code, {
              children: "pipStart"
            }), ", ", _jsx(_components.code, {
              children: "pipStop"
            }), ", and ", _jsx(_components.code, {
              children: "pipDispose"
            }), " control the start, stop, and resource release of a single PiP session."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Controller or page level:"
            }), " ", _jsx(_components.code, {
              children: "release"
            }), " performs the final cleanup when the page or controller is no longer needed."]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["After completing configuration, call ", _jsx(_components.code, {
            children: "pipStart"
          }), " to start PiP. Call ", _jsx(_components.code, {
            children: "release"
          }), " only when destroying the page or when the controller is no longer needed, to avoid redundant session-level calls during teardown."]
        }), _jsxs(Tabs, {
          defaultValue: "android",
          groupId: "react-native-host-os",
          persist: true,
          children: [_jsxs(TabsList, {
            children: [_jsx(TabsTrigger, {
              value: "android",
              children: "Android"
            }), _jsx(TabsTrigger, {
              value: "ios",
              children: "iOS"
            })]
          }), _jsxs(TabsContent, {
            value: "android",
            children: [_jsx(_Fragment, {
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
                      children: "// Session level: start PiP"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipStart"
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
                      children: "// Session level: end the current PiP session"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipDispose"
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
                      children: "// Controller/page destroy level: final release"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "pip."
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
                  })]
                })
              })
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["On Android, ", _jsx(_components.code, {
                    children: "pipStop"
                  }), " is not the standard path for exiting PiP and restoring the foreground page. If you no longer need the current PiP session, call ", _jsx(_components.code, {
                    children: "pipDispose"
                  }), " to release resources. Restoring full-screen view is typically handled by the user through the system PiP window controls."]
                })
              })
            })]
          }), _jsxs(TabsContent, {
            value: "ios",
            children: [_jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "pipStop"
              }), " to stop PiP and restore the app interface, then call ", _jsx(_components.code, {
                children: "pipDispose"
              }), " to release the session resources. Call ", _jsx(_components.code, {
                children: "release"
              }), " only when destroying the page or when the controller is no longer needed."]
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
                      children: "// Session level: start PiP"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipStart"
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
                      children: "// Session level: stop PiP and restore the app interface"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipStop"
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
                      children: "// Session level: release the current PiP session resources"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "pip."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pipDispose"
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
                      children: "// Controller/page destroy level: final release"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "pip."
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
                  })]
                })
              })
            })]
          })]
        }), _jsx(_components.h3, {
          id: "development-considerations-1",
          children: "Development considerations"
        }), _jsx(_components.p, {
          children: "This section covers platform-specific behavior and best practices to keep in mind when integrating PiP."
        }), _jsxs(Tabs, {
          defaultValue: "android",
          groupId: "react-native-host-os",
          persist: true,
          children: [_jsxs(TabsList, {
            children: [_jsx(TabsTrigger, {
              value: "android",
              children: "Android"
            }), _jsx(TabsTrigger, {
              value: "ios",
              children: "iOS"
            })]
          }), _jsx(TabsContent, {
            value: "android",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "After entering PiP on Android, you typically need to update the app UI to match the PiP state."
              }), `
`, _jsxs(_components.li, {
                children: ["Android 12 and later support automatic PiP entry when the app moves to the background. On earlier versions, you must trigger PiP entry explicitly, for example by calling ", _jsx(_components.code, {
                  children: "pipStart"
                }), " in response to a user action. Extending ", _jsx(_components.code, {
                  children: "AgoraPIPActivity"
                }), " simplifies this adaptation."]
              }), `
`, _jsxs(_components.li, {
                children: ["PiP does not bypass Android background restrictions. If you need to continue capturing or playing audio and video in the background, combine PiP with a foreground service. For details, see ", _jsx(_components.a, {
                  href: "/en/api-reference/faq/quality/android_background",
                  children: "Android background restrictions"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["On Android, ", _jsx(_components.code, {
                  children: "pipStop"
                }), " moves the task to the background rather than exiting PiP and restoring the foreground page. Full-screen restoration is typically handled by the user through the system PiP window controls."]
              }), `
`, _jsxs(_components.li, {
                children: ["Distinguish between session-level and controller-level release: call ", _jsx(_components.code, {
                  children: "pipDispose"
                }), " to end the current PiP session, and call ", _jsx(_components.code, {
                  children: "release"
                }), " only when the page is destroyed or the controller is no longer needed."]
              }), `
`]
            })
          }), _jsx(TabsContent, {
            value: "ios",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "PiP must be triggered by explicit user action only, such as tapping a button or swiping up to the home screen. Triggering PiP programmatically without a user action may result in App Store review rejection."
              }), `
`, _jsx(_components.li, {
                children: "The PiP window is managed by the system and the SDK. Your app does not need to render a custom floating window."
              }), `
`, _jsxs(_components.li, {
                children: ["To display multiple video streams in PiP mode, configure the layout explicitly using ", _jsx(_components.code, {
                  children: "videoStreams"
                }), " and ", _jsx(_components.code, {
                  children: "contentViewLayout"
                }), ". When remote users join or leave, call ", _jsx(_components.code, {
                  children: "pipSetup"
                }), " again with the updated ", _jsx(_components.code, {
                  children: "videoStreams"
                }), ". You do not need to call ", _jsx(_components.code, {
                  children: "pipDispose"
                }), " first."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapipoptions.html",
                  children: _jsx(_components.code, {
                    children: "AgoraPipOptions.controlStyle"
                  })
                }), " accepts values ", _jsx(_components.code, {
                  children: "0"
                }), " to ", _jsx(_components.code, {
                  children: "3"
                }), ". Use ", _jsx(_components.code, {
                  children: "2"
                }), " for video call scenarios, which hides the play/pause button and progress bar. Style ", _jsx(_components.code, {
                  children: "3"
                }), " hides all controls, including the close and restore buttons."]
              }), `
`, _jsxs(_components.li, {
                children: ["Distinguish between session-level and controller-level release: call ", _jsx(_components.code, {
                  children: "pipStop"
                }), " and ", _jsx(_components.code, {
                  children: "pipDispose"
                }), " to end the current PiP session, and call ", _jsx(_components.code, {
                  children: "release"
                }), " only when the page is destroyed or the controller is no longer needed."]
              }), `
`]
            })
          })]
        }), _jsx(_components.h2, {
          id: "reference-1",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section includes links to related API reference and additional resources."
        }), _jsx(_components.h3, {
          id: "api-reference-1",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapip.html",
              children: _jsx(_components.code, {
                children: "AgoraPip"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapipoptions.html",
              children: _jsx(_components.code, {
                children: "AgoraPipOptions"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapipcontentviewlayout.html",
              children: _jsx(_components.code, {
                children: "AgoraPipContentViewLayout"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapipvideostream.html",
              children: _jsx(_components.code, {
                children: "AgoraPipVideoStream"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/api_agorapip_pipissupported.html",
              children: _jsx(_components.code, {
                children: "pipIsSupported"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/api_agorapip_pipisautoentersupported.html",
              children: _jsx(_components.code, {
                children: "pipIsAutoEnterSupported"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/api_agorapip_pipsetup.html",
              children: _jsx(_components.code, {
                children: "pipSetup"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/api_agorapip_pipstart.html",
              children: _jsx(_components.code, {
                children: "pipStart"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/api_agorapip_pipstop.html",
              children: _jsx(_components.code, {
                children: "pipStop"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/api_agorapip_pipdispose.html",
              children: _jsx(_components.code, {
                children: "pipDispose"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/api_agorapip_registerpipstatechangedobserver.html",
              children: _jsx(_components.code, {
                children: "registerPipStateChangedObserver"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_agorapipstatechangedobserver.html",
              children: _jsx(_components.code, {
                children: "AgoraPipStateChangedObserver"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/enum_agorapipstate.html",
              children: _jsx(_components.code, {
                children: "AgoraPipState"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/callback_agorapipstatechangedobserver_onpipstatechanged.html",
              children: _jsx(_components.code, {
                children: "onPipStateChanged"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-project-1",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides a ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/react-native-agora/tree/main/examples/expo/app/examples/advanced/PictureInPicture",
            children: "sample project"
          }), " demonstrating Picture-in-Picture. Download or view the source code."]
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
