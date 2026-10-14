import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Release notes",
  description: "Track Whiteboard SDK release notes across Android, iOS, and Web."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;web&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    ## Understand the tech [#understand-the-tech]

    This page tracks Android release notes for the Whiteboard SDK.

    ## Reference [#reference]

    <CalloutContainer type="info">
      <CalloutTitle>
        Note
      </CalloutTitle>

      <CalloutDescription>
        To ensure a consistent user experience across different platforms while enabling native access on each platform, the Whiteboard SDK for Android is implemented by creating a wrapper for the Whiteboard SDK for Web, rather than being a completely native SDK. Therefore, each Android SDK version by default includes the updates of the Web SDK version that it is built upon. The corresponding Web SDK version is provided in each Android release note, so that you can refer to the relevant Web SDK release note for updates.
      </CalloutDescription>
    </CalloutContainer>

    <Accordions type="multiple">
      <Accordion title="v2.16.100" id="v216100" headingLevel="2" value="v216100">
        Released on July 28, 2025.

        #### New features [#new-features]

        **High-performance whiteboard drawing tools**

        This release adds the \`appliance-plugin\`, a plugin that provides a set of high-performance whiteboard drawing tools. To use it, install \`@netless/appliance-plugin\` and enable it using the \`WhiteSdkConfiguration.enableAppliancePlugin\` option. For more details, see the [\`appliance-plugin\` documentation](https://github.com/netless-io/fastboard/blob/main/docs/zh/appliance-plugin.md).

        <CalloutContainer type="info">
          <CalloutDescription>
            * \`@netless/appliance-plugin\` is an external dependency and must be installed separately.
            * To ensure correct rendering of strokes, enable the plugin on all platforms (Web, Android, and iOS). If a platform does not enable it, strokes drawn on other platforms will not be visible.
            * After enabling the plugin, historical content remains visible but cannot be modified or upgraded. To avoid affecting the user experience, use the plugin on a new whiteboard. Disabling the plugin removes the content drawn with it.
          </CalloutDescription>
        </CalloutContainer>

        Once enabled, you can:

        * Use the \`LASER_PENCIL\` laser pencil tool. [Learn more](https://github.com/netless-io/fastboard/blob/main/docs/zh/appliance-plugin.md#%E6%96%B0%E5%8A%9F%E8%83%BD)
        * Use \`MemberState.strokeOpacity\` to set line transparency.
        * Use \`MemberState.fillOpacity\` to set fill transparency.
        * Use \`MemberState.fillColor\` to set fill color.

        **PPT rendering error handling**

        This release adds the \`SlideListener.onSlideError\` method to listen for PPT rendering errors. If an error occurs, call \`WhiteSdk.recoverSlide\` to recover rendering.

        #### API changes [#api-changes]

        **Added**

        * \`WhiteSdkConfiguration\`:
          * \`enableAppliancePlugin\`
        * \`MemberState\`:
          * \`strokeOpacity\`
          * \`fillOpacity\`
          * \`fillColor\`
        * \`onSlideError\`
        * \`recoverSlide\`
      </Accordion>

      <Accordion title="v2.16.86" id="v21686" headingLevel="2" value="v21686">
        Released on July 28, 2025.

        <CalloutContainer type="info">
          <CalloutTitle>
            Note
          </CalloutTitle>

          <CalloutDescription>
            The wrapped Web SDK has been upgraded to v2.16.51.
          </CalloutDescription>
        </CalloutContainer>

        #### New features [#new-features-1]

        **Domain preselection**

        This version adds the \`prepareWhiteConnection\` method to preselect an optimal access domain, which can improve the connection speed when users join a whiteboard room for the first time.

        #### API changes [#api-changes-1]

        **Added**

        * \`prepareWhiteConnection\`
        * \`ConnectionPrepareParam\`
      </Accordion>

      <Accordion title="v2.16.81" id="v21681" headingLevel="2" value="v21681">
        Released on July 28, 2025.

        <CalloutContainer type="info">
          <CalloutTitle>
            Note
          </CalloutTitle>

          <CalloutDescription>
            The wrapped Web SDK has been upgraded to v2.16.48.
          </CalloutDescription>
        </CalloutContainer>

        #### New features [#new-features-2]

        **Window apps management**

        In the multi-window mode, the SDK supports inserting the PPT or whiteboard plugin as a window. These are collectively referred to as window apps. Starting from this version, the \`Room\` object has the following new methods for managing window apps in the multi-window mode:

        * \`addApp\`: Inserts a window app and returns the app ID.
        * \`closeApp\`: Closes the window of the specified window app.
        * \`focusApp\`: Switches the focused window to the window of the specified window app.
        * \`queryApp\`: Queries the information of the specified window app.
        * \`queryAllApps\`: Queries the information of all current window apps.

        **Custom whiteboard tools**

        The \`MemberState\` has the following new properties for customizing whiteboard tools:

        * \`textColor\`: The color of the text in the text tool.
        * \`pencilEraserSize\`: The size of the pencil eraser tool.

        **New PPT rendering configurations**

        The \`WhiteSdkConfiguration.SlideAppOptions\` has the following new properties for PPT rendering configurations:

        * \`minFPS\`: Sets the minimum frame rate for PPT animations.
        * \`maxFPS\`: Sets the maximum frame rate for PPT animations.
        * \`resolution\`: Sets the rendering resolution multiplier for PPT.
        * \`maxResolutionLevel\`: Sets the maximum resolution for PPT.
        * \`bgColor\`: Sets the background color for PPT animations.
        * \`forceCanvas\`: Specifies whether to force 2D rendering. It is disabled by default.
        * \`enableGlobalClick\`: Specifies whether to enable executing the next step function by clicking on the PPT screen. It is enabled by default.

        **Whiteboard drawing performance optimization strategy**

        The \`RoomParams\` has a new property \`optimizeOptions\` for setting the performance optimization strategy for whiteboard drawing. The performance optimization includes the following three methods:

        * Adjusting the refresh interval of whiteboard drawing: A lower refresh interval provides smoother stroke display but has a higher performance consumption, while a higher refresh interval makes the stroke appear more laggy but has a lower performance consumption.
        * Using single canvas drawing: By default, the whiteboard uses two canvases alternately to avoid flickering on some devices during drawing. Using a single canvas drawing can prevent the need for redrawing and reduce performance consumption.
        * Using floating canvas: In the writing scenario, after enabling single canvas drawing, a floating canvas of approximately 256 x 256px is generated based on the drawing position. When subsequent drawing does not exceed the range of this floating canvas, the synchronous drawing of strokes will be limited to this floating canvas instead of the entire canvas, reducing performance consumption.

        **Other additions**

        This version also includes the following features:

        * Adds the \`updateText\` method for updating the text inserted using \`insertText\`.
        * Adds the \`setSyncMode\` method for immediately processing whiteboard events and drawing strokes.
        * Adds the \`setDisableInitialStateCallback\` method for disabling the callback of the full state after joining the room.

        #### Fixed issues [#fixed-issues]

        This version fixes the following issues:

        * When \`WhiteWindowParams.fullscreen\` was enabled, the app did not display in full screen on the second opening.
        * When \`WindowParams.fullscreen\` was enabled, the status bar occasionally flickered.
        * Path animation could not return to the original position after page switching.
        * Diamond fill filled the entire shape.
        * The built-in cursor disappeared after reconnection.
        * Occasional flickering when using fade-in and fade-out animations.
        * The built-in cursor disappeared after modifying \`isWritable\`.

        #### API changes [#api-changes-2]

        **Added**

        * \`addApp\`
        * \`closeApp\`
        * \`focusApp\`
        * \`queryApp\`
        * \`queryAllApps\`
        * \`WindowAppSyncAttrs\`
        * The following in \`MemberState\`:
          * \`textColor\`
          * \`pencilEraserSize\`
        * The following in \`SlideAppOptions\`:
          * \`minFPS\`
          * \`maxFPS\`
          * \`resolution\`
          * \`maxResolutionLevel\`
          * \`bgColor\`
          * \`forceCanvas\`
          * \`enableGlobalClick\`
        * \`setSyncMode\`
        * \`updateText\`
        * \`setDisableInitialStateCallback\`

        **Modified**

        * \`insertText\`
      </Accordion>

      <Accordion title="v2.16.59" id="v21659" headingLevel="2" value="v21659">
        v2.16.59 was released on January 19, 2024.

        <CalloutContainer type="info">
          <CalloutTitle>
            Note
          </CalloutTitle>

          <CalloutDescription>
            The wrapped Web SDK has been upgraded to v2.16.42.
          </CalloutDescription>
        </CalloutContainer>

        #### Compatibility changes [#compatibility-changes]

        This version deprecates the existing London data center (\`Region.gb-lon\`) in the Whiteboard Data Center and introduces a new data center in Frankfurt, Europe (\`Region.eu\`), whose service covers Europe. If you have set \`Region.gb-lon\` in the previous version, please switch to\` Region.eu\` after upgrading to this version and enable this data center in Agora Console.

        #### New features [#new-features-3]

        **PPT Volume Control**

        This version adds the \`getSlideVolume\` and \`updateSlideVolume \`methods to retrieve and update the volume of audio in PPT slides.

        **PPT URL Intercept and Replacement**

        \`WhiteSdkConfiguration\` adds a new configuration option, \`enableSlideInterrupterAPI\`, to enable intercepting and replacing URLs of PPT resources. This feature can be used to encrypt PPT resources uploaded by users and protect their privacy.
        Once enabled, the PPT file URL intercept and replacement feature can be implemented by calling \`WhiteSdk.setSlideListener(SlideListener)\`.

        **PPT Rendering Notification**

        \`WhiteSdkConfiguration\` adds the \`whiteSlideAppParams\` configuration option for displaying configurations related to [@netless/app-slide](https://github.com/netless-io/netless-app/tree/master/packages/app-slide) rendering. Currently, it supports configuring \`WhiteSlideAppParams.showRenderError\` to show or hide rendering error notifications.

        **Custom API Server Domain**

        \`WhiteSdkConfiguration\` adds the \`apiHosts\` configuration option to configure a list of API server domains for the whiteboard, which can be used for server proxy implementation.

        **Custom Module Source**

        \`RoomParams\` adds the \`modulesOrigin\` configuration option to configure the address for requesting whiteboard module data.

        **Document Operation Events**

        This release adds the \`dispatchDocsEvent\` method to send events to the inserted PDF/PPTX documents in the whiteboard, allowing control over document page flipping, page navigation, and slide animation playback.

        #### Improvements [#improvements]

        **Optimized Document Insertion**

        This version optimizes the process of converting and inserting PPT files into the whiteboard using the new document conversion service. You can use the new \`createSlideApp\` method to construct a \`WindowAppParam\` object, which includes \`ProjectorAttributes\` and \`ProjectorOptions\`, corresponding to the parameters passed when opening the document, see \`addApp\`.

        **Window Fullscreen**

        A new property, \`WindowParams.fullscreen\`, is added to control whether the window is displayed in fullscreen mode.

        #### Issues fixed [#issues-fixed]

        This version fixed the issue of layout preview not working in the latest version of Android Studio.

        #### API Changes [#api-changes-3]

        Added

        * \`getSlideVolumeWithCompletionHandler\`

        * \`updateSlideVolume\`

        * \`WhiteSdkConfiguration\`

          * \`enableSlideInterrupterAPI\`
          * \`whiteSlideAppParams\`
          * \`apiHosts\`

        * \`setSlideDelegate\`

        * \`modulesOrigin \`in\` RoomParams\`

        * \`dispatchDocsEvent\`

        * \`WindowDocsEvent\`

        * \`createSlideApp\`

          * \`ProjectorAttributes\`
          * \`ProjectorOptions\`
          * \`WindowAppParam\`

        * \`WindowParams.fullscreen\`
      </Accordion>

      <Accordion title="v2.16.42" id="v21642" headingLevel="2" value="v21642">
        v2.16.42 was released on December 2, 2022.

        <CalloutContainer type="info">
          <CalloutTitle>
            Note
          </CalloutTitle>

          <CalloutDescription>
            The wrapped Web SDK has been upgraded to v2.16.37.
          </CalloutDescription>
        </CalloutContainer>

        #### New features [#new-features-4]

        **1. Whiteboard tool updates**

        This release adds new features for the following whiteboard tools:

        * Pencil: Adds support for drawing dotted lines by adding \`dottedLine: true\` in \`room.memberState\`.
        * Text: Adds support for directly selecting and editing whiteboard text by adding \`textCanSelectText: true\` in \`room.memberState\`.

        In addition, this release adds a pencil eraser tool to erase any part of a pencil stroke.

        **2. Floatbar**

        This release adds the floatbar feature. The floatbar pops up when selecting any whiteboard item, which enables users to
        easily edit these whiteboard items. For example, when selecting a stroke, the floatbar enables the user to remove it or
        change its color. When selecting text, the floatbar enables the user to adjust its style or change its typeface.

        Call the \`setUsingFloatBar\` method to enable the floatbar.

        **3. Remove whiteboard pages**

        This release adds the \`removePage\` method to delete a specified whiteboard page.

        **4. Request slide log**

        This release adds the \`requestSlideLog\` method in the \`WhiteSdk\` class to request the slide log on the client.
        This facilitates debugging slide-related issues.

        **5. Player callbacks**

        To facilitate listening to the state changes of \`Player\`, this release adds \`addPlayerListener\` and \`removePlayerListener\`
        methods to add and remove player callbacks.

        #### Improvements [#improvements-1]

        This release optimizes the audio playback control in PPT files. You can now pause or resume audio mixing or playback in
        dynamic PPT files with the \`pauseAudioMixing\` and \`resumeAudioMixing\` methods.

        #### Fixed issues [#fixed-issues-1]

        This release fixes the following issues:

        * Under multi-window mode, no callback was received when the \`sceneState\` changed.
        * The creation of the whiteboard app sometimes failed after reconnection.
        * When creating the whiteboard app, synchronizing the initial height and width sometimes failed.
        * Switching the readable/writable state sometimes caused the configuration to be lost in the \`disableCameraTransform\` of \`mainView\`.

        #### API changes [#api-changes-4]

        **Added**

        * New properties in the \`MemberState\` class: \`dottedLine\` and \`textCanSelectText\`
        * New property in the \`Appliance\` class: \`PENCIL_ERASER\`
        * \`removePage\`
        * \`pauseAudioMixing\`
        * \`resumeAudioMixing\`
        * \`addPlayerListener\`
        * \`removePlayerListener\`
        * \`setUsingFloatBar\`
        * \`requestSlideLog\`
      </Accordion>

      <Accordion title="v2.16.21" id="v21621" headingLevel="2" value="v21621">
        v2.16.21 was released on September 13, 2022.

        #### Compatibility changes [#compatibility-changes-1]

        **SDK integration changes**

        As of v2.16.0, Agora only updates the \`netless-io:whiteboard-android\` GitHub repository; Agora no longer maintains the \`duty-os:white-sdk-android\` GitHub repository. When integrating the SDK v2.16.0 or later with JitPack, you need to modify the \`implementation\` field under \`dependencies\` in the \`/Gradle Scripts/build.gradle(Module: <projectname>.app)\` file as follows:

        \`\`\`text
        dependencies {
            implementation 'com.github.netless-io:whiteboard-android:<version>'
        }
        \`\`\`

        For details, see [Get the SDK](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/get-started-sdk#get-whiteboard-sdk).

        #### New features [#new-features-5]

        **1. Inserting text**

        This release adds the \`insertText\` method for inserting text at a specified position.

        **2. Disabling the stroke effect**

        This release adds the \`setDisableNewPencilStroke\` method to \`WhiteSdkConfiguration\` to enable or disable the stroke effect of the pencil. The default value of the \`disableNewPencilStroke\` parameter in this method is \`true\`, and the SDK enables the stroke effect immediately when you call \`setDisableNewPencil(false)\` to enable the new pencil. To disable the stroke effect after setting \`setDisableNewPencil(false)\`, you can call \`setDisableNewPencilStroke(true)\`.

        This release also adds the \`isDisableNewPencilStroke\` method to \`WhiteSdkConfiguration\` to get whether the stroke effect of the new pencil is disabled.

        **3. Getting the scene information**

        adds the \`getScene\` method to the \`Displayer\` class, which supports using the scene path to get the information about a specified scene.

        #### Improvements [#improvements-2]

        This release provides the following improvements:

        * Adds tween animation for the new pencil. This allows the SDK to automatically insert frames between keyframes when a user draws or writes with the new pencil, so that remote users see a smoother drawing process. To experience this improvement, ensure that you have called \`setDisableNewPencil(false)\` to enable the new pencil.
        * Optimizes the writing performance on Android browsers.
        * Optimizes the reconnecting mechanism in weak network environment to reduce unnecessary reconnections.

        #### Fixed issues [#fixed-issues-2]

        This release fixed the following issues:

        * Occasionally, the contents on the whiteboard appeared shifted and overshadowed after users zoomed or moved their view.
        * Occasionally, users could not switch the pages of a dynamic PPT slide after an SDK reconnection.
        * The contents on the whiteboard occasionally were not fully displayed when users joined a whiteboard room that already had.
        * A memory leak sometimes occurred after an SDK reconnection.
        * An error sometimes occurred when calling \`setWritable\` repeatedly.
        * When a user switched to read-only mode, then switched back to read-write mode and wrote, remote users saw that user's cursor as fixed.

        #### API changes [#api-changes-5]

        **Added**

        * \`insertText\`
        * \`setDisableNewPencilStroke\`
        * \`isDisableNewPencilStroke\`
        * \`getScene\`
      </Accordion>

      <Accordion title="v2.15.24" id="v21524" headingLevel="2" value="v21524">
        v2.15.24 was released on January 21, 2022.

        This release provides the following improvements:

        * Updates \`white-web-sdk\` to v2.15.16.
        * Optimizes \`getSceneSnapshotImage\` and \`getScenePreviewImage\` to ensure the images inserted in the scene are displayed correctly in the screenshot.
      </Accordion>

      <Accordion title="v2.15.0" id="v2150" headingLevel="2" value="v2150">
        v2.15.0 was released on November 16, 2021.

        #### Compatibility changes [#compatibility-changes-2]

        To help you manage users in a room, this release adds the \`uid\` parameter in \`RoomParams\`, for setting the unique identifier of a user.

        If you upgrade the SDK to v2.15.0 or later, to avoid affecting your service, ensure that you pass in a string \`uid\` in \`RoomParams\` when calling \`joinRoom\`. The \`uid\` of each user cannot be longer than 1024 bytes and must be unique in the same room. For more information, see [Join a Whiteboard Room](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/get-started-sdk#join-the-interactive-whiteboard-room-from-your-app-client).

        #### New features [#new-features-6]

        This release adds support for converting and displaying the following PowerPoint (PPT) features:

        * Action buttons
        * Slide masters added with animation effects.

        #### Improvements [#improvements-3]

        This release provides the following improvements:

        * Updates \`white-web-sdk\` to v2.15.1.
        * Further optimizes the writing experience.

        #### Fixed issues [#fixed-issues-3]

        This release has fixed the following issues:

        * The following issues with displaying dynamic PPT files in the whiteboard were fixed:
          * The images were displaced occasionally.
          * Failure to read certain styles caused the screen to go blank.
          * The rotation angle and color were incorrect for some text.
          * Occasionally, elements with an animation effect were not displayed
          * The animation of some text was displayed incorrectly.

        #### API changes [#api-changes-6]

        **Modified**

        * \`RoomParams\` \\[1/3]
        * \`RoomParams\` \\[2/3]
        * \`RoomParams\` \\[3/3]
      </Accordion>

      <Accordion title="v2.14.3" id="v2143" headingLevel="2" value="v2143">
        v2.14.3 was released on November 11, 2021.

        #### Compatibility changes [#compatibility-changes-3]

        As of this release, the minimum platform version supported by the Agora Interactive Whiteboard Android SDK changes as follows:

        * Android 5.0, instead of Android 4.4
        * Android SDK API level 21, instead of Android SDK API level 19

        #### Improvements [#improvements-4]

        This release provides the following improvements:

        * Updates \`white-web-sdk\` to v2.14.5.
        * Further optimizes the writing performance.
        * Optimizes the shape of handwriting.
        * Improves the accuracy of the \`onPhaseChanged\` callback.
        * Hides elements that should not be displayed in a slide master using the file-conversion function.

        #### Fixed issues [#fixed-issues-4]

        This release has fixed the following issues:

        * After switching to the hand tool, users could not switch back to the cursor.
        * Occasionally, the handwriting disappeared suddenly during writing.
        * Occasionally, the handwriting had unnatural teardrop-like strokes during writing.
        * When the user edited text after manually scaling the text box, the text box and text reverted to the original size.
        * The view became incorrect after the window size changed on some browsers and devices.
        * When the eraser was moved quickly, the eraser icon was not enlarged and the fast deleting function did not work.
        * Occasionally, multiple audio files in dynamic PPT slides played simultaneously.
        * Animations were displayed incorrectly after a dynamic PPT slide returned to the previous page.
        * Occasionally, a text box with an animation effect was flipped in mirror mode.
      </Accordion>

      <Accordion title="v2.13.22" id="v21322" headingLevel="2" value="v21322">
        v2.13.22 was released on August 20, 2021.

        #### New features [#new-features-7]

        This release has the following new features:

        * Adds the \`onLogger\` callback in the \`CommonCallback\` interface, with which you can get the local debug log output by the SDK.
        * Adds support for converting and displaying the following PowerPoint (PPT) features:
          * Add animations to text per paragraph.
          * Animate text by word or by letter.
          * All preset table styles.
          * Fonts smaller than 12 px.

        #### Improvements [#improvements-5]

        This release updates \`white-web-sdk\` to 2.13.17.

        #### Fixed issues [#fixed-issues-5]

        This release fixed the following issues:

        * The \`onLogger\` and \`onMessage\` callbacks did not take effect.
        * Occasionally, the room was stuck in the connecting state when the user joined a room.
        * The cursor disappeared for some users after the SDK reconnected.
        * The status of some plugins was incorrect after the SDK reconnected.
        * The hand tool was not restricted by the set \`CameraBound\` .
        * On some high-resolution devices, when the user was in the \`Follower\` view mode, the center point of the view was slightly shifted.
        * The following issues with displaying dynamic PPT files in the whiteboard were fixed:
          * Paragraph spacing was displayed incorrectly.
          * Failed to split text into columns.
          * The slide background fill of shapes was displayed incorrectly.
          * Hanging indentation was displayed incorrectly.
          * The slide was displayed incorrectly when the user called \`pptPreviousStep\` to roll back a slide.
          * The numbering of text displayed incorrectly.
          * Some equations were displayed incompletely after conversion.
          * Some lines broke incorrectly.
          * Text written from right to left (such as Arabic) was displayed incorrectly.
      </Accordion>

      <Accordion title="v2.13.17" id="v21317" headingLevel="2" value="v21317">
        v2.13.17 was released on July 23 2021.

        #### New features [#new-features-8]

        To improve the dynamic file conversion function, this release adds support for converting and displaying the following PowerPoint (PPT) features:

        * Animation effect > Reverse Path Direction
        * Vertical Text Box
        * Microsoft Equation Editor 3.0
        * Hide background graphic in a slide master
        * Change the color of pictures
        * The following picture effects are now supported:
          * Metal Frame
          * Soft Edge Rectangle
          * Double Frame, Black
          * Thick Matte, Black
          * Simple Frame, Black
          * Moderate Frame, Black
          * Center Shadow Rectangle
          * Soft Edge Oval
          * Metal Rounded Rectangle
          * Metal Oval

        #### Improvements [#improvements-6]

        This release has the following improvements:

        * Updates \`white-web-sdk\` to 2.13.11.
        * Updates \`@netless/video-js-plugin\` to 0.3.3.
        * Reduces CPU usage during the playback of animations in dynamic PPT files.
        * Improves the smoothness of writing and drawing on the whiteboard
        * To improve the accuracy of time synchronization, changes the data type of the \`delaySec\` parameter in \`setTimeDelay\` from Integer to Double.
        * Supports printing logs on scene changes.
        * Adds the \`preview\` parameter in \`PptPage\`, which supports displaying dynamic PPT previews in the whiteboard. See \`API reference\`.

        #### Fixed issues [#fixed-issues-6]

        This release fixed the following issues:

        * The contents on the whiteboard occasionally became unclear when the user adjusted the view.
        * Users of the Android SDK occasionally failed to draw the first line after joining the room.
        * The method call of \`refreshViewSize\` did not take effect occasionally.
        * The following issues with displaying dynamic PPT files in the whiteboard were fixed:
          * Animations did not play in the set order.
          * Animations did not disappear when playback finished.
          * Table height was displayed incorrectly.
          * Pictures inserted in content placeholders failed to display.
          * Some shapes were rendered incorrectly.
          * The text was incorrectly indented.
          * Animation triggers did not work.
          * Picture transparency was incorrect.
      </Accordion>

      <Accordion title="v2.13.4" id="v2134" headingLevel="2" value="v2134">
        v2.13.4 was released on June 15, 2021.

        This release updates \`white-web-sdk\` to 2.13.4.
      </Accordion>

      <Accordion title="v2.13.2" id="v2132" headingLevel="2" value="v2132">
        v2.13.2 was released on June 11, 2021.

        This release updates \`white-web-sdk\` to 2.13.3.
      </Accordion>

      <Accordion title="v2.13.1" id="v2131" headingLevel="2" value="v2131">
        v2.13.1 was released on June 11, 2021.

        **Improvement**

        This release updates \`white-web-sdk\` to 2.13.2.

        **Issue fixed**

        This release fixed the issue that when \`disableDeviceInputs\` is set as \`true\`, the user might still be able to operate the iframe plugin.
      </Accordion>

      <Accordion title="v2.12.36" id="v21236" headingLevel="2" value="v21236">
        v2.12.36 was released on June 8, 2021.

        This release fixed the following issue: If the user in host mode zooms in or out on the HTML5 file while using the clicker tool, users in follower mode saw incomplete display of file content.
      </Accordion>

      <Accordion title="v2.12.35" id="v21235" headingLevel="2" value="v21235">
        v2.12.35 was released on June 7, 2021.

        This release updates [\`@netless/cursor-tool\`](https://github.com/netless-io/whiteboard-demo/tree/master/packages/cursor-tool) to 0.1.0 and \`@netless/iframe-bridge\` to 2.1.2.
      </Accordion>

      <Accordion title="v2.12.34" id="v21234" headingLevel="2" value="v21234">
        v2.12.34 was released on June 4, 2021.

        This release updates \`white-web-sdk\` to 2.12.21.
      </Accordion>

      <Accordion title="v2.12.33" id="v21233" headingLevel="2" value="v21233">
        v2.12.33 was released on June 3, 2021.

        This release updates [\`@netless/video-js-plugin\`](https://www.npmjs.com/package/@netless/video-js-plugin) to 0.1.5.
      </Accordion>

      <Accordion title="v2.12.32" id="v21232" headingLevel="2" value="v21232">
        v2.12.32 was released on June 2, 2021.

        This release fixed the video display issues of \`@netless/video-js-plugin\`.
      </Accordion>

      <Accordion title="v2.12.31" id="v21231" headingLevel="2" value="v21231">
        v2.12.31 was released on June 1, 2021.

        This release updates [\`@netless/video-js-plugin\`](https://www.npmjs.com/package/@netless/video-js-plugin) to 0.1.3 to fix the incompatibility issue between the \`video-js-plugin\` and earlier versions of Andrid WebView .
      </Accordion>

      <Accordion title="v2.12.30" id="v21230" headingLevel="2" value="v21230">
        v2.12.30 was released on May 25, 2021.

        This release updates [\`@netless/cursor-tool\`](https://github.com/netless-io/whiteboard-demo/tree/master/packages/cursor-tool) to 0.0.9.
      </Accordion>

      <Accordion title="v2.12.29" id="v21229" headingLevel="2" value="v21229">
        v2.12.29 was released on May 24, 2021.

        #### New features [#new-features-9]

        This release integrates [\`@netless/video-js-plugin\`](https://www.npmjs.com/package/@netless/video-js-plugin), which is used by an Android client to watch video played on the whiteboard on a Web client. Supported file formats include M3U8 and others.

        #### Improvement [#improvement]

        This release updates \`white-web-sdk\`  to 2.12.20.
      </Accordion>

      <Accordion title="v2.12.28" id="v21228" headingLevel="2" value="v21228">
        v2.12.28 was released on May 20, 2021.

        This release updates \`white-web-sdk\`  to 2.12.19.
      </Accordion>

      <Accordion title="v2.12.27" id="v21227" headingLevel="2" value="v21227">
        v2.12.27 was released on May 17, 2021.

        This release has the following improvements:

        * Updates \`white-web-sdk \`to 2.12.18.
        * Enables server-side typesetting (\`useServerWrap\`) by default. When server-side typesetting is enabled, the size of font files are automatically reduced for faster rendering.
      </Accordion>

      <Accordion title="v2.12.26" id="v21226" headingLevel="2" value="v21226">
        v2.12.26 was released on May 13, 2021.

        This release adds the following features:

        * Adds \`Clicker\` to \`Appliance\` for interacting with HTML5 files.
        * Adds \`ShapeType\` to \`MemberState\` for setting the Shape tool. Supported shape types include triangle, rhombus, pentagram, and speech balloon.
        * Adds the \`syncBlockTimestamp\` method to the \`Room\` class. You can use this method to set the delay time for sending the whiteboard content, so that the whiteboard content and the audio and video are sent at the same time.
        * Updates \`white-web-sdk\` to 2.12.17.
      </Accordion>

      <Accordion title="v2.12.25" id="v21225" headingLevel="2" value="v21225">
        v2.12.25 was released on April 28, 2021.

        This release updates [\`@Netless/white-audio-plugin2\`](https://github.com/netless-io/whiteboard-demo/tree/master/packages/white-audio-plugin) and [\`@Netless/white-video-plugin2\`](https://github.com/netless-io/react-whiteboard/tree/master/packages/white-video-plugin) to fix some display issues.
      </Accordion>

      <Accordion title="v2.12.24" id="v21224" headingLevel="2" value="v21224">
        v2.12.24 was released on April 27, 2021.

        #### New features [#new-features-10]

        This release integrates [\`@Netless/white-audio-plugin2\`](https://github.com/netless-io/whiteboard-demo/tree/master/packages/white-audio-plugin) and [\`@Netless/white-video-plugin2\`](https://github.com/netless-io/react-whiteboard/tree/master/packages/white-video-plugin), which are used by an Android client to listen to audio and watch video played on the whiteboard on a Web client.

        #### Fixed issues [#fixed-issues-7]

        This release fixed the issue that the asynchronous \`getRoomState\` method had no callbacks.
      </Accordion>

      <Accordion title="v2.12.22" id="v21222" headingLevel="2" value="v21222">
        v2.12.22 was released on April 22, 2021.

        This release updates \`white-web-sdk\` to 2.12.14.
      </Accordion>

      <Accordion title="v2.12.21" id="v21221" headingLevel="2" value="v21221">
        v2.12.21 was released on April 22, 2021.

        This release has the following improvements:

        * Changes \`RoomListener\` and \`PlayerListener\` to main thread callbacks.
        * Updates \`white-web-sdk\` to 2.12.13.
        * Updates \`@Netless/iframe-bridge\` to 2.12.17.
      </Accordion>

      <Accordion title="v2.12.20" id="v21220" headingLevel="2" value="v21220">
        v2.12.20 was released on April 17, 2021.

        This release updates \`white-web-sdk\` to 2.12.12.
      </Accordion>

      <Accordion title="v2.12.19" id="v21219" headingLevel="2" value="v21219">
        v2.12.19 was released on April 14, 2021.

        This release has the following improvements:

        * Adds a new constructor of \`PptParams\` that does not contain the \`scheme\` parameter.
        * Updates \`@Netless/iframe-bridge\` to 2.0.14 to improve the iframe plugin.
      </Accordion>

      <Accordion title="v2.12.18" id="v21218" headingLevel="2" value="v21218">
        v2.12.18 was released on April 12, 2021.

        This release updates \`@netless/iframe-bridge\` to 2.0.13 to improve message notifications.
      </Accordion>

      <Accordion title="v2.12.17" id="v21217" headingLevel="2" value="v21217">
        v2.12.17 was released on April 12, 2021.

        This release updates \`@netless/iframe-bridge\` to 2.0.11 and improves the display on Android devices.
      </Accordion>

      <Accordion title="v2.12.16" id="v21216" headingLevel="2" value="v21216">
        v2.12.16 was released on April 9, 2021.

        This release updates \`@netless/iframe-bridge\` to 2.0.10 and improves the display on Android devices.
      </Accordion>

      <Accordion title="v2.12.15" id="v21215" headingLevel="2" value="v21215">
        v2.12.15 was released on April 10, 2021.

        This release updates \`white-web-sdk\` to 2.12.9.
      </Accordion>

      <Accordion title="v2.12.14" id="v21214" headingLevel="2" value="v21214">
        v2.12.14 was released on April 9, 2021.

        This release updates \`@netless/iframe-bridge\` to 2.0.9 to fix the display of HTML5 files.
      </Accordion>

      <Accordion title="v2.12.13" id="v21213" headingLevel="2" value="v21213">
        v2.12.13 was released on April 9, 2021.

        This release restores the \`scaleIframeToFit\` method of the \`Displayer\` class.
      </Accordion>

      <Accordion title="v2.12.12" id="v21212" headingLevel="2" value="v21212">
        v2.12.12 was released on April 9, 2021.

        This release updates \`@netless/iframe-bridge\` to 2.0.8 to fix the display of HTML5 files.
      </Accordion>

      <Accordion title="v2.12.11" id="v21211" headingLevel="2" value="v21211">
        v2.12.11 was released on April 6, 2021.

        This release updates \`white-web-sdk\` to 2.12.8 to fix the problem that setting Follower mode did not take effect immediately.
      </Accordion>

      <Accordion title="v2.12.10" id="v21210" headingLevel="2" value="v21210">
        v2.12.10 was released on April 2, 2021.

        This release updates \`white-web-sdk\` to 2.12.7 to improve the display of dynamic PPT files.
      </Accordion>

      <Accordion title="v2.12.9" id="v2129" headingLevel="2" value="v2129">
        v2.12.9 was released on March 30, 2021.

        This release updates \`@netless/iframe-bridge\` to 2.0.7.
      </Accordion>

      <Accordion title="v2.12.8" id="v2128" headingLevel="2" value="v2128">
        v2.12.8 was released on March 30, 2021.

        This release updates \`white-web-sdk\` to 2.12.6.
      </Accordion>

      <Accordion title="v2.12.7" id="v2127" headingLevel="2" value="v2127">
        v2.12.7 was released on March 25, 2021.

        This release updates \`@netless/iframe-bridge\` to 2.0.5.
      </Accordion>

      <Accordion title="v2.12.6" id="v2126" headingLevel="2" value="v2126">
        v2.12.6 was released on March 25, 2021.

        This release adds the \`scaleIframeToFit\` method to the \`Displayer\` class to enable zooming in and out so that HTML5 files can be displayed completely on screen.
      </Accordion>

      <Accordion title="v2.12.5" id="v2125" headingLevel="2" value="v2125">
        v2.12.5 was released on March 25, 2021.

        This release updates [\`@netless/cursor-tool\`](https://github.com/netless-io/whiteboard-demo/tree/master/packages/cursor-tool) to 0.0.7.
      </Accordion>

      <Accordion title="v2.12.3" id="v2123" headingLevel="2" value="v2123">
        v2.12.3 was released on March 20, 2021.

        This release changes the default value of \`disableNewPencil\` in the \`setDisableNewPencil\` method from \`false\` to \`true\` so that the stroke effect is disabled by default. This addresses the issue that the stroke effect is not supported by SDKs earlier than v2.2.12.

        To enable the stroke effect properly, ensure that every user in the room is using one of the following SDKs:

        * Android SDK v2.12.3 or later
        * iOS SDK v2.12.3 or later
        * Web SDK v2.12.5 or later
      </Accordion>

      <Accordion title="v2.12.2" id="v2122" headingLevel="2" value="v2122">
        v2.12.2 was released on March 16, 2021.

        #### New features [#new-features-11]

        This release adds the stroke effect to better display handwriting. Call \`setDisableNewPencil\` to enable or disable the stroke effect, and call \`isDisableNewPencil\` to see whether the stroke effect is enabled.

        To enable the stroke effect properly, ensure that every user in the room is using one of the following SDKs:

        * Android SDK v2.12.2 or later
        * iOS SDK v2.12.3 or later
        * Web SDK v2.12.5 or later

        #### Improvements [#improvements-7]

        This release updates \`white-web-sdk\` to v2.12.4 to improve the display logic of PPT files.

        #### Issues fixed [#issues-fixed-1]

        Fixed the crash problem caused by abnormal callbacks in live rooms in \`debug\` mode.
      </Accordion>
    </Accordions>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    ## Understand the tech [#understand-the-tech-1]

    This page tracks iOS release notes for the Whiteboard SDK.

    ## Reference [#reference-1]

    <CalloutContainer type="info">
      <CalloutTitle>
        Note
      </CalloutTitle>

      <CalloutDescription>
        To ensure a consistent user experience across different platforms while enabling native access on each platform, the Whiteboard SDK for iOS is implemented by creating a wrapper for the Whiteboard SDK for Web, rather than being a completely native SDK. Therefore, each iOS SDK version by default includes the updates of the Web SDK version that it is built upon. The corresponding Web SDK version is provided in each iOS release note, so that you can refer to the relevant Web SDK release note for updates.
      </CalloutDescription>
    </CalloutContainer>

    <Accordions type="multiple">
      <Accordion title="v2.16.112" id="v216112" headingLevel="2" value="v216112">
        Released on July 28, 2025.

        #### New features [#new-features-12]

        **High-performance whiteboard drawing tools**

        This release introduces the \`appliance-plugin\` that provides a set of high-performance whiteboard drawing tools. To use it, install \`@netless/appliance-plugin\` and enable it with the \`WhiteSdkConfiguration.enableAppliancePlugin\` configuration option. For details, see the [\`appliance-plugin\` documentation](https://github.com/netless-io/fastboard/blob/main/docs/zh/appliance-plugin.md).

        <CalloutContainer type="info">
          <CalloutDescription>
            * \`@netless/appliance-plugin\` is an external dependency and must be installed separately.
            * To ensure consistent rendering of strokes, enable the plugin on all platforms (Web, Android, and iOS). Strokes drawn with the plugin will not appear on platforms where it is not enabled.
            * After enabling the plugin, historical whiteboard content is still visible but cannot be edited or upgraded. To avoid affecting the user experience, we recommend enabling the plugin on a new whiteboard. Disabling the plugin will remove content drawn with it.
          </CalloutDescription>
        </CalloutContainer>

        Once the plugin is enabled, you can:

        * Use the new laser pencil tool \`LASER_PENCIL\`. [Learn more](https://github.com/netless-io/fastboard/blob/main/docs/zh/appliance-plugin.md#%E6%96%B0%E5%8A%9F%E8%83%BD).
        * Use the \`WhiteMemberState.strokeOpacity\` property to set line transparency.
        * Use the \`WhiteMemberState.fillOpacity\` property to set fill transparency.
        * Use the \`WhiteMemberState.fillColor\` property to set fill color.

        **PPT rendering error handling**

        This version adds the \`SlideListener.onSlideError\` method for listening to PPT rendering errors. If an error occurs, you can call \`WhiteSdk.recoverSlide\` to recover rendering.

        **Auto focus behavior**

        This release adds the \`WhiteSdkConfiguration.useWebKeyboardInjection\` property, which controls whether WKWebView is allowed to automatically gain input focus. This is useful for managing keyboard input and handling focus conflicts in complex app interfaces.

        #### API changes [#api-changes-7]

        **Added**

        * \`WhiteSdkConfiguration\`:
          * \`enableAppliancePlugin\`
          * \`useWebKeyboardInjection\`
        * \`WhiteMemberState\`:
          * \`strokeOpacity\`
          * \`fillOpacity\`
          * \`fillColor\`
        * \`onSlideError\`
        * \`recoverSlide\`
      </Accordion>

      <Accordion title="v2.16.95" id="v21695" headingLevel="2" value="v21695">
        Released on July 28, 2025.

        <CalloutContainer type="info">
          <CalloutTitle>
            Note
          </CalloutTitle>

          <CalloutDescription>
            The wrapped Web SDK has been upgraded to v2.16.51.
          </CalloutDescription>
        </CalloutContainer>

        #### New features [#new-features-13]

        **Domain preselection**

        This version adds the \`WhiteSDK.prepareWhiteConnectionForAppId\` method to preselect an optimal access domain, which can improve the connection speed when users join a whiteboard room for the first time.

        **Whiteboard window style override**

        This version adds the \`WhiteWindowParams.overwriteStyles\` method to override whiteboard window styles using CSS, allowing for customization of UI details.

        #### Fixed issues [#fixed-issues-8]

        This version fixes the following issue:

        * \`drawOnlyPencil\` does not work on iOS 17 and above.

        #### API changes [#api-changes-8]

        **Added**

        * \`prepareWhiteConnectionForAppId\`
        * \`overwriteStyles\`
      </Accordion>

      <Accordion title="v2.16.88" id="v21688" headingLevel="2" value="v21688">
        Released on July 28, 2025.

        <CalloutContainer type="info">
          <CalloutTitle>
            Note
          </CalloutTitle>

          <CalloutDescription>
            The wrapped Web SDK has been upgraded to v2.16.48.
          </CalloutDescription>
        </CalloutContainer>

        #### New features [#new-features-14]

        **Window apps management**

        In the multi-window mode, the SDK supports inserting the PPT or whiteboard plugin as a window app. These are collectively referred to as window apps. Starting from this version, the \`WhiteRoom\` class introduces the following methods to manage window apps in the multi-window mode:

        * \`addApp\`: Inserts a window app and returns the app ID.
        * \`closeApp\`: Closes the window of the specified window app.
        * \`focusApp\`: Switches the focused window to the window of the specified window app.
        * \`queryApp\`: Queries the information of the specified window app.
        * \`queryAllApps\`: Queries the information of all current window apps.

        **Whiteboard tools customization**

        The \`WhiteMemberState\` and \`WhiteReadonlyMemberState\` classes introduce the following properties for customizing whiteboard tools:

        * \`textColor\`: Modifies the text color in the text tool.
        * \`pencilEraserSize\`: Modifies the size of the pencil eraser tool.

        **New PPT rendering configurations**

        The \`WhiteSlideAppParams\` class introduces the following properties for PPT rendering configurations:

        * \`minFPS\`: Sets the minimum frame rate for PPT animations.
        * \`maxFPS\`: Sets the maximum frame rate for PPT animations.
        * \`resolution\`: Sets the rendering resolution multiplier for PPT.
        * \`maxResolutionLevel\`: Sets the maximum resolution for PPT.
        * \`bgColor\`: Sets the background color for PPT animations.
        * \`forceCanvas\`: Specifies whether to force 2D rendering. It is disabled by default.
        * \`enableGlobalClick\`: Specifies whether to enable executing the next step function by clicking on the PPT screen. It is enabled by default.

        **Text update**

        The \`updateText\` method is added to update the text inserted using the \`insertText\` method.

        #### Fixed issues [#fixed-issues-9]

        This version fixes the following issues:

        * \`WKWebView\` could cause failure to open \`indexDB\` under certain exceptional circumstances.
        * After configuring \`WhiteWindowParams.fullscreen\`, the app occasionally could not be displayed in full screen on the second launch.
        * After configuring \`WhiteWindowParams.fullscreen\`, there could be a brief flicker.
        * Occasional flickering when using fade-in and fade-out animations.

        #### API changes [#api-changes-9]

        **Added**

        * \`addApp\`
        * \`closeApp\`
        * \`focusApp\`
        * \`queryApp\`
        * \`queryAllAppsWithCompletionHandler\`
        * \`WhiteAppParam\`
        * \`WhiteAppSyncAttributes\`
        * The following in \`WhiteMemberState\` and \`WhiteReadonlyMemberState\`:
          * \`textColor\`
          * \`pencilEraserSize\`
        * \`updateText\`
        * The following in \`WhiteSlideAppParams\`:
          * \`minFPS\`
          * \`maxFPS\`
          * \`resolution\`
          * \`maxResolutionLevel\`
          * \`bgColor\`
          * \`forceCanvas\`
          * \`enableGlobalClick\`
      </Accordion>

      <Accordion title="v2.16.62" id="v21662" headingLevel="2" value="v21662">
        v2.16.62 was released on January 19, 2024.

        <CalloutContainer type="info">
          <CalloutTitle>
            Note
          </CalloutTitle>

          <CalloutDescription>
            The wrapped Web SDK has been upgraded to v2.16.42.
          </CalloutDescription>
        </CalloutContainer>

        #### Compatibility changes [#compatibility-changes-4]

        This version deprecates the existing London data center (\`gb-lon\`) in the Whiteboard Data Center and introduces a new data center in Frankfurt, Europe (\`eu\`), whose service covers Europe. If you have set \`gb-lon\` in the previous version, please switch to\` eu\` after upgrading to this version and enable this data center in Agora Console.

        #### New features [#new-features-15]

        **PPT Volume Control**

        This version adds the \`getSlideVolumeWithCompletionHandler\` and \`updateSlideVolume \`methods to retrieve and update the volume of audio in PPT slides.

        **PPT URL Intercept and Replacement**

        \`WhiteSdkConfiguration\` adds a new configuration option, \`enableSlideInterrupterAPI\`, to enable intercepting and replacing URLs of PPT resources. This feature can be used to encrypt PPT resources uploaded by users and protect their privacy. Once enabled, you can set a callback object by calling \`WhiteSDK.setSlideDelegate\` and add the logic for replacing PPT URLs in the \`slideUrlInterrupter: url: completionHandler\` callback. This achieves the functionality of intercepting and replacing PPT URLs.

        **PPT Rendering Notification**

        \`WhiteSdkConfiguration\` adds the \`whiteSlideAppParams\` configuration option for displaying configurations related to [@netless/app-slide](https://github.com/netless-io/netless-app/tree/master/packages/app-slide) rendering. Currently, it supports configuring \`WhiteSlideAppParams.showRenderError\` to show or hide rendering error notifications.

        **Custom API Server Domain**

        \`WhiteSdkConfiguration\` adds the \`apiHosts\` configuration option to configure a list of API server domains for the whiteboard, which can be used for server proxy implementation.

        **Custom Module Source**

        \`RoomParams\` adds the \`modulesOrigin\` configuration option to configure the address for requesting whiteboard module data.

        **Document Operation Events**

        This release adds the \`dispatchDocsEvent\` method to send events to the inserted PDF/PPTX documents in the whiteboard, allowing control over document page flipping, page navigation, and slide animation playback.

        **Window Fullscreen**

        A new property, \`WindowParams.fullscreen\`, is added to control whether the window is displayed in fullscreen mode.

        #### API changes [#api-changes-10]

        **Added**

        * \`getSlideVolumeWithCompletionHandler\`
        * \`updateSlideVolume\`
        * \`WhiteSdkConfiguration\`
          * \`enableSlideInterrupterAPI\`
          * \`whiteSlideAppParams\`
          * \`apiHosts\`
        * \`setSlideDelegate\`
          * \`WhiteSlideDelegate\`
          * \`slideUrlInterrupter: url: completionHandler\`
        * \`dispatchDocsEvent\`
          * \`WhiteWindowDocsEventOptions\`
          * \`WhiteWindowDocsEventKey\`
        * \`modulesOrigin\` in \`RoomParams\`
        * \`modulesOrigin\` in \`PlayerConfiguration\`
        * \`fullscreen\` in \`WhiteWindowParams\`

        **Deprecated**

        * \`WhiteRegionGB\` in \`WhiteRegionKey\`, use \`WhiteRegionEU\` instead
        * \`WhitePptParams\`, use \`WhiteSlideAppParams\` instead
      </Accordion>

      <Accordion title="v2.16.46" id="v21646" headingLevel="2" value="v21646">
        v2.16.46 was released on December 2, 2022.

        <CalloutContainer type="info">
          <CalloutTitle>
            Note
          </CalloutTitle>

          <CalloutDescription>
            The wrapped Web SDK has been upgraded to v2.16.35.
          </CalloutDescription>
        </CalloutContainer>

        #### New features [#new-features-16]

        **1. Whiteboard tool updates**

        This release adds new features for the following whiteboard tools:

        * Pencil: Adds support for drawing dotted lines by setting \`room.memberState.dottedLine\` as \`true\`.
        * Text: Adds support for directly selecting and editing whiteboard text by setting \`room.memberState.textCanSelectText\` as \`true\`.

        In addition, this release adds a pencil eraser tool to erase any part of a pencil stroke.

        **2. Floatbar**

        This release adds the floatbar feature. The floatbar pops up when selecting any whiteboard item, which enables users to
        easily edit these whiteboard items. For example, when selecting a stroke, the floatbar enables the user to remove it or change its color.
        When selecting some text, the floatbar enables the user to adjust its style or change its typeface.

        Modify the \`floatBar\` parameter in the \`WhiteRoomConfig\` interface to enable floatbar.

        **3. Take screenshots**

        This release adds \`getLocalSnapShotWithCompletion\` in the \`WhiteDisplayer\` class to take a screenshot of the current whiteboard page.

        **4. Request slide log**

        This release adds the \`requestSlideLogToFilePath\` method in the \`WhiteSDK\` class to write the slide log into a specified file.

        #### Improvements [#improvements-8]

        This release provides the following improvements:

        * The SDK now automatically tries to recover after the whiteboard crashes due to insufficient web memory. If you have previously
          configured \`navigationDelegate\`, you need to undo that to apply this optimization. In addition, this release adds the
          \`startRecoveringFromMemoryIssues\` and \`endRecoveringFromMemoryIssues\` callbacks to report when the SDK starts to recover and
          finishes its recovery, respectively.
        * You can now pause or resume audio mixing or playback in dynamic PPT files with the \`pauseAudioMixing\` and \`resumeAudioMixing\` methods.

        #### Fixed issues [#fixed-issues-10]

        This release fixes the following issues:

        * The creation of the whiteboard app sometimes failed after reconnection.
        * When creating the whiteboard app, synchronizing the initial height and width sometimes failed.
        * The \`WhiteBroadcastState\` sometimes failed to initialize when joining the room.
        * When using a non-ApplePencil stylus on the iPad, calling \`drawOnlyPencil\` sometimes caused the whiteboard to crash.
        * Calling \`drawOnlyPencil\` sometimes reported an error when the user did not have write permissions.
        * Switching the readable/writable state sometimes caused the configuration to be lost in the \`disableCameraTransform\` of \`mainView\`.

        #### API changes [#api-changes-11]

        **Added**

        * New properties in the \`MemberState\` class: \`dottedLine\` and \`textCanSelectText\`
        * \`pauseAudioMixing\`
        * \`resumeAudioMixing\`
        * New parameter in the \`WhiteRoomConfig\` interface: \`floatBar\`
        * New type in \`WhiteApplianceNameKey\`: \`AppliancePencilEraser\`
        * \`requestSlideLogToFilePath\`
        * \`startRecoveringFromMemoryIssues\`
        * \`endRecoveringFromMemoryIssues\`
        * \`getLocalSnapShotWithCompletion\`
      </Accordion>

      <Accordion title="v2.16.24" id="v21624" headingLevel="2" value="v21624">
        v2.16.24 was released on September 13, 2022.

        #### New features [#new-features-17]

        **1. Inserting text**

        This release adds the \`insertText\` method to \`WhiteRoom\` for inserting text at a specified position.

        **2. Disabling the stroke effect**

        This release adds the \`disableNewPencilStroke\` property to \`WhiteSdkConfiguration\` to enable or disable the stroke effect of the pencil. The default value of \`disableNewPencilStroke\` is \`YES\`, and the SDK enables the stroke effect immediately when you call \`disableNewPencil(NO)\` to enable the new pencil. To disable the stroke effect after setting \`disableNewPencil(NO)\`, you can call \`disableNewPencilStroke(YES)\`.

        **3. Getting the scene information**

        This release adds the \`getSceneFromScenePath\` method to the \`WhiteDisplayer\` class, which supports using the scene path to get the information about a specified scene.

        **4. Setting whether to only allow drawing and writing using the Apple Pencil**

        This release supports setting whether to only allow users to draw and write on the whiteboard using the Apple Pencil on iPad. Before joining a whiteboard room, you can set this by using the \`drawOnlyApplePencil\` property in \`WhiteRoomConfig\`; after joining a whiteboard room, you can call the \`setDrawOnlyApplePencil\` method in \`WhiteRoom\` to change the setting.

        **5. Support for YYKit**

        The Agora Whiteboard SDK for iOS uses [YYModel](https://github.com/ibireme/YYModel) for data type conversion by default. As of this release, the SDK adds support for YYKit. To use [YYKit](https://github.com/ibireme/YYKit), you need to add the following line to the \`Podfile\` file to add the dependency:

        \`\`\`bash
        pod 'Whiteboard/Whiteboard-YYKit'
        \`\`\`

        #### Improvements [#improvements-9]

        This release provides the following improvements:

        * Adds tween animation for the new pencil. This allows the SDK to automatically insert frames between keyframes when a user draws or writes with the new pencil, so that remote users see a smoother drawing process. To experience this improvement, ensure that you have called \`setDisableNewPencil(false)\` to enable the new pencil.
        * Optimizes the reconnecting mechanism in weak network environment to reduce unnecessary reconnections.

        #### Fixed issues [#fixed-issues-11]

        This release fixed the following issues:

        * Occasionally, the contents on the whiteboard appeared shifted and overshadowed after users zoomed or moved their view.
        * Occasionally, users could not switch the pages of a dynamic PPT slide after an SDK reconnection.
        * The contents on the whiteboard occasionally were not fully displayed when users joined a whiteboard room that already had.
        * A memory leak sometimes occurred after an SDK reconnection.
        * An error sometimes occurred when calling \`setWritable\` repeatedly.
        * The virtual keyboard did not pop up when clicking \`text\` on iOS browsers.
        * When a user switched to read-only mode, then switched back to read-write mode and wrote, remote users saw that user's cursor as fixed.

        #### API changes [#api-changes-12]

        **Added**

        * \`insertText\`
        * \`getSceneFromScenePath\`
        * \`setDrawOnlyApplePencil\`
        * \`drawOnlyApplePencil\`
        * \`disableNewPencilStroke\`
      </Accordion>

      <Accordion title="v2.15.23" id="v21523" headingLevel="2" value="v21523">
        v2.15.23 was released on January 21, 2022.

        This release provides the following improvements:

        * Updates \`white-web-sdk\` to v2.15.16.
        * Optimizes \`getSceneSnapshotImage\` and \`getScenePreviewImage\` to ensure the images inserted in the scene are displayed correctly in the screenshot.
      </Accordion>

      <Accordion title="v2.15.0" id="v2150-1" headingLevel="2" value="v2150-1">
        v2.15.0 was released on November 16, 2021.

        #### Compatibility changes [#compatibility-changes-5]

        To simplify APIs, this release deletes the \`joinRoomWithUuid\` and \`joinRoomWithRoomUuid\` methods, and keeps only the \`joinRoomWithConfig\` method.

        At the same time, to help you manage users in a room, this release adds the \`uid\` parameter in \`initWithUuid\` of the \`WhiteRoomConfig\` class, for setting the unique identifier of a user.

        If you upgrade the SDK to v2.15.0 or later, to join a room, you must call \`joinRoomWithConfig\`, and ensure that you pass in a string \`uid\` in \`initWithUuid\` when initializing the \`WhiteRoomConfig\` object. The \`uid\` of each user cannot be longer than 1024 bytes and must be unique in the same room. For more information, see [Join a Whiteboard Room](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/get-started-sdk#join-the-interactive-whiteboard-room-from-your-app-client).

        #### New features [#new-features-18]

        This release adds support for converting and displaying the following PowerPoint (PPT) features:

        * Action buttons
        * Slide masters added with animation effects.

        #### Improvements [#improvements-10]

        This release provides the following improvements:

        * Updates \`white-web-sdk\` to v2.15.1.
        * Further optimizes the writing experience.

        #### Fixed issues [#fixed-issues-12]

        This release has fixed the following issues:

        * The following issues with displaying dynamic PPT files in the whiteboard were fixed:
          * The images were displaced occasionally.
          * Failure to read certain styles caused the screen to go blank.
          * The rotation angle and color were incorrect for some text.
          * Occasionally, elements with an animation effect were not displayed
          * The animation of some text was displayed incorrectly.

        #### API changes [#api-changes-13]

        **Modified**

        * \`initWithUuid:roomToken\`
        * \`initWithUuid:roomToken:userPayload\`

        **Deleted**

        * \`initWithUuid:roomToken:memberInfo\`
        * \`joinRoomWithUuid\`
        * \`joinRoomWithRoomUuid\`
      </Accordion>

      <Accordion title="v2.14.1" id="v2141" headingLevel="2" value="v2141">
        v2.14.1 was released on November 11, 2021.

        #### Compatibility changes [#compatibility-changes-6]

        As of this release, the minimum platform version supported by the Agora Interactive Whiteboard iOS SDK changes from iOS 9 to iOS 10.

        #### Improvements [#improvements-11]

        This release provides the following improvements:

        * Updates \`white-web-sdk\` to v2.14.4.
        * Further optimizes the writing performance.
        * Optimizes the shape of handwriting.
        * Improves the accuracy of the \`firePhaseChanged\` callback.
        * Hides elements that should not be displayed in a slide master using the file-conversion function.

        #### Fixed issues [#fixed-issues-13]

        This release has fixed the following issues:

        * After switching to the hand tool, users could not switch back to the cursor.
        * Occasionally, the handwriting disappeared suddenly during writing.
        * Occasionally, the handwriting had unnatural teardrop-like strokes during writing.
        * When the user edited text after manually scaling the text box, the text box and text reverted to the original size.
        * The view became incorrect after the window size changed on some browsers and devices.
        * When the eraser was moved quickly, the eraser icon was not enlarged and the fast deleting function did not work.
        * Occasionally, multiple audio files in dynamic PPT slides played simultaneously.
        * Animations were displayed incorrectly after a dynamic PPT slide returned to the previous page.
        * Occasionally, a text box with an animation effect was flipped in mirror mode.
      </Accordion>

      <Accordion title="v2.13.19" id="v21319" headingLevel="2" value="v21319">
        v2.13.19 was released on August 20, 2021.

        #### New features [#new-features-19]

        This release has the following new features:

        * Adds the \`logger\` callback in \`WhiteCommonCallbackDelegate\`, with which you can get the local debug logs output by the SDK.

        * Adds support for converting and displaying the following PowerPoint (PPT) features:
          * Add animations to text per paragraph.
          * Animate text by word or by letter.
          * All preset table styles.
          * Fonts smaller than 9 pt (12 px).

        #### Improvements [#improvements-12]

        This release has the following improvements:

        * Updates \`white-web-sdk\` to 2.13.17.
        * To improve security, disables the \`allowUniversalAccessFromFileURLs\` function inside the whiteboard. After turning off this function, when you call \`getSceneSnapshotImage\`, cross-origin images might not be displayed in the generated screenshots.

        #### Fixed issues [#fixed-issues-14]

        This release fixed the following issues:

        * Occasionally, the room was stuck in the connecting state when the user joined a room.
        * The cursor disappeared for some users after the SDK reconnected.
        * The status of some plugins was incorrect after the SDK reconnected.
        * The hand tool was not restricted by the set \`WhiteCameraBound\`.
        * On some high-resolution devices, when the user was in the \`Follower\` of \`setViewMode\` view mode, the center point of the view was slightly shifted.
        * The following issues with displaying dynamic PPT files in the whiteboard were fixed:
          * Paragraph spacing was displayed incorrectly.
          * Failed to split text into columns.
          * The slide background fill of shapes was displayed incorrectly.
          * Hanging indentation was displayed incorrectly.
          * The slide was displayed incorrectly when the user called \`pptPreviousStep\` to roll back a slide.
          * The numbering of text displayed incorrectly.
          * Some equations were displayed incompletely after conversion.
          * Some lines broke incorrectly.
          * Text written from right to left (such as Arabic) was displayed incorrectly.
      </Accordion>

      <Accordion title="v2.13.15" id="v21315" headingLevel="2" value="v21315">
        v2.13.15 was released on July 23 2021.

        #### New features [#new-features-20]

        To improve the dynamic file conversion function, this release adds support for converting and displaying the following PowerPoint (PPT) features:

        * Animation effect > Reverse Path Direction
        * Vertical Text Box
        * Microsoft Equation Editor 3.0
        * Hide background graphic in a slide master
        * Change the color of pictures
        * The following picture effects are now supported:
          * Metal Frame
          * Soft Edge Rectangle
          * Double Frame, Black
          * Thick Matte, Black
          * Simple Frame, Black
          * Moderate Frame, Black
          * Center Shadow Rectangle
          * Soft Edge Oval
          * Metal Rounded Rectangle
          * Metal Oval

        #### Improvements [#improvements-13]

        This release has the following improvements:

        * Updates \`white-web-sdk\` to 2.13.11.
        * Updates \`@netless/video-js-plugin\` to 0.3.3.
        * Reduces CPU usage during the playback of animations in dynamic PPT files.
        * Improves the smoothness of writing and drawing on the whiteboard.
        * Optimizes the timestamp synchronization algorithm to reduce time differences.
        * Supports printing logs on scene changes.
        * Adds the \`previewURL\` parameter in \`WhitePptPage\`, which supports displaying dynamic PPT previews in the whiteboard. See \`API reference\`.
        * Deprecates the \`backgroundColor\` property in the \`WhiteDisplayer\` class. Instead, this release optimizes the implementation of the \`WhiteboardView\` class, which allows you to use the \`backgroundColor\` property of the \`UIView\` class to modify the background color of the whiteboard. See [backgroundcolor](https://developer.apple.com/documentation/uikit/uiview/1622591-backgroundcolor).

        #### Fixed issues [#fixed-issues-15]

        This release fixed the following issues:

        * The contents on the whiteboard occasionally became unclear when the user adjusted the view.
        * Users of the Android SDK occasionally failed to draw the first line after joining the room.
        * The method call of \`refreshViewSize\` did not take effect occasionally.
        * The following issues with displaying dynamic PPT files in the whiteboard were fixed:
          * Animations did not play in the set order.
          * Animations did not disappear when playback finished.
          * Table height was displayed incorrectly.
          * Pictures inserted in content placeholders failed to display.
          * Some shapes were rendered incorrectly.
          * The text was incorrectly indented.
          * Animation triggers did not work.
          * Picture transparency was incorrect.
      </Accordion>

      <Accordion title="v2.13.4" id="v2134-1" headingLevel="2" value="v2134-1">
        v2.13.4 was released on June 15, 2021.

        This release updates \`white-web-sdk\` to 2.13.4.
      </Accordion>

      <Accordion title="v2.13.2" id="v2132-1" headingLevel="2" value="v2132-1">
        v2.13.2 was released on June 11, 2021.

        This release updates \`white-web-sdk\` to 2.13.3.
      </Accordion>

      <Accordion title="v2.13.1" id="v2131-1" headingLevel="2" value="v2131-1">
        v2.13.1 was released on June 11, 2021.

        **Improvement**

        This release updates \`white-web-sdk\` to 2.13.2.

        **Issue fixed**

        This release fixed the issue that when \`disableDeviceInputs\` is set as \`true\`, the user might still be able to operate the iframe plugin.
      </Accordion>

      <Accordion title="v2.12.33" id="v21233-1" headingLevel="2" value="v21233-1">
        v2.12.33 was released on June 8, 2021.

        This release fixed the following issue: If the user in host mode zooms in or out on the HTML5 file while using the clicker tool, users in follower mode saw incomplete display of file content.
      </Accordion>

      <Accordion title="v2.12.32" id="v21232-1" headingLevel="2" value="v21232-1">
        v2.12.32 was released on June 7, 2021.

        This release updates [\`@netless/cursor-tool\`](https://github.com/netless-io/whiteboard-demo/tree/master/packages/cursor-tool) to 0.1.0 and \`@netless/iframe-bridge\` to 2.1.2.
      </Accordion>

      <Accordion title="v2.12.31" id="v21231-1" headingLevel="2" value="v21231-1">
        v2.12.31 was released on June 4, 2021.

        This release updates  \`white-web-sdk\` to 2.12.21 and [\`@netless/video-js-plugin\`](https://www.npmjs.com/package/@netless/video-js-plugin) to 0.1.5.
      </Accordion>

      <Accordion title="v2.12.30" id="v21230-1" headingLevel="2" value="v21230-1">
        v2.12.30 was released on June 2, 2021.

        This release fixed the video display issue of \`@netless/video-js-plugin\`.
      </Accordion>

      <Accordion title="v2.12.29" id="v21229-1" headingLevel="2" value="v21229-1">
        v2.12.29 was released on June 1, 2021.

        This release updates [\`@netless/video-js-plugin\`](https://www.npmjs.com/package/@netless/video-js-plugin) to 0.1.3 to fix the incompatibility issue between the \`video-js-plugin\` and earlier versions of iOS WebView.
      </Accordion>

      <Accordion title="v2.12.28" id="v21228-1" headingLevel="2" value="v21228-1">
        v2.12.28 was released on May 25, 2021.

        This release updates [\`@netless/cursor-tool\`](https://github.com/netless-io/whiteboard-demo/tree/master/packages/cursor-tool) to 0.0.9.
      </Accordion>

      <Accordion title="v2.12.27" id="v21227-1" headingLevel="2" value="v21227-1">
        v2.12.27 was released on May 24, 2021.

        #### New features [#new-features-21]

        This release integrates [\`@netless/video-js-plugin\`](https://www.npmjs.com/package/@netless/video-js-plugin), which is used by an iOS client to watch video played on the whiteboard on a Web client. Supported file formats include M3U8 and others.

        #### Improvement [#improvement-1]

        This release updates \`white-web-sdk\`  to 2.12.20.
      </Accordion>

      <Accordion title="v2.12.26" id="v21226-1" headingLevel="2" value="v21226-1">
        v2.12.26 was released on May 20, 2021.

        This release has the following improvements:

        * Adds \`ApplianceClicker\` to \`WhiteApplianceNameKey\` for interacting with HTML5 files.
        * Updates \`white-web-sdk\` to 2.12.19.
      </Accordion>

      <Accordion title="v2.12.25" id="v21225-1" headingLevel="2" value="v21225-1">
        v2.12.25 was released on May 17, 2021.

        This release has the following improvements:

        * Enables server-side typesetting (\`useServerWrap\`) by default. When server-side typesetting is enabled, the size of font files are automatically reduced for faster rendering.
        * Updates \`white-web-sdk\` to 2.12.18.
      </Accordion>

      <Accordion title="v2.12.24" id="v21224-1" headingLevel="2" value="v21224-1">
        v2.12.24 was released on May 13, 2021.

        This release adds the following features:

        * Adds \`ApplianceShape\` to \`WhiteApplianceNameKey\` for setting the shape tool. Supported shape types include triangle, rhombus, pentagram, and speech balloon.
        * Adds the \`syncBlockTimestamp\` method to the \`Room\` class. You can use this method to set the delay time for sending the whiteboard content, so that the whiteboard content and the audio and video are sent at the same time.
        * Updates \`white-web-sdk\` to 2.12.17.
      </Accordion>

      <Accordion title="v2.12.23" id="v21223" headingLevel="2" value="v21223">
        v2.12.23 was released on May 11, 2021.

        This release adds the \`RegionKey\` enumeration for setting the data center.
      </Accordion>

      <Accordion title="v2.12.23" id="v21223-1" headingLevel="2" value="v21223-1">
        v2.12.23 was released on May 11, 2021.

        This release adds the \`RegionKey\` enumeration, which is used to set the data center.
      </Accordion>

      <Accordion title="v2.12.22" id="v21222-1" headingLevel="2" value="v21222-1">
        v2.12.22 was released on April 28, 2021.

        This release updates \`@Netless/white-audio-plugin2\` and \`@Netless/white-video-plugin2\` to fix some display issues.
      </Accordion>

      <Accordion title="v2.12.21" id="v21221-1" headingLevel="2" value="v21221-1">
        v2.12.21 was released on April 28, 2021.

        #### New features [#new-features-22]

        This release integrates [\`@Netless/white-audio-plugin2\`](https://github.com/netless-io/whiteboard-demo/tree/master/packages/white-audio-plugin) and [\`@Netless/white-video-plugin2\`](https://github.com/netless-io/react-whiteboard/tree/master/packages/white-video-plugin), which are used by an iOS client to listen to audio and watch video played on the whiteboard on a Web client.

        #### Fixed issues [#fixed-issues-16]

        This release updates \`@Netless/white-audio-plugin\` to 1.2.23.
      </Accordion>

      <Accordion title="v2.12.20" id="v21220-1" headingLevel="2" value="v21220-1">
        v2.12.20 was released on April 22, 2021.

        This release updates \`white-web-sdk\` to 2.12.14.
      </Accordion>

      <Accordion title="v2.12.19" id="v21219-1" headingLevel="2" value="v21219-1">
        v2.12.19 was released on April 22, 2021.

        This release has the following improvements:

        * Updates \`white-web-sdk\` to 2.12.13 to improve the display of dynamic PPT files.
        * Updates \`@Netless/iframe-bridge\` to 2.0.17.
      </Accordion>

      <Accordion title="v2.12.18" id="v21218-1" headingLevel="2" value="v21218-1">
        v2.12.18 was released on April 20, 2021.

        This release updates \`@Netless/iframe-bridge\` to 2.0.16.
      </Accordion>

      <Accordion title="v2.12.17" id="v21217-1" headingLevel="2" value="v21217-1">
        v2.12.17 was released on April 17, 2021.

        This release updates \`white-web-sdk\` to 2.12.12.
      </Accordion>

      <Accordion title="v2.12.16" id="v21216-1" headingLevel="2" value="v21216-1">
        v2.12.16 was released on April 14, 2021.

        This release updates \`@Netless/iframe-bridge\` to 2.0.14 to improve the iframe plugin.
      </Accordion>

      <Accordion title="v2.12.15" id="v21215-1" headingLevel="2" value="v21215-1">
        v2.12.15 was released on April 13, 2021.

        This release updates \`@netless/iframe-bridge\` to 2.0.13 to improve the logic of sending messages for HTML5 files.
      </Accordion>

      <Accordion title="v2.12.14" id="v21214-1" headingLevel="2" value="v21214-1">
        v2.12.14 was released on April 13, 2021.

        This release updates \`@netless/iframe-bridge\` to 2.0.11 to fix the display of HTML5 files.
      </Accordion>

      <Accordion title="v2.12.13" id="v21213-1" headingLevel="2" value="v21213-1">
        v2.12.13 was released on April 10, 2021.

        This release updates \`white-web-sdk\` to 2.12.9.
      </Accordion>

      <Accordion title="v2.12.12" id="v21212-1" headingLevel="2" value="v21212-1">
        v2.12.12 was released on April 9, 2021.

        This release updates \`@netless/iframe-bridge\` to 2.0.9 to fix the display of HTML5 files.
      </Accordion>

      <Accordion title="v2.12.11" id="v21211-1" headingLevel="2" value="v21211-1">
        v2.12.11 was released on April 9, 2021.

        This release updates \`@netless/iframe-bridge\` to 2.0.8 to fix the display of HTML5 files.
      </Accordion>

      <Accordion title="v2.12.10" id="v21210-1" headingLevel="2" value="v21210-1">
        v2.12.10 was released on April 6, 2021.

        This release updates \`white-web-sdk\` to 2.12.8 to fix the problem that setting Follower mode did not take effect immediately.
      </Accordion>

      <Accordion title="v2.12.9" id="v2129-1" headingLevel="2" value="v2129-1">
        v2.12.9 was released on April 2, 2021.

        This release updates \`white-web-sdk\` to 2.12.7 to improve the display of dynamic PPT files.
      </Accordion>

      <Accordion title="v2.12.8" id="v2128-1" headingLevel="2" value="v2128-1">
        v2.12.8 was released on March 30, 2021.

        This release updates \`@netless/iframe-bridge\` to 2.0.7.
      </Accordion>

      <Accordion title="v2.12.7" id="v2127-1" headingLevel="2" value="v2127-1">
        v2.12.7 was released on March 30, 2021.

        This release updates \`white-web-sdk\` to 2.12.6.
      </Accordion>

      <Accordion title="v2.12.6" id="v2126-1" headingLevel="2" value="v2126-1">
        v2.12.6 was released on March 25, 2021.

        This release updates \`@netless/iframe-bridge\` to 2.0.5.
      </Accordion>

      <Accordion title="v2.12.5" id="v2125-1" headingLevel="2" value="v2125-1">
        v2.12.5 was released on March 25, 2021.

        This release adds the \`scaleIframeToFit\` method to the \`Displayer\` class to enable zooming in and out so that HTML5 files can be completely displayed on screen.
      </Accordion>

      <Accordion title="v2.12.4" id="v2124" headingLevel="2" value="v2124">
        v2.12.4 was released on March 24, 2021.

        This release updates [\`@netless/cursor-tool\`](https://github.com/netless-io/whiteboard-demo/tree/master/packages/cursor-tool) to 0.0.7.
      </Accordion>

      <Accordion title="v2.12.3" id="v2123-1" headingLevel="2" value="v2123-1">
        v2.12.3 was released on March 20, 2021.

        This release changes the default value of \`disableNewPencil\` in the \`WhiteRoomConfig\` interface to \`YES\` so that the stroke effect is disabled by default. This addresses the issue that the stroke effect is not supported by SDKs earlier than v2.2.12.

        To enable the stroke effect properly, ensure that every user in the room is using one of the following SDKs:

        * Android SDK v2.12.3 or later
        * iOS SDK v2.12.3 or later
        * Web SDK v2.12.5 or later
      </Accordion>

      <Accordion title="v2.12.2" id="v2122-1" headingLevel="2" value="v2122-1">
        v2.12.2 was released on March 16, 2021.

        #### New features [#new-features-23]

        This release adds the stroke effect to better display handwriting. Call \`disableNewPencil\` in the \`WhiteRoomConfig\` interface to enable or disable the stroke effect.

        To enable the stroke effect properly, ensure that every user in the room is using one of the following SDKs:

        * Android SDK v2.12.2 or later
        * iOS SDK v2.12.2 or later
        * Web SDK v2.12.5 or later

        #### Improvements [#improvements-14]

        This release updates \`white-web-sdk\` to v2.12.4 and improves the display logic of PPT files.
      </Accordion>
    </Accordions>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ## Understand the tech [#understand-the-tech-2]

    This page tracks Web release notes for the Whiteboard SDK.

    ## Reference [#reference-2]

    <Accordions type="multiple">
      <Accordion title="v2.16.53" id="v21653" headingLevel="2" value="v21653">
        Released May 10, 2025

        #### Improvements [#improvements-15]

        This release includes the following changes:

        * For security and compliance, the \`regions\` parameter used when joining a whiteboard room now distinguishes between domestic and international data centers.
        * To prevent memory overflows caused by image uploads in formats such as \`base64\`, the \`src\` path for inserted images must now be a URL that starts with \`http\` or \`https\`.
      </Accordion>

      <Accordion title="v2.16.51" id="v21651" headingLevel="2" value="v21651">
        Released on July 28, 2025.

        #### New features [#new-features-24]

        **Alternative API domains**

        To ensure the connectivity of API calls, this version adds the following alternative API domains, which will be automatically selected during SDK initialization:

        | Domain                       | Covered region       |
        | ---------------------------- | -------------------- |
        | \`api.whiteboard.sd-rtn.com\`  | CN, India, Singapore |
        | \`api.baiban.shengwang.cn\`    | CN                   |
        | \`api.whiteboard.rtelink.com\` | US,  EU              |
        | \`api.netless.link\`           | CN, India, Singapore |
        | \`api.whiteboard.agora.io\`    | US,  EU              |

        #### Improvements [#improvements-16]

        This version includes the following improvements:

        **Optimized WebSocket transmission experience**

        To address the issue of slow whiteboard room joining, this version includes the following improvements:

        * Optimized WebSocket reconnection algorithm to improve reconnection speed.
        * Added \`onConnection\` event to report that WebSocket is connected and is downloading the whiteboard snapshot data of the current room to restore the room state. You can use this callback event to prompt users that the whiteboard room is loading.

        **Other improvements**

        This version also includes the following improvements:

        * Improved the algorithm for determining whether the cursor hits a graphic when the graphic has a fill color, optimizing the graphic selection experience.
        * Added a \`timeout\` parameter to the \`screenshotToCanvasAsync\` method to set the image loading timeout. If the image loading exceeds this time, the SDK will directly proceed to the next drawing operation without waiting for the image to load completely.
        * Added a \`commandWheelToZoom\` property to \`ConstructRoomParams\` to implement zooming the whiteboard by holding down the \`command\` key and scrolling the mouse wheel on macOS devices.
        * Optimized the button style of the "Transparent" fill color in the floating bar.

        #### Fixed issues [#fixed-issues-17]

        This version fixes the following issue:

        * The error message \`AkkoSocket can't emit when phase is connecting\` that appears in the console when connecting to WebSocket for more than 2 seconds.

        #### API changes [#api-changes-14]

        **Added**

        * \`onConnection\`
        * The \`timeout\` parameter in the \`screenshotToCanvasAsync\`
        * The \`commandWheelToZoom\` parameter in \`ConstructRoomParams\`
      </Accordion>

      <Accordion title="v2.16.49" id="v21649" headingLevel="2" value="v21649">
        Released on July 28, 2025.

        #### New features [#new-features-25]

        **Fill closed shape elements**

        \`MemberState\` adds the \`fillColor\` property, which is used to set the fill color of closed shape elements such as circles and rectangles.

        **Automatic switch to select tool**

        \`MemberState\` adds the following properties to automatically switch to the select tool after using the corresponding whiteboard tool:

        * \`textCompleteToSelector\`: Automatically switch to the select tool after typing with the text tool.
        * \`rectangleCompleteToSelector\`: Automatically switch to the select tool after drawing a rectangle.
        * \`ellipseCompleteToSelector\`: Automatically switch to the select tool after drawing a circle.
        * \`straightCompleteToSelector\`: Automatically switch to the select tool after drawing a straight line.
        * \`arrowCompleteToSelector\`: Automatically switch to the select tool after drawing an arrow.
        * \`shapeCompleteToSelector\`: Automatically switch to the select tool after drawing a triangle, bubble, or other shapes.

        **Whiteboard drawing performance optimization strategy**

        The \`joinRoom\` method adds the \`optimizeOptions\` parameter to set the performance optimization strategy for whiteboard drawing. The performance optimization options include:

        * Adjusting the refresh interval of whiteboard drawing: A lower refresh interval provides smoother stroke display but has a higher resource consumption, while a higher refresh interval may result in laggy strokes but has a lower resource consumption.
        * Using single canvas drawing: By default, the whiteboard uses two canvases alternately to avoid flickering on some devices during drawing. Using a single canvas drawing can eliminate redraws and reduce performance consumption.
        * Using floating canvas: When writing on the whiteboard, after enabling single canvas drawing, a floating canvas of approximately 256 x 256px is generated based on the drawing position. When subsequent drawings are within the range of this floating canvas, the synchronization of strokes is limited to this floating canvas, reducing performance consumption.

        #### Improvements [#improvements-17]

        This version includes the following improvements:

        * \`MemberState\` adds the \`textSizeOverride\` property, which is used to set the default font size of the text tool. If not set, the default font size used will be the same as the last created text element.
        * The \`room.useNativeClipboard\` property is added to set whether to use the native clipboard. When enabled, the whiteboard shortcuts for copy and paste in \`HotKeys\` will be disabled and replaced with the native \`copy\` and \`paste\` events.
        * \`DisplayerCallbacks\` adds the \`onBackgroundError\` callback to report background image loading failure.
        * \`RoomCallbacks\` adds the \`onObjectsLimit\` callback to report when the number of elements in the whiteboard exceeds the limit. When the limit is reached, the frontend will throw warnings and events.
        * \`ImageInformation\` adds the \`crossOrigin\` property to set whether to load images in a cross-origin manner. It is enabled by default.
        * The \`room\` class adds the \`syncMode\` property. When set to \`true\`, synchronization will be more frequent but may slightly affect animation smoothness.
        * A floating toolbar is displayed when selecting graphic elements, such as rectangles and circles, drawn on the whiteboard.
        * The \`clearUndoHistory\` method is added to clear the undo history.
        * Setting \`cursorAdapter: false\` can hide the built-in cursors, such as the laser pen, eraser, and so on.
        * Text elements now have a fixed line height to avoid display differences across platforms.

        #### Fixed issues [#fixed-issues-18]

        This version fixes the following issues:

        * Memory leaks caused by not destroying certain listeners when exiting the room.
        * Exception errors when read-only users pressed the Esc key.
        * Occasional display errors when drawing dashed lines.
        * An issue where erasing text with the eraser tool on touch devices did not work properly.
        * Occasional white screen when entering the room without any error messages.
        * Copied and pasted text elements could not be selected.
        * The persistent highlight of the text box content after deselecting the text box.

        #### API changes [#api-changes-15]

        **Added**

        * \`MemberState\` adds the following properties:
          * \`fillColor\`
          * \`textSizeOverride\`
          * \`textCompleteToSelector\`
          * \`rectangleCompleteToSelector\`
          * \`ellipseCompleteToSelector\`
          * \`straightCompleteToSelector\`
          * \`arrowCompleteToSelector\`
          * \`shapeCompleteToSelector\`
        * \`DisplayerCallbacks\` adds \`onBackgroundError\`
        * \`screenshotToCanvasAsync\`
        * \`Room\` adds the \`useNativeClipboard\` property
        * \`RoomCallbacks\` adds \`onObjectsLimit\`
        * \`clearUndoHistory\`
        * \`joinRoom\` adds the \`optimizeOptions\` parameter
        * \`OptimizeOptions\`
        * \`LowTaskAnimationInterval\`
        * \`OriginCoordType\`
        * \`ImageInformation\` adds the \`crossOrigin\` property
        * \`room\` adds the \`syncMode\` property
      </Accordion>

      <Accordion title="v2.16.43" id="v21643" headingLevel="2" value="v21643">
        v2.16.43 was released on January 19, 2024.

        #### Compatibility changes [#compatibility-changes-7]

        This version deprecates the existing London data center (\`gb-lon\`) in the Whiteboard Data Center and introduces a new data center in Frankfurt, Europe (\`eu\`), whose service covers Europe. If you have set \`gb-lon\` in the previous version, please switch to\` eu\` after upgrading to this version and enable this data center in Agora Console.

        #### Fixed issues [#fixed-issues-19]

        This version fixed the issue on the Windows platform when using the Whiteboard Web App where the \`shift\` key was incorrectly detected, causing the pencil tool to switch to drawing straight lines and unable to revert back.
      </Accordion>

      <Accordion title="v2.16.37" id="v21637" headingLevel="2" value="v21637">
        v2.16.37 was released on December 2, 2022.

        #### New features [#new-features-26]

        **1. Whiteboard tool updates**

        This release adds new features for the following whiteboard tools:

        * Ellipse: Press the \`Alt\` or \`option\` button to draw a circle with the cursor as the center.
        * Pencil:
          * Draw straight lines: The user can press \`shift\` to draw a straight line.
          * Draw dotted lines: Add \`dottedLine: true\` in \`room.memberState\` to enable this feature.
          * Writing performance: Adds support for adjusting the balance between the performance and the quality of the pencil
            tool by modifying the \`NewPencilWritingQuality\` enum.
        * Text: Adds support for directly selecting and editing whiteboard text by adding \`textCanSelectText: true\` in \`room.memberState\`.

        In addition, this release adds a pencil eraser tool to erase any part of a pencil stroke.

        **2. Screenshot to canvas**

        This release adds the \`screenshotToCanvas\` method to take a screenshot and write it to canvas.

        #### Fixed issues [#fixed-issues-20]

        This release fixes the following issues:

        * The recall and redo function sometimes got reset after the user switched pages or reconnected.
        * Some fields in \`room.setMemberState()\` could not be saved locally.
        * The \`floatBar\` did not work properly on some touch devices.

        #### API changes [#api-changes-16]

        **Added**

        * New properties in the \`MemberState\` class: \`dottedLine\` and \`textCanSelectText\`
        * \`NewPencilWritingQuality\`
        * \`screenshotToCanvas\`
        * New value in the \`ApplianceNames\` enum: \`pencilEraser\`
      </Accordion>

      <Accordion title="v2.16.24" id="v21624-1" headingLevel="2" value="v21624-1">
        v2.16.24 was released on September 13, 2022.

        #### New features [#new-features-27]

        **1. Text editing**

        To support custom text editing options, this release adds the following APIs.

        * \`insertText\`: Inserts text at a specified position.
        * \`updateText\`: Modifies the specified text.
        * \`updateSelectedText\`: Modifies the font style of the currently selected text, including font size, color, bold style, and italic style.

        You can use these APIs to customize the text input box and editing toolbar.

        This release also adds the \`textColor\`, \`bold\`, \`italic\`, \`underline\`, and \`lineThrough\` properties to \`MemberState\` to provide richer text editing options. When you use the \`text\` tool provided by the Whiteboard SDK but want to customize the text editing toolbar, you can set the \`floatBar\` property in \`JoinRoomParams\` as \`false\` and edit the text using the new properties in \`MemberState\`.

        <CalloutContainer type="info">
          <CalloutDescription>
            This release deletes the \`updateTextFontSize\` method. Instead, you can use \`updateSelectedText\` or \`textSize\` in \`MemberState\`.
          </CalloutDescription>
        </CalloutContainer>

        **2. Image rotation**

        This release adds the \`disableRotation\` property to \`WhiteWebSdkConfiguration\` to enable or disable image rotation. The SDK enables image rotation by default, which allows users to rotate the selected image by any angle. If you want to disable the rotation, you can set \`disableRotation(true)\`.

        **3. Tween animation**

        This release adds the tween animation feature for the \`pencil\` tool. When a user draws or writes with the pencil, the SDK automatically inserts frames between keyframes so that to remote users see a smoother drawing process, but this feature increases latency.

        This release also adds the \`disableCurveAnimes\` property to \`WhiteWebSdkConfiguration\` for enabling or disabling the tween animation feature. The tween animation feature is enabled in the SDK by default. To disable it, you can set \`disableCurveAnimes(true)\`.

        <CalloutContainer type="info">
          <CalloutDescription>
            Tween animations take effect only when \`disableNewPencil\` is set as \`false\`.
          </CalloutDescription>
        </CalloutContainer>

        **4. Disabling the stroke effect**

        This release adds the \`disableNewPencilStroke\` property to \`WhiteWebSdkConfiguration\` to enable or disable the stroke effect of the pencil. The default value of \`disableNewPencilStroke\` is \`true\`, and the SDK enables the stroke effect immediately when you set \`disableNewPencil(false)\` to enable the new pencil. To disable the stroke effect after setting \`disableNewPencil(false)\`, you can call \`disableNewPencilStroke(true)\`.

        <CalloutContainer type="info">
          <CalloutDescription>
            The stroke effect takes effect only when \`disableNewPencil\` is set as \`false\`.
          </CalloutDescription>
        </CalloutContainer>

        **5. Getting the scene information**

        This release adds the \`getScene\` method to the \`Displayer\` class, which supports using the scene path to get the information about a specified scene.

        **6. Scene callbacks**

        This release adds the \`createScenesCallback\` method for creating a listener object for a scene directory. After the listener object is successfully created, when the scenes and subdirectories in the specified scene directory change, the SDK triggers the callbacks you have registered in \`ScenesCallbacks\` to report the scene events.

        **7. Reporting exceptions that occur when playing the media file in a dynamic PPT slide**

        This release adds the \`onPPTMediaPlayError\` callback to report exceptions that occur during the playing of the media file in a dynamic PPT slide.

        #### Improvements [#improvements-18]

        This release provides the following improvements:

        * Optimizes the writing performance on Android browsers.
        * Optimizes the reconnecting mechanism in weak network environment to reduce unnecessary reconnections.

        #### Fixed issues [#fixed-issues-21]

        This release fixed the following issues:

        * Occasionally, the contents on the whiteboard appeared shifted and overshadowed after users zoomed or moved their view.
        * Occasionally, users could not switch the pages of a dynamic PPT slide after an SDK reconnection.
        * The contents on the whiteboard occasionally were not fully displayed when users joined a whiteboard room that already had.
        * A memory leak sometimes occurred after an SDK reconnection.
        * An error sometimes occurred when calling \`setWritable\` repeatedly.
        * Rendering exceptions and errors occurred when using the SDK on an early version of React.
        * The virtual keyboard did not pop up when clicking \`text\` on iOS browsers.
        * When a user switched to read-only mode, then switched back to read-write mode and wrote, remote users saw that user's cursor as fixed.

        #### API changes [#api-changes-17]

        **Added**

        * \`insertText\`
        * \`updateText\`
        * \`updateSelectedText\`
        * \`getScene\`
        * \`createScenesCallback\`
        * \`onPPTMediaPlayError\`
        * The following properties in \`MemberState\`:
          * \`textColor\`
          * \`bold\`
          * \`italic\`
          * \`underline\`
          * \`lineThrough \`
        * The following properties in \`WhiteWebSdkConfiguration\`:
          * \`disableRotation\`
          * \`disableCurveAnimes\`
          * \`disableNewPencilStroke\`

        **Deleted**

        * \`updateTextFontSize\`
        * \`CustomInput\`
      </Accordion>

      <Accordion title="v2.15.16" id="v21516" headingLevel="2" value="v21516">
        v2.15.16 was released on January 21, 2022.

        #### Improvements [#improvements-19]

        This release provides the following improvements:

        * Optimizes the logic of \`disconnect\` and \`setWritable\` to ensure that the SDK returns a \`Promise\` object only when all requests sent before the \`disconnect()\` or \`setWritable(false)\` method call are executed.
        * Optimizes the UI of the text editing floating bar (\`floatBar\`), and saves the text format set by users on the floating bar.

        #### Fixed issues [#fixed-issues-22]

        This release fixed the following issues:

        * The error code returned when joining a room failed was inaccurate.
        * After rejoining a room, \`room.state.memberState\` returned the initial state of the room, rather than the current state.
        * The console reported an error after a successful reconnection.
        * \`room.state.memberState\` occasionally returned \`undefined\`.
        * The button on the text editing floating bar (\`floatBar\`) sometimes did not work or disappeared.
        * The whiteboard room went blank and tried a reconnection.
        * The user received the event notification multiple times after calling \`dispatchMagixEvent\` to send an event.
        * File conversion failed because the background fill property was not set in the source PPT file.
        * The \`canvas\` rendering engine occasionally crashed.
        * The CPU usage of the \`canvas\` rendering was occasionally high.
        * On some iOS or Android devices, grids occasionally appeared on the whiteboard.
      </Accordion>

      <Accordion title="v2.15.1" id="v2151" headingLevel="2" value="v2151">
        v2.15.1 was released on November 16, 2021, which fixed the following issues with displaying dynamic PPT files in the whiteboard:

        * When there are bugs with the animation effects in a slide master, slides based on that slide master could not be switched.
        * Some clickable elements did not take effect when clicked.
      </Accordion>

      <Accordion title="v2.15.2" id="v2152" headingLevel="2" value="v2152">
        v2.15.2 was released on November 19, 2021.

        #### New features [#new-features-28]

        **1. Disables/Enables the frequency limit for writing synchronization**

        This release adds the \`disablePencilWrittingLimitFrequency\` property in \`JoinRoomParams\`, for disabling or enabling the frequency limit for synchronizing the writing input while using the \`pencil\` tool.

        **2.** **Options for setting a custom event listener**

        This release adds the \`options\` parameter in \`addMagixEventListener\` as well as the \`MagixEventListenerOptions\` type, for setting the following options for a custom event listener:

        * \`fireInterval\`: The interval (ms) of the SDK triggering custom event callbacks.
        * \`fireSelfEventAfterCommit\`: Whether to send event callbacks after the Agora server acknowledges the \`dispatchMagixEvent\` method call is successful.

        #### Fixed issues [#fixed-issues-23]

        This release fixed the rendering crashes after initializing the room or adjusting the order of components in the scene under certain circumstances.

        #### API changes [#api-changes-18]

        **Added**

        * The \`disablePencilWrittingLimitFrequency\` property in \`JoinRoomParams\`
        * The \`options\` parameter in \`addMagixEventListener\`
        * \`MagixEventListenerOptions\`
      </Accordion>

      <Accordion title="v2.15.0" id="v2150-2" headingLevel="2" value="v2150-2">
        v2.15.0 was released on November 16, 2021.

        #### Compatibility changes [#compatibility-changes-8]

        To help you manage users in a room, this release adds the \`uid\` property in \`JoinRoomParams\`, for setting the unique identifier of a user.

        If you upgrade the SDK to v2.15.0 or later, to avoid affecting your service, ensure that you pass in a string \`uid\` in \`JoinRoomParams\` when calling \`joinRoom\`. The \`uid\` of each user cannot be longer than 1024 bytes and must be unique in the same room. For more information, see [Join a Whiteboard Room](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/get-started-sdk#join-the-interactive-whiteboard-room-from-your-app-client).

        #### New features [#new-features-29]

        **1. Disables/Enables the frequency limit for sending custom events**

        This release adds the \`disableMagixEventDispatchLimit\` property in \`JoinRoomParams\`, for disabling or enabling the frequency limit for sending custom events.

        **2. File conversion optimizations**

        This release adds support for converting and displaying the following PowerPoint (PPT) features:

        * Action buttons
        * Slide masters added with animation effects.

        #### Improvements [#improvements-20]

        This release provides the following improvements:

        * The writing experience is optimized further.
        * To improve the user experience, the SDK sets \`uniformScale\` in \`ImageInformation\` as \`true\` by default when the \`insertImage\` method is called. This ensures the image is scaled based on its original aspect ratio when a user adjusts its size. If you do not want the image to be scaled proportionately, you can set \`uniformScale\` as \`false\`.

        #### Fixed issues [#fixed-issues-24]

        This release has fixed the following issues:

        * The room state became incorrect when you called \`setWritable(false)\` at the time of joining the room.
        * Multiple copies could appear when you pasted copied content.
        * Each property sometimes appeared twice when you read \`room.state.roomMembers\`.
        * The following issues with displaying dynamic PPT files in the whiteboard were fixed:
          * The images were occasionally displaced.
          * Failure to read certain styles caused the screen to go blank.
          * The rotation angle and color were incorrect for some text.
          * Occasionally, elements with an animation effect were not displayed
          * The animation of some text was displayed incorrectly.

        #### API changes [#api-changes-19]

        **Added**

        * The following properties in \`JoinRoomParams\`:

          * \`uid\`
          * \`disableMagixEventDispatchLimit\`

        **Modified**

        * \`seekToProgressTime\`

        **Deleted**

        * The \`pencilOptions\` property in \`MemberState\`
        * The \`broadcasterInformation\` property in \`BroadcastState\`
        * The \`zoomScale\` property in \`RoomState\`
        * The \`scheduleTime\` property in \`Player\`
        * The \`seekToScheduleTime\` method in \`Player\`
      </Accordion>

      <Accordion title="v2.14.5" id="v2145" headingLevel="2" value="v2145">
        v2.14.5 was released on November 10, 2021.

        #### Compatibility changes [#compatibility-changes-9]

        As of this release, \`white-web-sdk\` no longer supports the following versions of mobile browsers:

        * Browsers for Android 4.4 and earlier.
        * Browsers for iOS 9 and earlier.

        #### New features [#new-features-30]

        **1. Importing and exporting scenes**

        This release adds the following methods for importing and exporting scenes:

        * \`exportScene\`: Exports all the contents of a specified scene, including the image or web page displayed on the scene, and saves them as a binary file (Blob object).
        * \`importScene\`: Imports the contents of a scene exported by using \`exportScene\` into a specified scene directory.

        **2. Scene path type**

        This release adds the \`conflict\` enumerator in \`ScenePathType\`, which indicates that a path cannot exist because it contains the path of an existing scene.

        **3. Locking images**

        To support locking or unlocking selected images, this release adds the \`lockImages\` method. When an image is locked, the user cannot move, zoom, or delete the image.

        **4. Adjusting font size**

        This release adds the \`updateTextFontSize\` method for adjusting the size of the text entered with the \`text\` tool.

        **5. Adjusting component layers**

        To support adjusting the layers of components, this release adds the following methods:

        * \`moveSelectedComponentsToTop\`: Moves the selected components to the top layer.
        * \`moveSelectedComponentsToBottom\`: Moves the selected components to the bottom layer.

        #### Improvements [#improvements-21]

        This release provides the following improvements:

        * Adds support for sending and receiving custom events with the \`ArrayBuffer\` payload between users with the Web SDK.
        * Further optimizes the writing performance.
        * Optimizes the shape of handwriting.
        * Improves the accuracy of the \`onPhaseChanged\` callback.
        * On the PC side, enables the eraser to delete only the topmost of multiple selected components.
        * Hides elements that should not be displayed in a slide master using the file-conversion function.

        #### Fixed issues [#fixed-issues-25]

        This release has fixed the following issues:

        * The \`customInput\` method call did not take effect.
        * After switching to the hand tool, users could not switch back to the cursor.
        * Occasionally, the handwriting disappeared suddenly during writing.
        * Occasionally, the handwriting had unnatural teardrop-like strokes during writing.
        * When the user edited text after manually scaling the text box, the text box and text reverted to the original size.
        * When modifying \`InvisiblePlugin\`, the new \`attributes\` could not be the same as the original \`attributes\`.
        * The view became incorrect after the window size changed on some browsers and devices.
        * When the eraser was moved quickly, the eraser icon was not enlarged and the fast deleting function did not work.
        * Occasionally, multiple audio files in dynamic PPT slides played simultaneously.
        * Animations were displayed incorrectly after a dynamic PPT slide returned to the previous page.
        * Occasionally, a text box with an animation effect was flipped in mirror mode.

        #### API changes [#api-changes-20]

        **Added**

        * \`exportScene\`
        * \`importScene\`
        * \`conflict\` in  \`ScenePathType\`
        * \`lockImages\`
        * \`updateTextFontSize\`
        * \`moveSelectedComponentsToTop\`
        * \`moveSelectedComponentsToBottom\`
      </Accordion>

      <Accordion title="v2.13.17" id="v21317-1" headingLevel="2" value="v21317-1">
        v2.13.17 was released on August 20, 2021.

        #### New features [#new-features-31]

        To improve the dynamic file conversion function, this release adds support for converting and displaying the following PowerPoint (PPT) features:

        * Add animations to text per paragraph.
        * Animate text by word or by letter.
        * All preset table styles.
        * Fonts smaller than 9 pt (12 px).

        #### Improvements [#improvements-22]

        This release has the following improvements:

        * Disables the delete button on the floating bar when the user is editing text on the whiteboard.
        * Disables the floating bar from moving when the user clicks the button on it.

        #### Fixed issues [#fixed-issues-26]

        This release fixed the following issues:

        * Occasionally, the room was stuck in the connecting state when the user joined a room.
        * The cursor disappeared for some users after the SDK reconnected.
        * The status of some plugins was incorrect after the SDK reconnected.
        * The hand tool was not restricted by the set \`CameraBound\`.
        * On some high-resolution devices, when the user was in the \`follower\` view mode, the center point of the view was slightly shifted.
        * The following issues with displaying dynamic PPT files in the whiteboard were fixed:
          * Paragraph spacing was displayed incorrectly.
          * Failed to split text into columns.
          * The slide background fill of shapes was displayed incorrectly.
          * Hanging indentation was displayed incorrectly.
          * The slide was displayed incorrectly when the user called \`pptPreviousStep\` to roll back a slide.
          * The numbering of text displayed incorrectly.
          * Some equations were displayed incompletely after conversion.
          * Some lines broke incorrectly.
          * Text written from right to left (such as Arabic) was displayed incorrectly.
      </Accordion>

      <Accordion title="v2.13.11" id="v21311" headingLevel="2" value="v21311">
        v2.13.11 was released on July 23 2021.

        #### New features [#new-features-32]

        To improve the dynamic file conversion function, this release adds support for converting and displaying the following PowerPoint (PPT) features:

        * Animation effect > Reverse Path Direction
        * Vertical Text Box
        * Microsoft Equation Editor 3.0
        * Hide background graphic in a slide master
        * Change the color of pictures
        * The following picture effects are now supported:
          * Metal Frame
          * Soft Edge Rectangle
          * Double Frame, Black
          * Thick Matte, Black
          * Simple Frame, Black
          * Moderate Frame, Black
          * Center Shadow Rectangle
          * Soft Edge Oval
          * Metal Rounded Rectangle
          * Metal Oval

        #### Improvements [#improvements-23]

        This release has the following improvements:

        * Reduces CPU usage during the playback of animations in dynamic PPT files.
        * Improves the smoothness of writing and drawing on the whiteboard.
        * Optimizes the timestamp synchronization algorithm to reduce time differences.
        * Supports printing logs on scene changes.
        * Adds the \`previewURL\` parameter in \`PptDescription\`, which supports displaying dynamic PPT previews in the whiteboard.

        #### Fixed issues [#fixed-issues-27]

        This release fixed the following issues:

        * The contents on the whiteboard occasionally became unclear when the user adjusted the view.
        * Problems occurred with the SDK code after it was mangled by using uglify-js.
        * Users of the Android or iOS SDK occasionally failed to draw the first line after joining the room.
        * The following issues with displaying dynamic PPT files in the whiteboard were fixed:
          * Animations did not play in the set order.
          * Animations did not disappear when playback finished.
          * Table height was displayed incorrectly.
          * Pictures inserted in content placeholders failed to display.
          * Some shapes were rendered incorrectly.
          * The text was incorrectly indented.
          * Animation triggers did not work.
          * Picture transparency was incorrect.
      </Accordion>

      <Accordion title="v2.13.4" id="v2134-2" headingLevel="2" value="v2134-2">
        v2.13.4 was released on June 15, 2021.

        This release fixed the issue that calling the \`moveCamera\` method did not take effect.
      </Accordion>

      <Accordion title="v2.13.2" id="v2132-2" headingLevel="2" value="v2132-2">
        v2.13.2 was released on June 10, 2021.

        This release fixed the following issues:

        * Occasional abnormal behaviors of the \`redo\` and \`undo\` methods.
        * Occasional abnormality with the text box.
      </Accordion>

      <Accordion title="v2.12.21" id="v21221-2" headingLevel="2" value="v21221-2">
        v2.12.21 was released on June 4, 2021.

        This release fixed the following issues:

        * Error messages printed in the browser console.
        * Arrowheads were displayed disproportionately large in dynamic PPT files.
        * Frequently switching slides in a dynamic PPT file might cause fonts to display abnormally.
        * Dynamic PPT files that do not contain a \`tablestyle.xml\` file could not be parsed.
      </Accordion>

      <Accordion title="v2.12.20" id="v21220-2" headingLevel="2" value="v21220-2">
        v2.12.20 was released on May 24, 2021.

        This release optimizes the log levels for dynamic PPT files.
      </Accordion>

      <Accordion title="v2.12.19" id="v21219-2" headingLevel="2" value="v21219-2">
        v2.12.19 was released on May 20, 2021.

        This release fixed the issue that in certain circumstances, the SDK failed to connect to the server and returned the error message \`magix connect failed\`.
      </Accordion>

      <Accordion title="v2.12.18" id="v21218-2" headingLevel="2" value="v21218-2">
        v2.12.18 was released on May 17, 2021.

        This release enables server-side typesetting (\`useServerWrap\`) by default and supports reducing the size of font files for fasterer rendering.
      </Accordion>

      <Accordion title="v2.12.17" id="v21217-2" headingLevel="2" value="v21217-2">
        v2.12.17 was released on May 13, 2021.

        This release fixed the issue that inaccurate system time on the user's device caused an abnormal delay in a live Interactive Whiteboard room.
      </Accordion>

      <Accordion title="v2.12.16" id="v21216-2" headingLevel="2" value="v21216-2">
        v2.12.16 was released on May 11, 2021.

        #### New features [#new-features-33]

        This release adds the following features:

        * Setting transparency for images in dynamic PPT files.
        * Displaying SmartArt as images in dynamic PPT files (SmartArt animation is not supported).
        * Displaying charts and tables in dynamic PPT files.

        #### Issues fixed [#issues-fixed-2]

        This release fixed the following issues:

        * The \`selectable\` field did not take effect when calling \`room.insertPlugin\`.
        * The rendering process might fail if certain elements on dynamic PPT slides have no content.
        * The Drawing tool might fail to work on dynamic PPT slides.
      </Accordion>

      <Accordion title="v2.12.15" id="v21215-2" headingLevel="2" value="v21215-2">
        v2.12.15 was released on April 28, 2021.

        #### New features [#new-features-34]

        This release adds \`changeToClick\` and \`changeToText\`, which set the shortcut to quickly switch to the clicker tool (\`clicker\`) and text tool (\`text\`), respectively.

        #### Improvements [#improvements-24]

        This release improves the loading speed of dynamic PPT files.
      </Accordion>

      <Accordion title="v2.12.14" id="v21214-2" headingLevel="2" value="v21214-2">
        v2.12.14 was released on April 22, 2021.

        #### New features [#new-features-35]

        This release adds audio and video trimming.

        #### Improvements [#improvements-25]

        This release improves the logic of preloading dynamic PPT files.

        #### Issues fixed [#issues-fixed-3]

        This release fixed the following issues:

        * The audio or video progress bar on the PPT slide was not displayed in the preview.
        * \`room.state.cameraState\` was not updated in a timely manner in some cases.
      </Accordion>

      <Accordion title="v2.12.13" id="v21213-2" headingLevel="2" value="v21213-2">
        v2.12.13 was released on April 21, 2021.

        #### Issues fixed [#issues-fixed-4]

        This release fixed the issue that a delay might occur when the text box entered or exited editing mode in some cases.
      </Accordion>

      <Accordion title="v2.12.12" id="v21212-2" headingLevel="2" value="v21212-2">
        v2.12.12 was released on April 16, 2021.

        #### Improvements [#improvements-26]

        This release has the following improvements:

        * Improves the compatibility of colors in dynamic PPT files.
        * Improves justified alignment and left-and-right alignment in dynamic PPT files.
        * Improves the display of indentation in dynamic PPT files.
      </Accordion>

      <Accordion title="v2.12.11" id="v21211-2" headingLevel="2" value="v21211-2">
        v2.12.11 was released on April 15, 2021.

        #### New features [#new-features-36]

        This release adds the following features:

        * Adds the \`syncBlockTimstamp\` method to set the delay time for sending the whiteboard contents. This method is used to ensure that the whiteboard content and the audio and video are sent to the remote users at the same time.
        * Adds the \`customInput\` interface for setting custom inputs.

        #### Improvements [#improvements-27]

        This release improves the display performance of \`canvas\` mode.

        #### Issues fixed [#issues-fixed-5]

        This release fixed the following issues:

        * \`InvisiblePlugin\` had abnormal behavior in some cases.
        * The text could be misaligned after scaling the view up or down.
      </Accordion>

      <Accordion title="v2.12.9" id="v2129-2" headingLevel="2" value="v2129-2">
        v2.12.9 was released on April 9, 2021.

        This release fixed the following issues:

        * A cursor that had disappeared from the whiteboard appeared again in some cases.
        * The \`canvas\` rendering engine rendered images inaccurately in certain older versions of browsers.
      </Accordion>

      <Accordion title="v2.12.8" id="v2128-2" headingLevel="2" value="v2128-2">
        v2.12.8 was released on March 30, 2021.

        #### Improvements [#improvements-28]

        This version improves the logic of reporting logs.

        #### Issues fixed [#issues-fixed-6]

        This release fixed the problem that setting follower mode did not take effect immediately.
      </Accordion>

      <Accordion title="v2.12.6" id="v2126-2" headingLevel="2" value="v2126-2">
        v2.12.6 was released on March 29, 2021. This release fixed the issue that some components could disappear unexpectedly.
      </Accordion>

      <Accordion title="v2.12.5" id="v2125-2" headingLevel="2" value="v2125-2">
        v2.12.5 was released on March 20, 2021.

        #### New features [#new-features-37]

        This release adds the stroke effect to better display handwriting. When constructing \`joinRoomParams\`, you can set \`disableNewPencil\` to \`false\`/\`true\` to enable/disable the stroke effect.

        To enable the stroke effect properly, ensure that every user in the room is using one of the following SDKs:

        * Android SDK v2.12.3 or later
        * iOS SDK v2.12.3 or later
        * Web SDK v2.12.5 or later

        #### Improvements [#improvements-29]

        This release improves the Text tool.

        #### Issues fixed [#issues-fixed-7]

        This release fixed the following issues:

        * When presenting dynamic PPT files in certain situations, the screen turned completely white.
        * \`Symbol\` objects displayed abnormal actions when using the whiteboard on browsers that support ES6.
        * Pen tool marks displayed abnormally.
      </Accordion>

      <Accordion title="v2.12.2" id="v2122-2" headingLevel="2" value="v2122-2">
        v2.12.2 was released on March 4, 2021. This release improves network connection.
      </Accordion>

      <Accordion title="v2.12.1" id="v2121" headingLevel="2" value="v2121">
        v2.12.1 was released on March 4, 2021. This release fixed the issue that \`onPPTLoadProgress\` reported inaccurate progress of file-conversion tasks.
      </Accordion>

      <Accordion title="v2.12.0" id="v2120" headingLevel="2" value="v2120">
        v2.12.0 was released on February 26, 2021.

        #### New features [#new-features-38]

        This release adds the following features:

        * To provide more drawing options, \`ShapeType\` adds the following enumeration values:
          * \`triangle\`: Inserts a triangle
          * \`rhombus\`: Inserts a diamond shape
          * \`pentagram\`: Inserts a pentagram
          * \`speechBalloon\`: Inserts a speech balloon

        * The floating bar adds a **Layer** button to send an image to the front or back of the layer stack.

        * The floating bar adds a **Replicate** button.

        * \`disableOthersSelectingBox\` is added to \`Displayer\` and \`JoinRoomParams\` to set whether to hide or show other users' selection fields.

        * \`uniformScale\` is added to \`ImageInformation\` to resize images proportionately.

        * The server-side engine can be used for typesetting.

        #### Improvements [#improvements-30]

        * Improves the loading speed of icons on the floating bar.
        * Addresses the issue that after using the Text tool to enter text, it automatically switches to the Selection tool.

        #### Issues fixed [#issues-fixed-8]

        This release fixed the following issues:

        * Occasionally, the generated dynamic web pages could not be previewed.
        * The rendering sequence was incorrect for some highlight selectors.
        * The selectable area around an object could be displayed inaccurately.
        * When rendering a rectangle, the four corners sometimes switched between being rounded and right-angled.
        * PPT files could not be displayed because of rendering errors in internal components.
      </Accordion>
    </Accordions>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: "understand-the-tech",
    content: "This page tracks Android release notes for the Whiteboard SDK."
  }, {
    heading: "reference",
    content: "To ensure a consistent user experience across different platforms while enabling native access on each platform, the Whiteboard SDK for Android is implemented by creating a wrapper for the Whiteboard SDK for Web, rather than being a completely native SDK. Therefore, each Android SDK version by default includes the updates of the Web SDK version that it is built upon. The corresponding Web SDK version is provided in each Android release note, so that you can refer to the relevant Web SDK release note for updates."
  }, {
    heading: "reference",
    content: "Released on July 28, 2025."
  }, {
    heading: "new-features",
    content: "**High-performance whiteboard drawing tools**"
  }, {
    heading: "new-features",
    content: "This release adds the `appliance-plugin`, a plugin that provides a set of high-performance whiteboard drawing tools. To use it, install `@netless/appliance-plugin` and enable it using the `WhiteSdkConfiguration.enableAppliancePlugin` option. For more details, see the `appliance-plugin` documentation."
  }, {
    heading: "new-features",
    content: "`@netless/appliance-plugin` is an external dependency and must be installed separately."
  }, {
    heading: "new-features",
    content: "To ensure correct rendering of strokes, enable the plugin on all platforms (Web, Android, and iOS). If a platform does not enable it, strokes drawn on other platforms will not be visible."
  }, {
    heading: "new-features",
    content: "After enabling the plugin, historical content remains visible but cannot be modified or upgraded. To avoid affecting the user experience, use the plugin on a new whiteboard. Disabling the plugin removes the content drawn with it."
  }, {
    heading: "new-features",
    content: "Once enabled, you can:"
  }, {
    heading: "new-features",
    content: "Use the `LASER_PENCIL` laser pencil tool. Learn more"
  }, {
    heading: "new-features",
    content: "Use `MemberState.strokeOpacity` to set line transparency."
  }, {
    heading: "new-features",
    content: "Use `MemberState.fillOpacity` to set fill transparency."
  }, {
    heading: "new-features",
    content: "Use `MemberState.fillColor` to set fill color."
  }, {
    heading: "new-features",
    content: "**PPT rendering error handling**"
  }, {
    heading: "new-features",
    content: "This release adds the `SlideListener.onSlideError` method to listen for PPT rendering errors. If an error occurs, call `WhiteSdk.recoverSlide` to recover rendering."
  }, {
    heading: "api-changes",
    content: "**Added**"
  }, {
    heading: "api-changes",
    content: "`WhiteSdkConfiguration`:"
  }, {
    heading: "api-changes",
    content: "`enableAppliancePlugin`"
  }, {
    heading: "api-changes",
    content: "`MemberState`:"
  }, {
    heading: "api-changes",
    content: "`strokeOpacity`"
  }, {
    heading: "api-changes",
    content: "`fillOpacity`"
  }, {
    heading: "api-changes",
    content: "`fillColor`"
  }, {
    heading: "api-changes",
    content: "`onSlideError`"
  }, {
    heading: "api-changes",
    content: "`recoverSlide`"
  }, {
    heading: "api-changes",
    content: "Released on July 28, 2025."
  }, {
    heading: "api-changes",
    content: "The wrapped Web SDK has been upgraded to v2.16.51."
  }, {
    heading: "new-features-1",
    content: "**Domain preselection**"
  }, {
    heading: "new-features-1",
    content: "This version adds the `prepareWhiteConnection` method to preselect an optimal access domain, which can improve the connection speed when users join a whiteboard room for the first time."
  }, {
    heading: "api-changes-1",
    content: "**Added**"
  }, {
    heading: "api-changes-1",
    content: "`prepareWhiteConnection`"
  }, {
    heading: "api-changes-1",
    content: "`ConnectionPrepareParam`"
  }, {
    heading: "api-changes-1",
    content: "Released on July 28, 2025."
  }, {
    heading: "api-changes-1",
    content: "The wrapped Web SDK has been upgraded to v2.16.48."
  }, {
    heading: "new-features-2",
    content: "**Window apps management**"
  }, {
    heading: "new-features-2",
    content: "In the multi-window mode, the SDK supports inserting the PPT or whiteboard plugin as a window. These are collectively referred to as window apps. Starting from this version, the `Room` object has the following new methods for managing window apps in the multi-window mode:"
  }, {
    heading: "new-features-2",
    content: "`addApp`: Inserts a window app and returns the app ID."
  }, {
    heading: "new-features-2",
    content: "`closeApp`: Closes the window of the specified window app."
  }, {
    heading: "new-features-2",
    content: "`focusApp`: Switches the focused window to the window of the specified window app."
  }, {
    heading: "new-features-2",
    content: "`queryApp`: Queries the information of the specified window app."
  }, {
    heading: "new-features-2",
    content: "`queryAllApps`: Queries the information of all current window apps."
  }, {
    heading: "new-features-2",
    content: "**Custom whiteboard tools**"
  }, {
    heading: "new-features-2",
    content: "The `MemberState` has the following new properties for customizing whiteboard tools:"
  }, {
    heading: "new-features-2",
    content: "`textColor`: The color of the text in the text tool."
  }, {
    heading: "new-features-2",
    content: "`pencilEraserSize`: The size of the pencil eraser tool."
  }, {
    heading: "new-features-2",
    content: "**New PPT rendering configurations**"
  }, {
    heading: "new-features-2",
    content: "The `WhiteSdkConfiguration.SlideAppOptions` has the following new properties for PPT rendering configurations:"
  }, {
    heading: "new-features-2",
    content: "`minFPS`: Sets the minimum frame rate for PPT animations."
  }, {
    heading: "new-features-2",
    content: "`maxFPS`: Sets the maximum frame rate for PPT animations."
  }, {
    heading: "new-features-2",
    content: "`resolution`: Sets the rendering resolution multiplier for PPT."
  }, {
    heading: "new-features-2",
    content: "`maxResolutionLevel`: Sets the maximum resolution for PPT."
  }, {
    heading: "new-features-2",
    content: "`bgColor`: Sets the background color for PPT animations."
  }, {
    heading: "new-features-2",
    content: "`forceCanvas`: Specifies whether to force 2D rendering. It is disabled by default."
  }, {
    heading: "new-features-2",
    content: "`enableGlobalClick`: Specifies whether to enable executing the next step function by clicking on the PPT screen. It is enabled by default."
  }, {
    heading: "new-features-2",
    content: "**Whiteboard drawing performance optimization strategy**"
  }, {
    heading: "new-features-2",
    content: "The `RoomParams` has a new property `optimizeOptions` for setting the performance optimization strategy for whiteboard drawing. The performance optimization includes the following three methods:"
  }, {
    heading: "new-features-2",
    content: "Adjusting the refresh interval of whiteboard drawing: A lower refresh interval provides smoother stroke display but has a higher performance consumption, while a higher refresh interval makes the stroke appear more laggy but has a lower performance consumption."
  }, {
    heading: "new-features-2",
    content: "Using single canvas drawing: By default, the whiteboard uses two canvases alternately to avoid flickering on some devices during drawing. Using a single canvas drawing can prevent the need for redrawing and reduce performance consumption."
  }, {
    heading: "new-features-2",
    content: "Using floating canvas: In the writing scenario, after enabling single canvas drawing, a floating canvas of approximately 256 x 256px is generated based on the drawing position. When subsequent drawing does not exceed the range of this floating canvas, the synchronous drawing of strokes will be limited to this floating canvas instead of the entire canvas, reducing performance consumption."
  }, {
    heading: "new-features-2",
    content: "**Other additions**"
  }, {
    heading: "new-features-2",
    content: "This version also includes the following features:"
  }, {
    heading: "new-features-2",
    content: "Adds the `updateText` method for updating the text inserted using `insertText`."
  }, {
    heading: "new-features-2",
    content: "Adds the `setSyncMode` method for immediately processing whiteboard events and drawing strokes."
  }, {
    heading: "new-features-2",
    content: "Adds the `setDisableInitialStateCallback` method for disabling the callback of the full state after joining the room."
  }, {
    heading: "fixed-issues",
    content: "This version fixes the following issues:"
  }, {
    heading: "fixed-issues",
    content: "When `WhiteWindowParams.fullscreen` was enabled, the app did not display in full screen on the second opening."
  }, {
    heading: "fixed-issues",
    content: "When `WindowParams.fullscreen` was enabled, the status bar occasionally flickered."
  }, {
    heading: "fixed-issues",
    content: "Path animation could not return to the original position after page switching."
  }, {
    heading: "fixed-issues",
    content: "Diamond fill filled the entire shape."
  }, {
    heading: "fixed-issues",
    content: "The built-in cursor disappeared after reconnection."
  }, {
    heading: "fixed-issues",
    content: "Occasional flickering when using fade-in and fade-out animations."
  }, {
    heading: "fixed-issues",
    content: "The built-in cursor disappeared after modifying `isWritable`."
  }, {
    heading: "api-changes-2",
    content: "**Added**"
  }, {
    heading: "api-changes-2",
    content: "`addApp`"
  }, {
    heading: "api-changes-2",
    content: "`closeApp`"
  }, {
    heading: "api-changes-2",
    content: "`focusApp`"
  }, {
    heading: "api-changes-2",
    content: "`queryApp`"
  }, {
    heading: "api-changes-2",
    content: "`queryAllApps`"
  }, {
    heading: "api-changes-2",
    content: "`WindowAppSyncAttrs`"
  }, {
    heading: "api-changes-2",
    content: "The following in `MemberState`:"
  }, {
    heading: "api-changes-2",
    content: "`textColor`"
  }, {
    heading: "api-changes-2",
    content: "`pencilEraserSize`"
  }, {
    heading: "api-changes-2",
    content: "The following in `SlideAppOptions`:"
  }, {
    heading: "api-changes-2",
    content: "`minFPS`"
  }, {
    heading: "api-changes-2",
    content: "`maxFPS`"
  }, {
    heading: "api-changes-2",
    content: "`resolution`"
  }, {
    heading: "api-changes-2",
    content: "`maxResolutionLevel`"
  }, {
    heading: "api-changes-2",
    content: "`bgColor`"
  }, {
    heading: "api-changes-2",
    content: "`forceCanvas`"
  }, {
    heading: "api-changes-2",
    content: "`enableGlobalClick`"
  }, {
    heading: "api-changes-2",
    content: "`setSyncMode`"
  }, {
    heading: "api-changes-2",
    content: "`updateText`"
  }, {
    heading: "api-changes-2",
    content: "`setDisableInitialStateCallback`"
  }, {
    heading: "api-changes-2",
    content: "**Modified**"
  }, {
    heading: "api-changes-2",
    content: "`insertText`"
  }, {
    heading: "api-changes-2",
    content: "v2.16.59 was released on January 19, 2024."
  }, {
    heading: "api-changes-2",
    content: "The wrapped Web SDK has been upgraded to v2.16.42."
  }, {
    heading: "compatibility-changes",
    content: "This version deprecates the existing London data center (`Region.gb-lon`) in the Whiteboard Data Center and introduces a new data center in Frankfurt, Europe (`Region.eu`), whose service covers Europe. If you have set `Region.gb-lon` in the previous version, please switch to` Region.eu` after upgrading to this version and enable this data center in Agora Console."
  }, {
    heading: "new-features-3",
    content: "**PPT Volume Control**"
  }, {
    heading: "new-features-3",
    content: "This version adds the `getSlideVolume` and `updateSlideVolume `methods to retrieve and update the volume of audio in PPT slides."
  }, {
    heading: "new-features-3",
    content: "**PPT URL Intercept and Replacement**"
  }, {
    heading: "new-features-3",
    content: "`WhiteSdkConfiguration` adds a new configuration option, `enableSlideInterrupterAPI`, to enable intercepting and replacing URLs of PPT resources. This feature can be used to encrypt PPT resources uploaded by users and protect their privacy.\nOnce enabled, the PPT file URL intercept and replacement feature can be implemented by calling `WhiteSdk.setSlideListener(SlideListener)`."
  }, {
    heading: "new-features-3",
    content: "**PPT Rendering Notification**"
  }, {
    heading: "new-features-3",
    content: "`WhiteSdkConfiguration` adds the `whiteSlideAppParams` configuration option for displaying configurations related to @netless/app-slide rendering. Currently, it supports configuring `WhiteSlideAppParams.showRenderError` to show or hide rendering error notifications."
  }, {
    heading: "new-features-3",
    content: "**Custom API Server Domain**"
  }, {
    heading: "new-features-3",
    content: "`WhiteSdkConfiguration` adds the `apiHosts` configuration option to configure a list of API server domains for the whiteboard, which can be used for server proxy implementation."
  }, {
    heading: "new-features-3",
    content: "**Custom Module Source**"
  }, {
    heading: "new-features-3",
    content: "`RoomParams` adds the `modulesOrigin` configuration option to configure the address for requesting whiteboard module data."
  }, {
    heading: "new-features-3",
    content: "**Document Operation Events**"
  }, {
    heading: "new-features-3",
    content: "This release adds the `dispatchDocsEvent` method to send events to the inserted PDF/PPTX documents in the whiteboard, allowing control over document page flipping, page navigation, and slide animation playback."
  }, {
    heading: "improvements",
    content: "**Optimized Document Insertion**"
  }, {
    heading: "improvements",
    content: "This version optimizes the process of converting and inserting PPT files into the whiteboard using the new document conversion service. You can use the new `createSlideApp` method to construct a `WindowAppParam` object, which includes `ProjectorAttributes` and `ProjectorOptions`, corresponding to the parameters passed when opening the document, see `addApp`."
  }, {
    heading: "improvements",
    content: "**Window Fullscreen**"
  }, {
    heading: "improvements",
    content: "A new property, `WindowParams.fullscreen`, is added to control whether the window is displayed in fullscreen mode."
  }, {
    heading: "issues-fixed",
    content: "This version fixed the issue of layout preview not working in the latest version of Android Studio."
  }, {
    heading: "api-changes-3",
    content: "Added"
  }, {
    heading: "api-changes-3",
    content: "`getSlideVolumeWithCompletionHandler`"
  }, {
    heading: "api-changes-3",
    content: "`updateSlideVolume`"
  }, {
    heading: "api-changes-3",
    content: "`WhiteSdkConfiguration`"
  }, {
    heading: "api-changes-3",
    content: "`enableSlideInterrupterAPI`"
  }, {
    heading: "api-changes-3",
    content: "`whiteSlideAppParams`"
  }, {
    heading: "api-changes-3",
    content: "`apiHosts`"
  }, {
    heading: "api-changes-3",
    content: "`setSlideDelegate`"
  }, {
    heading: "api-changes-3",
    content: "`modulesOrigin `in` RoomParams`"
  }, {
    heading: "api-changes-3",
    content: "`dispatchDocsEvent`"
  }, {
    heading: "api-changes-3",
    content: "`WindowDocsEvent`"
  }, {
    heading: "api-changes-3",
    content: "`createSlideApp`"
  }, {
    heading: "api-changes-3",
    content: "`ProjectorAttributes`"
  }, {
    heading: "api-changes-3",
    content: "`ProjectorOptions`"
  }, {
    heading: "api-changes-3",
    content: "`WindowAppParam`"
  }, {
    heading: "api-changes-3",
    content: "`WindowParams.fullscreen`"
  }, {
    heading: "api-changes-3",
    content: "v2.16.42 was released on December 2, 2022."
  }, {
    heading: "api-changes-3",
    content: "The wrapped Web SDK has been upgraded to v2.16.37."
  }, {
    heading: "new-features-4",
    content: "**1. Whiteboard tool updates**"
  }, {
    heading: "new-features-4",
    content: "This release adds new features for the following whiteboard tools:"
  }, {
    heading: "new-features-4",
    content: "Pencil: Adds support for drawing dotted lines by adding `dottedLine: true` in `room.memberState`."
  }, {
    heading: "new-features-4",
    content: "Text: Adds support for directly selecting and editing whiteboard text by adding `textCanSelectText: true` in `room.memberState`."
  }, {
    heading: "new-features-4",
    content: "In addition, this release adds a pencil eraser tool to erase any part of a pencil stroke."
  }, {
    heading: "new-features-4",
    content: "**2. Floatbar**"
  }, {
    heading: "new-features-4",
    content: `This release adds the floatbar feature. The floatbar pops up when selecting any whiteboard item, which enables users to
easily edit these whiteboard items. For example, when selecting a stroke, the floatbar enables the user to remove it or
change its color. When selecting text, the floatbar enables the user to adjust its style or change its typeface.`
  }, {
    heading: "new-features-4",
    content: "Call the `setUsingFloatBar` method to enable the floatbar."
  }, {
    heading: "new-features-4",
    content: "**3. Remove whiteboard pages**"
  }, {
    heading: "new-features-4",
    content: "This release adds the `removePage` method to delete a specified whiteboard page."
  }, {
    heading: "new-features-4",
    content: "**4. Request slide log**"
  }, {
    heading: "new-features-4",
    content: "This release adds the `requestSlideLog` method in the `WhiteSdk` class to request the slide log on the client.\nThis facilitates debugging slide-related issues."
  }, {
    heading: "new-features-4",
    content: "**5. Player callbacks**"
  }, {
    heading: "new-features-4",
    content: "To facilitate listening to the state changes of `Player`, this release adds `addPlayerListener` and `removePlayerListener`\nmethods to add and remove player callbacks."
  }, {
    heading: "improvements-1",
    content: "This release optimizes the audio playback control in PPT files. You can now pause or resume audio mixing or playback in\ndynamic PPT files with the `pauseAudioMixing` and `resumeAudioMixing` methods."
  }, {
    heading: "fixed-issues-1",
    content: "This release fixes the following issues:"
  }, {
    heading: "fixed-issues-1",
    content: "Under multi-window mode, no callback was received when the `sceneState` changed."
  }, {
    heading: "fixed-issues-1",
    content: "The creation of the whiteboard app sometimes failed after reconnection."
  }, {
    heading: "fixed-issues-1",
    content: "When creating the whiteboard app, synchronizing the initial height and width sometimes failed."
  }, {
    heading: "fixed-issues-1",
    content: "Switching the readable/writable state sometimes caused the configuration to be lost in the `disableCameraTransform` of `mainView`."
  }, {
    heading: "api-changes-4",
    content: "**Added**"
  }, {
    heading: "api-changes-4",
    content: "New properties in the `MemberState` class: `dottedLine` and `textCanSelectText`"
  }, {
    heading: "api-changes-4",
    content: "New property in the `Appliance` class: `PENCIL_ERASER`"
  }, {
    heading: "api-changes-4",
    content: "`removePage`"
  }, {
    heading: "api-changes-4",
    content: "`pauseAudioMixing`"
  }, {
    heading: "api-changes-4",
    content: "`resumeAudioMixing`"
  }, {
    heading: "api-changes-4",
    content: "`addPlayerListener`"
  }, {
    heading: "api-changes-4",
    content: "`removePlayerListener`"
  }, {
    heading: "api-changes-4",
    content: "`setUsingFloatBar`"
  }, {
    heading: "api-changes-4",
    content: "`requestSlideLog`"
  }, {
    heading: "api-changes-4",
    content: "v2.16.21 was released on September 13, 2022."
  }, {
    heading: "compatibility-changes-1",
    content: "**SDK integration changes**"
  }, {
    heading: "compatibility-changes-1",
    content: "As of v2.16.0, Agora only updates the `netless-io:whiteboard-android` GitHub repository; Agora no longer maintains the `duty-os:white-sdk-android` GitHub repository. When integrating the SDK v2.16.0 or later with JitPack, you need to modify the `implementation` field under `dependencies` in the `/Gradle Scripts/build.gradle(Module: <projectname>.app)` file as follows:"
  }, {
    heading: "compatibility-changes-1",
    content: "For details, see Get the SDK."
  }, {
    heading: "new-features-5",
    content: "**1. Inserting text**"
  }, {
    heading: "new-features-5",
    content: "This release adds the `insertText` method for inserting text at a specified position."
  }, {
    heading: "new-features-5",
    content: "**2. Disabling the stroke effect**"
  }, {
    heading: "new-features-5",
    content: "This release adds the `setDisableNewPencilStroke` method to `WhiteSdkConfiguration` to enable or disable the stroke effect of the pencil. The default value of the `disableNewPencilStroke` parameter in this method is `true`, and the SDK enables the stroke effect immediately when you call `setDisableNewPencil(false)` to enable the new pencil. To disable the stroke effect after setting `setDisableNewPencil(false)`, you can call `setDisableNewPencilStroke(true)`."
  }, {
    heading: "new-features-5",
    content: "This release also adds the `isDisableNewPencilStroke` method to `WhiteSdkConfiguration` to get whether the stroke effect of the new pencil is disabled."
  }, {
    heading: "new-features-5",
    content: "**3. Getting the scene information**"
  }, {
    heading: "new-features-5",
    content: "adds the `getScene` method to the `Displayer` class, which supports using the scene path to get the information about a specified scene."
  }, {
    heading: "improvements-2",
    content: "This release provides the following improvements:"
  }, {
    heading: "improvements-2",
    content: "Adds tween animation for the new pencil. This allows the SDK to automatically insert frames between keyframes when a user draws or writes with the new pencil, so that remote users see a smoother drawing process. To experience this improvement, ensure that you have called `setDisableNewPencil(false)` to enable the new pencil."
  }, {
    heading: "improvements-2",
    content: "Optimizes the writing performance on Android browsers."
  }, {
    heading: "improvements-2",
    content: "Optimizes the reconnecting mechanism in weak network environment to reduce unnecessary reconnections."
  }, {
    heading: "fixed-issues-2",
    content: "This release fixed the following issues:"
  }, {
    heading: "fixed-issues-2",
    content: "Occasionally, the contents on the whiteboard appeared shifted and overshadowed after users zoomed or moved their view."
  }, {
    heading: "fixed-issues-2",
    content: "Occasionally, users could not switch the pages of a dynamic PPT slide after an SDK reconnection."
  }, {
    heading: "fixed-issues-2",
    content: "The contents on the whiteboard occasionally were not fully displayed when users joined a whiteboard room that already had."
  }, {
    heading: "fixed-issues-2",
    content: "A memory leak sometimes occurred after an SDK reconnection."
  }, {
    heading: "fixed-issues-2",
    content: "An error sometimes occurred when calling `setWritable` repeatedly."
  }, {
    heading: "fixed-issues-2",
    content: "When a user switched to read-only mode, then switched back to read-write mode and wrote, remote users saw that user's cursor as fixed."
  }, {
    heading: "api-changes-5",
    content: "**Added**"
  }, {
    heading: "api-changes-5",
    content: "`insertText`"
  }, {
    heading: "api-changes-5",
    content: "`setDisableNewPencilStroke`"
  }, {
    heading: "api-changes-5",
    content: "`isDisableNewPencilStroke`"
  }, {
    heading: "api-changes-5",
    content: "`getScene`"
  }, {
    heading: "api-changes-5",
    content: "v2.15.24 was released on January 21, 2022."
  }, {
    heading: "api-changes-5",
    content: "This release provides the following improvements:"
  }, {
    heading: "api-changes-5",
    content: "Updates `white-web-sdk` to v2.15.16."
  }, {
    heading: "api-changes-5",
    content: "Optimizes `getSceneSnapshotImage` and `getScenePreviewImage` to ensure the images inserted in the scene are displayed correctly in the screenshot."
  }, {
    heading: "api-changes-5",
    content: "v2.15.0 was released on November 16, 2021."
  }, {
    heading: "compatibility-changes-2",
    content: "To help you manage users in a room, this release adds the `uid` parameter in `RoomParams`, for setting the unique identifier of a user."
  }, {
    heading: "compatibility-changes-2",
    content: "If you upgrade the SDK to v2.15.0 or later, to avoid affecting your service, ensure that you pass in a string `uid` in `RoomParams` when calling `joinRoom`. The `uid` of each user cannot be longer than 1024 bytes and must be unique in the same room. For more information, see Join a Whiteboard Room."
  }, {
    heading: "new-features-6",
    content: "This release adds support for converting and displaying the following PowerPoint (PPT) features:"
  }, {
    heading: "new-features-6",
    content: "Action buttons"
  }, {
    heading: "new-features-6",
    content: "Slide masters added with animation effects."
  }, {
    heading: "improvements-3",
    content: "This release provides the following improvements:"
  }, {
    heading: "improvements-3",
    content: "Updates `white-web-sdk` to v2.15.1."
  }, {
    heading: "improvements-3",
    content: "Further optimizes the writing experience."
  }, {
    heading: "fixed-issues-3",
    content: "This release has fixed the following issues:"
  }, {
    heading: "fixed-issues-3",
    content: "The following issues with displaying dynamic PPT files in the whiteboard were fixed:"
  }, {
    heading: "fixed-issues-3",
    content: "The images were displaced occasionally."
  }, {
    heading: "fixed-issues-3",
    content: "Failure to read certain styles caused the screen to go blank."
  }, {
    heading: "fixed-issues-3",
    content: "The rotation angle and color were incorrect for some text."
  }, {
    heading: "fixed-issues-3",
    content: "Occasionally, elements with an animation effect were not displayed"
  }, {
    heading: "fixed-issues-3",
    content: "The animation of some text was displayed incorrectly."
  }, {
    heading: "api-changes-6",
    content: "**Modified**"
  }, {
    heading: "api-changes-6",
    content: "`RoomParams` \\[1/3]"
  }, {
    heading: "api-changes-6",
    content: "`RoomParams` \\[2/3]"
  }, {
    heading: "api-changes-6",
    content: "`RoomParams` \\[3/3]"
  }, {
    heading: "api-changes-6",
    content: "v2.14.3 was released on November 11, 2021."
  }, {
    heading: "compatibility-changes-3",
    content: "As of this release, the minimum platform version supported by the Agora Interactive Whiteboard Android SDK changes as follows:"
  }, {
    heading: "compatibility-changes-3",
    content: "Android 5.0, instead of Android 4.4"
  }, {
    heading: "compatibility-changes-3",
    content: "Android SDK API level 21, instead of Android SDK API level 19"
  }, {
    heading: "improvements-4",
    content: "This release provides the following improvements:"
  }, {
    heading: "improvements-4",
    content: "Updates `white-web-sdk` to v2.14.5."
  }, {
    heading: "improvements-4",
    content: "Further optimizes the writing performance."
  }, {
    heading: "improvements-4",
    content: "Optimizes the shape of handwriting."
  }, {
    heading: "improvements-4",
    content: "Improves the accuracy of the `onPhaseChanged` callback."
  }, {
    heading: "improvements-4",
    content: "Hides elements that should not be displayed in a slide master using the file-conversion function."
  }, {
    heading: "fixed-issues-4",
    content: "This release has fixed the following issues:"
  }, {
    heading: "fixed-issues-4",
    content: "After switching to the hand tool, users could not switch back to the cursor."
  }, {
    heading: "fixed-issues-4",
    content: "Occasionally, the handwriting disappeared suddenly during writing."
  }, {
    heading: "fixed-issues-4",
    content: "Occasionally, the handwriting had unnatural teardrop-like strokes during writing."
  }, {
    heading: "fixed-issues-4",
    content: "When the user edited text after manually scaling the text box, the text box and text reverted to the original size."
  }, {
    heading: "fixed-issues-4",
    content: "The view became incorrect after the window size changed on some browsers and devices."
  }, {
    heading: "fixed-issues-4",
    content: "When the eraser was moved quickly, the eraser icon was not enlarged and the fast deleting function did not work."
  }, {
    heading: "fixed-issues-4",
    content: "Occasionally, multiple audio files in dynamic PPT slides played simultaneously."
  }, {
    heading: "fixed-issues-4",
    content: "Animations were displayed incorrectly after a dynamic PPT slide returned to the previous page."
  }, {
    heading: "fixed-issues-4",
    content: "Occasionally, a text box with an animation effect was flipped in mirror mode."
  }, {
    heading: "fixed-issues-4",
    content: "v2.13.22 was released on August 20, 2021."
  }, {
    heading: "new-features-7",
    content: "This release has the following new features:"
  }, {
    heading: "new-features-7",
    content: "Adds the `onLogger` callback in the `CommonCallback` interface, with which you can get the local debug log output by the SDK."
  }, {
    heading: "new-features-7",
    content: "Adds support for converting and displaying the following PowerPoint (PPT) features:"
  }, {
    heading: "new-features-7",
    content: "Add animations to text per paragraph."
  }, {
    heading: "new-features-7",
    content: "Animate text by word or by letter."
  }, {
    heading: "new-features-7",
    content: "All preset table styles."
  }, {
    heading: "new-features-7",
    content: "Fonts smaller than 12 px."
  }, {
    heading: "improvements-5",
    content: "This release updates `white-web-sdk` to 2.13.17."
  }, {
    heading: "fixed-issues-5",
    content: "This release fixed the following issues:"
  }, {
    heading: "fixed-issues-5",
    content: "The `onLogger` and `onMessage` callbacks did not take effect."
  }, {
    heading: "fixed-issues-5",
    content: "Occasionally, the room was stuck in the connecting state when the user joined a room."
  }, {
    heading: "fixed-issues-5",
    content: "The cursor disappeared for some users after the SDK reconnected."
  }, {
    heading: "fixed-issues-5",
    content: "The status of some plugins was incorrect after the SDK reconnected."
  }, {
    heading: "fixed-issues-5",
    content: "The hand tool was not restricted by the set `CameraBound` ."
  }, {
    heading: "fixed-issues-5",
    content: "On some high-resolution devices, when the user was in the `Follower` view mode, the center point of the view was slightly shifted."
  }, {
    heading: "fixed-issues-5",
    content: "The following issues with displaying dynamic PPT files in the whiteboard were fixed:"
  }, {
    heading: "fixed-issues-5",
    content: "Paragraph spacing was displayed incorrectly."
  }, {
    heading: "fixed-issues-5",
    content: "Failed to split text into columns."
  }, {
    heading: "fixed-issues-5",
    content: "The slide background fill of shapes was displayed incorrectly."
  }, {
    heading: "fixed-issues-5",
    content: "Hanging indentation was displayed incorrectly."
  }, {
    heading: "fixed-issues-5",
    content: "The slide was displayed incorrectly when the user called `pptPreviousStep` to roll back a slide."
  }, {
    heading: "fixed-issues-5",
    content: "The numbering of text displayed incorrectly."
  }, {
    heading: "fixed-issues-5",
    content: "Some equations were displayed incompletely after conversion."
  }, {
    heading: "fixed-issues-5",
    content: "Some lines broke incorrectly."
  }, {
    heading: "fixed-issues-5",
    content: "Text written from right to left (such as Arabic) was displayed incorrectly."
  }, {
    heading: "fixed-issues-5",
    content: "v2.13.17 was released on July 23 2021."
  }, {
    heading: "new-features-8",
    content: "To improve the dynamic file conversion function, this release adds support for converting and displaying the following PowerPoint (PPT) features:"
  }, {
    heading: "new-features-8",
    content: "Animation effect > Reverse Path Direction"
  }, {
    heading: "new-features-8",
    content: "Vertical Text Box"
  }, {
    heading: "new-features-8",
    content: "Microsoft Equation Editor 3.0"
  }, {
    heading: "new-features-8",
    content: "Hide background graphic in a slide master"
  }, {
    heading: "new-features-8",
    content: "Change the color of pictures"
  }, {
    heading: "new-features-8",
    content: "The following picture effects are now supported:"
  }, {
    heading: "new-features-8",
    content: "Metal Frame"
  }, {
    heading: "new-features-8",
    content: "Soft Edge Rectangle"
  }, {
    heading: "new-features-8",
    content: "Double Frame, Black"
  }, {
    heading: "new-features-8",
    content: "Thick Matte, Black"
  }, {
    heading: "new-features-8",
    content: "Simple Frame, Black"
  }, {
    heading: "new-features-8",
    content: "Moderate Frame, Black"
  }, {
    heading: "new-features-8",
    content: "Center Shadow Rectangle"
  }, {
    heading: "new-features-8",
    content: "Soft Edge Oval"
  }, {
    heading: "new-features-8",
    content: "Metal Rounded Rectangle"
  }, {
    heading: "new-features-8",
    content: "Metal Oval"
  }, {
    heading: "improvements-6",
    content: "This release has the following improvements:"
  }, {
    heading: "improvements-6",
    content: "Updates `white-web-sdk` to 2.13.11."
  }, {
    heading: "improvements-6",
    content: "Updates `@netless/video-js-plugin` to 0.3.3."
  }, {
    heading: "improvements-6",
    content: "Reduces CPU usage during the playback of animations in dynamic PPT files."
  }, {
    heading: "improvements-6",
    content: "Improves the smoothness of writing and drawing on the whiteboard"
  }, {
    heading: "improvements-6",
    content: "To improve the accuracy of time synchronization, changes the data type of the `delaySec` parameter in `setTimeDelay` from Integer to Double."
  }, {
    heading: "improvements-6",
    content: "Supports printing logs on scene changes."
  }, {
    heading: "improvements-6",
    content: "Adds the `preview` parameter in `PptPage`, which supports displaying dynamic PPT previews in the whiteboard. See `API reference`."
  }, {
    heading: "fixed-issues-6",
    content: "This release fixed the following issues:"
  }, {
    heading: "fixed-issues-6",
    content: "The contents on the whiteboard occasionally became unclear when the user adjusted the view."
  }, {
    heading: "fixed-issues-6",
    content: "Users of the Android SDK occasionally failed to draw the first line after joining the room."
  }, {
    heading: "fixed-issues-6",
    content: "The method call of `refreshViewSize` did not take effect occasionally."
  }, {
    heading: "fixed-issues-6",
    content: "The following issues with displaying dynamic PPT files in the whiteboard were fixed:"
  }, {
    heading: "fixed-issues-6",
    content: "Animations did not play in the set order."
  }, {
    heading: "fixed-issues-6",
    content: "Animations did not disappear when playback finished."
  }, {
    heading: "fixed-issues-6",
    content: "Table height was displayed incorrectly."
  }, {
    heading: "fixed-issues-6",
    content: "Pictures inserted in content placeholders failed to display."
  }, {
    heading: "fixed-issues-6",
    content: "Some shapes were rendered incorrectly."
  }, {
    heading: "fixed-issues-6",
    content: "The text was incorrectly indented."
  }, {
    heading: "fixed-issues-6",
    content: "Animation triggers did not work."
  }, {
    heading: "fixed-issues-6",
    content: "Picture transparency was incorrect."
  }, {
    heading: "fixed-issues-6",
    content: "v2.13.4 was released on June 15, 2021."
  }, {
    heading: "fixed-issues-6",
    content: "This release updates `white-web-sdk` to 2.13.4."
  }, {
    heading: "fixed-issues-6",
    content: "v2.13.2 was released on June 11, 2021."
  }, {
    heading: "fixed-issues-6",
    content: "This release updates `white-web-sdk` to 2.13.3."
  }, {
    heading: "fixed-issues-6",
    content: "v2.13.1 was released on June 11, 2021."
  }, {
    heading: "fixed-issues-6",
    content: "**Improvement**"
  }, {
    heading: "fixed-issues-6",
    content: "This release updates `white-web-sdk` to 2.13.2."
  }, {
    heading: "fixed-issues-6",
    content: "**Issue fixed**"
  }, {
    heading: "fixed-issues-6",
    content: "This release fixed the issue that when `disableDeviceInputs` is set as `true`, the user might still be able to operate the iframe plugin."
  }, {
    heading: "fixed-issues-6",
    content: "v2.12.36 was released on June 8, 2021."
  }, {
    heading: "fixed-issues-6",
    content: "This release fixed the following issue: If the user in host mode zooms in or out on the HTML5 file while using the clicker tool, users in follower mode saw incomplete display of file content."
  }, {
    heading: "fixed-issues-6",
    content: "v2.12.35 was released on June 7, 2021."
  }, {
    heading: "fixed-issues-6",
    content: "This release updates `@netless/cursor-tool` to 0.1.0 and `@netless/iframe-bridge` to 2.1.2."
  }, {
    heading: "fixed-issues-6",
    content: "v2.12.34 was released on June 4, 2021."
  }, {
    heading: "fixed-issues-6",
    content: "This release updates `white-web-sdk` to 2.12.21."
  }, {
    heading: "fixed-issues-6",
    content: "v2.12.33 was released on June 3, 2021."
  }, {
    heading: "fixed-issues-6",
    content: "This release updates `@netless/video-js-plugin` to 0.1.5."
  }, {
    heading: "fixed-issues-6",
    content: "v2.12.32 was released on June 2, 2021."
  }, {
    heading: "fixed-issues-6",
    content: "This release fixed the video display issues of `@netless/video-js-plugin`."
  }, {
    heading: "fixed-issues-6",
    content: "v2.12.31 was released on June 1, 2021."
  }, {
    heading: "fixed-issues-6",
    content: "This release updates `@netless/video-js-plugin` to 0.1.3 to fix the incompatibility issue between the `video-js-plugin` and earlier versions of Andrid WebView ."
  }, {
    heading: "fixed-issues-6",
    content: "v2.12.30 was released on May 25, 2021."
  }, {
    heading: "fixed-issues-6",
    content: "This release updates `@netless/cursor-tool` to 0.0.9."
  }, {
    heading: "fixed-issues-6",
    content: "v2.12.29 was released on May 24, 2021."
  }, {
    heading: "new-features-9",
    content: "This release integrates `@netless/video-js-plugin`, which is used by an Android client to watch video played on the whiteboard on a Web client. Supported file formats include M3U8 and others."
  }, {
    heading: "improvement",
    content: "This release updates `white-web-sdk`  to 2.12.20."
  }, {
    heading: "improvement",
    content: "v2.12.28 was released on May 20, 2021."
  }, {
    heading: "improvement",
    content: "This release updates `white-web-sdk`  to 2.12.19."
  }, {
    heading: "improvement",
    content: "v2.12.27 was released on May 17, 2021."
  }, {
    heading: "improvement",
    content: "This release has the following improvements:"
  }, {
    heading: "improvement",
    content: "Updates `white-web-sdk `to 2.12.18."
  }, {
    heading: "improvement",
    content: "Enables server-side typesetting (`useServerWrap`) by default. When server-side typesetting is enabled, the size of font files are automatically reduced for faster rendering."
  }, {
    heading: "improvement",
    content: "v2.12.26 was released on May 13, 2021."
  }, {
    heading: "improvement",
    content: "This release adds the following features:"
  }, {
    heading: "improvement",
    content: "Adds `Clicker` to `Appliance` for interacting with HTML5 files."
  }, {
    heading: "improvement",
    content: "Adds `ShapeType` to `MemberState` for setting the Shape tool. Supported shape types include triangle, rhombus, pentagram, and speech balloon."
  }, {
    heading: "improvement",
    content: "Adds the `syncBlockTimestamp` method to the `Room` class. You can use this method to set the delay time for sending the whiteboard content, so that the whiteboard content and the audio and video are sent at the same time."
  }, {
    heading: "improvement",
    content: "Updates `white-web-sdk` to 2.12.17."
  }, {
    heading: "improvement",
    content: "v2.12.25 was released on April 28, 2021."
  }, {
    heading: "improvement",
    content: "This release updates `@Netless/white-audio-plugin2` and `@Netless/white-video-plugin2` to fix some display issues."
  }, {
    heading: "improvement",
    content: "v2.12.24 was released on April 27, 2021."
  }, {
    heading: "new-features-10",
    content: "This release integrates `@Netless/white-audio-plugin2` and `@Netless/white-video-plugin2`, which are used by an Android client to listen to audio and watch video played on the whiteboard on a Web client."
  }, {
    heading: "fixed-issues-7",
    content: "This release fixed the issue that the asynchronous `getRoomState` method had no callbacks."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.22 was released on April 22, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release updates `white-web-sdk` to 2.12.14."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.21 was released on April 22, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release has the following improvements:"
  }, {
    heading: "fixed-issues-7",
    content: "Changes `RoomListener` and `PlayerListener` to main thread callbacks."
  }, {
    heading: "fixed-issues-7",
    content: "Updates `white-web-sdk` to 2.12.13."
  }, {
    heading: "fixed-issues-7",
    content: "Updates `@Netless/iframe-bridge` to 2.12.17."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.20 was released on April 17, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release updates `white-web-sdk` to 2.12.12."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.19 was released on April 14, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release has the following improvements:"
  }, {
    heading: "fixed-issues-7",
    content: "Adds a new constructor of `PptParams` that does not contain the `scheme` parameter."
  }, {
    heading: "fixed-issues-7",
    content: "Updates `@Netless/iframe-bridge` to 2.0.14 to improve the iframe plugin."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.18 was released on April 12, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release updates `@netless/iframe-bridge` to 2.0.13 to improve message notifications."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.17 was released on April 12, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release updates `@netless/iframe-bridge` to 2.0.11 and improves the display on Android devices."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.16 was released on April 9, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release updates `@netless/iframe-bridge` to 2.0.10 and improves the display on Android devices."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.15 was released on April 10, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release updates `white-web-sdk` to 2.12.9."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.14 was released on April 9, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release updates `@netless/iframe-bridge` to 2.0.9 to fix the display of HTML5 files."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.13 was released on April 9, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release restores the `scaleIframeToFit` method of the `Displayer` class."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.12 was released on April 9, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release updates `@netless/iframe-bridge` to 2.0.8 to fix the display of HTML5 files."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.11 was released on April 6, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release updates `white-web-sdk` to 2.12.8 to fix the problem that setting Follower mode did not take effect immediately."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.10 was released on April 2, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release updates `white-web-sdk` to 2.12.7 to improve the display of dynamic PPT files."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.9 was released on March 30, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release updates `@netless/iframe-bridge` to 2.0.7."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.8 was released on March 30, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release updates `white-web-sdk` to 2.12.6."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.7 was released on March 25, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release updates `@netless/iframe-bridge` to 2.0.5."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.6 was released on March 25, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release adds the `scaleIframeToFit` method to the `Displayer` class to enable zooming in and out so that HTML5 files can be displayed completely on screen."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.5 was released on March 25, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release updates `@netless/cursor-tool` to 0.0.7."
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.3 was released on March 20, 2021."
  }, {
    heading: "fixed-issues-7",
    content: "This release changes the default value of `disableNewPencil` in the `setDisableNewPencil` method from `false` to `true` so that the stroke effect is disabled by default. This addresses the issue that the stroke effect is not supported by SDKs earlier than v2.2.12."
  }, {
    heading: "fixed-issues-7",
    content: "To enable the stroke effect properly, ensure that every user in the room is using one of the following SDKs:"
  }, {
    heading: "fixed-issues-7",
    content: "Android SDK v2.12.3 or later"
  }, {
    heading: "fixed-issues-7",
    content: "iOS SDK v2.12.3 or later"
  }, {
    heading: "fixed-issues-7",
    content: "Web SDK v2.12.5 or later"
  }, {
    heading: "fixed-issues-7",
    content: "v2.12.2 was released on March 16, 2021."
  }, {
    heading: "new-features-11",
    content: "This release adds the stroke effect to better display handwriting. Call `setDisableNewPencil` to enable or disable the stroke effect, and call `isDisableNewPencil` to see whether the stroke effect is enabled."
  }, {
    heading: "new-features-11",
    content: "To enable the stroke effect properly, ensure that every user in the room is using one of the following SDKs:"
  }, {
    heading: "new-features-11",
    content: "Android SDK v2.12.2 or later"
  }, {
    heading: "new-features-11",
    content: "iOS SDK v2.12.3 or later"
  }, {
    heading: "new-features-11",
    content: "Web SDK v2.12.5 or later"
  }, {
    heading: "improvements-7",
    content: "This release updates `white-web-sdk` to v2.12.4 to improve the display logic of PPT files."
  }, {
    heading: "issues-fixed-1",
    content: "Fixed the crash problem caused by abnormal callbacks in live rooms in `debug` mode."
  }, {
    heading: "understand-the-tech-1",
    content: "This page tracks iOS release notes for the Whiteboard SDK."
  }, {
    heading: "reference-1",
    content: "To ensure a consistent user experience across different platforms while enabling native access on each platform, the Whiteboard SDK for iOS is implemented by creating a wrapper for the Whiteboard SDK for Web, rather than being a completely native SDK. Therefore, each iOS SDK version by default includes the updates of the Web SDK version that it is built upon. The corresponding Web SDK version is provided in each iOS release note, so that you can refer to the relevant Web SDK release note for updates."
  }, {
    heading: "reference-1",
    content: "Released on July 28, 2025."
  }, {
    heading: "new-features-12",
    content: "**High-performance whiteboard drawing tools**"
  }, {
    heading: "new-features-12",
    content: "This release introduces the `appliance-plugin` that provides a set of high-performance whiteboard drawing tools. To use it, install `@netless/appliance-plugin` and enable it with the `WhiteSdkConfiguration.enableAppliancePlugin` configuration option. For details, see the `appliance-plugin` documentation."
  }, {
    heading: "new-features-12",
    content: "`@netless/appliance-plugin` is an external dependency and must be installed separately."
  }, {
    heading: "new-features-12",
    content: "To ensure consistent rendering of strokes, enable the plugin on all platforms (Web, Android, and iOS). Strokes drawn with the plugin will not appear on platforms where it is not enabled."
  }, {
    heading: "new-features-12",
    content: "After enabling the plugin, historical whiteboard content is still visible but cannot be edited or upgraded. To avoid affecting the user experience, we recommend enabling the plugin on a new whiteboard. Disabling the plugin will remove content drawn with it."
  }, {
    heading: "new-features-12",
    content: "Once the plugin is enabled, you can:"
  }, {
    heading: "new-features-12",
    content: "Use the new laser pencil tool `LASER_PENCIL`. Learn more."
  }, {
    heading: "new-features-12",
    content: "Use the `WhiteMemberState.strokeOpacity` property to set line transparency."
  }, {
    heading: "new-features-12",
    content: "Use the `WhiteMemberState.fillOpacity` property to set fill transparency."
  }, {
    heading: "new-features-12",
    content: "Use the `WhiteMemberState.fillColor` property to set fill color."
  }, {
    heading: "new-features-12",
    content: "**PPT rendering error handling**"
  }, {
    heading: "new-features-12",
    content: "This version adds the `SlideListener.onSlideError` method for listening to PPT rendering errors. If an error occurs, you can call `WhiteSdk.recoverSlide` to recover rendering."
  }, {
    heading: "new-features-12",
    content: "**Auto focus behavior**"
  }, {
    heading: "new-features-12",
    content: "This release adds the `WhiteSdkConfiguration.useWebKeyboardInjection` property, which controls whether WKWebView is allowed to automatically gain input focus. This is useful for managing keyboard input and handling focus conflicts in complex app interfaces."
  }, {
    heading: "api-changes-7",
    content: "**Added**"
  }, {
    heading: "api-changes-7",
    content: "`WhiteSdkConfiguration`:"
  }, {
    heading: "api-changes-7",
    content: "`enableAppliancePlugin`"
  }, {
    heading: "api-changes-7",
    content: "`useWebKeyboardInjection`"
  }, {
    heading: "api-changes-7",
    content: "`WhiteMemberState`:"
  }, {
    heading: "api-changes-7",
    content: "`strokeOpacity`"
  }, {
    heading: "api-changes-7",
    content: "`fillOpacity`"
  }, {
    heading: "api-changes-7",
    content: "`fillColor`"
  }, {
    heading: "api-changes-7",
    content: "`onSlideError`"
  }, {
    heading: "api-changes-7",
    content: "`recoverSlide`"
  }, {
    heading: "api-changes-7",
    content: "Released on July 28, 2025."
  }, {
    heading: "api-changes-7",
    content: "The wrapped Web SDK has been upgraded to v2.16.51."
  }, {
    heading: "new-features-13",
    content: "**Domain preselection**"
  }, {
    heading: "new-features-13",
    content: "This version adds the `WhiteSDK.prepareWhiteConnectionForAppId` method to preselect an optimal access domain, which can improve the connection speed when users join a whiteboard room for the first time."
  }, {
    heading: "new-features-13",
    content: "**Whiteboard window style override**"
  }, {
    heading: "new-features-13",
    content: "This version adds the `WhiteWindowParams.overwriteStyles` method to override whiteboard window styles using CSS, allowing for customization of UI details."
  }, {
    heading: "fixed-issues-8",
    content: "This version fixes the following issue:"
  }, {
    heading: "fixed-issues-8",
    content: "`drawOnlyPencil` does not work on iOS 17 and above."
  }, {
    heading: "api-changes-8",
    content: "**Added**"
  }, {
    heading: "api-changes-8",
    content: "`prepareWhiteConnectionForAppId`"
  }, {
    heading: "api-changes-8",
    content: "`overwriteStyles`"
  }, {
    heading: "api-changes-8",
    content: "Released on July 28, 2025."
  }, {
    heading: "api-changes-8",
    content: "The wrapped Web SDK has been upgraded to v2.16.48."
  }, {
    heading: "new-features-14",
    content: "**Window apps management**"
  }, {
    heading: "new-features-14",
    content: "In the multi-window mode, the SDK supports inserting the PPT or whiteboard plugin as a window app. These are collectively referred to as window apps. Starting from this version, the `WhiteRoom` class introduces the following methods to manage window apps in the multi-window mode:"
  }, {
    heading: "new-features-14",
    content: "`addApp`: Inserts a window app and returns the app ID."
  }, {
    heading: "new-features-14",
    content: "`closeApp`: Closes the window of the specified window app."
  }, {
    heading: "new-features-14",
    content: "`focusApp`: Switches the focused window to the window of the specified window app."
  }, {
    heading: "new-features-14",
    content: "`queryApp`: Queries the information of the specified window app."
  }, {
    heading: "new-features-14",
    content: "`queryAllApps`: Queries the information of all current window apps."
  }, {
    heading: "new-features-14",
    content: "**Whiteboard tools customization**"
  }, {
    heading: "new-features-14",
    content: "The `WhiteMemberState` and `WhiteReadonlyMemberState` classes introduce the following properties for customizing whiteboard tools:"
  }, {
    heading: "new-features-14",
    content: "`textColor`: Modifies the text color in the text tool."
  }, {
    heading: "new-features-14",
    content: "`pencilEraserSize`: Modifies the size of the pencil eraser tool."
  }, {
    heading: "new-features-14",
    content: "**New PPT rendering configurations**"
  }, {
    heading: "new-features-14",
    content: "The `WhiteSlideAppParams` class introduces the following properties for PPT rendering configurations:"
  }, {
    heading: "new-features-14",
    content: "`minFPS`: Sets the minimum frame rate for PPT animations."
  }, {
    heading: "new-features-14",
    content: "`maxFPS`: Sets the maximum frame rate for PPT animations."
  }, {
    heading: "new-features-14",
    content: "`resolution`: Sets the rendering resolution multiplier for PPT."
  }, {
    heading: "new-features-14",
    content: "`maxResolutionLevel`: Sets the maximum resolution for PPT."
  }, {
    heading: "new-features-14",
    content: "`bgColor`: Sets the background color for PPT animations."
  }, {
    heading: "new-features-14",
    content: "`forceCanvas`: Specifies whether to force 2D rendering. It is disabled by default."
  }, {
    heading: "new-features-14",
    content: "`enableGlobalClick`: Specifies whether to enable executing the next step function by clicking on the PPT screen. It is enabled by default."
  }, {
    heading: "new-features-14",
    content: "**Text update**"
  }, {
    heading: "new-features-14",
    content: "The `updateText` method is added to update the text inserted using the `insertText` method."
  }, {
    heading: "fixed-issues-9",
    content: "This version fixes the following issues:"
  }, {
    heading: "fixed-issues-9",
    content: "`WKWebView` could cause failure to open `indexDB` under certain exceptional circumstances."
  }, {
    heading: "fixed-issues-9",
    content: "After configuring `WhiteWindowParams.fullscreen`, the app occasionally could not be displayed in full screen on the second launch."
  }, {
    heading: "fixed-issues-9",
    content: "After configuring `WhiteWindowParams.fullscreen`, there could be a brief flicker."
  }, {
    heading: "fixed-issues-9",
    content: "Occasional flickering when using fade-in and fade-out animations."
  }, {
    heading: "api-changes-9",
    content: "**Added**"
  }, {
    heading: "api-changes-9",
    content: "`addApp`"
  }, {
    heading: "api-changes-9",
    content: "`closeApp`"
  }, {
    heading: "api-changes-9",
    content: "`focusApp`"
  }, {
    heading: "api-changes-9",
    content: "`queryApp`"
  }, {
    heading: "api-changes-9",
    content: "`queryAllAppsWithCompletionHandler`"
  }, {
    heading: "api-changes-9",
    content: "`WhiteAppParam`"
  }, {
    heading: "api-changes-9",
    content: "`WhiteAppSyncAttributes`"
  }, {
    heading: "api-changes-9",
    content: "The following in `WhiteMemberState` and `WhiteReadonlyMemberState`:"
  }, {
    heading: "api-changes-9",
    content: "`textColor`"
  }, {
    heading: "api-changes-9",
    content: "`pencilEraserSize`"
  }, {
    heading: "api-changes-9",
    content: "`updateText`"
  }, {
    heading: "api-changes-9",
    content: "The following in `WhiteSlideAppParams`:"
  }, {
    heading: "api-changes-9",
    content: "`minFPS`"
  }, {
    heading: "api-changes-9",
    content: "`maxFPS`"
  }, {
    heading: "api-changes-9",
    content: "`resolution`"
  }, {
    heading: "api-changes-9",
    content: "`maxResolutionLevel`"
  }, {
    heading: "api-changes-9",
    content: "`bgColor`"
  }, {
    heading: "api-changes-9",
    content: "`forceCanvas`"
  }, {
    heading: "api-changes-9",
    content: "`enableGlobalClick`"
  }, {
    heading: "api-changes-9",
    content: "v2.16.62 was released on January 19, 2024."
  }, {
    heading: "api-changes-9",
    content: "The wrapped Web SDK has been upgraded to v2.16.42."
  }, {
    heading: "compatibility-changes-4",
    content: "This version deprecates the existing London data center (`gb-lon`) in the Whiteboard Data Center and introduces a new data center in Frankfurt, Europe (`eu`), whose service covers Europe. If you have set `gb-lon` in the previous version, please switch to` eu` after upgrading to this version and enable this data center in Agora Console."
  }, {
    heading: "new-features-15",
    content: "**PPT Volume Control**"
  }, {
    heading: "new-features-15",
    content: "This version adds the `getSlideVolumeWithCompletionHandler` and `updateSlideVolume `methods to retrieve and update the volume of audio in PPT slides."
  }, {
    heading: "new-features-15",
    content: "**PPT URL Intercept and Replacement**"
  }, {
    heading: "new-features-15",
    content: "`WhiteSdkConfiguration` adds a new configuration option, `enableSlideInterrupterAPI`, to enable intercepting and replacing URLs of PPT resources. This feature can be used to encrypt PPT resources uploaded by users and protect their privacy. Once enabled, you can set a callback object by calling `WhiteSDK.setSlideDelegate` and add the logic for replacing PPT URLs in the `slideUrlInterrupter: url: completionHandler` callback. This achieves the functionality of intercepting and replacing PPT URLs."
  }, {
    heading: "new-features-15",
    content: "**PPT Rendering Notification**"
  }, {
    heading: "new-features-15",
    content: "`WhiteSdkConfiguration` adds the `whiteSlideAppParams` configuration option for displaying configurations related to @netless/app-slide rendering. Currently, it supports configuring `WhiteSlideAppParams.showRenderError` to show or hide rendering error notifications."
  }, {
    heading: "new-features-15",
    content: "**Custom API Server Domain**"
  }, {
    heading: "new-features-15",
    content: "`WhiteSdkConfiguration` adds the `apiHosts` configuration option to configure a list of API server domains for the whiteboard, which can be used for server proxy implementation."
  }, {
    heading: "new-features-15",
    content: "**Custom Module Source**"
  }, {
    heading: "new-features-15",
    content: "`RoomParams` adds the `modulesOrigin` configuration option to configure the address for requesting whiteboard module data."
  }, {
    heading: "new-features-15",
    content: "**Document Operation Events**"
  }, {
    heading: "new-features-15",
    content: "This release adds the `dispatchDocsEvent` method to send events to the inserted PDF/PPTX documents in the whiteboard, allowing control over document page flipping, page navigation, and slide animation playback."
  }, {
    heading: "new-features-15",
    content: "**Window Fullscreen**"
  }, {
    heading: "new-features-15",
    content: "A new property, `WindowParams.fullscreen`, is added to control whether the window is displayed in fullscreen mode."
  }, {
    heading: "api-changes-10",
    content: "**Added**"
  }, {
    heading: "api-changes-10",
    content: "`getSlideVolumeWithCompletionHandler`"
  }, {
    heading: "api-changes-10",
    content: "`updateSlideVolume`"
  }, {
    heading: "api-changes-10",
    content: "`WhiteSdkConfiguration`"
  }, {
    heading: "api-changes-10",
    content: "`enableSlideInterrupterAPI`"
  }, {
    heading: "api-changes-10",
    content: "`whiteSlideAppParams`"
  }, {
    heading: "api-changes-10",
    content: "`apiHosts`"
  }, {
    heading: "api-changes-10",
    content: "`setSlideDelegate`"
  }, {
    heading: "api-changes-10",
    content: "`WhiteSlideDelegate`"
  }, {
    heading: "api-changes-10",
    content: "`slideUrlInterrupter: url: completionHandler`"
  }, {
    heading: "api-changes-10",
    content: "`dispatchDocsEvent`"
  }, {
    heading: "api-changes-10",
    content: "`WhiteWindowDocsEventOptions`"
  }, {
    heading: "api-changes-10",
    content: "`WhiteWindowDocsEventKey`"
  }, {
    heading: "api-changes-10",
    content: "`modulesOrigin` in `RoomParams`"
  }, {
    heading: "api-changes-10",
    content: "`modulesOrigin` in `PlayerConfiguration`"
  }, {
    heading: "api-changes-10",
    content: "`fullscreen` in `WhiteWindowParams`"
  }, {
    heading: "api-changes-10",
    content: "**Deprecated**"
  }, {
    heading: "api-changes-10",
    content: "`WhiteRegionGB` in `WhiteRegionKey`, use `WhiteRegionEU` instead"
  }, {
    heading: "api-changes-10",
    content: "`WhitePptParams`, use `WhiteSlideAppParams` instead"
  }, {
    heading: "api-changes-10",
    content: "v2.16.46 was released on December 2, 2022."
  }, {
    heading: "api-changes-10",
    content: "The wrapped Web SDK has been upgraded to v2.16.35."
  }, {
    heading: "new-features-16",
    content: "**1. Whiteboard tool updates**"
  }, {
    heading: "new-features-16",
    content: "This release adds new features for the following whiteboard tools:"
  }, {
    heading: "new-features-16",
    content: "Pencil: Adds support for drawing dotted lines by setting `room.memberState.dottedLine` as `true`."
  }, {
    heading: "new-features-16",
    content: "Text: Adds support for directly selecting and editing whiteboard text by setting `room.memberState.textCanSelectText` as `true`."
  }, {
    heading: "new-features-16",
    content: "In addition, this release adds a pencil eraser tool to erase any part of a pencil stroke."
  }, {
    heading: "new-features-16",
    content: "**2. Floatbar**"
  }, {
    heading: "new-features-16",
    content: `This release adds the floatbar feature. The floatbar pops up when selecting any whiteboard item, which enables users to
easily edit these whiteboard items. For example, when selecting a stroke, the floatbar enables the user to remove it or change its color.
When selecting some text, the floatbar enables the user to adjust its style or change its typeface.`
  }, {
    heading: "new-features-16",
    content: "Modify the `floatBar` parameter in the `WhiteRoomConfig` interface to enable floatbar."
  }, {
    heading: "new-features-16",
    content: "**3. Take screenshots**"
  }, {
    heading: "new-features-16",
    content: "This release adds `getLocalSnapShotWithCompletion` in the `WhiteDisplayer` class to take a screenshot of the current whiteboard page."
  }, {
    heading: "new-features-16",
    content: "**4. Request slide log**"
  }, {
    heading: "new-features-16",
    content: "This release adds the `requestSlideLogToFilePath` method in the `WhiteSDK` class to write the slide log into a specified file."
  }, {
    heading: "improvements-8",
    content: "This release provides the following improvements:"
  }, {
    heading: "improvements-8",
    content: "The SDK now automatically tries to recover after the whiteboard crashes due to insufficient web memory. If you have previously\nconfigured `navigationDelegate`, you need to undo that to apply this optimization. In addition, this release adds the\n`startRecoveringFromMemoryIssues` and `endRecoveringFromMemoryIssues` callbacks to report when the SDK starts to recover and\nfinishes its recovery, respectively."
  }, {
    heading: "improvements-8",
    content: "You can now pause or resume audio mixing or playback in dynamic PPT files with the `pauseAudioMixing` and `resumeAudioMixing` methods."
  }, {
    heading: "fixed-issues-10",
    content: "This release fixes the following issues:"
  }, {
    heading: "fixed-issues-10",
    content: "The creation of the whiteboard app sometimes failed after reconnection."
  }, {
    heading: "fixed-issues-10",
    content: "When creating the whiteboard app, synchronizing the initial height and width sometimes failed."
  }, {
    heading: "fixed-issues-10",
    content: "The `WhiteBroadcastState` sometimes failed to initialize when joining the room."
  }, {
    heading: "fixed-issues-10",
    content: "When using a non-ApplePencil stylus on the iPad, calling `drawOnlyPencil` sometimes caused the whiteboard to crash."
  }, {
    heading: "fixed-issues-10",
    content: "Calling `drawOnlyPencil` sometimes reported an error when the user did not have write permissions."
  }, {
    heading: "fixed-issues-10",
    content: "Switching the readable/writable state sometimes caused the configuration to be lost in the `disableCameraTransform` of `mainView`."
  }, {
    heading: "api-changes-11",
    content: "**Added**"
  }, {
    heading: "api-changes-11",
    content: "New properties in the `MemberState` class: `dottedLine` and `textCanSelectText`"
  }, {
    heading: "api-changes-11",
    content: "`pauseAudioMixing`"
  }, {
    heading: "api-changes-11",
    content: "`resumeAudioMixing`"
  }, {
    heading: "api-changes-11",
    content: "New parameter in the `WhiteRoomConfig` interface: `floatBar`"
  }, {
    heading: "api-changes-11",
    content: "New type in `WhiteApplianceNameKey`: `AppliancePencilEraser`"
  }, {
    heading: "api-changes-11",
    content: "`requestSlideLogToFilePath`"
  }, {
    heading: "api-changes-11",
    content: "`startRecoveringFromMemoryIssues`"
  }, {
    heading: "api-changes-11",
    content: "`endRecoveringFromMemoryIssues`"
  }, {
    heading: "api-changes-11",
    content: "`getLocalSnapShotWithCompletion`"
  }, {
    heading: "api-changes-11",
    content: "v2.16.24 was released on September 13, 2022."
  }, {
    heading: "new-features-17",
    content: "**1. Inserting text**"
  }, {
    heading: "new-features-17",
    content: "This release adds the `insertText` method to `WhiteRoom` for inserting text at a specified position."
  }, {
    heading: "new-features-17",
    content: "**2. Disabling the stroke effect**"
  }, {
    heading: "new-features-17",
    content: "This release adds the `disableNewPencilStroke` property to `WhiteSdkConfiguration` to enable or disable the stroke effect of the pencil. The default value of `disableNewPencilStroke` is `YES`, and the SDK enables the stroke effect immediately when you call `disableNewPencil(NO)` to enable the new pencil. To disable the stroke effect after setting `disableNewPencil(NO)`, you can call `disableNewPencilStroke(YES)`."
  }, {
    heading: "new-features-17",
    content: "**3. Getting the scene information**"
  }, {
    heading: "new-features-17",
    content: "This release adds the `getSceneFromScenePath` method to the `WhiteDisplayer` class, which supports using the scene path to get the information about a specified scene."
  }, {
    heading: "new-features-17",
    content: "**4. Setting whether to only allow drawing and writing using the Apple Pencil**"
  }, {
    heading: "new-features-17",
    content: "This release supports setting whether to only allow users to draw and write on the whiteboard using the Apple Pencil on iPad. Before joining a whiteboard room, you can set this by using the `drawOnlyApplePencil` property in `WhiteRoomConfig`; after joining a whiteboard room, you can call the `setDrawOnlyApplePencil` method in `WhiteRoom` to change the setting."
  }, {
    heading: "new-features-17",
    content: "**5. Support for YYKit**"
  }, {
    heading: "new-features-17",
    content: "The Agora Whiteboard SDK for iOS uses YYModel for data type conversion by default. As of this release, the SDK adds support for YYKit. To use YYKit, you need to add the following line to the `Podfile` file to add the dependency:"
  }, {
    heading: "improvements-9",
    content: "This release provides the following improvements:"
  }, {
    heading: "improvements-9",
    content: "Adds tween animation for the new pencil. This allows the SDK to automatically insert frames between keyframes when a user draws or writes with the new pencil, so that remote users see a smoother drawing process. To experience this improvement, ensure that you have called `setDisableNewPencil(false)` to enable the new pencil."
  }, {
    heading: "improvements-9",
    content: "Optimizes the reconnecting mechanism in weak network environment to reduce unnecessary reconnections."
  }, {
    heading: "fixed-issues-11",
    content: "This release fixed the following issues:"
  }, {
    heading: "fixed-issues-11",
    content: "Occasionally, the contents on the whiteboard appeared shifted and overshadowed after users zoomed or moved their view."
  }, {
    heading: "fixed-issues-11",
    content: "Occasionally, users could not switch the pages of a dynamic PPT slide after an SDK reconnection."
  }, {
    heading: "fixed-issues-11",
    content: "The contents on the whiteboard occasionally were not fully displayed when users joined a whiteboard room that already had."
  }, {
    heading: "fixed-issues-11",
    content: "A memory leak sometimes occurred after an SDK reconnection."
  }, {
    heading: "fixed-issues-11",
    content: "An error sometimes occurred when calling `setWritable` repeatedly."
  }, {
    heading: "fixed-issues-11",
    content: "The virtual keyboard did not pop up when clicking `text` on iOS browsers."
  }, {
    heading: "fixed-issues-11",
    content: "When a user switched to read-only mode, then switched back to read-write mode and wrote, remote users saw that user's cursor as fixed."
  }, {
    heading: "api-changes-12",
    content: "**Added**"
  }, {
    heading: "api-changes-12",
    content: "`insertText`"
  }, {
    heading: "api-changes-12",
    content: "`getSceneFromScenePath`"
  }, {
    heading: "api-changes-12",
    content: "`setDrawOnlyApplePencil`"
  }, {
    heading: "api-changes-12",
    content: "`drawOnlyApplePencil`"
  }, {
    heading: "api-changes-12",
    content: "`disableNewPencilStroke`"
  }, {
    heading: "api-changes-12",
    content: "v2.15.23 was released on January 21, 2022."
  }, {
    heading: "api-changes-12",
    content: "This release provides the following improvements:"
  }, {
    heading: "api-changes-12",
    content: "Updates `white-web-sdk` to v2.15.16."
  }, {
    heading: "api-changes-12",
    content: "Optimizes `getSceneSnapshotImage` and `getScenePreviewImage` to ensure the images inserted in the scene are displayed correctly in the screenshot."
  }, {
    heading: "api-changes-12",
    content: "v2.15.0 was released on November 16, 2021."
  }, {
    heading: "compatibility-changes-5",
    content: "To simplify APIs, this release deletes the `joinRoomWithUuid` and `joinRoomWithRoomUuid` methods, and keeps only the `joinRoomWithConfig` method."
  }, {
    heading: "compatibility-changes-5",
    content: "At the same time, to help you manage users in a room, this release adds the `uid` parameter in `initWithUuid` of the `WhiteRoomConfig` class, for setting the unique identifier of a user."
  }, {
    heading: "compatibility-changes-5",
    content: "If you upgrade the SDK to v2.15.0 or later, to join a room, you must call `joinRoomWithConfig`, and ensure that you pass in a string `uid` in `initWithUuid` when initializing the `WhiteRoomConfig` object. The `uid` of each user cannot be longer than 1024 bytes and must be unique in the same room. For more information, see Join a Whiteboard Room."
  }, {
    heading: "new-features-18",
    content: "This release adds support for converting and displaying the following PowerPoint (PPT) features:"
  }, {
    heading: "new-features-18",
    content: "Action buttons"
  }, {
    heading: "new-features-18",
    content: "Slide masters added with animation effects."
  }, {
    heading: "improvements-10",
    content: "This release provides the following improvements:"
  }, {
    heading: "improvements-10",
    content: "Updates `white-web-sdk` to v2.15.1."
  }, {
    heading: "improvements-10",
    content: "Further optimizes the writing experience."
  }, {
    heading: "fixed-issues-12",
    content: "This release has fixed the following issues:"
  }, {
    heading: "fixed-issues-12",
    content: "The following issues with displaying dynamic PPT files in the whiteboard were fixed:"
  }, {
    heading: "fixed-issues-12",
    content: "The images were displaced occasionally."
  }, {
    heading: "fixed-issues-12",
    content: "Failure to read certain styles caused the screen to go blank."
  }, {
    heading: "fixed-issues-12",
    content: "The rotation angle and color were incorrect for some text."
  }, {
    heading: "fixed-issues-12",
    content: "Occasionally, elements with an animation effect were not displayed"
  }, {
    heading: "fixed-issues-12",
    content: "The animation of some text was displayed incorrectly."
  }, {
    heading: "api-changes-13",
    content: "**Modified**"
  }, {
    heading: "api-changes-13",
    content: "`initWithUuid:roomToken`"
  }, {
    heading: "api-changes-13",
    content: "`initWithUuid:roomToken:userPayload`"
  }, {
    heading: "api-changes-13",
    content: "**Deleted**"
  }, {
    heading: "api-changes-13",
    content: "`initWithUuid:roomToken:memberInfo`"
  }, {
    heading: "api-changes-13",
    content: "`joinRoomWithUuid`"
  }, {
    heading: "api-changes-13",
    content: "`joinRoomWithRoomUuid`"
  }, {
    heading: "api-changes-13",
    content: "v2.14.1 was released on November 11, 2021."
  }, {
    heading: "compatibility-changes-6",
    content: "As of this release, the minimum platform version supported by the Agora Interactive Whiteboard iOS SDK changes from iOS 9 to iOS 10."
  }, {
    heading: "improvements-11",
    content: "This release provides the following improvements:"
  }, {
    heading: "improvements-11",
    content: "Updates `white-web-sdk` to v2.14.4."
  }, {
    heading: "improvements-11",
    content: "Further optimizes the writing performance."
  }, {
    heading: "improvements-11",
    content: "Optimizes the shape of handwriting."
  }, {
    heading: "improvements-11",
    content: "Improves the accuracy of the `firePhaseChanged` callback."
  }, {
    heading: "improvements-11",
    content: "Hides elements that should not be displayed in a slide master using the file-conversion function."
  }, {
    heading: "fixed-issues-13",
    content: "This release has fixed the following issues:"
  }, {
    heading: "fixed-issues-13",
    content: "After switching to the hand tool, users could not switch back to the cursor."
  }, {
    heading: "fixed-issues-13",
    content: "Occasionally, the handwriting disappeared suddenly during writing."
  }, {
    heading: "fixed-issues-13",
    content: "Occasionally, the handwriting had unnatural teardrop-like strokes during writing."
  }, {
    heading: "fixed-issues-13",
    content: "When the user edited text after manually scaling the text box, the text box and text reverted to the original size."
  }, {
    heading: "fixed-issues-13",
    content: "The view became incorrect after the window size changed on some browsers and devices."
  }, {
    heading: "fixed-issues-13",
    content: "When the eraser was moved quickly, the eraser icon was not enlarged and the fast deleting function did not work."
  }, {
    heading: "fixed-issues-13",
    content: "Occasionally, multiple audio files in dynamic PPT slides played simultaneously."
  }, {
    heading: "fixed-issues-13",
    content: "Animations were displayed incorrectly after a dynamic PPT slide returned to the previous page."
  }, {
    heading: "fixed-issues-13",
    content: "Occasionally, a text box with an animation effect was flipped in mirror mode."
  }, {
    heading: "fixed-issues-13",
    content: "v2.13.19 was released on August 20, 2021."
  }, {
    heading: "new-features-19",
    content: "This release has the following new features:"
  }, {
    heading: "new-features-19",
    content: "Adds the `logger` callback in `WhiteCommonCallbackDelegate`, with which you can get the local debug logs output by the SDK."
  }, {
    heading: "new-features-19",
    content: "Adds support for converting and displaying the following PowerPoint (PPT) features:"
  }, {
    heading: "new-features-19",
    content: "Add animations to text per paragraph."
  }, {
    heading: "new-features-19",
    content: "Animate text by word or by letter."
  }, {
    heading: "new-features-19",
    content: "All preset table styles."
  }, {
    heading: "new-features-19",
    content: "Fonts smaller than 9 pt (12 px)."
  }, {
    heading: "improvements-12",
    content: "This release has the following improvements:"
  }, {
    heading: "improvements-12",
    content: "Updates `white-web-sdk` to 2.13.17."
  }, {
    heading: "improvements-12",
    content: "To improve security, disables the `allowUniversalAccessFromFileURLs` function inside the whiteboard. After turning off this function, when you call `getSceneSnapshotImage`, cross-origin images might not be displayed in the generated screenshots."
  }, {
    heading: "fixed-issues-14",
    content: "This release fixed the following issues:"
  }, {
    heading: "fixed-issues-14",
    content: "Occasionally, the room was stuck in the connecting state when the user joined a room."
  }, {
    heading: "fixed-issues-14",
    content: "The cursor disappeared for some users after the SDK reconnected."
  }, {
    heading: "fixed-issues-14",
    content: "The status of some plugins was incorrect after the SDK reconnected."
  }, {
    heading: "fixed-issues-14",
    content: "The hand tool was not restricted by the set `WhiteCameraBound`."
  }, {
    heading: "fixed-issues-14",
    content: "On some high-resolution devices, when the user was in the `Follower` of `setViewMode` view mode, the center point of the view was slightly shifted."
  }, {
    heading: "fixed-issues-14",
    content: "The following issues with displaying dynamic PPT files in the whiteboard were fixed:"
  }, {
    heading: "fixed-issues-14",
    content: "Paragraph spacing was displayed incorrectly."
  }, {
    heading: "fixed-issues-14",
    content: "Failed to split text into columns."
  }, {
    heading: "fixed-issues-14",
    content: "The slide background fill of shapes was displayed incorrectly."
  }, {
    heading: "fixed-issues-14",
    content: "Hanging indentation was displayed incorrectly."
  }, {
    heading: "fixed-issues-14",
    content: "The slide was displayed incorrectly when the user called `pptPreviousStep` to roll back a slide."
  }, {
    heading: "fixed-issues-14",
    content: "The numbering of text displayed incorrectly."
  }, {
    heading: "fixed-issues-14",
    content: "Some equations were displayed incompletely after conversion."
  }, {
    heading: "fixed-issues-14",
    content: "Some lines broke incorrectly."
  }, {
    heading: "fixed-issues-14",
    content: "Text written from right to left (such as Arabic) was displayed incorrectly."
  }, {
    heading: "fixed-issues-14",
    content: "v2.13.15 was released on July 23 2021."
  }, {
    heading: "new-features-20",
    content: "To improve the dynamic file conversion function, this release adds support for converting and displaying the following PowerPoint (PPT) features:"
  }, {
    heading: "new-features-20",
    content: "Animation effect > Reverse Path Direction"
  }, {
    heading: "new-features-20",
    content: "Vertical Text Box"
  }, {
    heading: "new-features-20",
    content: "Microsoft Equation Editor 3.0"
  }, {
    heading: "new-features-20",
    content: "Hide background graphic in a slide master"
  }, {
    heading: "new-features-20",
    content: "Change the color of pictures"
  }, {
    heading: "new-features-20",
    content: "The following picture effects are now supported:"
  }, {
    heading: "new-features-20",
    content: "Metal Frame"
  }, {
    heading: "new-features-20",
    content: "Soft Edge Rectangle"
  }, {
    heading: "new-features-20",
    content: "Double Frame, Black"
  }, {
    heading: "new-features-20",
    content: "Thick Matte, Black"
  }, {
    heading: "new-features-20",
    content: "Simple Frame, Black"
  }, {
    heading: "new-features-20",
    content: "Moderate Frame, Black"
  }, {
    heading: "new-features-20",
    content: "Center Shadow Rectangle"
  }, {
    heading: "new-features-20",
    content: "Soft Edge Oval"
  }, {
    heading: "new-features-20",
    content: "Metal Rounded Rectangle"
  }, {
    heading: "new-features-20",
    content: "Metal Oval"
  }, {
    heading: "improvements-13",
    content: "This release has the following improvements:"
  }, {
    heading: "improvements-13",
    content: "Updates `white-web-sdk` to 2.13.11."
  }, {
    heading: "improvements-13",
    content: "Updates `@netless/video-js-plugin` to 0.3.3."
  }, {
    heading: "improvements-13",
    content: "Reduces CPU usage during the playback of animations in dynamic PPT files."
  }, {
    heading: "improvements-13",
    content: "Improves the smoothness of writing and drawing on the whiteboard."
  }, {
    heading: "improvements-13",
    content: "Optimizes the timestamp synchronization algorithm to reduce time differences."
  }, {
    heading: "improvements-13",
    content: "Supports printing logs on scene changes."
  }, {
    heading: "improvements-13",
    content: "Adds the `previewURL` parameter in `WhitePptPage`, which supports displaying dynamic PPT previews in the whiteboard. See `API reference`."
  }, {
    heading: "improvements-13",
    content: "Deprecates the `backgroundColor` property in the `WhiteDisplayer` class. Instead, this release optimizes the implementation of the `WhiteboardView` class, which allows you to use the `backgroundColor` property of the `UIView` class to modify the background color of the whiteboard. See backgroundcolor."
  }, {
    heading: "fixed-issues-15",
    content: "This release fixed the following issues:"
  }, {
    heading: "fixed-issues-15",
    content: "The contents on the whiteboard occasionally became unclear when the user adjusted the view."
  }, {
    heading: "fixed-issues-15",
    content: "Users of the Android SDK occasionally failed to draw the first line after joining the room."
  }, {
    heading: "fixed-issues-15",
    content: "The method call of `refreshViewSize` did not take effect occasionally."
  }, {
    heading: "fixed-issues-15",
    content: "The following issues with displaying dynamic PPT files in the whiteboard were fixed:"
  }, {
    heading: "fixed-issues-15",
    content: "Animations did not play in the set order."
  }, {
    heading: "fixed-issues-15",
    content: "Animations did not disappear when playback finished."
  }, {
    heading: "fixed-issues-15",
    content: "Table height was displayed incorrectly."
  }, {
    heading: "fixed-issues-15",
    content: "Pictures inserted in content placeholders failed to display."
  }, {
    heading: "fixed-issues-15",
    content: "Some shapes were rendered incorrectly."
  }, {
    heading: "fixed-issues-15",
    content: "The text was incorrectly indented."
  }, {
    heading: "fixed-issues-15",
    content: "Animation triggers did not work."
  }, {
    heading: "fixed-issues-15",
    content: "Picture transparency was incorrect."
  }, {
    heading: "fixed-issues-15",
    content: "v2.13.4 was released on June 15, 2021."
  }, {
    heading: "fixed-issues-15",
    content: "This release updates `white-web-sdk` to 2.13.4."
  }, {
    heading: "fixed-issues-15",
    content: "v2.13.2 was released on June 11, 2021."
  }, {
    heading: "fixed-issues-15",
    content: "This release updates `white-web-sdk` to 2.13.3."
  }, {
    heading: "fixed-issues-15",
    content: "v2.13.1 was released on June 11, 2021."
  }, {
    heading: "fixed-issues-15",
    content: "**Improvement**"
  }, {
    heading: "fixed-issues-15",
    content: "This release updates `white-web-sdk` to 2.13.2."
  }, {
    heading: "fixed-issues-15",
    content: "**Issue fixed**"
  }, {
    heading: "fixed-issues-15",
    content: "This release fixed the issue that when `disableDeviceInputs` is set as `true`, the user might still be able to operate the iframe plugin."
  }, {
    heading: "fixed-issues-15",
    content: "v2.12.33 was released on June 8, 2021."
  }, {
    heading: "fixed-issues-15",
    content: "This release fixed the following issue: If the user in host mode zooms in or out on the HTML5 file while using the clicker tool, users in follower mode saw incomplete display of file content."
  }, {
    heading: "fixed-issues-15",
    content: "v2.12.32 was released on June 7, 2021."
  }, {
    heading: "fixed-issues-15",
    content: "This release updates `@netless/cursor-tool` to 0.1.0 and `@netless/iframe-bridge` to 2.1.2."
  }, {
    heading: "fixed-issues-15",
    content: "v2.12.31 was released on June 4, 2021."
  }, {
    heading: "fixed-issues-15",
    content: "This release updates  `white-web-sdk` to 2.12.21 and `@netless/video-js-plugin` to 0.1.5."
  }, {
    heading: "fixed-issues-15",
    content: "v2.12.30 was released on June 2, 2021."
  }, {
    heading: "fixed-issues-15",
    content: "This release fixed the video display issue of `@netless/video-js-plugin`."
  }, {
    heading: "fixed-issues-15",
    content: "v2.12.29 was released on June 1, 2021."
  }, {
    heading: "fixed-issues-15",
    content: "This release updates `@netless/video-js-plugin` to 0.1.3 to fix the incompatibility issue between the `video-js-plugin` and earlier versions of iOS WebView."
  }, {
    heading: "fixed-issues-15",
    content: "v2.12.28 was released on May 25, 2021."
  }, {
    heading: "fixed-issues-15",
    content: "This release updates `@netless/cursor-tool` to 0.0.9."
  }, {
    heading: "fixed-issues-15",
    content: "v2.12.27 was released on May 24, 2021."
  }, {
    heading: "new-features-21",
    content: "This release integrates `@netless/video-js-plugin`, which is used by an iOS client to watch video played on the whiteboard on a Web client. Supported file formats include M3U8 and others."
  }, {
    heading: "improvement-1",
    content: "This release updates `white-web-sdk`  to 2.12.20."
  }, {
    heading: "improvement-1",
    content: "v2.12.26 was released on May 20, 2021."
  }, {
    heading: "improvement-1",
    content: "This release has the following improvements:"
  }, {
    heading: "improvement-1",
    content: "Adds `ApplianceClicker` to `WhiteApplianceNameKey` for interacting with HTML5 files."
  }, {
    heading: "improvement-1",
    content: "Updates `white-web-sdk` to 2.12.19."
  }, {
    heading: "improvement-1",
    content: "v2.12.25 was released on May 17, 2021."
  }, {
    heading: "improvement-1",
    content: "This release has the following improvements:"
  }, {
    heading: "improvement-1",
    content: "Enables server-side typesetting (`useServerWrap`) by default. When server-side typesetting is enabled, the size of font files are automatically reduced for faster rendering."
  }, {
    heading: "improvement-1",
    content: "Updates `white-web-sdk` to 2.12.18."
  }, {
    heading: "improvement-1",
    content: "v2.12.24 was released on May 13, 2021."
  }, {
    heading: "improvement-1",
    content: "This release adds the following features:"
  }, {
    heading: "improvement-1",
    content: "Adds `ApplianceShape` to `WhiteApplianceNameKey` for setting the shape tool. Supported shape types include triangle, rhombus, pentagram, and speech balloon."
  }, {
    heading: "improvement-1",
    content: "Adds the `syncBlockTimestamp` method to the `Room` class. You can use this method to set the delay time for sending the whiteboard content, so that the whiteboard content and the audio and video are sent at the same time."
  }, {
    heading: "improvement-1",
    content: "Updates `white-web-sdk` to 2.12.17."
  }, {
    heading: "improvement-1",
    content: "v2.12.23 was released on May 11, 2021."
  }, {
    heading: "improvement-1",
    content: "This release adds the `RegionKey` enumeration for setting the data center."
  }, {
    heading: "improvement-1",
    content: "v2.12.23 was released on May 11, 2021."
  }, {
    heading: "improvement-1",
    content: "This release adds the `RegionKey` enumeration, which is used to set the data center."
  }, {
    heading: "improvement-1",
    content: "v2.12.22 was released on April 28, 2021."
  }, {
    heading: "improvement-1",
    content: "This release updates `@Netless/white-audio-plugin2` and `@Netless/white-video-plugin2` to fix some display issues."
  }, {
    heading: "improvement-1",
    content: "v2.12.21 was released on April 28, 2021."
  }, {
    heading: "new-features-22",
    content: "This release integrates `@Netless/white-audio-plugin2` and `@Netless/white-video-plugin2`, which are used by an iOS client to listen to audio and watch video played on the whiteboard on a Web client."
  }, {
    heading: "fixed-issues-16",
    content: "This release updates `@Netless/white-audio-plugin` to 1.2.23."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.20 was released on April 22, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release updates `white-web-sdk` to 2.12.14."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.19 was released on April 22, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release has the following improvements:"
  }, {
    heading: "fixed-issues-16",
    content: "Updates `white-web-sdk` to 2.12.13 to improve the display of dynamic PPT files."
  }, {
    heading: "fixed-issues-16",
    content: "Updates `@Netless/iframe-bridge` to 2.0.17."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.18 was released on April 20, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release updates `@Netless/iframe-bridge` to 2.0.16."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.17 was released on April 17, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release updates `white-web-sdk` to 2.12.12."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.16 was released on April 14, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release updates `@Netless/iframe-bridge` to 2.0.14 to improve the iframe plugin."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.15 was released on April 13, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release updates `@netless/iframe-bridge` to 2.0.13 to improve the logic of sending messages for HTML5 files."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.14 was released on April 13, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release updates `@netless/iframe-bridge` to 2.0.11 to fix the display of HTML5 files."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.13 was released on April 10, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release updates `white-web-sdk` to 2.12.9."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.12 was released on April 9, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release updates `@netless/iframe-bridge` to 2.0.9 to fix the display of HTML5 files."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.11 was released on April 9, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release updates `@netless/iframe-bridge` to 2.0.8 to fix the display of HTML5 files."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.10 was released on April 6, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release updates `white-web-sdk` to 2.12.8 to fix the problem that setting Follower mode did not take effect immediately."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.9 was released on April 2, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release updates `white-web-sdk` to 2.12.7 to improve the display of dynamic PPT files."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.8 was released on March 30, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release updates `@netless/iframe-bridge` to 2.0.7."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.7 was released on March 30, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release updates `white-web-sdk` to 2.12.6."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.6 was released on March 25, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release updates `@netless/iframe-bridge` to 2.0.5."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.5 was released on March 25, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release adds the `scaleIframeToFit` method to the `Displayer` class to enable zooming in and out so that HTML5 files can be completely displayed on screen."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.4 was released on March 24, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release updates `@netless/cursor-tool` to 0.0.7."
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.3 was released on March 20, 2021."
  }, {
    heading: "fixed-issues-16",
    content: "This release changes the default value of `disableNewPencil` in the `WhiteRoomConfig` interface to `YES` so that the stroke effect is disabled by default. This addresses the issue that the stroke effect is not supported by SDKs earlier than v2.2.12."
  }, {
    heading: "fixed-issues-16",
    content: "To enable the stroke effect properly, ensure that every user in the room is using one of the following SDKs:"
  }, {
    heading: "fixed-issues-16",
    content: "Android SDK v2.12.3 or later"
  }, {
    heading: "fixed-issues-16",
    content: "iOS SDK v2.12.3 or later"
  }, {
    heading: "fixed-issues-16",
    content: "Web SDK v2.12.5 or later"
  }, {
    heading: "fixed-issues-16",
    content: "v2.12.2 was released on March 16, 2021."
  }, {
    heading: "new-features-23",
    content: "This release adds the stroke effect to better display handwriting. Call `disableNewPencil` in the `WhiteRoomConfig` interface to enable or disable the stroke effect."
  }, {
    heading: "new-features-23",
    content: "To enable the stroke effect properly, ensure that every user in the room is using one of the following SDKs:"
  }, {
    heading: "new-features-23",
    content: "Android SDK v2.12.2 or later"
  }, {
    heading: "new-features-23",
    content: "iOS SDK v2.12.2 or later"
  }, {
    heading: "new-features-23",
    content: "Web SDK v2.12.5 or later"
  }, {
    heading: "improvements-14",
    content: "This release updates `white-web-sdk` to v2.12.4 and improves the display logic of PPT files."
  }, {
    heading: "understand-the-tech-2",
    content: "This page tracks Web release notes for the Whiteboard SDK."
  }, {
    heading: "reference-2",
    content: "Released May 10, 2025"
  }, {
    heading: "improvements-15",
    content: "This release includes the following changes:"
  }, {
    heading: "improvements-15",
    content: "For security and compliance, the `regions` parameter used when joining a whiteboard room now distinguishes between domestic and international data centers."
  }, {
    heading: "improvements-15",
    content: "To prevent memory overflows caused by image uploads in formats such as `base64`, the `src` path for inserted images must now be a URL that starts with `http` or `https`."
  }, {
    heading: "improvements-15",
    content: "Released on July 28, 2025."
  }, {
    heading: "new-features-24",
    content: "**Alternative API domains**"
  }, {
    heading: "new-features-24",
    content: "To ensure the connectivity of API calls, this version adds the following alternative API domains, which will be automatically selected during SDK initialization:"
  }, {
    heading: "new-features-24",
    content: "Domain"
  }, {
    heading: "new-features-24",
    content: "Covered region"
  }, {
    heading: "new-features-24",
    content: "`api.whiteboard.sd-rtn.com`"
  }, {
    heading: "new-features-24",
    content: "CN, India, Singapore"
  }, {
    heading: "new-features-24",
    content: "`api.baiban.shengwang.cn`"
  }, {
    heading: "new-features-24",
    content: "CN"
  }, {
    heading: "new-features-24",
    content: "`api.whiteboard.rtelink.com`"
  }, {
    heading: "new-features-24",
    content: "US,  EU"
  }, {
    heading: "new-features-24",
    content: "`api.netless.link`"
  }, {
    heading: "new-features-24",
    content: "CN, India, Singapore"
  }, {
    heading: "new-features-24",
    content: "`api.whiteboard.agora.io`"
  }, {
    heading: "new-features-24",
    content: "US,  EU"
  }, {
    heading: "improvements-16",
    content: "This version includes the following improvements:"
  }, {
    heading: "improvements-16",
    content: "**Optimized WebSocket transmission experience**"
  }, {
    heading: "improvements-16",
    content: "To address the issue of slow whiteboard room joining, this version includes the following improvements:"
  }, {
    heading: "improvements-16",
    content: "Optimized WebSocket reconnection algorithm to improve reconnection speed."
  }, {
    heading: "improvements-16",
    content: "Added `onConnection` event to report that WebSocket is connected and is downloading the whiteboard snapshot data of the current room to restore the room state. You can use this callback event to prompt users that the whiteboard room is loading."
  }, {
    heading: "improvements-16",
    content: "**Other improvements**"
  }, {
    heading: "improvements-16",
    content: "This version also includes the following improvements:"
  }, {
    heading: "improvements-16",
    content: "Improved the algorithm for determining whether the cursor hits a graphic when the graphic has a fill color, optimizing the graphic selection experience."
  }, {
    heading: "improvements-16",
    content: "Added a `timeout` parameter to the `screenshotToCanvasAsync` method to set the image loading timeout. If the image loading exceeds this time, the SDK will directly proceed to the next drawing operation without waiting for the image to load completely."
  }, {
    heading: "improvements-16",
    content: "Added a `commandWheelToZoom` property to `ConstructRoomParams` to implement zooming the whiteboard by holding down the `command` key and scrolling the mouse wheel on macOS devices."
  }, {
    heading: "improvements-16",
    content: 'Optimized the button style of the "Transparent" fill color in the floating bar.'
  }, {
    heading: "fixed-issues-17",
    content: "This version fixes the following issue:"
  }, {
    heading: "fixed-issues-17",
    content: "The error message `AkkoSocket can't emit when phase is connecting` that appears in the console when connecting to WebSocket for more than 2 seconds."
  }, {
    heading: "api-changes-14",
    content: "**Added**"
  }, {
    heading: "api-changes-14",
    content: "`onConnection`"
  }, {
    heading: "api-changes-14",
    content: "The `timeout` parameter in the `screenshotToCanvasAsync`"
  }, {
    heading: "api-changes-14",
    content: "The `commandWheelToZoom` parameter in `ConstructRoomParams`"
  }, {
    heading: "api-changes-14",
    content: "Released on July 28, 2025."
  }, {
    heading: "new-features-25",
    content: "**Fill closed shape elements**"
  }, {
    heading: "new-features-25",
    content: "`MemberState` adds the `fillColor` property, which is used to set the fill color of closed shape elements such as circles and rectangles."
  }, {
    heading: "new-features-25",
    content: "**Automatic switch to select tool**"
  }, {
    heading: "new-features-25",
    content: "`MemberState` adds the following properties to automatically switch to the select tool after using the corresponding whiteboard tool:"
  }, {
    heading: "new-features-25",
    content: "`textCompleteToSelector`: Automatically switch to the select tool after typing with the text tool."
  }, {
    heading: "new-features-25",
    content: "`rectangleCompleteToSelector`: Automatically switch to the select tool after drawing a rectangle."
  }, {
    heading: "new-features-25",
    content: "`ellipseCompleteToSelector`: Automatically switch to the select tool after drawing a circle."
  }, {
    heading: "new-features-25",
    content: "`straightCompleteToSelector`: Automatically switch to the select tool after drawing a straight line."
  }, {
    heading: "new-features-25",
    content: "`arrowCompleteToSelector`: Automatically switch to the select tool after drawing an arrow."
  }, {
    heading: "new-features-25",
    content: "`shapeCompleteToSelector`: Automatically switch to the select tool after drawing a triangle, bubble, or other shapes."
  }, {
    heading: "new-features-25",
    content: "**Whiteboard drawing performance optimization strategy**"
  }, {
    heading: "new-features-25",
    content: "The `joinRoom` method adds the `optimizeOptions` parameter to set the performance optimization strategy for whiteboard drawing. The performance optimization options include:"
  }, {
    heading: "new-features-25",
    content: "Adjusting the refresh interval of whiteboard drawing: A lower refresh interval provides smoother stroke display but has a higher resource consumption, while a higher refresh interval may result in laggy strokes but has a lower resource consumption."
  }, {
    heading: "new-features-25",
    content: "Using single canvas drawing: By default, the whiteboard uses two canvases alternately to avoid flickering on some devices during drawing. Using a single canvas drawing can eliminate redraws and reduce performance consumption."
  }, {
    heading: "new-features-25",
    content: "Using floating canvas: When writing on the whiteboard, after enabling single canvas drawing, a floating canvas of approximately 256 x 256px is generated based on the drawing position. When subsequent drawings are within the range of this floating canvas, the synchronization of strokes is limited to this floating canvas, reducing performance consumption."
  }, {
    heading: "improvements-17",
    content: "This version includes the following improvements:"
  }, {
    heading: "improvements-17",
    content: "`MemberState` adds the `textSizeOverride` property, which is used to set the default font size of the text tool. If not set, the default font size used will be the same as the last created text element."
  }, {
    heading: "improvements-17",
    content: "The `room.useNativeClipboard` property is added to set whether to use the native clipboard. When enabled, the whiteboard shortcuts for copy and paste in `HotKeys` will be disabled and replaced with the native `copy` and `paste` events."
  }, {
    heading: "improvements-17",
    content: "`DisplayerCallbacks` adds the `onBackgroundError` callback to report background image loading failure."
  }, {
    heading: "improvements-17",
    content: "`RoomCallbacks` adds the `onObjectsLimit` callback to report when the number of elements in the whiteboard exceeds the limit. When the limit is reached, the frontend will throw warnings and events."
  }, {
    heading: "improvements-17",
    content: "`ImageInformation` adds the `crossOrigin` property to set whether to load images in a cross-origin manner. It is enabled by default."
  }, {
    heading: "improvements-17",
    content: "The `room` class adds the `syncMode` property. When set to `true`, synchronization will be more frequent but may slightly affect animation smoothness."
  }, {
    heading: "improvements-17",
    content: "A floating toolbar is displayed when selecting graphic elements, such as rectangles and circles, drawn on the whiteboard."
  }, {
    heading: "improvements-17",
    content: "The `clearUndoHistory` method is added to clear the undo history."
  }, {
    heading: "improvements-17",
    content: "Setting `cursorAdapter: false` can hide the built-in cursors, such as the laser pen, eraser, and so on."
  }, {
    heading: "improvements-17",
    content: "Text elements now have a fixed line height to avoid display differences across platforms."
  }, {
    heading: "fixed-issues-18",
    content: "This version fixes the following issues:"
  }, {
    heading: "fixed-issues-18",
    content: "Memory leaks caused by not destroying certain listeners when exiting the room."
  }, {
    heading: "fixed-issues-18",
    content: "Exception errors when read-only users pressed the Esc key."
  }, {
    heading: "fixed-issues-18",
    content: "Occasional display errors when drawing dashed lines."
  }, {
    heading: "fixed-issues-18",
    content: "An issue where erasing text with the eraser tool on touch devices did not work properly."
  }, {
    heading: "fixed-issues-18",
    content: "Occasional white screen when entering the room without any error messages."
  }, {
    heading: "fixed-issues-18",
    content: "Copied and pasted text elements could not be selected."
  }, {
    heading: "fixed-issues-18",
    content: "The persistent highlight of the text box content after deselecting the text box."
  }, {
    heading: "api-changes-15",
    content: "**Added**"
  }, {
    heading: "api-changes-15",
    content: "`MemberState` adds the following properties:"
  }, {
    heading: "api-changes-15",
    content: "`fillColor`"
  }, {
    heading: "api-changes-15",
    content: "`textSizeOverride`"
  }, {
    heading: "api-changes-15",
    content: "`textCompleteToSelector`"
  }, {
    heading: "api-changes-15",
    content: "`rectangleCompleteToSelector`"
  }, {
    heading: "api-changes-15",
    content: "`ellipseCompleteToSelector`"
  }, {
    heading: "api-changes-15",
    content: "`straightCompleteToSelector`"
  }, {
    heading: "api-changes-15",
    content: "`arrowCompleteToSelector`"
  }, {
    heading: "api-changes-15",
    content: "`shapeCompleteToSelector`"
  }, {
    heading: "api-changes-15",
    content: "`DisplayerCallbacks` adds `onBackgroundError`"
  }, {
    heading: "api-changes-15",
    content: "`screenshotToCanvasAsync`"
  }, {
    heading: "api-changes-15",
    content: "`Room` adds the `useNativeClipboard` property"
  }, {
    heading: "api-changes-15",
    content: "`RoomCallbacks` adds `onObjectsLimit`"
  }, {
    heading: "api-changes-15",
    content: "`clearUndoHistory`"
  }, {
    heading: "api-changes-15",
    content: "`joinRoom` adds the `optimizeOptions` parameter"
  }, {
    heading: "api-changes-15",
    content: "`OptimizeOptions`"
  }, {
    heading: "api-changes-15",
    content: "`LowTaskAnimationInterval`"
  }, {
    heading: "api-changes-15",
    content: "`OriginCoordType`"
  }, {
    heading: "api-changes-15",
    content: "`ImageInformation` adds the `crossOrigin` property"
  }, {
    heading: "api-changes-15",
    content: "`room` adds the `syncMode` property"
  }, {
    heading: "api-changes-15",
    content: "v2.16.43 was released on January 19, 2024."
  }, {
    heading: "compatibility-changes-7",
    content: "This version deprecates the existing London data center (`gb-lon`) in the Whiteboard Data Center and introduces a new data center in Frankfurt, Europe (`eu`), whose service covers Europe. If you have set `gb-lon` in the previous version, please switch to` eu` after upgrading to this version and enable this data center in Agora Console."
  }, {
    heading: "fixed-issues-19",
    content: "This version fixed the issue on the Windows platform when using the Whiteboard Web App where the `shift` key was incorrectly detected, causing the pencil tool to switch to drawing straight lines and unable to revert back."
  }, {
    heading: "fixed-issues-19",
    content: "v2.16.37 was released on December 2, 2022."
  }, {
    heading: "new-features-26",
    content: "**1. Whiteboard tool updates**"
  }, {
    heading: "new-features-26",
    content: "This release adds new features for the following whiteboard tools:"
  }, {
    heading: "new-features-26",
    content: "Ellipse: Press the `Alt` or `option` button to draw a circle with the cursor as the center."
  }, {
    heading: "new-features-26",
    content: "Pencil:"
  }, {
    heading: "new-features-26",
    content: "Draw straight lines: The user can press `shift` to draw a straight line."
  }, {
    heading: "new-features-26",
    content: "Draw dotted lines: Add `dottedLine: true` in `room.memberState` to enable this feature."
  }, {
    heading: "new-features-26",
    content: "Writing performance: Adds support for adjusting the balance between the performance and the quality of the pencil\ntool by modifying the `NewPencilWritingQuality` enum."
  }, {
    heading: "new-features-26",
    content: "Text: Adds support for directly selecting and editing whiteboard text by adding `textCanSelectText: true` in `room.memberState`."
  }, {
    heading: "new-features-26",
    content: "In addition, this release adds a pencil eraser tool to erase any part of a pencil stroke."
  }, {
    heading: "new-features-26",
    content: "**2. Screenshot to canvas**"
  }, {
    heading: "new-features-26",
    content: "This release adds the `screenshotToCanvas` method to take a screenshot and write it to canvas."
  }, {
    heading: "fixed-issues-20",
    content: "This release fixes the following issues:"
  }, {
    heading: "fixed-issues-20",
    content: "The recall and redo function sometimes got reset after the user switched pages or reconnected."
  }, {
    heading: "fixed-issues-20",
    content: "Some fields in `room.setMemberState()` could not be saved locally."
  }, {
    heading: "fixed-issues-20",
    content: "The `floatBar` did not work properly on some touch devices."
  }, {
    heading: "api-changes-16",
    content: "**Added**"
  }, {
    heading: "api-changes-16",
    content: "New properties in the `MemberState` class: `dottedLine` and `textCanSelectText`"
  }, {
    heading: "api-changes-16",
    content: "`NewPencilWritingQuality`"
  }, {
    heading: "api-changes-16",
    content: "`screenshotToCanvas`"
  }, {
    heading: "api-changes-16",
    content: "New value in the `ApplianceNames` enum: `pencilEraser`"
  }, {
    heading: "api-changes-16",
    content: "v2.16.24 was released on September 13, 2022."
  }, {
    heading: "new-features-27",
    content: "**1. Text editing**"
  }, {
    heading: "new-features-27",
    content: "To support custom text editing options, this release adds the following APIs."
  }, {
    heading: "new-features-27",
    content: "`insertText`: Inserts text at a specified position."
  }, {
    heading: "new-features-27",
    content: "`updateText`: Modifies the specified text."
  }, {
    heading: "new-features-27",
    content: "`updateSelectedText`: Modifies the font style of the currently selected text, including font size, color, bold style, and italic style."
  }, {
    heading: "new-features-27",
    content: "You can use these APIs to customize the text input box and editing toolbar."
  }, {
    heading: "new-features-27",
    content: "This release also adds the `textColor`, `bold`, `italic`, `underline`, and `lineThrough` properties to `MemberState` to provide richer text editing options. When you use the `text` tool provided by the Whiteboard SDK but want to customize the text editing toolbar, you can set the `floatBar` property in `JoinRoomParams` as `false` and edit the text using the new properties in `MemberState`."
  }, {
    heading: "new-features-27",
    content: "This release deletes the `updateTextFontSize` method. Instead, you can use `updateSelectedText` or `textSize` in `MemberState`."
  }, {
    heading: "new-features-27",
    content: "**2. Image rotation**"
  }, {
    heading: "new-features-27",
    content: "This release adds the `disableRotation` property to `WhiteWebSdkConfiguration` to enable or disable image rotation. The SDK enables image rotation by default, which allows users to rotate the selected image by any angle. If you want to disable the rotation, you can set `disableRotation(true)`."
  }, {
    heading: "new-features-27",
    content: "**3. Tween animation**"
  }, {
    heading: "new-features-27",
    content: "This release adds the tween animation feature for the `pencil` tool. When a user draws or writes with the pencil, the SDK automatically inserts frames between keyframes so that to remote users see a smoother drawing process, but this feature increases latency."
  }, {
    heading: "new-features-27",
    content: "This release also adds the `disableCurveAnimes` property to `WhiteWebSdkConfiguration` for enabling or disabling the tween animation feature. The tween animation feature is enabled in the SDK by default. To disable it, you can set `disableCurveAnimes(true)`."
  }, {
    heading: "new-features-27",
    content: "Tween animations take effect only when `disableNewPencil` is set as `false`."
  }, {
    heading: "new-features-27",
    content: "**4. Disabling the stroke effect**"
  }, {
    heading: "new-features-27",
    content: "This release adds the `disableNewPencilStroke` property to `WhiteWebSdkConfiguration` to enable or disable the stroke effect of the pencil. The default value of `disableNewPencilStroke` is `true`, and the SDK enables the stroke effect immediately when you set `disableNewPencil(false)` to enable the new pencil. To disable the stroke effect after setting `disableNewPencil(false)`, you can call `disableNewPencilStroke(true)`."
  }, {
    heading: "new-features-27",
    content: "The stroke effect takes effect only when `disableNewPencil` is set as `false`."
  }, {
    heading: "new-features-27",
    content: "**5. Getting the scene information**"
  }, {
    heading: "new-features-27",
    content: "This release adds the `getScene` method to the `Displayer` class, which supports using the scene path to get the information about a specified scene."
  }, {
    heading: "new-features-27",
    content: "**6. Scene callbacks**"
  }, {
    heading: "new-features-27",
    content: "This release adds the `createScenesCallback` method for creating a listener object for a scene directory. After the listener object is successfully created, when the scenes and subdirectories in the specified scene directory change, the SDK triggers the callbacks you have registered in `ScenesCallbacks` to report the scene events."
  }, {
    heading: "new-features-27",
    content: "**7. Reporting exceptions that occur when playing the media file in a dynamic PPT slide**"
  }, {
    heading: "new-features-27",
    content: "This release adds the `onPPTMediaPlayError` callback to report exceptions that occur during the playing of the media file in a dynamic PPT slide."
  }, {
    heading: "improvements-18",
    content: "This release provides the following improvements:"
  }, {
    heading: "improvements-18",
    content: "Optimizes the writing performance on Android browsers."
  }, {
    heading: "improvements-18",
    content: "Optimizes the reconnecting mechanism in weak network environment to reduce unnecessary reconnections."
  }, {
    heading: "fixed-issues-21",
    content: "This release fixed the following issues:"
  }, {
    heading: "fixed-issues-21",
    content: "Occasionally, the contents on the whiteboard appeared shifted and overshadowed after users zoomed or moved their view."
  }, {
    heading: "fixed-issues-21",
    content: "Occasionally, users could not switch the pages of a dynamic PPT slide after an SDK reconnection."
  }, {
    heading: "fixed-issues-21",
    content: "The contents on the whiteboard occasionally were not fully displayed when users joined a whiteboard room that already had."
  }, {
    heading: "fixed-issues-21",
    content: "A memory leak sometimes occurred after an SDK reconnection."
  }, {
    heading: "fixed-issues-21",
    content: "An error sometimes occurred when calling `setWritable` repeatedly."
  }, {
    heading: "fixed-issues-21",
    content: "Rendering exceptions and errors occurred when using the SDK on an early version of React."
  }, {
    heading: "fixed-issues-21",
    content: "The virtual keyboard did not pop up when clicking `text` on iOS browsers."
  }, {
    heading: "fixed-issues-21",
    content: "When a user switched to read-only mode, then switched back to read-write mode and wrote, remote users saw that user's cursor as fixed."
  }, {
    heading: "api-changes-17",
    content: "**Added**"
  }, {
    heading: "api-changes-17",
    content: "`insertText`"
  }, {
    heading: "api-changes-17",
    content: "`updateText`"
  }, {
    heading: "api-changes-17",
    content: "`updateSelectedText`"
  }, {
    heading: "api-changes-17",
    content: "`getScene`"
  }, {
    heading: "api-changes-17",
    content: "`createScenesCallback`"
  }, {
    heading: "api-changes-17",
    content: "`onPPTMediaPlayError`"
  }, {
    heading: "api-changes-17",
    content: "The following properties in `MemberState`:"
  }, {
    heading: "api-changes-17",
    content: "`textColor`"
  }, {
    heading: "api-changes-17",
    content: "`bold`"
  }, {
    heading: "api-changes-17",
    content: "`italic`"
  }, {
    heading: "api-changes-17",
    content: "`underline`"
  }, {
    heading: "api-changes-17",
    content: "`lineThrough `"
  }, {
    heading: "api-changes-17",
    content: "The following properties in `WhiteWebSdkConfiguration`:"
  }, {
    heading: "api-changes-17",
    content: "`disableRotation`"
  }, {
    heading: "api-changes-17",
    content: "`disableCurveAnimes`"
  }, {
    heading: "api-changes-17",
    content: "`disableNewPencilStroke`"
  }, {
    heading: "api-changes-17",
    content: "**Deleted**"
  }, {
    heading: "api-changes-17",
    content: "`updateTextFontSize`"
  }, {
    heading: "api-changes-17",
    content: "`CustomInput`"
  }, {
    heading: "api-changes-17",
    content: "v2.15.16 was released on January 21, 2022."
  }, {
    heading: "improvements-19",
    content: "This release provides the following improvements:"
  }, {
    heading: "improvements-19",
    content: "Optimizes the logic of `disconnect` and `setWritable` to ensure that the SDK returns a `Promise` object only when all requests sent before the `disconnect()` or `setWritable(false)` method call are executed."
  }, {
    heading: "improvements-19",
    content: "Optimizes the UI of the text editing floating bar (`floatBar`), and saves the text format set by users on the floating bar."
  }, {
    heading: "fixed-issues-22",
    content: "This release fixed the following issues:"
  }, {
    heading: "fixed-issues-22",
    content: "The error code returned when joining a room failed was inaccurate."
  }, {
    heading: "fixed-issues-22",
    content: "After rejoining a room, `room.state.memberState` returned the initial state of the room, rather than the current state."
  }, {
    heading: "fixed-issues-22",
    content: "The console reported an error after a successful reconnection."
  }, {
    heading: "fixed-issues-22",
    content: "`room.state.memberState` occasionally returned `undefined`."
  }, {
    heading: "fixed-issues-22",
    content: "The button on the text editing floating bar (`floatBar`) sometimes did not work or disappeared."
  }, {
    heading: "fixed-issues-22",
    content: "The whiteboard room went blank and tried a reconnection."
  }, {
    heading: "fixed-issues-22",
    content: "The user received the event notification multiple times after calling `dispatchMagixEvent` to send an event."
  }, {
    heading: "fixed-issues-22",
    content: "File conversion failed because the background fill property was not set in the source PPT file."
  }, {
    heading: "fixed-issues-22",
    content: "The `canvas` rendering engine occasionally crashed."
  }, {
    heading: "fixed-issues-22",
    content: "The CPU usage of the `canvas` rendering was occasionally high."
  }, {
    heading: "fixed-issues-22",
    content: "On some iOS or Android devices, grids occasionally appeared on the whiteboard."
  }, {
    heading: "fixed-issues-22",
    content: "v2.15.1 was released on November 16, 2021, which fixed the following issues with displaying dynamic PPT files in the whiteboard:"
  }, {
    heading: "fixed-issues-22",
    content: "When there are bugs with the animation effects in a slide master, slides based on that slide master could not be switched."
  }, {
    heading: "fixed-issues-22",
    content: "Some clickable elements did not take effect when clicked."
  }, {
    heading: "fixed-issues-22",
    content: "v2.15.2 was released on November 19, 2021."
  }, {
    heading: "new-features-28",
    content: "**1. Disables/Enables the frequency limit for writing synchronization**"
  }, {
    heading: "new-features-28",
    content: "This release adds the `disablePencilWrittingLimitFrequency` property in `JoinRoomParams`, for disabling or enabling the frequency limit for synchronizing the writing input while using the `pencil` tool."
  }, {
    heading: "new-features-28",
    content: "**2.** **Options for setting a custom event listener**"
  }, {
    heading: "new-features-28",
    content: "This release adds the `options` parameter in `addMagixEventListener` as well as the `MagixEventListenerOptions` type, for setting the following options for a custom event listener:"
  }, {
    heading: "new-features-28",
    content: "`fireInterval`: The interval (ms) of the SDK triggering custom event callbacks."
  }, {
    heading: "new-features-28",
    content: "`fireSelfEventAfterCommit`: Whether to send event callbacks after the Agora server acknowledges the `dispatchMagixEvent` method call is successful."
  }, {
    heading: "fixed-issues-23",
    content: "This release fixed the rendering crashes after initializing the room or adjusting the order of components in the scene under certain circumstances."
  }, {
    heading: "api-changes-18",
    content: "**Added**"
  }, {
    heading: "api-changes-18",
    content: "The `disablePencilWrittingLimitFrequency` property in `JoinRoomParams`"
  }, {
    heading: "api-changes-18",
    content: "The `options` parameter in `addMagixEventListener`"
  }, {
    heading: "api-changes-18",
    content: "`MagixEventListenerOptions`"
  }, {
    heading: "api-changes-18",
    content: "v2.15.0 was released on November 16, 2021."
  }, {
    heading: "compatibility-changes-8",
    content: "To help you manage users in a room, this release adds the `uid` property in `JoinRoomParams`, for setting the unique identifier of a user."
  }, {
    heading: "compatibility-changes-8",
    content: "If you upgrade the SDK to v2.15.0 or later, to avoid affecting your service, ensure that you pass in a string `uid` in `JoinRoomParams` when calling `joinRoom`. The `uid` of each user cannot be longer than 1024 bytes and must be unique in the same room. For more information, see Join a Whiteboard Room."
  }, {
    heading: "new-features-29",
    content: "**1. Disables/Enables the frequency limit for sending custom events**"
  }, {
    heading: "new-features-29",
    content: "This release adds the `disableMagixEventDispatchLimit` property in `JoinRoomParams`, for disabling or enabling the frequency limit for sending custom events."
  }, {
    heading: "new-features-29",
    content: "**2. File conversion optimizations**"
  }, {
    heading: "new-features-29",
    content: "This release adds support for converting and displaying the following PowerPoint (PPT) features:"
  }, {
    heading: "new-features-29",
    content: "Action buttons"
  }, {
    heading: "new-features-29",
    content: "Slide masters added with animation effects."
  }, {
    heading: "improvements-20",
    content: "This release provides the following improvements:"
  }, {
    heading: "improvements-20",
    content: "The writing experience is optimized further."
  }, {
    heading: "improvements-20",
    content: "To improve the user experience, the SDK sets `uniformScale` in `ImageInformation` as `true` by default when the `insertImage` method is called. This ensures the image is scaled based on its original aspect ratio when a user adjusts its size. If you do not want the image to be scaled proportionately, you can set `uniformScale` as `false`."
  }, {
    heading: "fixed-issues-24",
    content: "This release has fixed the following issues:"
  }, {
    heading: "fixed-issues-24",
    content: "The room state became incorrect when you called `setWritable(false)` at the time of joining the room."
  }, {
    heading: "fixed-issues-24",
    content: "Multiple copies could appear when you pasted copied content."
  }, {
    heading: "fixed-issues-24",
    content: "Each property sometimes appeared twice when you read `room.state.roomMembers`."
  }, {
    heading: "fixed-issues-24",
    content: "The following issues with displaying dynamic PPT files in the whiteboard were fixed:"
  }, {
    heading: "fixed-issues-24",
    content: "The images were occasionally displaced."
  }, {
    heading: "fixed-issues-24",
    content: "Failure to read certain styles caused the screen to go blank."
  }, {
    heading: "fixed-issues-24",
    content: "The rotation angle and color were incorrect for some text."
  }, {
    heading: "fixed-issues-24",
    content: "Occasionally, elements with an animation effect were not displayed"
  }, {
    heading: "fixed-issues-24",
    content: "The animation of some text was displayed incorrectly."
  }, {
    heading: "api-changes-19",
    content: "**Added**"
  }, {
    heading: "api-changes-19",
    content: "The following properties in `JoinRoomParams`:"
  }, {
    heading: "api-changes-19",
    content: "`uid`"
  }, {
    heading: "api-changes-19",
    content: "`disableMagixEventDispatchLimit`"
  }, {
    heading: "api-changes-19",
    content: "**Modified**"
  }, {
    heading: "api-changes-19",
    content: "`seekToProgressTime`"
  }, {
    heading: "api-changes-19",
    content: "**Deleted**"
  }, {
    heading: "api-changes-19",
    content: "The `pencilOptions` property in `MemberState`"
  }, {
    heading: "api-changes-19",
    content: "The `broadcasterInformation` property in `BroadcastState`"
  }, {
    heading: "api-changes-19",
    content: "The `zoomScale` property in `RoomState`"
  }, {
    heading: "api-changes-19",
    content: "The `scheduleTime` property in `Player`"
  }, {
    heading: "api-changes-19",
    content: "The `seekToScheduleTime` method in `Player`"
  }, {
    heading: "api-changes-19",
    content: "v2.14.5 was released on November 10, 2021."
  }, {
    heading: "compatibility-changes-9",
    content: "As of this release, `white-web-sdk` no longer supports the following versions of mobile browsers:"
  }, {
    heading: "compatibility-changes-9",
    content: "Browsers for Android 4.4 and earlier."
  }, {
    heading: "compatibility-changes-9",
    content: "Browsers for iOS 9 and earlier."
  }, {
    heading: "new-features-30",
    content: "**1. Importing and exporting scenes**"
  }, {
    heading: "new-features-30",
    content: "This release adds the following methods for importing and exporting scenes:"
  }, {
    heading: "new-features-30",
    content: "`exportScene`: Exports all the contents of a specified scene, including the image or web page displayed on the scene, and saves them as a binary file (Blob object)."
  }, {
    heading: "new-features-30",
    content: "`importScene`: Imports the contents of a scene exported by using `exportScene` into a specified scene directory."
  }, {
    heading: "new-features-30",
    content: "**2. Scene path type**"
  }, {
    heading: "new-features-30",
    content: "This release adds the `conflict` enumerator in `ScenePathType`, which indicates that a path cannot exist because it contains the path of an existing scene."
  }, {
    heading: "new-features-30",
    content: "**3. Locking images**"
  }, {
    heading: "new-features-30",
    content: "To support locking or unlocking selected images, this release adds the `lockImages` method. When an image is locked, the user cannot move, zoom, or delete the image."
  }, {
    heading: "new-features-30",
    content: "**4. Adjusting font size**"
  }, {
    heading: "new-features-30",
    content: "This release adds the `updateTextFontSize` method for adjusting the size of the text entered with the `text` tool."
  }, {
    heading: "new-features-30",
    content: "**5. Adjusting component layers**"
  }, {
    heading: "new-features-30",
    content: "To support adjusting the layers of components, this release adds the following methods:"
  }, {
    heading: "new-features-30",
    content: "`moveSelectedComponentsToTop`: Moves the selected components to the top layer."
  }, {
    heading: "new-features-30",
    content: "`moveSelectedComponentsToBottom`: Moves the selected components to the bottom layer."
  }, {
    heading: "improvements-21",
    content: "This release provides the following improvements:"
  }, {
    heading: "improvements-21",
    content: "Adds support for sending and receiving custom events with the `ArrayBuffer` payload between users with the Web SDK."
  }, {
    heading: "improvements-21",
    content: "Further optimizes the writing performance."
  }, {
    heading: "improvements-21",
    content: "Optimizes the shape of handwriting."
  }, {
    heading: "improvements-21",
    content: "Improves the accuracy of the `onPhaseChanged` callback."
  }, {
    heading: "improvements-21",
    content: "On the PC side, enables the eraser to delete only the topmost of multiple selected components."
  }, {
    heading: "improvements-21",
    content: "Hides elements that should not be displayed in a slide master using the file-conversion function."
  }, {
    heading: "fixed-issues-25",
    content: "This release has fixed the following issues:"
  }, {
    heading: "fixed-issues-25",
    content: "The `customInput` method call did not take effect."
  }, {
    heading: "fixed-issues-25",
    content: "After switching to the hand tool, users could not switch back to the cursor."
  }, {
    heading: "fixed-issues-25",
    content: "Occasionally, the handwriting disappeared suddenly during writing."
  }, {
    heading: "fixed-issues-25",
    content: "Occasionally, the handwriting had unnatural teardrop-like strokes during writing."
  }, {
    heading: "fixed-issues-25",
    content: "When the user edited text after manually scaling the text box, the text box and text reverted to the original size."
  }, {
    heading: "fixed-issues-25",
    content: "When modifying `InvisiblePlugin`, the new `attributes` could not be the same as the original `attributes`."
  }, {
    heading: "fixed-issues-25",
    content: "The view became incorrect after the window size changed on some browsers and devices."
  }, {
    heading: "fixed-issues-25",
    content: "When the eraser was moved quickly, the eraser icon was not enlarged and the fast deleting function did not work."
  }, {
    heading: "fixed-issues-25",
    content: "Occasionally, multiple audio files in dynamic PPT slides played simultaneously."
  }, {
    heading: "fixed-issues-25",
    content: "Animations were displayed incorrectly after a dynamic PPT slide returned to the previous page."
  }, {
    heading: "fixed-issues-25",
    content: "Occasionally, a text box with an animation effect was flipped in mirror mode."
  }, {
    heading: "api-changes-20",
    content: "**Added**"
  }, {
    heading: "api-changes-20",
    content: "`exportScene`"
  }, {
    heading: "api-changes-20",
    content: "`importScene`"
  }, {
    heading: "api-changes-20",
    content: "`conflict` in  `ScenePathType`"
  }, {
    heading: "api-changes-20",
    content: "`lockImages`"
  }, {
    heading: "api-changes-20",
    content: "`updateTextFontSize`"
  }, {
    heading: "api-changes-20",
    content: "`moveSelectedComponentsToTop`"
  }, {
    heading: "api-changes-20",
    content: "`moveSelectedComponentsToBottom`"
  }, {
    heading: "api-changes-20",
    content: "v2.13.17 was released on August 20, 2021."
  }, {
    heading: "new-features-31",
    content: "To improve the dynamic file conversion function, this release adds support for converting and displaying the following PowerPoint (PPT) features:"
  }, {
    heading: "new-features-31",
    content: "Add animations to text per paragraph."
  }, {
    heading: "new-features-31",
    content: "Animate text by word or by letter."
  }, {
    heading: "new-features-31",
    content: "All preset table styles."
  }, {
    heading: "new-features-31",
    content: "Fonts smaller than 9 pt (12 px)."
  }, {
    heading: "improvements-22",
    content: "This release has the following improvements:"
  }, {
    heading: "improvements-22",
    content: "Disables the delete button on the floating bar when the user is editing text on the whiteboard."
  }, {
    heading: "improvements-22",
    content: "Disables the floating bar from moving when the user clicks the button on it."
  }, {
    heading: "fixed-issues-26",
    content: "This release fixed the following issues:"
  }, {
    heading: "fixed-issues-26",
    content: "Occasionally, the room was stuck in the connecting state when the user joined a room."
  }, {
    heading: "fixed-issues-26",
    content: "The cursor disappeared for some users after the SDK reconnected."
  }, {
    heading: "fixed-issues-26",
    content: "The status of some plugins was incorrect after the SDK reconnected."
  }, {
    heading: "fixed-issues-26",
    content: "The hand tool was not restricted by the set `CameraBound`."
  }, {
    heading: "fixed-issues-26",
    content: "On some high-resolution devices, when the user was in the `follower` view mode, the center point of the view was slightly shifted."
  }, {
    heading: "fixed-issues-26",
    content: "The following issues with displaying dynamic PPT files in the whiteboard were fixed:"
  }, {
    heading: "fixed-issues-26",
    content: "Paragraph spacing was displayed incorrectly."
  }, {
    heading: "fixed-issues-26",
    content: "Failed to split text into columns."
  }, {
    heading: "fixed-issues-26",
    content: "The slide background fill of shapes was displayed incorrectly."
  }, {
    heading: "fixed-issues-26",
    content: "Hanging indentation was displayed incorrectly."
  }, {
    heading: "fixed-issues-26",
    content: "The slide was displayed incorrectly when the user called `pptPreviousStep` to roll back a slide."
  }, {
    heading: "fixed-issues-26",
    content: "The numbering of text displayed incorrectly."
  }, {
    heading: "fixed-issues-26",
    content: "Some equations were displayed incompletely after conversion."
  }, {
    heading: "fixed-issues-26",
    content: "Some lines broke incorrectly."
  }, {
    heading: "fixed-issues-26",
    content: "Text written from right to left (such as Arabic) was displayed incorrectly."
  }, {
    heading: "fixed-issues-26",
    content: "v2.13.11 was released on July 23 2021."
  }, {
    heading: "new-features-32",
    content: "To improve the dynamic file conversion function, this release adds support for converting and displaying the following PowerPoint (PPT) features:"
  }, {
    heading: "new-features-32",
    content: "Animation effect > Reverse Path Direction"
  }, {
    heading: "new-features-32",
    content: "Vertical Text Box"
  }, {
    heading: "new-features-32",
    content: "Microsoft Equation Editor 3.0"
  }, {
    heading: "new-features-32",
    content: "Hide background graphic in a slide master"
  }, {
    heading: "new-features-32",
    content: "Change the color of pictures"
  }, {
    heading: "new-features-32",
    content: "The following picture effects are now supported:"
  }, {
    heading: "new-features-32",
    content: "Metal Frame"
  }, {
    heading: "new-features-32",
    content: "Soft Edge Rectangle"
  }, {
    heading: "new-features-32",
    content: "Double Frame, Black"
  }, {
    heading: "new-features-32",
    content: "Thick Matte, Black"
  }, {
    heading: "new-features-32",
    content: "Simple Frame, Black"
  }, {
    heading: "new-features-32",
    content: "Moderate Frame, Black"
  }, {
    heading: "new-features-32",
    content: "Center Shadow Rectangle"
  }, {
    heading: "new-features-32",
    content: "Soft Edge Oval"
  }, {
    heading: "new-features-32",
    content: "Metal Rounded Rectangle"
  }, {
    heading: "new-features-32",
    content: "Metal Oval"
  }, {
    heading: "improvements-23",
    content: "This release has the following improvements:"
  }, {
    heading: "improvements-23",
    content: "Reduces CPU usage during the playback of animations in dynamic PPT files."
  }, {
    heading: "improvements-23",
    content: "Improves the smoothness of writing and drawing on the whiteboard."
  }, {
    heading: "improvements-23",
    content: "Optimizes the timestamp synchronization algorithm to reduce time differences."
  }, {
    heading: "improvements-23",
    content: "Supports printing logs on scene changes."
  }, {
    heading: "improvements-23",
    content: "Adds the `previewURL` parameter in `PptDescription`, which supports displaying dynamic PPT previews in the whiteboard."
  }, {
    heading: "fixed-issues-27",
    content: "This release fixed the following issues:"
  }, {
    heading: "fixed-issues-27",
    content: "The contents on the whiteboard occasionally became unclear when the user adjusted the view."
  }, {
    heading: "fixed-issues-27",
    content: "Problems occurred with the SDK code after it was mangled by using uglify-js."
  }, {
    heading: "fixed-issues-27",
    content: "Users of the Android or iOS SDK occasionally failed to draw the first line after joining the room."
  }, {
    heading: "fixed-issues-27",
    content: "The following issues with displaying dynamic PPT files in the whiteboard were fixed:"
  }, {
    heading: "fixed-issues-27",
    content: "Animations did not play in the set order."
  }, {
    heading: "fixed-issues-27",
    content: "Animations did not disappear when playback finished."
  }, {
    heading: "fixed-issues-27",
    content: "Table height was displayed incorrectly."
  }, {
    heading: "fixed-issues-27",
    content: "Pictures inserted in content placeholders failed to display."
  }, {
    heading: "fixed-issues-27",
    content: "Some shapes were rendered incorrectly."
  }, {
    heading: "fixed-issues-27",
    content: "The text was incorrectly indented."
  }, {
    heading: "fixed-issues-27",
    content: "Animation triggers did not work."
  }, {
    heading: "fixed-issues-27",
    content: "Picture transparency was incorrect."
  }, {
    heading: "fixed-issues-27",
    content: "v2.13.4 was released on June 15, 2021."
  }, {
    heading: "fixed-issues-27",
    content: "This release fixed the issue that calling the `moveCamera` method did not take effect."
  }, {
    heading: "fixed-issues-27",
    content: "v2.13.2 was released on June 10, 2021."
  }, {
    heading: "fixed-issues-27",
    content: "This release fixed the following issues:"
  }, {
    heading: "fixed-issues-27",
    content: "Occasional abnormal behaviors of the `redo` and `undo` methods."
  }, {
    heading: "fixed-issues-27",
    content: "Occasional abnormality with the text box."
  }, {
    heading: "fixed-issues-27",
    content: "v2.12.21 was released on June 4, 2021."
  }, {
    heading: "fixed-issues-27",
    content: "This release fixed the following issues:"
  }, {
    heading: "fixed-issues-27",
    content: "Error messages printed in the browser console."
  }, {
    heading: "fixed-issues-27",
    content: "Arrowheads were displayed disproportionately large in dynamic PPT files."
  }, {
    heading: "fixed-issues-27",
    content: "Frequently switching slides in a dynamic PPT file might cause fonts to display abnormally."
  }, {
    heading: "fixed-issues-27",
    content: "Dynamic PPT files that do not contain a `tablestyle.xml` file could not be parsed."
  }, {
    heading: "fixed-issues-27",
    content: "v2.12.20 was released on May 24, 2021."
  }, {
    heading: "fixed-issues-27",
    content: "This release optimizes the log levels for dynamic PPT files."
  }, {
    heading: "fixed-issues-27",
    content: "v2.12.19 was released on May 20, 2021."
  }, {
    heading: "fixed-issues-27",
    content: "This release fixed the issue that in certain circumstances, the SDK failed to connect to the server and returned the error message `magix connect failed`."
  }, {
    heading: "fixed-issues-27",
    content: "v2.12.18 was released on May 17, 2021."
  }, {
    heading: "fixed-issues-27",
    content: "This release enables server-side typesetting (`useServerWrap`) by default and supports reducing the size of font files for fasterer rendering."
  }, {
    heading: "fixed-issues-27",
    content: "v2.12.17 was released on May 13, 2021."
  }, {
    heading: "fixed-issues-27",
    content: "This release fixed the issue that inaccurate system time on the user's device caused an abnormal delay in a live Interactive Whiteboard room."
  }, {
    heading: "fixed-issues-27",
    content: "v2.12.16 was released on May 11, 2021."
  }, {
    heading: "new-features-33",
    content: "This release adds the following features:"
  }, {
    heading: "new-features-33",
    content: "Setting transparency for images in dynamic PPT files."
  }, {
    heading: "new-features-33",
    content: "Displaying SmartArt as images in dynamic PPT files (SmartArt animation is not supported)."
  }, {
    heading: "new-features-33",
    content: "Displaying charts and tables in dynamic PPT files."
  }, {
    heading: "issues-fixed-2",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-2",
    content: "The `selectable` field did not take effect when calling `room.insertPlugin`."
  }, {
    heading: "issues-fixed-2",
    content: "The rendering process might fail if certain elements on dynamic PPT slides have no content."
  }, {
    heading: "issues-fixed-2",
    content: "The Drawing tool might fail to work on dynamic PPT slides."
  }, {
    heading: "issues-fixed-2",
    content: "v2.12.15 was released on April 28, 2021."
  }, {
    heading: "new-features-34",
    content: "This release adds `changeToClick` and `changeToText`, which set the shortcut to quickly switch to the clicker tool (`clicker`) and text tool (`text`), respectively."
  }, {
    heading: "improvements-24",
    content: "This release improves the loading speed of dynamic PPT files."
  }, {
    heading: "improvements-24",
    content: "v2.12.14 was released on April 22, 2021."
  }, {
    heading: "new-features-35",
    content: "This release adds audio and video trimming."
  }, {
    heading: "improvements-25",
    content: "This release improves the logic of preloading dynamic PPT files."
  }, {
    heading: "issues-fixed-3",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-3",
    content: "The audio or video progress bar on the PPT slide was not displayed in the preview."
  }, {
    heading: "issues-fixed-3",
    content: "`room.state.cameraState` was not updated in a timely manner in some cases."
  }, {
    heading: "issues-fixed-3",
    content: "v2.12.13 was released on April 21, 2021."
  }, {
    heading: "issues-fixed-4",
    content: "This release fixed the issue that a delay might occur when the text box entered or exited editing mode in some cases."
  }, {
    heading: "issues-fixed-4",
    content: "v2.12.12 was released on April 16, 2021."
  }, {
    heading: "improvements-26",
    content: "This release has the following improvements:"
  }, {
    heading: "improvements-26",
    content: "Improves the compatibility of colors in dynamic PPT files."
  }, {
    heading: "improvements-26",
    content: "Improves justified alignment and left-and-right alignment in dynamic PPT files."
  }, {
    heading: "improvements-26",
    content: "Improves the display of indentation in dynamic PPT files."
  }, {
    heading: "improvements-26",
    content: "v2.12.11 was released on April 15, 2021."
  }, {
    heading: "new-features-36",
    content: "This release adds the following features:"
  }, {
    heading: "new-features-36",
    content: "Adds the `syncBlockTimstamp` method to set the delay time for sending the whiteboard contents. This method is used to ensure that the whiteboard content and the audio and video are sent to the remote users at the same time."
  }, {
    heading: "new-features-36",
    content: "Adds the `customInput` interface for setting custom inputs."
  }, {
    heading: "improvements-27",
    content: "This release improves the display performance of `canvas` mode."
  }, {
    heading: "issues-fixed-5",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-5",
    content: "`InvisiblePlugin` had abnormal behavior in some cases."
  }, {
    heading: "issues-fixed-5",
    content: "The text could be misaligned after scaling the view up or down."
  }, {
    heading: "issues-fixed-5",
    content: "v2.12.9 was released on April 9, 2021."
  }, {
    heading: "issues-fixed-5",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-5",
    content: "A cursor that had disappeared from the whiteboard appeared again in some cases."
  }, {
    heading: "issues-fixed-5",
    content: "The `canvas` rendering engine rendered images inaccurately in certain older versions of browsers."
  }, {
    heading: "issues-fixed-5",
    content: "v2.12.8 was released on March 30, 2021."
  }, {
    heading: "improvements-28",
    content: "This version improves the logic of reporting logs."
  }, {
    heading: "issues-fixed-6",
    content: "This release fixed the problem that setting follower mode did not take effect immediately."
  }, {
    heading: "issues-fixed-6",
    content: "v2.12.6 was released on March 29, 2021. This release fixed the issue that some components could disappear unexpectedly."
  }, {
    heading: "issues-fixed-6",
    content: "v2.12.5 was released on March 20, 2021."
  }, {
    heading: "new-features-37",
    content: "This release adds the stroke effect to better display handwriting. When constructing `joinRoomParams`, you can set `disableNewPencil` to `false`/`true` to enable/disable the stroke effect."
  }, {
    heading: "new-features-37",
    content: "To enable the stroke effect properly, ensure that every user in the room is using one of the following SDKs:"
  }, {
    heading: "new-features-37",
    content: "Android SDK v2.12.3 or later"
  }, {
    heading: "new-features-37",
    content: "iOS SDK v2.12.3 or later"
  }, {
    heading: "new-features-37",
    content: "Web SDK v2.12.5 or later"
  }, {
    heading: "improvements-29",
    content: "This release improves the Text tool."
  }, {
    heading: "issues-fixed-7",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-7",
    content: "When presenting dynamic PPT files in certain situations, the screen turned completely white."
  }, {
    heading: "issues-fixed-7",
    content: "`Symbol` objects displayed abnormal actions when using the whiteboard on browsers that support ES6."
  }, {
    heading: "issues-fixed-7",
    content: "Pen tool marks displayed abnormally."
  }, {
    heading: "issues-fixed-7",
    content: "v2.12.2 was released on March 4, 2021. This release improves network connection."
  }, {
    heading: "issues-fixed-7",
    content: "v2.12.1 was released on March 4, 2021. This release fixed the issue that `onPPTLoadProgress` reported inaccurate progress of file-conversion tasks."
  }, {
    heading: "issues-fixed-7",
    content: "v2.12.0 was released on February 26, 2021."
  }, {
    heading: "new-features-38",
    content: "This release adds the following features:"
  }, {
    heading: "new-features-38",
    content: "To provide more drawing options, `ShapeType` adds the following enumeration values:"
  }, {
    heading: "new-features-38",
    content: "`triangle`: Inserts a triangle"
  }, {
    heading: "new-features-38",
    content: "`rhombus`: Inserts a diamond shape"
  }, {
    heading: "new-features-38",
    content: "`pentagram`: Inserts a pentagram"
  }, {
    heading: "new-features-38",
    content: "`speechBalloon`: Inserts a speech balloon"
  }, {
    heading: "new-features-38",
    content: "The floating bar adds a **Layer** button to send an image to the front or back of the layer stack."
  }, {
    heading: "new-features-38",
    content: "The floating bar adds a **Replicate** button."
  }, {
    heading: "new-features-38",
    content: "`disableOthersSelectingBox` is added to `Displayer` and `JoinRoomParams` to set whether to hide or show other users' selection fields."
  }, {
    heading: "new-features-38",
    content: "`uniformScale` is added to `ImageInformation` to resize images proportionately."
  }, {
    heading: "new-features-38",
    content: "The server-side engine can be used for typesetting."
  }, {
    heading: "improvements-30",
    content: "Improves the loading speed of icons on the floating bar."
  }, {
    heading: "improvements-30",
    content: "Addresses the issue that after using the Text tool to enter text, it automatically switches to the Selection tool."
  }, {
    heading: "issues-fixed-8",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-8",
    content: "Occasionally, the generated dynamic web pages could not be previewed."
  }, {
    heading: "issues-fixed-8",
    content: "The rendering sequence was incorrect for some highlight selectors."
  }, {
    heading: "issues-fixed-8",
    content: "The selectable area around an object could be displayed inaccurately."
  }, {
    heading: "issues-fixed-8",
    content: "When rendering a rectangle, the four corners sometimes switched between being rounded and right-angled."
  }, {
    heading: "issues-fixed-8",
    content: "PPT files could not be displayed because of rendering errors in internal components."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "new-features",
    content: "New features"
  }, {
    id: "api-changes",
    content: "API changes"
  }, {
    id: "new-features-1",
    content: "New features"
  }, {
    id: "api-changes-1",
    content: "API changes"
  }, {
    id: "new-features-2",
    content: "New features"
  }, {
    id: "fixed-issues",
    content: "Fixed issues"
  }, {
    id: "api-changes-2",
    content: "API changes"
  }, {
    id: "compatibility-changes",
    content: "Compatibility changes"
  }, {
    id: "new-features-3",
    content: "New features"
  }, {
    id: "improvements",
    content: "Improvements"
  }, {
    id: "issues-fixed",
    content: "Issues fixed"
  }, {
    id: "api-changes-3",
    content: "API Changes"
  }, {
    id: "new-features-4",
    content: "New features"
  }, {
    id: "improvements-1",
    content: "Improvements"
  }, {
    id: "fixed-issues-1",
    content: "Fixed issues"
  }, {
    id: "api-changes-4",
    content: "API changes"
  }, {
    id: "compatibility-changes-1",
    content: "Compatibility changes"
  }, {
    id: "new-features-5",
    content: "New features"
  }, {
    id: "improvements-2",
    content: "Improvements"
  }, {
    id: "fixed-issues-2",
    content: "Fixed issues"
  }, {
    id: "api-changes-5",
    content: "API changes"
  }, {
    id: "compatibility-changes-2",
    content: "Compatibility changes"
  }, {
    id: "new-features-6",
    content: "New features"
  }, {
    id: "improvements-3",
    content: "Improvements"
  }, {
    id: "fixed-issues-3",
    content: "Fixed issues"
  }, {
    id: "api-changes-6",
    content: "API changes"
  }, {
    id: "compatibility-changes-3",
    content: "Compatibility changes"
  }, {
    id: "improvements-4",
    content: "Improvements"
  }, {
    id: "fixed-issues-4",
    content: "Fixed issues"
  }, {
    id: "new-features-7",
    content: "New features"
  }, {
    id: "improvements-5",
    content: "Improvements"
  }, {
    id: "fixed-issues-5",
    content: "Fixed issues"
  }, {
    id: "new-features-8",
    content: "New features"
  }, {
    id: "improvements-6",
    content: "Improvements"
  }, {
    id: "fixed-issues-6",
    content: "Fixed issues"
  }, {
    id: "new-features-9",
    content: "New features"
  }, {
    id: "improvement",
    content: "Improvement"
  }, {
    id: "new-features-10",
    content: "New features"
  }, {
    id: "fixed-issues-7",
    content: "Fixed issues"
  }, {
    id: "new-features-11",
    content: "New features"
  }, {
    id: "improvements-7",
    content: "Improvements"
  }, {
    id: "issues-fixed-1",
    content: "Issues fixed"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "new-features-12",
    content: "New features"
  }, {
    id: "api-changes-7",
    content: "API changes"
  }, {
    id: "new-features-13",
    content: "New features"
  }, {
    id: "fixed-issues-8",
    content: "Fixed issues"
  }, {
    id: "api-changes-8",
    content: "API changes"
  }, {
    id: "new-features-14",
    content: "New features"
  }, {
    id: "fixed-issues-9",
    content: "Fixed issues"
  }, {
    id: "api-changes-9",
    content: "API changes"
  }, {
    id: "compatibility-changes-4",
    content: "Compatibility changes"
  }, {
    id: "new-features-15",
    content: "New features"
  }, {
    id: "api-changes-10",
    content: "API changes"
  }, {
    id: "new-features-16",
    content: "New features"
  }, {
    id: "improvements-8",
    content: "Improvements"
  }, {
    id: "fixed-issues-10",
    content: "Fixed issues"
  }, {
    id: "api-changes-11",
    content: "API changes"
  }, {
    id: "new-features-17",
    content: "New features"
  }, {
    id: "improvements-9",
    content: "Improvements"
  }, {
    id: "fixed-issues-11",
    content: "Fixed issues"
  }, {
    id: "api-changes-12",
    content: "API changes"
  }, {
    id: "compatibility-changes-5",
    content: "Compatibility changes"
  }, {
    id: "new-features-18",
    content: "New features"
  }, {
    id: "improvements-10",
    content: "Improvements"
  }, {
    id: "fixed-issues-12",
    content: "Fixed issues"
  }, {
    id: "api-changes-13",
    content: "API changes"
  }, {
    id: "compatibility-changes-6",
    content: "Compatibility changes"
  }, {
    id: "improvements-11",
    content: "Improvements"
  }, {
    id: "fixed-issues-13",
    content: "Fixed issues"
  }, {
    id: "new-features-19",
    content: "New features"
  }, {
    id: "improvements-12",
    content: "Improvements"
  }, {
    id: "fixed-issues-14",
    content: "Fixed issues"
  }, {
    id: "new-features-20",
    content: "New features"
  }, {
    id: "improvements-13",
    content: "Improvements"
  }, {
    id: "fixed-issues-15",
    content: "Fixed issues"
  }, {
    id: "new-features-21",
    content: "New features"
  }, {
    id: "improvement-1",
    content: "Improvement"
  }, {
    id: "new-features-22",
    content: "New features"
  }, {
    id: "fixed-issues-16",
    content: "Fixed issues"
  }, {
    id: "new-features-23",
    content: "New features"
  }, {
    id: "improvements-14",
    content: "Improvements"
  }, {
    id: "understand-the-tech-2",
    content: "Understand the tech"
  }, {
    id: "reference-2",
    content: "Reference"
  }, {
    id: "improvements-15",
    content: "Improvements"
  }, {
    id: "new-features-24",
    content: "New features"
  }, {
    id: "improvements-16",
    content: "Improvements"
  }, {
    id: "fixed-issues-17",
    content: "Fixed issues"
  }, {
    id: "api-changes-14",
    content: "API changes"
  }, {
    id: "new-features-25",
    content: "New features"
  }, {
    id: "improvements-17",
    content: "Improvements"
  }, {
    id: "fixed-issues-18",
    content: "Fixed issues"
  }, {
    id: "api-changes-15",
    content: "API changes"
  }, {
    id: "compatibility-changes-7",
    content: "Compatibility changes"
  }, {
    id: "fixed-issues-19",
    content: "Fixed issues"
  }, {
    id: "new-features-26",
    content: "New features"
  }, {
    id: "fixed-issues-20",
    content: "Fixed issues"
  }, {
    id: "api-changes-16",
    content: "API changes"
  }, {
    id: "new-features-27",
    content: "New features"
  }, {
    id: "improvements-18",
    content: "Improvements"
  }, {
    id: "fixed-issues-21",
    content: "Fixed issues"
  }, {
    id: "api-changes-17",
    content: "API changes"
  }, {
    id: "improvements-19",
    content: "Improvements"
  }, {
    id: "fixed-issues-22",
    content: "Fixed issues"
  }, {
    id: "new-features-28",
    content: "New features"
  }, {
    id: "fixed-issues-23",
    content: "Fixed issues"
  }, {
    id: "api-changes-18",
    content: "API changes"
  }, {
    id: "compatibility-changes-8",
    content: "Compatibility changes"
  }, {
    id: "new-features-29",
    content: "New features"
  }, {
    id: "improvements-20",
    content: "Improvements"
  }, {
    id: "fixed-issues-24",
    content: "Fixed issues"
  }, {
    id: "api-changes-19",
    content: "API changes"
  }, {
    id: "compatibility-changes-9",
    content: "Compatibility changes"
  }, {
    id: "new-features-30",
    content: "New features"
  }, {
    id: "improvements-21",
    content: "Improvements"
  }, {
    id: "fixed-issues-25",
    content: "Fixed issues"
  }, {
    id: "api-changes-20",
    content: "API changes"
  }, {
    id: "new-features-31",
    content: "New features"
  }, {
    id: "improvements-22",
    content: "Improvements"
  }, {
    id: "fixed-issues-26",
    content: "Fixed issues"
  }, {
    id: "new-features-32",
    content: "New features"
  }, {
    id: "improvements-23",
    content: "Improvements"
  }, {
    id: "fixed-issues-27",
    content: "Fixed issues"
  }, {
    id: "new-features-33",
    content: "New features"
  }, {
    id: "issues-fixed-2",
    content: "Issues fixed"
  }, {
    id: "new-features-34",
    content: "New features"
  }, {
    id: "improvements-24",
    content: "Improvements"
  }, {
    id: "new-features-35",
    content: "New features"
  }, {
    id: "improvements-25",
    content: "Improvements"
  }, {
    id: "issues-fixed-3",
    content: "Issues fixed"
  }, {
    id: "issues-fixed-4",
    content: "Issues fixed"
  }, {
    id: "improvements-26",
    content: "Improvements"
  }, {
    id: "new-features-36",
    content: "New features"
  }, {
    id: "improvements-27",
    content: "Improvements"
  }, {
    id: "issues-fixed-5",
    content: "Issues fixed"
  }, {
    id: "improvements-28",
    content: "Improvements"
  }, {
    id: "issues-fixed-6",
    content: "Issues fixed"
  }, {
    id: "new-features-37",
    content: "New features"
  }, {
    id: "improvements-29",
    content: "Improvements"
  }, {
    id: "issues-fixed-7",
    content: "Issues fixed"
  }, {
    id: "new-features-38",
    content: "New features"
  }, {
    id: "improvements-30",
    content: "Improvements"
  }, {
    id: "issues-fixed-8",
    content: "Issues fixed"
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
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 4,
  url: "#new-features",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#api-changes",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-1",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#api-changes-1",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-2",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#fixed-issues",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-2",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#compatibility-changes",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#new-features-3",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#api-changes-3",
  title: _jsx(_Fragment, {
    children: "API Changes"
  })
}, {
  depth: 4,
  url: "#new-features-4",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-1",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-1",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-4",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#compatibility-changes-1",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#new-features-5",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-2",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-2",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-5",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#compatibility-changes-2",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#new-features-6",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-3",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-3",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-6",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#compatibility-changes-3",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#improvements-4",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-4",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#new-features-7",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-5",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-5",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#new-features-8",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-6",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-6",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#new-features-9",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvement",
  title: _jsx(_Fragment, {
    children: "Improvement"
  })
}, {
  depth: 4,
  url: "#new-features-10",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#fixed-issues-7",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#new-features-11",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-7",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-1",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-1",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 4,
  url: "#new-features-12",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#api-changes-7",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-13",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#fixed-issues-8",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-8",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-14",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#fixed-issues-9",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-9",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#compatibility-changes-4",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#new-features-15",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#api-changes-10",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-16",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-8",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-10",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-11",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-17",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-9",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-11",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-12",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#compatibility-changes-5",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#new-features-18",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-10",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-12",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-13",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#compatibility-changes-6",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#improvements-11",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-13",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#new-features-19",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-12",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-14",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#new-features-20",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-13",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-15",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#new-features-21",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvement-1",
  title: _jsx(_Fragment, {
    children: "Improvement"
  })
}, {
  depth: 4,
  url: "#new-features-22",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#fixed-issues-16",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#new-features-23",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-14",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-2",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#reference-2",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 4,
  url: "#improvements-15",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#new-features-24",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-16",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-17",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-14",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-25",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-17",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-18",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-15",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#compatibility-changes-7",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#fixed-issues-19",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#new-features-26",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#fixed-issues-20",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-16",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-27",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-18",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-21",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-17",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#improvements-19",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-22",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#new-features-28",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#fixed-issues-23",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-18",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#compatibility-changes-8",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#new-features-29",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-20",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-24",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-19",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#compatibility-changes-9",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#new-features-30",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-21",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-25",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes-20",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-31",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-22",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-26",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#new-features-32",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-23",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-27",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#new-features-33",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#issues-fixed-2",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-features-34",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-24",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#new-features-35",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-25",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-3",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#issues-fixed-4",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#improvements-26",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#new-features-36",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-27",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-5",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#improvements-28",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-6",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-features-37",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-29",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-7",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-features-38",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-30",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-8",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
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
  }, { Accordion, Accordions, CalloutContainer, CalloutDescription, CalloutTitle, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
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
    canonicalPlatform: "web",
    platforms: '["android","ios","web"]',
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
        children: "This page tracks Android release notes for the Whiteboard SDK."
      }), _jsx(_components.h2, {
        id: "reference",
        children: "Reference"
      }), _jsxs(CalloutContainer, {
        type: "info",
        children: [_jsx(CalloutTitle, {
          children: "Note"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "To ensure a consistent user experience across different platforms while enabling native access on each platform, the Whiteboard SDK for Android is implemented by creating a wrapper for the Whiteboard SDK for Web, rather than being a completely native SDK. Therefore, each Android SDK version by default includes the updates of the Web SDK version that it is built upon. The corresponding Web SDK version is provided in each Android release note, so that you can refer to the relevant Web SDK release note for updates."
          })
        })]
      }), _jsxs(Accordions, {
        type: "multiple",
        openFirst: true,
        children: [_jsxs(Accordion, {
          title: "v2.16.100",
          id: "v216100",
          headingLevel: 2,
          value: "v216100",
          children: [_jsx(_components.p, {
            children: "Released on July 28, 2025."
          }), _jsx(_components.h4, {
            id: "new-features",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "High-performance whiteboard drawing tools"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "appliance-plugin"
            }), ", a plugin that provides a set of high-performance whiteboard drawing tools. To use it, install ", _jsx(_components.code, {
              children: "@netless/appliance-plugin"
            }), " and enable it using the ", _jsx(_components.code, {
              children: "WhiteSdkConfiguration.enableAppliancePlugin"
            }), " option. For more details, see the ", _jsxs(_components.a, {
              href: "https://github.com/netless-io/fastboard/blob/main/docs/zh/appliance-plugin.md",
              children: [_jsx(_components.code, {
                children: "appliance-plugin"
              }), " documentation"]
            }), "."]
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: [_jsx(_components.code, {
                    children: "@netless/appliance-plugin"
                  }), " is an external dependency and must be installed separately."]
                }), `
`, _jsx(_components.li, {
                  children: "To ensure correct rendering of strokes, enable the plugin on all platforms (Web, Android, and iOS). If a platform does not enable it, strokes drawn on other platforms will not be visible."
                }), `
`, _jsx(_components.li, {
                  children: "After enabling the plugin, historical content remains visible but cannot be modified or upgraded. To avoid affecting the user experience, use the plugin on a new whiteboard. Disabling the plugin removes the content drawn with it."
                }), `
`]
              })
            })
          }), _jsx(_components.p, {
            children: "Once enabled, you can:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Use the ", _jsx(_components.code, {
                children: "LASER_PENCIL"
              }), " laser pencil tool. ", _jsx(_components.a, {
                href: "https://github.com/netless-io/fastboard/blob/main/docs/zh/appliance-plugin.md#%E6%96%B0%E5%8A%9F%E8%83%BD",
                children: "Learn more"
              })]
            }), `
`, _jsxs(_components.li, {
              children: ["Use ", _jsx(_components.code, {
                children: "MemberState.strokeOpacity"
              }), " to set line transparency."]
            }), `
`, _jsxs(_components.li, {
              children: ["Use ", _jsx(_components.code, {
                children: "MemberState.fillOpacity"
              }), " to set fill transparency."]
            }), `
`, _jsxs(_components.li, {
              children: ["Use ", _jsx(_components.code, {
                children: "MemberState.fillColor"
              }), " to set fill color."]
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "PPT rendering error handling"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "SlideListener.onSlideError"
            }), " method to listen for PPT rendering errors. If an error occurs, call ", _jsx(_components.code, {
              children: "WhiteSdk.recoverSlide"
            }), " to recover rendering."]
          }), _jsx(_components.h4, {
            id: "api-changes",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "WhiteSdkConfiguration"
              }), ":", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "enableAppliancePlugin"
                  })
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "MemberState"
              }), ":", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "strokeOpacity"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "fillOpacity"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "fillColor"
                  })
                }), `
`]
              }), `
`]
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "onSlideError"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "recoverSlide"
              })
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.16.86",
          id: "v21686",
          headingLevel: 2,
          value: "v21686",
          children: [_jsx(_components.p, {
            children: "Released on July 28, 2025."
          }), _jsxs(CalloutContainer, {
            type: "info",
            children: [_jsx(CalloutTitle, {
              children: "Note"
            }), _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "The wrapped Web SDK has been upgraded to v2.16.51."
              })
            })]
          }), _jsx(_components.h4, {
            id: "new-features-1",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Domain preselection"
            })
          }), _jsxs(_components.p, {
            children: ["This version adds the ", _jsx(_components.code, {
              children: "prepareWhiteConnection"
            }), " method to preselect an optimal access domain, which can improve the connection speed when users join a whiteboard room for the first time."]
          }), _jsx(_components.h4, {
            id: "api-changes-1",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "prepareWhiteConnection"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "ConnectionPrepareParam"
              })
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.16.81",
          id: "v21681",
          headingLevel: 2,
          value: "v21681",
          children: [_jsx(_components.p, {
            children: "Released on July 28, 2025."
          }), _jsxs(CalloutContainer, {
            type: "info",
            children: [_jsx(CalloutTitle, {
              children: "Note"
            }), _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "The wrapped Web SDK has been upgraded to v2.16.48."
              })
            })]
          }), _jsx(_components.h4, {
            id: "new-features-2",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Window apps management"
            })
          }), _jsxs(_components.p, {
            children: ["In the multi-window mode, the SDK supports inserting the PPT or whiteboard plugin as a window. These are collectively referred to as window apps. Starting from this version, the ", _jsx(_components.code, {
              children: "Room"
            }), " object has the following new methods for managing window apps in the multi-window mode:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "addApp"
              }), ": Inserts a window app and returns the app ID."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "closeApp"
              }), ": Closes the window of the specified window app."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "focusApp"
              }), ": Switches the focused window to the window of the specified window app."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "queryApp"
              }), ": Queries the information of the specified window app."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "queryAllApps"
              }), ": Queries the information of all current window apps."]
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Custom whiteboard tools"
            })
          }), _jsxs(_components.p, {
            children: ["The ", _jsx(_components.code, {
              children: "MemberState"
            }), " has the following new properties for customizing whiteboard tools:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "textColor"
              }), ": The color of the text in the text tool."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "pencilEraserSize"
              }), ": The size of the pencil eraser tool."]
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "New PPT rendering configurations"
            })
          }), _jsxs(_components.p, {
            children: ["The ", _jsx(_components.code, {
              children: "WhiteSdkConfiguration.SlideAppOptions"
            }), " has the following new properties for PPT rendering configurations:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "minFPS"
              }), ": Sets the minimum frame rate for PPT animations."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "maxFPS"
              }), ": Sets the maximum frame rate for PPT animations."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "resolution"
              }), ": Sets the rendering resolution multiplier for PPT."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "maxResolutionLevel"
              }), ": Sets the maximum resolution for PPT."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "bgColor"
              }), ": Sets the background color for PPT animations."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "forceCanvas"
              }), ": Specifies whether to force 2D rendering. It is disabled by default."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "enableGlobalClick"
              }), ": Specifies whether to enable executing the next step function by clicking on the PPT screen. It is enabled by default."]
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Whiteboard drawing performance optimization strategy"
            })
          }), _jsxs(_components.p, {
            children: ["The ", _jsx(_components.code, {
              children: "RoomParams"
            }), " has a new property ", _jsx(_components.code, {
              children: "optimizeOptions"
            }), " for setting the performance optimization strategy for whiteboard drawing. The performance optimization includes the following three methods:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Adjusting the refresh interval of whiteboard drawing: A lower refresh interval provides smoother stroke display but has a higher performance consumption, while a higher refresh interval makes the stroke appear more laggy but has a lower performance consumption."
            }), `
`, _jsx(_components.li, {
              children: "Using single canvas drawing: By default, the whiteboard uses two canvases alternately to avoid flickering on some devices during drawing. Using a single canvas drawing can prevent the need for redrawing and reduce performance consumption."
            }), `
`, _jsx(_components.li, {
              children: "Using floating canvas: In the writing scenario, after enabling single canvas drawing, a floating canvas of approximately 256 x 256px is generated based on the drawing position. When subsequent drawing does not exceed the range of this floating canvas, the synchronous drawing of strokes will be limited to this floating canvas instead of the entire canvas, reducing performance consumption."
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Other additions"
            })
          }), _jsx(_components.p, {
            children: "This version also includes the following features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Adds the ", _jsx(_components.code, {
                children: "updateText"
              }), " method for updating the text inserted using ", _jsx(_components.code, {
                children: "insertText"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Adds the ", _jsx(_components.code, {
                children: "setSyncMode"
              }), " method for immediately processing whiteboard events and drawing strokes."]
            }), `
`, _jsxs(_components.li, {
              children: ["Adds the ", _jsx(_components.code, {
                children: "setDisableInitialStateCallback"
              }), " method for disabling the callback of the full state after joining the room."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This version fixes the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["When ", _jsx(_components.code, {
                children: "WhiteWindowParams.fullscreen"
              }), " was enabled, the app did not display in full screen on the second opening."]
            }), `
`, _jsxs(_components.li, {
              children: ["When ", _jsx(_components.code, {
                children: "WindowParams.fullscreen"
              }), " was enabled, the status bar occasionally flickered."]
            }), `
`, _jsx(_components.li, {
              children: "Path animation could not return to the original position after page switching."
            }), `
`, _jsx(_components.li, {
              children: "Diamond fill filled the entire shape."
            }), `
`, _jsx(_components.li, {
              children: "The built-in cursor disappeared after reconnection."
            }), `
`, _jsx(_components.li, {
              children: "Occasional flickering when using fade-in and fade-out animations."
            }), `
`, _jsxs(_components.li, {
              children: ["The built-in cursor disappeared after modifying ", _jsx(_components.code, {
                children: "isWritable"
              }), "."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "api-changes-2",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "addApp"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "closeApp"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "focusApp"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "queryApp"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "queryAllApps"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "WindowAppSyncAttrs"
              })
            }), `
`, _jsxs(_components.li, {
              children: ["The following in ", _jsx(_components.code, {
                children: "MemberState"
              }), ":", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "textColor"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "pencilEraserSize"
                  })
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: ["The following in ", _jsx(_components.code, {
                children: "SlideAppOptions"
              }), ":", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "minFPS"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "maxFPS"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "resolution"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "maxResolutionLevel"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "bgColor"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "forceCanvas"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "enableGlobalClick"
                  })
                }), `
`]
              }), `
`]
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "setSyncMode"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "updateText"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "setDisableInitialStateCallback"
              })
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Modified"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "insertText"
              })
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.16.59",
          id: "v21659",
          headingLevel: 2,
          value: "v21659",
          children: [_jsx(_components.p, {
            children: "v2.16.59 was released on January 19, 2024."
          }), _jsxs(CalloutContainer, {
            type: "info",
            children: [_jsx(CalloutTitle, {
              children: "Note"
            }), _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "The wrapped Web SDK has been upgraded to v2.16.42."
              })
            })]
          }), _jsx(_components.h4, {
            id: "compatibility-changes",
            children: "Compatibility changes"
          }), _jsxs(_components.p, {
            children: ["This version deprecates the existing London data center (", _jsx(_components.code, {
              children: "Region.gb-lon"
            }), ") in the Whiteboard Data Center and introduces a new data center in Frankfurt, Europe (", _jsx(_components.code, {
              children: "Region.eu"
            }), "), whose service covers Europe. If you have set ", _jsx(_components.code, {
              children: "Region.gb-lon"
            }), " in the previous version, please switch to", _jsx(_components.code, {
              children: " Region.eu"
            }), " after upgrading to this version and enable this data center in Agora Console."]
          }), _jsx(_components.h4, {
            id: "new-features-3",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "PPT Volume Control"
            })
          }), _jsxs(_components.p, {
            children: ["This version adds the ", _jsx(_components.code, {
              children: "getSlideVolume"
            }), " and ", _jsx(_components.code, {
              children: "updateSlideVolume "
            }), "methods to retrieve and update the volume of audio in PPT slides."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "PPT URL Intercept and Replacement"
            })
          }), _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "WhiteSdkConfiguration"
            }), " adds a new configuration option, ", _jsx(_components.code, {
              children: "enableSlideInterrupterAPI"
            }), `, to enable intercepting and replacing URLs of PPT resources. This feature can be used to encrypt PPT resources uploaded by users and protect their privacy.
Once enabled, the PPT file URL intercept and replacement feature can be implemented by calling `, _jsx(_components.code, {
              children: "WhiteSdk.setSlideListener(SlideListener)"
            }), "."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "PPT Rendering Notification"
            })
          }), _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "WhiteSdkConfiguration"
            }), " adds the ", _jsx(_components.code, {
              children: "whiteSlideAppParams"
            }), " configuration option for displaying configurations related to ", _jsx(_components.a, {
              href: "https://github.com/netless-io/netless-app/tree/master/packages/app-slide",
              children: "@netless/app-slide"
            }), " rendering. Currently, it supports configuring ", _jsx(_components.code, {
              children: "WhiteSlideAppParams.showRenderError"
            }), " to show or hide rendering error notifications."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Custom API Server Domain"
            })
          }), _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "WhiteSdkConfiguration"
            }), " adds the ", _jsx(_components.code, {
              children: "apiHosts"
            }), " configuration option to configure a list of API server domains for the whiteboard, which can be used for server proxy implementation."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Custom Module Source"
            })
          }), _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "RoomParams"
            }), " adds the ", _jsx(_components.code, {
              children: "modulesOrigin"
            }), " configuration option to configure the address for requesting whiteboard module data."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Document Operation Events"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "dispatchDocsEvent"
            }), " method to send events to the inserted PDF/PPTX documents in the whiteboard, allowing control over document page flipping, page navigation, and slide animation playback."]
          }), _jsx(_components.h4, {
            id: "improvements",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Optimized Document Insertion"
            })
          }), _jsxs(_components.p, {
            children: ["This version optimizes the process of converting and inserting PPT files into the whiteboard using the new document conversion service. You can use the new ", _jsx(_components.code, {
              children: "createSlideApp"
            }), " method to construct a ", _jsx(_components.code, {
              children: "WindowAppParam"
            }), " object, which includes ", _jsx(_components.code, {
              children: "ProjectorAttributes"
            }), " and ", _jsx(_components.code, {
              children: "ProjectorOptions"
            }), ", corresponding to the parameters passed when opening the document, see ", _jsx(_components.code, {
              children: "addApp"
            }), "."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Window Fullscreen"
            })
          }), _jsxs(_components.p, {
            children: ["A new property, ", _jsx(_components.code, {
              children: "WindowParams.fullscreen"
            }), ", is added to control whether the window is displayed in fullscreen mode."]
          }), _jsx(_components.h4, {
            id: "issues-fixed",
            children: "Issues fixed"
          }), _jsx(_components.p, {
            children: "This version fixed the issue of layout preview not working in the latest version of Android Studio."
          }), _jsx(_components.h4, {
            id: "api-changes-3",
            children: "API Changes"
          }), _jsx(_components.p, {
            children: "Added"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: _jsx(_components.code, {
                  children: "getSlideVolumeWithCompletionHandler"
                })
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: _jsx(_components.code, {
                  children: "updateSlideVolume"
                })
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: _jsx(_components.code, {
                  children: "WhiteSdkConfiguration"
                })
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "enableSlideInterrupterAPI"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "whiteSlideAppParams"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "apiHosts"
                  })
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: _jsx(_components.code, {
                  children: "setSlideDelegate"
                })
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: [_jsx(_components.code, {
                  children: "modulesOrigin "
                }), "in", _jsx(_components.code, {
                  children: " RoomParams"
                })]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: _jsx(_components.code, {
                  children: "dispatchDocsEvent"
                })
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: _jsx(_components.code, {
                  children: "WindowDocsEvent"
                })
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: _jsx(_components.code, {
                  children: "createSlideApp"
                })
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "ProjectorAttributes"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "ProjectorOptions"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "WindowAppParam"
                  })
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: _jsx(_components.code, {
                  children: "WindowParams.fullscreen"
                })
              }), `
`]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.16.42",
          id: "v21642",
          headingLevel: 2,
          value: "v21642",
          children: [_jsx(_components.p, {
            children: "v2.16.42 was released on December 2, 2022."
          }), _jsxs(CalloutContainer, {
            type: "info",
            children: [_jsx(CalloutTitle, {
              children: "Note"
            }), _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "The wrapped Web SDK has been upgraded to v2.16.37."
              })
            })]
          }), _jsx(_components.h4, {
            id: "new-features-4",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "1. Whiteboard tool updates"
            })
          }), _jsx(_components.p, {
            children: "This release adds new features for the following whiteboard tools:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Pencil: Adds support for drawing dotted lines by adding ", _jsx(_components.code, {
                children: "dottedLine: true"
              }), " in ", _jsx(_components.code, {
                children: "room.memberState"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Text: Adds support for directly selecting and editing whiteboard text by adding ", _jsx(_components.code, {
                children: "textCanSelectText: true"
              }), " in ", _jsx(_components.code, {
                children: "room.memberState"
              }), "."]
            }), `
`]
          }), _jsx(_components.p, {
            children: "In addition, this release adds a pencil eraser tool to erase any part of a pencil stroke."
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "2. Floatbar"
            })
          }), _jsx(_components.p, {
            children: `This release adds the floatbar feature. The floatbar pops up when selecting any whiteboard item, which enables users to
easily edit these whiteboard items. For example, when selecting a stroke, the floatbar enables the user to remove it or
change its color. When selecting text, the floatbar enables the user to adjust its style or change its typeface.`
          }), _jsxs(_components.p, {
            children: ["Call the ", _jsx(_components.code, {
              children: "setUsingFloatBar"
            }), " method to enable the floatbar."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "3. Remove whiteboard pages"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "removePage"
            }), " method to delete a specified whiteboard page."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "4. Request slide log"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "requestSlideLog"
            }), " method in the ", _jsx(_components.code, {
              children: "WhiteSdk"
            }), ` class to request the slide log on the client.
This facilitates debugging slide-related issues.`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "5. Player callbacks"
            })
          }), _jsxs(_components.p, {
            children: ["To facilitate listening to the state changes of ", _jsx(_components.code, {
              children: "Player"
            }), ", this release adds ", _jsx(_components.code, {
              children: "addPlayerListener"
            }), " and ", _jsx(_components.code, {
              children: "removePlayerListener"
            }), `
methods to add and remove player callbacks.`]
          }), _jsx(_components.h4, {
            id: "improvements-1",
            children: "Improvements"
          }), _jsxs(_components.p, {
            children: [`This release optimizes the audio playback control in PPT files. You can now pause or resume audio mixing or playback in
dynamic PPT files with the `, _jsx(_components.code, {
              children: "pauseAudioMixing"
            }), " and ", _jsx(_components.code, {
              children: "resumeAudioMixing"
            }), " methods."]
          }), _jsx(_components.h4, {
            id: "fixed-issues-1",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release fixes the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Under multi-window mode, no callback was received when the ", _jsx(_components.code, {
                children: "sceneState"
              }), " changed."]
            }), `
`, _jsx(_components.li, {
              children: "The creation of the whiteboard app sometimes failed after reconnection."
            }), `
`, _jsx(_components.li, {
              children: "When creating the whiteboard app, synchronizing the initial height and width sometimes failed."
            }), `
`, _jsxs(_components.li, {
              children: ["Switching the readable/writable state sometimes caused the configuration to be lost in the ", _jsx(_components.code, {
                children: "disableCameraTransform"
              }), " of ", _jsx(_components.code, {
                children: "mainView"
              }), "."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "api-changes-4",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["New properties in the ", _jsx(_components.code, {
                children: "MemberState"
              }), " class: ", _jsx(_components.code, {
                children: "dottedLine"
              }), " and ", _jsx(_components.code, {
                children: "textCanSelectText"
              })]
            }), `
`, _jsxs(_components.li, {
              children: ["New property in the ", _jsx(_components.code, {
                children: "Appliance"
              }), " class: ", _jsx(_components.code, {
                children: "PENCIL_ERASER"
              })]
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "removePage"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "pauseAudioMixing"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "resumeAudioMixing"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "addPlayerListener"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "removePlayerListener"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "setUsingFloatBar"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "requestSlideLog"
              })
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.16.21",
          id: "v21621",
          headingLevel: 2,
          value: "v21621",
          children: [_jsx(_components.p, {
            children: "v2.16.21 was released on September 13, 2022."
          }), _jsx(_components.h4, {
            id: "compatibility-changes-1",
            children: "Compatibility changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "SDK integration changes"
            })
          }), _jsxs(_components.p, {
            children: ["As of v2.16.0, Agora only updates the ", _jsx(_components.code, {
              children: "netless-io:whiteboard-android"
            }), " GitHub repository; Agora no longer maintains the ", _jsx(_components.code, {
              children: "duty-os:white-sdk-android"
            }), " GitHub repository. When integrating the SDK v2.16.0 or later with JitPack, you need to modify the ", _jsx(_components.code, {
              children: "implementation"
            }), " field under ", _jsx(_components.code, {
              children: "dependencies"
            }), " in the ", _jsx(_components.code, {
              children: "/Gradle Scripts/build.gradle(Module: <projectname>.app)"
            }), " file as follows:"]
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "dependencies"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
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
                    children: "    implementation"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'com.github.netless-io:whiteboard-android:<version>'"
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
            children: ["For details, see ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/get-started-sdk#get-whiteboard-sdk",
              children: "Get the SDK"
            }), "."]
          }), _jsx(_components.h4, {
            id: "new-features-5",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "1. Inserting text"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "insertText"
            }), " method for inserting text at a specified position."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "2. Disabling the stroke effect"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "setDisableNewPencilStroke"
            }), " method to ", _jsx(_components.code, {
              children: "WhiteSdkConfiguration"
            }), " to enable or disable the stroke effect of the pencil. The default value of the ", _jsx(_components.code, {
              children: "disableNewPencilStroke"
            }), " parameter in this method is ", _jsx(_components.code, {
              children: "true"
            }), ", and the SDK enables the stroke effect immediately when you call ", _jsx(_components.code, {
              children: "setDisableNewPencil(false)"
            }), " to enable the new pencil. To disable the stroke effect after setting ", _jsx(_components.code, {
              children: "setDisableNewPencil(false)"
            }), ", you can call ", _jsx(_components.code, {
              children: "setDisableNewPencilStroke(true)"
            }), "."]
          }), _jsxs(_components.p, {
            children: ["This release also adds the ", _jsx(_components.code, {
              children: "isDisableNewPencilStroke"
            }), " method to ", _jsx(_components.code, {
              children: "WhiteSdkConfiguration"
            }), " to get whether the stroke effect of the new pencil is disabled."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "3. Getting the scene information"
            })
          }), _jsxs(_components.p, {
            children: ["adds the ", _jsx(_components.code, {
              children: "getScene"
            }), " method to the ", _jsx(_components.code, {
              children: "Displayer"
            }), " class, which supports using the scene path to get the information about a specified scene."]
          }), _jsx(_components.h4, {
            id: "improvements-2",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release provides the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Adds tween animation for the new pencil. This allows the SDK to automatically insert frames between keyframes when a user draws or writes with the new pencil, so that remote users see a smoother drawing process. To experience this improvement, ensure that you have called ", _jsx(_components.code, {
                children: "setDisableNewPencil(false)"
              }), " to enable the new pencil."]
            }), `
`, _jsx(_components.li, {
              children: "Optimizes the writing performance on Android browsers."
            }), `
`, _jsx(_components.li, {
              children: "Optimizes the reconnecting mechanism in weak network environment to reduce unnecessary reconnections."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-2",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Occasionally, the contents on the whiteboard appeared shifted and overshadowed after users zoomed or moved their view."
            }), `
`, _jsx(_components.li, {
              children: "Occasionally, users could not switch the pages of a dynamic PPT slide after an SDK reconnection."
            }), `
`, _jsx(_components.li, {
              children: "The contents on the whiteboard occasionally were not fully displayed when users joined a whiteboard room that already had."
            }), `
`, _jsx(_components.li, {
              children: "A memory leak sometimes occurred after an SDK reconnection."
            }), `
`, _jsxs(_components.li, {
              children: ["An error sometimes occurred when calling ", _jsx(_components.code, {
                children: "setWritable"
              }), " repeatedly."]
            }), `
`, _jsx(_components.li, {
              children: "When a user switched to read-only mode, then switched back to read-write mode and wrote, remote users saw that user's cursor as fixed."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "api-changes-5",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "insertText"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "setDisableNewPencilStroke"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "isDisableNewPencilStroke"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "getScene"
              })
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.15.24",
          id: "v21524",
          headingLevel: 2,
          value: "v21524",
          children: [_jsx(_components.p, {
            children: "v2.15.24 was released on January 21, 2022."
          }), _jsx(_components.p, {
            children: "This release provides the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "white-web-sdk"
              }), " to v2.15.16."]
            }), `
`, _jsxs(_components.li, {
              children: ["Optimizes ", _jsx(_components.code, {
                children: "getSceneSnapshotImage"
              }), " and ", _jsx(_components.code, {
                children: "getScenePreviewImage"
              }), " to ensure the images inserted in the scene are displayed correctly in the screenshot."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.15.0",
          id: "v2150",
          headingLevel: 2,
          value: "v2150",
          children: [_jsx(_components.p, {
            children: "v2.15.0 was released on November 16, 2021."
          }), _jsx(_components.h4, {
            id: "compatibility-changes-2",
            children: "Compatibility changes"
          }), _jsxs(_components.p, {
            children: ["To help you manage users in a room, this release adds the ", _jsx(_components.code, {
              children: "uid"
            }), " parameter in ", _jsx(_components.code, {
              children: "RoomParams"
            }), ", for setting the unique identifier of a user."]
          }), _jsxs(_components.p, {
            children: ["If you upgrade the SDK to v2.15.0 or later, to avoid affecting your service, ensure that you pass in a string ", _jsx(_components.code, {
              children: "uid"
            }), " in ", _jsx(_components.code, {
              children: "RoomParams"
            }), " when calling ", _jsx(_components.code, {
              children: "joinRoom"
            }), ". The ", _jsx(_components.code, {
              children: "uid"
            }), " of each user cannot be longer than 1024 bytes and must be unique in the same room. For more information, see ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/get-started-sdk#join-the-interactive-whiteboard-room-from-your-app-client",
              children: "Join a Whiteboard Room"
            }), "."]
          }), _jsx(_components.h4, {
            id: "new-features-6",
            children: "New features"
          }), _jsx(_components.p, {
            children: "This release adds support for converting and displaying the following PowerPoint (PPT) features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Action buttons"
            }), `
`, _jsx(_components.li, {
              children: "Slide masters added with animation effects."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-3",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release provides the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "white-web-sdk"
              }), " to v2.15.1."]
            }), `
`, _jsx(_components.li, {
              children: "Further optimizes the writing experience."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-3",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release has fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The following issues with displaying dynamic PPT files in the whiteboard were fixed:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "The images were displaced occasionally."
                }), `
`, _jsx(_components.li, {
                  children: "Failure to read certain styles caused the screen to go blank."
                }), `
`, _jsx(_components.li, {
                  children: "The rotation angle and color were incorrect for some text."
                }), `
`, _jsx(_components.li, {
                  children: "Occasionally, elements with an animation effect were not displayed"
                }), `
`, _jsx(_components.li, {
                  children: "The animation of some text was displayed incorrectly."
                }), `
`]
              }), `
`]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "api-changes-6",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Modified"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "RoomParams"
              }), " [1/3]"]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "RoomParams"
              }), " [2/3]"]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "RoomParams"
              }), " [3/3]"]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.14.3",
          id: "v2143",
          headingLevel: 2,
          value: "v2143",
          children: [_jsx(_components.p, {
            children: "v2.14.3 was released on November 11, 2021."
          }), _jsx(_components.h4, {
            id: "compatibility-changes-3",
            children: "Compatibility changes"
          }), _jsx(_components.p, {
            children: "As of this release, the minimum platform version supported by the Agora Interactive Whiteboard Android SDK changes as follows:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Android 5.0, instead of Android 4.4"
            }), `
`, _jsx(_components.li, {
              children: "Android SDK API level 21, instead of Android SDK API level 19"
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-4",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release provides the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "white-web-sdk"
              }), " to v2.14.5."]
            }), `
`, _jsx(_components.li, {
              children: "Further optimizes the writing performance."
            }), `
`, _jsx(_components.li, {
              children: "Optimizes the shape of handwriting."
            }), `
`, _jsxs(_components.li, {
              children: ["Improves the accuracy of the ", _jsx(_components.code, {
                children: "onPhaseChanged"
              }), " callback."]
            }), `
`, _jsx(_components.li, {
              children: "Hides elements that should not be displayed in a slide master using the file-conversion function."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-4",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release has fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "After switching to the hand tool, users could not switch back to the cursor."
            }), `
`, _jsx(_components.li, {
              children: "Occasionally, the handwriting disappeared suddenly during writing."
            }), `
`, _jsx(_components.li, {
              children: "Occasionally, the handwriting had unnatural teardrop-like strokes during writing."
            }), `
`, _jsx(_components.li, {
              children: "When the user edited text after manually scaling the text box, the text box and text reverted to the original size."
            }), `
`, _jsx(_components.li, {
              children: "The view became incorrect after the window size changed on some browsers and devices."
            }), `
`, _jsx(_components.li, {
              children: "When the eraser was moved quickly, the eraser icon was not enlarged and the fast deleting function did not work."
            }), `
`, _jsx(_components.li, {
              children: "Occasionally, multiple audio files in dynamic PPT slides played simultaneously."
            }), `
`, _jsx(_components.li, {
              children: "Animations were displayed incorrectly after a dynamic PPT slide returned to the previous page."
            }), `
`, _jsx(_components.li, {
              children: "Occasionally, a text box with an animation effect was flipped in mirror mode."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.13.22",
          id: "v21322",
          headingLevel: 2,
          value: "v21322",
          children: [_jsx(_components.p, {
            children: "v2.13.22 was released on August 20, 2021."
          }), _jsx(_components.h4, {
            id: "new-features-7",
            children: "New features"
          }), _jsx(_components.p, {
            children: "This release has the following new features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Adds the ", _jsx(_components.code, {
                children: "onLogger"
              }), " callback in the ", _jsx(_components.code, {
                children: "CommonCallback"
              }), " interface, with which you can get the local debug log output by the SDK."]
            }), `
`, _jsxs(_components.li, {
              children: ["Adds support for converting and displaying the following PowerPoint (PPT) features:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "Add animations to text per paragraph."
                }), `
`, _jsx(_components.li, {
                  children: "Animate text by word or by letter."
                }), `
`, _jsx(_components.li, {
                  children: "All preset table styles."
                }), `
`, _jsx(_components.li, {
                  children: "Fonts smaller than 12 px."
                }), `
`]
              }), `
`]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-5",
            children: "Improvements"
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.13.17."]
          }), _jsx(_components.h4, {
            id: "fixed-issues-5",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "onLogger"
              }), " and ", _jsx(_components.code, {
                children: "onMessage"
              }), " callbacks did not take effect."]
            }), `
`, _jsx(_components.li, {
              children: "Occasionally, the room was stuck in the connecting state when the user joined a room."
            }), `
`, _jsx(_components.li, {
              children: "The cursor disappeared for some users after the SDK reconnected."
            }), `
`, _jsx(_components.li, {
              children: "The status of some plugins was incorrect after the SDK reconnected."
            }), `
`, _jsxs(_components.li, {
              children: ["The hand tool was not restricted by the set ", _jsx(_components.code, {
                children: "CameraBound"
              }), " ."]
            }), `
`, _jsxs(_components.li, {
              children: ["On some high-resolution devices, when the user was in the ", _jsx(_components.code, {
                children: "Follower"
              }), " view mode, the center point of the view was slightly shifted."]
            }), `
`, _jsxs(_components.li, {
              children: ["The following issues with displaying dynamic PPT files in the whiteboard were fixed:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "Paragraph spacing was displayed incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "Failed to split text into columns."
                }), `
`, _jsx(_components.li, {
                  children: "The slide background fill of shapes was displayed incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "Hanging indentation was displayed incorrectly."
                }), `
`, _jsxs(_components.li, {
                  children: ["The slide was displayed incorrectly when the user called ", _jsx(_components.code, {
                    children: "pptPreviousStep"
                  }), " to roll back a slide."]
                }), `
`, _jsx(_components.li, {
                  children: "The numbering of text displayed incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "Some equations were displayed incompletely after conversion."
                }), `
`, _jsx(_components.li, {
                  children: "Some lines broke incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "Text written from right to left (such as Arabic) was displayed incorrectly."
                }), `
`]
              }), `
`]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.13.17",
          id: "v21317",
          headingLevel: 2,
          value: "v21317",
          children: [_jsx(_components.p, {
            children: "v2.13.17 was released on July 23 2021."
          }), _jsx(_components.h4, {
            id: "new-features-8",
            children: "New features"
          }), _jsx(_components.p, {
            children: "To improve the dynamic file conversion function, this release adds support for converting and displaying the following PowerPoint (PPT) features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Animation effect > Reverse Path Direction"
            }), `
`, _jsx(_components.li, {
              children: "Vertical Text Box"
            }), `
`, _jsx(_components.li, {
              children: "Microsoft Equation Editor 3.0"
            }), `
`, _jsx(_components.li, {
              children: "Hide background graphic in a slide master"
            }), `
`, _jsx(_components.li, {
              children: "Change the color of pictures"
            }), `
`, _jsxs(_components.li, {
              children: ["The following picture effects are now supported:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "Metal Frame"
                }), `
`, _jsx(_components.li, {
                  children: "Soft Edge Rectangle"
                }), `
`, _jsx(_components.li, {
                  children: "Double Frame, Black"
                }), `
`, _jsx(_components.li, {
                  children: "Thick Matte, Black"
                }), `
`, _jsx(_components.li, {
                  children: "Simple Frame, Black"
                }), `
`, _jsx(_components.li, {
                  children: "Moderate Frame, Black"
                }), `
`, _jsx(_components.li, {
                  children: "Center Shadow Rectangle"
                }), `
`, _jsx(_components.li, {
                  children: "Soft Edge Oval"
                }), `
`, _jsx(_components.li, {
                  children: "Metal Rounded Rectangle"
                }), `
`, _jsx(_components.li, {
                  children: "Metal Oval"
                }), `
`]
              }), `
`]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-6",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release has the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "white-web-sdk"
              }), " to 2.13.11."]
            }), `
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "@netless/video-js-plugin"
              }), " to 0.3.3."]
            }), `
`, _jsx(_components.li, {
              children: "Reduces CPU usage during the playback of animations in dynamic PPT files."
            }), `
`, _jsx(_components.li, {
              children: "Improves the smoothness of writing and drawing on the whiteboard"
            }), `
`, _jsxs(_components.li, {
              children: ["To improve the accuracy of time synchronization, changes the data type of the ", _jsx(_components.code, {
                children: "delaySec"
              }), " parameter in ", _jsx(_components.code, {
                children: "setTimeDelay"
              }), " from Integer to Double."]
            }), `
`, _jsx(_components.li, {
              children: "Supports printing logs on scene changes."
            }), `
`, _jsxs(_components.li, {
              children: ["Adds the ", _jsx(_components.code, {
                children: "preview"
              }), " parameter in ", _jsx(_components.code, {
                children: "PptPage"
              }), ", which supports displaying dynamic PPT previews in the whiteboard. See ", _jsx(_components.code, {
                children: "API reference"
              }), "."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-6",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "The contents on the whiteboard occasionally became unclear when the user adjusted the view."
            }), `
`, _jsx(_components.li, {
              children: "Users of the Android SDK occasionally failed to draw the first line after joining the room."
            }), `
`, _jsxs(_components.li, {
              children: ["The method call of ", _jsx(_components.code, {
                children: "refreshViewSize"
              }), " did not take effect occasionally."]
            }), `
`, _jsxs(_components.li, {
              children: ["The following issues with displaying dynamic PPT files in the whiteboard were fixed:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "Animations did not play in the set order."
                }), `
`, _jsx(_components.li, {
                  children: "Animations did not disappear when playback finished."
                }), `
`, _jsx(_components.li, {
                  children: "Table height was displayed incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "Pictures inserted in content placeholders failed to display."
                }), `
`, _jsx(_components.li, {
                  children: "Some shapes were rendered incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "The text was incorrectly indented."
                }), `
`, _jsx(_components.li, {
                  children: "Animation triggers did not work."
                }), `
`, _jsx(_components.li, {
                  children: "Picture transparency was incorrect."
                }), `
`]
              }), `
`]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.13.4",
          id: "v2134",
          headingLevel: 2,
          value: "v2134",
          children: [_jsx(_components.p, {
            children: "v2.13.4 was released on June 15, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.13.4."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.13.2",
          id: "v2132",
          headingLevel: 2,
          value: "v2132",
          children: [_jsx(_components.p, {
            children: "v2.13.2 was released on June 11, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.13.3."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.13.1",
          id: "v2131",
          headingLevel: 2,
          value: "v2131",
          children: [_jsx(_components.p, {
            children: "v2.13.1 was released on June 11, 2021."
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Improvement"
            })
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.13.2."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Issue fixed"
            })
          }), _jsxs(_components.p, {
            children: ["This release fixed the issue that when ", _jsx(_components.code, {
              children: "disableDeviceInputs"
            }), " is set as ", _jsx(_components.code, {
              children: "true"
            }), ", the user might still be able to operate the iframe plugin."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.36",
          id: "v21236",
          headingLevel: 2,
          value: "v21236",
          children: [_jsx(_components.p, {
            children: "v2.12.36 was released on June 8, 2021."
          }), _jsx(_components.p, {
            children: "This release fixed the following issue: If the user in host mode zooms in or out on the HTML5 file while using the clicker tool, users in follower mode saw incomplete display of file content."
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.35",
          id: "v21235",
          headingLevel: 2,
          value: "v21235",
          children: [_jsx(_components.p, {
            children: "v2.12.35 was released on June 7, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.a, {
              href: "https://github.com/netless-io/whiteboard-demo/tree/master/packages/cursor-tool",
              children: _jsx(_components.code, {
                children: "@netless/cursor-tool"
              })
            }), " to 0.1.0 and ", _jsx(_components.code, {
              children: "@netless/iframe-bridge"
            }), " to 2.1.2."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.34",
          id: "v21234",
          headingLevel: 2,
          value: "v21234",
          children: [_jsx(_components.p, {
            children: "v2.12.34 was released on June 4, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.12.21."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.33",
          id: "v21233",
          headingLevel: 2,
          value: "v21233",
          children: [_jsx(_components.p, {
            children: "v2.12.33 was released on June 3, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.a, {
              href: "https://www.npmjs.com/package/@netless/video-js-plugin",
              children: _jsx(_components.code, {
                children: "@netless/video-js-plugin"
              })
            }), " to 0.1.5."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.32",
          id: "v21232",
          headingLevel: 2,
          value: "v21232",
          children: [_jsx(_components.p, {
            children: "v2.12.32 was released on June 2, 2021."
          }), _jsxs(_components.p, {
            children: ["This release fixed the video display issues of ", _jsx(_components.code, {
              children: "@netless/video-js-plugin"
            }), "."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.31",
          id: "v21231",
          headingLevel: 2,
          value: "v21231",
          children: [_jsx(_components.p, {
            children: "v2.12.31 was released on June 1, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.a, {
              href: "https://www.npmjs.com/package/@netless/video-js-plugin",
              children: _jsx(_components.code, {
                children: "@netless/video-js-plugin"
              })
            }), " to 0.1.3 to fix the incompatibility issue between the ", _jsx(_components.code, {
              children: "video-js-plugin"
            }), " and earlier versions of Andrid WebView ."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.30",
          id: "v21230",
          headingLevel: 2,
          value: "v21230",
          children: [_jsx(_components.p, {
            children: "v2.12.30 was released on May 25, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.a, {
              href: "https://github.com/netless-io/whiteboard-demo/tree/master/packages/cursor-tool",
              children: _jsx(_components.code, {
                children: "@netless/cursor-tool"
              })
            }), " to 0.0.9."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.29",
          id: "v21229",
          headingLevel: 2,
          value: "v21229",
          children: [_jsx(_components.p, {
            children: "v2.12.29 was released on May 24, 2021."
          }), _jsx(_components.h4, {
            id: "new-features-9",
            children: "New features"
          }), _jsxs(_components.p, {
            children: ["This release integrates ", _jsx(_components.a, {
              href: "https://www.npmjs.com/package/@netless/video-js-plugin",
              children: _jsx(_components.code, {
                children: "@netless/video-js-plugin"
              })
            }), ", which is used by an Android client to watch video played on the whiteboard on a Web client. Supported file formats include M3U8 and others."]
          }), _jsx(_components.h4, {
            id: "improvement",
            children: "Improvement"
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), "  to 2.12.20."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.28",
          id: "v21228",
          headingLevel: 2,
          value: "v21228",
          children: [_jsx(_components.p, {
            children: "v2.12.28 was released on May 20, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), "  to 2.12.19."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.27",
          id: "v21227",
          headingLevel: 2,
          value: "v21227",
          children: [_jsx(_components.p, {
            children: "v2.12.27 was released on May 17, 2021."
          }), _jsx(_components.p, {
            children: "This release has the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "white-web-sdk "
              }), "to 2.12.18."]
            }), `
`, _jsxs(_components.li, {
              children: ["Enables server-side typesetting (", _jsx(_components.code, {
                children: "useServerWrap"
              }), ") by default. When server-side typesetting is enabled, the size of font files are automatically reduced for faster rendering."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.26",
          id: "v21226",
          headingLevel: 2,
          value: "v21226",
          children: [_jsx(_components.p, {
            children: "v2.12.26 was released on May 13, 2021."
          }), _jsx(_components.p, {
            children: "This release adds the following features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Adds ", _jsx(_components.code, {
                children: "Clicker"
              }), " to ", _jsx(_components.code, {
                children: "Appliance"
              }), " for interacting with HTML5 files."]
            }), `
`, _jsxs(_components.li, {
              children: ["Adds ", _jsx(_components.code, {
                children: "ShapeType"
              }), " to ", _jsx(_components.code, {
                children: "MemberState"
              }), " for setting the Shape tool. Supported shape types include triangle, rhombus, pentagram, and speech balloon."]
            }), `
`, _jsxs(_components.li, {
              children: ["Adds the ", _jsx(_components.code, {
                children: "syncBlockTimestamp"
              }), " method to the ", _jsx(_components.code, {
                children: "Room"
              }), " class. You can use this method to set the delay time for sending the whiteboard content, so that the whiteboard content and the audio and video are sent at the same time."]
            }), `
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "white-web-sdk"
              }), " to 2.12.17."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.25",
          id: "v21225",
          headingLevel: 2,
          value: "v21225",
          children: [_jsx(_components.p, {
            children: "v2.12.25 was released on April 28, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.a, {
              href: "https://github.com/netless-io/whiteboard-demo/tree/master/packages/white-audio-plugin",
              children: _jsx(_components.code, {
                children: "@Netless/white-audio-plugin2"
              })
            }), " and ", _jsx(_components.a, {
              href: "https://github.com/netless-io/react-whiteboard/tree/master/packages/white-video-plugin",
              children: _jsx(_components.code, {
                children: "@Netless/white-video-plugin2"
              })
            }), " to fix some display issues."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.24",
          id: "v21224",
          headingLevel: 2,
          value: "v21224",
          children: [_jsx(_components.p, {
            children: "v2.12.24 was released on April 27, 2021."
          }), _jsx(_components.h4, {
            id: "new-features-10",
            children: "New features"
          }), _jsxs(_components.p, {
            children: ["This release integrates ", _jsx(_components.a, {
              href: "https://github.com/netless-io/whiteboard-demo/tree/master/packages/white-audio-plugin",
              children: _jsx(_components.code, {
                children: "@Netless/white-audio-plugin2"
              })
            }), " and ", _jsx(_components.a, {
              href: "https://github.com/netless-io/react-whiteboard/tree/master/packages/white-video-plugin",
              children: _jsx(_components.code, {
                children: "@Netless/white-video-plugin2"
              })
            }), ", which are used by an Android client to listen to audio and watch video played on the whiteboard on a Web client."]
          }), _jsx(_components.h4, {
            id: "fixed-issues-7",
            children: "Fixed issues"
          }), _jsxs(_components.p, {
            children: ["This release fixed the issue that the asynchronous ", _jsx(_components.code, {
              children: "getRoomState"
            }), " method had no callbacks."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.22",
          id: "v21222",
          headingLevel: 2,
          value: "v21222",
          children: [_jsx(_components.p, {
            children: "v2.12.22 was released on April 22, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.12.14."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.21",
          id: "v21221",
          headingLevel: 2,
          value: "v21221",
          children: [_jsx(_components.p, {
            children: "v2.12.21 was released on April 22, 2021."
          }), _jsx(_components.p, {
            children: "This release has the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Changes ", _jsx(_components.code, {
                children: "RoomListener"
              }), " and ", _jsx(_components.code, {
                children: "PlayerListener"
              }), " to main thread callbacks."]
            }), `
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "white-web-sdk"
              }), " to 2.12.13."]
            }), `
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "@Netless/iframe-bridge"
              }), " to 2.12.17."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.20",
          id: "v21220",
          headingLevel: 2,
          value: "v21220",
          children: [_jsx(_components.p, {
            children: "v2.12.20 was released on April 17, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.12.12."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.19",
          id: "v21219",
          headingLevel: 2,
          value: "v21219",
          children: [_jsx(_components.p, {
            children: "v2.12.19 was released on April 14, 2021."
          }), _jsx(_components.p, {
            children: "This release has the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Adds a new constructor of ", _jsx(_components.code, {
                children: "PptParams"
              }), " that does not contain the ", _jsx(_components.code, {
                children: "scheme"
              }), " parameter."]
            }), `
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "@Netless/iframe-bridge"
              }), " to 2.0.14 to improve the iframe plugin."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.18",
          id: "v21218",
          headingLevel: 2,
          value: "v21218",
          children: [_jsx(_components.p, {
            children: "v2.12.18 was released on April 12, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@netless/iframe-bridge"
            }), " to 2.0.13 to improve message notifications."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.17",
          id: "v21217",
          headingLevel: 2,
          value: "v21217",
          children: [_jsx(_components.p, {
            children: "v2.12.17 was released on April 12, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@netless/iframe-bridge"
            }), " to 2.0.11 and improves the display on Android devices."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.16",
          id: "v21216",
          headingLevel: 2,
          value: "v21216",
          children: [_jsx(_components.p, {
            children: "v2.12.16 was released on April 9, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@netless/iframe-bridge"
            }), " to 2.0.10 and improves the display on Android devices."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.15",
          id: "v21215",
          headingLevel: 2,
          value: "v21215",
          children: [_jsx(_components.p, {
            children: "v2.12.15 was released on April 10, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.12.9."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.14",
          id: "v21214",
          headingLevel: 2,
          value: "v21214",
          children: [_jsx(_components.p, {
            children: "v2.12.14 was released on April 9, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@netless/iframe-bridge"
            }), " to 2.0.9 to fix the display of HTML5 files."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.13",
          id: "v21213",
          headingLevel: 2,
          value: "v21213",
          children: [_jsx(_components.p, {
            children: "v2.12.13 was released on April 9, 2021."
          }), _jsxs(_components.p, {
            children: ["This release restores the ", _jsx(_components.code, {
              children: "scaleIframeToFit"
            }), " method of the ", _jsx(_components.code, {
              children: "Displayer"
            }), " class."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.12",
          id: "v21212",
          headingLevel: 2,
          value: "v21212",
          children: [_jsx(_components.p, {
            children: "v2.12.12 was released on April 9, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@netless/iframe-bridge"
            }), " to 2.0.8 to fix the display of HTML5 files."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.11",
          id: "v21211",
          headingLevel: 2,
          value: "v21211",
          children: [_jsx(_components.p, {
            children: "v2.12.11 was released on April 6, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.12.8 to fix the problem that setting Follower mode did not take effect immediately."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.10",
          id: "v21210",
          headingLevel: 2,
          value: "v21210",
          children: [_jsx(_components.p, {
            children: "v2.12.10 was released on April 2, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.12.7 to improve the display of dynamic PPT files."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.9",
          id: "v2129",
          headingLevel: 2,
          value: "v2129",
          children: [_jsx(_components.p, {
            children: "v2.12.9 was released on March 30, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@netless/iframe-bridge"
            }), " to 2.0.7."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.8",
          id: "v2128",
          headingLevel: 2,
          value: "v2128",
          children: [_jsx(_components.p, {
            children: "v2.12.8 was released on March 30, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.12.6."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.7",
          id: "v2127",
          headingLevel: 2,
          value: "v2127",
          children: [_jsx(_components.p, {
            children: "v2.12.7 was released on March 25, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@netless/iframe-bridge"
            }), " to 2.0.5."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.6",
          id: "v2126",
          headingLevel: 2,
          value: "v2126",
          children: [_jsx(_components.p, {
            children: "v2.12.6 was released on March 25, 2021."
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "scaleIframeToFit"
            }), " method to the ", _jsx(_components.code, {
              children: "Displayer"
            }), " class to enable zooming in and out so that HTML5 files can be displayed completely on screen."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.5",
          id: "v2125",
          headingLevel: 2,
          value: "v2125",
          children: [_jsx(_components.p, {
            children: "v2.12.5 was released on March 25, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.a, {
              href: "https://github.com/netless-io/whiteboard-demo/tree/master/packages/cursor-tool",
              children: _jsx(_components.code, {
                children: "@netless/cursor-tool"
              })
            }), " to 0.0.7."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.3",
          id: "v2123",
          headingLevel: 2,
          value: "v2123",
          children: [_jsx(_components.p, {
            children: "v2.12.3 was released on March 20, 2021."
          }), _jsxs(_components.p, {
            children: ["This release changes the default value of ", _jsx(_components.code, {
              children: "disableNewPencil"
            }), " in the ", _jsx(_components.code, {
              children: "setDisableNewPencil"
            }), " method from ", _jsx(_components.code, {
              children: "false"
            }), " to ", _jsx(_components.code, {
              children: "true"
            }), " so that the stroke effect is disabled by default. This addresses the issue that the stroke effect is not supported by SDKs earlier than v2.2.12."]
          }), _jsx(_components.p, {
            children: "To enable the stroke effect properly, ensure that every user in the room is using one of the following SDKs:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Android SDK v2.12.3 or later"
            }), `
`, _jsx(_components.li, {
              children: "iOS SDK v2.12.3 or later"
            }), `
`, _jsx(_components.li, {
              children: "Web SDK v2.12.5 or later"
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.2",
          id: "v2122",
          headingLevel: 2,
          value: "v2122",
          children: [_jsx(_components.p, {
            children: "v2.12.2 was released on March 16, 2021."
          }), _jsx(_components.h4, {
            id: "new-features-11",
            children: "New features"
          }), _jsxs(_components.p, {
            children: ["This release adds the stroke effect to better display handwriting. Call ", _jsx(_components.code, {
              children: "setDisableNewPencil"
            }), " to enable or disable the stroke effect, and call ", _jsx(_components.code, {
              children: "isDisableNewPencil"
            }), " to see whether the stroke effect is enabled."]
          }), _jsx(_components.p, {
            children: "To enable the stroke effect properly, ensure that every user in the room is using one of the following SDKs:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Android SDK v2.12.2 or later"
            }), `
`, _jsx(_components.li, {
              children: "iOS SDK v2.12.3 or later"
            }), `
`, _jsx(_components.li, {
              children: "Web SDK v2.12.5 or later"
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-7",
            children: "Improvements"
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to v2.12.4 to improve the display logic of PPT files."]
          }), _jsx(_components.h4, {
            id: "issues-fixed-1",
            children: "Issues fixed"
          }), _jsxs(_components.p, {
            children: ["Fixed the crash problem caused by abnormal callbacks in live rooms in ", _jsx(_components.code, {
              children: "debug"
            }), " mode."]
          })]
        })]
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
        children: "This page tracks iOS release notes for the Whiteboard SDK."
      }), _jsx(_components.h2, {
        id: "reference-1",
        children: "Reference"
      }), _jsxs(CalloutContainer, {
        type: "info",
        children: [_jsx(CalloutTitle, {
          children: "Note"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "To ensure a consistent user experience across different platforms while enabling native access on each platform, the Whiteboard SDK for iOS is implemented by creating a wrapper for the Whiteboard SDK for Web, rather than being a completely native SDK. Therefore, each iOS SDK version by default includes the updates of the Web SDK version that it is built upon. The corresponding Web SDK version is provided in each iOS release note, so that you can refer to the relevant Web SDK release note for updates."
          })
        })]
      }), _jsxs(Accordions, {
        type: "multiple",
        openFirst: true,
        children: [_jsxs(Accordion, {
          title: "v2.16.112",
          id: "v216112",
          headingLevel: 2,
          value: "v216112",
          children: [_jsx(_components.p, {
            children: "Released on July 28, 2025."
          }), _jsx(_components.h4, {
            id: "new-features-12",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "High-performance whiteboard drawing tools"
            })
          }), _jsxs(_components.p, {
            children: ["This release introduces the ", _jsx(_components.code, {
              children: "appliance-plugin"
            }), " that provides a set of high-performance whiteboard drawing tools. To use it, install ", _jsx(_components.code, {
              children: "@netless/appliance-plugin"
            }), " and enable it with the ", _jsx(_components.code, {
              children: "WhiteSdkConfiguration.enableAppliancePlugin"
            }), " configuration option. For details, see the ", _jsxs(_components.a, {
              href: "https://github.com/netless-io/fastboard/blob/main/docs/zh/appliance-plugin.md",
              children: [_jsx(_components.code, {
                children: "appliance-plugin"
              }), " documentation"]
            }), "."]
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: [_jsx(_components.code, {
                    children: "@netless/appliance-plugin"
                  }), " is an external dependency and must be installed separately."]
                }), `
`, _jsx(_components.li, {
                  children: "To ensure consistent rendering of strokes, enable the plugin on all platforms (Web, Android, and iOS). Strokes drawn with the plugin will not appear on platforms where it is not enabled."
                }), `
`, _jsx(_components.li, {
                  children: "After enabling the plugin, historical whiteboard content is still visible but cannot be edited or upgraded. To avoid affecting the user experience, we recommend enabling the plugin on a new whiteboard. Disabling the plugin will remove content drawn with it."
                }), `
`]
              })
            })
          }), _jsx(_components.p, {
            children: "Once the plugin is enabled, you can:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Use the new laser pencil tool ", _jsx(_components.code, {
                children: "LASER_PENCIL"
              }), ". ", _jsx(_components.a, {
                href: "https://github.com/netless-io/fastboard/blob/main/docs/zh/appliance-plugin.md#%E6%96%B0%E5%8A%9F%E8%83%BD",
                children: "Learn more"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Use the ", _jsx(_components.code, {
                children: "WhiteMemberState.strokeOpacity"
              }), " property to set line transparency."]
            }), `
`, _jsxs(_components.li, {
              children: ["Use the ", _jsx(_components.code, {
                children: "WhiteMemberState.fillOpacity"
              }), " property to set fill transparency."]
            }), `
`, _jsxs(_components.li, {
              children: ["Use the ", _jsx(_components.code, {
                children: "WhiteMemberState.fillColor"
              }), " property to set fill color."]
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "PPT rendering error handling"
            })
          }), _jsxs(_components.p, {
            children: ["This version adds the ", _jsx(_components.code, {
              children: "SlideListener.onSlideError"
            }), " method for listening to PPT rendering errors. If an error occurs, you can call ", _jsx(_components.code, {
              children: "WhiteSdk.recoverSlide"
            }), " to recover rendering."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Auto focus behavior"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "WhiteSdkConfiguration.useWebKeyboardInjection"
            }), " property, which controls whether WKWebView is allowed to automatically gain input focus. This is useful for managing keyboard input and handling focus conflicts in complex app interfaces."]
          }), _jsx(_components.h4, {
            id: "api-changes-7",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "WhiteSdkConfiguration"
              }), ":", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "enableAppliancePlugin"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "useWebKeyboardInjection"
                  })
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "WhiteMemberState"
              }), ":", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "strokeOpacity"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "fillOpacity"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "fillColor"
                  })
                }), `
`]
              }), `
`]
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "onSlideError"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "recoverSlide"
              })
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.16.95",
          id: "v21695",
          headingLevel: 2,
          value: "v21695",
          children: [_jsx(_components.p, {
            children: "Released on July 28, 2025."
          }), _jsxs(CalloutContainer, {
            type: "info",
            children: [_jsx(CalloutTitle, {
              children: "Note"
            }), _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "The wrapped Web SDK has been upgraded to v2.16.51."
              })
            })]
          }), _jsx(_components.h4, {
            id: "new-features-13",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Domain preselection"
            })
          }), _jsxs(_components.p, {
            children: ["This version adds the ", _jsx(_components.code, {
              children: "WhiteSDK.prepareWhiteConnectionForAppId"
            }), " method to preselect an optimal access domain, which can improve the connection speed when users join a whiteboard room for the first time."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Whiteboard window style override"
            })
          }), _jsxs(_components.p, {
            children: ["This version adds the ", _jsx(_components.code, {
              children: "WhiteWindowParams.overwriteStyles"
            }), " method to override whiteboard window styles using CSS, allowing for customization of UI details."]
          }), _jsx(_components.h4, {
            id: "fixed-issues-8",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This version fixes the following issue:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "drawOnlyPencil"
              }), " does not work on iOS 17 and above."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "api-changes-8",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "prepareWhiteConnectionForAppId"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "overwriteStyles"
              })
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.16.88",
          id: "v21688",
          headingLevel: 2,
          value: "v21688",
          children: [_jsx(_components.p, {
            children: "Released on July 28, 2025."
          }), _jsxs(CalloutContainer, {
            type: "info",
            children: [_jsx(CalloutTitle, {
              children: "Note"
            }), _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "The wrapped Web SDK has been upgraded to v2.16.48."
              })
            })]
          }), _jsx(_components.h4, {
            id: "new-features-14",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Window apps management"
            })
          }), _jsxs(_components.p, {
            children: ["In the multi-window mode, the SDK supports inserting the PPT or whiteboard plugin as a window app. These are collectively referred to as window apps. Starting from this version, the ", _jsx(_components.code, {
              children: "WhiteRoom"
            }), " class introduces the following methods to manage window apps in the multi-window mode:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "addApp"
              }), ": Inserts a window app and returns the app ID."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "closeApp"
              }), ": Closes the window of the specified window app."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "focusApp"
              }), ": Switches the focused window to the window of the specified window app."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "queryApp"
              }), ": Queries the information of the specified window app."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "queryAllApps"
              }), ": Queries the information of all current window apps."]
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Whiteboard tools customization"
            })
          }), _jsxs(_components.p, {
            children: ["The ", _jsx(_components.code, {
              children: "WhiteMemberState"
            }), " and ", _jsx(_components.code, {
              children: "WhiteReadonlyMemberState"
            }), " classes introduce the following properties for customizing whiteboard tools:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "textColor"
              }), ": Modifies the text color in the text tool."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "pencilEraserSize"
              }), ": Modifies the size of the pencil eraser tool."]
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "New PPT rendering configurations"
            })
          }), _jsxs(_components.p, {
            children: ["The ", _jsx(_components.code, {
              children: "WhiteSlideAppParams"
            }), " class introduces the following properties for PPT rendering configurations:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "minFPS"
              }), ": Sets the minimum frame rate for PPT animations."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "maxFPS"
              }), ": Sets the maximum frame rate for PPT animations."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "resolution"
              }), ": Sets the rendering resolution multiplier for PPT."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "maxResolutionLevel"
              }), ": Sets the maximum resolution for PPT."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "bgColor"
              }), ": Sets the background color for PPT animations."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "forceCanvas"
              }), ": Specifies whether to force 2D rendering. It is disabled by default."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "enableGlobalClick"
              }), ": Specifies whether to enable executing the next step function by clicking on the PPT screen. It is enabled by default."]
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Text update"
            })
          }), _jsxs(_components.p, {
            children: ["The ", _jsx(_components.code, {
              children: "updateText"
            }), " method is added to update the text inserted using the ", _jsx(_components.code, {
              children: "insertText"
            }), " method."]
          }), _jsx(_components.h4, {
            id: "fixed-issues-9",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This version fixes the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "WKWebView"
              }), " could cause failure to open ", _jsx(_components.code, {
                children: "indexDB"
              }), " under certain exceptional circumstances."]
            }), `
`, _jsxs(_components.li, {
              children: ["After configuring ", _jsx(_components.code, {
                children: "WhiteWindowParams.fullscreen"
              }), ", the app occasionally could not be displayed in full screen on the second launch."]
            }), `
`, _jsxs(_components.li, {
              children: ["After configuring ", _jsx(_components.code, {
                children: "WhiteWindowParams.fullscreen"
              }), ", there could be a brief flicker."]
            }), `
`, _jsx(_components.li, {
              children: "Occasional flickering when using fade-in and fade-out animations."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "api-changes-9",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "addApp"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "closeApp"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "focusApp"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "queryApp"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "queryAllAppsWithCompletionHandler"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "WhiteAppParam"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "WhiteAppSyncAttributes"
              })
            }), `
`, _jsxs(_components.li, {
              children: ["The following in ", _jsx(_components.code, {
                children: "WhiteMemberState"
              }), " and ", _jsx(_components.code, {
                children: "WhiteReadonlyMemberState"
              }), ":", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "textColor"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "pencilEraserSize"
                  })
                }), `
`]
              }), `
`]
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "updateText"
              })
            }), `
`, _jsxs(_components.li, {
              children: ["The following in ", _jsx(_components.code, {
                children: "WhiteSlideAppParams"
              }), ":", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "minFPS"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "maxFPS"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "resolution"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "maxResolutionLevel"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "bgColor"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "forceCanvas"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "enableGlobalClick"
                  })
                }), `
`]
              }), `
`]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.16.62",
          id: "v21662",
          headingLevel: 2,
          value: "v21662",
          children: [_jsx(_components.p, {
            children: "v2.16.62 was released on January 19, 2024."
          }), _jsxs(CalloutContainer, {
            type: "info",
            children: [_jsx(CalloutTitle, {
              children: "Note"
            }), _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "The wrapped Web SDK has been upgraded to v2.16.42."
              })
            })]
          }), _jsx(_components.h4, {
            id: "compatibility-changes-4",
            children: "Compatibility changes"
          }), _jsxs(_components.p, {
            children: ["This version deprecates the existing London data center (", _jsx(_components.code, {
              children: "gb-lon"
            }), ") in the Whiteboard Data Center and introduces a new data center in Frankfurt, Europe (", _jsx(_components.code, {
              children: "eu"
            }), "), whose service covers Europe. If you have set ", _jsx(_components.code, {
              children: "gb-lon"
            }), " in the previous version, please switch to", _jsx(_components.code, {
              children: " eu"
            }), " after upgrading to this version and enable this data center in Agora Console."]
          }), _jsx(_components.h4, {
            id: "new-features-15",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "PPT Volume Control"
            })
          }), _jsxs(_components.p, {
            children: ["This version adds the ", _jsx(_components.code, {
              children: "getSlideVolumeWithCompletionHandler"
            }), " and ", _jsx(_components.code, {
              children: "updateSlideVolume "
            }), "methods to retrieve and update the volume of audio in PPT slides."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "PPT URL Intercept and Replacement"
            })
          }), _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "WhiteSdkConfiguration"
            }), " adds a new configuration option, ", _jsx(_components.code, {
              children: "enableSlideInterrupterAPI"
            }), ", to enable intercepting and replacing URLs of PPT resources. This feature can be used to encrypt PPT resources uploaded by users and protect their privacy. Once enabled, you can set a callback object by calling ", _jsx(_components.code, {
              children: "WhiteSDK.setSlideDelegate"
            }), " and add the logic for replacing PPT URLs in the ", _jsx(_components.code, {
              children: "slideUrlInterrupter: url: completionHandler"
            }), " callback. This achieves the functionality of intercepting and replacing PPT URLs."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "PPT Rendering Notification"
            })
          }), _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "WhiteSdkConfiguration"
            }), " adds the ", _jsx(_components.code, {
              children: "whiteSlideAppParams"
            }), " configuration option for displaying configurations related to ", _jsx(_components.a, {
              href: "https://github.com/netless-io/netless-app/tree/master/packages/app-slide",
              children: "@netless/app-slide"
            }), " rendering. Currently, it supports configuring ", _jsx(_components.code, {
              children: "WhiteSlideAppParams.showRenderError"
            }), " to show or hide rendering error notifications."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Custom API Server Domain"
            })
          }), _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "WhiteSdkConfiguration"
            }), " adds the ", _jsx(_components.code, {
              children: "apiHosts"
            }), " configuration option to configure a list of API server domains for the whiteboard, which can be used for server proxy implementation."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Custom Module Source"
            })
          }), _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "RoomParams"
            }), " adds the ", _jsx(_components.code, {
              children: "modulesOrigin"
            }), " configuration option to configure the address for requesting whiteboard module data."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Document Operation Events"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "dispatchDocsEvent"
            }), " method to send events to the inserted PDF/PPTX documents in the whiteboard, allowing control over document page flipping, page navigation, and slide animation playback."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Window Fullscreen"
            })
          }), _jsxs(_components.p, {
            children: ["A new property, ", _jsx(_components.code, {
              children: "WindowParams.fullscreen"
            }), ", is added to control whether the window is displayed in fullscreen mode."]
          }), _jsx(_components.h4, {
            id: "api-changes-10",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "getSlideVolumeWithCompletionHandler"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "updateSlideVolume"
              })
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "WhiteSdkConfiguration"
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "enableSlideInterrupterAPI"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "whiteSlideAppParams"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "apiHosts"
                  })
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "setSlideDelegate"
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "WhiteSlideDelegate"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "slideUrlInterrupter: url: completionHandler"
                  })
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "dispatchDocsEvent"
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "WhiteWindowDocsEventOptions"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "WhiteWindowDocsEventKey"
                  })
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "modulesOrigin"
              }), " in ", _jsx(_components.code, {
                children: "RoomParams"
              })]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "modulesOrigin"
              }), " in ", _jsx(_components.code, {
                children: "PlayerConfiguration"
              })]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "fullscreen"
              }), " in ", _jsx(_components.code, {
                children: "WhiteWindowParams"
              })]
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Deprecated"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "WhiteRegionGB"
              }), " in ", _jsx(_components.code, {
                children: "WhiteRegionKey"
              }), ", use ", _jsx(_components.code, {
                children: "WhiteRegionEU"
              }), " instead"]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "WhitePptParams"
              }), ", use ", _jsx(_components.code, {
                children: "WhiteSlideAppParams"
              }), " instead"]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.16.46",
          id: "v21646",
          headingLevel: 2,
          value: "v21646",
          children: [_jsx(_components.p, {
            children: "v2.16.46 was released on December 2, 2022."
          }), _jsxs(CalloutContainer, {
            type: "info",
            children: [_jsx(CalloutTitle, {
              children: "Note"
            }), _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "The wrapped Web SDK has been upgraded to v2.16.35."
              })
            })]
          }), _jsx(_components.h4, {
            id: "new-features-16",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "1. Whiteboard tool updates"
            })
          }), _jsx(_components.p, {
            children: "This release adds new features for the following whiteboard tools:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Pencil: Adds support for drawing dotted lines by setting ", _jsx(_components.code, {
                children: "room.memberState.dottedLine"
              }), " as ", _jsx(_components.code, {
                children: "true"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Text: Adds support for directly selecting and editing whiteboard text by setting ", _jsx(_components.code, {
                children: "room.memberState.textCanSelectText"
              }), " as ", _jsx(_components.code, {
                children: "true"
              }), "."]
            }), `
`]
          }), _jsx(_components.p, {
            children: "In addition, this release adds a pencil eraser tool to erase any part of a pencil stroke."
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "2. Floatbar"
            })
          }), _jsx(_components.p, {
            children: `This release adds the floatbar feature. The floatbar pops up when selecting any whiteboard item, which enables users to
easily edit these whiteboard items. For example, when selecting a stroke, the floatbar enables the user to remove it or change its color.
When selecting some text, the floatbar enables the user to adjust its style or change its typeface.`
          }), _jsxs(_components.p, {
            children: ["Modify the ", _jsx(_components.code, {
              children: "floatBar"
            }), " parameter in the ", _jsx(_components.code, {
              children: "WhiteRoomConfig"
            }), " interface to enable floatbar."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "3. Take screenshots"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds ", _jsx(_components.code, {
              children: "getLocalSnapShotWithCompletion"
            }), " in the ", _jsx(_components.code, {
              children: "WhiteDisplayer"
            }), " class to take a screenshot of the current whiteboard page."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "4. Request slide log"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "requestSlideLogToFilePath"
            }), " method in the ", _jsx(_components.code, {
              children: "WhiteSDK"
            }), " class to write the slide log into a specified file."]
          }), _jsx(_components.h4, {
            id: "improvements-8",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release provides the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [`The SDK now automatically tries to recover after the whiteboard crashes due to insufficient web memory. If you have previously
configured `, _jsx(_components.code, {
                children: "navigationDelegate"
              }), `, you need to undo that to apply this optimization. In addition, this release adds the
`, _jsx(_components.code, {
                children: "startRecoveringFromMemoryIssues"
              }), " and ", _jsx(_components.code, {
                children: "endRecoveringFromMemoryIssues"
              }), ` callbacks to report when the SDK starts to recover and
finishes its recovery, respectively.`]
            }), `
`, _jsxs(_components.li, {
              children: ["You can now pause or resume audio mixing or playback in dynamic PPT files with the ", _jsx(_components.code, {
                children: "pauseAudioMixing"
              }), " and ", _jsx(_components.code, {
                children: "resumeAudioMixing"
              }), " methods."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-10",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release fixes the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "The creation of the whiteboard app sometimes failed after reconnection."
            }), `
`, _jsx(_components.li, {
              children: "When creating the whiteboard app, synchronizing the initial height and width sometimes failed."
            }), `
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "WhiteBroadcastState"
              }), " sometimes failed to initialize when joining the room."]
            }), `
`, _jsxs(_components.li, {
              children: ["When using a non-ApplePencil stylus on the iPad, calling ", _jsx(_components.code, {
                children: "drawOnlyPencil"
              }), " sometimes caused the whiteboard to crash."]
            }), `
`, _jsxs(_components.li, {
              children: ["Calling ", _jsx(_components.code, {
                children: "drawOnlyPencil"
              }), " sometimes reported an error when the user did not have write permissions."]
            }), `
`, _jsxs(_components.li, {
              children: ["Switching the readable/writable state sometimes caused the configuration to be lost in the ", _jsx(_components.code, {
                children: "disableCameraTransform"
              }), " of ", _jsx(_components.code, {
                children: "mainView"
              }), "."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "api-changes-11",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["New properties in the ", _jsx(_components.code, {
                children: "MemberState"
              }), " class: ", _jsx(_components.code, {
                children: "dottedLine"
              }), " and ", _jsx(_components.code, {
                children: "textCanSelectText"
              })]
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "pauseAudioMixing"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "resumeAudioMixing"
              })
            }), `
`, _jsxs(_components.li, {
              children: ["New parameter in the ", _jsx(_components.code, {
                children: "WhiteRoomConfig"
              }), " interface: ", _jsx(_components.code, {
                children: "floatBar"
              })]
            }), `
`, _jsxs(_components.li, {
              children: ["New type in ", _jsx(_components.code, {
                children: "WhiteApplianceNameKey"
              }), ": ", _jsx(_components.code, {
                children: "AppliancePencilEraser"
              })]
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "requestSlideLogToFilePath"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "startRecoveringFromMemoryIssues"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "endRecoveringFromMemoryIssues"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "getLocalSnapShotWithCompletion"
              })
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.16.24",
          id: "v21624",
          headingLevel: 2,
          value: "v21624",
          children: [_jsx(_components.p, {
            children: "v2.16.24 was released on September 13, 2022."
          }), _jsx(_components.h4, {
            id: "new-features-17",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "1. Inserting text"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "insertText"
            }), " method to ", _jsx(_components.code, {
              children: "WhiteRoom"
            }), " for inserting text at a specified position."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "2. Disabling the stroke effect"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "disableNewPencilStroke"
            }), " property to ", _jsx(_components.code, {
              children: "WhiteSdkConfiguration"
            }), " to enable or disable the stroke effect of the pencil. The default value of ", _jsx(_components.code, {
              children: "disableNewPencilStroke"
            }), " is ", _jsx(_components.code, {
              children: "YES"
            }), ", and the SDK enables the stroke effect immediately when you call ", _jsx(_components.code, {
              children: "disableNewPencil(NO)"
            }), " to enable the new pencil. To disable the stroke effect after setting ", _jsx(_components.code, {
              children: "disableNewPencil(NO)"
            }), ", you can call ", _jsx(_components.code, {
              children: "disableNewPencilStroke(YES)"
            }), "."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "3. Getting the scene information"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "getSceneFromScenePath"
            }), " method to the ", _jsx(_components.code, {
              children: "WhiteDisplayer"
            }), " class, which supports using the scene path to get the information about a specified scene."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "4. Setting whether to only allow drawing and writing using the Apple Pencil"
            })
          }), _jsxs(_components.p, {
            children: ["This release supports setting whether to only allow users to draw and write on the whiteboard using the Apple Pencil on iPad. Before joining a whiteboard room, you can set this by using the ", _jsx(_components.code, {
              children: "drawOnlyApplePencil"
            }), " property in ", _jsx(_components.code, {
              children: "WhiteRoomConfig"
            }), "; after joining a whiteboard room, you can call the ", _jsx(_components.code, {
              children: "setDrawOnlyApplePencil"
            }), " method in ", _jsx(_components.code, {
              children: "WhiteRoom"
            }), " to change the setting."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "5. Support for YYKit"
            })
          }), _jsxs(_components.p, {
            children: ["The Agora Whiteboard SDK for iOS uses ", _jsx(_components.a, {
              href: "https://github.com/ibireme/YYModel",
              children: "YYModel"
            }), " for data type conversion by default. As of this release, the SDK adds support for YYKit. To use ", _jsx(_components.a, {
              href: "https://github.com/ibireme/YYKit",
              children: "YYKit"
            }), ", you need to add the following line to the ", _jsx(_components.code, {
              children: "Podfile"
            }), " file to add the dependency:"]
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
              icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
              children: _jsx(_components.code, {
                children: _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "pod"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'Whiteboard/Whiteboard-YYKit'"
                  })]
                })
              })
            })
          }), _jsx(_components.h4, {
            id: "improvements-9",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release provides the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Adds tween animation for the new pencil. This allows the SDK to automatically insert frames between keyframes when a user draws or writes with the new pencil, so that remote users see a smoother drawing process. To experience this improvement, ensure that you have called ", _jsx(_components.code, {
                children: "setDisableNewPencil(false)"
              }), " to enable the new pencil."]
            }), `
`, _jsx(_components.li, {
              children: "Optimizes the reconnecting mechanism in weak network environment to reduce unnecessary reconnections."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-11",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Occasionally, the contents on the whiteboard appeared shifted and overshadowed after users zoomed or moved their view."
            }), `
`, _jsx(_components.li, {
              children: "Occasionally, users could not switch the pages of a dynamic PPT slide after an SDK reconnection."
            }), `
`, _jsx(_components.li, {
              children: "The contents on the whiteboard occasionally were not fully displayed when users joined a whiteboard room that already had."
            }), `
`, _jsx(_components.li, {
              children: "A memory leak sometimes occurred after an SDK reconnection."
            }), `
`, _jsxs(_components.li, {
              children: ["An error sometimes occurred when calling ", _jsx(_components.code, {
                children: "setWritable"
              }), " repeatedly."]
            }), `
`, _jsxs(_components.li, {
              children: ["The virtual keyboard did not pop up when clicking ", _jsx(_components.code, {
                children: "text"
              }), " on iOS browsers."]
            }), `
`, _jsx(_components.li, {
              children: "When a user switched to read-only mode, then switched back to read-write mode and wrote, remote users saw that user's cursor as fixed."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "api-changes-12",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "insertText"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "getSceneFromScenePath"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "setDrawOnlyApplePencil"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "drawOnlyApplePencil"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "disableNewPencilStroke"
              })
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.15.23",
          id: "v21523",
          headingLevel: 2,
          value: "v21523",
          children: [_jsx(_components.p, {
            children: "v2.15.23 was released on January 21, 2022."
          }), _jsx(_components.p, {
            children: "This release provides the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "white-web-sdk"
              }), " to v2.15.16."]
            }), `
`, _jsxs(_components.li, {
              children: ["Optimizes ", _jsx(_components.code, {
                children: "getSceneSnapshotImage"
              }), " and ", _jsx(_components.code, {
                children: "getScenePreviewImage"
              }), " to ensure the images inserted in the scene are displayed correctly in the screenshot."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.15.0",
          id: "v2150-1",
          headingLevel: 2,
          value: "v2150-1",
          children: [_jsx(_components.p, {
            children: "v2.15.0 was released on November 16, 2021."
          }), _jsx(_components.h4, {
            id: "compatibility-changes-5",
            children: "Compatibility changes"
          }), _jsxs(_components.p, {
            children: ["To simplify APIs, this release deletes the ", _jsx(_components.code, {
              children: "joinRoomWithUuid"
            }), " and ", _jsx(_components.code, {
              children: "joinRoomWithRoomUuid"
            }), " methods, and keeps only the ", _jsx(_components.code, {
              children: "joinRoomWithConfig"
            }), " method."]
          }), _jsxs(_components.p, {
            children: ["At the same time, to help you manage users in a room, this release adds the ", _jsx(_components.code, {
              children: "uid"
            }), " parameter in ", _jsx(_components.code, {
              children: "initWithUuid"
            }), " of the ", _jsx(_components.code, {
              children: "WhiteRoomConfig"
            }), " class, for setting the unique identifier of a user."]
          }), _jsxs(_components.p, {
            children: ["If you upgrade the SDK to v2.15.0 or later, to join a room, you must call ", _jsx(_components.code, {
              children: "joinRoomWithConfig"
            }), ", and ensure that you pass in a string ", _jsx(_components.code, {
              children: "uid"
            }), " in ", _jsx(_components.code, {
              children: "initWithUuid"
            }), " when initializing the ", _jsx(_components.code, {
              children: "WhiteRoomConfig"
            }), " object. The ", _jsx(_components.code, {
              children: "uid"
            }), " of each user cannot be longer than 1024 bytes and must be unique in the same room. For more information, see ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/get-started-sdk#join-the-interactive-whiteboard-room-from-your-app-client",
              children: "Join a Whiteboard Room"
            }), "."]
          }), _jsx(_components.h4, {
            id: "new-features-18",
            children: "New features"
          }), _jsx(_components.p, {
            children: "This release adds support for converting and displaying the following PowerPoint (PPT) features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Action buttons"
            }), `
`, _jsx(_components.li, {
              children: "Slide masters added with animation effects."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-10",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release provides the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "white-web-sdk"
              }), " to v2.15.1."]
            }), `
`, _jsx(_components.li, {
              children: "Further optimizes the writing experience."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-12",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release has fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The following issues with displaying dynamic PPT files in the whiteboard were fixed:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "The images were displaced occasionally."
                }), `
`, _jsx(_components.li, {
                  children: "Failure to read certain styles caused the screen to go blank."
                }), `
`, _jsx(_components.li, {
                  children: "The rotation angle and color were incorrect for some text."
                }), `
`, _jsx(_components.li, {
                  children: "Occasionally, elements with an animation effect were not displayed"
                }), `
`, _jsx(_components.li, {
                  children: "The animation of some text was displayed incorrectly."
                }), `
`]
              }), `
`]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "api-changes-13",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Modified"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "initWithUuid:roomToken"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "initWithUuid:roomToken:userPayload"
              })
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Deleted"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "initWithUuid:roomToken:memberInfo"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "joinRoomWithUuid"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "joinRoomWithRoomUuid"
              })
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.14.1",
          id: "v2141",
          headingLevel: 2,
          value: "v2141",
          children: [_jsx(_components.p, {
            children: "v2.14.1 was released on November 11, 2021."
          }), _jsx(_components.h4, {
            id: "compatibility-changes-6",
            children: "Compatibility changes"
          }), _jsx(_components.p, {
            children: "As of this release, the minimum platform version supported by the Agora Interactive Whiteboard iOS SDK changes from iOS 9 to iOS 10."
          }), _jsx(_components.h4, {
            id: "improvements-11",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release provides the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "white-web-sdk"
              }), " to v2.14.4."]
            }), `
`, _jsx(_components.li, {
              children: "Further optimizes the writing performance."
            }), `
`, _jsx(_components.li, {
              children: "Optimizes the shape of handwriting."
            }), `
`, _jsxs(_components.li, {
              children: ["Improves the accuracy of the ", _jsx(_components.code, {
                children: "firePhaseChanged"
              }), " callback."]
            }), `
`, _jsx(_components.li, {
              children: "Hides elements that should not be displayed in a slide master using the file-conversion function."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-13",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release has fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "After switching to the hand tool, users could not switch back to the cursor."
            }), `
`, _jsx(_components.li, {
              children: "Occasionally, the handwriting disappeared suddenly during writing."
            }), `
`, _jsx(_components.li, {
              children: "Occasionally, the handwriting had unnatural teardrop-like strokes during writing."
            }), `
`, _jsx(_components.li, {
              children: "When the user edited text after manually scaling the text box, the text box and text reverted to the original size."
            }), `
`, _jsx(_components.li, {
              children: "The view became incorrect after the window size changed on some browsers and devices."
            }), `
`, _jsx(_components.li, {
              children: "When the eraser was moved quickly, the eraser icon was not enlarged and the fast deleting function did not work."
            }), `
`, _jsx(_components.li, {
              children: "Occasionally, multiple audio files in dynamic PPT slides played simultaneously."
            }), `
`, _jsx(_components.li, {
              children: "Animations were displayed incorrectly after a dynamic PPT slide returned to the previous page."
            }), `
`, _jsx(_components.li, {
              children: "Occasionally, a text box with an animation effect was flipped in mirror mode."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.13.19",
          id: "v21319",
          headingLevel: 2,
          value: "v21319",
          children: [_jsx(_components.p, {
            children: "v2.13.19 was released on August 20, 2021."
          }), _jsx(_components.h4, {
            id: "new-features-19",
            children: "New features"
          }), _jsx(_components.p, {
            children: "This release has the following new features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Adds the ", _jsx(_components.code, {
                  children: "logger"
                }), " callback in ", _jsx(_components.code, {
                  children: "WhiteCommonCallbackDelegate"
                }), ", with which you can get the local debug logs output by the SDK."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Adds support for converting and displaying the following PowerPoint (PPT) features:"
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "Add animations to text per paragraph."
                }), `
`, _jsx(_components.li, {
                  children: "Animate text by word or by letter."
                }), `
`, _jsx(_components.li, {
                  children: "All preset table styles."
                }), `
`, _jsx(_components.li, {
                  children: "Fonts smaller than 9 pt (12 px)."
                }), `
`]
              }), `
`]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-12",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release has the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "white-web-sdk"
              }), " to 2.13.17."]
            }), `
`, _jsxs(_components.li, {
              children: ["To improve security, disables the ", _jsx(_components.code, {
                children: "allowUniversalAccessFromFileURLs"
              }), " function inside the whiteboard. After turning off this function, when you call ", _jsx(_components.code, {
                children: "getSceneSnapshotImage"
              }), ", cross-origin images might not be displayed in the generated screenshots."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-14",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Occasionally, the room was stuck in the connecting state when the user joined a room."
            }), `
`, _jsx(_components.li, {
              children: "The cursor disappeared for some users after the SDK reconnected."
            }), `
`, _jsx(_components.li, {
              children: "The status of some plugins was incorrect after the SDK reconnected."
            }), `
`, _jsxs(_components.li, {
              children: ["The hand tool was not restricted by the set ", _jsx(_components.code, {
                children: "WhiteCameraBound"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["On some high-resolution devices, when the user was in the ", _jsx(_components.code, {
                children: "Follower"
              }), " of ", _jsx(_components.code, {
                children: "setViewMode"
              }), " view mode, the center point of the view was slightly shifted."]
            }), `
`, _jsxs(_components.li, {
              children: ["The following issues with displaying dynamic PPT files in the whiteboard were fixed:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "Paragraph spacing was displayed incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "Failed to split text into columns."
                }), `
`, _jsx(_components.li, {
                  children: "The slide background fill of shapes was displayed incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "Hanging indentation was displayed incorrectly."
                }), `
`, _jsxs(_components.li, {
                  children: ["The slide was displayed incorrectly when the user called ", _jsx(_components.code, {
                    children: "pptPreviousStep"
                  }), " to roll back a slide."]
                }), `
`, _jsx(_components.li, {
                  children: "The numbering of text displayed incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "Some equations were displayed incompletely after conversion."
                }), `
`, _jsx(_components.li, {
                  children: "Some lines broke incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "Text written from right to left (such as Arabic) was displayed incorrectly."
                }), `
`]
              }), `
`]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.13.15",
          id: "v21315",
          headingLevel: 2,
          value: "v21315",
          children: [_jsx(_components.p, {
            children: "v2.13.15 was released on July 23 2021."
          }), _jsx(_components.h4, {
            id: "new-features-20",
            children: "New features"
          }), _jsx(_components.p, {
            children: "To improve the dynamic file conversion function, this release adds support for converting and displaying the following PowerPoint (PPT) features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Animation effect > Reverse Path Direction"
            }), `
`, _jsx(_components.li, {
              children: "Vertical Text Box"
            }), `
`, _jsx(_components.li, {
              children: "Microsoft Equation Editor 3.0"
            }), `
`, _jsx(_components.li, {
              children: "Hide background graphic in a slide master"
            }), `
`, _jsx(_components.li, {
              children: "Change the color of pictures"
            }), `
`, _jsxs(_components.li, {
              children: ["The following picture effects are now supported:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "Metal Frame"
                }), `
`, _jsx(_components.li, {
                  children: "Soft Edge Rectangle"
                }), `
`, _jsx(_components.li, {
                  children: "Double Frame, Black"
                }), `
`, _jsx(_components.li, {
                  children: "Thick Matte, Black"
                }), `
`, _jsx(_components.li, {
                  children: "Simple Frame, Black"
                }), `
`, _jsx(_components.li, {
                  children: "Moderate Frame, Black"
                }), `
`, _jsx(_components.li, {
                  children: "Center Shadow Rectangle"
                }), `
`, _jsx(_components.li, {
                  children: "Soft Edge Oval"
                }), `
`, _jsx(_components.li, {
                  children: "Metal Rounded Rectangle"
                }), `
`, _jsx(_components.li, {
                  children: "Metal Oval"
                }), `
`]
              }), `
`]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-13",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release has the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "white-web-sdk"
              }), " to 2.13.11."]
            }), `
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "@netless/video-js-plugin"
              }), " to 0.3.3."]
            }), `
`, _jsx(_components.li, {
              children: "Reduces CPU usage during the playback of animations in dynamic PPT files."
            }), `
`, _jsx(_components.li, {
              children: "Improves the smoothness of writing and drawing on the whiteboard."
            }), `
`, _jsx(_components.li, {
              children: "Optimizes the timestamp synchronization algorithm to reduce time differences."
            }), `
`, _jsx(_components.li, {
              children: "Supports printing logs on scene changes."
            }), `
`, _jsxs(_components.li, {
              children: ["Adds the ", _jsx(_components.code, {
                children: "previewURL"
              }), " parameter in ", _jsx(_components.code, {
                children: "WhitePptPage"
              }), ", which supports displaying dynamic PPT previews in the whiteboard. See ", _jsx(_components.code, {
                children: "API reference"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Deprecates the ", _jsx(_components.code, {
                children: "backgroundColor"
              }), " property in the ", _jsx(_components.code, {
                children: "WhiteDisplayer"
              }), " class. Instead, this release optimizes the implementation of the ", _jsx(_components.code, {
                children: "WhiteboardView"
              }), " class, which allows you to use the ", _jsx(_components.code, {
                children: "backgroundColor"
              }), " property of the ", _jsx(_components.code, {
                children: "UIView"
              }), " class to modify the background color of the whiteboard. See ", _jsx(_components.a, {
                href: "https://developer.apple.com/documentation/uikit/uiview/1622591-backgroundcolor",
                children: "backgroundcolor"
              }), "."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-15",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "The contents on the whiteboard occasionally became unclear when the user adjusted the view."
            }), `
`, _jsx(_components.li, {
              children: "Users of the Android SDK occasionally failed to draw the first line after joining the room."
            }), `
`, _jsxs(_components.li, {
              children: ["The method call of ", _jsx(_components.code, {
                children: "refreshViewSize"
              }), " did not take effect occasionally."]
            }), `
`, _jsxs(_components.li, {
              children: ["The following issues with displaying dynamic PPT files in the whiteboard were fixed:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "Animations did not play in the set order."
                }), `
`, _jsx(_components.li, {
                  children: "Animations did not disappear when playback finished."
                }), `
`, _jsx(_components.li, {
                  children: "Table height was displayed incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "Pictures inserted in content placeholders failed to display."
                }), `
`, _jsx(_components.li, {
                  children: "Some shapes were rendered incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "The text was incorrectly indented."
                }), `
`, _jsx(_components.li, {
                  children: "Animation triggers did not work."
                }), `
`, _jsx(_components.li, {
                  children: "Picture transparency was incorrect."
                }), `
`]
              }), `
`]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.13.4",
          id: "v2134-1",
          headingLevel: 2,
          value: "v2134-1",
          children: [_jsx(_components.p, {
            children: "v2.13.4 was released on June 15, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.13.4."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.13.2",
          id: "v2132-1",
          headingLevel: 2,
          value: "v2132-1",
          children: [_jsx(_components.p, {
            children: "v2.13.2 was released on June 11, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.13.3."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.13.1",
          id: "v2131-1",
          headingLevel: 2,
          value: "v2131-1",
          children: [_jsx(_components.p, {
            children: "v2.13.1 was released on June 11, 2021."
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Improvement"
            })
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.13.2."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Issue fixed"
            })
          }), _jsxs(_components.p, {
            children: ["This release fixed the issue that when ", _jsx(_components.code, {
              children: "disableDeviceInputs"
            }), " is set as ", _jsx(_components.code, {
              children: "true"
            }), ", the user might still be able to operate the iframe plugin."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.33",
          id: "v21233-1",
          headingLevel: 2,
          value: "v21233-1",
          children: [_jsx(_components.p, {
            children: "v2.12.33 was released on June 8, 2021."
          }), _jsx(_components.p, {
            children: "This release fixed the following issue: If the user in host mode zooms in or out on the HTML5 file while using the clicker tool, users in follower mode saw incomplete display of file content."
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.32",
          id: "v21232-1",
          headingLevel: 2,
          value: "v21232-1",
          children: [_jsx(_components.p, {
            children: "v2.12.32 was released on June 7, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.a, {
              href: "https://github.com/netless-io/whiteboard-demo/tree/master/packages/cursor-tool",
              children: _jsx(_components.code, {
                children: "@netless/cursor-tool"
              })
            }), " to 0.1.0 and ", _jsx(_components.code, {
              children: "@netless/iframe-bridge"
            }), " to 2.1.2."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.31",
          id: "v21231-1",
          headingLevel: 2,
          value: "v21231-1",
          children: [_jsx(_components.p, {
            children: "v2.12.31 was released on June 4, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates  ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.12.21 and ", _jsx(_components.a, {
              href: "https://www.npmjs.com/package/@netless/video-js-plugin",
              children: _jsx(_components.code, {
                children: "@netless/video-js-plugin"
              })
            }), " to 0.1.5."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.30",
          id: "v21230-1",
          headingLevel: 2,
          value: "v21230-1",
          children: [_jsx(_components.p, {
            children: "v2.12.30 was released on June 2, 2021."
          }), _jsxs(_components.p, {
            children: ["This release fixed the video display issue of ", _jsx(_components.code, {
              children: "@netless/video-js-plugin"
            }), "."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.29",
          id: "v21229-1",
          headingLevel: 2,
          value: "v21229-1",
          children: [_jsx(_components.p, {
            children: "v2.12.29 was released on June 1, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.a, {
              href: "https://www.npmjs.com/package/@netless/video-js-plugin",
              children: _jsx(_components.code, {
                children: "@netless/video-js-plugin"
              })
            }), " to 0.1.3 to fix the incompatibility issue between the ", _jsx(_components.code, {
              children: "video-js-plugin"
            }), " and earlier versions of iOS WebView."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.28",
          id: "v21228-1",
          headingLevel: 2,
          value: "v21228-1",
          children: [_jsx(_components.p, {
            children: "v2.12.28 was released on May 25, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.a, {
              href: "https://github.com/netless-io/whiteboard-demo/tree/master/packages/cursor-tool",
              children: _jsx(_components.code, {
                children: "@netless/cursor-tool"
              })
            }), " to 0.0.9."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.27",
          id: "v21227-1",
          headingLevel: 2,
          value: "v21227-1",
          children: [_jsx(_components.p, {
            children: "v2.12.27 was released on May 24, 2021."
          }), _jsx(_components.h4, {
            id: "new-features-21",
            children: "New features"
          }), _jsxs(_components.p, {
            children: ["This release integrates ", _jsx(_components.a, {
              href: "https://www.npmjs.com/package/@netless/video-js-plugin",
              children: _jsx(_components.code, {
                children: "@netless/video-js-plugin"
              })
            }), ", which is used by an iOS client to watch video played on the whiteboard on a Web client. Supported file formats include M3U8 and others."]
          }), _jsx(_components.h4, {
            id: "improvement-1",
            children: "Improvement"
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), "  to 2.12.20."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.26",
          id: "v21226-1",
          headingLevel: 2,
          value: "v21226-1",
          children: [_jsx(_components.p, {
            children: "v2.12.26 was released on May 20, 2021."
          }), _jsx(_components.p, {
            children: "This release has the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Adds ", _jsx(_components.code, {
                children: "ApplianceClicker"
              }), " to ", _jsx(_components.code, {
                children: "WhiteApplianceNameKey"
              }), " for interacting with HTML5 files."]
            }), `
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "white-web-sdk"
              }), " to 2.12.19."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.25",
          id: "v21225-1",
          headingLevel: 2,
          value: "v21225-1",
          children: [_jsx(_components.p, {
            children: "v2.12.25 was released on May 17, 2021."
          }), _jsx(_components.p, {
            children: "This release has the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Enables server-side typesetting (", _jsx(_components.code, {
                children: "useServerWrap"
              }), ") by default. When server-side typesetting is enabled, the size of font files are automatically reduced for faster rendering."]
            }), `
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "white-web-sdk"
              }), " to 2.12.18."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.24",
          id: "v21224-1",
          headingLevel: 2,
          value: "v21224-1",
          children: [_jsx(_components.p, {
            children: "v2.12.24 was released on May 13, 2021."
          }), _jsx(_components.p, {
            children: "This release adds the following features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Adds ", _jsx(_components.code, {
                children: "ApplianceShape"
              }), " to ", _jsx(_components.code, {
                children: "WhiteApplianceNameKey"
              }), " for setting the shape tool. Supported shape types include triangle, rhombus, pentagram, and speech balloon."]
            }), `
`, _jsxs(_components.li, {
              children: ["Adds the ", _jsx(_components.code, {
                children: "syncBlockTimestamp"
              }), " method to the ", _jsx(_components.code, {
                children: "Room"
              }), " class. You can use this method to set the delay time for sending the whiteboard content, so that the whiteboard content and the audio and video are sent at the same time."]
            }), `
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "white-web-sdk"
              }), " to 2.12.17."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.23",
          id: "v21223",
          headingLevel: 2,
          value: "v21223",
          children: [_jsx(_components.p, {
            children: "v2.12.23 was released on May 11, 2021."
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "RegionKey"
            }), " enumeration for setting the data center."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.23",
          id: "v21223-1",
          headingLevel: 2,
          value: "v21223-1",
          children: [_jsx(_components.p, {
            children: "v2.12.23 was released on May 11, 2021."
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "RegionKey"
            }), " enumeration, which is used to set the data center."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.22",
          id: "v21222-1",
          headingLevel: 2,
          value: "v21222-1",
          children: [_jsx(_components.p, {
            children: "v2.12.22 was released on April 28, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@Netless/white-audio-plugin2"
            }), " and ", _jsx(_components.code, {
              children: "@Netless/white-video-plugin2"
            }), " to fix some display issues."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.21",
          id: "v21221-1",
          headingLevel: 2,
          value: "v21221-1",
          children: [_jsx(_components.p, {
            children: "v2.12.21 was released on April 28, 2021."
          }), _jsx(_components.h4, {
            id: "new-features-22",
            children: "New features"
          }), _jsxs(_components.p, {
            children: ["This release integrates ", _jsx(_components.a, {
              href: "https://github.com/netless-io/whiteboard-demo/tree/master/packages/white-audio-plugin",
              children: _jsx(_components.code, {
                children: "@Netless/white-audio-plugin2"
              })
            }), " and ", _jsx(_components.a, {
              href: "https://github.com/netless-io/react-whiteboard/tree/master/packages/white-video-plugin",
              children: _jsx(_components.code, {
                children: "@Netless/white-video-plugin2"
              })
            }), ", which are used by an iOS client to listen to audio and watch video played on the whiteboard on a Web client."]
          }), _jsx(_components.h4, {
            id: "fixed-issues-16",
            children: "Fixed issues"
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@Netless/white-audio-plugin"
            }), " to 1.2.23."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.20",
          id: "v21220-1",
          headingLevel: 2,
          value: "v21220-1",
          children: [_jsx(_components.p, {
            children: "v2.12.20 was released on April 22, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.12.14."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.19",
          id: "v21219-1",
          headingLevel: 2,
          value: "v21219-1",
          children: [_jsx(_components.p, {
            children: "v2.12.19 was released on April 22, 2021."
          }), _jsx(_components.p, {
            children: "This release has the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "white-web-sdk"
              }), " to 2.12.13 to improve the display of dynamic PPT files."]
            }), `
`, _jsxs(_components.li, {
              children: ["Updates ", _jsx(_components.code, {
                children: "@Netless/iframe-bridge"
              }), " to 2.0.17."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.18",
          id: "v21218-1",
          headingLevel: 2,
          value: "v21218-1",
          children: [_jsx(_components.p, {
            children: "v2.12.18 was released on April 20, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@Netless/iframe-bridge"
            }), " to 2.0.16."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.17",
          id: "v21217-1",
          headingLevel: 2,
          value: "v21217-1",
          children: [_jsx(_components.p, {
            children: "v2.12.17 was released on April 17, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.12.12."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.16",
          id: "v21216-1",
          headingLevel: 2,
          value: "v21216-1",
          children: [_jsx(_components.p, {
            children: "v2.12.16 was released on April 14, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@Netless/iframe-bridge"
            }), " to 2.0.14 to improve the iframe plugin."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.15",
          id: "v21215-1",
          headingLevel: 2,
          value: "v21215-1",
          children: [_jsx(_components.p, {
            children: "v2.12.15 was released on April 13, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@netless/iframe-bridge"
            }), " to 2.0.13 to improve the logic of sending messages for HTML5 files."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.14",
          id: "v21214-1",
          headingLevel: 2,
          value: "v21214-1",
          children: [_jsx(_components.p, {
            children: "v2.12.14 was released on April 13, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@netless/iframe-bridge"
            }), " to 2.0.11 to fix the display of HTML5 files."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.13",
          id: "v21213-1",
          headingLevel: 2,
          value: "v21213-1",
          children: [_jsx(_components.p, {
            children: "v2.12.13 was released on April 10, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.12.9."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.12",
          id: "v21212-1",
          headingLevel: 2,
          value: "v21212-1",
          children: [_jsx(_components.p, {
            children: "v2.12.12 was released on April 9, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@netless/iframe-bridge"
            }), " to 2.0.9 to fix the display of HTML5 files."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.11",
          id: "v21211-1",
          headingLevel: 2,
          value: "v21211-1",
          children: [_jsx(_components.p, {
            children: "v2.12.11 was released on April 9, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@netless/iframe-bridge"
            }), " to 2.0.8 to fix the display of HTML5 files."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.10",
          id: "v21210-1",
          headingLevel: 2,
          value: "v21210-1",
          children: [_jsx(_components.p, {
            children: "v2.12.10 was released on April 6, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.12.8 to fix the problem that setting Follower mode did not take effect immediately."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.9",
          id: "v2129-1",
          headingLevel: 2,
          value: "v2129-1",
          children: [_jsx(_components.p, {
            children: "v2.12.9 was released on April 2, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.12.7 to improve the display of dynamic PPT files."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.8",
          id: "v2128-1",
          headingLevel: 2,
          value: "v2128-1",
          children: [_jsx(_components.p, {
            children: "v2.12.8 was released on March 30, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@netless/iframe-bridge"
            }), " to 2.0.7."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.7",
          id: "v2127-1",
          headingLevel: 2,
          value: "v2127-1",
          children: [_jsx(_components.p, {
            children: "v2.12.7 was released on March 30, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to 2.12.6."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.6",
          id: "v2126-1",
          headingLevel: 2,
          value: "v2126-1",
          children: [_jsx(_components.p, {
            children: "v2.12.6 was released on March 25, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "@netless/iframe-bridge"
            }), " to 2.0.5."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.5",
          id: "v2125-1",
          headingLevel: 2,
          value: "v2125-1",
          children: [_jsx(_components.p, {
            children: "v2.12.5 was released on March 25, 2021."
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "scaleIframeToFit"
            }), " method to the ", _jsx(_components.code, {
              children: "Displayer"
            }), " class to enable zooming in and out so that HTML5 files can be completely displayed on screen."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.4",
          id: "v2124",
          headingLevel: 2,
          value: "v2124",
          children: [_jsx(_components.p, {
            children: "v2.12.4 was released on March 24, 2021."
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.a, {
              href: "https://github.com/netless-io/whiteboard-demo/tree/master/packages/cursor-tool",
              children: _jsx(_components.code, {
                children: "@netless/cursor-tool"
              })
            }), " to 0.0.7."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.3",
          id: "v2123-1",
          headingLevel: 2,
          value: "v2123-1",
          children: [_jsx(_components.p, {
            children: "v2.12.3 was released on March 20, 2021."
          }), _jsxs(_components.p, {
            children: ["This release changes the default value of ", _jsx(_components.code, {
              children: "disableNewPencil"
            }), " in the ", _jsx(_components.code, {
              children: "WhiteRoomConfig"
            }), " interface to ", _jsx(_components.code, {
              children: "YES"
            }), " so that the stroke effect is disabled by default. This addresses the issue that the stroke effect is not supported by SDKs earlier than v2.2.12."]
          }), _jsx(_components.p, {
            children: "To enable the stroke effect properly, ensure that every user in the room is using one of the following SDKs:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Android SDK v2.12.3 or later"
            }), `
`, _jsx(_components.li, {
              children: "iOS SDK v2.12.3 or later"
            }), `
`, _jsx(_components.li, {
              children: "Web SDK v2.12.5 or later"
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.2",
          id: "v2122-1",
          headingLevel: 2,
          value: "v2122-1",
          children: [_jsx(_components.p, {
            children: "v2.12.2 was released on March 16, 2021."
          }), _jsx(_components.h4, {
            id: "new-features-23",
            children: "New features"
          }), _jsxs(_components.p, {
            children: ["This release adds the stroke effect to better display handwriting. Call ", _jsx(_components.code, {
              children: "disableNewPencil"
            }), " in the ", _jsx(_components.code, {
              children: "WhiteRoomConfig"
            }), " interface to enable or disable the stroke effect."]
          }), _jsx(_components.p, {
            children: "To enable the stroke effect properly, ensure that every user in the room is using one of the following SDKs:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Android SDK v2.12.2 or later"
            }), `
`, _jsx(_components.li, {
              children: "iOS SDK v2.12.2 or later"
            }), `
`, _jsx(_components.li, {
              children: "Web SDK v2.12.5 or later"
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-14",
            children: "Improvements"
          }), _jsxs(_components.p, {
            children: ["This release updates ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " to v2.12.4 and improves the display logic of PPT files."]
          })]
        })]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "web",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "web"
      }), _jsx(_components.h2, {
        id: "understand-the-tech-2",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "This page tracks Web release notes for the Whiteboard SDK."
      }), _jsx(_components.h2, {
        id: "reference-2",
        children: "Reference"
      }), _jsxs(Accordions, {
        type: "multiple",
        openFirst: true,
        children: [_jsxs(Accordion, {
          title: "v2.16.53",
          id: "v21653",
          headingLevel: 2,
          value: "v21653",
          children: [_jsx(_components.p, {
            children: "Released May 10, 2025"
          }), _jsx(_components.h4, {
            id: "improvements-15",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release includes the following changes:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["For security and compliance, the ", _jsx(_components.code, {
                children: "regions"
              }), " parameter used when joining a whiteboard room now distinguishes between domestic and international data centers."]
            }), `
`, _jsxs(_components.li, {
              children: ["To prevent memory overflows caused by image uploads in formats such as ", _jsx(_components.code, {
                children: "base64"
              }), ", the ", _jsx(_components.code, {
                children: "src"
              }), " path for inserted images must now be a URL that starts with ", _jsx(_components.code, {
                children: "http"
              }), " or ", _jsx(_components.code, {
                children: "https"
              }), "."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.16.51",
          id: "v21651",
          headingLevel: 2,
          value: "v21651",
          children: [_jsx(_components.p, {
            children: "Released on July 28, 2025."
          }), _jsx(_components.h4, {
            id: "new-features-24",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Alternative API domains"
            })
          }), _jsx(_components.p, {
            children: "To ensure the connectivity of API calls, this version adds the following alternative API domains, which will be automatically selected during SDK initialization:"
          }), _jsxs(_components.table, {
            children: [_jsx(_components.thead, {
              children: _jsxs(_components.tr, {
                children: [_jsx(_components.th, {
                  children: "Domain"
                }), _jsx(_components.th, {
                  children: "Covered region"
                })]
              })
            }), _jsxs(_components.tbody, {
              children: [_jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "api.whiteboard.sd-rtn.com"
                  })
                }), _jsx(_components.td, {
                  children: "CN, India, Singapore"
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "api.baiban.shengwang.cn"
                  })
                }), _jsx(_components.td, {
                  children: "CN"
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "api.whiteboard.rtelink.com"
                  })
                }), _jsx(_components.td, {
                  children: "US,  EU"
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "api.netless.link"
                  })
                }), _jsx(_components.td, {
                  children: "CN, India, Singapore"
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "api.whiteboard.agora.io"
                  })
                }), _jsx(_components.td, {
                  children: "US,  EU"
                })]
              })]
            })]
          }), _jsx(_components.h4, {
            id: "improvements-16",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This version includes the following improvements:"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Optimized WebSocket transmission experience"
            })
          }), _jsx(_components.p, {
            children: "To address the issue of slow whiteboard room joining, this version includes the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Optimized WebSocket reconnection algorithm to improve reconnection speed."
            }), `
`, _jsxs(_components.li, {
              children: ["Added ", _jsx(_components.code, {
                children: "onConnection"
              }), " event to report that WebSocket is connected and is downloading the whiteboard snapshot data of the current room to restore the room state. You can use this callback event to prompt users that the whiteboard room is loading."]
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Other improvements"
            })
          }), _jsx(_components.p, {
            children: "This version also includes the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Improved the algorithm for determining whether the cursor hits a graphic when the graphic has a fill color, optimizing the graphic selection experience."
            }), `
`, _jsxs(_components.li, {
              children: ["Added a ", _jsx(_components.code, {
                children: "timeout"
              }), " parameter to the ", _jsx(_components.code, {
                children: "screenshotToCanvasAsync"
              }), " method to set the image loading timeout. If the image loading exceeds this time, the SDK will directly proceed to the next drawing operation without waiting for the image to load completely."]
            }), `
`, _jsxs(_components.li, {
              children: ["Added a ", _jsx(_components.code, {
                children: "commandWheelToZoom"
              }), " property to ", _jsx(_components.code, {
                children: "ConstructRoomParams"
              }), " to implement zooming the whiteboard by holding down the ", _jsx(_components.code, {
                children: "command"
              }), " key and scrolling the mouse wheel on macOS devices."]
            }), `
`, _jsx(_components.li, {
              children: 'Optimized the button style of the "Transparent" fill color in the floating bar.'
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-17",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This version fixes the following issue:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The error message ", _jsx(_components.code, {
                children: "AkkoSocket can't emit when phase is connecting"
              }), " that appears in the console when connecting to WebSocket for more than 2 seconds."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "api-changes-14",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "onConnection"
              })
            }), `
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "timeout"
              }), " parameter in the ", _jsx(_components.code, {
                children: "screenshotToCanvasAsync"
              })]
            }), `
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "commandWheelToZoom"
              }), " parameter in ", _jsx(_components.code, {
                children: "ConstructRoomParams"
              })]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.16.49",
          id: "v21649",
          headingLevel: 2,
          value: "v21649",
          children: [_jsx(_components.p, {
            children: "Released on July 28, 2025."
          }), _jsx(_components.h4, {
            id: "new-features-25",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Fill closed shape elements"
            })
          }), _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "MemberState"
            }), " adds the ", _jsx(_components.code, {
              children: "fillColor"
            }), " property, which is used to set the fill color of closed shape elements such as circles and rectangles."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Automatic switch to select tool"
            })
          }), _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "MemberState"
            }), " adds the following properties to automatically switch to the select tool after using the corresponding whiteboard tool:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "textCompleteToSelector"
              }), ": Automatically switch to the select tool after typing with the text tool."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "rectangleCompleteToSelector"
              }), ": Automatically switch to the select tool after drawing a rectangle."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "ellipseCompleteToSelector"
              }), ": Automatically switch to the select tool after drawing a circle."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "straightCompleteToSelector"
              }), ": Automatically switch to the select tool after drawing a straight line."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "arrowCompleteToSelector"
              }), ": Automatically switch to the select tool after drawing an arrow."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "shapeCompleteToSelector"
              }), ": Automatically switch to the select tool after drawing a triangle, bubble, or other shapes."]
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Whiteboard drawing performance optimization strategy"
            })
          }), _jsxs(_components.p, {
            children: ["The ", _jsx(_components.code, {
              children: "joinRoom"
            }), " method adds the ", _jsx(_components.code, {
              children: "optimizeOptions"
            }), " parameter to set the performance optimization strategy for whiteboard drawing. The performance optimization options include:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Adjusting the refresh interval of whiteboard drawing: A lower refresh interval provides smoother stroke display but has a higher resource consumption, while a higher refresh interval may result in laggy strokes but has a lower resource consumption."
            }), `
`, _jsx(_components.li, {
              children: "Using single canvas drawing: By default, the whiteboard uses two canvases alternately to avoid flickering on some devices during drawing. Using a single canvas drawing can eliminate redraws and reduce performance consumption."
            }), `
`, _jsx(_components.li, {
              children: "Using floating canvas: When writing on the whiteboard, after enabling single canvas drawing, a floating canvas of approximately 256 x 256px is generated based on the drawing position. When subsequent drawings are within the range of this floating canvas, the synchronization of strokes is limited to this floating canvas, reducing performance consumption."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-17",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This version includes the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "MemberState"
              }), " adds the ", _jsx(_components.code, {
                children: "textSizeOverride"
              }), " property, which is used to set the default font size of the text tool. If not set, the default font size used will be the same as the last created text element."]
            }), `
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "room.useNativeClipboard"
              }), " property is added to set whether to use the native clipboard. When enabled, the whiteboard shortcuts for copy and paste in ", _jsx(_components.code, {
                children: "HotKeys"
              }), " will be disabled and replaced with the native ", _jsx(_components.code, {
                children: "copy"
              }), " and ", _jsx(_components.code, {
                children: "paste"
              }), " events."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "DisplayerCallbacks"
              }), " adds the ", _jsx(_components.code, {
                children: "onBackgroundError"
              }), " callback to report background image loading failure."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "RoomCallbacks"
              }), " adds the ", _jsx(_components.code, {
                children: "onObjectsLimit"
              }), " callback to report when the number of elements in the whiteboard exceeds the limit. When the limit is reached, the frontend will throw warnings and events."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "ImageInformation"
              }), " adds the ", _jsx(_components.code, {
                children: "crossOrigin"
              }), " property to set whether to load images in a cross-origin manner. It is enabled by default."]
            }), `
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "room"
              }), " class adds the ", _jsx(_components.code, {
                children: "syncMode"
              }), " property. When set to ", _jsx(_components.code, {
                children: "true"
              }), ", synchronization will be more frequent but may slightly affect animation smoothness."]
            }), `
`, _jsx(_components.li, {
              children: "A floating toolbar is displayed when selecting graphic elements, such as rectangles and circles, drawn on the whiteboard."
            }), `
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "clearUndoHistory"
              }), " method is added to clear the undo history."]
            }), `
`, _jsxs(_components.li, {
              children: ["Setting ", _jsx(_components.code, {
                children: "cursorAdapter: false"
              }), " can hide the built-in cursors, such as the laser pen, eraser, and so on."]
            }), `
`, _jsx(_components.li, {
              children: "Text elements now have a fixed line height to avoid display differences across platforms."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-18",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This version fixes the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Memory leaks caused by not destroying certain listeners when exiting the room."
            }), `
`, _jsx(_components.li, {
              children: "Exception errors when read-only users pressed the Esc key."
            }), `
`, _jsx(_components.li, {
              children: "Occasional display errors when drawing dashed lines."
            }), `
`, _jsx(_components.li, {
              children: "An issue where erasing text with the eraser tool on touch devices did not work properly."
            }), `
`, _jsx(_components.li, {
              children: "Occasional white screen when entering the room without any error messages."
            }), `
`, _jsx(_components.li, {
              children: "Copied and pasted text elements could not be selected."
            }), `
`, _jsx(_components.li, {
              children: "The persistent highlight of the text box content after deselecting the text box."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "api-changes-15",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "MemberState"
              }), " adds the following properties:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "fillColor"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "textSizeOverride"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "textCompleteToSelector"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "rectangleCompleteToSelector"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "ellipseCompleteToSelector"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "straightCompleteToSelector"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "arrowCompleteToSelector"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "shapeCompleteToSelector"
                  })
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "DisplayerCallbacks"
              }), " adds ", _jsx(_components.code, {
                children: "onBackgroundError"
              })]
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "screenshotToCanvasAsync"
              })
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "Room"
              }), " adds the ", _jsx(_components.code, {
                children: "useNativeClipboard"
              }), " property"]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "RoomCallbacks"
              }), " adds ", _jsx(_components.code, {
                children: "onObjectsLimit"
              })]
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "clearUndoHistory"
              })
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "joinRoom"
              }), " adds the ", _jsx(_components.code, {
                children: "optimizeOptions"
              }), " parameter"]
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "OptimizeOptions"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "LowTaskAnimationInterval"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "OriginCoordType"
              })
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "ImageInformation"
              }), " adds the ", _jsx(_components.code, {
                children: "crossOrigin"
              }), " property"]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "room"
              }), " adds the ", _jsx(_components.code, {
                children: "syncMode"
              }), " property"]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.16.43",
          id: "v21643",
          headingLevel: 2,
          value: "v21643",
          children: [_jsx(_components.p, {
            children: "v2.16.43 was released on January 19, 2024."
          }), _jsx(_components.h4, {
            id: "compatibility-changes-7",
            children: "Compatibility changes"
          }), _jsxs(_components.p, {
            children: ["This version deprecates the existing London data center (", _jsx(_components.code, {
              children: "gb-lon"
            }), ") in the Whiteboard Data Center and introduces a new data center in Frankfurt, Europe (", _jsx(_components.code, {
              children: "eu"
            }), "), whose service covers Europe. If you have set ", _jsx(_components.code, {
              children: "gb-lon"
            }), " in the previous version, please switch to", _jsx(_components.code, {
              children: " eu"
            }), " after upgrading to this version and enable this data center in Agora Console."]
          }), _jsx(_components.h4, {
            id: "fixed-issues-19",
            children: "Fixed issues"
          }), _jsxs(_components.p, {
            children: ["This version fixed the issue on the Windows platform when using the Whiteboard Web App where the ", _jsx(_components.code, {
              children: "shift"
            }), " key was incorrectly detected, causing the pencil tool to switch to drawing straight lines and unable to revert back."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.16.37",
          id: "v21637",
          headingLevel: 2,
          value: "v21637",
          children: [_jsx(_components.p, {
            children: "v2.16.37 was released on December 2, 2022."
          }), _jsx(_components.h4, {
            id: "new-features-26",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "1. Whiteboard tool updates"
            })
          }), _jsx(_components.p, {
            children: "This release adds new features for the following whiteboard tools:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Ellipse: Press the ", _jsx(_components.code, {
                children: "Alt"
              }), " or ", _jsx(_components.code, {
                children: "option"
              }), " button to draw a circle with the cursor as the center."]
            }), `
`, _jsxs(_components.li, {
              children: ["Pencil:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: ["Draw straight lines: The user can press ", _jsx(_components.code, {
                    children: "shift"
                  }), " to draw a straight line."]
                }), `
`, _jsxs(_components.li, {
                  children: ["Draw dotted lines: Add ", _jsx(_components.code, {
                    children: "dottedLine: true"
                  }), " in ", _jsx(_components.code, {
                    children: "room.memberState"
                  }), " to enable this feature."]
                }), `
`, _jsxs(_components.li, {
                  children: [`Writing performance: Adds support for adjusting the balance between the performance and the quality of the pencil
tool by modifying the `, _jsx(_components.code, {
                    children: "NewPencilWritingQuality"
                  }), " enum."]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: ["Text: Adds support for directly selecting and editing whiteboard text by adding ", _jsx(_components.code, {
                children: "textCanSelectText: true"
              }), " in ", _jsx(_components.code, {
                children: "room.memberState"
              }), "."]
            }), `
`]
          }), _jsx(_components.p, {
            children: "In addition, this release adds a pencil eraser tool to erase any part of a pencil stroke."
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "2. Screenshot to canvas"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "screenshotToCanvas"
            }), " method to take a screenshot and write it to canvas."]
          }), _jsx(_components.h4, {
            id: "fixed-issues-20",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release fixes the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "The recall and redo function sometimes got reset after the user switched pages or reconnected."
            }), `
`, _jsxs(_components.li, {
              children: ["Some fields in ", _jsx(_components.code, {
                children: "room.setMemberState()"
              }), " could not be saved locally."]
            }), `
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "floatBar"
              }), " did not work properly on some touch devices."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "api-changes-16",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["New properties in the ", _jsx(_components.code, {
                children: "MemberState"
              }), " class: ", _jsx(_components.code, {
                children: "dottedLine"
              }), " and ", _jsx(_components.code, {
                children: "textCanSelectText"
              })]
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "NewPencilWritingQuality"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "screenshotToCanvas"
              })
            }), `
`, _jsxs(_components.li, {
              children: ["New value in the ", _jsx(_components.code, {
                children: "ApplianceNames"
              }), " enum: ", _jsx(_components.code, {
                children: "pencilEraser"
              })]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.16.24",
          id: "v21624-1",
          headingLevel: 2,
          value: "v21624-1",
          children: [_jsx(_components.p, {
            children: "v2.16.24 was released on September 13, 2022."
          }), _jsx(_components.h4, {
            id: "new-features-27",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "1. Text editing"
            })
          }), _jsx(_components.p, {
            children: "To support custom text editing options, this release adds the following APIs."
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "insertText"
              }), ": Inserts text at a specified position."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "updateText"
              }), ": Modifies the specified text."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "updateSelectedText"
              }), ": Modifies the font style of the currently selected text, including font size, color, bold style, and italic style."]
            }), `
`]
          }), _jsx(_components.p, {
            children: "You can use these APIs to customize the text input box and editing toolbar."
          }), _jsxs(_components.p, {
            children: ["This release also adds the ", _jsx(_components.code, {
              children: "textColor"
            }), ", ", _jsx(_components.code, {
              children: "bold"
            }), ", ", _jsx(_components.code, {
              children: "italic"
            }), ", ", _jsx(_components.code, {
              children: "underline"
            }), ", and ", _jsx(_components.code, {
              children: "lineThrough"
            }), " properties to ", _jsx(_components.code, {
              children: "MemberState"
            }), " to provide richer text editing options. When you use the ", _jsx(_components.code, {
              children: "text"
            }), " tool provided by the Whiteboard SDK but want to customize the text editing toolbar, you can set the ", _jsx(_components.code, {
              children: "floatBar"
            }), " property in ", _jsx(_components.code, {
              children: "JoinRoomParams"
            }), " as ", _jsx(_components.code, {
              children: "false"
            }), " and edit the text using the new properties in ", _jsx(_components.code, {
              children: "MemberState"
            }), "."]
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["This release deletes the ", _jsx(_components.code, {
                  children: "updateTextFontSize"
                }), " method. Instead, you can use ", _jsx(_components.code, {
                  children: "updateSelectedText"
                }), " or ", _jsx(_components.code, {
                  children: "textSize"
                }), " in ", _jsx(_components.code, {
                  children: "MemberState"
                }), "."]
              })
            })
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "2. Image rotation"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "disableRotation"
            }), " property to ", _jsx(_components.code, {
              children: "WhiteWebSdkConfiguration"
            }), " to enable or disable image rotation. The SDK enables image rotation by default, which allows users to rotate the selected image by any angle. If you want to disable the rotation, you can set ", _jsx(_components.code, {
              children: "disableRotation(true)"
            }), "."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "3. Tween animation"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the tween animation feature for the ", _jsx(_components.code, {
              children: "pencil"
            }), " tool. When a user draws or writes with the pencil, the SDK automatically inserts frames between keyframes so that to remote users see a smoother drawing process, but this feature increases latency."]
          }), _jsxs(_components.p, {
            children: ["This release also adds the ", _jsx(_components.code, {
              children: "disableCurveAnimes"
            }), " property to ", _jsx(_components.code, {
              children: "WhiteWebSdkConfiguration"
            }), " for enabling or disabling the tween animation feature. The tween animation feature is enabled in the SDK by default. To disable it, you can set ", _jsx(_components.code, {
              children: "disableCurveAnimes(true)"
            }), "."]
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["Tween animations take effect only when ", _jsx(_components.code, {
                  children: "disableNewPencil"
                }), " is set as ", _jsx(_components.code, {
                  children: "false"
                }), "."]
              })
            })
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "4. Disabling the stroke effect"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "disableNewPencilStroke"
            }), " property to ", _jsx(_components.code, {
              children: "WhiteWebSdkConfiguration"
            }), " to enable or disable the stroke effect of the pencil. The default value of ", _jsx(_components.code, {
              children: "disableNewPencilStroke"
            }), " is ", _jsx(_components.code, {
              children: "true"
            }), ", and the SDK enables the stroke effect immediately when you set ", _jsx(_components.code, {
              children: "disableNewPencil(false)"
            }), " to enable the new pencil. To disable the stroke effect after setting ", _jsx(_components.code, {
              children: "disableNewPencil(false)"
            }), ", you can call ", _jsx(_components.code, {
              children: "disableNewPencilStroke(true)"
            }), "."]
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["The stroke effect takes effect only when ", _jsx(_components.code, {
                  children: "disableNewPencil"
                }), " is set as ", _jsx(_components.code, {
                  children: "false"
                }), "."]
              })
            })
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "5. Getting the scene information"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "getScene"
            }), " method to the ", _jsx(_components.code, {
              children: "Displayer"
            }), " class, which supports using the scene path to get the information about a specified scene."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "6. Scene callbacks"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "createScenesCallback"
            }), " method for creating a listener object for a scene directory. After the listener object is successfully created, when the scenes and subdirectories in the specified scene directory change, the SDK triggers the callbacks you have registered in ", _jsx(_components.code, {
              children: "ScenesCallbacks"
            }), " to report the scene events."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "7. Reporting exceptions that occur when playing the media file in a dynamic PPT slide"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "onPPTMediaPlayError"
            }), " callback to report exceptions that occur during the playing of the media file in a dynamic PPT slide."]
          }), _jsx(_components.h4, {
            id: "improvements-18",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release provides the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Optimizes the writing performance on Android browsers."
            }), `
`, _jsx(_components.li, {
              children: "Optimizes the reconnecting mechanism in weak network environment to reduce unnecessary reconnections."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-21",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Occasionally, the contents on the whiteboard appeared shifted and overshadowed after users zoomed or moved their view."
            }), `
`, _jsx(_components.li, {
              children: "Occasionally, users could not switch the pages of a dynamic PPT slide after an SDK reconnection."
            }), `
`, _jsx(_components.li, {
              children: "The contents on the whiteboard occasionally were not fully displayed when users joined a whiteboard room that already had."
            }), `
`, _jsx(_components.li, {
              children: "A memory leak sometimes occurred after an SDK reconnection."
            }), `
`, _jsxs(_components.li, {
              children: ["An error sometimes occurred when calling ", _jsx(_components.code, {
                children: "setWritable"
              }), " repeatedly."]
            }), `
`, _jsx(_components.li, {
              children: "Rendering exceptions and errors occurred when using the SDK on an early version of React."
            }), `
`, _jsxs(_components.li, {
              children: ["The virtual keyboard did not pop up when clicking ", _jsx(_components.code, {
                children: "text"
              }), " on iOS browsers."]
            }), `
`, _jsx(_components.li, {
              children: "When a user switched to read-only mode, then switched back to read-write mode and wrote, remote users saw that user's cursor as fixed."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "api-changes-17",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "insertText"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "updateText"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "updateSelectedText"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "getScene"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "createScenesCallback"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "onPPTMediaPlayError"
              })
            }), `
`, _jsxs(_components.li, {
              children: ["The following properties in ", _jsx(_components.code, {
                children: "MemberState"
              }), ":", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "textColor"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "bold"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "italic"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "underline"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "lineThrough "
                  })
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: ["The following properties in ", _jsx(_components.code, {
                children: "WhiteWebSdkConfiguration"
              }), ":", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "disableRotation"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "disableCurveAnimes"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "disableNewPencilStroke"
                  })
                }), `
`]
              }), `
`]
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Deleted"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "updateTextFontSize"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "CustomInput"
              })
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.15.16",
          id: "v21516",
          headingLevel: 2,
          value: "v21516",
          children: [_jsx(_components.p, {
            children: "v2.15.16 was released on January 21, 2022."
          }), _jsx(_components.h4, {
            id: "improvements-19",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release provides the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Optimizes the logic of ", _jsx(_components.code, {
                children: "disconnect"
              }), " and ", _jsx(_components.code, {
                children: "setWritable"
              }), " to ensure that the SDK returns a ", _jsx(_components.code, {
                children: "Promise"
              }), " object only when all requests sent before the ", _jsx(_components.code, {
                children: "disconnect()"
              }), " or ", _jsx(_components.code, {
                children: "setWritable(false)"
              }), " method call are executed."]
            }), `
`, _jsxs(_components.li, {
              children: ["Optimizes the UI of the text editing floating bar (", _jsx(_components.code, {
                children: "floatBar"
              }), "), and saves the text format set by users on the floating bar."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-22",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "The error code returned when joining a room failed was inaccurate."
            }), `
`, _jsxs(_components.li, {
              children: ["After rejoining a room, ", _jsx(_components.code, {
                children: "room.state.memberState"
              }), " returned the initial state of the room, rather than the current state."]
            }), `
`, _jsx(_components.li, {
              children: "The console reported an error after a successful reconnection."
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "room.state.memberState"
              }), " occasionally returned ", _jsx(_components.code, {
                children: "undefined"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["The button on the text editing floating bar (", _jsx(_components.code, {
                children: "floatBar"
              }), ") sometimes did not work or disappeared."]
            }), `
`, _jsx(_components.li, {
              children: "The whiteboard room went blank and tried a reconnection."
            }), `
`, _jsxs(_components.li, {
              children: ["The user received the event notification multiple times after calling ", _jsx(_components.code, {
                children: "dispatchMagixEvent"
              }), " to send an event."]
            }), `
`, _jsx(_components.li, {
              children: "File conversion failed because the background fill property was not set in the source PPT file."
            }), `
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "canvas"
              }), " rendering engine occasionally crashed."]
            }), `
`, _jsxs(_components.li, {
              children: ["The CPU usage of the ", _jsx(_components.code, {
                children: "canvas"
              }), " rendering was occasionally high."]
            }), `
`, _jsx(_components.li, {
              children: "On some iOS or Android devices, grids occasionally appeared on the whiteboard."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.15.1",
          id: "v2151",
          headingLevel: 2,
          value: "v2151",
          children: [_jsx(_components.p, {
            children: "v2.15.1 was released on November 16, 2021, which fixed the following issues with displaying dynamic PPT files in the whiteboard:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "When there are bugs with the animation effects in a slide master, slides based on that slide master could not be switched."
            }), `
`, _jsx(_components.li, {
              children: "Some clickable elements did not take effect when clicked."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.15.2",
          id: "v2152",
          headingLevel: 2,
          value: "v2152",
          children: [_jsx(_components.p, {
            children: "v2.15.2 was released on November 19, 2021."
          }), _jsx(_components.h4, {
            id: "new-features-28",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "1. Disables/Enables the frequency limit for writing synchronization"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "disablePencilWrittingLimitFrequency"
            }), " property in ", _jsx(_components.code, {
              children: "JoinRoomParams"
            }), ", for disabling or enabling the frequency limit for synchronizing the writing input while using the ", _jsx(_components.code, {
              children: "pencil"
            }), " tool."]
          }), _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "2."
            }), " ", _jsx(_components.strong, {
              children: "Options for setting a custom event listener"
            })]
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "options"
            }), " parameter in ", _jsx(_components.code, {
              children: "addMagixEventListener"
            }), " as well as the ", _jsx(_components.code, {
              children: "MagixEventListenerOptions"
            }), " type, for setting the following options for a custom event listener:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "fireInterval"
              }), ": The interval (ms) of the SDK triggering custom event callbacks."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "fireSelfEventAfterCommit"
              }), ": Whether to send event callbacks after the Agora server acknowledges the ", _jsx(_components.code, {
                children: "dispatchMagixEvent"
              }), " method call is successful."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-23",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release fixed the rendering crashes after initializing the room or adjusting the order of components in the scene under certain circumstances."
          }), _jsx(_components.h4, {
            id: "api-changes-18",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "disablePencilWrittingLimitFrequency"
              }), " property in ", _jsx(_components.code, {
                children: "JoinRoomParams"
              })]
            }), `
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "options"
              }), " parameter in ", _jsx(_components.code, {
                children: "addMagixEventListener"
              })]
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "MagixEventListenerOptions"
              })
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.15.0",
          id: "v2150-2",
          headingLevel: 2,
          value: "v2150-2",
          children: [_jsx(_components.p, {
            children: "v2.15.0 was released on November 16, 2021."
          }), _jsx(_components.h4, {
            id: "compatibility-changes-8",
            children: "Compatibility changes"
          }), _jsxs(_components.p, {
            children: ["To help you manage users in a room, this release adds the ", _jsx(_components.code, {
              children: "uid"
            }), " property in ", _jsx(_components.code, {
              children: "JoinRoomParams"
            }), ", for setting the unique identifier of a user."]
          }), _jsxs(_components.p, {
            children: ["If you upgrade the SDK to v2.15.0 or later, to avoid affecting your service, ensure that you pass in a string ", _jsx(_components.code, {
              children: "uid"
            }), " in ", _jsx(_components.code, {
              children: "JoinRoomParams"
            }), " when calling ", _jsx(_components.code, {
              children: "joinRoom"
            }), ". The ", _jsx(_components.code, {
              children: "uid"
            }), " of each user cannot be longer than 1024 bytes and must be unique in the same room. For more information, see ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/get-started-sdk#join-the-interactive-whiteboard-room-from-your-app-client",
              children: "Join a Whiteboard Room"
            }), "."]
          }), _jsx(_components.h4, {
            id: "new-features-29",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "1. Disables/Enables the frequency limit for sending custom events"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "disableMagixEventDispatchLimit"
            }), " property in ", _jsx(_components.code, {
              children: "JoinRoomParams"
            }), ", for disabling or enabling the frequency limit for sending custom events."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "2. File conversion optimizations"
            })
          }), _jsx(_components.p, {
            children: "This release adds support for converting and displaying the following PowerPoint (PPT) features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Action buttons"
            }), `
`, _jsx(_components.li, {
              children: "Slide masters added with animation effects."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-20",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release provides the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "The writing experience is optimized further."
            }), `
`, _jsxs(_components.li, {
              children: ["To improve the user experience, the SDK sets ", _jsx(_components.code, {
                children: "uniformScale"
              }), " in ", _jsx(_components.code, {
                children: "ImageInformation"
              }), " as ", _jsx(_components.code, {
                children: "true"
              }), " by default when the ", _jsx(_components.code, {
                children: "insertImage"
              }), " method is called. This ensures the image is scaled based on its original aspect ratio when a user adjusts its size. If you do not want the image to be scaled proportionately, you can set ", _jsx(_components.code, {
                children: "uniformScale"
              }), " as ", _jsx(_components.code, {
                children: "false"
              }), "."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-24",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release has fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The room state became incorrect when you called ", _jsx(_components.code, {
                children: "setWritable(false)"
              }), " at the time of joining the room."]
            }), `
`, _jsx(_components.li, {
              children: "Multiple copies could appear when you pasted copied content."
            }), `
`, _jsxs(_components.li, {
              children: ["Each property sometimes appeared twice when you read ", _jsx(_components.code, {
                children: "room.state.roomMembers"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["The following issues with displaying dynamic PPT files in the whiteboard were fixed:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "The images were occasionally displaced."
                }), `
`, _jsx(_components.li, {
                  children: "Failure to read certain styles caused the screen to go blank."
                }), `
`, _jsx(_components.li, {
                  children: "The rotation angle and color were incorrect for some text."
                }), `
`, _jsx(_components.li, {
                  children: "Occasionally, elements with an animation effect were not displayed"
                }), `
`, _jsx(_components.li, {
                  children: "The animation of some text was displayed incorrectly."
                }), `
`]
              }), `
`]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "api-changes-19",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["The following properties in ", _jsx(_components.code, {
                  children: "JoinRoomParams"
                }), ":"]
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "uid"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "disableMagixEventDispatchLimit"
                  })
                }), `
`]
              }), `
`]
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Modified"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "seekToProgressTime"
              })
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Deleted"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "pencilOptions"
              }), " property in ", _jsx(_components.code, {
                children: "MemberState"
              })]
            }), `
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "broadcasterInformation"
              }), " property in ", _jsx(_components.code, {
                children: "BroadcastState"
              })]
            }), `
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "zoomScale"
              }), " property in ", _jsx(_components.code, {
                children: "RoomState"
              })]
            }), `
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "scheduleTime"
              }), " property in ", _jsx(_components.code, {
                children: "Player"
              })]
            }), `
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "seekToScheduleTime"
              }), " method in ", _jsx(_components.code, {
                children: "Player"
              })]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.14.5",
          id: "v2145",
          headingLevel: 2,
          value: "v2145",
          children: [_jsx(_components.p, {
            children: "v2.14.5 was released on November 10, 2021."
          }), _jsx(_components.h4, {
            id: "compatibility-changes-9",
            children: "Compatibility changes"
          }), _jsxs(_components.p, {
            children: ["As of this release, ", _jsx(_components.code, {
              children: "white-web-sdk"
            }), " no longer supports the following versions of mobile browsers:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Browsers for Android 4.4 and earlier."
            }), `
`, _jsx(_components.li, {
              children: "Browsers for iOS 9 and earlier."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "new-features-30",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "1. Importing and exporting scenes"
            })
          }), _jsx(_components.p, {
            children: "This release adds the following methods for importing and exporting scenes:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "exportScene"
              }), ": Exports all the contents of a specified scene, including the image or web page displayed on the scene, and saves them as a binary file (Blob object)."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "importScene"
              }), ": Imports the contents of a scene exported by using ", _jsx(_components.code, {
                children: "exportScene"
              }), " into a specified scene directory."]
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "2. Scene path type"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "conflict"
            }), " enumerator in ", _jsx(_components.code, {
              children: "ScenePathType"
            }), ", which indicates that a path cannot exist because it contains the path of an existing scene."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "3. Locking images"
            })
          }), _jsxs(_components.p, {
            children: ["To support locking or unlocking selected images, this release adds the ", _jsx(_components.code, {
              children: "lockImages"
            }), " method. When an image is locked, the user cannot move, zoom, or delete the image."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "4. Adjusting font size"
            })
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "updateTextFontSize"
            }), " method for adjusting the size of the text entered with the ", _jsx(_components.code, {
              children: "text"
            }), " tool."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "5. Adjusting component layers"
            })
          }), _jsx(_components.p, {
            children: "To support adjusting the layers of components, this release adds the following methods:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "moveSelectedComponentsToTop"
              }), ": Moves the selected components to the top layer."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "moveSelectedComponentsToBottom"
              }), ": Moves the selected components to the bottom layer."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-21",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release provides the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Adds support for sending and receiving custom events with the ", _jsx(_components.code, {
                children: "ArrayBuffer"
              }), " payload between users with the Web SDK."]
            }), `
`, _jsx(_components.li, {
              children: "Further optimizes the writing performance."
            }), `
`, _jsx(_components.li, {
              children: "Optimizes the shape of handwriting."
            }), `
`, _jsxs(_components.li, {
              children: ["Improves the accuracy of the ", _jsx(_components.code, {
                children: "onPhaseChanged"
              }), " callback."]
            }), `
`, _jsx(_components.li, {
              children: "On the PC side, enables the eraser to delete only the topmost of multiple selected components."
            }), `
`, _jsx(_components.li, {
              children: "Hides elements that should not be displayed in a slide master using the file-conversion function."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-25",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release has fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "customInput"
              }), " method call did not take effect."]
            }), `
`, _jsx(_components.li, {
              children: "After switching to the hand tool, users could not switch back to the cursor."
            }), `
`, _jsx(_components.li, {
              children: "Occasionally, the handwriting disappeared suddenly during writing."
            }), `
`, _jsx(_components.li, {
              children: "Occasionally, the handwriting had unnatural teardrop-like strokes during writing."
            }), `
`, _jsx(_components.li, {
              children: "When the user edited text after manually scaling the text box, the text box and text reverted to the original size."
            }), `
`, _jsxs(_components.li, {
              children: ["When modifying ", _jsx(_components.code, {
                children: "InvisiblePlugin"
              }), ", the new ", _jsx(_components.code, {
                children: "attributes"
              }), " could not be the same as the original ", _jsx(_components.code, {
                children: "attributes"
              }), "."]
            }), `
`, _jsx(_components.li, {
              children: "The view became incorrect after the window size changed on some browsers and devices."
            }), `
`, _jsx(_components.li, {
              children: "When the eraser was moved quickly, the eraser icon was not enlarged and the fast deleting function did not work."
            }), `
`, _jsx(_components.li, {
              children: "Occasionally, multiple audio files in dynamic PPT slides played simultaneously."
            }), `
`, _jsx(_components.li, {
              children: "Animations were displayed incorrectly after a dynamic PPT slide returned to the previous page."
            }), `
`, _jsx(_components.li, {
              children: "Occasionally, a text box with an animation effect was flipped in mirror mode."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "api-changes-20",
            children: "API changes"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Added"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "exportScene"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "importScene"
              })
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "conflict"
              }), " in  ", _jsx(_components.code, {
                children: "ScenePathType"
              })]
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "lockImages"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "updateTextFontSize"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "moveSelectedComponentsToTop"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "moveSelectedComponentsToBottom"
              })
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.13.17",
          id: "v21317-1",
          headingLevel: 2,
          value: "v21317-1",
          children: [_jsx(_components.p, {
            children: "v2.13.17 was released on August 20, 2021."
          }), _jsx(_components.h4, {
            id: "new-features-31",
            children: "New features"
          }), _jsx(_components.p, {
            children: "To improve the dynamic file conversion function, this release adds support for converting and displaying the following PowerPoint (PPT) features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Add animations to text per paragraph."
            }), `
`, _jsx(_components.li, {
              children: "Animate text by word or by letter."
            }), `
`, _jsx(_components.li, {
              children: "All preset table styles."
            }), `
`, _jsx(_components.li, {
              children: "Fonts smaller than 9 pt (12 px)."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-22",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release has the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Disables the delete button on the floating bar when the user is editing text on the whiteboard."
            }), `
`, _jsx(_components.li, {
              children: "Disables the floating bar from moving when the user clicks the button on it."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-26",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Occasionally, the room was stuck in the connecting state when the user joined a room."
            }), `
`, _jsx(_components.li, {
              children: "The cursor disappeared for some users after the SDK reconnected."
            }), `
`, _jsx(_components.li, {
              children: "The status of some plugins was incorrect after the SDK reconnected."
            }), `
`, _jsxs(_components.li, {
              children: ["The hand tool was not restricted by the set ", _jsx(_components.code, {
                children: "CameraBound"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["On some high-resolution devices, when the user was in the ", _jsx(_components.code, {
                children: "follower"
              }), " view mode, the center point of the view was slightly shifted."]
            }), `
`, _jsxs(_components.li, {
              children: ["The following issues with displaying dynamic PPT files in the whiteboard were fixed:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "Paragraph spacing was displayed incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "Failed to split text into columns."
                }), `
`, _jsx(_components.li, {
                  children: "The slide background fill of shapes was displayed incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "Hanging indentation was displayed incorrectly."
                }), `
`, _jsxs(_components.li, {
                  children: ["The slide was displayed incorrectly when the user called ", _jsx(_components.code, {
                    children: "pptPreviousStep"
                  }), " to roll back a slide."]
                }), `
`, _jsx(_components.li, {
                  children: "The numbering of text displayed incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "Some equations were displayed incompletely after conversion."
                }), `
`, _jsx(_components.li, {
                  children: "Some lines broke incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "Text written from right to left (such as Arabic) was displayed incorrectly."
                }), `
`]
              }), `
`]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.13.11",
          id: "v21311",
          headingLevel: 2,
          value: "v21311",
          children: [_jsx(_components.p, {
            children: "v2.13.11 was released on July 23 2021."
          }), _jsx(_components.h4, {
            id: "new-features-32",
            children: "New features"
          }), _jsx(_components.p, {
            children: "To improve the dynamic file conversion function, this release adds support for converting and displaying the following PowerPoint (PPT) features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Animation effect > Reverse Path Direction"
            }), `
`, _jsx(_components.li, {
              children: "Vertical Text Box"
            }), `
`, _jsx(_components.li, {
              children: "Microsoft Equation Editor 3.0"
            }), `
`, _jsx(_components.li, {
              children: "Hide background graphic in a slide master"
            }), `
`, _jsx(_components.li, {
              children: "Change the color of pictures"
            }), `
`, _jsxs(_components.li, {
              children: ["The following picture effects are now supported:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "Metal Frame"
                }), `
`, _jsx(_components.li, {
                  children: "Soft Edge Rectangle"
                }), `
`, _jsx(_components.li, {
                  children: "Double Frame, Black"
                }), `
`, _jsx(_components.li, {
                  children: "Thick Matte, Black"
                }), `
`, _jsx(_components.li, {
                  children: "Simple Frame, Black"
                }), `
`, _jsx(_components.li, {
                  children: "Moderate Frame, Black"
                }), `
`, _jsx(_components.li, {
                  children: "Center Shadow Rectangle"
                }), `
`, _jsx(_components.li, {
                  children: "Soft Edge Oval"
                }), `
`, _jsx(_components.li, {
                  children: "Metal Rounded Rectangle"
                }), `
`, _jsx(_components.li, {
                  children: "Metal Oval"
                }), `
`]
              }), `
`]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-23",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release has the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Reduces CPU usage during the playback of animations in dynamic PPT files."
            }), `
`, _jsx(_components.li, {
              children: "Improves the smoothness of writing and drawing on the whiteboard."
            }), `
`, _jsx(_components.li, {
              children: "Optimizes the timestamp synchronization algorithm to reduce time differences."
            }), `
`, _jsx(_components.li, {
              children: "Supports printing logs on scene changes."
            }), `
`, _jsxs(_components.li, {
              children: ["Adds the ", _jsx(_components.code, {
                children: "previewURL"
              }), " parameter in ", _jsx(_components.code, {
                children: "PptDescription"
              }), ", which supports displaying dynamic PPT previews in the whiteboard."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "fixed-issues-27",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "The contents on the whiteboard occasionally became unclear when the user adjusted the view."
            }), `
`, _jsx(_components.li, {
              children: "Problems occurred with the SDK code after it was mangled by using uglify-js."
            }), `
`, _jsx(_components.li, {
              children: "Users of the Android or iOS SDK occasionally failed to draw the first line after joining the room."
            }), `
`, _jsxs(_components.li, {
              children: ["The following issues with displaying dynamic PPT files in the whiteboard were fixed:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "Animations did not play in the set order."
                }), `
`, _jsx(_components.li, {
                  children: "Animations did not disappear when playback finished."
                }), `
`, _jsx(_components.li, {
                  children: "Table height was displayed incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "Pictures inserted in content placeholders failed to display."
                }), `
`, _jsx(_components.li, {
                  children: "Some shapes were rendered incorrectly."
                }), `
`, _jsx(_components.li, {
                  children: "The text was incorrectly indented."
                }), `
`, _jsx(_components.li, {
                  children: "Animation triggers did not work."
                }), `
`, _jsx(_components.li, {
                  children: "Picture transparency was incorrect."
                }), `
`]
              }), `
`]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.13.4",
          id: "v2134-2",
          headingLevel: 2,
          value: "v2134-2",
          children: [_jsx(_components.p, {
            children: "v2.13.4 was released on June 15, 2021."
          }), _jsxs(_components.p, {
            children: ["This release fixed the issue that calling the ", _jsx(_components.code, {
              children: "moveCamera"
            }), " method did not take effect."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.13.2",
          id: "v2132-2",
          headingLevel: 2,
          value: "v2132-2",
          children: [_jsx(_components.p, {
            children: "v2.13.2 was released on June 10, 2021."
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Occasional abnormal behaviors of the ", _jsx(_components.code, {
                children: "redo"
              }), " and ", _jsx(_components.code, {
                children: "undo"
              }), " methods."]
            }), `
`, _jsx(_components.li, {
              children: "Occasional abnormality with the text box."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.21",
          id: "v21221-2",
          headingLevel: 2,
          value: "v21221-2",
          children: [_jsx(_components.p, {
            children: "v2.12.21 was released on June 4, 2021."
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Error messages printed in the browser console."
            }), `
`, _jsx(_components.li, {
              children: "Arrowheads were displayed disproportionately large in dynamic PPT files."
            }), `
`, _jsx(_components.li, {
              children: "Frequently switching slides in a dynamic PPT file might cause fonts to display abnormally."
            }), `
`, _jsxs(_components.li, {
              children: ["Dynamic PPT files that do not contain a ", _jsx(_components.code, {
                children: "tablestyle.xml"
              }), " file could not be parsed."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.20",
          id: "v21220-2",
          headingLevel: 2,
          value: "v21220-2",
          children: [_jsx(_components.p, {
            children: "v2.12.20 was released on May 24, 2021."
          }), _jsx(_components.p, {
            children: "This release optimizes the log levels for dynamic PPT files."
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.19",
          id: "v21219-2",
          headingLevel: 2,
          value: "v21219-2",
          children: [_jsx(_components.p, {
            children: "v2.12.19 was released on May 20, 2021."
          }), _jsxs(_components.p, {
            children: ["This release fixed the issue that in certain circumstances, the SDK failed to connect to the server and returned the error message ", _jsx(_components.code, {
              children: "magix connect failed"
            }), "."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.18",
          id: "v21218-2",
          headingLevel: 2,
          value: "v21218-2",
          children: [_jsx(_components.p, {
            children: "v2.12.18 was released on May 17, 2021."
          }), _jsxs(_components.p, {
            children: ["This release enables server-side typesetting (", _jsx(_components.code, {
              children: "useServerWrap"
            }), ") by default and supports reducing the size of font files for fasterer rendering."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.17",
          id: "v21217-2",
          headingLevel: 2,
          value: "v21217-2",
          children: [_jsx(_components.p, {
            children: "v2.12.17 was released on May 13, 2021."
          }), _jsx(_components.p, {
            children: "This release fixed the issue that inaccurate system time on the user's device caused an abnormal delay in a live Interactive Whiteboard room."
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.16",
          id: "v21216-2",
          headingLevel: 2,
          value: "v21216-2",
          children: [_jsx(_components.p, {
            children: "v2.12.16 was released on May 11, 2021."
          }), _jsx(_components.h4, {
            id: "new-features-33",
            children: "New features"
          }), _jsx(_components.p, {
            children: "This release adds the following features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Setting transparency for images in dynamic PPT files."
            }), `
`, _jsx(_components.li, {
              children: "Displaying SmartArt as images in dynamic PPT files (SmartArt animation is not supported)."
            }), `
`, _jsx(_components.li, {
              children: "Displaying charts and tables in dynamic PPT files."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "issues-fixed-2",
            children: "Issues fixed"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "selectable"
              }), " field did not take effect when calling ", _jsx(_components.code, {
                children: "room.insertPlugin"
              }), "."]
            }), `
`, _jsx(_components.li, {
              children: "The rendering process might fail if certain elements on dynamic PPT slides have no content."
            }), `
`, _jsx(_components.li, {
              children: "The Drawing tool might fail to work on dynamic PPT slides."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.15",
          id: "v21215-2",
          headingLevel: 2,
          value: "v21215-2",
          children: [_jsx(_components.p, {
            children: "v2.12.15 was released on April 28, 2021."
          }), _jsx(_components.h4, {
            id: "new-features-34",
            children: "New features"
          }), _jsxs(_components.p, {
            children: ["This release adds ", _jsx(_components.code, {
              children: "changeToClick"
            }), " and ", _jsx(_components.code, {
              children: "changeToText"
            }), ", which set the shortcut to quickly switch to the clicker tool (", _jsx(_components.code, {
              children: "clicker"
            }), ") and text tool (", _jsx(_components.code, {
              children: "text"
            }), "), respectively."]
          }), _jsx(_components.h4, {
            id: "improvements-24",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release improves the loading speed of dynamic PPT files."
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.14",
          id: "v21214-2",
          headingLevel: 2,
          value: "v21214-2",
          children: [_jsx(_components.p, {
            children: "v2.12.14 was released on April 22, 2021."
          }), _jsx(_components.h4, {
            id: "new-features-35",
            children: "New features"
          }), _jsx(_components.p, {
            children: "This release adds audio and video trimming."
          }), _jsx(_components.h4, {
            id: "improvements-25",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release improves the logic of preloading dynamic PPT files."
          }), _jsx(_components.h4, {
            id: "issues-fixed-3",
            children: "Issues fixed"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "The audio or video progress bar on the PPT slide was not displayed in the preview."
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "room.state.cameraState"
              }), " was not updated in a timely manner in some cases."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.13",
          id: "v21213-2",
          headingLevel: 2,
          value: "v21213-2",
          children: [_jsx(_components.p, {
            children: "v2.12.13 was released on April 21, 2021."
          }), _jsx(_components.h4, {
            id: "issues-fixed-4",
            children: "Issues fixed"
          }), _jsx(_components.p, {
            children: "This release fixed the issue that a delay might occur when the text box entered or exited editing mode in some cases."
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.12",
          id: "v21212-2",
          headingLevel: 2,
          value: "v21212-2",
          children: [_jsx(_components.p, {
            children: "v2.12.12 was released on April 16, 2021."
          }), _jsx(_components.h4, {
            id: "improvements-26",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release has the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Improves the compatibility of colors in dynamic PPT files."
            }), `
`, _jsx(_components.li, {
              children: "Improves justified alignment and left-and-right alignment in dynamic PPT files."
            }), `
`, _jsx(_components.li, {
              children: "Improves the display of indentation in dynamic PPT files."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.11",
          id: "v21211-2",
          headingLevel: 2,
          value: "v21211-2",
          children: [_jsx(_components.p, {
            children: "v2.12.11 was released on April 15, 2021."
          }), _jsx(_components.h4, {
            id: "new-features-36",
            children: "New features"
          }), _jsx(_components.p, {
            children: "This release adds the following features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Adds the ", _jsx(_components.code, {
                children: "syncBlockTimstamp"
              }), " method to set the delay time for sending the whiteboard contents. This method is used to ensure that the whiteboard content and the audio and video are sent to the remote users at the same time."]
            }), `
`, _jsxs(_components.li, {
              children: ["Adds the ", _jsx(_components.code, {
                children: "customInput"
              }), " interface for setting custom inputs."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-27",
            children: "Improvements"
          }), _jsxs(_components.p, {
            children: ["This release improves the display performance of ", _jsx(_components.code, {
              children: "canvas"
            }), " mode."]
          }), _jsx(_components.h4, {
            id: "issues-fixed-5",
            children: "Issues fixed"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "InvisiblePlugin"
              }), " had abnormal behavior in some cases."]
            }), `
`, _jsx(_components.li, {
              children: "The text could be misaligned after scaling the view up or down."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.9",
          id: "v2129-2",
          headingLevel: 2,
          value: "v2129-2",
          children: [_jsx(_components.p, {
            children: "v2.12.9 was released on April 9, 2021."
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "A cursor that had disappeared from the whiteboard appeared again in some cases."
            }), `
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "canvas"
              }), " rendering engine rendered images inaccurately in certain older versions of browsers."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.12.8",
          id: "v2128-2",
          headingLevel: 2,
          value: "v2128-2",
          children: [_jsx(_components.p, {
            children: "v2.12.8 was released on March 30, 2021."
          }), _jsx(_components.h4, {
            id: "improvements-28",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This version improves the logic of reporting logs."
          }), _jsx(_components.h4, {
            id: "issues-fixed-6",
            children: "Issues fixed"
          }), _jsx(_components.p, {
            children: "This release fixed the problem that setting follower mode did not take effect immediately."
          })]
        }), _jsx(Accordion, {
          title: "v2.12.6",
          id: "v2126-2",
          headingLevel: 2,
          value: "v2126-2",
          children: _jsx(_components.p, {
            children: "v2.12.6 was released on March 29, 2021. This release fixed the issue that some components could disappear unexpectedly."
          })
        }), _jsxs(Accordion, {
          title: "v2.12.5",
          id: "v2125-2",
          headingLevel: 2,
          value: "v2125-2",
          children: [_jsx(_components.p, {
            children: "v2.12.5 was released on March 20, 2021."
          }), _jsx(_components.h4, {
            id: "new-features-37",
            children: "New features"
          }), _jsxs(_components.p, {
            children: ["This release adds the stroke effect to better display handwriting. When constructing ", _jsx(_components.code, {
              children: "joinRoomParams"
            }), ", you can set ", _jsx(_components.code, {
              children: "disableNewPencil"
            }), " to ", _jsx(_components.code, {
              children: "false"
            }), "/", _jsx(_components.code, {
              children: "true"
            }), " to enable/disable the stroke effect."]
          }), _jsx(_components.p, {
            children: "To enable the stroke effect properly, ensure that every user in the room is using one of the following SDKs:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Android SDK v2.12.3 or later"
            }), `
`, _jsx(_components.li, {
              children: "iOS SDK v2.12.3 or later"
            }), `
`, _jsx(_components.li, {
              children: "Web SDK v2.12.5 or later"
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-29",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release improves the Text tool."
          }), _jsx(_components.h4, {
            id: "issues-fixed-7",
            children: "Issues fixed"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "When presenting dynamic PPT files in certain situations, the screen turned completely white."
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "Symbol"
              }), " objects displayed abnormal actions when using the whiteboard on browsers that support ES6."]
            }), `
`, _jsx(_components.li, {
              children: "Pen tool marks displayed abnormally."
            }), `
`]
          })]
        }), _jsx(Accordion, {
          title: "v2.12.2",
          id: "v2122-2",
          headingLevel: 2,
          value: "v2122-2",
          children: _jsx(_components.p, {
            children: "v2.12.2 was released on March 4, 2021. This release improves network connection."
          })
        }), _jsx(Accordion, {
          title: "v2.12.1",
          id: "v2121",
          headingLevel: 2,
          value: "v2121",
          children: _jsxs(_components.p, {
            children: ["v2.12.1 was released on March 4, 2021. This release fixed the issue that ", _jsx(_components.code, {
              children: "onPPTLoadProgress"
            }), " reported inaccurate progress of file-conversion tasks."]
          })
        }), _jsxs(Accordion, {
          title: "v2.12.0",
          id: "v2120",
          headingLevel: 2,
          value: "v2120",
          children: [_jsx(_components.p, {
            children: "v2.12.0 was released on February 26, 2021."
          }), _jsx(_components.h4, {
            id: "new-features-38",
            children: "New features"
          }), _jsx(_components.p, {
            children: "This release adds the following features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["To provide more drawing options, ", _jsx(_components.code, {
                  children: "ShapeType"
                }), " adds the following enumeration values:"]
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: [_jsx(_components.code, {
                    children: "triangle"
                  }), ": Inserts a triangle"]
                }), `
`, _jsxs(_components.li, {
                  children: [_jsx(_components.code, {
                    children: "rhombus"
                  }), ": Inserts a diamond shape"]
                }), `
`, _jsxs(_components.li, {
                  children: [_jsx(_components.code, {
                    children: "pentagram"
                  }), ": Inserts a pentagram"]
                }), `
`, _jsxs(_components.li, {
                  children: [_jsx(_components.code, {
                    children: "speechBalloon"
                  }), ": Inserts a speech balloon"]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["The floating bar adds a ", _jsx(_components.strong, {
                  children: "Layer"
                }), " button to send an image to the front or back of the layer stack."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["The floating bar adds a ", _jsx(_components.strong, {
                  children: "Replicate"
                }), " button."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: [_jsx(_components.code, {
                  children: "disableOthersSelectingBox"
                }), " is added to ", _jsx(_components.code, {
                  children: "Displayer"
                }), " and ", _jsx(_components.code, {
                  children: "JoinRoomParams"
                }), " to set whether to hide or show other users' selection fields."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: [_jsx(_components.code, {
                  children: "uniformScale"
                }), " is added to ", _jsx(_components.code, {
                  children: "ImageInformation"
                }), " to resize images proportionately."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "The server-side engine can be used for typesetting."
              }), `
`]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvements-30",
            children: "Improvements"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Improves the loading speed of icons on the floating bar."
            }), `
`, _jsx(_components.li, {
              children: "Addresses the issue that after using the Text tool to enter text, it automatically switches to the Selection tool."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "issues-fixed-8",
            children: "Issues fixed"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Occasionally, the generated dynamic web pages could not be previewed."
            }), `
`, _jsx(_components.li, {
              children: "The rendering sequence was incorrect for some highlight selectors."
            }), `
`, _jsx(_components.li, {
              children: "The selectable area around an object could be displayed inaccurately."
            }), `
`, _jsx(_components.li, {
              children: "When rendering a rectangle, the four corners sometimes switched between being rounded and right-angled."
            }), `
`, _jsx(_components.li, {
              children: "PPT files could not be displayed because of rendering errors in internal components."
            }), `
`]
          })]
        })]
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
