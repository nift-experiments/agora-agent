import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Connection status management",
  description: "Test network quality and adjust audio and video settings to optimize channel quality"
};
export let _markdown = `

**Supported platforms:** Web, Android, iOS, macOS, Windows, Unreal Engine, Electron, Flutter, React Native, Unity, and Unreal Blueprint.

In real-time audio and video implementations, the connection state between the app and Agora SDRTN® changes as the client joins or leaves the channel. The connection may also be interrupted due to network or authentication issues.

This page describes the various channel connection states, reasons for state changes, and how to handle these changes to better manage your users and troubleshoot network faults.

## Understand the tech [#understand-the-tech]

The following figure shows the various connection states and how the connection state changes between a user joining and leaving a channel:

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;web&#x22;]" showTabs="false">
  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ![Connection State](https://assets-docs.agora.io/images/video-sdk/connection-state-main-web.svg)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

##### Disconnection and reconnection [#disconnection-and-reconnection]

During the communication process, if the user is disconnected due to network problems, the SDK automatically enables the disconnection and reconnection mechanism. The following figure shows the callbacks received by the local user \`UID1\` and the remote user \`UID2\` when:

* A local user joins the channel
* A network exception occurs
* The connection is interrupted
* The user rejoins the channel

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;windows&#x22;,&#x22;unreal&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    ![Disconnection Connection](https://assets-docs.agora.io/images/video-sdk/connection-state-native.svg)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    ![Disconnection Connection](https://assets-docs.agora.io/images/video-sdk/connection-state-native.svg)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="macos" />

    ![Disconnection Connection](https://assets-docs.agora.io/images/video-sdk/connection-state-native.svg)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="windows" />

    ![Disconnection Connection](https://assets-docs.agora.io/images/video-sdk/connection-state-native.svg)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="unreal" />

    ![Disconnection Connection](https://assets-docs.agora.io/images/video-sdk/connection-state-native.svg)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="electron" />

    ![Disconnection Connection](https://assets-docs.agora.io/images/video-sdk/connection-state-flutter-rn-electron.svg)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="flutter" />

    ![Disconnection Connection](https://assets-docs.agora.io/images/video-sdk/connection-state-flutter-rn-electron.svg)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="react-native" />

    ![Disconnection Connection](https://assets-docs.agora.io/images/video-sdk/connection-state-flutter-rn-electron.svg)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

The following platform-specific timelines explain the reconnection sequence in detail.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;,&#x22;blueprint&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    In the diagram:

    * **T0**: The RTC SDK receives a \`joinChannel\` request from \`UID1\`.

    * **T1**: After 200 ms of calling \`joinChannel\`, \`UID1\` joins the channel. At the same time, \`UID1\` receives \`onConnectionStateChanged(CONNECTING, CONNECTING)\` callback. After successfully joining the channel, \`UID1\` receives \`onConnectionStateChanged(CONNECTED, JOIN_SUCCESS)\` and \`onJoinChannelSuccess\` callbacks.

    * **T2**: Due to the transmission delay between networks, \`UID2\` observes a delay of about 100 milliseconds for \`UID1\` to join the channel, and at this point \`UID2\` receives a \`onUserJoined\` callback.

    * **T3**: When \`UID1\` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel.

    * **T4**: If \`UID1\` does not receive any data from the server for 4 consecutive seconds, \`UID1\` receives the \`onConnectionStateChanged(RECONNECTING, INTERRUPTED)\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T5**: If \`UID1\` does not receive any data from the server for 10 consecutive seconds after receiving \`onConnectionStateChanged(RECONNECTING, INTERRUPTED)\`, \`UID1\` receives the \`onConnectionLost\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T6**: If \`UID2\` does not receive any data from \`UID1\` for 20 consecutive seconds, the RTC SDK determines that \`UID1\` is offline. So \`UID2\` receives the \`onUserOffline\` callback.

    * **T7**: If \`UID1\` fails to rejoin the channel for 20 consecutive minutes after receiving \`onConnectionStateChanged(RECONNECTING, INTERRUPTED)\`, the SDK stops retrying. \`UID1\` receives the \`onConnectionStateChanged(FAILED, JOIN_FAILED)\` callback and the user must exit and then rejoin the channel.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    In the diagram:

    * **T0**: The RTC SDK receives a \`joinChannel\` request from \`UID1\`.

    * **T1**: After 200 ms of calling \`joinChannel\`, \`UID1\` joins the channel. At the same time, \`UID1\` receives \`onConnectionStateChanged(connectionStateConnecting, connectionChangedConnecting)\` callback. After successfully joining the channel, \`UID1\` receives \`onConnectionStateChanged(connectionStateConnected, connectionChangedJoinSuccess)\` and \`onJoinChannelSuccess\` callbacks.

    * **T2**: Due to the transmission delay between networks, \`UID2\` observes a delay of about 100 milliseconds for \`UID1\` to join the channel, and at this point \`UID2\` receives a \`onUserJoined\` callback.

    * **T3**: When \`UID1\` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel.

    * **T4**: If \`UID1\` does not receive any data from the server for 4 consecutive seconds, \`UID1\` receives the \`onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T5**: If \`UID1\` does not receive any data from the server for 10 consecutive seconds after receiving \`onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)\`, \`UID1\` receives the \`onConnectionLost\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T6**: If \`UID2\` does not receive any data from \`UID1\` for 20 consecutive seconds, the RTC SDK determines that \`UID1\` is offline. So \`UID2\` receives the \`onUserOffline\` callback.

    * **T7**: If \`UID1\` fails to rejoin the channel for 20 consecutive minutes after receiving \`onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)\`, the SDK stops retrying. \`UID1\` receives the \`onConnectionStateChanged(connectionStateFailed, connectionChangedJoinFailed)\` callback and the user must exit and then rejoin the channel.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    In the diagram:

    * **T0**: The RTC SDK receives a \`joinChannel\` request from \`UID1\`.

    * **T1**: After 200 ms of calling \`joinChannel\`, \`UID1\` joins the channel. At the same time, \`UID1\` receives \`onConnectionStateChanged(connectionStateConnecting, connectionChangedConnecting)\` callback. After successfully joining the channel, \`UID1\` receives \`onConnectionStateChanged(connectionStateConnected, connectionChangedJoinSuccess)\` and \`onJoinChannelSuccess\` callbacks.

    * **T2**: Due to the transmission delay between networks, \`UID2\` observes a delay of about 100 milliseconds for \`UID1\` to join the channel, and at this point \`UID2\` receives a \`onUserJoined\` callback.

    * **T3**: When \`UID1\` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel.

    * **T4**: If \`UID1\` does not receive any data from the server for 4 consecutive seconds, \`UID1\` receives the \`onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T5**: If \`UID1\` does not receive any data from the server for 10 consecutive seconds after receiving \`onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)\`, \`UID1\` receives the \`onConnectionLost\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T6**: If \`UID2\` does not receive any data from \`UID1\` for 20 consecutive seconds, the RTC SDK determines that \`UID1\` is offline. So \`UID2\` receives the \`onUserOffline\` callback.

    * **T7**: If \`UID1\` fails to rejoin the channel for 20 consecutive minutes after receiving \`onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)\`, the SDK stops retrying. \`UID1\` receives the \`onConnectionStateChanged(connectionStateFailed, connectionChangedJoinFailed)\` callback and the user must exit and then rejoin the channel.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    In the diagram:

    * **T0**: The RTC SDK receives a \`joinChannelByToken\` request from \`UID1\`.

    * **T1**: After 200 ms of calling \`joinChannelByToken\`, \`UID1\` joins the channel. At the same time, \`UID1\` receives \`connectionChangedToState(Connecting, Connecting)\` callback. After successfully joining the channel, \`UID1\` receives \`connectionChangedToState(Connected, JoinSuccess)\` and \`didJoinChannel\` callbacks.

    * **T2**: Due to the transmission delay between networks, \`UID2\` observes a delay of about 100 milliseconds for \`UID1\` to join the channel, and at this point \`UID2\` receives a \`didJoinedOfUid\` callback.

    * **T3**: When \`UID1\` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel.

    * **T4**: If \`UID1\` does not receive any data from the server for 4 consecutive seconds, \`UID1\` receives the \`connectionChangedToState(Reconnecting, Interrupted)\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T5**: If \`UID1\` does not receive any data from the server for 10 consecutive seconds after receiving \`connectionChangedToState(Reconnecting, Interrupted)\`, \`UID1\` receives the \`rtcEngineConnectionDidLost\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T6**: If \`UID2\` does not receive any data from \`UID1\` for 20 consecutive seconds, the RTC SDK determines that \`UID1\` is offline. So \`UID2\` receives the \`didOfflineOfUid\` callback.

    * **T7**: If \`UID1\` fails to rejoin the channel for 20 consecutive minutes after receiving \`connectionChangedToState(Reconnecting, Interrupted)\`, the SDK stops retrying. \`UID1\` receives the \`connectionChangedToState(Failed, JoinFailed)\` callback and the user must exit and then rejoin the channel.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    In the diagram:

    * **T0**: The RTC SDK receives a \`joinChannelByToken\` request from \`UID1\`.

    * **T1**: After 200 ms of calling \`joinChannelByToken\`, \`UID1\` joins the channel. At the same time, \`UID1\` receives \`connectionChangedToState(Connecting, Connecting)\` callback. After successfully joining the channel, \`UID1\` receives \`connectionChangedToState(Connected, JoinSuccess)\` and \`didJoinChannel\` callbacks.

    * **T2**: Due to the transmission delay between networks, \`UID2\` observes a delay of about 100 milliseconds for \`UID1\` to join the channel, and at this point \`UID2\` receives a \`didJoinedOfUid\` callback.

    * **T3**: When \`UID1\` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel.

    * **T4**: If \`UID1\` does not receive any data from the server for 4 consecutive seconds, \`UID1\` receives the \`connectionChangedToState(Reconnecting, Interrupted)\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T5**: If \`UID1\` does not receive any data from the server for 10 consecutive seconds after receiving \`connectionChangedToState(Reconnecting, Interrupted)\`, \`UID1\` receives the \`rtcEngineConnectionDidLost\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T6**: If \`UID2\` does not receive any data from \`UID1\` for 20 consecutive seconds, the RTC SDK determines that \`UID1\` is offline. So \`UID2\` receives the \`didOfflineOfUid\` callback.

    * **T7**: If \`UID1\` fails to rejoin the channel for 20 consecutive minutes after receiving \`connectionChangedToState(Reconnecting, Interrupted)\`, the SDK stops retrying. \`UID1\` receives the \`connectionChangedToState(Failed, JoinFailed)\` callback and the user must exit and then rejoin the channel.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    In the diagram:

    * **T0**: The RTC SDK receives a \`joinChannel\` request from \`UID1\`.

    * **T1**: After 200 ms of calling \`joinChannel\`, \`UID1\` joins the channel. At the same time, \`UID1\` receives \`onConnectionStateChanged(connectionStateConnecting, connectionChangedConnecting)\` callback. After successfully joining the channel, \`UID1\` receives \`onConnectionStateChanged(connectionStateConnected, connectionChangedJoinSuccess)\` and \`onJoinChannelSuccess\` callbacks.

    * **T2**: Due to the transmission delay between networks, \`UID2\` observes a delay of about 100 milliseconds for \`UID1\` to join the channel, and at this point \`UID2\` receives a \`onUserJoined\` callback.

    * **T3**: When \`UID1\` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel.

    * **T4**: If \`UID1\` does not receive any data from the server for 4 consecutive seconds, \`UID1\` receives the \`onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T5**: If \`UID1\` does not receive any data from the server for 10 consecutive seconds after receiving \`onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)\`, \`UID1\` receives the \`onConnectionLost\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T6**: If \`UID2\` does not receive any data from \`UID1\` for 20 consecutive seconds, the RTC SDK determines that \`UID1\` is offline. So \`UID2\` receives the \`onUserOffline\` callback.

    * **T7**: If \`UID1\` fails to rejoin the channel for 20 consecutive minutes after receiving \`onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)\`, the SDK stops retrying. \`UID1\` receives the \`onConnectionStateChanged(connectionStateFailed, connectionChangedJoinFailed)\` callback and the user must exit and then rejoin the channel.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    ![Disconnection Connection](https://assets-docs.agora.io/images/video-sdk/connection-state-unity.svg)

    In the diagram:

    * **T0**: The RTC SDK receives a \`JoinChannel\` request from \`UID1\`.

    * **T1**: After 200 ms of calling \`JoinChannel\`, \`UID1\` joins the channel. At the same time, \`UID1\` receives \`OnConnectionStateChanged(CONNECTION_STATE_CONNECTING, CONNECTION_CHANGED_CONNECTING)\` callback. After successfully joining the channel, \`UID1\` receives \`OnConnectionStateChanged(CONNECTION_STATE_CONNECTING, CONNECTION_CHANGED_JOIN_SUCCESS)\` and \`OnJoinChannelSuccess\` callbacks.

    * **T2**: Due to the transmission delay between networks, \`UID2\` observes a delay of about 100 milliseconds for \`UID1\` to join the channel, and at this point \`UID2\` receives a \`OnUserJoined\` callback.

    * **T3**: When \`UID1\` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel.

    * **T4**: If \`UID1\` does not receive any data from the server for 4 consecutive seconds, \`UID1\` receives the \`OnConnectionStateChanged(CONNECTION_STATE_RECONNECTING, CONNECTION_CHANGED_INTERRUPTED)\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T5**: If \`UID1\` does not receive any data from the server for 10 consecutive seconds after receiving \`OnConnectionStateChanged(CONNECTION_STATE_RECONNECTING, CONNECTION_CHANGED_INTERRUPTED)\`, \`UID1\` receives the \`OnConnectionLost\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T6**: If \`UID2\` does not receive any data from \`UID1\` for 20 consecutive seconds, the RTC SDK determines that \`UID1\` is offline. So \`UID2\` receives the \`onUserOffline\` callback.

    * **T7**: If \`UID1\` fails to rejoin the channel for 20 consecutive minutes after receiving \`OnConnectionStateChanged(CONNECTION_STATE_RECONNECTING, CONNECTION_CHANGED_INTERRUPTED)\`, the SDK stops retrying. \`UID1\` receives the \`OnConnectionStateChanged(CONNECTION_STATE_FAILED, CONNECTION_CHANGED_JOIN_FAILED)\` callback and the user must exit and then rejoin the channel.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    In the diagram:

    * **T0**: The RTC SDK receives a \`joinChannel\` request from \`UID1\`.

    * **T1**: After 200 ms of calling \`joinChannel\`, \`UID1\` joins the channel. At the same time, \`UID1\` receives \`onConnectionStateChanged(CONNECTING, CONNECTING)\` callback. After successfully joining the channel, \`UID1\` receives \`onConnectionStateChanged(CONNECTED, JOIN_SUCCESS)\` and \`onJoinChannelSuccess\` callbacks.

    * **T2**: Due to the transmission delay between networks, \`UID2\` observes a delay of about 100 milliseconds for \`UID1\` to join the channel, and at this point \`UID2\` receives a \`onUserJoined\` callback.

    * **T3**: When \`UID1\` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel.

    * **T4**: If \`UID1\` does not receive any data from the server for 4 consecutive seconds, \`UID1\` receives the \`onConnectionStateChanged(RECONNCTING, INTERRUPTED)\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T5**: If \`UID1\` does not receive any data from the server for 10 consecutive seconds after receiving \`onConnectionStateChanged(RECONNCTING, INTERRUPTED)\`, \`UID1\` receives the \`onConnectionLost\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T6**: If \`UID2\` does not receive any data from \`UID1\` for 20 consecutive seconds, the RTC SDK determines that \`UID1\` is offline. So \`UID2\` receives the \`onUserOffline\` callback.

    * **T7**: If \`UID1\` fails to rejoin the channel for 20 consecutive minutes after receiving \`onConnectionStateChanged(RECONNCTING, INTERRUPTED)\`, the SDK stops retrying. \`UID1\` receives the \`onConnectionStateChanged(FAILED, JOIN_FAILED)\` callback and the user must exit and then rejoin the channel.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ![Disconnection Connection](https://assets-docs.agora.io/images/video-sdk/connection-state-web.svg)

    In the diagram:

    * **T0**: The RTC SDK receives a \`Client.join\` request from \`UID1\`.

    * **T1**: \`UID1\` successfully joins the channel. \`UID1\` receives \`AgoraRTCClient.on("connection-state-change")\` callback reporting "CONNECTING" during joining channel and "CONNECTED" after joining.

    * **T2**: Due to the transmission delay between networks, \`UID2\` observes a delay of about 100 milliseconds for \`UID1\` to join the channel, and at this point \`UID2\` receives a \`AgoraRTCClient.on("user-joined")\` callback.

    * **T3**: At some point \`UID 1\` calls \`AgoraRTCClient.publish\` to publish the local track.

    * **T4**: \`UID 2\` receives the \`AgoraRTCClient.on("user-published")\` callback indicating that \`UID 1\` has published the track. \`UID 2\` can subscribe to \`UID 1\`'s track by calling \`AgoraRTCClient.subscribe\` method.

    * **T5**: If the \`UID 1\` network is interrupted during the communication process, the SDK automatically opens the disconnection and reconnection mechanism.

    * **T6**: The SDK triggers \`AgoraRTCClient.on("connection-state-change")\` callback to report "RECONNECTING" during automatic reconnection.

    * **T7**: If the Agora server does not receive the audio/video packet from \`UID 1\` for 10 consecutive seconds, the server determines that \`UID 1\` no longer publishes audio/video, and \`UID 2\` will receive \`AgoraRTCClient.on("user-unpublished")\` callback.

    * **T8**: If the Agora server does not receive a heartbeat packet from \`UID 1\` for 20 consecutive seconds, the server determines that \`UID 1\` is offline, and \`UID 2\` will receive the \`AgoraRTCClient.on("user-left")\` callback.

    * **T9**: After successfully re-establishing the connection, \`UID 1\` receives the \`AgoraRTCClient.on("connection-state-change")\` callback reporting as "CONNECTED".

    * **T10**: \`UID 2\` receives the \`AgoraRTCClient.on("user-joined")\` callback again.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    In the diagram:

    * **T0**: The RTC SDK receives a \`joinChannel\` request from \`UID1\`.

    * **T1**: After 200 ms of calling \`joinChannel\`, \`UID1\` joins the channel. At the same time, \`UID1\` receives \`onConnectionStateChanged(CONNECTING, CONNECTING)\` callback. After successfully joining the channel, \`UID1\` receives \`onConnectionStateChanged(CONNECTED, JOIN_SUCCESS)\` and \`onJoinChannelSuccess\` callbacks.

    * **T2**: Due to the transmission delay between networks, \`UID2\` observes a delay of about 100 milliseconds for \`UID1\` to join the channel, and at this point \`UID2\` receives a \`onUserJoined\` callback.

    * **T3**: When \`UID1\` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel.

    * **T4**: If \`UID1\` does not receive any data from the server for 4 consecutive seconds, \`UID1\` receives the \`onConnectionStateChanged(RECONNCTING, INTERRUPTED)\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T5**: If \`UID1\` does not receive any data from the server for 10 consecutive seconds after receiving \`onConnectionStateChanged(RECONNCTING, INTERRUPTED)\`, \`UID1\` receives the \`onConnectionLost\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T6**: If \`UID2\` does not receive any data from \`UID1\` for 20 consecutive seconds, the RTC SDK determines that \`UID1\` is offline. So \`UID2\` receives the \`onUserOffline\` callback.

    * **T7**: If \`UID1\` fails to rejoin the channel for 20 consecutive minutes after receiving \`onConnectionStateChanged(RECONNCTING, INTERRUPTED)\`, the SDK stops retrying. \`UID1\` receives the \`onConnectionStateChanged(FAILED, JOIN_FAILED)\` callback and the user must exit and then rejoin the channel.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="blueprint" />

    ![Disconnection Connection](https://assets-docs.agora.io/images/video-sdk/connection-state-blueprint.svg)

    In the diagram:

    * **T0**: The RTC SDK receives a \`JoinChannel\` request from \`UID1\`.

    * **T1**: After 200 ms of calling \`JoinChannel\`, \`UID1\` joins the channel. At the same time, \`UID1\` receives \`FOnConnectionStateChanged(CONNECTING, CONNECTING)\` callback. After successfully joining the channel, \`UID1\` receives \`FOnConnectionStateChanged(CONNECTED, JOIN_SUCCESS)\` and \`FOnJoinChannelSuccess\` callbacks.

    * **T2**: Due to the transmission delay between networks, \`UID2\` observes a delay of about 100 milliseconds for \`UID1\` to join the channel, and at this point \`UID2\` receives a \`FOnUserJoined\` callback.

    * **T3**: When \`UID1\` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel.

    * **T4**: If \`UID1\` does not receive any data from the server for 4 consecutive seconds, \`UID1\` receives the \`FOnConnectionStateChanged(RECONNCTING, INTERRUPTED)\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T5**: If \`UID1\` does not receive any data from the server for 10 consecutive seconds after receiving \`FOnConnectionStateChanged(RECONNCTING, INTERRUPTED)\`, \`UID1\` receives the \`FOnConnectionLost\` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel.

    * **T6**: If \`UID2\` does not receive any data from \`UID1\` for 20 consecutive seconds, the RTC SDK determines that \`UID1\` is offline. So \`UID2\` receives the \`FOnUserOffline\` callback.

    * **T7**: If \`UID1\` fails to rejoin the channel for 20 consecutive minutes after receiving \`FOnConnectionStateChanged(RECONNCTING, INTERRUPTED)\`, the SDK stops retrying. \`UID1\` receives the \`FOnConnectionStateChanged(FAILED, JOIN_FAILED)\` callback and the user must exit and then rejoin the channel.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

## Prerequisites [#prerequisites]

Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) project.

## Implement connection status management [#implement-connection-status-management]

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;windows&#x22;,&#x22;blueprint&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    When the connection state changes, RTC SDK sends an \`onConnectionStateChanged\` callback. This section shows you how to use the \`onConnectionStateChanged\` callback to monitor changes in the connection state.

    Use the following code in your \`IRtcEngineEventHandler\` to log the connection state changes and the reason for the state change.

    <Tabs defaultValue="java">
      <TabsList>
        <TabsTrigger value="java">
          Java
        </TabsTrigger>

        <TabsTrigger value="kotlin">
          Kotlin
        </TabsTrigger>
      </TabsList>

      <TabsContent value="java">
        \`\`\`java
        public void onConnectionStateChanged(int state, int reason) {
            super.onConnectionStateChanged(state, reason);
            Log.i(TAG, "onConnectionStateChanged->" + ", state->" + state
                + ", reason->" + reason);
        }
        \`\`\`
      </TabsContent>

      <TabsContent value="kotlin">
        \`\`\`kotlin
        override fun onConnectionStateChanged(state: Int, reason: Int) {
            super.onConnectionStateChanged(state, reason)
            Log.i(TAG, "onConnectionStateChanged->, state->$state, reason->$reason")
        }
        \`\`\`
      </TabsContent>
    </Tabs>

    The \`state\` parameter in \`onConnectionStateChanged\` reports the current connection state. The \`reason\` parameter indicates why the connection state changed to help you troubleshoot your network. See [State description and troubleshooting](#state-description-and-troubleshooting).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="electron" />

    When the connection status changes, RTC SDK triggers the \`onConnectionStateChanged\` callback. This section describes how to use the \`onConnectionStateChanged\` callback to monitor changes in a channel's connection state.

    In your project, open the file with the Agora Engine event handler, and add the \`onConnectionStateChanged\` callback to the \`IRtcEngineEventHandler\` instance initialization.

    The \`state\` parameter in \`onConnectionStateChanged\` reports the current connection state. The \`reason\` parameter indicates why the connection state changed to help you troubleshoot your network. See [State description and troubleshooting](#state-description-and-troubleshooting).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="flutter" />

    When the connection status changes, RTC SDK triggers the \`onConnectionStateChanged\` callback. This section describes how to use the \`onConnectionStateChanged\` callback to monitor changes in a channel's connection state.

    In your project, open the file with the Agora Engine event handler, and add the \`onConnectionStateChanged\` callback to the \`RtcEngineEventHandler\` instance initialization.

    The \`state\` parameter in \`onConnectionStateChanged\` reports the current connection state. The \`reason\` parameter indicates why the connection state changed to help you troubleshoot your network. See [State description and troubleshooting](#state-description-and-troubleshooting).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    When the connection status changes, RTC SDK sends a \`connectionChangedToState\` callback. This section describes how to use the \`connectionChangedToState\` callback to monitor changes in a channel's connection state.

    In your project, open the file with \`AgoraRtcEngineDelegate\` and copy the following code into the \`AgoraRtcEngineDelegate\` initialization process:

    \`\`\`swift
    func rtcEngine(_ engine: AgoraRtcEngineKit, connectionChangedTo state: AgoraConnectionState, reason: AgoraConnectionChangedReason) {
        LogUtils.log(message: "Connection state changed: \\(state) \\(reason)", level: .info)
    }
    \`\`\`

    The code logs the connection state changes and the reason for the state change.
    The \`reason\` parameter in \`connectionChangedToState\` explains why the connection state changed and helps you troubleshoot your network.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="macos" />

    When the connection status changes, RTC SDK sends a \`connectionChangedToState\` callback. This section describes how to use the \`connectionChangedToState\` callback to monitor changes in a channel's connection state.

    In your project, open the file with \`AgoraRtcEngineDelegate\` and copy the following code into the \`AgoraRtcEngineDelegate\` initialization process:

    \`\`\`swift
    func rtcEngine(_ engine: AgoraRtcEngineKit, connectionChangedTo state: AgoraConnectionState, reason: AgoraConnectionChangedReason) {
        LogUtils.log(message: "Connection state changed: \\(state) \\(reason)", level: .info)
    }
    \`\`\`

    The code logs the connection state changes and the reason for the state change.
    The \`reason\` parameter in \`connectionChangedToState\` explains why the connection state changed and helps you troubleshoot your network.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="react-native" />

    When the connection status changes, RTC SDK triggers the \`onConnectionStateChanged\` callback. This section describes how to use the \`onConnectionStateChanged\` callback to monitor changes in a channel's connection state.

    In your project, open the file with the Agora Engine event handler, and add the \`onConnectionStateChanged\` callback to the \`IRtcEngineEventHandler\` instance initialization.

    The \`state\` parameter in \`onConnectionStateChanged\` reports the current connection state. The \`reason\` parameter indicates why the connection state changed to help you troubleshoot your network. See [State description and troubleshooting](#state-description-and-troubleshooting).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="unity" />

    When the connection status changes, RTC SDK triggers the \`OnConnectionStateChanged\` callback. This section describes how to use the \`OnConnectionStateChanged\` callback to monitor changes in a channel's connection state.

    Use the following code in your \`IRtcEngineEventHandler\` to log the connection state changes and the reason for the state change.

    \`\`\`csharp
    internal class UserEventHandler : IRtcEngineEventHandler
    {
        ...
        // Callback for channel connection status change
        public override void OnConnectionStateChanged(RtcConnection connection, CONNECTION_STATE_TYPE state,
            CONNECTION_CHANGED_REASON_TYPE reason)
        {
            _helloVideoTokenAgora._state = state;
        }
    }
    \`\`\`

    The \`state\` parameter in \`OnConnectionStateChanged\` reports the current connection state. The \`reason\` parameter indicates why the connection state changed to help you troubleshoot your network. See [State description and troubleshooting](#state-description-and-troubleshooting).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="unreal" />

    When the connection status changes, RTC SDK triggers the \`onConnectionStateChanged\` callback. This section describes how to use the \`onConnectionStateChanged\` callback to monitor changes in a channel's connection state.

    In your project, open the file with the Agora Engine event handler, and add the \`onConnectionStateChanged\` callback to the \`IRtcEngineEventHandler\` instance initialization.

    The \`state\` parameter in \`onConnectionStateChanged\` reports the current connection state. The \`reason\` parameter indicates why the connection state changed to help you troubleshoot your network. See [State description and troubleshooting](#state-description-and-troubleshooting).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="windows" />

    When the connection status changes, RTC SDK triggers the \`onConnectionStateChanged\` callback. This section describes how to use the \`onConnectionStateChanged\` callback to monitor changes in a channel's connection state.

    In your project, open the file with the Agora Engine event handler, and add the \`onConnectionStateChanged\` callback to the \`IRtcEngineEventHandler\` instance initialization.

    The \`state\` parameter in \`onConnectionStateChanged\` reports the current connection state. The \`reason\` parameter indicates why the connection state changed to help you troubleshoot your network. See [State description and troubleshooting](#state-description-and-troubleshooting).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="blueprint" />

    When the connection status changes, RTC SDK sends a \`FOnConnectionStateChanged\` callback. This section describes how to use the \`FOnConnectionStateChanged\` callback to monitor changes in a channel's connection state.

    1. Create the \`OnConnectionStateChanged\` callback function and configure the following parameters:

       | Connection state | Description | Parameter description                                                                                                                     |
       | :--------------- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
       | \`state\`          | Enum        | The current network connection status.                                                                                                    |
       | \`reason\`         | Enum        | The reason why the network connection state changed. See [State description and troubleshooting](#state-description-and-troubleshooting). |

    2. Add a listener for the \`OnConnectionStateChanged\` callback as shown below:

       ![Channel Connection Event](https://assets-docs.agora.io/images/video-sdk/connection-status-mng-blueprint-channel-connection-event.png)

    3. When the channel connection state changes and the \`OnConnectionStateChanged\` callback is triggered, it prints information about the state of the monitored network connection. You can read the current connection state and the reason for the state change from the log which helps you troubleshoot the network.

       ![Channel Connection Log](https://assets-docs.agora.io/images/video-sdk/connection-status-mng-blueprint-channel-connection-log.png)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

## Reference [#reference]

This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;,&#x22;blueprint&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    ### Connection states [#connection-states]

    The app may have the following connection states before joining, during a session, and after leaving a channel:

    | Connection state | Description                                                                                                                                                                                                                                                                                                                                                                          |
    | :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | Initial connection state. Usually occurs:- Before calling \`joinChannel\`.
    - After calling \`leaveChannel\`.                                                                                                                                                                                                                                                                             |
    | **Connecting**   | The transient state after calling \`joinChannel\`.                                                                                                                                                                                                                                                                                                                                     |
    | **Connected**    | Occurs after the app successfully joins a channel. The SDK also triggers the \`onJoinChannelSuccess\` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel.                                                                                                                         |
    | **Reconnecting** | Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the \`onRejoinChannelSuccess\` callback.
    - If the channel is not rejoined within 10 seconds, the SDK triggers \`onConnectionStateChanged(Reconnecting, Lost)\`, and continues trying to rejoin the channel. |
    | **Failed**       | Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call \`leaveChannel\` to leave the current channel, and then call \`joinChannel\` to join the channel again.                                                                                                                           |

    ### State description and troubleshooting [#state-description-and-troubleshooting]

    The \`reason\` parameter in \`onConnectionStateChanged\` describes the reason for the connection state change.

    The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:

    | Connection state | Description and troubleshooting guide                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | * \`LEAVE_CHANNEL\` (5): The user leaves the channel.
    * \`INVALID_TOKEN\` (8):The token is invalid. Please use a valid token to join the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | **Connecting**   | \`CONNECTING\` (0): The app is trying to join the Agora channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | **Connected**    | \`JOIN_SUCCESS\` (1): The app has successfully joined the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | **Reconnecting** | - \`INTERRUPTED\` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see [Disconnection and reconnection](#disconnection-and-reconnection).
    - \`LOST\` (16): The SDK lost connection with the server.
    - \`SETTING_PROXY_SERVER\` (11): The SDK attempts to reconnect because a proxy server is configured.
    - \`CLIENT_IP_ADDRESS_CHANGED\` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.
    - \`KEEP_ALIVE_TIMEOUT\` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.
    - \`RENEW_TOKEN\` (12): Updating the token has caused a change in the network connection status.                                                                        |
    | **Failed**       | * \`BANNED_BY_SERVER\` (3): The user is banned by the server.
    * \`JOIN_FAILED\` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call \`leaveChannel\` to leave the current channel and then call \`joinChannel\` to rejoin the channel.
    * \`INVALID_APP_ID\` (6): The app ID is invalid. Use a valid app ID to join the channel.
    * \`INVALID_CHANNEL_NAME\` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.
    * \`TOKEN_EXPIRED\` (9): The token has expired. Obtain a new token from the app server, and then call \`joinChannel\` to rejoin the channel.
    * \`REJECTED_BY_SERVER\` (10): The user is banned by the server. May also occurs under the following circumstances:
      * The app calls \`joinChannel\` again after the local user has joined the channel.
      * The app called \`startEchoTest\`, but did not call \`stopEchoTest\` to end the echo test. |

    ### API reference [#api-reference]

    * [\`onConnectionStateChanged\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged)
    * [\`getConnectionState\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_getconnectionstate)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    ### Connection states [#connection-states-1]

    The app may have the following connection states before joining, during a session, and after leaving a channel:

    | Connection state | Description                                                                                                                                                                                                                                                                                                                                                                                                          |
    | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | Initial connection state. Usually occurs:- Before calling \`joinChannel\`.
    - After calling \`leaveChannel\`.                                                                                                                                                                                                                                                                                                             |
    | **Connecting**   | The transient state after calling \`joinChannel\`.                                                                                                                                                                                                                                                                                                                                                                     |
    | **Connected**    | Occurs after the app successfully joins a channel. The SDK also triggers the \`onJoinChannelSuccess\` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel.                                                                                                                                                         |
    | **Reconnecting** | Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the \`onRejoinChannelSuccess\` callback.
    - If the channel is not rejoined within 10 seconds, the SDK triggers \`onConnectionStateChanged(connectionStateReconnecting, connectionChangedLost)\`, and continues trying to rejoin the channel. |
    | **Failed**       | Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call \`leaveChannel\` to leave the current channel, and then call \`joinChannel\` to join the channel again.                                                                                                                                                           |

    ### State description and troubleshooting [#state-description-and-troubleshooting-1]

    The \`reason\` parameter in \`onConnectionStateChanged\` describes the reason for the connection state change.

    The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:

    | Connection state | Description and troubleshooting guide                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
    | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | **Disconnected** | * \`LeaveChannel\` (5): The user leaves the channel.
    * \`InvalidToken\` (8):The token is invalid. Please use a valid token to join the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | **Connecting**   | \`Connecting\` (0): The app is trying to join the Agora channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | **Connected**    | \`JoinSuccess\` (1): The app has successfully joined the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | **Reconnecting** | - \`Interrupted\` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see [Disconnection and reconnection](#disconnection-and-reconnection).
    - \`Lost\` (16): The SDK lost connection with the server.
    - \`SettingProxyServer\` (11): The SDK attempts to reconnect because a proxy server is configured.
    - \`ClientIpAddressChanged\` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.
    - \`KeepAliveTimeout\` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.
    - \`RenewToken\` (12): Updating the token has caused a change in the network connection status.                                                                      |
    | **Failed**       | * \`BannedByServer\` (3): The user is banned by the server.
    * \`JoinFailed\` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call \`leaveChannel\` to leave the current channel and then call \`joinChannel\` to rejoin the channel.
    * \`InvalidAppId\` (6): The app ID is invalid. Use a valid app ID to join the channel.
    * \`InvalidChannelName\` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.
    * \`TokenExpired\` (9): The token has expired. Obtain a new token from the app server, and then call \`joinChannel\` to rejoin the channel.
    * \`RejectedByServer\` (10): The user is banned by the server. May also occurs under the following circumstances:
      * The app calls \`joinChannel\` again after the local user has joined the channel.
      * The app called \`startEchoTest\`, but did not call \`stopEchoTest\` to end the echo test. |

    ### API reference [#api-reference-1]

    * [\`onConnectionStateChanged\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged)
    * [\`getConnectionState\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_getconnectionstate)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    ### Connection states [#connection-states-2]

    The app may have the following connection states before joining, during a session, and after leaving a channel:

    | Connection state | Description                                                                                                                                                                                                                                                                                                                                                                                                          |
    | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | Initial connection state. Usually occurs:- Before calling \`joinChannel\`.
    - After calling \`leaveChannel\`.                                                                                                                                                                                                                                                                                                             |
    | **Connecting**   | The transient state after calling \`joinChannel\`.                                                                                                                                                                                                                                                                                                                                                                     |
    | **Connected**    | Occurs after the app successfully joins a channel. The SDK also triggers the \`onJoinChannelSuccess\` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel.                                                                                                                                                         |
    | **Reconnecting** | Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the \`onRejoinChannelSuccess\` callback.
    - If the channel is not rejoined within 10 seconds, the SDK triggers \`onConnectionStateChanged(connectionStateReconnecting, connectionChangedLost)\`, and continues trying to rejoin the channel. |
    | **Failed**       | Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call \`leaveChannel\` to leave the current channel, and then call \`joinChannel\` to join the channel again.                                                                                                                                                           |

    ### State description and troubleshooting [#state-description-and-troubleshooting-2]

    The \`reason\` parameter in \`onConnectionStateChanged\` describes the reason for the connection state change.

    The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:

    | Connection state | Description and troubleshooting guide                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
    | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | **Disconnected** | * \`LeaveChannel\` (5): The user leaves the channel.
    * \`InvalidToken\` (8):The token is invalid. Please use a valid token to join the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | **Connecting**   | \`Connecting\` (0): The app is trying to join the Agora channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | **Connected**    | \`JoinSuccess\` (1): The app has successfully joined the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | **Reconnecting** | - \`Interrupted\` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see [Disconnection and reconnection](#disconnection-and-reconnection).
    - \`Lost\` (16): The SDK lost connection with the server.
    - \`SettingProxyServer\` (11): The SDK attempts to reconnect because a proxy server is configured.
    - \`ClientIpAddressChanged\` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.
    - \`KeepAliveTimeout\` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.
    - \`RenewToken\` (12): Updating the token has caused a change in the network connection status.                                                                      |
    | **Failed**       | * \`BannedByServer\` (3): The user is banned by the server.
    * \`JoinFailed\` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call \`leaveChannel\` to leave the current channel and then call \`joinChannel\` to rejoin the channel.
    * \`InvalidAppId\` (6): The app ID is invalid. Use a valid app ID to join the channel.
    * \`InvalidChannelName\` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.
    * \`TokenExpired\` (9): The token has expired. Obtain a new token from the app server, and then call \`joinChannel\` to rejoin the channel.
    * \`RejectedByServer\` (10): The user is banned by the server. May also occurs under the following circumstances:
      * The app calls \`joinChannel\` again after the local user has joined the channel.
      * The app called \`startEchoTest\`, but did not call \`stopEchoTest\` to end the echo test. |

    ### API reference [#api-reference-2]

    * [\`onConnectionStateChanged\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged)
    * [\`getConnectionState\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_getconnectionstate)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    ### Connection states [#connection-states-3]

    The app may have the following connection states before joining, during a session, and after leaving a channel:

    | Connection state | Description                                                                                                                                                                                                                                                                                                                                                                    |
    | :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | Initial connection state. Usually occurs:- Before calling \`joinChannelByToken\`.
    - After calling \`leaveChannel\`.                                                                                                                                                                                                                                                                |
    | **Connecting**   | The transient state after calling \`joinChannelByToken\`.                                                                                                                                                                                                                                                                                                                        |
    | **Connected**    | Occurs after the app successfully joins a channel. The SDK also triggers the \`didJoinChannel\` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel.                                                                                                                         |
    | **Reconnecting** | Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the \`didRejoinChannel\` callback.
    - If the channel is not rejoined within 10 seconds, the SDK triggers \`connectionChangedToState(Reconnecting, Lost)\`, and continues trying to rejoin the channel. |
    | **Failed**       | Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call \`leaveChannel\` to leave the current channel, and then call \`joinChannelByToken\` to join the channel again.                                                                                                              |

    ### State description and troubleshooting [#state-description-and-troubleshooting-3]

    The \`reason\` parameter in \`connectionChangedToState\` describes the reason for the connection state change.

    The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:

    | Connection state | Description and troubleshooting guide                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | * \`LeaveChannel\` (5): The user leaves the channel.
    * \`InvalidToken\` (8):The token is invalid. Please use a valid token to join the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | **Connecting**   | \`Connecting\` (0): The app is trying to join the Agora channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | **Connected**    | \`JoinSuccess\` (1): The app has successfully joined the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | **Reconnecting** | - \`Interrupted\` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see [Disconnection and reconnection](#disconnection-and-reconnection).
    - \`Lost\` (16): The SDK lost connection with the server.
    - \`SettingProxyServer\` (11): The SDK attempts to reconnect because a proxy server is configured.
    - \`ClientIpAddressChanged\` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.
    - \`KeepAliveTimeout\` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.
    - \`RenewToken\` (12): Updating the token has caused a change in the network connection status.                                                                                           |
    | **Failed**       | * \`BannedByServer\` (3): The user is banned by the server.
    * \`JoinFailed\` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call \`leaveChannel\` to leave the current channel and then call \`joinChannelByToken\` to rejoin the channel.
    * \`InvalidAppId\` (6): The app ID is invalid. Use a valid app ID to join the channel.
    * \`InvalidChannelName\` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.
    * \`TokenExpired\` (9): The token has expired. Obtain a new token from the app server, and then call \`joinChannelByToken\` to rejoin the channel.
    * \`RejectedByServer\` (10): The user is banned by the server. May also occurs under the following circumstances:
      * The app calls \`joinChannelByToken\` again after the local user has joined the channel.
      * The app called \`startEchoTest\`, but did not call \`stopEchoTest\` to end the echo test. |

    ### API reference [#api-reference-3]

    * [\`rtcEngine(_:connectionChangedTo:reason:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:connectionchangedto\\:reason:\\))
    * [\`getConnectionState\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/getconnectionstate\\(\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    ### Connection states [#connection-states-4]

    The app may have the following connection states before joining, during a session, and after leaving a channel:

    | Connection state | Description                                                                                                                                                                                                                                                                                                                                                                    |
    | :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | Initial connection state. Usually occurs:- Before calling \`joinChannelByToken\`.
    - After calling \`leaveChannel\`.                                                                                                                                                                                                                                                                |
    | **Connecting**   | The transient state after calling \`joinChannelByToken\`.                                                                                                                                                                                                                                                                                                                        |
    | **Connected**    | Occurs after the app successfully joins a channel. The SDK also triggers the \`didJoinChannel\` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel.                                                                                                                         |
    | **Reconnecting** | Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the \`didRejoinChannel\` callback.
    - If the channel is not rejoined within 10 seconds, the SDK triggers \`connectionChangedToState(Reconnecting, Lost)\`, and continues trying to rejoin the channel. |
    | **Failed**       | Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call \`leaveChannel\` to leave the current channel, and then call \`joinChannelByToken\` to join the channel again.                                                                                                              |

    ### State description and troubleshooting [#state-description-and-troubleshooting-4]

    The \`reason\` parameter in \`connectionChangedToState\` describes the reason for the connection state change.

    The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:

    | Connection state | Description and troubleshooting guide                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | * \`LeaveChannel\` (5): The user leaves the channel.
    * \`InvalidToken\` (8):The token is invalid. Please use a valid token to join the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | **Connecting**   | \`Connecting\` (0): The app is trying to join the Agora channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | **Connected**    | \`JoinSuccess\` (1): The app has successfully joined the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | **Reconnecting** | - \`Interrupted\` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see [Disconnection and reconnection](#disconnection-and-reconnection).
    - \`Lost\` (16): The SDK lost connection with the server.
    - \`SettingProxyServer\` (11): The SDK attempts to reconnect because a proxy server is configured.
    - \`ClientIpAddressChanged\` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.
    - \`KeepAliveTimeout\` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.
    - \`RenewToken\` (12): Updating the token has caused a change in the network connection status.                                                                                           |
    | **Failed**       | * \`BannedByServer\` (3): The user is banned by the server.
    * \`JoinFailed\` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call \`leaveChannel\` to leave the current channel and then call \`joinChannelByToken\` to rejoin the channel.
    * \`InvalidAppId\` (6): The app ID is invalid. Use a valid app ID to join the channel.
    * \`InvalidChannelName\` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.
    * \`TokenExpired\` (9): The token has expired. Obtain a new token from the app server, and then call \`joinChannelByToken\` to rejoin the channel.
    * \`RejectedByServer\` (10): The user is banned by the server. May also occurs under the following circumstances:
      * The app calls \`joinChannelByToken\` again after the local user has joined the channel.
      * The app called \`startEchoTest\`, but did not call \`stopEchoTest\` to end the echo test. |

    ### API reference [#api-reference-4]

    * [\`rtcEngine(_:connectionChangedTo:reason:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:connectionchangedto\\:reason:\\))
    * [\`getConnectionState\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/getconnectionstate\\(\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    ### Connection states [#connection-states-5]

    The app may have the following connection states before joining, during a session, and after leaving a channel:

    | Connection state | Description                                                                                                                                                                                                                                                                                                                                                                                                          |
    | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | Initial connection state. Usually occurs:- Before calling \`joinChannel\`.
    - After calling \`leaveChannel\`.                                                                                                                                                                                                                                                                                                             |
    | **Connecting**   | The transient state after calling \`joinChannel\`.                                                                                                                                                                                                                                                                                                                                                                     |
    | **Connected**    | Occurs after the app successfully joins a channel. The SDK also triggers the \`onJoinChannelSuccess\` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel.                                                                                                                                                         |
    | **Reconnecting** | Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the \`onRejoinChannelSuccess\` callback.
    - If the channel is not rejoined within 10 seconds, the SDK triggers \`onConnectionStateChanged(connectionStateReconnecting, connectionChangedLost)\`, and continues trying to rejoin the channel. |
    | **Failed**       | Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call \`leaveChannel\` to leave the current channel, and then call \`joinChannel\` to join the channel again.                                                                                                                                                           |

    ### State description and troubleshooting [#state-description-and-troubleshooting-5]

    The \`reason\` parameter in \`onConnectionStateChanged\` describes the reason for the connection state change.

    The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:

    | Connection state | Description and troubleshooting guide                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
    | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | **Disconnected** | * \`LeaveChannel\` (5): The user leaves the channel.
    * \`InvalidToken\` (8):The token is invalid. Please use a valid token to join the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | **Connecting**   | \`Connecting\` (0): The app is trying to join the Agora channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | **Connected**    | \`JoinSuccess\` (1): The app has successfully joined the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | **Reconnecting** | - \`Interrupted\` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see [Disconnection and reconnection](#disconnection-and-reconnection).
    - \`Lost\` (16): The SDK lost connection with the server.
    - \`SettingProxyServer\` (11): The SDK attempts to reconnect because a proxy server is configured.
    - \`ClientIpAddressChanged\` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.
    - \`KeepAliveTimeout\` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.
    - \`RenewToken\` (12): Updating the token has caused a change in the network connection status.                                                                      |
    | **Failed**       | * \`BannedByServer\` (3): The user is banned by the server.
    * \`JoinFailed\` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call \`leaveChannel\` to leave the current channel and then call \`joinChannel\` to rejoin the channel.
    * \`InvalidAppId\` (6): The app ID is invalid. Use a valid app ID to join the channel.
    * \`InvalidChannelName\` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.
    * \`TokenExpired\` (9): The token has expired. Obtain a new token from the app server, and then call \`joinChannel\` to rejoin the channel.
    * \`RejectedByServer\` (10): The user is banned by the server. May also occurs under the following circumstances:
      * The app calls \`joinChannel\` again after the local user has joined the channel.
      * The app called \`startEchoTest\`, but did not call \`stopEchoTest\` to end the echo test. |

    ### API reference [#api-reference-5]

    * [\`onConnectionStateChanged\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged)
    * [\`getConnectionState\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_getconnectionstate)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    ### Connection states [#connection-states-6]

    The app may have the following connection states before joining, during a session, and after leaving a channel:

    | Connection state | Description                                                                                                                                                                                                                                                                                                                                                                          |
    | :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | Initial connection state. Usually occurs:- Before calling \`JoinChannel\`.
    - After calling \`LeaveChannel\`.                                                                                                                                                                                                                                                                             |
    | **Connecting**   | The transient state after calling \`JoinChannel\`.                                                                                                                                                                                                                                                                                                                                     |
    | **Connected**    | Occurs after the app successfully joins a channel. The SDK also triggers the \`OnJoinChannelSuccess\` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel.                                                                                                                         |
    | **Reconnecting** | Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the \`OnRejoinChannelSuccess\` callback.
    - If the channel is not rejoined within 10 seconds, the SDK triggers \`OnConnectionStateChanged(RECONNECTING, LOST)\`, and continues trying to rejoin the channel. |
    | **Failed**       | Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call \`LeaveChannel\` to leave the current channel, and then call \`JoinChannel\` to join the channel again.                                                                                                                           |

    ### State description and troubleshooting [#state-description-and-troubleshooting-6]

    The \`reason\` parameter in \`OnConnectionStateChanged\` describes the reason for the connection state change.

    The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:

    | Connection state | Description and troubleshooting guide                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | * \`LEAVE_CHANNEL\` (5): The user leaves the channel.
    * \`INVALID_TOKEN\` (8):The token is invalid. Please use a valid token to join the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | **Connecting**   | \`CONNECTING\` (0): The app is trying to join the Agora channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | **Connected**    | \`JOIN_SUCCESS\` (1): The app has successfully joined the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | **Reconnecting** | - \`INTERRUPTED\` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see [Disconnection and reconnection](#disconnection-and-reconnection).
    - \`LOST\` (16): The SDK lost connection with the server.
    - \`SETTING_PROXY_SERVER\` (11): The SDK attempts to reconnect because a proxy server is configured.
    - \`CLIENT_IP_ADDRESS_CHANGED\` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.
    - \`KEEP_ALIVE_TIMEOUT\` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.
    - \`RENEW_TOKEN\` (12): Updating the token has caused a change in the network connection status.                                                                        |
    | **Failed**       | * \`BANNED_BY_SERVER\` (3): The user is banned by the server.
    * \`JOIN_FAILED\` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call \`LeaveChannel\` to leave the current channel and then call \`JoinChannel\` to rejoin the channel.
    * \`INVALID_APP_ID\` (6): The app ID is invalid. Use a valid app ID to join the channel.
    * \`INVALID_CHANNEL_NAME\` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.
    * \`TOKEN_EXPIRED\` (9): The token has expired. Obtain a new token from the app server, and then call \`JoinChannel\` to rejoin the channel.
    * \`REJECTED_BY_SERVER\` (10): The user is banned by the server. May also occurs under the following circumstances:
      * The app calls \`JoinChannel\` again after the local user has joined the channel.
      * The app called \`StartEchoTest\`, but did not call \`StopEchoTest\` to end the echo test. |

    ### API reference [#api-reference-6]

    * [\`OnConnectionStateChanged\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged)
    * [\`GetConnectionState\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_getconnectionstate)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    ### Connection states [#connection-states-7]

    The app may have the following connection states before joining, during a session, and after leaving a channel:

    | Connection state | Description                                                                                                                                                                                                                                                                                                                                                                          |
    | :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | Initial connection state. Usually occurs:- Before calling \`joinChannel\`.
    - After calling \`leaveChannel\`.                                                                                                                                                                                                                                                                             |
    | **Connecting**   | The transient state after calling \`joinChannel\`.                                                                                                                                                                                                                                                                                                                                     |
    | **Connected**    | Occurs after the app successfully joins a channel. The SDK also triggers the \`onJoinChannelSuccess\` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel.                                                                                                                         |
    | **Reconnecting** | Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the \`onRejoinChannelSuccess\` callback.
    - If the channel is not rejoined within 10 seconds, the SDK triggers \`onConnectionStateChanged(Reconnecting, Lost)\`, and continues trying to rejoin the channel. |
    | **Failed**       | Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call \`leaveChannel\` to leave the current channel, and then call \`joinChannel\` to join the channel again.                                                                                                                           |

    ### State description and troubleshooting [#state-description-and-troubleshooting-7]

    The \`reason\` parameter in \`onConnectionStateChanged\` describes the reason for the connection state change.

    The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:

    | Connection state | Description and troubleshooting guide                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | * \`LEAVE_CHANNEL\` (5): The user leaves the channel.
    * \`INVALID_TOKEN\` (8):The token is invalid. Please use a valid token to join the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | **Connecting**   | \`CONNECTING\` (0): The app is trying to join the Agora channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | **Connected**    | \`JOIN_SUCCESS\` (1): The app has successfully joined the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | **Reconnecting** | - \`INTERRUPTED\` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see [Disconnection and reconnection](#disconnection-and-reconnection).
    - \`LOST\` (16): The SDK lost connection with the server.
    - \`SETTING_PROXY_SERVER\` (11): The SDK attempts to reconnect because a proxy server is configured.
    - \`CLIENT_IP_ADDRESS_CHANGED\` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.
    - \`KEEP_ALIVE_TIMEOUT\` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.
    - \`RENEW_TOKEN\` (12): Updating the token has caused a change in the network connection status.                                                                        |
    | **Failed**       | * \`BANNED_BY_SERVER\` (3): The user is banned by the server.
    * \`JOIN_FAILED\` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call \`leaveChannel\` to leave the current channel and then call \`joinChannel\` to rejoin the channel.
    * \`INVALID_APP_ID\` (6): The app ID is invalid. Use a valid app ID to join the channel.
    * \`INVALID_CHANNEL_NAME\` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.
    * \`TOKEN_EXPIRED\` (9): The token has expired. Obtain a new token from the app server, and then call \`joinChannel\` to rejoin the channel.
    * \`REJECTED_BY_SERVER\` (10): The user is banned by the server. May also occurs under the following circumstances:
      * The app calls \`joinChannel\` again after the local user has joined the channel.
      * The app called \`startEchoTest\`, but did not call \`stopEchoTest\` to end the echo test. |

    ### API reference [#api-reference-7]

    * [\`onConnectionStateChanged\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged)
    * [\`getConnectionState\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_getconnectionstate)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ### Connection states [#connection-states-8]

    The app may have the following connection states before joining, during a session, and after leaving a channel:

    | Connection state  | Description                                                                                                                                                                                                                                                                                                        |
    | :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **DISCONNECTED**  | Connection disconnected. The SDK will not automatically reconnect while in this state. This state indicates that the user is in one of the following stages:- Has not joined the channel using \`join\`.
    - Has left the channel using \`leave\`.
    - Kicked out of the channel by the Agora server or failed to connect. |
    | **CONNECTING**    | Joining. The instantaneous state after calling \`join\`.                                                                                                                                                                                                                                                             |
    | **CONNECTED**     | Occurs after the app has successfully joined the channel. At this point the user can publish or subscribe to the audio and video in the channel.                                                                                                                                                                   |
    | **RECONNECTING**  | Occurs when the connection is interrupted due to a network disconnection or switch. The SDK automatically tries to reconnect after an interruption.                                                                                                                                                                |
    | **DISCONNECTING** | Disconnecting. This is the state when \`leave\` is called.                                                                                                                                                                                                                                                           |

    ### API reference [#api-reference-8]

    * [\`AgoraRTCClient.on("connection-state-change")\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_connection_state_change)

    * [\`AgoraRTCClient.on("user-joined")\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_user_joined)

    * [\`AgoraRTCClient.on("user-left")\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_user_left)

    * [\`AgoraRTCClient.on("user-published")\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_user_published)

    * [\`AgoraRTCClient.on("user-unpublished")\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_user_unpublished)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    ### Connection states [#connection-states-9]

    The app may have the following connection states before joining, during a session, and after leaving a channel:

    | Connection state | Description                                                                                                                                                                                                                                                                                                                                                                          |
    | :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | Initial connection state. Usually occurs:- Before calling \`joinChannel\`.
    - After calling \`leaveChannel\`.                                                                                                                                                                                                                                                                             |
    | **Connecting**   | The transient state after calling \`joinChannel\`.                                                                                                                                                                                                                                                                                                                                     |
    | **Connected**    | Occurs after the app successfully joins a channel. The SDK also triggers the \`onJoinChannelSuccess\` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel.                                                                                                                         |
    | **Reconnecting** | Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the \`onRejoinChannelSuccess\` callback.
    - If the channel is not rejoined within 10 seconds, the SDK triggers \`onConnectionStateChanged(Reconnecting, Lost)\`, and continues trying to rejoin the channel. |
    | **Failed**       | Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call \`leaveChannel\` to leave the current channel, and then call \`joinChannel\` to join the channel again.                                                                                                                           |

    ### State description and troubleshooting [#state-description-and-troubleshooting-8]

    The \`reason\` parameter in \`onConnectionStateChanged\` describes the reason for the connection state change.

    The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:

    | Connection state | Description and troubleshooting guide                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | * \`LEAVE_CHANNEL\` (5): The user leaves the channel.
    * \`INVALID_TOKEN\` (8):The token is invalid. Please use a valid token to join the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | **Connecting**   | \`CONNECTING\` (0): The app is trying to join the Agora channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | **Connected**    | \`JOIN_SUCCESS\` (1): The app has successfully joined the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | **Reconnecting** | - \`INTERRUPTED\` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see [Disconnection and reconnection](#disconnection-and-reconnection).
    - \`LOST\` (16): The SDK lost connection with the server.
    - \`SETTING_PROXY_SERVER\` (11): The SDK attempts to reconnect because a proxy server is configured.
    - \`CLIENT_IP_ADDRESS_CHANGED\` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.
    - \`KEEP_ALIVE_TIMEOUT\` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.
    - \`RENEW_TOKEN\` (12): Updating the token has caused a change in the network connection status.                                                                        |
    | **Failed**       | * \`BANNED_BY_SERVER\` (3): The user is banned by the server.
    * \`JOIN_FAILED\` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call \`leaveChannel\` to leave the current channel and then call \`joinChannel\` to rejoin the channel.
    * \`INVALID_APP_ID\` (6): The app ID is invalid. Use a valid app ID to join the channel.
    * \`INVALID_CHANNEL_NAME\` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.
    * \`TOKEN_EXPIRED\` (9): The token has expired. Obtain a new token from the app server, and then call \`joinChannel\` to rejoin the channel.
    * \`REJECTED_BY_SERVER\` (10): The user is banned by the server. May also occurs under the following circumstances:
      * The app calls \`joinChannel\` again after the local user has joined the channel.
      * The app called \`startEchoTest\`, but did not call \`stopEchoTest\` to end the echo test. |

    ### API reference [#api-reference-9]

    * [\`onConnectionStateChanged\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged)

    * [\`getConnectionState\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_getconnectionstate)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="blueprint" />

    ### Connection states [#connection-states-10]

    The app may have the following connection states before joining, during a session, and after leaving a channel:

    The app may have the following connection states before joining, during a session, and after leaving a channel:

    | Connection state | Description                                                                                                                                                                                                                                                                                                                                                                            |
    | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | Initial connection state. Usually occurs:- Before calling \`JoinChannel\`.
    - After calling \`LeaveChannel\`.                                                                                                                                                                                                                                                                               |
    | **Connecting**   | The transient state after calling \`JoinChannel\`.                                                                                                                                                                                                                                                                                                                                       |
    | **Connected**    | Occurs after the app successfully joins a channel. The SDK also triggers the \`FOnJoinChannelSuccess\` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel.                                                                                                                          |
    | **Reconnecting** | Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the \`FOnRejoinChannelSuccess\` callback.
    - If the channel is not rejoined within 10 seconds, the SDK triggers \`FOnConnectionStateChanged(RECONNECTING, LOST)\`, and continues trying to rejoin the channel. |
    | **Failed**       | Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call \`LeaveChannel\` to leave the current channel, and then call \`JoinChannel\` to join the channel again.                                                                                                                             |

    ### State description and troubleshooting [#state-description-and-troubleshooting-9]

    The \`reason\` parameter in \`FOnConnectionStateChanged\` describes the reason for the connection state change.

    The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:

    | Connection state | Description and troubleshooting guide                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Disconnected** | * \`LEAVE_CHANNEL\` (5): The user leaves the channel.
    * \`INVALID_TOKEN\` (8):The token is invalid. Please use a valid token to join the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | **Connecting**   | \`CONNECTING\` (0): The app is trying to join the Agora channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | **Connected**    | \`JOIN_SUCCESS\` (1): The app has successfully joined the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | **Reconnecting** | - \`INTERRUPTED\` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see [Disconnection and reconnection](#disconnection-and-reconnection).
    - \`LOST\` (16): The SDK lost connection with the server.
    - \`SETTING_PROXY_SERVER\` (11): The SDK attempts to reconnect because a proxy server is configured.
    - \`CLIENT_IP_ADDRESS_CHANGED\` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.
    - \`KEEP_ALIVE_TIMEOUT\` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.
    - \`RENEW_TOKEN\` (12): Updating the token has caused a change in the network connection status.                                                                        |
    | **Failed**       | * \`BANNED_BY_SERVER\` (3): The user is banned by the server.
    * \`JOIN_FAILED\` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call \`LeaveChannel\` to leave the current channel and then call \`JoinChannel\` to rejoin the channel.
    * \`INVALID_APP_ID\` (6): The app ID is invalid. Use a valid app ID to join the channel.
    * \`INVALID_CHANNEL_NAME\` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.
    * \`TOKEN_EXPIRED\` (9): The token has expired. Obtain a new token from the app server, and then call \`JoinChannel\` to rejoin the channel.
    * \`REJECTED_BY_SERVER\` (10): The user is banned by the server. May also occurs under the following circumstances:
      * The app calls \`JoinChannel\` again after the local user has joined the channel.
      * The app called \`StartEchoTest\`, but did not call \`StopEchoTest\` to end the echo test. |

    ### API reference [#api-reference-10]

    * [\`FOnConnectionStateChanged\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged)
    * [\`GetConnectionState\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_getconnectionstate)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "**Supported platforms:** Web, Android, iOS, macOS, Windows, Unreal Engine, Electron, Flutter, React Native, Unity, and Unreal Blueprint."
  }, {
    heading: undefined,
    content: "In real-time audio and video implementations, the connection state between the app and Agora SDRTN® changes as the client joins or leaves the channel. The connection may also be interrupted due to network or authentication issues."
  }, {
    heading: undefined,
    content: "This page describes the various channel connection states, reasons for state changes, and how to handle these changes to better manage your users and troubleshoot network faults."
  }, {
    heading: "understand-the-tech",
    content: "The following figure shows the various connection states and how the connection state changes between a user joining and leaving a channel:"
  }, {
    heading: "disconnection-and-reconnection",
    content: "During the communication process, if the user is disconnected due to network problems, the SDK automatically enables the disconnection and reconnection mechanism. The following figure shows the callbacks received by the local user `UID1` and the remote user `UID2` when:"
  }, {
    heading: "disconnection-and-reconnection",
    content: "A local user joins the channel"
  }, {
    heading: "disconnection-and-reconnection",
    content: "A network exception occurs"
  }, {
    heading: "disconnection-and-reconnection",
    content: "The connection is interrupted"
  }, {
    heading: "disconnection-and-reconnection",
    content: "The user rejoins the channel"
  }, {
    heading: "disconnection-and-reconnection",
    content: "The following platform-specific timelines explain the reconnection sequence in detail."
  }, {
    heading: "disconnection-and-reconnection",
    content: "In the diagram:"
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T0**: The RTC SDK receives a `joinChannel` request from `UID1`."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T1**: After 200 ms of calling `joinChannel`, `UID1` joins the channel. At the same time, `UID1` receives `onConnectionStateChanged(CONNECTING, CONNECTING)` callback. After successfully joining the channel, `UID1` receives `onConnectionStateChanged(CONNECTED, JOIN_SUCCESS)` and `onJoinChannelSuccess` callbacks."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T2**: Due to the transmission delay between networks, `UID2` observes a delay of about 100 milliseconds for `UID1` to join the channel, and at this point `UID2` receives a `onUserJoined` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T3**: When `UID1` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T4**: If `UID1` does not receive any data from the server for 4 consecutive seconds, `UID1` receives the `onConnectionStateChanged(RECONNECTING, INTERRUPTED)` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T5**: If `UID1` does not receive any data from the server for 10 consecutive seconds after receiving `onConnectionStateChanged(RECONNECTING, INTERRUPTED)`, `UID1` receives the `onConnectionLost` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T6**: If `UID2` does not receive any data from `UID1` for 20 consecutive seconds, the RTC SDK determines that `UID1` is offline. So `UID2` receives the `onUserOffline` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T7**: If `UID1` fails to rejoin the channel for 20 consecutive minutes after receiving `onConnectionStateChanged(RECONNECTING, INTERRUPTED)`, the SDK stops retrying. `UID1` receives the `onConnectionStateChanged(FAILED, JOIN_FAILED)` callback and the user must exit and then rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "In the diagram:"
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T0**: The RTC SDK receives a `joinChannel` request from `UID1`."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T1**: After 200 ms of calling `joinChannel`, `UID1` joins the channel. At the same time, `UID1` receives `onConnectionStateChanged(connectionStateConnecting, connectionChangedConnecting)` callback. After successfully joining the channel, `UID1` receives `onConnectionStateChanged(connectionStateConnected, connectionChangedJoinSuccess)` and `onJoinChannelSuccess` callbacks."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T2**: Due to the transmission delay between networks, `UID2` observes a delay of about 100 milliseconds for `UID1` to join the channel, and at this point `UID2` receives a `onUserJoined` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T3**: When `UID1` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T4**: If `UID1` does not receive any data from the server for 4 consecutive seconds, `UID1` receives the `onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T5**: If `UID1` does not receive any data from the server for 10 consecutive seconds after receiving `onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)`, `UID1` receives the `onConnectionLost` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T6**: If `UID2` does not receive any data from `UID1` for 20 consecutive seconds, the RTC SDK determines that `UID1` is offline. So `UID2` receives the `onUserOffline` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T7**: If `UID1` fails to rejoin the channel for 20 consecutive minutes after receiving `onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)`, the SDK stops retrying. `UID1` receives the `onConnectionStateChanged(connectionStateFailed, connectionChangedJoinFailed)` callback and the user must exit and then rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "In the diagram:"
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T0**: The RTC SDK receives a `joinChannel` request from `UID1`."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T1**: After 200 ms of calling `joinChannel`, `UID1` joins the channel. At the same time, `UID1` receives `onConnectionStateChanged(connectionStateConnecting, connectionChangedConnecting)` callback. After successfully joining the channel, `UID1` receives `onConnectionStateChanged(connectionStateConnected, connectionChangedJoinSuccess)` and `onJoinChannelSuccess` callbacks."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T2**: Due to the transmission delay between networks, `UID2` observes a delay of about 100 milliseconds for `UID1` to join the channel, and at this point `UID2` receives a `onUserJoined` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T3**: When `UID1` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T4**: If `UID1` does not receive any data from the server for 4 consecutive seconds, `UID1` receives the `onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T5**: If `UID1` does not receive any data from the server for 10 consecutive seconds after receiving `onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)`, `UID1` receives the `onConnectionLost` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T6**: If `UID2` does not receive any data from `UID1` for 20 consecutive seconds, the RTC SDK determines that `UID1` is offline. So `UID2` receives the `onUserOffline` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T7**: If `UID1` fails to rejoin the channel for 20 consecutive minutes after receiving `onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)`, the SDK stops retrying. `UID1` receives the `onConnectionStateChanged(connectionStateFailed, connectionChangedJoinFailed)` callback and the user must exit and then rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "In the diagram:"
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T0**: The RTC SDK receives a `joinChannelByToken` request from `UID1`."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T1**: After 200 ms of calling `joinChannelByToken`, `UID1` joins the channel. At the same time, `UID1` receives `connectionChangedToState(Connecting, Connecting)` callback. After successfully joining the channel, `UID1` receives `connectionChangedToState(Connected, JoinSuccess)` and `didJoinChannel` callbacks."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T2**: Due to the transmission delay between networks, `UID2` observes a delay of about 100 milliseconds for `UID1` to join the channel, and at this point `UID2` receives a `didJoinedOfUid` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T3**: When `UID1` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T4**: If `UID1` does not receive any data from the server for 4 consecutive seconds, `UID1` receives the `connectionChangedToState(Reconnecting, Interrupted)` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T5**: If `UID1` does not receive any data from the server for 10 consecutive seconds after receiving `connectionChangedToState(Reconnecting, Interrupted)`, `UID1` receives the `rtcEngineConnectionDidLost` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T6**: If `UID2` does not receive any data from `UID1` for 20 consecutive seconds, the RTC SDK determines that `UID1` is offline. So `UID2` receives the `didOfflineOfUid` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T7**: If `UID1` fails to rejoin the channel for 20 consecutive minutes after receiving `connectionChangedToState(Reconnecting, Interrupted)`, the SDK stops retrying. `UID1` receives the `connectionChangedToState(Failed, JoinFailed)` callback and the user must exit and then rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "In the diagram:"
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T0**: The RTC SDK receives a `joinChannelByToken` request from `UID1`."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T1**: After 200 ms of calling `joinChannelByToken`, `UID1` joins the channel. At the same time, `UID1` receives `connectionChangedToState(Connecting, Connecting)` callback. After successfully joining the channel, `UID1` receives `connectionChangedToState(Connected, JoinSuccess)` and `didJoinChannel` callbacks."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T2**: Due to the transmission delay between networks, `UID2` observes a delay of about 100 milliseconds for `UID1` to join the channel, and at this point `UID2` receives a `didJoinedOfUid` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T3**: When `UID1` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T4**: If `UID1` does not receive any data from the server for 4 consecutive seconds, `UID1` receives the `connectionChangedToState(Reconnecting, Interrupted)` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T5**: If `UID1` does not receive any data from the server for 10 consecutive seconds after receiving `connectionChangedToState(Reconnecting, Interrupted)`, `UID1` receives the `rtcEngineConnectionDidLost` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T6**: If `UID2` does not receive any data from `UID1` for 20 consecutive seconds, the RTC SDK determines that `UID1` is offline. So `UID2` receives the `didOfflineOfUid` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T7**: If `UID1` fails to rejoin the channel for 20 consecutive minutes after receiving `connectionChangedToState(Reconnecting, Interrupted)`, the SDK stops retrying. `UID1` receives the `connectionChangedToState(Failed, JoinFailed)` callback and the user must exit and then rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "In the diagram:"
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T0**: The RTC SDK receives a `joinChannel` request from `UID1`."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T1**: After 200 ms of calling `joinChannel`, `UID1` joins the channel. At the same time, `UID1` receives `onConnectionStateChanged(connectionStateConnecting, connectionChangedConnecting)` callback. After successfully joining the channel, `UID1` receives `onConnectionStateChanged(connectionStateConnected, connectionChangedJoinSuccess)` and `onJoinChannelSuccess` callbacks."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T2**: Due to the transmission delay between networks, `UID2` observes a delay of about 100 milliseconds for `UID1` to join the channel, and at this point `UID2` receives a `onUserJoined` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T3**: When `UID1` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T4**: If `UID1` does not receive any data from the server for 4 consecutive seconds, `UID1` receives the `onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T5**: If `UID1` does not receive any data from the server for 10 consecutive seconds after receiving `onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)`, `UID1` receives the `onConnectionLost` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T6**: If `UID2` does not receive any data from `UID1` for 20 consecutive seconds, the RTC SDK determines that `UID1` is offline. So `UID2` receives the `onUserOffline` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T7**: If `UID1` fails to rejoin the channel for 20 consecutive minutes after receiving `onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)`, the SDK stops retrying. `UID1` receives the `onConnectionStateChanged(connectionStateFailed, connectionChangedJoinFailed)` callback and the user must exit and then rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "In the diagram:"
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T0**: The RTC SDK receives a `JoinChannel` request from `UID1`."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T1**: After 200 ms of calling `JoinChannel`, `UID1` joins the channel. At the same time, `UID1` receives `OnConnectionStateChanged(CONNECTION_STATE_CONNECTING, CONNECTION_CHANGED_CONNECTING)` callback. After successfully joining the channel, `UID1` receives `OnConnectionStateChanged(CONNECTION_STATE_CONNECTING, CONNECTION_CHANGED_JOIN_SUCCESS)` and `OnJoinChannelSuccess` callbacks."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T2**: Due to the transmission delay between networks, `UID2` observes a delay of about 100 milliseconds for `UID1` to join the channel, and at this point `UID2` receives a `OnUserJoined` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T3**: When `UID1` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T4**: If `UID1` does not receive any data from the server for 4 consecutive seconds, `UID1` receives the `OnConnectionStateChanged(CONNECTION_STATE_RECONNECTING, CONNECTION_CHANGED_INTERRUPTED)` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T5**: If `UID1` does not receive any data from the server for 10 consecutive seconds after receiving `OnConnectionStateChanged(CONNECTION_STATE_RECONNECTING, CONNECTION_CHANGED_INTERRUPTED)`, `UID1` receives the `OnConnectionLost` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T6**: If `UID2` does not receive any data from `UID1` for 20 consecutive seconds, the RTC SDK determines that `UID1` is offline. So `UID2` receives the `onUserOffline` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T7**: If `UID1` fails to rejoin the channel for 20 consecutive minutes after receiving `OnConnectionStateChanged(CONNECTION_STATE_RECONNECTING, CONNECTION_CHANGED_INTERRUPTED)`, the SDK stops retrying. `UID1` receives the `OnConnectionStateChanged(CONNECTION_STATE_FAILED, CONNECTION_CHANGED_JOIN_FAILED)` callback and the user must exit and then rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "In the diagram:"
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T0**: The RTC SDK receives a `joinChannel` request from `UID1`."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T1**: After 200 ms of calling `joinChannel`, `UID1` joins the channel. At the same time, `UID1` receives `onConnectionStateChanged(CONNECTING, CONNECTING)` callback. After successfully joining the channel, `UID1` receives `onConnectionStateChanged(CONNECTED, JOIN_SUCCESS)` and `onJoinChannelSuccess` callbacks."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T2**: Due to the transmission delay between networks, `UID2` observes a delay of about 100 milliseconds for `UID1` to join the channel, and at this point `UID2` receives a `onUserJoined` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T3**: When `UID1` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T4**: If `UID1` does not receive any data from the server for 4 consecutive seconds, `UID1` receives the `onConnectionStateChanged(RECONNCTING, INTERRUPTED)` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T5**: If `UID1` does not receive any data from the server for 10 consecutive seconds after receiving `onConnectionStateChanged(RECONNCTING, INTERRUPTED)`, `UID1` receives the `onConnectionLost` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T6**: If `UID2` does not receive any data from `UID1` for 20 consecutive seconds, the RTC SDK determines that `UID1` is offline. So `UID2` receives the `onUserOffline` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T7**: If `UID1` fails to rejoin the channel for 20 consecutive minutes after receiving `onConnectionStateChanged(RECONNCTING, INTERRUPTED)`, the SDK stops retrying. `UID1` receives the `onConnectionStateChanged(FAILED, JOIN_FAILED)` callback and the user must exit and then rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "In the diagram:"
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T0**: The RTC SDK receives a `Client.join` request from `UID1`."
  }, {
    heading: "disconnection-and-reconnection",
    content: '**T1**: `UID1` successfully joins the channel. `UID1` receives `AgoraRTCClient.on("connection-state-change")` callback reporting "CONNECTING" during joining channel and "CONNECTED" after joining.'
  }, {
    heading: "disconnection-and-reconnection",
    content: '**T2**: Due to the transmission delay between networks, `UID2` observes a delay of about 100 milliseconds for `UID1` to join the channel, and at this point `UID2` receives a `AgoraRTCClient.on("user-joined")` callback.'
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T3**: At some point `UID 1` calls `AgoraRTCClient.publish` to publish the local track."
  }, {
    heading: "disconnection-and-reconnection",
    content: '**T4**: `UID 2` receives the `AgoraRTCClient.on("user-published")` callback indicating that `UID 1` has published the track. `UID 2` can subscribe to `UID 1`\'s track by calling `AgoraRTCClient.subscribe` method.'
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T5**: If the `UID 1` network is interrupted during the communication process, the SDK automatically opens the disconnection and reconnection mechanism."
  }, {
    heading: "disconnection-and-reconnection",
    content: '**T6**: The SDK triggers `AgoraRTCClient.on("connection-state-change")` callback to report "RECONNECTING" during automatic reconnection.'
  }, {
    heading: "disconnection-and-reconnection",
    content: '**T7**: If the Agora server does not receive the audio/video packet from `UID 1` for 10 consecutive seconds, the server determines that `UID 1` no longer publishes audio/video, and `UID 2` will receive `AgoraRTCClient.on("user-unpublished")` callback.'
  }, {
    heading: "disconnection-and-reconnection",
    content: '**T8**: If the Agora server does not receive a heartbeat packet from `UID 1` for 20 consecutive seconds, the server determines that `UID 1` is offline, and `UID 2` will receive the `AgoraRTCClient.on("user-left")` callback.'
  }, {
    heading: "disconnection-and-reconnection",
    content: '**T9**: After successfully re-establishing the connection, `UID 1` receives the `AgoraRTCClient.on("connection-state-change")` callback reporting as "CONNECTED".'
  }, {
    heading: "disconnection-and-reconnection",
    content: '**T10**: `UID 2` receives the `AgoraRTCClient.on("user-joined")` callback again.'
  }, {
    heading: "disconnection-and-reconnection",
    content: "In the diagram:"
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T0**: The RTC SDK receives a `joinChannel` request from `UID1`."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T1**: After 200 ms of calling `joinChannel`, `UID1` joins the channel. At the same time, `UID1` receives `onConnectionStateChanged(CONNECTING, CONNECTING)` callback. After successfully joining the channel, `UID1` receives `onConnectionStateChanged(CONNECTED, JOIN_SUCCESS)` and `onJoinChannelSuccess` callbacks."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T2**: Due to the transmission delay between networks, `UID2` observes a delay of about 100 milliseconds for `UID1` to join the channel, and at this point `UID2` receives a `onUserJoined` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T3**: When `UID1` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T4**: If `UID1` does not receive any data from the server for 4 consecutive seconds, `UID1` receives the `onConnectionStateChanged(RECONNCTING, INTERRUPTED)` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T5**: If `UID1` does not receive any data from the server for 10 consecutive seconds after receiving `onConnectionStateChanged(RECONNCTING, INTERRUPTED)`, `UID1` receives the `onConnectionLost` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T6**: If `UID2` does not receive any data from `UID1` for 20 consecutive seconds, the RTC SDK determines that `UID1` is offline. So `UID2` receives the `onUserOffline` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T7**: If `UID1` fails to rejoin the channel for 20 consecutive minutes after receiving `onConnectionStateChanged(RECONNCTING, INTERRUPTED)`, the SDK stops retrying. `UID1` receives the `onConnectionStateChanged(FAILED, JOIN_FAILED)` callback and the user must exit and then rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "In the diagram:"
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T0**: The RTC SDK receives a `JoinChannel` request from `UID1`."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T1**: After 200 ms of calling `JoinChannel`, `UID1` joins the channel. At the same time, `UID1` receives `FOnConnectionStateChanged(CONNECTING, CONNECTING)` callback. After successfully joining the channel, `UID1` receives `FOnConnectionStateChanged(CONNECTED, JOIN_SUCCESS)` and `FOnJoinChannelSuccess` callbacks."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T2**: Due to the transmission delay between networks, `UID2` observes a delay of about 100 milliseconds for `UID1` to join the channel, and at this point `UID2` receives a `FOnUserJoined` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T3**: When `UID1` client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T4**: If `UID1` does not receive any data from the server for 4 consecutive seconds, `UID1` receives the `FOnConnectionStateChanged(RECONNCTING, INTERRUPTED)` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T5**: If `UID1` does not receive any data from the server for 10 consecutive seconds after receiving `FOnConnectionStateChanged(RECONNCTING, INTERRUPTED)`, `UID1` receives the `FOnConnectionLost` callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T6**: If `UID2` does not receive any data from `UID1` for 20 consecutive seconds, the RTC SDK determines that `UID1` is offline. So `UID2` receives the `FOnUserOffline` callback."
  }, {
    heading: "disconnection-and-reconnection",
    content: "**T7**: If `UID1` fails to rejoin the channel for 20 consecutive minutes after receiving `FOnConnectionStateChanged(RECONNCTING, INTERRUPTED)`, the SDK stops retrying. `UID1` receives the `FOnConnectionStateChanged(FAILED, JOIN_FAILED)` callback and the user must exit and then rejoin the channel."
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart project."
  }, {
    heading: "implement-connection-status-management",
    content: "When the connection state changes, RTC SDK sends an `onConnectionStateChanged` callback. This section shows you how to use the `onConnectionStateChanged` callback to monitor changes in the connection state."
  }, {
    heading: "implement-connection-status-management",
    content: "Use the following code in your `IRtcEngineEventHandler` to log the connection state changes and the reason for the state change."
  }, {
    heading: "implement-connection-status-management",
    content: "The `state` parameter in `onConnectionStateChanged` reports the current connection state. The `reason` parameter indicates why the connection state changed to help you troubleshoot your network. See State description and troubleshooting."
  }, {
    heading: "implement-connection-status-management",
    content: "When the connection status changes, RTC SDK triggers the `onConnectionStateChanged` callback. This section describes how to use the `onConnectionStateChanged` callback to monitor changes in a channel's connection state."
  }, {
    heading: "implement-connection-status-management",
    content: "In your project, open the file with the Agora Engine event handler, and add the `onConnectionStateChanged` callback to the `IRtcEngineEventHandler` instance initialization."
  }, {
    heading: "implement-connection-status-management",
    content: "The `state` parameter in `onConnectionStateChanged` reports the current connection state. The `reason` parameter indicates why the connection state changed to help you troubleshoot your network. See State description and troubleshooting."
  }, {
    heading: "implement-connection-status-management",
    content: "When the connection status changes, RTC SDK triggers the `onConnectionStateChanged` callback. This section describes how to use the `onConnectionStateChanged` callback to monitor changes in a channel's connection state."
  }, {
    heading: "implement-connection-status-management",
    content: "In your project, open the file with the Agora Engine event handler, and add the `onConnectionStateChanged` callback to the `RtcEngineEventHandler` instance initialization."
  }, {
    heading: "implement-connection-status-management",
    content: "The `state` parameter in `onConnectionStateChanged` reports the current connection state. The `reason` parameter indicates why the connection state changed to help you troubleshoot your network. See State description and troubleshooting."
  }, {
    heading: "implement-connection-status-management",
    content: "When the connection status changes, RTC SDK sends a `connectionChangedToState` callback. This section describes how to use the `connectionChangedToState` callback to monitor changes in a channel's connection state."
  }, {
    heading: "implement-connection-status-management",
    content: "In your project, open the file with `AgoraRtcEngineDelegate` and copy the following code into the `AgoraRtcEngineDelegate` initialization process:"
  }, {
    heading: "implement-connection-status-management",
    content: "The code logs the connection state changes and the reason for the state change.\nThe `reason` parameter in `connectionChangedToState` explains why the connection state changed and helps you troubleshoot your network."
  }, {
    heading: "implement-connection-status-management",
    content: "When the connection status changes, RTC SDK sends a `connectionChangedToState` callback. This section describes how to use the `connectionChangedToState` callback to monitor changes in a channel's connection state."
  }, {
    heading: "implement-connection-status-management",
    content: "In your project, open the file with `AgoraRtcEngineDelegate` and copy the following code into the `AgoraRtcEngineDelegate` initialization process:"
  }, {
    heading: "implement-connection-status-management",
    content: "The code logs the connection state changes and the reason for the state change.\nThe `reason` parameter in `connectionChangedToState` explains why the connection state changed and helps you troubleshoot your network."
  }, {
    heading: "implement-connection-status-management",
    content: "When the connection status changes, RTC SDK triggers the `onConnectionStateChanged` callback. This section describes how to use the `onConnectionStateChanged` callback to monitor changes in a channel's connection state."
  }, {
    heading: "implement-connection-status-management",
    content: "In your project, open the file with the Agora Engine event handler, and add the `onConnectionStateChanged` callback to the `IRtcEngineEventHandler` instance initialization."
  }, {
    heading: "implement-connection-status-management",
    content: "The `state` parameter in `onConnectionStateChanged` reports the current connection state. The `reason` parameter indicates why the connection state changed to help you troubleshoot your network. See State description and troubleshooting."
  }, {
    heading: "implement-connection-status-management",
    content: "When the connection status changes, RTC SDK triggers the `OnConnectionStateChanged` callback. This section describes how to use the `OnConnectionStateChanged` callback to monitor changes in a channel's connection state."
  }, {
    heading: "implement-connection-status-management",
    content: "Use the following code in your `IRtcEngineEventHandler` to log the connection state changes and the reason for the state change."
  }, {
    heading: "implement-connection-status-management",
    content: "The `state` parameter in `OnConnectionStateChanged` reports the current connection state. The `reason` parameter indicates why the connection state changed to help you troubleshoot your network. See State description and troubleshooting."
  }, {
    heading: "implement-connection-status-management",
    content: "When the connection status changes, RTC SDK triggers the `onConnectionStateChanged` callback. This section describes how to use the `onConnectionStateChanged` callback to monitor changes in a channel's connection state."
  }, {
    heading: "implement-connection-status-management",
    content: "In your project, open the file with the Agora Engine event handler, and add the `onConnectionStateChanged` callback to the `IRtcEngineEventHandler` instance initialization."
  }, {
    heading: "implement-connection-status-management",
    content: "The `state` parameter in `onConnectionStateChanged` reports the current connection state. The `reason` parameter indicates why the connection state changed to help you troubleshoot your network. See State description and troubleshooting."
  }, {
    heading: "implement-connection-status-management",
    content: "When the connection status changes, RTC SDK triggers the `onConnectionStateChanged` callback. This section describes how to use the `onConnectionStateChanged` callback to monitor changes in a channel's connection state."
  }, {
    heading: "implement-connection-status-management",
    content: "In your project, open the file with the Agora Engine event handler, and add the `onConnectionStateChanged` callback to the `IRtcEngineEventHandler` instance initialization."
  }, {
    heading: "implement-connection-status-management",
    content: "The `state` parameter in `onConnectionStateChanged` reports the current connection state. The `reason` parameter indicates why the connection state changed to help you troubleshoot your network. See State description and troubleshooting."
  }, {
    heading: "implement-connection-status-management",
    content: "When the connection status changes, RTC SDK sends a `FOnConnectionStateChanged` callback. This section describes how to use the `FOnConnectionStateChanged` callback to monitor changes in a channel's connection state."
  }, {
    heading: "implement-connection-status-management",
    content: "Create the `OnConnectionStateChanged` callback function and configure the following parameters:"
  }, {
    heading: "implement-connection-status-management",
    content: "Connection state"
  }, {
    heading: "implement-connection-status-management",
    content: "Description"
  }, {
    heading: "implement-connection-status-management",
    content: "Parameter description"
  }, {
    heading: "implement-connection-status-management",
    content: "`state`"
  }, {
    heading: "implement-connection-status-management",
    content: "Enum"
  }, {
    heading: "implement-connection-status-management",
    content: "The current network connection status."
  }, {
    heading: "implement-connection-status-management",
    content: "`reason`"
  }, {
    heading: "implement-connection-status-management",
    content: "Enum"
  }, {
    heading: "implement-connection-status-management",
    content: "The reason why the network connection state changed. See State description and troubleshooting."
  }, {
    heading: "implement-connection-status-management",
    content: "Add a listener for the `OnConnectionStateChanged` callback as shown below:"
  }, {
    heading: "implement-connection-status-management",
    content: "When the channel connection state changes and the `OnConnectionStateChanged` callback is triggered, it prints information about the state of the monitored network connection. You can read the current connection state and the reason for the state change from the log which helps you troubleshoot the network."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "connection-states",
    content: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
  }, {
    heading: "connection-states",
    content: "Connection state"
  }, {
    heading: "connection-states",
    content: "Description"
  }, {
    heading: "connection-states",
    content: "**Disconnected**"
  }, {
    heading: "connection-states",
    content: "Initial connection state. Usually occurs:- Before calling `joinChannel`.\n- After calling `leaveChannel`."
  }, {
    heading: "connection-states",
    content: "**Connecting**"
  }, {
    heading: "connection-states",
    content: "The transient state after calling `joinChannel`."
  }, {
    heading: "connection-states",
    content: "**Connected**"
  }, {
    heading: "connection-states",
    content: "Occurs after the app successfully joins a channel. The SDK also triggers the `onJoinChannelSuccess` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."
  }, {
    heading: "connection-states",
    content: "**Reconnecting**"
  }, {
    heading: "connection-states",
    content: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the `onRejoinChannelSuccess` callback.\n- If the channel is not rejoined within 10 seconds, the SDK triggers `onConnectionStateChanged(Reconnecting, Lost)`, and continues trying to rejoin the channel."
  }, {
    heading: "connection-states",
    content: "**Failed**"
  }, {
    heading: "connection-states",
    content: "Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call `leaveChannel` to leave the current channel, and then call `joinChannel` to join the channel again."
  }, {
    heading: "state-description-and-troubleshooting",
    content: "The `reason` parameter in `onConnectionStateChanged` describes the reason for the connection state change."
  }, {
    heading: "state-description-and-troubleshooting",
    content: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
  }, {
    heading: "state-description-and-troubleshooting",
    content: "Connection state"
  }, {
    heading: "state-description-and-troubleshooting",
    content: "Description and troubleshooting guide"
  }, {
    heading: "state-description-and-troubleshooting",
    content: "**Disconnected**"
  }, {
    heading: "state-description-and-troubleshooting",
    content: "* `LEAVE_CHANNEL` (5): The user leaves the channel.\n* `INVALID_TOKEN` (8):The token is invalid. Please use a valid token to join the channel."
  }, {
    heading: "state-description-and-troubleshooting",
    content: "**Connecting**"
  }, {
    heading: "state-description-and-troubleshooting",
    content: "`CONNECTING` (0): The app is trying to join the Agora channel."
  }, {
    heading: "state-description-and-troubleshooting",
    content: "**Connected**"
  }, {
    heading: "state-description-and-troubleshooting",
    content: "`JOIN_SUCCESS` (1): The app has successfully joined the channel."
  }, {
    heading: "state-description-and-troubleshooting",
    content: "**Reconnecting**"
  }, {
    heading: "state-description-and-troubleshooting",
    content: "* `INTERRUPTED` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see Disconnection and reconnection.\n* `LOST` (16): The SDK lost connection with the server.\n* `SETTING_PROXY_SERVER` (11): The SDK attempts to reconnect because a proxy server is configured.\n* `CLIENT_IP_ADDRESS_CHANGED` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.\n* `KEEP_ALIVE_TIMEOUT` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.\n* `RENEW_TOKEN` (12): Updating the token has caused a change in the network connection status."
  }, {
    heading: "state-description-and-troubleshooting",
    content: "**Failed**"
  }, {
    heading: "state-description-and-troubleshooting",
    content: "* `BANNED_BY_SERVER` (3): The user is banned by the server.\n* `JOIN_FAILED` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call `leaveChannel` to leave the current channel and then call `joinChannel` to rejoin the channel.\n* `INVALID_APP_ID` (6): The app ID is invalid. Use a valid app ID to join the channel.\n* `INVALID_CHANNEL_NAME` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.\n* `TOKEN_EXPIRED` (9): The token has expired. Obtain a new token from the app server, and then call `joinChannel` to rejoin the channel.\n* `REJECTED_BY_SERVER` (10): The user is banned by the server. May also occurs under the following circumstances:\n  * The app calls `joinChannel` again after the local user has joined the channel.\n  * The app called `startEchoTest`, but did not call `stopEchoTest` to end the echo test."
  }, {
    heading: "api-reference",
    content: "`onConnectionStateChanged`"
  }, {
    heading: "api-reference",
    content: "`getConnectionState`"
  }, {
    heading: "connection-states-1",
    content: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
  }, {
    heading: "connection-states-1",
    content: "Connection state"
  }, {
    heading: "connection-states-1",
    content: "Description"
  }, {
    heading: "connection-states-1",
    content: "**Disconnected**"
  }, {
    heading: "connection-states-1",
    content: "Initial connection state. Usually occurs:- Before calling `joinChannel`.\n- After calling `leaveChannel`."
  }, {
    heading: "connection-states-1",
    content: "**Connecting**"
  }, {
    heading: "connection-states-1",
    content: "The transient state after calling `joinChannel`."
  }, {
    heading: "connection-states-1",
    content: "**Connected**"
  }, {
    heading: "connection-states-1",
    content: "Occurs after the app successfully joins a channel. The SDK also triggers the `onJoinChannelSuccess` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."
  }, {
    heading: "connection-states-1",
    content: "**Reconnecting**"
  }, {
    heading: "connection-states-1",
    content: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the `onRejoinChannelSuccess` callback.\n- If the channel is not rejoined within 10 seconds, the SDK triggers `onConnectionStateChanged(connectionStateReconnecting, connectionChangedLost)`, and continues trying to rejoin the channel."
  }, {
    heading: "connection-states-1",
    content: "**Failed**"
  }, {
    heading: "connection-states-1",
    content: "Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call `leaveChannel` to leave the current channel, and then call `joinChannel` to join the channel again."
  }, {
    heading: "state-description-and-troubleshooting-1",
    content: "The `reason` parameter in `onConnectionStateChanged` describes the reason for the connection state change."
  }, {
    heading: "state-description-and-troubleshooting-1",
    content: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
  }, {
    heading: "state-description-and-troubleshooting-1",
    content: "Connection state"
  }, {
    heading: "state-description-and-troubleshooting-1",
    content: "Description and troubleshooting guide"
  }, {
    heading: "state-description-and-troubleshooting-1",
    content: "**Disconnected**"
  }, {
    heading: "state-description-and-troubleshooting-1",
    content: "* `LeaveChannel` (5): The user leaves the channel.\n* `InvalidToken` (8):The token is invalid. Please use a valid token to join the channel."
  }, {
    heading: "state-description-and-troubleshooting-1",
    content: "**Connecting**"
  }, {
    heading: "state-description-and-troubleshooting-1",
    content: "`Connecting` (0): The app is trying to join the Agora channel."
  }, {
    heading: "state-description-and-troubleshooting-1",
    content: "**Connected**"
  }, {
    heading: "state-description-and-troubleshooting-1",
    content: "`JoinSuccess` (1): The app has successfully joined the channel."
  }, {
    heading: "state-description-and-troubleshooting-1",
    content: "**Reconnecting**"
  }, {
    heading: "state-description-and-troubleshooting-1",
    content: "* `Interrupted` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see Disconnection and reconnection.\n* `Lost` (16): The SDK lost connection with the server.\n* `SettingProxyServer` (11): The SDK attempts to reconnect because a proxy server is configured.\n* `ClientIpAddressChanged` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.\n* `KeepAliveTimeout` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.\n* `RenewToken` (12): Updating the token has caused a change in the network connection status."
  }, {
    heading: "state-description-and-troubleshooting-1",
    content: "**Failed**"
  }, {
    heading: "state-description-and-troubleshooting-1",
    content: "* `BannedByServer` (3): The user is banned by the server.\n* `JoinFailed` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call `leaveChannel` to leave the current channel and then call `joinChannel` to rejoin the channel.\n* `InvalidAppId` (6): The app ID is invalid. Use a valid app ID to join the channel.\n* `InvalidChannelName` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.\n* `TokenExpired` (9): The token has expired. Obtain a new token from the app server, and then call `joinChannel` to rejoin the channel.\n* `RejectedByServer` (10): The user is banned by the server. May also occurs under the following circumstances:\n  * The app calls `joinChannel` again after the local user has joined the channel.\n  * The app called `startEchoTest`, but did not call `stopEchoTest` to end the echo test."
  }, {
    heading: "api-reference-1",
    content: "`onConnectionStateChanged`"
  }, {
    heading: "api-reference-1",
    content: "`getConnectionState`"
  }, {
    heading: "connection-states-2",
    content: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
  }, {
    heading: "connection-states-2",
    content: "Connection state"
  }, {
    heading: "connection-states-2",
    content: "Description"
  }, {
    heading: "connection-states-2",
    content: "**Disconnected**"
  }, {
    heading: "connection-states-2",
    content: "Initial connection state. Usually occurs:- Before calling `joinChannel`.\n- After calling `leaveChannel`."
  }, {
    heading: "connection-states-2",
    content: "**Connecting**"
  }, {
    heading: "connection-states-2",
    content: "The transient state after calling `joinChannel`."
  }, {
    heading: "connection-states-2",
    content: "**Connected**"
  }, {
    heading: "connection-states-2",
    content: "Occurs after the app successfully joins a channel. The SDK also triggers the `onJoinChannelSuccess` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."
  }, {
    heading: "connection-states-2",
    content: "**Reconnecting**"
  }, {
    heading: "connection-states-2",
    content: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the `onRejoinChannelSuccess` callback.\n- If the channel is not rejoined within 10 seconds, the SDK triggers `onConnectionStateChanged(connectionStateReconnecting, connectionChangedLost)`, and continues trying to rejoin the channel."
  }, {
    heading: "connection-states-2",
    content: "**Failed**"
  }, {
    heading: "connection-states-2",
    content: "Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call `leaveChannel` to leave the current channel, and then call `joinChannel` to join the channel again."
  }, {
    heading: "state-description-and-troubleshooting-2",
    content: "The `reason` parameter in `onConnectionStateChanged` describes the reason for the connection state change."
  }, {
    heading: "state-description-and-troubleshooting-2",
    content: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
  }, {
    heading: "state-description-and-troubleshooting-2",
    content: "Connection state"
  }, {
    heading: "state-description-and-troubleshooting-2",
    content: "Description and troubleshooting guide"
  }, {
    heading: "state-description-and-troubleshooting-2",
    content: "**Disconnected**"
  }, {
    heading: "state-description-and-troubleshooting-2",
    content: "* `LeaveChannel` (5): The user leaves the channel.\n* `InvalidToken` (8):The token is invalid. Please use a valid token to join the channel."
  }, {
    heading: "state-description-and-troubleshooting-2",
    content: "**Connecting**"
  }, {
    heading: "state-description-and-troubleshooting-2",
    content: "`Connecting` (0): The app is trying to join the Agora channel."
  }, {
    heading: "state-description-and-troubleshooting-2",
    content: "**Connected**"
  }, {
    heading: "state-description-and-troubleshooting-2",
    content: "`JoinSuccess` (1): The app has successfully joined the channel."
  }, {
    heading: "state-description-and-troubleshooting-2",
    content: "**Reconnecting**"
  }, {
    heading: "state-description-and-troubleshooting-2",
    content: "* `Interrupted` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see Disconnection and reconnection.\n* `Lost` (16): The SDK lost connection with the server.\n* `SettingProxyServer` (11): The SDK attempts to reconnect because a proxy server is configured.\n* `ClientIpAddressChanged` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.\n* `KeepAliveTimeout` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.\n* `RenewToken` (12): Updating the token has caused a change in the network connection status."
  }, {
    heading: "state-description-and-troubleshooting-2",
    content: "**Failed**"
  }, {
    heading: "state-description-and-troubleshooting-2",
    content: "* `BannedByServer` (3): The user is banned by the server.\n* `JoinFailed` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call `leaveChannel` to leave the current channel and then call `joinChannel` to rejoin the channel.\n* `InvalidAppId` (6): The app ID is invalid. Use a valid app ID to join the channel.\n* `InvalidChannelName` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.\n* `TokenExpired` (9): The token has expired. Obtain a new token from the app server, and then call `joinChannel` to rejoin the channel.\n* `RejectedByServer` (10): The user is banned by the server. May also occurs under the following circumstances:\n  * The app calls `joinChannel` again after the local user has joined the channel.\n  * The app called `startEchoTest`, but did not call `stopEchoTest` to end the echo test."
  }, {
    heading: "api-reference-2",
    content: "`onConnectionStateChanged`"
  }, {
    heading: "api-reference-2",
    content: "`getConnectionState`"
  }, {
    heading: "connection-states-3",
    content: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
  }, {
    heading: "connection-states-3",
    content: "Connection state"
  }, {
    heading: "connection-states-3",
    content: "Description"
  }, {
    heading: "connection-states-3",
    content: "**Disconnected**"
  }, {
    heading: "connection-states-3",
    content: "Initial connection state. Usually occurs:- Before calling `joinChannelByToken`.\n- After calling `leaveChannel`."
  }, {
    heading: "connection-states-3",
    content: "**Connecting**"
  }, {
    heading: "connection-states-3",
    content: "The transient state after calling `joinChannelByToken`."
  }, {
    heading: "connection-states-3",
    content: "**Connected**"
  }, {
    heading: "connection-states-3",
    content: "Occurs after the app successfully joins a channel. The SDK also triggers the `didJoinChannel` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."
  }, {
    heading: "connection-states-3",
    content: "**Reconnecting**"
  }, {
    heading: "connection-states-3",
    content: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the `didRejoinChannel` callback.\n- If the channel is not rejoined within 10 seconds, the SDK triggers `connectionChangedToState(Reconnecting, Lost)`, and continues trying to rejoin the channel."
  }, {
    heading: "connection-states-3",
    content: "**Failed**"
  }, {
    heading: "connection-states-3",
    content: "Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call `leaveChannel` to leave the current channel, and then call `joinChannelByToken` to join the channel again."
  }, {
    heading: "state-description-and-troubleshooting-3",
    content: "The `reason` parameter in `connectionChangedToState` describes the reason for the connection state change."
  }, {
    heading: "state-description-and-troubleshooting-3",
    content: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
  }, {
    heading: "state-description-and-troubleshooting-3",
    content: "Connection state"
  }, {
    heading: "state-description-and-troubleshooting-3",
    content: "Description and troubleshooting guide"
  }, {
    heading: "state-description-and-troubleshooting-3",
    content: "**Disconnected**"
  }, {
    heading: "state-description-and-troubleshooting-3",
    content: "* `LeaveChannel` (5): The user leaves the channel.\n* `InvalidToken` (8):The token is invalid. Please use a valid token to join the channel."
  }, {
    heading: "state-description-and-troubleshooting-3",
    content: "**Connecting**"
  }, {
    heading: "state-description-and-troubleshooting-3",
    content: "`Connecting` (0): The app is trying to join the Agora channel."
  }, {
    heading: "state-description-and-troubleshooting-3",
    content: "**Connected**"
  }, {
    heading: "state-description-and-troubleshooting-3",
    content: "`JoinSuccess` (1): The app has successfully joined the channel."
  }, {
    heading: "state-description-and-troubleshooting-3",
    content: "**Reconnecting**"
  }, {
    heading: "state-description-and-troubleshooting-3",
    content: "* `Interrupted` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see Disconnection and reconnection.\n* `Lost` (16): The SDK lost connection with the server.\n* `SettingProxyServer` (11): The SDK attempts to reconnect because a proxy server is configured.\n* `ClientIpAddressChanged` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.\n* `KeepAliveTimeout` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.\n* `RenewToken` (12): Updating the token has caused a change in the network connection status."
  }, {
    heading: "state-description-and-troubleshooting-3",
    content: "**Failed**"
  }, {
    heading: "state-description-and-troubleshooting-3",
    content: "* `BannedByServer` (3): The user is banned by the server.\n* `JoinFailed` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call `leaveChannel` to leave the current channel and then call `joinChannelByToken` to rejoin the channel.\n* `InvalidAppId` (6): The app ID is invalid. Use a valid app ID to join the channel.\n* `InvalidChannelName` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.\n* `TokenExpired` (9): The token has expired. Obtain a new token from the app server, and then call `joinChannelByToken` to rejoin the channel.\n* `RejectedByServer` (10): The user is banned by the server. May also occurs under the following circumstances:\n  * The app calls `joinChannelByToken` again after the local user has joined the channel.\n  * The app called `startEchoTest`, but did not call `stopEchoTest` to end the echo test."
  }, {
    heading: "api-reference-3",
    content: "`rtcEngine(_:connectionChangedTo:reason:)`"
  }, {
    heading: "api-reference-3",
    content: "`getConnectionState`"
  }, {
    heading: "connection-states-4",
    content: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
  }, {
    heading: "connection-states-4",
    content: "Connection state"
  }, {
    heading: "connection-states-4",
    content: "Description"
  }, {
    heading: "connection-states-4",
    content: "**Disconnected**"
  }, {
    heading: "connection-states-4",
    content: "Initial connection state. Usually occurs:- Before calling `joinChannelByToken`.\n- After calling `leaveChannel`."
  }, {
    heading: "connection-states-4",
    content: "**Connecting**"
  }, {
    heading: "connection-states-4",
    content: "The transient state after calling `joinChannelByToken`."
  }, {
    heading: "connection-states-4",
    content: "**Connected**"
  }, {
    heading: "connection-states-4",
    content: "Occurs after the app successfully joins a channel. The SDK also triggers the `didJoinChannel` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."
  }, {
    heading: "connection-states-4",
    content: "**Reconnecting**"
  }, {
    heading: "connection-states-4",
    content: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the `didRejoinChannel` callback.\n- If the channel is not rejoined within 10 seconds, the SDK triggers `connectionChangedToState(Reconnecting, Lost)`, and continues trying to rejoin the channel."
  }, {
    heading: "connection-states-4",
    content: "**Failed**"
  }, {
    heading: "connection-states-4",
    content: "Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call `leaveChannel` to leave the current channel, and then call `joinChannelByToken` to join the channel again."
  }, {
    heading: "state-description-and-troubleshooting-4",
    content: "The `reason` parameter in `connectionChangedToState` describes the reason for the connection state change."
  }, {
    heading: "state-description-and-troubleshooting-4",
    content: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
  }, {
    heading: "state-description-and-troubleshooting-4",
    content: "Connection state"
  }, {
    heading: "state-description-and-troubleshooting-4",
    content: "Description and troubleshooting guide"
  }, {
    heading: "state-description-and-troubleshooting-4",
    content: "**Disconnected**"
  }, {
    heading: "state-description-and-troubleshooting-4",
    content: "* `LeaveChannel` (5): The user leaves the channel.\n* `InvalidToken` (8):The token is invalid. Please use a valid token to join the channel."
  }, {
    heading: "state-description-and-troubleshooting-4",
    content: "**Connecting**"
  }, {
    heading: "state-description-and-troubleshooting-4",
    content: "`Connecting` (0): The app is trying to join the Agora channel."
  }, {
    heading: "state-description-and-troubleshooting-4",
    content: "**Connected**"
  }, {
    heading: "state-description-and-troubleshooting-4",
    content: "`JoinSuccess` (1): The app has successfully joined the channel."
  }, {
    heading: "state-description-and-troubleshooting-4",
    content: "**Reconnecting**"
  }, {
    heading: "state-description-and-troubleshooting-4",
    content: "* `Interrupted` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see Disconnection and reconnection.\n* `Lost` (16): The SDK lost connection with the server.\n* `SettingProxyServer` (11): The SDK attempts to reconnect because a proxy server is configured.\n* `ClientIpAddressChanged` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.\n* `KeepAliveTimeout` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.\n* `RenewToken` (12): Updating the token has caused a change in the network connection status."
  }, {
    heading: "state-description-and-troubleshooting-4",
    content: "**Failed**"
  }, {
    heading: "state-description-and-troubleshooting-4",
    content: "* `BannedByServer` (3): The user is banned by the server.\n* `JoinFailed` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call `leaveChannel` to leave the current channel and then call `joinChannelByToken` to rejoin the channel.\n* `InvalidAppId` (6): The app ID is invalid. Use a valid app ID to join the channel.\n* `InvalidChannelName` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.\n* `TokenExpired` (9): The token has expired. Obtain a new token from the app server, and then call `joinChannelByToken` to rejoin the channel.\n* `RejectedByServer` (10): The user is banned by the server. May also occurs under the following circumstances:\n  * The app calls `joinChannelByToken` again after the local user has joined the channel.\n  * The app called `startEchoTest`, but did not call `stopEchoTest` to end the echo test."
  }, {
    heading: "api-reference-4",
    content: "`rtcEngine(_:connectionChangedTo:reason:)`"
  }, {
    heading: "api-reference-4",
    content: "`getConnectionState`"
  }, {
    heading: "connection-states-5",
    content: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
  }, {
    heading: "connection-states-5",
    content: "Connection state"
  }, {
    heading: "connection-states-5",
    content: "Description"
  }, {
    heading: "connection-states-5",
    content: "**Disconnected**"
  }, {
    heading: "connection-states-5",
    content: "Initial connection state. Usually occurs:- Before calling `joinChannel`.\n- After calling `leaveChannel`."
  }, {
    heading: "connection-states-5",
    content: "**Connecting**"
  }, {
    heading: "connection-states-5",
    content: "The transient state after calling `joinChannel`."
  }, {
    heading: "connection-states-5",
    content: "**Connected**"
  }, {
    heading: "connection-states-5",
    content: "Occurs after the app successfully joins a channel. The SDK also triggers the `onJoinChannelSuccess` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."
  }, {
    heading: "connection-states-5",
    content: "**Reconnecting**"
  }, {
    heading: "connection-states-5",
    content: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the `onRejoinChannelSuccess` callback.\n- If the channel is not rejoined within 10 seconds, the SDK triggers `onConnectionStateChanged(connectionStateReconnecting, connectionChangedLost)`, and continues trying to rejoin the channel."
  }, {
    heading: "connection-states-5",
    content: "**Failed**"
  }, {
    heading: "connection-states-5",
    content: "Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call `leaveChannel` to leave the current channel, and then call `joinChannel` to join the channel again."
  }, {
    heading: "state-description-and-troubleshooting-5",
    content: "The `reason` parameter in `onConnectionStateChanged` describes the reason for the connection state change."
  }, {
    heading: "state-description-and-troubleshooting-5",
    content: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
  }, {
    heading: "state-description-and-troubleshooting-5",
    content: "Connection state"
  }, {
    heading: "state-description-and-troubleshooting-5",
    content: "Description and troubleshooting guide"
  }, {
    heading: "state-description-and-troubleshooting-5",
    content: "**Disconnected**"
  }, {
    heading: "state-description-and-troubleshooting-5",
    content: "* `LeaveChannel` (5): The user leaves the channel.\n* `InvalidToken` (8):The token is invalid. Please use a valid token to join the channel."
  }, {
    heading: "state-description-and-troubleshooting-5",
    content: "**Connecting**"
  }, {
    heading: "state-description-and-troubleshooting-5",
    content: "`Connecting` (0): The app is trying to join the Agora channel."
  }, {
    heading: "state-description-and-troubleshooting-5",
    content: "**Connected**"
  }, {
    heading: "state-description-and-troubleshooting-5",
    content: "`JoinSuccess` (1): The app has successfully joined the channel."
  }, {
    heading: "state-description-and-troubleshooting-5",
    content: "**Reconnecting**"
  }, {
    heading: "state-description-and-troubleshooting-5",
    content: "* `Interrupted` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see Disconnection and reconnection.\n* `Lost` (16): The SDK lost connection with the server.\n* `SettingProxyServer` (11): The SDK attempts to reconnect because a proxy server is configured.\n* `ClientIpAddressChanged` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.\n* `KeepAliveTimeout` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.\n* `RenewToken` (12): Updating the token has caused a change in the network connection status."
  }, {
    heading: "state-description-and-troubleshooting-5",
    content: "**Failed**"
  }, {
    heading: "state-description-and-troubleshooting-5",
    content: "* `BannedByServer` (3): The user is banned by the server.\n* `JoinFailed` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call `leaveChannel` to leave the current channel and then call `joinChannel` to rejoin the channel.\n* `InvalidAppId` (6): The app ID is invalid. Use a valid app ID to join the channel.\n* `InvalidChannelName` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.\n* `TokenExpired` (9): The token has expired. Obtain a new token from the app server, and then call `joinChannel` to rejoin the channel.\n* `RejectedByServer` (10): The user is banned by the server. May also occurs under the following circumstances:\n  * The app calls `joinChannel` again after the local user has joined the channel.\n  * The app called `startEchoTest`, but did not call `stopEchoTest` to end the echo test."
  }, {
    heading: "api-reference-5",
    content: "`onConnectionStateChanged`"
  }, {
    heading: "api-reference-5",
    content: "`getConnectionState`"
  }, {
    heading: "connection-states-6",
    content: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
  }, {
    heading: "connection-states-6",
    content: "Connection state"
  }, {
    heading: "connection-states-6",
    content: "Description"
  }, {
    heading: "connection-states-6",
    content: "**Disconnected**"
  }, {
    heading: "connection-states-6",
    content: "Initial connection state. Usually occurs:- Before calling `JoinChannel`.\n- After calling `LeaveChannel`."
  }, {
    heading: "connection-states-6",
    content: "**Connecting**"
  }, {
    heading: "connection-states-6",
    content: "The transient state after calling `JoinChannel`."
  }, {
    heading: "connection-states-6",
    content: "**Connected**"
  }, {
    heading: "connection-states-6",
    content: "Occurs after the app successfully joins a channel. The SDK also triggers the `OnJoinChannelSuccess` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."
  }, {
    heading: "connection-states-6",
    content: "**Reconnecting**"
  }, {
    heading: "connection-states-6",
    content: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the `OnRejoinChannelSuccess` callback.\n- If the channel is not rejoined within 10 seconds, the SDK triggers `OnConnectionStateChanged(RECONNECTING, LOST)`, and continues trying to rejoin the channel."
  }, {
    heading: "connection-states-6",
    content: "**Failed**"
  }, {
    heading: "connection-states-6",
    content: "Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call `LeaveChannel` to leave the current channel, and then call `JoinChannel` to join the channel again."
  }, {
    heading: "state-description-and-troubleshooting-6",
    content: "The `reason` parameter in `OnConnectionStateChanged` describes the reason for the connection state change."
  }, {
    heading: "state-description-and-troubleshooting-6",
    content: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
  }, {
    heading: "state-description-and-troubleshooting-6",
    content: "Connection state"
  }, {
    heading: "state-description-and-troubleshooting-6",
    content: "Description and troubleshooting guide"
  }, {
    heading: "state-description-and-troubleshooting-6",
    content: "**Disconnected**"
  }, {
    heading: "state-description-and-troubleshooting-6",
    content: "* `LEAVE_CHANNEL` (5): The user leaves the channel.\n* `INVALID_TOKEN` (8):The token is invalid. Please use a valid token to join the channel."
  }, {
    heading: "state-description-and-troubleshooting-6",
    content: "**Connecting**"
  }, {
    heading: "state-description-and-troubleshooting-6",
    content: "`CONNECTING` (0): The app is trying to join the Agora channel."
  }, {
    heading: "state-description-and-troubleshooting-6",
    content: "**Connected**"
  }, {
    heading: "state-description-and-troubleshooting-6",
    content: "`JOIN_SUCCESS` (1): The app has successfully joined the channel."
  }, {
    heading: "state-description-and-troubleshooting-6",
    content: "**Reconnecting**"
  }, {
    heading: "state-description-and-troubleshooting-6",
    content: "* `INTERRUPTED` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see Disconnection and reconnection.\n* `LOST` (16): The SDK lost connection with the server.\n* `SETTING_PROXY_SERVER` (11): The SDK attempts to reconnect because a proxy server is configured.\n* `CLIENT_IP_ADDRESS_CHANGED` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.\n* `KEEP_ALIVE_TIMEOUT` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.\n* `RENEW_TOKEN` (12): Updating the token has caused a change in the network connection status."
  }, {
    heading: "state-description-and-troubleshooting-6",
    content: "**Failed**"
  }, {
    heading: "state-description-and-troubleshooting-6",
    content: "* `BANNED_BY_SERVER` (3): The user is banned by the server.\n* `JOIN_FAILED` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call `LeaveChannel` to leave the current channel and then call `JoinChannel` to rejoin the channel.\n* `INVALID_APP_ID` (6): The app ID is invalid. Use a valid app ID to join the channel.\n* `INVALID_CHANNEL_NAME` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.\n* `TOKEN_EXPIRED` (9): The token has expired. Obtain a new token from the app server, and then call `JoinChannel` to rejoin the channel.\n* `REJECTED_BY_SERVER` (10): The user is banned by the server. May also occurs under the following circumstances:\n  * The app calls `JoinChannel` again after the local user has joined the channel.\n  * The app called `StartEchoTest`, but did not call `StopEchoTest` to end the echo test."
  }, {
    heading: "api-reference-6",
    content: "`OnConnectionStateChanged`"
  }, {
    heading: "api-reference-6",
    content: "`GetConnectionState`"
  }, {
    heading: "connection-states-7",
    content: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
  }, {
    heading: "connection-states-7",
    content: "Connection state"
  }, {
    heading: "connection-states-7",
    content: "Description"
  }, {
    heading: "connection-states-7",
    content: "**Disconnected**"
  }, {
    heading: "connection-states-7",
    content: "Initial connection state. Usually occurs:- Before calling `joinChannel`.\n- After calling `leaveChannel`."
  }, {
    heading: "connection-states-7",
    content: "**Connecting**"
  }, {
    heading: "connection-states-7",
    content: "The transient state after calling `joinChannel`."
  }, {
    heading: "connection-states-7",
    content: "**Connected**"
  }, {
    heading: "connection-states-7",
    content: "Occurs after the app successfully joins a channel. The SDK also triggers the `onJoinChannelSuccess` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."
  }, {
    heading: "connection-states-7",
    content: "**Reconnecting**"
  }, {
    heading: "connection-states-7",
    content: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the `onRejoinChannelSuccess` callback.\n- If the channel is not rejoined within 10 seconds, the SDK triggers `onConnectionStateChanged(Reconnecting, Lost)`, and continues trying to rejoin the channel."
  }, {
    heading: "connection-states-7",
    content: "**Failed**"
  }, {
    heading: "connection-states-7",
    content: "Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call `leaveChannel` to leave the current channel, and then call `joinChannel` to join the channel again."
  }, {
    heading: "state-description-and-troubleshooting-7",
    content: "The `reason` parameter in `onConnectionStateChanged` describes the reason for the connection state change."
  }, {
    heading: "state-description-and-troubleshooting-7",
    content: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
  }, {
    heading: "state-description-and-troubleshooting-7",
    content: "Connection state"
  }, {
    heading: "state-description-and-troubleshooting-7",
    content: "Description and troubleshooting guide"
  }, {
    heading: "state-description-and-troubleshooting-7",
    content: "**Disconnected**"
  }, {
    heading: "state-description-and-troubleshooting-7",
    content: "* `LEAVE_CHANNEL` (5): The user leaves the channel.\n* `INVALID_TOKEN` (8):The token is invalid. Please use a valid token to join the channel."
  }, {
    heading: "state-description-and-troubleshooting-7",
    content: "**Connecting**"
  }, {
    heading: "state-description-and-troubleshooting-7",
    content: "`CONNECTING` (0): The app is trying to join the Agora channel."
  }, {
    heading: "state-description-and-troubleshooting-7",
    content: "**Connected**"
  }, {
    heading: "state-description-and-troubleshooting-7",
    content: "`JOIN_SUCCESS` (1): The app has successfully joined the channel."
  }, {
    heading: "state-description-and-troubleshooting-7",
    content: "**Reconnecting**"
  }, {
    heading: "state-description-and-troubleshooting-7",
    content: "* `INTERRUPTED` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see Disconnection and reconnection.\n* `LOST` (16): The SDK lost connection with the server.\n* `SETTING_PROXY_SERVER` (11): The SDK attempts to reconnect because a proxy server is configured.\n* `CLIENT_IP_ADDRESS_CHANGED` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.\n* `KEEP_ALIVE_TIMEOUT` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.\n* `RENEW_TOKEN` (12): Updating the token has caused a change in the network connection status."
  }, {
    heading: "state-description-and-troubleshooting-7",
    content: "**Failed**"
  }, {
    heading: "state-description-and-troubleshooting-7",
    content: "* `BANNED_BY_SERVER` (3): The user is banned by the server.\n* `JOIN_FAILED` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call `leaveChannel` to leave the current channel and then call `joinChannel` to rejoin the channel.\n* `INVALID_APP_ID` (6): The app ID is invalid. Use a valid app ID to join the channel.\n* `INVALID_CHANNEL_NAME` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.\n* `TOKEN_EXPIRED` (9): The token has expired. Obtain a new token from the app server, and then call `joinChannel` to rejoin the channel.\n* `REJECTED_BY_SERVER` (10): The user is banned by the server. May also occurs under the following circumstances:\n  * The app calls `joinChannel` again after the local user has joined the channel.\n  * The app called `startEchoTest`, but did not call `stopEchoTest` to end the echo test."
  }, {
    heading: "api-reference-7",
    content: "`onConnectionStateChanged`"
  }, {
    heading: "api-reference-7",
    content: "`getConnectionState`"
  }, {
    heading: "connection-states-8",
    content: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
  }, {
    heading: "connection-states-8",
    content: "Connection state"
  }, {
    heading: "connection-states-8",
    content: "Description"
  }, {
    heading: "connection-states-8",
    content: "**DISCONNECTED**"
  }, {
    heading: "connection-states-8",
    content: "Connection disconnected. The SDK will not automatically reconnect while in this state. This state indicates that the user is in one of the following stages:- Has not joined the channel using `join`.\n- Has left the channel using `leave`.\n- Kicked out of the channel by the Agora server or failed to connect."
  }, {
    heading: "connection-states-8",
    content: "**CONNECTING**"
  }, {
    heading: "connection-states-8",
    content: "Joining. The instantaneous state after calling `join`."
  }, {
    heading: "connection-states-8",
    content: "**CONNECTED**"
  }, {
    heading: "connection-states-8",
    content: "Occurs after the app has successfully joined the channel. At this point the user can publish or subscribe to the audio and video in the channel."
  }, {
    heading: "connection-states-8",
    content: "**RECONNECTING**"
  }, {
    heading: "connection-states-8",
    content: "Occurs when the connection is interrupted due to a network disconnection or switch. The SDK automatically tries to reconnect after an interruption."
  }, {
    heading: "connection-states-8",
    content: "**DISCONNECTING**"
  }, {
    heading: "connection-states-8",
    content: "Disconnecting. This is the state when `leave` is called."
  }, {
    heading: "api-reference-8",
    content: '`AgoraRTCClient.on("connection-state-change")`'
  }, {
    heading: "api-reference-8",
    content: '`AgoraRTCClient.on("user-joined")`'
  }, {
    heading: "api-reference-8",
    content: '`AgoraRTCClient.on("user-left")`'
  }, {
    heading: "api-reference-8",
    content: '`AgoraRTCClient.on("user-published")`'
  }, {
    heading: "api-reference-8",
    content: '`AgoraRTCClient.on("user-unpublished")`'
  }, {
    heading: "connection-states-9",
    content: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
  }, {
    heading: "connection-states-9",
    content: "Connection state"
  }, {
    heading: "connection-states-9",
    content: "Description"
  }, {
    heading: "connection-states-9",
    content: "**Disconnected**"
  }, {
    heading: "connection-states-9",
    content: "Initial connection state. Usually occurs:- Before calling `joinChannel`.\n- After calling `leaveChannel`."
  }, {
    heading: "connection-states-9",
    content: "**Connecting**"
  }, {
    heading: "connection-states-9",
    content: "The transient state after calling `joinChannel`."
  }, {
    heading: "connection-states-9",
    content: "**Connected**"
  }, {
    heading: "connection-states-9",
    content: "Occurs after the app successfully joins a channel. The SDK also triggers the `onJoinChannelSuccess` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."
  }, {
    heading: "connection-states-9",
    content: "**Reconnecting**"
  }, {
    heading: "connection-states-9",
    content: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the `onRejoinChannelSuccess` callback.\n- If the channel is not rejoined within 10 seconds, the SDK triggers `onConnectionStateChanged(Reconnecting, Lost)`, and continues trying to rejoin the channel."
  }, {
    heading: "connection-states-9",
    content: "**Failed**"
  }, {
    heading: "connection-states-9",
    content: "Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call `leaveChannel` to leave the current channel, and then call `joinChannel` to join the channel again."
  }, {
    heading: "state-description-and-troubleshooting-8",
    content: "The `reason` parameter in `onConnectionStateChanged` describes the reason for the connection state change."
  }, {
    heading: "state-description-and-troubleshooting-8",
    content: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
  }, {
    heading: "state-description-and-troubleshooting-8",
    content: "Connection state"
  }, {
    heading: "state-description-and-troubleshooting-8",
    content: "Description and troubleshooting guide"
  }, {
    heading: "state-description-and-troubleshooting-8",
    content: "**Disconnected**"
  }, {
    heading: "state-description-and-troubleshooting-8",
    content: "* `LEAVE_CHANNEL` (5): The user leaves the channel.\n* `INVALID_TOKEN` (8):The token is invalid. Please use a valid token to join the channel."
  }, {
    heading: "state-description-and-troubleshooting-8",
    content: "**Connecting**"
  }, {
    heading: "state-description-and-troubleshooting-8",
    content: "`CONNECTING` (0): The app is trying to join the Agora channel."
  }, {
    heading: "state-description-and-troubleshooting-8",
    content: "**Connected**"
  }, {
    heading: "state-description-and-troubleshooting-8",
    content: "`JOIN_SUCCESS` (1): The app has successfully joined the channel."
  }, {
    heading: "state-description-and-troubleshooting-8",
    content: "**Reconnecting**"
  }, {
    heading: "state-description-and-troubleshooting-8",
    content: "* `INTERRUPTED` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see Disconnection and reconnection.\n* `LOST` (16): The SDK lost connection with the server.\n* `SETTING_PROXY_SERVER` (11): The SDK attempts to reconnect because a proxy server is configured.\n* `CLIENT_IP_ADDRESS_CHANGED` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.\n* `KEEP_ALIVE_TIMEOUT` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.\n* `RENEW_TOKEN` (12): Updating the token has caused a change in the network connection status."
  }, {
    heading: "state-description-and-troubleshooting-8",
    content: "**Failed**"
  }, {
    heading: "state-description-and-troubleshooting-8",
    content: "* `BANNED_BY_SERVER` (3): The user is banned by the server.\n* `JOIN_FAILED` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call `leaveChannel` to leave the current channel and then call `joinChannel` to rejoin the channel.\n* `INVALID_APP_ID` (6): The app ID is invalid. Use a valid app ID to join the channel.\n* `INVALID_CHANNEL_NAME` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.\n* `TOKEN_EXPIRED` (9): The token has expired. Obtain a new token from the app server, and then call `joinChannel` to rejoin the channel.\n* `REJECTED_BY_SERVER` (10): The user is banned by the server. May also occurs under the following circumstances:\n  * The app calls `joinChannel` again after the local user has joined the channel.\n  * The app called `startEchoTest`, but did not call `stopEchoTest` to end the echo test."
  }, {
    heading: "api-reference-9",
    content: "`onConnectionStateChanged`"
  }, {
    heading: "api-reference-9",
    content: "`getConnectionState`"
  }, {
    heading: "connection-states-10",
    content: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
  }, {
    heading: "connection-states-10",
    content: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
  }, {
    heading: "connection-states-10",
    content: "Connection state"
  }, {
    heading: "connection-states-10",
    content: "Description"
  }, {
    heading: "connection-states-10",
    content: "**Disconnected**"
  }, {
    heading: "connection-states-10",
    content: "Initial connection state. Usually occurs:- Before calling `JoinChannel`.\n- After calling `LeaveChannel`."
  }, {
    heading: "connection-states-10",
    content: "**Connecting**"
  }, {
    heading: "connection-states-10",
    content: "The transient state after calling `JoinChannel`."
  }, {
    heading: "connection-states-10",
    content: "**Connected**"
  }, {
    heading: "connection-states-10",
    content: "Occurs after the app successfully joins a channel. The SDK also triggers the `FOnJoinChannelSuccess` callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."
  }, {
    heading: "connection-states-10",
    content: "**Reconnecting**"
  }, {
    heading: "connection-states-10",
    content: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption.- If the client successfully rejoins the channel, the SDK triggers the `FOnRejoinChannelSuccess` callback.\n- If the channel is not rejoined within 10 seconds, the SDK triggers `FOnConnectionStateChanged(RECONNECTING, LOST)`, and continues trying to rejoin the channel."
  }, {
    heading: "connection-states-10",
    content: "**Failed**"
  }, {
    heading: "connection-states-10",
    content: "Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call `LeaveChannel` to leave the current channel, and then call `JoinChannel` to join the channel again."
  }, {
    heading: "state-description-and-troubleshooting-9",
    content: "The `reason` parameter in `FOnConnectionStateChanged` describes the reason for the connection state change."
  }, {
    heading: "state-description-and-troubleshooting-9",
    content: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
  }, {
    heading: "state-description-and-troubleshooting-9",
    content: "Connection state"
  }, {
    heading: "state-description-and-troubleshooting-9",
    content: "Description and troubleshooting guide"
  }, {
    heading: "state-description-and-troubleshooting-9",
    content: "**Disconnected**"
  }, {
    heading: "state-description-and-troubleshooting-9",
    content: "* `LEAVE_CHANNEL` (5): The user leaves the channel.\n* `INVALID_TOKEN` (8):The token is invalid. Please use a valid token to join the channel."
  }, {
    heading: "state-description-and-troubleshooting-9",
    content: "**Connecting**"
  }, {
    heading: "state-description-and-troubleshooting-9",
    content: "`CONNECTING` (0): The app is trying to join the Agora channel."
  }, {
    heading: "state-description-and-troubleshooting-9",
    content: "**Connected**"
  }, {
    heading: "state-description-and-troubleshooting-9",
    content: "`JOIN_SUCCESS` (1): The app has successfully joined the channel."
  }, {
    heading: "state-description-and-troubleshooting-9",
    content: "**Reconnecting**"
  }, {
    heading: "state-description-and-troubleshooting-9",
    content: "* `INTERRUPTED` (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see Disconnection and reconnection.\n* `LOST` (16): The SDK lost connection with the server.\n* `SETTING_PROXY_SERVER` (11): The SDK attempts to reconnect because a proxy server is configured.\n* `CLIENT_IP_ADDRESS_CHANGED` (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks.\n* `KEEP_ALIVE_TIMEOUT` (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state.\n* `RENEW_TOKEN` (12): Updating the token has caused a change in the network connection status."
  }, {
    heading: "state-description-and-troubleshooting-9",
    content: "**Failed**"
  }, {
    heading: "state-description-and-troubleshooting-9",
    content: "* `BANNED_BY_SERVER` (3): The user is banned by the server.\n* `JOIN_FAILED` (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call `LeaveChannel` to leave the current channel and then call `JoinChannel` to rejoin the channel.\n* `INVALID_APP_ID` (6): The app ID is invalid. Use a valid app ID to join the channel.\n* `INVALID_CHANNEL_NAME` (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel.\n* `TOKEN_EXPIRED` (9): The token has expired. Obtain a new token from the app server, and then call `JoinChannel` to rejoin the channel.\n* `REJECTED_BY_SERVER` (10): The user is banned by the server. May also occurs under the following circumstances:\n  * The app calls `JoinChannel` again after the local user has joined the channel.\n  * The app called `StartEchoTest`, but did not call `StopEchoTest` to end the echo test."
  }, {
    heading: "api-reference-10",
    content: "`FOnConnectionStateChanged`"
  }, {
    heading: "api-reference-10",
    content: "`GetConnectionState`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "disconnection-and-reconnection",
    content: "Disconnection and reconnection"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-connection-status-management",
    content: "Implement connection status management"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "connection-states",
    content: "Connection states"
  }, {
    id: "state-description-and-troubleshooting",
    content: "State description and troubleshooting"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "connection-states-1",
    content: "Connection states"
  }, {
    id: "state-description-and-troubleshooting-1",
    content: "State description and troubleshooting"
  }, {
    id: "api-reference-1",
    content: "API reference"
  }, {
    id: "connection-states-2",
    content: "Connection states"
  }, {
    id: "state-description-and-troubleshooting-2",
    content: "State description and troubleshooting"
  }, {
    id: "api-reference-2",
    content: "API reference"
  }, {
    id: "connection-states-3",
    content: "Connection states"
  }, {
    id: "state-description-and-troubleshooting-3",
    content: "State description and troubleshooting"
  }, {
    id: "api-reference-3",
    content: "API reference"
  }, {
    id: "connection-states-4",
    content: "Connection states"
  }, {
    id: "state-description-and-troubleshooting-4",
    content: "State description and troubleshooting"
  }, {
    id: "api-reference-4",
    content: "API reference"
  }, {
    id: "connection-states-5",
    content: "Connection states"
  }, {
    id: "state-description-and-troubleshooting-5",
    content: "State description and troubleshooting"
  }, {
    id: "api-reference-5",
    content: "API reference"
  }, {
    id: "connection-states-6",
    content: "Connection states"
  }, {
    id: "state-description-and-troubleshooting-6",
    content: "State description and troubleshooting"
  }, {
    id: "api-reference-6",
    content: "API reference"
  }, {
    id: "connection-states-7",
    content: "Connection states"
  }, {
    id: "state-description-and-troubleshooting-7",
    content: "State description and troubleshooting"
  }, {
    id: "api-reference-7",
    content: "API reference"
  }, {
    id: "connection-states-8",
    content: "Connection states"
  }, {
    id: "api-reference-8",
    content: "API reference"
  }, {
    id: "connection-states-9",
    content: "Connection states"
  }, {
    id: "state-description-and-troubleshooting-8",
    content: "State description and troubleshooting"
  }, {
    id: "api-reference-9",
    content: "API reference"
  }, {
    id: "connection-states-10",
    content: "Connection states"
  }, {
    id: "state-description-and-troubleshooting-9",
    content: "State description and troubleshooting"
  }, {
    id: "api-reference-10",
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
  depth: 5,
  url: "#disconnection-and-reconnection",
  title: _jsx(_Fragment, {
    children: "Disconnection and reconnection"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-connection-status-management",
  title: _jsx(_Fragment, {
    children: "Implement connection status management"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#connection-states",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#state-description-and-troubleshooting",
  title: _jsx(_Fragment, {
    children: "State description and troubleshooting"
  })
}, {
  depth: 3,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#connection-states-1",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#state-description-and-troubleshooting-1",
  title: _jsx(_Fragment, {
    children: "State description and troubleshooting"
  })
}, {
  depth: 3,
  url: "#api-reference-1",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#connection-states-2",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#state-description-and-troubleshooting-2",
  title: _jsx(_Fragment, {
    children: "State description and troubleshooting"
  })
}, {
  depth: 3,
  url: "#api-reference-2",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#connection-states-3",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#state-description-and-troubleshooting-3",
  title: _jsx(_Fragment, {
    children: "State description and troubleshooting"
  })
}, {
  depth: 3,
  url: "#api-reference-3",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#connection-states-4",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#state-description-and-troubleshooting-4",
  title: _jsx(_Fragment, {
    children: "State description and troubleshooting"
  })
}, {
  depth: 3,
  url: "#api-reference-4",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#connection-states-5",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#state-description-and-troubleshooting-5",
  title: _jsx(_Fragment, {
    children: "State description and troubleshooting"
  })
}, {
  depth: 3,
  url: "#api-reference-5",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#connection-states-6",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#state-description-and-troubleshooting-6",
  title: _jsx(_Fragment, {
    children: "State description and troubleshooting"
  })
}, {
  depth: 3,
  url: "#api-reference-6",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#connection-states-7",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#state-description-and-troubleshooting-7",
  title: _jsx(_Fragment, {
    children: "State description and troubleshooting"
  })
}, {
  depth: 3,
  url: "#api-reference-7",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#connection-states-8",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#api-reference-8",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#connection-states-9",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#state-description-and-troubleshooting-8",
  title: _jsx(_Fragment, {
    children: "State description and troubleshooting"
  })
}, {
  depth: 3,
  url: "#api-reference-9",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#connection-states-10",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#state-description-and-troubleshooting-9",
  title: _jsx(_Fragment, {
    children: "State description and troubleshooting"
  })
}, {
  depth: 3,
  url: "#api-reference-10",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h2: "h2",
    h3: "h3",
    h5: "h5",
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
  }, { Tabs, TabsContent, TabsList, TabsTrigger, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
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
    children: [_jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Supported platforms:"
      }), " Web, Android, iOS, macOS, Windows, Unreal Engine, Electron, Flutter, React Native, Unity, and Unreal Blueprint."]
    }), `
`, _jsx(_components.p, {
      children: "In real-time audio and video implementations, the connection state between the app and Agora SDRTN® changes as the client joins or leaves the channel. The connection may also be interrupted due to network or authentication issues."
    }), `
`, _jsx(_components.p, {
      children: "This page describes the various channel connection states, reasons for state changes, and how to handle these changes to better manage your users and troubleshoot network faults."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "The following figure shows the various connection states and how the connection state changes between a user joining and leaving a channel:"
    }), `
`, _jsx(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["web"]',
      showTabs: "false",
      children: _jsxs(_PlatformPanel, {
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/connection-state-main-web.svg",
            alt: "Connection State"
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })
    }), `
`, _jsx(_components.h5, {
      id: "disconnection-and-reconnection",
      children: "Disconnection and reconnection"
    }), `
`, _jsxs(_components.p, {
      children: ["During the communication process, if the user is disconnected due to network problems, the SDK automatically enables the disconnection and reconnection mechanism. The following figure shows the callbacks received by the local user ", _jsx(_components.code, {
        children: "UID1"
      }), " and the remote user ", _jsx(_components.code, {
        children: "UID2"
      }), " when:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "A local user joins the channel"
      }), `
`, _jsx(_components.li, {
        children: "A network exception occurs"
      }), `
`, _jsx(_components.li, {
        children: "The connection is interrupted"
      }), `
`, _jsx(_components.li, {
        children: "The user rejoins the channel"
      }), `
`]
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "android",
      platforms: '["android","ios","macos","windows","unreal","electron","flutter","react-native"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "android"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/connection-state-native.svg",
            alt: "Disconnection Connection"
          })
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
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/connection-state-native.svg",
            alt: "Disconnection Connection"
          })
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
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/connection-state-native.svg",
            alt: "Disconnection Connection"
          })
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
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/connection-state-native.svg",
            alt: "Disconnection Connection"
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unreal",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "unreal"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/connection-state-native.svg",
            alt: "Disconnection Connection"
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "electron",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "electron"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/connection-state-flutter-rn-electron.svg",
            alt: "Disconnection Connection"
          })
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
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/connection-state-flutter-rn-electron.svg",
            alt: "Disconnection Connection"
          })
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
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/connection-state-flutter-rn-electron.svg",
            alt: "Disconnection Connection"
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "The following platform-specific timelines explain the reconnection sequence in detail."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","electron","flutter","ios","macos","react-native","unity","unreal","web","windows","blueprint"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsx(_components.p, {
          children: "In the diagram:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T0"
              }), ": The RTC SDK receives a ", _jsx(_components.code, {
                children: "joinChannel"
              }), " request from ", _jsx(_components.code, {
                children: "UID1"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T1"
              }), ": After 200 ms of calling ", _jsx(_components.code, {
                children: "joinChannel"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " joins the channel. At the same time, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "onConnectionStateChanged(CONNECTING, CONNECTING)"
              }), " callback. After successfully joining the channel, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "onConnectionStateChanged(CONNECTED, JOIN_SUCCESS)"
              }), " and ", _jsx(_components.code, {
                children: "onJoinChannelSuccess"
              }), " callbacks."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T2"
              }), ": Due to the transmission delay between networks, ", _jsx(_components.code, {
                children: "UID2"
              }), " observes a delay of about 100 milliseconds for ", _jsx(_components.code, {
                children: "UID1"
              }), " to join the channel, and at this point ", _jsx(_components.code, {
                children: "UID2"
              }), " receives a ", _jsx(_components.code, {
                children: "onUserJoined"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T3"
              }), ": When ", _jsx(_components.code, {
                children: "UID1"
              }), " client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T4"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 4 consecutive seconds, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionStateChanged(RECONNECTING, INTERRUPTED)"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T5"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 10 consecutive seconds after receiving ", _jsx(_components.code, {
                children: "onConnectionStateChanged(RECONNECTING, INTERRUPTED)"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionLost"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T6"
              }), ": If ", _jsx(_components.code, {
                children: "UID2"
              }), " does not receive any data from ", _jsx(_components.code, {
                children: "UID1"
              }), " for 20 consecutive seconds, the RTC SDK determines that ", _jsx(_components.code, {
                children: "UID1"
              }), " is offline. So ", _jsx(_components.code, {
                children: "UID2"
              }), " receives the ", _jsx(_components.code, {
                children: "onUserOffline"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T7"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " fails to rejoin the channel for 20 consecutive minutes after receiving ", _jsx(_components.code, {
                children: "onConnectionStateChanged(RECONNECTING, INTERRUPTED)"
              }), ", the SDK stops retrying. ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionStateChanged(FAILED, JOIN_FAILED)"
              }), " callback and the user must exit and then rejoin the channel."]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "electron",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "electron"
        }), _jsx(_components.p, {
          children: "In the diagram:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T0"
              }), ": The RTC SDK receives a ", _jsx(_components.code, {
                children: "joinChannel"
              }), " request from ", _jsx(_components.code, {
                children: "UID1"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T1"
              }), ": After 200 ms of calling ", _jsx(_components.code, {
                children: "joinChannel"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " joins the channel. At the same time, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateConnecting, connectionChangedConnecting)"
              }), " callback. After successfully joining the channel, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateConnected, connectionChangedJoinSuccess)"
              }), " and ", _jsx(_components.code, {
                children: "onJoinChannelSuccess"
              }), " callbacks."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T2"
              }), ": Due to the transmission delay between networks, ", _jsx(_components.code, {
                children: "UID2"
              }), " observes a delay of about 100 milliseconds for ", _jsx(_components.code, {
                children: "UID1"
              }), " to join the channel, and at this point ", _jsx(_components.code, {
                children: "UID2"
              }), " receives a ", _jsx(_components.code, {
                children: "onUserJoined"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T3"
              }), ": When ", _jsx(_components.code, {
                children: "UID1"
              }), " client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T4"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 4 consecutive seconds, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T5"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 10 consecutive seconds after receiving ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionLost"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T6"
              }), ": If ", _jsx(_components.code, {
                children: "UID2"
              }), " does not receive any data from ", _jsx(_components.code, {
                children: "UID1"
              }), " for 20 consecutive seconds, the RTC SDK determines that ", _jsx(_components.code, {
                children: "UID1"
              }), " is offline. So ", _jsx(_components.code, {
                children: "UID2"
              }), " receives the ", _jsx(_components.code, {
                children: "onUserOffline"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T7"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " fails to rejoin the channel for 20 consecutive minutes after receiving ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)"
              }), ", the SDK stops retrying. ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateFailed, connectionChangedJoinFailed)"
              }), " callback and the user must exit and then rejoin the channel."]
            }), `
`]
          }), `
`]
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
          children: "In the diagram:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T0"
              }), ": The RTC SDK receives a ", _jsx(_components.code, {
                children: "joinChannel"
              }), " request from ", _jsx(_components.code, {
                children: "UID1"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T1"
              }), ": After 200 ms of calling ", _jsx(_components.code, {
                children: "joinChannel"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " joins the channel. At the same time, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateConnecting, connectionChangedConnecting)"
              }), " callback. After successfully joining the channel, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateConnected, connectionChangedJoinSuccess)"
              }), " and ", _jsx(_components.code, {
                children: "onJoinChannelSuccess"
              }), " callbacks."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T2"
              }), ": Due to the transmission delay between networks, ", _jsx(_components.code, {
                children: "UID2"
              }), " observes a delay of about 100 milliseconds for ", _jsx(_components.code, {
                children: "UID1"
              }), " to join the channel, and at this point ", _jsx(_components.code, {
                children: "UID2"
              }), " receives a ", _jsx(_components.code, {
                children: "onUserJoined"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T3"
              }), ": When ", _jsx(_components.code, {
                children: "UID1"
              }), " client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T4"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 4 consecutive seconds, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T5"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 10 consecutive seconds after receiving ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionLost"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T6"
              }), ": If ", _jsx(_components.code, {
                children: "UID2"
              }), " does not receive any data from ", _jsx(_components.code, {
                children: "UID1"
              }), " for 20 consecutive seconds, the RTC SDK determines that ", _jsx(_components.code, {
                children: "UID1"
              }), " is offline. So ", _jsx(_components.code, {
                children: "UID2"
              }), " receives the ", _jsx(_components.code, {
                children: "onUserOffline"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T7"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " fails to rejoin the channel for 20 consecutive minutes after receiving ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)"
              }), ", the SDK stops retrying. ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateFailed, connectionChangedJoinFailed)"
              }), " callback and the user must exit and then rejoin the channel."]
            }), `
`]
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
        }), _jsx(_components.p, {
          children: "In the diagram:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T0"
              }), ": The RTC SDK receives a ", _jsx(_components.code, {
                children: "joinChannelByToken"
              }), " request from ", _jsx(_components.code, {
                children: "UID1"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T1"
              }), ": After 200 ms of calling ", _jsx(_components.code, {
                children: "joinChannelByToken"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " joins the channel. At the same time, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "connectionChangedToState(Connecting, Connecting)"
              }), " callback. After successfully joining the channel, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "connectionChangedToState(Connected, JoinSuccess)"
              }), " and ", _jsx(_components.code, {
                children: "didJoinChannel"
              }), " callbacks."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T2"
              }), ": Due to the transmission delay between networks, ", _jsx(_components.code, {
                children: "UID2"
              }), " observes a delay of about 100 milliseconds for ", _jsx(_components.code, {
                children: "UID1"
              }), " to join the channel, and at this point ", _jsx(_components.code, {
                children: "UID2"
              }), " receives a ", _jsx(_components.code, {
                children: "didJoinedOfUid"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T3"
              }), ": When ", _jsx(_components.code, {
                children: "UID1"
              }), " client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T4"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 4 consecutive seconds, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "connectionChangedToState(Reconnecting, Interrupted)"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T5"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 10 consecutive seconds after receiving ", _jsx(_components.code, {
                children: "connectionChangedToState(Reconnecting, Interrupted)"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "rtcEngineConnectionDidLost"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T6"
              }), ": If ", _jsx(_components.code, {
                children: "UID2"
              }), " does not receive any data from ", _jsx(_components.code, {
                children: "UID1"
              }), " for 20 consecutive seconds, the RTC SDK determines that ", _jsx(_components.code, {
                children: "UID1"
              }), " is offline. So ", _jsx(_components.code, {
                children: "UID2"
              }), " receives the ", _jsx(_components.code, {
                children: "didOfflineOfUid"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T7"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " fails to rejoin the channel for 20 consecutive minutes after receiving ", _jsx(_components.code, {
                children: "connectionChangedToState(Reconnecting, Interrupted)"
              }), ", the SDK stops retrying. ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "connectionChangedToState(Failed, JoinFailed)"
              }), " callback and the user must exit and then rejoin the channel."]
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
          canonicalPlatform: "web",
          platform: "macos"
        }), _jsx(_components.p, {
          children: "In the diagram:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T0"
              }), ": The RTC SDK receives a ", _jsx(_components.code, {
                children: "joinChannelByToken"
              }), " request from ", _jsx(_components.code, {
                children: "UID1"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T1"
              }), ": After 200 ms of calling ", _jsx(_components.code, {
                children: "joinChannelByToken"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " joins the channel. At the same time, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "connectionChangedToState(Connecting, Connecting)"
              }), " callback. After successfully joining the channel, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "connectionChangedToState(Connected, JoinSuccess)"
              }), " and ", _jsx(_components.code, {
                children: "didJoinChannel"
              }), " callbacks."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T2"
              }), ": Due to the transmission delay between networks, ", _jsx(_components.code, {
                children: "UID2"
              }), " observes a delay of about 100 milliseconds for ", _jsx(_components.code, {
                children: "UID1"
              }), " to join the channel, and at this point ", _jsx(_components.code, {
                children: "UID2"
              }), " receives a ", _jsx(_components.code, {
                children: "didJoinedOfUid"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T3"
              }), ": When ", _jsx(_components.code, {
                children: "UID1"
              }), " client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T4"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 4 consecutive seconds, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "connectionChangedToState(Reconnecting, Interrupted)"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T5"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 10 consecutive seconds after receiving ", _jsx(_components.code, {
                children: "connectionChangedToState(Reconnecting, Interrupted)"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "rtcEngineConnectionDidLost"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T6"
              }), ": If ", _jsx(_components.code, {
                children: "UID2"
              }), " does not receive any data from ", _jsx(_components.code, {
                children: "UID1"
              }), " for 20 consecutive seconds, the RTC SDK determines that ", _jsx(_components.code, {
                children: "UID1"
              }), " is offline. So ", _jsx(_components.code, {
                children: "UID2"
              }), " receives the ", _jsx(_components.code, {
                children: "didOfflineOfUid"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T7"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " fails to rejoin the channel for 20 consecutive minutes after receiving ", _jsx(_components.code, {
                children: "connectionChangedToState(Reconnecting, Interrupted)"
              }), ", the SDK stops retrying. ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "connectionChangedToState(Failed, JoinFailed)"
              }), " callback and the user must exit and then rejoin the channel."]
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
          canonicalPlatform: "web",
          platform: "react-native"
        }), _jsx(_components.p, {
          children: "In the diagram:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T0"
              }), ": The RTC SDK receives a ", _jsx(_components.code, {
                children: "joinChannel"
              }), " request from ", _jsx(_components.code, {
                children: "UID1"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T1"
              }), ": After 200 ms of calling ", _jsx(_components.code, {
                children: "joinChannel"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " joins the channel. At the same time, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateConnecting, connectionChangedConnecting)"
              }), " callback. After successfully joining the channel, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateConnected, connectionChangedJoinSuccess)"
              }), " and ", _jsx(_components.code, {
                children: "onJoinChannelSuccess"
              }), " callbacks."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T2"
              }), ": Due to the transmission delay between networks, ", _jsx(_components.code, {
                children: "UID2"
              }), " observes a delay of about 100 milliseconds for ", _jsx(_components.code, {
                children: "UID1"
              }), " to join the channel, and at this point ", _jsx(_components.code, {
                children: "UID2"
              }), " receives a ", _jsx(_components.code, {
                children: "onUserJoined"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T3"
              }), ": When ", _jsx(_components.code, {
                children: "UID1"
              }), " client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T4"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 4 consecutive seconds, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T5"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 10 consecutive seconds after receiving ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionLost"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T6"
              }), ": If ", _jsx(_components.code, {
                children: "UID2"
              }), " does not receive any data from ", _jsx(_components.code, {
                children: "UID1"
              }), " for 20 consecutive seconds, the RTC SDK determines that ", _jsx(_components.code, {
                children: "UID1"
              }), " is offline. So ", _jsx(_components.code, {
                children: "UID2"
              }), " receives the ", _jsx(_components.code, {
                children: "onUserOffline"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T7"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " fails to rejoin the channel for 20 consecutive minutes after receiving ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateReconnecting, connectionChangedInterrupted)"
              }), ", the SDK stops retrying. ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionStateChanged(connectionStateFailed, connectionChangedJoinFailed)"
              }), " callback and the user must exit and then rejoin the channel."]
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
          canonicalPlatform: "web",
          platform: "unity"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/connection-state-unity.svg",
            alt: "Disconnection Connection"
          })
        }), _jsx(_components.p, {
          children: "In the diagram:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T0"
              }), ": The RTC SDK receives a ", _jsx(_components.code, {
                children: "JoinChannel"
              }), " request from ", _jsx(_components.code, {
                children: "UID1"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T1"
              }), ": After 200 ms of calling ", _jsx(_components.code, {
                children: "JoinChannel"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " joins the channel. At the same time, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "OnConnectionStateChanged(CONNECTION_STATE_CONNECTING, CONNECTION_CHANGED_CONNECTING)"
              }), " callback. After successfully joining the channel, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "OnConnectionStateChanged(CONNECTION_STATE_CONNECTING, CONNECTION_CHANGED_JOIN_SUCCESS)"
              }), " and ", _jsx(_components.code, {
                children: "OnJoinChannelSuccess"
              }), " callbacks."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T2"
              }), ": Due to the transmission delay between networks, ", _jsx(_components.code, {
                children: "UID2"
              }), " observes a delay of about 100 milliseconds for ", _jsx(_components.code, {
                children: "UID1"
              }), " to join the channel, and at this point ", _jsx(_components.code, {
                children: "UID2"
              }), " receives a ", _jsx(_components.code, {
                children: "OnUserJoined"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T3"
              }), ": When ", _jsx(_components.code, {
                children: "UID1"
              }), " client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T4"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 4 consecutive seconds, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "OnConnectionStateChanged(CONNECTION_STATE_RECONNECTING, CONNECTION_CHANGED_INTERRUPTED)"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T5"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 10 consecutive seconds after receiving ", _jsx(_components.code, {
                children: "OnConnectionStateChanged(CONNECTION_STATE_RECONNECTING, CONNECTION_CHANGED_INTERRUPTED)"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "OnConnectionLost"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T6"
              }), ": If ", _jsx(_components.code, {
                children: "UID2"
              }), " does not receive any data from ", _jsx(_components.code, {
                children: "UID1"
              }), " for 20 consecutive seconds, the RTC SDK determines that ", _jsx(_components.code, {
                children: "UID1"
              }), " is offline. So ", _jsx(_components.code, {
                children: "UID2"
              }), " receives the ", _jsx(_components.code, {
                children: "onUserOffline"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T7"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " fails to rejoin the channel for 20 consecutive minutes after receiving ", _jsx(_components.code, {
                children: "OnConnectionStateChanged(CONNECTION_STATE_RECONNECTING, CONNECTION_CHANGED_INTERRUPTED)"
              }), ", the SDK stops retrying. ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "OnConnectionStateChanged(CONNECTION_STATE_FAILED, CONNECTION_CHANGED_JOIN_FAILED)"
              }), " callback and the user must exit and then rejoin the channel."]
            }), `
`]
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
        }), _jsx(_components.p, {
          children: "In the diagram:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T0"
              }), ": The RTC SDK receives a ", _jsx(_components.code, {
                children: "joinChannel"
              }), " request from ", _jsx(_components.code, {
                children: "UID1"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T1"
              }), ": After 200 ms of calling ", _jsx(_components.code, {
                children: "joinChannel"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " joins the channel. At the same time, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "onConnectionStateChanged(CONNECTING, CONNECTING)"
              }), " callback. After successfully joining the channel, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "onConnectionStateChanged(CONNECTED, JOIN_SUCCESS)"
              }), " and ", _jsx(_components.code, {
                children: "onJoinChannelSuccess"
              }), " callbacks."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T2"
              }), ": Due to the transmission delay between networks, ", _jsx(_components.code, {
                children: "UID2"
              }), " observes a delay of about 100 milliseconds for ", _jsx(_components.code, {
                children: "UID1"
              }), " to join the channel, and at this point ", _jsx(_components.code, {
                children: "UID2"
              }), " receives a ", _jsx(_components.code, {
                children: "onUserJoined"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T3"
              }), ": When ", _jsx(_components.code, {
                children: "UID1"
              }), " client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T4"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 4 consecutive seconds, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionStateChanged(RECONNCTING, INTERRUPTED)"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T5"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 10 consecutive seconds after receiving ", _jsx(_components.code, {
                children: "onConnectionStateChanged(RECONNCTING, INTERRUPTED)"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionLost"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T6"
              }), ": If ", _jsx(_components.code, {
                children: "UID2"
              }), " does not receive any data from ", _jsx(_components.code, {
                children: "UID1"
              }), " for 20 consecutive seconds, the RTC SDK determines that ", _jsx(_components.code, {
                children: "UID1"
              }), " is offline. So ", _jsx(_components.code, {
                children: "UID2"
              }), " receives the ", _jsx(_components.code, {
                children: "onUserOffline"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T7"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " fails to rejoin the channel for 20 consecutive minutes after receiving ", _jsx(_components.code, {
                children: "onConnectionStateChanged(RECONNCTING, INTERRUPTED)"
              }), ", the SDK stops retrying. ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionStateChanged(FAILED, JOIN_FAILED)"
              }), " callback and the user must exit and then rejoin the channel."]
            }), `
`]
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
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/connection-state-web.svg",
            alt: "Disconnection Connection"
          })
        }), _jsx(_components.p, {
          children: "In the diagram:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T0"
              }), ": The RTC SDK receives a ", _jsx(_components.code, {
                children: "Client.join"
              }), " request from ", _jsx(_components.code, {
                children: "UID1"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T1"
              }), ": ", _jsx(_components.code, {
                children: "UID1"
              }), " successfully joins the channel. ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: 'AgoraRTCClient.on("connection-state-change")'
              }), ' callback reporting "CONNECTING" during joining channel and "CONNECTED" after joining.']
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T2"
              }), ": Due to the transmission delay between networks, ", _jsx(_components.code, {
                children: "UID2"
              }), " observes a delay of about 100 milliseconds for ", _jsx(_components.code, {
                children: "UID1"
              }), " to join the channel, and at this point ", _jsx(_components.code, {
                children: "UID2"
              }), " receives a ", _jsx(_components.code, {
                children: 'AgoraRTCClient.on("user-joined")'
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T3"
              }), ": At some point ", _jsx(_components.code, {
                children: "UID 1"
              }), " calls ", _jsx(_components.code, {
                children: "AgoraRTCClient.publish"
              }), " to publish the local track."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T4"
              }), ": ", _jsx(_components.code, {
                children: "UID 2"
              }), " receives the ", _jsx(_components.code, {
                children: 'AgoraRTCClient.on("user-published")'
              }), " callback indicating that ", _jsx(_components.code, {
                children: "UID 1"
              }), " has published the track. ", _jsx(_components.code, {
                children: "UID 2"
              }), " can subscribe to ", _jsx(_components.code, {
                children: "UID 1"
              }), "'s track by calling ", _jsx(_components.code, {
                children: "AgoraRTCClient.subscribe"
              }), " method."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T5"
              }), ": If the ", _jsx(_components.code, {
                children: "UID 1"
              }), " network is interrupted during the communication process, the SDK automatically opens the disconnection and reconnection mechanism."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T6"
              }), ": The SDK triggers ", _jsx(_components.code, {
                children: 'AgoraRTCClient.on("connection-state-change")'
              }), ' callback to report "RECONNECTING" during automatic reconnection.']
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T7"
              }), ": If the Agora server does not receive the audio/video packet from ", _jsx(_components.code, {
                children: "UID 1"
              }), " for 10 consecutive seconds, the server determines that ", _jsx(_components.code, {
                children: "UID 1"
              }), " no longer publishes audio/video, and ", _jsx(_components.code, {
                children: "UID 2"
              }), " will receive ", _jsx(_components.code, {
                children: 'AgoraRTCClient.on("user-unpublished")'
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T8"
              }), ": If the Agora server does not receive a heartbeat packet from ", _jsx(_components.code, {
                children: "UID 1"
              }), " for 20 consecutive seconds, the server determines that ", _jsx(_components.code, {
                children: "UID 1"
              }), " is offline, and ", _jsx(_components.code, {
                children: "UID 2"
              }), " will receive the ", _jsx(_components.code, {
                children: 'AgoraRTCClient.on("user-left")'
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T9"
              }), ": After successfully re-establishing the connection, ", _jsx(_components.code, {
                children: "UID 1"
              }), " receives the ", _jsx(_components.code, {
                children: 'AgoraRTCClient.on("connection-state-change")'
              }), ' callback reporting as "CONNECTED".']
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T10"
              }), ": ", _jsx(_components.code, {
                children: "UID 2"
              }), " receives the ", _jsx(_components.code, {
                children: 'AgoraRTCClient.on("user-joined")'
              }), " callback again."]
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
          canonicalPlatform: "web",
          platform: "windows"
        }), _jsx(_components.p, {
          children: "In the diagram:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T0"
              }), ": The RTC SDK receives a ", _jsx(_components.code, {
                children: "joinChannel"
              }), " request from ", _jsx(_components.code, {
                children: "UID1"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T1"
              }), ": After 200 ms of calling ", _jsx(_components.code, {
                children: "joinChannel"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " joins the channel. At the same time, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "onConnectionStateChanged(CONNECTING, CONNECTING)"
              }), " callback. After successfully joining the channel, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "onConnectionStateChanged(CONNECTED, JOIN_SUCCESS)"
              }), " and ", _jsx(_components.code, {
                children: "onJoinChannelSuccess"
              }), " callbacks."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T2"
              }), ": Due to the transmission delay between networks, ", _jsx(_components.code, {
                children: "UID2"
              }), " observes a delay of about 100 milliseconds for ", _jsx(_components.code, {
                children: "UID1"
              }), " to join the channel, and at this point ", _jsx(_components.code, {
                children: "UID2"
              }), " receives a ", _jsx(_components.code, {
                children: "onUserJoined"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T3"
              }), ": When ", _jsx(_components.code, {
                children: "UID1"
              }), " client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T4"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 4 consecutive seconds, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionStateChanged(RECONNCTING, INTERRUPTED)"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T5"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 10 consecutive seconds after receiving ", _jsx(_components.code, {
                children: "onConnectionStateChanged(RECONNCTING, INTERRUPTED)"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionLost"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T6"
              }), ": If ", _jsx(_components.code, {
                children: "UID2"
              }), " does not receive any data from ", _jsx(_components.code, {
                children: "UID1"
              }), " for 20 consecutive seconds, the RTC SDK determines that ", _jsx(_components.code, {
                children: "UID1"
              }), " is offline. So ", _jsx(_components.code, {
                children: "UID2"
              }), " receives the ", _jsx(_components.code, {
                children: "onUserOffline"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T7"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " fails to rejoin the channel for 20 consecutive minutes after receiving ", _jsx(_components.code, {
                children: "onConnectionStateChanged(RECONNCTING, INTERRUPTED)"
              }), ", the SDK stops retrying. ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "onConnectionStateChanged(FAILED, JOIN_FAILED)"
              }), " callback and the user must exit and then rejoin the channel."]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "blueprint",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "blueprint"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/connection-state-blueprint.svg",
            alt: "Disconnection Connection"
          })
        }), _jsx(_components.p, {
          children: "In the diagram:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T0"
              }), ": The RTC SDK receives a ", _jsx(_components.code, {
                children: "JoinChannel"
              }), " request from ", _jsx(_components.code, {
                children: "UID1"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T1"
              }), ": After 200 ms of calling ", _jsx(_components.code, {
                children: "JoinChannel"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " joins the channel. At the same time, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "FOnConnectionStateChanged(CONNECTING, CONNECTING)"
              }), " callback. After successfully joining the channel, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives ", _jsx(_components.code, {
                children: "FOnConnectionStateChanged(CONNECTED, JOIN_SUCCESS)"
              }), " and ", _jsx(_components.code, {
                children: "FOnJoinChannelSuccess"
              }), " callbacks."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T2"
              }), ": Due to the transmission delay between networks, ", _jsx(_components.code, {
                children: "UID2"
              }), " observes a delay of about 100 milliseconds for ", _jsx(_components.code, {
                children: "UID1"
              }), " to join the channel, and at this point ", _jsx(_components.code, {
                children: "UID2"
              }), " receives a ", _jsx(_components.code, {
                children: "FOnUserJoined"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T3"
              }), ": When ", _jsx(_components.code, {
                children: "UID1"
              }), " client's connection deteriorates due to a network issue or some other reason, the RTC SDK automatically tries to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T4"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 4 consecutive seconds, ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "FOnConnectionStateChanged(RECONNCTING, INTERRUPTED)"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T5"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " does not receive any data from the server for 10 consecutive seconds after receiving ", _jsx(_components.code, {
                children: "FOnConnectionStateChanged(RECONNCTING, INTERRUPTED)"
              }), ", ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "FOnConnectionLost"
              }), " callback. Meanwhile, the RTC SDK continues to try to rejoin the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T6"
              }), ": If ", _jsx(_components.code, {
                children: "UID2"
              }), " does not receive any data from ", _jsx(_components.code, {
                children: "UID1"
              }), " for 20 consecutive seconds, the RTC SDK determines that ", _jsx(_components.code, {
                children: "UID1"
              }), " is offline. So ", _jsx(_components.code, {
                children: "UID2"
              }), " receives the ", _jsx(_components.code, {
                children: "FOnUserOffline"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "T7"
              }), ": If ", _jsx(_components.code, {
                children: "UID1"
              }), " fails to rejoin the channel for 20 consecutive minutes after receiving ", _jsx(_components.code, {
                children: "FOnConnectionStateChanged(RECONNCTING, INTERRUPTED)"
              }), ", the SDK stops retrying. ", _jsx(_components.code, {
                children: "UID1"
              }), " receives the ", _jsx(_components.code, {
                children: "FOnConnectionStateChanged(FAILED, JOIN_FAILED)"
              }), " callback and the user must exit and then rejoin the channel."]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.p, {
      children: ["Ensure that you have implemented the ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/get-started-sdk",
        children: "SDK quickstart"
      }), " project."]
    }), `
`, _jsx(_components.h2, {
      id: "implement-connection-status-management",
      children: "Implement connection status management"
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "android",
      platforms: '["android","electron","flutter","ios","macos","react-native","unity","unreal","windows","blueprint"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "android"
        }), _jsxs(_components.p, {
          children: ["When the connection state changes, RTC SDK sends an ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback. This section shows you how to use the ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback to monitor changes in the connection state."]
        }), _jsxs(_components.p, {
          children: ["Use the following code in your ", _jsx(_components.code, {
            children: "IRtcEngineEventHandler"
          }), " to log the connection state changes and the reason for the state change."]
        }), _jsxs(Tabs, {
          defaultValue: "java",
          children: [_jsxs(TabsList, {
            children: [_jsx(TabsTrigger, {
              value: "java",
              children: "Java"
            }), _jsx(TabsTrigger, {
              value: "kotlin",
              children: "Kotlin"
            })]
          }), _jsx(TabsContent, {
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
                      children: " void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " onConnectionStateChanged"
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
                      children: " state, "
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
                      children: " reason) {"
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "onConnectionStateChanged"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(state, reason);"
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
                      children: "i"
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
                      children: '"onConnectionStateChanged->"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " +"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' ", state->"'
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
                      children: " state"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "        +"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' ", reason->"'
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
                      children: " reason);"
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
            })
          }), _jsx(TabsContent, {
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
                      children: " onConnectionStateChanged"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(state: "
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
                      children: ", reason: "
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "onConnectionStateChanged"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(state, reason)"
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
                      children: "i"
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
                      children: '"onConnectionStateChanged->, state->'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "$state"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ", reason->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "$reason"
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
            })
          })]
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "state"
          }), " parameter in ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " reports the current connection state. The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter indicates why the connection state changed to help you troubleshoot your network. See ", _jsx(_components.a, {
            href: "#state-description-and-troubleshooting",
            children: "State description and troubleshooting"
          }), "."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "electron",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "electron"
        }), _jsxs(_components.p, {
          children: ["When the connection status changes, RTC SDK triggers the ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback. This section describes how to use the ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback to monitor changes in a channel's connection state."]
        }), _jsxs(_components.p, {
          children: ["In your project, open the file with the Agora Engine event handler, and add the ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback to the ", _jsx(_components.code, {
            children: "IRtcEngineEventHandler"
          }), " instance initialization."]
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "state"
          }), " parameter in ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " reports the current connection state. The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter indicates why the connection state changed to help you troubleshoot your network. See ", _jsx(_components.a, {
            href: "#state-description-and-troubleshooting",
            children: "State description and troubleshooting"
          }), "."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "flutter",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "flutter"
        }), _jsxs(_components.p, {
          children: ["When the connection status changes, RTC SDK triggers the ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback. This section describes how to use the ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback to monitor changes in a channel's connection state."]
        }), _jsxs(_components.p, {
          children: ["In your project, open the file with the Agora Engine event handler, and add the ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback to the ", _jsx(_components.code, {
            children: "RtcEngineEventHandler"
          }), " instance initialization."]
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "state"
          }), " parameter in ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " reports the current connection state. The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter indicates why the connection state changed to help you troubleshoot your network. See ", _jsx(_components.a, {
            href: "#state-description-and-troubleshooting",
            children: "State description and troubleshooting"
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
        }), _jsxs(_components.p, {
          children: ["When the connection status changes, RTC SDK sends a ", _jsx(_components.code, {
            children: "connectionChangedToState"
          }), " callback. This section describes how to use the ", _jsx(_components.code, {
            children: "connectionChangedToState"
          }), " callback to monitor changes in a channel's connection state."]
        }), _jsxs(_components.p, {
          children: ["In your project, open the file with ", _jsx(_components.code, {
            children: "AgoraRtcEngineDelegate"
          }), " and copy the following code into the ", _jsx(_components.code, {
            children: "AgoraRtcEngineDelegate"
          }), " initialization process:"]
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
                  children: "connectionChangedTo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " state: AgoraConnectionState, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "reason"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": AgoraConnectionChangedReason) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    LogUtils."
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
                  children: '"Connection state changed: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\(state)"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " \\(reason)"
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
        }), _jsxs(_components.p, {
          children: [`The code logs the connection state changes and the reason for the state change.
The `, _jsx(_components.code, {
            children: "reason"
          }), " parameter in ", _jsx(_components.code, {
            children: "connectionChangedToState"
          }), " explains why the connection state changed and helps you troubleshoot your network."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "macos",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "macos"
        }), _jsxs(_components.p, {
          children: ["When the connection status changes, RTC SDK sends a ", _jsx(_components.code, {
            children: "connectionChangedToState"
          }), " callback. This section describes how to use the ", _jsx(_components.code, {
            children: "connectionChangedToState"
          }), " callback to monitor changes in a channel's connection state."]
        }), _jsxs(_components.p, {
          children: ["In your project, open the file with ", _jsx(_components.code, {
            children: "AgoraRtcEngineDelegate"
          }), " and copy the following code into the ", _jsx(_components.code, {
            children: "AgoraRtcEngineDelegate"
          }), " initialization process:"]
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
                  children: "connectionChangedTo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " state: AgoraConnectionState, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "reason"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": AgoraConnectionChangedReason) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    LogUtils."
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
                  children: '"Connection state changed: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\(state)"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " \\(reason)"
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
        }), _jsxs(_components.p, {
          children: [`The code logs the connection state changes and the reason for the state change.
The `, _jsx(_components.code, {
            children: "reason"
          }), " parameter in ", _jsx(_components.code, {
            children: "connectionChangedToState"
          }), " explains why the connection state changed and helps you troubleshoot your network."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "react-native",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "react-native"
        }), _jsxs(_components.p, {
          children: ["When the connection status changes, RTC SDK triggers the ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback. This section describes how to use the ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback to monitor changes in a channel's connection state."]
        }), _jsxs(_components.p, {
          children: ["In your project, open the file with the Agora Engine event handler, and add the ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback to the ", _jsx(_components.code, {
            children: "IRtcEngineEventHandler"
          }), " instance initialization."]
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "state"
          }), " parameter in ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " reports the current connection state. The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter indicates why the connection state changed to help you troubleshoot your network. See ", _jsx(_components.a, {
            href: "#state-description-and-troubleshooting",
            children: "State description and troubleshooting"
          }), "."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unity",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "unity"
        }), _jsxs(_components.p, {
          children: ["When the connection status changes, RTC SDK triggers the ", _jsx(_components.code, {
            children: "OnConnectionStateChanged"
          }), " callback. This section describes how to use the ", _jsx(_components.code, {
            children: "OnConnectionStateChanged"
          }), " callback to monitor changes in a channel's connection state."]
        }), _jsxs(_components.p, {
          children: ["Use the following code in your ", _jsx(_components.code, {
            children: "IRtcEngineEventHandler"
          }), " to log the connection state changes and the reason for the state change."]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "internal"
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
                  children: " UserEventHandler"
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
                  children: "    ..."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // Callback for channel connection status change"
                })
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
                  children: " override"
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
                  children: " OnConnectionStateChanged"
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
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "CONNECTION_STATE_TYPE"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " state"
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
                  children: "        CONNECTION_CHANGED_REASON_TYPE"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " reason"
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        _helloVideoTokenAgora._state "
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
                  children: " state;"
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
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "state"
          }), " parameter in ", _jsx(_components.code, {
            children: "OnConnectionStateChanged"
          }), " reports the current connection state. The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter indicates why the connection state changed to help you troubleshoot your network. See ", _jsx(_components.a, {
            href: "#state-description-and-troubleshooting",
            children: "State description and troubleshooting"
          }), "."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unreal",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "unreal"
        }), _jsxs(_components.p, {
          children: ["When the connection status changes, RTC SDK triggers the ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback. This section describes how to use the ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback to monitor changes in a channel's connection state."]
        }), _jsxs(_components.p, {
          children: ["In your project, open the file with the Agora Engine event handler, and add the ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback to the ", _jsx(_components.code, {
            children: "IRtcEngineEventHandler"
          }), " instance initialization."]
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "state"
          }), " parameter in ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " reports the current connection state. The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter indicates why the connection state changed to help you troubleshoot your network. See ", _jsx(_components.a, {
            href: "#state-description-and-troubleshooting",
            children: "State description and troubleshooting"
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
        }), _jsxs(_components.p, {
          children: ["When the connection status changes, RTC SDK triggers the ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback. This section describes how to use the ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback to monitor changes in a channel's connection state."]
        }), _jsxs(_components.p, {
          children: ["In your project, open the file with the Agora Engine event handler, and add the ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " callback to the ", _jsx(_components.code, {
            children: "IRtcEngineEventHandler"
          }), " instance initialization."]
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "state"
          }), " parameter in ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " reports the current connection state. The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter indicates why the connection state changed to help you troubleshoot your network. See ", _jsx(_components.a, {
            href: "#state-description-and-troubleshooting",
            children: "State description and troubleshooting"
          }), "."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "blueprint",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "blueprint"
        }), _jsxs(_components.p, {
          children: ["When the connection status changes, RTC SDK sends a ", _jsx(_components.code, {
            children: "FOnConnectionStateChanged"
          }), " callback. This section describes how to use the ", _jsx(_components.code, {
            children: "FOnConnectionStateChanged"
          }), " callback to monitor changes in a channel's connection state."]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Create the ", _jsx(_components.code, {
                children: "OnConnectionStateChanged"
              }), " callback function and configure the following parameters:"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Connection state"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Description"
                  }), _jsx(_components.th, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Parameter description"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.code, {
                      children: "state"
                    })
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Enum"
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "The current network connection status."
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: _jsx(_components.code, {
                      children: "reason"
                    })
                  }), _jsx(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: "Enum"
                  }), _jsxs(_components.td, {
                    style: {
                      textAlign: "left"
                    },
                    children: ["The reason why the network connection state changed. See ", _jsx(_components.a, {
                      href: "#state-description-and-troubleshooting",
                      children: "State description and troubleshooting"
                    }), "."]
                  })]
                })]
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Add a listener for the ", _jsx(_components.code, {
                children: "OnConnectionStateChanged"
              }), " callback as shown below:"]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/connection-status-mng-blueprint-channel-connection-event.png",
                alt: "Channel Connection Event"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When the channel connection state changes and the ", _jsx(_components.code, {
                children: "OnConnectionStateChanged"
              }), " callback is triggered, it prints information about the state of the monitored network connection. You can read the current connection state and the reason for the state change from the log which helps you troubleshoot the network."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/connection-status-mng-blueprint-channel-connection-log.png",
                alt: "Channel Connection Log"
              })
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","electron","flutter","ios","macos","react-native","unity","unreal","web","windows","blueprint"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsx(_components.h3, {
          id: "connection-states",
          children: "Connection states"
        }), _jsx(_components.p, {
          children: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
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
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Initial connection state. Usually occurs:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Before calling ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["After calling ", _jsx(_components.code, {
                      children: "leaveChannel"
                    }), "."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The transient state after calling ", _jsx(_components.code, {
                  children: "joinChannel"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Occurs after the app successfully joins a channel. The SDK also triggers the ", _jsx(_components.code, {
                  children: "onJoinChannelSuccess"
                }), " callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption."
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["If the client successfully rejoins the channel, the SDK triggers the ", _jsx(_components.code, {
                      children: "onRejoinChannelSuccess"
                    }), " callback."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["If the channel is not rejoined within 10 seconds, the SDK triggers ", _jsx(_components.code, {
                      children: "onConnectionStateChanged(Reconnecting, Lost)"
                    }), ", and continues trying to rejoin the channel."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call ", _jsx(_components.code, {
                  children: "leaveChannel"
                }), " to leave the current channel, and then call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " to join the channel again."]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "state-description-and-troubleshooting",
          children: "State description and troubleshooting"
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter in ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " describes the reason for the connection state change."]
        }), _jsx(_components.p, {
          children: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description and troubleshooting guide"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "LEAVE_CHANNEL"
                    }), " (5): The user leaves the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INVALID_TOKEN"
                    }), " (8)", _jsx(_components.div, {}), " token is invalid. Please use a valid token to join the channel."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "CONNECTING"
                }), " (0): The app is trying to join the Agora channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "JOIN_SUCCESS"
                }), " (1): The app has successfully joined the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INTERRUPTED"
                    }), " (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see ", _jsx(_components.a, {
                      href: "#disconnection-and-reconnection",
                      children: "Disconnection and reconnection"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "LOST"
                    }), " (16): The SDK lost connection with the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "SETTING_PROXY_SERVER"
                    }), " (11): The SDK attempts to reconnect because a proxy server is configured."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "CLIENT_IP_ADDRESS_CHANGED"
                    }), " (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "KEEP_ALIVE_TIMEOUT"
                    }), " (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RENEW_TOKEN"
                    }), " (12): Updating the token has caused a change in the network connection status."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "BANNED_BY_SERVER"
                    }), " (3): The user is banned by the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "JOIN_FAILED"
                    }), " (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call ", _jsx(_components.code, {
                      children: "leaveChannel"
                    }), " to leave the current channel and then call ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INVALID_APP_ID"
                    }), " (6): The app ID is invalid. Use a valid app ID to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INVALID_CHANNEL_NAME"
                    }), " (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "TOKEN_EXPIRED"
                    }), " (9): The token has expired. Obtain a new token from the app server, and then call ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "REJECTED_BY_SERVER"
                    }), " (10): The user is banned by the server. May also occurs under the following circumstances:", `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: ["The app calls ", _jsx(_components.code, {
                          children: "joinChannel"
                        }), " again after the local user has joined the channel."]
                      }), `
