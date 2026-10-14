import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Connection state transitions and recovery",
  description: "Understand Signaling network connection management mechanism."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;web&#x22;,&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;flutter&#x22;,&#x22;windows&#x22;,&#x22;linux-cpp&#x22;,&#x22;linux-java&#x22;]" showTabs="true">
  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications.

    <CalloutContainer type="info">
      <CalloutDescription>
        The information on this page is applicable to Signaling SDK versions 2.2.0 or later.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech]

    In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention.

    This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status.

    The Signaling SDK handles the following connection management tasks:

    * Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure.
    * Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously.
    * Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection.
    * Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level.

    ## Connection states [#connection-states]

    This section describes the various connection states and their transitions in both message and stream channels.

    ### Message channel connection states [#message-channel-connection-states]

    To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals.

    The following table gives an overview of the various connection states:

    | State          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | \`IDLE\`         | **Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the \`logout\` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | \`CONNECTING\`   | **Connecting state**: When you call the \`login\` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | \`CONNECTED\`    | **Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | \`DISCONNECTED\` | **Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to \`SUSPENDED\` if the connection cannot be restored within this time.                                                                                                                                                                                                                                                           |
    | \`SUSPENDED\`    | **Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the \`login\` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the \`logout\` method to return to the \`IDLE\` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status. |
    | \`FAILED\`       | **Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the \`login\` method again.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

    #### Connection state transitions [#connection-state-transitions]

    The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases.

    **Message channel connection state transitions**

    ![message-channel-connection-states](https://assets-docs.agora.io/images/signaling/message-channel-connection-states.svg)

    ### Stream channel connection states [#stream-channel-connection-states]

    In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts.

    The table below provides an overview of the various stream channel connection states:

    | State        | Description                                                                                                                                                                                                                                                                                                                 |
    | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`IDLE\`       | **Idle state**: The SDK enters this state after you create a stream channel instance or after you explicitly call the \`leave\` method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server.                                  |
    | \`CONNECTING\` | **Connecting state**: When you call the \`join\` method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected.                                                                                                      |
    | \`CONNECTED\`  | **Connected state**:  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities.                                                                                                                                                                          |
    | \`FAILED\`     | **Failed state**: If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the \`join\` method again. |

    #### Connection state transitions [#connection-state-transitions-1]

    The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases.

    **Stream channel connection state transitions**

    ![stream-channel-connection-states](https://assets-docs.agora.io/images/signaling/stream-channel-connection-states.svg)

    ## Listen for connection state events [#listen-for-connection-state-events]

    The \`linkState\` callback provides the information you need to understand network state transitions.

    \`\`\`js
    rtm.addEventListener('linkState', event => {
        const currentState = event.currentState;
        const previousState = event.previousState;
        const serviceType = event.serviceType;
        const operation = event.operation;
        const reason = event.reason;
        const affectedChannels = event.affectedChannels;
        const timestamp = event.timestamp;
        const isResumed = event.isResumed;
    });
    \`\`\`

    The event provides the following parameters:

    * \`previousState\`: The state from which the change occurred.
    * \`currentState\`: The current state after the change.
    * \`serviceType\`: The type of service for which the connection state has changed.
    * \`operation\`: The operation responsible for the change.
    * \`reason\`: The reason behind the change.

    ## Connection restoration mechanism [#connection-restoration-mechanism]

    After each \`login\` operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel.

    When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the \`DISCONNECTED\` state or the \`SUSPENDED\` state, continuity is automatically restored as long as the user does not actively call the \`logout\` method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to \`IDLE\`. Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses.

    In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the \`affectedChannels\` field returned by the \`linkState\` event. The following example shows sample information contained in the \`affectedChannels\` field :

    \`\`\`json
    "affectedChannels": [
        "ChatRoom",
        "VirtualSpace"
    ]
    \`\`\`

    ## Handling connection errors [#handling-connection-errors]

    The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an \`linkSTate\` callback. Handle these events according to your business needs to optimize the user experience.

    ### Fatal errors [#fatal-errors]

    Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the \`FAILED\` state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the \`login\` or \`join\` method.

    Following is a list of issues that may lead to fatal errors:

    * An invalid or expired token.
    * The user ID of the current user is banned.
    * Signaling is not enabled for the current app ID or the app ID is invalid
    * Edge server resources are unavailable.
    * The \`MESSAGE\` service is not deployed in the current environment.
    * Usage limit exceeded.
    * A stream channel instance was not created.
    * The channel name is illegal.

    ### Non-fatal errors [#non-fatal-errors]

    Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications.

    <CalloutContainer type="info">
      <CalloutDescription>
        The information on this page is applicable to Signaling SDK versions 2.2.0 or later.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-1]

    In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention.

    This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status.

    The Signaling SDK handles the following connection management tasks:

    * Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure.
    * Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously.
    * Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection.
    * Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level.

    ## Connection states [#connection-states-1]

    This section describes the various connection states and their transitions in both message and stream channels.

    ### Message channel connection states [#message-channel-connection-states-1]

    To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals.

    The following table gives an overview of the various connection states:

    | State          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | \`IDLE\`         | **Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the \`logout\` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | \`CONNECTING\`   | **Connecting state**: When you call the \`login\` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | \`CONNECTED\`    | **Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | \`DISCONNECTED\` | **Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to \`SUSPENDED\` if the connection cannot be restored within this time.                                                                                                                                                                                                                                                           |
    | \`SUSPENDED\`    | **Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the \`login\` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the \`logout\` method to return to the \`IDLE\` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status. |
    | \`FAILED\`       | **Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the \`login\` method again.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

    The following figure shows possible transitions between message channel connection states:

    ![Message connection states](https://assets-docs.agora.io/images/signaling/message-channel-transitions.svg)

    #### Connection state transitions [#connection-state-transitions-2]

    The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases.

    **Message channel connection state transitions**

    ![message-channel-connection-states](https://assets-docs.agora.io/images/signaling/message-channel-connection-states.svg)

    ### Stream channel connection states [#stream-channel-connection-states-1]

    In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts.

    The table below provides an overview of the various stream channel connection states:

    | State        | Description                                                                                                                                                                                                                                                                                                                 |
    | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`IDLE\`       | **Idle state**: The SDK enters this state after you create a stream channel instance or after you explicitly call the \`leave\` method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server.                                  |
    | \`CONNECTING\` | **Connecting state**: When you call the \`join\` method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected.                                                                                                      |
    | \`CONNECTED\`  | **Connected state**:  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities.                                                                                                                                                                          |
    | \`FAILED\`     | **Failed state**: If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the \`join\` method again. |

    The following figure shows possible transitions between stream channel connection states:

    ![Stream connection states](https://assets-docs.agora.io/images/signaling/stream-connection-state-transitions.svg)

    #### Connection state transitions [#connection-state-transitions-3]

    The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases.

    **Stream channel connection state transitions**

    ![stream-channel-connection-states](https://assets-docs.agora.io/images/signaling/stream-channel-connection-states.svg)

    ## Listen for connection state events [#listen-for-connection-state-events-1]

    The \`onLinkStateEvent\` callback provides the information you need to understand network state transitions.

    <CodeBlockTabs defaultValue="Java">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="Java">
          Java
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="Kotlin">
          Kotlin
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="Java">
        \`\`\`java
        RtmEventListener listener = new RtmEventListener() {
            @Override
            public void onLinkStateEvent(LinkStateEvent event) {
            }
        };

        rtmClient.addEventListener(listener);
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Kotlin">
        \`\`\`kotlin
        val listener = object : RtmEventListener {
            override fun onLinkStateEvent(event: LinkStateEvent) {
            }
        }

        rtmClient.addEventListener(listener)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    The event provides the following parameters:

    * \`previousState\`: The state from which the change occurred.
    * \`currentState\`: The current state after the change.
    * \`serviceType\`: The type of service for which the connection state has changed.
    * \`operation\`: The operation responsible for the change.
    * \`reason\`: The reason behind the change.

    To remove the callback use:

    <CodeBlockTabs defaultValue="Java">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="Java">
          Java
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="Kotlin">
          Kotlin
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="Java">
        \`\`\`java
        rtmClient.removeEventListener(listener);
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Kotlin">
        \`\`\`kotlin
        rtmClient.removeEventListener(listener)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ## Connection restoration mechanism [#connection-restoration-mechanism-1]

    After each \`login\` operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel.

    When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the \`DISCONNECTED\` state or the \`SUSPENDED\` state, continuity is automatically restored as long as the user does not actively call the \`logout\` method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to \`IDLE\`. Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses.

    In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the \`affectedChannels\` field returned by the \`onLinkStateEvent\` event. The following example shows sample information contained in the \`affectedChannels\` field :

    \`\`\`json
    "affectedChannels" : [
        "ChatRoom",
        "VirtualSpace"
    ]
    \`\`\`

    ## Handling connection errors [#handling-connection-errors-1]

    The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an \`onLinkStateEvent\` callback. Handle these events according to your business needs to optimize the user experience.

    ### Fatal errors [#fatal-errors-1]

    Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the \`FAILED\` state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the \`login\` or \`join\` method.

    Following is a list of issues that may lead to fatal errors:

    * An invalid or expired token.
    * The user ID of the current user is banned.
    * Signaling is not enabled for the current app ID or the app ID is invalid
    * Edge server resources are unavailable.
    * The \`MESSAGE\` service is not deployed in the current environment.
    * Usage limit exceeded.
    * A stream channel instance was not created.
    * The channel name is illegal.

    ### Non-fatal errors [#non-fatal-errors-1]

    Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications.

    <CalloutContainer type="info">
      <CalloutDescription>
        The information on this page is applicable to Signaling SDK versions 2.2.0 or later.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-2]

    In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention.

    This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status.

    The Signaling SDK handles the following connection management tasks:

    * Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure.
    * Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously.
    * Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection.
    * Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level.

    ## Connection states [#connection-states-2]

    This section describes the various connection states and their transitions in both message and stream channels.

    ### Message channel connection states [#message-channel-connection-states-2]

    To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals.

    The following table gives an overview of the various connection states:

    The following figure shows possible transitions between message channel connection states:

    ![Message connection states](https://assets-docs.agora.io/images/signaling/message-channel-transitions.svg)

    #### Connection state transitions [#connection-state-transitions-4]

    The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases.

    **Message channel connection state transitions**

    ![message-channel-connection-states](https://assets-docs.agora.io/images/signaling/message-channel-connection-states.svg)

    ### Stream channel connection states [#stream-channel-connection-states-2]

    In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts.

    The table below provides an overview of the various stream channel connection states:

    <Tabs defaultValue="swift" groupId="language">
      <TabsList>
        <TabsTrigger value="swift">
          Swift
        </TabsTrigger>

        <TabsTrigger value="objc">
          Objective-C
        </TabsTrigger>
      </TabsList>

      <TabsContent value="swift">
        | State          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
        | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
        | \`idle\`         | **Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the \`logout\` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
        | \`connecting\`   | **Connecting state**: When you call the \`login\` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
        | \`connected\`    | **Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
        | \`disconnected\` | **Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to \`suspended\` if the connection cannot be restored within this time.                                                                                                                                                                                                                                                           |
        | \`suspended\`    | **Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the \`login\` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the \`logout\` method to return to the \`Idle\` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status. |
        | \`failed\`       | **Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the \`login\` method again.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
      </TabsContent>

      <TabsContent value="objc">
        | State                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
        | :------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
        | \`AgoraRtmLinkStateIdle\`         | **Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the \`logout\` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
        | \`AgoraRtmLinkStateConnecting\`   | **Connecting state**: When you call the \`loginByToken\` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
        | \`AgoraRtmLinkStateConnected\`    | **Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
        | \`AgoraRtmLinkStateDisconnected\` | **Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to \`AgoraRtmLinkStateSuspended\` if the connection cannot be restored within this time.                                                                                                                                                                                                                                                                  |
        | \`AgoraRtmLinkStateSuspended\`    | **Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the \`loginByToken\` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the \`logout\` method to return to the \`AgoraRtmLinkStateIdle\` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status. |
        | \`AgoraRtmLinkStateFailed\`       | **Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the \`loginByToken\` method again.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
      </TabsContent>
    </Tabs>

    The following figure shows possible transitions between stream channel connection states:

    ![Stream connection states](https://assets-docs.agora.io/images/signaling/stream-connection-state-transitions.svg)

    #### Connection state transitions [#connection-state-transitions-5]

    The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases.

    **Stream channel connection state transitions**

    ![stream-channel-connection-states](https://assets-docs.agora.io/images/signaling/stream-channel-connection-states.svg)

    ## Listen for connection state events [#listen-for-connection-state-events-2]

    The \`didReceiveLinkStateEvent\` callback provides the information you need to understand network state transitions.

    <CodeBlockTabs defaultValue="Swift">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="Swift">
          Swift
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="Objective-C">
          Objective-C
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="Swift">
        \`\`\`swift
        class RtmListenerEx: NSObject, AgoraRtmClientDelegate {
            func rtmKit(_ rtmKit: AgoraRtmClientKit, didReceiveLinkStateEvent event: AgoraRtmLinkStateEvent) {
                // code for handle link state change
            }
        }

        let listenerEx = RtmListenerEx()
        rtm.addDelegate(listenerEx)
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Objective-C">
        \`\`\`objc
        @interface RtmListenerEx : NSObject <AgoraRtmClientDelegate>
        @end

        @implementation RtmListenerEx
        - (void)rtmKit:(AgoraRtmClientKit *)rtmKit didReceiveLinkStateEvent:(AgoraRtmLinkStateEvent *)event {}
        @end

        RtmListenerEx* handlerEx =  [[RtmListenerEx alloc] init];

        [rtm addDelegate:handlerEx];
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    The event provides the following parameters:

    * \`previousState\`: The state from which the change occurred.
    * \`currentState\`: The current state after the change.
    * \`serviceType\`: The type of service for which the connection state has changed.
    * \`operation\`: The operation responsible for the change.
    * \`reason\`: The reason behind the change.

    To remove the callback use:

    <CodeBlockTabs defaultValue="Swift">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="Swift">
          Swift
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="Objective-C">
          Objective-C
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="Swift">
        \`\`\`swift
        rtm.removeDelegate(listenerEx)
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Objective-C">
        \`\`\`objc
        [rtm removeDelegate:handlerEx];
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ## Connection restoration mechanism [#connection-restoration-mechanism-2]

    Each time you log in, the SDK attempts to establish a connection with the server and generates a local session cache. This cache stores information about the channels the user subscribes to or joins, along with temporary user status data. The cache applies to both message and stream channels.

    If the client disconnects temporarily due to a network issue, it automatically tries to reconnect. Upon successful reconnection, the SDK uses the session cache to restore the user's channel subscriptions and temporary user status, ensuring session continuity. Whether the client recovers from a disconnected or suspended state, continuity is automatically maintained as long as the user does not log out. However, if the user logs out, the session cache is cleared, and the connection status returns to idle. The user must then log in again, resubscribe to channels, and reset their temporary user statuses.

    In the event of a sudden network disconnection, you can check the names of affected channels in the \`affectedChannels\` field returned by the \`didReceiveLinkStateEvent\` event. The following example shows sample information contained in the \`affectedChannels\` field:

    \`\`\`json
    "affectedChannels" : [
        "ChatRoom",
        "VirtualSpace"
    ]
    \`\`\`

    ## Handling connection errors [#handling-connection-errors-2]

    The Signaling client automatically recovers from non-fatal error states, and notifies you of the event details through an \`didReceiveLinkStateEvent\` callback. Handle these events according to your business needs to optimize the user experience.

    ### Fatal errors [#fatal-errors-2]

    Some errors are critical, meaning the system cannot automatically recover and enters a failed state. In this state, automatic reconnection is not attempted. To resolve such issues, troubleshoot the errors manually and explicitly trigger reconnection by logging in or rejoining the channel.
    Following is a list of issues that may lead to fatal errors:

    * An invalid or expired token.
    * The user ID of the current user is banned.
    * Signaling is not enabled for the current app ID or the app ID is invalid
    * Edge server resources are unavailable.
    * The message service is not deployed in the current environment.
    * Usage limit exceeded.
    * A stream channel instance was not created.
    * The channel name is illegal.

    ### Non-fatal errors [#non-fatal-errors-2]

    Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications.

    <CalloutContainer type="info">
      <CalloutDescription>
        The information on this page is applicable to Signaling SDK versions 2.2.0 or later.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-3]

    In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention.

    This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status.

    The Signaling SDK handles the following connection management tasks:

    * Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure.
    * Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously.
    * Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection.
    * Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level.

    ## Connection states [#connection-states-3]

    This section describes the various connection states and their transitions in both message and stream channels.

    ### Message channel connection states [#message-channel-connection-states-3]

    To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals.

    The following table gives an overview of the various connection states:

    The following figure shows possible transitions between message channel connection states:

    ![Message connection states](https://assets-docs.agora.io/images/signaling/message-channel-transitions.svg)

    #### Connection state transitions [#connection-state-transitions-6]

    The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases.

    **Message channel connection state transitions**

    ![message-channel-connection-states](https://assets-docs.agora.io/images/signaling/message-channel-connection-states.svg)

    ### Stream channel connection states [#stream-channel-connection-states-3]

    In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts.

    The table below provides an overview of the various stream channel connection states:

    <Tabs defaultValue="swift" groupId="language">
      <TabsList>
        <TabsTrigger value="swift">
          Swift
        </TabsTrigger>

        <TabsTrigger value="objc">
          Objective-C
        </TabsTrigger>
      </TabsList>

      <TabsContent value="swift">
        | State          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
        | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
        | \`idle\`         | **Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the \`logout\` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
        | \`connecting\`   | **Connecting state**: When you call the \`login\` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
        | \`connected\`    | **Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
        | \`disconnected\` | **Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to \`suspended\` if the connection cannot be restored within this time.                                                                                                                                                                                                                                                           |
        | \`suspended\`    | **Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the \`login\` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the \`logout\` method to return to the \`Idle\` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status. |
        | \`failed\`       | **Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the \`login\` method again.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
      </TabsContent>

      <TabsContent value="objc">
        | State                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
        | :------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
        | \`AgoraRtmLinkStateIdle\`         | **Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the \`logout\` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
        | \`AgoraRtmLinkStateConnecting\`   | **Connecting state**: When you call the \`loginByToken\` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
        | \`AgoraRtmLinkStateConnected\`    | **Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
        | \`AgoraRtmLinkStateDisconnected\` | **Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to \`AgoraRtmLinkStateSuspended\` if the connection cannot be restored within this time.                                                                                                                                                                                                                                                                  |
        | \`AgoraRtmLinkStateSuspended\`    | **Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the \`loginByToken\` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the \`logout\` method to return to the \`AgoraRtmLinkStateIdle\` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status. |
        | \`AgoraRtmLinkStateFailed\`       | **Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the \`loginByToken\` method again.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
      </TabsContent>
    </Tabs>

    The following figure shows possible transitions between stream channel connection states:

    ![Stream connection states](https://assets-docs.agora.io/images/signaling/stream-connection-state-transitions.svg)

    #### Connection state transitions [#connection-state-transitions-7]

    The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases.

    **Stream channel connection state transitions**

    ![stream-channel-connection-states](https://assets-docs.agora.io/images/signaling/stream-channel-connection-states.svg)

    ## Listen for connection state events [#listen-for-connection-state-events-3]

    The \`didReceiveLinkStateEvent\` callback provides the information you need to understand network state transitions.

    <CodeBlockTabs defaultValue="Swift">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="Swift">
          Swift
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="Objective-C">
          Objective-C
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="Swift">
        \`\`\`swift
        class RtmListenerEx: NSObject, AgoraRtmClientDelegate {
            func rtmKit(_ rtmKit: AgoraRtmClientKit, didReceiveLinkStateEvent event: AgoraRtmLinkStateEvent) {
                // code for handle link state change
            }
        }

        let listenerEx = RtmListenerEx()
        rtm.addDelegate(listenerEx)
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Objective-C">
        \`\`\`objc
        @interface RtmListenerEx : NSObject <AgoraRtmClientDelegate>
        @end

        @implementation RtmListenerEx
        - (void)rtmKit:(AgoraRtmClientKit *)rtmKit didReceiveLinkStateEvent:(AgoraRtmLinkStateEvent *)event {}
        @end

        RtmListenerEx* handlerEx =  [[RtmListenerEx alloc] init];

        [rtm addDelegate:handlerEx];
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    The event provides the following parameters:

    * \`previousState\`: The state from which the change occurred.
    * \`currentState\`: The current state after the change.
    * \`serviceType\`: The type of service for which the connection state has changed.
    * \`operation\`: The operation responsible for the change.
    * \`reason\`: The reason behind the change.

    To remove the callback use:

    <CodeBlockTabs defaultValue="Swift">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="Swift">
          Swift
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="Objective-C">
          Objective-C
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="Swift">
        \`\`\`swift
        rtm.removeDelegate(listenerEx)
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="Objective-C">
        \`\`\`objc
        [rtm removeDelegate:handlerEx];
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ## Connection restoration mechanism [#connection-restoration-mechanism-3]

    Each time you log in, the SDK attempts to establish a connection with the server and generates a local session cache. This cache stores information about the channels the user subscribes to or joins, along with temporary user status data. The cache applies to both message and stream channels.

    If the client disconnects temporarily due to a network issue, it automatically tries to reconnect. Upon successful reconnection, the SDK uses the session cache to restore the user's channel subscriptions and temporary user status, ensuring session continuity. Whether the client recovers from a disconnected or suspended state, continuity is automatically maintained as long as the user does not log out. However, if the user logs out, the session cache is cleared, and the connection status returns to idle. The user must then log in again, resubscribe to channels, and reset their temporary user statuses.

    In the event of a sudden network disconnection, you can check the names of affected channels in the \`affectedChannels\` field returned by the \`didReceiveLinkStateEvent\` event. The following example shows sample information contained in the \`affectedChannels\` field:

    \`\`\`json
    "affectedChannels" : [
        "ChatRoom",
        "VirtualSpace"
    ]
    \`\`\`

    ## Handling connection errors [#handling-connection-errors-3]

    The Signaling client automatically recovers from non-fatal error states, and notifies you of the event details through an \`didReceiveLinkStateEvent\` callback. Handle these events according to your business needs to optimize the user experience.

    ### Fatal errors [#fatal-errors-3]

    Some errors are critical, meaning the system cannot automatically recover and enters a failed state. In this state, automatic reconnection is not attempted. To resolve such issues, troubleshoot the errors manually and explicitly trigger reconnection by logging in or rejoining the channel.
    Following is a list of issues that may lead to fatal errors:

    * An invalid or expired token.
    * The user ID of the current user is banned.
    * Signaling is not enabled for the current app ID or the app ID is invalid
    * Edge server resources are unavailable.
    * The message service is not deployed in the current environment.
    * Usage limit exceeded.
    * A stream channel instance was not created.
    * The channel name is illegal.

    ### Non-fatal errors [#non-fatal-errors-3]

    Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications.

    <CalloutContainer type="info">
      <CalloutDescription>
        The information on this page is applicable to Signaling SDK versions 2.2.0 or later.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-4]

    In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention.

    This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status.

    The Signaling SDK handles the following connection management tasks:

    * Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure.
    * Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously.
    * Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection.
    * Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level.

    ## Connection states [#connection-states-4]

    This section describes the various connection states and their transitions in both message and stream channels.

    ### Message channel connection states [#message-channel-connection-states-4]

    To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals.

    The following table gives an overview of the various connection states:

    | State          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | \`idle\`         | **Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the \`logout\` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | \`connecting\`   | **Connecting state**: When you call the \`login\` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | \`connected\`    | **Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | \`disconnected\` | **Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to \`suspended\` if the connection cannot be restored within this time.                                                                                                                                                                                                                                                           |
    | \`suspended\`    | **Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the \`login\` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the \`logout\` method to return to the \`idle\` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status. |
    | \`failed\`       | **Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the \`login\` method again.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

    The following figure shows possible transitions between message channel connection states:

    ![Message connection states](https://assets-docs.agora.io/images/signaling/message-channel-transitions.svg)

    #### Connection state transitions [#connection-state-transitions-8]

    The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases.

    **Message channel connection state transitions**

    ![message-channel-connection-states](https://assets-docs.agora.io/images/signaling/message-channel-connection-states.svg)

    ### Stream channel connection states [#stream-channel-connection-states-4]

    In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts.

    The table below provides an overview of the various stream channel connection states:

    | State        | Description                                                                                                                                                                                                                                                                                                                 |
    | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`idle\`       | **Idle state**: The SDK enters this state after you create a stream channel instance or after you explicitly call the \`leave\` method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server.                                  |
    | \`connecting\` | **Connecting state**: When you call the \`join\` method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected.                                                                                                      |
    | \`connected\`  | **Connected state**:  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities.                                                                                                                                                                          |
    | \`failed\`     | **Failed state**: If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the \`join\` method again. |

    The following figure shows possible transitions between stream channel connection states:

    ![Stream connection states](https://assets-docs.agora.io/images/signaling/stream-connection-state-transitions.svg)

    #### Connection state transitions [#connection-state-transitions-9]

    The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases.

    **Stream channel connection state transitions**

    ![stream-channel-connection-states](https://assets-docs.agora.io/images/signaling/stream-channel-connection-states.svg)

    ## Listen for connection state events [#listen-for-connection-state-events-4]

    The \`linkState\` callback provides the information you need to understand network state transitions.

    \`\`\`dart
    rtmClient.addListener(
        linkState: (event) {
            var currentState = event.currentState;
            var previousState = event.previousState;
            var serviceType = event.serviceType;
            var operation = event.operation;
            var reason = event.reason;
            var affectedChannels = event.affectedChannels;
            var unrestoredChannels = event.unrestoredChannels;
            var isResumed = event.isResumed;
            var timestamp = event.timestamp;
        }
    );
    \`\`\`

    The event provides the following parameters:

    * \`previousState\`: The state from which the change occurred.
    * \`currentState\`: The current state after the change.
    * \`serviceType\`: The type of service for which the connection state has changed.
    * \`operation\`: The operation responsible for the change.
    * \`reason\`: The reason behind the change.

    To remove the callback, register it as a named function and pass the same function reference to \`removeListener\`:

    \`\`\`dart
    void onLinkState(LinkStateEvent event) {
        // Handle the state change
    }

    rtmClient.addListener(linkState: onLinkState);

    // Later, remove the callback
    rtmClient.removeListener(linkState: onLinkState);
    \`\`\`

    ## Connection restoration mechanism [#connection-restoration-mechanism-4]

    After each \`login\` operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel.

    When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the \`disconnected\` state or the \`suspended\` state, continuity is automatically restored as long as the user does not actively call the \`logout\` method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to \`idle\`. Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses.

    In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the \`affectedChannels\` field returned by the \`linkState\` event. The following example shows sample information contained in the \`affectedChannels\` field :

    \`\`\`js
    affectedChannels: ['ChatRoom', 'VirtualSpace'],
    \`\`\`

    ## Handling connection errors [#handling-connection-errors-4]

    The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an \`linkState\` callback. Handle these events according to your business needs to optimize the user experience.

    ### Fatal errors [#fatal-errors-4]

    Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the \`failed\` state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the \`login\` or \`join\` method.

    Following is a list of issues that may lead to fatal errors:

    * An invalid or expired token.
    * The user ID of the current user is banned.
    * Signaling is not enabled for the current app ID or the app ID is invalid
    * Edge server resources are unavailable.
    * The \`MESSAGE\` service is not deployed in the current environment.
    * Usage limit exceeded.
    * A stream channel instance was not created.
    * The channel name is illegal.

    ### Non-fatal errors [#non-fatal-errors-4]

    Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications.

    <CalloutContainer type="info">
      <CalloutDescription>
        The information on this page is applicable to Signaling SDK versions 2.2.0 or later.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-5]

    In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention.

    This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status.

    The Signaling SDK handles the following connection management tasks:

    * Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure.
    * Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously.
    * Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection.
    * Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level.

    ## Connection states [#connection-states-5]

    This section describes the various connection states and their transitions in both message and stream channels.

    ### Message channel connection states [#message-channel-connection-states-5]

    To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals.

    The following table gives an overview of the various connection states:

    | State                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | :---------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`RTM_LINK_STATE_IDLE\`         | **Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the \`logout\` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`RTM_LINK_STATE_CONNECTING\`   | **Connecting state**: When you call the \`login\` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
    | \`RTM_LINK_STATE_CONNECTED\`    | **Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | \`RTM_LINK_STATE_DISCONNECTED\` | **Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to \`RTM_LINK_STATE_SUSPENDED\` if the connection cannot be restored within this time.                                                                                                                                                                                                                                                           |
    | \`RTM_LINK_STATE_SUSPENDED\`    | **Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the \`login\` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the \`logout\` method to return to the \`RTM_LINK_STATE_IDLE\` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status. |
    | \`RTM_LINK_STATE_FAILED\`       | **Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the \`login\` method again.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

    The following figure shows possible transitions between message channel connection states:

    ![Message connection states](https://assets-docs.agora.io/images/signaling/message-channel-transitions.svg)

    #### Connection state transitions [#connection-state-transitions-10]

    The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases.

    **Message channel connection state transitions**

    ![message-channel-connection-states](https://assets-docs.agora.io/images/signaling/message-channel-connection-states.svg)

    ### Stream channel connection states [#stream-channel-connection-states-5]

    In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts.

    The table below provides an overview of the various stream channel connection states:

    | State                       | Description                                                                                                                                                                                                                                                                                                                 |
    | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`RTM_LINK_STATE_IDLE\`       | **Idle state**: The SDK enters this state after you create a stream channel instance or after you explicitly call the \`leave\` method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server.                                  |
    | \`RTM_LINK_STATE_CONNECTING\` | **Connecting state**: When you call the \`join\` method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected.                                                                                                      |
    | \`RTM_LINK_STATE_CONNECTED\`  | **Connected state**:  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities.                                                                                                                                                                          |
    | \`RTM_LINK_STATE_FAILED\`     | **Failed state**: If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the \`join\` method again. |

    The following figure shows possible transitions between stream channel connection states:

    ![Stream connection states](https://assets-docs.agora.io/images/signaling/stream-connection-state-transitions.svg)

    #### Connection state transitions [#connection-state-transitions-11]

    The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases.

    **Stream channel connection state transitions**

    ![stream-channel-connection-states](https://assets-docs.agora.io/images/signaling/stream-channel-connection-states.svg)

    ## Listen for connection state events [#listen-for-connection-state-events-5]

    The \`onLinkStateEvent\` callback provides the information you need to understand network state transitions.

    \`\`\`cpp
    class RtmEventHandler : public IRtmEventHandler {
        void onLinkStateEvent(const LinkStateEvent& event) override {}
        // ...
    };

    RtmConfig config;
    config.appId = "appid";
    config.userId = "userId";
    config.eventHandler = new RtmEventHandler();
    \`\`\`

    The event provides the following parameters:

    * \`previousState\`: The state from which the change occurred.
    * \`currentState\`: The current state after the change.
    * \`serviceType\`: The type of service for which the connection state has changed.
    * \`operation\`: The operation responsible for the change.
    * \`reason\`: The reason behind the change.

    ## Connection restoration mechanism [#connection-restoration-mechanism-5]

    After each \`login\` operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel.

    When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the \`RTM_LINK_STATE_DISCONNECTED\` state or the \`RTM_LINK_STATE_SUSPENDED\` state, continuity is automatically restored as long as the user does not actively call the \`logout\` method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to \`RTM_LINK_STATE_IDLE\`. Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses.

    In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the \`affectedChannels\` field returned by the \`onLinkStateEvent\` event. The following example shows sample information contained in the \`affectedChannels\` field :

    \`\`\`json
    "affectedChannels" : [
        "ChatRoom",
        "VirtualSpace"
    ]
    \`\`\`

    ## Handling connection errors [#handling-connection-errors-5]

    The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an \`onLinkStateEvent\` callback. Handle these events according to your business needs to optimize the user experience.

    ### Fatal errors [#fatal-errors-5]

    Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the \`RTM_LINK_STATE_FAILED\` state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the \`login\` or \`join\` method.

    Following is a list of issues that may lead to fatal errors:

    * An invalid or expired token.
    * The user ID of the current user is banned.
    * Signaling is not enabled for the current app ID or the app ID is invalid
    * Edge server resources are unavailable.
    * The \`RTM_SERVICE_TYPE_MESSAGE\` service is not deployed in the current environment.
    * Usage limit exceeded.
    * A stream channel instance was not created.
    * The channel name is illegal.

    ### Non-fatal errors [#non-fatal-errors-5]

    Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="linux-cpp" />

    During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications.

    <CalloutContainer type="info">
      <CalloutDescription>
        The information on this page is applicable to Signaling SDK versions 2.2.0 or later.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-6]

    In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention.

    This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status.

    The Signaling SDK handles the following connection management tasks:

    * Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure.
    * Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously.
    * Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection.
    * Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level.

    ## Connection states [#connection-states-6]

    This section describes the various connection states and their transitions in both message and stream channels.

    ### Message channel connection states [#message-channel-connection-states-6]

    To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals.

    The following table gives an overview of the various connection states:

    | State                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | :---------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`RTM_LINK_STATE_IDLE\`         | **Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the \`logout\` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`RTM_LINK_STATE_CONNECTING\`   | **Connecting state**: When you call the \`login\` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
    | \`RTM_LINK_STATE_CONNECTED\`    | **Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | \`RTM_LINK_STATE_DISCONNECTED\` | **Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to \`RTM_LINK_STATE_SUSPENDED\` if the connection cannot be restored within this time.                                                                                                                                                                                                                                                           |
    | \`RTM_LINK_STATE_SUSPENDED\`    | **Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the \`login\` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the \`logout\` method to return to the \`RTM_LINK_STATE_IDLE\` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status. |
    | \`RTM_LINK_STATE_FAILED\`       | **Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the \`login\` method again.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

    The following figure shows possible transitions between message channel connection states:

    ![Message connection states](https://assets-docs.agora.io/images/signaling/message-channel-transitions.svg)

    #### Connection state transitions [#connection-state-transitions-12]

    The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases.

    **Message channel connection state transitions**

    ![message-channel-connection-states](https://assets-docs.agora.io/images/signaling/message-channel-connection-states.svg)

    ### Stream channel connection states [#stream-channel-connection-states-6]

    In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts.

    The table below provides an overview of the various stream channel connection states:

    | State                       | Description                                                                                                                                                                                                                                                                                                                 |
    | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`RTM_LINK_STATE_IDLE\`       | **Idle state**: The SDK enters this state after you create a stream channel instance or after you explicitly call the \`leave\` method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server.                                  |
    | \`RTM_LINK_STATE_CONNECTING\` | **Connecting state**: When you call the \`join\` method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected.                                                                                                      |
    | \`RTM_LINK_STATE_CONNECTED\`  | **Connected state**:  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities.                                                                                                                                                                          |
    | \`RTM_LINK_STATE_FAILED\`     | **Failed state**: If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the \`join\` method again. |

    The following figure shows possible transitions between stream channel connection states:

    ![Stream connection states](https://assets-docs.agora.io/images/signaling/stream-connection-state-transitions.svg)

    #### Connection state transitions [#connection-state-transitions-13]

    The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases.

    **Stream channel connection state transitions**

    ![stream-channel-connection-states](https://assets-docs.agora.io/images/signaling/stream-channel-connection-states.svg)

    ## Listen for connection state events [#listen-for-connection-state-events-6]

    The \`onLinkStateEvent\` callback provides the information you need to understand network state transitions.

    \`\`\`cpp
    class RtmEventHandler : public IRtmEventHandler {
        void onLinkStateEvent(const LinkStateEvent& event) override {}
        // ...
    };

    RtmConfig config;
    config.appId = "appid";
    config.userId = "userId";
    config.eventHandler = new RtmEventHandler();
    \`\`\`

    The event provides the following parameters:

    * \`previousState\`: The state from which the change occurred.
    * \`currentState\`: The current state after the change.
    * \`serviceType\`: The type of service for which the connection state has changed.
    * \`operation\`: The operation responsible for the change.
    * \`reason\`: The reason behind the change.

    ## Connection restoration mechanism [#connection-restoration-mechanism-6]

    After each \`login\` operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel.

    When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the \`RTM_LINK_STATE_DISCONNECTED\` state or the \`RTM_LINK_STATE_SUSPENDED\` state, continuity is automatically restored as long as the user does not actively call the \`logout\` method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to \`RTM_LINK_STATE_IDLE\`. Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses.

    In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the \`affectedChannels\` field returned by the \`onLinkStateEvent\` event. The following example shows sample information contained in the \`affectedChannels\` field :

    \`\`\`json
    "affectedChannels" : [
        "ChatRoom",
        "VirtualSpace"
    ]
    \`\`\`

    ## Handling connection errors [#handling-connection-errors-6]

    The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an \`onLinkStateEvent\` callback. Handle these events according to your business needs to optimize the user experience.

    ### Fatal errors [#fatal-errors-6]

    Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the \`RTM_LINK_STATE_FAILED\` state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the \`login\` or \`join\` method.

    Following is a list of issues that may lead to fatal errors:

    * An invalid or expired token.
    * The user ID of the current user is banned.
    * Signaling is not enabled for the current app ID or the app ID is invalid
    * Edge server resources are unavailable.
    * The \`RTM_SERVICE_TYPE_MESSAGE\` service is not deployed in the current environment.
    * Usage limit exceeded.
    * A stream channel instance was not created.
    * The channel name is illegal.

    ### Non-fatal errors [#non-fatal-errors-6]

    Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-java">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="linux-java" />

    During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications.

    <CalloutContainer type="info">
      <CalloutDescription>
        The information on this page is applicable to Signaling SDK versions 2.2.0 or later.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-7]

    In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention.

    This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status.

    The Signaling SDK handles the following connection management tasks:

    * Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure.
    * Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously.
    * Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection.
    * Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level.

    ## Connection states [#connection-states-7]

    This section describes the various connection states and their transitions in both message and stream channels.

    ### Message channel connection states [#message-channel-connection-states-7]

    To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals.

    The following table gives an overview of the various connection states:

    | State          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | \`IDLE\`         | **Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the \`logout\` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | \`CONNECTING\`   | **Connecting state**: When you call the \`login\` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | \`CONNECTED\`    | **Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | \`DISCONNECTED\` | **Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to \`SUSPENDED\` if the connection cannot be restored within this time.                                                                                                                                                                                                                                                           |
    | \`SUSPENDED\`    | **Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the \`login\` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the \`logout\` method to return to the \`IDLE\` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status. |
    | \`FAILED\`       | **Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the \`login\` method again.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

    The following figure shows possible transitions between message channel connection states:

    ![Message connection states](https://assets-docs.agora.io/images/signaling/message-channel-transitions.svg)

    #### Connection state transitions [#connection-state-transitions-14]

    The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases.

    **Message channel connection state transitions**

    ![message-channel-connection-states](https://assets-docs.agora.io/images/signaling/message-channel-connection-states.svg)

    ### Stream channel connection states [#stream-channel-connection-states-7]

    In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts.

    The table below provides an overview of the various stream channel connection states:

    | State        | Description                                                                                                                                                                                                                                                                                                                 |
    | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`IDLE\`       | **Idle state**: The SDK enters this state after you create a stream channel instance or after you explicitly call the \`leave\` method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server.                                  |
    | \`CONNECTING\` | **Connecting state**: When you call the \`join\` method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected.                                                                                                      |
    | \`CONNECTED\`  | **Connected state**:  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities.                                                                                                                                                                          |
    | \`FAILED\`     | **Failed state**: If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the \`join\` method again. |

    The following figure shows possible transitions between stream channel connection states:

    ![Stream connection states](https://assets-docs.agora.io/images/signaling/stream-connection-state-transitions.svg)

    #### Connection state transitions [#connection-state-transitions-15]

    The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases.

    **Stream channel connection state transitions**

    ![stream-channel-connection-states](https://assets-docs.agora.io/images/signaling/stream-channel-connection-states.svg)

    ## Listen for connection state events [#listen-for-connection-state-events-7]

    The \`onLinkStateEvent\` callback provides the information you need to understand network state transitions.

    \`\`\`java
    RtmEventListener listener = new RtmEventListener() {
        @Override
        public void onLinkStateEvent(LinkStateEvent event) {
        }
    };

    rtmClient.addEventListener(listener);
    \`\`\`

    The event provides the following parameters:

    * \`previousState\`: The state from which the change occurred.
    * \`currentState\`: The current state after the change.
    * \`serviceType\`: The type of service for which the connection state has changed.
    * \`operation\`: The operation responsible for the change.
    * \`reason\`: The reason behind the change.

    To remove the callback use:

    \`\`\`java
    rtmClient.removeEventListener(listener);
    \`\`\`

    ## Connection restoration mechanism [#connection-restoration-mechanism-7]

    After each \`login\` operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel.

    When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the \`DISCONNECTED\` state or the \`SUSPENDED\` state, continuity is automatically restored as long as the user does not actively call the \`logout\` method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to \`IDLE\`. Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses.

    In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the \`affectedChannels\` field returned by the \`onLinkStateEvent\` event. The following example shows sample information contained in the \`affectedChannels\` field :

    \`\`\`json
    "affectedChannels" : [
        "ChatRoom",
        "VirtualSpace"
    ]
    \`\`\`

    ## Handling connection errors [#handling-connection-errors-7]

    The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an \`onLinkStateEvent\` callback. Handle these events according to your business needs to optimize the user experience.

    ### Fatal errors [#fatal-errors-7]

    Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the \`FAILED\` state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the \`login\` or \`join\` method.

    Following is a list of issues that may lead to fatal errors:

    * An invalid or expired token.
    * The user ID of the current user is banned.
    * Signaling is not enabled for the current app ID or the app ID is invalid
    * Edge server resources are unavailable.
    * The \`MESSAGE\` service is not deployed in the current environment.
    * Usage limit exceeded.
    * A stream channel instance was not created.
    * The channel name is illegal.

    ### Non-fatal errors [#non-fatal-errors-7]

    Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications."
  }, {
    heading: undefined,
    content: "The information on this page is applicable to Signaling SDK versions 2.2.0 or later."
  }, {
    heading: "understand-the-tech",
    content: "In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention."
  }, {
    heading: "understand-the-tech",
    content: "This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status."
  }, {
    heading: "understand-the-tech",
    content: "The Signaling SDK handles the following connection management tasks:"
  }, {
    heading: "understand-the-tech",
    content: "Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure."
  }, {
    heading: "understand-the-tech",
    content: "Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously."
  }, {
    heading: "understand-the-tech",
    content: "Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection."
  }, {
    heading: "understand-the-tech",
    content: "Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level."
  }, {
    heading: "connection-states",
    content: "This section describes the various connection states and their transitions in both message and stream channels."
  }, {
    heading: "message-channel-connection-states",
    content: "To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals."
  }, {
    heading: "message-channel-connection-states",
    content: "The following table gives an overview of the various connection states:"
  }, {
    heading: "message-channel-connection-states",
    content: "State"
  }, {
    heading: "message-channel-connection-states",
    content: "Description"
  }, {
    heading: "message-channel-connection-states",
    content: "`IDLE`"
  }, {
    heading: "message-channel-connection-states",
    content: "**Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the `logout` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."
  }, {
    heading: "message-channel-connection-states",
    content: "`CONNECTING`"
  }, {
    heading: "message-channel-connection-states",
    content: "**Connecting state**: When you call the `login` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."
  }, {
    heading: "message-channel-connection-states",
    content: "`CONNECTED`"
  }, {
    heading: "message-channel-connection-states",
    content: "**Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities."
  }, {
    heading: "message-channel-connection-states",
    content: "`DISCONNECTED`"
  }, {
    heading: "message-channel-connection-states",
    content: "**Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to `SUSPENDED` if the connection cannot be restored within this time."
  }, {
    heading: "message-channel-connection-states",
    content: "`SUSPENDED`"
  }, {
    heading: "message-channel-connection-states",
    content: "**Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the `login` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the `logout` method to return to the `IDLE` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."
  }, {
    heading: "message-channel-connection-states",
    content: "`FAILED`"
  }, {
    heading: "message-channel-connection-states",
    content: "**Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the `login` method again."
  }, {
    heading: "connection-state-transitions",
    content: "The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases."
  }, {
    heading: "connection-state-transitions",
    content: "**Message channel connection state transitions**"
  }, {
    heading: "stream-channel-connection-states",
    content: "In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts."
  }, {
    heading: "stream-channel-connection-states",
    content: "The table below provides an overview of the various stream channel connection states:"
  }, {
    heading: "stream-channel-connection-states",
    content: "State"
  }, {
    heading: "stream-channel-connection-states",
    content: "Description"
  }, {
    heading: "stream-channel-connection-states",
    content: "`IDLE`"
  }, {
    heading: "stream-channel-connection-states",
    content: "**Idle state**: The SDK enters this state after you create a stream channel instance or after you explicitly call the `leave` method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server."
  }, {
    heading: "stream-channel-connection-states",
    content: "`CONNECTING`"
  }, {
    heading: "stream-channel-connection-states",
    content: "**Connecting state**: When you call the `join` method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."
  }, {
    heading: "stream-channel-connection-states",
    content: "`CONNECTED`"
  }, {
    heading: "stream-channel-connection-states",
    content: "**Connected state**:  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities."
  }, {
    heading: "stream-channel-connection-states",
    content: "`FAILED`"
  }, {
    heading: "stream-channel-connection-states",
    content: "**Failed state**: If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the `join` method again."
  }, {
    heading: "connection-state-transitions-1",
    content: "The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases."
  }, {
    heading: "connection-state-transitions-1",
    content: "**Stream channel connection state transitions**"
  }, {
    heading: "listen-for-connection-state-events",
    content: "The `linkState` callback provides the information you need to understand network state transitions."
  }, {
    heading: "listen-for-connection-state-events",
    content: "The event provides the following parameters:"
  }, {
    heading: "listen-for-connection-state-events",
    content: "`previousState`: The state from which the change occurred."
  }, {
    heading: "listen-for-connection-state-events",
    content: "`currentState`: The current state after the change."
  }, {
    heading: "listen-for-connection-state-events",
    content: "`serviceType`: The type of service for which the connection state has changed."
  }, {
    heading: "listen-for-connection-state-events",
    content: "`operation`: The operation responsible for the change."
  }, {
    heading: "listen-for-connection-state-events",
    content: "`reason`: The reason behind the change."
  }, {
    heading: "connection-restoration-mechanism",
    content: "After each `login` operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel."
  }, {
    heading: "connection-restoration-mechanism",
    content: "When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the `DISCONNECTED` state or the `SUSPENDED` state, continuity is automatically restored as long as the user does not actively call the `logout` method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to `IDLE`. Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses."
  }, {
    heading: "connection-restoration-mechanism",
    content: "In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the `affectedChannels` field returned by the `linkState` event. The following example shows sample information contained in the `affectedChannels` field :"
  }, {
    heading: "handling-connection-errors",
    content: "The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an `linkSTate` callback. Handle these events according to your business needs to optimize the user experience."
  }, {
    heading: "fatal-errors",
    content: "Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the `FAILED` state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the `login` or `join` method."
  }, {
    heading: "fatal-errors",
    content: "Following is a list of issues that may lead to fatal errors:"
  }, {
    heading: "fatal-errors",
    content: "An invalid or expired token."
  }, {
    heading: "fatal-errors",
    content: "The user ID of the current user is banned."
  }, {
    heading: "fatal-errors",
    content: "Signaling is not enabled for the current app ID or the app ID is invalid"
  }, {
    heading: "fatal-errors",
    content: "Edge server resources are unavailable."
  }, {
    heading: "fatal-errors",
    content: "The `MESSAGE` service is not deployed in the current environment."
  }, {
    heading: "fatal-errors",
    content: "Usage limit exceeded."
  }, {
    heading: "fatal-errors",
    content: "A stream channel instance was not created."
  }, {
    heading: "fatal-errors",
    content: "The channel name is illegal."
  }, {
    heading: "non-fatal-errors",
    content: "Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status."
  }, {
    heading: "non-fatal-errors",
    content: "During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications."
  }, {
    heading: "non-fatal-errors",
    content: "The information on this page is applicable to Signaling SDK versions 2.2.0 or later."
  }, {
    heading: "understand-the-tech-1",
    content: "In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention."
  }, {
    heading: "understand-the-tech-1",
    content: "This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status."
  }, {
    heading: "understand-the-tech-1",
    content: "The Signaling SDK handles the following connection management tasks:"
  }, {
    heading: "understand-the-tech-1",
    content: "Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure."
  }, {
    heading: "understand-the-tech-1",
    content: "Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously."
  }, {
    heading: "understand-the-tech-1",
    content: "Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection."
  }, {
    heading: "understand-the-tech-1",
    content: "Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level."
  }, {
    heading: "connection-states-1",
    content: "This section describes the various connection states and their transitions in both message and stream channels."
  }, {
    heading: "message-channel-connection-states-1",
    content: "To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals."
  }, {
    heading: "message-channel-connection-states-1",
    content: "The following table gives an overview of the various connection states:"
  }, {
    heading: "message-channel-connection-states-1",
    content: "State"
  }, {
    heading: "message-channel-connection-states-1",
    content: "Description"
  }, {
    heading: "message-channel-connection-states-1",
    content: "`IDLE`"
  }, {
    heading: "message-channel-connection-states-1",
    content: "**Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the `logout` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."
  }, {
    heading: "message-channel-connection-states-1",
    content: "`CONNECTING`"
  }, {
    heading: "message-channel-connection-states-1",
    content: "**Connecting state**: When you call the `login` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."
  }, {
    heading: "message-channel-connection-states-1",
    content: "`CONNECTED`"
  }, {
    heading: "message-channel-connection-states-1",
    content: "**Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities."
  }, {
    heading: "message-channel-connection-states-1",
    content: "`DISCONNECTED`"
  }, {
    heading: "message-channel-connection-states-1",
    content: "**Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to `SUSPENDED` if the connection cannot be restored within this time."
  }, {
    heading: "message-channel-connection-states-1",
    content: "`SUSPENDED`"
  }, {
    heading: "message-channel-connection-states-1",
    content: "**Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the `login` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the `logout` method to return to the `IDLE` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."
  }, {
    heading: "message-channel-connection-states-1",
    content: "`FAILED`"
  }, {
    heading: "message-channel-connection-states-1",
    content: "**Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the `login` method again."
  }, {
    heading: "message-channel-connection-states-1",
    content: "The following figure shows possible transitions between message channel connection states:"
  }, {
    heading: "connection-state-transitions-2",
    content: "The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases."
  }, {
    heading: "connection-state-transitions-2",
    content: "**Message channel connection state transitions**"
  }, {
    heading: "stream-channel-connection-states-1",
    content: "In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts."
  }, {
    heading: "stream-channel-connection-states-1",
    content: "The table below provides an overview of the various stream channel connection states:"
  }, {
    heading: "stream-channel-connection-states-1",
    content: "State"
  }, {
    heading: "stream-channel-connection-states-1",
    content: "Description"
  }, {
    heading: "stream-channel-connection-states-1",
    content: "`IDLE`"
  }, {
    heading: "stream-channel-connection-states-1",
    content: "**Idle state**: The SDK enters this state after you create a stream channel instance or after you explicitly call the `leave` method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server."
  }, {
    heading: "stream-channel-connection-states-1",
    content: "`CONNECTING`"
  }, {
    heading: "stream-channel-connection-states-1",
    content: "**Connecting state**: When you call the `join` method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."
  }, {
    heading: "stream-channel-connection-states-1",
    content: "`CONNECTED`"
  }, {
    heading: "stream-channel-connection-states-1",
    content: "**Connected state**:  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities."
  }, {
    heading: "stream-channel-connection-states-1",
    content: "`FAILED`"
  }, {
    heading: "stream-channel-connection-states-1",
    content: "**Failed state**: If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the `join` method again."
  }, {
    heading: "stream-channel-connection-states-1",
    content: "The following figure shows possible transitions between stream channel connection states:"
  }, {
    heading: "connection-state-transitions-3",
    content: "The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases."
  }, {
    heading: "connection-state-transitions-3",
    content: "**Stream channel connection state transitions**"
  }, {
    heading: "listen-for-connection-state-events-1",
    content: "The `onLinkStateEvent` callback provides the information you need to understand network state transitions."
  }, {
    heading: "listen-for-connection-state-events-1",
    content: "The event provides the following parameters:"
  }, {
    heading: "listen-for-connection-state-events-1",
    content: "`previousState`: The state from which the change occurred."
  }, {
    heading: "listen-for-connection-state-events-1",
    content: "`currentState`: The current state after the change."
  }, {
    heading: "listen-for-connection-state-events-1",
    content: "`serviceType`: The type of service for which the connection state has changed."
  }, {
    heading: "listen-for-connection-state-events-1",
    content: "`operation`: The operation responsible for the change."
  }, {
    heading: "listen-for-connection-state-events-1",
    content: "`reason`: The reason behind the change."
  }, {
    heading: "listen-for-connection-state-events-1",
    content: "To remove the callback use:"
  }, {
    heading: "connection-restoration-mechanism-1",
    content: "After each `login` operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel."
  }, {
    heading: "connection-restoration-mechanism-1",
    content: "When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the `DISCONNECTED` state or the `SUSPENDED` state, continuity is automatically restored as long as the user does not actively call the `logout` method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to `IDLE`. Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses."
  }, {
    heading: "connection-restoration-mechanism-1",
    content: "In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the `affectedChannels` field returned by the `onLinkStateEvent` event. The following example shows sample information contained in the `affectedChannels` field :"
  }, {
    heading: "handling-connection-errors-1",
    content: "The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an `onLinkStateEvent` callback. Handle these events according to your business needs to optimize the user experience."
  }, {
    heading: "fatal-errors-1",
    content: "Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the `FAILED` state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the `login` or `join` method."
  }, {
    heading: "fatal-errors-1",
    content: "Following is a list of issues that may lead to fatal errors:"
  }, {
    heading: "fatal-errors-1",
    content: "An invalid or expired token."
  }, {
    heading: "fatal-errors-1",
    content: "The user ID of the current user is banned."
  }, {
    heading: "fatal-errors-1",
    content: "Signaling is not enabled for the current app ID or the app ID is invalid"
  }, {
    heading: "fatal-errors-1",
    content: "Edge server resources are unavailable."
  }, {
    heading: "fatal-errors-1",
    content: "The `MESSAGE` service is not deployed in the current environment."
  }, {
    heading: "fatal-errors-1",
    content: "Usage limit exceeded."
  }, {
    heading: "fatal-errors-1",
    content: "A stream channel instance was not created."
  }, {
    heading: "fatal-errors-1",
    content: "The channel name is illegal."
  }, {
    heading: "non-fatal-errors-1",
    content: "Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status."
  }, {
    heading: "non-fatal-errors-1",
    content: "During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications."
  }, {
    heading: "non-fatal-errors-1",
    content: "The information on this page is applicable to Signaling SDK versions 2.2.0 or later."
  }, {
    heading: "understand-the-tech-2",
    content: "In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention."
  }, {
    heading: "understand-the-tech-2",
    content: "This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status."
  }, {
    heading: "understand-the-tech-2",
    content: "The Signaling SDK handles the following connection management tasks:"
  }, {
    heading: "understand-the-tech-2",
    content: "Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure."
  }, {
    heading: "understand-the-tech-2",
    content: "Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously."
  }, {
    heading: "understand-the-tech-2",
    content: "Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection."
  }, {
    heading: "understand-the-tech-2",
    content: "Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level."
  }, {
    heading: "connection-states-2",
    content: "This section describes the various connection states and their transitions in both message and stream channels."
  }, {
    heading: "message-channel-connection-states-2",
    content: "To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals."
  }, {
    heading: "message-channel-connection-states-2",
    content: "The following table gives an overview of the various connection states:"
  }, {
    heading: "message-channel-connection-states-2",
    content: "The following figure shows possible transitions between message channel connection states:"
  }, {
    heading: "connection-state-transitions-4",
    content: "The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases."
  }, {
    heading: "connection-state-transitions-4",
    content: "**Message channel connection state transitions**"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts."
  }, {
    heading: "stream-channel-connection-states-2",
    content: "The table below provides an overview of the various stream channel connection states:"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "State"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "Description"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "`idle`"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "**Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the `logout` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."
  }, {
    heading: "stream-channel-connection-states-2",
    content: "`connecting`"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "**Connecting state**: When you call the `login` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."
  }, {
    heading: "stream-channel-connection-states-2",
    content: "`connected`"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "**Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities."
  }, {
    heading: "stream-channel-connection-states-2",
    content: "`disconnected`"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "**Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to `suspended` if the connection cannot be restored within this time."
  }, {
    heading: "stream-channel-connection-states-2",
    content: "`suspended`"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "**Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the `login` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the `logout` method to return to the `Idle` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."
  }, {
    heading: "stream-channel-connection-states-2",
    content: "`failed`"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "**Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the `login` method again."
  }, {
    heading: "stream-channel-connection-states-2",
    content: "State"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "Description"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "`AgoraRtmLinkStateIdle`"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "**Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the `logout` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."
  }, {
    heading: "stream-channel-connection-states-2",
    content: "`AgoraRtmLinkStateConnecting`"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "**Connecting state**: When you call the `loginByToken` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."
  }, {
    heading: "stream-channel-connection-states-2",
    content: "`AgoraRtmLinkStateConnected`"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "**Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities."
  }, {
    heading: "stream-channel-connection-states-2",
    content: "`AgoraRtmLinkStateDisconnected`"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "**Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to `AgoraRtmLinkStateSuspended` if the connection cannot be restored within this time."
  }, {
    heading: "stream-channel-connection-states-2",
    content: "`AgoraRtmLinkStateSuspended`"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "**Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the `loginByToken` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the `logout` method to return to the `AgoraRtmLinkStateIdle` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."
  }, {
    heading: "stream-channel-connection-states-2",
    content: "`AgoraRtmLinkStateFailed`"
  }, {
    heading: "stream-channel-connection-states-2",
    content: "**Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the `loginByToken` method again."
  }, {
    heading: "stream-channel-connection-states-2",
    content: "The following figure shows possible transitions between stream channel connection states:"
  }, {
    heading: "connection-state-transitions-5",
    content: "The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases."
  }, {
    heading: "connection-state-transitions-5",
    content: "**Stream channel connection state transitions**"
  }, {
    heading: "listen-for-connection-state-events-2",
    content: "The `didReceiveLinkStateEvent` callback provides the information you need to understand network state transitions."
  }, {
    heading: "listen-for-connection-state-events-2",
    content: "The event provides the following parameters:"
  }, {
    heading: "listen-for-connection-state-events-2",
    content: "`previousState`: The state from which the change occurred."
  }, {
    heading: "listen-for-connection-state-events-2",
    content: "`currentState`: The current state after the change."
  }, {
    heading: "listen-for-connection-state-events-2",
    content: "`serviceType`: The type of service for which the connection state has changed."
  }, {
    heading: "listen-for-connection-state-events-2",
    content: "`operation`: The operation responsible for the change."
  }, {
    heading: "listen-for-connection-state-events-2",
    content: "`reason`: The reason behind the change."
  }, {
    heading: "listen-for-connection-state-events-2",
    content: "To remove the callback use:"
  }, {
    heading: "connection-restoration-mechanism-2",
    content: "Each time you log in, the SDK attempts to establish a connection with the server and generates a local session cache. This cache stores information about the channels the user subscribes to or joins, along with temporary user status data. The cache applies to both message and stream channels."
  }, {
    heading: "connection-restoration-mechanism-2",
    content: "If the client disconnects temporarily due to a network issue, it automatically tries to reconnect. Upon successful reconnection, the SDK uses the session cache to restore the user's channel subscriptions and temporary user status, ensuring session continuity. Whether the client recovers from a disconnected or suspended state, continuity is automatically maintained as long as the user does not log out. However, if the user logs out, the session cache is cleared, and the connection status returns to idle. The user must then log in again, resubscribe to channels, and reset their temporary user statuses."
  }, {
    heading: "connection-restoration-mechanism-2",
    content: "In the event of a sudden network disconnection, you can check the names of affected channels in the `affectedChannels` field returned by the `didReceiveLinkStateEvent` event. The following example shows sample information contained in the `affectedChannels` field:"
  }, {
    heading: "handling-connection-errors-2",
    content: "The Signaling client automatically recovers from non-fatal error states, and notifies you of the event details through an `didReceiveLinkStateEvent` callback. Handle these events according to your business needs to optimize the user experience."
  }, {
    heading: "fatal-errors-2",
    content: `Some errors are critical, meaning the system cannot automatically recover and enters a failed state. In this state, automatic reconnection is not attempted. To resolve such issues, troubleshoot the errors manually and explicitly trigger reconnection by logging in or rejoining the channel.
