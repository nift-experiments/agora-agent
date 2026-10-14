import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Start an audio and video call",
  description: "Shows how to implement real-time audio and video communications using the AgoraChatCallKit."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;windows&#x22;,&#x22;ios&#x22;,&#x22;web&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    \`AgoraChatCallKit\` is an open-source audio and video UI library developed based on Agora's real-time communications and signaling services. With this library, you can implement audio and video calling functionalities with enhanced synchronization between multiple devices. In use-cases where a user ID is logged in to multiple devices, once the user deals with an incoming call that is ringing on one device, all the other devices stop ringing simultaneously.

    This page describes how to implement real-time audio and video communications using the \`AgoraChatCallKit\`.

    ## Understand the tech [#understand-the-tech]

    The basic process for implementing real-time audio and video communications with \`AgoraChatCallKit\` is as follows:

    1. Initialize \`AgoraChatCallKit\` by calling \`init\` and add the \`AgoraChatCallKit\` event listener by calling \`setCallKitListener\`.
    2. Call \`startSingleCall\` or \`startInviteMultipleCall\` on the caller's client to send a call invitation for one-to-one or group calls.
    3. On the callee's client, accept or decline the call invitation after receiving \`onReceivedCall\`. Once a user accepts the invitation, they enter the call.
    4. When the call ends, the SDK triggers the \`onEndCallWithReason\` callback.

    ## Prerequisites [#prerequisites]

    Before proceeding, ensure that your development environment meets the following requirements:

    * [Java Development Kit](https://www.oracle.com/java/technologies/downloads/) 1.8 or later.
    * Android Studio 3.5 or later.
    * \`targetSdkVersion\` 30.
    * \`minSdkVersion\` 21.
    * Gradle 4.6 or later.
    * a Chat project that has integrated the Chat SDK and implemented the [basic real-time chat functionalities](../../get-started-sdk), including users logging in and out and sending and receiving messages.

    ## Project setup [#project-setup]

    Take the following steps to integrate the \`AgoraChatCallKit\` into your project and set up the development environment.

    1. Add the dependency

       \`AgoraChatCallKit\` is developed upon \`io.agora.rtc:chat-sdk:x.x.x\` (1.0.5 and later) and \`io.agora.rtc:full-rtc-basic:x.x.x\` (3.6.2 and later). Follow the steps to add \`AgoraChatCallKit\` using Gradle.

       In \`/Gradle Scripts/build.gradle(Module: .app)\`, add the following lines to integrate the \`AgoraChatCallKit\` into your Android project:

       \`\`\`java
       implementation 'io.agora.rtc:chat-callkit:1.0.1'
       \`\`\`

    2. Add project permissions

       In \`/app/Manifests/AndroidManifest.xml\`, add the following permissions after \`</application>\`:

       \`\`\`xml
       <!-- Add alert window -->
       <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />
       <!-- Access to the internet -->
       <uses-permission android:name="android.permission.INTERNET" />
       <!-- Access to the microphone -->
       <uses-permission android:name="android.permission.RECORD_AUDIO" />
       <!-- Access to the camera -->
       <uses-permission android:name="android.permission.CAMERA" />
       <!-- Access to the tasks -->
       <uses-permission android:name="android.permission.REORDER_TASKS" />
       \`\`\`

    3. Add the \`AgoraChatCallKit\` Activity

       In \`/app/Manifests/AndroidManifest.xml\`, add activities for the one-to-one audio and video call, and the group video call, for example, \`CallSingleBaseActivity\` (inherited from \`EaseCallSingleBaseActivity\`) and \`CallMultipleBaseActivity\` (inherited from \`EaseCallMultipleBaseActivity\`).

       \`\`\`xml
       <activity
           android:name=".av.CallSingleBaseActivity"
           android:configChanges="orientation|keyboardHidden|screenSize"
           android:excludeFromRecents="true"
           android:label="@string/demo_activity_label_video_call"
           android:launchMode="singleInstance"
           android:screenOrientation="portrait" />
       <activity
           android:name=".av.CallMultipleBaseActivity"
           android:configChanges="orientation|keyboardHidden|screenSize"
           android:excludeFromRecents="true"
           android:label="@string/demo_activity_label_multi_call"
           android:launchMode="singleInstance"
           android:screenOrientation="portrait" />
       \`\`\`

    ## Implement audio and video calling [#implement-audio-and-video-calling]

    This section introduces the core steps for implementing audio and video calls in your project.

    ### Initialize AgoraChatCallKit [#initialize-agorachatcallkit]

    Call \`init\` to initialize the \`AgoraChatCallKit\` after the Chat SDK is initialized. You can also add callback events to listen for and set the configurations. Refer to the following sample code:

    \`\`\`java
    // Construct the CallKitConfig class.
    EaseCallKitConfig callKitConfig = new EaseCallKitConfig();
    // Set the call out time (ms).
    callKitConfig.setCallTimeOut(30 * 1000);
    // Set the Agora App ID.
    callKitConfig.setAgoraAppId("******");
    // Set whether to enable token authentication.
    callKitConfig.setEnableRTCToken(true);
    // Set the default avatar.
    callKitConfig.setDefaultHeadImage(getUsersManager().getCurrentUserInfo().getAvatar());
    // Set the ringtone file.
    String ringFile = EaseFileUtils.getModelFilePath(context,"huahai.mp3");
    callKitConfig.setRingFile(ringFile);
    // Set the user information.
    Map userInfoMap = new HashMap<>();
    userInfoMap.put("***",new EaseCallUserInfo("****",null));
    userInfoMap.put("***",new EaseCallUserInfo("****",null));
    callKitConfig.setUserInfoMap(userInfoMap);
    // Call init to initialie EaseCallKit.
    EaseCallKit.getInstance().init(context, callKitConfig);
    // Register the activity added in the Manifest file.
    EaseCallKit.getInstance().registerVideoCallClass(CallSingleBaseActivity.class);
    EaseCallKit.getInstance().registerMultipleVideoClass(CallMultipleBaseActivity.class);
    // Add event listeners to the AgoraChatCallKit.
    addCallkitListener();
    \`\`\`

    In this method, you need to set the \`EaseCallKitConfig\` class. Some of the configurations include the following:

    \`\`\`java
    /**
     * The EaseCallKitConfig class.
     * @param defaultHeadImage The default avatar. Set it as the absolute path of a local file or a URL.
     * @param userInfoMap      The dictionary of the user information. The data format is key-value pairs, where key represents the user ID and value is EaseCallUserInfo.
     * @param callTimeOut      The timeout duration for the call invitation, in miliseconds. The default value is 30 seconds.
     * @param agoraAppId       The Agora App ID.
     * @param ringFile         The ringtone file, represented by the absolute path of a local file.
     * @param enableRTCToken   Whether to enable token authentication for using the RTC service. If you enabled token authentication in Agora Console, set this parameter as true. The default value is false.
      */
      public class EaseCallKitConfig {
        private String defaultHeadImage;
        private Map userInfoMap = new HashMap<>();
        private String ringFile;
        private String agoraAppId;
        private long callTimeOut = 30 * 1000;
        private boolean enableRTCToken = false;
         public EaseCallKitConfig(){
      ...
      }
    \`\`\`

    ### Send a call invitation [#send-a-call-invitation]

    From the caller's client, call \`startSingleCall\` or \`startInviteMultipleCall\` to send a call invitation for a one-to-one call or group call. You need to specify the call type when calling the method.

    * One-to-one audio and video call

      Call \`startSingleCall\` to start a one-to-one call. You need to specify the call type as an audio call or video call in this method.

      \`\`\`java
      /**
      * Starts a one-to-one call.
      *
      * @param type The call type:
      * - CONFERENCE_VOICE_CALL: A one-to-one voice call.
      * - CONFERENCE_VIDEO_CALL: A one-to-one video call.
      * @param user The user ID of the callee. Ensure that you set this parameter.
      * @param ext  The extension information in the call invitation. Set it as null if you do not need this information.
      */
      public void startSingleCall(final EaseCallType type, final String user, final Map ext){}
      \`\`\`

    The following screenshot gives an example of the user interface after sending a call invitation for one-to-one audio call:

    * Group audio and video call

      Call \`startInviteMultipleCall\` to start a group call. Set the call type as audio call or video call. You can set the users you want to invite from a chat group or the contact list. Refer to \`ConferenceInviteActivity\` in the sample project for implementation.

      \`\`\`java
      /**
      * Starts a group call.
      *
      * @param type The call type:
      * - SINGLE_VOICE_CALL: A one-to-one voice call.
      * - SINGLE_VIDEO_CALL: A one-to-one video call.
      * @param user The user ID of the callee. Ensure that you set this parameter.
      * @param ext  The extension information in the call invitation. Set it as null if you do not need this information.
      */
      public void startInviteMultipleCall(final EaseCallType type, final String[] users, final Map ext) {}
      \`\`\`

    ### Receive the invitation [#receive-the-invitation]

    Once a call invitaion is sent, the callee receives the invitation in the \`onReceivedCall\` callback.

    \`\`\`java
    /**
     * Occurs when a call invitation is received.
     * @param callType The call type.
     * @param fromUserId The user ID of the caller.
     * @param ext The extension information in the call invitation. Set it as null if you do not need this information.
     */
    void onReceivedCall(EaseCallType callType, String fromUserId, JSONObject ext);
    \`\`\`

    If the callee is online and available for a call, you can pop out a user interface that allows the callee to accept or decline the invitation. Refer to the following screenshot to implement the interface:

    ### Send a call invitation during a group call [#send-a-call-invitation-during-a-group-call]

    In call sessions with multiple users, these users can also send call invitations to other users. After sending the invitation, the SDK triggers the \`onInviteUsers\` callback in \`EaseCallKitListener\` on the sender's client.

    \`\`\`java
    /**
     * Occurs when the local user sends a call invitation during a group call.
     * @param callType The call type.
     * @param existMembers The current members of the group call, excluding the local user.
     * @param ext The extension information in the call invitation. Set it as null if you do not need this information.
     */
    void onInviteUsers(EaseCallType callType, String[] existMembers, JSONObject ext);
    \`\`\`

    Refer to \`io.agora.chatdemo.group.fragments.MultiplyVideoSelectMemberChildFragment\` in the [sample project](https://github.com/AgoraIO-Usecase/AgoraChat-android) for the user interface of the call invitation.

    ### Listen for callback events [#listen-for-callback-events]

    When a remote user joins the call, all the other users in the call receive the \`onRemoteUserJoinChannel\` callback. You need to look up the Chat user ID corresponding to the Agora UID in your app server.

    * If you find the Chat user ID, construct the user ID to an \`EaseUserAccount\` object and return it to the app using the \`callback\` parameter in \`onRemoteUserJoinChannel\`. For the \`callback\` parameter, implement \`onUserAccount\` in \`EaseCallGetUserAccountCallback\`.
    * If you fail to find the Chat user ID, report the error code and descriptions using the \`onSetUserAccountError\` callback in the \`EaseCallGetYserAccountCallback\` class.

    \`\`\`java
    /**
     * Occurs when the remote user joins the channel.
     *
     * @param channelName The channel name.
     * @param userName The Chat user ID.
     * @param uid The Agora UID.
     * @param callback The callback object.
     */
    void onRemoteUserJoinChannel(String channelName, String userName, int uid, EaseCallGetUserAccountCallback callback);
    \`\`\`

    ### End the call [#end-the-call]

    A one-to-one call ends as soon as one of the two users hangs up, while a group call ends only after the local user hangs up. When the call ends, the SDK triggers the \`onEndCallWithReason\` callback.

    \`\`\`java
    /**
     * Occurs when a call ends.
     * @param callType The call type.
     * @param channelName The channel name.
     * @param reason The reason why the call ends.
     * @param callTime The call duration.
     */
    void onEndCallWithReason(EaseCallType callType, String channelName, EaseCallEndReason reason, long callTime);

    // The reasons for a call ending.
    public enum EaseCallEndReason {
        EaseCallEndReasonHangup(0), // One of the call members hangs up.
        EaseCallEndReasonCancel(1), // The local user cancels the call.
        EaseCallEndReasonRemoteCancel(2), // The remote user cancels the call.
        EaseCallEndReasonRefuse(3),// The remote user rejects the call.
        EaseCallEndReasonBusy(4), // The remote user is busy.
        EaseCallEndReasonNoResponse(5), // The local user did not answer the phone.
        EaseCallEndReasonRemoteNoResponse(6), // The remote user did not answer the phone.
        EaseCallEndReasonHandleOnOtherDeviceRefused(7),// The call is rejected on another device.
        EaseCallEndReasonHandleOnOtherDeviceAgreed; // The call is answered on another device.
       ....
    }
    \`\`\`

    ## Next steps [#next-steps]

    This section contains extra steps you can take for the audio and video call functionalities in your project.

    ### Call exceptions [#call-exceptions]

    If exceptions or errors occur during a call, the SDK triggers the \`onCallError\` callback in the \`EaseCallKitListener\` class, which reports the detailed information of the exception in \`AggoraChatCallError\`.

    \`\`\`java
    /**
     * Reports call exceptions.
     * @param type        The error type.
     * @param errorCode   The error code.
     * @param description The error description.
     */
    void onCallError(EaseCallError type, int errorCode, String description);
    \`\`\`

    Types of call errors are as follows:

    \`\`\`java
    public enum EaseCallError {
        // The process error.
        PROCESS_ERROR,
        // The RTC service error.
        RTC_ERROR,
        // The IM service error.
        IM_ERROR
    }
    \`\`\`

    ### Update the call kit configuration [#update-the-call-kit-configuration]

    After initializing the \`AgoraChatCallKit\`, you can refer to the following sample code to update the configuration of the call kit:

    \`\`\`java
    /**
     * Gets the current call kit configuration.
     *
     * @return The current call kit configuration.
     */
    public EaseCallKitConfig getCallKitConfig();
    // Sets the default avatar.
    EaseCallKitConfig config = EaseCallKit.getInstance().getCallKitConfig();
      if(config != null){
        String Image = EaseFileUtils.getModelFilePath(context,"bryant.png"……);
        callKitConfig.setDefaultHeadImage(Image);
    }
    \`\`\`

    ### Update the user avatar or nickname [#update-the-user-avatar-or-nickname]

    When changes to the UI or the channel state occur, for example, when a new user joins the channel, \`onUserInfoUpdated\` is triggered to notify the app to update the UI.

    After a user updates the user information, call \`io.agora.chat.callkit.general.EaseCallKitConfig#setUserInfo\` to set the modified user information. Ensure that this method is implemented in a synchronous function so that the UI is updated timely.

    \`\`\`java
    /**
     * \\~chinese
     * Occurs when the user information is updated.
     * @param userName The Chat user ID.
     */
    void onUserInfoUpdate(String userName){
        // For example,
        /**
        EaseUser user = mUsersManager.getUserInfo(userName);
        EaseCallUserInfo userInfo = new EaseCallUserInfo();
            if (user != null) {
                userInfo.setNickName(user.getNickname());
                userInfo.setHeadImage(user.getAvatar());
            }
        EaseCallKit.getInstance().getCallKitConfig().setUserInfo(userName, userInfo);
        */
    }
    \`\`\`

    ### Authenticate users with the RTC token [#authenticate-users-with-the-rtc-token]

    To enhance communication security, Agora recommends that you authenticate app users with the RTC token before they join a call. To do this, you need to make sure that the [Primary Certificate of your project is enabled](/en/introduction/account#get-the-app-id-and-app-certificate), and \`setEnableRTCToken\` in the \`AgoraChatCallKit\` is set to \`true\`.

    \`\`\`java
    EaseCallKitConfig callKitConfig = new EaseCallKitConfig();
     ……
     callKitConfig.setEnableRTCToken(true);
     ……
     EaseCallKit.getInstance().init(context, callKitConfig);
    \`\`\`

    Once you enable token authentication, the SDK triggers the \`onGenerateRTCToken\` callback. You need to retrieve an RTC token in this callback following the steps:

    1. Retrieve the RTC token and Agora UID from your app server.
    2. Trigger \`onSetToken\` to pass the token and UID to the callback object.
    3. \`AgoraChatCallKit\` uses the token and UID to join the channel.

    Tokens are generated on your app server using the token generator provided by Agora. For how to generate a token on the server, see [Secure authentication with tokens](../secure-access-and-authentication/authentication).

    \`\`\`java
    /**
     * Occurs when RTC token authentication is enabled.
     *
     * @param userId       The Chat user ID of the current user.
     * @param channelName  The channel name.
     * @param callback     The callback object.
     */
    default void onGenerateRTCToken(String userId, String channelName, EaseCallKitTokenCallback callback) {
        // Pass the token and UID to the callback object.
        // callback.onSetToken(token, uid);
    }
    \`\`\`

    ### Push notifications [#push-notifications]

    In use-cases where the app runs on the background or goes offline, use push notifications to ensure that the callee receives the call invitation. To enable push notifications, see [Set up push notifications](../notifications-and-event-handling/offline-push/configure-push-notifications).

    Once push notifications are enabled, when a call invitation arrives, a notification message pops out on the notification panel. Users can click the message to see the call invitation.

    ## Reference [#reference]

    This section provides other reference information that you can refer to when implementing real-time audio and video communications functionalities.

    ### API list [#api-list]

    The \`AgoraChatCallKit\` provides the following APIs:

    | Method                     | Description                                       |
    | -------------------------- | ------------------------------------------------- |
    | init                       | Initializes AgoraChatCallKit.                     |
    | setCallKitListener         | Sets the event listener of the call kit.          |
    | startSingleCall            | Starts a one-to-one call.                         |
    | startInviteMultipleCall    | Starts a group call.                              |
    | getCallKitConfig           | Retrieves the configurations of AgoraChatCallKit. |
    | registerVideoCallClass     | Registers a one-to-one video call class.          |
    | registerMultipleVideoClass | Registers a group video call class.               |

    \`EaseCallKitListener\` provides the following callback events:

    | Event                   | Description                                                                                                                                        |
    | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
    | onEndCallWithReason     | Occurs when the call ends.                                                                                                                         |
    | onInviteUsers           | Occurs when a member of the group call invites other users to the call.                                                                            |
    | onReceivedCall          | Occurs when the call invitation is received and the device rings.                                                                                  |
    | onGenerateToken         | Requests the RTC token. You need to pass the token to AgoraChatCallKit with callbacks.                                                             |
    | onCallError             | Reports exceptions and errors during the call.                                                                                                     |
    | onInviteCallMessageSent | Occurs when the call invitation is sent.                                                                                                           |
    | onRemoteUserJoinChannel | Occurs when a remote user joins the call.                                                                                                          |
    | onUserInfoUpdated       | Occurs when the user information is updated. This callback is triggered when changes occur to the UI or the channel state in the AgoraChatCallKit. |

    \`EaseCallGetUserAccountCallback\` contains the following APIs:

    | Event                 | Description                                                               |
    | --------------------- | ------------------------------------------------------------------------- |
    | onUserAccount         | Occurs when the Chat user ID corresponding to the Agora UID is retrieved. |
    | onSetUserAccountError | Occurs when the app fails to retrieve the user account.                   |

    \`EaseCallKitTokenCallback\` contains the following APIs:

    | Event           | Description                                                                 |
    | --------------- | --------------------------------------------------------------------------- |
    | onSetToken      | Occurs when the app passes the retrieved RTC token to the AgoraChatCallKit. |
    | onGetTokenError | Occurs when the app fails to get the RTC token.                             |

    ### Sample project [#sample-project]

    Agora provides an open-source [AgoraChat-android](https://github.com/AgoraIO-Usecase/AgoraChat-android) sample project on GitHub. You can download the sample to try it out or view the source code.

    The sample project uses the Chat user ID to join a channel, which enables displaying the user ID in the view of the call. If you use the methods of the Agora to start a call, you can also use the Integer UID to join a channel.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    **Currently, there is no CallKit for this platform.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    **Currently, there is no CallKit for this platform.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    **Currently, there is no CallKit for this platform.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    **Currently, there is no CallKit for this platform.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    \`AgoraChatCallKit\` is an open-source audio and video UI library developed based on Agora's real-time communications and signaling services. With this library, you can implement audio and video calling functionalities with enhanced synchronization between multiple devices. In use-cases where a user ID is logged in to multiple devices, once the user deals with an incoming call that is ringing on one device, all the other devices stop ringing simultaneously.

    This page describes how to implement real-time audio and video communications using the \`AgoraChatCallKit\`.

    ## Understand the tech [#understand-the-tech-1]

    The basic process for implementing real-time audio and video communications with \`AgoraChatCallKit\` is as follows:

    1. Initialize \`AgoraChatCallKit\` by calling \`init\`.
    2. Call \`startSingleCallWithUid\` or \`startInviteUsers\` on the caller's client to send a call invitation for one-to-one or group calls.
    3. On the callee's client, accept or decline the call invitation after receiving \`callDidReceive\`. Once a user accepts the invitation, they enter the call.
    4. When the call ends, the SDK triggers the \`callDidEnd\` callback.

    ## Prerequisites [#prerequisites-1]

    Before proceeding, ensure that your development environment meets the following requirements:

    * Xcode 9.0 or later.
    * A device running iOS 10.0 or later.
    * A Chat project that has integrated the Chat SDK and implemented the [basic real-time chat functionalities](../../get-started-sdk), including users logging in and out and sending and receiving messages.

    ## Project setup [#project-setup-1]

    Take the following steps to integrate the \`AgoraChatCallKit\` into your project and set up the development environment.

    ### Add the AgoraChatCallKit framework [#add-the-agorachatcallkit-framework]

    \`AgoraChatCallKit\` is developed upon \`Agora_Chat_iOS\`, \`Masonry\`, \`AgoraRtcEngine_iOS/RtcBasic\`, and \`SDKWebImage\`. Refer to the following steps to import \`AgoraChatCallKit\` into your project. If you prefer to add the framework manually, refer to [Manually import AgoraChatCallKit](#import).

    1. Install CocoaPods if you have not. For details, see [Getting Started with CocoaPods](https://guides.cocoapods.org/using/getting-started.html#getting-started).

    2. If your project does not have a \`Podfile\` file, navigate to the project root directory, and run the \`pod init\` command to create a text file \`Podfile\` in the project folder.

    3. Drag \`AgoraChatCallKit.framework\` to the project and set the \`Embed\` attribute of \`AgoraChatCallKit.framework\` as \`Embed & Sign\` under \`Frameworks, Libraries, and Embedded Content\`.

       \`\`\`objc
        use_frameworks!
        // Replace AppName with the name of your project
        target 'AppName' do
            pod 'AgoraChatCallKit'
            // Other frameworks
        end
       \`\`\`

    4. In the project root directory, run \`pod install\` to add the framework. When the SDK is installed successfully, you can see \`Pod installation complete!\` in the Terminal and an \`xcworkspace\` file in the project folder.

    5. Open the \`xcworkspace\` file in Xcode.

    ### Add permissions [#add-permissions]

    Open the \`info.plist\` file, and add the following permissions:

    | Key                                      | Type   | Value                                                                            |
    | ---------------------------------------- | ------ | -------------------------------------------------------------------------------- |
    | \`Privacy - Microphone Usage Description\` | String | The description for using the microphone. For example, to access the microphone. |
    | \`Privacy - Camera Usage Description\`     | String | The description for using the camera. For example, to access the camera.         |

    ## Implement audio and video calling [#implement-audio-and-video-calling-1]

    This section introduces the core steps for implementing audio and video calls in your project.

    ### Initialize AgoraChatCallKit [#initialize-agorachatcallkit-1]

    Call \`init\` to initialize the \`AgoraChatCallKit\`.

    \`\`\`objc
    AgoraChatCallConfig *config = [[AgoraChatCallConfig alloc] init];
    config.agoraAppId = @"agoraAppId";
    config.enableRTCTokenValidate = YES;
    config.enableIosCallKit = YES;
    [AgoraChatCallManager.sharedManager initWithConfig:config delegate:self];
    \`\`\`

    In this method, you need to set the \`AgoraChatCallConfig\` interface. Some of the configurations include the following:

    \`\`\`objc
    @interface AgoraChatCallConfig : NSObject
    /**
     * The timeout duration for the call invitation, in seconds. The default value is 30.
     */
    @property (nonatomic) UInt32 callTimeOut;
    /**
     * The dictionary of the user information. The data format is key-value pairs, where key represents the user ID and value is EaseCallUser.
     */
    @property (nonatomic,strong) NSMutableDictionary* users;
    /**
     * Specify the file URL of the ringtone. This field is valid only when enableIosCallKit is set to NO.
     */
    @property (nonatomic,strong) NSURL* ringFileUrl;
    /**
     * The App ID of the project, which you can obtain from Agora Console.
     */
    @property (nonatomic,strong) NSString* agoraAppId;
    /**
     *  Whether to enable token authentication when users join the Agora channel:
     *  - (Default) YES: Enable token authentication. Once you set it as YES, you must implement the callDidRequestRTCTokenForAPPId callback. After receiving this callback, you need to call setRTCToken to pass in the token to start or join a call.
     *  - NO: Do not enable token authentication.
     */
    @property (nonatomic) BOOL enableRTCTokenValidate;
    /**
     * Whether to use the iOS CallKit framework.
     */
    @property (nonatomic, assign) BOOL enableIosCallKit;

    @end
    \`\`\`

    ### Send a call invitation [#send-a-call-invitation-1]

    From the caller's client, call \`startSingleCallWithUId\` or \`startInviteUsers\` to send a call invitation for a one-to-one call or group call. You need to specify the call type when calling the method.

    * One-to-one audio call

      \`\`\`objc
      [AgoraChatCallManager.sharedManager startSingleCallWithUId:userId type:AgoraChatCallType1v1Audio ext:nil completion:^(NSString * callId, AgoraChatCallError * aError) {
      }];
      \`\`\`

    * One-to-one video call

      \`\`\`objc
      [AgoraChatCallManager.sharedManager startSingleCallWithUId:userId type:AgoraChatCallType1v1Video ext:nil completion:^(NSString * callId, AgoraChatCallError * aError) {
      }];
      \`\`\`

    * Group audio call

      \`\`\`objc
      ConfInviteUsersViewController *controller = [[ConfInviteUsersViewController alloc] initWithGroupId:groupId excludeUsers:@[AgoraChatClient.sharedClient.currentUsername]];
      controller.didSelectedUserList = ^(NSArray * _Nonnull aInviteUsers) {
          for (NSString *strId in aInviteUsers) {
              AgoraChatUserInfo *info = [UserInfoStore.sharedInstance getUserInfoById:strId];
              if (info && (info.avatarUrl.length > 0 || info.nickname > 0)) {
                      AgoraChatCallUser *user = [AgoraChatCallUser userWithNickName:info.nickname image:[NSURL URLWithString:info.avatarUrl]];
                  [[AgoraChatCallManager.sharedManager getAgoraChatCallConfig] setUser:strId info:user];
              }
          }
          [AgoraChatCallManager.sharedManager startInviteUsers:aInviteUsers groupId:groupId callType:AgoraChatCallTypeMultiAudio ext:@{
              @"groupId":groupId
          } completion:^(NSString * callId, AgoraChatCallError * aError) {

          }];
      };

      controller.modalPresentationStyle = UIModalPresentationPageSheet;
      [viewController presentViewController:controller animated:YES completion:nil];
      \`\`\`

    * Group video call

      \`\`\`objc
      ConfInviteUsersViewController *controller = [[ConfInviteUsersViewController alloc] initWithGroupId:groupId excludeUsers:@[AgoraChatClient.sharedClient.currentUsername]];
      controller.didSelectedUserList = ^(NSArray * _Nonnull aInviteUsers) {
          for (NSString *strId in aInviteUsers) {
              AgoraChatUserInfo *info = [UserInfoStore.sharedInstance getUserInfoById:strId];
              if (info && (info.avatarUrl.length > 0 || info.nickname > 0)) {
                      AgoraChatCallUser *user = [AgoraChatCallUser userWithNickName:info.nickname image:[NSURL URLWithString:info.avatarUrl]];
                  [[AgoraChatCallManager.sharedManager getAgoraChatCallConfig] setUser:strId info:user];
              }
          }
          [AgoraChatCallManager.sharedManager startInviteUsers:aInviteUsers groupId:groupId callType:AgoraChatCallTypeMultiVideo ext:@{
              @"groupId":groupId
          } completion:^(NSString * callId, AgoraChatCallError * aError) {

          }];
      };

      controller.modalPresentationStyle = UIModalPresentationPageSheet;
      [viewController presentViewController:controller animated:YES completion:nil];
      \`\`\`

    The following screenshot gives an example of the user interface after sending a call invitation for one-to-one audio call:

    ### Receive the invitation [#receive-the-invitation-1]

    Once a call invitaion is sent, the callee receives the invitation in the \`callDidReceive\` callback.

    \`\`\`objc
    - (void)callDidReceive:(EaseCallType)aType inviter:(NSString*_Nonnull)user ext:(NSDictionary*)aExt
    {

    }
    \`\`\`

    If the callee is online and available for a call, you can pop out a user interface that allows the callee to accept or decline the invitation. If you have enabled the iOS CallKit, the system call user interface is launched. Otherwise, you can refer to the following screenshot to implement the interface:

    ### Send a call invitation during a group call [#send-a-call-invitation-during-a-group-call-1]

    In call sessions with multiple users, these users can also send call invitations to other users. After sending the invitation, the SDK triggers the \`multiCallDidInvitingWithCurVC\` callback in \`AgoraChatCallDelegate\` on the sender's client.

    \`\`\`objc
    /**
     * Occurs when the local user sends a call invitation during a group call.
     * vc     The current UI view controller.
     * users  The user IDs that are already in the group call.
     * aExt   Extension information.
     */
    - (void)multiCallDidInvitingWithCurVC:(UIViewController*_Nonnull)vc excludeUsers:(NSArray *_Nullable)users ext:(NSDictionary *)aExt
      {
        NSString *groupId = nil;
        if (aExt) {
            groupId = [aExt objectForKey:@"groupId"];
        }
        if (!groupId || groupId.length  0 || info.nickname.length > 0)) {
                    AgoraChatCallUser *user = [AgoraChatCallUser userWithNickName:info.nickname image:[NSURL URLWithString:info.avatarUrl]];
                    [[AgoraChatCallManager.sharedManager getAgoraChatCallConfig] setUser:strId info:user];
                }
            }
            [AgoraChatCallManager.sharedManager startInviteUsers:aInviteUsers groupId:groupId callType:AgoraChatCallTypeMultiAudio ext:aExt completion:nil];
        };
        confVC.modalPresentationStyle = UIModalPresentationPopover;
        [vc presentViewController:confVC animated:YES completion:nil];
    }
    \`\`\`

    ### Listen for callback events [#listen-for-callback-events-1]

    During the call, you can also listen for the following callback events:

    * \`callDidJoinChannel\`, occurs when the local user successfully joins the call.

      \`\`\`objc
      - (void)callDidJoinChannel:(NSString*_Nonnull)aChannelName uid:(NSUInteger)aUid
      {
          [self _fetchUserMapsFromServer:aChannelName];
      }
      \`\`\`

    * \`remoteuserDidJoinChannel\`, occurs when the remote user successfully joins the call.

      \`\`\`objc
      -(void)remoteUserDidJoinChannel:( NSString*_Nonnull)aChannelName uid:(NSInteger)aUid username:(NSString*_Nullable)aUserName
      {
          if (aUserName.length > 0) {
              AgoraChatUserInfo* userInfo = [[UserInfoStore sharedInstance] getUserInfoById:aUserName];
              if (userInfo && (userInfo.avatarUrl.length > 0 || userInfo.nickname.length > 0)) {
                  AgoraChatCallUser* user = [AgoraChatCallUser userWithNickName:userInfo.nickname image:[NSURL URLWithString:userInfo.avatarUrl]];
                  [[AgoraChatCallManager.sharedManager getAgoraChatCallConfig] setUser:aUserName info:user];
              }
          } else {
              [self _fetchUserMapsFromServer:aChannelName];
          }
      }
      \`\`\`

    When receiving the \`callDidJoinChannel:uid\` or \`remoteUserDidJoinChannel:uid:username:\` callback, the user needs to look up the Chat user ID corresponding to the Agora UID in your app server. If the Chat user ID is found, construct a dictionary with Agora UID and Chat user ID and then set it to the app using \`setUsers:channelName:\`.

    ### End the call [#end-the-call-1]

    A one-to-one call ends as soon as one of the two users hangs up, while a group call ends only after the local user hangs up. When the call ends, the SDK triggers the \`callDidEnd\` callback.

    \`\`\`objc
    - (void)callDidEnd:(NSString*_Nonnull)aChannelName reason:(AgoraChatCallEndReason)aReason time:(int)aTm type:(AgoraChatCallType)aType
    {
        NSString *msg = @"";
        switch (aReason) {
            case AgoraChatCallEndReasonHandleOnOtherDevice:
                msg = NSLocalizedString(@"otherDevice", nil);
                break;
            case AgoraChatCallEndReasonBusy:
                msg = NSLocalizedString(@"remoteBusy", nil);
                break;
            case AgoraChatCallEndReasonRefuse:
                msg = NSLocalizedString(@"RemoteRefuseCall", nil);
                break;
            case AgoraChatCallEndReasonCancel:
                msg = NSLocalizedString(@"cancelCall", nil);
                break;
            case AgoraChatCallEndReasonNoResponse:
                msg = NSLocalizedString(@"remoteNoResponse", nil);
                break;
            case AgoraChatCallEndReasonHangup:
                msg = [NSString stringWithFormat:NSLocalizedString(@"callendPrompt", nil),aTm];
                break;
            default:
                break;
        }
        if (msg.length > 0) {
            [self showHint:msg];
        }
    }
    \`\`\`

    ## Next steps [#next-steps-1]

    This section contains extra steps you can take for the audio and video call functionalities in your project.

    ### Call exceptions [#call-exceptions-1]

    If exceptions or errors occur during a call, the SDK triggers the \`callDidOccurError\` callback, which reports the detailed information of the exception in \`AgoraChatCallError\`.

    \`\`\`objc
    - (void)callDidOccurError:(AgoraChatCallError *_Nonnull)aError
    {
    }
    \`\`\`

    ### Update the user avatar or nickname [#update-the-user-avatar-or-nickname-1]

    After a user joins the call, you can call \`setUser\` to modify the avatar and nickname of the current user and the other users in the channel.

    \`\`\`objc
    AgoraChatCallUser *user = [AgoraChatCallUser userWithNickName:info.nickname image:[NSURL URLWithString:info.avatarUrl]];
    [[AgoraChatCallManager.sharedManager getAgoraChatCallConfig] setUser:userId info:user];
    \`\`\`

    ### Authenticate users with the RTC token [#authenticate-users-with-the-rtc-token-1]

    To enhance communication security, Agora recommends that you authenticate app users with the RTC token before they join a call. To do this, you need to make sure that the [Primary Certificate of your project is enabled](/en/introduction/account#get-the-app-id-and-app-certificate), and \`enableRTCTokenValidate\` in the \`AgoraChatCallKit\` is set to \`YES\`.

    \`\`\`objc
    config.enableRTCTokenValidate = YES;
    [AgoraChatCallManager.sharedManager initWithConfig:config delegate:self];
    \`\`\`

    Once you enable token authentication, ensure that you listen for the \`callDidRequestRTCTokenForAppId\` callback. When \`callDidRequestRTCTokenForAppId\` is triggered, you need to retrieve the token and call \`setRTCToken\` to pass the token to the CallKit. Tokens are generated on your app server using the token generator provided by Agora. For how to generate a token on the server and retrieve and renew the token on the client, see [Secure authentication with tokens](../secure-access-and-authentication/authentication).

    \`\`\`objc
    - (void)callDidRequestRTCTokenForAppId:(NSString *)aAppId channelName:(NSString *)aChannelName account:(NSString *)aUserAccount uid:(NSInteger)aAgoraUid
    {
        [AgoraChatCallManager.sharedManager setRTCToken:rtcToken channelName:aChannelName uid: The Agora UID];
    }
    \`\`\`

    ## Reference [#reference-1]

    This section provides other reference information that you can refer to when implementing real-time audio and video communications functionalities.

    ### API list [#api-list-1]

    The \`AgoraChatCallKit\` framework contains the \`AgoraChatCallManager\` and \`AgoraChatCallDelegate\` classes.

    The following table lists the core methods in \`AgoraChatCallManager\`:

    | Method                                                | Description                                                    |
    | ----------------------------------------------------- | -------------------------------------------------------------- |
    | initWithConfig:delegate                               | Initializes AgoraChatCallKit.                                  |
    | startSingleCallWithUId\\:type\\:ext:completion          | Starts a one-to-one call.                                      |
    | startInviteUsers\\:groupId\\:callType\\:ext\\:completion: | Starts a group call.                                           |
    | getAgoraChatCallConfig                                | Retrieves the configurations of AgoraChatCallKit.              |
    | setRTCToken\\:channelName\\:uid:                        | Sets the RTC Token.                                            |
    | setUsers\\:channelName:                                | Sets the mapping between Chat user ID and Agora user ID (UID). |

    The following table lists the callbacks in \`AgoraChatCallDelegate\`:

    | Event                                                       | Description                                                             |
    | ----------------------------------------------------------- | ----------------------------------------------------------------------- |
    | callDidEnd\\:reason\\:time\\:type:                             | Occurs when the call ends.                                              |
    | multiCallDidInvitingWithCurVC\\:callType\\:excludeUsers\\:ext: | Occurs when a member of the group call invites other users to the call. |
    | callDidReceive\\:inviter\\:ext:                               | Occurs when the call invitation is received and the device rings.       |
    | callDidRequestRTCTokenForAppId\\:channelName\\:account\\:uid:  | Requests the RTC token.                                                 |
    | callDidOccurError:                                          | Reports exceptions and errors during the call.                          |
    | remoteUserDidJoinChannel\\:uid\\:username:                    | Occurs when a remote user joins the call.                               |
    | callDidJoinChannel\\:uid:                                    | Occurs when the current user joins the call.                            |

    ### Sample project [#sample-project-1]

    Agora provides an open-source [AgoraChat-ios](https://github.com/AgoraIO-Usecase/AgoraChat-ios) sample project on GitHub. You can download the sample to try it out or view the source code.

    The sample project uses the Chat user ID to join a channel, which enables displaying the user ID in the view of the call. If you use the methods of the Agora to start a call, you can also use the Integer UID to join a channel.

    ### Import AgoraChatCallKit manually [#import-agorachatcallkit-manually]

    Refer to the following steps to manually add \`AgoraChatCallKit\` to your project:

    1. [Download AgoraChatCallKit](https://github.com/AgoraIO-Usecase/AgoraChat-CallKit-ios), and extract the downloaded file.
    2. Copy and paste \`AgoraChatCallKit.framework\` to the directory of your project.
    3. In Xcode, go to **TARGETS** > **Project Name** > **General**. Drag \`AgoraChatCallKit.framework\` under **Frameworks, Libraries, and Embedded Content**, and set the **Embed** attribute of \`AgoraChatCallKit.framework\` as **Embed & Sign**.

    ### Other project settings [#other-project-settings]

    You can configure the following project settings according to your use case:

    * To run the app in the background, go to \`info.plist\`, click \`+\`, and add \`Required background modes\`. Set \`Type\` as \`Array\`, and add \`App plays audio or streams audio/video using AirPlay\` as a value under \`Required background modes\`.
    * To use the Apple \`PushKit\` and \`CallKit\`, go to **TARGETS** > **Project Name** > **Signing and Capabilities**. Under **Background Modes**, check \`Voice over IP\`.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    \`AgoraChatCallKit\` is an open-source audio and video UI library developed based on Agora's real-time communications and signaling services. With this library, you can implement audio and video calling functionalities with enhanced synchronization between multiple devices. In use-cases where a user ID is logged in to multiple devices, once the user deals with an incoming call that is ringing on one device, all the other devices stop ringing simultaneously.

    This page describes how to implement real-time audio and video communications using the \`AgoraChatCallKit\`.

    ## Understand the tech [#understand-the-tech-2]

    The basic process for implementing real-time audio and video communications with \`AgoraChatCallKit\` is as follows:

    1. Initialize \`AgoraChatCallKit\` by calling \`init\`.
    2. Call \`startCall\` on the caller's client to send a call invitation for one-to-one or group calls.
    3. On the callee's client, accept or decline the call invitation after receiving \`onInvite\`. Once a user accepts the invitation, they enter the call.
    4. When the call ends, the SDK triggers the \`onStateChange\` callback.

    ## Prerequisites [#prerequisites-2]

    Before proceeding, ensure that your development environment meets the following requirements:

    * A valid [Agora account](/en/introduction/account#sign-up-for-an-agora-account).
    * An Agora project that has [enabled Chat](../../get-started/enable).
    * A Chat project that has integrated the Chat SDK and implemented the [basic real-time chat functionalities](../../get-started-sdk), including users logging in and out and sending and receiving messages.

    ## Project setup [#project-setup-2]

    1. In your terminal, run the following command to install the call kit:

       \`\`\`bash
       npm install chat-callkit
       \`\`\`

    2. Add the following line to import the callkit:

       \`\`\`javascript
       import Callkit from 'chat-callkit';
       \`\`\`

    ## Implement audio and video calling [#implement-audio-and-video-calling-2]

    This section introduces the core steps for implementing audio and video calls in your project.

    ### Initialize AgoraChatCallKit [#initialize-agorachatcallkit-2]

    Call \`init\` to initialize the \`AgoraChatCallKit\`.

    \`\`\`javascript
    /**
     * Initialize AgoraChatCallKit
     *
     * @param appId       The Agora App ID.
     * @param agoraUid    The Agora user ID (UID).
     * @param connection  The Chat SDK Connection instance.
     */
    CallKit.init(appId, agoraUid, connection);
    \`\`\`

    ### Send a call invitation [#send-a-call-invitation-2]

    From the caller's client, call \`startCall\` to send a call invitation for a one-to-one call or group call. You need to specify the call type when calling the method.

    * One-to-one call

      In a one-to-one call, the caller sends a text message to the callee as the call invitation.

      \`\`\`javascript
      let options = {
          /** The call type:
           * 0: One-to-one audio call
           * 1: One-to-one video call
           * 2: Group video call
           * 3: Group audio call
           */
          callType: 0,
          chatType: 'singleChat',
          /** The Chat user ID. */
          to: 'userId',
          /** The invitation message. */
          message: 'Join me on the call',
          /** The channel name for the call. */
          channel: 'channel',
          /** The RTC token. */
          accessToken: 'Agora token',
      };
      CallKit.startCall(options);
      \`\`\`

    * Group call

      In a group call, the caller sends a text message to the chat group or chat room, while sending a CMD message to the users for joining the call.

      \`\`\`javascript
      let options = {
          /** The call type:
           * 0: One-to-one audio call
           * 1: One-to-one video call
           * 2: Group video call
           * 3: Group audio call
           */
          callType: 2,
          chatType: 'groupChat',
          /** The Chat user ID. */
          to: ['userId'],
          /** The invitation message. */
          message: 'Join me on the call',
          /** The group ID. */
          groupId: 'groupId',
          /** The group name. */
          groupName: 'group name',
          /** The RTC token. */
          accessToken: 'Agora token',
          /** The channel name for the call. */
          channel: 'channel',
      };
      CallKit.startCall(options);
      \`\`\`

    The following screenshot gives an example of the user interface after sending a call invitation for one-to-one video call:

    ![1655259671848](https://web-cdn.agora.io/docs-files/1655259671848)

    ### Receive the invitation [#receive-the-invitation-2]

    Once a call invitation is sent, if the callee is online and available for a call, the callee receives the invitation in the \`onInvite\` callback. You can pop out a user interface that allows the callee to accept or decline the invitation in this callback.

    \`\`\`javascript
    /**
     * Handles the call invitation.
     *
     * @param result Whether to pop out the user interface for answering the call.
     *               - true: Yes.
     *               - false: No. In this situation, you do not need to pass the RTC token.
     * @param accessToken The RTC token.
     */
    CallKit.answerCall(result, accessToken);
    \`\`\`

    The following screenshot gives an example of the user interface after receiving a call invitation for one-to-one video call:

    ![1655259682186](https://web-cdn.agora.io/docs-files/1655259682186)

    ### Send a call invitation during a group call [#send-a-call-invitation-during-a-group-call-2]

    In call sessions with multiple users, these users can also send call invitations to other users. After sending the invitation, the SDK triggers the \`onAddPerson\` callback on the sender's client. In this callback, you can ask the senders to specify the user they want to invite to the group call and then call \`startCall\` to send out the invitation.

    ### Listen for callback events [#listen-for-callback-events-2]

    During the call, you can also listen for the following callback events:

    \`\`\`javascript
    function Call() {
      // Handles call state changes.
      const handleCallStateChange = (info) => {
        switch (info.type) {
          case 'hangup':
            // The call is hung up.
            break;
          case 'accept':
            // The callee accepts the call invitation.
            break;
          case 'refuse':
            // The callee refuses the call invitation.
            break;
          case 'user-published':
            // A remote user publishes media streams during the call.
            break;
          case 'user-unpublished':
            // A remote user stops publishing media streams during the call.
            break;
          case 'user-left':
            // A remote user leaves the call.
            break;
          default:
            break;
        }
      };
      return ;
    }
    \`\`\`

    ### End the call [#end-the-call-2]

    A one-to-one call ends as soon as one of the two users hangs up, while a group call ends only after the local user hangs up. If the local user hangs up the call, the SDK triggers \`onStateChange\` with the \`info.type\` of \`hangup\`. If the remote user hangs up the call, the SDK triggers \`onStateChange\` with the \`info.type\` of \`user-left\`.

    ## Next steps [#next-steps-2]

    This section contains extra steps you can take for the audio and video call functionalities in your project.

    ### Authenticate users with the RTC token [#authenticate-users-with-the-rtc-token-2]

    To enhance communication security, Agora recommends that you authenticate app users with the RTC token before they join a call. To do this, you need to make sure that the [Primary Certificate of your project is enabled](/en/introduction/account#get-the-app-id-and-app-certificate).

    Tokens are generated on your app server using the token generator provided by Agora. After you retrieve the token, pass the token to the callkit when calling \`startCall\` and \`answerCall\`. For how to generate a token on the server and retrieve and renew the token on the client, see  [Secure authentication with tokens](../secure-access-and-authentication/authentication).

    ## Reference [#reference-2]

    This section provides other reference information that you can refer to when implementing real-time audio and video communications functionalities.

    ### API list [#api-list-2]

    \`AgoraChatCallKit\` provides the following APIs:

    Methods:

    | Method                  | Description                                                                                                                    |
    | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
    | initWithConfig:delegate | Initializes \`AgoraChatCallKit\`.                                                                                                |
    | startCall               | Starts a call.                                                                                                                 |
    | answerCall              | Answers the call.                                                                                                              |
    | setUserIdMap            | Sets the mapping between Chat user ID and Agora user ID (UID). The format is \`{[uid1]: 'custom name', [uid2]: 'custom name'}\`. |

    Callbacks:

    | Event         | Description                                            |
    | ------------- | ------------------------------------------------------ |
    | onAddPerson   | Occurs when the user invites another user to the call. |
    | onInvite      | Occurs when the call invitation is received.           |
    | onStateChange | Occurs when the call state changes.                    |

    Attributes:

    | Attribute     | Description                                   |
    | ------------- | --------------------------------------------- |
    | contactAvatar | The avatar displayed during one-to-one calls. |
    | groupAvatar   | The avatar displayed during group calls.      |
    | ringingSource | The ringtone file.                            |

    ### Sample project [#sample-project-2]

    Agora provides an open-source [AgoraChatCallKit](https://github.com/AgoraIO-Usecase/AgoraChat-CallKit-web/tree/master/demo) sample project on GitHub. You can download the sample to try it out or view the source code.

    The sample project uses the Chat user ID to join a channel, which enables displaying the user ID in the view of the call. If you use the methods of the Agora to start a call, you can also use the Integer UID to join a channel.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "`AgoraChatCallKit` is an open-source audio and video UI library developed based on Agora's real-time communications and signaling services. With this library, you can implement audio and video calling functionalities with enhanced synchronization between multiple devices. In use-cases where a user ID is logged in to multiple devices, once the user deals with an incoming call that is ringing on one device, all the other devices stop ringing simultaneously."
  }, {
    heading: undefined,
    content: "This page describes how to implement real-time audio and video communications using the `AgoraChatCallKit`."
  }, {
    heading: "understand-the-tech",
    content: "The basic process for implementing real-time audio and video communications with `AgoraChatCallKit` is as follows:"
  }, {
    heading: "understand-the-tech",
    content: "Initialize `AgoraChatCallKit` by calling `init` and add the `AgoraChatCallKit` event listener by calling `setCallKitListener`."
  }, {
    heading: "understand-the-tech",
    content: "Call `startSingleCall` or `startInviteMultipleCall` on the caller's client to send a call invitation for one-to-one or group calls."
  }, {
    heading: "understand-the-tech",
    content: "On the callee's client, accept or decline the call invitation after receiving `onReceivedCall`. Once a user accepts the invitation, they enter the call."
  }, {
    heading: "understand-the-tech",
    content: "When the call ends, the SDK triggers the `onEndCallWithReason` callback."
  }, {
    heading: "prerequisites",
    content: "Before proceeding, ensure that your development environment meets the following requirements:"
  }, {
    heading: "prerequisites",
    content: "Java Development Kit 1.8 or later."
  }, {
    heading: "prerequisites",
    content: "Android Studio 3.5 or later."
  }, {
    heading: "prerequisites",
    content: "`targetSdkVersion` 30."
  }, {
    heading: "prerequisites",
    content: "`minSdkVersion` 21."
  }, {
    heading: "prerequisites",
    content: "Gradle 4.6 or later."
  }, {
    heading: "prerequisites",
    content: "a Chat project that has integrated the Chat SDK and implemented the basic real-time chat functionalities, including users logging in and out and sending and receiving messages."
  }, {
    heading: "project-setup",
    content: "Take the following steps to integrate the `AgoraChatCallKit` into your project and set up the development environment."
  }, {
    heading: "project-setup",
    content: "Add the dependency"
  }, {
    heading: "project-setup",
    content: "`AgoraChatCallKit` is developed upon `io.agora.rtc:chat-sdk:x.x.x` (1.0.5 and later) and `io.agora.rtc:full-rtc-basic:x.x.x` (3.6.2 and later). Follow the steps to add `AgoraChatCallKit` using Gradle."
  }, {
    heading: "project-setup",
    content: "In `/Gradle Scripts/build.gradle(Module: .app)`, add the following lines to integrate the `AgoraChatCallKit` into your Android project:"
  }, {
    heading: "project-setup",
    content: "Add project permissions"
  }, {
    heading: "project-setup",
    content: "In `/app/Manifests/AndroidManifest.xml`, add the following permissions after `</application>`:"
  }, {
    heading: "project-setup",
    content: "Add the `AgoraChatCallKit` Activity"
  }, {
    heading: "project-setup",
    content: "In `/app/Manifests/AndroidManifest.xml`, add activities for the one-to-one audio and video call, and the group video call, for example, `CallSingleBaseActivity` (inherited from `EaseCallSingleBaseActivity`) and `CallMultipleBaseActivity` (inherited from `EaseCallMultipleBaseActivity`)."
  }, {
    heading: "implement-audio-and-video-calling",
    content: "This section introduces the core steps for implementing audio and video calls in your project."
  }, {
    heading: "initialize-agorachatcallkit",
    content: "Call `init` to initialize the `AgoraChatCallKit` after the Chat SDK is initialized. You can also add callback events to listen for and set the configurations. Refer to the following sample code:"
  }, {
    heading: "initialize-agorachatcallkit",
    content: "In this method, you need to set the `EaseCallKitConfig` class. Some of the configurations include the following:"
  }, {
    heading: "send-a-call-invitation",
    content: "From the caller's client, call `startSingleCall` or `startInviteMultipleCall` to send a call invitation for a one-to-one call or group call. You need to specify the call type when calling the method."
  }, {
    heading: "send-a-call-invitation",
    content: "One-to-one audio and video call"
  }, {
    heading: "send-a-call-invitation",
    content: "Call `startSingleCall` to start a one-to-one call. You need to specify the call type as an audio call or video call in this method."
  }, {
    heading: "send-a-call-invitation",
    content: "The following screenshot gives an example of the user interface after sending a call invitation for one-to-one audio call:"
  }, {
    heading: "send-a-call-invitation",
    content: "Group audio and video call"
  }, {
    heading: "send-a-call-invitation",
    content: "Call `startInviteMultipleCall` to start a group call. Set the call type as audio call or video call. You can set the users you want to invite from a chat group or the contact list. Refer to `ConferenceInviteActivity` in the sample project for implementation."
  }, {
    heading: "receive-the-invitation",
    content: "Once a call invitaion is sent, the callee receives the invitation in the `onReceivedCall` callback."
  }, {
    heading: "receive-the-invitation",
    content: "If the callee is online and available for a call, you can pop out a user interface that allows the callee to accept or decline the invitation. Refer to the following screenshot to implement the interface:"
  }, {
    heading: "send-a-call-invitation-during-a-group-call",
    content: "In call sessions with multiple users, these users can also send call invitations to other users. After sending the invitation, the SDK triggers the `onInviteUsers` callback in `EaseCallKitListener` on the sender's client."
  }, {
    heading: "send-a-call-invitation-during-a-group-call",
    content: "Refer to `io.agora.chatdemo.group.fragments.MultiplyVideoSelectMemberChildFragment` in the sample project for the user interface of the call invitation."
  }, {
    heading: "listen-for-callback-events",
    content: "When a remote user joins the call, all the other users in the call receive the `onRemoteUserJoinChannel` callback. You need to look up the Chat user ID corresponding to the Agora UID in your app server."
  }, {
    heading: "listen-for-callback-events",
    content: "If you find the Chat user ID, construct the user ID to an `EaseUserAccount` object and return it to the app using the `callback` parameter in `onRemoteUserJoinChannel`. For the `callback` parameter, implement `onUserAccount` in `EaseCallGetUserAccountCallback`."
  }, {
    heading: "listen-for-callback-events",
    content: "If you fail to find the Chat user ID, report the error code and descriptions using the `onSetUserAccountError` callback in the `EaseCallGetYserAccountCallback` class."
  }, {
    heading: "end-the-call",
    content: "A one-to-one call ends as soon as one of the two users hangs up, while a group call ends only after the local user hangs up. When the call ends, the SDK triggers the `onEndCallWithReason` callback."
  }, {
    heading: "next-steps",
    content: "This section contains extra steps you can take for the audio and video call functionalities in your project."
  }, {
    heading: "call-exceptions",
    content: "If exceptions or errors occur during a call, the SDK triggers the `onCallError` callback in the `EaseCallKitListener` class, which reports the detailed information of the exception in `AggoraChatCallError`."
  }, {
    heading: "call-exceptions",
    content: "Types of call errors are as follows:"
  }, {
    heading: "update-the-call-kit-configuration",
    content: "After initializing the `AgoraChatCallKit`, you can refer to the following sample code to update the configuration of the call kit:"
  }, {
    heading: "update-the-user-avatar-or-nickname",
    content: "When changes to the UI or the channel state occur, for example, when a new user joins the channel, `onUserInfoUpdated` is triggered to notify the app to update the UI."
  }, {
    heading: "update-the-user-avatar-or-nickname",
    content: "After a user updates the user information, call `io.agora.chat.callkit.general.EaseCallKitConfig#setUserInfo` to set the modified user information. Ensure that this method is implemented in a synchronous function so that the UI is updated timely."
  }, {
    heading: "authenticate-users-with-the-rtc-token",
    content: "To enhance communication security, Agora recommends that you authenticate app users with the RTC token before they join a call. To do this, you need to make sure that the Primary Certificate of your project is enabled, and `setEnableRTCToken` in the `AgoraChatCallKit` is set to `true`."
  }, {
    heading: "authenticate-users-with-the-rtc-token",
    content: "Once you enable token authentication, the SDK triggers the `onGenerateRTCToken` callback. You need to retrieve an RTC token in this callback following the steps:"
  }, {
    heading: "authenticate-users-with-the-rtc-token",
    content: "Retrieve the RTC token and Agora UID from your app server."
  }, {
    heading: "authenticate-users-with-the-rtc-token",
    content: "Trigger `onSetToken` to pass the token and UID to the callback object."
  }, {
    heading: "authenticate-users-with-the-rtc-token",
    content: "`AgoraChatCallKit` uses the token and UID to join the channel."
  }, {
    heading: "authenticate-users-with-the-rtc-token",
    content: "Tokens are generated on your app server using the token generator provided by Agora. For how to generate a token on the server, see Secure authentication with tokens."
  }, {
    heading: "push-notifications",
    content: "In use-cases where the app runs on the background or goes offline, use push notifications to ensure that the callee receives the call invitation. To enable push notifications, see Set up push notifications."
  }, {
    heading: "push-notifications",
    content: "Once push notifications are enabled, when a call invitation arrives, a notification message pops out on the notification panel. Users can click the message to see the call invitation."
  }, {
    heading: "reference",
    content: "This section provides other reference information that you can refer to when implementing real-time audio and video communications functionalities."
  }, {
    heading: "api-list",
    content: "The `AgoraChatCallKit` provides the following APIs:"
  }, {
    heading: "api-list",
    content: "Method"
  }, {
    heading: "api-list",
    content: "Description"
  }, {
    heading: "api-list",
    content: "init"
  }, {
    heading: "api-list",
    content: "Initializes AgoraChatCallKit."
  }, {
    heading: "api-list",
    content: "setCallKitListener"
  }, {
    heading: "api-list",
    content: "Sets the event listener of the call kit."
  }, {
    heading: "api-list",
    content: "startSingleCall"
  }, {
    heading: "api-list",
    content: "Starts a one-to-one call."
  }, {
    heading: "api-list",
    content: "startInviteMultipleCall"
  }, {
    heading: "api-list",
    content: "Starts a group call."
  }, {
    heading: "api-list",
    content: "getCallKitConfig"
  }, {
    heading: "api-list",
    content: "Retrieves the configurations of AgoraChatCallKit."
  }, {
    heading: "api-list",
    content: "registerVideoCallClass"
  }, {
    heading: "api-list",
    content: "Registers a one-to-one video call class."
  }, {
    heading: "api-list",
    content: "registerMultipleVideoClass"
  }, {
    heading: "api-list",
    content: "Registers a group video call class."
  }, {
    heading: "api-list",
    content: "`EaseCallKitListener` provides the following callback events:"
  }, {
    heading: "api-list",
    content: "Event"
  }, {
    heading: "api-list",
    content: "Description"
  }, {
    heading: "api-list",
    content: "onEndCallWithReason"
  }, {
    heading: "api-list",
    content: "Occurs when the call ends."
  }, {
    heading: "api-list",
    content: "onInviteUsers"
  }, {
    heading: "api-list",
    content: "Occurs when a member of the group call invites other users to the call."
  }, {
    heading: "api-list",
    content: "onReceivedCall"
  }, {
    heading: "api-list",
    content: "Occurs when the call invitation is received and the device rings."
  }, {
    heading: "api-list",
    content: "onGenerateToken"
  }, {
    heading: "api-list",
    content: "Requests the RTC token. You need to pass the token to AgoraChatCallKit with callbacks."
  }, {
    heading: "api-list",
    content: "onCallError"
  }, {
    heading: "api-list",
    content: "Reports exceptions and errors during the call."
  }, {
    heading: "api-list",
    content: "onInviteCallMessageSent"
  }, {
    heading: "api-list",
    content: "Occurs when the call invitation is sent."
  }, {
    heading: "api-list",
    content: "onRemoteUserJoinChannel"
  }, {
    heading: "api-list",
    content: "Occurs when a remote user joins the call."
  }, {
    heading: "api-list",
    content: "onUserInfoUpdated"
  }, {
    heading: "api-list",
    content: "Occurs when the user information is updated. This callback is triggered when changes occur to the UI or the channel state in the AgoraChatCallKit."
  }, {
    heading: "api-list",
    content: "`EaseCallGetUserAccountCallback` contains the following APIs:"
  }, {
    heading: "api-list",
    content: "Event"
  }, {
    heading: "api-list",
    content: "Description"
  }, {
    heading: "api-list",
    content: "onUserAccount"
  }, {
    heading: "api-list",
    content: "Occurs when the Chat user ID corresponding to the Agora UID is retrieved."
  }, {
    heading: "api-list",
    content: "onSetUserAccountError"
  }, {
    heading: "api-list",
    content: "Occurs when the app fails to retrieve the user account."
  }, {
    heading: "api-list",
    content: "`EaseCallKitTokenCallback` contains the following APIs:"
  }, {
    heading: "api-list",
    content: "Event"
  }, {
    heading: "api-list",
    content: "Description"
  }, {
    heading: "api-list",
    content: "onSetToken"
  }, {
    heading: "api-list",
    content: "Occurs when the app passes the retrieved RTC token to the AgoraChatCallKit."
  }, {
    heading: "api-list",
    content: "onGetTokenError"
  }, {
    heading: "api-list",
    content: "Occurs when the app fails to get the RTC token."
  }, {
    heading: "sample-project",
    content: "Agora provides an open-source AgoraChat-android sample project on GitHub. You can download the sample to try it out or view the source code."
  }, {
    heading: "sample-project",
    content: "The sample project uses the Chat user ID to join a channel, which enables displaying the user ID in the view of the call. If you use the methods of the Agora to start a call, you can also use the Integer UID to join a channel."
  }, {
    heading: "sample-project",
    content: "**Currently, there is no CallKit for this platform.**"
  }, {
    heading: "sample-project",
    content: "**Currently, there is no CallKit for this platform.**"
  }, {
    heading: "sample-project",
    content: "**Currently, there is no CallKit for this platform.**"
  }, {
    heading: "sample-project",
    content: "**Currently, there is no CallKit for this platform.**"
  }, {
    heading: "sample-project",
    content: "`AgoraChatCallKit` is an open-source audio and video UI library developed based on Agora's real-time communications and signaling services. With this library, you can implement audio and video calling functionalities with enhanced synchronization between multiple devices. In use-cases where a user ID is logged in to multiple devices, once the user deals with an incoming call that is ringing on one device, all the other devices stop ringing simultaneously."
  }, {
    heading: "sample-project",
    content: "This page describes how to implement real-time audio and video communications using the `AgoraChatCallKit`."
  }, {
    heading: "understand-the-tech-1",
    content: "The basic process for implementing real-time audio and video communications with `AgoraChatCallKit` is as follows:"
  }, {
    heading: "understand-the-tech-1",
    content: "Initialize `AgoraChatCallKit` by calling `init`."
  }, {
    heading: "understand-the-tech-1",
    content: "Call `startSingleCallWithUid` or `startInviteUsers` on the caller's client to send a call invitation for one-to-one or group calls."
  }, {
    heading: "understand-the-tech-1",
    content: "On the callee's client, accept or decline the call invitation after receiving `callDidReceive`. Once a user accepts the invitation, they enter the call."
  }, {
    heading: "understand-the-tech-1",
    content: "When the call ends, the SDK triggers the `callDidEnd` callback."
  }, {
    heading: "prerequisites-1",
    content: "Before proceeding, ensure that your development environment meets the following requirements:"
  }, {
    heading: "prerequisites-1",
    content: "Xcode 9.0 or later."
  }, {
    heading: "prerequisites-1",
    content: "A device running iOS 10.0 or later."
  }, {
    heading: "prerequisites-1",
    content: "A Chat project that has integrated the Chat SDK and implemented the basic real-time chat functionalities, including users logging in and out and sending and receiving messages."
  }, {
    heading: "project-setup-1",
    content: "Take the following steps to integrate the `AgoraChatCallKit` into your project and set up the development environment."
  }, {
    heading: "add-the-agorachatcallkit-framework",
    content: "`AgoraChatCallKit` is developed upon `Agora_Chat_iOS`, `Masonry`, `AgoraRtcEngine_iOS/RtcBasic`, and `SDKWebImage`. Refer to the following steps to import `AgoraChatCallKit` into your project. If you prefer to add the framework manually, refer to Manually import AgoraChatCallKit."
  }, {
    heading: "add-the-agorachatcallkit-framework",
    content: "Install CocoaPods if you have not. For details, see Getting Started with CocoaPods."
  }, {
    heading: "add-the-agorachatcallkit-framework",
    content: "If your project does not have a `Podfile` file, navigate to the project root directory, and run the `pod init` command to create a text file `Podfile` in the project folder."
  }, {
    heading: "add-the-agorachatcallkit-framework",
    content: "Drag `AgoraChatCallKit.framework` to the project and set the `Embed` attribute of `AgoraChatCallKit.framework` as `Embed & Sign` under `Frameworks, Libraries, and Embedded Content`."
  }, {
    heading: "add-the-agorachatcallkit-framework",
    content: "In the project root directory, run `pod install` to add the framework. When the SDK is installed successfully, you can see `Pod installation complete!` in the Terminal and an `xcworkspace` file in the project folder."
  }, {
    heading: "add-the-agorachatcallkit-framework",
    content: "Open the `xcworkspace` file in Xcode."
  }, {
    heading: "add-permissions",
    content: "Open the `info.plist` file, and add the following permissions:"
  }, {
    heading: "add-permissions",
    content: "Key"
  }, {
    heading: "add-permissions",
    content: "Type"
  }, {
    heading: "add-permissions",
    content: "Value"
  }, {
    heading: "add-permissions",
    content: "`Privacy - Microphone Usage Description`"
  }, {
    heading: "add-permissions",
    content: "String"
  }, {
    heading: "add-permissions",
    content: "The description for using the microphone. For example, to access the microphone."
  }, {
    heading: "add-permissions",
    content: "`Privacy - Camera Usage Description`"
  }, {
    heading: "add-permissions",
    content: "String"
  }, {
    heading: "add-permissions",
    content: "The description for using the camera. For example, to access the camera."
  }, {
    heading: "implement-audio-and-video-calling-1",
    content: "This section introduces the core steps for implementing audio and video calls in your project."
  }, {
    heading: "initialize-agorachatcallkit-1",
    content: "Call `init` to initialize the `AgoraChatCallKit`."
  }, {
    heading: "initialize-agorachatcallkit-1",
    content: "In this method, you need to set the `AgoraChatCallConfig` interface. Some of the configurations include the following:"
  }, {
    heading: "send-a-call-invitation-1",
    content: "From the caller's client, call `startSingleCallWithUId` or `startInviteUsers` to send a call invitation for a one-to-one call or group call. You need to specify the call type when calling the method."
  }, {
    heading: "send-a-call-invitation-1",
    content: "One-to-one audio call"
  }, {
    heading: "send-a-call-invitation-1",
    content: "One-to-one video call"
  }, {
    heading: "send-a-call-invitation-1",
    content: "Group audio call"
  }, {
    heading: "send-a-call-invitation-1",
    content: "Group video call"
  }, {
    heading: "send-a-call-invitation-1",
    content: "The following screenshot gives an example of the user interface after sending a call invitation for one-to-one audio call:"
  }, {
    heading: "receive-the-invitation-1",
    content: "Once a call invitaion is sent, the callee receives the invitation in the `callDidReceive` callback."
  }, {
    heading: "receive-the-invitation-1",
    content: "If the callee is online and available for a call, you can pop out a user interface that allows the callee to accept or decline the invitation. If you have enabled the iOS CallKit, the system call user interface is launched. Otherwise, you can refer to the following screenshot to implement the interface:"
  }, {
    heading: "send-a-call-invitation-during-a-group-call-1",
    content: "In call sessions with multiple users, these users can also send call invitations to other users. After sending the invitation, the SDK triggers the `multiCallDidInvitingWithCurVC` callback in `AgoraChatCallDelegate` on the sender's client."
  }, {
    heading: "listen-for-callback-events-1",
    content: "During the call, you can also listen for the following callback events:"
  }, {
    heading: "listen-for-callback-events-1",
    content: "`callDidJoinChannel`, occurs when the local user successfully joins the call."
  }, {
    heading: "listen-for-callback-events-1",
    content: "`remoteuserDidJoinChannel`, occurs when the remote user successfully joins the call."
  }, {
    heading: "listen-for-callback-events-1",
    content: "When receiving the `callDidJoinChannel:uid` or `remoteUserDidJoinChannel:uid:username:` callback, the user needs to look up the Chat user ID corresponding to the Agora UID in your app server. If the Chat user ID is found, construct a dictionary with Agora UID and Chat user ID and then set it to the app using `setUsers:channelName:`."
  }, {
    heading: "end-the-call-1",
    content: "A one-to-one call ends as soon as one of the two users hangs up, while a group call ends only after the local user hangs up. When the call ends, the SDK triggers the `callDidEnd` callback."
  }, {
    heading: "next-steps-1",
    content: "This section contains extra steps you can take for the audio and video call functionalities in your project."
  }, {
    heading: "call-exceptions-1",
    content: "If exceptions or errors occur during a call, the SDK triggers the `callDidOccurError` callback, which reports the detailed information of the exception in `AgoraChatCallError`."
  }, {
    heading: "update-the-user-avatar-or-nickname-1",
    content: "After a user joins the call, you can call `setUser` to modify the avatar and nickname of the current user and the other users in the channel."
  }, {
    heading: "authenticate-users-with-the-rtc-token-1",
    content: "To enhance communication security, Agora recommends that you authenticate app users with the RTC token before they join a call. To do this, you need to make sure that the Primary Certificate of your project is enabled, and `enableRTCTokenValidate` in the `AgoraChatCallKit` is set to `YES`."
  }, {
    heading: "authenticate-users-with-the-rtc-token-1",
    content: "Once you enable token authentication, ensure that you listen for the `callDidRequestRTCTokenForAppId` callback. When `callDidRequestRTCTokenForAppId` is triggered, you need to retrieve the token and call `setRTCToken` to pass the token to the CallKit. Tokens are generated on your app server using the token generator provided by Agora. For how to generate a token on the server and retrieve and renew the token on the client, see Secure authentication with tokens."
  }, {
    heading: "reference-1",
    content: "This section provides other reference information that you can refer to when implementing real-time audio and video communications functionalities."
  }, {
    heading: "api-list-1",
    content: "The `AgoraChatCallKit` framework contains the `AgoraChatCallManager` and `AgoraChatCallDelegate` classes."
  }, {
    heading: "api-list-1",
    content: "The following table lists the core methods in `AgoraChatCallManager`:"
  }, {
    heading: "api-list-1",
    content: "Method"
  }, {
    heading: "api-list-1",
    content: "Description"
  }, {
    heading: "api-list-1",
    content: "initWithConfig:delegate"
  }, {
    heading: "api-list-1",
    content: "Initializes AgoraChatCallKit."
  }, {
    heading: "api-list-1",
    content: "startSingleCallWithUId\\:type\\:ext:completion"
  }, {
    heading: "api-list-1",
    content: "Starts a one-to-one call."
  }, {
    heading: "api-list-1",
    content: "startInviteUsers\\:groupId\\:callType\\:ext\\:completion:"
  }, {
    heading: "api-list-1",
    content: "Starts a group call."
  }, {
    heading: "api-list-1",
    content: "getAgoraChatCallConfig"
  }, {
    heading: "api-list-1",
    content: "Retrieves the configurations of AgoraChatCallKit."
  }, {
    heading: "api-list-1",
    content: "setRTCToken\\:channelName\\:uid:"
  }, {
    heading: "api-list-1",
    content: "Sets the RTC Token."
  }, {
    heading: "api-list-1",
    content: "setUsers\\:channelName:"
  }, {
    heading: "api-list-1",
    content: "Sets the mapping between Chat user ID and Agora user ID (UID)."
  }, {
    heading: "api-list-1",
    content: "The following table lists the callbacks in `AgoraChatCallDelegate`:"
  }, {
    heading: "api-list-1",
    content: "Event"
  }, {
    heading: "api-list-1",
    content: "Description"
  }, {
    heading: "api-list-1",
    content: "callDidEnd\\:reason\\:time\\:type:"
  }, {
    heading: "api-list-1",
    content: "Occurs when the call ends."
  }, {
    heading: "api-list-1",
    content: "multiCallDidInvitingWithCurVC\\:callType\\:excludeUsers\\:ext:"
  }, {
    heading: "api-list-1",
    content: "Occurs when a member of the group call invites other users to the call."
  }, {
    heading: "api-list-1",
    content: "callDidReceive\\:inviter\\:ext:"
  }, {
    heading: "api-list-1",
    content: "Occurs when the call invitation is received and the device rings."
  }, {
    heading: "api-list-1",
    content: "callDidRequestRTCTokenForAppId\\:channelName\\:account\\:uid:"
  }, {
    heading: "api-list-1",
    content: "Requests the RTC token."
  }, {
    heading: "api-list-1",
    content: "callDidOccurError:"
  }, {
    heading: "api-list-1",
    content: "Reports exceptions and errors during the call."
  }, {
    heading: "api-list-1",
    content: "remoteUserDidJoinChannel\\:uid\\:username:"
  }, {
    heading: "api-list-1",
    content: "Occurs when a remote user joins the call."
  }, {
    heading: "api-list-1",
    content: "callDidJoinChannel\\:uid:"
  }, {
    heading: "api-list-1",
    content: "Occurs when the current user joins the call."
  }, {
    heading: "sample-project-1",
    content: "Agora provides an open-source AgoraChat-ios sample project on GitHub. You can download the sample to try it out or view the source code."
  }, {
    heading: "sample-project-1",
    content: "The sample project uses the Chat user ID to join a channel, which enables displaying the user ID in the view of the call. If you use the methods of the Agora to start a call, you can also use the Integer UID to join a channel."
  }, {
    heading: "import-agorachatcallkit-manually",
    content: "Refer to the following steps to manually add `AgoraChatCallKit` to your project:"
  }, {
    heading: "import-agorachatcallkit-manually",
    content: "Download AgoraChatCallKit, and extract the downloaded file."
  }, {
    heading: "import-agorachatcallkit-manually",
    content: "Copy and paste `AgoraChatCallKit.framework` to the directory of your project."
  }, {
    heading: "import-agorachatcallkit-manually",
    content: "In Xcode, go to **TARGETS** > **Project Name** > **General**. Drag `AgoraChatCallKit.framework` under **Frameworks, Libraries, and Embedded Content**, and set the **Embed** attribute of `AgoraChatCallKit.framework` as **Embed & Sign**."
  }, {
    heading: "other-project-settings",
    content: "You can configure the following project settings according to your use case:"
  }, {
    heading: "other-project-settings",
    content: "To run the app in the background, go to `info.plist`, click `+`, and add `Required background modes`. Set `Type` as `Array`, and add `App plays audio or streams audio/video using AirPlay` as a value under `Required background modes`."
  }, {
    heading: "other-project-settings",
    content: "To use the Apple `PushKit` and `CallKit`, go to **TARGETS** > **Project Name** > **Signing and Capabilities**. Under **Background Modes**, check `Voice over IP`."
  }, {
    heading: "other-project-settings",
    content: "`AgoraChatCallKit` is an open-source audio and video UI library developed based on Agora's real-time communications and signaling services. With this library, you can implement audio and video calling functionalities with enhanced synchronization between multiple devices. In use-cases where a user ID is logged in to multiple devices, once the user deals with an incoming call that is ringing on one device, all the other devices stop ringing simultaneously."
  }, {
    heading: "other-project-settings",
    content: "This page describes how to implement real-time audio and video communications using the `AgoraChatCallKit`."
  }, {
    heading: "understand-the-tech-2",
    content: "The basic process for implementing real-time audio and video communications with `AgoraChatCallKit` is as follows:"
  }, {
    heading: "understand-the-tech-2",
    content: "Initialize `AgoraChatCallKit` by calling `init`."
  }, {
    heading: "understand-the-tech-2",
    content: "Call `startCall` on the caller's client to send a call invitation for one-to-one or group calls."
  }, {
    heading: "understand-the-tech-2",
    content: "On the callee's client, accept or decline the call invitation after receiving `onInvite`. Once a user accepts the invitation, they enter the call."
  }, {
    heading: "understand-the-tech-2",
    content: "When the call ends, the SDK triggers the `onStateChange` callback."
  }, {
    heading: "prerequisites-2",
    content: "Before proceeding, ensure that your development environment meets the following requirements:"
  }, {
    heading: "prerequisites-2",
    content: "A valid Agora account."
  }, {
    heading: "prerequisites-2",
    content: "An Agora project that has enabled Chat."
  }, {
    heading: "prerequisites-2",
    content: "A Chat project that has integrated the Chat SDK and implemented the basic real-time chat functionalities, including users logging in and out and sending and receiving messages."
  }, {
    heading: "project-setup-2",
    content: "In your terminal, run the following command to install the call kit:"
  }, {
    heading: "project-setup-2",
    content: "Add the following line to import the callkit:"
  }, {
    heading: "implement-audio-and-video-calling-2",
    content: "This section introduces the core steps for implementing audio and video calls in your project."
  }, {
    heading: "initialize-agorachatcallkit-2",
    content: "Call `init` to initialize the `AgoraChatCallKit`."
  }, {
    heading: "send-a-call-invitation-2",
    content: "From the caller's client, call `startCall` to send a call invitation for a one-to-one call or group call. You need to specify the call type when calling the method."
  }, {
    heading: "send-a-call-invitation-2",
    content: "One-to-one call"
  }, {
    heading: "send-a-call-invitation-2",
    content: "In a one-to-one call, the caller sends a text message to the callee as the call invitation."
  }, {
    heading: "send-a-call-invitation-2",
    content: "Group call"
  }, {
    heading: "send-a-call-invitation-2",
    content: "In a group call, the caller sends a text message to the chat group or chat room, while sending a CMD message to the users for joining the call."
  }, {
    heading: "send-a-call-invitation-2",
    content: "The following screenshot gives an example of the user interface after sending a call invitation for one-to-one video call:"
  }, {
    heading: "receive-the-invitation-2",
    content: "Once a call invitation is sent, if the callee is online and available for a call, the callee receives the invitation in the `onInvite` callback. You can pop out a user interface that allows the callee to accept or decline the invitation in this callback."
  }, {
    heading: "receive-the-invitation-2",
    content: "The following screenshot gives an example of the user interface after receiving a call invitation for one-to-one video call:"
  }, {
    heading: "send-a-call-invitation-during-a-group-call-2",
    content: "In call sessions with multiple users, these users can also send call invitations to other users. After sending the invitation, the SDK triggers the `onAddPerson` callback on the sender's client. In this callback, you can ask the senders to specify the user they want to invite to the group call and then call `startCall` to send out the invitation."
  }, {
    heading: "listen-for-callback-events-2",
    content: "During the call, you can also listen for the following callback events:"
  }, {
    heading: "end-the-call-2",
    content: "A one-to-one call ends as soon as one of the two users hangs up, while a group call ends only after the local user hangs up. If the local user hangs up the call, the SDK triggers `onStateChange` with the `info.type` of `hangup`. If the remote user hangs up the call, the SDK triggers `onStateChange` with the `info.type` of `user-left`."
  }, {
    heading: "next-steps-2",
    content: "This section contains extra steps you can take for the audio and video call functionalities in your project."
  }, {
    heading: "authenticate-users-with-the-rtc-token-2",
    content: "To enhance communication security, Agora recommends that you authenticate app users with the RTC token before they join a call. To do this, you need to make sure that the Primary Certificate of your project is enabled."
  }, {
    heading: "authenticate-users-with-the-rtc-token-2",
    content: "Tokens are generated on your app server using the token generator provided by Agora. After you retrieve the token, pass the token to the callkit when calling `startCall` and `answerCall`. For how to generate a token on the server and retrieve and renew the token on the client, see  Secure authentication with tokens."
  }, {
    heading: "reference-2",
    content: "This section provides other reference information that you can refer to when implementing real-time audio and video communications functionalities."
  }, {
    heading: "api-list-2",
    content: "`AgoraChatCallKit` provides the following APIs:"
  }, {
    heading: "api-list-2",
    content: "Methods:"
  }, {
    heading: "api-list-2",
    content: "Method"
  }, {
    heading: "api-list-2",
    content: "Description"
  }, {
    heading: "api-list-2",
    content: "initWithConfig:delegate"
  }, {
    heading: "api-list-2",
    content: "Initializes `AgoraChatCallKit`."
  }, {
    heading: "api-list-2",
    content: "startCall"
  }, {
    heading: "api-list-2",
    content: "Starts a call."
  }, {
    heading: "api-list-2",
    content: "answerCall"
  }, {
    heading: "api-list-2",
    content: "Answers the call."
  }, {
    heading: "api-list-2",
    content: "setUserIdMap"
  }, {
    heading: "api-list-2",
    content: "Sets the mapping between Chat user ID and Agora user ID (UID). The format is `{[uid1]: 'custom name', [uid2]: 'custom name'}`."
  }, {
    heading: "api-list-2",
    content: "Callbacks:"
  }, {
    heading: "api-list-2",
    content: "Event"
  }, {
    heading: "api-list-2",
    content: "Description"
  }, {
    heading: "api-list-2",
    content: "onAddPerson"
  }, {
    heading: "api-list-2",
    content: "Occurs when the user invites another user to the call."
  }, {
    heading: "api-list-2",
    content: "onInvite"
  }, {
    heading: "api-list-2",
    content: "Occurs when the call invitation is received."
  }, {
    heading: "api-list-2",
    content: "onStateChange"
  }, {
    heading: "api-list-2",
    content: "Occurs when the call state changes."
  }, {
    heading: "api-list-2",
    content: "Attributes:"
  }, {
    heading: "api-list-2",
    content: "Attribute"
  }, {
    heading: "api-list-2",
    content: "Description"
  }, {
    heading: "api-list-2",
    content: "contactAvatar"
  }, {
    heading: "api-list-2",
    content: "The avatar displayed during one-to-one calls."
  }, {
    heading: "api-list-2",
    content: "groupAvatar"
  }, {
    heading: "api-list-2",
    content: "The avatar displayed during group calls."
  }, {
    heading: "api-list-2",
    content: "ringingSource"
  }, {
    heading: "api-list-2",
    content: "The ringtone file."
  }, {
    heading: "sample-project-2",
    content: "Agora provides an open-source AgoraChatCallKit sample project on GitHub. You can download the sample to try it out or view the source code."
  }, {
    heading: "sample-project-2",
    content: "The sample project uses the Chat user ID to join a channel, which enables displaying the user ID in the view of the call. If you use the methods of the Agora to start a call, you can also use the Integer UID to join a channel."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "project-setup",
    content: "Project setup"
  }, {
    id: "implement-audio-and-video-calling",
    content: "Implement audio and video calling"
  }, {
    id: "initialize-agorachatcallkit",
    content: "Initialize AgoraChatCallKit"
  }, {
    id: "send-a-call-invitation",
    content: "Send a call invitation"
  }, {
    id: "receive-the-invitation",
    content: "Receive the invitation"
  }, {
    id: "send-a-call-invitation-during-a-group-call",
    content: "Send a call invitation during a group call"
  }, {
    id: "listen-for-callback-events",
    content: "Listen for callback events"
  }, {
    id: "end-the-call",
    content: "End the call"
  }, {
    id: "next-steps",
    content: "Next steps"
  }, {
    id: "call-exceptions",
    content: "Call exceptions"
  }, {
    id: "update-the-call-kit-configuration",
    content: "Update the call kit configuration"
  }, {
    id: "update-the-user-avatar-or-nickname",
    content: "Update the user avatar or nickname"
  }, {
    id: "authenticate-users-with-the-rtc-token",
    content: "Authenticate users with the RTC token"
  }, {
    id: "push-notifications",
    content: "Push notifications"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-list",
    content: "API list"
  }, {
    id: "sample-project",
    content: "Sample project"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "project-setup-1",
    content: "Project setup"
  }, {
    id: "add-the-agorachatcallkit-framework",
    content: "Add the AgoraChatCallKit framework"
  }, {
    id: "add-permissions",
    content: "Add permissions"
  }, {
    id: "implement-audio-and-video-calling-1",
    content: "Implement audio and video calling"
  }, {
    id: "initialize-agorachatcallkit-1",
    content: "Initialize AgoraChatCallKit"
  }, {
    id: "send-a-call-invitation-1",
    content: "Send a call invitation"
  }, {
    id: "receive-the-invitation-1",
    content: "Receive the invitation"
  }, {
    id: "send-a-call-invitation-during-a-group-call-1",
    content: "Send a call invitation during a group call"
  }, {
    id: "listen-for-callback-events-1",
    content: "Listen for callback events"
  }, {
    id: "end-the-call-1",
    content: "End the call"
  }, {
    id: "next-steps-1",
    content: "Next steps"
  }, {
    id: "call-exceptions-1",
    content: "Call exceptions"
  }, {
    id: "update-the-user-avatar-or-nickname-1",
    content: "Update the user avatar or nickname"
  }, {
    id: "authenticate-users-with-the-rtc-token-1",
    content: "Authenticate users with the RTC token"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "api-list-1",
    content: "API list"
  }, {
    id: "sample-project-1",
    content: "Sample project"
  }, {
    id: "import-agorachatcallkit-manually",
    content: "Import AgoraChatCallKit manually"
  }, {
    id: "other-project-settings",
    content: "Other project settings"
  }, {
    id: "understand-the-tech-2",
    content: "Understand the tech"
  }, {
    id: "prerequisites-2",
    content: "Prerequisites"
  }, {
    id: "project-setup-2",
    content: "Project setup"
  }, {
    id: "implement-audio-and-video-calling-2",
    content: "Implement audio and video calling"
  }, {
    id: "initialize-agorachatcallkit-2",
    content: "Initialize AgoraChatCallKit"
  }, {
    id: "send-a-call-invitation-2",
    content: "Send a call invitation"
  }, {
    id: "receive-the-invitation-2",
    content: "Receive the invitation"
  }, {
    id: "send-a-call-invitation-during-a-group-call-2",
    content: "Send a call invitation during a group call"
  }, {
    id: "listen-for-callback-events-2",
    content: "Listen for callback events"
  }, {
    id: "end-the-call-2",
    content: "End the call"
  }, {
    id: "next-steps-2",
    content: "Next steps"
  }, {
    id: "authenticate-users-with-the-rtc-token-2",
    content: "Authenticate users with the RTC token"
  }, {
    id: "reference-2",
    content: "Reference"
  }, {
    id: "api-list-2",
    content: "API list"
  }, {
    id: "sample-project-2",
    content: "Sample project"
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
  url: "#project-setup",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#implement-audio-and-video-calling",
  title: _jsx(_Fragment, {
    children: "Implement audio and video calling"
  })
}, {
  depth: 3,
  url: "#initialize-agorachatcallkit",
  title: _jsx(_Fragment, {
    children: "Initialize AgoraChatCallKit"
  })
}, {
  depth: 3,
  url: "#send-a-call-invitation",
  title: _jsx(_Fragment, {
    children: "Send a call invitation"
  })
}, {
  depth: 3,
  url: "#receive-the-invitation",
  title: _jsx(_Fragment, {
    children: "Receive the invitation"
  })
}, {
  depth: 3,
  url: "#send-a-call-invitation-during-a-group-call",
  title: _jsx(_Fragment, {
    children: "Send a call invitation during a group call"
  })
}, {
  depth: 3,
  url: "#listen-for-callback-events",
  title: _jsx(_Fragment, {
    children: "Listen for callback events"
  })
}, {
  depth: 3,
  url: "#end-the-call",
  title: _jsx(_Fragment, {
    children: "End the call"
  })
}, {
  depth: 2,
  url: "#next-steps",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 3,
  url: "#call-exceptions",
  title: _jsx(_Fragment, {
    children: "Call exceptions"
  })
}, {
  depth: 3,
  url: "#update-the-call-kit-configuration",
  title: _jsx(_Fragment, {
    children: "Update the call kit configuration"
  })
}, {
  depth: 3,
  url: "#update-the-user-avatar-or-nickname",
  title: _jsx(_Fragment, {
    children: "Update the user avatar or nickname"
  })
}, {
  depth: 3,
  url: "#authenticate-users-with-the-rtc-token",
  title: _jsx(_Fragment, {
    children: "Authenticate users with the RTC token"
  })
}, {
  depth: 3,
  url: "#push-notifications",
  title: _jsx(_Fragment, {
    children: "Push notifications"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-list",
  title: _jsx(_Fragment, {
    children: "API list"
  })
}, {
  depth: 3,
  url: "#sample-project",
  title: _jsx(_Fragment, {
    children: "Sample project"
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
  url: "#project-setup-1",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 3,
  url: "#add-the-agorachatcallkit-framework",
  title: _jsx(_Fragment, {
    children: "Add the AgoraChatCallKit framework"
  })
}, {
  depth: 3,
  url: "#add-permissions",
  title: _jsx(_Fragment, {
    children: "Add permissions"
  })
}, {
  depth: 2,
  url: "#implement-audio-and-video-calling-1",
  title: _jsx(_Fragment, {
    children: "Implement audio and video calling"
  })
}, {
  depth: 3,
  url: "#initialize-agorachatcallkit-1",
  title: _jsx(_Fragment, {
    children: "Initialize AgoraChatCallKit"
  })
}, {
  depth: 3,
  url: "#send-a-call-invitation-1",
  title: _jsx(_Fragment, {
    children: "Send a call invitation"
  })
}, {
  depth: 3,
  url: "#receive-the-invitation-1",
  title: _jsx(_Fragment, {
    children: "Receive the invitation"
  })
}, {
  depth: 3,
  url: "#send-a-call-invitation-during-a-group-call-1",
  title: _jsx(_Fragment, {
    children: "Send a call invitation during a group call"
  })
}, {
  depth: 3,
  url: "#listen-for-callback-events-1",
  title: _jsx(_Fragment, {
    children: "Listen for callback events"
  })
}, {
  depth: 3,
  url: "#end-the-call-1",
  title: _jsx(_Fragment, {
    children: "End the call"
  })
}, {
  depth: 2,
  url: "#next-steps-1",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 3,
  url: "#call-exceptions-1",
  title: _jsx(_Fragment, {
    children: "Call exceptions"
  })
}, {
  depth: 3,
  url: "#update-the-user-avatar-or-nickname-1",
  title: _jsx(_Fragment, {
    children: "Update the user avatar or nickname"
  })
}, {
  depth: 3,
  url: "#authenticate-users-with-the-rtc-token-1",
  title: _jsx(_Fragment, {
    children: "Authenticate users with the RTC token"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-list-1",
  title: _jsx(_Fragment, {
    children: "API list"
  })
}, {
  depth: 3,
  url: "#sample-project-1",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#import-agorachatcallkit-manually",
  title: _jsx(_Fragment, {
    children: "Import AgoraChatCallKit manually"
  })
}, {
  depth: 3,
  url: "#other-project-settings",
  title: _jsx(_Fragment, {
    children: "Other project settings"
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
  url: "#project-setup-2",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#implement-audio-and-video-calling-2",
  title: _jsx(_Fragment, {
    children: "Implement audio and video calling"
  })
}, {
  depth: 3,
  url: "#initialize-agorachatcallkit-2",
  title: _jsx(_Fragment, {
    children: "Initialize AgoraChatCallKit"
  })
}, {
  depth: 3,
  url: "#send-a-call-invitation-2",
  title: _jsx(_Fragment, {
    children: "Send a call invitation"
  })
}, {
  depth: 3,
  url: "#receive-the-invitation-2",
  title: _jsx(_Fragment, {
    children: "Receive the invitation"
  })
}, {
  depth: 3,
  url: "#send-a-call-invitation-during-a-group-call-2",
  title: _jsx(_Fragment, {
    children: "Send a call invitation during a group call"
  })
}, {
  depth: 3,
  url: "#listen-for-callback-events-2",
  title: _jsx(_Fragment, {
    children: "Listen for callback events"
  })
}, {
  depth: 3,
  url: "#end-the-call-2",
  title: _jsx(_Fragment, {
    children: "End the call"
  })
}, {
  depth: 2,
  url: "#next-steps-2",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 3,
  url: "#authenticate-users-with-the-rtc-token-2",
  title: _jsx(_Fragment, {
    children: "Authenticate users with the RTC token"
  })
}, {
  depth: 2,
  url: "#reference-2",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-list-2",
  title: _jsx(_Fragment, {
    children: "API list"
  })
}, {
  depth: 3,
  url: "#sample-project-2",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h2: "h2",
    h3: "h3",
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
  }, { _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "web",
    platforms: '["android","flutter","react-native","unity","windows","ios","web"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsxs(_components.p, {
        children: [_jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " is an open-source audio and video UI library developed based on Agora's real-time communications and signaling services. With this library, you can implement audio and video calling functionalities with enhanced synchronization between multiple devices. In use-cases where a user ID is logged in to multiple devices, once the user deals with an incoming call that is ringing on one device, all the other devices stop ringing simultaneously."]
      }), _jsxs(_components.p, {
        children: ["This page describes how to implement real-time audio and video communications using the ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), "."]
      }), _jsx(_components.h2, {
        id: "understand-the-tech",
        children: "Understand the tech"
      }), _jsxs(_components.p, {
        children: ["The basic process for implementing real-time audio and video communications with ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " is as follows:"]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Initialize ", _jsx(_components.code, {
            children: "AgoraChatCallKit"
          }), " by calling ", _jsx(_components.code, {
            children: "init"
          }), " and add the ", _jsx(_components.code, {
            children: "AgoraChatCallKit"
          }), " event listener by calling ", _jsx(_components.code, {
            children: "setCallKitListener"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Call ", _jsx(_components.code, {
            children: "startSingleCall"
          }), " or ", _jsx(_components.code, {
            children: "startInviteMultipleCall"
          }), " on the caller's client to send a call invitation for one-to-one or group calls."]
        }), `
`, _jsxs(_components.li, {
          children: ["On the callee's client, accept or decline the call invitation after receiving ", _jsx(_components.code, {
            children: "onReceivedCall"
          }), ". Once a user accepts the invitation, they enter the call."]
        }), `
`, _jsxs(_components.li, {
          children: ["When the call ends, the SDK triggers the ", _jsx(_components.code, {
            children: "onEndCallWithReason"
          }), " callback."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that your development environment meets the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.a, {
            href: "https://www.oracle.com/java/technologies/downloads/",
            children: "Java Development Kit"
          }), " 1.8 or later."]
        }), `
`, _jsx(_components.li, {
          children: "Android Studio 3.5 or later."
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "targetSdkVersion"
          }), " 30."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "minSdkVersion"
          }), " 21."]
        }), `
`, _jsx(_components.li, {
          children: "Gradle 4.6 or later."
        }), `
`, _jsxs(_components.li, {
          children: ["a Chat project that has integrated the Chat SDK and implemented the ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "basic real-time chat functionalities"
          }), ", including users logging in and out and sending and receiving messages."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "project-setup",
        children: "Project setup"
      }), _jsxs(_components.p, {
        children: ["Take the following steps to integrate the ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " into your project and set up the development environment."]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Add the dependency"
          }), `
`, _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "AgoraChatCallKit"
            }), " is developed upon ", _jsx(_components.code, {
              children: "io.agora.rtc:chat-sdk:x.x.x"
            }), " (1.0.5 and later) and ", _jsx(_components.code, {
              children: "io.agora.rtc:full-rtc-basic:x.x.x"
            }), " (3.6.2 and later). Follow the steps to add ", _jsx(_components.code, {
              children: "AgoraChatCallKit"
            }), " using Gradle."]
          }), `
`, _jsxs(_components.p, {
            children: ["In ", _jsx(_components.code, {
              children: "/Gradle Scripts/build.gradle(Module: .app)"
            }), ", add the following lines to integrate the ", _jsx(_components.code, {
              children: "AgoraChatCallKit"
            }), " into your Android project:"]
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
              children: _jsx(_components.code, {
                children: _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "implementation "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'io.agora.rtc:chat-callkit:1.0.1'"
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
            children: "Add project permissions"
          }), `
`, _jsxs(_components.p, {
            children: ["In ", _jsx(_components.code, {
              children: "/app/Manifests/AndroidManifest.xml"
            }), ", add the following permissions after ", _jsx(_components.code, {
              children: "</application>"
            }), ":"]
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
                    children: "<!-- Add alert window -->"
                  })
                }), `
`, _jsxs(_components.span, {
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
                    children: "uses-permission"
                  }), _jsx(_components.span, {
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
                    children: '"android.permission.SYSTEM_ALERT_WINDOW"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " />"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "<!-- Access to the internet -->"
                  })
                }), `
`, _jsxs(_components.span, {
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
                    children: "uses-permission"
                  }), _jsx(_components.span, {
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
                    children: '"android.permission.INTERNET"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " />"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "<!-- Access to the microphone -->"
                  })
                }), `
`, _jsxs(_components.span, {
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
                    children: "uses-permission"
                  }), _jsx(_components.span, {
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
                    children: '"android.permission.RECORD_AUDIO"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " />"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "<!-- Access to the camera -->"
                  })
                }), `
`, _jsxs(_components.span, {
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
                    children: "uses-permission"
                  }), _jsx(_components.span, {
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
                    children: '"android.permission.CAMERA"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " />"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "<!-- Access to the tasks -->"
                  })
                }), `
`, _jsxs(_components.span, {
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
                    children: "uses-permission"
                  }), _jsx(_components.span, {
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
                    children: '"android.permission.REORDER_TASKS"'
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
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Add the ", _jsx(_components.code, {
              children: "AgoraChatCallKit"
            }), " Activity"]
          }), `
`, _jsxs(_components.p, {
            children: ["In ", _jsx(_components.code, {
              children: "/app/Manifests/AndroidManifest.xml"
            }), ", add activities for the one-to-one audio and video call, and the group video call, for example, ", _jsx(_components.code, {
              children: "CallSingleBaseActivity"
            }), " (inherited from ", _jsx(_components.code, {
              children: "EaseCallSingleBaseActivity"
            }), ") and ", _jsx(_components.code, {
              children: "CallMultipleBaseActivity"
            }), " (inherited from ", _jsx(_components.code, {
              children: "EaseCallMultipleBaseActivity"
            }), ")."]
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
                    children: '".av.CallSingleBaseActivity"'
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
                    children: '"orientation|keyboardHidden|screenSize"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    android:excludeFromRecents"
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
                    children: "    android:label"
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
                    children: '"@string/demo_activity_label_video_call"'
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
                    children: '"singleInstance"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    android:screenOrientation"
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
                    children: '"portrait"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " />"
                  })]
                }), `
`, _jsxs(_components.span, {
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
                    children: '".av.CallMultipleBaseActivity"'
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
                    children: '"orientation|keyboardHidden|screenSize"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    android:excludeFromRecents"
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
                    children: "    android:label"
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
                    children: '"@string/demo_activity_label_multi_call"'
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
                    children: '"singleInstance"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    android:screenOrientation"
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
                    children: '"portrait"'
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
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "implement-audio-and-video-calling",
        children: "Implement audio and video calling"
      }), _jsx(_components.p, {
        children: "This section introduces the core steps for implementing audio and video calls in your project."
      }), _jsx(_components.h3, {
        id: "initialize-agorachatcallkit",
        children: "Initialize AgoraChatCallKit"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "init"
        }), " to initialize the ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " after the Chat SDK is initialized. You can also add callback events to listen for and set the configurations. Refer to the following sample code:"]
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
                children: "// Construct the CallKitConfig class."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "EaseCallKitConfig callKitConfig "
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
                children: " EaseCallKitConfig"
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
                children: "// Set the call out time (ms)."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "callKitConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setCallTimeOut"
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
                children: "30"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 1000"
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
                children: "// Set the Agora App ID."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "callKitConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setAgoraAppId"
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
                children: '"******"'
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
                children: "// Set whether to enable token authentication."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "callKitConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setEnableRTCToken"
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
                children: "// Set the default avatar."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "callKitConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setDefaultHeadImage"
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
                children: "getUsersManager"
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
                children: "getCurrentUserInfo"
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
                children: "getAvatar"
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
                children: "// Set the ringtone file."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "String ringFile "
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
                children: " EaseFileUtils."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getModelFilePath"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(context,"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"huahai.mp3"'
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
                children: "callKitConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setRingFile"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(ringFile);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set the user information."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "Map userInfoMap "
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
                children: " HashMap<>();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "userInfoMap."
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
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"***"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ","
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
                children: " EaseCallUserInfo"
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
                children: '"****"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ","
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
                children: "));"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "userInfoMap."
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
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"***"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ","
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
                children: " EaseCallUserInfo"
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
                children: '"****"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ","
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
                children: "));"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "callKitConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setUserInfoMap"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(userInfoMap);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Call init to initialie EaseCallKit."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "EaseCallKit."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
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
                children: "init"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(context, callKitConfig);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Register the activity added in the Manifest file."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "EaseCallKit."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
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
                children: "registerVideoCallClass"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(CallSingleBaseActivity.class);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "EaseCallKit."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
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
                children: "registerMultipleVideoClass"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(CallMultipleBaseActivity.class);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Add event listeners to the AgoraChatCallKit."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "addCallkitListener"
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
      }), _jsxs(_components.p, {
        children: ["In this method, you need to set the ", _jsx(_components.code, {
          children: "EaseCallKitConfig"
        }), " class. Some of the configurations include the following:"]
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
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * The EaseCallKitConfig class."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " defaultHeadImage"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The default avatar. Set it as the absolute path of a local file or a URL."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " userInfoMap"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "      The dictionary of the user information. The data format is key-value pairs, where key represents the user ID and value is EaseCallUserInfo."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " callTimeOut"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "      The timeout duration for the call invitation, in miliseconds. The default value is 30 seconds."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " agoraAppId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "       The Agora App ID."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " ringFile"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "         The ringtone file, represented by the absolute path of a local file."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " enableRTCToken"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "   Whether to enable token authentication for using the RTC service. If you enabled token authentication in Agora Console, set this parameter as true. The default value is false."
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  */"
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
                children: " EaseCallKitConfig"
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
                children: "    private"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " String defaultHeadImage;"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " Map userInfoMap "
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
                children: " HashMap<>();"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " String ringFile;"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " String agoraAppId;"
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
                children: " long"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " callTimeOut "
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
                children: " 30"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 1000"
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
                children: "    private"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " boolean"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " enableRTCToken "
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "     public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " EaseCallKitConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(){"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ..."
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
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "send-a-call-invitation",
        children: "Send a call invitation"
      }), _jsxs(_components.p, {
        children: ["From the caller's client, call ", _jsx(_components.code, {
          children: "startSingleCall"
        }), " or ", _jsx(_components.code, {
          children: "startInviteMultipleCall"
        }), " to send a call invitation for a one-to-one call or group call. You need to specify the call type when calling the method."]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "One-to-one audio and video call"
          }), `
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "startSingleCall"
            }), " to start a one-to-one call. You need to specify the call type as an audio call or video call in this method."]
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
                    children: "/**"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "* Starts a one-to-one call."
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "*"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "* "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "@param"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: " type"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " The call type:"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "* - CONFERENCE_VOICE_CALL: A one-to-one voice call."
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "* - CONFERENCE_VIDEO_CALL: A one-to-one video call."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "* "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "@param"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: " user"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " The user ID of the callee. Ensure that you set this parameter."
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "* "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "@param"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: " ext"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "  The extension information in the call invitation. Set it as null if you do not need this information."
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "*/"
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
                    children: " startSingleCall"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " EaseCallType type, "
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
                    children: " String user, "
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
                    children: " Map ext){}"
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following screenshot gives an example of the user interface after sending a call invitation for one-to-one audio call:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Group audio and video call"
          }), `
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "startInviteMultipleCall"
            }), " to start a group call. Set the call type as audio call or video call. You can set the users you want to invite from a chat group or the contact list. Refer to ", _jsx(_components.code, {
              children: "ConferenceInviteActivity"
            }), " in the sample project for implementation."]
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
                    children: "/**"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "* Starts a group call."
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "*"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "* "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "@param"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: " type"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " The call type:"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "* - SINGLE_VOICE_CALL: A one-to-one voice call."
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "* - SINGLE_VIDEO_CALL: A one-to-one video call."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "* "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "@param"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: " user"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " The user ID of the callee. Ensure that you set this parameter."
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "* "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "@param"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: " ext"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "  The extension information in the call invitation. Set it as null if you do not need this information."
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "*/"
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
                    children: " startInviteMultipleCall"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " EaseCallType type, "
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
                    children: " String"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "[] users, "
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
                    children: " Map ext) {}"
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "receive-the-invitation",
        children: "Receive the invitation"
      }), _jsxs(_components.p, {
        children: ["Once a call invitaion is sent, the callee receives the invitation in the ", _jsx(_components.code, {
          children: "onReceivedCall"
        }), " callback."]
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
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * Occurs when a call invitation is received."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " callType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The call type."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " fromUserId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The user ID of the caller."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " ext"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The extension information in the call invitation. Set it as null if you do not need this information."
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
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
                children: " onReceivedCall"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(EaseCallType callType, String fromUserId, JSONObject ext);"
              })]
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "If the callee is online and available for a call, you can pop out a user interface that allows the callee to accept or decline the invitation. Refer to the following screenshot to implement the interface:"
      }), _jsx(_components.h3, {
        id: "send-a-call-invitation-during-a-group-call",
        children: "Send a call invitation during a group call"
      }), _jsxs(_components.p, {
        children: ["In call sessions with multiple users, these users can also send call invitations to other users. After sending the invitation, the SDK triggers the ", _jsx(_components.code, {
          children: "onInviteUsers"
        }), " callback in ", _jsx(_components.code, {
          children: "EaseCallKitListener"
        }), " on the sender's client."]
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
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * Occurs when the local user sends a call invitation during a group call."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " callType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The call type."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " existMembers"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The current members of the group call, excluding the local user."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " ext"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The extension information in the call invitation. Set it as null if you do not need this information."
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
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
                children: " onInviteUsers"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(EaseCallType callType, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "String"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "[] existMembers, JSONObject ext);"
              })]
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["Refer to ", _jsx(_components.code, {
          children: "io.agora.chatdemo.group.fragments.MultiplyVideoSelectMemberChildFragment"
        }), " in the ", _jsx(_components.a, {
          href: "https://github.com/AgoraIO-Usecase/AgoraChat-android",
          children: "sample project"
        }), " for the user interface of the call invitation."]
      }), _jsx(_components.h3, {
        id: "listen-for-callback-events",
        children: "Listen for callback events"
      }), _jsxs(_components.p, {
        children: ["When a remote user joins the call, all the other users in the call receive the ", _jsx(_components.code, {
          children: "onRemoteUserJoinChannel"
        }), " callback. You need to look up the Chat user ID corresponding to the Agora UID in your app server."]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["If you find the Chat user ID, construct the user ID to an ", _jsx(_components.code, {
            children: "EaseUserAccount"
          }), " object and return it to the app using the ", _jsx(_components.code, {
            children: "callback"
          }), " parameter in ", _jsx(_components.code, {
            children: "onRemoteUserJoinChannel"
          }), ". For the ", _jsx(_components.code, {
            children: "callback"
          }), " parameter, implement ", _jsx(_components.code, {
            children: "onUserAccount"
          }), " in ", _jsx(_components.code, {
            children: "EaseCallGetUserAccountCallback"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["If you fail to find the Chat user ID, report the error code and descriptions using the ", _jsx(_components.code, {
            children: "onSetUserAccountError"
          }), " callback in the ", _jsx(_components.code, {
            children: "EaseCallGetYserAccountCallback"
          }), " class."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * Occurs when the remote user joins the channel."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " *"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " channelName"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The channel name."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " userName"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The Chat user ID."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " uid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The Agora UID."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " callback"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The callback object."
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
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
                children: " onRemoteUserJoinChannel"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(String channelName, String userName, "
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
                children: " uid, EaseCallGetUserAccountCallback callback);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "end-the-call",
        children: "End the call"
      }), _jsxs(_components.p, {
        children: ["A one-to-one call ends as soon as one of the two users hangs up, while a group call ends only after the local user hangs up. When the call ends, the SDK triggers the ", _jsx(_components.code, {
          children: "onEndCallWithReason"
        }), " callback."]
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
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * Occurs when a call ends."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " callType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The call type."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " channelName"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The channel name."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " reason"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The reason why the call ends."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " callTime"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The call duration."
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
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
                children: " onEndCallWithReason"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(EaseCallType callType, String channelName, EaseCallEndReason reason, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "long"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " callTime);"
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
                children: "// The reasons for a call ending."
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
                children: " enum"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " EaseCallEndReason"
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
                children: "    EaseCallEndReasonHangup"
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
                children: "), "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// One of the call members hangs up."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    EaseCallEndReasonCancel"
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
                children: "1"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "), "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// The local user cancels the call."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    EaseCallEndReasonRemoteCancel"
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
                children: "2"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "), "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// The remote user cancels the call."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    EaseCallEndReasonRefuse"
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
                children: "3"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "),"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// The remote user rejects the call."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    EaseCallEndReasonBusy"
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
                children: "4"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "), "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// The remote user is busy."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    EaseCallEndReasonNoResponse"
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
                children: "5"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "), "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// The local user did not answer the phone."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    EaseCallEndReasonRemoteNoResponse"
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
                children: "6"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "), "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// The remote user did not answer the phone."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    EaseCallEndReasonHandleOnOtherDeviceRefused"
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
                children: "7"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "),"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// The call is rejected on another device."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    EaseCallEndReasonHandleOnOtherDeviceAgreed"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "; "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// The call is answered on another device."
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   ...."
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
      }), _jsx(_components.h2, {
        id: "next-steps",
        children: "Next steps"
      }), _jsx(_components.p, {
        children: "This section contains extra steps you can take for the audio and video call functionalities in your project."
      }), _jsx(_components.h3, {
        id: "call-exceptions",
        children: "Call exceptions"
      }), _jsxs(_components.p, {
        children: ["If exceptions or errors occur during a call, the SDK triggers the ", _jsx(_components.code, {
          children: "onCallError"
        }), " callback in the ", _jsx(_components.code, {
          children: "EaseCallKitListener"
        }), " class, which reports the detailed information of the exception in ", _jsx(_components.code, {
          children: "AggoraChatCallError"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * Reports call exceptions."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " type"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        The error type."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " errorCode"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "   The error code."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " description"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The error description."
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
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
                children: " onCallError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(EaseCallError type, "
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
                children: " errorCode, String description);"
              })]
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "Types of call errors are as follows:"
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
                children: "public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " enum"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " EaseCallError"
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
                children: "    // The process error."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    PROCESS_ERROR"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // The RTC service error."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    RTC_ERROR"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // The IM service error."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    IM_ERROR"
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
        id: "update-the-call-kit-configuration",
        children: "Update the call kit configuration"
      }), _jsxs(_components.p, {
        children: ["After initializing the ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), ", you can refer to the following sample code to update the configuration of the call kit:"]
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
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * Gets the current call kit configuration."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " *"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@return"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The current call kit configuration."
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " EaseCallKitConfig "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getCallKitConfig"
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
                children: "// Sets the default avatar."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "EaseCallKitConfig config "
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
                children: " EaseCallKit."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
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
                children: "getCallKitConfig"
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
                children: "  if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(config "
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
                children: " null"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "){"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    String Image "
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
                children: " EaseFileUtils."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getModelFilePath"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(context,"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"bryant.png"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "……);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    callKitConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setDefaultHeadImage"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(Image);"
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
        id: "update-the-user-avatar-or-nickname",
        children: "Update the user avatar or nickname"
      }), _jsxs(_components.p, {
        children: ["When changes to the UI or the channel state occur, for example, when a new user joins the channel, ", _jsx(_components.code, {
          children: "onUserInfoUpdated"
        }), " is triggered to notify the app to update the UI."]
      }), _jsxs(_components.p, {
        children: ["After a user updates the user information, call ", _jsx(_components.code, {
          children: "io.agora.chat.callkit.general.EaseCallKitConfig#setUserInfo"
        }), " to set the modified user information. Ensure that this method is implemented in a synchronous function so that the UI is updated timely."]
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
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * \\~chinese"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * Occurs when the user information is updated."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " userName"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The Chat user ID."
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
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
                children: " onUserInfoUpdate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(String userName){"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // For example,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    /**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    EaseUser user = mUsersManager.getUserInfo(userName);"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    EaseCallUserInfo userInfo = new EaseCallUserInfo();"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        if (user != null) {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            userInfo.setNickName(user.getNickname());"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            userInfo.setHeadImage(user.getAvatar());"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    EaseCallKit.getInstance().getCallKitConfig().setUserInfo(userName, userInfo);"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    */"
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
        id: "authenticate-users-with-the-rtc-token",
        children: "Authenticate users with the RTC token"
      }), _jsxs(_components.p, {
        children: ["To enhance communication security, Agora recommends that you authenticate app users with the RTC token before they join a call. To do this, you need to make sure that the ", _jsx(_components.a, {
          href: "/en/introduction/account#get-the-app-id-and-app-certificate",
          children: "Primary Certificate of your project is enabled"
        }), ", and ", _jsx(_components.code, {
          children: "setEnableRTCToken"
        }), " in the ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " is set to ", _jsx(_components.code, {
          children: "true"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "EaseCallKitConfig callKitConfig "
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
                children: " EaseCallKitConfig"
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
                children: " ……"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " callKitConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setEnableRTCToken"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ……"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " EaseCallKit."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
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
                children: "init"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(context, callKitConfig);"
              })]
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["Once you enable token authentication, the SDK triggers the ", _jsx(_components.code, {
          children: "onGenerateRTCToken"
        }), " callback. You need to retrieve an RTC token in this callback following the steps:"]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsx(_components.li, {
          children: "Retrieve the RTC token and Agora UID from your app server."
        }), `
`, _jsxs(_components.li, {
          children: ["Trigger ", _jsx(_components.code, {
            children: "onSetToken"
          }), " to pass the token and UID to the callback object."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraChatCallKit"
          }), " uses the token and UID to join the channel."]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["Tokens are generated on your app server using the token generator provided by Agora. For how to generate a token on the server, see ", _jsx(_components.a, {
          href: "../secure-access-and-authentication/authentication",
          children: "Secure authentication with tokens"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * Occurs when RTC token authentication is enabled."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " *"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " userId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "       The Chat user ID of the current user."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " channelName"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  The channel name."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " callback"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "     The callback object."
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "default"
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
                children: " onGenerateRTCToken"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(String userId, String channelName, EaseCallKitTokenCallback callback) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // Pass the token and UID to the callback object."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // callback.onSetToken(token, uid);"
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
        id: "push-notifications",
        children: "Push notifications"
      }), _jsxs(_components.p, {
        children: ["In use-cases where the app runs on the background or goes offline, use push notifications to ensure that the callee receives the call invitation. To enable push notifications, see ", _jsx(_components.a, {
          href: "../notifications-and-event-handling/offline-push/configure-push-notifications",
          children: "Set up push notifications"
        }), "."]
      }), _jsx(_components.p, {
        children: "Once push notifications are enabled, when a call invitation arrives, a notification message pops out on the notification panel. Users can click the message to see the call invitation."
      }), _jsx(_components.h2, {
        id: "reference",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section provides other reference information that you can refer to when implementing real-time audio and video communications functionalities."
      }), _jsx(_components.h3, {
        id: "api-list",
        children: "API list"
      }), _jsxs(_components.p, {
        children: ["The ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " provides the following APIs:"]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Method"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "init"
            }), _jsx(_components.td, {
              children: "Initializes AgoraChatCallKit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "setCallKitListener"
            }), _jsx(_components.td, {
              children: "Sets the event listener of the call kit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "startSingleCall"
            }), _jsx(_components.td, {
              children: "Starts a one-to-one call."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "startInviteMultipleCall"
            }), _jsx(_components.td, {
              children: "Starts a group call."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "getCallKitConfig"
            }), _jsx(_components.td, {
              children: "Retrieves the configurations of AgoraChatCallKit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "registerVideoCallClass"
            }), _jsx(_components.td, {
              children: "Registers a one-to-one video call class."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "registerMultipleVideoClass"
            }), _jsx(_components.td, {
              children: "Registers a group video call class."
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: [_jsx(_components.code, {
          children: "EaseCallKitListener"
        }), " provides the following callback events:"]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Event"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "onEndCallWithReason"
            }), _jsx(_components.td, {
              children: "Occurs when the call ends."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "onInviteUsers"
            }), _jsx(_components.td, {
              children: "Occurs when a member of the group call invites other users to the call."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "onReceivedCall"
            }), _jsx(_components.td, {
              children: "Occurs when the call invitation is received and the device rings."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "onGenerateToken"
            }), _jsx(_components.td, {
              children: "Requests the RTC token. You need to pass the token to AgoraChatCallKit with callbacks."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "onCallError"
            }), _jsx(_components.td, {
              children: "Reports exceptions and errors during the call."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "onInviteCallMessageSent"
            }), _jsx(_components.td, {
              children: "Occurs when the call invitation is sent."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "onRemoteUserJoinChannel"
            }), _jsx(_components.td, {
              children: "Occurs when a remote user joins the call."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "onUserInfoUpdated"
            }), _jsx(_components.td, {
              children: "Occurs when the user information is updated. This callback is triggered when changes occur to the UI or the channel state in the AgoraChatCallKit."
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: [_jsx(_components.code, {
          children: "EaseCallGetUserAccountCallback"
        }), " contains the following APIs:"]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Event"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "onUserAccount"
            }), _jsx(_components.td, {
              children: "Occurs when the Chat user ID corresponding to the Agora UID is retrieved."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "onSetUserAccountError"
            }), _jsx(_components.td, {
              children: "Occurs when the app fails to retrieve the user account."
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: [_jsx(_components.code, {
          children: "EaseCallKitTokenCallback"
        }), " contains the following APIs:"]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Event"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "onSetToken"
            }), _jsx(_components.td, {
              children: "Occurs when the app passes the retrieved RTC token to the AgoraChatCallKit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "onGetTokenError"
            }), _jsx(_components.td, {
              children: "Occurs when the app fails to get the RTC token."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "sample-project",
        children: "Sample project"
      }), _jsxs(_components.p, {
        children: ["Agora provides an open-source ", _jsx(_components.a, {
          href: "https://github.com/AgoraIO-Usecase/AgoraChat-android",
          children: "AgoraChat-android"
        }), " sample project on GitHub. You can download the sample to try it out or view the source code."]
      }), _jsx(_components.p, {
        children: "The sample project uses the Chat user ID to join a channel, which enables displaying the user ID in the view of the call. If you use the methods of the Agora to start a call, you can also use the Integer UID to join a channel."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "flutter",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "flutter"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Currently, there is no CallKit for this platform."
        })
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "react-native",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "react-native"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Currently, there is no CallKit for this platform."
        })
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "unity",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "unity"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Currently, there is no CallKit for this platform."
        })
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "windows",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "windows"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Currently, there is no CallKit for this platform."
        })
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "ios",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "ios"
      }), _jsxs(_components.p, {
        children: [_jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " is an open-source audio and video UI library developed based on Agora's real-time communications and signaling services. With this library, you can implement audio and video calling functionalities with enhanced synchronization between multiple devices. In use-cases where a user ID is logged in to multiple devices, once the user deals with an incoming call that is ringing on one device, all the other devices stop ringing simultaneously."]
      }), _jsxs(_components.p, {
        children: ["This page describes how to implement real-time audio and video communications using the ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), "."]
      }), _jsx(_components.h2, {
        id: "understand-the-tech-1",
        children: "Understand the tech"
      }), _jsxs(_components.p, {
        children: ["The basic process for implementing real-time audio and video communications with ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " is as follows:"]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Initialize ", _jsx(_components.code, {
            children: "AgoraChatCallKit"
          }), " by calling ", _jsx(_components.code, {
            children: "init"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Call ", _jsx(_components.code, {
            children: "startSingleCallWithUid"
          }), " or ", _jsx(_components.code, {
            children: "startInviteUsers"
          }), " on the caller's client to send a call invitation for one-to-one or group calls."]
        }), `
`, _jsxs(_components.li, {
          children: ["On the callee's client, accept or decline the call invitation after receiving ", _jsx(_components.code, {
            children: "callDidReceive"
          }), ". Once a user accepts the invitation, they enter the call."]
        }), `
`, _jsxs(_components.li, {
          children: ["When the call ends, the SDK triggers the ", _jsx(_components.code, {
            children: "callDidEnd"
          }), " callback."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-1",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that your development environment meets the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Xcode 9.0 or later."
        }), `
`, _jsx(_components.li, {
          children: "A device running iOS 10.0 or later."
        }), `
`, _jsxs(_components.li, {
          children: ["A Chat project that has integrated the Chat SDK and implemented the ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "basic real-time chat functionalities"
          }), ", including users logging in and out and sending and receiving messages."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "project-setup-1",
        children: "Project setup"
      }), _jsxs(_components.p, {
        children: ["Take the following steps to integrate the ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " into your project and set up the development environment."]
      }), _jsx(_components.h3, {
        id: "add-the-agorachatcallkit-framework",
        children: "Add the AgoraChatCallKit framework"
      }), _jsxs(_components.p, {
        children: [_jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " is developed upon ", _jsx(_components.code, {
          children: "Agora_Chat_iOS"
        }), ", ", _jsx(_components.code, {
          children: "Masonry"
        }), ", ", _jsx(_components.code, {
          children: "AgoraRtcEngine_iOS/RtcBasic"
        }), ", and ", _jsx(_components.code, {
          children: "SDKWebImage"
        }), ". Refer to the following steps to import ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " into your project. If you prefer to add the framework manually, refer to ", _jsx(_components.a, {
          href: "#import",
          children: "Manually import AgoraChatCallKit"
        }), "."]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Install CocoaPods if you have not. For details, see ", _jsx(_components.a, {
              href: "https://guides.cocoapods.org/using/getting-started.html#getting-started",
              children: "Getting Started with CocoaPods"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["If your project does not have a ", _jsx(_components.code, {
              children: "Podfile"
            }), " file, navigate to the project root directory, and run the ", _jsx(_components.code, {
              children: "pod init"
            }), " command to create a text file ", _jsx(_components.code, {
              children: "Podfile"
            }), " in the project folder."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Drag ", _jsx(_components.code, {
              children: "AgoraChatCallKit.framework"
            }), " to the project and set the ", _jsx(_components.code, {
              children: "Embed"
            }), " attribute of ", _jsx(_components.code, {
              children: "AgoraChatCallKit.framework"
            }), " as ", _jsx(_components.code, {
              children: "Embed & Sign"
            }), " under ", _jsx(_components.code, {
              children: "Frameworks, Libraries, and Embedded Content"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " use_frameworks"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "!"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // Replace AppName with the name of your project"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " target "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'AppName'"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " do"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "     pod "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'AgoraChatCallKit'"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "     // Other frameworks"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " end"
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
            children: ["In the project root directory, run ", _jsx(_components.code, {
              children: "pod install"
            }), " to add the framework. When the SDK is installed successfully, you can see ", _jsx(_components.code, {
              children: "Pod installation complete!"
            }), " in the Terminal and an ", _jsx(_components.code, {
              children: "xcworkspace"
            }), " file in the project folder."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Open the ", _jsx(_components.code, {
              children: "xcworkspace"
            }), " file in Xcode."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "add-permissions",
        children: "Add permissions"
      }), _jsxs(_components.p, {
        children: ["Open the ", _jsx(_components.code, {
          children: "info.plist"
        }), " file, and add the following permissions:"]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Key"
            }), _jsx(_components.th, {
              children: "Type"
            }), _jsx(_components.th, {
              children: "Value"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "Privacy - Microphone Usage Description"
              })
            }), _jsx(_components.td, {
              children: "String"
            }), _jsx(_components.td, {
              children: "The description for using the microphone. For example, to access the microphone."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "Privacy - Camera Usage Description"
              })
            }), _jsx(_components.td, {
              children: "String"
            }), _jsx(_components.td, {
              children: "The description for using the camera. For example, to access the camera."
            })]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "implement-audio-and-video-calling-1",
        children: "Implement audio and video calling"
      }), _jsx(_components.p, {
        children: "This section introduces the core steps for implementing audio and video calls in your project."
      }), _jsx(_components.h3, {
        id: "initialize-agorachatcallkit-1",
        children: "Initialize AgoraChatCallKit"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "init"
        }), " to initialize the ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatCallConfig "
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
                children: "config "
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
                children: " [[AgoraChatCallConfig "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "alloc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "] "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "init"
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
                children: "config.agoraAppId "
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
                children: ' @"agoraAppId"'
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
                children: "config.enableRTCTokenValidate "
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
                children: " YES"
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
                children: "config.enableIosCallKit "
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
                children: " YES"
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
                children: "[AgoraChatCallManager.sharedManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "initWithConfig:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "delegate:self"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "];"
              })]
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["In this method, you need to set the ", _jsx(_components.code, {
          children: "AgoraChatCallConfig"
        }), " interface. Some of the configurations include the following:"]
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
                children: "@interface"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " AgoraChatCallConfig"
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
                children: "NSObject"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * The timeout duration for the call invitation, in seconds. The default value is 30."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
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
                children: "nonatomic"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "UInt32"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " callTimeOut;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * The dictionary of the user information. The data format is key-value pairs, where key represents the user ID and value is EaseCallUser."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
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
                children: "nonatomic"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ","
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "strong"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSMutableDictionary"
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
                children: " users;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * Specify the file URL of the ringtone. This field is valid only when enableIosCallKit is set to NO."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
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
                children: "nonatomic"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ","
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "strong"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSURL"
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
                children: " ringFileUrl;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * The App ID of the project, which you can obtain from Agora Console."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
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
                children: "nonatomic"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ","
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "strong"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSString"
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
                children: " agoraAppId;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " *  Whether to enable token authentication when users join the Agora channel:"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " *  - (Default) YES: Enable token authentication. Once you set it as YES, you must implement the callDidRequestRTCTokenForAPPId callback. After receiving this callback, you need to call setRTCToken to pass in the token to start or join a call."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " *  - NO: Do not enable token authentication."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
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
                children: "nonatomic"
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
                children: "BOOL"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " enableRTCTokenValidate;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * Whether to use the iOS CallKit framework."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
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
                children: "nonatomic"
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
                children: "assign"
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
                children: "BOOL"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " enableIosCallKit;"
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
                children: "@end"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "send-a-call-invitation-1",
        children: "Send a call invitation"
      }), _jsxs(_components.p, {
        children: ["From the caller's client, call ", _jsx(_components.code, {
          children: "startSingleCallWithUId"
        }), " or ", _jsx(_components.code, {
          children: "startInviteUsers"
        }), " to send a call invitation for a one-to-one call or group call. You need to specify the call type when calling the method."]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "One-to-one audio call"
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
                    children: "[AgoraChatCallManager.sharedManager "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "startSingleCallWithUId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "userId "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "type:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraChatCallType1v1Audio "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "ext:nil"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " completion:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "^"
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
                    children: "NSString"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " *"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " callId, AgoraChatCallError "
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
                    children: " aError) {"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "}];"
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
            children: "One-to-one video call"
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
                    children: "[AgoraChatCallManager.sharedManager "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "startSingleCallWithUId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "userId "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "type:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraChatCallType1v1Video "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "ext:nil"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " completion:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "^"
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
                    children: "NSString"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " *"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " callId, AgoraChatCallError "
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
                    children: " aError) {"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "}];"
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
            children: "Group audio call"
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
                    children: "ConfInviteUsersViewController "
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
                    children: "controller "
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
                    children: " [[ConfInviteUsersViewController "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "initWithGroupId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "groupId "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "excludeUsers:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "@[AgoraChatClient.sharedClient.currentUsername]];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "controller.didSelectedUserList "
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
                    children: " ^"
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
                    children: "NSArray"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " *"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " _Nonnull aInviteUsers) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    for"
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
                    children: "NSString"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " *"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "strId "
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
                    children: " aInviteUsers) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        AgoraChatUserInfo "
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
                    children: "info "
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
                    children: " [UserInfoStore.sharedInstance "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "getUserInfoById:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "strId];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "        if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (info "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "&&"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (info.avatarUrl.length "
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
                    children: " 0"
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
                    children: " info.nickname "
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
                    children: " 0"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                AgoraChatCallUser "
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
                    children: "user "
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
                    children: " [AgoraChatCallUser "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "userWithNickName:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "info.nickname "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "image:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "NSURL"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " URLWithString:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "info.avatarUrl]];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            [[AgoraChatCallManager.sharedManager "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "getAgoraChatCallConfig"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "setUser:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "strId "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "info:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "user];"
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    [AgoraChatCallManager.sharedManager "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "startInviteUsers:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "aInviteUsers "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "groupId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "groupId "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "callType:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraChatCallTypeMultiAudio "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "ext:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "@{"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '        @"groupId"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":groupId"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    } "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "completion:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "^"
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
                    children: "NSString"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " *"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " callId, AgoraChatCallError "
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
                    children: " aError) {"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line"
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    }];"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "controller.modalPresentationStyle "
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
                    children: " UIModalPresentationPageSheet;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "[viewController "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "presentViewController:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "controller "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "animated:YES"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " completion:nil"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
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
            children: "Group video call"
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
                    children: "ConfInviteUsersViewController "
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
                    children: "controller "
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
                    children: " [[ConfInviteUsersViewController "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "initWithGroupId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "groupId "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "excludeUsers:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "@[AgoraChatClient.sharedClient.currentUsername]];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "controller.didSelectedUserList "
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
                    children: " ^"
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
                    children: "NSArray"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " *"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " _Nonnull aInviteUsers) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    for"
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
                    children: "NSString"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " *"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "strId "
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
                    children: " aInviteUsers) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        AgoraChatUserInfo "
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
                    children: "info "
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
                    children: " [UserInfoStore.sharedInstance "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "getUserInfoById:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "strId];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "        if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (info "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "&&"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (info.avatarUrl.length "
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
                    children: " 0"
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
                    children: " info.nickname "
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
                    children: " 0"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                AgoraChatCallUser "
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
                    children: "user "
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
                    children: " [AgoraChatCallUser "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "userWithNickName:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "info.nickname "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "image:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "NSURL"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " URLWithString:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "info.avatarUrl]];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            [[AgoraChatCallManager.sharedManager "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "getAgoraChatCallConfig"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "setUser:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "strId "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "info:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "user];"
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    [AgoraChatCallManager.sharedManager "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "startInviteUsers:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "aInviteUsers "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "groupId:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "groupId "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "callType:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraChatCallTypeMultiVideo "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "ext:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "@{"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '        @"groupId"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":groupId"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    } "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "completion:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "^"
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
                    children: "NSString"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " *"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " callId, AgoraChatCallError "
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
                    children: " aError) {"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line"
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    }];"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "controller.modalPresentationStyle "
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
                    children: " UIModalPresentationPageSheet;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "[viewController "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "presentViewController:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "controller "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "animated:YES"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " completion:nil"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following screenshot gives an example of the user interface after sending a call invitation for one-to-one audio call:"
      }), _jsx(_components.h3, {
        id: "receive-the-invitation-1",
        children: "Receive the invitation"
      }), _jsxs(_components.p, {
        children: ["Once a call invitaion is sent, the callee receives the invitation in the ", _jsx(_components.code, {
          children: "callDidReceive"
        }), " callback."]
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
                children: "-"
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
                children: "void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")callDidReceive:(EaseCallType)aType inviter:("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSString"
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
                children: "_Nonnull)user ext:("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSDictionary"
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
                children: ")aExt"
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
              className: "line"
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
      }), _jsx(_components.p, {
        children: "If the callee is online and available for a call, you can pop out a user interface that allows the callee to accept or decline the invitation. If you have enabled the iOS CallKit, the system call user interface is launched. Otherwise, you can refer to the following screenshot to implement the interface:"
      }), _jsx(_components.h3, {
        id: "send-a-call-invitation-during-a-group-call-1",
        children: "Send a call invitation during a group call"
      }), _jsxs(_components.p, {
        children: ["In call sessions with multiple users, these users can also send call invitations to other users. After sending the invitation, the SDK triggers the ", _jsx(_components.code, {
          children: "multiCallDidInvitingWithCurVC"
        }), " callback in ", _jsx(_components.code, {
          children: "AgoraChatCallDelegate"
        }), " on the sender's client."]
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
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * Occurs when the local user sends a call invitation during a group call."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * vc     The current UI view controller."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * users  The user IDs that are already in the group call."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * aExt   Extension information."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: " ("
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
                children: ")multiCallDidInvitingWithCurVC:(UIViewController"
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
                children: "_Nonnull)vc excludeUsers:("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSArray"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "_Nullable)users ext:("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSDictionary"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")aExt"
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
                children: "    NSString"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "groupId "
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
                children: " nil"
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
                children: "    if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (aExt) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        groupId "
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
                children: " [aExt "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "objectForKey:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"groupId"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "];"
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
                children: " ("
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
                children: "groupId "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "||"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " groupId.length  "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "0"
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
                children: " info.nickname.length "
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
                children: " 0"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                AgoraChatCallUser "
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
                children: "user "
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
                children: " [AgoraChatCallUser "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "userWithNickName:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "info.nickname "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "image:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSURL"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " URLWithString:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "info.avatarUrl]];"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                [[AgoraChatCallManager.sharedManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "getAgoraChatCallConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "] "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "setUser:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "strId "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "info:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "user];"
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
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        }"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        [AgoraChatCallManager.sharedManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "startInviteUsers:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "aInviteUsers "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "groupId:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "groupId "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "callType:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatCallTypeMultiAudio "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "ext:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "aExt "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "completion:nil"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "];"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    };"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    confVC.modalPresentationStyle "
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
                children: " UIModalPresentationPopover;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    [vc "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "presentViewController:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "confVC "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "animated:YES"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " completion:nil"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "];"
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
        id: "listen-for-callback-events-1",
        children: "Listen for callback events"
      }), _jsx(_components.p, {
        children: "During the call, you can also listen for the following callback events:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "callDidJoinChannel"
            }), ", occurs when the local user successfully joins the call."]
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "-"
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
                    children: "void"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")callDidJoinChannel:("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "NSString"
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
                    children: "_Nonnull)aChannelName uid:("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "NSUInteger"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")aUid"
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
                    children: "    ["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "self"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " _fetchUserMapsFromServer:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "aChannelName];"
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
            children: [_jsx(_components.code, {
              children: "remoteuserDidJoinChannel"
            }), ", occurs when the remote user successfully joins the call."]
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "-"
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
                    children: "void"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")remoteUserDidJoinChannel:( "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "NSString"
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
                    children: "_Nonnull)aChannelName uid:("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "NSInteger"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")aUid username:("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "NSString"
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
                    children: "_Nullable)aUserName"
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
                    children: "    if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (aUserName.length "
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
                    children: " 0"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        AgoraChatUserInfo"
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
                    children: " userInfo "
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
                    children: " [[UserInfoStore "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "sharedInstance"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "getUserInfoById:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "aUserName];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "        if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (userInfo "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "&&"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (userInfo.avatarUrl.length "
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
                    children: " 0"
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
                    children: " userInfo.nickname.length "
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
                    children: " 0"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            AgoraChatCallUser"
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
                    children: " user "
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
                    children: " [AgoraChatCallUser "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "userWithNickName:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "userInfo.nickname "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "image:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "NSURL"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " URLWithString:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "userInfo.avatarUrl]];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            [[AgoraChatCallManager.sharedManager "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "getAgoraChatCallConfig"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "setUser:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "aUserName "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "info:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "user];"
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    } "
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
                    children: "        ["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "self"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " _fetchUserMapsFromServer:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "aChannelName];"
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
          }), `
`]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["When receiving the ", _jsx(_components.code, {
          children: "callDidJoinChannel:uid"
        }), " or ", _jsx(_components.code, {
          children: "remoteUserDidJoinChannel:uid:username:"
        }), " callback, the user needs to look up the Chat user ID corresponding to the Agora UID in your app server. If the Chat user ID is found, construct a dictionary with Agora UID and Chat user ID and then set it to the app using ", _jsx(_components.code, {
          children: "setUsers:channelName:"
        }), "."]
      }), _jsx(_components.h3, {
        id: "end-the-call-1",
        children: "End the call"
      }), _jsxs(_components.p, {
        children: ["A one-to-one call ends as soon as one of the two users hangs up, while a group call ends only after the local user hangs up. When the call ends, the SDK triggers the ", _jsx(_components.code, {
          children: "callDidEnd"
        }), " callback."]
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
                children: "-"
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
                children: "void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")callDidEnd:("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSString"
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
                children: "_Nonnull)aChannelName reason:(AgoraChatCallEndReason)aReason time:("
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
                children: ")aTm type:(AgoraChatCallType)aType"
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    NSString"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "msg "
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
                children: ' @""'
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
                children: "    switch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (aReason) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " AgoraChatCallEndReasonHandleOnOtherDevice:"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            msg "
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
                children: " NSLocalizedString"
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
                children: '@"otherDevice"'
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
                children: "nil"
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
                children: "            break"
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
                children: "        case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " AgoraChatCallEndReasonBusy:"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            msg "
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
                children: " NSLocalizedString"
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
                children: '@"remoteBusy"'
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
                children: "nil"
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
                children: "            break"
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
                children: "        case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " AgoraChatCallEndReasonRefuse:"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            msg "
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
                children: " NSLocalizedString"
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
                children: '@"RemoteRefuseCall"'
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
                children: "nil"
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
                children: "            break"
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
                children: "        case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " AgoraChatCallEndReasonCancel:"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            msg "
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
                children: " NSLocalizedString"
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
                children: '@"cancelCall"'
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
                children: "nil"
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
                children: "            break"
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
                children: "        case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " AgoraChatCallEndReasonNoResponse:"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            msg "
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
                children: " NSLocalizedString"
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
                children: '@"remoteNoResponse"'
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
                children: "nil"
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
                children: "            break"
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
                children: "        case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " AgoraChatCallEndReasonHangup:"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            msg "
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
                children: " ["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSString"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " stringWithFormat:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "NSLocalizedString"
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
                children: '@"callendPrompt"'
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
                children: "nil"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "),aTm];"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
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
                children: "        default"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
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
                children: " (msg.length "
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
                children: " 0"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        ["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "self"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " showHint:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "msg];"
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
      }), _jsx(_components.h2, {
        id: "next-steps-1",
        children: "Next steps"
      }), _jsx(_components.p, {
        children: "This section contains extra steps you can take for the audio and video call functionalities in your project."
      }), _jsx(_components.h3, {
        id: "call-exceptions-1",
        children: "Call exceptions"
      }), _jsxs(_components.p, {
        children: ["If exceptions or errors occur during a call, the SDK triggers the ", _jsx(_components.code, {
          children: "callDidOccurError"
        }), " callback, which reports the detailed information of the exception in ", _jsx(_components.code, {
          children: "AgoraChatCallError"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: " ("
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
                children: ")callDidOccurError:(AgoraChatCallError "
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
                children: "_Nonnull)aError"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "}"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "update-the-user-avatar-or-nickname-1",
        children: "Update the user avatar or nickname"
      }), _jsxs(_components.p, {
        children: ["After a user joins the call, you can call ", _jsx(_components.code, {
          children: "setUser"
        }), " to modify the avatar and nickname of the current user and the other users in the channel."]
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
                children: "AgoraChatCallUser "
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
                children: "user "
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
                children: " [AgoraChatCallUser "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "userWithNickName:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "info.nickname "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "image:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSURL"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " URLWithString:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "info.avatarUrl]];"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "[[AgoraChatCallManager.sharedManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "getAgoraChatCallConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "] "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "setUser:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "userId "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "info:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "user];"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "authenticate-users-with-the-rtc-token-1",
        children: "Authenticate users with the RTC token"
      }), _jsxs(_components.p, {
        children: ["To enhance communication security, Agora recommends that you authenticate app users with the RTC token before they join a call. To do this, you need to make sure that the ", _jsx(_components.a, {
          href: "/en/introduction/account#get-the-app-id-and-app-certificate",
          children: "Primary Certificate of your project is enabled"
        }), ", and ", _jsx(_components.code, {
          children: "enableRTCTokenValidate"
        }), " in the ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " is set to ", _jsx(_components.code, {
          children: "YES"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.enableRTCTokenValidate "
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
                children: " YES"
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
                children: "[AgoraChatCallManager.sharedManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "initWithConfig:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "delegate:self"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "];"
              })]
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["Once you enable token authentication, ensure that you listen for the ", _jsx(_components.code, {
          children: "callDidRequestRTCTokenForAppId"
        }), " callback. When ", _jsx(_components.code, {
          children: "callDidRequestRTCTokenForAppId"
        }), " is triggered, you need to retrieve the token and call ", _jsx(_components.code, {
          children: "setRTCToken"
        }), " to pass the token to the CallKit. Tokens are generated on your app server using the token generator provided by Agora. For how to generate a token on the server and retrieve and renew the token on the client, see ", _jsx(_components.a, {
          href: "../secure-access-and-authentication/authentication",
          children: "Secure authentication with tokens"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: " ("
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
                children: ")callDidRequestRTCTokenForAppId:("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSString"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")aAppId channelName:("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSString"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")aChannelName account:("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSString"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")aUserAccount uid:("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSInteger"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")aAgoraUid"
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
                children: "    [AgoraChatCallManager.sharedManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "setRTCToken:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "rtcToken "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "channelName:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "aChannelName "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "uid:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " The Agora UID];"
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
      }), _jsx(_components.h2, {
        id: "reference-1",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section provides other reference information that you can refer to when implementing real-time audio and video communications functionalities."
      }), _jsx(_components.h3, {
        id: "api-list-1",
        children: "API list"
      }), _jsxs(_components.p, {
        children: ["The ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " framework contains the ", _jsx(_components.code, {
          children: "AgoraChatCallManager"
        }), " and ", _jsx(_components.code, {
          children: "AgoraChatCallDelegate"
        }), " classes."]
      }), _jsxs(_components.p, {
        children: ["The following table lists the core methods in ", _jsx(_components.code, {
          children: "AgoraChatCallManager"
        }), ":"]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Method"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsxs(_components.td, {
              children: ["initWithConfig", _jsx(_components.div, {})]
            }), _jsx(_components.td, {
              children: "Initializes AgoraChatCallKit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsxs(_components.td, {
              children: ["startSingleCallWithUId:type:ext", _jsx(_components.div, {})]
            }), _jsx(_components.td, {
              children: "Starts a one-to-one call."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "startInviteUsers:groupId:callType:ext:completion:"
            }), _jsx(_components.td, {
              children: "Starts a group call."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "getAgoraChatCallConfig"
            }), _jsx(_components.td, {
              children: "Retrieves the configurations of AgoraChatCallKit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "setRTCToken:channelName:uid:"
            }), _jsx(_components.td, {
              children: "Sets the RTC Token."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "setUsers:channelName:"
            }), _jsx(_components.td, {
              children: "Sets the mapping between Chat user ID and Agora user ID (UID)."
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: ["The following table lists the callbacks in ", _jsx(_components.code, {
          children: "AgoraChatCallDelegate"
        }), ":"]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Event"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "callDidEnd:reason:time:type:"
            }), _jsx(_components.td, {
              children: "Occurs when the call ends."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "multiCallDidInvitingWithCurVC:callType:excludeUsers:ext:"
            }), _jsx(_components.td, {
              children: "Occurs when a member of the group call invites other users to the call."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "callDidReceive:inviter:ext:"
            }), _jsx(_components.td, {
              children: "Occurs when the call invitation is received and the device rings."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "callDidRequestRTCTokenForAppId:channelName:account:uid:"
            }), _jsx(_components.td, {
              children: "Requests the RTC token."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "callDidOccurError:"
            }), _jsx(_components.td, {
              children: "Reports exceptions and errors during the call."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "remoteUserDidJoinChannel:uid:username:"
            }), _jsx(_components.td, {
              children: "Occurs when a remote user joins the call."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "callDidJoinChannel:uid:"
            }), _jsx(_components.td, {
              children: "Occurs when the current user joins the call."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "sample-project-1",
        children: "Sample project"
      }), _jsxs(_components.p, {
        children: ["Agora provides an open-source ", _jsx(_components.a, {
          href: "https://github.com/AgoraIO-Usecase/AgoraChat-ios",
          children: "AgoraChat-ios"
        }), " sample project on GitHub. You can download the sample to try it out or view the source code."]
      }), _jsx(_components.p, {
        children: "The sample project uses the Chat user ID to join a channel, which enables displaying the user ID in the view of the call. If you use the methods of the Agora to start a call, you can also use the Integer UID to join a channel."
      }), _jsx(_components.h3, {
        id: "import-agorachatcallkit-manually",
        children: "Import AgoraChatCallKit manually"
      }), _jsxs(_components.p, {
        children: ["Refer to the following steps to manually add ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " to your project:"]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.a, {
            href: "https://github.com/AgoraIO-Usecase/AgoraChat-CallKit-ios",
            children: "Download AgoraChatCallKit"
          }), ", and extract the downloaded file."]
        }), `
`, _jsxs(_components.li, {
          children: ["Copy and paste ", _jsx(_components.code, {
            children: "AgoraChatCallKit.framework"
          }), " to the directory of your project."]
        }), `
`, _jsxs(_components.li, {
          children: ["In Xcode, go to ", _jsx(_components.strong, {
            children: "TARGETS"
          }), " > ", _jsx(_components.strong, {
            children: "Project Name"
          }), " > ", _jsx(_components.strong, {
            children: "General"
          }), ". Drag ", _jsx(_components.code, {
            children: "AgoraChatCallKit.framework"
          }), " under ", _jsx(_components.strong, {
            children: "Frameworks, Libraries, and Embedded Content"
          }), ", and set the ", _jsx(_components.strong, {
            children: "Embed"
          }), " attribute of ", _jsx(_components.code, {
            children: "AgoraChatCallKit.framework"
          }), " as ", _jsx(_components.strong, {
            children: "Embed & Sign"
          }), "."]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "other-project-settings",
        children: "Other project settings"
      }), _jsx(_components.p, {
        children: "You can configure the following project settings according to your use case:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["To run the app in the background, go to ", _jsx(_components.code, {
            children: "info.plist"
          }), ", click ", _jsx(_components.code, {
            children: "+"
          }), ", and add ", _jsx(_components.code, {
            children: "Required background modes"
          }), ". Set ", _jsx(_components.code, {
            children: "Type"
          }), " as ", _jsx(_components.code, {
            children: "Array"
          }), ", and add ", _jsx(_components.code, {
            children: "App plays audio or streams audio/video using AirPlay"
          }), " as a value under ", _jsx(_components.code, {
            children: "Required background modes"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["To use the Apple ", _jsx(_components.code, {
            children: "PushKit"
          }), " and ", _jsx(_components.code, {
            children: "CallKit"
          }), ", go to ", _jsx(_components.strong, {
            children: "TARGETS"
          }), " > ", _jsx(_components.strong, {
            children: "Project Name"
          }), " > ", _jsx(_components.strong, {
            children: "Signing and Capabilities"
          }), ". Under ", _jsx(_components.strong, {
            children: "Background Modes"
          }), ", check ", _jsx(_components.code, {
            children: "Voice over IP"
          }), "."]
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
        children: [_jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " is an open-source audio and video UI library developed based on Agora's real-time communications and signaling services. With this library, you can implement audio and video calling functionalities with enhanced synchronization between multiple devices. In use-cases where a user ID is logged in to multiple devices, once the user deals with an incoming call that is ringing on one device, all the other devices stop ringing simultaneously."]
      }), _jsxs(_components.p, {
        children: ["This page describes how to implement real-time audio and video communications using the ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), "."]
      }), _jsx(_components.h2, {
        id: "understand-the-tech-2",
        children: "Understand the tech"
      }), _jsxs(_components.p, {
        children: ["The basic process for implementing real-time audio and video communications with ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " is as follows:"]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Initialize ", _jsx(_components.code, {
            children: "AgoraChatCallKit"
          }), " by calling ", _jsx(_components.code, {
            children: "init"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Call ", _jsx(_components.code, {
            children: "startCall"
          }), " on the caller's client to send a call invitation for one-to-one or group calls."]
        }), `
`, _jsxs(_components.li, {
          children: ["On the callee's client, accept or decline the call invitation after receiving ", _jsx(_components.code, {
            children: "onInvite"
          }), ". Once a user accepts the invitation, they enter the call."]
        }), `
`, _jsxs(_components.li, {
          children: ["When the call ends, the SDK triggers the ", _jsx(_components.code, {
            children: "onStateChange"
          }), " callback."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-2",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that your development environment meets the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["A valid ", _jsx(_components.a, {
            href: "/en/introduction/account#sign-up-for-an-agora-account",
            children: "Agora account"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["An Agora project that has ", _jsx(_components.a, {
            href: "../../get-started/enable",
            children: "enabled Chat"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["A Chat project that has integrated the Chat SDK and implemented the ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "basic real-time chat functionalities"
          }), ", including users logging in and out and sending and receiving messages."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "project-setup-2",
        children: "Project setup"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "In your terminal, run the following command to install the call kit:"
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
              children: _jsx(_components.code, {
                children: _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "npm"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " install"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " chat-callkit"
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
            children: "Add the following line to import the callkit:"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "import"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " Callkit "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "from"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'chat-callkit'"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ";"
                  })]
                })
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "implement-audio-and-video-calling-2",
        children: "Implement audio and video calling"
      }), _jsx(_components.p, {
        children: "This section introduces the core steps for implementing audio and video calls in your project."
      }), _jsx(_components.h3, {
        id: "initialize-agorachatcallkit-2",
        children: "Initialize AgoraChatCallKit"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "init"
        }), " to initialize the ", _jsx(_components.code, {
          children: "AgoraChatCallKit"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * Initialize AgoraChatCallKit"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " *"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " appId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "       The Agora App ID."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " agoraUid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    The Agora user ID (UID)."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " connection"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  The Chat SDK Connection instance."
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "CallKit."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "init"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(appId, agoraUid, connection);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "send-a-call-invitation-2",
        children: "Send a call invitation"
      }), _jsxs(_components.p, {
        children: ["From the caller's client, call ", _jsx(_components.code, {
          children: "startCall"
        }), " to send a call invitation for a one-to-one call or group call. You need to specify the call type when calling the method."]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "One-to-one call"
          }), `
`, _jsx(_components.p, {
            children: "In a one-to-one call, the caller sends a text message to the callee as the call invitation."
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
                    children: "    /** The call type:"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "     * 0: One-to-one audio call"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "     * 1: One-to-one video call"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "     * 2: Group video call"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "     * 3: Group audio call"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "     */"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    callType: "
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
                    children: "    chatType: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'singleChat'"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    /** The Chat user ID. */"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    to: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'userId'"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    /** The invitation message. */"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    message: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'Join me on the call'"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    /** The channel name for the call. */"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    channel: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'channel'"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    /** The RTC token. */"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    accessToken: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'Agora token'"
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "CallKit."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "startCall"
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
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Group call"
          }), `
`, _jsx(_components.p, {
            children: "In a group call, the caller sends a text message to the chat group or chat room, while sending a CMD message to the users for joining the call."
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
                    children: "    /** The call type:"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "     * 0: One-to-one audio call"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "     * 1: One-to-one video call"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "     * 2: Group video call"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "     * 3: Group audio call"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "     */"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    callType: "
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
                    children: "    chatType: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'groupChat'"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    /** The Chat user ID. */"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    to: ["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'userId'"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "],"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    /** The invitation message. */"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    message: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'Join me on the call'"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    /** The group ID. */"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    groupId: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'groupId'"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    /** The group name. */"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    groupName: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'group name'"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    /** The RTC token. */"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    accessToken: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'Agora token'"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    /** The channel name for the call. */"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    channel: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'channel'"
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "CallKit."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "startCall"
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
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following screenshot gives an example of the user interface after sending a call invitation for one-to-one video call:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://web-cdn.agora.io/docs-files/1655259671848",
          alt: "1655259671848"
        })
      }), _jsx(_components.h3, {
        id: "receive-the-invitation-2",
        children: "Receive the invitation"
      }), _jsxs(_components.p, {
        children: ["Once a call invitation is sent, if the callee is online and available for a call, the callee receives the invitation in the ", _jsx(_components.code, {
          children: "onInvite"
        }), " callback. You can pop out a user interface that allows the callee to accept or decline the invitation in this callback."]
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
                children: "/**"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * Handles the call invitation."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " *"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " result"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " Whether to pop out the user interface for answering the call."
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " *               - true: Yes."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " *               - false: No. In this situation, you do not need to pass the RTC token."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " accessToken"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " The RTC token."
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "CallKit."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "answerCall"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(result, accessToken);"
              })]
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "The following screenshot gives an example of the user interface after receiving a call invitation for one-to-one video call:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://web-cdn.agora.io/docs-files/1655259682186",
          alt: "1655259682186"
        })
      }), _jsx(_components.h3, {
        id: "send-a-call-invitation-during-a-group-call-2",
        children: "Send a call invitation during a group call"
      }), _jsxs(_components.p, {
        children: ["In call sessions with multiple users, these users can also send call invitations to other users. After sending the invitation, the SDK triggers the ", _jsx(_components.code, {
          children: "onAddPerson"
        }), " callback on the sender's client. In this callback, you can ask the senders to specify the user they want to invite to the group call and then call ", _jsx(_components.code, {
          children: "startCall"
        }), " to send out the invitation."]
      }), _jsx(_components.h3, {
        id: "listen-for-callback-events-2",
        children: "Listen for callback events"
      }), _jsx(_components.p, {
        children: "During the call, you can also listen for the following callback events:"
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
                children: "function"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " Call"
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
                children: "  // Handles call state changes."
              })
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " handleCallStateChange"
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
                children: " ("
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    switch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (info.type) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "      case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'hangup'"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // The call is hung up."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        break"
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
                children: "      case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'accept'"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // The callee accepts the call invitation."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        break"
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
                children: "      case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'refuse'"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // The callee refuses the call invitation."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        break"
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
                children: "      case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'user-published'"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // A remote user publishes media streams during the call."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        break"
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
                children: "      case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'user-unpublished'"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // A remote user stops publishing media streams during the call."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        break"
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
                children: "      case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'user-left'"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // A remote user leaves the call."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        break"
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
                children: "      default"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        break"
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
                children: "  };"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ;"
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
        id: "end-the-call-2",
        children: "End the call"
      }), _jsxs(_components.p, {
        children: ["A one-to-one call ends as soon as one of the two users hangs up, while a group call ends only after the local user hangs up. If the local user hangs up the call, the SDK triggers ", _jsx(_components.code, {
          children: "onStateChange"
        }), " with the ", _jsx(_components.code, {
          children: "info.type"
        }), " of ", _jsx(_components.code, {
          children: "hangup"
        }), ". If the remote user hangs up the call, the SDK triggers ", _jsx(_components.code, {
          children: "onStateChange"
        }), " with the ", _jsx(_components.code, {
          children: "info.type"
        }), " of ", _jsx(_components.code, {
          children: "user-left"
        }), "."]
      }), _jsx(_components.h2, {
        id: "next-steps-2",
        children: "Next steps"
      }), _jsx(_components.p, {
        children: "This section contains extra steps you can take for the audio and video call functionalities in your project."
      }), _jsx(_components.h3, {
        id: "authenticate-users-with-the-rtc-token-2",
        children: "Authenticate users with the RTC token"
      }), _jsxs(_components.p, {
        children: ["To enhance communication security, Agora recommends that you authenticate app users with the RTC token before they join a call. To do this, you need to make sure that the ", _jsx(_components.a, {
          href: "/en/introduction/account#get-the-app-id-and-app-certificate",
          children: "Primary Certificate of your project is enabled"
        }), "."]
      }), _jsxs(_components.p, {
        children: ["Tokens are generated on your app server using the token generator provided by Agora. After you retrieve the token, pass the token to the callkit when calling ", _jsx(_components.code, {
          children: "startCall"
        }), " and ", _jsx(_components.code, {
          children: "answerCall"
        }), ". For how to generate a token on the server and retrieve and renew the token on the client, see  ", _jsx(_components.a, {
          href: "../secure-access-and-authentication/authentication",
          children: "Secure authentication with tokens"
        }), "."]
      }), _jsx(_components.h2, {
        id: "reference-2",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section provides other reference information that you can refer to when implementing real-time audio and video communications functionalities."
      }), _jsx(_components.h3, {
        id: "api-list-2",
        children: "API list"
      }), _jsxs(_components.p, {
        children: [_jsx(_components.code, {
          children: "AgoraChatCallKit"
        }), " provides the following APIs:"]
      }), _jsx(_components.p, {
        children: "Methods:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Method"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsxs(_components.td, {
              children: ["initWithConfig", _jsx(_components.div, {})]
            }), _jsxs(_components.td, {
              children: ["Initializes ", _jsx(_components.code, {
                children: "AgoraChatCallKit"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "startCall"
            }), _jsx(_components.td, {
              children: "Starts a call."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "answerCall"
            }), _jsx(_components.td, {
              children: "Answers the call."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "setUserIdMap"
            }), _jsxs(_components.td, {
              children: ["Sets the mapping between Chat user ID and Agora user ID (UID). The format is ", _jsx(_components.code, {
                children: "{[uid1]: 'custom name', [uid2]: 'custom name'}"
              }), "."]
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "Callbacks:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Event"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "onAddPerson"
            }), _jsx(_components.td, {
              children: "Occurs when the user invites another user to the call."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "onInvite"
            }), _jsx(_components.td, {
              children: "Occurs when the call invitation is received."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "onStateChange"
            }), _jsx(_components.td, {
              children: "Occurs when the call state changes."
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "Attributes:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Attribute"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "contactAvatar"
            }), _jsx(_components.td, {
              children: "The avatar displayed during one-to-one calls."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "groupAvatar"
            }), _jsx(_components.td, {
              children: "The avatar displayed during group calls."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "ringingSource"
            }), _jsx(_components.td, {
              children: "The ringtone file."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "sample-project-2",
        children: "Sample project"
      }), _jsxs(_components.p, {
        children: ["Agora provides an open-source ", _jsx(_components.a, {
          href: "https://github.com/AgoraIO-Usecase/AgoraChat-CallKit-web/tree/master/demo",
          children: "AgoraChatCallKit"
        }), " sample project on GitHub. You can download the sample to try it out or view the source code."]
      }), _jsx(_components.p, {
        children: "The sample project uses the Chat user ID to join a channel, which enables displaying the user ID in the view of the call. If you use the methods of the Agora to start a call, you can also use the Integer UID to join a channel."
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