`, _jsxs(_components.li, {
                        children: ["The app called ", _jsx(_components.code, {
                          children: "startEchoTest"
                        }), ", but did not call ", _jsx(_components.code, {
                          children: "stopEchoTest"
                        }), " to end the echo test."]
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged",
              children: _jsx(_components.code, {
                children: "onConnectionStateChanged"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_getconnectionstate",
              children: _jsx(_components.code, {
                children: "getConnectionState"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "electron",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "electron"
        }), _jsx(_components.h3, {
          id: "connection-states-1",
          children: "Connection states"
        }), _jsx(_components.p, {
          children: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
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
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Initial connection state. Usually occurs:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Before calling ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["After calling ", _jsx(_components.code, {
                      children: "leaveChannel"
                    }), "."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The transient state after calling ", _jsx(_components.code, {
                  children: "joinChannel"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Occurs after the app successfully joins a channel. The SDK also triggers the ", _jsx(_components.code, {
                  children: "onJoinChannelSuccess"
                }), " callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption."
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["If the client successfully rejoins the channel, the SDK triggers the ", _jsx(_components.code, {
                      children: "onRejoinChannelSuccess"
                    }), " callback."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["If the channel is not rejoined within 10 seconds, the SDK triggers ", _jsx(_components.code, {
                      children: "onConnectionStateChanged(connectionStateReconnecting, connectionChangedLost)"
                    }), ", and continues trying to rejoin the channel."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call ", _jsx(_components.code, {
                  children: "leaveChannel"
                }), " to leave the current channel, and then call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " to join the channel again."]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "state-description-and-troubleshooting-1",
          children: "State description and troubleshooting"
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter in ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " describes the reason for the connection state change."]
        }), _jsx(_components.p, {
          children: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description and troubleshooting guide"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "LeaveChannel"
                    }), " (5): The user leaves the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "InvalidToken"
                    }), " (8)", _jsx(_components.div, {}), " token is invalid. Please use a valid token to join the channel."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "Connecting"
                }), " (0): The app is trying to join the Agora channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "JoinSuccess"
                }), " (1): The app has successfully joined the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "Interrupted"
                    }), " (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see ", _jsx(_components.a, {
                      href: "#disconnection-and-reconnection",
                      children: "Disconnection and reconnection"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "Lost"
                    }), " (16): The SDK lost connection with the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "SettingProxyServer"
                    }), " (11): The SDK attempts to reconnect because a proxy server is configured."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "ClientIpAddressChanged"
                    }), " (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "KeepAliveTimeout"
                    }), " (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RenewToken"
                    }), " (12): Updating the token has caused a change in the network connection status."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "BannedByServer"
                    }), " (3): The user is banned by the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "JoinFailed"
                    }), " (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call ", _jsx(_components.code, {
                      children: "leaveChannel"
                    }), " to leave the current channel and then call ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "InvalidAppId"
                    }), " (6): The app ID is invalid. Use a valid app ID to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "InvalidChannelName"
                    }), " (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "TokenExpired"
                    }), " (9): The token has expired. Obtain a new token from the app server, and then call ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RejectedByServer"
                    }), " (10): The user is banned by the server. May also occurs under the following circumstances:", `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: ["The app calls ", _jsx(_components.code, {
                          children: "joinChannel"
                        }), " again after the local user has joined the channel."]
                      }), `
`, _jsxs(_components.li, {
                        children: ["The app called ", _jsx(_components.code, {
                          children: "startEchoTest"
                        }), ", but did not call ", _jsx(_components.code, {
                          children: "stopEchoTest"
                        }), " to end the echo test."]
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-1",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged",
              children: _jsx(_components.code, {
                children: "onConnectionStateChanged"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_getconnectionstate",
              children: _jsx(_components.code, {
                children: "getConnectionState"
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
          canonicalPlatform: "web",
          platform: "flutter"
        }), _jsx(_components.h3, {
          id: "connection-states-2",
          children: "Connection states"
        }), _jsx(_components.p, {
          children: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
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
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Initial connection state. Usually occurs:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Before calling ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["After calling ", _jsx(_components.code, {
                      children: "leaveChannel"
                    }), "."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The transient state after calling ", _jsx(_components.code, {
                  children: "joinChannel"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Occurs after the app successfully joins a channel. The SDK also triggers the ", _jsx(_components.code, {
                  children: "onJoinChannelSuccess"
                }), " callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption."
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["If the client successfully rejoins the channel, the SDK triggers the ", _jsx(_components.code, {
                      children: "onRejoinChannelSuccess"
                    }), " callback."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["If the channel is not rejoined within 10 seconds, the SDK triggers ", _jsx(_components.code, {
                      children: "onConnectionStateChanged(connectionStateReconnecting, connectionChangedLost)"
                    }), ", and continues trying to rejoin the channel."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call ", _jsx(_components.code, {
                  children: "leaveChannel"
                }), " to leave the current channel, and then call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " to join the channel again."]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "state-description-and-troubleshooting-2",
          children: "State description and troubleshooting"
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter in ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " describes the reason for the connection state change."]
        }), _jsx(_components.p, {
          children: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description and troubleshooting guide"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "LeaveChannel"
                    }), " (5): The user leaves the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "InvalidToken"
                    }), " (8)", _jsx(_components.div, {}), " token is invalid. Please use a valid token to join the channel."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "Connecting"
                }), " (0): The app is trying to join the Agora channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "JoinSuccess"
                }), " (1): The app has successfully joined the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "Interrupted"
                    }), " (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see ", _jsx(_components.a, {
                      href: "#disconnection-and-reconnection",
                      children: "Disconnection and reconnection"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "Lost"
                    }), " (16): The SDK lost connection with the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "SettingProxyServer"
                    }), " (11): The SDK attempts to reconnect because a proxy server is configured."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "ClientIpAddressChanged"
                    }), " (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "KeepAliveTimeout"
                    }), " (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RenewToken"
                    }), " (12): Updating the token has caused a change in the network connection status."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "BannedByServer"
                    }), " (3): The user is banned by the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "JoinFailed"
                    }), " (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call ", _jsx(_components.code, {
                      children: "leaveChannel"
                    }), " to leave the current channel and then call ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "InvalidAppId"
                    }), " (6): The app ID is invalid. Use a valid app ID to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "InvalidChannelName"
                    }), " (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "TokenExpired"
                    }), " (9): The token has expired. Obtain a new token from the app server, and then call ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RejectedByServer"
                    }), " (10): The user is banned by the server. May also occurs under the following circumstances:", `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: ["The app calls ", _jsx(_components.code, {
                          children: "joinChannel"
                        }), " again after the local user has joined the channel."]
                      }), `