Following is a list of issues that may lead to fatal errors:`
  }, {
    heading: "fatal-errors-2",
    content: "An invalid or expired token."
  }, {
    heading: "fatal-errors-2",
    content: "The user ID of the current user is banned."
  }, {
    heading: "fatal-errors-2",
    content: "Signaling is not enabled for the current app ID or the app ID is invalid"
  }, {
    heading: "fatal-errors-2",
    content: "Edge server resources are unavailable."
  }, {
    heading: "fatal-errors-2",
    content: "The message service is not deployed in the current environment."
  }, {
    heading: "fatal-errors-2",
    content: "Usage limit exceeded."
  }, {
    heading: "fatal-errors-2",
    content: "A stream channel instance was not created."
  }, {
    heading: "fatal-errors-2",
    content: "The channel name is illegal."
  }, {
    heading: "non-fatal-errors-2",
    content: "Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status."
  }, {
    heading: "non-fatal-errors-2",
    content: "During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications."
  }, {
    heading: "non-fatal-errors-2",
    content: "The information on this page is applicable to Signaling SDK versions 2.2.0 or later."
  }, {
    heading: "understand-the-tech-3",
    content: "In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention."
  }, {
    heading: "understand-the-tech-3",
    content: "This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status."
  }, {
    heading: "understand-the-tech-3",
    content: "The Signaling SDK handles the following connection management tasks:"
  }, {
    heading: "understand-the-tech-3",
    content: "Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure."
  }, {
    heading: "understand-the-tech-3",
    content: "Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously."
  }, {
    heading: "understand-the-tech-3",
    content: "Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection."
  }, {
    heading: "understand-the-tech-3",
    content: "Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level."
  }, {
    heading: "connection-states-3",
    content: "This section describes the various connection states and their transitions in both message and stream channels."
  }, {
    heading: "message-channel-connection-states-3",
    content: "To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals."
  }, {
    heading: "message-channel-connection-states-3",
    content: "The following table gives an overview of the various connection states:"
  }, {
    heading: "message-channel-connection-states-3",
    content: "The following figure shows possible transitions between message channel connection states:"
  }, {
    heading: "connection-state-transitions-6",
    content: "The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases."
  }, {
    heading: "connection-state-transitions-6",
    content: "**Message channel connection state transitions**"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts."
  }, {
    heading: "stream-channel-connection-states-3",
    content: "The table below provides an overview of the various stream channel connection states:"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "State"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "Description"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "`idle`"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "**Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the `logout` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."
  }, {
    heading: "stream-channel-connection-states-3",
    content: "`connecting`"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "**Connecting state**: When you call the `login` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."
  }, {
    heading: "stream-channel-connection-states-3",
    content: "`connected`"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "**Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities."
  }, {
    heading: "stream-channel-connection-states-3",
    content: "`disconnected`"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "**Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to `suspended` if the connection cannot be restored within this time."
  }, {
    heading: "stream-channel-connection-states-3",
    content: "`suspended`"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "**Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the `login` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the `logout` method to return to the `Idle` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."
  }, {
    heading: "stream-channel-connection-states-3",
    content: "`failed`"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "**Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the `login` method again."
  }, {
    heading: "stream-channel-connection-states-3",
    content: "State"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "Description"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "`AgoraRtmLinkStateIdle`"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "**Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the `logout` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."
  }, {
    heading: "stream-channel-connection-states-3",
    content: "`AgoraRtmLinkStateConnecting`"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "**Connecting state**: When you call the `loginByToken` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."
  }, {
    heading: "stream-channel-connection-states-3",
    content: "`AgoraRtmLinkStateConnected`"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "**Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities."
  }, {
    heading: "stream-channel-connection-states-3",
    content: "`AgoraRtmLinkStateDisconnected`"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "**Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to `AgoraRtmLinkStateSuspended` if the connection cannot be restored within this time."
  }, {
    heading: "stream-channel-connection-states-3",
    content: "`AgoraRtmLinkStateSuspended`"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "**Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the `loginByToken` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the `logout` method to return to the `AgoraRtmLinkStateIdle` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."
  }, {
    heading: "stream-channel-connection-states-3",
    content: "`AgoraRtmLinkStateFailed`"
  }, {
    heading: "stream-channel-connection-states-3",
    content: "**Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the `loginByToken` method again."
  }, {
    heading: "stream-channel-connection-states-3",
    content: "The following figure shows possible transitions between stream channel connection states:"
  }, {
    heading: "connection-state-transitions-7",
    content: "The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases."
  }, {
    heading: "connection-state-transitions-7",
    content: "**Stream channel connection state transitions**"
  }, {
    heading: "listen-for-connection-state-events-3",
    content: "The `didReceiveLinkStateEvent` callback provides the information you need to understand network state transitions."
  }, {
    heading: "listen-for-connection-state-events-3",
    content: "The event provides the following parameters:"
  }, {
    heading: "listen-for-connection-state-events-3",
    content: "`previousState`: The state from which the change occurred."
  }, {
    heading: "listen-for-connection-state-events-3",
    content: "`currentState`: The current state after the change."
  }, {
    heading: "listen-for-connection-state-events-3",
    content: "`serviceType`: The type of service for which the connection state has changed."
  }, {
    heading: "listen-for-connection-state-events-3",
    content: "`operation`: The operation responsible for the change."
  }, {
    heading: "listen-for-connection-state-events-3",
    content: "`reason`: The reason behind the change."
  }, {
    heading: "listen-for-connection-state-events-3",
    content: "To remove the callback use:"
  }, {
    heading: "connection-restoration-mechanism-3",
    content: "Each time you log in, the SDK attempts to establish a connection with the server and generates a local session cache. This cache stores information about the channels the user subscribes to or joins, along with temporary user status data. The cache applies to both message and stream channels."
  }, {
    heading: "connection-restoration-mechanism-3",
    content: "If the client disconnects temporarily due to a network issue, it automatically tries to reconnect. Upon successful reconnection, the SDK uses the session cache to restore the user's channel subscriptions and temporary user status, ensuring session continuity. Whether the client recovers from a disconnected or suspended state, continuity is automatically maintained as long as the user does not log out. However, if the user logs out, the session cache is cleared, and the connection status returns to idle. The user must then log in again, resubscribe to channels, and reset their temporary user statuses."
  }, {
    heading: "connection-restoration-mechanism-3",
    content: "In the event of a sudden network disconnection, you can check the names of affected channels in the `affectedChannels` field returned by the `didReceiveLinkStateEvent` event. The following example shows sample information contained in the `affectedChannels` field:"
  }, {
    heading: "handling-connection-errors-3",
    content: "The Signaling client automatically recovers from non-fatal error states, and notifies you of the event details through an `didReceiveLinkStateEvent` callback. Handle these events according to your business needs to optimize the user experience."
  }, {
    heading: "fatal-errors-3",
    content: `Some errors are critical, meaning the system cannot automatically recover and enters a failed state. In this state, automatic reconnection is not attempted. To resolve such issues, troubleshoot the errors manually and explicitly trigger reconnection by logging in or rejoining the channel.
