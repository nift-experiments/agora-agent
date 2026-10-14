import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Migration guide",
  description: "Upgrade to the latest version of Flexible Classroom."
};
export let _markdown = "\n\nThis page shows you how to upgrade to the latest version of Flexible Classroom.\n\n## Android [#android]\n\n### Migrate from v1.1.5 to v2.1.0 [#migrate-from-v115-to-v210]\n\nIn v2.1.0, Agora fully optimizes the internal architecture of the Agora Classroom SDK and refactors the Agora Edu Context APIs.\n\nThis section lists the major changes of the Edu Context API between v2.1.0 and v1.1.5.\n\n#### Chat context [#chat-context]\n\nRemove `ChatContext` and `IChatHandler`.\n\n#### Whiteboard context [#whiteboard-context]\n\nRemove `WhiteboardContext` and `IWhiteboardHandler`. In v2.1.0, the whiteboard feature is implemented in `AgoraUIKit`.\n\n#### Device context [#device-context]\n\nRemove `DeviceContext` and `IDeviceHandler`. Use methods and callbacks in `MediaContext` and `IMediaHandler` instead, as follows:\n\n* Remove `getDeviceConfig`. Use `getLocalDeviceState` instead.\n* Remove `setCameraDeviceEnable`, `switchCameraFacing`, `setMicDeviceEnable`, and `setSpeakerEnable`. Use `openSystemDevice` and `closeSystemDevice` instead.\n* Remove `setDeviceLifecycle`. In v2.1.0, the SDK does not maintain the device state.\n* Remove `onCameraDeviceEnableChanged`, `onCameraFacingChanged`, `onMicDeviceEnabledChanged`, and `onSpeakerEnabledChanged`. Use `onLocalDeviceStateUpdated` instead.\n* Remove `onDeviceTips`.\n\n#### Hands-up context [#hands-up-context]\n\nRemove `HandsUpContext` and `IHandsUpHandler`. Use methods and callbacks in `UserContext` and `IUserHandler` instead, as follows:\n\n* Remove `performHandsUp`. Use `handsWave` and `handsDown` instead.\n* Remove `onHandsUpEnabled`. Use `onHandsWaveEnabled` instead.\n* Remove `onHandsUpStateUpdated` and `onHandsUpStateResultUpdated`. Use `onUserHandsWave` and `onUserHandsDown` instead.\n* Remove `onHandsUpTips`.\n\n#### Room context [#room-context]\n\n* Remove `roomInfo`. Use `getRoomInfo` instead.\n* Remove `leave`. Use `leaveRoom` instead.\n* Move `uploadLog` to `MonitorContext`.\n* Remove `updateFlexRoomProps`. Use `updateRoomProperties` and `deleteRoomProperties` instead.\n* Rename `joinClassroom` as `joinRoom`.\n* Remove `onClassroomName`. You can call `getRoomInfo` to get the room name.\n* Rename `onClassState` as `onClassStateUpdated`.\n* Remove `onClassTime`.\n* Remove `onNetworkStateChanged`. Use `onLocalNetworkQualityUpdated` in `IMonitorHandler` instead.\n* Remove `onLogUploaded`. You can get the log `serailNumber` with the callback function in the `uploadLog` method in `MonitorContext`.\n* Remove `onConnectionStateChanged`. Use `onLocalConnectionUpdated` in `IMonitorHandler` instead.\n* Remove `onClassTip`.\n* Remove `onFlexRoomPropsInitialized`. To get room custom properties after joining the room, you can call `getRoomProperties`.\n* Remove `onFlexRoomPropsChanged`. Use `onRoomPropertiesUpdated` and `onRoomPropertiesDeleted` instead.\n* Remove `onError`.\n* Remove `onClassroomJoinSuccess` and `onClassroomJoinFail`. Use `callback` in `joinRoom` instead.\n* Remove `onClassroomLeft`. Use `onRoomClosed` instead.\n\n#### Screen-sharing context [#screen-sharing-context]\n\n* Remove `ScreenShareContext`. Use `StreamContext` instead. When `videoSourceType` in `AgoraEduContextStreamInfo` is `Screen`, you can regard this stream as a screen-sharing video stream.\n* Remove `IScreenShareHandler`. Use `IStreamHandler` instead. Remove `onUpdateScreenShareState`. Use `onStreamJoined`, `onStreamLeft`, and `onStreamUpdated` in `IStreamHandler` instead.\n\n#### User context [#user-context]\n\n* Remove `localUserInfo`. Use `getLocalUserInfo` instead.\n* Remove `muteVideo` and `muteAudio`. Use `muteStreams` in `StreamContext` instead.\n* Remove `renderVideo`. Use `startRenderLocalVideo` and `startRenderRemoteVideo` in `MediaContext` instead.\n* Remove `updateFlexUserProps`. Use `updateUserProperties` and `deleteUserProperties` instead.\n* Remove `setVideoEncoderConfig`. Use `setLocalVideoConfig` in `StreamContext` instead.\n* Remove `onUserListUpdated`. Use `getAllUserList` and `getUserList` in `UserContext` and `onRemoteUserJoined`, `onRemoteUserLeft`, and `onUserUpdated` in `UserHandler` instead.\n* Remove `onCoHostListUpdated`. Use `onCoHostUserListAdded` and `onCoHostUserListRemoved` instead. You can also get the information of all on-stage users through `getCoHostList` in `UserContext`.\n* Rename `onUserReward` to `onUserRewarded`.\n* Rename `onKickOut` as `onLocalUserKickedOut`.\n* Remove `onUserTip` and `onRoster`.\n* Remove `onFlexUserPropsChanged`. Use `onUserPropertiesUpdated` and `onUserPropertiesDeleted` in `IUserHandler` instead. You can also get custom user properties through `getUserProperties` in `UserContext`.\n\n## iOS [#ios]\n\n### Migrate from v1.1.5 to v2.1.0 [#migrate-from-v115-to-v210-1]\n\nIn v2.1.0, Agora fully optimizes the internal architecture of the Agora Classroom SDK and refactors the Agora Edu Context APIs.\n\nThis section lists the major changes of the Edu Context API between v2.1.0 and v1.1.5.\n\n#### Chat context [#chat-context-1]\n\nRemove `AgoraEduMessageContext` and `AgoraEduMessageHandler`. Use `AgoraRtmIMWidget` in the `AgoraWidgets` library instead.\n\n#### Whiteboard context [#whiteboard-context-1]\n\nRemove `AgoraEduWhiteBoardContext`, `AgoraEduWhiteBoardHandler`, `AgoraEduWhiteBoardToolContext`, `AgoraEduWhiteBoardPageControlContext`, and `AgoraEduWhiteBoardPageControlHandler`. Use `AgoraWhiteBoardWidget` in the `AgoraWidgets` library instead.\n\n#### Device context [#device-context-1]\n\n* Remove `AgoraEduDeviceContext` and `AgoraEduDeviceHandler`. Use methods and callbacks in `AgoraEduMediaContext` and `AgoraEduMediaHandler` instead, as follows:\n* Remove `setCameraDeviceEnable`, `setMicDeviceEnable`, and `setSpeakerDeviceEnable`. Use `openLocalDevice` and `closeLocalDevice` in `AgoraEduMediaContext` instead.\n* Remove `switchCameraFacing`. Use `openLocalDevice` in `AgoraEduMediaContext` instead.\n* Remove `onCameraDeviceEnableChanged`, `onCameraDeviceFacingChanged`, `onMicDeviceEnableChanged`, and `onSpeakerDeviceEnableChanged`. Use `onLocalDeviceStateUpdated` in `AgoraEduMediaHandler` instead.\n\n#### Hands-up context [#hands-up-context-1]\n\n* Remove `AgoraEduHandsUpContext` and `AgoraEduHandsUpHandler`. Use methods and callbacks in `AgoraEduUserContext` and `AgoraEduUserHandler` instead, as follows:\n* Remove `updateHandsUpState`. Use `handsWave` and `handsDown` in `AgoraEduUserContext` instead.\n* Remove `onHandsUpState`. Use `onUserHandsWave` and `onUserHandsDown` in `AgoraEduUserHandler` instead.\n\n#### Media context [#media-context]\n\n* Rename `openCamera` as `openLocalDevice`.\n* Rename `closeCamera` as `closeLocalDevice`.\n* Rename `startPreview` as `startRenderVideo`.\n* Rename `stopPreview` as `stopRenderVideo`.\n* Rename `openMicrophone` as `openLocalDevice`.\n* Rename `closeMicrophone` as `closeLocalDevice`.\n* Rename `renderRemoteView` as `startRenderVideo`.\n* Remove `publishStream`.\n* Remove `unpublishStream`.\n\n#### Room context [#room-context-1]\n\n* Rename `joinClassroom` as `joinRoom`.\n* Rename `updateFlexRoomProperties` as `updateRoomProperties`.\n* Remove `uploadLog` and `onUploadLogSuccess`. Use `uploadLog` in `AgoraEduMonitorContext` instead.\n* Rename `registerEventHandler` as `registerRoomEventHandler`.\n* Remove `onShowErrorInfo`.\n* Rename `onClassroomJoined` as `onRoomJoinedSuccess`.\n* Rename `onFlexRoomPropertiesInitialize` as `RoomContext.getRoomProperties`.\n* Remove `onFlexRoomPropertiesChanged`. Use `onRoomPropertiesUpdated` and `onRoomPropertiesDeleted` instead.\n* Remove `onClassroomName`. Use `getRoomInfo` in `AgoraEduRoomContext` instead.\n* Remove `onClassroomState`. Use `onClassStateUpdated` and `onRoomClosed` instead.\n* Remove `onClassTimeInfo`. Use `getRoomInfo` in `AgoraEduRoomContext` instead.\n* Remove `onNetworkQuality`. Use `onLocalNetworkQualityUpdated` in `AgoraEduMonitorHandler` instead.\n* Remove `onConnectionState`. Use `onLocalConnectionUpdated` in `AgoraEduMonitorHandler` instead.\n\n#### Screen-sharing context [#screen-sharing-context-1]\n\n* Remove `AgoraEduScreenShareContext` and `AgoraEduScreenShareHandler`. Use `AgoraEduStreamContext` instead. When `videoSourceType` in `AgoraEduContextStreamInfo` is `screen`, you can regard this stream as a screen-sharing video stream.\n* Remove `AgoraEduScreenShareHandler`. Use `AgoraEduStreamContext` instead. Remove `onUpdateScreenShareState`. Use `onStreamJoined`, `onStreamLeft`, and `onStreamUpdate` in `AgoraEduStreamHandler` instead.\n\n#### User context [#user-context-1]\n\n* Rename `updateFlexUserProperties` as `updateUserProperties`\n* Rename `registerEventHandler` as `registerUserEventHandler`\n* Remove `onUpdateUserList`. Use `onRemoteUserJoined`, `onRemoteUserLeft`, and `onUserUpdated` instead.\n* Remove `onUpdateCoHostList`. Use `onCoHostUserListAdded` and `onCoHostUserListRemoved` instead.\n* Rename `onKickOut` as `onLocalUserKickOut`.\n* Remove `onUpdateAudioVolumeIndication`. Use `onVolumeUpdated` in `AgoraEduMediaHandler` instead.\n* Rename `onShowUserReward` as `onUserRewarded`.\n* Remove `onFlexUserPropertiesChanged`. Use `onUserPropertiesUpdated` and `onUserPropertiesDeleted` instead.\n* Remove `onStreamUpdated`. Use `onStreamUpdated` in `AgoraEduStreamHandler` instead.\n\n### Migrate to 1.1.5 [#migrate-to-115]\n\nIf you changed the UI of Flexible Classroom in versions earlier than v1.1.5, follow these steps to migrate to v1.1.5:\n\n#### Step 1: Re-integrate Flexible Classroom [#step-1-re-integrate-flexible-classroom]\n\nFollow the steps in Integrate Flexible Classroom into Your App to re-integrate Flexible Classroom v1.1.5.\n\n#### Step 2: Replace the files in the `SDKs/AgoraEduUI` directory [#step-2-replace-the-files-in-the-sdksagoraeduui-directory]\n\nReplace the files in the `SDKs/AgoraEduUI` directory with the files in your project's `AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppView` directory, as follows:\n\n* Replace `SDKs/AgoraEduUI/AgoraEduUI/AgoraResources` with `AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/AgoraResources`.\n* Replace `SDKs/AgoraEduUI/AgoraEduUI/Render` with `AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/Render`.\n* Replace `SDKs/AgoraEduUI/AgoraEduUI/UIController` with `AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/UIController`.\n* Replace `SDKs/AgoraEduUI/AgoraEduUI/WhiteBoard` with `AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/WhiteBoard`.\n* Replace `SDKs/AgoraEduUI/AgoraEduUI/AgoraEduUI.xcassets` with `AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/AgoraUIEduAppViews.xcassets`.\n* Replace `SDKs/AgoraEduUI/AgoraEduUI/UIManager` with `AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/UIManager`, rename `AgoraUIManager.swift` to `AgoraEduUI.swift`, and rename `AgoraUIManager` class to `AgoraEduUI`.\n* Replace `Widgets/AgoraWidgets/Chat` with `AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/Widget`.\n\n#### Step 3: Edit the `AgoraEduUI.swift` file [#step-3-edit-the-agoraeduuiswift-file]\n\nIn `AgoraEduUI.swift`, make the following changes:\n\n1. Rename `AgoraEduContextAppType` to `AgoraEduContextRoomType`.\n2. Change `var chat: AgoraEduWidget` to `var chat: AgoraBaseWidget`.\n3. Add the following code to add the `initWidgets` method:\n\n   ```swift\n   func initWidgets() {\n           guard let widgetInfos = contextPool.widget.getWidgetInfos() else {\n               return\n           }\n\n           for info in widgetInfos {\n               switch info.widgetId {\n               case \"AgoraChatWidget\":\n                   info.properties = [\"contextPool\": contextPool]\n                   let chat = contextPool.widget.create(with: info)\n                   chat.addMessageObserver(self)\n\n                   let hasConversation = (viewType == .oneToOne ? 0 : 1)\n                   if let message = [\"hasConversation\": hasConversation].jsonString() {\n                       chat.widgetDidReceiveMessage(message)\n                   }\n\n                   self.chat = chat\n               default:\n                   break\n               }\n           }\n   }\n   ```\n\n#### Step 4: Replace the files in the `SDKs/Modules/AgraUIEduBaseViews` directory [#step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory]\n\nReplace the files in the `SDKs/Modules/AgraUIEduBaseViews` directory with the files in your project's `AgoraEduSDK/Modules/AgraUIEduBaseViews` directory, as follows:\n\n* Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraResources` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraResources`.\n* Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraAlertView` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraAlertView`.\n* Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraAnimatedImage` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraAnimatedImage`.\n* Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraHandsUpView` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraHandsUpView`.\n* Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraRefresh` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraRefresh`.\n* Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraToastView` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraToastView`.\n* Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraUIEduBaseViews.xcassets` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUIEduBaseViews.xcassets`.\n* Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraUINavigationBar` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUINavigationBar`.\n* Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraUIUserView` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUIUserView`.\n* Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraUserListView` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUserListView`.\n* Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraUserRenderListView` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUserRenderListView`.\n* Replace `SDKs/Modules/AgraUIEduBaseViews/Utils` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/Utils`.\n* Replace `Widgets/AgoraWidgets/Chat` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUIChatView`.\n\n#### Step 5: Edit the `AgoraChatWidget.swift` file [#step-5-edit-the-agorachatwidgetswift-file]\n\nIn `AgoraChatWidget.swift`, make the following changes:\n\n1. Replace the initialization method with the following code:\n\n   ```swift\n   public required init(widgetId: String,\n                        contextPool: AgoraEduContextPool,\n                        properties: [AnyHashable : Any]?) {\n       super.init(widgetId: widgetId,\n                  contextPool: contextPool,\n                  properties: properties)\n       initViews()\n       initLayout()\n       initData()\n   }\n   ```\n\n2. To add the `AgoraEduMessageContext` property, add the following code:\n\n   ```swift\n   private weak var context: AgoraEduMessageContext?\n\n   public required override init(widgetId: String,\n                                 properties: [AnyHashable: Any]?) {\n       super.init(widgetId: widgetId,\n                  properties: properties)\n\n       initViews()\n       initLayout()\n\n       if let contextPool = properties?[\"contextPool\"] as? AgoraEduContextPool {\n           context = contextPool.chat\n           initData()\n       }\n   }\n   ```\n\n## Web [#web]\n\nYou do not need to migrate your code for this platform.\n\n## Electron [#electron]\n\nYou do not need to migrate your code for this platform.\n";
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page shows you how to upgrade to the latest version of Flexible Classroom."
  }, {
    heading: "migrate-from-v115-to-v210",
    content: "In v2.1.0, Agora fully optimizes the internal architecture of the Agora Classroom SDK and refactors the Agora Edu Context APIs."
  }, {
    heading: "migrate-from-v115-to-v210",
    content: "This section lists the major changes of the Edu Context API between v2.1.0 and v1.1.5."
  }, {
    heading: "chat-context",
    content: "Remove `ChatContext` and `IChatHandler`."
  }, {
    heading: "whiteboard-context",
    content: "Remove `WhiteboardContext` and `IWhiteboardHandler`. In v2.1.0, the whiteboard feature is implemented in `AgoraUIKit`."
  }, {
    heading: "device-context",
    content: "Remove `DeviceContext` and `IDeviceHandler`. Use methods and callbacks in `MediaContext` and `IMediaHandler` instead, as follows:"
  }, {
    heading: "device-context",
    content: "Remove `getDeviceConfig`. Use `getLocalDeviceState` instead."
  }, {
    heading: "device-context",
    content: "Remove `setCameraDeviceEnable`, `switchCameraFacing`, `setMicDeviceEnable`, and `setSpeakerEnable`. Use `openSystemDevice` and `closeSystemDevice` instead."
  }, {
    heading: "device-context",
    content: "Remove `setDeviceLifecycle`. In v2.1.0, the SDK does not maintain the device state."
  }, {
    heading: "device-context",
    content: "Remove `onCameraDeviceEnableChanged`, `onCameraFacingChanged`, `onMicDeviceEnabledChanged`, and `onSpeakerEnabledChanged`. Use `onLocalDeviceStateUpdated` instead."
  }, {
    heading: "device-context",
    content: "Remove `onDeviceTips`."
  }, {
    heading: "hands-up-context",
    content: "Remove `HandsUpContext` and `IHandsUpHandler`. Use methods and callbacks in `UserContext` and `IUserHandler` instead, as follows:"
  }, {
    heading: "hands-up-context",
    content: "Remove `performHandsUp`. Use `handsWave` and `handsDown` instead."
  }, {
    heading: "hands-up-context",
    content: "Remove `onHandsUpEnabled`. Use `onHandsWaveEnabled` instead."
  }, {
    heading: "hands-up-context",
    content: "Remove `onHandsUpStateUpdated` and `onHandsUpStateResultUpdated`. Use `onUserHandsWave` and `onUserHandsDown` instead."
  }, {
    heading: "hands-up-context",
    content: "Remove `onHandsUpTips`."
  }, {
    heading: "room-context",
    content: "Remove `roomInfo`. Use `getRoomInfo` instead."
  }, {
    heading: "room-context",
    content: "Remove `leave`. Use `leaveRoom` instead."
  }, {
    heading: "room-context",
    content: "Move `uploadLog` to `MonitorContext`."
  }, {
    heading: "room-context",
    content: "Remove `updateFlexRoomProps`. Use `updateRoomProperties` and `deleteRoomProperties` instead."
  }, {
    heading: "room-context",
    content: "Rename `joinClassroom` as `joinRoom`."
  }, {
    heading: "room-context",
    content: "Remove `onClassroomName`. You can call `getRoomInfo` to get the room name."
  }, {
    heading: "room-context",
    content: "Rename `onClassState` as `onClassStateUpdated`."
  }, {
    heading: "room-context",
    content: "Remove `onClassTime`."
  }, {
    heading: "room-context",
    content: "Remove `onNetworkStateChanged`. Use `onLocalNetworkQualityUpdated` in `IMonitorHandler` instead."
  }, {
    heading: "room-context",
    content: "Remove `onLogUploaded`. You can get the log `serailNumber` with the callback function in the `uploadLog` method in `MonitorContext`."
  }, {
    heading: "room-context",
    content: "Remove `onConnectionStateChanged`. Use `onLocalConnectionUpdated` in `IMonitorHandler` instead."
  }, {
    heading: "room-context",
    content: "Remove `onClassTip`."
  }, {
    heading: "room-context",
    content: "Remove `onFlexRoomPropsInitialized`. To get room custom properties after joining the room, you can call `getRoomProperties`."
  }, {
    heading: "room-context",
    content: "Remove `onFlexRoomPropsChanged`. Use `onRoomPropertiesUpdated` and `onRoomPropertiesDeleted` instead."
  }, {
    heading: "room-context",
    content: "Remove `onError`."
  }, {
    heading: "room-context",
    content: "Remove `onClassroomJoinSuccess` and `onClassroomJoinFail`. Use `callback` in `joinRoom` instead."
  }, {
    heading: "room-context",
    content: "Remove `onClassroomLeft`. Use `onRoomClosed` instead."
  }, {
    heading: "screen-sharing-context",
    content: "Remove `ScreenShareContext`. Use `StreamContext` instead. When `videoSourceType` in `AgoraEduContextStreamInfo` is `Screen`, you can regard this stream as a screen-sharing video stream."
  }, {
    heading: "screen-sharing-context",
    content: "Remove `IScreenShareHandler`. Use `IStreamHandler` instead. Remove `onUpdateScreenShareState`. Use `onStreamJoined`, `onStreamLeft`, and `onStreamUpdated` in `IStreamHandler` instead."
  }, {
    heading: "user-context",
    content: "Remove `localUserInfo`. Use `getLocalUserInfo` instead."
  }, {
    heading: "user-context",
    content: "Remove `muteVideo` and `muteAudio`. Use `muteStreams` in `StreamContext` instead."
  }, {
    heading: "user-context",
    content: "Remove `renderVideo`. Use `startRenderLocalVideo` and `startRenderRemoteVideo` in `MediaContext` instead."
  }, {
    heading: "user-context",
    content: "Remove `updateFlexUserProps`. Use `updateUserProperties` and `deleteUserProperties` instead."
  }, {
    heading: "user-context",
    content: "Remove `setVideoEncoderConfig`. Use `setLocalVideoConfig` in `StreamContext` instead."
  }, {
    heading: "user-context",
    content: "Remove `onUserListUpdated`. Use `getAllUserList` and `getUserList` in `UserContext` and `onRemoteUserJoined`, `onRemoteUserLeft`, and `onUserUpdated` in `UserHandler` instead."
  }, {
    heading: "user-context",
    content: "Remove `onCoHostListUpdated`. Use `onCoHostUserListAdded` and `onCoHostUserListRemoved` instead. You can also get the information of all on-stage users through `getCoHostList` in `UserContext`."
  }, {
    heading: "user-context",
    content: "Rename `onUserReward` to `onUserRewarded`."
  }, {
    heading: "user-context",
    content: "Rename `onKickOut` as `onLocalUserKickedOut`."
  }, {
    heading: "user-context",
    content: "Remove `onUserTip` and `onRoster`."
  }, {
    heading: "user-context",
    content: "Remove `onFlexUserPropsChanged`. Use `onUserPropertiesUpdated` and `onUserPropertiesDeleted` in `IUserHandler` instead. You can also get custom user properties through `getUserProperties` in `UserContext`."
  }, {
    heading: "migrate-from-v115-to-v210-1",
    content: "In v2.1.0, Agora fully optimizes the internal architecture of the Agora Classroom SDK and refactors the Agora Edu Context APIs."
  }, {
    heading: "migrate-from-v115-to-v210-1",
    content: "This section lists the major changes of the Edu Context API between v2.1.0 and v1.1.5."
  }, {
    heading: "chat-context-1",
    content: "Remove `AgoraEduMessageContext` and `AgoraEduMessageHandler`. Use `AgoraRtmIMWidget` in the `AgoraWidgets` library instead."
  }, {
    heading: "whiteboard-context-1",
    content: "Remove `AgoraEduWhiteBoardContext`, `AgoraEduWhiteBoardHandler`, `AgoraEduWhiteBoardToolContext`, `AgoraEduWhiteBoardPageControlContext`, and `AgoraEduWhiteBoardPageControlHandler`. Use `AgoraWhiteBoardWidget` in the `AgoraWidgets` library instead."
  }, {
    heading: "device-context-1",
    content: "Remove `AgoraEduDeviceContext` and `AgoraEduDeviceHandler`. Use methods and callbacks in `AgoraEduMediaContext` and `AgoraEduMediaHandler` instead, as follows:"
  }, {
    heading: "device-context-1",
    content: "Remove `setCameraDeviceEnable`, `setMicDeviceEnable`, and `setSpeakerDeviceEnable`. Use `openLocalDevice` and `closeLocalDevice` in `AgoraEduMediaContext` instead."
  }, {
    heading: "device-context-1",
    content: "Remove `switchCameraFacing`. Use `openLocalDevice` in `AgoraEduMediaContext` instead."
  }, {
    heading: "device-context-1",
    content: "Remove `onCameraDeviceEnableChanged`, `onCameraDeviceFacingChanged`, `onMicDeviceEnableChanged`, and `onSpeakerDeviceEnableChanged`. Use `onLocalDeviceStateUpdated` in `AgoraEduMediaHandler` instead."
  }, {
    heading: "hands-up-context-1",
    content: "Remove `AgoraEduHandsUpContext` and `AgoraEduHandsUpHandler`. Use methods and callbacks in `AgoraEduUserContext` and `AgoraEduUserHandler` instead, as follows:"
  }, {
    heading: "hands-up-context-1",
    content: "Remove `updateHandsUpState`. Use `handsWave` and `handsDown` in `AgoraEduUserContext` instead."
  }, {
    heading: "hands-up-context-1",
    content: "Remove `onHandsUpState`. Use `onUserHandsWave` and `onUserHandsDown` in `AgoraEduUserHandler` instead."
  }, {
    heading: "media-context",
    content: "Rename `openCamera` as `openLocalDevice`."
  }, {
    heading: "media-context",
    content: "Rename `closeCamera` as `closeLocalDevice`."
  }, {
    heading: "media-context",
    content: "Rename `startPreview` as `startRenderVideo`."
  }, {
    heading: "media-context",
    content: "Rename `stopPreview` as `stopRenderVideo`."
  }, {
    heading: "media-context",
    content: "Rename `openMicrophone` as `openLocalDevice`."
  }, {
    heading: "media-context",
    content: "Rename `closeMicrophone` as `closeLocalDevice`."
  }, {
    heading: "media-context",
    content: "Rename `renderRemoteView` as `startRenderVideo`."
  }, {
    heading: "media-context",
    content: "Remove `publishStream`."
  }, {
    heading: "media-context",
    content: "Remove `unpublishStream`."
  }, {
    heading: "room-context-1",
    content: "Rename `joinClassroom` as `joinRoom`."
  }, {
    heading: "room-context-1",
    content: "Rename `updateFlexRoomProperties` as `updateRoomProperties`."
  }, {
    heading: "room-context-1",
    content: "Remove `uploadLog` and `onUploadLogSuccess`. Use `uploadLog` in `AgoraEduMonitorContext` instead."
  }, {
    heading: "room-context-1",
    content: "Rename `registerEventHandler` as `registerRoomEventHandler`."
  }, {
    heading: "room-context-1",
    content: "Remove `onShowErrorInfo`."
  }, {
    heading: "room-context-1",
    content: "Rename `onClassroomJoined` as `onRoomJoinedSuccess`."
  }, {
    heading: "room-context-1",
    content: "Rename `onFlexRoomPropertiesInitialize` as `RoomContext.getRoomProperties`."
  }, {
    heading: "room-context-1",
    content: "Remove `onFlexRoomPropertiesChanged`. Use `onRoomPropertiesUpdated` and `onRoomPropertiesDeleted` instead."
  }, {
    heading: "room-context-1",
    content: "Remove `onClassroomName`. Use `getRoomInfo` in `AgoraEduRoomContext` instead."
  }, {
    heading: "room-context-1",
    content: "Remove `onClassroomState`. Use `onClassStateUpdated` and `onRoomClosed` instead."
  }, {
    heading: "room-context-1",
    content: "Remove `onClassTimeInfo`. Use `getRoomInfo` in `AgoraEduRoomContext` instead."
  }, {
    heading: "room-context-1",
    content: "Remove `onNetworkQuality`. Use `onLocalNetworkQualityUpdated` in `AgoraEduMonitorHandler` instead."
  }, {
    heading: "room-context-1",
    content: "Remove `onConnectionState`. Use `onLocalConnectionUpdated` in `AgoraEduMonitorHandler` instead."
  }, {
    heading: "screen-sharing-context-1",
    content: "Remove `AgoraEduScreenShareContext` and `AgoraEduScreenShareHandler`. Use `AgoraEduStreamContext` instead. When `videoSourceType` in `AgoraEduContextStreamInfo` is `screen`, you can regard this stream as a screen-sharing video stream."
  }, {
    heading: "screen-sharing-context-1",
    content: "Remove `AgoraEduScreenShareHandler`. Use `AgoraEduStreamContext` instead. Remove `onUpdateScreenShareState`. Use `onStreamJoined`, `onStreamLeft`, and `onStreamUpdate` in `AgoraEduStreamHandler` instead."
  }, {
    heading: "user-context-1",
    content: "Rename `updateFlexUserProperties` as `updateUserProperties`"
  }, {
    heading: "user-context-1",
    content: "Rename `registerEventHandler` as `registerUserEventHandler`"
  }, {
    heading: "user-context-1",
    content: "Remove `onUpdateUserList`. Use `onRemoteUserJoined`, `onRemoteUserLeft`, and `onUserUpdated` instead."
  }, {
    heading: "user-context-1",
    content: "Remove `onUpdateCoHostList`. Use `onCoHostUserListAdded` and `onCoHostUserListRemoved` instead."
  }, {
    heading: "user-context-1",
    content: "Rename `onKickOut` as `onLocalUserKickOut`."
  }, {
    heading: "user-context-1",
    content: "Remove `onUpdateAudioVolumeIndication`. Use `onVolumeUpdated` in `AgoraEduMediaHandler` instead."
  }, {
    heading: "user-context-1",
    content: "Rename `onShowUserReward` as `onUserRewarded`."
  }, {
    heading: "user-context-1",
    content: "Remove `onFlexUserPropertiesChanged`. Use `onUserPropertiesUpdated` and `onUserPropertiesDeleted` instead."
  }, {
    heading: "user-context-1",
    content: "Remove `onStreamUpdated`. Use `onStreamUpdated` in `AgoraEduStreamHandler` instead."
  }, {
    heading: "migrate-to-115",
    content: "If you changed the UI of Flexible Classroom in versions earlier than v1.1.5, follow these steps to migrate to v1.1.5:"
  }, {
    heading: "step-1-re-integrate-flexible-classroom",
    content: "Follow the steps in Integrate Flexible Classroom into Your App to re-integrate Flexible Classroom v1.1.5."
  }, {
    heading: "step-2-replace-the-files-in-the-sdksagoraeduui-directory",
    content: "Replace the files in the `SDKs/AgoraEduUI` directory with the files in your project's `AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppView` directory, as follows:"
  }, {
    heading: "step-2-replace-the-files-in-the-sdksagoraeduui-directory",
    content: "Replace `SDKs/AgoraEduUI/AgoraEduUI/AgoraResources` with `AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/AgoraResources`."
  }, {
    heading: "step-2-replace-the-files-in-the-sdksagoraeduui-directory",
    content: "Replace `SDKs/AgoraEduUI/AgoraEduUI/Render` with `AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/Render`."
  }, {
    heading: "step-2-replace-the-files-in-the-sdksagoraeduui-directory",
    content: "Replace `SDKs/AgoraEduUI/AgoraEduUI/UIController` with `AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/UIController`."
  }, {
    heading: "step-2-replace-the-files-in-the-sdksagoraeduui-directory",
    content: "Replace `SDKs/AgoraEduUI/AgoraEduUI/WhiteBoard` with `AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/WhiteBoard`."
  }, {
    heading: "step-2-replace-the-files-in-the-sdksagoraeduui-directory",
    content: "Replace `SDKs/AgoraEduUI/AgoraEduUI/AgoraEduUI.xcassets` with `AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/AgoraUIEduAppViews.xcassets`."
  }, {
    heading: "step-2-replace-the-files-in-the-sdksagoraeduui-directory",
    content: "Replace `SDKs/AgoraEduUI/AgoraEduUI/UIManager` with `AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/UIManager`, rename `AgoraUIManager.swift` to `AgoraEduUI.swift`, and rename `AgoraUIManager` class to `AgoraEduUI`."
  }, {
    heading: "step-2-replace-the-files-in-the-sdksagoraeduui-directory",
    content: "Replace `Widgets/AgoraWidgets/Chat` with `AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/Widget`."
  }, {
    heading: "step-3-edit-the-agoraeduuiswift-file",
    content: "In `AgoraEduUI.swift`, make the following changes:"
  }, {
    heading: "step-3-edit-the-agoraeduuiswift-file",
    content: "Rename `AgoraEduContextAppType` to `AgoraEduContextRoomType`."
  }, {
    heading: "step-3-edit-the-agoraeduuiswift-file",
    content: "Change `var chat: AgoraEduWidget` to `var chat: AgoraBaseWidget`."
  }, {
    heading: "step-3-edit-the-agoraeduuiswift-file",
    content: "Add the following code to add the `initWidgets` method:"
  }, {
    heading: "step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
    content: "Replace the files in the `SDKs/Modules/AgraUIEduBaseViews` directory with the files in your project's `AgoraEduSDK/Modules/AgraUIEduBaseViews` directory, as follows:"
  }, {
    heading: "step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
    content: "Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraResources` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraResources`."
  }, {
    heading: "step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
    content: "Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraAlertView` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraAlertView`."
  }, {
    heading: "step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
    content: "Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraAnimatedImage` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraAnimatedImage`."
  }, {
    heading: "step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
    content: "Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraHandsUpView` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraHandsUpView`."
  }, {
    heading: "step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
    content: "Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraRefresh` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraRefresh`."
  }, {
    heading: "step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
    content: "Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraToastView` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraToastView`."
  }, {
    heading: "step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
    content: "Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraUIEduBaseViews.xcassets` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUIEduBaseViews.xcassets`."
  }, {
    heading: "step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
    content: "Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraUINavigationBar` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUINavigationBar`."
  }, {
    heading: "step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
    content: "Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraUIUserView` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUIUserView`."
  }, {
    heading: "step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
    content: "Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraUserListView` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUserListView`."
  }, {
    heading: "step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
    content: "Replace `SDKs/Modules/AgraUIEduBaseViews/AgoraUserRenderListView` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUserRenderListView`."
  }, {
    heading: "step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
    content: "Replace `SDKs/Modules/AgraUIEduBaseViews/Utils` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/Utils`."
  }, {
    heading: "step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
    content: "Replace `Widgets/AgoraWidgets/Chat` with `AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUIChatView`."
  }, {
    heading: "step-5-edit-the-agorachatwidgetswift-file",
    content: "In `AgoraChatWidget.swift`, make the following changes:"
  }, {
    heading: "step-5-edit-the-agorachatwidgetswift-file",
    content: "Replace the initialization method with the following code:"
  }, {
    heading: "step-5-edit-the-agorachatwidgetswift-file",
    content: "To add the `AgoraEduMessageContext` property, add the following code:"
  }, {
    heading: "web",
    content: "You do not need to migrate your code for this platform."
  }, {
    heading: "electron",
    content: "You do not need to migrate your code for this platform."
  }],
  headings: [{
    id: "android",
    content: "Android"
  }, {
    id: "migrate-from-v115-to-v210",
    content: "Migrate from v1.1.5 to v2.1.0"
  }, {
    id: "chat-context",
    content: "Chat context"
  }, {
    id: "whiteboard-context",
    content: "Whiteboard context"
  }, {
    id: "device-context",
    content: "Device context"
  }, {
    id: "hands-up-context",
    content: "Hands-up context"
  }, {
    id: "room-context",
    content: "Room context"
  }, {
    id: "screen-sharing-context",
    content: "Screen-sharing context"
  }, {
    id: "user-context",
    content: "User context"
  }, {
    id: "ios",
    content: "iOS"
  }, {
    id: "migrate-from-v115-to-v210-1",
    content: "Migrate from v1.1.5 to v2.1.0"
  }, {
    id: "chat-context-1",
    content: "Chat context"
  }, {
    id: "whiteboard-context-1",
    content: "Whiteboard context"
  }, {
    id: "device-context-1",
    content: "Device context"
  }, {
    id: "hands-up-context-1",
    content: "Hands-up context"
  }, {
    id: "media-context",
    content: "Media context"
  }, {
    id: "room-context-1",
    content: "Room context"
  }, {
    id: "screen-sharing-context-1",
    content: "Screen-sharing context"
  }, {
    id: "user-context-1",
    content: "User context"
  }, {
    id: "migrate-to-115",
    content: "Migrate to 1.1.5"
  }, {
    id: "step-1-re-integrate-flexible-classroom",
    content: "Step 1: Re-integrate Flexible Classroom"
  }, {
    id: "step-2-replace-the-files-in-the-sdksagoraeduui-directory",
    content: "Step 2: Replace the files in the `SDKs/AgoraEduUI` directory"
  }, {
    id: "step-3-edit-the-agoraeduuiswift-file",
    content: "Step 3: Edit the `AgoraEduUI.swift` file"
  }, {
    id: "step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
    content: "Step 4: Replace the files in the `SDKs/Modules/AgraUIEduBaseViews` directory"
  }, {
    id: "step-5-edit-the-agorachatwidgetswift-file",
    content: "Step 5: Edit the `AgoraChatWidget.swift` file"
  }, {
    id: "web",
    content: "Web"
  }, {
    id: "electron",
    content: "Electron"
  }]
};
export let toc = [{
  depth: 2,
  url: "#android",
  title: _jsx(_Fragment, {
    children: "Android"
  })
}, {
  depth: 3,
  url: "#migrate-from-v115-to-v210",
  title: _jsx(_Fragment, {
    children: "Migrate from v1.1.5 to v2.1.0"
  })
}, {
  depth: 4,
  url: "#chat-context",
  title: _jsx(_Fragment, {
    children: "Chat context"
  })
}, {
  depth: 4,
  url: "#whiteboard-context",
  title: _jsx(_Fragment, {
    children: "Whiteboard context"
  })
}, {
  depth: 4,
  url: "#device-context",
  title: _jsx(_Fragment, {
    children: "Device context"
  })
}, {
  depth: 4,
  url: "#hands-up-context",
  title: _jsx(_Fragment, {
    children: "Hands-up context"
  })
}, {
  depth: 4,
  url: "#room-context",
  title: _jsx(_Fragment, {
    children: "Room context"
  })
}, {
  depth: 4,
  url: "#screen-sharing-context",
  title: _jsx(_Fragment, {
    children: "Screen-sharing context"
  })
}, {
  depth: 4,
  url: "#user-context",
  title: _jsx(_Fragment, {
    children: "User context"
  })
}, {
  depth: 2,
  url: "#ios",
  title: _jsx(_Fragment, {
    children: "iOS"
  })
}, {
  depth: 3,
  url: "#migrate-from-v115-to-v210-1",
  title: _jsx(_Fragment, {
    children: "Migrate from v1.1.5 to v2.1.0"
  })
}, {
  depth: 4,
  url: "#chat-context-1",
  title: _jsx(_Fragment, {
    children: "Chat context"
  })
}, {
  depth: 4,
  url: "#whiteboard-context-1",
  title: _jsx(_Fragment, {
    children: "Whiteboard context"
  })
}, {
  depth: 4,
  url: "#device-context-1",
  title: _jsx(_Fragment, {
    children: "Device context"
  })
}, {
  depth: 4,
  url: "#hands-up-context-1",
  title: _jsx(_Fragment, {
    children: "Hands-up context"
  })
}, {
  depth: 4,
  url: "#media-context",
  title: _jsx(_Fragment, {
    children: "Media context"
  })
}, {
  depth: 4,
  url: "#room-context-1",
  title: _jsx(_Fragment, {
    children: "Room context"
  })
}, {
  depth: 4,
  url: "#screen-sharing-context-1",
  title: _jsx(_Fragment, {
    children: "Screen-sharing context"
  })
}, {
  depth: 4,
  url: "#user-context-1",
  title: _jsx(_Fragment, {
    children: "User context"
  })
}, {
  depth: 3,
  url: "#migrate-to-115",
  title: _jsx(_Fragment, {
    children: "Migrate to 1.1.5"
  })
}, {
  depth: 4,
  url: "#step-1-re-integrate-flexible-classroom",
  title: _jsx(_Fragment, {
    children: "Step 1: Re-integrate Flexible Classroom"
  })
}, {
  depth: 4,
  url: "#step-2-replace-the-files-in-the-sdksagoraeduui-directory",
  title: _jsxs(_Fragment, {
    children: ["Step 2: Replace the files in the ", _jsx("code", {
      children: "SDKs/AgoraEduUI"
    }), " directory"]
  })
}, {
  depth: 4,
  url: "#step-3-edit-the-agoraeduuiswift-file",
  title: _jsxs(_Fragment, {
    children: ["Step 3: Edit the ", _jsx("code", {
      children: "AgoraEduUI.swift"
    }), " file"]
  })
}, {
  depth: 4,
  url: "#step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
  title: _jsxs(_Fragment, {
    children: ["Step 4: Replace the files in the ", _jsx("code", {
      children: "SDKs/Modules/AgraUIEduBaseViews"
    }), " directory"]
  })
}, {
  depth: 4,
  url: "#step-5-edit-the-agorachatwidgetswift-file",
  title: _jsxs(_Fragment, {
    children: ["Step 5: Edit the ", _jsx("code", {
      children: "AgoraChatWidget.swift"
    }), " file"]
  })
}, {
  depth: 2,
  url: "#web",
  title: _jsx(_Fragment, {
    children: "Web"
  })
}, {
  depth: 2,
  url: "#electron",
  title: _jsx(_Fragment, {
    children: "Electron"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page shows you how to upgrade to the latest version of Flexible Classroom."
    }), `
`, _jsx(_components.h2, {
      id: "android",
      children: "Android"
    }), `
`, _jsx(_components.h3, {
      id: "migrate-from-v115-to-v210",
      children: "Migrate from v1.1.5 to v2.1.0"
    }), `
`, _jsx(_components.p, {
      children: "In v2.1.0, Agora fully optimizes the internal architecture of the Agora Classroom SDK and refactors the Agora Edu Context APIs."
    }), `
`, _jsx(_components.p, {
      children: "This section lists the major changes of the Edu Context API between v2.1.0 and v1.1.5."
    }), `
`, _jsx(_components.h4, {
      id: "chat-context",
      children: "Chat context"
    }), `
`, _jsxs(_components.p, {
      children: ["Remove ", _jsx(_components.code, {
        children: "ChatContext"
      }), " and ", _jsx(_components.code, {
        children: "IChatHandler"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "whiteboard-context",
      children: "Whiteboard context"
    }), `
`, _jsxs(_components.p, {
      children: ["Remove ", _jsx(_components.code, {
        children: "WhiteboardContext"
      }), " and ", _jsx(_components.code, {
        children: "IWhiteboardHandler"
      }), ". In v2.1.0, the whiteboard feature is implemented in ", _jsx(_components.code, {
        children: "AgoraUIKit"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "device-context",
      children: "Device context"
    }), `
`, _jsxs(_components.p, {
      children: ["Remove ", _jsx(_components.code, {
        children: "DeviceContext"
      }), " and ", _jsx(_components.code, {
        children: "IDeviceHandler"
      }), ". Use methods and callbacks in ", _jsx(_components.code, {
        children: "MediaContext"
      }), " and ", _jsx(_components.code, {
        children: "IMediaHandler"
      }), " instead, as follows:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "getDeviceConfig"
        }), ". Use ", _jsx(_components.code, {
          children: "getLocalDeviceState"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "setCameraDeviceEnable"
        }), ", ", _jsx(_components.code, {
          children: "switchCameraFacing"
        }), ", ", _jsx(_components.code, {
          children: "setMicDeviceEnable"
        }), ", and ", _jsx(_components.code, {
          children: "setSpeakerEnable"
        }), ". Use ", _jsx(_components.code, {
          children: "openSystemDevice"
        }), " and ", _jsx(_components.code, {
          children: "closeSystemDevice"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "setDeviceLifecycle"
        }), ". In v2.1.0, the SDK does not maintain the device state."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onCameraDeviceEnableChanged"
        }), ", ", _jsx(_components.code, {
          children: "onCameraFacingChanged"
        }), ", ", _jsx(_components.code, {
          children: "onMicDeviceEnabledChanged"
        }), ", and ", _jsx(_components.code, {
          children: "onSpeakerEnabledChanged"
        }), ". Use ", _jsx(_components.code, {
          children: "onLocalDeviceStateUpdated"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onDeviceTips"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "hands-up-context",
      children: "Hands-up context"
    }), `
`, _jsxs(_components.p, {
      children: ["Remove ", _jsx(_components.code, {
        children: "HandsUpContext"
      }), " and ", _jsx(_components.code, {
        children: "IHandsUpHandler"
      }), ". Use methods and callbacks in ", _jsx(_components.code, {
        children: "UserContext"
      }), " and ", _jsx(_components.code, {
        children: "IUserHandler"
      }), " instead, as follows:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "performHandsUp"
        }), ". Use ", _jsx(_components.code, {
          children: "handsWave"
        }), " and ", _jsx(_components.code, {
          children: "handsDown"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onHandsUpEnabled"
        }), ". Use ", _jsx(_components.code, {
          children: "onHandsWaveEnabled"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onHandsUpStateUpdated"
        }), " and ", _jsx(_components.code, {
          children: "onHandsUpStateResultUpdated"
        }), ". Use ", _jsx(_components.code, {
          children: "onUserHandsWave"
        }), " and ", _jsx(_components.code, {
          children: "onUserHandsDown"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onHandsUpTips"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "room-context",
      children: "Room context"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "roomInfo"
        }), ". Use ", _jsx(_components.code, {
          children: "getRoomInfo"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "leave"
        }), ". Use ", _jsx(_components.code, {
          children: "leaveRoom"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Move ", _jsx(_components.code, {
          children: "uploadLog"
        }), " to ", _jsx(_components.code, {
          children: "MonitorContext"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "updateFlexRoomProps"
        }), ". Use ", _jsx(_components.code, {
          children: "updateRoomProperties"
        }), " and ", _jsx(_components.code, {
          children: "deleteRoomProperties"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "joinClassroom"
        }), " as ", _jsx(_components.code, {
          children: "joinRoom"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onClassroomName"
        }), ". You can call ", _jsx(_components.code, {
          children: "getRoomInfo"
        }), " to get the room name."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "onClassState"
        }), " as ", _jsx(_components.code, {
          children: "onClassStateUpdated"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onClassTime"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onNetworkStateChanged"
        }), ". Use ", _jsx(_components.code, {
          children: "onLocalNetworkQualityUpdated"
        }), " in ", _jsx(_components.code, {
          children: "IMonitorHandler"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onLogUploaded"
        }), ". You can get the log ", _jsx(_components.code, {
          children: "serailNumber"
        }), " with the callback function in the ", _jsx(_components.code, {
          children: "uploadLog"
        }), " method in ", _jsx(_components.code, {
          children: "MonitorContext"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onConnectionStateChanged"
        }), ". Use ", _jsx(_components.code, {
          children: "onLocalConnectionUpdated"
        }), " in ", _jsx(_components.code, {
          children: "IMonitorHandler"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onClassTip"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onFlexRoomPropsInitialized"
        }), ". To get room custom properties after joining the room, you can call ", _jsx(_components.code, {
          children: "getRoomProperties"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onFlexRoomPropsChanged"
        }), ". Use ", _jsx(_components.code, {
          children: "onRoomPropertiesUpdated"
        }), " and ", _jsx(_components.code, {
          children: "onRoomPropertiesDeleted"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onError"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onClassroomJoinSuccess"
        }), " and ", _jsx(_components.code, {
          children: "onClassroomJoinFail"
        }), ". Use ", _jsx(_components.code, {
          children: "callback"
        }), " in ", _jsx(_components.code, {
          children: "joinRoom"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onClassroomLeft"
        }), ". Use ", _jsx(_components.code, {
          children: "onRoomClosed"
        }), " instead."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "screen-sharing-context",
      children: "Screen-sharing context"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "ScreenShareContext"
        }), ". Use ", _jsx(_components.code, {
          children: "StreamContext"
        }), " instead. When ", _jsx(_components.code, {
          children: "videoSourceType"
        }), " in ", _jsx(_components.code, {
          children: "AgoraEduContextStreamInfo"
        }), " is ", _jsx(_components.code, {
          children: "Screen"
        }), ", you can regard this stream as a screen-sharing video stream."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "IScreenShareHandler"
        }), ". Use ", _jsx(_components.code, {
          children: "IStreamHandler"
        }), " instead. Remove ", _jsx(_components.code, {
          children: "onUpdateScreenShareState"
        }), ". Use ", _jsx(_components.code, {
          children: "onStreamJoined"
        }), ", ", _jsx(_components.code, {
          children: "onStreamLeft"
        }), ", and ", _jsx(_components.code, {
          children: "onStreamUpdated"
        }), " in ", _jsx(_components.code, {
          children: "IStreamHandler"
        }), " instead."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "user-context",
      children: "User context"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "localUserInfo"
        }), ". Use ", _jsx(_components.code, {
          children: "getLocalUserInfo"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "muteVideo"
        }), " and ", _jsx(_components.code, {
          children: "muteAudio"
        }), ". Use ", _jsx(_components.code, {
          children: "muteStreams"
        }), " in ", _jsx(_components.code, {
          children: "StreamContext"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "renderVideo"
        }), ". Use ", _jsx(_components.code, {
          children: "startRenderLocalVideo"
        }), " and ", _jsx(_components.code, {
          children: "startRenderRemoteVideo"
        }), " in ", _jsx(_components.code, {
          children: "MediaContext"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "updateFlexUserProps"
        }), ". Use ", _jsx(_components.code, {
          children: "updateUserProperties"
        }), " and ", _jsx(_components.code, {
          children: "deleteUserProperties"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "setVideoEncoderConfig"
        }), ". Use ", _jsx(_components.code, {
          children: "setLocalVideoConfig"
        }), " in ", _jsx(_components.code, {
          children: "StreamContext"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onUserListUpdated"
        }), ". Use ", _jsx(_components.code, {
          children: "getAllUserList"
        }), " and ", _jsx(_components.code, {
          children: "getUserList"
        }), " in ", _jsx(_components.code, {
          children: "UserContext"
        }), " and ", _jsx(_components.code, {
          children: "onRemoteUserJoined"
        }), ", ", _jsx(_components.code, {
          children: "onRemoteUserLeft"
        }), ", and ", _jsx(_components.code, {
          children: "onUserUpdated"
        }), " in ", _jsx(_components.code, {
          children: "UserHandler"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onCoHostListUpdated"
        }), ". Use ", _jsx(_components.code, {
          children: "onCoHostUserListAdded"
        }), " and ", _jsx(_components.code, {
          children: "onCoHostUserListRemoved"
        }), " instead. You can also get the information of all on-stage users through ", _jsx(_components.code, {
          children: "getCoHostList"
        }), " in ", _jsx(_components.code, {
          children: "UserContext"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "onUserReward"
        }), " to ", _jsx(_components.code, {
          children: "onUserRewarded"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "onKickOut"
        }), " as ", _jsx(_components.code, {
          children: "onLocalUserKickedOut"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onUserTip"
        }), " and ", _jsx(_components.code, {
          children: "onRoster"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onFlexUserPropsChanged"
        }), ". Use ", _jsx(_components.code, {
          children: "onUserPropertiesUpdated"
        }), " and ", _jsx(_components.code, {
          children: "onUserPropertiesDeleted"
        }), " in ", _jsx(_components.code, {
          children: "IUserHandler"
        }), " instead. You can also get custom user properties through ", _jsx(_components.code, {
          children: "getUserProperties"
        }), " in ", _jsx(_components.code, {
          children: "UserContext"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "ios",
      children: "iOS"
    }), `
`, _jsx(_components.h3, {
      id: "migrate-from-v115-to-v210-1",
      children: "Migrate from v1.1.5 to v2.1.0"
    }), `
`, _jsx(_components.p, {
      children: "In v2.1.0, Agora fully optimizes the internal architecture of the Agora Classroom SDK and refactors the Agora Edu Context APIs."
    }), `
`, _jsx(_components.p, {
      children: "This section lists the major changes of the Edu Context API between v2.1.0 and v1.1.5."
    }), `
`, _jsx(_components.h4, {
      id: "chat-context-1",
      children: "Chat context"
    }), `
`, _jsxs(_components.p, {
      children: ["Remove ", _jsx(_components.code, {
        children: "AgoraEduMessageContext"
      }), " and ", _jsx(_components.code, {
        children: "AgoraEduMessageHandler"
      }), ". Use ", _jsx(_components.code, {
        children: "AgoraRtmIMWidget"
      }), " in the ", _jsx(_components.code, {
        children: "AgoraWidgets"
      }), " library instead."]
    }), `
`, _jsx(_components.h4, {
      id: "whiteboard-context-1",
      children: "Whiteboard context"
    }), `
`, _jsxs(_components.p, {
      children: ["Remove ", _jsx(_components.code, {
        children: "AgoraEduWhiteBoardContext"
      }), ", ", _jsx(_components.code, {
        children: "AgoraEduWhiteBoardHandler"
      }), ", ", _jsx(_components.code, {
        children: "AgoraEduWhiteBoardToolContext"
      }), ", ", _jsx(_components.code, {
        children: "AgoraEduWhiteBoardPageControlContext"
      }), ", and ", _jsx(_components.code, {
        children: "AgoraEduWhiteBoardPageControlHandler"
      }), ". Use ", _jsx(_components.code, {
        children: "AgoraWhiteBoardWidget"
      }), " in the ", _jsx(_components.code, {
        children: "AgoraWidgets"
      }), " library instead."]
    }), `
`, _jsx(_components.h4, {
      id: "device-context-1",
      children: "Device context"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "AgoraEduDeviceContext"
        }), " and ", _jsx(_components.code, {
          children: "AgoraEduDeviceHandler"
        }), ". Use methods and callbacks in ", _jsx(_components.code, {
          children: "AgoraEduMediaContext"
        }), " and ", _jsx(_components.code, {
          children: "AgoraEduMediaHandler"
        }), " instead, as follows:"]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "setCameraDeviceEnable"
        }), ", ", _jsx(_components.code, {
          children: "setMicDeviceEnable"
        }), ", and ", _jsx(_components.code, {
          children: "setSpeakerDeviceEnable"
        }), ". Use ", _jsx(_components.code, {
          children: "openLocalDevice"
        }), " and ", _jsx(_components.code, {
          children: "closeLocalDevice"
        }), " in ", _jsx(_components.code, {
          children: "AgoraEduMediaContext"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "switchCameraFacing"
        }), ". Use ", _jsx(_components.code, {
          children: "openLocalDevice"
        }), " in ", _jsx(_components.code, {
          children: "AgoraEduMediaContext"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onCameraDeviceEnableChanged"
        }), ", ", _jsx(_components.code, {
          children: "onCameraDeviceFacingChanged"
        }), ", ", _jsx(_components.code, {
          children: "onMicDeviceEnableChanged"
        }), ", and ", _jsx(_components.code, {
          children: "onSpeakerDeviceEnableChanged"
        }), ". Use ", _jsx(_components.code, {
          children: "onLocalDeviceStateUpdated"
        }), " in ", _jsx(_components.code, {
          children: "AgoraEduMediaHandler"
        }), " instead."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "hands-up-context-1",
      children: "Hands-up context"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "AgoraEduHandsUpContext"
        }), " and ", _jsx(_components.code, {
          children: "AgoraEduHandsUpHandler"
        }), ". Use methods and callbacks in ", _jsx(_components.code, {
          children: "AgoraEduUserContext"
        }), " and ", _jsx(_components.code, {
          children: "AgoraEduUserHandler"
        }), " instead, as follows:"]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "updateHandsUpState"
        }), ". Use ", _jsx(_components.code, {
          children: "handsWave"
        }), " and ", _jsx(_components.code, {
          children: "handsDown"
        }), " in ", _jsx(_components.code, {
          children: "AgoraEduUserContext"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onHandsUpState"
        }), ". Use ", _jsx(_components.code, {
          children: "onUserHandsWave"
        }), " and ", _jsx(_components.code, {
          children: "onUserHandsDown"
        }), " in ", _jsx(_components.code, {
          children: "AgoraEduUserHandler"
        }), " instead."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "media-context",
      children: "Media context"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "openCamera"
        }), " as ", _jsx(_components.code, {
          children: "openLocalDevice"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "closeCamera"
        }), " as ", _jsx(_components.code, {
          children: "closeLocalDevice"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "startPreview"
        }), " as ", _jsx(_components.code, {
          children: "startRenderVideo"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "stopPreview"
        }), " as ", _jsx(_components.code, {
          children: "stopRenderVideo"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "openMicrophone"
        }), " as ", _jsx(_components.code, {
          children: "openLocalDevice"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "closeMicrophone"
        }), " as ", _jsx(_components.code, {
          children: "closeLocalDevice"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "renderRemoteView"
        }), " as ", _jsx(_components.code, {
          children: "startRenderVideo"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "publishStream"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "unpublishStream"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "room-context-1",
      children: "Room context"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "joinClassroom"
        }), " as ", _jsx(_components.code, {
          children: "joinRoom"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "updateFlexRoomProperties"
        }), " as ", _jsx(_components.code, {
          children: "updateRoomProperties"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "uploadLog"
        }), " and ", _jsx(_components.code, {
          children: "onUploadLogSuccess"
        }), ". Use ", _jsx(_components.code, {
          children: "uploadLog"
        }), " in ", _jsx(_components.code, {
          children: "AgoraEduMonitorContext"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "registerEventHandler"
        }), " as ", _jsx(_components.code, {
          children: "registerRoomEventHandler"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onShowErrorInfo"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "onClassroomJoined"
        }), " as ", _jsx(_components.code, {
          children: "onRoomJoinedSuccess"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "onFlexRoomPropertiesInitialize"
        }), " as ", _jsx(_components.code, {
          children: "RoomContext.getRoomProperties"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onFlexRoomPropertiesChanged"
        }), ". Use ", _jsx(_components.code, {
          children: "onRoomPropertiesUpdated"
        }), " and ", _jsx(_components.code, {
          children: "onRoomPropertiesDeleted"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onClassroomName"
        }), ". Use ", _jsx(_components.code, {
          children: "getRoomInfo"
        }), " in ", _jsx(_components.code, {
          children: "AgoraEduRoomContext"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onClassroomState"
        }), ". Use ", _jsx(_components.code, {
          children: "onClassStateUpdated"
        }), " and ", _jsx(_components.code, {
          children: "onRoomClosed"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onClassTimeInfo"
        }), ". Use ", _jsx(_components.code, {
          children: "getRoomInfo"
        }), " in ", _jsx(_components.code, {
          children: "AgoraEduRoomContext"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onNetworkQuality"
        }), ". Use ", _jsx(_components.code, {
          children: "onLocalNetworkQualityUpdated"
        }), " in ", _jsx(_components.code, {
          children: "AgoraEduMonitorHandler"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onConnectionState"
        }), ". Use ", _jsx(_components.code, {
          children: "onLocalConnectionUpdated"
        }), " in ", _jsx(_components.code, {
          children: "AgoraEduMonitorHandler"
        }), " instead."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "screen-sharing-context-1",
      children: "Screen-sharing context"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "AgoraEduScreenShareContext"
        }), " and ", _jsx(_components.code, {
          children: "AgoraEduScreenShareHandler"
        }), ". Use ", _jsx(_components.code, {
          children: "AgoraEduStreamContext"
        }), " instead. When ", _jsx(_components.code, {
          children: "videoSourceType"
        }), " in ", _jsx(_components.code, {
          children: "AgoraEduContextStreamInfo"
        }), " is ", _jsx(_components.code, {
          children: "screen"
        }), ", you can regard this stream as a screen-sharing video stream."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "AgoraEduScreenShareHandler"
        }), ". Use ", _jsx(_components.code, {
          children: "AgoraEduStreamContext"
        }), " instead. Remove ", _jsx(_components.code, {
          children: "onUpdateScreenShareState"
        }), ". Use ", _jsx(_components.code, {
          children: "onStreamJoined"
        }), ", ", _jsx(_components.code, {
          children: "onStreamLeft"
        }), ", and ", _jsx(_components.code, {
          children: "onStreamUpdate"
        }), " in ", _jsx(_components.code, {
          children: "AgoraEduStreamHandler"
        }), " instead."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "user-context-1",
      children: "User context"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "updateFlexUserProperties"
        }), " as ", _jsx(_components.code, {
          children: "updateUserProperties"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "registerEventHandler"
        }), " as ", _jsx(_components.code, {
          children: "registerUserEventHandler"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onUpdateUserList"
        }), ". Use ", _jsx(_components.code, {
          children: "onRemoteUserJoined"
        }), ", ", _jsx(_components.code, {
          children: "onRemoteUserLeft"
        }), ", and ", _jsx(_components.code, {
          children: "onUserUpdated"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onUpdateCoHostList"
        }), ". Use ", _jsx(_components.code, {
          children: "onCoHostUserListAdded"
        }), " and ", _jsx(_components.code, {
          children: "onCoHostUserListRemoved"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "onKickOut"
        }), " as ", _jsx(_components.code, {
          children: "onLocalUserKickOut"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onUpdateAudioVolumeIndication"
        }), ". Use ", _jsx(_components.code, {
          children: "onVolumeUpdated"
        }), " in ", _jsx(_components.code, {
          children: "AgoraEduMediaHandler"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rename ", _jsx(_components.code, {
          children: "onShowUserReward"
        }), " as ", _jsx(_components.code, {
          children: "onUserRewarded"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onFlexUserPropertiesChanged"
        }), ". Use ", _jsx(_components.code, {
          children: "onUserPropertiesUpdated"
        }), " and ", _jsx(_components.code, {
          children: "onUserPropertiesDeleted"
        }), " instead."]
      }), `
`, _jsxs(_components.li, {
        children: ["Remove ", _jsx(_components.code, {
          children: "onStreamUpdated"
        }), ". Use ", _jsx(_components.code, {
          children: "onStreamUpdated"
        }), " in ", _jsx(_components.code, {
          children: "AgoraEduStreamHandler"
        }), " instead."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "migrate-to-115",
      children: "Migrate to 1.1.5"
    }), `
`, _jsx(_components.p, {
      children: "If you changed the UI of Flexible Classroom in versions earlier than v1.1.5, follow these steps to migrate to v1.1.5:"
    }), `
`, _jsx(_components.h4, {
      id: "step-1-re-integrate-flexible-classroom",
      children: "Step 1: Re-integrate Flexible Classroom"
    }), `
`, _jsx(_components.p, {
      children: "Follow the steps in Integrate Flexible Classroom into Your App to re-integrate Flexible Classroom v1.1.5."
    }), `
`, _jsxs(_components.h4, {
      id: "step-2-replace-the-files-in-the-sdksagoraeduui-directory",
      children: ["Step 2: Replace the files in the ", _jsx(_components.code, {
        children: "SDKs/AgoraEduUI"
      }), " directory"]
    }), `
`, _jsxs(_components.p, {
      children: ["Replace the files in the ", _jsx(_components.code, {
        children: "SDKs/AgoraEduUI"
      }), " directory with the files in your project's ", _jsx(_components.code, {
        children: "AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppView"
      }), " directory, as follows:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/AgoraEduUI/AgoraEduUI/AgoraResources"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/AgoraResources"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/AgoraEduUI/AgoraEduUI/Render"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/Render"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/AgoraEduUI/AgoraEduUI/UIController"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/UIController"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/AgoraEduUI/AgoraEduUI/WhiteBoard"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/WhiteBoard"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/AgoraEduUI/AgoraEduUI/AgoraEduUI.xcassets"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/AgoraUIEduAppViews.xcassets"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/AgoraEduUI/AgoraEduUI/UIManager"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/UIManager"
        }), ", rename ", _jsx(_components.code, {
          children: "AgoraUIManager.swift"
        }), " to ", _jsx(_components.code, {
          children: "AgoraEduUI.swift"
        }), ", and rename ", _jsx(_components.code, {
          children: "AgoraUIManager"
        }), " class to ", _jsx(_components.code, {
          children: "AgoraEduUI"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "Widgets/AgoraWidgets/Chat"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgoraUIEduAppViews/AgoraUIEduAppViews/Widget"
        }), "."]
      }), `
`]
    }), `
`, _jsxs(_components.h4, {
      id: "step-3-edit-the-agoraeduuiswift-file",
      children: ["Step 3: Edit the ", _jsx(_components.code, {
        children: "AgoraEduUI.swift"
      }), " file"]
    }), `
`, _jsxs(_components.p, {
      children: ["In ", _jsx(_components.code, {
        children: "AgoraEduUI.swift"
      }), ", make the following changes:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Rename ", _jsx(_components.code, {
            children: "AgoraEduContextAppType"
          }), " to ", _jsx(_components.code, {
            children: "AgoraEduContextRoomType"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Change ", _jsx(_components.code, {
            children: "var chat: AgoraEduWidget"
          }), " to ", _jsx(_components.code, {
            children: "var chat: AgoraBaseWidget"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Add the following code to add the ", _jsx(_components.code, {
            children: "initWidgets"
          }), " method:"]
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
                  children: " initWidgets"
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
                  children: " widgetInfos "
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
                  children: " contextPool.widget."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "getWidgetInfos"
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
                  children: "else"
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
                  children: "            return"
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
                  children: " info "
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
                  children: " widgetInfos {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            switch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " info.widgetId {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "AgoraChatWidget"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                info.properties "
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"contextPool"'
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
                  children: " contextPool]"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "                let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " chat "
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
                  children: " contextPool.widget."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "create"
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
                  children: ": info)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                chat."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "addMessageObserver"
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "                let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " hasConversation "
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
                  children: " (viewType "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "=="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .oneToOne "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "?"
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
                  children: " 1"
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
                  children: "                if"
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
                  children: " message "
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"hasConversation"'
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
                  children: " hasConversation]."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "jsonString"
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
                  children: "                    chat."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "widgetDidReceiveMessage"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(message)"
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "                self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".chat "
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
                  children: " chat"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            default:"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "                break"
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
                  children: "}"
                })
              })]
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.h4, {
      id: "step-4-replace-the-files-in-the-sdksmodulesagrauiedubaseviews-directory",
      children: ["Step 4: Replace the files in the ", _jsx(_components.code, {
        children: "SDKs/Modules/AgraUIEduBaseViews"
      }), " directory"]
    }), `
`, _jsxs(_components.p, {
      children: ["Replace the files in the ", _jsx(_components.code, {
        children: "SDKs/Modules/AgraUIEduBaseViews"
      }), " directory with the files in your project's ", _jsx(_components.code, {
        children: "AgoraEduSDK/Modules/AgraUIEduBaseViews"
      }), " directory, as follows:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/Modules/AgraUIEduBaseViews/AgoraResources"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraResources"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/Modules/AgraUIEduBaseViews/AgoraAlertView"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraAlertView"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/Modules/AgraUIEduBaseViews/AgoraAnimatedImage"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraAnimatedImage"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/Modules/AgraUIEduBaseViews/AgoraHandsUpView"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraHandsUpView"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/Modules/AgraUIEduBaseViews/AgoraRefresh"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraRefresh"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/Modules/AgraUIEduBaseViews/AgoraToastView"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraToastView"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/Modules/AgraUIEduBaseViews/AgoraUIEduBaseViews.xcassets"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUIEduBaseViews.xcassets"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/Modules/AgraUIEduBaseViews/AgoraUINavigationBar"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUINavigationBar"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/Modules/AgraUIEduBaseViews/AgoraUIUserView"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUIUserView"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/Modules/AgraUIEduBaseViews/AgoraUserListView"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUserListView"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/Modules/AgraUIEduBaseViews/AgoraUserRenderListView"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUserRenderListView"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "SDKs/Modules/AgraUIEduBaseViews/Utils"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgraUIEduBaseViews/Utils"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "Widgets/AgoraWidgets/Chat"
        }), " with ", _jsx(_components.code, {
          children: "AgoraEduSDK/Modules/AgraUIEduBaseViews/AgoraUIChatView"
        }), "."]
      }), `
`]
    }), `
`, _jsxs(_components.h4, {
      id: "step-5-edit-the-agorachatwidgetswift-file",
      children: ["Step 5: Edit the ", _jsx(_components.code, {
        children: "AgoraChatWidget.swift"
      }), " file"]
    }), `
`, _jsxs(_components.p, {
      children: ["In ", _jsx(_components.code, {
        children: "AgoraChatWidget.swift"
      }), ", make the following changes:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Replace the initialization method with the following code:"
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
                  children: "public"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " required"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " init"
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
                  children: "widgetId"
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
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "                     contextPool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": AgoraEduContextPool,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "                     properties"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "AnyHashable"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " : "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "Any"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
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
                  children: "    super"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "init"
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
                  children: "widgetId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": widgetId,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "               contextPool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": contextPool,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "               properties"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": properties)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    initViews"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    initLayout"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    initData"
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
          children: ["To add the ", _jsx(_components.code, {
            children: "AgoraEduMessageContext"
          }), " property, add the following code:"]
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
                  children: "private"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " weak"
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
                  children: " context: AgoraEduMessageContext"
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
                  children: "public"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " required"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " override"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " init"
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
                  children: "widgetId"
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
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "                              properties"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "AnyHashable"
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
                  children: "Any"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
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
                  children: "    super"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "init"
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
                  children: "widgetId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": widgetId,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "               properties"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": properties)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    initViews"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    initLayout"
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
                  children: "    if"
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
                  children: " contextPool "
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
                  children: " properties"
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
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"contextPool"'
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
                  children: "as?"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraEduContextPool {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        context "
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
                  children: " contextPool.chat"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "        initData"
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
    }), `
`, _jsx(_components.h2, {
      id: "web",
      children: "Web"
    }), `
`, _jsx(_components.p, {
      children: "You do not need to migrate your code for this platform."
    }), `
`, _jsx(_components.h2, {
      id: "electron",
      children: "Electron"
    }), `
`, _jsx(_components.p, {
      children: "You do not need to migrate your code for this platform."
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