`, _jsxs(_components.li, {
                        children: ["The app called ", _jsx(_components.code, {
                          children: "startEchoTest"
                        }), ", but did not call ", _jsx(_components.code, {
                          children: "stopEchoTest"
                        }), " to end the echo test."]
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-2",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged",
              children: _jsx(_components.code, {
                children: "onConnectionStateChanged"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_getconnectionstate",
              children: _jsx(_components.code, {
                children: "getConnectionState"
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
        }), _jsx(_components.h3, {
          id: "connection-states-3",
          children: "Connection states"
        }), _jsx(_components.p, {
          children: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
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
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Initial connection state. Usually occurs:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Before calling ", _jsx(_components.code, {
                      children: "joinChannelByToken"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["After calling ", _jsx(_components.code, {
                      children: "leaveChannel"
                    }), "."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The transient state after calling ", _jsx(_components.code, {
                  children: "joinChannelByToken"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Occurs after the app successfully joins a channel. The SDK also triggers the ", _jsx(_components.code, {
                  children: "didJoinChannel"
                }), " callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption."
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["If the client successfully rejoins the channel, the SDK triggers the ", _jsx(_components.code, {
                      children: "didRejoinChannel"
                    }), " callback."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["If the channel is not rejoined within 10 seconds, the SDK triggers ", _jsx(_components.code, {
                      children: "connectionChangedToState(Reconnecting, Lost)"
                    }), ", and continues trying to rejoin the channel."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call ", _jsx(_components.code, {
                  children: "leaveChannel"
                }), " to leave the current channel, and then call ", _jsx(_components.code, {
                  children: "joinChannelByToken"
                }), " to join the channel again."]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "state-description-and-troubleshooting-3",
          children: "State description and troubleshooting"
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter in ", _jsx(_components.code, {
            children: "connectionChangedToState"
          }), " describes the reason for the connection state change."]
        }), _jsx(_components.p, {
          children: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description and troubleshooting guide"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "LeaveChannel"
                    }), " (5): The user leaves the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "InvalidToken"
                    }), " (8)", _jsx(_components.div, {}), " token is invalid. Please use a valid token to join the channel."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "Connecting"
                }), " (0): The app is trying to join the Agora channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "JoinSuccess"
                }), " (1): The app has successfully joined the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "Interrupted"
                    }), " (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see ", _jsx(_components.a, {
                      href: "#disconnection-and-reconnection",
                      children: "Disconnection and reconnection"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "Lost"
                    }), " (16): The SDK lost connection with the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "SettingProxyServer"
                    }), " (11): The SDK attempts to reconnect because a proxy server is configured."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "ClientIpAddressChanged"
                    }), " (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "KeepAliveTimeout"
                    }), " (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RenewToken"
                    }), " (12): Updating the token has caused a change in the network connection status."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "BannedByServer"
                    }), " (3): The user is banned by the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "JoinFailed"
                    }), " (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call ", _jsx(_components.code, {
                      children: "leaveChannel"
                    }), " to leave the current channel and then call ", _jsx(_components.code, {
                      children: "joinChannelByToken"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "InvalidAppId"
                    }), " (6): The app ID is invalid. Use a valid app ID to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "InvalidChannelName"
                    }), " (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "TokenExpired"
                    }), " (9): The token has expired. Obtain a new token from the app server, and then call ", _jsx(_components.code, {
                      children: "joinChannelByToken"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RejectedByServer"
                    }), " (10): The user is banned by the server. May also occurs under the following circumstances:", `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: ["The app calls ", _jsx(_components.code, {
                          children: "joinChannelByToken"
                        }), " again after the local user has joined the channel."]
                      }), `
`, _jsxs(_components.li, {
                        children: ["The app called ", _jsx(_components.code, {
                          children: "startEchoTest"
                        }), ", but did not call ", _jsx(_components.code, {
                          children: "stopEchoTest"
                        }), " to end the echo test."]
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-3",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:connectionchangedto:reason:)",
              children: _jsx(_components.code, {
                children: "rtcEngine(_:connectionChangedTo:reason:)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/getconnectionstate()",
              children: _jsx(_components.code, {
                children: "getConnectionState"
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
        }), _jsx(_components.h3, {
          id: "connection-states-4",
          children: "Connection states"
        }), _jsx(_components.p, {
          children: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
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
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Initial connection state. Usually occurs:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Before calling ", _jsx(_components.code, {
                      children: "joinChannelByToken"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["After calling ", _jsx(_components.code, {
                      children: "leaveChannel"
                    }), "."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The transient state after calling ", _jsx(_components.code, {
                  children: "joinChannelByToken"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Occurs after the app successfully joins a channel. The SDK also triggers the ", _jsx(_components.code, {
                  children: "didJoinChannel"
                }), " callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption."
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["If the client successfully rejoins the channel, the SDK triggers the ", _jsx(_components.code, {
                      children: "didRejoinChannel"
                    }), " callback."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["If the channel is not rejoined within 10 seconds, the SDK triggers ", _jsx(_components.code, {
                      children: "connectionChangedToState(Reconnecting, Lost)"
                    }), ", and continues trying to rejoin the channel."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call ", _jsx(_components.code, {
                  children: "leaveChannel"
                }), " to leave the current channel, and then call ", _jsx(_components.code, {
                  children: "joinChannelByToken"
                }), " to join the channel again."]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "state-description-and-troubleshooting-4",
          children: "State description and troubleshooting"
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter in ", _jsx(_components.code, {
            children: "connectionChangedToState"
          }), " describes the reason for the connection state change."]
        }), _jsx(_components.p, {
          children: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description and troubleshooting guide"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "LeaveChannel"
                    }), " (5): The user leaves the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "InvalidToken"
                    }), " (8)", _jsx(_components.div, {}), " token is invalid. Please use a valid token to join the channel."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "Connecting"
                }), " (0): The app is trying to join the Agora channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "JoinSuccess"
                }), " (1): The app has successfully joined the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "Interrupted"
                    }), " (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see ", _jsx(_components.a, {
                      href: "#disconnection-and-reconnection",
                      children: "Disconnection and reconnection"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "Lost"
                    }), " (16): The SDK lost connection with the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "SettingProxyServer"
                    }), " (11): The SDK attempts to reconnect because a proxy server is configured."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "ClientIpAddressChanged"
                    }), " (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "KeepAliveTimeout"
                    }), " (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RenewToken"
                    }), " (12): Updating the token has caused a change in the network connection status."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "BannedByServer"
                    }), " (3): The user is banned by the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "JoinFailed"
                    }), " (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call ", _jsx(_components.code, {
                      children: "leaveChannel"
                    }), " to leave the current channel and then call ", _jsx(_components.code, {
                      children: "joinChannelByToken"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "InvalidAppId"
                    }), " (6): The app ID is invalid. Use a valid app ID to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "InvalidChannelName"
                    }), " (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "TokenExpired"
                    }), " (9): The token has expired. Obtain a new token from the app server, and then call ", _jsx(_components.code, {
                      children: "joinChannelByToken"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RejectedByServer"
                    }), " (10): The user is banned by the server. May also occurs under the following circumstances:", `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: ["The app calls ", _jsx(_components.code, {
                          children: "joinChannelByToken"
                        }), " again after the local user has joined the channel."]
                      }), `