Following is a list of issues that may lead to fatal errors:`
  }, {
    heading: "fatal-errors-3",
    content: "An invalid or expired token."
  }, {
    heading: "fatal-errors-3",
    content: "The user ID of the current user is banned."
  }, {
    heading: "fatal-errors-3",
    content: "Signaling is not enabled for the current app ID or the app ID is invalid"
  }, {
    heading: "fatal-errors-3",
    content: "Edge server resources are unavailable."
  }, {
    heading: "fatal-errors-3",
    content: "The message service is not deployed in the current environment."
  }, {
    heading: "fatal-errors-3",
    content: "Usage limit exceeded."
  }, {
    heading: "fatal-errors-3",
    content: "A stream channel instance was not created."
  }, {
    heading: "fatal-errors-3",
    content: "The channel name is illegal."
  }, {
    heading: "non-fatal-errors-3",
    content: "Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status."
  }, {
    heading: "non-fatal-errors-3",
    content: "During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications."
  }, {
    heading: "non-fatal-errors-3",
    content: "The information on this page is applicable to Signaling SDK versions 2.2.0 or later."
  }, {
    heading: "understand-the-tech-4",
    content: "In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention."
  }, {
    heading: "understand-the-tech-4",
    content: "This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status."
  }, {
    heading: "understand-the-tech-4",
    content: "The Signaling SDK handles the following connection management tasks:"
  }, {
    heading: "understand-the-tech-4",
    content: "Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure."
  }, {
    heading: "understand-the-tech-4",
    content: "Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously."
  }, {
    heading: "understand-the-tech-4",
    content: "Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection."
  }, {
    heading: "understand-the-tech-4",
    content: "Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level."
  }, {
    heading: "connection-states-4",
    content: "This section describes the various connection states and their transitions in both message and stream channels."
  }, {
    heading: "message-channel-connection-states-4",
    content: "To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals."
  }, {
    heading: "message-channel-connection-states-4",
    content: "The following table gives an overview of the various connection states:"
  }, {
    heading: "message-channel-connection-states-4",
    content: "State"
  }, {
    heading: "message-channel-connection-states-4",
    content: "Description"
  }, {
    heading: "message-channel-connection-states-4",
    content: "`idle`"
  }, {
    heading: "message-channel-connection-states-4",
    content: "**Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the `logout` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."
  }, {
    heading: "message-channel-connection-states-4",
    content: "`connecting`"
  }, {
    heading: "message-channel-connection-states-4",
    content: "**Connecting state**: When you call the `login` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."
  }, {
    heading: "message-channel-connection-states-4",
    content: "`connected`"
  }, {
    heading: "message-channel-connection-states-4",
    content: "**Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities."
  }, {
    heading: "message-channel-connection-states-4",
    content: "`disconnected`"
  }, {
    heading: "message-channel-connection-states-4",
    content: "**Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to `suspended` if the connection cannot be restored within this time."
  }, {
    heading: "message-channel-connection-states-4",
    content: "`suspended`"
  }, {
    heading: "message-channel-connection-states-4",
    content: "**Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the `login` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the `logout` method to return to the `idle` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."
  }, {
    heading: "message-channel-connection-states-4",
    content: "`failed`"
  }, {
    heading: "message-channel-connection-states-4",
    content: "**Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the `login` method again."
  }, {
    heading: "message-channel-connection-states-4",
    content: "The following figure shows possible transitions between message channel connection states:"
  }, {
    heading: "connection-state-transitions-8",
    content: "The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases."
  }, {
    heading: "connection-state-transitions-8",
    content: "**Message channel connection state transitions**"
  }, {
    heading: "stream-channel-connection-states-4",
    content: "In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts."
  }, {
    heading: "stream-channel-connection-states-4",
    content: "The table below provides an overview of the various stream channel connection states:"
  }, {
    heading: "stream-channel-connection-states-4",
    content: "State"
  }, {
    heading: "stream-channel-connection-states-4",
    content: "Description"
  }, {
    heading: "stream-channel-connection-states-4",
    content: "`idle`"
  }, {
    heading: "stream-channel-connection-states-4",
    content: "**Idle state**: The SDK enters this state after you create a stream channel instance or after you explicitly call the `leave` method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server."
  }, {
    heading: "stream-channel-connection-states-4",
    content: "`connecting`"
  }, {
    heading: "stream-channel-connection-states-4",
    content: "**Connecting state**: When you call the `join` method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."
  }, {
    heading: "stream-channel-connection-states-4",
    content: "`connected`"
  }, {
    heading: "stream-channel-connection-states-4",
    content: "**Connected state**:  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities."
  }, {
    heading: "stream-channel-connection-states-4",
    content: "`failed`"
  }, {
    heading: "stream-channel-connection-states-4",
    content: "**Failed state**: If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the `join` method again."
  }, {
    heading: "stream-channel-connection-states-4",
    content: "The following figure shows possible transitions between stream channel connection states:"
  }, {
    heading: "connection-state-transitions-9",
    content: "The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases."
  }, {
    heading: "connection-state-transitions-9",
    content: "**Stream channel connection state transitions**"
  }, {
    heading: "listen-for-connection-state-events-4",
    content: "The `linkState` callback provides the information you need to understand network state transitions."
  }, {
    heading: "listen-for-connection-state-events-4",
    content: "The event provides the following parameters:"
  }, {
    heading: "listen-for-connection-state-events-4",
    content: "`previousState`: The state from which the change occurred."
  }, {
    heading: "listen-for-connection-state-events-4",
    content: "`currentState`: The current state after the change."
  }, {
    heading: "listen-for-connection-state-events-4",
    content: "`serviceType`: The type of service for which the connection state has changed."
  }, {
    heading: "listen-for-connection-state-events-4",
    content: "`operation`: The operation responsible for the change."
  }, {
    heading: "listen-for-connection-state-events-4",
    content: "`reason`: The reason behind the change."
  }, {
    heading: "listen-for-connection-state-events-4",
    content: "To remove the callback, register it as a named function and pass the same function reference to `removeListener`:"
  }, {
    heading: "connection-restoration-mechanism-4",
    content: "After each `login` operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel."
  }, {
    heading: "connection-restoration-mechanism-4",
    content: "When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the `disconnected` state or the `suspended` state, continuity is automatically restored as long as the user does not actively call the `logout` method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to `idle`. Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses."
  }, {
    heading: "connection-restoration-mechanism-4",
    content: "In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the `affectedChannels` field returned by the `linkState` event. The following example shows sample information contained in the `affectedChannels` field :"
  }, {
    heading: "handling-connection-errors-4",
    content: "The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an `linkState` callback. Handle these events according to your business needs to optimize the user experience."
  }, {
    heading: "fatal-errors-4",
    content: "Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the `failed` state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the `login` or `join` method."
  }, {
    heading: "fatal-errors-4",
    content: "Following is a list of issues that may lead to fatal errors:"
  }, {
    heading: "fatal-errors-4",
    content: "An invalid or expired token."
  }, {
    heading: "fatal-errors-4",
    content: "The user ID of the current user is banned."
  }, {
    heading: "fatal-errors-4",
    content: "Signaling is not enabled for the current app ID or the app ID is invalid"
  }, {
    heading: "fatal-errors-4",
    content: "Edge server resources are unavailable."
  }, {
    heading: "fatal-errors-4",
    content: "The `MESSAGE` service is not deployed in the current environment."
  }, {
    heading: "fatal-errors-4",
    content: "Usage limit exceeded."
  }, {
    heading: "fatal-errors-4",
    content: "A stream channel instance was not created."
  }, {
    heading: "fatal-errors-4",
    content: "The channel name is illegal."
  }, {
    heading: "non-fatal-errors-4",
    content: "Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status."
  }, {
    heading: "non-fatal-errors-4",
    content: "During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications."
  }, {
    heading: "non-fatal-errors-4",
    content: "The information on this page is applicable to Signaling SDK versions 2.2.0 or later."
  }, {
    heading: "understand-the-tech-5",
    content: "In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention."
  }, {
    heading: "understand-the-tech-5",
    content: "This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status."
  }, {
    heading: "understand-the-tech-5",
    content: "The Signaling SDK handles the following connection management tasks:"
  }, {
    heading: "understand-the-tech-5",
    content: "Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure."
  }, {
    heading: "understand-the-tech-5",
    content: "Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously."
  }, {
    heading: "understand-the-tech-5",
    content: "Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection."
  }, {
    heading: "understand-the-tech-5",
    content: "Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level."
  }, {
    heading: "connection-states-5",
    content: "This section describes the various connection states and their transitions in both message and stream channels."
  }, {
    heading: "message-channel-connection-states-5",
    content: "To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals."
  }, {
    heading: "message-channel-connection-states-5",
    content: "The following table gives an overview of the various connection states:"
  }, {
    heading: "message-channel-connection-states-5",
    content: "State"
  }, {
    heading: "message-channel-connection-states-5",
    content: "Description"
  }, {
    heading: "message-channel-connection-states-5",
    content: "`RTM_LINK_STATE_IDLE`"
  }, {
    heading: "message-channel-connection-states-5",
    content: "**Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the `logout` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."
  }, {
    heading: "message-channel-connection-states-5",
    content: "`RTM_LINK_STATE_CONNECTING`"
  }, {
    heading: "message-channel-connection-states-5",
    content: "**Connecting state**: When you call the `login` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."
  }, {
    heading: "message-channel-connection-states-5",
    content: "`RTM_LINK_STATE_CONNECTED`"
  }, {
    heading: "message-channel-connection-states-5",
    content: "**Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities."
  }, {
    heading: "message-channel-connection-states-5",
    content: "`RTM_LINK_STATE_DISCONNECTED`"
  }, {
    heading: "message-channel-connection-states-5",
    content: "**Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to `RTM_LINK_STATE_SUSPENDED` if the connection cannot be restored within this time."
  }, {
    heading: "message-channel-connection-states-5",
    content: "`RTM_LINK_STATE_SUSPENDED`"
  }, {
    heading: "message-channel-connection-states-5",
    content: "**Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the `login` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the `logout` method to return to the `RTM_LINK_STATE_IDLE` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."
  }, {
    heading: "message-channel-connection-states-5",
    content: "`RTM_LINK_STATE_FAILED`"
  }, {
    heading: "message-channel-connection-states-5",
    content: "**Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the `login` method again."
  }, {
    heading: "message-channel-connection-states-5",
    content: "The following figure shows possible transitions between message channel connection states:"
  }, {
    heading: "connection-state-transitions-10",
    content: "The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases."
  }, {
    heading: "connection-state-transitions-10",
    content: "**Message channel connection state transitions**"
  }, {
    heading: "stream-channel-connection-states-5",
    content: "In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts."
  }, {
    heading: "stream-channel-connection-states-5",
    content: "The table below provides an overview of the various stream channel connection states:"
  }, {
    heading: "stream-channel-connection-states-5",
    content: "State"
  }, {
    heading: "stream-channel-connection-states-5",
    content: "Description"
  }, {
    heading: "stream-channel-connection-states-5",
    content: "`RTM_LINK_STATE_IDLE`"
  }, {
    heading: "stream-channel-connection-states-5",
    content: "**Idle state**: The SDK enters this state after you create a stream channel instance or after you explicitly call the `leave` method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server."
  }, {
    heading: "stream-channel-connection-states-5",
    content: "`RTM_LINK_STATE_CONNECTING`"
  }, {
    heading: "stream-channel-connection-states-5",
    content: "**Connecting state**: When you call the `join` method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."
  }, {
    heading: "stream-channel-connection-states-5",
    content: "`RTM_LINK_STATE_CONNECTED`"
  }, {
    heading: "stream-channel-connection-states-5",
    content: "**Connected state**:  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities."
  }, {
    heading: "stream-channel-connection-states-5",
    content: "`RTM_LINK_STATE_FAILED`"
  }, {
    heading: "stream-channel-connection-states-5",
    content: "**Failed state**: If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the `join` method again."
  }, {
    heading: "stream-channel-connection-states-5",
    content: "The following figure shows possible transitions between stream channel connection states:"
  }, {
    heading: "connection-state-transitions-11",
    content: "The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases."
  }, {
    heading: "connection-state-transitions-11",
    content: "**Stream channel connection state transitions**"
  }, {
    heading: "listen-for-connection-state-events-5",
    content: "The `onLinkStateEvent` callback provides the information you need to understand network state transitions."
  }, {
    heading: "listen-for-connection-state-events-5",
    content: "The event provides the following parameters:"
  }, {
    heading: "listen-for-connection-state-events-5",
    content: "`previousState`: The state from which the change occurred."
  }, {
    heading: "listen-for-connection-state-events-5",
    content: "`currentState`: The current state after the change."
  }, {
    heading: "listen-for-connection-state-events-5",
    content: "`serviceType`: The type of service for which the connection state has changed."
  }, {
    heading: "listen-for-connection-state-events-5",
    content: "`operation`: The operation responsible for the change."
  }, {
    heading: "listen-for-connection-state-events-5",
    content: "`reason`: The reason behind the change."
  }, {
    heading: "connection-restoration-mechanism-5",
    content: "After each `login` operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel."
  }, {
    heading: "connection-restoration-mechanism-5",
    content: "When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the `RTM_LINK_STATE_DISCONNECTED` state or the `RTM_LINK_STATE_SUSPENDED` state, continuity is automatically restored as long as the user does not actively call the `logout` method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to `RTM_LINK_STATE_IDLE`. Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses."
  }, {
    heading: "connection-restoration-mechanism-5",
    content: "In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the `affectedChannels` field returned by the `onLinkStateEvent` event. The following example shows sample information contained in the `affectedChannels` field :"
  }, {
    heading: "handling-connection-errors-5",
    content: "The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an `onLinkStateEvent` callback. Handle these events according to your business needs to optimize the user experience."
  }, {
    heading: "fatal-errors-5",
    content: "Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the `RTM_LINK_STATE_FAILED` state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the `login` or `join` method."
  }, {
    heading: "fatal-errors-5",
    content: "Following is a list of issues that may lead to fatal errors:"
  }, {
    heading: "fatal-errors-5",
    content: "An invalid or expired token."
  }, {
    heading: "fatal-errors-5",
    content: "The user ID of the current user is banned."
  }, {
    heading: "fatal-errors-5",
    content: "Signaling is not enabled for the current app ID or the app ID is invalid"
  }, {
    heading: "fatal-errors-5",
    content: "Edge server resources are unavailable."
  }, {
    heading: "fatal-errors-5",
    content: "The `RTM_SERVICE_TYPE_MESSAGE` service is not deployed in the current environment."
  }, {
    heading: "fatal-errors-5",
    content: "Usage limit exceeded."
  }, {
    heading: "fatal-errors-5",
    content: "A stream channel instance was not created."
  }, {
    heading: "fatal-errors-5",
    content: "The channel name is illegal."
  }, {
    heading: "non-fatal-errors-5",
    content: "Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status."
  }, {
    heading: "non-fatal-errors-5",
    content: "During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications."
  }, {
    heading: "non-fatal-errors-5",
    content: "The information on this page is applicable to Signaling SDK versions 2.2.0 or later."
  }, {
    heading: "understand-the-tech-6",
    content: "In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention."
  }, {
    heading: "understand-the-tech-6",
    content: "This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status."
  }, {
    heading: "understand-the-tech-6",
    content: "The Signaling SDK handles the following connection management tasks:"
  }, {
    heading: "understand-the-tech-6",
    content: "Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure."
  }, {
    heading: "understand-the-tech-6",
    content: "Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously."
  }, {
    heading: "understand-the-tech-6",
    content: "Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection."
  }, {
    heading: "understand-the-tech-6",
    content: "Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level."
  }, {
    heading: "connection-states-6",
    content: "This section describes the various connection states and their transitions in both message and stream channels."
  }, {
    heading: "message-channel-connection-states-6",
    content: "To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals."
  }, {
    heading: "message-channel-connection-states-6",
    content: "The following table gives an overview of the various connection states:"
  }, {
    heading: "message-channel-connection-states-6",
    content: "State"
  }, {
    heading: "message-channel-connection-states-6",
    content: "Description"
  }, {
    heading: "message-channel-connection-states-6",
    content: "`RTM_LINK_STATE_IDLE`"
  }, {
    heading: "message-channel-connection-states-6",
    content: "**Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the `logout` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."
  }, {
    heading: "message-channel-connection-states-6",
    content: "`RTM_LINK_STATE_CONNECTING`"
  }, {
    heading: "message-channel-connection-states-6",
    content: "**Connecting state**: When you call the `login` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."
  }, {
    heading: "message-channel-connection-states-6",
    content: "`RTM_LINK_STATE_CONNECTED`"
  }, {
    heading: "message-channel-connection-states-6",
    content: "**Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities."
  }, {
    heading: "message-channel-connection-states-6",
    content: "`RTM_LINK_STATE_DISCONNECTED`"
  }, {
    heading: "message-channel-connection-states-6",
    content: "**Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to `RTM_LINK_STATE_SUSPENDED` if the connection cannot be restored within this time."
  }, {
    heading: "message-channel-connection-states-6",
    content: "`RTM_LINK_STATE_SUSPENDED`"
  }, {
    heading: "message-channel-connection-states-6",
    content: "**Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the `login` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the `logout` method to return to the `RTM_LINK_STATE_IDLE` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."
  }, {
    heading: "message-channel-connection-states-6",
    content: "`RTM_LINK_STATE_FAILED`"
  }, {
    heading: "message-channel-connection-states-6",
    content: "**Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the `login` method again."
  }, {
    heading: "message-channel-connection-states-6",
    content: "The following figure shows possible transitions between message channel connection states:"
  }, {
    heading: "connection-state-transitions-12",
    content: "The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases."
  }, {
    heading: "connection-state-transitions-12",
    content: "**Message channel connection state transitions**"
  }, {
    heading: "stream-channel-connection-states-6",
    content: "In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts."
  }, {
    heading: "stream-channel-connection-states-6",
    content: "The table below provides an overview of the various stream channel connection states:"
  }, {
    heading: "stream-channel-connection-states-6",
    content: "State"
  }, {
    heading: "stream-channel-connection-states-6",
    content: "Description"
  }, {
    heading: "stream-channel-connection-states-6",
    content: "`RTM_LINK_STATE_IDLE`"
  }, {
    heading: "stream-channel-connection-states-6",
    content: "**Idle state**: The SDK enters this state after you create a stream channel instance or after you explicitly call the `leave` method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server."
  }, {
    heading: "stream-channel-connection-states-6",
    content: "`RTM_LINK_STATE_CONNECTING`"
  }, {
    heading: "stream-channel-connection-states-6",
    content: "**Connecting state**: When you call the `join` method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."
  }, {
    heading: "stream-channel-connection-states-6",
    content: "`RTM_LINK_STATE_CONNECTED`"
  }, {
    heading: "stream-channel-connection-states-6",
    content: "**Connected state**:  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities."
  }, {
    heading: "stream-channel-connection-states-6",
    content: "`RTM_LINK_STATE_FAILED`"
  }, {
    heading: "stream-channel-connection-states-6",
    content: "**Failed state**: If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the `join` method again."
  }, {
    heading: "stream-channel-connection-states-6",
    content: "The following figure shows possible transitions between stream channel connection states:"
  }, {
    heading: "connection-state-transitions-13",
    content: "The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases."
  }, {
    heading: "connection-state-transitions-13",
    content: "**Stream channel connection state transitions**"
  }, {
    heading: "listen-for-connection-state-events-6",
    content: "The `onLinkStateEvent` callback provides the information you need to understand network state transitions."
  }, {
    heading: "listen-for-connection-state-events-6",
    content: "The event provides the following parameters:"
  }, {
    heading: "listen-for-connection-state-events-6",
    content: "`previousState`: The state from which the change occurred."
  }, {
    heading: "listen-for-connection-state-events-6",
    content: "`currentState`: The current state after the change."
  }, {
    heading: "listen-for-connection-state-events-6",
    content: "`serviceType`: The type of service for which the connection state has changed."
  }, {
    heading: "listen-for-connection-state-events-6",
    content: "`operation`: The operation responsible for the change."
  }, {
    heading: "listen-for-connection-state-events-6",
    content: "`reason`: The reason behind the change."
  }, {
    heading: "connection-restoration-mechanism-6",
    content: "After each `login` operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel."
  }, {
    heading: "connection-restoration-mechanism-6",
    content: "When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the `RTM_LINK_STATE_DISCONNECTED` state or the `RTM_LINK_STATE_SUSPENDED` state, continuity is automatically restored as long as the user does not actively call the `logout` method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to `RTM_LINK_STATE_IDLE`. Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses."
  }, {
    heading: "connection-restoration-mechanism-6",
    content: "In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the `affectedChannels` field returned by the `onLinkStateEvent` event. The following example shows sample information contained in the `affectedChannels` field :"
  }, {
    heading: "handling-connection-errors-6",
    content: "The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an `onLinkStateEvent` callback. Handle these events according to your business needs to optimize the user experience."
  }, {
    heading: "fatal-errors-6",
    content: "Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the `RTM_LINK_STATE_FAILED` state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the `login` or `join` method."
  }, {
    heading: "fatal-errors-6",
    content: "Following is a list of issues that may lead to fatal errors:"
  }, {
    heading: "fatal-errors-6",
    content: "An invalid or expired token."
  }, {
    heading: "fatal-errors-6",
    content: "The user ID of the current user is banned."
  }, {
    heading: "fatal-errors-6",
    content: "Signaling is not enabled for the current app ID or the app ID is invalid"
  }, {
    heading: "fatal-errors-6",
    content: "Edge server resources are unavailable."
  }, {
    heading: "fatal-errors-6",
    content: "The `RTM_SERVICE_TYPE_MESSAGE` service is not deployed in the current environment."
  }, {
    heading: "fatal-errors-6",
    content: "Usage limit exceeded."
  }, {
    heading: "fatal-errors-6",
    content: "A stream channel instance was not created."
  }, {
    heading: "fatal-errors-6",
    content: "The channel name is illegal."
  }, {
    heading: "non-fatal-errors-6",
    content: "Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status."
  }, {
    heading: "non-fatal-errors-6",
    content: "During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications."
  }, {
    heading: "non-fatal-errors-6",
    content: "The information on this page is applicable to Signaling SDK versions 2.2.0 or later."
  }, {
    heading: "understand-the-tech-7",
    content: "In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention."
  }, {
    heading: "understand-the-tech-7",
    content: "This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status."
  }, {
    heading: "understand-the-tech-7",
    content: "The Signaling SDK handles the following connection management tasks:"
  }, {
    heading: "understand-the-tech-7",
    content: "Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure."
  }, {
    heading: "understand-the-tech-7",
    content: "Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously."
  }, {
    heading: "understand-the-tech-7",
    content: "Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection."
  }, {
    heading: "understand-the-tech-7",
    content: "Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level."
  }, {
    heading: "connection-states-7",
    content: "This section describes the various connection states and their transitions in both message and stream channels."
  }, {
    heading: "message-channel-connection-states-7",
    content: "To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals."
  }, {
    heading: "message-channel-connection-states-7",
    content: "The following table gives an overview of the various connection states:"
  }, {
    heading: "message-channel-connection-states-7",
    content: "State"
  }, {
    heading: "message-channel-connection-states-7",
    content: "Description"
  }, {
    heading: "message-channel-connection-states-7",
    content: "`IDLE`"
  }, {
    heading: "message-channel-connection-states-7",
    content: "**Idle state**: The SDK enters this state when you create a client instance or after you explicitly call the `logout` method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."
  }, {
    heading: "message-channel-connection-states-7",
    content: "`CONNECTING`"
  }, {
    heading: "message-channel-connection-states-7",
    content: "**Connecting state**: When you call the `login` method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."
  }, {
    heading: "message-channel-connection-states-7",
    content: "`CONNECTED`"
  }, {
    heading: "message-channel-connection-states-7",
    content: "**Connected state**: In this state, the client and the server are connected normally; users can access all Signaling capabilities."
  }, {
    heading: "message-channel-connection-states-7",
    content: "`DISCONNECTED`"
  }, {
    heading: "message-channel-connection-states-7",
    content: "**Disconnected state**: The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to `SUSPENDED` if the connection cannot be restored within this time."
  }, {
    heading: "message-channel-connection-states-7",
    content: "`SUSPENDED`"
  }, {
    heading: "message-channel-connection-states-7",
    content: "**Connection pending state**: This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the `login` method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the `logout` method to return to the `IDLE` state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."
  }, {
    heading: "message-channel-connection-states-7",
    content: "`FAILED`"
  }, {
    heading: "message-channel-connection-states-7",
    content: "**Failed state**: If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the `login` method again."
  }, {
    heading: "message-channel-connection-states-7",
    content: "The following figure shows possible transitions between message channel connection states:"
  }, {
    heading: "connection-state-transitions-14",
    content: "The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases."
  }, {
    heading: "connection-state-transitions-14",
    content: "**Message channel connection state transitions**"
  }, {
    heading: "stream-channel-connection-states-7",
    content: "In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts."
  }, {
    heading: "stream-channel-connection-states-7",
    content: "The table below provides an overview of the various stream channel connection states:"
  }, {
    heading: "stream-channel-connection-states-7",
    content: "State"
  }, {
    heading: "stream-channel-connection-states-7",
    content: "Description"
  }, {
    heading: "stream-channel-connection-states-7",
    content: "`IDLE`"
  }, {
    heading: "stream-channel-connection-states-7",
    content: "**Idle state**: The SDK enters this state after you create a stream channel instance or after you explicitly call the `leave` method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server."
  }, {
    heading: "stream-channel-connection-states-7",
    content: "`CONNECTING`"
  }, {
    heading: "stream-channel-connection-states-7",
    content: "**Connecting state**: When you call the `join` method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."
  }, {
    heading: "stream-channel-connection-states-7",
    content: "`CONNECTED`"
  }, {
    heading: "stream-channel-connection-states-7",
    content: "**Connected state**:  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities."
  }, {
    heading: "stream-channel-connection-states-7",
    content: "`FAILED`"
  }, {
    heading: "stream-channel-connection-states-7",
    content: "**Failed state**: If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the `join` method again."
  }, {
    heading: "stream-channel-connection-states-7",
    content: "The following figure shows possible transitions between stream channel connection states:"
  }, {
    heading: "connection-state-transitions-15",
    content: "The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases."
  }, {
    heading: "connection-state-transitions-15",
    content: "**Stream channel connection state transitions**"
  }, {
    heading: "listen-for-connection-state-events-7",
    content: "The `onLinkStateEvent` callback provides the information you need to understand network state transitions."
  }, {
    heading: "listen-for-connection-state-events-7",
    content: "The event provides the following parameters:"
  }, {
    heading: "listen-for-connection-state-events-7",
    content: "`previousState`: The state from which the change occurred."
  }, {
    heading: "listen-for-connection-state-events-7",
    content: "`currentState`: The current state after the change."
  }, {
    heading: "listen-for-connection-state-events-7",
    content: "`serviceType`: The type of service for which the connection state has changed."
  }, {
    heading: "listen-for-connection-state-events-7",
    content: "`operation`: The operation responsible for the change."
  }, {
    heading: "listen-for-connection-state-events-7",
    content: "`reason`: The reason behind the change."
  }, {
    heading: "listen-for-connection-state-events-7",
    content: "To remove the callback use:"
  }, {
    heading: "connection-restoration-mechanism-7",
    content: "After each `login` operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel."
  }, {
    heading: "connection-restoration-mechanism-7",
    content: "When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the `DISCONNECTED` state or the `SUSPENDED` state, continuity is automatically restored as long as the user does not actively call the `logout` method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to `IDLE`. Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses."
  }, {
    heading: "connection-restoration-mechanism-7",
    content: "In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the `affectedChannels` field returned by the `onLinkStateEvent` event. The following example shows sample information contained in the `affectedChannels` field :"
  }, {
    heading: "handling-connection-errors-7",
    content: "The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an `onLinkStateEvent` callback. Handle these events according to your business needs to optimize the user experience."
  }, {
    heading: "fatal-errors-7",
    content: "Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the `FAILED` state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the `login` or `join` method."
  }, {
    heading: "fatal-errors-7",
    content: "Following is a list of issues that may lead to fatal errors:"
  }, {
    heading: "fatal-errors-7",
    content: "An invalid or expired token."
  }, {
    heading: "fatal-errors-7",
    content: "The user ID of the current user is banned."
  }, {
    heading: "fatal-errors-7",
    content: "Signaling is not enabled for the current app ID or the app ID is invalid"
  }, {
    heading: "fatal-errors-7",
    content: "Edge server resources are unavailable."
  }, {
    heading: "fatal-errors-7",
    content: "The `MESSAGE` service is not deployed in the current environment."
  }, {
    heading: "fatal-errors-7",
    content: "Usage limit exceeded."
  }, {
    heading: "fatal-errors-7",
    content: "A stream channel instance was not created."
  }, {
    heading: "fatal-errors-7",
    content: "The channel name is illegal."
  }, {
    heading: "non-fatal-errors-7",
    content: "Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "connection-states",
    content: "Connection states"
  }, {
    id: "message-channel-connection-states",
    content: "Message channel connection states"
  }, {
    id: "connection-state-transitions",
    content: "Connection state transitions"
  }, {
    id: "stream-channel-connection-states",
    content: "Stream channel connection states"
  }, {
    id: "connection-state-transitions-1",
    content: "Connection state transitions"
  }, {
    id: "listen-for-connection-state-events",
    content: "Listen for connection state events"
  }, {
    id: "connection-restoration-mechanism",
    content: "Connection restoration mechanism"
  }, {
    id: "handling-connection-errors",
    content: "Handling connection errors"
  }, {
    id: "fatal-errors",
    content: "Fatal errors"
  }, {
    id: "non-fatal-errors",
    content: "Non-fatal errors"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "connection-states-1",
    content: "Connection states"
  }, {
    id: "message-channel-connection-states-1",
    content: "Message channel connection states"
  }, {
    id: "connection-state-transitions-2",
    content: "Connection state transitions"
  }, {
    id: "stream-channel-connection-states-1",
    content: "Stream channel connection states"
  }, {
    id: "connection-state-transitions-3",
    content: "Connection state transitions"
  }, {
    id: "listen-for-connection-state-events-1",
    content: "Listen for connection state events"
  }, {
    id: "connection-restoration-mechanism-1",
    content: "Connection restoration mechanism"
  }, {
    id: "handling-connection-errors-1",
    content: "Handling connection errors"
  }, {
    id: "fatal-errors-1",
    content: "Fatal errors"
  }, {
    id: "non-fatal-errors-1",
    content: "Non-fatal errors"
  }, {
    id: "understand-the-tech-2",
    content: "Understand the tech"
  }, {
    id: "connection-states-2",
    content: "Connection states"
  }, {
    id: "message-channel-connection-states-2",
    content: "Message channel connection states"
  }, {
    id: "connection-state-transitions-4",
    content: "Connection state transitions"
  }, {
    id: "stream-channel-connection-states-2",
    content: "Stream channel connection states"
  }, {
    id: "connection-state-transitions-5",
    content: "Connection state transitions"
  }, {
    id: "listen-for-connection-state-events-2",
    content: "Listen for connection state events"
  }, {
    id: "connection-restoration-mechanism-2",
    content: "Connection restoration mechanism"
  }, {
    id: "handling-connection-errors-2",
    content: "Handling connection errors"
  }, {
    id: "fatal-errors-2",
    content: "Fatal errors"
  }, {
    id: "non-fatal-errors-2",
    content: "Non-fatal errors"
  }, {
    id: "understand-the-tech-3",
    content: "Understand the tech"
  }, {
    id: "connection-states-3",
    content: "Connection states"
  }, {
    id: "message-channel-connection-states-3",
    content: "Message channel connection states"
  }, {
    id: "connection-state-transitions-6",
    content: "Connection state transitions"
  }, {
    id: "stream-channel-connection-states-3",
    content: "Stream channel connection states"
  }, {
    id: "connection-state-transitions-7",
    content: "Connection state transitions"
  }, {
    id: "listen-for-connection-state-events-3",
    content: "Listen for connection state events"
  }, {
    id: "connection-restoration-mechanism-3",
    content: "Connection restoration mechanism"
  }, {
    id: "handling-connection-errors-3",
    content: "Handling connection errors"
  }, {
    id: "fatal-errors-3",
    content: "Fatal errors"
  }, {
    id: "non-fatal-errors-3",
    content: "Non-fatal errors"
  }, {
    id: "understand-the-tech-4",
    content: "Understand the tech"
  }, {
    id: "connection-states-4",
    content: "Connection states"
  }, {
    id: "message-channel-connection-states-4",
    content: "Message channel connection states"
  }, {
    id: "connection-state-transitions-8",
    content: "Connection state transitions"
  }, {
    id: "stream-channel-connection-states-4",
    content: "Stream channel connection states"
  }, {
    id: "connection-state-transitions-9",
    content: "Connection state transitions"
  }, {
    id: "listen-for-connection-state-events-4",
    content: "Listen for connection state events"
  }, {
    id: "connection-restoration-mechanism-4",
    content: "Connection restoration mechanism"
  }, {
    id: "handling-connection-errors-4",
    content: "Handling connection errors"
  }, {
    id: "fatal-errors-4",
    content: "Fatal errors"
  }, {
    id: "non-fatal-errors-4",
    content: "Non-fatal errors"
  }, {
    id: "understand-the-tech-5",
    content: "Understand the tech"
  }, {
    id: "connection-states-5",
    content: "Connection states"
  }, {
    id: "message-channel-connection-states-5",
    content: "Message channel connection states"
  }, {
    id: "connection-state-transitions-10",
    content: "Connection state transitions"
  }, {
    id: "stream-channel-connection-states-5",
    content: "Stream channel connection states"
  }, {
    id: "connection-state-transitions-11",
    content: "Connection state transitions"
  }, {
    id: "listen-for-connection-state-events-5",
    content: "Listen for connection state events"
  }, {
    id: "connection-restoration-mechanism-5",
    content: "Connection restoration mechanism"
  }, {
    id: "handling-connection-errors-5",
    content: "Handling connection errors"
  }, {
    id: "fatal-errors-5",
    content: "Fatal errors"
  }, {
    id: "non-fatal-errors-5",
    content: "Non-fatal errors"
  }, {
    id: "understand-the-tech-6",
    content: "Understand the tech"
  }, {
    id: "connection-states-6",
    content: "Connection states"
  }, {
    id: "message-channel-connection-states-6",
    content: "Message channel connection states"
  }, {
    id: "connection-state-transitions-12",
    content: "Connection state transitions"
  }, {
    id: "stream-channel-connection-states-6",
    content: "Stream channel connection states"
  }, {
    id: "connection-state-transitions-13",
    content: "Connection state transitions"
  }, {
    id: "listen-for-connection-state-events-6",
    content: "Listen for connection state events"
  }, {
    id: "connection-restoration-mechanism-6",
    content: "Connection restoration mechanism"
  }, {
    id: "handling-connection-errors-6",
    content: "Handling connection errors"
  }, {
    id: "fatal-errors-6",
    content: "Fatal errors"
  }, {
    id: "non-fatal-errors-6",
    content: "Non-fatal errors"
  }, {
    id: "understand-the-tech-7",
    content: "Understand the tech"
  }, {
    id: "connection-states-7",
    content: "Connection states"
  }, {
    id: "message-channel-connection-states-7",
    content: "Message channel connection states"
  }, {
    id: "connection-state-transitions-14",
    content: "Connection state transitions"
  }, {
    id: "stream-channel-connection-states-7",
    content: "Stream channel connection states"
  }, {
    id: "connection-state-transitions-15",
    content: "Connection state transitions"
  }, {
    id: "listen-for-connection-state-events-7",
    content: "Listen for connection state events"
  }, {
    id: "connection-restoration-mechanism-7",
    content: "Connection restoration mechanism"
  }, {
    id: "handling-connection-errors-7",
    content: "Handling connection errors"
  }, {
    id: "fatal-errors-7",
    content: "Fatal errors"
  }, {
    id: "non-fatal-errors-7",
    content: "Non-fatal errors"
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
  url: "#connection-states",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#message-channel-connection-states",
  title: _jsx(_Fragment, {
    children: "Message channel connection states"
  })
}, {
  depth: 4,
  url: "#connection-state-transitions",
  title: _jsx(_Fragment, {
    children: "Connection state transitions"
  })
}, {
  depth: 3,
  url: "#stream-channel-connection-states",
  title: _jsx(_Fragment, {
    children: "Stream channel connection states"
  })
}, {
  depth: 4,
  url: "#connection-state-transitions-1",
  title: _jsx(_Fragment, {
    children: "Connection state transitions"
  })
}, {
  depth: 2,
  url: "#listen-for-connection-state-events",
  title: _jsx(_Fragment, {
    children: "Listen for connection state events"
  })
}, {
  depth: 2,
  url: "#connection-restoration-mechanism",
  title: _jsx(_Fragment, {
    children: "Connection restoration mechanism"
  })
}, {
  depth: 2,
  url: "#handling-connection-errors",
  title: _jsx(_Fragment, {
    children: "Handling connection errors"
  })
}, {
  depth: 3,
  url: "#fatal-errors",
  title: _jsx(_Fragment, {
    children: "Fatal errors"
  })
}, {
  depth: 3,
  url: "#non-fatal-errors",
  title: _jsx(_Fragment, {
    children: "Non-fatal errors"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-1",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#connection-states-1",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#message-channel-connection-states-1",
  title: _jsx(_Fragment, {
    children: "Message channel connection states"
  })
}, {
  depth: 4,
  url: "#connection-state-transitions-2",
  title: _jsx(_Fragment, {
    children: "Connection state transitions"
  })
}, {
  depth: 3,
  url: "#stream-channel-connection-states-1",
  title: _jsx(_Fragment, {
    children: "Stream channel connection states"
  })
}, {
  depth: 4,
  url: "#connection-state-transitions-3",
  title: _jsx(_Fragment, {
    children: "Connection state transitions"
  })
}, {
  depth: 2,
  url: "#listen-for-connection-state-events-1",
  title: _jsx(_Fragment, {
    children: "Listen for connection state events"
  })
}, {
  depth: 2,
  url: "#connection-restoration-mechanism-1",
  title: _jsx(_Fragment, {
    children: "Connection restoration mechanism"
  })
}, {
  depth: 2,
  url: "#handling-connection-errors-1",
  title: _jsx(_Fragment, {
    children: "Handling connection errors"
  })
}, {
  depth: 3,
  url: "#fatal-errors-1",
  title: _jsx(_Fragment, {
    children: "Fatal errors"
  })
}, {
  depth: 3,
  url: "#non-fatal-errors-1",
  title: _jsx(_Fragment, {
    children: "Non-fatal errors"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-2",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#connection-states-2",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#message-channel-connection-states-2",
  title: _jsx(_Fragment, {
    children: "Message channel connection states"
  })
}, {
  depth: 4,
  url: "#connection-state-transitions-4",
  title: _jsx(_Fragment, {
    children: "Connection state transitions"
  })
}, {
  depth: 3,
  url: "#stream-channel-connection-states-2",
  title: _jsx(_Fragment, {
    children: "Stream channel connection states"
  })
}, {
  depth: 4,
  url: "#connection-state-transitions-5",
  title: _jsx(_Fragment, {
    children: "Connection state transitions"
  })
}, {
  depth: 2,
  url: "#listen-for-connection-state-events-2",
  title: _jsx(_Fragment, {
    children: "Listen for connection state events"
  })
}, {
  depth: 2,
  url: "#connection-restoration-mechanism-2",
  title: _jsx(_Fragment, {
    children: "Connection restoration mechanism"
  })
}, {
  depth: 2,
  url: "#handling-connection-errors-2",
  title: _jsx(_Fragment, {
    children: "Handling connection errors"
  })
}, {
  depth: 3,
  url: "#fatal-errors-2",
  title: _jsx(_Fragment, {
    children: "Fatal errors"
  })
}, {
  depth: 3,
  url: "#non-fatal-errors-2",
  title: _jsx(_Fragment, {
    children: "Non-fatal errors"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-3",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#connection-states-3",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#message-channel-connection-states-3",
  title: _jsx(_Fragment, {
    children: "Message channel connection states"
  })
}, {
  depth: 4,
  url: "#connection-state-transitions-6",
  title: _jsx(_Fragment, {
    children: "Connection state transitions"
  })
}, {
  depth: 3,
  url: "#stream-channel-connection-states-3",
  title: _jsx(_Fragment, {
    children: "Stream channel connection states"
  })
}, {
  depth: 4,
  url: "#connection-state-transitions-7",
  title: _jsx(_Fragment, {
    children: "Connection state transitions"
  })
}, {
  depth: 2,
  url: "#listen-for-connection-state-events-3",
  title: _jsx(_Fragment, {
    children: "Listen for connection state events"
  })
}, {
  depth: 2,
  url: "#connection-restoration-mechanism-3",
  title: _jsx(_Fragment, {
    children: "Connection restoration mechanism"
  })
}, {
  depth: 2,
  url: "#handling-connection-errors-3",
  title: _jsx(_Fragment, {
    children: "Handling connection errors"
  })
}, {
  depth: 3,
  url: "#fatal-errors-3",
  title: _jsx(_Fragment, {
    children: "Fatal errors"
  })
}, {
  depth: 3,
  url: "#non-fatal-errors-3",
  title: _jsx(_Fragment, {
    children: "Non-fatal errors"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-4",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#connection-states-4",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#message-channel-connection-states-4",
  title: _jsx(_Fragment, {
    children: "Message channel connection states"
  })
}, {
  depth: 4,
  url: "#connection-state-transitions-8",
  title: _jsx(_Fragment, {
    children: "Connection state transitions"
  })
}, {
  depth: 3,
  url: "#stream-channel-connection-states-4",
  title: _jsx(_Fragment, {
    children: "Stream channel connection states"
  })
}, {
  depth: 4,
  url: "#connection-state-transitions-9",
  title: _jsx(_Fragment, {
    children: "Connection state transitions"
  })
}, {
  depth: 2,
  url: "#listen-for-connection-state-events-4",
  title: _jsx(_Fragment, {
    children: "Listen for connection state events"
  })
}, {
  depth: 2,
  url: "#connection-restoration-mechanism-4",
  title: _jsx(_Fragment, {
    children: "Connection restoration mechanism"
  })
}, {
  depth: 2,
  url: "#handling-connection-errors-4",
  title: _jsx(_Fragment, {
    children: "Handling connection errors"
  })
}, {
  depth: 3,
  url: "#fatal-errors-4",
  title: _jsx(_Fragment, {
    children: "Fatal errors"
  })
}, {
  depth: 3,
  url: "#non-fatal-errors-4",
  title: _jsx(_Fragment, {
    children: "Non-fatal errors"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-5",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#connection-states-5",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#message-channel-connection-states-5",
  title: _jsx(_Fragment, {
    children: "Message channel connection states"
  })
}, {
  depth: 4,
  url: "#connection-state-transitions-10",
  title: _jsx(_Fragment, {
    children: "Connection state transitions"
  })
}, {
  depth: 3,
  url: "#stream-channel-connection-states-5",
  title: _jsx(_Fragment, {
    children: "Stream channel connection states"
  })
}, {
  depth: 4,
  url: "#connection-state-transitions-11",
  title: _jsx(_Fragment, {
    children: "Connection state transitions"
  })
}, {
  depth: 2,
  url: "#listen-for-connection-state-events-5",
  title: _jsx(_Fragment, {
    children: "Listen for connection state events"
  })
}, {
  depth: 2,
  url: "#connection-restoration-mechanism-5",
  title: _jsx(_Fragment, {
    children: "Connection restoration mechanism"
  })
}, {
  depth: 2,
  url: "#handling-connection-errors-5",
  title: _jsx(_Fragment, {
    children: "Handling connection errors"
  })
}, {
  depth: 3,
  url: "#fatal-errors-5",
  title: _jsx(_Fragment, {
    children: "Fatal errors"
  })
}, {
  depth: 3,
  url: "#non-fatal-errors-5",
  title: _jsx(_Fragment, {
    children: "Non-fatal errors"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-6",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#connection-states-6",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#message-channel-connection-states-6",
  title: _jsx(_Fragment, {
    children: "Message channel connection states"
  })
}, {
  depth: 4,
  url: "#connection-state-transitions-12",
  title: _jsx(_Fragment, {
    children: "Connection state transitions"
  })
}, {
  depth: 3,
  url: "#stream-channel-connection-states-6",
  title: _jsx(_Fragment, {
    children: "Stream channel connection states"
  })
}, {
  depth: 4,
  url: "#connection-state-transitions-13",
  title: _jsx(_Fragment, {
    children: "Connection state transitions"
  })
}, {
  depth: 2,
  url: "#listen-for-connection-state-events-6",
  title: _jsx(_Fragment, {
    children: "Listen for connection state events"
  })
}, {
  depth: 2,
  url: "#connection-restoration-mechanism-6",
  title: _jsx(_Fragment, {
    children: "Connection restoration mechanism"
  })
}, {
  depth: 2,
  url: "#handling-connection-errors-6",
  title: _jsx(_Fragment, {
    children: "Handling connection errors"
  })
}, {
  depth: 3,
  url: "#fatal-errors-6",
  title: _jsx(_Fragment, {
    children: "Fatal errors"
  })
}, {
  depth: 3,
  url: "#non-fatal-errors-6",
  title: _jsx(_Fragment, {
    children: "Non-fatal errors"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-7",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#connection-states-7",
  title: _jsx(_Fragment, {
    children: "Connection states"
  })
}, {
  depth: 3,
  url: "#message-channel-connection-states-7",
  title: _jsx(_Fragment, {
    children: "Message channel connection states"
  })
}, {
  depth: 4,
  url: "#connection-state-transitions-14",
  title: _jsx(_Fragment, {
    children: "Connection state transitions"
  })
}, {
  depth: 3,
  url: "#stream-channel-connection-states-7",
  title: _jsx(_Fragment, {
    children: "Stream channel connection states"
  })
}, {
  depth: 4,
  url: "#connection-state-transitions-15",
  title: _jsx(_Fragment, {
    children: "Connection state transitions"
  })
}, {
  depth: 2,
  url: "#listen-for-connection-state-events-7",
  title: _jsx(_Fragment, {
    children: "Listen for connection state events"
  })
}, {
  depth: 2,
  url: "#connection-restoration-mechanism-7",
  title: _jsx(_Fragment, {
    children: "Connection restoration mechanism"
  })
}, {
  depth: 2,
  url: "#handling-connection-errors-7",
  title: _jsx(_Fragment, {
    children: "Handling connection errors"
  })
}, {
  depth: 3,
  url: "#fatal-errors-7",
  title: _jsx(_Fragment, {
    children: "Fatal errors"
  })
}, {
  depth: 3,
  url: "#non-fatal-errors-7",
  title: _jsx(_Fragment, {
    children: "Non-fatal errors"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
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
  }, { CalloutContainer, CalloutDescription, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, Tabs, TabsContent, TabsList, TabsTrigger, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
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
    canonicalPlatform: "web",
    platforms: '["web","android","ios","macos","flutter","windows","linux-cpp","linux-java"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "web",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "web"
      }), _jsx(_components.p, {
        children: "During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The information on this page is applicable to Signaling SDK versions 2.2.0 or later."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention."
      }), _jsx(_components.p, {
        children: "This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status."
      }), _jsx(_components.p, {
        children: "The Signaling SDK handles the following connection management tasks:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure."
        }), `
