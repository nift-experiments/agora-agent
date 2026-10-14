import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Release notes",
  description: "Information about changes in each release of Flexible Classroom."
};
export let _markdown = `

This page provides the release notes for Flexible Classroom.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;web&#x22;,&#x22;electron&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    ## Android [#android]

    <Accordions type="multiple">
      <Accordion title="v2.8.100" id="v28100" headingLevel="2" value="v28100">
        v2.8.00 was released on March 6, 2024

        #### Improvements [#improvements]

        This release optimizes the network connection by supporting the cloud proxy configurations of the RTM service.

        #### Issues fixed [#issues-fixed]

        This release fixes the following issues:

        * The sequence compensation mechanism was abnormal.
        * The on-stage state became inaccurate after students in a lecture hall joined and left the class.
      </Accordion>

      <Accordion title="v2.8.81" id="v2881" headingLevel="2" value="v2881">
        v2.8.81 was released on December 14, 2023.

        #### Improvements [#improvements-1]

        This release made the following improvements:

        * Optimized the logic for capturing the remote raw audio data.
        * Enhanced the data transmission efficiency in the classroom.
        * Optimized the synchronization mechanism of personal data in big classes.
        * Enhanced the optimization of media error callbacks.
        * Optimized the performance of the \`onAudioRawDataBeforeMixed\` and \`onAudioRawDataMixed\` callbacks.
        * Optimized the efficiency of the \`FcrAudioRawDataPosition\` class.

        #### Issues fixed [#issues-fixed-1]

        This release fixed the following issues:

        * In use-cases where the number of publishers exceeded the upper limit, if a student did not stop publishing streams after getting off the stage, the student that got on the stage could not publish streams.
        * After the whiteboard was disabled, the usage calculation continued.
        * The user presence state was incorrectly displayed.
        * Occasional audio mixing issues while using the whiteboard.
        * Occasional video inversion.
        * Occasional device abnormalities when joining a room.
      </Accordion>

      <Accordion title="v2.8.13" id="v2813" headingLevel="2" value="v2813">
        v2.8.13 was released on April 18, 2023.

        #### Issues fixed [#issues-fixed-2]

        This release fixes an issue where video was rotated on devices running Android 13.
      </Accordion>

      <Accordion title="v2.8.11" id="v2811" headingLevel="2" value="v2811">
        v2.8.11 was released on January 13, 2023.

        #### Improvements [#improvements-2]

        This release adds support for sharing audio when sharing the screen.

        #### Issues fixed [#issues-fixed-3]

        This release fixes known issues on mobile devices.
      </Accordion>

      <Accordion title="v2.8.0" id="v280" headingLevel="2" value="v280">
        v2.8.0 was released on December 12, 2022.

        #### New features [#new-features]

        **New UI theme**

        v2.8.0 enables you to set the display theme of the classroom UI to light or dark.

        **Flexible Classroom UI builder**

        Flexible Classroom UI builder is launched to enable you design and customize the UI of your classroom.
        The UI builder currently supports the following Flexible Classroom features:

        * All features of versions 2.6.x and earlier
        * Setting the display theme of the classroom UI to light or dark

        **New demo features**

        v2.8.0 adds the following features to the demo:

        * Signing up, logging in, and deleting the account
        * A course list page
        * Classroom reports, including the following information:
          * Course information
          * Course recording
          * Course reports, including tracking student attendance and students interaction
        * Highlighting of speakers
        * The ability to partially erase the whiteboard

        #### Improvements [#improvements-3]

        This release includes the following improvements:

        * Enhanced UI layer code for developers to customize the classroom UI.
        * The Microsoft Edge browser is now supported.
        * The following features were improved in the demo:
          * The procedures of joining and creating a room. Users can now reserve a room in advance as well.
          * The efficiency of converting course materials.
          * The compatibility of the whiteboard toolbar with touchscreen devices.
        * The \`agora-edu-core\` libraries have been enhanced.
      </Accordion>

      <Accordion title="v2.6.x" id="v26x" headingLevel="2" value="v26x">
        v2.6.x was released on July 29, 2022.

        #### New features [#new-features-1]

        **Taking screenshots (Electron only)**

        v2.6.x adds a snipping tool for Teacher to "take screenshots" of content inside and outside of the classroom, and dynamically add it to the classroom whiteboard. The feature is available in one-to-one classrooms, small classrooms, and lecture halls. This feature is available in the toolbar on Windows and macOS clients. Teachers and teaching assistants can choose to take a screenshot directly or with the current window hidden. The screenshot is displayed in the center of the whiteboard. And Agora provides APIs to expand usage of this feature to include Students and other roles:

        * Web: getSnapshotRgba
        * Electron: getSnapshot
        * iOS: getSnapshot
        * Android: getSnapshot

        **Automatic grouping**

        For the "breakout rooms" feature, v2.6.x supports automatic grouping. Teachers can set up the number of breakout rooms. Then the system randomly assigns the whole class to breakout rooms.

        **Drag and Drop images from desktop into the classroom whiteboard (Web/Electron)**

        v2.6.x allows teachers or teaching assistants on the PC to drop local images to the whiteboard area and insert the images into the whiteboard.

        **Dynamic Size, Resize and Place Teacher Video inside the Classroom**

        v2.6.x allows teachers to freely drag and drop their own video and the video of students within the classroom window. Teachers can also resize a video window by double-clicking it. Whatever actions the teacher takes with their video window, students will see.

        **Hiding the stage area**

        v2.6.x adds a button in the settings of small classrooms, which enables teachers to hide the stage area. After the stage is hidden, the following things occur:

        * All videos are disabled.
        * All students automatically steps down from the stage.
        * The whiteboard is scaled up to fit the classroom.

        **Saving whiteboard contents as images**

        v2.6.x allows teachers and teaching assistants to save contents on the whiteboard to their local device as JPG images.

        **Adding web links as courseware**

        v2.6.x allows teachers to add web links, such as YouTube links and Google Drive links, in **My Resources**. The suffix of such kind of courseware is \`.alf\`, which is the abbreviation of agora link file. After the upload succeeds, the teacher can open the courseware in the classroom.

        #### Issues fixed [#issues-fixed-4]

        This release fixed the following issues:

        * (iOS) Crashes occurred when receiving a global announcement.
        * (iOS) In small classrooms, the teacher did not select the brush, but red lines appeared on the whiteboard.
        * (iOS) In small classrooms, the teacher double-clicked the settings, chat, or roster buttons, the color of these buttons did not change.
        * (Android) In small classrooms, after a student joined a sub-room and invited the teacher to join the same sub-room, the teacher entered the wrong sub-room.
        * (All) In small classrooms, before any student joined the classroom, the teacher started and ended the breakout room session. Then after a student joined the classroom, when the teacher re-started the breakout room session, the 500 error occurred.
      </Accordion>

      <Accordion title="v2.4.x" id="v24x" headingLevel="2" value="v24x">
        v2.4.x was released on June 2, 2022.

        #### New features [#new-features-2]

        **Breakout rooms (Web only)**

        v2.4.x adds the "Breakout rooms" feature in the toolbox of small classrooms. With breakout rooms, students can get together in small groups for discussion and brainstorming sessions. The teacher manually assigns students to each breakout room. A class supports up to 20 breakout rooms with a maximum of 17 members in each room. The features that are available in breakout rooms include real-time audio and video interaction, messaging, whiteboarding, and screen sharing.

        After the breakout session begins, the teacher and teaching assistants have the ability to dynamically join or leave any of the breakout rooms. They can also send announcements to all the breakout rooms. Students are notified in their chat to check for the announcements.

        **Support for the teacher role on Android and iOS clients**

        v2.4.x duplicates the features of the teacher role on desktop experience for Web, macOS, and Windows on mobile clients (Android and iOS).

        <CalloutContainer type="info">
          <CalloutDescription>
            Note that the following features are temporarily not available for the teacher role on mobile clients:

            * Enabling screen sharing
            * Starting pop-up quizzes
            * Starting polls
            * Starting the countdown timer
          </CalloutDescription>
        </CalloutContainer>

        **Ability to turn the whiteboard on and off in the classroom**

        v2.4.x adds the ability to turn the whiteboard on or off in one-on-one classrooms, small classrooms, and lecture halls. By default, after the whiteboard is turned off, the teacher's video is displayed in the whiteboard area. Developers are also able to use UIStore or UIKit to customize the classroom layout when the whiteboard is off.

        #### Improvements [#improvements-4]

        This release includes the following improvements:

        * Optimizes widgets: v2.4.x optimizes the internal technical architecture of the three widgets: Pop-up Quiz, Poll, and Countdown Timer for the higher stability and better end-user experience. In addition, v2.4.x enables developers to get the data of pop-up quizzes and polls through RESTful APIs. For details, see the [RESTful API reference](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api#get-data-for-pop-up-quizzes).
        * Improves the compatibility of the Web client: The Web client is now supported on the desktop version of Firefox.
        * Optimizes the cloud storage: v2.4.x optimizes the business logic and UI of the cloud storage feature in Flexible Classroom.
        * Optimizes the whiteboard: v2.4.x adds laser pointer, undo, redo, and one-click screen-clearing features on the whiteboard in Flexible Classroom.
        * Reward enhancements: The teacher can now extend and remove student rewards dynamically during a class session.

        #### Issues fixed [#issues-fixed-5]

        This release fixed the following issues:

        * When the teacher moved a file or a tool on the whiteboard, the movement might not be synchronized on the students' side.
        * Logging in to the IM module occasionally failed.
        * Loading a file failed when the format of the file was not supported.
      </Accordion>

      <Accordion title="v2.1.0" id="v210" headingLevel="2" value="v210">
        v2.1.0 was released on February 23, 2022.

        #### Release highlights [#release-highlights]

        In v2.1.0, Agora fully optimizes the internal architecture of Flexible Classroom. Compared to earlier versions, v2.1.0 has the following advantages:

        * New features:

          * Answer Selector (Pop-up Quiz), Polling Feature, Countdown Timer, Mobile HTML5 Support, and ability to turn the whiteboard on or off in the classroom.
          * Video Gallery Rotation: Ability for teachers to configure the classroom setting to automatically rotate the on-stage student gallery view without attempting to scroll or page through the class participants.

        * Lecture Hall: Expands audience capacity up to 5,000 students, from 1,000 in the last version.

        * Web client:

          * Adds support for Safari on desktop and iPad, as well as for Chrome on the iPad.
          * Introduces [EDUClassroomUIStore](/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/enable-flexible-classroom) for customizing the classroom UI, which replaces the UIKit in previous versions.

        * Android and iOS clients:

          * Redesigns contexts for better abstraction of modular features in Flexible Classroom, where each context can be controlled separately.

          * Refactors context APIs with the following improvements:

            * Renamed APIs and parameters for intuitiveness, understandability, and consistency.
            * Improved flexibility of API calling.
            * More APIs for developers to customize their own features.

        #### Flexible Classroom v2.1.0 migration guidance [#flexible-classroom-v210-migration-guidance]

        If you have made changes to your Flexible Classroom UI in earlier versions, in order to migrate to v2.1.0, Agora recommends you create a new project based on v2.1.0 and re-implement the UI changes. Please refer to the following Flexible Classroom v2.1.0 migration guides:

        * [Migration guide](/en/realtime-media/flexible-classroom/reference/migration-guide)

        If you encounter any problem during the migration process, or need to migrate from Flexible Classroom earlier than v1.1.5, please contact [support@agora.io](mailto\\:support@agora.io) so that Agora technical support team can help.

        #### New Features [#new-features-3]

        **Answer selector and polling feature**

        To increase engagement and enhance interactivity, v2.1.0 adds the following teaching tools:

        * Answer selector: This tool is applicable to use-cases where the teacher asks a single-choice or multiple-choice question and requests the whole class to answer the question together. The teacher can set up the choices and the correct answer, and then trigger answering. The teacher can see the number of students who have submitted an answer and the percentage that are correct in real time.
        * Polling: This tool is applicable to use-cases where the teacher wants to get feedback from the whole class. The teacher can set up the subject, choices, and start and end time of the poll. Flexible Classroom also provides live visualization of polling results.

        **Ability to turn the whiteboard on or off in the classroom**

        As of v2.1.0, Agora supports turning the whiteboard on or off in the classroom. For details, see [Enable and disable the whiteboard](/en/realtime-media/flexible-classroom/build/customize-the-ui-and-plugins/disable-whiteboard-module). When using the APIs for this feature, after the whiteboard is closed, developers can use Flexible Classroom UIKit or UIStore to customize their unique classroom with their desired video gallery to fill the classroom window.

        **Video gallery rotation**

        Flexible Classroom gives teachers the ability to configure the classroom settings for improved student engagement and video. The Video Gallery Rotation feature lets the teacher automatically rotate the on-stage student gallery view at a desired frequency and sequence, thus eliminating the need for the teacher to scroll or page through the class participants.

        **Mobile HTML5 support**

        As of v2.1.0, students can join a lecture hall in Flexible Classroom simply by clicking on a shared webpage link within some mobile social applications that use a web view. After joining the classroom on mobile devices, students can do the following things:

        * Watch and hear the teacher's lecture, as well as presentations by students "on the stage".
        * View the whiteboard and the screen shared by the teacher.
        * Send messages to chat with other participants in the classroom.
        * Engage in class activities such as polling, answering, and viewing the teacher's count down clock.

        <CalloutContainer type="info">
          <CalloutDescription>
            Please note that the following features are not supported on HTML5:

            * Students raising their hands to apply for speaking on the "stage".
            * Students drawing on the whiteboard.
            * Students testing or switching their local media devices.
          </CalloutDescription>
        </CalloutContainer>

        #### Improvements [#improvements-5]

        v2.1.0 makes the following improvements:

        * Optimizes the business logic and UI of various features in Flexible Classroom, such as students "raising their hands" for permission to speak, the class roster, and in-class reminders.
        * Increases the upper limit on the number of users in a lecture hall to 5,000.
        * Improves the compatibility of the Web client. The Web client is now supported on Safari for the desktop and iPad, as well as on Chrome for the iPad.
        * Supports displaying thumbnails and animations for the PPT files opened in the classroom.
        * When a classroom is being recorded, the recording button changes to red.

        #### Issues fixed [#issues-fixed-6]

        v2.1.0 fixed the following issues:

        * (All platforms) The RTC SDK and whiteboard usage occurred in Flexible Classroom was not showed in Agora Console.
        * (Web) Occasional failure to record the whiteboard contents in a small classroom.
        * (Web) Occasional failure to send a massage in a small classroom.
        * (Web) After the teacher joined a lecture hall, there was a possibility that the whiteboard was not loaded successfully.
        * (Web/Windows/macOS) Sometimes in a lecture hall, a student "raised a hand" to apply for making a presentation, an error occurred. And the teacher did not receive the application.
        * (Web/Windows/macOS) In a small classroom, a student went onto the "stage" and turned on the video. After the student left the room, the student's video did not disappear immediately.
        * (Windows) When a student left and rejoined the room, the student could not see the room announcement published by the teacher.
        * (Windows) In a one-to-one classroom, the student's video occasionally went black.
        * (iOS) When the teacher displayed a PPT that contained audio and video, the student on iOS sometimes neither heard the audio nor saw the video.
        * (Android) In a small classroom, sometimes if a student on Android left and rejoined the room, the student could not see the teacher's video.
      </Accordion>

      <Accordion title="v1.1.5.1" id="v1151" headingLevel="2" value="v1151">
        v1.1.5.1 was released on October 20, 2021.

        #### New features [#new-features-4]

        **Support for customizing the video encoding configurations**

        As of v1.1.5.1, developers can customize the video encoding configurations, including the width, height, frame rate, and bitrate. When calling the \`launch\` method, developers can set the \`videoEncoderConfig\` parameter in \`mediaOptions\` to customize the encoding configurations for the video stream captured by a camera or the screen-sharing video stream.

        The recommended video encoding configurations are as follows:

        * One-to-one Classroom: 320x240, 200 Kbps, and 15 fps.
        * Small Classroom and Lecture Hall: 160x120, 65 Kbps, and 15 fps, if the number of students in a classroom who send their video stream at the same time is less than or equal to six.

        **Students automatically going onto the "stage"**

        v1.1.5.1 adds the feature of students automatically going onto the "stage" in the Small Classroom scenario. Once the teacher or TA enables this feature, students go onto the "stage" at specified intervals.

        **Support for setting the latency level of a receiver**

        As of v1.1.5.1, developers can set the latency level of an audience member. By default, the latency level is ultra-low. Developers can set the \`latencyLevel\` parameter in the \`launch\` method to change the latency level:

        * Ultra-low latency: The latency from the sender to the receiver is 400 ms to 800 ms.
        * Low latency: The latency from the sender to the receiver is 1500 ms to 2000 ms.

        The charges for low latency and ultra-low latency are different. For details, see the [pricing page](/en/realtime-media/rtc/reference/pricing).

        **Support for setting whether students automatically send streams after going onto the "stage"**

        v1.1.5.1 allows developers to control whether students automatically send audio or video streams after they go onto the "stage". By default, students do not send audio nor video streams after they go onto the "stage". You can change the default behavior by setting the \`streamState\` parameter when calling \`launch\`.

        **Pre-class device test and local video preview**

        As of v1.1.5.1, Flexible Classroom adds the Media Context API to allow developers to implement the pre-class test module, with which students can check whether their camera and microphone are functioning correctly and preview how they look and sound before they join a class.

        **The countdown timer**

        v1.1.5.1 adds a countdown timer in Flexible Classroom. The teacher can find the countdown time in the toolbox and set an initial value. After the teacher clicks the start button, students see a countdown window.

        **Support for media device management**

        As of v1.1.5.1, students can control whether local cameras, microphones, and speakers are on or off during the class. Agora adds the \`DeviceContext\` and \`IDeviceHandler\` classes in the Agora Edu Context and provides methods and callbacks for local device control.

        **Teachers making notes on their shared screen**

        As of v1.1.5.1, teachers can make notes on the screen that they share with the basic whiteboard tools.

        **Support for custom user properties and classroom properties**

        As of v1.1.5.1, developers can customize properties for users and classrooms. These properties can be updated, and the updates can be monitored. For example, developers can set the profile photo as a custom user property. To support this feature, Agora makes the following changes to the Agora Edu Context:

        * Classroom properties:

          * Add the \`updateFlexRoomProps\` method in \`RoomContext\` for adding or updating custom classroom properties.
          * Add the \`onFlexRoomPropsInitialized\` and \`onFlexRoomPropertiesChanged\` callbacks in \`IRoomHandler\` for indicating the initial custom classroom properties and subsequent classroom property changes.

        * User properties:

          * Add the \`userProperties\` parameter in \`AgoraEduLaunchConfig\` for passing in custom user properties when launching a classroom.
          * Add the \`updateFlexUserProperties\` method in \`UserContext\` for adding or updating custom user properties.
          * Add the \`onFlexUserPropertiesChanged\` callback in \`IEduUserHandler\` for indicating user property changes.

        #### Improvements [#improvements-6]

        * To optimize the PPT display on the students' clients, v1.1.5.1 adds the \`boardFitMode\` parameter in \`AgoraEduLaunchConfig\` for setting the PPT display mode. By default, the PPT display mode is fit, which means uniformly scaling the PPT until one of its dimensions fits the boundary. Developers can change the \`boardFitMode\` to \`Retain\` when calling the \`launch\` method. In this mode, if the student manually adjusts the PPT size, the client maintains this size no matter what class the student joins.
        * As of v1.1.5.1, Flexible Classroom supports displaying HTML5 courseware on the whiteboard.
      </Accordion>

      <Accordion title="v1.1.0.1" id="v1101" headingLevel="2" value="v1101">
        v1.1.0.1 was released on July 7, 2021.

        #### New features [#new-features-5]

        **Media encryption**

        To ensure the security during real-time audio and video transmission, v1.1.0.1 adds the \`mediaOptions\` parameter in AgoraEduLaunchConfig for supporting media stream encryption. By default, Flexible Classroom does not encrypt the media stream. To enable media encryption, use the \`mediaOptions\` parameter to choose an encryption mode and set the encryption key. Flexible Classroom supports the following encryption modes:

        * \`AES_128_XTS\`: 128-bit AES encryption, XTS mode.
        * \`AES_128_ECB\`: 128-bit AES encryption, ECB mode.
        * \`AES_256_XTS\`: 256-bit AES encryption, XTS mode.
        * \`AES_128_GCM\`: 128-bit AES encryption, GCM mode.
        * \`AES_256_GCM\`: 256-bit AES encryption, GCM mode.

        <CalloutContainer type="info">
          <CalloutDescription>
            The teacher and students in a classroom must use the same encryption mode and key. If not, unexpected issues, such as a white or black screen and noise, may occur.
          </CalloutDescription>
        </CalloutContainer>

        #### Issues fixed [#issues-fixed-7]

        v1.1.0.1 fixes the issue that the default region was not NA (North America).
      </Accordion>

      <Accordion title="v1.1.0" id="v110" headingLevel="2" value="v110">
        v1.1.0 was released on June 18, 2021. This is the first release of Agora Flexible Classroom with the following features:

        * Real-time audio and video interaction
        * Signaling
        * Interactive whiteboard
        * Screen sharing
        * Recording and replay
        * Teaching tools, including cloud storage, classroom rewards, and the user list
        * Customizing the classroom user interfaces and embedding custom plugins in classrooms
        * Flexible Classroom cloud service for classroom and user management
      </Accordion>
    </Accordions>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    ## iOS [#ios]

    <Accordions type="multiple">
      <Accordion title="v2.8.100" id="v28100-1" headingLevel="2" value="v28100-1">
        v2.8.00 was released on March 6, 2024

        #### Improvements [#improvements-7]

        This release optimizes the network connection by supporting the cloud proxy configurations of the RTM service.

        #### Issues fixed [#issues-fixed-8]

        This release fixes the following issues:

        * The font size displayed on the whiteboard was abnormal.
        * The on-stage state became inaccurate after students in a lecture hall joined and left the class.
      </Accordion>

      <Accordion title="v2.8.80" id="v2880" headingLevel="2" value="v2880">
        v2.8.80 was released on December 14, 2023.

        #### Improvements [#improvements-8]

        This release made the following improvements:

        * Optimized the logic for capturing the remote raw audio data.
        * Enhanced the data transmission efficiency in the classroom.
        * Optimized the synchronization mechanism of personal data in big classes.
        * Enhanced the optimization of media error callbacks.
        * Optimized the performance of the \`onAudioRawDataBeforeMixed\` and \`onAudioRawDataMixed\` callbacks.
        * Optimized the efficiency of the \`FcrAudioRawDataPosition\` class.

        #### Issues fixed [#issues-fixed-9]

        This release fixed the following issues:

        * In use-cases where the number of publishers exceeded the upper limit, if a student did not stop publishing streams after getting off the stage, the student that got on the stage could not publish streams.
        * After the whiteboard was disabled, the usage calculation continued.
        * The user presence state was incorrectly displayed.
        * Occasional audio mixing issues while using the whiteboard.
        * Occasional video inversion.
      </Accordion>

      <Accordion title="v2.8.11" id="v2811-1" headingLevel="2" value="v2811-1">
        v2.8.11 was released on January 13, 2023.

        #### Improvements [#improvements-9]

        This release adds support for sharing audio when sharing the screen.

        #### Issues fixed [#issues-fixed-10]

        This release fixes known issues on mobile devices.
      </Accordion>

      <Accordion title="v2.8.0" id="v280-1" headingLevel="2" value="v280-1">
        v2.8.0 was released on December 12, 2022.

        #### New features [#new-features-6]

        **New UI theme**

        v2.8.0 enables you to set the display theme of the classroom UI to light or dark.

        **New language supported**

        v2.8.0 supports setting the language of the classroom UI to Chinese or English.

        **Login and signup page**

        The Flexible Classroom demo adds a login and a signup page.

        **Flexible Classroom UI builder**

        Flexible Classroom UI builder is launched to enable you design and customize the UI of your classroom.
        The UI builder currently supports the following
        Flexible Classroom features:

        * All features of versions 2.6.x and earlier
        * Setting the display theme of the classroom UI to light or dark
        * Setting the language of the classroom UI to Chinese or English

        **Online proctoring scenario**

        v2.8.0 provides the Agora Proctor SDK for online exam proctoring scenarios. For details, see the [Agora Proctor
        SDK API reference](/en/api-reference/api-ref/flexible-classroom/proctor-sdk).

        **New demo features**

        v2.8.0 adds the following features to the demo:

        * Signing up, logging in, and deleting the account
        * A course list page
        * Classroom reports, including the following information:
          * Course information
          * Course recording
          * Course reports, including tracking student attendance and students interaction
        * Highlighting of speakers
        * The ability to partially erase the whiteboard

        #### Improvements [#improvements-10]

        This release includes the following improvements:

        * Enhanced UI layer code for developers to customize the classroom UI.
        * Support for the Microsoft Edge browser.
        * The following features were improved in the demo:
          * The procedures of joining and creating a room. Users now can reserve a room in advance as well
          * The efficiency of converting course materials
          * The compatibility of the whiteboard toolbar with touchscreen devices.
        * The \`agora-edu-core\` libraries have been enhanced.
      </Accordion>

      <Accordion title="v2.6.x" id="v26x-1" headingLevel="2" value="v26x-1">
        v2.6.x was released on July 29, 2022.

        #### New features [#new-features-7]

        **Taking screenshots (Electron only)**

        v2.6.x adds a snipping tool for Teacher to "take screenshots" of content inside and outside of the classroom, and dynamically add it to the classroom whiteboard. The feature is available in one-to-one classrooms, small classrooms, and lecture halls. This feature is available in the toolbar on Windows and macOS clients. Teachers and teaching assistants can choose to take a screenshot directly or with the current window hidden. The screenshot is displayed in the center of the whiteboard. And Agora provides APIs to expand usage of this feature to include Students and other roles:

        * Web: getSnapshotRgba
        * Electron: getSnapshot
        * iOS: getSnapshot
        * Android: getSnapshot

        **Automatic grouping**

        For the "breakout rooms" feature, v2.6.x supports automatic grouping. Teachers can set up the number of breakout rooms. Then the system randomly assigns the whole class to breakout rooms.

        **Drag and Drop images from desktop into the classroom whiteboard (Web/Electron)**

        v2.6.x allows teachers or teaching assistants on the PC to drop local images to the whiteboard area and insert the images into the whiteboard.

        **Dynamic Size, Resize and Place Teacher Video inside the Classroom**

        v2.6.x allows teachers to freely drag and drop their own video and the video of students within the classroom window. Teachers can also resize a video window by double-clicking it. Whatever actions the teacher takes with their video window, students will see.

        **Hiding the stage area**

        v2.6.x adds a button in the settings of small classrooms, which enables teachers to hide the stage area. After the stage is hidden, the following things occur:

        * All videos are disabled.
        * All students automatically steps down from the stage.
        * The whiteboard is scaled up to fit the classroom.

        **Saving whiteboard contents as images**

        v2.6.x allows teachers and teaching assistants to save contents on the whiteboard to their local device as JPG images.

        **Adding web links as courseware**

        v2.6.x allows teachers to add web links, such as YouTube links and Google Drive links, in **My Resources**. The suffix of such kind of courseware is \`.alf\`, which is the abbreviation of agora link file. After the upload succeeds, the teacher can open the courseware in the classroom.

        #### Issues fixed [#issues-fixed-11]

        This release fixed the following issues:

        * (iOS) Crashes occurred when receiving a global announcement.
        * (iOS) In small classrooms, the teacher did not select the brush, but red lines appeared on the whiteboard.
        * (iOS) In small classrooms, the teacher double-clicked the settings, chat, or roster buttons, the color of these buttons did not change.
        * (Android) In small classrooms, after a student joined a sub-room and invited the teacher to join the same sub-room, the teacher entered the wrong sub-room.
        * (All) In small classrooms, before any student joined the classroom, the teacher started and ended the breakout room session. Then after a student joined the classroom, when the teacher re-started the breakout room session, the 500 error occurred.
      </Accordion>

      <Accordion title="v2.4.x" id="v24x-1" headingLevel="2" value="v24x-1">
        v2.4.x was released on June 2, 2022.

        #### New features [#new-features-8]

        **Breakout rooms (Web only)**

        v2.4.x adds the "Breakout rooms" feature in the toolbox of small classrooms. With breakout rooms, students can get together in small groups for discussion and brainstorming sessions. The teacher manually assigns students to each breakout room. A class supports up to 20 breakout rooms with a maximum of 17 members in each room. The features that are available in breakout rooms include real-time audio and video interaction, messaging, whiteboarding, and screen sharing.

        After the breakout session begins, the teacher and teaching assistants have the ability to dynamically join or leave any of the breakout rooms. They can also send announcements to all the breakout rooms. Students are notified in their chat to check for the announcements.

        **Support for the teacher role on Android and iOS clients**

        v2.4.x duplicates the features of the teacher role on desktop experience for Web, macOS, and Windows on mobile clients (Android and iOS).

        <CalloutContainer type="info">
          <CalloutDescription>
            Note that the following features are temporarily not available for the teacher role on mobile clients:

            * Enabling screen sharing
            * Starting pop-up quizzes
            * Starting polls
            * Starting the countdown timer
          </CalloutDescription>
        </CalloutContainer>

        **Ability to turn the whiteboard on and off in the classroom**

        v2.4.x adds the ability to turn the whiteboard on or off in one-on-one classrooms, small classrooms, and lecture halls. By default, after the whiteboard is turned off, the teacher's video is displayed in the whiteboard area. Developers are also able to use UIStore or UIKit to customize the classroom layout when the whiteboard is off.

        #### Improvements [#improvements-11]

        This release includes the following improvements:

        * Optimizes widgets: v2.4.x optimizes the internal technical architecture of the three widgets: Pop-up Quiz, Poll, and Countdown Timer for the higher stability and better end-user experience. In addition, v2.4.x enables developers to get the data of pop-up quizzes and polls through RESTful APIs. For details, see the [RESTful API reference](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api#get-data-for-pop-up-quizzes).
        * Improves the compatibility of the Web client: The Web client is now supported on the desktop version of Firefox.
        * Optimizes the cloud storage: v2.4.x optimizes the business logic and UI of the cloud storage feature in Flexible Classroom.
        * Optimizes the whiteboard: v2.4.x adds laser pointer, undo, redo, and one-click screen-clearing features on the whiteboard in Flexible Classroom.
        * Reward enhancements: The teacher can now extend and remove student rewards dynamically during a class session.

        #### Issues fixed [#issues-fixed-12]

        This release fixed the following issues:

        * When the teacher moved a file or a tool on the whiteboard, the movement might not be synchronized on the students' side.
        * Logging in to the IM module occasionally failed.
        * Loading a file failed when the format of the file was not supported.
      </Accordion>

      <Accordion title="v2.1.x" id="v21x" headingLevel="2" value="v21x">
        v2.1.0 was released on February 23, 2022.

        #### Release highlights [#release-highlights-1]

        In v2.1.0, Agora fully optimizes the internal architecture of Flexible Classroom. Compared to earlier versions, v2.1.0 has the following advantages:

        * New features:

          * Answer Selector (Pop-up Quiz), Polling Feature, Countdown Timer, Mobile HTML5 Support, and ability to turn the whiteboard on or off in the classroom.
          * Video Gallery Rotation: Ability for teachers to configure the classroom setting to automatically rotate the on-stage student gallery view without attempting to scroll or page through the class participants.

        * Lecture Hall: Expands audience capacity up to 5,000 students, from 1,000 in the last version.

        * Web client:

          * Adds support for Safari on desktop and iPad, as well as for Chrome on the iPad.
          * Introduces [EDUClassroomUIStore](/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/enable-flexible-classroom) for customizing the classroom UI, which replaces the UIKit in previous versions.

        * Android and iOS clients:

          * Redesigns contexts for better abstraction of modular features in Flexible Classroom, where each context can be controlled separately.

          * Refactors context APIs with the following improvements:

            * Renamed APIs and parameters for intuitiveness, understandability, and consistency.
            * Improved flexibility of API calling.
            * More APIs for developers to customize their own features.

        #### Flexible Classroom v2.1.0 migration guidance [#flexible-classroom-v210-migration-guidance-1]

        If you have made changes to your Flexible Classroom UI in earlier versions, in order to migrate to v2.1.0, Agora recommends you create a new project based on v2.1.0 and re-implement the UI changes. Please refer to the following Flexible Classroom v2.1.0 migration guides:

        * [Migration guide](/en/realtime-media/flexible-classroom/reference/migration-guide)

        If you encounter any problem during the migration process, or need to migrate from Flexible Classroom earlier than v1.1.5, please contact [support@agora.io](mailto\\:support@agora.io) so that Agora technical support team can help.

        #### New Features [#new-features-9]

        **Answer selector and polling feature**

        To increase engagement and enhance interactivity, v2.1.0 adds the following teaching tools:

        * Answer selector: This tool is applicable to scenarios where the teacher asks a single-choice or multiple-choice question and requests the whole class to answer the question together. The teacher can set up the choices and the correct answer, and then trigger answering. The teacher can see the number of students who have submitted an answer and the percentage that are correct in real time.
        * Polling: This tool is applicable to scenarios where the teacher wants to get feedback from the whole class. The teacher can set up the subject, choices, and start and end time of the poll. Flexible Classroom also provides live visualization of polling results.

        **Ability to turn the whiteboard on or off in the classroom**

        As of v2.1.0, Agora supports turning the whiteboard on or off in the classroom. For details, see [Enable and disable the whiteboard](/en/realtime-media/flexible-classroom/build/customize-the-ui-and-plugins/disable-whiteboard-module). When using the APIs for this feature, after the whiteboard is closed, developers can use Flexible Classroom UIKit or UIStore to customize their unique classroom with their desired video gallery to fill the classroom window.

        **Video gallery rotation**

        Flexible Classroom gives teachers the ability to configure the classroom settings for improved student engagement and video. The Video Gallery Rotation feature lets the teacher automatically rotate the on-stage student gallery view at a desired frequency and sequence, thus eliminating the need for the teacher to scroll or page through the class participants.

        **Mobile HTML5 support**

        As of v2.1.0, students can join a lecture hall in Flexible Classroom simply by clicking on a shared webpage link within some mobile social applications that use a web view. After joining the classroom on mobile devices, students can do the following things:

        * Watch and hear the teacher's lecture, as well as presentations by students "on the stage".
        * View the whiteboard and the screen shared by the teacher.
        * Send messages to chat with other participants in the classroom.
        * Engage in class activities such as polling, answering, and viewing the teacher's count down clock.

        <CalloutContainer type="info">
          <CalloutDescription>
            Please note that the following features are not supported on HTML5:

            * Students raising their hands to apply for speaking on the "stage".
            * Students drawing on the whiteboard.
            * Students testing or switching their local media devices.
          </CalloutDescription>
        </CalloutContainer>

        #### Improvements [#improvements-12]

        v2.1.0 makes the following improvements:

        * Optimizes the business logic and UI of various features in Flexible Classroom, such as students "raising their hands" for permission to speak, the class roster, and in-class reminders.
        * Increases the upper limit on the number of users in a lecture hall to 5,000.
        * Improves the compatibility of the Web client. The Web client is now supported on Safari for the desktop and iPad, as well as on Chrome for the iPad.
        * Supports displaying thumbnails and animations for the PPT files opened in the classroom.
        * When a classroom is being recorded, the recording button changes to red.

        #### Issues fixed [#issues-fixed-13]

        v2.1.0 fixed the following issues:

        * (All platforms) The RTC SDK and whiteboard usage occurred in Flexible Classroom was not showed in Agora Console.
        * (Web) Occasional failure to record the whiteboard contents in a small classroom.
        * (Web) Occasional failure to send a massage in a small classroom.
        * (Web) After the teacher joined a lecture hall, there was a possibility that the whiteboard was not loaded successfully.
        * (Web/Windows/macOS) Sometimes in a lecture hall, a student "raised a hand" to apply for making a presentation, an error occurred. And the teacher did not receive the application.
        * (Web/Windows/macOS) In a small classroom, a student went onto the "stage" and turned on the video. After the student left the room, the student's video did not disappear immediately.
        * (Windows) When a student left and rejoined the room, the student could not see the room announcement published by the teacher.
        * (Windows) In a one-to-one classroom, the student's video occasionally went black.
        * (iOS) When the teacher displayed a PPT that contained audio and video, the student on iOS sometimes neither heard the audio nor saw the video.
        * (Android) In a small classroom, sometimes if a student on Android left and rejoined the room, the student could not see the teacher's video.
      </Accordion>

      <Accordion title="v1.1.5" id="v115" headingLevel="2" value="v115">
        v1.1.5 was released on October 20, 2021.

        #### Compatibility changes [#compatibility-changes]

        **Integration changes**

        In v1.1.5, Flexible Classroom is divided into four libraries: \`AgoraClassroomSDK\`, \`AgoraEduCore\`, \`AgoraEduUI\`, and \`AgoraEduContext\`. \`AgoraClassroomSDK\`, \`AgoraEduUI\`, and \`AgoraEduContext\` are open-source libraries and released on Github and CocoaPods. \`AgoraEduCore\` is a closed-source library and released on CocoaPods as a binary package. If you change the default UI of Flexible Classroom in a previous version, please see the [migration guide](/en/realtime-media/flexible-classroom/reference/migration-guide).

        **Edu Context API changes**

        Agora makes the following changes to the Edu Context APIs in v1.1.5:

        * Delete "Set" or "Get" in the names of all handlers. Agora supports backward compatibility but recommends you change to the new handlers as soon as possible.
        * Deprecate all \`onShowXXXTips\` methods and move the code of texts and toasts to \`AgoraEduUI\`.

        #### New features [#new-features-10]

        **Support for customizing the video encoding configurations**

        As of v1.1.5, developers can customize the video encoding configurations, including the width, height, frame rate, and bitrate. When calling the \`launch\` method, developers can set the \`cameraEncoderConfiguration\` parameter in \`AgoraEduLaunchConfig\` to customize the encoding configurations for the video stream captured by a camera or the screen-sharing video stream.

        The recommended video encoding configurations are as follows:

        * One-to-one Classroom: 320x240, 200 Kbps, and 15 fps.
        * Small Classroom and Lecture Hall: 160x120, 65 Kbps, and 15 fps, if the number of students in a classroom who send their video stream at the same time is less than or equal to six.

        **Students automatically going onto the "stage"**

        v1.1.5 adds the feature of students automatically going onto the "stage" in the Small Classroom scenario. Once the teacher or TA enables this feature, students go onto the "stage" at specified intervals.

        **Support for setting the latency level of a receiver**

        As of v1.1.5, developers can set the latency level of an audience member. By default, the latency level is ultra-low. Developers can set the \`latencyLevel\` parameter in the \`launch\` method to change the latency level:

        * Ultra-low latency: The latency from the sender to the receiver is 400 ms to 800 ms.
        * Low latency: The latency from the sender to the receiver is 1500 ms to 2000 ms.

        The charges for low latency and ultra-low latency are different. For details, see the [pricing page](/en/realtime-media/rtc/reference/pricing).

        **Support for setting whether students automatically send streams after going onto the "stage" (Android/iOS)**

        v1.1.5 allows developers to control whether students automatically send audio or video streams after they go onto the "stage". By default, students do not send audio nor video streams after they go onto the "stage". You can change the default behavior by setting the \`audioState\` and \`videoState\` parameters when calling \`launch\`.

        **Pre-class device test and local video preview**

        As of v1.1.5, Flexible Classroom adds the **Media Context API** to allow developers to implement the pre-class test module, with which students can check whether their camera and microphone are functioning correctly and preview how they look and sound before they join a class.

        **The countdown timer**

        v1.1.5 adds a countdown timer in Flexible Classroom. The teacher can find the countdown time in the toolbox and set an initial value. After the teacher clicks the start button, students see a countdown window.

        **Support for media device management**

        As of v1.1.5, students can control whether local cameras, microphones, and speakers are on or off during the class. Agora adds the \`AgoraEduDeviceContext\` and \`AgoraEduDeviceHandler\` classes in the Agora Edu Context and provides methods and callbacks for local device control.

        **Teachers making notes on their shared screen**

        As of v1.1.5, teachers can make notes on the screen that they share with the basic whiteboard tools.

        **Support for custom user properties and classroom properties**

        As of v1.1.15, developers can customize properties for users and classrooms. These properties can be updated, and the updates can be monitored. For example, developers can set the profile photo as a custom user property. To support this feature, Agora makes the following changes to the Agora Edu Context:

        * Classroom properties:

          * Add the \`updateFlexRoomProps\` method in \`AgoraEduRoomContext\` for adding or updating custom classroom properties.
          * Add the \`onFlexRoomPropsInitialized\` and \`onFlexRoomPropertiesChanged\` callbacks in \`AgoraEduRoomHandler\` for indicating the initial custom classroom properties and subsequent classroom property changes.

        * User properties:

          * Add the \`userProperties\` parameter in \`AgoraEduLaunchConfig\` for passing in custom user properties when launching a classroom.
          * Add the \`updateFlexUserProperties\` method in \`AgoraEduUserContext\` for adding or updating custom user properties.
          * Add the \`onFlexUserPropertiesChanged\` callback in \`AgoraEduUserHandler\` for indicating user property changes.

        #### Improvements [#improvements-13]

        * To optimize the PPT display on the students' clients, v1.1.5 adds the \`boardFitMode\` parameter in \`AgoraEduLaunchConfig\` for setting the PPT display mode. By default, the PPT display mode is fit, which means uniformly scaling the PPT until one of its dimensions fits the boundary. Developers can change the \`boardFitMode\` to \`Retain\` when calling the \`launch\` method. In this mode, if the student manually adjusts the PPT size, the client maintains this size no matter what class the student joins.
        * As of v1.1.5, Flexible Classroom supports displaying HTML5 courseware on the whiteboard.
      </Accordion>

      <Accordion title="v1.1.0.1" id="v1101-1" headingLevel="2" value="v1101-1">
        v1.1.0.1 was released on July 7, 2021.

        #### New features [#new-features-11]

        **Media encryption**

        To ensure the security during real-time audio and video transmission, v1.1.0.1 adds the \`mediaOptions\` parameter in [AgoraEduLaunchConfig](/en/api-reference/api-ref/flexible-classroom/classroom-sdk#agoraedulaunchconfig) for supporting media stream encryption. By default, Flexible Classroom does not encrypt the media stream. To enable media encryption, use the \`mediaOptions\` parameter to choose an encryption mode and set the encryption key. Flexible Classroom supports the following encryption modes:

        * \`AgoraEduMediaEncryptionModeAES128XTS\`: 128-bit AES encryption, XTS mode.
        * \`AgoraEduMediaEncryptionModeAES128ECB\`: 128-bit AES encryption, ECB mode.
        * \`AgoraEduMediaEncryptionModeAES256XTS\`: 256-bit AES encryption, XTS mode.
        * \`AgoraEduMediaEncryptionModeAES128GCM\`: 128-bit AES encryption, GCM mode.
        * \`AgoraEduMediaEncryptionModeAES256GCM\`: 256-bit AES encryption, GCM mode.

        <CalloutContainer type="info">
          <CalloutDescription>
            The teacher and students in a classroom must use the same encryption mode and key. If not, unexpected issues, such as a white or black screen and noise, may occur.
          </CalloutDescription>
        </CalloutContainer>

        #### Issues fixed [#issues-fixed-14]

        v1.1.0.1 fixes the issue that the default region was not NA (North America).
      </Accordion>

      <Accordion title="v1.1.0" id="v110-1" headingLevel="2" value="v110-1">
        v1.1.0 was released on June 18, 2021. This is the first release of Agora Flexible Classroom with the following features:

        * Real-time audio and video interaction
        * Signaling
        * Interactive whiteboard
        * Screen sharing
        * Recording and replay
        * Teaching tools, including cloud storage, classroom rewards, and the user list
        * Customizing the classroom user interfaces and embedding custom plugins in classrooms
        * Flexible Classroom cloud service for classroom and user management
      </Accordion>
    </Accordions>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ## Web [#web]

    <Accordions type="multiple">
      <Accordion title="v2.9.40" id="v2940" headingLevel="2" value="v2940">
        v2.9.40 was released on March 6, 2024.

        #### Improvements [#improvements-14]

        This release adds the following improvements:

        * Optimizes the logic of audio device selection after plugging and unplugging an external audio device.
        * Supports adjusting video profile during class.

        #### Issues fixed [#issues-fixed-15]

        This release fixes the following issues:

        * The on-stage state became inaccurate after students in a lecture hall joined and left the class.
        * The video window occasionally went black during live streaming on the H5 browser.
      </Accordion>

      <Accordion title="v2.9.20" id="v2920" headingLevel="2" value="v2920">
        v2.9.20 was released on January 17, 2024.

        #### New features [#new-features-12]

        This release adds a notification which occurs when it takes too long to start the whiteboard.

        #### Improvements [#improvements-15]

        This release made the following improvements:

        * Upgraded the RTM service to v1.5.1.
        * Optimized network connection by enabling RTC and RTM Cloud Proxy configurations.
        * Enhanced the experience of searching for a member student during interaction.
        * Improved the display format of the time span during which a student is in the classroom.

        #### Issues fixed [#issues-fixed-16]

        This release fixed the following issues:

        * Users could join a room before the room was created.
        * The loudspeaker list was incorrectly displayed when a user plugged in or unplugged an external audio device.
        * The AI noise suppression switch was incorrectly displayed.
        * Some words in the user interface of the group discussion were incorrect.
        * Abnormalities occurred when a user left the discussion group.
        * Issues occurred with sound card capturing.
        * The callback was not triggered when the user attribute in a lecture hall was modified.
        * Occasionally, when a student frequently enabled or disabled video from a mobile device, the teacher could not subscribe to the video of the student.
        * Occasionally, the teacher/student could not operate the whiteboard after joining a discussion group.
        * An occasional error occurred when uploading courseware, which lead to failure in displaying the courseware list.
      </Accordion>

      <Accordion title="v2.9.0" id="v290" headingLevel="2" value="v290">
        v2.9.0 was released on November 22, 2023.

        #### New features [#new-features-13]

        This version adds the following new scenarios:

        * Online classroom scenarios and the introduction of a new UI style and interactive experience that are closer to the usage habits of educational users. See the following documentation:

          * [FcrUIScene SDK](../build/customize-the-ui-and-plugins/customize-ui-scene-sdk.mdx)
          * [API Reference](/en/api-reference/api-ref/flexible-classroom/ui-scene)

        One-to-one private chat function. This function does not currently support retrieving historical messages from servers on demand.

        #### Improvements [#improvements-16]

        This release added the following improvements:

        * Added support for automatic domain switch to reduce the chance of users not being able to use Flexible Classroom.
        * Optimized the mixing of system audio and RTC so that the media volume is not suppressed by the call volume.
      </Accordion>

      <Accordion title="v2.8.13" id="v2813-1" headingLevel="2" value="v2813-1">
        v2.8.13 was released on February 20, 2023.

        This version added a Beta icon for the virtual background and beauty options features on the Device Settings page.

        #### Improvements [#improvements-17]

        This release adds support for sharing audio when sharing the screen.

        #### Issues fixed [#issues-fixed-17]

        This release fixes the following known issues:

        * Issues in the proctoring scenarios.
        * Issues on desktop devices.

        #### API changes [#api-changes]

        The \`audioDeviceName\` and \`withAudio\` parameters were added to the \`startScreenShareCapture\` method.

        For details, see the [API reference](https://api-ref.agora.io/en/flexible-classroom-sdk/web/2.x/classes/_stores_domain_common_media_index_.MediaStore.html#startScreenShareCapture).
      </Accordion>

      <Accordion title="v2.8.0" id="v280-2" headingLevel="2" value="v280-2">
        v2.8.0 was released on December 12, 2022.

        #### New features [#new-features-14]

        **New UI theme**

        v2.8.0 enables you to set the display theme of the classroom UI to light or dark.

        **New language supported**

        v2.8.0 supports setting the language of the classroom UI to Chinese or English.

        **Flexible Classroom UI builder**

        Flexible Classroom UI builder is launched to enable you design and customize the UI of your classroom.
        The UI builder currently supports the following
        Flexible Classroom features:

        * All features of versions 2.6.x and earlier
        * Setting the display theme of the classroom UI to light or dark
        * Setting the language of the classroom UI to Chinese or English

        **Online proctoring scenario**

        v2.8.0 provides the Agora Proctor SDK for online exam proctoring scenarios. For details, see the [Agora Proctor SDK API reference](/en/api-reference/api-ref/flexible-classroom/proctor-sdk).

        **Beauty options, virtual background, noise suppression**

        v2.8.0 adds support for substantial new capabilities including video beauty options, virtual backgrounds,
        and noise suppression. For details, see the documentation of the \`webrtcExtensionBaseUrl\` field of the
        \`LaunchOption\` parameter in the Classroom SDK.

        **New demo features**

        v2.8.0 adds the following features to the demo:

        * Signing up, logging in, and deleting the account
        * A course list page
        * Classroom reports, including the following information:
          * Course information
          * Course recording
          * Course reports, including tracking student attendance and students interaction
        * Highlighting of speakers
        * The ability to partially erase the whiteboard

        #### Improvements [#improvements-18]

        This release includes the following improvements:

        * Enhanced the UI layer code for developers to customize the classroom UI.
        * Support for the Microsoft Edge browser.
        * The following features were improved in the demo:
          * The procedures of joining and creating a room. Users can now reserve a room in advance as well.
          * The efficiency of converting course materials.
          * The compatibility of the whiteboard toolbar with touchscreen devices.
        * The \`agora-edu-core\` libraries have been enhanced.
      </Accordion>

      <Accordion title="v2.6.x" id="v26x-2" headingLevel="2" value="v26x-2">
        v2.6.x was released on July 29, 2022.

        #### New features [#new-features-15]

        **Taking screenshots (Electron only)**

        v2.6.x adds a snipping tool for Teacher to "take screenshots" of content inside and outside of the classroom, and dynamically add it to the classroom whiteboard. The feature is available in one-to-one classrooms, small classrooms, and lecture halls. This feature is available in the toolbar on Windows and macOS clients. Teachers and teaching assistants can choose to take a screenshot directly or with the current window hidden. The screenshot is displayed in the center of the whiteboard. And Agora provides APIs to expand usage of this feature to include Students and other roles:

        * Web: getSnapshotRgba
        * Electron: getSnapshot
        * iOS: getSnapshot
        * Android: getSnapshot

        **Automatic grouping**

        For the "breakout rooms" feature, v2.6.x supports automatic grouping. Teachers can set up the number of breakout rooms. Then the system randomly assigns the whole class to breakout rooms.

        **Drag and Drop images from desktop into the classroom whiteboard (Web/Electron)**

        v2.6.x allows teachers or teaching assistants on the PC to drop local images to the whiteboard area and insert the images into the whiteboard.

        **Dynamic Size, Resize and Place Teacher Video inside the Classroom**

        v2.6.x allows teachers to freely drag and drop their own video and the video of students within the classroom window. Teachers can also resize a video window by double-clicking it. Whatever actions the teacher takes with their video window, students will see.

        **Hiding the stage area**

        v2.6.x adds a button in the settings of small classrooms, which enables teachers to hide the stage area. After the stage is hidden, the following things occur:

        * All videos are disabled.
        * All students automatically steps down from the stage.
        * The whiteboard is scaled up to fit the classroom.

        **Saving whiteboard contents as images**

        v2.6.x allows teachers and teaching assistants to save contents on the whiteboard to their local device as JPG images.

        **Adding web links as courseware**

        v2.6.x allows teachers to add web links, such as YouTube links and Google Drive links, in **My Resources**. The suffix of such kind of courseware is \`.alf\`, which is the abbreviation of agora link file. After the upload succeeds, the teacher can open the courseware in the classroom.

        #### Issues fixed [#issues-fixed-18]

        This release fixed the following issues:

        * (iOS) Crashes occurred when receiving a global announcement.
        * (iOS) In small classrooms, the teacher did not select the brush, but red lines appeared on the whiteboard.
        * (iOS) In small classrooms, the teacher double-clicked the settings, chat, or roster buttons, the color of these buttons did not change.
        * (Android) In small classrooms, after a student joined a sub-room and invited the teacher to join the same sub-room, the teacher entered the wrong sub-room.
        * (All) In small classrooms, before any student joined the classroom, the teacher started and ended the breakout room session. Then after a student joined the classroom, when the teacher re-started the breakout room session, the 500 error occurred.
      </Accordion>

      <Accordion title="v2.4.x" id="v24x-2" headingLevel="2" value="v24x-2">
        v2.4.x was released on June 2, 2022.

        #### New features [#new-features-16]

        **Breakout rooms (Web only)**

        v2.4.x adds the "Breakout rooms" feature in the toolbox of small classrooms. With breakout rooms, students can get together in small groups for discussion and brainstorming sessions. The teacher manually assigns students to each breakout room. A class supports up to 20 breakout rooms with a maximum of 17 members in each room. The features that are available in breakout rooms include real-time audio and video interaction, messaging, whiteboarding, and screen sharing.

        After the breakout session begins, the teacher and teaching assistants have the ability to dynamically join or leave any of the breakout rooms. They can also send announcements to all the breakout rooms. Students are notified in their chat to check for the announcements.

        **Support for the teacher role on Android and iOS clients**

        v2.4.x duplicates the features of the teacher role on desktop experience for Web, macOS, and Windows on mobile clients (Android and iOS).

        <CalloutContainer type="info">
          <CalloutDescription>
            Note that the following features are temporarily not available for the teacher role on mobile clients:

            * Enabling screen sharing
            * Starting pop-up quizzes
            * Starting polls
            * Starting the countdown timer
          </CalloutDescription>
        </CalloutContainer>

        **Ability to turn the whiteboard on and off in the classroom**

        v2.4.x adds the ability to turn the whiteboard on or off in one-on-one classrooms, small classrooms, and lecture halls. By default, after the whiteboard is turned off, the teacher's video is displayed in the whiteboard area. Developers are also able to use UIStore or UIKit to customize the classroom layout when the whiteboard is off.

        #### Improvements [#improvements-19]

        This release includes the following improvements:

        * Optimizes widgets: v2.4.x optimizes the internal technical architecture of the three widgets: Pop-up Quiz, Poll, and Countdown Timer for the higher stability and better end-user experience. In addition, v2.4.x enables developers to get the data of pop-up quizzes and polls through RESTful APIs. For details, see the [RESTful API reference](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api).
        * Improves the compatibility of the Web client: The Web client is now supported on the desktop version of Firefox.
        * Optimizes the cloud storage: v2.4.x optimizes the business logic and UI of the cloud storage feature in Flexible Classroom.
        * Optimizes the whiteboard: v2.4.x adds laser pointer, undo, redo, and one-click screen-clearing features on the whiteboard in Flexible Classroom.
        * Reward enhancements: The teacher can now extend and remove student rewards dynamically during a class session.

        #### Issues fixed [#issues-fixed-19]

        This release fixed the following issues:

        * When the teacher moved a file or a tool on the whiteboard, the movement might not be synchronized on the students' side.
        * Logging in to the IM module occasionally failed.
        * Loading a file failed when the format of the file was not supported.
      </Accordion>

      <Accordion title="v2.1.0" id="v210-1" headingLevel="2" value="v210-1">
        v2.1.0 was released on February 23, 2022.

        #### Release highlights [#release-highlights-2]

        In v2.1.0, Agora fully optimizes the internal architecture of Flexible Classroom. Compared to earlier versions, v2.1.0 has the following advantages:

        * New features:

          * Answer Selector (Pop-up Quiz), Polling Feature, Countdown Timer, Mobile HTML5 Support, and ability to turn the whiteboard on or off in the classroom.
          * Video Gallery Rotation: Ability for teachers to configure the classroom setting to automatically rotate the on-stage student gallery view without attempting to scroll or page through the class participants.

        * Lecture Hall: Expands audience capacity up to 5,000 students, from 1,000 in the last version.

        * Web client:

          * Adds support for Safari on desktop and iPad, as well as for Chrome on the iPad.
          * Introduces EDUClassroomUIStore for customizing the classroom UI, which replaces the UIKit in previous versions.

        * Android and iOS clients:

          * Redesigns contexts for better abstraction of modular features in Flexible Classroom, where each context can be controlled separately.

          * Refactors context APIs with the following improvements:

            * Renamed APIs and parameters for intuitiveness, understandability, and consistency.
            * Improved flexibility of API calling.
            * More APIs for developers to customize their own features.

        #### Flexible Classroom v2.1.0 migration guidance [#flexible-classroom-v210-migration-guidance-2]

        If you have made changes to your Flexible Classroom UI in earlier versions, in order to migrate to v2.1.0, Agora recommends you create a new project based on v2.1.0 and re-implement the UI changes. Please refer to the following Flexible Classroom v2.1.0 migration guides:

        * [migration guide](/en/realtime-media/flexible-classroom/reference/migration-guide)

        If you encounter any problem during the migration process, or need to migrate from Flexible Classroom earlier than v1.1.5, please contact [support@agora.io](mailto\\:support@agora.io) so that Agora technical support team can help.

        #### New Features [#new-features-17]

        **Answer selector and polling feature**

        To increase engagement and enhance interactivity, v2.1.0 adds the following teaching tools:

        * Answer selector: This tool is applicable to scenarios where the teacher asks a single-choice or multiple-choice question and requests the whole class to answer the question together. The teacher can set up the choices and the correct answer, and then trigger answering. The teacher can see the number of students who have submitted an answer and the percentage that are correct in real time.
        * Polling: This tool is applicable to scenarios where the teacher wants to get feedback from the whole class. The teacher can set up the subject, choices, and start and end time of the poll. Flexible Classroom also provides live visualization of polling results.

        **Ability to turn the whiteboard on or off in the classroom**

        As of v2.1.0, Agora supports turning the whiteboard on or off in the classroom. For details, see Turn the Whiteboard on or off in the Classroom. When using the APIs for this feature, after the whiteboard is closed, developers can use Flexible Classroom UIKit or UIStore to customize their unique classroom with their desired video gallery to fill the classroom window.

        **Video gallery rotation**

        Flexible Classroom gives teachers the ability to configure the classroom settings for improved student engagement and video. The Video Gallery Rotation feature lets the teacher automatically rotate the on-stage student gallery view at a desired frequency and sequence, thus eliminating the need for the teacher to scroll or page through the class participants.

        **Mobile HTML5 support**

        As of v2.1.0, students can join a lecture hall in Flexible Classroom simply by clicking on a shared webpage link within some mobile social applications that use a web view. After joining the classroom on mobile devices, students can do the following things:

        * Watch and hear the teacher's lecture, as well as presentations by students "on the stage".
        * View the whiteboard and the screen shared by the teacher.
        * Send messages to chat with other participants in the classroom.
        * Engage in class activities such as polling, answering, and viewing the teacher's count down clock.

        <CalloutContainer type="info">
          <CalloutDescription>
            ℹ️ **Info**
            Please note that the following features are not supported on HTML5:

            * Students raising their hands to apply for speaking on the "stage".
            * Students drawing on the whiteboard.
            * Students testing or switching their local media devices.
          </CalloutDescription>
        </CalloutContainer>

        #### Improvements [#improvements-20]

        v2.1.0 makes the following improvements:

        * Optimizes the business logic and UI of various features in Flexible Classroom, such as students "raising their hands" for permission to speak, the class roster, and in-class reminders.
        * Increases the upper limit on the number of users in a lecture hall to 5,000.
        * Improves the compatibility of the Web client. The Web client is now supported on Safari for the desktop and iPad, as well as on Chrome for the iPad.
        * Supports displaying thumbnails and animations for the PPT files opened in the classroom.
        * When a classroom is being recorded, the recording button changes to red.

        #### Issues fixed [#issues-fixed-20]

        v2.1.0 fixed the following issues:

        * (All platforms) The RTC SDK and whiteboard usage occurred in Flexible Classroom was not showed in Agora Console.
        * (Web) Occasional failure to record the whiteboard contents in a small classroom.
        * (Web) Occasional failure to send a massage in a small classroom.
        * (Web) After the teacher joined a lecture hall, there was a possibility that the whiteboard was not loaded successfully.
        * (Web/Windows/macOS) Sometimes in a lecture hall, a student "raised a hand" to apply for making a presentation, an error occurred. And the teacher did not receive the application.
        * (Web/Windows/macOS) In a small classroom, a student went onto the "stage" and turned on the video. After the student left the room, the student's video did not disappear immediately.
        * (Windows) When a student left and rejoined the room, the student could not see the room announcement published by the teacher.
        * (Windows) In a one-to-one classroom, the student's video occasionally went black.
        * (iOS) When the teacher displayed a PPT that contained audio and video, the student on iOS sometimes neither heard the audio nor saw the video.
        * (Android) In a small classroom, sometimes if a student on Android left and rejoined the room, the student could not see the teacher's video.
      </Accordion>

      <Accordion title="v1.1.5" id="v115-1" headingLevel="2" value="v115-1">
        v1.1.5 was released on October 20, 2021.

        #### Compatibility changes [#compatibility-changes-1]

        **Making open-source libraries into closed-source ones**

        As of v1.1.5, the \`agora-edu-core\` and \`agora-rte-sdk\` libraries in Flexible Classroom are closed-source. Agora moves the implementation of \`AgoraEduCore.launch\` into \`agora-edu-core\`, so developers can no longer make changes to it. For the parameters in \`launchOption\`, see the [API reference](/en/api-reference/api-ref/flexible-classroom/classroom-sdk).

        #### New features [#new-features-18]

        **Support for customizing the video encoding configurations**

        As of v1.1.5, developers can customize the video encoding configurations, including the width, height, frame rate, and bitrate. When calling the \`launch\` method, developers can set the \`cameraEncoderConfiguration\` and \`screenShareEncoderConfiguration\` parameters in \`mediaOptions\` to customize the encoding configurations for the video stream captured by a camera or the screen-sharing video stream.

        The recommended video encoding configurations are as follows:

        * One-to-one Classroom: 320x240, 200 Kbps, and 15 fps.
        * Small Classroom and Lecture Hall: 160x120, 65 Kbps, and 15 fps, if the number of students in a classroom who send their video stream at the same time is less than or equal to six.

        **Students automatically going onto the "stage"**

        v1.1.5 adds the feature of students automatically going onto the "stage" in the Small Classroom scenario. Once the teacher or TA enables this feature, students go onto the "stage" at specified intervals.

        **Image enhancement (Electron)**

        v1.1.5 adds a basic image enhancement feature, allowing users to adjust the contrast, brightness, smoothness, and red saturation of an image.

        **The countdown timer**

        v1.1.5 adds a countdown timer in Flexible Classroom. The teacher can find the countdown time in the toolbox and set an initial value. After the teacher clicks the start button, students see a countdown window.

        **Teachers making notes on their shared screen**

        As of v1.1.5, teachers can make notes on the screen that they share with the basic whiteboard tools.

        **Support for custom user properties and classroom properties (Web/Electron/Android/iOS)**

        As of v1.1.15, developers can customize properties for users and classrooms. These properties can be updated, and the updates can be monitored. For example, developers can set the profile photo as a custom user property. To support this feature, Agora makes the following changes to the Agora Edu Context:

        * Classroom properties:
          * Add the \`updateFlexRoomProperties\` method in \`RoomContext\` for adding or updating custom classroom properties.
          * Add the \`flexRoomProperties\` property in \`RoomContext\` for indicating the classroom property changes.
        * User properties: Add the \`userFlexProperties\` parameter in \`LaunchOption\` for passing in custom user properties when launching a classroom.

        #### Improvements [#improvements-21]

        * As of v1.1.5, Flexible Classroom supports displaying HTML5 courseware on the whiteboard.

        #### Issues fixed [#issues-fixed-21]

        v1.1.5 fixed the following issues:

        * In the middle of a class, if the app was reloaded, Flexible Classroom failed to keep the chat history.
        * In the middle of a class, when file uploading or conversion failed, Flexible Classroom did not trigger a pop-up window to indicate the failure.
        * When the region is set to NA, users failed to play the MP4 files in Flexible Classroom.
        * When downloading files in Flexible Classroom, the progress bar got stuck at 0%.
      </Accordion>

      <Accordion title="v1.1.0.1" id="v1101-2" headingLevel="2" value="v1101-2">
        v1.1.0.1 was released on July 7, 2021.

        #### New features [#new-features-19]

        **Media encryption**

        To ensure the security during real-time audio and video transmission, v1.1.0.1 adds the \`mediaOptions\` parameter in [\`LaunchOption\`](/en/api-reference/api-ref/flexible-classroom/classroom-sdk) for supporting media stream encryption. By default, Flexible Classroom does not encrypt the media stream. To enable media encryption, use the \`mediaOptions\` parameter to choose an encryption mode and set the encryption key. Flexible Classroom supports the following encryption modes:

        * \`AES_128_XTS\`: 128-bit AES encryption, XTS mode.
        * \`AES_128_ECB\`: 128-bit AES encryption, ECB mode.
        * \`AES_256_XTS\`: 256-bit AES encryption, XTS mode.
        * \`AES_128_GCM\`: 128-bit AES encryption, GCM mode.
        * \`AES_256_GCM\`: 256-bit AES encryption, GCM mode.

        <CalloutContainer type="info">
          <CalloutDescription>
            The teacher and students in a classroom must use the same encryption mode and key. If not, unexpected issues, such as a white or black screen and noise, may occur.
          </CalloutDescription>
        </CalloutContainer>

        #### Issues fixed [#issues-fixed-22]

        v1.1.0.1 fixes the following issues:

        * The default region was not NA (North America).
        * When the user set the UI language as English, users saw some Chinese characters on the screen sharing window.
        * When the teacher started screen sharing, students saw a black screen.
      </Accordion>

      <Accordion title="v1.1.0" id="v110-2" headingLevel="2" value="v110-2">
        v1.1.0 was released on June 18, 2021. This is the first release of Agora Flexible Classroom with the following features:

        * Real-time audio and video interaction
        * Signaling
        * Interactive whiteboard
        * Screen sharing
        * Recording and replay
        * Teaching tools, including cloud storage, classroom rewards, and the user list
        * Customizing the classroom user interfaces and embedding custom plugins in classrooms
        * Flexible Classroom cloud service for classroom and user management
      </Accordion>
    </Accordions>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    ## Electron [#electron]

    <Accordions type="multiple">
      <Accordion title="v2.9.40" id="v2940-1" headingLevel="2" value="v2940-1">
        v2.9.40 was released on March 6, 2024.

        #### Improvements [#improvements-22]

        This release adds the following improvements:

        * Optimizes the logic of audio device selection after plugging and unplugging an external audio device.
        * Supports adjusting video profile during class.

        #### Issues fixed [#issues-fixed-23]

        This release fixes the following issues:

        * The on-stage state became inaccurate after students in a lecture hall joined and left the class.
        * The video window occasionally went black during live streaming on the H5 browser.
      </Accordion>

      <Accordion title="v2.9.20" id="v2920-1" headingLevel="2" value="v2920-1">
        v2.9.20 was released on January 17, 2024.

        #### New features [#new-features-20]

        This release adds a notification which occurs when it takes too long to start the whiteboard.

        #### Improvements [#improvements-23]

        This release made the following improvements:

        * Upgraded the RTM service to v1.5.1.
        * Optimized network connection by enabling RTC and RTM Cloud Proxy configurations.
        * Enhanced the experience of searching for a member student during interaction.
        * Improved the display format of the time span during which a student is in the classroom.

        #### Issues fixed [#issues-fixed-24]

        This release fixed the following issues:

        * Users could join a room before the room was created.
        * The loudspeaker list was incorrectly displayed when a user plugged in or unplugged an external audio device.
        * The AI noise suppression switch was incorrectly displayed.
        * Some words in the user interface of the group discussion were incorrect.
        * Abnormalities occurred when a user left the discussion group.
        * Issues occurred with sound card capturing.
        * The callback was not triggered when the user attribute in a lecture hall was modified.
        * Occasionally, when a student frequently enabled or disabled video from a mobile device, the teacher could not subscribe to the video of the student.
        * Occasionally, the teacher/student could not operate the whiteboard after joining a discussion group.
        * An occasional error occurred when uploading courseware, which lead to failure in displaying the courseware list.
      </Accordion>

      <Accordion title="v2.9.0" id="v290-1" headingLevel="2" value="v290-1">
        v2.9.0 was released on November 22, 2023.

        #### New features [#new-features-21]

        This version adds the following new scenarios:

        * Online classroom scenarios and the introduction of a new UI style and interactive experience that are closer to the usage habits of educational users. See the following documentation:

          * [FcrUIScene SDK](../build/customize-the-ui-and-plugins/customize-ui-scene-sdk.mdx)
          * [API Reference](/en/api-reference/api-ref/flexible-classroom/ui-scene)

        One-to-one private chat function. This function does not currently support retrieving historical messages from servers on demand.

        #### Improvements [#improvements-24]

        This release added the following improvements:

        * Added support for automatic domain switch to reduce the chance of users not being able to use Flexible Classroom.
        * Optimized the mixing of system audio and RTC so that the media volume is not suppressed by the call volume.
      </Accordion>

      <Accordion title="v2.8.13" id="v2813-2" headingLevel="2" value="v2813-2">
        v2.8.13 was released on February 20, 2023.

        This version added a Beta icon for the virtual background and beauty options features on the Device Settings page.

        #### Improvements [#improvements-25]

        This release adds support for sharing audio when sharing the screen.

        #### Issues fixed [#issues-fixed-25]

        This release fixes the following known issues:

        * Issues in the proctoring scenarios.
        * Issues on desktop devices.

        #### API changes [#api-changes-1]

        The \`audioDeviceName\` and \`withAudio\` parameters were added to the \`startScreenShareCapture\` method.

        For details, see the [API reference](https://api-ref.agora.io/en/flexible-classroom-sdk/web/2.x/classes/_stores_domain_common_media_index_.MediaStore.html#startScreenShareCapture).
      </Accordion>

      <Accordion title="v2.8.0" id="v280-3" headingLevel="2" value="v280-3">
        v2.8.0 was released on December 12, 2022.

        #### New features [#new-features-22]

        **New UI theme**

        v2.8.0 enables you to set the display theme of the classroom UI to light or dark.

        **New language supported**

        v2.8.0 supports setting the language of the classroom UI to Chinese or English.

        **Flexible Classroom UI builder**

        Flexible Classroom UI builder is launched to enable you design and customize the UI of your classroom.
        The UI builder currently supports the following
        Flexible Classroom features:

        * All features of versions 2.6.x and earlier
        * Setting the display theme of the classroom UI to light or dark
        * Setting the language of the classroom UI to Chinese or English

        **Online proctoring scenario**

        v2.8.0 provides the Agora Proctor SDK for online exam proctoring scenarios. For details, see the [Agora Proctor SDK API reference](/en/api-reference/api-ref/flexible-classroom/proctor-sdk).

        **Beauty options, virtual background, noise suppression**

        v2.8.0 adds support for substantial new capabilities including video beauty options, virtual backgrounds,
        and noise suppression. For details, see the documentation of the \`webrtcExtensionBaseUrl\` field of the
        \`LaunchOption\` parameter in the Classroom SDK.

        **New demo features**

        v2.8.0 adds the following features to the demo:

        * Signing up, logging in, and deleting the account
        * A course list page
        * Classroom reports, including the following information:
          * Course information
          * Course recording
          * Course reports, including tracking student attendance and students interaction
        * Highlighting of speakers
        * The ability to partially erase the whiteboard

        #### Improvements [#improvements-26]

        This release includes the following improvements:

        * Enhanced the UI layer code for developers to customize the classroom UI.
        * Support for the Microsoft Edge browser.
        * The following features were improved in the demo:
          * The procedures of joining and creating a room. Users can now reserve a room in advance as well.
          * The efficiency of converting course materials.
          * The compatibility of the whiteboard toolbar with touchscreen devices.
        * The \`agora-edu-core\` libraries have been enhanced.
      </Accordion>

      <Accordion title="v2.6.x" id="v26x-3" headingLevel="2" value="v26x-3">
        v2.6.x was released on July 29, 2022.

        #### New features [#new-features-23]

        **Taking screenshots (Electron only)**

        v2.6.x adds a snipping tool for Teacher to "take screenshots" of content inside and outside of the classroom, and dynamically add it to the classroom whiteboard. The feature is available in one-to-one classrooms, small classrooms, and lecture halls. This feature is available in the toolbar on Windows and macOS clients. Teachers and teaching assistants can choose to take a screenshot directly or with the current window hidden. The screenshot is displayed in the center of the whiteboard. And Agora provides APIs to expand usage of this feature to include Students and other roles:

        * Web: getSnapshotRgba
        * Electron: getSnapshot
        * iOS: getSnapshot
        * Android: getSnapshot

        **Automatic grouping**

        For the "breakout rooms" feature, v2.6.x supports automatic grouping. Teachers can set up the number of breakout rooms. Then the system randomly assigns the whole class to breakout rooms.

        **Drag and Drop images from desktop into the classroom whiteboard (Web/Electron)**

        v2.6.x allows teachers or teaching assistants on the PC to drop local images to the whiteboard area and insert the images into the whiteboard.

        **Dynamic Size, Resize and Place Teacher Video inside the Classroom**

        v2.6.x allows teachers to freely drag and drop their own video and the video of students within the classroom window. Teachers can also resize a video window by double-clicking it. Whatever actions the teacher takes with their video window, students will see.

        **Hiding the stage area**

        v2.6.x adds a button in the settings of small classrooms, which enables teachers to hide the stage area. After the stage is hidden, the following things occur:

        * All videos are disabled.
        * All students automatically steps down from the stage.
        * The whiteboard is scaled up to fit the classroom.

        **Saving whiteboard contents as images**

        v2.6.x allows teachers and teaching assistants to save contents on the whiteboard to their local device as JPG images.

        **Adding web links as courseware**

        v2.6.x allows teachers to add web links, such as YouTube links and Google Drive links, in **My Resources**. The suffix of such kind of courseware is \`.alf\`, which is the abbreviation of agora link file. After the upload succeeds, the teacher can open the courseware in the classroom.

        #### Issues fixed [#issues-fixed-26]

        This release fixed the following issues:

        * (iOS) Crashes occurred when receiving a global announcement.
        * (iOS) In small classrooms, the teacher did not select the brush, but red lines appeared on the whiteboard.
        * (iOS) In small classrooms, the teacher double-clicked the settings, chat, or roster buttons, the color of these buttons did not change.
        * (Android) In small classrooms, after a student joined a sub-room and invited the teacher to join the same sub-room, the teacher entered the wrong sub-room.
        * (All) In small classrooms, before any student joined the classroom, the teacher started and ended the breakout room session. Then after a student joined the classroom, when the teacher re-started the breakout room session, the 500 error occurred.
      </Accordion>

      <Accordion title="v2.4.x" id="v24x-3" headingLevel="2" value="v24x-3">
        v2.4.x was released on June 2, 2022.

        #### New features [#new-features-24]

        **Breakout rooms (Web only)**

        v2.4.x adds the "Breakout rooms" feature in the toolbox of small classrooms. With breakout rooms, students can get together in small groups for discussion and brainstorming sessions. The teacher manually assigns students to each breakout room. A class supports up to 20 breakout rooms with a maximum of 17 members in each room. The features that are available in breakout rooms include real-time audio and video interaction, messaging, whiteboarding, and screen sharing.

        After the breakout session begins, the teacher and teaching assistants have the ability to dynamically join or leave any of the breakout rooms. They can also send announcements to all the breakout rooms. Students are notified in their chat to check for the announcements.

        **Support for the teacher role on Android and iOS clients**

        v2.4.x duplicates the features of the teacher role on desktop experience for Web, macOS, and Windows on mobile clients (Android and iOS).

        <CalloutContainer type="info">
          <CalloutDescription>
            Note that the following features are temporarily not available for the teacher role on mobile clients:

            * Enabling screen sharing
            * Starting pop-up quizzes
            * Starting polls
            * Starting the countdown timer
          </CalloutDescription>
        </CalloutContainer>

        **Ability to turn the whiteboard on and off in the classroom**

        v2.4.x adds the ability to turn the whiteboard on or off in one-on-one classrooms, small classrooms, and lecture halls. By default, after the whiteboard is turned off, the teacher's video is displayed in the whiteboard area. Developers are also able to use UIStore or UIKit to customize the classroom layout when the whiteboard is off.

        #### Improvements [#improvements-27]

        This release includes the following improvements:

        * Optimizes widgets: v2.4.x optimizes the internal technical architecture of the three widgets: Pop-up Quiz, Poll, and Countdown Timer for the higher stability and better end-user experience. In addition, v2.4.x enables developers to get the data of pop-up quizzes and polls through RESTful APIs. For details, see the [RESTful API reference](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api).
        * Improves the compatibility of the Web client: The Web client is now supported on the desktop version of Firefox.
        * Optimizes the cloud storage: v2.4.x optimizes the business logic and UI of the cloud storage feature in Flexible Classroom.
        * Optimizes the whiteboard: v2.4.x adds laser pointer, undo, redo, and one-click screen-clearing features on the whiteboard in Flexible Classroom.
        * Reward enhancements: The teacher can now extend and remove student rewards dynamically during a class session.

        #### Issues fixed [#issues-fixed-27]

        This release fixed the following issues:

        * When the teacher moved a file or a tool on the whiteboard, the movement might not be synchronized on the students' side.
        * Logging in to the IM module occasionally failed.
        * Loading a file failed when the format of the file was not supported.
      </Accordion>

      <Accordion title="v2.1.0" id="v210-2" headingLevel="2" value="v210-2">
        v2.1.0 was released on February 23, 2022.

        #### Release highlights [#release-highlights-3]

        In v2.1.0, Agora fully optimizes the internal architecture of Flexible Classroom. Compared to earlier versions, v2.1.0 has the following advantages:

        * New features:

          * Answer Selector (Pop-up Quiz), Polling Feature, Countdown Timer, Mobile HTML5 Support, and ability to turn the whiteboard on or off in the classroom.
          * Video Gallery Rotation: Ability for teachers to configure the classroom setting to automatically rotate the on-stage student gallery view without attempting to scroll or page through the class participants.

        * Lecture Hall: Expands audience capacity up to 5,000 students, from 1,000 in the last version.

        * Web client:

          * Adds support for Safari on desktop and iPad, as well as for Chrome on the iPad.
          * Introduces EDUClassroomUIStore for customizing the classroom UI, which replaces the UIKit in previous versions.

        * Android and iOS clients:

          * Redesigns contexts for better abstraction of modular features in Flexible Classroom, where each context can be controlled separately.

          * Refactors context APIs with the following improvements:

            * Renamed APIs and parameters for intuitiveness, understandability, and consistency.
            * Improved flexibility of API calling.
            * More APIs for developers to customize their own features.

        #### Flexible Classroom v2.1.0 migration guidance [#flexible-classroom-v210-migration-guidance-3]

        If you have made changes to your Flexible Classroom UI in earlier versions, in order to migrate to v2.1.0, Agora recommends you create a new project based on v2.1.0 and re-implement the UI changes. Please refer to the following Flexible Classroom v2.1.0 migration guides:

        * [migration guide](/en/realtime-media/flexible-classroom/reference/migration-guide)

        If you encounter any problem during the migration process, or need to migrate from Flexible Classroom earlier than v1.1.5, please contact [support@agora.io](mailto\\:support@agora.io) so that Agora technical support team can help.

        #### New Features [#new-features-25]

        **Answer selector and polling feature**

        To increase engagement and enhance interactivity, v2.1.0 adds the following teaching tools:

        * Answer selector: This tool is applicable to scenarios where the teacher asks a single-choice or multiple-choice question and requests the whole class to answer the question together. The teacher can set up the choices and the correct answer, and then trigger answering. The teacher can see the number of students who have submitted an answer and the percentage that are correct in real time.
        * Polling: This tool is applicable to scenarios where the teacher wants to get feedback from the whole class. The teacher can set up the subject, choices, and start and end time of the poll. Flexible Classroom also provides live visualization of polling results.

        **Ability to turn the whiteboard on or off in the classroom**

        As of v2.1.0, Agora supports turning the whiteboard on or off in the classroom. For details, see Turn the Whiteboard on or off in the Classroom. When using the APIs for this feature, after the whiteboard is closed, developers can use Flexible Classroom UIKit or UIStore to customize their unique classroom with their desired video gallery to fill the classroom window.

        **Video gallery rotation**

        Flexible Classroom gives teachers the ability to configure the classroom settings for improved student engagement and video. The Video Gallery Rotation feature lets the teacher automatically rotate the on-stage student gallery view at a desired frequency and sequence, thus eliminating the need for the teacher to scroll or page through the class participants.

        **Mobile HTML5 support**

        As of v2.1.0, students can join a lecture hall in Flexible Classroom simply by clicking on a shared webpage link within some mobile social applications that use a web view. After joining the classroom on mobile devices, students can do the following things:

        * Watch and hear the teacher's lecture, as well as presentations by students "on the stage".
        * View the whiteboard and the screen shared by the teacher.
        * Send messages to chat with other participants in the classroom.
        * Engage in class activities such as polling, answering, and viewing the teacher's count down clock.

        <CalloutContainer type="info">
          <CalloutDescription>
            ℹ️ **Info**
            Please note that the following features are not supported on HTML5:

            * Students raising their hands to apply for speaking on the "stage".
            * Students drawing on the whiteboard.
            * Students testing or switching their local media devices.
          </CalloutDescription>
        </CalloutContainer>

        #### Improvements [#improvements-28]

        v2.1.0 makes the following improvements:

        * Optimizes the business logic and UI of various features in Flexible Classroom, such as students "raising their hands" for permission to speak, the class roster, and in-class reminders.
        * Increases the upper limit on the number of users in a lecture hall to 5,000.
        * Improves the compatibility of the Web client. The Web client is now supported on Safari for the desktop and iPad, as well as on Chrome for the iPad.
        * Supports displaying thumbnails and animations for the PPT files opened in the classroom.
        * When a classroom is being recorded, the recording button changes to red.

        #### Issues fixed [#issues-fixed-28]

        v2.1.0 fixed the following issues:

        * (All platforms) The RTC SDK and whiteboard usage occurred in Flexible Classroom was not showed in Agora Console.
        * (Web) Occasional failure to record the whiteboard contents in a small classroom.
        * (Web) Occasional failure to send a massage in a small classroom.
        * (Web) After the teacher joined a lecture hall, there was a possibility that the whiteboard was not loaded successfully.
        * (Web/Windows/macOS) Sometimes in a lecture hall, a student "raised a hand" to apply for making a presentation, an error occurred. And the teacher did not receive the application.
        * (Web/Windows/macOS) In a small classroom, a student went onto the "stage" and turned on the video. After the student left the room, the student's video did not disappear immediately.
        * (Windows) When a student left and rejoined the room, the student could not see the room announcement published by the teacher.
        * (Windows) In a one-to-one classroom, the student's video occasionally went black.
        * (iOS) When the teacher displayed a PPT that contained audio and video, the student on iOS sometimes neither heard the audio nor saw the video.
        * (Android) In a small classroom, sometimes if a student on Android left and rejoined the room, the student could not see the teacher's video.
      </Accordion>

      <Accordion title="v1.1.5" id="v115-2" headingLevel="2" value="v115-2">
        v1.1.5 was released on October 20, 2021.

        #### Compatibility changes [#compatibility-changes-2]

        **Making open-source libraries into closed-source ones**

        As of v1.1.5, the \`agora-edu-core\` and \`agora-rte-sdk\` libraries in Flexible Classroom are closed-source. Agora moves the implementation of \`AgoraEduCore.launch\` into \`agora-edu-core\`, so developers can no longer make changes to it. For the parameters in \`launchOption\`, see the [API reference](/en/api-reference/api-ref/flexible-classroom/classroom-sdk).

        #### New features [#new-features-26]

        **Support for customizing the video encoding configurations**

        As of v1.1.5, developers can customize the video encoding configurations, including the width, height, frame rate, and bitrate. When calling the \`launch\` method, developers can set the \`cameraEncoderConfiguration\` and \`screenShareEncoderConfiguration\` parameters in \`mediaOptions\` to customize the encoding configurations for the video stream captured by a camera or the screen-sharing video stream.

        The recommended video encoding configurations are as follows:

        * One-to-one Classroom: 320x240, 200 Kbps, and 15 fps.
        * Small Classroom and Lecture Hall: 160x120, 65 Kbps, and 15 fps, if the number of students in a classroom who send their video stream at the same time is less than or equal to six.

        **Students automatically going onto the "stage"**

        v1.1.5 adds the feature of students automatically going onto the "stage" in the Small Classroom scenario. Once the teacher or TA enables this feature, students go onto the "stage" at specified intervals.

        **Image enhancement (Electron)**

        v1.1.5 adds a basic image enhancement feature, allowing users to adjust the contrast, brightness, smoothness, and red saturation of an image.

        **The countdown timer**

        v1.1.5 adds a countdown timer in Flexible Classroom. The teacher can find the countdown time in the toolbox and set an initial value. After the teacher clicks the start button, students see a countdown window.

        **Teachers making notes on their shared screen**

        As of v1.1.5, teachers can make notes on the screen that they share with the basic whiteboard tools.

        **Support for custom user properties and classroom properties (Web/Electron/Android/iOS)**

        As of v1.1.15, developers can customize properties for users and classrooms. These properties can be updated, and the updates can be monitored. For example, developers can set the profile photo as a custom user property. To support this feature, Agora makes the following changes to the Agora Edu Context:

        * Classroom properties:
          * Add the \`updateFlexRoomProperties\` method in \`RoomContext\` for adding or updating custom classroom properties.
          * Add the \`flexRoomProperties\` property in \`RoomContext\` for indicating the classroom property changes.
        * User properties: Add the \`userFlexProperties\` parameter in \`LaunchOption\` for passing in custom user properties when launching a classroom.

        #### Improvements [#improvements-29]

        * As of v1.1.5, Flexible Classroom supports displaying HTML5 courseware on the whiteboard.

        #### Issues fixed [#issues-fixed-29]

        v1.1.5 fixed the following issues:

        * In the middle of a class, if the app was reloaded, Flexible Classroom failed to keep the chat history.
        * In the middle of a class, when file uploading or conversion failed, Flexible Classroom did not trigger a pop-up window to indicate the failure.
        * When the region is set to NA, users failed to play the MP4 files in Flexible Classroom.
        * When downloading files in Flexible Classroom, the progress bar got stuck at 0%.
      </Accordion>

      <Accordion title="v1.1.0.1" id="v1101-3" headingLevel="2" value="v1101-3">
        v1.1.0.1 was released on July 7, 2021.

        #### New features [#new-features-27]

        **Media encryption**

        To ensure the security during real-time audio and video transmission, v1.1.0.1 adds the \`mediaOptions\` parameter in [\`LaunchOption\`](/en/api-reference/api-ref/flexible-classroom/classroom-sdk) for supporting media stream encryption. By default, Flexible Classroom does not encrypt the media stream. To enable media encryption, use the \`mediaOptions\` parameter to choose an encryption mode and set the encryption key. Flexible Classroom supports the following encryption modes:

        * \`AES_128_XTS\`: 128-bit AES encryption, XTS mode.
        * \`AES_128_ECB\`: 128-bit AES encryption, ECB mode.
        * \`AES_256_XTS\`: 256-bit AES encryption, XTS mode.
        * \`AES_128_GCM\`: 128-bit AES encryption, GCM mode.
        * \`AES_256_GCM\`: 256-bit AES encryption, GCM mode.

        <CalloutContainer type="info">
          <CalloutDescription>
            The teacher and students in a classroom must use the same encryption mode and key. If not, unexpected issues, such as a white or black screen and noise, may occur.
          </CalloutDescription>
        </CalloutContainer>

        #### Issues fixed [#issues-fixed-30]

        v1.1.0.1 fixes the following issues:

        * The default region was not NA (North America).
        * When the user set the UI language as English, users saw some Chinese characters on the screen sharing window.
        * When the teacher started screen sharing, students saw a black screen.
      </Accordion>

      <Accordion title="v1.1.0" id="v110-3" headingLevel="2" value="v110-3">
        v1.1.0 was released on June 18, 2021. This is the first release of Agora Flexible Classroom with the following features:

        * Real-time audio and video interaction
        * Signaling
        * Interactive whiteboard
        * Screen sharing
        * Recording and replay
        * Teaching tools, including cloud storage, classroom rewards, and the user list
        * Customizing the classroom user interfaces and embedding custom plugins in classrooms
        * Flexible Classroom cloud service for classroom and user management
      </Accordion>
    </Accordions>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page provides the release notes for Flexible Classroom."
  }, {
    heading: "android",
    content: "v2.8.00 was released on March 6, 2024"
  }, {
    heading: "improvements",
    content: "This release optimizes the network connection by supporting the cloud proxy configurations of the RTM service."
  }, {
    heading: "issues-fixed",
    content: "This release fixes the following issues:"
  }, {
    heading: "issues-fixed",
    content: "The sequence compensation mechanism was abnormal."
  }, {
    heading: "issues-fixed",
    content: "The on-stage state became inaccurate after students in a lecture hall joined and left the class."
  }, {
    heading: "issues-fixed",
    content: "v2.8.81 was released on December 14, 2023."
  }, {
    heading: "improvements-1",
    content: "This release made the following improvements:"
  }, {
    heading: "improvements-1",
    content: "Optimized the logic for capturing the remote raw audio data."
  }, {
    heading: "improvements-1",
    content: "Enhanced the data transmission efficiency in the classroom."
  }, {
    heading: "improvements-1",
    content: "Optimized the synchronization mechanism of personal data in big classes."
  }, {
    heading: "improvements-1",
    content: "Enhanced the optimization of media error callbacks."
  }, {
    heading: "improvements-1",
    content: "Optimized the performance of the `onAudioRawDataBeforeMixed` and `onAudioRawDataMixed` callbacks."
  }, {
    heading: "improvements-1",
    content: "Optimized the efficiency of the `FcrAudioRawDataPosition` class."
  }, {
    heading: "issues-fixed-1",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-1",
    content: "In use-cases where the number of publishers exceeded the upper limit, if a student did not stop publishing streams after getting off the stage, the student that got on the stage could not publish streams."
  }, {
    heading: "issues-fixed-1",
    content: "After the whiteboard was disabled, the usage calculation continued."
  }, {
    heading: "issues-fixed-1",
    content: "The user presence state was incorrectly displayed."
  }, {
    heading: "issues-fixed-1",
    content: "Occasional audio mixing issues while using the whiteboard."
  }, {
    heading: "issues-fixed-1",
    content: "Occasional video inversion."
  }, {
    heading: "issues-fixed-1",
    content: "Occasional device abnormalities when joining a room."
  }, {
    heading: "issues-fixed-1",
    content: "v2.8.13 was released on April 18, 2023."
  }, {
    heading: "issues-fixed-2",
    content: "This release fixes an issue where video was rotated on devices running Android 13."
  }, {
    heading: "issues-fixed-2",
    content: "v2.8.11 was released on January 13, 2023."
  }, {
    heading: "improvements-2",
    content: "This release adds support for sharing audio when sharing the screen."
  }, {
    heading: "issues-fixed-3",
    content: "This release fixes known issues on mobile devices."
  }, {
    heading: "issues-fixed-3",
    content: "v2.8.0 was released on December 12, 2022."
  }, {
    heading: "new-features",
    content: "**New UI theme**"
  }, {
    heading: "new-features",
    content: "v2.8.0 enables you to set the display theme of the classroom UI to light or dark."
  }, {
    heading: "new-features",
    content: "**Flexible Classroom UI builder**"
  }, {
    heading: "new-features",
    content: `Flexible Classroom UI builder is launched to enable you design and customize the UI of your classroom.
The UI builder currently supports the following Flexible Classroom features:`
  }, {
    heading: "new-features",
    content: "All features of versions 2.6.x and earlier"
  }, {
    heading: "new-features",
    content: "Setting the display theme of the classroom UI to light or dark"
  }, {
    heading: "new-features",
    content: "**New demo features**"
  }, {
    heading: "new-features",
    content: "v2.8.0 adds the following features to the demo:"
  }, {
    heading: "new-features",
    content: "Signing up, logging in, and deleting the account"
  }, {
    heading: "new-features",
    content: "A course list page"
  }, {
    heading: "new-features",
    content: "Classroom reports, including the following information:"
  }, {
    heading: "new-features",
    content: "Course information"
  }, {
    heading: "new-features",
    content: "Course recording"
  }, {
    heading: "new-features",
    content: "Course reports, including tracking student attendance and students interaction"
  }, {
    heading: "new-features",
    content: "Highlighting of speakers"
  }, {
    heading: "new-features",
    content: "The ability to partially erase the whiteboard"
  }, {
    heading: "improvements-3",
    content: "This release includes the following improvements:"
  }, {
    heading: "improvements-3",
    content: "Enhanced UI layer code for developers to customize the classroom UI."
  }, {
    heading: "improvements-3",
    content: "The Microsoft Edge browser is now supported."
  }, {
    heading: "improvements-3",
    content: "The following features were improved in the demo:"
  }, {
    heading: "improvements-3",
    content: "The procedures of joining and creating a room. Users can now reserve a room in advance as well."
  }, {
    heading: "improvements-3",
    content: "The efficiency of converting course materials."
  }, {
    heading: "improvements-3",
    content: "The compatibility of the whiteboard toolbar with touchscreen devices."
  }, {
    heading: "improvements-3",
    content: "The `agora-edu-core` libraries have been enhanced."
  }, {
    heading: "improvements-3",
    content: "v2.6.x was released on July 29, 2022."
  }, {
    heading: "new-features-1",
    content: "**Taking screenshots (Electron only)**"
  }, {
    heading: "new-features-1",
    content: 'v2.6.x adds a snipping tool for Teacher to "take screenshots" of content inside and outside of the classroom, and dynamically add it to the classroom whiteboard. The feature is available in one-to-one classrooms, small classrooms, and lecture halls. This feature is available in the toolbar on Windows and macOS clients. Teachers and teaching assistants can choose to take a screenshot directly or with the current window hidden. The screenshot is displayed in the center of the whiteboard. And Agora provides APIs to expand usage of this feature to include Students and other roles:'
  }, {
    heading: "new-features-1",
    content: "Web: getSnapshotRgba"
  }, {
    heading: "new-features-1",
    content: "Electron: getSnapshot"
  }, {
    heading: "new-features-1",
    content: "iOS: getSnapshot"
  }, {
    heading: "new-features-1",
    content: "Android: getSnapshot"
  }, {
    heading: "new-features-1",
    content: "**Automatic grouping**"
  }, {
    heading: "new-features-1",
    content: 'For the "breakout rooms" feature, v2.6.x supports automatic grouping. Teachers can set up the number of breakout rooms. Then the system randomly assigns the whole class to breakout rooms.'
  }, {
    heading: "new-features-1",
    content: "**Drag and Drop images from desktop into the classroom whiteboard (Web/Electron)**"
  }, {
    heading: "new-features-1",
    content: "v2.6.x allows teachers or teaching assistants on the PC to drop local images to the whiteboard area and insert the images into the whiteboard."
  }, {
    heading: "new-features-1",
    content: "**Dynamic Size, Resize and Place Teacher Video inside the Classroom**"
  }, {
    heading: "new-features-1",
    content: "v2.6.x allows teachers to freely drag and drop their own video and the video of students within the classroom window. Teachers can also resize a video window by double-clicking it. Whatever actions the teacher takes with their video window, students will see."
  }, {
    heading: "new-features-1",
    content: "**Hiding the stage area**"
  }, {
    heading: "new-features-1",
    content: "v2.6.x adds a button in the settings of small classrooms, which enables teachers to hide the stage area. After the stage is hidden, the following things occur:"
  }, {
    heading: "new-features-1",
    content: "All videos are disabled."
  }, {
    heading: "new-features-1",
    content: "All students automatically steps down from the stage."
  }, {
    heading: "new-features-1",
    content: "The whiteboard is scaled up to fit the classroom."
  }, {
    heading: "new-features-1",
    content: "**Saving whiteboard contents as images**"
  }, {
    heading: "new-features-1",
    content: "v2.6.x allows teachers and teaching assistants to save contents on the whiteboard to their local device as JPG images."
  }, {
    heading: "new-features-1",
    content: "**Adding web links as courseware**"
  }, {
    heading: "new-features-1",
    content: "v2.6.x allows teachers to add web links, such as YouTube links and Google Drive links, in **My Resources**. The suffix of such kind of courseware is `.alf`, which is the abbreviation of agora link file. After the upload succeeds, the teacher can open the courseware in the classroom."
  }, {
    heading: "issues-fixed-4",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-4",
    content: "(iOS) Crashes occurred when receiving a global announcement."
  }, {
    heading: "issues-fixed-4",
    content: "(iOS) In small classrooms, the teacher did not select the brush, but red lines appeared on the whiteboard."
  }, {
    heading: "issues-fixed-4",
    content: "(iOS) In small classrooms, the teacher double-clicked the settings, chat, or roster buttons, the color of these buttons did not change."
  }, {
    heading: "issues-fixed-4",
    content: "(Android) In small classrooms, after a student joined a sub-room and invited the teacher to join the same sub-room, the teacher entered the wrong sub-room."
  }, {
    heading: "issues-fixed-4",
    content: "(All) In small classrooms, before any student joined the classroom, the teacher started and ended the breakout room session. Then after a student joined the classroom, when the teacher re-started the breakout room session, the 500 error occurred."
  }, {
    heading: "issues-fixed-4",
    content: "v2.4.x was released on June 2, 2022."
  }, {
    heading: "new-features-2",
    content: "**Breakout rooms (Web only)**"
  }, {
    heading: "new-features-2",
    content: 'v2.4.x adds the "Breakout rooms" feature in the toolbox of small classrooms. With breakout rooms, students can get together in small groups for discussion and brainstorming sessions. The teacher manually assigns students to each breakout room. A class supports up to 20 breakout rooms with a maximum of 17 members in each room. The features that are available in breakout rooms include real-time audio and video interaction, messaging, whiteboarding, and screen sharing.'
  }, {
    heading: "new-features-2",
    content: "After the breakout session begins, the teacher and teaching assistants have the ability to dynamically join or leave any of the breakout rooms. They can also send announcements to all the breakout rooms. Students are notified in their chat to check for the announcements."
  }, {
    heading: "new-features-2",
    content: "**Support for the teacher role on Android and iOS clients**"
  }, {
    heading: "new-features-2",
    content: "v2.4.x duplicates the features of the teacher role on desktop experience for Web, macOS, and Windows on mobile clients (Android and iOS)."
  }, {
    heading: "new-features-2",
    content: "Note that the following features are temporarily not available for the teacher role on mobile clients:"
  }, {
    heading: "new-features-2",
    content: "Enabling screen sharing"
  }, {
    heading: "new-features-2",
    content: "Starting pop-up quizzes"
  }, {
    heading: "new-features-2",
    content: "Starting polls"
  }, {
    heading: "new-features-2",
    content: "Starting the countdown timer"
  }, {
    heading: "new-features-2",
    content: "**Ability to turn the whiteboard on and off in the classroom**"
  }, {
    heading: "new-features-2",
    content: "v2.4.x adds the ability to turn the whiteboard on or off in one-on-one classrooms, small classrooms, and lecture halls. By default, after the whiteboard is turned off, the teacher's video is displayed in the whiteboard area. Developers are also able to use UIStore or UIKit to customize the classroom layout when the whiteboard is off."
  }, {
    heading: "improvements-4",
    content: "This release includes the following improvements:"
  }, {
    heading: "improvements-4",
    content: "Optimizes widgets: v2.4.x optimizes the internal technical architecture of the three widgets: Pop-up Quiz, Poll, and Countdown Timer for the higher stability and better end-user experience. In addition, v2.4.x enables developers to get the data of pop-up quizzes and polls through RESTful APIs. For details, see the RESTful API reference."
  }, {
    heading: "improvements-4",
    content: "Improves the compatibility of the Web client: The Web client is now supported on the desktop version of Firefox."
  }, {
    heading: "improvements-4",
    content: "Optimizes the cloud storage: v2.4.x optimizes the business logic and UI of the cloud storage feature in Flexible Classroom."
  }, {
    heading: "improvements-4",
    content: "Optimizes the whiteboard: v2.4.x adds laser pointer, undo, redo, and one-click screen-clearing features on the whiteboard in Flexible Classroom."
  }, {
    heading: "improvements-4",
    content: "Reward enhancements: The teacher can now extend and remove student rewards dynamically during a class session."
  }, {
    heading: "issues-fixed-5",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-5",
    content: "When the teacher moved a file or a tool on the whiteboard, the movement might not be synchronized on the students' side."
  }, {
    heading: "issues-fixed-5",
    content: "Logging in to the IM module occasionally failed."
  }, {
    heading: "issues-fixed-5",
    content: "Loading a file failed when the format of the file was not supported."
  }, {
    heading: "issues-fixed-5",
    content: "v2.1.0 was released on February 23, 2022."
  }, {
    heading: "release-highlights",
    content: "In v2.1.0, Agora fully optimizes the internal architecture of Flexible Classroom. Compared to earlier versions, v2.1.0 has the following advantages:"
  }, {
    heading: "release-highlights",
    content: "New features:"
  }, {
    heading: "release-highlights",
    content: "Answer Selector (Pop-up Quiz), Polling Feature, Countdown Timer, Mobile HTML5 Support, and ability to turn the whiteboard on or off in the classroom."
  }, {
    heading: "release-highlights",
    content: "Video Gallery Rotation: Ability for teachers to configure the classroom setting to automatically rotate the on-stage student gallery view without attempting to scroll or page through the class participants."
  }, {
    heading: "release-highlights",
    content: "Lecture Hall: Expands audience capacity up to 5,000 students, from 1,000 in the last version."
  }, {
    heading: "release-highlights",
    content: "Web client:"
  }, {
    heading: "release-highlights",
    content: "Adds support for Safari on desktop and iPad, as well as for Chrome on the iPad."
  }, {
    heading: "release-highlights",
    content: "Introduces EDUClassroomUIStore for customizing the classroom UI, which replaces the UIKit in previous versions."
  }, {
    heading: "release-highlights",
    content: "Android and iOS clients:"
  }, {
    heading: "release-highlights",
    content: "Redesigns contexts for better abstraction of modular features in Flexible Classroom, where each context can be controlled separately."
  }, {
    heading: "release-highlights",
    content: "Refactors context APIs with the following improvements:"
  }, {
    heading: "release-highlights",
    content: "Renamed APIs and parameters for intuitiveness, understandability, and consistency."
  }, {
    heading: "release-highlights",
    content: "Improved flexibility of API calling."
  }, {
    heading: "release-highlights",
    content: "More APIs for developers to customize their own features."
  }, {
    heading: "flexible-classroom-v210-migration-guidance",
    content: "If you have made changes to your Flexible Classroom UI in earlier versions, in order to migrate to v2.1.0, Agora recommends you create a new project based on v2.1.0 and re-implement the UI changes. Please refer to the following Flexible Classroom v2.1.0 migration guides:"
  }, {
    heading: "flexible-classroom-v210-migration-guidance",
    content: "Migration guide"
  }, {
    heading: "flexible-classroom-v210-migration-guidance",
    content: "If you encounter any problem during the migration process, or need to migrate from Flexible Classroom earlier than v1.1.5, please contact support\\@agora.io so that Agora technical support team can help."
  }, {
    heading: "new-features-3",
    content: "**Answer selector and polling feature**"
  }, {
    heading: "new-features-3",
    content: "To increase engagement and enhance interactivity, v2.1.0 adds the following teaching tools:"
  }, {
    heading: "new-features-3",
    content: "Answer selector: This tool is applicable to use-cases where the teacher asks a single-choice or multiple-choice question and requests the whole class to answer the question together. The teacher can set up the choices and the correct answer, and then trigger answering. The teacher can see the number of students who have submitted an answer and the percentage that are correct in real time."
  }, {
    heading: "new-features-3",
    content: "Polling: This tool is applicable to use-cases where the teacher wants to get feedback from the whole class. The teacher can set up the subject, choices, and start and end time of the poll. Flexible Classroom also provides live visualization of polling results."
  }, {
    heading: "new-features-3",
    content: "**Ability to turn the whiteboard on or off in the classroom**"
  }, {
    heading: "new-features-3",
    content: "As of v2.1.0, Agora supports turning the whiteboard on or off in the classroom. For details, see Enable and disable the whiteboard. When using the APIs for this feature, after the whiteboard is closed, developers can use Flexible Classroom UIKit or UIStore to customize their unique classroom with their desired video gallery to fill the classroom window."
  }, {
    heading: "new-features-3",
    content: "**Video gallery rotation**"
  }, {
    heading: "new-features-3",
    content: "Flexible Classroom gives teachers the ability to configure the classroom settings for improved student engagement and video. The Video Gallery Rotation feature lets the teacher automatically rotate the on-stage student gallery view at a desired frequency and sequence, thus eliminating the need for the teacher to scroll or page through the class participants."
  }, {
    heading: "new-features-3",
    content: "**Mobile HTML5 support**"
  }, {
    heading: "new-features-3",
    content: "As of v2.1.0, students can join a lecture hall in Flexible Classroom simply by clicking on a shared webpage link within some mobile social applications that use a web view. After joining the classroom on mobile devices, students can do the following things:"
  }, {
    heading: "new-features-3",
    content: `Watch and hear the teacher's lecture, as well as presentations by students "on the stage".`
  }, {
    heading: "new-features-3",
    content: "View the whiteboard and the screen shared by the teacher."
  }, {
    heading: "new-features-3",
    content: "Send messages to chat with other participants in the classroom."
  }, {
    heading: "new-features-3",
    content: "Engage in class activities such as polling, answering, and viewing the teacher's count down clock."
  }, {
    heading: "new-features-3",
    content: "Please note that the following features are not supported on HTML5:"
  }, {
    heading: "new-features-3",
    content: 'Students raising their hands to apply for speaking on the "stage".'
  }, {
    heading: "new-features-3",
    content: "Students drawing on the whiteboard."
  }, {
    heading: "new-features-3",
    content: "Students testing or switching their local media devices."
  }, {
    heading: "improvements-5",
    content: "v2.1.0 makes the following improvements:"
  }, {
    heading: "improvements-5",
    content: 'Optimizes the business logic and UI of various features in Flexible Classroom, such as students "raising their hands" for permission to speak, the class roster, and in-class reminders.'
  }, {
    heading: "improvements-5",
    content: "Increases the upper limit on the number of users in a lecture hall to 5,000."
  }, {
    heading: "improvements-5",
    content: "Improves the compatibility of the Web client. The Web client is now supported on Safari for the desktop and iPad, as well as on Chrome for the iPad."
  }, {
    heading: "improvements-5",
    content: "Supports displaying thumbnails and animations for the PPT files opened in the classroom."
  }, {
    heading: "improvements-5",
    content: "When a classroom is being recorded, the recording button changes to red."
  }, {
    heading: "issues-fixed-6",
    content: "v2.1.0 fixed the following issues:"
  }, {
    heading: "issues-fixed-6",
    content: "(All platforms) The RTC SDK and whiteboard usage occurred in Flexible Classroom was not showed in Agora Console."
  }, {
    heading: "issues-fixed-6",
    content: "(Web) Occasional failure to record the whiteboard contents in a small classroom."
  }, {
    heading: "issues-fixed-6",
    content: "(Web) Occasional failure to send a massage in a small classroom."
  }, {
    heading: "issues-fixed-6",
    content: "(Web) After the teacher joined a lecture hall, there was a possibility that the whiteboard was not loaded successfully."
  }, {
    heading: "issues-fixed-6",
    content: '(Web/Windows/macOS) Sometimes in a lecture hall, a student "raised a hand" to apply for making a presentation, an error occurred. And the teacher did not receive the application.'
  }, {
    heading: "issues-fixed-6",
    content: `(Web/Windows/macOS) In a small classroom, a student went onto the "stage" and turned on the video. After the student left the room, the student's video did not disappear immediately.`
  }, {
    heading: "issues-fixed-6",
    content: "(Windows) When a student left and rejoined the room, the student could not see the room announcement published by the teacher."
  }, {
    heading: "issues-fixed-6",
    content: "(Windows) In a one-to-one classroom, the student's video occasionally went black."
  }, {
    heading: "issues-fixed-6",
    content: "(iOS) When the teacher displayed a PPT that contained audio and video, the student on iOS sometimes neither heard the audio nor saw the video."
  }, {
    heading: "issues-fixed-6",
    content: "(Android) In a small classroom, sometimes if a student on Android left and rejoined the room, the student could not see the teacher's video."
  }, {
    heading: "issues-fixed-6",
    content: "v1.1.5.1 was released on October 20, 2021."
  }, {
    heading: "new-features-4",
    content: "**Support for customizing the video encoding configurations**"
  }, {
    heading: "new-features-4",
    content: "As of v1.1.5.1, developers can customize the video encoding configurations, including the width, height, frame rate, and bitrate. When calling the `launch` method, developers can set the `videoEncoderConfig` parameter in `mediaOptions` to customize the encoding configurations for the video stream captured by a camera or the screen-sharing video stream."
  }, {
    heading: "new-features-4",
    content: "The recommended video encoding configurations are as follows:"
  }, {
    heading: "new-features-4",
    content: "One-to-one Classroom: 320x240, 200 Kbps, and 15 fps."
  }, {
    heading: "new-features-4",
    content: "Small Classroom and Lecture Hall: 160x120, 65 Kbps, and 15 fps, if the number of students in a classroom who send their video stream at the same time is less than or equal to six."
  }, {
    heading: "new-features-4",
    content: '**Students automatically going onto the "stage"**'
  }, {
    heading: "new-features-4",
    content: 'v1.1.5.1 adds the feature of students automatically going onto the "stage" in the Small Classroom scenario. Once the teacher or TA enables this feature, students go onto the "stage" at specified intervals.'
  }, {
    heading: "new-features-4",
    content: "**Support for setting the latency level of a receiver**"
  }, {
    heading: "new-features-4",
    content: "As of v1.1.5.1, developers can set the latency level of an audience member. By default, the latency level is ultra-low. Developers can set the `latencyLevel` parameter in the `launch` method to change the latency level:"
  }, {
    heading: "new-features-4",
    content: "Ultra-low latency: The latency from the sender to the receiver is 400 ms to 800 ms."
  }, {
    heading: "new-features-4",
    content: "Low latency: The latency from the sender to the receiver is 1500 ms to 2000 ms."
  }, {
    heading: "new-features-4",
    content: "The charges for low latency and ultra-low latency are different. For details, see the pricing page."
  }, {
    heading: "new-features-4",
    content: '**Support for setting whether students automatically send streams after going onto the "stage"**'
  }, {
    heading: "new-features-4",
    content: 'v1.1.5.1 allows developers to control whether students automatically send audio or video streams after they go onto the "stage". By default, students do not send audio nor video streams after they go onto the "stage". You can change the default behavior by setting the `streamState` parameter when calling `launch`.'
  }, {
    heading: "new-features-4",
    content: "**Pre-class device test and local video preview**"
  }, {
    heading: "new-features-4",
    content: "As of v1.1.5.1, Flexible Classroom adds the Media Context API to allow developers to implement the pre-class test module, with which students can check whether their camera and microphone are functioning correctly and preview how they look and sound before they join a class."
  }, {
    heading: "new-features-4",
    content: "**The countdown timer**"
  }, {
    heading: "new-features-4",
    content: "v1.1.5.1 adds a countdown timer in Flexible Classroom. The teacher can find the countdown time in the toolbox and set an initial value. After the teacher clicks the start button, students see a countdown window."
  }, {
    heading: "new-features-4",
    content: "**Support for media device management**"
  }, {
    heading: "new-features-4",
    content: "As of v1.1.5.1, students can control whether local cameras, microphones, and speakers are on or off during the class. Agora adds the `DeviceContext` and `IDeviceHandler` classes in the Agora Edu Context and provides methods and callbacks for local device control."
  }, {
    heading: "new-features-4",
    content: "**Teachers making notes on their shared screen**"
  }, {
    heading: "new-features-4",
    content: "As of v1.1.5.1, teachers can make notes on the screen that they share with the basic whiteboard tools."
  }, {
    heading: "new-features-4",
    content: "**Support for custom user properties and classroom properties**"
  }, {
    heading: "new-features-4",
    content: "As of v1.1.5.1, developers can customize properties for users and classrooms. These properties can be updated, and the updates can be monitored. For example, developers can set the profile photo as a custom user property. To support this feature, Agora makes the following changes to the Agora Edu Context:"
  }, {
    heading: "new-features-4",
    content: "Classroom properties:"
  }, {
    heading: "new-features-4",
    content: "Add the `updateFlexRoomProps` method in `RoomContext` for adding or updating custom classroom properties."
  }, {
    heading: "new-features-4",
    content: "Add the `onFlexRoomPropsInitialized` and `onFlexRoomPropertiesChanged` callbacks in `IRoomHandler` for indicating the initial custom classroom properties and subsequent classroom property changes."
  }, {
    heading: "new-features-4",
    content: "User properties:"
  }, {
    heading: "new-features-4",
    content: "Add the `userProperties` parameter in `AgoraEduLaunchConfig` for passing in custom user properties when launching a classroom."
  }, {
    heading: "new-features-4",
    content: "Add the `updateFlexUserProperties` method in `UserContext` for adding or updating custom user properties."
  }, {
    heading: "new-features-4",
    content: "Add the `onFlexUserPropertiesChanged` callback in `IEduUserHandler` for indicating user property changes."
  }, {
    heading: "improvements-6",
    content: "To optimize the PPT display on the students' clients, v1.1.5.1 adds the `boardFitMode` parameter in `AgoraEduLaunchConfig` for setting the PPT display mode. By default, the PPT display mode is fit, which means uniformly scaling the PPT until one of its dimensions fits the boundary. Developers can change the `boardFitMode` to `Retain` when calling the `launch` method. In this mode, if the student manually adjusts the PPT size, the client maintains this size no matter what class the student joins."
  }, {
    heading: "improvements-6",
    content: "As of v1.1.5.1, Flexible Classroom supports displaying HTML5 courseware on the whiteboard."
  }, {
    heading: "improvements-6",
    content: "v1.1.0.1 was released on July 7, 2021."
  }, {
    heading: "new-features-5",
    content: "**Media encryption**"
  }, {
    heading: "new-features-5",
    content: "To ensure the security during real-time audio and video transmission, v1.1.0.1 adds the `mediaOptions` parameter in AgoraEduLaunchConfig for supporting media stream encryption. By default, Flexible Classroom does not encrypt the media stream. To enable media encryption, use the `mediaOptions` parameter to choose an encryption mode and set the encryption key. Flexible Classroom supports the following encryption modes:"
  }, {
    heading: "new-features-5",
    content: "`AES_128_XTS`: 128-bit AES encryption, XTS mode."
  }, {
    heading: "new-features-5",
    content: "`AES_128_ECB`: 128-bit AES encryption, ECB mode."
  }, {
    heading: "new-features-5",
    content: "`AES_256_XTS`: 256-bit AES encryption, XTS mode."
  }, {
    heading: "new-features-5",
    content: "`AES_128_GCM`: 128-bit AES encryption, GCM mode."
  }, {
    heading: "new-features-5",
    content: "`AES_256_GCM`: 256-bit AES encryption, GCM mode."
  }, {
    heading: "new-features-5",
    content: "The teacher and students in a classroom must use the same encryption mode and key. If not, unexpected issues, such as a white or black screen and noise, may occur."
  }, {
    heading: "issues-fixed-7",
    content: "v1.1.0.1 fixes the issue that the default region was not NA (North America)."
  }, {
    heading: "issues-fixed-7",
    content: "v1.1.0 was released on June 18, 2021. This is the first release of Agora Flexible Classroom with the following features:"
  }, {
    heading: "issues-fixed-7",
    content: "Real-time audio and video interaction"
  }, {
    heading: "issues-fixed-7",
    content: "Signaling"
  }, {
    heading: "issues-fixed-7",
    content: "Interactive whiteboard"
  }, {
    heading: "issues-fixed-7",
    content: "Screen sharing"
  }, {
    heading: "issues-fixed-7",
    content: "Recording and replay"
  }, {
    heading: "issues-fixed-7",
    content: "Teaching tools, including cloud storage, classroom rewards, and the user list"
  }, {
    heading: "issues-fixed-7",
    content: "Customizing the classroom user interfaces and embedding custom plugins in classrooms"
  }, {
    heading: "issues-fixed-7",
    content: "Flexible Classroom cloud service for classroom and user management"
  }, {
    heading: "ios",
    content: "v2.8.00 was released on March 6, 2024"
  }, {
    heading: "improvements-7",
    content: "This release optimizes the network connection by supporting the cloud proxy configurations of the RTM service."
  }, {
    heading: "issues-fixed-8",
    content: "This release fixes the following issues:"
  }, {
    heading: "issues-fixed-8",
    content: "The font size displayed on the whiteboard was abnormal."
  }, {
    heading: "issues-fixed-8",
    content: "The on-stage state became inaccurate after students in a lecture hall joined and left the class."
  }, {
    heading: "issues-fixed-8",
    content: "v2.8.80 was released on December 14, 2023."
  }, {
    heading: "improvements-8",
    content: "This release made the following improvements:"
  }, {
    heading: "improvements-8",
    content: "Optimized the logic for capturing the remote raw audio data."
  }, {
    heading: "improvements-8",
    content: "Enhanced the data transmission efficiency in the classroom."
  }, {
    heading: "improvements-8",
    content: "Optimized the synchronization mechanism of personal data in big classes."
  }, {
    heading: "improvements-8",
    content: "Enhanced the optimization of media error callbacks."
  }, {
    heading: "improvements-8",
    content: "Optimized the performance of the `onAudioRawDataBeforeMixed` and `onAudioRawDataMixed` callbacks."
  }, {
    heading: "improvements-8",
    content: "Optimized the efficiency of the `FcrAudioRawDataPosition` class."
  }, {
    heading: "issues-fixed-9",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-9",
    content: "In use-cases where the number of publishers exceeded the upper limit, if a student did not stop publishing streams after getting off the stage, the student that got on the stage could not publish streams."
  }, {
    heading: "issues-fixed-9",
    content: "After the whiteboard was disabled, the usage calculation continued."
  }, {
    heading: "issues-fixed-9",
    content: "The user presence state was incorrectly displayed."
  }, {
    heading: "issues-fixed-9",
    content: "Occasional audio mixing issues while using the whiteboard."
  }, {
    heading: "issues-fixed-9",
    content: "Occasional video inversion."
  }, {
    heading: "issues-fixed-9",
    content: "v2.8.11 was released on January 13, 2023."
  }, {
    heading: "improvements-9",
    content: "This release adds support for sharing audio when sharing the screen."
  }, {
    heading: "issues-fixed-10",
    content: "This release fixes known issues on mobile devices."
  }, {
    heading: "issues-fixed-10",
    content: "v2.8.0 was released on December 12, 2022."
  }, {
    heading: "new-features-6",
    content: "**New UI theme**"
  }, {
    heading: "new-features-6",
    content: "v2.8.0 enables you to set the display theme of the classroom UI to light or dark."
  }, {
    heading: "new-features-6",
    content: "**New language supported**"
  }, {
    heading: "new-features-6",
    content: "v2.8.0 supports setting the language of the classroom UI to Chinese or English."
  }, {
    heading: "new-features-6",
    content: "**Login and signup page**"
  }, {
    heading: "new-features-6",
    content: "The Flexible Classroom demo adds a login and a signup page."
  }, {
    heading: "new-features-6",
    content: "**Flexible Classroom UI builder**"
  }, {
    heading: "new-features-6",
    content: `Flexible Classroom UI builder is launched to enable you design and customize the UI of your classroom.
The UI builder currently supports the following
Flexible Classroom features:`
  }, {
    heading: "new-features-6",
    content: "All features of versions 2.6.x and earlier"
  }, {
    heading: "new-features-6",
    content: "Setting the display theme of the classroom UI to light or dark"
  }, {
    heading: "new-features-6",
    content: "Setting the language of the classroom UI to Chinese or English"
  }, {
    heading: "new-features-6",
    content: "**Online proctoring scenario**"
  }, {
    heading: "new-features-6",
    content: `v2.8.0 provides the Agora Proctor SDK for online exam proctoring scenarios. For details, see the Agora Proctor
SDK API reference.`
  }, {
    heading: "new-features-6",
    content: "**New demo features**"
  }, {
    heading: "new-features-6",
    content: "v2.8.0 adds the following features to the demo:"
  }, {
    heading: "new-features-6",
    content: "Signing up, logging in, and deleting the account"
  }, {
    heading: "new-features-6",
    content: "A course list page"
  }, {
    heading: "new-features-6",
    content: "Classroom reports, including the following information:"
  }, {
    heading: "new-features-6",
    content: "Course information"
  }, {
    heading: "new-features-6",
    content: "Course recording"
  }, {
    heading: "new-features-6",
    content: "Course reports, including tracking student attendance and students interaction"
  }, {
    heading: "new-features-6",
    content: "Highlighting of speakers"
  }, {
    heading: "new-features-6",
    content: "The ability to partially erase the whiteboard"
  }, {
    heading: "improvements-10",
    content: "This release includes the following improvements:"
  }, {
    heading: "improvements-10",
    content: "Enhanced UI layer code for developers to customize the classroom UI."
  }, {
    heading: "improvements-10",
    content: "Support for the Microsoft Edge browser."
  }, {
    heading: "improvements-10",
    content: "The following features were improved in the demo:"
  }, {
    heading: "improvements-10",
    content: "The procedures of joining and creating a room. Users now can reserve a room in advance as well"
  }, {
    heading: "improvements-10",
    content: "The efficiency of converting course materials"
  }, {
    heading: "improvements-10",
    content: "The compatibility of the whiteboard toolbar with touchscreen devices."
  }, {
    heading: "improvements-10",
    content: "The `agora-edu-core` libraries have been enhanced."
  }, {
    heading: "improvements-10",
    content: "v2.6.x was released on July 29, 2022."
  }, {
    heading: "new-features-7",
    content: "**Taking screenshots (Electron only)**"
  }, {
    heading: "new-features-7",
    content: 'v2.6.x adds a snipping tool for Teacher to "take screenshots" of content inside and outside of the classroom, and dynamically add it to the classroom whiteboard. The feature is available in one-to-one classrooms, small classrooms, and lecture halls. This feature is available in the toolbar on Windows and macOS clients. Teachers and teaching assistants can choose to take a screenshot directly or with the current window hidden. The screenshot is displayed in the center of the whiteboard. And Agora provides APIs to expand usage of this feature to include Students and other roles:'
  }, {
    heading: "new-features-7",
    content: "Web: getSnapshotRgba"
  }, {
    heading: "new-features-7",
    content: "Electron: getSnapshot"
  }, {
    heading: "new-features-7",
    content: "iOS: getSnapshot"
  }, {
    heading: "new-features-7",
    content: "Android: getSnapshot"
  }, {
    heading: "new-features-7",
    content: "**Automatic grouping**"
  }, {
    heading: "new-features-7",
    content: 'For the "breakout rooms" feature, v2.6.x supports automatic grouping. Teachers can set up the number of breakout rooms. Then the system randomly assigns the whole class to breakout rooms.'
  }, {
    heading: "new-features-7",
    content: "**Drag and Drop images from desktop into the classroom whiteboard (Web/Electron)**"
  }, {
    heading: "new-features-7",
    content: "v2.6.x allows teachers or teaching assistants on the PC to drop local images to the whiteboard area and insert the images into the whiteboard."
  }, {
    heading: "new-features-7",
    content: "**Dynamic Size, Resize and Place Teacher Video inside the Classroom**"
  }, {
    heading: "new-features-7",
    content: "v2.6.x allows teachers to freely drag and drop their own video and the video of students within the classroom window. Teachers can also resize a video window by double-clicking it. Whatever actions the teacher takes with their video window, students will see."
  }, {
    heading: "new-features-7",
    content: "**Hiding the stage area**"
  }, {
    heading: "new-features-7",
    content: "v2.6.x adds a button in the settings of small classrooms, which enables teachers to hide the stage area. After the stage is hidden, the following things occur:"
  }, {
    heading: "new-features-7",
    content: "All videos are disabled."
  }, {
    heading: "new-features-7",
    content: "All students automatically steps down from the stage."
  }, {
    heading: "new-features-7",
    content: "The whiteboard is scaled up to fit the classroom."
  }, {
    heading: "new-features-7",
    content: "**Saving whiteboard contents as images**"
  }, {
    heading: "new-features-7",
    content: "v2.6.x allows teachers and teaching assistants to save contents on the whiteboard to their local device as JPG images."
  }, {
    heading: "new-features-7",
    content: "**Adding web links as courseware**"
  }, {
    heading: "new-features-7",
    content: "v2.6.x allows teachers to add web links, such as YouTube links and Google Drive links, in **My Resources**. The suffix of such kind of courseware is `.alf`, which is the abbreviation of agora link file. After the upload succeeds, the teacher can open the courseware in the classroom."
  }, {
    heading: "issues-fixed-11",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-11",
    content: "(iOS) Crashes occurred when receiving a global announcement."
  }, {
    heading: "issues-fixed-11",
    content: "(iOS) In small classrooms, the teacher did not select the brush, but red lines appeared on the whiteboard."
  }, {
    heading: "issues-fixed-11",
    content: "(iOS) In small classrooms, the teacher double-clicked the settings, chat, or roster buttons, the color of these buttons did not change."
  }, {
    heading: "issues-fixed-11",
    content: "(Android) In small classrooms, after a student joined a sub-room and invited the teacher to join the same sub-room, the teacher entered the wrong sub-room."
  }, {
    heading: "issues-fixed-11",
    content: "(All) In small classrooms, before any student joined the classroom, the teacher started and ended the breakout room session. Then after a student joined the classroom, when the teacher re-started the breakout room session, the 500 error occurred."
  }, {
    heading: "issues-fixed-11",
    content: "v2.4.x was released on June 2, 2022."
  }, {
    heading: "new-features-8",
    content: "**Breakout rooms (Web only)**"
  }, {
    heading: "new-features-8",
    content: 'v2.4.x adds the "Breakout rooms" feature in the toolbox of small classrooms. With breakout rooms, students can get together in small groups for discussion and brainstorming sessions. The teacher manually assigns students to each breakout room. A class supports up to 20 breakout rooms with a maximum of 17 members in each room. The features that are available in breakout rooms include real-time audio and video interaction, messaging, whiteboarding, and screen sharing.'
  }, {
    heading: "new-features-8",
    content: "After the breakout session begins, the teacher and teaching assistants have the ability to dynamically join or leave any of the breakout rooms. They can also send announcements to all the breakout rooms. Students are notified in their chat to check for the announcements."
  }, {
    heading: "new-features-8",
    content: "**Support for the teacher role on Android and iOS clients**"
  }, {
    heading: "new-features-8",
    content: "v2.4.x duplicates the features of the teacher role on desktop experience for Web, macOS, and Windows on mobile clients (Android and iOS)."
  }, {
    heading: "new-features-8",
    content: "Note that the following features are temporarily not available for the teacher role on mobile clients:"
  }, {
    heading: "new-features-8",
    content: "Enabling screen sharing"
  }, {
    heading: "new-features-8",
    content: "Starting pop-up quizzes"
  }, {
    heading: "new-features-8",
    content: "Starting polls"
  }, {
    heading: "new-features-8",
    content: "Starting the countdown timer"
  }, {
    heading: "new-features-8",
    content: "**Ability to turn the whiteboard on and off in the classroom**"
  }, {
    heading: "new-features-8",
    content: "v2.4.x adds the ability to turn the whiteboard on or off in one-on-one classrooms, small classrooms, and lecture halls. By default, after the whiteboard is turned off, the teacher's video is displayed in the whiteboard area. Developers are also able to use UIStore or UIKit to customize the classroom layout when the whiteboard is off."
  }, {
    heading: "improvements-11",
    content: "This release includes the following improvements:"
  }, {
    heading: "improvements-11",
    content: "Optimizes widgets: v2.4.x optimizes the internal technical architecture of the three widgets: Pop-up Quiz, Poll, and Countdown Timer for the higher stability and better end-user experience. In addition, v2.4.x enables developers to get the data of pop-up quizzes and polls through RESTful APIs. For details, see the RESTful API reference."
  }, {
    heading: "improvements-11",
    content: "Improves the compatibility of the Web client: The Web client is now supported on the desktop version of Firefox."
  }, {
    heading: "improvements-11",
    content: "Optimizes the cloud storage: v2.4.x optimizes the business logic and UI of the cloud storage feature in Flexible Classroom."
  }, {
    heading: "improvements-11",
    content: "Optimizes the whiteboard: v2.4.x adds laser pointer, undo, redo, and one-click screen-clearing features on the whiteboard in Flexible Classroom."
  }, {
    heading: "improvements-11",
    content: "Reward enhancements: The teacher can now extend and remove student rewards dynamically during a class session."
  }, {
    heading: "issues-fixed-12",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-12",
    content: "When the teacher moved a file or a tool on the whiteboard, the movement might not be synchronized on the students' side."
  }, {
    heading: "issues-fixed-12",
    content: "Logging in to the IM module occasionally failed."
  }, {
    heading: "issues-fixed-12",
    content: "Loading a file failed when the format of the file was not supported."
  }, {
    heading: "issues-fixed-12",
    content: "v2.1.0 was released on February 23, 2022."
  }, {
    heading: "release-highlights-1",
    content: "In v2.1.0, Agora fully optimizes the internal architecture of Flexible Classroom. Compared to earlier versions, v2.1.0 has the following advantages:"
  }, {
    heading: "release-highlights-1",
    content: "New features:"
  }, {
    heading: "release-highlights-1",
    content: "Answer Selector (Pop-up Quiz), Polling Feature, Countdown Timer, Mobile HTML5 Support, and ability to turn the whiteboard on or off in the classroom."
  }, {
    heading: "release-highlights-1",
    content: "Video Gallery Rotation: Ability for teachers to configure the classroom setting to automatically rotate the on-stage student gallery view without attempting to scroll or page through the class participants."
  }, {
    heading: "release-highlights-1",
    content: "Lecture Hall: Expands audience capacity up to 5,000 students, from 1,000 in the last version."
  }, {
    heading: "release-highlights-1",
    content: "Web client:"
  }, {
    heading: "release-highlights-1",
    content: "Adds support for Safari on desktop and iPad, as well as for Chrome on the iPad."
  }, {
    heading: "release-highlights-1",
    content: "Introduces EDUClassroomUIStore for customizing the classroom UI, which replaces the UIKit in previous versions."
  }, {
    heading: "release-highlights-1",
    content: "Android and iOS clients:"
  }, {
    heading: "release-highlights-1",
    content: "Redesigns contexts for better abstraction of modular features in Flexible Classroom, where each context can be controlled separately."
  }, {
    heading: "release-highlights-1",
    content: "Refactors context APIs with the following improvements:"
  }, {
    heading: "release-highlights-1",
    content: "Renamed APIs and parameters for intuitiveness, understandability, and consistency."
  }, {
    heading: "release-highlights-1",
    content: "Improved flexibility of API calling."
  }, {
    heading: "release-highlights-1",
    content: "More APIs for developers to customize their own features."
  }, {
    heading: "flexible-classroom-v210-migration-guidance-1",
    content: "If you have made changes to your Flexible Classroom UI in earlier versions, in order to migrate to v2.1.0, Agora recommends you create a new project based on v2.1.0 and re-implement the UI changes. Please refer to the following Flexible Classroom v2.1.0 migration guides:"
  }, {
    heading: "flexible-classroom-v210-migration-guidance-1",
    content: "Migration guide"
  }, {
    heading: "flexible-classroom-v210-migration-guidance-1",
    content: "If you encounter any problem during the migration process, or need to migrate from Flexible Classroom earlier than v1.1.5, please contact support\\@agora.io so that Agora technical support team can help."
  }, {
    heading: "new-features-9",
    content: "**Answer selector and polling feature**"
  }, {
    heading: "new-features-9",
    content: "To increase engagement and enhance interactivity, v2.1.0 adds the following teaching tools:"
  }, {
    heading: "new-features-9",
    content: "Answer selector: This tool is applicable to scenarios where the teacher asks a single-choice or multiple-choice question and requests the whole class to answer the question together. The teacher can set up the choices and the correct answer, and then trigger answering. The teacher can see the number of students who have submitted an answer and the percentage that are correct in real time."
  }, {
    heading: "new-features-9",
    content: "Polling: This tool is applicable to scenarios where the teacher wants to get feedback from the whole class. The teacher can set up the subject, choices, and start and end time of the poll. Flexible Classroom also provides live visualization of polling results."
  }, {
    heading: "new-features-9",
    content: "**Ability to turn the whiteboard on or off in the classroom**"
  }, {
    heading: "new-features-9",
    content: "As of v2.1.0, Agora supports turning the whiteboard on or off in the classroom. For details, see Enable and disable the whiteboard. When using the APIs for this feature, after the whiteboard is closed, developers can use Flexible Classroom UIKit or UIStore to customize their unique classroom with their desired video gallery to fill the classroom window."
  }, {
    heading: "new-features-9",
    content: "**Video gallery rotation**"
  }, {
    heading: "new-features-9",
    content: "Flexible Classroom gives teachers the ability to configure the classroom settings for improved student engagement and video. The Video Gallery Rotation feature lets the teacher automatically rotate the on-stage student gallery view at a desired frequency and sequence, thus eliminating the need for the teacher to scroll or page through the class participants."
  }, {
    heading: "new-features-9",
    content: "**Mobile HTML5 support**"
  }, {
    heading: "new-features-9",
    content: "As of v2.1.0, students can join a lecture hall in Flexible Classroom simply by clicking on a shared webpage link within some mobile social applications that use a web view. After joining the classroom on mobile devices, students can do the following things:"
  }, {
    heading: "new-features-9",
    content: `Watch and hear the teacher's lecture, as well as presentations by students "on the stage".`
  }, {
    heading: "new-features-9",
    content: "View the whiteboard and the screen shared by the teacher."
  }, {
    heading: "new-features-9",
    content: "Send messages to chat with other participants in the classroom."
  }, {
    heading: "new-features-9",
    content: "Engage in class activities such as polling, answering, and viewing the teacher's count down clock."
  }, {
    heading: "new-features-9",
    content: "Please note that the following features are not supported on HTML5:"
  }, {
    heading: "new-features-9",
    content: 'Students raising their hands to apply for speaking on the "stage".'
  }, {
    heading: "new-features-9",
    content: "Students drawing on the whiteboard."
  }, {
    heading: "new-features-9",
    content: "Students testing or switching their local media devices."
  }, {
    heading: "improvements-12",
    content: "v2.1.0 makes the following improvements:"
  }, {
    heading: "improvements-12",
    content: 'Optimizes the business logic and UI of various features in Flexible Classroom, such as students "raising their hands" for permission to speak, the class roster, and in-class reminders.'
  }, {
    heading: "improvements-12",
    content: "Increases the upper limit on the number of users in a lecture hall to 5,000."
  }, {
    heading: "improvements-12",
    content: "Improves the compatibility of the Web client. The Web client is now supported on Safari for the desktop and iPad, as well as on Chrome for the iPad."
  }, {
    heading: "improvements-12",
    content: "Supports displaying thumbnails and animations for the PPT files opened in the classroom."
  }, {
    heading: "improvements-12",
    content: "When a classroom is being recorded, the recording button changes to red."
  }, {
    heading: "issues-fixed-13",
    content: "v2.1.0 fixed the following issues:"
  }, {
    heading: "issues-fixed-13",
    content: "(All platforms) The RTC SDK and whiteboard usage occurred in Flexible Classroom was not showed in Agora Console."
  }, {
    heading: "issues-fixed-13",
    content: "(Web) Occasional failure to record the whiteboard contents in a small classroom."
  }, {
    heading: "issues-fixed-13",
    content: "(Web) Occasional failure to send a massage in a small classroom."
  }, {
    heading: "issues-fixed-13",
    content: "(Web) After the teacher joined a lecture hall, there was a possibility that the whiteboard was not loaded successfully."
  }, {
    heading: "issues-fixed-13",
    content: '(Web/Windows/macOS) Sometimes in a lecture hall, a student "raised a hand" to apply for making a presentation, an error occurred. And the teacher did not receive the application.'
  }, {
    heading: "issues-fixed-13",
    content: `(Web/Windows/macOS) In a small classroom, a student went onto the "stage" and turned on the video. After the student left the room, the student's video did not disappear immediately.`
  }, {
    heading: "issues-fixed-13",
    content: "(Windows) When a student left and rejoined the room, the student could not see the room announcement published by the teacher."
  }, {
    heading: "issues-fixed-13",
    content: "(Windows) In a one-to-one classroom, the student's video occasionally went black."
  }, {
    heading: "issues-fixed-13",
    content: "(iOS) When the teacher displayed a PPT that contained audio and video, the student on iOS sometimes neither heard the audio nor saw the video."
  }, {
    heading: "issues-fixed-13",
    content: "(Android) In a small classroom, sometimes if a student on Android left and rejoined the room, the student could not see the teacher's video."
  }, {
    heading: "issues-fixed-13",
    content: "v1.1.5 was released on October 20, 2021."
  }, {
    heading: "compatibility-changes",
    content: "**Integration changes**"
  }, {
    heading: "compatibility-changes",
    content: "In v1.1.5, Flexible Classroom is divided into four libraries: `AgoraClassroomSDK`, `AgoraEduCore`, `AgoraEduUI`, and `AgoraEduContext`. `AgoraClassroomSDK`, `AgoraEduUI`, and `AgoraEduContext` are open-source libraries and released on Github and CocoaPods. `AgoraEduCore` is a closed-source library and released on CocoaPods as a binary package. If you change the default UI of Flexible Classroom in a previous version, please see the migration guide."
  }, {
    heading: "compatibility-changes",
    content: "**Edu Context API changes**"
  }, {
    heading: "compatibility-changes",
    content: "Agora makes the following changes to the Edu Context APIs in v1.1.5:"
  }, {
    heading: "compatibility-changes",
    content: 'Delete "Set" or "Get" in the names of all handlers. Agora supports backward compatibility but recommends you change to the new handlers as soon as possible.'
  }, {
    heading: "compatibility-changes",
    content: "Deprecate all `onShowXXXTips` methods and move the code of texts and toasts to `AgoraEduUI`."
  }, {
    heading: "new-features-10",
    content: "**Support for customizing the video encoding configurations**"
  }, {
    heading: "new-features-10",
    content: "As of v1.1.5, developers can customize the video encoding configurations, including the width, height, frame rate, and bitrate. When calling the `launch` method, developers can set the `cameraEncoderConfiguration` parameter in `AgoraEduLaunchConfig` to customize the encoding configurations for the video stream captured by a camera or the screen-sharing video stream."
  }, {
    heading: "new-features-10",
    content: "The recommended video encoding configurations are as follows:"
  }, {
    heading: "new-features-10",
    content: "One-to-one Classroom: 320x240, 200 Kbps, and 15 fps."
  }, {
    heading: "new-features-10",
    content: "Small Classroom and Lecture Hall: 160x120, 65 Kbps, and 15 fps, if the number of students in a classroom who send their video stream at the same time is less than or equal to six."
  }, {
    heading: "new-features-10",
    content: '**Students automatically going onto the "stage"**'
  }, {
    heading: "new-features-10",
    content: 'v1.1.5 adds the feature of students automatically going onto the "stage" in the Small Classroom scenario. Once the teacher or TA enables this feature, students go onto the "stage" at specified intervals.'
  }, {
    heading: "new-features-10",
    content: "**Support for setting the latency level of a receiver**"
  }, {
    heading: "new-features-10",
    content: "As of v1.1.5, developers can set the latency level of an audience member. By default, the latency level is ultra-low. Developers can set the `latencyLevel` parameter in the `launch` method to change the latency level:"
  }, {
    heading: "new-features-10",
    content: "Ultra-low latency: The latency from the sender to the receiver is 400 ms to 800 ms."
  }, {
    heading: "new-features-10",
    content: "Low latency: The latency from the sender to the receiver is 1500 ms to 2000 ms."
  }, {
    heading: "new-features-10",
    content: "The charges for low latency and ultra-low latency are different. For details, see the pricing page."
  }, {
    heading: "new-features-10",
    content: '**Support for setting whether students automatically send streams after going onto the "stage" (Android/iOS)**'
  }, {
    heading: "new-features-10",
    content: 'v1.1.5 allows developers to control whether students automatically send audio or video streams after they go onto the "stage". By default, students do not send audio nor video streams after they go onto the "stage". You can change the default behavior by setting the `audioState` and `videoState` parameters when calling `launch`.'
  }, {
    heading: "new-features-10",
    content: "**Pre-class device test and local video preview**"
  }, {
    heading: "new-features-10",
    content: "As of v1.1.5, Flexible Classroom adds the **Media Context API** to allow developers to implement the pre-class test module, with which students can check whether their camera and microphone are functioning correctly and preview how they look and sound before they join a class."
  }, {
    heading: "new-features-10",
    content: "**The countdown timer**"
  }, {
    heading: "new-features-10",
    content: "v1.1.5 adds a countdown timer in Flexible Classroom. The teacher can find the countdown time in the toolbox and set an initial value. After the teacher clicks the start button, students see a countdown window."
  }, {
    heading: "new-features-10",
    content: "**Support for media device management**"
  }, {
    heading: "new-features-10",
    content: "As of v1.1.5, students can control whether local cameras, microphones, and speakers are on or off during the class. Agora adds the `AgoraEduDeviceContext` and `AgoraEduDeviceHandler` classes in the Agora Edu Context and provides methods and callbacks for local device control."
  }, {
    heading: "new-features-10",
    content: "**Teachers making notes on their shared screen**"
  }, {
    heading: "new-features-10",
    content: "As of v1.1.5, teachers can make notes on the screen that they share with the basic whiteboard tools."
  }, {
    heading: "new-features-10",
    content: "**Support for custom user properties and classroom properties**"
  }, {
    heading: "new-features-10",
    content: "As of v1.1.15, developers can customize properties for users and classrooms. These properties can be updated, and the updates can be monitored. For example, developers can set the profile photo as a custom user property. To support this feature, Agora makes the following changes to the Agora Edu Context:"
  }, {
    heading: "new-features-10",
    content: "Classroom properties:"
  }, {
    heading: "new-features-10",
    content: "Add the `updateFlexRoomProps` method in `AgoraEduRoomContext` for adding or updating custom classroom properties."
  }, {
    heading: "new-features-10",
    content: "Add the `onFlexRoomPropsInitialized` and `onFlexRoomPropertiesChanged` callbacks in `AgoraEduRoomHandler` for indicating the initial custom classroom properties and subsequent classroom property changes."
  }, {
    heading: "new-features-10",
    content: "User properties:"
  }, {
    heading: "new-features-10",
    content: "Add the `userProperties` parameter in `AgoraEduLaunchConfig` for passing in custom user properties when launching a classroom."
  }, {
    heading: "new-features-10",
    content: "Add the `updateFlexUserProperties` method in `AgoraEduUserContext` for adding or updating custom user properties."
  }, {
    heading: "new-features-10",
    content: "Add the `onFlexUserPropertiesChanged` callback in `AgoraEduUserHandler` for indicating user property changes."
  }, {
    heading: "improvements-13",
    content: "To optimize the PPT display on the students' clients, v1.1.5 adds the `boardFitMode` parameter in `AgoraEduLaunchConfig` for setting the PPT display mode. By default, the PPT display mode is fit, which means uniformly scaling the PPT until one of its dimensions fits the boundary. Developers can change the `boardFitMode` to `Retain` when calling the `launch` method. In this mode, if the student manually adjusts the PPT size, the client maintains this size no matter what class the student joins."
  }, {
    heading: "improvements-13",
    content: "As of v1.1.5, Flexible Classroom supports displaying HTML5 courseware on the whiteboard."
  }, {
    heading: "improvements-13",
    content: "v1.1.0.1 was released on July 7, 2021."
  }, {
    heading: "new-features-11",
    content: "**Media encryption**"
  }, {
    heading: "new-features-11",
    content: "To ensure the security during real-time audio and video transmission, v1.1.0.1 adds the `mediaOptions` parameter in AgoraEduLaunchConfig for supporting media stream encryption. By default, Flexible Classroom does not encrypt the media stream. To enable media encryption, use the `mediaOptions` parameter to choose an encryption mode and set the encryption key. Flexible Classroom supports the following encryption modes:"
  }, {
    heading: "new-features-11",
    content: "`AgoraEduMediaEncryptionModeAES128XTS`: 128-bit AES encryption, XTS mode."
  }, {
    heading: "new-features-11",
    content: "`AgoraEduMediaEncryptionModeAES128ECB`: 128-bit AES encryption, ECB mode."
  }, {
    heading: "new-features-11",
    content: "`AgoraEduMediaEncryptionModeAES256XTS`: 256-bit AES encryption, XTS mode."
  }, {
    heading: "new-features-11",
    content: "`AgoraEduMediaEncryptionModeAES128GCM`: 128-bit AES encryption, GCM mode."
  }, {
    heading: "new-features-11",
    content: "`AgoraEduMediaEncryptionModeAES256GCM`: 256-bit AES encryption, GCM mode."
  }, {
    heading: "new-features-11",
    content: "The teacher and students in a classroom must use the same encryption mode and key. If not, unexpected issues, such as a white or black screen and noise, may occur."
  }, {
    heading: "issues-fixed-14",
    content: "v1.1.0.1 fixes the issue that the default region was not NA (North America)."
  }, {
    heading: "issues-fixed-14",
    content: "v1.1.0 was released on June 18, 2021. This is the first release of Agora Flexible Classroom with the following features:"
  }, {
    heading: "issues-fixed-14",
    content: "Real-time audio and video interaction"
  }, {
    heading: "issues-fixed-14",
    content: "Signaling"
  }, {
    heading: "issues-fixed-14",
    content: "Interactive whiteboard"
  }, {
    heading: "issues-fixed-14",
    content: "Screen sharing"
  }, {
    heading: "issues-fixed-14",
    content: "Recording and replay"
  }, {
    heading: "issues-fixed-14",
    content: "Teaching tools, including cloud storage, classroom rewards, and the user list"
  }, {
    heading: "issues-fixed-14",
    content: "Customizing the classroom user interfaces and embedding custom plugins in classrooms"
  }, {
    heading: "issues-fixed-14",
    content: "Flexible Classroom cloud service for classroom and user management"
  }, {
    heading: "web",
    content: "v2.9.40 was released on March 6, 2024."
  }, {
    heading: "improvements-14",
    content: "This release adds the following improvements:"
  }, {
    heading: "improvements-14",
    content: "Optimizes the logic of audio device selection after plugging and unplugging an external audio device."
  }, {
    heading: "improvements-14",
    content: "Supports adjusting video profile during class."
  }, {
    heading: "issues-fixed-15",
    content: "This release fixes the following issues:"
  }, {
    heading: "issues-fixed-15",
    content: "The on-stage state became inaccurate after students in a lecture hall joined and left the class."
  }, {
    heading: "issues-fixed-15",
    content: "The video window occasionally went black during live streaming on the H5 browser."
  }, {
    heading: "issues-fixed-15",
    content: "v2.9.20 was released on January 17, 2024."
  }, {
    heading: "new-features-12",
    content: "This release adds a notification which occurs when it takes too long to start the whiteboard."
  }, {
    heading: "improvements-15",
    content: "This release made the following improvements:"
  }, {
    heading: "improvements-15",
    content: "Upgraded the RTM service to v1.5.1."
  }, {
    heading: "improvements-15",
    content: "Optimized network connection by enabling RTC and RTM Cloud Proxy configurations."
  }, {
    heading: "improvements-15",
    content: "Enhanced the experience of searching for a member student during interaction."
  }, {
    heading: "improvements-15",
    content: "Improved the display format of the time span during which a student is in the classroom."
  }, {
    heading: "issues-fixed-16",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-16",
    content: "Users could join a room before the room was created."
  }, {
    heading: "issues-fixed-16",
    content: "The loudspeaker list was incorrectly displayed when a user plugged in or unplugged an external audio device."
  }, {
    heading: "issues-fixed-16",
    content: "The AI noise suppression switch was incorrectly displayed."
  }, {
    heading: "issues-fixed-16",
    content: "Some words in the user interface of the group discussion were incorrect."
  }, {
    heading: "issues-fixed-16",
    content: "Abnormalities occurred when a user left the discussion group."
  }, {
    heading: "issues-fixed-16",
    content: "Issues occurred with sound card capturing."
  }, {
    heading: "issues-fixed-16",
    content: "The callback was not triggered when the user attribute in a lecture hall was modified."
  }, {
    heading: "issues-fixed-16",
    content: "Occasionally, when a student frequently enabled or disabled video from a mobile device, the teacher could not subscribe to the video of the student."
  }, {
    heading: "issues-fixed-16",
    content: "Occasionally, the teacher/student could not operate the whiteboard after joining a discussion group."
  }, {
    heading: "issues-fixed-16",
    content: "An occasional error occurred when uploading courseware, which lead to failure in displaying the courseware list."
  }, {
    heading: "issues-fixed-16",
    content: "v2.9.0 was released on November 22, 2023."
  }, {
    heading: "new-features-13",
    content: "This version adds the following new scenarios:"
  }, {
    heading: "new-features-13",
    content: "Online classroom scenarios and the introduction of a new UI style and interactive experience that are closer to the usage habits of educational users. See the following documentation:"
  }, {
    heading: "new-features-13",
    content: "FcrUIScene SDK"
  }, {
    heading: "new-features-13",
    content: "API Reference"
  }, {
    heading: "new-features-13",
    content: "One-to-one private chat function. This function does not currently support retrieving historical messages from servers on demand."
  }, {
    heading: "improvements-16",
    content: "This release added the following improvements:"
  }, {
    heading: "improvements-16",
    content: "Added support for automatic domain switch to reduce the chance of users not being able to use Flexible Classroom."
  }, {
    heading: "improvements-16",
    content: "Optimized the mixing of system audio and RTC so that the media volume is not suppressed by the call volume."
  }, {
    heading: "improvements-16",
    content: "v2.8.13 was released on February 20, 2023."
  }, {
    heading: "improvements-16",
    content: "This version added a Beta icon for the virtual background and beauty options features on the Device Settings page."
  }, {
    heading: "improvements-17",
    content: "This release adds support for sharing audio when sharing the screen."
  }, {
    heading: "issues-fixed-17",
    content: "This release fixes the following known issues:"
  }, {
    heading: "issues-fixed-17",
    content: "Issues in the proctoring scenarios."
  }, {
    heading: "issues-fixed-17",
    content: "Issues on desktop devices."
  }, {
    heading: "api-changes",
    content: "The `audioDeviceName` and `withAudio` parameters were added to the `startScreenShareCapture` method."
  }, {
    heading: "api-changes",
    content: "For details, see the API reference."
  }, {
    heading: "api-changes",
    content: "v2.8.0 was released on December 12, 2022."
  }, {
    heading: "new-features-14",
    content: "**New UI theme**"
  }, {
    heading: "new-features-14",
    content: "v2.8.0 enables you to set the display theme of the classroom UI to light or dark."
  }, {
    heading: "new-features-14",
    content: "**New language supported**"
  }, {
    heading: "new-features-14",
    content: "v2.8.0 supports setting the language of the classroom UI to Chinese or English."
  }, {
    heading: "new-features-14",
    content: "**Flexible Classroom UI builder**"
  }, {
    heading: "new-features-14",
    content: `Flexible Classroom UI builder is launched to enable you design and customize the UI of your classroom.
The UI builder currently supports the following
Flexible Classroom features:`
  }, {
    heading: "new-features-14",
    content: "All features of versions 2.6.x and earlier"
  }, {
    heading: "new-features-14",
    content: "Setting the display theme of the classroom UI to light or dark"
  }, {
    heading: "new-features-14",
    content: "Setting the language of the classroom UI to Chinese or English"
  }, {
    heading: "new-features-14",
    content: "**Online proctoring scenario**"
  }, {
    heading: "new-features-14",
    content: "v2.8.0 provides the Agora Proctor SDK for online exam proctoring scenarios. For details, see the Agora Proctor SDK API reference."
  }, {
    heading: "new-features-14",
    content: "**Beauty options, virtual background, noise suppression**"
  }, {
    heading: "new-features-14",
    content: "v2.8.0 adds support for substantial new capabilities including video beauty options, virtual backgrounds,\nand noise suppression. For details, see the documentation of the `webrtcExtensionBaseUrl` field of the\n`LaunchOption` parameter in the Classroom SDK."
  }, {
    heading: "new-features-14",
    content: "**New demo features**"
  }, {
    heading: "new-features-14",
    content: "v2.8.0 adds the following features to the demo:"
  }, {
    heading: "new-features-14",
    content: "Signing up, logging in, and deleting the account"
  }, {
    heading: "new-features-14",
    content: "A course list page"
  }, {
    heading: "new-features-14",
    content: "Classroom reports, including the following information:"
  }, {
    heading: "new-features-14",
    content: "Course information"
  }, {
    heading: "new-features-14",
    content: "Course recording"
  }, {
    heading: "new-features-14",
    content: "Course reports, including tracking student attendance and students interaction"
  }, {
    heading: "new-features-14",
    content: "Highlighting of speakers"
  }, {
    heading: "new-features-14",
    content: "The ability to partially erase the whiteboard"
  }, {
    heading: "improvements-18",
    content: "This release includes the following improvements:"
  }, {
    heading: "improvements-18",
    content: "Enhanced the UI layer code for developers to customize the classroom UI."
  }, {
    heading: "improvements-18",
    content: "Support for the Microsoft Edge browser."
  }, {
    heading: "improvements-18",
    content: "The following features were improved in the demo:"
  }, {
    heading: "improvements-18",
    content: "The procedures of joining and creating a room. Users can now reserve a room in advance as well."
  }, {
    heading: "improvements-18",
    content: "The efficiency of converting course materials."
  }, {
    heading: "improvements-18",
    content: "The compatibility of the whiteboard toolbar with touchscreen devices."
  }, {
    heading: "improvements-18",
    content: "The `agora-edu-core` libraries have been enhanced."
  }, {
    heading: "improvements-18",
    content: "v2.6.x was released on July 29, 2022."
  }, {
    heading: "new-features-15",
    content: "**Taking screenshots (Electron only)**"
  }, {
    heading: "new-features-15",
    content: 'v2.6.x adds a snipping tool for Teacher to "take screenshots" of content inside and outside of the classroom, and dynamically add it to the classroom whiteboard. The feature is available in one-to-one classrooms, small classrooms, and lecture halls. This feature is available in the toolbar on Windows and macOS clients. Teachers and teaching assistants can choose to take a screenshot directly or with the current window hidden. The screenshot is displayed in the center of the whiteboard. And Agora provides APIs to expand usage of this feature to include Students and other roles:'
  }, {
    heading: "new-features-15",
    content: "Web: getSnapshotRgba"
  }, {
    heading: "new-features-15",
    content: "Electron: getSnapshot"
  }, {
    heading: "new-features-15",
    content: "iOS: getSnapshot"
  }, {
    heading: "new-features-15",
    content: "Android: getSnapshot"
  }, {
    heading: "new-features-15",
    content: "**Automatic grouping**"
  }, {
    heading: "new-features-15",
    content: 'For the "breakout rooms" feature, v2.6.x supports automatic grouping. Teachers can set up the number of breakout rooms. Then the system randomly assigns the whole class to breakout rooms.'
  }, {
    heading: "new-features-15",
    content: "**Drag and Drop images from desktop into the classroom whiteboard (Web/Electron)**"
  }, {
    heading: "new-features-15",
    content: "v2.6.x allows teachers or teaching assistants on the PC to drop local images to the whiteboard area and insert the images into the whiteboard."
  }, {
    heading: "new-features-15",
    content: "**Dynamic Size, Resize and Place Teacher Video inside the Classroom**"
  }, {
    heading: "new-features-15",
    content: "v2.6.x allows teachers to freely drag and drop their own video and the video of students within the classroom window. Teachers can also resize a video window by double-clicking it. Whatever actions the teacher takes with their video window, students will see."
  }, {
    heading: "new-features-15",
    content: "**Hiding the stage area**"
  }, {
    heading: "new-features-15",
    content: "v2.6.x adds a button in the settings of small classrooms, which enables teachers to hide the stage area. After the stage is hidden, the following things occur:"
  }, {
    heading: "new-features-15",
    content: "All videos are disabled."
  }, {
    heading: "new-features-15",
    content: "All students automatically steps down from the stage."
  }, {
    heading: "new-features-15",
    content: "The whiteboard is scaled up to fit the classroom."
  }, {
    heading: "new-features-15",
    content: "**Saving whiteboard contents as images**"
  }, {
    heading: "new-features-15",
    content: "v2.6.x allows teachers and teaching assistants to save contents on the whiteboard to their local device as JPG images."
  }, {
    heading: "new-features-15",
    content: "**Adding web links as courseware**"
  }, {
    heading: "new-features-15",
    content: "v2.6.x allows teachers to add web links, such as YouTube links and Google Drive links, in **My Resources**. The suffix of such kind of courseware is `.alf`, which is the abbreviation of agora link file. After the upload succeeds, the teacher can open the courseware in the classroom."
  }, {
    heading: "issues-fixed-18",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-18",
    content: "(iOS) Crashes occurred when receiving a global announcement."
  }, {
    heading: "issues-fixed-18",
    content: "(iOS) In small classrooms, the teacher did not select the brush, but red lines appeared on the whiteboard."
  }, {
    heading: "issues-fixed-18",
    content: "(iOS) In small classrooms, the teacher double-clicked the settings, chat, or roster buttons, the color of these buttons did not change."
  }, {
    heading: "issues-fixed-18",
    content: "(Android) In small classrooms, after a student joined a sub-room and invited the teacher to join the same sub-room, the teacher entered the wrong sub-room."
  }, {
    heading: "issues-fixed-18",
    content: "(All) In small classrooms, before any student joined the classroom, the teacher started and ended the breakout room session. Then after a student joined the classroom, when the teacher re-started the breakout room session, the 500 error occurred."
  }, {
    heading: "issues-fixed-18",
    content: "v2.4.x was released on June 2, 2022."
  }, {
    heading: "new-features-16",
    content: "**Breakout rooms (Web only)**"
  }, {
    heading: "new-features-16",
    content: 'v2.4.x adds the "Breakout rooms" feature in the toolbox of small classrooms. With breakout rooms, students can get together in small groups for discussion and brainstorming sessions. The teacher manually assigns students to each breakout room. A class supports up to 20 breakout rooms with a maximum of 17 members in each room. The features that are available in breakout rooms include real-time audio and video interaction, messaging, whiteboarding, and screen sharing.'
  }, {
    heading: "new-features-16",
    content: "After the breakout session begins, the teacher and teaching assistants have the ability to dynamically join or leave any of the breakout rooms. They can also send announcements to all the breakout rooms. Students are notified in their chat to check for the announcements."
  }, {
    heading: "new-features-16",
    content: "**Support for the teacher role on Android and iOS clients**"
  }, {
    heading: "new-features-16",
    content: "v2.4.x duplicates the features of the teacher role on desktop experience for Web, macOS, and Windows on mobile clients (Android and iOS)."
  }, {
    heading: "new-features-16",
    content: "Note that the following features are temporarily not available for the teacher role on mobile clients:"
  }, {
    heading: "new-features-16",
    content: "Enabling screen sharing"
  }, {
    heading: "new-features-16",
    content: "Starting pop-up quizzes"
  }, {
    heading: "new-features-16",
    content: "Starting polls"
  }, {
    heading: "new-features-16",
    content: "Starting the countdown timer"
  }, {
    heading: "new-features-16",
    content: "**Ability to turn the whiteboard on and off in the classroom**"
  }, {
    heading: "new-features-16",
    content: "v2.4.x adds the ability to turn the whiteboard on or off in one-on-one classrooms, small classrooms, and lecture halls. By default, after the whiteboard is turned off, the teacher's video is displayed in the whiteboard area. Developers are also able to use UIStore or UIKit to customize the classroom layout when the whiteboard is off."
  }, {
    heading: "improvements-19",
    content: "This release includes the following improvements:"
  }, {
    heading: "improvements-19",
    content: "Optimizes widgets: v2.4.x optimizes the internal technical architecture of the three widgets: Pop-up Quiz, Poll, and Countdown Timer for the higher stability and better end-user experience. In addition, v2.4.x enables developers to get the data of pop-up quizzes and polls through RESTful APIs. For details, see the RESTful API reference."
  }, {
    heading: "improvements-19",
    content: "Improves the compatibility of the Web client: The Web client is now supported on the desktop version of Firefox."
  }, {
    heading: "improvements-19",
    content: "Optimizes the cloud storage: v2.4.x optimizes the business logic and UI of the cloud storage feature in Flexible Classroom."
  }, {
    heading: "improvements-19",
    content: "Optimizes the whiteboard: v2.4.x adds laser pointer, undo, redo, and one-click screen-clearing features on the whiteboard in Flexible Classroom."
  }, {
    heading: "improvements-19",
    content: "Reward enhancements: The teacher can now extend and remove student rewards dynamically during a class session."
  }, {
    heading: "issues-fixed-19",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-19",
    content: "When the teacher moved a file or a tool on the whiteboard, the movement might not be synchronized on the students' side."
  }, {
    heading: "issues-fixed-19",
    content: "Logging in to the IM module occasionally failed."
  }, {
    heading: "issues-fixed-19",
    content: "Loading a file failed when the format of the file was not supported."
  }, {
    heading: "issues-fixed-19",
    content: "v2.1.0 was released on February 23, 2022."
  }, {
    heading: "release-highlights-2",
    content: "In v2.1.0, Agora fully optimizes the internal architecture of Flexible Classroom. Compared to earlier versions, v2.1.0 has the following advantages:"
  }, {
    heading: "release-highlights-2",
    content: "New features:"
  }, {
    heading: "release-highlights-2",
    content: "Answer Selector (Pop-up Quiz), Polling Feature, Countdown Timer, Mobile HTML5 Support, and ability to turn the whiteboard on or off in the classroom."
  }, {
    heading: "release-highlights-2",
    content: "Video Gallery Rotation: Ability for teachers to configure the classroom setting to automatically rotate the on-stage student gallery view without attempting to scroll or page through the class participants."
  }, {
    heading: "release-highlights-2",
    content: "Lecture Hall: Expands audience capacity up to 5,000 students, from 1,000 in the last version."
  }, {
    heading: "release-highlights-2",
    content: "Web client:"
  }, {
    heading: "release-highlights-2",
    content: "Adds support for Safari on desktop and iPad, as well as for Chrome on the iPad."
  }, {
    heading: "release-highlights-2",
    content: "Introduces EDUClassroomUIStore for customizing the classroom UI, which replaces the UIKit in previous versions."
  }, {
    heading: "release-highlights-2",
    content: "Android and iOS clients:"
  }, {
    heading: "release-highlights-2",
    content: "Redesigns contexts for better abstraction of modular features in Flexible Classroom, where each context can be controlled separately."
  }, {
    heading: "release-highlights-2",
    content: "Refactors context APIs with the following improvements:"
  }, {
    heading: "release-highlights-2",
    content: "Renamed APIs and parameters for intuitiveness, understandability, and consistency."
  }, {
    heading: "release-highlights-2",
    content: "Improved flexibility of API calling."
  }, {
    heading: "release-highlights-2",
    content: "More APIs for developers to customize their own features."
  }, {
    heading: "flexible-classroom-v210-migration-guidance-2",
    content: "If you have made changes to your Flexible Classroom UI in earlier versions, in order to migrate to v2.1.0, Agora recommends you create a new project based on v2.1.0 and re-implement the UI changes. Please refer to the following Flexible Classroom v2.1.0 migration guides:"
  }, {
    heading: "flexible-classroom-v210-migration-guidance-2",
    content: "migration guide"
  }, {
    heading: "flexible-classroom-v210-migration-guidance-2",
    content: "If you encounter any problem during the migration process, or need to migrate from Flexible Classroom earlier than v1.1.5, please contact support\\@agora.io so that Agora technical support team can help."
  }, {
    heading: "new-features-17",
    content: "**Answer selector and polling feature**"
  }, {
    heading: "new-features-17",
    content: "To increase engagement and enhance interactivity, v2.1.0 adds the following teaching tools:"
  }, {
    heading: "new-features-17",
    content: "Answer selector: This tool is applicable to scenarios where the teacher asks a single-choice or multiple-choice question and requests the whole class to answer the question together. The teacher can set up the choices and the correct answer, and then trigger answering. The teacher can see the number of students who have submitted an answer and the percentage that are correct in real time."
  }, {
    heading: "new-features-17",
    content: "Polling: This tool is applicable to scenarios where the teacher wants to get feedback from the whole class. The teacher can set up the subject, choices, and start and end time of the poll. Flexible Classroom also provides live visualization of polling results."
  }, {
    heading: "new-features-17",
    content: "**Ability to turn the whiteboard on or off in the classroom**"
  }, {
    heading: "new-features-17",
    content: "As of v2.1.0, Agora supports turning the whiteboard on or off in the classroom. For details, see Turn the Whiteboard on or off in the Classroom. When using the APIs for this feature, after the whiteboard is closed, developers can use Flexible Classroom UIKit or UIStore to customize their unique classroom with their desired video gallery to fill the classroom window."
  }, {
    heading: "new-features-17",
    content: "**Video gallery rotation**"
  }, {
    heading: "new-features-17",
    content: "Flexible Classroom gives teachers the ability to configure the classroom settings for improved student engagement and video. The Video Gallery Rotation feature lets the teacher automatically rotate the on-stage student gallery view at a desired frequency and sequence, thus eliminating the need for the teacher to scroll or page through the class participants."
  }, {
    heading: "new-features-17",
    content: "**Mobile HTML5 support**"
  }, {
    heading: "new-features-17",
    content: "As of v2.1.0, students can join a lecture hall in Flexible Classroom simply by clicking on a shared webpage link within some mobile social applications that use a web view. After joining the classroom on mobile devices, students can do the following things:"
  }, {
    heading: "new-features-17",
    content: `Watch and hear the teacher's lecture, as well as presentations by students "on the stage".`
  }, {
    heading: "new-features-17",
    content: "View the whiteboard and the screen shared by the teacher."
  }, {
    heading: "new-features-17",
    content: "Send messages to chat with other participants in the classroom."
  }, {
    heading: "new-features-17",
    content: "Engage in class activities such as polling, answering, and viewing the teacher's count down clock."
  }, {
    heading: "new-features-17",
    content: `ℹ️ **Info**
Please note that the following features are not supported on HTML5:`
  }, {
    heading: "new-features-17",
    content: 'Students raising their hands to apply for speaking on the "stage".'
  }, {
    heading: "new-features-17",
    content: "Students drawing on the whiteboard."
  }, {
    heading: "new-features-17",
    content: "Students testing or switching their local media devices."
  }, {
    heading: "improvements-20",
    content: "v2.1.0 makes the following improvements:"
  }, {
    heading: "improvements-20",
    content: 'Optimizes the business logic and UI of various features in Flexible Classroom, such as students "raising their hands" for permission to speak, the class roster, and in-class reminders.'
  }, {
    heading: "improvements-20",
    content: "Increases the upper limit on the number of users in a lecture hall to 5,000."
  }, {
    heading: "improvements-20",
    content: "Improves the compatibility of the Web client. The Web client is now supported on Safari for the desktop and iPad, as well as on Chrome for the iPad."
  }, {
    heading: "improvements-20",
    content: "Supports displaying thumbnails and animations for the PPT files opened in the classroom."
  }, {
    heading: "improvements-20",
    content: "When a classroom is being recorded, the recording button changes to red."
  }, {
    heading: "issues-fixed-20",
    content: "v2.1.0 fixed the following issues:"
  }, {
    heading: "issues-fixed-20",
    content: "(All platforms) The RTC SDK and whiteboard usage occurred in Flexible Classroom was not showed in Agora Console."
  }, {
    heading: "issues-fixed-20",
    content: "(Web) Occasional failure to record the whiteboard contents in a small classroom."
  }, {
    heading: "issues-fixed-20",
    content: "(Web) Occasional failure to send a massage in a small classroom."
  }, {
    heading: "issues-fixed-20",
    content: "(Web) After the teacher joined a lecture hall, there was a possibility that the whiteboard was not loaded successfully."
  }, {
    heading: "issues-fixed-20",
    content: '(Web/Windows/macOS) Sometimes in a lecture hall, a student "raised a hand" to apply for making a presentation, an error occurred. And the teacher did not receive the application.'
  }, {
    heading: "issues-fixed-20",
    content: `(Web/Windows/macOS) In a small classroom, a student went onto the "stage" and turned on the video. After the student left the room, the student's video did not disappear immediately.`
  }, {
    heading: "issues-fixed-20",
    content: "(Windows) When a student left and rejoined the room, the student could not see the room announcement published by the teacher."
  }, {
    heading: "issues-fixed-20",
    content: "(Windows) In a one-to-one classroom, the student's video occasionally went black."
  }, {
    heading: "issues-fixed-20",
    content: "(iOS) When the teacher displayed a PPT that contained audio and video, the student on iOS sometimes neither heard the audio nor saw the video."
  }, {
    heading: "issues-fixed-20",
    content: "(Android) In a small classroom, sometimes if a student on Android left and rejoined the room, the student could not see the teacher's video."
  }, {
    heading: "issues-fixed-20",
    content: "v1.1.5 was released on October 20, 2021."
  }, {
    heading: "compatibility-changes-1",
    content: "**Making open-source libraries into closed-source ones**"
  }, {
    heading: "compatibility-changes-1",
    content: "As of v1.1.5, the `agora-edu-core` and `agora-rte-sdk` libraries in Flexible Classroom are closed-source. Agora moves the implementation of `AgoraEduCore.launch` into `agora-edu-core`, so developers can no longer make changes to it. For the parameters in `launchOption`, see the API reference."
  }, {
    heading: "new-features-18",
    content: "**Support for customizing the video encoding configurations**"
  }, {
    heading: "new-features-18",
    content: "As of v1.1.5, developers can customize the video encoding configurations, including the width, height, frame rate, and bitrate. When calling the `launch` method, developers can set the `cameraEncoderConfiguration` and `screenShareEncoderConfiguration` parameters in `mediaOptions` to customize the encoding configurations for the video stream captured by a camera or the screen-sharing video stream."
  }, {
    heading: "new-features-18",
    content: "The recommended video encoding configurations are as follows:"
  }, {
    heading: "new-features-18",
    content: "One-to-one Classroom: 320x240, 200 Kbps, and 15 fps."
  }, {
    heading: "new-features-18",
    content: "Small Classroom and Lecture Hall: 160x120, 65 Kbps, and 15 fps, if the number of students in a classroom who send their video stream at the same time is less than or equal to six."
  }, {
    heading: "new-features-18",
    content: '**Students automatically going onto the "stage"**'
  }, {
    heading: "new-features-18",
    content: 'v1.1.5 adds the feature of students automatically going onto the "stage" in the Small Classroom scenario. Once the teacher or TA enables this feature, students go onto the "stage" at specified intervals.'
  }, {
    heading: "new-features-18",
    content: "**Image enhancement (Electron)**"
  }, {
    heading: "new-features-18",
    content: "v1.1.5 adds a basic image enhancement feature, allowing users to adjust the contrast, brightness, smoothness, and red saturation of an image."
  }, {
    heading: "new-features-18",
    content: "**The countdown timer**"
  }, {
    heading: "new-features-18",
    content: "v1.1.5 adds a countdown timer in Flexible Classroom. The teacher can find the countdown time in the toolbox and set an initial value. After the teacher clicks the start button, students see a countdown window."
  }, {
    heading: "new-features-18",
    content: "**Teachers making notes on their shared screen**"
  }, {
    heading: "new-features-18",
    content: "As of v1.1.5, teachers can make notes on the screen that they share with the basic whiteboard tools."
  }, {
    heading: "new-features-18",
    content: "**Support for custom user properties and classroom properties (Web/Electron/Android/iOS)**"
  }, {
    heading: "new-features-18",
    content: "As of v1.1.15, developers can customize properties for users and classrooms. These properties can be updated, and the updates can be monitored. For example, developers can set the profile photo as a custom user property. To support this feature, Agora makes the following changes to the Agora Edu Context:"
  }, {
    heading: "new-features-18",
    content: "Classroom properties:"
  }, {
    heading: "new-features-18",
    content: "Add the `updateFlexRoomProperties` method in `RoomContext` for adding or updating custom classroom properties."
  }, {
    heading: "new-features-18",
    content: "Add the `flexRoomProperties` property in `RoomContext` for indicating the classroom property changes."
  }, {
    heading: "new-features-18",
    content: "User properties: Add the `userFlexProperties` parameter in `LaunchOption` for passing in custom user properties when launching a classroom."
  }, {
    heading: "improvements-21",
    content: "As of v1.1.5, Flexible Classroom supports displaying HTML5 courseware on the whiteboard."
  }, {
    heading: "issues-fixed-21",
    content: "v1.1.5 fixed the following issues:"
  }, {
    heading: "issues-fixed-21",
    content: "In the middle of a class, if the app was reloaded, Flexible Classroom failed to keep the chat history."
  }, {
    heading: "issues-fixed-21",
    content: "In the middle of a class, when file uploading or conversion failed, Flexible Classroom did not trigger a pop-up window to indicate the failure."
  }, {
    heading: "issues-fixed-21",
    content: "When the region is set to NA, users failed to play the MP4 files in Flexible Classroom."
  }, {
    heading: "issues-fixed-21",
    content: "When downloading files in Flexible Classroom, the progress bar got stuck at 0%."
  }, {
    heading: "issues-fixed-21",
    content: "v1.1.0.1 was released on July 7, 2021."
  }, {
    heading: "new-features-19",
    content: "**Media encryption**"
  }, {
    heading: "new-features-19",
    content: "To ensure the security during real-time audio and video transmission, v1.1.0.1 adds the `mediaOptions` parameter in `LaunchOption` for supporting media stream encryption. By default, Flexible Classroom does not encrypt the media stream. To enable media encryption, use the `mediaOptions` parameter to choose an encryption mode and set the encryption key. Flexible Classroom supports the following encryption modes:"
  }, {
    heading: "new-features-19",
    content: "`AES_128_XTS`: 128-bit AES encryption, XTS mode."
  }, {
    heading: "new-features-19",
    content: "`AES_128_ECB`: 128-bit AES encryption, ECB mode."
  }, {
    heading: "new-features-19",
    content: "`AES_256_XTS`: 256-bit AES encryption, XTS mode."
  }, {
    heading: "new-features-19",
    content: "`AES_128_GCM`: 128-bit AES encryption, GCM mode."
  }, {
    heading: "new-features-19",
    content: "`AES_256_GCM`: 256-bit AES encryption, GCM mode."
  }, {
    heading: "new-features-19",
    content: "The teacher and students in a classroom must use the same encryption mode and key. If not, unexpected issues, such as a white or black screen and noise, may occur."
  }, {
    heading: "issues-fixed-22",
    content: "v1.1.0.1 fixes the following issues:"
  }, {
    heading: "issues-fixed-22",
    content: "The default region was not NA (North America)."
  }, {
    heading: "issues-fixed-22",
    content: "When the user set the UI language as English, users saw some Chinese characters on the screen sharing window."
  }, {
    heading: "issues-fixed-22",
    content: "When the teacher started screen sharing, students saw a black screen."
  }, {
    heading: "issues-fixed-22",
    content: "v1.1.0 was released on June 18, 2021. This is the first release of Agora Flexible Classroom with the following features:"
  }, {
    heading: "issues-fixed-22",
    content: "Real-time audio and video interaction"
  }, {
    heading: "issues-fixed-22",
    content: "Signaling"
  }, {
    heading: "issues-fixed-22",
    content: "Interactive whiteboard"
  }, {
    heading: "issues-fixed-22",
    content: "Screen sharing"
  }, {
    heading: "issues-fixed-22",
    content: "Recording and replay"
  }, {
    heading: "issues-fixed-22",
    content: "Teaching tools, including cloud storage, classroom rewards, and the user list"
  }, {
    heading: "issues-fixed-22",
    content: "Customizing the classroom user interfaces and embedding custom plugins in classrooms"
  }, {
    heading: "issues-fixed-22",
    content: "Flexible Classroom cloud service for classroom and user management"
  }, {
    heading: "electron",
    content: "v2.9.40 was released on March 6, 2024."
  }, {
    heading: "improvements-22",
    content: "This release adds the following improvements:"
  }, {
    heading: "improvements-22",
    content: "Optimizes the logic of audio device selection after plugging and unplugging an external audio device."
  }, {
    heading: "improvements-22",
    content: "Supports adjusting video profile during class."
  }, {
    heading: "issues-fixed-23",
    content: "This release fixes the following issues:"
  }, {
    heading: "issues-fixed-23",
    content: "The on-stage state became inaccurate after students in a lecture hall joined and left the class."
  }, {
    heading: "issues-fixed-23",
    content: "The video window occasionally went black during live streaming on the H5 browser."
  }, {
    heading: "issues-fixed-23",
    content: "v2.9.20 was released on January 17, 2024."
  }, {
    heading: "new-features-20",
    content: "This release adds a notification which occurs when it takes too long to start the whiteboard."
  }, {
    heading: "improvements-23",
    content: "This release made the following improvements:"
  }, {
    heading: "improvements-23",
    content: "Upgraded the RTM service to v1.5.1."
  }, {
    heading: "improvements-23",
    content: "Optimized network connection by enabling RTC and RTM Cloud Proxy configurations."
  }, {
    heading: "improvements-23",
    content: "Enhanced the experience of searching for a member student during interaction."
  }, {
    heading: "improvements-23",
    content: "Improved the display format of the time span during which a student is in the classroom."
  }, {
    heading: "issues-fixed-24",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-24",
    content: "Users could join a room before the room was created."
  }, {
    heading: "issues-fixed-24",
    content: "The loudspeaker list was incorrectly displayed when a user plugged in or unplugged an external audio device."
  }, {
    heading: "issues-fixed-24",
    content: "The AI noise suppression switch was incorrectly displayed."
  }, {
    heading: "issues-fixed-24",
    content: "Some words in the user interface of the group discussion were incorrect."
  }, {
    heading: "issues-fixed-24",
    content: "Abnormalities occurred when a user left the discussion group."
  }, {
    heading: "issues-fixed-24",
    content: "Issues occurred with sound card capturing."
  }, {
    heading: "issues-fixed-24",
    content: "The callback was not triggered when the user attribute in a lecture hall was modified."
  }, {
    heading: "issues-fixed-24",
    content: "Occasionally, when a student frequently enabled or disabled video from a mobile device, the teacher could not subscribe to the video of the student."
  }, {
    heading: "issues-fixed-24",
    content: "Occasionally, the teacher/student could not operate the whiteboard after joining a discussion group."
  }, {
    heading: "issues-fixed-24",
    content: "An occasional error occurred when uploading courseware, which lead to failure in displaying the courseware list."
  }, {
    heading: "issues-fixed-24",
    content: "v2.9.0 was released on November 22, 2023."
  }, {
    heading: "new-features-21",
    content: "This version adds the following new scenarios:"
  }, {
    heading: "new-features-21",
    content: "Online classroom scenarios and the introduction of a new UI style and interactive experience that are closer to the usage habits of educational users. See the following documentation:"
  }, {
    heading: "new-features-21",
    content: "FcrUIScene SDK"
  }, {
    heading: "new-features-21",
    content: "API Reference"
  }, {
    heading: "new-features-21",
    content: "One-to-one private chat function. This function does not currently support retrieving historical messages from servers on demand."
  }, {
    heading: "improvements-24",
    content: "This release added the following improvements:"
  }, {
    heading: "improvements-24",
    content: "Added support for automatic domain switch to reduce the chance of users not being able to use Flexible Classroom."
  }, {
    heading: "improvements-24",
    content: "Optimized the mixing of system audio and RTC so that the media volume is not suppressed by the call volume."
  }, {
    heading: "improvements-24",
    content: "v2.8.13 was released on February 20, 2023."
  }, {
    heading: "improvements-24",
    content: "This version added a Beta icon for the virtual background and beauty options features on the Device Settings page."
  }, {
    heading: "improvements-25",
    content: "This release adds support for sharing audio when sharing the screen."
  }, {
    heading: "issues-fixed-25",
    content: "This release fixes the following known issues:"
  }, {
    heading: "issues-fixed-25",
    content: "Issues in the proctoring scenarios."
  }, {
    heading: "issues-fixed-25",
    content: "Issues on desktop devices."
  }, {
    heading: "api-changes-1",
    content: "The `audioDeviceName` and `withAudio` parameters were added to the `startScreenShareCapture` method."
  }, {
    heading: "api-changes-1",
    content: "For details, see the API reference."
  }, {
    heading: "api-changes-1",
    content: "v2.8.0 was released on December 12, 2022."
  }, {
    heading: "new-features-22",
    content: "**New UI theme**"
  }, {
    heading: "new-features-22",
    content: "v2.8.0 enables you to set the display theme of the classroom UI to light or dark."
  }, {
    heading: "new-features-22",
    content: "**New language supported**"
  }, {
    heading: "new-features-22",
    content: "v2.8.0 supports setting the language of the classroom UI to Chinese or English."
  }, {
    heading: "new-features-22",
    content: "**Flexible Classroom UI builder**"
  }, {
    heading: "new-features-22",
    content: `Flexible Classroom UI builder is launched to enable you design and customize the UI of your classroom.
The UI builder currently supports the following
Flexible Classroom features:`
  }, {
    heading: "new-features-22",
    content: "All features of versions 2.6.x and earlier"
  }, {
    heading: "new-features-22",
    content: "Setting the display theme of the classroom UI to light or dark"
  }, {
    heading: "new-features-22",
    content: "Setting the language of the classroom UI to Chinese or English"
  }, {
    heading: "new-features-22",
    content: "**Online proctoring scenario**"
  }, {
    heading: "new-features-22",
    content: "v2.8.0 provides the Agora Proctor SDK for online exam proctoring scenarios. For details, see the Agora Proctor SDK API reference."
  }, {
    heading: "new-features-22",
    content: "**Beauty options, virtual background, noise suppression**"
  }, {
    heading: "new-features-22",
    content: "v2.8.0 adds support for substantial new capabilities including video beauty options, virtual backgrounds,\nand noise suppression. For details, see the documentation of the `webrtcExtensionBaseUrl` field of the\n`LaunchOption` parameter in the Classroom SDK."
  }, {
    heading: "new-features-22",
    content: "**New demo features**"
  }, {
    heading: "new-features-22",
    content: "v2.8.0 adds the following features to the demo:"
  }, {
    heading: "new-features-22",
    content: "Signing up, logging in, and deleting the account"
  }, {
    heading: "new-features-22",
    content: "A course list page"
  }, {
    heading: "new-features-22",
    content: "Classroom reports, including the following information:"
  }, {
    heading: "new-features-22",
    content: "Course information"
  }, {
    heading: "new-features-22",
    content: "Course recording"
  }, {
    heading: "new-features-22",
    content: "Course reports, including tracking student attendance and students interaction"
  }, {
    heading: "new-features-22",
    content: "Highlighting of speakers"
  }, {
    heading: "new-features-22",
    content: "The ability to partially erase the whiteboard"
  }, {
    heading: "improvements-26",
    content: "This release includes the following improvements:"
  }, {
    heading: "improvements-26",
    content: "Enhanced the UI layer code for developers to customize the classroom UI."
  }, {
    heading: "improvements-26",
    content: "Support for the Microsoft Edge browser."
  }, {
    heading: "improvements-26",
    content: "The following features were improved in the demo:"
  }, {
    heading: "improvements-26",
    content: "The procedures of joining and creating a room. Users can now reserve a room in advance as well."
  }, {
    heading: "improvements-26",
    content: "The efficiency of converting course materials."
  }, {
    heading: "improvements-26",
    content: "The compatibility of the whiteboard toolbar with touchscreen devices."
  }, {
    heading: "improvements-26",
    content: "The `agora-edu-core` libraries have been enhanced."
  }, {
    heading: "improvements-26",
    content: "v2.6.x was released on July 29, 2022."
  }, {
    heading: "new-features-23",
    content: "**Taking screenshots (Electron only)**"
  }, {
    heading: "new-features-23",
    content: 'v2.6.x adds a snipping tool for Teacher to "take screenshots" of content inside and outside of the classroom, and dynamically add it to the classroom whiteboard. The feature is available in one-to-one classrooms, small classrooms, and lecture halls. This feature is available in the toolbar on Windows and macOS clients. Teachers and teaching assistants can choose to take a screenshot directly or with the current window hidden. The screenshot is displayed in the center of the whiteboard. And Agora provides APIs to expand usage of this feature to include Students and other roles:'
  }, {
    heading: "new-features-23",
    content: "Web: getSnapshotRgba"
  }, {
    heading: "new-features-23",
    content: "Electron: getSnapshot"
  }, {
    heading: "new-features-23",
    content: "iOS: getSnapshot"
  }, {
    heading: "new-features-23",
    content: "Android: getSnapshot"
  }, {
    heading: "new-features-23",
    content: "**Automatic grouping**"
  }, {
    heading: "new-features-23",
    content: 'For the "breakout rooms" feature, v2.6.x supports automatic grouping. Teachers can set up the number of breakout rooms. Then the system randomly assigns the whole class to breakout rooms.'
  }, {
    heading: "new-features-23",
    content: "**Drag and Drop images from desktop into the classroom whiteboard (Web/Electron)**"
  }, {
    heading: "new-features-23",
    content: "v2.6.x allows teachers or teaching assistants on the PC to drop local images to the whiteboard area and insert the images into the whiteboard."
  }, {
    heading: "new-features-23",
    content: "**Dynamic Size, Resize and Place Teacher Video inside the Classroom**"
  }, {
    heading: "new-features-23",
    content: "v2.6.x allows teachers to freely drag and drop their own video and the video of students within the classroom window. Teachers can also resize a video window by double-clicking it. Whatever actions the teacher takes with their video window, students will see."
  }, {
    heading: "new-features-23",
    content: "**Hiding the stage area**"
  }, {
    heading: "new-features-23",
    content: "v2.6.x adds a button in the settings of small classrooms, which enables teachers to hide the stage area. After the stage is hidden, the following things occur:"
  }, {
    heading: "new-features-23",
    content: "All videos are disabled."
  }, {
    heading: "new-features-23",
    content: "All students automatically steps down from the stage."
  }, {
    heading: "new-features-23",
    content: "The whiteboard is scaled up to fit the classroom."
  }, {
    heading: "new-features-23",
    content: "**Saving whiteboard contents as images**"
  }, {
    heading: "new-features-23",
    content: "v2.6.x allows teachers and teaching assistants to save contents on the whiteboard to their local device as JPG images."
  }, {
    heading: "new-features-23",
    content: "**Adding web links as courseware**"
  }, {
    heading: "new-features-23",
    content: "v2.6.x allows teachers to add web links, such as YouTube links and Google Drive links, in **My Resources**. The suffix of such kind of courseware is `.alf`, which is the abbreviation of agora link file. After the upload succeeds, the teacher can open the courseware in the classroom."
  }, {
    heading: "issues-fixed-26",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-26",
    content: "(iOS) Crashes occurred when receiving a global announcement."
  }, {
    heading: "issues-fixed-26",
    content: "(iOS) In small classrooms, the teacher did not select the brush, but red lines appeared on the whiteboard."
  }, {
    heading: "issues-fixed-26",
    content: "(iOS) In small classrooms, the teacher double-clicked the settings, chat, or roster buttons, the color of these buttons did not change."
  }, {
    heading: "issues-fixed-26",
    content: "(Android) In small classrooms, after a student joined a sub-room and invited the teacher to join the same sub-room, the teacher entered the wrong sub-room."
  }, {
    heading: "issues-fixed-26",
    content: "(All) In small classrooms, before any student joined the classroom, the teacher started and ended the breakout room session. Then after a student joined the classroom, when the teacher re-started the breakout room session, the 500 error occurred."
  }, {
    heading: "issues-fixed-26",
    content: "v2.4.x was released on June 2, 2022."
  }, {
    heading: "new-features-24",
    content: "**Breakout rooms (Web only)**"
  }, {
    heading: "new-features-24",
    content: 'v2.4.x adds the "Breakout rooms" feature in the toolbox of small classrooms. With breakout rooms, students can get together in small groups for discussion and brainstorming sessions. The teacher manually assigns students to each breakout room. A class supports up to 20 breakout rooms with a maximum of 17 members in each room. The features that are available in breakout rooms include real-time audio and video interaction, messaging, whiteboarding, and screen sharing.'
  }, {
    heading: "new-features-24",
    content: "After the breakout session begins, the teacher and teaching assistants have the ability to dynamically join or leave any of the breakout rooms. They can also send announcements to all the breakout rooms. Students are notified in their chat to check for the announcements."
  }, {
    heading: "new-features-24",
    content: "**Support for the teacher role on Android and iOS clients**"
  }, {
    heading: "new-features-24",
    content: "v2.4.x duplicates the features of the teacher role on desktop experience for Web, macOS, and Windows on mobile clients (Android and iOS)."
  }, {
    heading: "new-features-24",
    content: "Note that the following features are temporarily not available for the teacher role on mobile clients:"
  }, {
    heading: "new-features-24",
    content: "Enabling screen sharing"
  }, {
    heading: "new-features-24",
    content: "Starting pop-up quizzes"
  }, {
    heading: "new-features-24",
    content: "Starting polls"
  }, {
    heading: "new-features-24",
    content: "Starting the countdown timer"
  }, {
    heading: "new-features-24",
    content: "**Ability to turn the whiteboard on and off in the classroom**"
  }, {
    heading: "new-features-24",
    content: "v2.4.x adds the ability to turn the whiteboard on or off in one-on-one classrooms, small classrooms, and lecture halls. By default, after the whiteboard is turned off, the teacher's video is displayed in the whiteboard area. Developers are also able to use UIStore or UIKit to customize the classroom layout when the whiteboard is off."
  }, {
    heading: "improvements-27",
    content: "This release includes the following improvements:"
  }, {
    heading: "improvements-27",
    content: "Optimizes widgets: v2.4.x optimizes the internal technical architecture of the three widgets: Pop-up Quiz, Poll, and Countdown Timer for the higher stability and better end-user experience. In addition, v2.4.x enables developers to get the data of pop-up quizzes and polls through RESTful APIs. For details, see the RESTful API reference."
  }, {
    heading: "improvements-27",
    content: "Improves the compatibility of the Web client: The Web client is now supported on the desktop version of Firefox."
  }, {
    heading: "improvements-27",
    content: "Optimizes the cloud storage: v2.4.x optimizes the business logic and UI of the cloud storage feature in Flexible Classroom."
  }, {
    heading: "improvements-27",
    content: "Optimizes the whiteboard: v2.4.x adds laser pointer, undo, redo, and one-click screen-clearing features on the whiteboard in Flexible Classroom."
  }, {
    heading: "improvements-27",
    content: "Reward enhancements: The teacher can now extend and remove student rewards dynamically during a class session."
  }, {
    heading: "issues-fixed-27",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-27",
    content: "When the teacher moved a file or a tool on the whiteboard, the movement might not be synchronized on the students' side."
  }, {
    heading: "issues-fixed-27",
    content: "Logging in to the IM module occasionally failed."
  }, {
    heading: "issues-fixed-27",
    content: "Loading a file failed when the format of the file was not supported."
  }, {
    heading: "issues-fixed-27",
    content: "v2.1.0 was released on February 23, 2022."
  }, {
    heading: "release-highlights-3",
    content: "In v2.1.0, Agora fully optimizes the internal architecture of Flexible Classroom. Compared to earlier versions, v2.1.0 has the following advantages:"
  }, {
    heading: "release-highlights-3",
    content: "New features:"
  }, {
    heading: "release-highlights-3",
    content: "Answer Selector (Pop-up Quiz), Polling Feature, Countdown Timer, Mobile HTML5 Support, and ability to turn the whiteboard on or off in the classroom."
  }, {
    heading: "release-highlights-3",
    content: "Video Gallery Rotation: Ability for teachers to configure the classroom setting to automatically rotate the on-stage student gallery view without attempting to scroll or page through the class participants."
  }, {
    heading: "release-highlights-3",
    content: "Lecture Hall: Expands audience capacity up to 5,000 students, from 1,000 in the last version."
  }, {
    heading: "release-highlights-3",
    content: "Web client:"
  }, {
    heading: "release-highlights-3",
    content: "Adds support for Safari on desktop and iPad, as well as for Chrome on the iPad."
  }, {
    heading: "release-highlights-3",
    content: "Introduces EDUClassroomUIStore for customizing the classroom UI, which replaces the UIKit in previous versions."
  }, {
    heading: "release-highlights-3",
    content: "Android and iOS clients:"
  }, {
    heading: "release-highlights-3",
    content: "Redesigns contexts for better abstraction of modular features in Flexible Classroom, where each context can be controlled separately."
  }, {
    heading: "release-highlights-3",
    content: "Refactors context APIs with the following improvements:"
  }, {
    heading: "release-highlights-3",
    content: "Renamed APIs and parameters for intuitiveness, understandability, and consistency."
  }, {
    heading: "release-highlights-3",
    content: "Improved flexibility of API calling."
  }, {
    heading: "release-highlights-3",
    content: "More APIs for developers to customize their own features."
  }, {
    heading: "flexible-classroom-v210-migration-guidance-3",
    content: "If you have made changes to your Flexible Classroom UI in earlier versions, in order to migrate to v2.1.0, Agora recommends you create a new project based on v2.1.0 and re-implement the UI changes. Please refer to the following Flexible Classroom v2.1.0 migration guides:"
  }, {
    heading: "flexible-classroom-v210-migration-guidance-3",
    content: "migration guide"
  }, {
    heading: "flexible-classroom-v210-migration-guidance-3",
    content: "If you encounter any problem during the migration process, or need to migrate from Flexible Classroom earlier than v1.1.5, please contact support\\@agora.io so that Agora technical support team can help."
  }, {
    heading: "new-features-25",
    content: "**Answer selector and polling feature**"
  }, {
    heading: "new-features-25",
    content: "To increase engagement and enhance interactivity, v2.1.0 adds the following teaching tools:"
  }, {
    heading: "new-features-25",
    content: "Answer selector: This tool is applicable to scenarios where the teacher asks a single-choice or multiple-choice question and requests the whole class to answer the question together. The teacher can set up the choices and the correct answer, and then trigger answering. The teacher can see the number of students who have submitted an answer and the percentage that are correct in real time."
  }, {
    heading: "new-features-25",
    content: "Polling: This tool is applicable to scenarios where the teacher wants to get feedback from the whole class. The teacher can set up the subject, choices, and start and end time of the poll. Flexible Classroom also provides live visualization of polling results."
  }, {
    heading: "new-features-25",
    content: "**Ability to turn the whiteboard on or off in the classroom**"
  }, {
    heading: "new-features-25",
    content: "As of v2.1.0, Agora supports turning the whiteboard on or off in the classroom. For details, see Turn the Whiteboard on or off in the Classroom. When using the APIs for this feature, after the whiteboard is closed, developers can use Flexible Classroom UIKit or UIStore to customize their unique classroom with their desired video gallery to fill the classroom window."
  }, {
    heading: "new-features-25",
    content: "**Video gallery rotation**"
  }, {
    heading: "new-features-25",
    content: "Flexible Classroom gives teachers the ability to configure the classroom settings for improved student engagement and video. The Video Gallery Rotation feature lets the teacher automatically rotate the on-stage student gallery view at a desired frequency and sequence, thus eliminating the need for the teacher to scroll or page through the class participants."
  }, {
    heading: "new-features-25",
    content: "**Mobile HTML5 support**"
  }, {
    heading: "new-features-25",
    content: "As of v2.1.0, students can join a lecture hall in Flexible Classroom simply by clicking on a shared webpage link within some mobile social applications that use a web view. After joining the classroom on mobile devices, students can do the following things:"
  }, {
    heading: "new-features-25",
    content: `Watch and hear the teacher's lecture, as well as presentations by students "on the stage".`
  }, {
    heading: "new-features-25",
    content: "View the whiteboard and the screen shared by the teacher."
  }, {
    heading: "new-features-25",
    content: "Send messages to chat with other participants in the classroom."
  }, {
    heading: "new-features-25",
    content: "Engage in class activities such as polling, answering, and viewing the teacher's count down clock."
  }, {
    heading: "new-features-25",
    content: `ℹ️ **Info**
Please note that the following features are not supported on HTML5:`
  }, {
    heading: "new-features-25",
    content: 'Students raising their hands to apply for speaking on the "stage".'
  }, {
    heading: "new-features-25",
    content: "Students drawing on the whiteboard."
  }, {
    heading: "new-features-25",
    content: "Students testing or switching their local media devices."
  }, {
    heading: "improvements-28",
    content: "v2.1.0 makes the following improvements:"
  }, {
    heading: "improvements-28",
    content: 'Optimizes the business logic and UI of various features in Flexible Classroom, such as students "raising their hands" for permission to speak, the class roster, and in-class reminders.'
  }, {
    heading: "improvements-28",
    content: "Increases the upper limit on the number of users in a lecture hall to 5,000."
  }, {
    heading: "improvements-28",
    content: "Improves the compatibility of the Web client. The Web client is now supported on Safari for the desktop and iPad, as well as on Chrome for the iPad."
  }, {
    heading: "improvements-28",
    content: "Supports displaying thumbnails and animations for the PPT files opened in the classroom."
  }, {
    heading: "improvements-28",
    content: "When a classroom is being recorded, the recording button changes to red."
  }, {
    heading: "issues-fixed-28",
    content: "v2.1.0 fixed the following issues:"
  }, {
    heading: "issues-fixed-28",
    content: "(All platforms) The RTC SDK and whiteboard usage occurred in Flexible Classroom was not showed in Agora Console."
  }, {
    heading: "issues-fixed-28",
    content: "(Web) Occasional failure to record the whiteboard contents in a small classroom."
  }, {
    heading: "issues-fixed-28",
    content: "(Web) Occasional failure to send a massage in a small classroom."
  }, {
    heading: "issues-fixed-28",
    content: "(Web) After the teacher joined a lecture hall, there was a possibility that the whiteboard was not loaded successfully."
  }, {
    heading: "issues-fixed-28",
    content: '(Web/Windows/macOS) Sometimes in a lecture hall, a student "raised a hand" to apply for making a presentation, an error occurred. And the teacher did not receive the application.'
  }, {
    heading: "issues-fixed-28",
    content: `(Web/Windows/macOS) In a small classroom, a student went onto the "stage" and turned on the video. After the student left the room, the student's video did not disappear immediately.`
  }, {
    heading: "issues-fixed-28",
    content: "(Windows) When a student left and rejoined the room, the student could not see the room announcement published by the teacher."
  }, {
    heading: "issues-fixed-28",
    content: "(Windows) In a one-to-one classroom, the student's video occasionally went black."
  }, {
    heading: "issues-fixed-28",
    content: "(iOS) When the teacher displayed a PPT that contained audio and video, the student on iOS sometimes neither heard the audio nor saw the video."
  }, {
    heading: "issues-fixed-28",
    content: "(Android) In a small classroom, sometimes if a student on Android left and rejoined the room, the student could not see the teacher's video."
  }, {
    heading: "issues-fixed-28",
    content: "v1.1.5 was released on October 20, 2021."
  }, {
    heading: "compatibility-changes-2",
    content: "**Making open-source libraries into closed-source ones**"
  }, {
    heading: "compatibility-changes-2",
    content: "As of v1.1.5, the `agora-edu-core` and `agora-rte-sdk` libraries in Flexible Classroom are closed-source. Agora moves the implementation of `AgoraEduCore.launch` into `agora-edu-core`, so developers can no longer make changes to it. For the parameters in `launchOption`, see the API reference."
  }, {
    heading: "new-features-26",
    content: "**Support for customizing the video encoding configurations**"
  }, {
    heading: "new-features-26",
    content: "As of v1.1.5, developers can customize the video encoding configurations, including the width, height, frame rate, and bitrate. When calling the `launch` method, developers can set the `cameraEncoderConfiguration` and `screenShareEncoderConfiguration` parameters in `mediaOptions` to customize the encoding configurations for the video stream captured by a camera or the screen-sharing video stream."
  }, {
    heading: "new-features-26",
    content: "The recommended video encoding configurations are as follows:"
  }, {
    heading: "new-features-26",
    content: "One-to-one Classroom: 320x240, 200 Kbps, and 15 fps."
  }, {
    heading: "new-features-26",
    content: "Small Classroom and Lecture Hall: 160x120, 65 Kbps, and 15 fps, if the number of students in a classroom who send their video stream at the same time is less than or equal to six."
  }, {
    heading: "new-features-26",
    content: '**Students automatically going onto the "stage"**'
  }, {
    heading: "new-features-26",
    content: 'v1.1.5 adds the feature of students automatically going onto the "stage" in the Small Classroom scenario. Once the teacher or TA enables this feature, students go onto the "stage" at specified intervals.'
  }, {
    heading: "new-features-26",
    content: "**Image enhancement (Electron)**"
  }, {
    heading: "new-features-26",
    content: "v1.1.5 adds a basic image enhancement feature, allowing users to adjust the contrast, brightness, smoothness, and red saturation of an image."
  }, {
    heading: "new-features-26",
    content: "**The countdown timer**"
  }, {
    heading: "new-features-26",
    content: "v1.1.5 adds a countdown timer in Flexible Classroom. The teacher can find the countdown time in the toolbox and set an initial value. After the teacher clicks the start button, students see a countdown window."
  }, {
    heading: "new-features-26",
    content: "**Teachers making notes on their shared screen**"
  }, {
    heading: "new-features-26",
    content: "As of v1.1.5, teachers can make notes on the screen that they share with the basic whiteboard tools."
  }, {
    heading: "new-features-26",
    content: "**Support for custom user properties and classroom properties (Web/Electron/Android/iOS)**"
  }, {
    heading: "new-features-26",
    content: "As of v1.1.15, developers can customize properties for users and classrooms. These properties can be updated, and the updates can be monitored. For example, developers can set the profile photo as a custom user property. To support this feature, Agora makes the following changes to the Agora Edu Context:"
  }, {
    heading: "new-features-26",
    content: "Classroom properties:"
  }, {
    heading: "new-features-26",
    content: "Add the `updateFlexRoomProperties` method in `RoomContext` for adding or updating custom classroom properties."
  }, {
    heading: "new-features-26",
    content: "Add the `flexRoomProperties` property in `RoomContext` for indicating the classroom property changes."
  }, {
    heading: "new-features-26",
    content: "User properties: Add the `userFlexProperties` parameter in `LaunchOption` for passing in custom user properties when launching a classroom."
  }, {
    heading: "improvements-29",
    content: "As of v1.1.5, Flexible Classroom supports displaying HTML5 courseware on the whiteboard."
  }, {
    heading: "issues-fixed-29",
    content: "v1.1.5 fixed the following issues:"
  }, {
    heading: "issues-fixed-29",
    content: "In the middle of a class, if the app was reloaded, Flexible Classroom failed to keep the chat history."
  }, {
    heading: "issues-fixed-29",
    content: "In the middle of a class, when file uploading or conversion failed, Flexible Classroom did not trigger a pop-up window to indicate the failure."
  }, {
    heading: "issues-fixed-29",
    content: "When the region is set to NA, users failed to play the MP4 files in Flexible Classroom."
  }, {
    heading: "issues-fixed-29",
    content: "When downloading files in Flexible Classroom, the progress bar got stuck at 0%."
  }, {
    heading: "issues-fixed-29",
    content: "v1.1.0.1 was released on July 7, 2021."
  }, {
    heading: "new-features-27",
    content: "**Media encryption**"
  }, {
    heading: "new-features-27",
    content: "To ensure the security during real-time audio and video transmission, v1.1.0.1 adds the `mediaOptions` parameter in `LaunchOption` for supporting media stream encryption. By default, Flexible Classroom does not encrypt the media stream. To enable media encryption, use the `mediaOptions` parameter to choose an encryption mode and set the encryption key. Flexible Classroom supports the following encryption modes:"
  }, {
    heading: "new-features-27",
    content: "`AES_128_XTS`: 128-bit AES encryption, XTS mode."
  }, {
    heading: "new-features-27",
    content: "`AES_128_ECB`: 128-bit AES encryption, ECB mode."
  }, {
    heading: "new-features-27",
    content: "`AES_256_XTS`: 256-bit AES encryption, XTS mode."
  }, {
    heading: "new-features-27",
    content: "`AES_128_GCM`: 128-bit AES encryption, GCM mode."
  }, {
    heading: "new-features-27",
    content: "`AES_256_GCM`: 256-bit AES encryption, GCM mode."
  }, {
    heading: "new-features-27",
    content: "The teacher and students in a classroom must use the same encryption mode and key. If not, unexpected issues, such as a white or black screen and noise, may occur."
  }, {
    heading: "issues-fixed-30",
    content: "v1.1.0.1 fixes the following issues:"
  }, {
    heading: "issues-fixed-30",
    content: "The default region was not NA (North America)."
  }, {
    heading: "issues-fixed-30",
    content: "When the user set the UI language as English, users saw some Chinese characters on the screen sharing window."
  }, {
    heading: "issues-fixed-30",
    content: "When the teacher started screen sharing, students saw a black screen."
  }, {
    heading: "issues-fixed-30",
    content: "v1.1.0 was released on June 18, 2021. This is the first release of Agora Flexible Classroom with the following features:"
  }, {
    heading: "issues-fixed-30",
    content: "Real-time audio and video interaction"
  }, {
    heading: "issues-fixed-30",
    content: "Signaling"
  }, {
    heading: "issues-fixed-30",
    content: "Interactive whiteboard"
  }, {
    heading: "issues-fixed-30",
    content: "Screen sharing"
  }, {
    heading: "issues-fixed-30",
    content: "Recording and replay"
  }, {
    heading: "issues-fixed-30",
    content: "Teaching tools, including cloud storage, classroom rewards, and the user list"
  }, {
    heading: "issues-fixed-30",
    content: "Customizing the classroom user interfaces and embedding custom plugins in classrooms"
  }, {
    heading: "issues-fixed-30",
    content: "Flexible Classroom cloud service for classroom and user management"
  }],
  headings: [{
    id: "android",
    content: "Android"
  }, {
    id: "improvements",
    content: "Improvements"
  }, {
    id: "issues-fixed",
    content: "Issues fixed"
  }, {
    id: "improvements-1",
    content: "Improvements"
  }, {
    id: "issues-fixed-1",
    content: "Issues fixed"
  }, {
    id: "issues-fixed-2",
    content: "Issues fixed"
  }, {
    id: "improvements-2",
    content: "Improvements"
  }, {
    id: "issues-fixed-3",
    content: "Issues fixed"
  }, {
    id: "new-features",
    content: "New features"
  }, {
    id: "improvements-3",
    content: "Improvements"
  }, {
    id: "new-features-1",
    content: "New features"
  }, {
    id: "issues-fixed-4",
    content: "Issues fixed"
  }, {
    id: "new-features-2",
    content: "New features"
  }, {
    id: "improvements-4",
    content: "Improvements"
  }, {
    id: "issues-fixed-5",
    content: "Issues fixed"
  }, {
    id: "release-highlights",
    content: "Release highlights"
  }, {
    id: "flexible-classroom-v210-migration-guidance",
    content: "Flexible Classroom v2.1.0 migration guidance"
  }, {
    id: "new-features-3",
    content: "New Features"
  }, {
    id: "improvements-5",
    content: "Improvements"
  }, {
    id: "issues-fixed-6",
    content: "Issues fixed"
  }, {
    id: "new-features-4",
    content: "New features"
  }, {
    id: "improvements-6",
    content: "Improvements"
  }, {
    id: "new-features-5",
    content: "New features"
  }, {
    id: "issues-fixed-7",
    content: "Issues fixed"
  }, {
    id: "ios",
    content: "iOS"
  }, {
    id: "improvements-7",
    content: "Improvements"
  }, {
    id: "issues-fixed-8",
    content: "Issues fixed"
  }, {
    id: "improvements-8",
    content: "Improvements"
  }, {
    id: "issues-fixed-9",
    content: "Issues fixed"
  }, {
    id: "improvements-9",
    content: "Improvements"
  }, {
    id: "issues-fixed-10",
    content: "Issues fixed"
  }, {
    id: "new-features-6",
    content: "New features"
  }, {
    id: "improvements-10",
    content: "Improvements"
  }, {
    id: "new-features-7",
    content: "New features"
  }, {
    id: "issues-fixed-11",
    content: "Issues fixed"
  }, {
    id: "new-features-8",
    content: "New features"
  }, {
    id: "improvements-11",
    content: "Improvements"
  }, {
    id: "issues-fixed-12",
    content: "Issues fixed"
  }, {
    id: "release-highlights-1",
    content: "Release highlights"
  }, {
    id: "flexible-classroom-v210-migration-guidance-1",
    content: "Flexible Classroom v2.1.0 migration guidance"
  }, {
    id: "new-features-9",
    content: "New Features"
  }, {
    id: "improvements-12",
    content: "Improvements"
  }, {
    id: "issues-fixed-13",
    content: "Issues fixed"
  }, {
    id: "compatibility-changes",
    content: "Compatibility changes"
  }, {
    id: "new-features-10",
    content: "New features"
  }, {
    id: "improvements-13",
    content: "Improvements"
  }, {
    id: "new-features-11",
    content: "New features"
  }, {
    id: "issues-fixed-14",
    content: "Issues fixed"
  }, {
    id: "web",
    content: "Web"
  }, {
    id: "improvements-14",
    content: "Improvements"
  }, {
    id: "issues-fixed-15",
    content: "Issues fixed"
  }, {
    id: "new-features-12",
    content: "New features"
  }, {
    id: "improvements-15",
    content: "Improvements"
  }, {
    id: "issues-fixed-16",
    content: "Issues fixed"
  }, {
    id: "new-features-13",
    content: "New features"
  }, {
    id: "improvements-16",
    content: "Improvements"
  }, {
    id: "improvements-17",
    content: "Improvements"
  }, {
    id: "issues-fixed-17",
    content: "Issues fixed"
  }, {
    id: "api-changes",
    content: "API changes"
  }, {
    id: "new-features-14",
    content: "New features"
  }, {
    id: "improvements-18",
    content: "Improvements"
  }, {
    id: "new-features-15",
    content: "New features"
  }, {
    id: "issues-fixed-18",
    content: "Issues fixed"
  }, {
    id: "new-features-16",
    content: "New features"
  }, {
    id: "improvements-19",
    content: "Improvements"
  }, {
    id: "issues-fixed-19",
    content: "Issues fixed"
  }, {
    id: "release-highlights-2",
    content: "Release highlights"
  }, {
    id: "flexible-classroom-v210-migration-guidance-2",
    content: "Flexible Classroom v2.1.0 migration guidance"
  }, {
    id: "new-features-17",
    content: "New Features"
  }, {
    id: "improvements-20",
    content: "Improvements"
  }, {
    id: "issues-fixed-20",
    content: "Issues fixed"
  }, {
    id: "compatibility-changes-1",
    content: "Compatibility changes"
  }, {
    id: "new-features-18",
    content: "New features"
  }, {
    id: "improvements-21",
    content: "Improvements"
  }, {
    id: "issues-fixed-21",
    content: "Issues fixed"
  }, {
    id: "new-features-19",
    content: "New features"
  }, {
    id: "issues-fixed-22",
    content: "Issues fixed"
  }, {
    id: "electron",
    content: "Electron"
  }, {
    id: "improvements-22",
    content: "Improvements"
  }, {
    id: "issues-fixed-23",
    content: "Issues fixed"
  }, {
    id: "new-features-20",
    content: "New features"
  }, {
    id: "improvements-23",
    content: "Improvements"
  }, {
    id: "issues-fixed-24",
    content: "Issues fixed"
  }, {
    id: "new-features-21",
    content: "New features"
  }, {
    id: "improvements-24",
    content: "Improvements"
  }, {
    id: "improvements-25",
    content: "Improvements"
  }, {
    id: "issues-fixed-25",
    content: "Issues fixed"
  }, {
    id: "api-changes-1",
    content: "API changes"
  }, {
    id: "new-features-22",
    content: "New features"
  }, {
    id: "improvements-26",
    content: "Improvements"
  }, {
    id: "new-features-23",
    content: "New features"
  }, {
    id: "issues-fixed-26",
    content: "Issues fixed"
  }, {
    id: "new-features-24",
    content: "New features"
  }, {
    id: "improvements-27",
    content: "Improvements"
  }, {
    id: "issues-fixed-27",
    content: "Issues fixed"
  }, {
    id: "release-highlights-3",
    content: "Release highlights"
  }, {
    id: "flexible-classroom-v210-migration-guidance-3",
    content: "Flexible Classroom v2.1.0 migration guidance"
  }, {
    id: "new-features-25",
    content: "New Features"
  }, {
    id: "improvements-28",
    content: "Improvements"
  }, {
    id: "issues-fixed-28",
    content: "Issues fixed"
  }, {
    id: "compatibility-changes-2",
    content: "Compatibility changes"
  }, {
    id: "new-features-26",
    content: "New features"
  }, {
    id: "improvements-29",
    content: "Improvements"
  }, {
    id: "issues-fixed-29",
    content: "Issues fixed"
  }, {
    id: "new-features-27",
    content: "New features"
  }, {
    id: "issues-fixed-30",
    content: "Issues fixed"
  }]
};
export let toc = [{
  depth: 2,
  url: "#android",
  title: _jsx(_Fragment, {
    children: "Android"
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
  url: "#improvements-1",
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
  depth: 4,
  url: "#issues-fixed-2",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#improvements-2",
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
  url: "#new-features",
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
  url: "#new-features-1",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#issues-fixed-4",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-features-2",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-4",
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
  url: "#release-highlights",
  title: _jsx(_Fragment, {
    children: "Release highlights"
  })
}, {
  depth: 4,
  url: "#flexible-classroom-v210-migration-guidance",
  title: _jsx(_Fragment, {
    children: "Flexible Classroom v2.1.0 migration guidance"
  })
}, {
  depth: 4,
  url: "#new-features-3",
  title: _jsx(_Fragment, {
    children: "New Features"
  })
}, {
  depth: 4,
  url: "#improvements-5",
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
  url: "#new-features-4",
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
  url: "#new-features-5",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#issues-fixed-7",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 2,
  url: "#ios",
  title: _jsx(_Fragment, {
    children: "iOS"
  })
}, {
  depth: 4,
  url: "#improvements-7",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-8",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#improvements-8",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-9",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#improvements-9",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-10",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-features-6",
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
  url: "#new-features-7",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#issues-fixed-11",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-features-8",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-11",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-12",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#release-highlights-1",
  title: _jsx(_Fragment, {
    children: "Release highlights"
  })
}, {
  depth: 4,
  url: "#flexible-classroom-v210-migration-guidance-1",
  title: _jsx(_Fragment, {
    children: "Flexible Classroom v2.1.0 migration guidance"
  })
}, {
  depth: 4,
  url: "#new-features-9",
  title: _jsx(_Fragment, {
    children: "New Features"
  })
}, {
  depth: 4,
  url: "#improvements-12",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-13",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#compatibility-changes",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#new-features-10",
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
  url: "#new-features-11",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#issues-fixed-14",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 2,
  url: "#web",
  title: _jsx(_Fragment, {
    children: "Web"
  })
}, {
  depth: 4,
  url: "#improvements-14",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-15",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-features-12",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-15",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-16",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-features-13",
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
  url: "#improvements-17",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-17",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#api-changes",
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
  url: "#improvements-18",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#new-features-15",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#issues-fixed-18",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-features-16",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-19",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-19",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#release-highlights-2",
  title: _jsx(_Fragment, {
    children: "Release highlights"
  })
}, {
  depth: 4,
  url: "#flexible-classroom-v210-migration-guidance-2",
  title: _jsx(_Fragment, {
    children: "Flexible Classroom v2.1.0 migration guidance"
  })
}, {
  depth: 4,
  url: "#new-features-17",
  title: _jsx(_Fragment, {
    children: "New Features"
  })
}, {
  depth: 4,
  url: "#improvements-20",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-20",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#compatibility-changes-1",
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
  url: "#improvements-21",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-21",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-features-19",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#issues-fixed-22",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 2,
  url: "#electron",
  title: _jsx(_Fragment, {
    children: "Electron"
  })
}, {
  depth: 4,
  url: "#improvements-22",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-23",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-features-20",
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
  url: "#issues-fixed-24",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-features-21",
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
  url: "#improvements-25",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-25",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#api-changes-1",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-22",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-26",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#new-features-23",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#issues-fixed-26",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-features-24",
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
  url: "#issues-fixed-27",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#release-highlights-3",
  title: _jsx(_Fragment, {
    children: "Release highlights"
  })
}, {
  depth: 4,
  url: "#flexible-classroom-v210-migration-guidance-3",
  title: _jsx(_Fragment, {
    children: "Flexible Classroom v2.1.0 migration guidance"
  })
}, {
  depth: 4,
  url: "#new-features-25",
  title: _jsx(_Fragment, {
    children: "New Features"
  })
}, {
  depth: 4,
  url: "#improvements-28",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-28",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#compatibility-changes-2",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#new-features-26",
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
  url: "#issues-fixed-29",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-features-27",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#issues-fixed-30",
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
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { Accordion, Accordions, CalloutContainer, CalloutDescription, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page provides the release notes for Flexible Classroom."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","ios","web","electron"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsx(_components.h2, {
          id: "android",
          children: "Android"
        }), _jsxs(Accordions, {
          type: "multiple",
          openFirst: true,
          children: [_jsxs(Accordion, {
            title: "v2.8.100",
            id: "v28100",
            headingLevel: 2,
            value: "v28100",
            children: [_jsx(_components.p, {
              children: "v2.8.00 was released on March 6, 2024"
            }), _jsx(_components.h4, {
              id: "improvements",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release optimizes the network connection by supporting the cloud proxy configurations of the RTM service."
            }), _jsx(_components.h4, {
              id: "issues-fixed",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixes the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "The sequence compensation mechanism was abnormal."
              }), `
`, _jsx(_components.li, {
                children: "The on-stage state became inaccurate after students in a lecture hall joined and left the class."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.8.81",
            id: "v2881",
            headingLevel: 2,
            value: "v2881",
            children: [_jsx(_components.p, {
              children: "v2.8.81 was released on December 14, 2023."
            }), _jsx(_components.h4, {
              id: "improvements-1",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release made the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Optimized the logic for capturing the remote raw audio data."
              }), `
`, _jsx(_components.li, {
                children: "Enhanced the data transmission efficiency in the classroom."
              }), `
`, _jsx(_components.li, {
                children: "Optimized the synchronization mechanism of personal data in big classes."
              }), `
`, _jsx(_components.li, {
                children: "Enhanced the optimization of media error callbacks."
              }), `
`, _jsxs(_components.li, {
                children: ["Optimized the performance of the ", _jsx(_components.code, {
                  children: "onAudioRawDataBeforeMixed"
                }), " and ", _jsx(_components.code, {
                  children: "onAudioRawDataMixed"
                }), " callbacks."]
              }), `
`, _jsxs(_components.li, {
                children: ["Optimized the efficiency of the ", _jsx(_components.code, {
                  children: "FcrAudioRawDataPosition"
                }), " class."]
              }), `
`]
            }), _jsx(_components.h4, {
              id: "issues-fixed-1",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "In use-cases where the number of publishers exceeded the upper limit, if a student did not stop publishing streams after getting off the stage, the student that got on the stage could not publish streams."
              }), `
`, _jsx(_components.li, {
                children: "After the whiteboard was disabled, the usage calculation continued."
              }), `
`, _jsx(_components.li, {
                children: "The user presence state was incorrectly displayed."
              }), `
`, _jsx(_components.li, {
                children: "Occasional audio mixing issues while using the whiteboard."
              }), `
`, _jsx(_components.li, {
                children: "Occasional video inversion."
              }), `
`, _jsx(_components.li, {
                children: "Occasional device abnormalities when joining a room."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.8.13",
            id: "v2813",
            headingLevel: 2,
            value: "v2813",
            children: [_jsx(_components.p, {
              children: "v2.8.13 was released on April 18, 2023."
            }), _jsx(_components.h4, {
              id: "issues-fixed-2",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixes an issue where video was rotated on devices running Android 13."
            })]
          }), _jsxs(Accordion, {
            title: "v2.8.11",
            id: "v2811",
            headingLevel: 2,
            value: "v2811",
            children: [_jsx(_components.p, {
              children: "v2.8.11 was released on January 13, 2023."
            }), _jsx(_components.h4, {
              id: "improvements-2",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release adds support for sharing audio when sharing the screen."
            }), _jsx(_components.h4, {
              id: "issues-fixed-3",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixes known issues on mobile devices."
            })]
          }), _jsxs(Accordion, {
            title: "v2.8.0",
            id: "v280",
            headingLevel: 2,
            value: "v280",
            children: [_jsx(_components.p, {
              children: "v2.8.0 was released on December 12, 2022."
            }), _jsx(_components.h4, {
              id: "new-features",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New UI theme"
              })
            }), _jsx(_components.p, {
              children: "v2.8.0 enables you to set the display theme of the classroom UI to light or dark."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Flexible Classroom UI builder"
              })
            }), _jsx(_components.p, {
              children: `Flexible Classroom UI builder is launched to enable you design and customize the UI of your classroom.
The UI builder currently supports the following Flexible Classroom features:`
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "All features of versions 2.6.x and earlier"
              }), `
`, _jsx(_components.li, {
                children: "Setting the display theme of the classroom UI to light or dark"
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New demo features"
              })
            }), _jsx(_components.p, {
              children: "v2.8.0 adds the following features to the demo:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Signing up, logging in, and deleting the account"
              }), `
`, _jsx(_components.li, {
                children: "A course list page"
              }), `
`, _jsxs(_components.li, {
                children: ["Classroom reports, including the following information:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Course information"
                  }), `
`, _jsx(_components.li, {
                    children: "Course recording"
                  }), `
`, _jsx(_components.li, {
                    children: "Course reports, including tracking student attendance and students interaction"
                  }), `
`]
                }), `
`]
              }), `
`, _jsx(_components.li, {
                children: "Highlighting of speakers"
              }), `
`, _jsx(_components.li, {
                children: "The ability to partially erase the whiteboard"
              }), `
`]
            }), _jsx(_components.h4, {
              id: "improvements-3",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release includes the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Enhanced UI layer code for developers to customize the classroom UI."
              }), `
`, _jsx(_components.li, {
                children: "The Microsoft Edge browser is now supported."
              }), `
`, _jsxs(_components.li, {
                children: ["The following features were improved in the demo:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "The procedures of joining and creating a room. Users can now reserve a room in advance as well."
                  }), `
`, _jsx(_components.li, {
                    children: "The efficiency of converting course materials."
                  }), `
`, _jsx(_components.li, {
                    children: "The compatibility of the whiteboard toolbar with touchscreen devices."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: ["The ", _jsx(_components.code, {
                  children: "agora-edu-core"
                }), " libraries have been enhanced."]
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.6.x",
            id: "v26x",
            headingLevel: 2,
            value: "v26x",
            children: [_jsx(_components.p, {
              children: "v2.6.x was released on July 29, 2022."
            }), _jsx(_components.h4, {
              id: "new-features-1",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Taking screenshots (Electron only)"
              })
            }), _jsx(_components.p, {
              children: 'v2.6.x adds a snipping tool for Teacher to "take screenshots" of content inside and outside of the classroom, and dynamically add it to the classroom whiteboard. The feature is available in one-to-one classrooms, small classrooms, and lecture halls. This feature is available in the toolbar on Windows and macOS clients. Teachers and teaching assistants can choose to take a screenshot directly or with the current window hidden. The screenshot is displayed in the center of the whiteboard. And Agora provides APIs to expand usage of this feature to include Students and other roles:'
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Web: getSnapshotRgba"
              }), `
`, _jsx(_components.li, {
                children: "Electron: getSnapshot"
              }), `
`, _jsx(_components.li, {
                children: "iOS: getSnapshot"
              }), `
`, _jsx(_components.li, {
                children: "Android: getSnapshot"
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Automatic grouping"
              })
            }), _jsx(_components.p, {
              children: 'For the "breakout rooms" feature, v2.6.x supports automatic grouping. Teachers can set up the number of breakout rooms. Then the system randomly assigns the whole class to breakout rooms.'
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Drag and Drop images from desktop into the classroom whiteboard (Web/Electron)"
              })
            }), _jsx(_components.p, {
              children: "v2.6.x allows teachers or teaching assistants on the PC to drop local images to the whiteboard area and insert the images into the whiteboard."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Dynamic Size, Resize and Place Teacher Video inside the Classroom"
              })
            }), _jsx(_components.p, {
              children: "v2.6.x allows teachers to freely drag and drop their own video and the video of students within the classroom window. Teachers can also resize a video window by double-clicking it. Whatever actions the teacher takes with their video window, students will see."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Hiding the stage area"
              })
            }), _jsx(_components.p, {
              children: "v2.6.x adds a button in the settings of small classrooms, which enables teachers to hide the stage area. After the stage is hidden, the following things occur:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "All videos are disabled."
              }), `
`, _jsx(_components.li, {
                children: "All students automatically steps down from the stage."
              }), `
`, _jsx(_components.li, {
                children: "The whiteboard is scaled up to fit the classroom."
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Saving whiteboard contents as images"
              })
            }), _jsx(_components.p, {
              children: "v2.6.x allows teachers and teaching assistants to save contents on the whiteboard to their local device as JPG images."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Adding web links as courseware"
              })
            }), _jsxs(_components.p, {
              children: ["v2.6.x allows teachers to add web links, such as YouTube links and Google Drive links, in ", _jsx(_components.strong, {
                children: "My Resources"
              }), ". The suffix of such kind of courseware is ", _jsx(_components.code, {
                children: ".alf"
              }), ", which is the abbreviation of agora link file. After the upload succeeds, the teacher can open the courseware in the classroom."]
            }), _jsx(_components.h4, {
              id: "issues-fixed-4",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "(iOS) Crashes occurred when receiving a global announcement."
              }), `
`, _jsx(_components.li, {
                children: "(iOS) In small classrooms, the teacher did not select the brush, but red lines appeared on the whiteboard."
              }), `
`, _jsx(_components.li, {
                children: "(iOS) In small classrooms, the teacher double-clicked the settings, chat, or roster buttons, the color of these buttons did not change."
              }), `
`, _jsx(_components.li, {
                children: "(Android) In small classrooms, after a student joined a sub-room and invited the teacher to join the same sub-room, the teacher entered the wrong sub-room."
              }), `
`, _jsx(_components.li, {
                children: "(All) In small classrooms, before any student joined the classroom, the teacher started and ended the breakout room session. Then after a student joined the classroom, when the teacher re-started the breakout room session, the 500 error occurred."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.4.x",
            id: "v24x",
            headingLevel: 2,
            value: "v24x",
            children: [_jsx(_components.p, {
              children: "v2.4.x was released on June 2, 2022."
            }), _jsx(_components.h4, {
              id: "new-features-2",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Breakout rooms (Web only)"
              })
            }), _jsx(_components.p, {
              children: 'v2.4.x adds the "Breakout rooms" feature in the toolbox of small classrooms. With breakout rooms, students can get together in small groups for discussion and brainstorming sessions. The teacher manually assigns students to each breakout room. A class supports up to 20 breakout rooms with a maximum of 17 members in each room. The features that are available in breakout rooms include real-time audio and video interaction, messaging, whiteboarding, and screen sharing.'
            }), _jsx(_components.p, {
              children: "After the breakout session begins, the teacher and teaching assistants have the ability to dynamically join or leave any of the breakout rooms. They can also send announcements to all the breakout rooms. Students are notified in their chat to check for the announcements."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for the teacher role on Android and iOS clients"
              })
            }), _jsx(_components.p, {
              children: "v2.4.x duplicates the features of the teacher role on desktop experience for Web, macOS, and Windows on mobile clients (Android and iOS)."
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsxs(CalloutDescription, {
                children: [_jsx(_components.p, {
                  children: "Note that the following features are temporarily not available for the teacher role on mobile clients:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Enabling screen sharing"
                  }), `
`, _jsx(_components.li, {
                    children: "Starting pop-up quizzes"
                  }), `
`, _jsx(_components.li, {
                    children: "Starting polls"
                  }), `
`, _jsx(_components.li, {
                    children: "Starting the countdown timer"
                  }), `
`]
                })]
              })
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Ability to turn the whiteboard on and off in the classroom"
              })
            }), _jsx(_components.p, {
              children: "v2.4.x adds the ability to turn the whiteboard on or off in one-on-one classrooms, small classrooms, and lecture halls. By default, after the whiteboard is turned off, the teacher's video is displayed in the whiteboard area. Developers are also able to use UIStore or UIKit to customize the classroom layout when the whiteboard is off."
            }), _jsx(_components.h4, {
              id: "improvements-4",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release includes the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Optimizes widgets: v2.4.x optimizes the internal technical architecture of the three widgets: Pop-up Quiz, Poll, and Countdown Timer for the higher stability and better end-user experience. In addition, v2.4.x enables developers to get the data of pop-up quizzes and polls through RESTful APIs. For details, see the ", _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api#get-data-for-pop-up-quizzes",
                  children: "RESTful API reference"
                }), "."]
              }), `
`, _jsx(_components.li, {
                children: "Improves the compatibility of the Web client: The Web client is now supported on the desktop version of Firefox."
              }), `
`, _jsx(_components.li, {
                children: "Optimizes the cloud storage: v2.4.x optimizes the business logic and UI of the cloud storage feature in Flexible Classroom."
              }), `
`, _jsx(_components.li, {
                children: "Optimizes the whiteboard: v2.4.x adds laser pointer, undo, redo, and one-click screen-clearing features on the whiteboard in Flexible Classroom."
              }), `
`, _jsx(_components.li, {
                children: "Reward enhancements: The teacher can now extend and remove student rewards dynamically during a class session."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "issues-fixed-5",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "When the teacher moved a file or a tool on the whiteboard, the movement might not be synchronized on the students' side."
              }), `
`, _jsx(_components.li, {
                children: "Logging in to the IM module occasionally failed."
              }), `
`, _jsx(_components.li, {
                children: "Loading a file failed when the format of the file was not supported."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.1.0",
            id: "v210",
            headingLevel: 2,
            value: "v210",
            children: [_jsx(_components.p, {
              children: "v2.1.0 was released on February 23, 2022."
            }), _jsx(_components.h4, {
              id: "release-highlights",
              children: "Release highlights"
            }), _jsx(_components.p, {
              children: "In v2.1.0, Agora fully optimizes the internal architecture of Flexible Classroom. Compared to earlier versions, v2.1.0 has the following advantages:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "New features:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Answer Selector (Pop-up Quiz), Polling Feature, Countdown Timer, Mobile HTML5 Support, and ability to turn the whiteboard on or off in the classroom."
                  }), `
`, _jsx(_components.li, {
                    children: "Video Gallery Rotation: Ability for teachers to configure the classroom setting to automatically rotate the on-stage student gallery view without attempting to scroll or page through the class participants."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Lecture Hall: Expands audience capacity up to 5,000 students, from 1,000 in the last version."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Web client:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Adds support for Safari on desktop and iPad, as well as for Chrome on the iPad."
                  }), `
`, _jsxs(_components.li, {
                    children: ["Introduces ", _jsx(_components.a, {
                      href: "/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/enable-flexible-classroom",
                      children: "EDUClassroomUIStore"
                    }), " for customizing the classroom UI, which replaces the UIKit in previous versions."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Android and iOS clients:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "Redesigns contexts for better abstraction of modular features in Flexible Classroom, where each context can be controlled separately."
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "Refactors context APIs with the following improvements:"
                    }), `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "Renamed APIs and parameters for intuitiveness, understandability, and consistency."
                      }), `
`, _jsx(_components.li, {
                        children: "Improved flexibility of API calling."
                      }), `
`, _jsx(_components.li, {
                        children: "More APIs for developers to customize their own features."
                      }), `
`]
                    }), `
`]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), _jsx(_components.h4, {
              id: "flexible-classroom-v210-migration-guidance",
              children: "Flexible Classroom v2.1.0 migration guidance"
            }), _jsx(_components.p, {
              children: "If you have made changes to your Flexible Classroom UI in earlier versions, in order to migrate to v2.1.0, Agora recommends you create a new project based on v2.1.0 and re-implement the UI changes. Please refer to the following Flexible Classroom v2.1.0 migration guides:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/realtime-media/flexible-classroom/reference/migration-guide",
                  children: "Migration guide"
                })
              }), `
`]
            }), _jsxs(_components.p, {
              children: ["If you encounter any problem during the migration process, or need to migrate from Flexible Classroom earlier than v1.1.5, please contact ", _jsx(_components.a, {
                href: "mailto:support@agora.io",
                children: "support@agora.io"
              }), " so that Agora technical support team can help."]
            }), _jsx(_components.h4, {
              id: "new-features-3",
              children: "New Features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Answer selector and polling feature"
              })
            }), _jsx(_components.p, {
              children: "To increase engagement and enhance interactivity, v2.1.0 adds the following teaching tools:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Answer selector: This tool is applicable to use-cases where the teacher asks a single-choice or multiple-choice question and requests the whole class to answer the question together. The teacher can set up the choices and the correct answer, and then trigger answering. The teacher can see the number of students who have submitted an answer and the percentage that are correct in real time."
              }), `
`, _jsx(_components.li, {
                children: "Polling: This tool is applicable to use-cases where the teacher wants to get feedback from the whole class. The teacher can set up the subject, choices, and start and end time of the poll. Flexible Classroom also provides live visualization of polling results."
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Ability to turn the whiteboard on or off in the classroom"
              })
            }), _jsxs(_components.p, {
              children: ["As of v2.1.0, Agora supports turning the whiteboard on or off in the classroom. For details, see ", _jsx(_components.a, {
                href: "/en/realtime-media/flexible-classroom/build/customize-the-ui-and-plugins/disable-whiteboard-module",
                children: "Enable and disable the whiteboard"
              }), ". When using the APIs for this feature, after the whiteboard is closed, developers can use Flexible Classroom UIKit or UIStore to customize their unique classroom with their desired video gallery to fill the classroom window."]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Video gallery rotation"
              })
            }), _jsx(_components.p, {
              children: "Flexible Classroom gives teachers the ability to configure the classroom settings for improved student engagement and video. The Video Gallery Rotation feature lets the teacher automatically rotate the on-stage student gallery view at a desired frequency and sequence, thus eliminating the need for the teacher to scroll or page through the class participants."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Mobile HTML5 support"
              })
            }), _jsx(_components.p, {
              children: "As of v2.1.0, students can join a lecture hall in Flexible Classroom simply by clicking on a shared webpage link within some mobile social applications that use a web view. After joining the classroom on mobile devices, students can do the following things:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: `Watch and hear the teacher's lecture, as well as presentations by students "on the stage".`
              }), `
`, _jsx(_components.li, {
                children: "View the whiteboard and the screen shared by the teacher."
              }), `
`, _jsx(_components.li, {
                children: "Send messages to chat with other participants in the classroom."
              }), `
`, _jsx(_components.li, {
                children: "Engage in class activities such as polling, answering, and viewing the teacher's count down clock."
              }), `
`]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsxs(CalloutDescription, {
                children: [_jsx(_components.p, {
                  children: "Please note that the following features are not supported on HTML5:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: 'Students raising their hands to apply for speaking on the "stage".'
                  }), `
`, _jsx(_components.li, {
                    children: "Students drawing on the whiteboard."
                  }), `
`, _jsx(_components.li, {
                    children: "Students testing or switching their local media devices."
                  }), `
`]
                })]
              })
            }), _jsx(_components.h4, {
              id: "improvements-5",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "v2.1.0 makes the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: 'Optimizes the business logic and UI of various features in Flexible Classroom, such as students "raising their hands" for permission to speak, the class roster, and in-class reminders.'
              }), `
`, _jsx(_components.li, {
                children: "Increases the upper limit on the number of users in a lecture hall to 5,000."
              }), `
`, _jsx(_components.li, {
                children: "Improves the compatibility of the Web client. The Web client is now supported on Safari for the desktop and iPad, as well as on Chrome for the iPad."
              }), `
`, _jsx(_components.li, {
                children: "Supports displaying thumbnails and animations for the PPT files opened in the classroom."
              }), `
`, _jsx(_components.li, {
                children: "When a classroom is being recorded, the recording button changes to red."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "issues-fixed-6",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "v2.1.0 fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "(All platforms) The RTC SDK and whiteboard usage occurred in Flexible Classroom was not showed in Agora Console."
              }), `
`, _jsx(_components.li, {
                children: "(Web) Occasional failure to record the whiteboard contents in a small classroom."
              }), `
`, _jsx(_components.li, {
                children: "(Web) Occasional failure to send a massage in a small classroom."
              }), `
`, _jsx(_components.li, {
                children: "(Web) After the teacher joined a lecture hall, there was a possibility that the whiteboard was not loaded successfully."
              }), `
`, _jsx(_components.li, {
                children: '(Web/Windows/macOS) Sometimes in a lecture hall, a student "raised a hand" to apply for making a presentation, an error occurred. And the teacher did not receive the application.'
              }), `
`, _jsx(_components.li, {
                children: `(Web/Windows/macOS) In a small classroom, a student went onto the "stage" and turned on the video. After the student left the room, the student's video did not disappear immediately.`
              }), `
`, _jsx(_components.li, {
                children: "(Windows) When a student left and rejoined the room, the student could not see the room announcement published by the teacher."
              }), `
`, _jsx(_components.li, {
                children: "(Windows) In a one-to-one classroom, the student's video occasionally went black."
              }), `
`, _jsx(_components.li, {
                children: "(iOS) When the teacher displayed a PPT that contained audio and video, the student on iOS sometimes neither heard the audio nor saw the video."
              }), `
`, _jsx(_components.li, {
                children: "(Android) In a small classroom, sometimes if a student on Android left and rejoined the room, the student could not see the teacher's video."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.5.1",
            id: "v1151",
            headingLevel: 2,
            value: "v1151",
            children: [_jsx(_components.p, {
              children: "v1.1.5.1 was released on October 20, 2021."
            }), _jsx(_components.h4, {
              id: "new-features-4",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for customizing the video encoding configurations"
              })
            }), _jsxs(_components.p, {
              children: ["As of v1.1.5.1, developers can customize the video encoding configurations, including the width, height, frame rate, and bitrate. When calling the ", _jsx(_components.code, {
                children: "launch"
              }), " method, developers can set the ", _jsx(_components.code, {
                children: "videoEncoderConfig"
              }), " parameter in ", _jsx(_components.code, {
                children: "mediaOptions"
              }), " to customize the encoding configurations for the video stream captured by a camera or the screen-sharing video stream."]
            }), _jsx(_components.p, {
              children: "The recommended video encoding configurations are as follows:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "One-to-one Classroom: 320x240, 200 Kbps, and 15 fps."
              }), `
`, _jsx(_components.li, {
                children: "Small Classroom and Lecture Hall: 160x120, 65 Kbps, and 15 fps, if the number of students in a classroom who send their video stream at the same time is less than or equal to six."
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: 'Students automatically going onto the "stage"'
              })
            }), _jsx(_components.p, {
              children: 'v1.1.5.1 adds the feature of students automatically going onto the "stage" in the Small Classroom scenario. Once the teacher or TA enables this feature, students go onto the "stage" at specified intervals.'
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for setting the latency level of a receiver"
              })
            }), _jsxs(_components.p, {
              children: ["As of v1.1.5.1, developers can set the latency level of an audience member. By default, the latency level is ultra-low. Developers can set the ", _jsx(_components.code, {
                children: "latencyLevel"
              }), " parameter in the ", _jsx(_components.code, {
                children: "launch"
              }), " method to change the latency level:"]
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Ultra-low latency: The latency from the sender to the receiver is 400 ms to 800 ms."
              }), `
`, _jsx(_components.li, {
                children: "Low latency: The latency from the sender to the receiver is 1500 ms to 2000 ms."
              }), `
`]
            }), _jsxs(_components.p, {
              children: ["The charges for low latency and ultra-low latency are different. For details, see the ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "pricing page"
              }), "."]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: 'Support for setting whether students automatically send streams after going onto the "stage"'
              })
            }), _jsxs(_components.p, {
              children: ['v1.1.5.1 allows developers to control whether students automatically send audio or video streams after they go onto the "stage". By default, students do not send audio nor video streams after they go onto the "stage". You can change the default behavior by setting the ', _jsx(_components.code, {
                children: "streamState"
              }), " parameter when calling ", _jsx(_components.code, {
                children: "launch"
              }), "."]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Pre-class device test and local video preview"
              })
            }), _jsx(_components.p, {
              children: "As of v1.1.5.1, Flexible Classroom adds the Media Context API to allow developers to implement the pre-class test module, with which students can check whether their camera and microphone are functioning correctly and preview how they look and sound before they join a class."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "The countdown timer"
              })
            }), _jsx(_components.p, {
              children: "v1.1.5.1 adds a countdown timer in Flexible Classroom. The teacher can find the countdown time in the toolbox and set an initial value. After the teacher clicks the start button, students see a countdown window."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for media device management"
              })
            }), _jsxs(_components.p, {
              children: ["As of v1.1.5.1, students can control whether local cameras, microphones, and speakers are on or off during the class. Agora adds the ", _jsx(_components.code, {
                children: "DeviceContext"
              }), " and ", _jsx(_components.code, {
                children: "IDeviceHandler"
              }), " classes in the Agora Edu Context and provides methods and callbacks for local device control."]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Teachers making notes on their shared screen"
              })
            }), _jsx(_components.p, {
              children: "As of v1.1.5.1, teachers can make notes on the screen that they share with the basic whiteboard tools."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for custom user properties and classroom properties"
              })
            }), _jsx(_components.p, {
              children: "As of v1.1.5.1, developers can customize properties for users and classrooms. These properties can be updated, and the updates can be monitored. For example, developers can set the profile photo as a custom user property. To support this feature, Agora makes the following changes to the Agora Edu Context:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Classroom properties:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Add the ", _jsx(_components.code, {
                      children: "updateFlexRoomProps"
                    }), " method in ", _jsx(_components.code, {
                      children: "RoomContext"
                    }), " for adding or updating custom classroom properties."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["Add the ", _jsx(_components.code, {
                      children: "onFlexRoomPropsInitialized"
                    }), " and ", _jsx(_components.code, {
                      children: "onFlexRoomPropertiesChanged"
                    }), " callbacks in ", _jsx(_components.code, {
                      children: "IRoomHandler"
                    }), " for indicating the initial custom classroom properties and subsequent classroom property changes."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "User properties:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Add the ", _jsx(_components.code, {
                      children: "userProperties"
                    }), " parameter in ", _jsx(_components.code, {
                      children: "AgoraEduLaunchConfig"
                    }), " for passing in custom user properties when launching a classroom."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["Add the ", _jsx(_components.code, {
                      children: "updateFlexUserProperties"
                    }), " method in ", _jsx(_components.code, {
                      children: "UserContext"
                    }), " for adding or updating custom user properties."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["Add the ", _jsx(_components.code, {
                      children: "onFlexUserPropertiesChanged"
                    }), " callback in ", _jsx(_components.code, {
                      children: "IEduUserHandler"
                    }), " for indicating user property changes."]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), _jsx(_components.h4, {
              id: "improvements-6",
              children: "Improvements"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["To optimize the PPT display on the students' clients, v1.1.5.1 adds the ", _jsx(_components.code, {
                  children: "boardFitMode"
                }), " parameter in ", _jsx(_components.code, {
                  children: "AgoraEduLaunchConfig"
                }), " for setting the PPT display mode. By default, the PPT display mode is fit, which means uniformly scaling the PPT until one of its dimensions fits the boundary. Developers can change the ", _jsx(_components.code, {
                  children: "boardFitMode"
                }), " to ", _jsx(_components.code, {
                  children: "Retain"
                }), " when calling the ", _jsx(_components.code, {
                  children: "launch"
                }), " method. In this mode, if the student manually adjusts the PPT size, the client maintains this size no matter what class the student joins."]
              }), `
`, _jsx(_components.li, {
                children: "As of v1.1.5.1, Flexible Classroom supports displaying HTML5 courseware on the whiteboard."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.0.1",
            id: "v1101",
            headingLevel: 2,
            value: "v1101",
            children: [_jsx(_components.p, {
              children: "v1.1.0.1 was released on July 7, 2021."
            }), _jsx(_components.h4, {
              id: "new-features-5",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Media encryption"
              })
            }), _jsxs(_components.p, {
              children: ["To ensure the security during real-time audio and video transmission, v1.1.0.1 adds the ", _jsx(_components.code, {
                children: "mediaOptions"
              }), " parameter in AgoraEduLaunchConfig for supporting media stream encryption. By default, Flexible Classroom does not encrypt the media stream. To enable media encryption, use the ", _jsx(_components.code, {
                children: "mediaOptions"
              }), " parameter to choose an encryption mode and set the encryption key. Flexible Classroom supports the following encryption modes:"]
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AES_128_XTS"
                }), ": 128-bit AES encryption, XTS mode."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AES_128_ECB"
                }), ": 128-bit AES encryption, ECB mode."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AES_256_XTS"
                }), ": 256-bit AES encryption, XTS mode."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AES_128_GCM"
                }), ": 128-bit AES encryption, GCM mode."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AES_256_GCM"
                }), ": 256-bit AES encryption, GCM mode."]
              }), `
`]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsx(_components.p, {
                  children: "The teacher and students in a classroom must use the same encryption mode and key. If not, unexpected issues, such as a white or black screen and noise, may occur."
                })
              })
            }), _jsx(_components.h4, {
              id: "issues-fixed-7",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "v1.1.0.1 fixes the issue that the default region was not NA (North America)."
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.0",
            id: "v110",
            headingLevel: 2,
            value: "v110",
            children: [_jsx(_components.p, {
              children: "v1.1.0 was released on June 18, 2021. This is the first release of Agora Flexible Classroom with the following features:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Real-time audio and video interaction"
              }), `
`, _jsx(_components.li, {
                children: "Signaling"
              }), `
`, _jsx(_components.li, {
                children: "Interactive whiteboard"
              }), `
`, _jsx(_components.li, {
                children: "Screen sharing"
              }), `
`, _jsx(_components.li, {
                children: "Recording and replay"
              }), `
`, _jsx(_components.li, {
                children: "Teaching tools, including cloud storage, classroom rewards, and the user list"
              }), `
`, _jsx(_components.li, {
                children: "Customizing the classroom user interfaces and embedding custom plugins in classrooms"
              }), `
`, _jsx(_components.li, {
                children: "Flexible Classroom cloud service for classroom and user management"
              }), `
`]
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
          id: "ios",
          children: "iOS"
        }), _jsxs(Accordions, {
          type: "multiple",
          openFirst: true,
          children: [_jsxs(Accordion, {
            title: "v2.8.100",
            id: "v28100-1",
            headingLevel: 2,
            value: "v28100-1",
            children: [_jsx(_components.p, {
              children: "v2.8.00 was released on March 6, 2024"
            }), _jsx(_components.h4, {
              id: "improvements-7",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release optimizes the network connection by supporting the cloud proxy configurations of the RTM service."
            }), _jsx(_components.h4, {
              id: "issues-fixed-8",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixes the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "The font size displayed on the whiteboard was abnormal."
              }), `
`, _jsx(_components.li, {
                children: "The on-stage state became inaccurate after students in a lecture hall joined and left the class."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.8.80",
            id: "v2880",
            headingLevel: 2,
            value: "v2880",
            children: [_jsx(_components.p, {
              children: "v2.8.80 was released on December 14, 2023."
            }), _jsx(_components.h4, {
              id: "improvements-8",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release made the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Optimized the logic for capturing the remote raw audio data."
              }), `
`, _jsx(_components.li, {
                children: "Enhanced the data transmission efficiency in the classroom."
              }), `
`, _jsx(_components.li, {
                children: "Optimized the synchronization mechanism of personal data in big classes."
              }), `
`, _jsx(_components.li, {
                children: "Enhanced the optimization of media error callbacks."
              }), `
`, _jsxs(_components.li, {
                children: ["Optimized the performance of the ", _jsx(_components.code, {
                  children: "onAudioRawDataBeforeMixed"
                }), " and ", _jsx(_components.code, {
                  children: "onAudioRawDataMixed"
                }), " callbacks."]
              }), `
`, _jsxs(_components.li, {
                children: ["Optimized the efficiency of the ", _jsx(_components.code, {
                  children: "FcrAudioRawDataPosition"
                }), " class."]
              }), `
`]
            }), _jsx(_components.h4, {
              id: "issues-fixed-9",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "In use-cases where the number of publishers exceeded the upper limit, if a student did not stop publishing streams after getting off the stage, the student that got on the stage could not publish streams."
              }), `
`, _jsx(_components.li, {
                children: "After the whiteboard was disabled, the usage calculation continued."
              }), `
`, _jsx(_components.li, {
                children: "The user presence state was incorrectly displayed."
              }), `
`, _jsx(_components.li, {
                children: "Occasional audio mixing issues while using the whiteboard."
              }), `
`, _jsx(_components.li, {
                children: "Occasional video inversion."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.8.11",
            id: "v2811-1",
            headingLevel: 2,
            value: "v2811-1",
            children: [_jsx(_components.p, {
              children: "v2.8.11 was released on January 13, 2023."
            }), _jsx(_components.h4, {
              id: "improvements-9",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release adds support for sharing audio when sharing the screen."
            }), _jsx(_components.h4, {
              id: "issues-fixed-10",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixes known issues on mobile devices."
            })]
          }), _jsxs(Accordion, {
            title: "v2.8.0",
            id: "v280-1",
            headingLevel: 2,
            value: "v280-1",
            children: [_jsx(_components.p, {
              children: "v2.8.0 was released on December 12, 2022."
            }), _jsx(_components.h4, {
              id: "new-features-6",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New UI theme"
              })
            }), _jsx(_components.p, {
              children: "v2.8.0 enables you to set the display theme of the classroom UI to light or dark."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New language supported"
              })
            }), _jsx(_components.p, {
              children: "v2.8.0 supports setting the language of the classroom UI to Chinese or English."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Login and signup page"
              })
            }), _jsx(_components.p, {
              children: "The Flexible Classroom demo adds a login and a signup page."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Flexible Classroom UI builder"
              })
            }), _jsx(_components.p, {
              children: `Flexible Classroom UI builder is launched to enable you design and customize the UI of your classroom.
The UI builder currently supports the following
Flexible Classroom features:`
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "All features of versions 2.6.x and earlier"
              }), `
`, _jsx(_components.li, {
                children: "Setting the display theme of the classroom UI to light or dark"
              }), `
`, _jsx(_components.li, {
                children: "Setting the language of the classroom UI to Chinese or English"
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Online proctoring scenario"
              })
            }), _jsxs(_components.p, {
              children: ["v2.8.0 provides the Agora Proctor SDK for online exam proctoring scenarios. For details, see the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/flexible-classroom/proctor-sdk",
                children: `Agora Proctor
SDK API reference`
              }), "."]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New demo features"
              })
            }), _jsx(_components.p, {
              children: "v2.8.0 adds the following features to the demo:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Signing up, logging in, and deleting the account"
              }), `
`, _jsx(_components.li, {
                children: "A course list page"
              }), `
`, _jsxs(_components.li, {
                children: ["Classroom reports, including the following information:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Course information"
                  }), `
`, _jsx(_components.li, {
                    children: "Course recording"
                  }), `
`, _jsx(_components.li, {
                    children: "Course reports, including tracking student attendance and students interaction"
                  }), `
`]
                }), `
`]
              }), `
`, _jsx(_components.li, {
                children: "Highlighting of speakers"
              }), `
`, _jsx(_components.li, {
                children: "The ability to partially erase the whiteboard"
              }), `
`]
            }), _jsx(_components.h4, {
              id: "improvements-10",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release includes the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Enhanced UI layer code for developers to customize the classroom UI."
              }), `
`, _jsx(_components.li, {
                children: "Support for the Microsoft Edge browser."
              }), `
`, _jsxs(_components.li, {
                children: ["The following features were improved in the demo:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "The procedures of joining and creating a room. Users now can reserve a room in advance as well"
                  }), `
`, _jsx(_components.li, {
                    children: "The efficiency of converting course materials"
                  }), `
`, _jsx(_components.li, {
                    children: "The compatibility of the whiteboard toolbar with touchscreen devices."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: ["The ", _jsx(_components.code, {
                  children: "agora-edu-core"
                }), " libraries have been enhanced."]
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.6.x",
            id: "v26x-1",
            headingLevel: 2,
            value: "v26x-1",
            children: [_jsx(_components.p, {
              children: "v2.6.x was released on July 29, 2022."
            }), _jsx(_components.h4, {
              id: "new-features-7",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Taking screenshots (Electron only)"
              })
            }), _jsx(_components.p, {
              children: 'v2.6.x adds a snipping tool for Teacher to "take screenshots" of content inside and outside of the classroom, and dynamically add it to the classroom whiteboard. The feature is available in one-to-one classrooms, small classrooms, and lecture halls. This feature is available in the toolbar on Windows and macOS clients. Teachers and teaching assistants can choose to take a screenshot directly or with the current window hidden. The screenshot is displayed in the center of the whiteboard. And Agora provides APIs to expand usage of this feature to include Students and other roles:'
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Web: getSnapshotRgba"
              }), `
`, _jsx(_components.li, {
                children: "Electron: getSnapshot"
              }), `
`, _jsx(_components.li, {
                children: "iOS: getSnapshot"
              }), `
`, _jsx(_components.li, {
                children: "Android: getSnapshot"
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Automatic grouping"
              })
            }), _jsx(_components.p, {
              children: 'For the "breakout rooms" feature, v2.6.x supports automatic grouping. Teachers can set up the number of breakout rooms. Then the system randomly assigns the whole class to breakout rooms.'
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Drag and Drop images from desktop into the classroom whiteboard (Web/Electron)"
              })
            }), _jsx(_components.p, {
              children: "v2.6.x allows teachers or teaching assistants on the PC to drop local images to the whiteboard area and insert the images into the whiteboard."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Dynamic Size, Resize and Place Teacher Video inside the Classroom"
              })
            }), _jsx(_components.p, {
              children: "v2.6.x allows teachers to freely drag and drop their own video and the video of students within the classroom window. Teachers can also resize a video window by double-clicking it. Whatever actions the teacher takes with their video window, students will see."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Hiding the stage area"
              })
            }), _jsx(_components.p, {
              children: "v2.6.x adds a button in the settings of small classrooms, which enables teachers to hide the stage area. After the stage is hidden, the following things occur:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "All videos are disabled."
              }), `
`, _jsx(_components.li, {
                children: "All students automatically steps down from the stage."
              }), `
`, _jsx(_components.li, {
                children: "The whiteboard is scaled up to fit the classroom."
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Saving whiteboard contents as images"
              })
            }), _jsx(_components.p, {
              children: "v2.6.x allows teachers and teaching assistants to save contents on the whiteboard to their local device as JPG images."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Adding web links as courseware"
              })
            }), _jsxs(_components.p, {
              children: ["v2.6.x allows teachers to add web links, such as YouTube links and Google Drive links, in ", _jsx(_components.strong, {
                children: "My Resources"
              }), ". The suffix of such kind of courseware is ", _jsx(_components.code, {
                children: ".alf"
              }), ", which is the abbreviation of agora link file. After the upload succeeds, the teacher can open the courseware in the classroom."]
            }), _jsx(_components.h4, {
              id: "issues-fixed-11",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "(iOS) Crashes occurred when receiving a global announcement."
              }), `
`, _jsx(_components.li, {
                children: "(iOS) In small classrooms, the teacher did not select the brush, but red lines appeared on the whiteboard."
              }), `
`, _jsx(_components.li, {
                children: "(iOS) In small classrooms, the teacher double-clicked the settings, chat, or roster buttons, the color of these buttons did not change."
              }), `
`, _jsx(_components.li, {
                children: "(Android) In small classrooms, after a student joined a sub-room and invited the teacher to join the same sub-room, the teacher entered the wrong sub-room."
              }), `
`, _jsx(_components.li, {
                children: "(All) In small classrooms, before any student joined the classroom, the teacher started and ended the breakout room session. Then after a student joined the classroom, when the teacher re-started the breakout room session, the 500 error occurred."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.4.x",
            id: "v24x-1",
            headingLevel: 2,
            value: "v24x-1",
            children: [_jsx(_components.p, {
              children: "v2.4.x was released on June 2, 2022."
            }), _jsx(_components.h4, {
              id: "new-features-8",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Breakout rooms (Web only)"
              })
            }), _jsx(_components.p, {
              children: 'v2.4.x adds the "Breakout rooms" feature in the toolbox of small classrooms. With breakout rooms, students can get together in small groups for discussion and brainstorming sessions. The teacher manually assigns students to each breakout room. A class supports up to 20 breakout rooms with a maximum of 17 members in each room. The features that are available in breakout rooms include real-time audio and video interaction, messaging, whiteboarding, and screen sharing.'
            }), _jsx(_components.p, {
              children: "After the breakout session begins, the teacher and teaching assistants have the ability to dynamically join or leave any of the breakout rooms. They can also send announcements to all the breakout rooms. Students are notified in their chat to check for the announcements."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for the teacher role on Android and iOS clients"
              })
            }), _jsx(_components.p, {
              children: "v2.4.x duplicates the features of the teacher role on desktop experience for Web, macOS, and Windows on mobile clients (Android and iOS)."
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsxs(CalloutDescription, {
                children: [_jsx(_components.p, {
                  children: "Note that the following features are temporarily not available for the teacher role on mobile clients:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Enabling screen sharing"
                  }), `
`, _jsx(_components.li, {
                    children: "Starting pop-up quizzes"
                  }), `
`, _jsx(_components.li, {
                    children: "Starting polls"
                  }), `
`, _jsx(_components.li, {
                    children: "Starting the countdown timer"
                  }), `
`]
                })]
              })
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Ability to turn the whiteboard on and off in the classroom"
              })
            }), _jsx(_components.p, {
              children: "v2.4.x adds the ability to turn the whiteboard on or off in one-on-one classrooms, small classrooms, and lecture halls. By default, after the whiteboard is turned off, the teacher's video is displayed in the whiteboard area. Developers are also able to use UIStore or UIKit to customize the classroom layout when the whiteboard is off."
            }), _jsx(_components.h4, {
              id: "improvements-11",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release includes the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Optimizes widgets: v2.4.x optimizes the internal technical architecture of the three widgets: Pop-up Quiz, Poll, and Countdown Timer for the higher stability and better end-user experience. In addition, v2.4.x enables developers to get the data of pop-up quizzes and polls through RESTful APIs. For details, see the ", _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api#get-data-for-pop-up-quizzes",
                  children: "RESTful API reference"
                }), "."]
              }), `
`, _jsx(_components.li, {
                children: "Improves the compatibility of the Web client: The Web client is now supported on the desktop version of Firefox."
              }), `
`, _jsx(_components.li, {
                children: "Optimizes the cloud storage: v2.4.x optimizes the business logic and UI of the cloud storage feature in Flexible Classroom."
              }), `
`, _jsx(_components.li, {
                children: "Optimizes the whiteboard: v2.4.x adds laser pointer, undo, redo, and one-click screen-clearing features on the whiteboard in Flexible Classroom."
              }), `
`, _jsx(_components.li, {
                children: "Reward enhancements: The teacher can now extend and remove student rewards dynamically during a class session."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "issues-fixed-12",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "When the teacher moved a file or a tool on the whiteboard, the movement might not be synchronized on the students' side."
              }), `
`, _jsx(_components.li, {
                children: "Logging in to the IM module occasionally failed."
              }), `
`, _jsx(_components.li, {
                children: "Loading a file failed when the format of the file was not supported."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.1.x",
            id: "v21x",
            headingLevel: 2,
            value: "v21x",
            children: [_jsx(_components.p, {
              children: "v2.1.0 was released on February 23, 2022."
            }), _jsx(_components.h4, {
              id: "release-highlights-1",
              children: "Release highlights"
            }), _jsx(_components.p, {
              children: "In v2.1.0, Agora fully optimizes the internal architecture of Flexible Classroom. Compared to earlier versions, v2.1.0 has the following advantages:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "New features:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Answer Selector (Pop-up Quiz), Polling Feature, Countdown Timer, Mobile HTML5 Support, and ability to turn the whiteboard on or off in the classroom."
                  }), `
`, _jsx(_components.li, {
                    children: "Video Gallery Rotation: Ability for teachers to configure the classroom setting to automatically rotate the on-stage student gallery view without attempting to scroll or page through the class participants."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Lecture Hall: Expands audience capacity up to 5,000 students, from 1,000 in the last version."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Web client:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Adds support for Safari on desktop and iPad, as well as for Chrome on the iPad."
                  }), `
`, _jsxs(_components.li, {
                    children: ["Introduces ", _jsx(_components.a, {
                      href: "/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/enable-flexible-classroom",
                      children: "EDUClassroomUIStore"
                    }), " for customizing the classroom UI, which replaces the UIKit in previous versions."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Android and iOS clients:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "Redesigns contexts for better abstraction of modular features in Flexible Classroom, where each context can be controlled separately."
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "Refactors context APIs with the following improvements:"
                    }), `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "Renamed APIs and parameters for intuitiveness, understandability, and consistency."
                      }), `
`, _jsx(_components.li, {
                        children: "Improved flexibility of API calling."
                      }), `
`, _jsx(_components.li, {
                        children: "More APIs for developers to customize their own features."
                      }), `
`]
                    }), `
`]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), _jsx(_components.h4, {
              id: "flexible-classroom-v210-migration-guidance-1",
              children: "Flexible Classroom v2.1.0 migration guidance"
            }), _jsx(_components.p, {
              children: "If you have made changes to your Flexible Classroom UI in earlier versions, in order to migrate to v2.1.0, Agora recommends you create a new project based on v2.1.0 and re-implement the UI changes. Please refer to the following Flexible Classroom v2.1.0 migration guides:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/realtime-media/flexible-classroom/reference/migration-guide",
                  children: "Migration guide"
                })
              }), `
`]
            }), _jsxs(_components.p, {
              children: ["If you encounter any problem during the migration process, or need to migrate from Flexible Classroom earlier than v1.1.5, please contact ", _jsx(_components.a, {
                href: "mailto:support@agora.io",
                children: "support@agora.io"
              }), " so that Agora technical support team can help."]
            }), _jsx(_components.h4, {
              id: "new-features-9",
              children: "New Features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Answer selector and polling feature"
              })
            }), _jsx(_components.p, {
              children: "To increase engagement and enhance interactivity, v2.1.0 adds the following teaching tools:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Answer selector: This tool is applicable to scenarios where the teacher asks a single-choice or multiple-choice question and requests the whole class to answer the question together. The teacher can set up the choices and the correct answer, and then trigger answering. The teacher can see the number of students who have submitted an answer and the percentage that are correct in real time."
              }), `
`, _jsx(_components.li, {
                children: "Polling: This tool is applicable to scenarios where the teacher wants to get feedback from the whole class. The teacher can set up the subject, choices, and start and end time of the poll. Flexible Classroom also provides live visualization of polling results."
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Ability to turn the whiteboard on or off in the classroom"
              })
            }), _jsxs(_components.p, {
              children: ["As of v2.1.0, Agora supports turning the whiteboard on or off in the classroom. For details, see ", _jsx(_components.a, {
                href: "/en/realtime-media/flexible-classroom/build/customize-the-ui-and-plugins/disable-whiteboard-module",
                children: "Enable and disable the whiteboard"
              }), ". When using the APIs for this feature, after the whiteboard is closed, developers can use Flexible Classroom UIKit or UIStore to customize their unique classroom with their desired video gallery to fill the classroom window."]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Video gallery rotation"
              })
            }), _jsx(_components.p, {
              children: "Flexible Classroom gives teachers the ability to configure the classroom settings for improved student engagement and video. The Video Gallery Rotation feature lets the teacher automatically rotate the on-stage student gallery view at a desired frequency and sequence, thus eliminating the need for the teacher to scroll or page through the class participants."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Mobile HTML5 support"
              })
            }), _jsx(_components.p, {
              children: "As of v2.1.0, students can join a lecture hall in Flexible Classroom simply by clicking on a shared webpage link within some mobile social applications that use a web view. After joining the classroom on mobile devices, students can do the following things:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: `Watch and hear the teacher's lecture, as well as presentations by students "on the stage".`
              }), `
`, _jsx(_components.li, {
                children: "View the whiteboard and the screen shared by the teacher."
              }), `
`, _jsx(_components.li, {
                children: "Send messages to chat with other participants in the classroom."
              }), `
`, _jsx(_components.li, {
                children: "Engage in class activities such as polling, answering, and viewing the teacher's count down clock."
              }), `
`]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsxs(CalloutDescription, {
                children: [_jsx(_components.p, {
                  children: "Please note that the following features are not supported on HTML5:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: 'Students raising their hands to apply for speaking on the "stage".'
                  }), `
`, _jsx(_components.li, {
                    children: "Students drawing on the whiteboard."
                  }), `
`, _jsx(_components.li, {
                    children: "Students testing or switching their local media devices."
                  }), `
`]
                })]
              })
            }), _jsx(_components.h4, {
              id: "improvements-12",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "v2.1.0 makes the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: 'Optimizes the business logic and UI of various features in Flexible Classroom, such as students "raising their hands" for permission to speak, the class roster, and in-class reminders.'
              }), `
`, _jsx(_components.li, {
                children: "Increases the upper limit on the number of users in a lecture hall to 5,000."
              }), `
`, _jsx(_components.li, {
                children: "Improves the compatibility of the Web client. The Web client is now supported on Safari for the desktop and iPad, as well as on Chrome for the iPad."
              }), `
`, _jsx(_components.li, {
                children: "Supports displaying thumbnails and animations for the PPT files opened in the classroom."
              }), `
`, _jsx(_components.li, {
                children: "When a classroom is being recorded, the recording button changes to red."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "issues-fixed-13",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "v2.1.0 fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "(All platforms) The RTC SDK and whiteboard usage occurred in Flexible Classroom was not showed in Agora Console."
              }), `
`, _jsx(_components.li, {
                children: "(Web) Occasional failure to record the whiteboard contents in a small classroom."
              }), `
`, _jsx(_components.li, {
                children: "(Web) Occasional failure to send a massage in a small classroom."
              }), `
`, _jsx(_components.li, {
                children: "(Web) After the teacher joined a lecture hall, there was a possibility that the whiteboard was not loaded successfully."
              }), `
`, _jsx(_components.li, {
                children: '(Web/Windows/macOS) Sometimes in a lecture hall, a student "raised a hand" to apply for making a presentation, an error occurred. And the teacher did not receive the application.'
              }), `
`, _jsx(_components.li, {
                children: `(Web/Windows/macOS) In a small classroom, a student went onto the "stage" and turned on the video. After the student left the room, the student's video did not disappear immediately.`
              }), `
`, _jsx(_components.li, {
                children: "(Windows) When a student left and rejoined the room, the student could not see the room announcement published by the teacher."
              }), `
`, _jsx(_components.li, {
                children: "(Windows) In a one-to-one classroom, the student's video occasionally went black."
              }), `
`, _jsx(_components.li, {
                children: "(iOS) When the teacher displayed a PPT that contained audio and video, the student on iOS sometimes neither heard the audio nor saw the video."
              }), `
`, _jsx(_components.li, {
                children: "(Android) In a small classroom, sometimes if a student on Android left and rejoined the room, the student could not see the teacher's video."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.5",
            id: "v115",
            headingLevel: 2,
            value: "v115",
            children: [_jsx(_components.p, {
              children: "v1.1.5 was released on October 20, 2021."
            }), _jsx(_components.h4, {
              id: "compatibility-changes",
              children: "Compatibility changes"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Integration changes"
              })
            }), _jsxs(_components.p, {
              children: ["In v1.1.5, Flexible Classroom is divided into four libraries: ", _jsx(_components.code, {
                children: "AgoraClassroomSDK"
              }), ", ", _jsx(_components.code, {
                children: "AgoraEduCore"
              }), ", ", _jsx(_components.code, {
                children: "AgoraEduUI"
              }), ", and ", _jsx(_components.code, {
                children: "AgoraEduContext"
              }), ". ", _jsx(_components.code, {
                children: "AgoraClassroomSDK"
              }), ", ", _jsx(_components.code, {
                children: "AgoraEduUI"
              }), ", and ", _jsx(_components.code, {
                children: "AgoraEduContext"
              }), " are open-source libraries and released on Github and CocoaPods. ", _jsx(_components.code, {
                children: "AgoraEduCore"
              }), " is a closed-source library and released on CocoaPods as a binary package. If you change the default UI of Flexible Classroom in a previous version, please see the ", _jsx(_components.a, {
                href: "/en/realtime-media/flexible-classroom/reference/migration-guide",
                children: "migration guide"
              }), "."]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Edu Context API changes"
              })
            }), _jsx(_components.p, {
              children: "Agora makes the following changes to the Edu Context APIs in v1.1.5:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: 'Delete "Set" or "Get" in the names of all handlers. Agora supports backward compatibility but recommends you change to the new handlers as soon as possible.'
              }), `
`, _jsxs(_components.li, {
                children: ["Deprecate all ", _jsx(_components.code, {
                  children: "onShowXXXTips"
                }), " methods and move the code of texts and toasts to ", _jsx(_components.code, {
                  children: "AgoraEduUI"
                }), "."]
              }), `
`]
            }), _jsx(_components.h4, {
              id: "new-features-10",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for customizing the video encoding configurations"
              })
            }), _jsxs(_components.p, {
              children: ["As of v1.1.5, developers can customize the video encoding configurations, including the width, height, frame rate, and bitrate. When calling the ", _jsx(_components.code, {
                children: "launch"
              }), " method, developers can set the ", _jsx(_components.code, {
                children: "cameraEncoderConfiguration"
              }), " parameter in ", _jsx(_components.code, {
                children: "AgoraEduLaunchConfig"
              }), " to customize the encoding configurations for the video stream captured by a camera or the screen-sharing video stream."]
            }), _jsx(_components.p, {
              children: "The recommended video encoding configurations are as follows:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "One-to-one Classroom: 320x240, 200 Kbps, and 15 fps."
              }), `
`, _jsx(_components.li, {
                children: "Small Classroom and Lecture Hall: 160x120, 65 Kbps, and 15 fps, if the number of students in a classroom who send their video stream at the same time is less than or equal to six."
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: 'Students automatically going onto the "stage"'
              })
            }), _jsx(_components.p, {
              children: 'v1.1.5 adds the feature of students automatically going onto the "stage" in the Small Classroom scenario. Once the teacher or TA enables this feature, students go onto the "stage" at specified intervals.'
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for setting the latency level of a receiver"
              })
            }), _jsxs(_components.p, {
              children: ["As of v1.1.5, developers can set the latency level of an audience member. By default, the latency level is ultra-low. Developers can set the ", _jsx(_components.code, {
                children: "latencyLevel"
              }), " parameter in the ", _jsx(_components.code, {
                children: "launch"
              }), " method to change the latency level:"]
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Ultra-low latency: The latency from the sender to the receiver is 400 ms to 800 ms."
              }), `
`, _jsx(_components.li, {
                children: "Low latency: The latency from the sender to the receiver is 1500 ms to 2000 ms."
              }), `
`]
            }), _jsxs(_components.p, {
              children: ["The charges for low latency and ultra-low latency are different. For details, see the ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "pricing page"
              }), "."]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: 'Support for setting whether students automatically send streams after going onto the "stage" (Android/iOS)'
              })
            }), _jsxs(_components.p, {
              children: ['v1.1.5 allows developers to control whether students automatically send audio or video streams after they go onto the "stage". By default, students do not send audio nor video streams after they go onto the "stage". You can change the default behavior by setting the ', _jsx(_components.code, {
                children: "audioState"
              }), " and ", _jsx(_components.code, {
                children: "videoState"
              }), " parameters when calling ", _jsx(_components.code, {
                children: "launch"
              }), "."]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Pre-class device test and local video preview"
              })
            }), _jsxs(_components.p, {
              children: ["As of v1.1.5, Flexible Classroom adds the ", _jsx(_components.strong, {
                children: "Media Context API"
              }), " to allow developers to implement the pre-class test module, with which students can check whether their camera and microphone are functioning correctly and preview how they look and sound before they join a class."]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "The countdown timer"
              })
            }), _jsx(_components.p, {
              children: "v1.1.5 adds a countdown timer in Flexible Classroom. The teacher can find the countdown time in the toolbox and set an initial value. After the teacher clicks the start button, students see a countdown window."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for media device management"
              })
            }), _jsxs(_components.p, {
              children: ["As of v1.1.5, students can control whether local cameras, microphones, and speakers are on or off during the class. Agora adds the ", _jsx(_components.code, {
                children: "AgoraEduDeviceContext"
              }), " and ", _jsx(_components.code, {
                children: "AgoraEduDeviceHandler"
              }), " classes in the Agora Edu Context and provides methods and callbacks for local device control."]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Teachers making notes on their shared screen"
              })
            }), _jsx(_components.p, {
              children: "As of v1.1.5, teachers can make notes on the screen that they share with the basic whiteboard tools."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for custom user properties and classroom properties"
              })
            }), _jsx(_components.p, {
              children: "As of v1.1.15, developers can customize properties for users and classrooms. These properties can be updated, and the updates can be monitored. For example, developers can set the profile photo as a custom user property. To support this feature, Agora makes the following changes to the Agora Edu Context:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Classroom properties:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Add the ", _jsx(_components.code, {
                      children: "updateFlexRoomProps"
                    }), " method in ", _jsx(_components.code, {
                      children: "AgoraEduRoomContext"
                    }), " for adding or updating custom classroom properties."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["Add the ", _jsx(_components.code, {
                      children: "onFlexRoomPropsInitialized"
                    }), " and ", _jsx(_components.code, {
                      children: "onFlexRoomPropertiesChanged"
                    }), " callbacks in ", _jsx(_components.code, {
                      children: "AgoraEduRoomHandler"
                    }), " for indicating the initial custom classroom properties and subsequent classroom property changes."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "User properties:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Add the ", _jsx(_components.code, {
                      children: "userProperties"
                    }), " parameter in ", _jsx(_components.code, {
                      children: "AgoraEduLaunchConfig"
                    }), " for passing in custom user properties when launching a classroom."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["Add the ", _jsx(_components.code, {
                      children: "updateFlexUserProperties"
                    }), " method in ", _jsx(_components.code, {
                      children: "AgoraEduUserContext"
                    }), " for adding or updating custom user properties."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["Add the ", _jsx(_components.code, {
                      children: "onFlexUserPropertiesChanged"
                    }), " callback in ", _jsx(_components.code, {
                      children: "AgoraEduUserHandler"
                    }), " for indicating user property changes."]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), _jsx(_components.h4, {
              id: "improvements-13",
              children: "Improvements"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["To optimize the PPT display on the students' clients, v1.1.5 adds the ", _jsx(_components.code, {
                  children: "boardFitMode"
                }), " parameter in ", _jsx(_components.code, {
                  children: "AgoraEduLaunchConfig"
                }), " for setting the PPT display mode. By default, the PPT display mode is fit, which means uniformly scaling the PPT until one of its dimensions fits the boundary. Developers can change the ", _jsx(_components.code, {
                  children: "boardFitMode"
                }), " to ", _jsx(_components.code, {
                  children: "Retain"
                }), " when calling the ", _jsx(_components.code, {
                  children: "launch"
                }), " method. In this mode, if the student manually adjusts the PPT size, the client maintains this size no matter what class the student joins."]
              }), `
`, _jsx(_components.li, {
                children: "As of v1.1.5, Flexible Classroom supports displaying HTML5 courseware on the whiteboard."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.0.1",
            id: "v1101-1",
            headingLevel: 2,
            value: "v1101-1",
            children: [_jsx(_components.p, {
              children: "v1.1.0.1 was released on July 7, 2021."
            }), _jsx(_components.h4, {
              id: "new-features-11",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Media encryption"
              })
            }), _jsxs(_components.p, {
              children: ["To ensure the security during real-time audio and video transmission, v1.1.0.1 adds the ", _jsx(_components.code, {
                children: "mediaOptions"
              }), " parameter in ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/flexible-classroom/classroom-sdk#agoraedulaunchconfig",
                children: "AgoraEduLaunchConfig"
              }), " for supporting media stream encryption. By default, Flexible Classroom does not encrypt the media stream. To enable media encryption, use the ", _jsx(_components.code, {
                children: "mediaOptions"
              }), " parameter to choose an encryption mode and set the encryption key. Flexible Classroom supports the following encryption modes:"]
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AgoraEduMediaEncryptionModeAES128XTS"
                }), ": 128-bit AES encryption, XTS mode."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AgoraEduMediaEncryptionModeAES128ECB"
                }), ": 128-bit AES encryption, ECB mode."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AgoraEduMediaEncryptionModeAES256XTS"
                }), ": 256-bit AES encryption, XTS mode."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AgoraEduMediaEncryptionModeAES128GCM"
                }), ": 128-bit AES encryption, GCM mode."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AgoraEduMediaEncryptionModeAES256GCM"
                }), ": 256-bit AES encryption, GCM mode."]
              }), `
`]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsx(_components.p, {
                  children: "The teacher and students in a classroom must use the same encryption mode and key. If not, unexpected issues, such as a white or black screen and noise, may occur."
                })
              })
            }), _jsx(_components.h4, {
              id: "issues-fixed-14",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "v1.1.0.1 fixes the issue that the default region was not NA (North America)."
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.0",
            id: "v110-1",
            headingLevel: 2,
            value: "v110-1",
            children: [_jsx(_components.p, {
              children: "v1.1.0 was released on June 18, 2021. This is the first release of Agora Flexible Classroom with the following features:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Real-time audio and video interaction"
              }), `
`, _jsx(_components.li, {
                children: "Signaling"
              }), `
`, _jsx(_components.li, {
                children: "Interactive whiteboard"
              }), `
`, _jsx(_components.li, {
                children: "Screen sharing"
              }), `
`, _jsx(_components.li, {
                children: "Recording and replay"
              }), `
`, _jsx(_components.li, {
                children: "Teaching tools, including cloud storage, classroom rewards, and the user list"
              }), `
`, _jsx(_components.li, {
                children: "Customizing the classroom user interfaces and embedding custom plugins in classrooms"
              }), `
`, _jsx(_components.li, {
                children: "Flexible Classroom cloud service for classroom and user management"
              }), `
`]
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
          id: "web",
          children: "Web"
        }), _jsxs(Accordions, {
          type: "multiple",
          openFirst: true,
          children: [_jsxs(Accordion, {
            title: "v2.9.40",
            id: "v2940",
            headingLevel: 2,
            value: "v2940",
            children: [_jsx(_components.p, {
              children: "v2.9.40 was released on March 6, 2024."
            }), _jsx(_components.h4, {
              id: "improvements-14",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release adds the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Optimizes the logic of audio device selection after plugging and unplugging an external audio device."
              }), `
`, _jsx(_components.li, {
                children: "Supports adjusting video profile during class."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "issues-fixed-15",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixes the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "The on-stage state became inaccurate after students in a lecture hall joined and left the class."
              }), `
`, _jsx(_components.li, {
                children: "The video window occasionally went black during live streaming on the H5 browser."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.9.20",
            id: "v2920",
            headingLevel: 2,
            value: "v2920",
            children: [_jsx(_components.p, {
              children: "v2.9.20 was released on January 17, 2024."
            }), _jsx(_components.h4, {
              id: "new-features-12",
              children: "New features"
            }), _jsx(_components.p, {
              children: "This release adds a notification which occurs when it takes too long to start the whiteboard."
            }), _jsx(_components.h4, {
              id: "improvements-15",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release made the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Upgraded the RTM service to v1.5.1."
              }), `
`, _jsx(_components.li, {
                children: "Optimized network connection by enabling RTC and RTM Cloud Proxy configurations."
              }), `
`, _jsx(_components.li, {
                children: "Enhanced the experience of searching for a member student during interaction."
              }), `
`, _jsx(_components.li, {
                children: "Improved the display format of the time span during which a student is in the classroom."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "issues-fixed-16",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Users could join a room before the room was created."
              }), `
`, _jsx(_components.li, {
                children: "The loudspeaker list was incorrectly displayed when a user plugged in or unplugged an external audio device."
              }), `
`, _jsx(_components.li, {
                children: "The AI noise suppression switch was incorrectly displayed."
              }), `
`, _jsx(_components.li, {
                children: "Some words in the user interface of the group discussion were incorrect."
              }), `
`, _jsx(_components.li, {
                children: "Abnormalities occurred when a user left the discussion group."
              }), `
`, _jsx(_components.li, {
                children: "Issues occurred with sound card capturing."
              }), `
`, _jsx(_components.li, {
                children: "The callback was not triggered when the user attribute in a lecture hall was modified."
              }), `
`, _jsx(_components.li, {
                children: "Occasionally, when a student frequently enabled or disabled video from a mobile device, the teacher could not subscribe to the video of the student."
              }), `
`, _jsx(_components.li, {
                children: "Occasionally, the teacher/student could not operate the whiteboard after joining a discussion group."
              }), `
`, _jsx(_components.li, {
                children: "An occasional error occurred when uploading courseware, which lead to failure in displaying the courseware list."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.9.0",
            id: "v290",
            headingLevel: 2,
            value: "v290",
            children: [_jsx(_components.p, {
              children: "v2.9.0 was released on November 22, 2023."
            }), _jsx(_components.h4, {
              id: "new-features-13",
              children: "New features"
            }), _jsx(_components.p, {
              children: "This version adds the following new scenarios:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Online classroom scenarios and the introduction of a new UI style and interactive experience that are closer to the usage habits of educational users. See the following documentation:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "../build/customize-the-ui-and-plugins/customize-ui-scene-sdk.mdx",
                      children: "FcrUIScene SDK"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "/en/api-reference/api-ref/flexible-classroom/ui-scene",
                      children: "API Reference"
                    })
                  }), `
`]
                }), `
`]
              }), `
`]
            }), _jsx(_components.p, {
              children: "One-to-one private chat function. This function does not currently support retrieving historical messages from servers on demand."
            }), _jsx(_components.h4, {
              id: "improvements-16",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release added the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Added support for automatic domain switch to reduce the chance of users not being able to use Flexible Classroom."
              }), `
`, _jsx(_components.li, {
                children: "Optimized the mixing of system audio and RTC so that the media volume is not suppressed by the call volume."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.8.13",
            id: "v2813-1",
            headingLevel: 2,
            value: "v2813-1",
            children: [_jsx(_components.p, {
              children: "v2.8.13 was released on February 20, 2023."
            }), _jsx(_components.p, {
              children: "This version added a Beta icon for the virtual background and beauty options features on the Device Settings page."
            }), _jsx(_components.h4, {
              id: "improvements-17",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release adds support for sharing audio when sharing the screen."
            }), _jsx(_components.h4, {
              id: "issues-fixed-17",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixes the following known issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Issues in the proctoring scenarios."
              }), `
`, _jsx(_components.li, {
                children: "Issues on desktop devices."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "api-changes",
              children: "API changes"
            }), _jsxs(_components.p, {
              children: ["The ", _jsx(_components.code, {
                children: "audioDeviceName"
              }), " and ", _jsx(_components.code, {
                children: "withAudio"
              }), " parameters were added to the ", _jsx(_components.code, {
                children: "startScreenShareCapture"
              }), " method."]
            }), _jsxs(_components.p, {
              children: ["For details, see the ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/flexible-classroom-sdk/web/2.x/classes/_stores_domain_common_media_index_.MediaStore.html#startScreenShareCapture",
                children: "API reference"
              }), "."]
            })]
          }), _jsxs(Accordion, {
            title: "v2.8.0",
            id: "v280-2",
            headingLevel: 2,
            value: "v280-2",
            children: [_jsx(_components.p, {
              children: "v2.8.0 was released on December 12, 2022."
            }), _jsx(_components.h4, {
              id: "new-features-14",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New UI theme"
              })
            }), _jsx(_components.p, {
              children: "v2.8.0 enables you to set the display theme of the classroom UI to light or dark."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New language supported"
              })
            }), _jsx(_components.p, {
              children: "v2.8.0 supports setting the language of the classroom UI to Chinese or English."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Flexible Classroom UI builder"
              })
            }), _jsx(_components.p, {
              children: `Flexible Classroom UI builder is launched to enable you design and customize the UI of your classroom.
The UI builder currently supports the following
Flexible Classroom features:`
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "All features of versions 2.6.x and earlier"
              }), `
`, _jsx(_components.li, {
                children: "Setting the display theme of the classroom UI to light or dark"
              }), `
`, _jsx(_components.li, {
                children: "Setting the language of the classroom UI to Chinese or English"
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Online proctoring scenario"
              })
            }), _jsxs(_components.p, {
              children: ["v2.8.0 provides the Agora Proctor SDK for online exam proctoring scenarios. For details, see the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/flexible-classroom/proctor-sdk",
                children: "Agora Proctor SDK API reference"
              }), "."]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Beauty options, virtual background, noise suppression"
              })
            }), _jsxs(_components.p, {
              children: [`v2.8.0 adds support for substantial new capabilities including video beauty options, virtual backgrounds,
and noise suppression. For details, see the documentation of the `, _jsx(_components.code, {
                children: "webrtcExtensionBaseUrl"
              }), ` field of the
`, _jsx(_components.code, {
                children: "LaunchOption"
              }), " parameter in the Classroom SDK."]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New demo features"
              })
            }), _jsx(_components.p, {
              children: "v2.8.0 adds the following features to the demo:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Signing up, logging in, and deleting the account"
              }), `
`, _jsx(_components.li, {
                children: "A course list page"
              }), `
`, _jsxs(_components.li, {
                children: ["Classroom reports, including the following information:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Course information"
                  }), `
`, _jsx(_components.li, {
                    children: "Course recording"
                  }), `
`, _jsx(_components.li, {
                    children: "Course reports, including tracking student attendance and students interaction"
                  }), `
`]
                }), `
`]
              }), `
`, _jsx(_components.li, {
                children: "Highlighting of speakers"
              }), `
`, _jsx(_components.li, {
                children: "The ability to partially erase the whiteboard"
              }), `
`]
            }), _jsx(_components.h4, {
              id: "improvements-18",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release includes the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Enhanced the UI layer code for developers to customize the classroom UI."
              }), `
`, _jsx(_components.li, {
                children: "Support for the Microsoft Edge browser."
              }), `
`, _jsxs(_components.li, {
                children: ["The following features were improved in the demo:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "The procedures of joining and creating a room. Users can now reserve a room in advance as well."
                  }), `
`, _jsx(_components.li, {
                    children: "The efficiency of converting course materials."
                  }), `
`, _jsx(_components.li, {
                    children: "The compatibility of the whiteboard toolbar with touchscreen devices."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: ["The ", _jsx(_components.code, {
                  children: "agora-edu-core"
                }), " libraries have been enhanced."]
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.6.x",
            id: "v26x-2",
            headingLevel: 2,
            value: "v26x-2",
            children: [_jsx(_components.p, {
              children: "v2.6.x was released on July 29, 2022."
            }), _jsx(_components.h4, {
              id: "new-features-15",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Taking screenshots (Electron only)"
              })
            }), _jsx(_components.p, {
              children: 'v2.6.x adds a snipping tool for Teacher to "take screenshots" of content inside and outside of the classroom, and dynamically add it to the classroom whiteboard. The feature is available in one-to-one classrooms, small classrooms, and lecture halls. This feature is available in the toolbar on Windows and macOS clients. Teachers and teaching assistants can choose to take a screenshot directly or with the current window hidden. The screenshot is displayed in the center of the whiteboard. And Agora provides APIs to expand usage of this feature to include Students and other roles:'
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Web: getSnapshotRgba"
              }), `
`, _jsx(_components.li, {
                children: "Electron: getSnapshot"
              }), `
`, _jsx(_components.li, {
                children: "iOS: getSnapshot"
              }), `
`, _jsx(_components.li, {
                children: "Android: getSnapshot"
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Automatic grouping"
              })
            }), _jsx(_components.p, {
              children: 'For the "breakout rooms" feature, v2.6.x supports automatic grouping. Teachers can set up the number of breakout rooms. Then the system randomly assigns the whole class to breakout rooms.'
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Drag and Drop images from desktop into the classroom whiteboard (Web/Electron)"
              })
            }), _jsx(_components.p, {
              children: "v2.6.x allows teachers or teaching assistants on the PC to drop local images to the whiteboard area and insert the images into the whiteboard."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Dynamic Size, Resize and Place Teacher Video inside the Classroom"
              })
            }), _jsx(_components.p, {
              children: "v2.6.x allows teachers to freely drag and drop their own video and the video of students within the classroom window. Teachers can also resize a video window by double-clicking it. Whatever actions the teacher takes with their video window, students will see."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Hiding the stage area"
              })
            }), _jsx(_components.p, {
              children: "v2.6.x adds a button in the settings of small classrooms, which enables teachers to hide the stage area. After the stage is hidden, the following things occur:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "All videos are disabled."
              }), `
`, _jsx(_components.li, {
                children: "All students automatically steps down from the stage."
              }), `
`, _jsx(_components.li, {
                children: "The whiteboard is scaled up to fit the classroom."
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Saving whiteboard contents as images"
              })
            }), _jsx(_components.p, {
              children: "v2.6.x allows teachers and teaching assistants to save contents on the whiteboard to their local device as JPG images."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Adding web links as courseware"
              })
            }), _jsxs(_components.p, {
              children: ["v2.6.x allows teachers to add web links, such as YouTube links and Google Drive links, in ", _jsx(_components.strong, {
                children: "My Resources"
              }), ". The suffix of such kind of courseware is ", _jsx(_components.code, {
                children: ".alf"
              }), ", which is the abbreviation of agora link file. After the upload succeeds, the teacher can open the courseware in the classroom."]
            }), _jsx(_components.h4, {
              id: "issues-fixed-18",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "(iOS) Crashes occurred when receiving a global announcement."
              }), `
`, _jsx(_components.li, {
                children: "(iOS) In small classrooms, the teacher did not select the brush, but red lines appeared on the whiteboard."
              }), `
`, _jsx(_components.li, {
                children: "(iOS) In small classrooms, the teacher double-clicked the settings, chat, or roster buttons, the color of these buttons did not change."
              }), `
`, _jsx(_components.li, {
                children: "(Android) In small classrooms, after a student joined a sub-room and invited the teacher to join the same sub-room, the teacher entered the wrong sub-room."
              }), `
`, _jsx(_components.li, {
                children: "(All) In small classrooms, before any student joined the classroom, the teacher started and ended the breakout room session. Then after a student joined the classroom, when the teacher re-started the breakout room session, the 500 error occurred."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.4.x",
            id: "v24x-2",
            headingLevel: 2,
            value: "v24x-2",
            children: [_jsx(_components.p, {
              children: "v2.4.x was released on June 2, 2022."
            }), _jsx(_components.h4, {
              id: "new-features-16",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Breakout rooms (Web only)"
              })
            }), _jsx(_components.p, {
              children: 'v2.4.x adds the "Breakout rooms" feature in the toolbox of small classrooms. With breakout rooms, students can get together in small groups for discussion and brainstorming sessions. The teacher manually assigns students to each breakout room. A class supports up to 20 breakout rooms with a maximum of 17 members in each room. The features that are available in breakout rooms include real-time audio and video interaction, messaging, whiteboarding, and screen sharing.'
            }), _jsx(_components.p, {
              children: "After the breakout session begins, the teacher and teaching assistants have the ability to dynamically join or leave any of the breakout rooms. They can also send announcements to all the breakout rooms. Students are notified in their chat to check for the announcements."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for the teacher role on Android and iOS clients"
              })
            }), _jsx(_components.p, {
              children: "v2.4.x duplicates the features of the teacher role on desktop experience for Web, macOS, and Windows on mobile clients (Android and iOS)."
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsxs(CalloutDescription, {
                children: [_jsx(_components.p, {
                  children: "Note that the following features are temporarily not available for the teacher role on mobile clients:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Enabling screen sharing"
                  }), `
`, _jsx(_components.li, {
                    children: "Starting pop-up quizzes"
                  }), `
`, _jsx(_components.li, {
                    children: "Starting polls"
                  }), `
`, _jsx(_components.li, {
                    children: "Starting the countdown timer"
                  }), `
`]
                })]
              })
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Ability to turn the whiteboard on and off in the classroom"
              })
            }), _jsx(_components.p, {
              children: "v2.4.x adds the ability to turn the whiteboard on or off in one-on-one classrooms, small classrooms, and lecture halls. By default, after the whiteboard is turned off, the teacher's video is displayed in the whiteboard area. Developers are also able to use UIStore or UIKit to customize the classroom layout when the whiteboard is off."
            }), _jsx(_components.h4, {
              id: "improvements-19",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release includes the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Optimizes widgets: v2.4.x optimizes the internal technical architecture of the three widgets: Pop-up Quiz, Poll, and Countdown Timer for the higher stability and better end-user experience. In addition, v2.4.x enables developers to get the data of pop-up quizzes and polls through RESTful APIs. For details, see the ", _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api",
                  children: "RESTful API reference"
                }), "."]
              }), `
`, _jsx(_components.li, {
                children: "Improves the compatibility of the Web client: The Web client is now supported on the desktop version of Firefox."
              }), `
`, _jsx(_components.li, {
                children: "Optimizes the cloud storage: v2.4.x optimizes the business logic and UI of the cloud storage feature in Flexible Classroom."
              }), `
`, _jsx(_components.li, {
                children: "Optimizes the whiteboard: v2.4.x adds laser pointer, undo, redo, and one-click screen-clearing features on the whiteboard in Flexible Classroom."
              }), `
`, _jsx(_components.li, {
                children: "Reward enhancements: The teacher can now extend and remove student rewards dynamically during a class session."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "issues-fixed-19",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "When the teacher moved a file or a tool on the whiteboard, the movement might not be synchronized on the students' side."
              }), `
`, _jsx(_components.li, {
                children: "Logging in to the IM module occasionally failed."
              }), `
`, _jsx(_components.li, {
                children: "Loading a file failed when the format of the file was not supported."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.1.0",
            id: "v210-1",
            headingLevel: 2,
            value: "v210-1",
            children: [_jsx(_components.p, {
              children: "v2.1.0 was released on February 23, 2022."
            }), _jsx(_components.h4, {
              id: "release-highlights-2",
              children: "Release highlights"
            }), _jsx(_components.p, {
              children: "In v2.1.0, Agora fully optimizes the internal architecture of Flexible Classroom. Compared to earlier versions, v2.1.0 has the following advantages:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "New features:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Answer Selector (Pop-up Quiz), Polling Feature, Countdown Timer, Mobile HTML5 Support, and ability to turn the whiteboard on or off in the classroom."
                  }), `
`, _jsx(_components.li, {
                    children: "Video Gallery Rotation: Ability for teachers to configure the classroom setting to automatically rotate the on-stage student gallery view without attempting to scroll or page through the class participants."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Lecture Hall: Expands audience capacity up to 5,000 students, from 1,000 in the last version."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Web client:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Adds support for Safari on desktop and iPad, as well as for Chrome on the iPad."
                  }), `
`, _jsx(_components.li, {
                    children: "Introduces EDUClassroomUIStore for customizing the classroom UI, which replaces the UIKit in previous versions."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Android and iOS clients:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "Redesigns contexts for better abstraction of modular features in Flexible Classroom, where each context can be controlled separately."
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "Refactors context APIs with the following improvements:"
                    }), `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "Renamed APIs and parameters for intuitiveness, understandability, and consistency."
                      }), `
`, _jsx(_components.li, {
                        children: "Improved flexibility of API calling."
                      }), `
`, _jsx(_components.li, {
                        children: "More APIs for developers to customize their own features."
                      }), `
`]
                    }), `
`]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), _jsx(_components.h4, {
              id: "flexible-classroom-v210-migration-guidance-2",
              children: "Flexible Classroom v2.1.0 migration guidance"
            }), _jsx(_components.p, {
              children: "If you have made changes to your Flexible Classroom UI in earlier versions, in order to migrate to v2.1.0, Agora recommends you create a new project based on v2.1.0 and re-implement the UI changes. Please refer to the following Flexible Classroom v2.1.0 migration guides:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/realtime-media/flexible-classroom/reference/migration-guide",
                  children: "migration guide"
                })
              }), `
`]
            }), _jsxs(_components.p, {
              children: ["If you encounter any problem during the migration process, or need to migrate from Flexible Classroom earlier than v1.1.5, please contact ", _jsx(_components.a, {
                href: "mailto:support@agora.io",
                children: "support@agora.io"
              }), " so that Agora technical support team can help."]
            }), _jsx(_components.h4, {
              id: "new-features-17",
              children: "New Features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Answer selector and polling feature"
              })
            }), _jsx(_components.p, {
              children: "To increase engagement and enhance interactivity, v2.1.0 adds the following teaching tools:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Answer selector: This tool is applicable to scenarios where the teacher asks a single-choice or multiple-choice question and requests the whole class to answer the question together. The teacher can set up the choices and the correct answer, and then trigger answering. The teacher can see the number of students who have submitted an answer and the percentage that are correct in real time."
              }), `
`, _jsx(_components.li, {
                children: "Polling: This tool is applicable to scenarios where the teacher wants to get feedback from the whole class. The teacher can set up the subject, choices, and start and end time of the poll. Flexible Classroom also provides live visualization of polling results."
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Ability to turn the whiteboard on or off in the classroom"
              })
            }), _jsx(_components.p, {
              children: "As of v2.1.0, Agora supports turning the whiteboard on or off in the classroom. For details, see Turn the Whiteboard on or off in the Classroom. When using the APIs for this feature, after the whiteboard is closed, developers can use Flexible Classroom UIKit or UIStore to customize their unique classroom with their desired video gallery to fill the classroom window."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Video gallery rotation"
              })
            }), _jsx(_components.p, {
              children: "Flexible Classroom gives teachers the ability to configure the classroom settings for improved student engagement and video. The Video Gallery Rotation feature lets the teacher automatically rotate the on-stage student gallery view at a desired frequency and sequence, thus eliminating the need for the teacher to scroll or page through the class participants."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Mobile HTML5 support"
              })
            }), _jsx(_components.p, {
              children: "As of v2.1.0, students can join a lecture hall in Flexible Classroom simply by clicking on a shared webpage link within some mobile social applications that use a web view. After joining the classroom on mobile devices, students can do the following things:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: `Watch and hear the teacher's lecture, as well as presentations by students "on the stage".`
              }), `
`, _jsx(_components.li, {
                children: "View the whiteboard and the screen shared by the teacher."
              }), `
`, _jsx(_components.li, {
                children: "Send messages to chat with other participants in the classroom."
              }), `
`, _jsx(_components.li, {
                children: "Engage in class activities such as polling, answering, and viewing the teacher's count down clock."
              }), `
`]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsxs(CalloutDescription, {
                children: [_jsxs(_components.p, {
                  children: ["ℹ️ ", _jsx(_components.strong, {
                    children: "Info"
                  }), `
Please note that the following features are not supported on HTML5:`]
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: 'Students raising their hands to apply for speaking on the "stage".'
                  }), `
`, _jsx(_components.li, {
                    children: "Students drawing on the whiteboard."
                  }), `
`, _jsx(_components.li, {
                    children: "Students testing or switching their local media devices."
                  }), `
`]
                })]
              })
            }), _jsx(_components.h4, {
              id: "improvements-20",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "v2.1.0 makes the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: 'Optimizes the business logic and UI of various features in Flexible Classroom, such as students "raising their hands" for permission to speak, the class roster, and in-class reminders.'
              }), `
`, _jsx(_components.li, {
                children: "Increases the upper limit on the number of users in a lecture hall to 5,000."
              }), `
`, _jsx(_components.li, {
                children: "Improves the compatibility of the Web client. The Web client is now supported on Safari for the desktop and iPad, as well as on Chrome for the iPad."
              }), `
`, _jsx(_components.li, {
                children: "Supports displaying thumbnails and animations for the PPT files opened in the classroom."
              }), `
`, _jsx(_components.li, {
                children: "When a classroom is being recorded, the recording button changes to red."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "issues-fixed-20",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "v2.1.0 fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "(All platforms) The RTC SDK and whiteboard usage occurred in Flexible Classroom was not showed in Agora Console."
              }), `
`, _jsx(_components.li, {
                children: "(Web) Occasional failure to record the whiteboard contents in a small classroom."
              }), `
`, _jsx(_components.li, {
                children: "(Web) Occasional failure to send a massage in a small classroom."
              }), `
`, _jsx(_components.li, {
                children: "(Web) After the teacher joined a lecture hall, there was a possibility that the whiteboard was not loaded successfully."
              }), `
`, _jsx(_components.li, {
                children: '(Web/Windows/macOS) Sometimes in a lecture hall, a student "raised a hand" to apply for making a presentation, an error occurred. And the teacher did not receive the application.'
              }), `
`, _jsx(_components.li, {
                children: `(Web/Windows/macOS) In a small classroom, a student went onto the "stage" and turned on the video. After the student left the room, the student's video did not disappear immediately.`
              }), `
`, _jsx(_components.li, {
                children: "(Windows) When a student left and rejoined the room, the student could not see the room announcement published by the teacher."
              }), `
`, _jsx(_components.li, {
                children: "(Windows) In a one-to-one classroom, the student's video occasionally went black."
              }), `
`, _jsx(_components.li, {
                children: "(iOS) When the teacher displayed a PPT that contained audio and video, the student on iOS sometimes neither heard the audio nor saw the video."
              }), `
`, _jsx(_components.li, {
                children: "(Android) In a small classroom, sometimes if a student on Android left and rejoined the room, the student could not see the teacher's video."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.5",
            id: "v115-1",
            headingLevel: 2,
            value: "v115-1",
            children: [_jsx(_components.p, {
              children: "v1.1.5 was released on October 20, 2021."
            }), _jsx(_components.h4, {
              id: "compatibility-changes-1",
              children: "Compatibility changes"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Making open-source libraries into closed-source ones"
              })
            }), _jsxs(_components.p, {
              children: ["As of v1.1.5, the ", _jsx(_components.code, {
                children: "agora-edu-core"
              }), " and ", _jsx(_components.code, {
                children: "agora-rte-sdk"
              }), " libraries in Flexible Classroom are closed-source. Agora moves the implementation of ", _jsx(_components.code, {
                children: "AgoraEduCore.launch"
              }), " into ", _jsx(_components.code, {
                children: "agora-edu-core"
              }), ", so developers can no longer make changes to it. For the parameters in ", _jsx(_components.code, {
                children: "launchOption"
              }), ", see the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/flexible-classroom/classroom-sdk",
                children: "API reference"
              }), "."]
            }), _jsx(_components.h4, {
              id: "new-features-18",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for customizing the video encoding configurations"
              })
            }), _jsxs(_components.p, {
              children: ["As of v1.1.5, developers can customize the video encoding configurations, including the width, height, frame rate, and bitrate. When calling the ", _jsx(_components.code, {
                children: "launch"
              }), " method, developers can set the ", _jsx(_components.code, {
                children: "cameraEncoderConfiguration"
              }), " and ", _jsx(_components.code, {
                children: "screenShareEncoderConfiguration"
              }), " parameters in ", _jsx(_components.code, {
                children: "mediaOptions"
              }), " to customize the encoding configurations for the video stream captured by a camera or the screen-sharing video stream."]
            }), _jsx(_components.p, {
              children: "The recommended video encoding configurations are as follows:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "One-to-one Classroom: 320x240, 200 Kbps, and 15 fps."
              }), `
`, _jsx(_components.li, {
                children: "Small Classroom and Lecture Hall: 160x120, 65 Kbps, and 15 fps, if the number of students in a classroom who send their video stream at the same time is less than or equal to six."
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: 'Students automatically going onto the "stage"'
              })
            }), _jsx(_components.p, {
              children: 'v1.1.5 adds the feature of students automatically going onto the "stage" in the Small Classroom scenario. Once the teacher or TA enables this feature, students go onto the "stage" at specified intervals.'
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Image enhancement (Electron)"
              })
            }), _jsx(_components.p, {
              children: "v1.1.5 adds a basic image enhancement feature, allowing users to adjust the contrast, brightness, smoothness, and red saturation of an image."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "The countdown timer"
              })
            }), _jsx(_components.p, {
              children: "v1.1.5 adds a countdown timer in Flexible Classroom. The teacher can find the countdown time in the toolbox and set an initial value. After the teacher clicks the start button, students see a countdown window."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Teachers making notes on their shared screen"
              })
            }), _jsx(_components.p, {
              children: "As of v1.1.5, teachers can make notes on the screen that they share with the basic whiteboard tools."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for custom user properties and classroom properties (Web/Electron/Android/iOS)"
              })
            }), _jsx(_components.p, {
              children: "As of v1.1.15, developers can customize properties for users and classrooms. These properties can be updated, and the updates can be monitored. For example, developers can set the profile photo as a custom user property. To support this feature, Agora makes the following changes to the Agora Edu Context:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Classroom properties:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Add the ", _jsx(_components.code, {
                      children: "updateFlexRoomProperties"
                    }), " method in ", _jsx(_components.code, {
                      children: "RoomContext"
                    }), " for adding or updating custom classroom properties."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["Add the ", _jsx(_components.code, {
                      children: "flexRoomProperties"
                    }), " property in ", _jsx(_components.code, {
                      children: "RoomContext"
                    }), " for indicating the classroom property changes."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: ["User properties: Add the ", _jsx(_components.code, {
                  children: "userFlexProperties"
                }), " parameter in ", _jsx(_components.code, {
                  children: "LaunchOption"
                }), " for passing in custom user properties when launching a classroom."]
              }), `
`]
            }), _jsx(_components.h4, {
              id: "improvements-21",
              children: "Improvements"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "As of v1.1.5, Flexible Classroom supports displaying HTML5 courseware on the whiteboard."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "issues-fixed-21",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "v1.1.5 fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "In the middle of a class, if the app was reloaded, Flexible Classroom failed to keep the chat history."
              }), `
`, _jsx(_components.li, {
                children: "In the middle of a class, when file uploading or conversion failed, Flexible Classroom did not trigger a pop-up window to indicate the failure."
              }), `
`, _jsx(_components.li, {
                children: "When the region is set to NA, users failed to play the MP4 files in Flexible Classroom."
              }), `
`, _jsx(_components.li, {
                children: "When downloading files in Flexible Classroom, the progress bar got stuck at 0%."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.0.1",
            id: "v1101-2",
            headingLevel: 2,
            value: "v1101-2",
            children: [_jsx(_components.p, {
              children: "v1.1.0.1 was released on July 7, 2021."
            }), _jsx(_components.h4, {
              id: "new-features-19",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Media encryption"
              })
            }), _jsxs(_components.p, {
              children: ["To ensure the security during real-time audio and video transmission, v1.1.0.1 adds the ", _jsx(_components.code, {
                children: "mediaOptions"
              }), " parameter in ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/flexible-classroom/classroom-sdk",
                children: _jsx(_components.code, {
                  children: "LaunchOption"
                })
              }), " for supporting media stream encryption. By default, Flexible Classroom does not encrypt the media stream. To enable media encryption, use the ", _jsx(_components.code, {
                children: "mediaOptions"
              }), " parameter to choose an encryption mode and set the encryption key. Flexible Classroom supports the following encryption modes:"]
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AES_128_XTS"
                }), ": 128-bit AES encryption, XTS mode."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AES_128_ECB"
                }), ": 128-bit AES encryption, ECB mode."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AES_256_XTS"
                }), ": 256-bit AES encryption, XTS mode."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AES_128_GCM"
                }), ": 128-bit AES encryption, GCM mode."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AES_256_GCM"
                }), ": 256-bit AES encryption, GCM mode."]
              }), `
`]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsx(_components.p, {
                  children: "The teacher and students in a classroom must use the same encryption mode and key. If not, unexpected issues, such as a white or black screen and noise, may occur."
                })
              })
            }), _jsx(_components.h4, {
              id: "issues-fixed-22",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "v1.1.0.1 fixes the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "The default region was not NA (North America)."
              }), `
`, _jsx(_components.li, {
                children: "When the user set the UI language as English, users saw some Chinese characters on the screen sharing window."
              }), `
`, _jsx(_components.li, {
                children: "When the teacher started screen sharing, students saw a black screen."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.0",
            id: "v110-2",
            headingLevel: 2,
            value: "v110-2",
            children: [_jsx(_components.p, {
              children: "v1.1.0 was released on June 18, 2021. This is the first release of Agora Flexible Classroom with the following features:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Real-time audio and video interaction"
              }), `
`, _jsx(_components.li, {
                children: "Signaling"
              }), `
`, _jsx(_components.li, {
                children: "Interactive whiteboard"
              }), `
`, _jsx(_components.li, {
                children: "Screen sharing"
              }), `
`, _jsx(_components.li, {
                children: "Recording and replay"
              }), `
`, _jsx(_components.li, {
                children: "Teaching tools, including cloud storage, classroom rewards, and the user list"
              }), `
`, _jsx(_components.li, {
                children: "Customizing the classroom user interfaces and embedding custom plugins in classrooms"
              }), `
`, _jsx(_components.li, {
                children: "Flexible Classroom cloud service for classroom and user management"
              }), `
`]
            })]
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "electron",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "electron"
        }), _jsx(_components.h2, {
          id: "electron",
          children: "Electron"
        }), _jsxs(Accordions, {
          type: "multiple",
          openFirst: true,
          children: [_jsxs(Accordion, {
            title: "v2.9.40",
            id: "v2940-1",
            headingLevel: 2,
            value: "v2940-1",
            children: [_jsx(_components.p, {
              children: "v2.9.40 was released on March 6, 2024."
            }), _jsx(_components.h4, {
              id: "improvements-22",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release adds the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Optimizes the logic of audio device selection after plugging and unplugging an external audio device."
              }), `
`, _jsx(_components.li, {
                children: "Supports adjusting video profile during class."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "issues-fixed-23",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixes the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "The on-stage state became inaccurate after students in a lecture hall joined and left the class."
              }), `
`, _jsx(_components.li, {
                children: "The video window occasionally went black during live streaming on the H5 browser."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.9.20",
            id: "v2920-1",
            headingLevel: 2,
            value: "v2920-1",
            children: [_jsx(_components.p, {
              children: "v2.9.20 was released on January 17, 2024."
            }), _jsx(_components.h4, {
              id: "new-features-20",
              children: "New features"
            }), _jsx(_components.p, {
              children: "This release adds a notification which occurs when it takes too long to start the whiteboard."
            }), _jsx(_components.h4, {
              id: "improvements-23",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release made the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Upgraded the RTM service to v1.5.1."
              }), `
`, _jsx(_components.li, {
                children: "Optimized network connection by enabling RTC and RTM Cloud Proxy configurations."
              }), `
`, _jsx(_components.li, {
                children: "Enhanced the experience of searching for a member student during interaction."
              }), `
`, _jsx(_components.li, {
                children: "Improved the display format of the time span during which a student is in the classroom."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "issues-fixed-24",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Users could join a room before the room was created."
              }), `
`, _jsx(_components.li, {
                children: "The loudspeaker list was incorrectly displayed when a user plugged in or unplugged an external audio device."
              }), `
`, _jsx(_components.li, {
                children: "The AI noise suppression switch was incorrectly displayed."
              }), `
`, _jsx(_components.li, {
                children: "Some words in the user interface of the group discussion were incorrect."
              }), `
`, _jsx(_components.li, {
                children: "Abnormalities occurred when a user left the discussion group."
              }), `
`, _jsx(_components.li, {
                children: "Issues occurred with sound card capturing."
              }), `
`, _jsx(_components.li, {
                children: "The callback was not triggered when the user attribute in a lecture hall was modified."
              }), `
`, _jsx(_components.li, {
                children: "Occasionally, when a student frequently enabled or disabled video from a mobile device, the teacher could not subscribe to the video of the student."
              }), `
`, _jsx(_components.li, {
                children: "Occasionally, the teacher/student could not operate the whiteboard after joining a discussion group."
              }), `
`, _jsx(_components.li, {
                children: "An occasional error occurred when uploading courseware, which lead to failure in displaying the courseware list."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.9.0",
            id: "v290-1",
            headingLevel: 2,
            value: "v290-1",
            children: [_jsx(_components.p, {
              children: "v2.9.0 was released on November 22, 2023."
            }), _jsx(_components.h4, {
              id: "new-features-21",
              children: "New features"
            }), _jsx(_components.p, {
              children: "This version adds the following new scenarios:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Online classroom scenarios and the introduction of a new UI style and interactive experience that are closer to the usage habits of educational users. See the following documentation:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "../build/customize-the-ui-and-plugins/customize-ui-scene-sdk.mdx",
                      children: "FcrUIScene SDK"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "/en/api-reference/api-ref/flexible-classroom/ui-scene",
                      children: "API Reference"
                    })
                  }), `
`]
                }), `
`]
              }), `
`]
            }), _jsx(_components.p, {
              children: "One-to-one private chat function. This function does not currently support retrieving historical messages from servers on demand."
            }), _jsx(_components.h4, {
              id: "improvements-24",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release added the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Added support for automatic domain switch to reduce the chance of users not being able to use Flexible Classroom."
              }), `
`, _jsx(_components.li, {
                children: "Optimized the mixing of system audio and RTC so that the media volume is not suppressed by the call volume."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.8.13",
            id: "v2813-2",
            headingLevel: 2,
            value: "v2813-2",
            children: [_jsx(_components.p, {
              children: "v2.8.13 was released on February 20, 2023."
            }), _jsx(_components.p, {
              children: "This version added a Beta icon for the virtual background and beauty options features on the Device Settings page."
            }), _jsx(_components.h4, {
              id: "improvements-25",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release adds support for sharing audio when sharing the screen."
            }), _jsx(_components.h4, {
              id: "issues-fixed-25",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixes the following known issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Issues in the proctoring scenarios."
              }), `
`, _jsx(_components.li, {
                children: "Issues on desktop devices."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "api-changes-1",
              children: "API changes"
            }), _jsxs(_components.p, {
              children: ["The ", _jsx(_components.code, {
                children: "audioDeviceName"
              }), " and ", _jsx(_components.code, {
                children: "withAudio"
              }), " parameters were added to the ", _jsx(_components.code, {
                children: "startScreenShareCapture"
              }), " method."]
            }), _jsxs(_components.p, {
              children: ["For details, see the ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/flexible-classroom-sdk/web/2.x/classes/_stores_domain_common_media_index_.MediaStore.html#startScreenShareCapture",
                children: "API reference"
              }), "."]
            })]
          }), _jsxs(Accordion, {
            title: "v2.8.0",
            id: "v280-3",
            headingLevel: 2,
            value: "v280-3",
            children: [_jsx(_components.p, {
              children: "v2.8.0 was released on December 12, 2022."
            }), _jsx(_components.h4, {
              id: "new-features-22",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New UI theme"
              })
            }), _jsx(_components.p, {
              children: "v2.8.0 enables you to set the display theme of the classroom UI to light or dark."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New language supported"
              })
            }), _jsx(_components.p, {
              children: "v2.8.0 supports setting the language of the classroom UI to Chinese or English."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Flexible Classroom UI builder"
              })
            }), _jsx(_components.p, {
              children: `Flexible Classroom UI builder is launched to enable you design and customize the UI of your classroom.
The UI builder currently supports the following
Flexible Classroom features:`
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "All features of versions 2.6.x and earlier"
              }), `
`, _jsx(_components.li, {
                children: "Setting the display theme of the classroom UI to light or dark"
              }), `
`, _jsx(_components.li, {
                children: "Setting the language of the classroom UI to Chinese or English"
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Online proctoring scenario"
              })
            }), _jsxs(_components.p, {
              children: ["v2.8.0 provides the Agora Proctor SDK for online exam proctoring scenarios. For details, see the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/flexible-classroom/proctor-sdk",
                children: "Agora Proctor SDK API reference"
              }), "."]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Beauty options, virtual background, noise suppression"
              })
            }), _jsxs(_components.p, {
              children: [`v2.8.0 adds support for substantial new capabilities including video beauty options, virtual backgrounds,
and noise suppression. For details, see the documentation of the `, _jsx(_components.code, {
                children: "webrtcExtensionBaseUrl"
              }), ` field of the
`, _jsx(_components.code, {
                children: "LaunchOption"
              }), " parameter in the Classroom SDK."]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New demo features"
              })
            }), _jsx(_components.p, {
              children: "v2.8.0 adds the following features to the demo:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Signing up, logging in, and deleting the account"
              }), `
`, _jsx(_components.li, {
                children: "A course list page"
              }), `
`, _jsxs(_components.li, {
                children: ["Classroom reports, including the following information:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Course information"
                  }), `
`, _jsx(_components.li, {
                    children: "Course recording"
                  }), `
`, _jsx(_components.li, {
                    children: "Course reports, including tracking student attendance and students interaction"
                  }), `
`]
                }), `
`]
              }), `
`, _jsx(_components.li, {
                children: "Highlighting of speakers"
              }), `
`, _jsx(_components.li, {
                children: "The ability to partially erase the whiteboard"
              }), `
`]
            }), _jsx(_components.h4, {
              id: "improvements-26",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release includes the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Enhanced the UI layer code for developers to customize the classroom UI."
              }), `
`, _jsx(_components.li, {
                children: "Support for the Microsoft Edge browser."
              }), `
`, _jsxs(_components.li, {
                children: ["The following features were improved in the demo:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "The procedures of joining and creating a room. Users can now reserve a room in advance as well."
                  }), `
`, _jsx(_components.li, {
                    children: "The efficiency of converting course materials."
                  }), `
`, _jsx(_components.li, {
                    children: "The compatibility of the whiteboard toolbar with touchscreen devices."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: ["The ", _jsx(_components.code, {
                  children: "agora-edu-core"
                }), " libraries have been enhanced."]
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.6.x",
            id: "v26x-3",
            headingLevel: 2,
            value: "v26x-3",
            children: [_jsx(_components.p, {
              children: "v2.6.x was released on July 29, 2022."
            }), _jsx(_components.h4, {
              id: "new-features-23",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Taking screenshots (Electron only)"
              })
            }), _jsx(_components.p, {
              children: 'v2.6.x adds a snipping tool for Teacher to "take screenshots" of content inside and outside of the classroom, and dynamically add it to the classroom whiteboard. The feature is available in one-to-one classrooms, small classrooms, and lecture halls. This feature is available in the toolbar on Windows and macOS clients. Teachers and teaching assistants can choose to take a screenshot directly or with the current window hidden. The screenshot is displayed in the center of the whiteboard. And Agora provides APIs to expand usage of this feature to include Students and other roles:'
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Web: getSnapshotRgba"
              }), `
`, _jsx(_components.li, {
                children: "Electron: getSnapshot"
              }), `
`, _jsx(_components.li, {
                children: "iOS: getSnapshot"
              }), `
`, _jsx(_components.li, {
                children: "Android: getSnapshot"
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Automatic grouping"
              })
            }), _jsx(_components.p, {
              children: 'For the "breakout rooms" feature, v2.6.x supports automatic grouping. Teachers can set up the number of breakout rooms. Then the system randomly assigns the whole class to breakout rooms.'
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Drag and Drop images from desktop into the classroom whiteboard (Web/Electron)"
              })
            }), _jsx(_components.p, {
              children: "v2.6.x allows teachers or teaching assistants on the PC to drop local images to the whiteboard area and insert the images into the whiteboard."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Dynamic Size, Resize and Place Teacher Video inside the Classroom"
              })
            }), _jsx(_components.p, {
              children: "v2.6.x allows teachers to freely drag and drop their own video and the video of students within the classroom window. Teachers can also resize a video window by double-clicking it. Whatever actions the teacher takes with their video window, students will see."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Hiding the stage area"
              })
            }), _jsx(_components.p, {
              children: "v2.6.x adds a button in the settings of small classrooms, which enables teachers to hide the stage area. After the stage is hidden, the following things occur:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "All videos are disabled."
              }), `
`, _jsx(_components.li, {
                children: "All students automatically steps down from the stage."
              }), `
`, _jsx(_components.li, {
                children: "The whiteboard is scaled up to fit the classroom."
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Saving whiteboard contents as images"
              })
            }), _jsx(_components.p, {
              children: "v2.6.x allows teachers and teaching assistants to save contents on the whiteboard to their local device as JPG images."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Adding web links as courseware"
              })
            }), _jsxs(_components.p, {
              children: ["v2.6.x allows teachers to add web links, such as YouTube links and Google Drive links, in ", _jsx(_components.strong, {
                children: "My Resources"
              }), ". The suffix of such kind of courseware is ", _jsx(_components.code, {
                children: ".alf"
              }), ", which is the abbreviation of agora link file. After the upload succeeds, the teacher can open the courseware in the classroom."]
            }), _jsx(_components.h4, {
              id: "issues-fixed-26",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "(iOS) Crashes occurred when receiving a global announcement."
              }), `
`, _jsx(_components.li, {
                children: "(iOS) In small classrooms, the teacher did not select the brush, but red lines appeared on the whiteboard."
              }), `
`, _jsx(_components.li, {
                children: "(iOS) In small classrooms, the teacher double-clicked the settings, chat, or roster buttons, the color of these buttons did not change."
              }), `
`, _jsx(_components.li, {
                children: "(Android) In small classrooms, after a student joined a sub-room and invited the teacher to join the same sub-room, the teacher entered the wrong sub-room."
              }), `
`, _jsx(_components.li, {
                children: "(All) In small classrooms, before any student joined the classroom, the teacher started and ended the breakout room session. Then after a student joined the classroom, when the teacher re-started the breakout room session, the 500 error occurred."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.4.x",
            id: "v24x-3",
            headingLevel: 2,
            value: "v24x-3",
            children: [_jsx(_components.p, {
              children: "v2.4.x was released on June 2, 2022."
            }), _jsx(_components.h4, {
              id: "new-features-24",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Breakout rooms (Web only)"
              })
            }), _jsx(_components.p, {
              children: 'v2.4.x adds the "Breakout rooms" feature in the toolbox of small classrooms. With breakout rooms, students can get together in small groups for discussion and brainstorming sessions. The teacher manually assigns students to each breakout room. A class supports up to 20 breakout rooms with a maximum of 17 members in each room. The features that are available in breakout rooms include real-time audio and video interaction, messaging, whiteboarding, and screen sharing.'
            }), _jsx(_components.p, {
              children: "After the breakout session begins, the teacher and teaching assistants have the ability to dynamically join or leave any of the breakout rooms. They can also send announcements to all the breakout rooms. Students are notified in their chat to check for the announcements."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for the teacher role on Android and iOS clients"
              })
            }), _jsx(_components.p, {
              children: "v2.4.x duplicates the features of the teacher role on desktop experience for Web, macOS, and Windows on mobile clients (Android and iOS)."
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsxs(CalloutDescription, {
                children: [_jsx(_components.p, {
                  children: "Note that the following features are temporarily not available for the teacher role on mobile clients:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Enabling screen sharing"
                  }), `
`, _jsx(_components.li, {
                    children: "Starting pop-up quizzes"
                  }), `
`, _jsx(_components.li, {
                    children: "Starting polls"
                  }), `
`, _jsx(_components.li, {
                    children: "Starting the countdown timer"
                  }), `
`]
                })]
              })
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Ability to turn the whiteboard on and off in the classroom"
              })
            }), _jsx(_components.p, {
              children: "v2.4.x adds the ability to turn the whiteboard on or off in one-on-one classrooms, small classrooms, and lecture halls. By default, after the whiteboard is turned off, the teacher's video is displayed in the whiteboard area. Developers are also able to use UIStore or UIKit to customize the classroom layout when the whiteboard is off."
            }), _jsx(_components.h4, {
              id: "improvements-27",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "This release includes the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Optimizes widgets: v2.4.x optimizes the internal technical architecture of the three widgets: Pop-up Quiz, Poll, and Countdown Timer for the higher stability and better end-user experience. In addition, v2.4.x enables developers to get the data of pop-up quizzes and polls through RESTful APIs. For details, see the ", _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api",
                  children: "RESTful API reference"
                }), "."]
              }), `
`, _jsx(_components.li, {
                children: "Improves the compatibility of the Web client: The Web client is now supported on the desktop version of Firefox."
              }), `
`, _jsx(_components.li, {
                children: "Optimizes the cloud storage: v2.4.x optimizes the business logic and UI of the cloud storage feature in Flexible Classroom."
              }), `
`, _jsx(_components.li, {
                children: "Optimizes the whiteboard: v2.4.x adds laser pointer, undo, redo, and one-click screen-clearing features on the whiteboard in Flexible Classroom."
              }), `
`, _jsx(_components.li, {
                children: "Reward enhancements: The teacher can now extend and remove student rewards dynamically during a class session."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "issues-fixed-27",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "This release fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "When the teacher moved a file or a tool on the whiteboard, the movement might not be synchronized on the students' side."
              }), `
`, _jsx(_components.li, {
                children: "Logging in to the IM module occasionally failed."
              }), `
`, _jsx(_components.li, {
                children: "Loading a file failed when the format of the file was not supported."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v2.1.0",
            id: "v210-2",
            headingLevel: 2,
            value: "v210-2",
            children: [_jsx(_components.p, {
              children: "v2.1.0 was released on February 23, 2022."
            }), _jsx(_components.h4, {
              id: "release-highlights-3",
              children: "Release highlights"
            }), _jsx(_components.p, {
              children: "In v2.1.0, Agora fully optimizes the internal architecture of Flexible Classroom. Compared to earlier versions, v2.1.0 has the following advantages:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "New features:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Answer Selector (Pop-up Quiz), Polling Feature, Countdown Timer, Mobile HTML5 Support, and ability to turn the whiteboard on or off in the classroom."
                  }), `
`, _jsx(_components.li, {
                    children: "Video Gallery Rotation: Ability for teachers to configure the classroom setting to automatically rotate the on-stage student gallery view without attempting to scroll or page through the class participants."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Lecture Hall: Expands audience capacity up to 5,000 students, from 1,000 in the last version."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Web client:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Adds support for Safari on desktop and iPad, as well as for Chrome on the iPad."
                  }), `
`, _jsx(_components.li, {
                    children: "Introduces EDUClassroomUIStore for customizing the classroom UI, which replaces the UIKit in previous versions."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Android and iOS clients:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "Redesigns contexts for better abstraction of modular features in Flexible Classroom, where each context can be controlled separately."
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "Refactors context APIs with the following improvements:"
                    }), `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "Renamed APIs and parameters for intuitiveness, understandability, and consistency."
                      }), `
`, _jsx(_components.li, {
                        children: "Improved flexibility of API calling."
                      }), `
`, _jsx(_components.li, {
                        children: "More APIs for developers to customize their own features."
                      }), `
`]
                    }), `
`]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), _jsx(_components.h4, {
              id: "flexible-classroom-v210-migration-guidance-3",
              children: "Flexible Classroom v2.1.0 migration guidance"
            }), _jsx(_components.p, {
              children: "If you have made changes to your Flexible Classroom UI in earlier versions, in order to migrate to v2.1.0, Agora recommends you create a new project based on v2.1.0 and re-implement the UI changes. Please refer to the following Flexible Classroom v2.1.0 migration guides:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/realtime-media/flexible-classroom/reference/migration-guide",
                  children: "migration guide"
                })
              }), `
`]
            }), _jsxs(_components.p, {
              children: ["If you encounter any problem during the migration process, or need to migrate from Flexible Classroom earlier than v1.1.5, please contact ", _jsx(_components.a, {
                href: "mailto:support@agora.io",
                children: "support@agora.io"
              }), " so that Agora technical support team can help."]
            }), _jsx(_components.h4, {
              id: "new-features-25",
              children: "New Features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Answer selector and polling feature"
              })
            }), _jsx(_components.p, {
              children: "To increase engagement and enhance interactivity, v2.1.0 adds the following teaching tools:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Answer selector: This tool is applicable to scenarios where the teacher asks a single-choice or multiple-choice question and requests the whole class to answer the question together. The teacher can set up the choices and the correct answer, and then trigger answering. The teacher can see the number of students who have submitted an answer and the percentage that are correct in real time."
              }), `
`, _jsx(_components.li, {
                children: "Polling: This tool is applicable to scenarios where the teacher wants to get feedback from the whole class. The teacher can set up the subject, choices, and start and end time of the poll. Flexible Classroom also provides live visualization of polling results."
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Ability to turn the whiteboard on or off in the classroom"
              })
            }), _jsx(_components.p, {
              children: "As of v2.1.0, Agora supports turning the whiteboard on or off in the classroom. For details, see Turn the Whiteboard on or off in the Classroom. When using the APIs for this feature, after the whiteboard is closed, developers can use Flexible Classroom UIKit or UIStore to customize their unique classroom with their desired video gallery to fill the classroom window."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Video gallery rotation"
              })
            }), _jsx(_components.p, {
              children: "Flexible Classroom gives teachers the ability to configure the classroom settings for improved student engagement and video. The Video Gallery Rotation feature lets the teacher automatically rotate the on-stage student gallery view at a desired frequency and sequence, thus eliminating the need for the teacher to scroll or page through the class participants."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Mobile HTML5 support"
              })
            }), _jsx(_components.p, {
              children: "As of v2.1.0, students can join a lecture hall in Flexible Classroom simply by clicking on a shared webpage link within some mobile social applications that use a web view. After joining the classroom on mobile devices, students can do the following things:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: `Watch and hear the teacher's lecture, as well as presentations by students "on the stage".`
              }), `
`, _jsx(_components.li, {
                children: "View the whiteboard and the screen shared by the teacher."
              }), `
`, _jsx(_components.li, {
                children: "Send messages to chat with other participants in the classroom."
              }), `
`, _jsx(_components.li, {
                children: "Engage in class activities such as polling, answering, and viewing the teacher's count down clock."
              }), `
`]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsxs(CalloutDescription, {
                children: [_jsxs(_components.p, {
                  children: ["ℹ️ ", _jsx(_components.strong, {
                    children: "Info"
                  }), `
Please note that the following features are not supported on HTML5:`]
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: 'Students raising their hands to apply for speaking on the "stage".'
                  }), `
`, _jsx(_components.li, {
                    children: "Students drawing on the whiteboard."
                  }), `
`, _jsx(_components.li, {
                    children: "Students testing or switching their local media devices."
                  }), `
`]
                })]
              })
            }), _jsx(_components.h4, {
              id: "improvements-28",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "v2.1.0 makes the following improvements:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: 'Optimizes the business logic and UI of various features in Flexible Classroom, such as students "raising their hands" for permission to speak, the class roster, and in-class reminders.'
              }), `
`, _jsx(_components.li, {
                children: "Increases the upper limit on the number of users in a lecture hall to 5,000."
              }), `
`, _jsx(_components.li, {
                children: "Improves the compatibility of the Web client. The Web client is now supported on Safari for the desktop and iPad, as well as on Chrome for the iPad."
              }), `
`, _jsx(_components.li, {
                children: "Supports displaying thumbnails and animations for the PPT files opened in the classroom."
              }), `
`, _jsx(_components.li, {
                children: "When a classroom is being recorded, the recording button changes to red."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "issues-fixed-28",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "v2.1.0 fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "(All platforms) The RTC SDK and whiteboard usage occurred in Flexible Classroom was not showed in Agora Console."
              }), `
`, _jsx(_components.li, {
                children: "(Web) Occasional failure to record the whiteboard contents in a small classroom."
              }), `
`, _jsx(_components.li, {
                children: "(Web) Occasional failure to send a massage in a small classroom."
              }), `
`, _jsx(_components.li, {
                children: "(Web) After the teacher joined a lecture hall, there was a possibility that the whiteboard was not loaded successfully."
              }), `
`, _jsx(_components.li, {
                children: '(Web/Windows/macOS) Sometimes in a lecture hall, a student "raised a hand" to apply for making a presentation, an error occurred. And the teacher did not receive the application.'
              }), `
`, _jsx(_components.li, {
                children: `(Web/Windows/macOS) In a small classroom, a student went onto the "stage" and turned on the video. After the student left the room, the student's video did not disappear immediately.`
              }), `
`, _jsx(_components.li, {
                children: "(Windows) When a student left and rejoined the room, the student could not see the room announcement published by the teacher."
              }), `
`, _jsx(_components.li, {
                children: "(Windows) In a one-to-one classroom, the student's video occasionally went black."
              }), `
`, _jsx(_components.li, {
                children: "(iOS) When the teacher displayed a PPT that contained audio and video, the student on iOS sometimes neither heard the audio nor saw the video."
              }), `
`, _jsx(_components.li, {
                children: "(Android) In a small classroom, sometimes if a student on Android left and rejoined the room, the student could not see the teacher's video."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.5",
            id: "v115-2",
            headingLevel: 2,
            value: "v115-2",
            children: [_jsx(_components.p, {
              children: "v1.1.5 was released on October 20, 2021."
            }), _jsx(_components.h4, {
              id: "compatibility-changes-2",
              children: "Compatibility changes"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Making open-source libraries into closed-source ones"
              })
            }), _jsxs(_components.p, {
              children: ["As of v1.1.5, the ", _jsx(_components.code, {
                children: "agora-edu-core"
              }), " and ", _jsx(_components.code, {
                children: "agora-rte-sdk"
              }), " libraries in Flexible Classroom are closed-source. Agora moves the implementation of ", _jsx(_components.code, {
                children: "AgoraEduCore.launch"
              }), " into ", _jsx(_components.code, {
                children: "agora-edu-core"
              }), ", so developers can no longer make changes to it. For the parameters in ", _jsx(_components.code, {
                children: "launchOption"
              }), ", see the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/flexible-classroom/classroom-sdk",
                children: "API reference"
              }), "."]
            }), _jsx(_components.h4, {
              id: "new-features-26",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for customizing the video encoding configurations"
              })
            }), _jsxs(_components.p, {
              children: ["As of v1.1.5, developers can customize the video encoding configurations, including the width, height, frame rate, and bitrate. When calling the ", _jsx(_components.code, {
                children: "launch"
              }), " method, developers can set the ", _jsx(_components.code, {
                children: "cameraEncoderConfiguration"
              }), " and ", _jsx(_components.code, {
                children: "screenShareEncoderConfiguration"
              }), " parameters in ", _jsx(_components.code, {
                children: "mediaOptions"
              }), " to customize the encoding configurations for the video stream captured by a camera or the screen-sharing video stream."]
            }), _jsx(_components.p, {
              children: "The recommended video encoding configurations are as follows:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "One-to-one Classroom: 320x240, 200 Kbps, and 15 fps."
              }), `
`, _jsx(_components.li, {
                children: "Small Classroom and Lecture Hall: 160x120, 65 Kbps, and 15 fps, if the number of students in a classroom who send their video stream at the same time is less than or equal to six."
              }), `
`]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: 'Students automatically going onto the "stage"'
              })
            }), _jsx(_components.p, {
              children: 'v1.1.5 adds the feature of students automatically going onto the "stage" in the Small Classroom scenario. Once the teacher or TA enables this feature, students go onto the "stage" at specified intervals.'
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Image enhancement (Electron)"
              })
            }), _jsx(_components.p, {
              children: "v1.1.5 adds a basic image enhancement feature, allowing users to adjust the contrast, brightness, smoothness, and red saturation of an image."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "The countdown timer"
              })
            }), _jsx(_components.p, {
              children: "v1.1.5 adds a countdown timer in Flexible Classroom. The teacher can find the countdown time in the toolbox and set an initial value. After the teacher clicks the start button, students see a countdown window."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Teachers making notes on their shared screen"
              })
            }), _jsx(_components.p, {
              children: "As of v1.1.5, teachers can make notes on the screen that they share with the basic whiteboard tools."
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for custom user properties and classroom properties (Web/Electron/Android/iOS)"
              })
            }), _jsx(_components.p, {
              children: "As of v1.1.15, developers can customize properties for users and classrooms. These properties can be updated, and the updates can be monitored. For example, developers can set the profile photo as a custom user property. To support this feature, Agora makes the following changes to the Agora Edu Context:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Classroom properties:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Add the ", _jsx(_components.code, {
                      children: "updateFlexRoomProperties"
                    }), " method in ", _jsx(_components.code, {
                      children: "RoomContext"
                    }), " for adding or updating custom classroom properties."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["Add the ", _jsx(_components.code, {
                      children: "flexRoomProperties"
                    }), " property in ", _jsx(_components.code, {
                      children: "RoomContext"
                    }), " for indicating the classroom property changes."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: ["User properties: Add the ", _jsx(_components.code, {
                  children: "userFlexProperties"
                }), " parameter in ", _jsx(_components.code, {
                  children: "LaunchOption"
                }), " for passing in custom user properties when launching a classroom."]
              }), `
`]
            }), _jsx(_components.h4, {
              id: "improvements-29",
              children: "Improvements"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "As of v1.1.5, Flexible Classroom supports displaying HTML5 courseware on the whiteboard."
              }), `
`]
            }), _jsx(_components.h4, {
              id: "issues-fixed-29",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "v1.1.5 fixed the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "In the middle of a class, if the app was reloaded, Flexible Classroom failed to keep the chat history."
              }), `
`, _jsx(_components.li, {
                children: "In the middle of a class, when file uploading or conversion failed, Flexible Classroom did not trigger a pop-up window to indicate the failure."
              }), `
`, _jsx(_components.li, {
                children: "When the region is set to NA, users failed to play the MP4 files in Flexible Classroom."
              }), `
`, _jsx(_components.li, {
                children: "When downloading files in Flexible Classroom, the progress bar got stuck at 0%."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.0.1",
            id: "v1101-3",
            headingLevel: 2,
            value: "v1101-3",
            children: [_jsx(_components.p, {
              children: "v1.1.0.1 was released on July 7, 2021."
            }), _jsx(_components.h4, {
              id: "new-features-27",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Media encryption"
              })
            }), _jsxs(_components.p, {
              children: ["To ensure the security during real-time audio and video transmission, v1.1.0.1 adds the ", _jsx(_components.code, {
                children: "mediaOptions"
              }), " parameter in ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/flexible-classroom/classroom-sdk",
                children: _jsx(_components.code, {
                  children: "LaunchOption"
                })
              }), " for supporting media stream encryption. By default, Flexible Classroom does not encrypt the media stream. To enable media encryption, use the ", _jsx(_components.code, {
                children: "mediaOptions"
              }), " parameter to choose an encryption mode and set the encryption key. Flexible Classroom supports the following encryption modes:"]
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AES_128_XTS"
                }), ": 128-bit AES encryption, XTS mode."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AES_128_ECB"
                }), ": 128-bit AES encryption, ECB mode."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AES_256_XTS"
                }), ": 256-bit AES encryption, XTS mode."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AES_128_GCM"
                }), ": 128-bit AES encryption, GCM mode."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "AES_256_GCM"
                }), ": 256-bit AES encryption, GCM mode."]
              }), `
`]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsx(_components.p, {
                  children: "The teacher and students in a classroom must use the same encryption mode and key. If not, unexpected issues, such as a white or black screen and noise, may occur."
                })
              })
            }), _jsx(_components.h4, {
              id: "issues-fixed-30",
              children: "Issues fixed"
            }), _jsx(_components.p, {
              children: "v1.1.0.1 fixes the following issues:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "The default region was not NA (North America)."
              }), `
`, _jsx(_components.li, {
                children: "When the user set the UI language as English, users saw some Chinese characters on the screen sharing window."
              }), `
`, _jsx(_components.li, {
                children: "When the teacher started screen sharing, students saw a black screen."
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v1.1.0",
            id: "v110-3",
            headingLevel: 2,
            value: "v110-3",
            children: [_jsx(_components.p, {
              children: "v1.1.0 was released on June 18, 2021. This is the first release of Agora Flexible Classroom with the following features:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Real-time audio and video interaction"
              }), `
`, _jsx(_components.li, {
                children: "Signaling"
              }), `
`, _jsx(_components.li, {
                children: "Interactive whiteboard"
              }), `
`, _jsx(_components.li, {
                children: "Screen sharing"
              }), `
`, _jsx(_components.li, {
                children: "Recording and replay"
              }), `
`, _jsx(_components.li, {
                children: "Teaching tools, including cloud storage, classroom rewards, and the user list"
              }), `
`, _jsx(_components.li, {
                children: "Customizing the classroom user interfaces and embedding custom plugins in classrooms"
              }), `
`, _jsx(_components.li, {
                children: "Flexible Classroom cloud service for classroom and user management"
              }), `
`]
            })]
          })]
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