`, _jsxs(_components.li, {
                        children: ["The app called ", _jsx(_components.code, {
                          children: "startEchoTest"
                        }), ", but did not call ", _jsx(_components.code, {
                          children: "stopEchoTest"
                        }), " to end the echo test."]
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-4",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:connectionchangedto:reason:)",
              children: _jsx(_components.code, {
                children: "rtcEngine(_:connectionChangedTo:reason:)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/getconnectionstate()",
              children: _jsx(_components.code, {
                children: "getConnectionState"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "react-native",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "react-native"
        }), _jsx(_components.h3, {
          id: "connection-states-5",
          children: "Connection states"
        }), _jsx(_components.p, {
          children: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
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
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Initial connection state. Usually occurs:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Before calling ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["After calling ", _jsx(_components.code, {
                      children: "leaveChannel"
                    }), "."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The transient state after calling ", _jsx(_components.code, {
                  children: "joinChannel"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Occurs after the app successfully joins a channel. The SDK also triggers the ", _jsx(_components.code, {
                  children: "onJoinChannelSuccess"
                }), " callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption."
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["If the client successfully rejoins the channel, the SDK triggers the ", _jsx(_components.code, {
                      children: "onRejoinChannelSuccess"
                    }), " callback."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["If the channel is not rejoined within 10 seconds, the SDK triggers ", _jsx(_components.code, {
                      children: "onConnectionStateChanged(connectionStateReconnecting, connectionChangedLost)"
                    }), ", and continues trying to rejoin the channel."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call ", _jsx(_components.code, {
                  children: "leaveChannel"
                }), " to leave the current channel, and then call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " to join the channel again."]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "state-description-and-troubleshooting-5",
          children: "State description and troubleshooting"
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter in ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " describes the reason for the connection state change."]
        }), _jsx(_components.p, {
          children: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description and troubleshooting guide"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "LeaveChannel"
                    }), " (5): The user leaves the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "InvalidToken"
                    }), " (8)", _jsx(_components.div, {}), " token is invalid. Please use a valid token to join the channel."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "Connecting"
                }), " (0): The app is trying to join the Agora channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "JoinSuccess"
                }), " (1): The app has successfully joined the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "Interrupted"
                    }), " (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see ", _jsx(_components.a, {
                      href: "#disconnection-and-reconnection",
                      children: "Disconnection and reconnection"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "Lost"
                    }), " (16): The SDK lost connection with the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "SettingProxyServer"
                    }), " (11): The SDK attempts to reconnect because a proxy server is configured."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "ClientIpAddressChanged"
                    }), " (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "KeepAliveTimeout"
                    }), " (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RenewToken"
                    }), " (12): Updating the token has caused a change in the network connection status."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "BannedByServer"
                    }), " (3): The user is banned by the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "JoinFailed"
                    }), " (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call ", _jsx(_components.code, {
                      children: "leaveChannel"
                    }), " to leave the current channel and then call ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "InvalidAppId"
                    }), " (6): The app ID is invalid. Use a valid app ID to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "InvalidChannelName"
                    }), " (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "TokenExpired"
                    }), " (9): The token has expired. Obtain a new token from the app server, and then call ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RejectedByServer"
                    }), " (10): The user is banned by the server. May also occurs under the following circumstances:", `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: ["The app calls ", _jsx(_components.code, {
                          children: "joinChannel"
                        }), " again after the local user has joined the channel."]
                      }), `
`, _jsxs(_components.li, {
                        children: ["The app called ", _jsx(_components.code, {
                          children: "startEchoTest"
                        }), ", but did not call ", _jsx(_components.code, {
                          children: "stopEchoTest"
                        }), " to end the echo test."]
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-5",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged",
              children: _jsx(_components.code, {
                children: "onConnectionStateChanged"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_getconnectionstate",
              children: _jsx(_components.code, {
                children: "getConnectionState"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unity",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unity"
        }), _jsx(_components.h3, {
          id: "connection-states-6",
          children: "Connection states"
        }), _jsx(_components.p, {
          children: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
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
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Initial connection state. Usually occurs:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Before calling ", _jsx(_components.code, {
                      children: "JoinChannel"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["After calling ", _jsx(_components.code, {
                      children: "LeaveChannel"
                    }), "."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The transient state after calling ", _jsx(_components.code, {
                  children: "JoinChannel"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Occurs after the app successfully joins a channel. The SDK also triggers the ", _jsx(_components.code, {
                  children: "OnJoinChannelSuccess"
                }), " callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption."
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["If the client successfully rejoins the channel, the SDK triggers the ", _jsx(_components.code, {
                      children: "OnRejoinChannelSuccess"
                    }), " callback."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["If the channel is not rejoined within 10 seconds, the SDK triggers ", _jsx(_components.code, {
                      children: "OnConnectionStateChanged(RECONNECTING, LOST)"
                    }), ", and continues trying to rejoin the channel."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call ", _jsx(_components.code, {
                  children: "LeaveChannel"
                }), " to leave the current channel, and then call ", _jsx(_components.code, {
                  children: "JoinChannel"
                }), " to join the channel again."]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "state-description-and-troubleshooting-6",
          children: "State description and troubleshooting"
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter in ", _jsx(_components.code, {
            children: "OnConnectionStateChanged"
          }), " describes the reason for the connection state change."]
        }), _jsx(_components.p, {
          children: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description and troubleshooting guide"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "LEAVE_CHANNEL"
                    }), " (5): The user leaves the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INVALID_TOKEN"
                    }), " (8)", _jsx(_components.div, {}), " token is invalid. Please use a valid token to join the channel."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "CONNECTING"
                }), " (0): The app is trying to join the Agora channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "JOIN_SUCCESS"
                }), " (1): The app has successfully joined the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INTERRUPTED"
                    }), " (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see ", _jsx(_components.a, {
                      href: "#disconnection-and-reconnection",
                      children: "Disconnection and reconnection"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "LOST"
                    }), " (16): The SDK lost connection with the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "SETTING_PROXY_SERVER"
                    }), " (11): The SDK attempts to reconnect because a proxy server is configured."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "CLIENT_IP_ADDRESS_CHANGED"
                    }), " (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "KEEP_ALIVE_TIMEOUT"
                    }), " (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RENEW_TOKEN"
                    }), " (12): Updating the token has caused a change in the network connection status."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "BANNED_BY_SERVER"
                    }), " (3): The user is banned by the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "JOIN_FAILED"
                    }), " (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call ", _jsx(_components.code, {
                      children: "LeaveChannel"
                    }), " to leave the current channel and then call ", _jsx(_components.code, {
                      children: "JoinChannel"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INVALID_APP_ID"
                    }), " (6): The app ID is invalid. Use a valid app ID to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INVALID_CHANNEL_NAME"
                    }), " (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "TOKEN_EXPIRED"
                    }), " (9): The token has expired. Obtain a new token from the app server, and then call ", _jsx(_components.code, {
                      children: "JoinChannel"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "REJECTED_BY_SERVER"
                    }), " (10): The user is banned by the server. May also occurs under the following circumstances:", `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: ["The app calls ", _jsx(_components.code, {
                          children: "JoinChannel"
                        }), " again after the local user has joined the channel."]
                      }), `