`, _jsx(_components.li, {
          children: "Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously."
        }), `
`, _jsx(_components.li, {
          children: "Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection."
        }), `
`, _jsx(_components.li, {
          children: "Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level."
        }), `
`]
      }), _jsx(_components.h2, {
        id: "connection-states",
        children: "Connection states"
      }), _jsx(_components.p, {
        children: "This section describes the various connection states and their transitions in both message and stream channels."
      }), _jsx(_components.h3, {
        id: "message-channel-connection-states",
        children: "Message channel connection states"
      }), _jsx(_components.p, {
        children: "To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals."
      }), _jsx(_components.p, {
        children: "The following table gives an overview of the various connection states:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "State"
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
              children: _jsx(_components.code, {
                children: "IDLE"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Idle state"
              }), ": The SDK enters this state when you create a client instance or after you explicitly call the ", _jsx(_components.code, {
                children: "logout"
              }), " method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CONNECTING"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connecting state"
              }), ": When you call the ", _jsx(_components.code, {
                children: "login"
              }), " method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CONNECTED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connected state"
              }), ": In this state, the client and the server are connected normally; users can access all Signaling capabilities."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "DISCONNECTED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Disconnected state"
              }), ": The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to ", _jsx(_components.code, {
                children: "SUSPENDED"
              }), " if the connection cannot be restored within this time."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SUSPENDED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connection pending state"
              }), ": This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the ", _jsx(_components.code, {
                children: "login"
              }), " method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the ", _jsx(_components.code, {
                children: "logout"
              }), " method to return to the ", _jsx(_components.code, {
                children: "IDLE"
              }), " state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FAILED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Failed state"
              }), ": If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the ", _jsx(_components.code, {
                children: "login"
              }), " method again."]
            })]
          })]
        })]
      }), _jsx(_components.h4, {
        id: "connection-state-transitions",
        children: "Connection state transitions"
      }), _jsx(_components.p, {
        children: "The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Message channel connection state transitions"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/message-channel-connection-states.svg",
          alt: "message-channel-connection-states"
        })
      }), _jsx(_components.h3, {
        id: "stream-channel-connection-states",
        children: "Stream channel connection states"
      }), _jsx(_components.p, {
        children: "In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts."
      }), _jsx(_components.p, {
        children: "The table below provides an overview of the various stream channel connection states:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "State"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "IDLE"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Idle state"
              }), ": The SDK enters this state after you create a stream channel instance or after you explicitly call the ", _jsx(_components.code, {
                children: "leave"
              }), " method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "CONNECTING"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Connecting state"
              }), ": When you call the ", _jsx(_components.code, {
                children: "join"
              }), " method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "CONNECTED"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Connected state"
              }), ":  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "FAILED"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Failed state"
              }), ": If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the ", _jsx(_components.code, {
                children: "join"
              }), " method again."]
            })]
          })]
        })]
      }), _jsx(_components.h4, {
        id: "connection-state-transitions-1",
        children: "Connection state transitions"
      }), _jsx(_components.p, {
        children: "The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Stream channel connection state transitions"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/stream-channel-connection-states.svg",
          alt: "stream-channel-connection-states"
        })
      }), _jsx(_components.h2, {
        id: "listen-for-connection-state-events",
        children: "Listen for connection state events"
      }), _jsxs(_components.p, {
        children: ["The ", _jsx(_components.code, {
          children: "linkState"
        }), " callback provides the information you need to understand network state transitions."]
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "rtm."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "addEventListener"
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
                children: "'linkState'"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "event"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " =>"
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
                children: "    const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " currentState"
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
                children: " event.currentState;"
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
                children: " previousState"
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
                children: " event.previousState;"
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
                children: " serviceType"
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
                children: " event.serviceType;"
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
                children: " operation"
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
                children: " event.operation;"
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
                children: " reason"
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
                children: " event.reason;"
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
                children: " affectedChannels"
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
                children: " event.affectedChannels;"
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
                children: " timestamp"
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
                children: " event.timestamp;"
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
                children: " isResumed"
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
                children: " event.isResumed;"
              })]
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
      }), _jsx(_components.p, {
        children: "The event provides the following parameters:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "previousState"
          }), ": The state from which the change occurred."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "currentState"
          }), ": The current state after the change."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "serviceType"
          }), ": The type of service for which the connection state has changed."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "operation"
          }), ": The operation responsible for the change."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "reason"
          }), ": The reason behind the change."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "connection-restoration-mechanism",
        children: "Connection restoration mechanism"
      }), _jsxs(_components.p, {
        children: ["After each ", _jsx(_components.code, {
          children: "login"
        }), " operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel."]
      }), _jsxs(_components.p, {
        children: ["When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the ", _jsx(_components.code, {
          children: "DISCONNECTED"
        }), " state or the ", _jsx(_components.code, {
          children: "SUSPENDED"
        }), " state, continuity is automatically restored as long as the user does not actively call the ", _jsx(_components.code, {
          children: "logout"
        }), " method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to ", _jsx(_components.code, {
          children: "IDLE"
        }), ". Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses."]
      }), _jsxs(_components.p, {
        children: ["In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the ", _jsx(_components.code, {
          children: "affectedChannels"
        }), " field returned by the ", _jsx(_components.code, {
          children: "linkState"
        }), " event. The following example shows sample information contained in the ", _jsx(_components.code, {
          children: "affectedChannels"
        }), " field :"]
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"affectedChannels"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": ["
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "ChatRoom"'
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "VirtualSpace"'
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
      }), _jsx(_components.h2, {
        id: "handling-connection-errors",
        children: "Handling connection errors"
      }), _jsxs(_components.p, {
        children: ["The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an ", _jsx(_components.code, {
          children: "linkSTate"
        }), " callback. Handle these events according to your business needs to optimize the user experience."]
      }), _jsx(_components.h3, {
        id: "fatal-errors",
        children: "Fatal errors"
      }), _jsxs(_components.p, {
        children: ["Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the ", _jsx(_components.code, {
          children: "FAILED"
        }), " state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the ", _jsx(_components.code, {
          children: "login"
        }), " or ", _jsx(_components.code, {
          children: "join"
        }), " method."]
      }), _jsx(_components.p, {
        children: "Following is a list of issues that may lead to fatal errors:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "An invalid or expired token."
        }), `