`, _jsxs(_components.li, {
                        children: ["The app called ", _jsx(_components.code, {
                          children: "StartEchoTest"
                        }), ", but did not call ", _jsx(_components.code, {
                          children: "StopEchoTest"
                        }), " to end the echo test."]
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-6",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged",
              children: _jsx(_components.code, {
                children: "OnConnectionStateChanged"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_getconnectionstate",
              children: _jsx(_components.code, {
                children: "GetConnectionState"
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
        }), _jsx(_components.h3, {
          id: "connection-states-7",
          children: "Connection states"
        }), _jsx(_components.p, {
          children: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
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
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Initial connection state. Usually occurs:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Before calling ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["After calling ", _jsx(_components.code, {
                      children: "leaveChannel"
                    }), "."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The transient state after calling ", _jsx(_components.code, {
                  children: "joinChannel"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Occurs after the app successfully joins a channel. The SDK also triggers the ", _jsx(_components.code, {
                  children: "onJoinChannelSuccess"
                }), " callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption."
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["If the client successfully rejoins the channel, the SDK triggers the ", _jsx(_components.code, {
                      children: "onRejoinChannelSuccess"
                    }), " callback."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["If the channel is not rejoined within 10 seconds, the SDK triggers ", _jsx(_components.code, {
                      children: "onConnectionStateChanged(Reconnecting, Lost)"
                    }), ", and continues trying to rejoin the channel."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call ", _jsx(_components.code, {
                  children: "leaveChannel"
                }), " to leave the current channel, and then call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " to join the channel again."]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "state-description-and-troubleshooting-7",
          children: "State description and troubleshooting"
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter in ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " describes the reason for the connection state change."]
        }), _jsx(_components.p, {
          children: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description and troubleshooting guide"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "LEAVE_CHANNEL"
                    }), " (5): The user leaves the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INVALID_TOKEN"
                    }), " (8)", _jsx(_components.div, {}), " token is invalid. Please use a valid token to join the channel."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "CONNECTING"
                }), " (0): The app is trying to join the Agora channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "JOIN_SUCCESS"
                }), " (1): The app has successfully joined the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INTERRUPTED"
                    }), " (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see ", _jsx(_components.a, {
                      href: "#disconnection-and-reconnection",
                      children: "Disconnection and reconnection"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "LOST"
                    }), " (16): The SDK lost connection with the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "SETTING_PROXY_SERVER"
                    }), " (11): The SDK attempts to reconnect because a proxy server is configured."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "CLIENT_IP_ADDRESS_CHANGED"
                    }), " (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "KEEP_ALIVE_TIMEOUT"
                    }), " (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RENEW_TOKEN"
                    }), " (12): Updating the token has caused a change in the network connection status."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "BANNED_BY_SERVER"
                    }), " (3): The user is banned by the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "JOIN_FAILED"
                    }), " (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call ", _jsx(_components.code, {
                      children: "leaveChannel"
                    }), " to leave the current channel and then call ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INVALID_APP_ID"
                    }), " (6): The app ID is invalid. Use a valid app ID to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INVALID_CHANNEL_NAME"
                    }), " (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "TOKEN_EXPIRED"
                    }), " (9): The token has expired. Obtain a new token from the app server, and then call ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "REJECTED_BY_SERVER"
                    }), " (10): The user is banned by the server. May also occurs under the following circumstances:", `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: ["The app calls ", _jsx(_components.code, {
                          children: "joinChannel"
                        }), " again after the local user has joined the channel."]
                      }), `
`, _jsxs(_components.li, {
                        children: ["The app called ", _jsx(_components.code, {
                          children: "startEchoTest"
                        }), ", but did not call ", _jsx(_components.code, {
                          children: "stopEchoTest"
                        }), " to end the echo test."]
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-7",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged",
              children: _jsx(_components.code, {
                children: "onConnectionStateChanged"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_getconnectionstate",
              children: _jsx(_components.code, {
                children: "getConnectionState"
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
        }), _jsx(_components.h3, {
          id: "connection-states-8",
          children: "Connection states"
        }), _jsx(_components.p, {
          children: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
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
                children: _jsx(_components.strong, {
                  children: "DISCONNECTED"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Connection disconnected. The SDK will not automatically reconnect while in this state. This state indicates that the user is in one of the following stages:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Has not joined the channel using ", _jsx(_components.code, {
                      children: "join"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["Has left the channel using ", _jsx(_components.code, {
                      children: "leave"
                    }), "."]
                  }), `
`, _jsx(_components.li, {
                    children: "Kicked out of the channel by the Agora server or failed to connect."
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "CONNECTING"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Joining. The instantaneous state after calling ", _jsx(_components.code, {
                  children: "join"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "CONNECTED"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Occurs after the app has successfully joined the channel. At this point the user can publish or subscribe to the audio and video in the channel."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "RECONNECTING"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Occurs when the connection is interrupted due to a network disconnection or switch. The SDK automatically tries to reconnect after an interruption."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "DISCONNECTING"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Disconnecting. This is the state when ", _jsx(_components.code, {
                  children: "leave"
                }), " is called."]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-8",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_connection_state_change",
                children: _jsx(_components.code, {
                  children: 'AgoraRTCClient.on("connection-state-change")'
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_user_joined",
                children: _jsx(_components.code, {
                  children: 'AgoraRTCClient.on("user-joined")'
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_user_left",
                children: _jsx(_components.code, {
                  children: 'AgoraRTCClient.on("user-left")'
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_user_published",
                children: _jsx(_components.code, {
                  children: 'AgoraRTCClient.on("user-published")'
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_user_unpublished",
                children: _jsx(_components.code, {
                  children: 'AgoraRTCClient.on("user-unpublished")'
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
        platform: "windows",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "windows"
        }), _jsx(_components.h3, {
          id: "connection-states-9",
          children: "Connection states"
        }), _jsx(_components.p, {
          children: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
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
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Initial connection state. Usually occurs:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Before calling ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["After calling ", _jsx(_components.code, {
                      children: "leaveChannel"
                    }), "."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The transient state after calling ", _jsx(_components.code, {
                  children: "joinChannel"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Occurs after the app successfully joins a channel. The SDK also triggers the ", _jsx(_components.code, {
                  children: "onJoinChannelSuccess"
                }), " callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption."
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["If the client successfully rejoins the channel, the SDK triggers the ", _jsx(_components.code, {
                      children: "onRejoinChannelSuccess"
                    }), " callback."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["If the channel is not rejoined within 10 seconds, the SDK triggers ", _jsx(_components.code, {
                      children: "onConnectionStateChanged(Reconnecting, Lost)"
                    }), ", and continues trying to rejoin the channel."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call ", _jsx(_components.code, {
                  children: "leaveChannel"
                }), " to leave the current channel, and then call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " to join the channel again."]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "state-description-and-troubleshooting-8",
          children: "State description and troubleshooting"
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter in ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), " describes the reason for the connection state change."]
        }), _jsx(_components.p, {
          children: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description and troubleshooting guide"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "LEAVE_CHANNEL"
                    }), " (5): The user leaves the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INVALID_TOKEN"
                    }), " (8)", _jsx(_components.div, {}), " token is invalid. Please use a valid token to join the channel."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "CONNECTING"
                }), " (0): The app is trying to join the Agora channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "JOIN_SUCCESS"
                }), " (1): The app has successfully joined the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INTERRUPTED"
                    }), " (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see ", _jsx(_components.a, {
                      href: "#disconnection-and-reconnection",
                      children: "Disconnection and reconnection"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "LOST"
                    }), " (16): The SDK lost connection with the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "SETTING_PROXY_SERVER"
                    }), " (11): The SDK attempts to reconnect because a proxy server is configured."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "CLIENT_IP_ADDRESS_CHANGED"
                    }), " (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "KEEP_ALIVE_TIMEOUT"
                    }), " (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RENEW_TOKEN"
                    }), " (12): Updating the token has caused a change in the network connection status."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "BANNED_BY_SERVER"
                    }), " (3): The user is banned by the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "JOIN_FAILED"
                    }), " (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call ", _jsx(_components.code, {
                      children: "leaveChannel"
                    }), " to leave the current channel and then call ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INVALID_APP_ID"
                    }), " (6): The app ID is invalid. Use a valid app ID to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INVALID_CHANNEL_NAME"
                    }), " (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "TOKEN_EXPIRED"
                    }), " (9): The token has expired. Obtain a new token from the app server, and then call ", _jsx(_components.code, {
                      children: "joinChannel"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "REJECTED_BY_SERVER"
                    }), " (10): The user is banned by the server. May also occurs under the following circumstances:", `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: ["The app calls ", _jsx(_components.code, {
                          children: "joinChannel"
                        }), " again after the local user has joined the channel."]
                      }), `
`, _jsxs(_components.li, {
                        children: ["The app called ", _jsx(_components.code, {
                          children: "startEchoTest"
                        }), ", but did not call ", _jsx(_components.code, {
                          children: "stopEchoTest"
                        }), " to end the echo test."]
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-9",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged",
                children: _jsx(_components.code, {
                  children: "onConnectionStateChanged"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_getconnectionstate",
                children: _jsx(_components.code, {
                  children: "getConnectionState"
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
        platform: "blueprint",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "blueprint"
        }), _jsx(_components.h3, {
          id: "connection-states-10",
          children: "Connection states"
        }), _jsx(_components.p, {
          children: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
        }), _jsx(_components.p, {
          children: "The app may have the following connection states before joining, during a session, and after leaving a channel:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
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
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Initial connection state. Usually occurs:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Before calling ", _jsx(_components.code, {
                      children: "JoinChannel"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["After calling ", _jsx(_components.code, {
                      children: "LeaveChannel"
                    }), "."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The transient state after calling ", _jsx(_components.code, {
                  children: "JoinChannel"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Occurs after the app successfully joins a channel. The SDK also triggers the ", _jsx(_components.code, {
                  children: "FOnJoinChannelSuccess"
                }), " callback to report that the local client has joined the channel. At this point, the user can publish or subscribe to the audio and video in the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.p, {
                  children: "Occurs when the connection is interrupted. The SDK automatically tries to reconnect after an interruption."
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["If the client successfully rejoins the channel, the SDK triggers the ", _jsx(_components.code, {
                      children: "FOnRejoinChannelSuccess"
                    }), " callback."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["If the channel is not rejoined within 10 seconds, the SDK triggers ", _jsx(_components.code, {
                      children: "FOnConnectionStateChanged(RECONNECTING, LOST)"
                    }), ", and continues trying to rejoin the channel."]
                  }), `