`, _jsx(_components.li, {
          children: "The user ID of the current user is banned."
        }), `
`, _jsx(_components.li, {
          children: "Signaling is not enabled for the current app ID or the app ID is invalid"
        }), `
`, _jsx(_components.li, {
          children: "Edge server resources are unavailable."
        }), `
`, _jsxs(_components.li, {
          children: ["The ", _jsx(_components.code, {
            children: "MESSAGE"
          }), " service is not deployed in the current environment."]
        }), `
`, _jsx(_components.li, {
          children: "Usage limit exceeded."
        }), `
`, _jsx(_components.li, {
          children: "A stream channel instance was not created."
        }), `
`, _jsx(_components.li, {
          children: "The channel name is illegal."
        }), `
`]
      }), _jsx(_components.h3, {
        id: "non-fatal-errors",
        children: "Non-fatal errors"
      }), _jsx(_components.p, {
        children: "Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsx(_components.p, {
        children: "During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The information on this page is applicable to Signaling SDK versions 2.2.0 or later."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-1",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention."
      }), _jsx(_components.p, {
        children: "This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status."
      }), _jsx(_components.p, {
        children: "The Signaling SDK handles the following connection management tasks:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure."
        }), `
`, _jsx(_components.li, {
          children: "Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously."
        }), `