`]
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Connection failed. Occurs when the SDK is unable to join a channel for 20 minutes and stops attempting to reconnect to the channel. In this case, call ", _jsx(_components.code, {
                  children: "LeaveChannel"
                }), " to leave the current channel, and then call ", _jsx(_components.code, {
                  children: "JoinChannel"
                }), " to join the channel again."]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "state-description-and-troubleshooting-9",
          children: "State description and troubleshooting"
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "reason"
          }), " parameter in ", _jsx(_components.code, {
            children: "FOnConnectionStateChanged"
          }), " describes the reason for the connection state change."]
        }), _jsx(_components.p, {
          children: "The following table maps the relationships between different connection states and the causes of state change, as well as how to handle the situation when network outages occur:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Connection state"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description and troubleshooting guide"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Disconnected"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "LEAVE_CHANNEL"
                    }), " (5): The user leaves the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INVALID_TOKEN"
                    }), " (8)", _jsx(_components.div, {}), " token is invalid. Please use a valid token to join the channel."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connecting"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "CONNECTING"
                }), " (0): The app is trying to join the Agora channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Connected"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "JOIN_SUCCESS"
                }), " (1): The app has successfully joined the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Reconnecting"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INTERRUPTED"
                    }), " (2): When the network connection is interrupted, the SDK automatically reconnects to the channel and the connection state continues to change. For details on how the connection state changes during automatic reconnection, see ", _jsx(_components.a, {
                      href: "#disconnection-and-reconnection",
                      children: "Disconnection and reconnection"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "LOST"
                    }), " (16): The SDK lost connection with the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "SETTING_PROXY_SERVER"
                    }), " (11): The SDK attempts to reconnect because a proxy server is configured."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "CLIENT_IP_ADDRESS_CHANGED"
                    }), " (13): The client IP address has changed. If this status code occurs multiple times, prompt the user to rejoin the channel after changing networks."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "KEEP_ALIVE_TIMEOUT"
                    }), " (14): The keep-alive connection between the SDK and the server has timed out, causing the SDK to enter an automatic reconnection state."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RENEW_TOKEN"
                    }), " (12): Updating the token has caused a change in the network connection status."]
                  }), `