`, _jsx(_components.li, {
          children: "Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection."
        }), `
`, _jsx(_components.li, {
          children: "Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level."
        }), `
`]
      }), _jsx(_components.h2, {
        id: "connection-states-1",
        children: "Connection states"
      }), _jsx(_components.p, {
        children: "This section describes the various connection states and their transitions in both message and stream channels."
      }), _jsx(_components.h3, {
        id: "message-channel-connection-states-1",
        children: "Message channel connection states"
      }), _jsx(_components.p, {
        children: "To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals."
      }), _jsx(_components.p, {
        children: "The following table gives an overview of the various connection states:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "State"
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
              children: _jsx(_components.code, {
                children: "IDLE"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Idle state"
              }), ": The SDK enters this state when you create a client instance or after you explicitly call the ", _jsx(_components.code, {
                children: "logout"
              }), " method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CONNECTING"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connecting state"
              }), ": When you call the ", _jsx(_components.code, {
                children: "login"
              }), " method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CONNECTED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connected state"
              }), ": In this state, the client and the server are connected normally; users can access all Signaling capabilities."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "DISCONNECTED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Disconnected state"
              }), ": The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to ", _jsx(_components.code, {
                children: "SUSPENDED"
              }), " if the connection cannot be restored within this time."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SUSPENDED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connection pending state"
              }), ": This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the ", _jsx(_components.code, {
                children: "login"
              }), " method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the ", _jsx(_components.code, {
                children: "logout"
              }), " method to return to the ", _jsx(_components.code, {
                children: "IDLE"
              }), " state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FAILED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Failed state"
              }), ": If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the ", _jsx(_components.code, {
                children: "login"
              }), " method again."]
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The following figure shows possible transitions between message channel connection states:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/message-channel-transitions.svg",
          alt: "Message connection states"
        })
      }), _jsx(_components.h4, {
        id: "connection-state-transitions-2",
        children: "Connection state transitions"
      }), _jsx(_components.p, {
        children: "The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Message channel connection state transitions"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/message-channel-connection-states.svg",
          alt: "message-channel-connection-states"
        })
      }), _jsx(_components.h3, {
        id: "stream-channel-connection-states-1",
        children: "Stream channel connection states"
      }), _jsx(_components.p, {
        children: "In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts."
      }), _jsx(_components.p, {
        children: "The table below provides an overview of the various stream channel connection states:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "State"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "IDLE"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Idle state"
              }), ": The SDK enters this state after you create a stream channel instance or after you explicitly call the ", _jsx(_components.code, {
                children: "leave"
              }), " method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "CONNECTING"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Connecting state"
              }), ": When you call the ", _jsx(_components.code, {
                children: "join"
              }), " method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "CONNECTED"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Connected state"
              }), ":  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "FAILED"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Failed state"
              }), ": If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the ", _jsx(_components.code, {
                children: "join"
              }), " method again."]
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The following figure shows possible transitions between stream channel connection states:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/stream-connection-state-transitions.svg",
          alt: "Stream connection states"
        })
      }), _jsx(_components.h4, {
        id: "connection-state-transitions-3",
        children: "Connection state transitions"
      }), _jsx(_components.p, {
        children: "The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Stream channel connection state transitions"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/stream-channel-connection-states.svg",
          alt: "stream-channel-connection-states"
        })
      }), _jsx(_components.h2, {
        id: "listen-for-connection-state-events-1",
        children: "Listen for connection state events"
      }), _jsxs(_components.p, {
        children: ["The ", _jsx(_components.code, {
          children: "onLinkStateEvent"
        }), " callback provides the information you need to understand network state transitions."]
      }), _jsxs(CodeBlockTabs, {
        defaultValue: "Java",
        children: [_jsxs(CodeBlockTabsList, {
          children: [_jsx(CodeBlockTabsTrigger, {
            value: "Java",
            children: "Java"
          }), _jsx(CodeBlockTabsTrigger, {
            value: "Kotlin",
            children: "Kotlin"
          })]
        }), _jsx(CodeBlockTab, {
          value: "Java",
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
                    children: "RtmEventListener listener "
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
                    children: " RtmEventListener"
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
                    children: " onLinkStateEvent"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(LinkStateEvent "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "event"
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
                    children: "rtmClient."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "addEventListener"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(listener);"
                  })]
                })]
              })
            })
          })
        }), _jsx(CodeBlockTab, {
          value: "Kotlin",
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
                    children: " listener "
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
                    children: "RtmEventListener"
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
                    children: " onLinkStateEvent"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(event: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "LinkStateEvent"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "rtmClient."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "addEventListener"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(listener)"
                  })]
                })]
              })
            })
          })
        })]
      }), _jsx(_components.p, {
        children: "The event provides the following parameters:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "previousState"
          }), ": The state from which the change occurred."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "currentState"
          }), ": The current state after the change."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "serviceType"
          }), ": The type of service for which the connection state has changed."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "operation"
          }), ": The operation responsible for the change."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "reason"
          }), ": The reason behind the change."]
        }), `
`]
      }), _jsx(_components.p, {
        children: "To remove the callback use:"
      }), _jsxs(CodeBlockTabs, {
        defaultValue: "Java",
        children: [_jsxs(CodeBlockTabsList, {
          children: [_jsx(CodeBlockTabsTrigger, {
            value: "Java",
            children: "Java"
          }), _jsx(CodeBlockTabsTrigger, {
            value: "Kotlin",
            children: "Kotlin"
          })]
        }), _jsx(CodeBlockTab, {
          value: "Java",
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "rtmClient."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "removeEventListener"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(listener);"
                  })]
                })
              })
            })
          })
        }), _jsx(CodeBlockTab, {
          value: "Kotlin",
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "rtmClient."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "removeEventListener"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(listener)"
                  })]
                })
              })
            })
          })
        })]
      }), _jsx(_components.h2, {
        id: "connection-restoration-mechanism-1",
        children: "Connection restoration mechanism"
      }), _jsxs(_components.p, {
        children: ["After each ", _jsx(_components.code, {
          children: "login"
        }), " operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel."]
      }), _jsxs(_components.p, {
        children: ["When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the ", _jsx(_components.code, {
          children: "DISCONNECTED"
        }), " state or the ", _jsx(_components.code, {
          children: "SUSPENDED"
        }), " state, continuity is automatically restored as long as the user does not actively call the ", _jsx(_components.code, {
          children: "logout"
        }), " method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to ", _jsx(_components.code, {
          children: "IDLE"
        }), ". Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses."]
      }), _jsxs(_components.p, {
        children: ["In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the ", _jsx(_components.code, {
          children: "affectedChannels"
        }), " field returned by the ", _jsx(_components.code, {
          children: "onLinkStateEvent"
        }), " event. The following example shows sample information contained in the ", _jsx(_components.code, {
          children: "affectedChannels"
        }), " field :"]
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"affectedChannels"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " : ["
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "ChatRoom"'
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "VirtualSpace"'
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
      }), _jsx(_components.h2, {
        id: "handling-connection-errors-1",
        children: "Handling connection errors"
      }), _jsxs(_components.p, {
        children: ["The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an ", _jsx(_components.code, {
          children: "onLinkStateEvent"
        }), " callback. Handle these events according to your business needs to optimize the user experience."]
      }), _jsx(_components.h3, {
        id: "fatal-errors-1",
        children: "Fatal errors"
      }), _jsxs(_components.p, {
        children: ["Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the ", _jsx(_components.code, {
          children: "FAILED"
        }), " state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the ", _jsx(_components.code, {
          children: "login"
        }), " or ", _jsx(_components.code, {
          children: "join"
        }), " method."]
      }), _jsx(_components.p, {
        children: "Following is a list of issues that may lead to fatal errors:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "An invalid or expired token."
        }), `
`, _jsx(_components.li, {
          children: "The user ID of the current user is banned."
        }), `
`, _jsx(_components.li, {
          children: "Signaling is not enabled for the current app ID or the app ID is invalid"
        }), `
`, _jsx(_components.li, {
          children: "Edge server resources are unavailable."
        }), `
`, _jsxs(_components.li, {
          children: ["The ", _jsx(_components.code, {
            children: "MESSAGE"
          }), " service is not deployed in the current environment."]
        }), `
`, _jsx(_components.li, {
          children: "Usage limit exceeded."
        }), `
`, _jsx(_components.li, {
          children: "A stream channel instance was not created."
        }), `
`, _jsx(_components.li, {
          children: "The channel name is illegal."
        }), `
`]
      }), _jsx(_components.h3, {
        id: "non-fatal-errors-1",
        children: "Non-fatal errors"
      }), _jsx(_components.p, {
        children: "Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status."
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
        children: "During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The information on this page is applicable to Signaling SDK versions 2.2.0 or later."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-2",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention."
      }), _jsx(_components.p, {
        children: "This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status."
      }), _jsx(_components.p, {
        children: "The Signaling SDK handles the following connection management tasks:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure."
        }), `
`, _jsx(_components.li, {
          children: "Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously."
        }), `
`, _jsx(_components.li, {
          children: "Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection."
        }), `
`, _jsx(_components.li, {
          children: "Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level."
        }), `
`]
      }), _jsx(_components.h2, {
        id: "connection-states-2",
        children: "Connection states"
      }), _jsx(_components.p, {
        children: "This section describes the various connection states and their transitions in both message and stream channels."
      }), _jsx(_components.h3, {
        id: "message-channel-connection-states-2",
        children: "Message channel connection states"
      }), _jsx(_components.p, {
        children: "To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals."
      }), _jsx(_components.p, {
        children: "The following table gives an overview of the various connection states:"
      }), _jsx(_components.p, {
        children: "The following figure shows possible transitions between message channel connection states:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/message-channel-transitions.svg",
          alt: "Message connection states"
        })
      }), _jsx(_components.h4, {
        id: "connection-state-transitions-4",
        children: "Connection state transitions"
      }), _jsx(_components.p, {
        children: "The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Message channel connection state transitions"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/message-channel-connection-states.svg",
          alt: "message-channel-connection-states"
        })
      }), _jsx(_components.h3, {
        id: "stream-channel-connection-states-2",
        children: "Stream channel connection states"
      }), _jsx(_components.p, {
        children: "In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts."
      }), _jsx(_components.p, {
        children: "The table below provides an overview of the various stream channel connection states:"
      }), _jsxs(Tabs, {
        defaultValue: "swift",
        groupId: "language",
        persist: true,
        children: [_jsxs(TabsList, {
          children: [_jsx(TabsTrigger, {
            value: "swift",
            children: "Swift"
          }), _jsx(TabsTrigger, {
            value: "objc",
            children: "Objective-C"
          })]
        }), _jsx(TabsContent, {
          value: "swift",
          children: _jsxs(_components.table, {
            children: [_jsx(_components.thead, {
              children: _jsxs(_components.tr, {
                children: [_jsx(_components.th, {
                  style: {
                    textAlign: "left"
                  },
                  children: "State"
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
                  children: _jsx(_components.code, {
                    children: "idle"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Idle state"
                  }), ": The SDK enters this state when you create a client instance or after you explicitly call the ", _jsx(_components.code, {
                    children: "logout"
                  }), " method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "connecting"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Connecting state"
                  }), ": When you call the ", _jsx(_components.code, {
                    children: "login"
                  }), " method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "connected"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Connected state"
                  }), ": In this state, the client and the server are connected normally; users can access all Signaling capabilities."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "disconnected"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Disconnected state"
                  }), ": The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to ", _jsx(_components.code, {
                    children: "suspended"
                  }), " if the connection cannot be restored within this time."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "suspended"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Connection pending state"
                  }), ": This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the ", _jsx(_components.code, {
                    children: "login"
                  }), " method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the ", _jsx(_components.code, {
                    children: "logout"
                  }), " method to return to the ", _jsx(_components.code, {
                    children: "Idle"
                  }), " state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "failed"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Failed state"
                  }), ": If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the ", _jsx(_components.code, {
                    children: "login"
                  }), " method again."]
                })]
              })]
            })]
          })
        }), _jsx(TabsContent, {
          value: "objc",
          children: _jsxs(_components.table, {
            children: [_jsx(_components.thead, {
              children: _jsxs(_components.tr, {
                children: [_jsx(_components.th, {
                  style: {
                    textAlign: "left"
                  },
                  children: "State"
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
                  children: _jsx(_components.code, {
                    children: "AgoraRtmLinkStateIdle"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Idle state"
                  }), ": The SDK enters this state when you create a client instance or after you explicitly call the ", _jsx(_components.code, {
                    children: "logout"
                  }), " method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "AgoraRtmLinkStateConnecting"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Connecting state"
                  }), ": When you call the ", _jsx(_components.code, {
                    children: "loginByToken"
                  }), " method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "AgoraRtmLinkStateConnected"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Connected state"
                  }), ": In this state, the client and the server are connected normally; users can access all Signaling capabilities."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "AgoraRtmLinkStateDisconnected"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Disconnected state"
                  }), ": The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to ", _jsx(_components.code, {
                    children: "AgoraRtmLinkStateSuspended"
                  }), " if the connection cannot be restored within this time."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "AgoraRtmLinkStateSuspended"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Connection pending state"
                  }), ": This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the ", _jsx(_components.code, {
                    children: "loginByToken"
                  }), " method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the ", _jsx(_components.code, {
                    children: "logout"
                  }), " method to return to the ", _jsx(_components.code, {
                    children: "AgoraRtmLinkStateIdle"
                  }), " state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "AgoraRtmLinkStateFailed"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Failed state"
                  }), ": If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the ", _jsx(_components.code, {
                    children: "loginByToken"
                  }), " method again."]
                })]
              })]
            })]
          })
        })]
      }), _jsx(_components.p, {
        children: "The following figure shows possible transitions between stream channel connection states:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/stream-connection-state-transitions.svg",
          alt: "Stream connection states"
        })
      }), _jsx(_components.h4, {
        id: "connection-state-transitions-5",
        children: "Connection state transitions"
      }), _jsx(_components.p, {
        children: "The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Stream channel connection state transitions"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/stream-channel-connection-states.svg",
          alt: "stream-channel-connection-states"
        })
      }), _jsx(_components.h2, {
        id: "listen-for-connection-state-events-2",
        children: "Listen for connection state events"
      }), _jsxs(_components.p, {
        children: ["The ", _jsx(_components.code, {
          children: "didReceiveLinkStateEvent"
        }), " callback provides the information you need to understand network state transitions."]
      }), _jsxs(CodeBlockTabs, {
        defaultValue: "Swift",
        children: [_jsxs(CodeBlockTabsList, {
          children: [_jsx(CodeBlockTabsTrigger, {
            value: "Swift",
            children: "Swift"
          }), _jsx(CodeBlockTabsTrigger, {
            value: "Objective-C",
            children: "Objective-C"
          })]
        }), _jsx(CodeBlockTab, {
          value: "Swift",
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
                    children: " RtmListenerEx"
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
                    children: "NSObject"
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
                    children: "AgoraRtmClientDelegate "
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
                    children: " rtmKit"
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
                    children: " rtmKit: AgoraRtmClientKit, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "didReceiveLinkStateEvent"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " event: AgoraRtmLinkStateEvent) {"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "        // code for handle link state change"
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
                    children: "let"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " listenerEx "
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
                    children: " RtmListenerEx"
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
                    children: "rtm."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "addDelegate"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(listenerEx)"
                  })]
                })]
              })
            })
          })
        }), _jsx(CodeBlockTab, {
          value: "Objective-C",
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
                    children: "@interface"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " RtmListenerEx"
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
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " <AgoraRtmClientDelegate>"
                  })]
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
                    children: "@implementation"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " RtmListenerEx"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "- ("
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
                    children: ")"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "rtmKit:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(AgoraRtmClientKit "
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
                    children: ")rtmKit "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "didReceiveLinkStateEvent:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(AgoraRtmLinkStateEvent "
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
                    children: ")event {}"
                  })]
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
                    children: "RtmListenerEx"
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
                    children: " handlerEx "
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
                    children: "  [[RtmListenerEx "
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
                    children: "[rtm "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "addDelegate:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "handlerEx];"
                  })]
                })]
              })
            })
          })
        })]
      }), _jsx(_components.p, {
        children: "The event provides the following parameters:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "previousState"
          }), ": The state from which the change occurred."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "currentState"
          }), ": The current state after the change."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "serviceType"
          }), ": The type of service for which the connection state has changed."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "operation"
          }), ": The operation responsible for the change."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "reason"
          }), ": The reason behind the change."]
        }), `
`]
      }), _jsx(_components.p, {
        children: "To remove the callback use:"
      }), _jsxs(CodeBlockTabs, {
        defaultValue: "Swift",
        children: [_jsxs(CodeBlockTabsList, {
          children: [_jsx(CodeBlockTabsTrigger, {
            value: "Swift",
            children: "Swift"
          }), _jsx(CodeBlockTabsTrigger, {
            value: "Objective-C",
            children: "Objective-C"
          })]
        }), _jsx(CodeBlockTab, {
          value: "Swift",
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsx(_components.code, {
                children: _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "rtm."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "removeDelegate"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(listenerEx)"
                  })]
                })
              })
            })
          })
        }), _jsx(CodeBlockTab, {
          value: "Objective-C",
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "[rtm "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "removeDelegate:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "handlerEx];"
                  })]
                })
              })
            })
          })
        })]
      }), _jsx(_components.h2, {
        id: "connection-restoration-mechanism-2",
        children: "Connection restoration mechanism"
      }), _jsx(_components.p, {
        children: "Each time you log in, the SDK attempts to establish a connection with the server and generates a local session cache. This cache stores information about the channels the user subscribes to or joins, along with temporary user status data. The cache applies to both message and stream channels."
      }), _jsx(_components.p, {
        children: "If the client disconnects temporarily due to a network issue, it automatically tries to reconnect. Upon successful reconnection, the SDK uses the session cache to restore the user's channel subscriptions and temporary user status, ensuring session continuity. Whether the client recovers from a disconnected or suspended state, continuity is automatically maintained as long as the user does not log out. However, if the user logs out, the session cache is cleared, and the connection status returns to idle. The user must then log in again, resubscribe to channels, and reset their temporary user statuses."
      }), _jsxs(_components.p, {
        children: ["In the event of a sudden network disconnection, you can check the names of affected channels in the ", _jsx(_components.code, {
          children: "affectedChannels"
        }), " field returned by the ", _jsx(_components.code, {
          children: "didReceiveLinkStateEvent"
        }), " event. The following example shows sample information contained in the ", _jsx(_components.code, {
          children: "affectedChannels"
        }), " field:"]
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"affectedChannels"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " : ["
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "ChatRoom"'
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "VirtualSpace"'
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
      }), _jsx(_components.h2, {
        id: "handling-connection-errors-2",
        children: "Handling connection errors"
      }), _jsxs(_components.p, {
        children: ["The Signaling client automatically recovers from non-fatal error states, and notifies you of the event details through an ", _jsx(_components.code, {
          children: "didReceiveLinkStateEvent"
        }), " callback. Handle these events according to your business needs to optimize the user experience."]
      }), _jsx(_components.h3, {
        id: "fatal-errors-2",
        children: "Fatal errors"
      }), _jsx(_components.p, {
        children: `Some errors are critical, meaning the system cannot automatically recover and enters a failed state. In this state, automatic reconnection is not attempted. To resolve such issues, troubleshoot the errors manually and explicitly trigger reconnection by logging in or rejoining the channel.
Following is a list of issues that may lead to fatal errors:`
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "An invalid or expired token."
        }), `
`, _jsx(_components.li, {
          children: "The user ID of the current user is banned."
        }), `
`, _jsx(_components.li, {
          children: "Signaling is not enabled for the current app ID or the app ID is invalid"
        }), `
`, _jsx(_components.li, {
          children: "Edge server resources are unavailable."
        }), `
`, _jsx(_components.li, {
          children: "The message service is not deployed in the current environment."
        }), `
`, _jsx(_components.li, {
          children: "Usage limit exceeded."
        }), `
`, _jsx(_components.li, {
          children: "A stream channel instance was not created."
        }), `
`, _jsx(_components.li, {
          children: "The channel name is illegal."
        }), `