`]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.strong, {
                  children: "Failed"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "BANNED_BY_SERVER"
                    }), " (3): The user is banned by the server."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "JOIN_FAILED"
                    }), " (4): The SDK stopped trying to reconnect after continued failed attempts to join the channel for 20 minutes. Call ", _jsx(_components.code, {
                      children: "LeaveChannel"
                    }), " to leave the current channel and then call ", _jsx(_components.code, {
                      children: "JoinChannel"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INVALID_APP_ID"
                    }), " (6): The app ID is invalid. Use a valid app ID to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INVALID_CHANNEL_NAME"
                    }), " (7): The channel name is invalid. Please check if the channel name contains illegal characters and use a valid channel name to join the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "TOKEN_EXPIRED"
                    }), " (9): The token has expired. Obtain a new token from the app server, and then call ", _jsx(_components.code, {
                      children: "JoinChannel"
                    }), " to rejoin the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "REJECTED_BY_SERVER"
                    }), " (10): The user is banned by the server. May also occurs under the following circumstances:", `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: ["The app calls ", _jsx(_components.code, {
                          children: "JoinChannel"
                        }), " again after the local user has joined the channel."]
                      }), `
`, _jsxs(_components.li, {
                        children: ["The app called ", _jsx(_components.code, {
                          children: "StartEchoTest"
                        }), ", but did not call ", _jsx(_components.code, {
                          children: "StopEchoTest"
                        }), " to end the echo test."]
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-10",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged",
              children: _jsx(_components.code, {
                children: "FOnConnectionStateChanged"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_getconnectionstate",
              children: _jsx(_components.code, {
                children: "GetConnectionState"
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