`]
      }), _jsx(_components.h3, {
        id: "non-fatal-errors-2",
        children: "Non-fatal errors"
      }), _jsx(_components.p, {
        children: "Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status."
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
        children: "During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The information on this page is applicable to Signaling SDK versions 2.2.0 or later."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-3",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention."
      }), _jsx(_components.p, {
        children: "This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status."
      }), _jsx(_components.p, {
        children: "The Signaling SDK handles the following connection management tasks:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure."
        }), `
`, _jsx(_components.li, {
          children: "Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously."
        }), `
`, _jsx(_components.li, {
          children: "Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection."
        }), `
`, _jsx(_components.li, {
          children: "Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level."
        }), `
`]
      }), _jsx(_components.h2, {
        id: "connection-states-3",
        children: "Connection states"
      }), _jsx(_components.p, {
        children: "This section describes the various connection states and their transitions in both message and stream channels."
      }), _jsx(_components.h3, {
        id: "message-channel-connection-states-3",
        children: "Message channel connection states"
      }), _jsx(_components.p, {
        children: "To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals."
      }), _jsx(_components.p, {
        children: "The following table gives an overview of the various connection states:"
      }), _jsx(_components.p, {
        children: "The following figure shows possible transitions between message channel connection states:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/message-channel-transitions.svg",
          alt: "Message connection states"
        })
      }), _jsx(_components.h4, {
        id: "connection-state-transitions-6",
        children: "Connection state transitions"
      }), _jsx(_components.p, {
        children: "The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Message channel connection state transitions"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/message-channel-connection-states.svg",
          alt: "message-channel-connection-states"
        })
      }), _jsx(_components.h3, {
        id: "stream-channel-connection-states-3",
        children: "Stream channel connection states"
      }), _jsx(_components.p, {
        children: "In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts."
      }), _jsx(_components.p, {
        children: "The table below provides an overview of the various stream channel connection states:"
      }), _jsxs(Tabs, {
        defaultValue: "swift",
        groupId: "language",
        persist: true,
        children: [_jsxs(TabsList, {
          children: [_jsx(TabsTrigger, {
            value: "swift",
            children: "Swift"
          }), _jsx(TabsTrigger, {
            value: "objc",
            children: "Objective-C"
          })]
        }), _jsx(TabsContent, {
          value: "swift",
          children: _jsxs(_components.table, {
            children: [_jsx(_components.thead, {
              children: _jsxs(_components.tr, {
                children: [_jsx(_components.th, {
                  style: {
                    textAlign: "left"
                  },
                  children: "State"
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
                  children: _jsx(_components.code, {
                    children: "idle"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Idle state"
                  }), ": The SDK enters this state when you create a client instance or after you explicitly call the ", _jsx(_components.code, {
                    children: "logout"
                  }), " method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "connecting"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Connecting state"
                  }), ": When you call the ", _jsx(_components.code, {
                    children: "login"
                  }), " method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "connected"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Connected state"
                  }), ": In this state, the client and the server are connected normally; users can access all Signaling capabilities."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "disconnected"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Disconnected state"
                  }), ": The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to ", _jsx(_components.code, {
                    children: "suspended"
                  }), " if the connection cannot be restored within this time."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "suspended"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Connection pending state"
                  }), ": This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the ", _jsx(_components.code, {
                    children: "login"
                  }), " method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the ", _jsx(_components.code, {
                    children: "logout"
                  }), " method to return to the ", _jsx(_components.code, {
                    children: "Idle"
                  }), " state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "failed"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Failed state"
                  }), ": If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the ", _jsx(_components.code, {
                    children: "login"
                  }), " method again."]
                })]
              })]
            })]
          })
        }), _jsx(TabsContent, {
          value: "objc",
          children: _jsxs(_components.table, {
            children: [_jsx(_components.thead, {
              children: _jsxs(_components.tr, {
                children: [_jsx(_components.th, {
                  style: {
                    textAlign: "left"
                  },
                  children: "State"
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
                  children: _jsx(_components.code, {
                    children: "AgoraRtmLinkStateIdle"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Idle state"
                  }), ": The SDK enters this state when you create a client instance or after you explicitly call the ", _jsx(_components.code, {
                    children: "logout"
                  }), " method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "AgoraRtmLinkStateConnecting"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Connecting state"
                  }), ": When you call the ", _jsx(_components.code, {
                    children: "loginByToken"
                  }), " method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "AgoraRtmLinkStateConnected"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Connected state"
                  }), ": In this state, the client and the server are connected normally; users can access all Signaling capabilities."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "AgoraRtmLinkStateDisconnected"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Disconnected state"
                  }), ": The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to ", _jsx(_components.code, {
                    children: "AgoraRtmLinkStateSuspended"
                  }), " if the connection cannot be restored within this time."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "AgoraRtmLinkStateSuspended"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Connection pending state"
                  }), ": This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the ", _jsx(_components.code, {
                    children: "loginByToken"
                  }), " method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the ", _jsx(_components.code, {
                    children: "logout"
                  }), " method to return to the ", _jsx(_components.code, {
                    children: "AgoraRtmLinkStateIdle"
                  }), " state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.code, {
                    children: "AgoraRtmLinkStateFailed"
                  })
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: [_jsx(_components.strong, {
                    children: "Failed state"
                  }), ": If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the ", _jsx(_components.code, {
                    children: "loginByToken"
                  }), " method again."]
                })]
              })]
            })]
          })
        })]
      }), _jsx(_components.p, {
        children: "The following figure shows possible transitions between stream channel connection states:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/stream-connection-state-transitions.svg",
          alt: "Stream connection states"
        })
      }), _jsx(_components.h4, {
        id: "connection-state-transitions-7",
        children: "Connection state transitions"
      }), _jsx(_components.p, {
        children: "The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Stream channel connection state transitions"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/stream-channel-connection-states.svg",
          alt: "stream-channel-connection-states"
        })
      }), _jsx(_components.h2, {
        id: "listen-for-connection-state-events-3",
        children: "Listen for connection state events"
      }), _jsxs(_components.p, {
        children: ["The ", _jsx(_components.code, {
          children: "didReceiveLinkStateEvent"
        }), " callback provides the information you need to understand network state transitions."]
      }), _jsxs(CodeBlockTabs, {
        defaultValue: "Swift",
        children: [_jsxs(CodeBlockTabsList, {
          children: [_jsx(CodeBlockTabsTrigger, {
            value: "Swift",
            children: "Swift"
          }), _jsx(CodeBlockTabsTrigger, {
            value: "Objective-C",
            children: "Objective-C"
          })]
        }), _jsx(CodeBlockTab, {
          value: "Swift",
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
                    children: " RtmListenerEx"
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
                    children: "NSObject"
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
                    children: "AgoraRtmClientDelegate "
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
                    children: " rtmKit"
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
                    children: " rtmKit: AgoraRtmClientKit, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "didReceiveLinkStateEvent"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " event: AgoraRtmLinkStateEvent) {"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "        // code for handle link state change"
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
                    children: "let"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " listenerEx "
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
                    children: " RtmListenerEx"
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
                    children: "rtm."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "addDelegate"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(listenerEx)"
                  })]
                })]
              })
            })
          })
        }), _jsx(CodeBlockTab, {
          value: "Objective-C",
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
                    children: "@interface"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " RtmListenerEx"
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
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " <AgoraRtmClientDelegate>"
                  })]
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
                    children: "@implementation"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " RtmListenerEx"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "- ("
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
                    children: ")"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "rtmKit:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(AgoraRtmClientKit "
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
                    children: ")rtmKit "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "didReceiveLinkStateEvent:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(AgoraRtmLinkStateEvent "
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
                    children: ")event {}"
                  })]
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
                    children: "RtmListenerEx"
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
                    children: " handlerEx "
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
                    children: "  [[RtmListenerEx "
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
                    children: "[rtm "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "addDelegate:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "handlerEx];"
                  })]
                })]
              })
            })
          })
        })]
      }), _jsx(_components.p, {
        children: "The event provides the following parameters:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "previousState"
          }), ": The state from which the change occurred."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "currentState"
          }), ": The current state after the change."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "serviceType"
          }), ": The type of service for which the connection state has changed."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "operation"
          }), ": The operation responsible for the change."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "reason"
          }), ": The reason behind the change."]
        }), `
`]
      }), _jsx(_components.p, {
        children: "To remove the callback use:"
      }), _jsxs(CodeBlockTabs, {
        defaultValue: "Swift",
        children: [_jsxs(CodeBlockTabsList, {
          children: [_jsx(CodeBlockTabsTrigger, {
            value: "Swift",
            children: "Swift"
          }), _jsx(CodeBlockTabsTrigger, {
            value: "Objective-C",
            children: "Objective-C"
          })]
        }), _jsx(CodeBlockTab, {
          value: "Swift",
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
              icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
              children: _jsx(_components.code, {
                children: _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "rtm."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "removeDelegate"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(listenerEx)"
                  })]
                })
              })
            })
          })
        }), _jsx(CodeBlockTab, {
          value: "Objective-C",
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "[rtm "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "removeDelegate:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "handlerEx];"
                  })]
                })
              })
            })
          })
        })]
      }), _jsx(_components.h2, {
        id: "connection-restoration-mechanism-3",
        children: "Connection restoration mechanism"
      }), _jsx(_components.p, {
        children: "Each time you log in, the SDK attempts to establish a connection with the server and generates a local session cache. This cache stores information about the channels the user subscribes to or joins, along with temporary user status data. The cache applies to both message and stream channels."
      }), _jsx(_components.p, {
        children: "If the client disconnects temporarily due to a network issue, it automatically tries to reconnect. Upon successful reconnection, the SDK uses the session cache to restore the user's channel subscriptions and temporary user status, ensuring session continuity. Whether the client recovers from a disconnected or suspended state, continuity is automatically maintained as long as the user does not log out. However, if the user logs out, the session cache is cleared, and the connection status returns to idle. The user must then log in again, resubscribe to channels, and reset their temporary user statuses."
      }), _jsxs(_components.p, {
        children: ["In the event of a sudden network disconnection, you can check the names of affected channels in the ", _jsx(_components.code, {
          children: "affectedChannels"
        }), " field returned by the ", _jsx(_components.code, {
          children: "didReceiveLinkStateEvent"
        }), " event. The following example shows sample information contained in the ", _jsx(_components.code, {
          children: "affectedChannels"
        }), " field:"]
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"affectedChannels"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " : ["
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "ChatRoom"'
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "VirtualSpace"'
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
      }), _jsx(_components.h2, {
        id: "handling-connection-errors-3",
        children: "Handling connection errors"
      }), _jsxs(_components.p, {
        children: ["The Signaling client automatically recovers from non-fatal error states, and notifies you of the event details through an ", _jsx(_components.code, {
          children: "didReceiveLinkStateEvent"
        }), " callback. Handle these events according to your business needs to optimize the user experience."]
      }), _jsx(_components.h3, {
        id: "fatal-errors-3",
        children: "Fatal errors"
      }), _jsx(_components.p, {
        children: `Some errors are critical, meaning the system cannot automatically recover and enters a failed state. In this state, automatic reconnection is not attempted. To resolve such issues, troubleshoot the errors manually and explicitly trigger reconnection by logging in or rejoining the channel.
Following is a list of issues that may lead to fatal errors:`
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "An invalid or expired token."
        }), `
`, _jsx(_components.li, {
          children: "The user ID of the current user is banned."
        }), `
`, _jsx(_components.li, {
          children: "Signaling is not enabled for the current app ID or the app ID is invalid"
        }), `
`, _jsx(_components.li, {
          children: "Edge server resources are unavailable."
        }), `
`, _jsx(_components.li, {
          children: "The message service is not deployed in the current environment."
        }), `
`, _jsx(_components.li, {
          children: "Usage limit exceeded."
        }), `
`, _jsx(_components.li, {
          children: "A stream channel instance was not created."
        }), `
`, _jsx(_components.li, {
          children: "The channel name is illegal."
        }), `
`]
      }), _jsx(_components.h3, {
        id: "non-fatal-errors-3",
        children: "Non-fatal errors"
      }), _jsx(_components.p, {
        children: "Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status."
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
        children: "During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The information on this page is applicable to Signaling SDK versions 2.2.0 or later."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-4",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention."
      }), _jsx(_components.p, {
        children: "This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status."
      }), _jsx(_components.p, {
        children: "The Signaling SDK handles the following connection management tasks:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure."
        }), `
`, _jsx(_components.li, {
          children: "Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously."
        }), `
`, _jsx(_components.li, {
          children: "Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection."
        }), `
`, _jsx(_components.li, {
          children: "Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level."
        }), `
`]
      }), _jsx(_components.h2, {
        id: "connection-states-4",
        children: "Connection states"
      }), _jsx(_components.p, {
        children: "This section describes the various connection states and their transitions in both message and stream channels."
      }), _jsx(_components.h3, {
        id: "message-channel-connection-states-4",
        children: "Message channel connection states"
      }), _jsx(_components.p, {
        children: "To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals."
      }), _jsx(_components.p, {
        children: "The following table gives an overview of the various connection states:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "State"
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
              children: _jsx(_components.code, {
                children: "idle"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Idle state"
              }), ": The SDK enters this state when you create a client instance or after you explicitly call the ", _jsx(_components.code, {
                children: "logout"
              }), " method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "connecting"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connecting state"
              }), ": When you call the ", _jsx(_components.code, {
                children: "login"
              }), " method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "connected"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connected state"
              }), ": In this state, the client and the server are connected normally; users can access all Signaling capabilities."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "disconnected"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Disconnected state"
              }), ": The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to ", _jsx(_components.code, {
                children: "suspended"
              }), " if the connection cannot be restored within this time."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "suspended"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connection pending state"
              }), ": This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the ", _jsx(_components.code, {
                children: "login"
              }), " method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the ", _jsx(_components.code, {
                children: "logout"
              }), " method to return to the ", _jsx(_components.code, {
                children: "idle"
              }), " state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "failed"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Failed state"
              }), ": If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the ", _jsx(_components.code, {
                children: "login"
              }), " method again."]
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The following figure shows possible transitions between message channel connection states:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/message-channel-transitions.svg",
          alt: "Message connection states"
        })
      }), _jsx(_components.h4, {
        id: "connection-state-transitions-8",
        children: "Connection state transitions"
      }), _jsx(_components.p, {
        children: "The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Message channel connection state transitions"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/message-channel-connection-states.svg",
          alt: "message-channel-connection-states"
        })
      }), _jsx(_components.h3, {
        id: "stream-channel-connection-states-4",
        children: "Stream channel connection states"
      }), _jsx(_components.p, {
        children: "In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts."
      }), _jsx(_components.p, {
        children: "The table below provides an overview of the various stream channel connection states:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "State"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "idle"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Idle state"
              }), ": The SDK enters this state after you create a stream channel instance or after you explicitly call the ", _jsx(_components.code, {
                children: "leave"
              }), " method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "connecting"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Connecting state"
              }), ": When you call the ", _jsx(_components.code, {
                children: "join"
              }), " method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "connected"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Connected state"
              }), ":  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "failed"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Failed state"
              }), ": If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the ", _jsx(_components.code, {
                children: "join"
              }), " method again."]
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The following figure shows possible transitions between stream channel connection states:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/stream-connection-state-transitions.svg",
          alt: "Stream connection states"
        })
      }), _jsx(_components.h4, {
        id: "connection-state-transitions-9",
        children: "Connection state transitions"
      }), _jsx(_components.p, {
        children: "The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Stream channel connection state transitions"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/stream-channel-connection-states.svg",
          alt: "stream-channel-connection-states"
        })
      }), _jsx(_components.h2, {
        id: "listen-for-connection-state-events-4",
        children: "Listen for connection state events"
      }), _jsxs(_components.p, {
        children: ["The ", _jsx(_components.code, {
          children: "linkState"
        }), " callback provides the information you need to understand network state transitions."]
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
                children: "rtmClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "addListener"
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
                children: "    linkState"
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
                children: " (event) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " currentState "
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
                children: " event.currentState;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " previousState "
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
                children: " event.previousState;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " serviceType "
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
                children: " event.serviceType;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " operation "
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
                children: " event.operation;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " reason "
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
                children: " event.reason;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " affectedChannels "
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
                children: " event.affectedChannels;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " unrestoredChannels "
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
                children: " event.unrestoredChannels;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " isResumed "
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
                children: " event.isResumed;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        var"
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
                children: " event.timestamp;"
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
                children: ");"
              })
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "The event provides the following parameters:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "previousState"
          }), ": The state from which the change occurred."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "currentState"
          }), ": The current state after the change."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "serviceType"
          }), ": The type of service for which the connection state has changed."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "operation"
          }), ": The operation responsible for the change."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "reason"
          }), ": The reason behind the change."]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["To remove the callback, register it as a named function and pass the same function reference to ", _jsx(_components.code, {
          children: "removeListener"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
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
                children: " onLinkState"
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
                children: "LinkStateEvent"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " event) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // Handle the state change"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "rtmClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "addListener"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(linkState"
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
                children: " onLinkState);"
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
                children: "// Later, remove the callback"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "rtmClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "removeListener"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(linkState"
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
                children: " onLinkState);"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "connection-restoration-mechanism-4",
        children: "Connection restoration mechanism"
      }), _jsxs(_components.p, {
        children: ["After each ", _jsx(_components.code, {
          children: "login"
        }), " operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel."]
      }), _jsxs(_components.p, {
        children: ["When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the ", _jsx(_components.code, {
          children: "disconnected"
        }), " state or the ", _jsx(_components.code, {
          children: "suspended"
        }), " state, continuity is automatically restored as long as the user does not actively call the ", _jsx(_components.code, {
          children: "logout"
        }), " method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to ", _jsx(_components.code, {
          children: "idle"
        }), ". Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses."]
      }), _jsxs(_components.p, {
        children: ["In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the ", _jsx(_components.code, {
          children: "affectedChannels"
        }), " field returned by the ", _jsx(_components.code, {
          children: "linkState"
        }), " event. The following example shows sample information contained in the ", _jsx(_components.code, {
          children: "affectedChannels"
        }), " field :"]
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "affectedChannels"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": ["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'ChatRoom'"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'VirtualSpace'"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "],"
              })]
            })
          })
        })
      }), _jsx(_components.h2, {
        id: "handling-connection-errors-4",
        children: "Handling connection errors"
      }), _jsxs(_components.p, {
        children: ["The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an ", _jsx(_components.code, {
          children: "linkState"
        }), " callback. Handle these events according to your business needs to optimize the user experience."]
      }), _jsx(_components.h3, {
        id: "fatal-errors-4",
        children: "Fatal errors"
      }), _jsxs(_components.p, {
        children: ["Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the ", _jsx(_components.code, {
          children: "failed"
        }), " state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the ", _jsx(_components.code, {
          children: "login"
        }), " or ", _jsx(_components.code, {
          children: "join"
        }), " method."]
      }), _jsx(_components.p, {
        children: "Following is a list of issues that may lead to fatal errors:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "An invalid or expired token."
        }), `
`, _jsx(_components.li, {
          children: "The user ID of the current user is banned."
        }), `
`, _jsx(_components.li, {
          children: "Signaling is not enabled for the current app ID or the app ID is invalid"
        }), `
`, _jsx(_components.li, {
          children: "Edge server resources are unavailable."
        }), `
`, _jsxs(_components.li, {
          children: ["The ", _jsx(_components.code, {
            children: "MESSAGE"
          }), " service is not deployed in the current environment."]
        }), `
`, _jsx(_components.li, {
          children: "Usage limit exceeded."
        }), `
`, _jsx(_components.li, {
          children: "A stream channel instance was not created."
        }), `
`, _jsx(_components.li, {
          children: "The channel name is illegal."
        }), `
`]
      }), _jsx(_components.h3, {
        id: "non-fatal-errors-4",
        children: "Non-fatal errors"
      }), _jsx(_components.p, {
        children: "Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status."
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
        children: "During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The information on this page is applicable to Signaling SDK versions 2.2.0 or later."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-5",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention."
      }), _jsx(_components.p, {
        children: "This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status."
      }), _jsx(_components.p, {
        children: "The Signaling SDK handles the following connection management tasks:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure."
        }), `
`, _jsx(_components.li, {
          children: "Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously."
        }), `
`, _jsx(_components.li, {
          children: "Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection."
        }), `
`, _jsx(_components.li, {
          children: "Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level."
        }), `
`]
      }), _jsx(_components.h2, {
        id: "connection-states-5",
        children: "Connection states"
      }), _jsx(_components.p, {
        children: "This section describes the various connection states and their transitions in both message and stream channels."
      }), _jsx(_components.h3, {
        id: "message-channel-connection-states-5",
        children: "Message channel connection states"
      }), _jsx(_components.p, {
        children: "To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals."
      }), _jsx(_components.p, {
        children: "The following table gives an overview of the various connection states:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "State"
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
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_IDLE"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Idle state"
              }), ": The SDK enters this state when you create a client instance or after you explicitly call the ", _jsx(_components.code, {
                children: "logout"
              }), " method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_CONNECTING"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connecting state"
              }), ": When you call the ", _jsx(_components.code, {
                children: "login"
              }), " method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_CONNECTED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connected state"
              }), ": In this state, the client and the server are connected normally; users can access all Signaling capabilities."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_DISCONNECTED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Disconnected state"
              }), ": The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to ", _jsx(_components.code, {
                children: "RTM_LINK_STATE_SUSPENDED"
              }), " if the connection cannot be restored within this time."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_SUSPENDED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connection pending state"
              }), ": This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the ", _jsx(_components.code, {
                children: "login"
              }), " method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the ", _jsx(_components.code, {
                children: "logout"
              }), " method to return to the ", _jsx(_components.code, {
                children: "RTM_LINK_STATE_IDLE"
              }), " state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_FAILED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Failed state"
              }), ": If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the ", _jsx(_components.code, {
                children: "login"
              }), " method again."]
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The following figure shows possible transitions between message channel connection states:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/message-channel-transitions.svg",
          alt: "Message connection states"
        })
      }), _jsx(_components.h4, {
        id: "connection-state-transitions-10",
        children: "Connection state transitions"
      }), _jsx(_components.p, {
        children: "The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Message channel connection state transitions"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/message-channel-connection-states.svg",
          alt: "message-channel-connection-states"
        })
      }), _jsx(_components.h3, {
        id: "stream-channel-connection-states-5",
        children: "Stream channel connection states"
      }), _jsx(_components.p, {
        children: "In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts."
      }), _jsx(_components.p, {
        children: "The table below provides an overview of the various stream channel connection states:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "State"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_IDLE"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Idle state"
              }), ": The SDK enters this state after you create a stream channel instance or after you explicitly call the ", _jsx(_components.code, {
                children: "leave"
              }), " method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_CONNECTING"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Connecting state"
              }), ": When you call the ", _jsx(_components.code, {
                children: "join"
              }), " method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_CONNECTED"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Connected state"
              }), ":  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_FAILED"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Failed state"
              }), ": If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the ", _jsx(_components.code, {
                children: "join"
              }), " method again."]
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The following figure shows possible transitions between stream channel connection states:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/stream-connection-state-transitions.svg",
          alt: "Stream connection states"
        })
      }), _jsx(_components.h4, {
        id: "connection-state-transitions-11",
        children: "Connection state transitions"
      }), _jsx(_components.p, {
        children: "The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Stream channel connection state transitions"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/stream-channel-connection-states.svg",
          alt: "stream-channel-connection-states"
        })
      }), _jsx(_components.h2, {
        id: "listen-for-connection-state-events-5",
        children: "Listen for connection state events"
      }), _jsxs(_components.p, {
        children: ["The ", _jsx(_components.code, {
          children: "onLinkStateEvent"
        }), " callback provides the information you need to understand network state transitions."]
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
                children: " RtmEventHandler"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " : "
              }), _jsx(_components.span, {
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
                children: " IRtmEventHandler"
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
                children: "    void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onLinkStateEvent"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " LinkStateEvent"
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
                children: " event"
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
                children: "override"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {}"
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "RtmConfig config;"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.appId "
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
                children: ' "appid"'
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
                children: "config.userId "
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
                children: ' "userId"'
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
                children: "config.eventHandler "
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
                children: " RtmEventHandler"
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
      }), _jsx(_components.p, {
        children: "The event provides the following parameters:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "previousState"
          }), ": The state from which the change occurred."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "currentState"
          }), ": The current state after the change."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "serviceType"
          }), ": The type of service for which the connection state has changed."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "operation"
          }), ": The operation responsible for the change."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "reason"
          }), ": The reason behind the change."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "connection-restoration-mechanism-5",
        children: "Connection restoration mechanism"
      }), _jsxs(_components.p, {
        children: ["After each ", _jsx(_components.code, {
          children: "login"
        }), " operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel."]
      }), _jsxs(_components.p, {
        children: ["When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the ", _jsx(_components.code, {
          children: "RTM_LINK_STATE_DISCONNECTED"
        }), " state or the ", _jsx(_components.code, {
          children: "RTM_LINK_STATE_SUSPENDED"
        }), " state, continuity is automatically restored as long as the user does not actively call the ", _jsx(_components.code, {
          children: "logout"
        }), " method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to ", _jsx(_components.code, {
          children: "RTM_LINK_STATE_IDLE"
        }), ". Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses."]
      }), _jsxs(_components.p, {
        children: ["In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the ", _jsx(_components.code, {
          children: "affectedChannels"
        }), " field returned by the ", _jsx(_components.code, {
          children: "onLinkStateEvent"
        }), " event. The following example shows sample information contained in the ", _jsx(_components.code, {
          children: "affectedChannels"
        }), " field :"]
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"affectedChannels"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " : ["
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "ChatRoom"'
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "VirtualSpace"'
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
      }), _jsx(_components.h2, {
        id: "handling-connection-errors-5",
        children: "Handling connection errors"
      }), _jsxs(_components.p, {
        children: ["The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an ", _jsx(_components.code, {
          children: "onLinkStateEvent"
        }), " callback. Handle these events according to your business needs to optimize the user experience."]
      }), _jsx(_components.h3, {
        id: "fatal-errors-5",
        children: "Fatal errors"
      }), _jsxs(_components.p, {
        children: ["Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the ", _jsx(_components.code, {
          children: "RTM_LINK_STATE_FAILED"
        }), " state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the ", _jsx(_components.code, {
          children: "login"
        }), " or ", _jsx(_components.code, {
          children: "join"
        }), " method."]
      }), _jsx(_components.p, {
        children: "Following is a list of issues that may lead to fatal errors:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "An invalid or expired token."
        }), `
`, _jsx(_components.li, {
          children: "The user ID of the current user is banned."
        }), `
`, _jsx(_components.li, {
          children: "Signaling is not enabled for the current app ID or the app ID is invalid"
        }), `
`, _jsx(_components.li, {
          children: "Edge server resources are unavailable."
        }), `
`, _jsxs(_components.li, {
          children: ["The ", _jsx(_components.code, {
            children: "RTM_SERVICE_TYPE_MESSAGE"
          }), " service is not deployed in the current environment."]
        }), `
`, _jsx(_components.li, {
          children: "Usage limit exceeded."
        }), `
`, _jsx(_components.li, {
          children: "A stream channel instance was not created."
        }), `
`, _jsx(_components.li, {
          children: "The channel name is illegal."
        }), `
`]
      }), _jsx(_components.h3, {
        id: "non-fatal-errors-5",
        children: "Non-fatal errors"
      }), _jsx(_components.p, {
        children: "Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "linux-cpp",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "linux-cpp"
      }), _jsx(_components.p, {
        children: "During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The information on this page is applicable to Signaling SDK versions 2.2.0 or later."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-6",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention."
      }), _jsx(_components.p, {
        children: "This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status."
      }), _jsx(_components.p, {
        children: "The Signaling SDK handles the following connection management tasks:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure."
        }), `
`, _jsx(_components.li, {
          children: "Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously."
        }), `
`, _jsx(_components.li, {
          children: "Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection."
        }), `
`, _jsx(_components.li, {
          children: "Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level."
        }), `
`]
      }), _jsx(_components.h2, {
        id: "connection-states-6",
        children: "Connection states"
      }), _jsx(_components.p, {
        children: "This section describes the various connection states and their transitions in both message and stream channels."
      }), _jsx(_components.h3, {
        id: "message-channel-connection-states-6",
        children: "Message channel connection states"
      }), _jsx(_components.p, {
        children: "To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals."
      }), _jsx(_components.p, {
        children: "The following table gives an overview of the various connection states:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "State"
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
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_IDLE"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Idle state"
              }), ": The SDK enters this state when you create a client instance or after you explicitly call the ", _jsx(_components.code, {
                children: "logout"
              }), " method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_CONNECTING"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connecting state"
              }), ": When you call the ", _jsx(_components.code, {
                children: "login"
              }), " method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_CONNECTED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connected state"
              }), ": In this state, the client and the server are connected normally; users can access all Signaling capabilities."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_DISCONNECTED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Disconnected state"
              }), ": The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to ", _jsx(_components.code, {
                children: "RTM_LINK_STATE_SUSPENDED"
              }), " if the connection cannot be restored within this time."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_SUSPENDED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connection pending state"
              }), ": This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the ", _jsx(_components.code, {
                children: "login"
              }), " method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the ", _jsx(_components.code, {
                children: "logout"
              }), " method to return to the ", _jsx(_components.code, {
                children: "RTM_LINK_STATE_IDLE"
              }), " state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_FAILED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Failed state"
              }), ": If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the ", _jsx(_components.code, {
                children: "login"
              }), " method again."]
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The following figure shows possible transitions between message channel connection states:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/message-channel-transitions.svg",
          alt: "Message connection states"
        })
      }), _jsx(_components.h4, {
        id: "connection-state-transitions-12",
        children: "Connection state transitions"
      }), _jsx(_components.p, {
        children: "The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Message channel connection state transitions"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/message-channel-connection-states.svg",
          alt: "message-channel-connection-states"
        })
      }), _jsx(_components.h3, {
        id: "stream-channel-connection-states-6",
        children: "Stream channel connection states"
      }), _jsx(_components.p, {
        children: "In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts."
      }), _jsx(_components.p, {
        children: "The table below provides an overview of the various stream channel connection states:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "State"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_IDLE"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Idle state"
              }), ": The SDK enters this state after you create a stream channel instance or after you explicitly call the ", _jsx(_components.code, {
                children: "leave"
              }), " method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_CONNECTING"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Connecting state"
              }), ": When you call the ", _jsx(_components.code, {
                children: "join"
              }), " method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_CONNECTED"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Connected state"
              }), ":  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RTM_LINK_STATE_FAILED"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Failed state"
              }), ": If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the ", _jsx(_components.code, {
                children: "join"
              }), " method again."]
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The following figure shows possible transitions between stream channel connection states:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/stream-connection-state-transitions.svg",
          alt: "Stream connection states"
        })
      }), _jsx(_components.h4, {
        id: "connection-state-transitions-13",
        children: "Connection state transitions"
      }), _jsx(_components.p, {
        children: "The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Stream channel connection state transitions"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/stream-channel-connection-states.svg",
          alt: "stream-channel-connection-states"
        })
      }), _jsx(_components.h2, {
        id: "listen-for-connection-state-events-6",
        children: "Listen for connection state events"
      }), _jsxs(_components.p, {
        children: ["The ", _jsx(_components.code, {
          children: "onLinkStateEvent"
        }), " callback provides the information you need to understand network state transitions."]
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
                children: " RtmEventHandler"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " : "
              }), _jsx(_components.span, {
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
                children: " IRtmEventHandler"
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
                children: "    void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onLinkStateEvent"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " LinkStateEvent"
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
                children: " event"
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
                children: "override"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {}"
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "RtmConfig config;"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.appId "
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
                children: ' "appid"'
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
                children: "config.userId "
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
                children: ' "userId"'
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
                children: "config.eventHandler "
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
                children: " RtmEventHandler"
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
      }), _jsx(_components.p, {
        children: "The event provides the following parameters:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "previousState"
          }), ": The state from which the change occurred."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "currentState"
          }), ": The current state after the change."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "serviceType"
          }), ": The type of service for which the connection state has changed."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "operation"
          }), ": The operation responsible for the change."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "reason"
          }), ": The reason behind the change."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "connection-restoration-mechanism-6",
        children: "Connection restoration mechanism"
      }), _jsxs(_components.p, {
        children: ["After each ", _jsx(_components.code, {
          children: "login"
        }), " operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel."]
      }), _jsxs(_components.p, {
        children: ["When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the ", _jsx(_components.code, {
          children: "RTM_LINK_STATE_DISCONNECTED"
        }), " state or the ", _jsx(_components.code, {
          children: "RTM_LINK_STATE_SUSPENDED"
        }), " state, continuity is automatically restored as long as the user does not actively call the ", _jsx(_components.code, {
          children: "logout"
        }), " method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to ", _jsx(_components.code, {
          children: "RTM_LINK_STATE_IDLE"
        }), ". Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses."]
      }), _jsxs(_components.p, {
        children: ["In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the ", _jsx(_components.code, {
          children: "affectedChannels"
        }), " field returned by the ", _jsx(_components.code, {
          children: "onLinkStateEvent"
        }), " event. The following example shows sample information contained in the ", _jsx(_components.code, {
          children: "affectedChannels"
        }), " field :"]
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"affectedChannels"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " : ["
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "ChatRoom"'
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "VirtualSpace"'
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
      }), _jsx(_components.h2, {
        id: "handling-connection-errors-6",
        children: "Handling connection errors"
      }), _jsxs(_components.p, {
        children: ["The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an ", _jsx(_components.code, {
          children: "onLinkStateEvent"
        }), " callback. Handle these events according to your business needs to optimize the user experience."]
      }), _jsx(_components.h3, {
        id: "fatal-errors-6",
        children: "Fatal errors"
      }), _jsxs(_components.p, {
        children: ["Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the ", _jsx(_components.code, {
          children: "RTM_LINK_STATE_FAILED"
        }), " state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the ", _jsx(_components.code, {
          children: "login"
        }), " or ", _jsx(_components.code, {
          children: "join"
        }), " method."]
      }), _jsx(_components.p, {
        children: "Following is a list of issues that may lead to fatal errors:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "An invalid or expired token."
        }), `
`, _jsx(_components.li, {
          children: "The user ID of the current user is banned."
        }), `
`, _jsx(_components.li, {
          children: "Signaling is not enabled for the current app ID or the app ID is invalid"
        }), `
`, _jsx(_components.li, {
          children: "Edge server resources are unavailable."
        }), `
`, _jsxs(_components.li, {
          children: ["The ", _jsx(_components.code, {
            children: "RTM_SERVICE_TYPE_MESSAGE"
          }), " service is not deployed in the current environment."]
        }), `
`, _jsx(_components.li, {
          children: "Usage limit exceeded."
        }), `
`, _jsx(_components.li, {
          children: "A stream channel instance was not created."
        }), `
`, _jsx(_components.li, {
          children: "The channel name is illegal."
        }), `
`]
      }), _jsx(_components.h3, {
        id: "non-fatal-errors-6",
        children: "Non-fatal errors"
      }), _jsx(_components.p, {
        children: "Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "linux-java",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "linux-java"
      }), _jsx(_components.p, {
        children: "During communication between the Signaling SDK and the server, the connection goes through multiple states. You observe and respond to these state transitions by listening to state change event notifications."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The information on this page is applicable to Signaling SDK versions 2.2.0 or later."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-7",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "In real-world use-cases, disruptions affect a user's network connection. These disruptions cause corresponding changes in Signaling SDK's connection state. To maintain a seamless user experience despite these changes, the SDK ensures continuity of channel subscriptions and the temporary user status. Upon reconnecting from a disconnected state, the SDK automatically restores the previous subscriptions and the temporary user status, eliminating the need for user intervention."
      }), _jsx(_components.p, {
        children: "This continuity assurance does not apply if you actively disconnect by logging out from Signaling. Logging out clears the channel subscriptions and the temporary user status, and resets the connection state to idle. In such cases, you must log in to the server again, re-establish channel subscriptions, and restore the previous usage status."
      }), _jsx(_components.p, {
        children: "The Signaling SDK handles the following connection management tasks:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Intelligently selects the nearest edge server for access and enables quick switchover to an alternate server in case of access failure."
        }), `
`, _jsx(_components.li, {
          children: "Selects the appropriate connection protocol and establishes connections with the server based on user configuration. To ensure service availability, Signaling employs a dual-protocol link mechanism and maintains both TCP and UDP connections simultaneously."
        }), `
`, _jsx(_components.li, {
          children: "Manages and preserves channel subscriptions and ensures continuity of temporary user status upon recovery from a temporary disconnection."
        }), `
`, _jsx(_components.li, {
          children: "Promptly notifies users of connection state changes to facilitate timely observation and response to a specific state change. This feature empowers you to enhance user experience through logical interventions at the business level."
        }), `
`]
      }), _jsx(_components.h2, {
        id: "connection-states-7",
        children: "Connection states"
      }), _jsx(_components.p, {
        children: "This section describes the various connection states and their transitions in both message and stream channels."
      }), _jsx(_components.h3, {
        id: "message-channel-connection-states-7",
        children: "Message channel connection states"
      }), _jsx(_components.p, {
        children: "To use a message channel, you initialize the SDK and log in to initiate a connection with the server. In case of an unexpected interruption, the SDK automatically makes attempts to restore the connection at increasing time intervals (2, 4, 8, 16... seconds) for up to 2 minutes. If the attempts are still unsuccessful, the SDK transitions to a long suspended state and retries at fixed 30-second intervals."
      }), _jsx(_components.p, {
        children: "The following table gives an overview of the various connection states:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "State"
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
              children: _jsx(_components.code, {
                children: "IDLE"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Idle state"
              }), ": The SDK enters this state when you create a client instance or after you explicitly call the ", _jsx(_components.code, {
                children: "logout"
              }), " method. In this state, the SDK does not attempt to establish or maintain a connection with the server. The SDK clears the session cache upon entering this state."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CONNECTING"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connecting state"
              }), ": When you call the ", _jsx(_components.code, {
                children: "login"
              }), " method, the SDK immediately enters this state. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CONNECTED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connected state"
              }), ": In this state, the client and the server are connected normally; users can access all Signaling capabilities."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "DISCONNECTED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Disconnected state"
              }), ": The connection is temporarily disconnected. The SDK enters this state after the connection is lost due to a temporary network failure, or after an unsuccessful reconnection attempt. In this state, the client attempts to restore the connection to the server after 2, 4, 8, ... seconds. If the connection is restored, the SDK restores the previous channel subscription and the user status. In this state, users cannot send or receive messages. This state lasts for up to 2 minutes and switches to ", _jsx(_components.code, {
                children: "SUSPENDED"
              }), " if the connection cannot be restored within this time."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SUSPENDED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Connection pending state"
              }), ": This is a long-term disconnection state entered into due to no network connection or server unavailability. If the connection cannot be restored within 2 minutes, it enters a suspended state after attempts to restore the connection fail. In this state, the SDK periodically tries to restore the connection every 30 seconds. You can also call the ", _jsx(_components.code, {
                children: "login"
              }), " method to try to reconnect. Users cannot send or receive messages while in this state. If automatic reconnection is successful, the SDK automatically restores the channel subscriptions and the temporary user status. You can actively call the ", _jsx(_components.code, {
                children: "logout"
              }), " method to return to the ", _jsx(_components.code, {
                children: "IDLE"
              }), " state. However, note that doing so clears the session cache, and the SDK no longer guarantees the continuity of channel subscriptions and restoration of the user status."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FAILED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.strong, {
                children: "Failed state"
              }), ": If the client encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, the client enters this state. In this state, the SDK does not attempt to reconnect, and the client is unable to send or receive messages. To attempt reconnection, call the ", _jsx(_components.code, {
                children: "login"
              }), " method again."]
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The following figure shows possible transitions between message channel connection states:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/message-channel-transitions.svg",
          alt: "Message connection states"
        })
      }), _jsx(_components.h4, {
        id: "connection-state-transitions-14",
        children: "Connection state transitions"
      }), _jsx(_components.p, {
        children: "The state of the connection between the SDK and the Signaling server undergoes several transitions during communication. The following figure illustrates the state transitions during some common message channel connection use-cases."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Message channel connection state transitions"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/message-channel-connection-states.svg",
          alt: "message-channel-connection-states"
        })
      }), _jsx(_components.h3, {
        id: "stream-channel-connection-states-7",
        children: "Stream channel connection states"
      }), _jsx(_components.p, {
        children: "In a stream channel, you join a channel to initiate a connection with the server. In case of unexpected interruptions, the client automatically attempts reconnection for up to 20 minutes. If the attempts are unsuccessful, the stream channel connection state changes to failed, and the client ceases further reconnection attempts."
      }), _jsx(_components.p, {
        children: "The table below provides an overview of the various stream channel connection states:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "State"
            }), _jsx(_components.th, {
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "IDLE"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Idle state"
              }), ": The SDK enters this state after you create a stream channel instance or after you explicitly call the ", _jsx(_components.code, {
                children: "leave"
              }), " method from any state. In this state, the SDK clears the session cache, closes the connection, and does not attempt to establish a connection to the server."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "CONNECTING"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Connecting state"
              }), ": When you call the ", _jsx(_components.code, {
                children: "join"
              }), " method, the stream channel enters this state immediately. It also enters this state during each reconnection attempt after the connection is accidentally disconnected."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "CONNECTED"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Connected state"
              }), ":  In this state, the client and the server are connected normally; users can access all Signaling stream channel capabilities."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "FAILED"
              })
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Failed state"
              }), ": If the SDK encounters an unrecoverable failure, such as a fatal error due to an incorrect app ID or expired token, it enters this state. In this state, the SDK does not attempt to reconnect, and the user is unable to send or receive messages. To attempt reconnection, call the ", _jsx(_components.code, {
                children: "join"
              }), " method again."]
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The following figure shows possible transitions between stream channel connection states:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/stream-connection-state-transitions.svg",
          alt: "Stream connection states"
        })
      }), _jsx(_components.h4, {
        id: "connection-state-transitions-15",
        children: "Connection state transitions"
      }), _jsx(_components.p, {
        children: "The connection state between the stream channel and the Signaling server undergoes various transitions during communication. The following figure illustrates the state transitions during some common stream channel connection use-cases."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Stream channel connection state transitions"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/signaling/stream-channel-connection-states.svg",
          alt: "stream-channel-connection-states"
        })
      }), _jsx(_components.h2, {
        id: "listen-for-connection-state-events-7",
        children: "Listen for connection state events"
      }), _jsxs(_components.p, {
        children: ["The ", _jsx(_components.code, {
          children: "onLinkStateEvent"
        }), " callback provides the information you need to understand network state transitions."]
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
                children: "RtmEventListener listener "
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
                children: " RtmEventListener"
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
                children: " onLinkStateEvent"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(LinkStateEvent "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "event"
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
                children: "rtmClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "addEventListener"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(listener);"
              })]
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "The event provides the following parameters:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "previousState"
          }), ": The state from which the change occurred."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "currentState"
          }), ": The current state after the change."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "serviceType"
          }), ": The type of service for which the connection state has changed."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "operation"
          }), ": The operation responsible for the change."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "reason"
          }), ": The reason behind the change."]
        }), `
`]
      }), _jsx(_components.p, {
        children: "To remove the callback use:"
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "rtmClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "removeEventListener"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(listener);"
              })]
            })
          })
        })
      }), _jsx(_components.h2, {
        id: "connection-restoration-mechanism-7",
        children: "Connection restoration mechanism"
      }), _jsxs(_components.p, {
        children: ["After each ", _jsx(_components.code, {
          children: "login"
        }), " operation, the SDK attempts to establish a connection with the server and generates a local session cache. This cache records information regarding channels the user subscribes or joins, and the temporary user status data set in these channels. This includes both the message channel and the stream channel."]
      }), _jsxs(_components.p, {
        children: ["When the client experiences temporary disconnection due to a network issue, it automatically attempts to reconnect. Upon successful reconnection, the SDK utilizes the session cache to restore the user's channel subscription and temporary user status data, to ensure continuity of the session. Whether the client recovers from the ", _jsx(_components.code, {
          children: "DISCONNECTED"
        }), " state or the ", _jsx(_components.code, {
          children: "SUSPENDED"
        }), " state, continuity is automatically restored as long as the user does not actively call the ", _jsx(_components.code, {
          children: "logout"
        }), " method to log out. However, if the user initiates logout, the session cache is cleared, and the connection status returns to ", _jsx(_components.code, {
          children: "IDLE"
        }), ". Upon a subsequent login, the user needs to resubscribe to channels and reset their temporary user statuses."]
      }), _jsxs(_components.p, {
        children: ["In the event of a sudden network disconnection, you can inspect the names of the affected channels by examining the ", _jsx(_components.code, {
          children: "affectedChannels"
        }), " field returned by the ", _jsx(_components.code, {
          children: "onLinkStateEvent"
        }), " event. The following example shows sample information contained in the ", _jsx(_components.code, {
          children: "affectedChannels"
        }), " field :"]
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"affectedChannels"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " : ["
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "ChatRoom"'
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "VirtualSpace"'
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
      }), _jsx(_components.h2, {
        id: "handling-connection-errors-7",
        children: "Handling connection errors"
      }), _jsxs(_components.p, {
        children: ["The Signaling client automatically recovers from non-fatal error states, and notifies you of the transition details through an ", _jsx(_components.code, {
          children: "onLinkStateEvent"
        }), " callback. Handle these events according to your business needs to optimize the user experience."]
      }), _jsx(_components.h3, {
        id: "fatal-errors-7",
        children: "Fatal errors"
      }), _jsxs(_components.p, {
        children: ["Some errors are fatal. This means that the SDK is unable to recover automatically from these errors and thus enters the ", _jsx(_components.code, {
          children: "FAILED"
        }), " state. In this state, the SDK does not attempt automatic reconnection. In such cases, troubleshoot potential errors independently and actively trigger reconnection by explicitly calling the ", _jsx(_components.code, {
          children: "login"
        }), " or ", _jsx(_components.code, {
          children: "join"
        }), " method."]
      }), _jsx(_components.p, {
        children: "Following is a list of issues that may lead to fatal errors:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "An invalid or expired token."
        }), `
`, _jsx(_components.li, {
          children: "The user ID of the current user is banned."
        }), `
`, _jsx(_components.li, {
          children: "Signaling is not enabled for the current app ID or the app ID is invalid"
        }), `
`, _jsx(_components.li, {
          children: "Edge server resources are unavailable."
        }), `
`, _jsxs(_components.li, {
          children: ["The ", _jsx(_components.code, {
            children: "MESSAGE"
          }), " service is not deployed in the current environment."]
        }), `
`, _jsx(_components.li, {
          children: "Usage limit exceeded."
        }), `
`, _jsx(_components.li, {
          children: "A stream channel instance was not created."
        }), `
`, _jsx(_components.li, {
          children: "The channel name is illegal."
        }), `
`]
      }), _jsx(_components.h3, {
        id: "non-fatal-errors-7",
        children: "Non-fatal errors"
      }), _jsx(_components.p, {
        children: "Some errors are non-fatal; for example, a client experiences a brief network outage while passing through an underground tunnel. In such cases, the SDK attempts automatic reconnection. If reconnection is successful, the previously subscribed channels and temporary user status are restored automatically. However, if the user chooses to log out during this process, the client cache is cleared. This means that the cached channel subscriptions and temporary user statuses are removed. In such cases, users must re-login, resubscribe to channels, and reset temporary user statuses to resume the previous status."
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
