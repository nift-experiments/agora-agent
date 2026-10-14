import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Log in from multiple devices",
  description: "Log in to Agora Chat from multiple devices"
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;web&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;windows&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
    devices per platform up to 10 by going to **Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device**.

    In cases of multiple device login, all logged-in devices synchronize the following information and operations:

    * Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;
    * Friends and group-related operations;
    * Message-thread-related operations;
    * Conversation-related operations.

    The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`ConnectionListener#onLogout\` callback.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`ConnectionListener#onLogout\` callback. Agora Chat only supports forced logout for the devices on the same end.

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    | Single/multi-device login |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Forced logout strategy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | :-----------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
    |    Single-device login    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                The newly logged-in device will force the current device to log out. The logged-out device will receive the \`onDisconnected\` event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    |     Multi-device login    | If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the \`ConnectionParameters#isFixedDeviceId\` parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) \`true\`: Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - \`false\`: Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline. |

    The Agora server provides a RESTful interface to force a specified account to [log out from a single device](/en/api-reference/api-ref/im/user-system-registration#forcing-a-user-offline).

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`ConnectionEventHandler#onUserDidLoginTooManyDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`ConnectionEventHandler#onUserDidLoginTooManyDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`ChatConnectEventListener#onUserDidLoginFromOtherDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`ChatConnectEventListener#onUserDidLoginFromOtherDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    ## Understand the tech [#understand-the-tech]

    During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:

    * Get the login ID list of the other logged-in devices of the current user;

    * Get the list of online logged-in devices of the specified account;

    * Force the specified account to log out from a single device;

    * Force the specified account to log out from all devices;

    * Get friend or group operations on other devices.

    * Set the name of the login device;

    * Set the platform of the login device;

    * Get notified about multi-device synchronization.

    Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices.

    ## Prerequisites [#prerequisites]

    Before starting this procedure, initialize and connect the SDK to the server. See [SDK quickstart](../../get-started-sdk) for details.

    ## Implement multi-device login [#implement-multi-device-login]

    ### Get the login ID list of other logged-in devices of the current user [#get-the-login-id-list-of-other-logged-in-devices-of-the-current-user]

    Call \`getSelfIdsOnOtherPlatform\` to get the login ID list of other logged-in devices, and then select the target login ID as the message recipient to send a message to the specified device.

    \`\`\`java
    // A synchronous method that will block the current thread. The asynchronous method is asyncGetSelfIdsOnOtherPlatform(ValueCallBack).
    List ids = ChatClient.getInstance().contactManager().getSelfIdsOnOtherPlatform();
    // Select a login ID as the message recipient.
    String toChatUserId = ids.get(0);
    // Create a text message, content is the message text, toChatUserId passes in the login ID as the message recipient.
    ChatMessage message = ChatMessage.createTextSendMessage(content, toChatUserId);
    // Send a message.
    ChatClient.getInstance().chatManager().sendMessage(message);
    \`\`\`

    ### Get the list of online logged-in devices for the specified account [#get-the-list-of-online-logged-in-devices-for-the-specified-account]

    Call \`getLoggedInDevicesFromServerWithToken\` to get the list of online logged-in devices for the specified account from the server by passing in the user ID and user token.

    \`\`\`java
        try {
            List deviceInfos = ChatClient.getInstance().getLoggedInDevicesFromServerWithToken(userId, token);
        } catch (HyphenateException e) {
            e.printStackTrace();
        }
    \`\`\`

    ### Force the specified account to log out from a single device [#force-the-specified-account-to-log-out-from-a-single-device]

    Call \`kickDeviceWithToken\` and pass in the user ID and user token to force the specified account to log out from a single logged-in device. Before calling this method, obtain the device ID through the \`ChatClient#getLoggedInDevicesFromServerWithToken\` and \`DeviceInfo#getResource\` methods. The logged-out device will receive the \`ConnectionListener#onLogout\` event.

    <CalloutContainer type="info">
      <CalloutDescription>
        You can also use this interface without logging in.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`java
    // userId: User ID, token: User token. Need to be executed in an asynchronous thread.
    List deviceInfos = ChatClient.getInstance().getLoggedInDevicesFromServerWithToken(userId, token);
    // userId: User ID, token: User token, resource: Device ID. Need to be executed in an asynchronous thread.
    ChatClient.getInstance().kickDeviceWithToken(userId, token, deviceInfos.get(selectedIndex).getResource());
    \`\`\`

    ### Force the specified account to log out from all devices [#force-the-specified-account-to-log-out-from-all-devices]

    Call \`kickAllDevicesWithToken\` and pass in the user ID and user token to force the specified account to log out from all logged-in devices. The logged-out device will receive the \`ConnectionListener#onLogout\` event.

    <CalloutContainer type="info">
      <CalloutDescription>
        You can also use this interface without logging in.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`java
        try {
            ChatClient.getInstance().kickAllDevicesWithToken(userId,token);
        } catch (HyphenateException e) {
            e.printStackTrace();
        }
    \`\`\`

    ### Get operations on other devices [#get-operations-on-other-devices]

    Let's say that account A logs in on devices A and B at the same time and performs operations on device A. Device B will receive notifications corresponding to these operations.

    You need to implement the \`MultiDeviceListener\` class to listen to operations on other devices, and then call the \`addMultiDeviceListener\` method to add multi-device listening.

    \`\`\`java
    //Implement \`MultiDeviceListener\` to listen to operations on other devices.
    private class ChatMultiDeviceListener implements MultiDeviceListener {
    //@param event event.
        @Override
        //@param target friend's user ID; @param ext event extended information.
        public void onContactEvent(int event, String target, String ext) {
            EMLog.i(TAG, "onContactEvent event"+event);
            String message = null;
            switch (event) {
                //The current user deletes friends on other devices.
                case CONTACT_REMOVE:
                break;
                //The current user accepts friend requests on other devices.
                case CONTACT_ACCEPT:
                break;
                //The current user rejects friend requests on other devices.
                case CONTACT_DECLINE:
                break;
                //The current user adds a user to the blocklist on other devices.
                case CONTACT_BAN:
                break;
                //The current user removes a user from the blocklist on other devices.
                case CONTACT_ALLOW:
                break;
                default:
                break;
            }
        }

        @Override
        public void onGroupEvent(int event, String groupId, List userIds) {
            EMLog.i(TAG, "onGroupEvent event"+event);
            switch (event) {
                //The current user created a group on another device.
                case GROUP_CREATE:
                break;
                //The current user destroyed a group on another device.
                case GROUP_DESTROY:
                break;
                //The current user joined a group on another device.
                case GROUP_JOIN:
                break;
                //The current user left a group on another device.
                case GROUP_LEAVE:
                break;
                //The current user initiated a group application on another device.
                case GROUP_APPLY:
                break;
                //The current user approved the group application on another device.
                case GROUP_APPLY_ACCEPT:
                break;
                //The current user rejected the group application on another device.
                case GROUP_APPLY_DECLINE:
                break;
                //The current user invited group members on other devices.
                case GROUP_INVITE:
                break;
                //The current user accepted the invitation to join the group on other devices.
                case GROUP_INVITE_ACCEPT:
                break;
                //The current user rejected the invitation to join the group on other devices.
                case GROUP_INVITE_DECLINE:
                break;
                //The current user kicked members out of the group on other devices.
                case GROUP_KICK:
                break;
                //The current user added members to the group blocklist on other devices.
                case GROUP_BAN:
                break;
                //The current user removed members from the group blocklist on other devices.
                case GROUP_ALLOW:
                break;
                //The current user blocked the group on other devices.
                case GROUP_BLOCK:
                break;
                //The current user unblocked the group on other devices.
                case GROUP_UNBLOCK:
                break;
                //The current user transferred group ownership on other devices.
                case GROUP_ASSIGN_OWNER:
                break;
                //The current user adds an administrator on other devices.
                case GROUP_ADD_ADMIN:
                break;
                //The current user removes the administrator on other devices.
                case GROUP_REMOVE_ADMIN:
                break;
                //The current user mutes users on other devices.
                case GROUP_ADD_MUTE:
                break;
                //The current user removes the muting on other devices.
                case GROUP_REMOVE_MUTE:
                break;
                //The current user sets custom attributes for group members on other devices.
                case GROUP_METADATA_CHANGED:
                break;
                default:
                break;
            }
        }

        @Override
        public void onChatThreadEvent(int event, String target, List userIds) {
            EMLog.i(TAG, "onChatThreadEvent event"+event);
            switch (event) {
                case THREAD_CREATE:
                //The current user creates a message thread on other devices.
                break;
                case THREAD_DESTROY:
                //The current user destroys the message thread on other devices.
                break;
                case THREAD_JOIN:
                //The current user joins the message thread on other devices.
                break;
                case THREAD_LEAVE:
                //The current user leaves the message thread on other devices.
                break;
                case THREAD_UPDATE:
                //The current user updates the message thread on other devices.
                break;
                case THREAD_KICK:
                //The current user kicks a member out of the message thread on other devices.
                break;
                default:
                break;

            }
        }

        @Override
        public void onConversationEvent(int event, String conversationId, Conversation.ConversationType type) {
            EMLog.i(TAG, "onConversationEvent event"+event);
            switch (event) {
                case CONVERSATION_PINNED:
                //The current user pins a conversation on other devices.
                break;
                case CONVERSATION_UNPINNED:
                //The current user unpins a conversation on other devices.
                break;
                case CONVERSATION_DELETED:
                //The current user deletes a conversation on other devices.
                break;
                case CONVERSATION_MARK_UPDATE:
                //The current user updates the conversation tag on other devices, including adding and removing conversation tags.
                break;
                default:
                break;
            }
        }

        @Override
        public void onMessageRemoved(String conversationId, String deviceId) {
            EMLog.i(TAG, "onMessageRemoved conversationId "+conversationId);
            //The current user unidirectionally deletes message history of a conversation on other devices from the server.
        }
    }

    ChatMultiDeviceListener chatMultiDeviceListener = new ChatMultiDeviceListener();

    //Add a multi-device listener.
    ChatClient.getInstance().addMultiDeviceListener(chatMultiDeviceListener);

    //Remove a multi-device listener.
    ChatClient.getInstance().removeMultiDeviceListener(chatMultiDeviceListener);
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
    devices per platform up to 10 by going to **Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device**.

    In cases of multiple device login, all logged-in devices synchronize the following information and operations:

    * Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;
    * Friends and group-related operations;
    * Message-thread-related operations;
    * Conversation-related operations.

    The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    | Single/multi-device login |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Forced logout strategy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | :-----------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
    |    Single-device login    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                The newly logged-in device will force the current device to log out. The logged-out device will receive the \`onDisconnected\` event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    |     Multi-device login    | If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the \`ConnectionParameters#isFixedDeviceId\` parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) \`true\`: Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - \`false\`: Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline. |

    The Agora server provides a RESTful interface to force a specified account to [log out from a single device](/en/api-reference/api-ref/im/user-system-registration#forcing-a-user-offline).

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`ConnectionEventHandler#onUserDidLoginTooManyDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`ConnectionEventHandler#onUserDidLoginTooManyDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`ChatConnectEventListener#onUserDidLoginFromOtherDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`ChatConnectEventListener#onUserDidLoginFromOtherDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    ## Understand the tech [#understand-the-tech-1]

    During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:

    * Get the login ID list of the other logged-in devices of the current user;

    * Get the list of online logged-in devices of the specified account;

    * Force the specified account to log out from a single device;

    * Force the specified account to log out from all devices;

    * Get operations on other devices.

    * Set the name of the login device;

    * Set the platform of the login device;

    * Get notified about multi-device synchronization.

    Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices.

    ## Prerequisites [#prerequisites-1]

    Before starting this procedure, initialize and connect the SDK to the server. See [SDK quickstart](../../get-started-sdk) for details.

    ## Implement multi-device login [#implement-multi-device-login-1]

    ### Get the login ID list of other logged-in devices of the current user [#get-the-login-id-list-of-other-logged-in-devices-of-the-current-user-1]

    Call \`getSelfIdsOnOtherPlatform\` to get the login ID list of other logged-in devices, and then select the target login ID as the message recipient to send a message to the specified device.

    \`\`\`swift
    AgoraChatClient.shared().contactManager?.getSelfIdsOnOtherPlatform(completion: { ids, err in
            if err == nil,
                let userId = ids?.first {
                // Select a login ID as the message recipient. Create a text message, content is the message text, conversationId passes the login ID as the message recipient.
                let textMessage = AgoraChatMessage(conversationId: userId, body: .text(content: "hello"), ext: nil)
                AgoraChatClient.shared().chatManager?.send(textMessage, progress: nil, completion: { msg, e in

                })
            }
        })
    \`\`\`

    ### Get the list of online logged-in devices for the specified account [#get-the-list-of-online-logged-in-devices-for-the-specified-account-1]

    Call \`getLoggedInDevicesFromServerWithToken\` to get the list of online logged-in devices for the specified account from the server by passing in the user ID and user token.

    \`\`\`swift
        AgoraChatClient.shared().getLoggedInDevicesFromServer(withUserId: "userId", token: "token") { deviceConfigs, err in
            if err == nil {

            }
        }
    \`\`\`

    ### Force the specified account to log out from a single device [#force-the-specified-account-to-log-out-from-a-single-device-1]

    Call \`kickDeviceWithUserId\` and pass in the user ID and user token to force the specified account to log out from a single logged-in device. Before calling this method, obtain the device ID through the \`AgoraChatClient#getLoggedInDevicesFromServer\` and \`AgoraChatDeviceInfo#resource\` methods. The logged-out device will receive the \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` event.

    <CalloutContainer type="info">
      <CalloutDescription>
        You can also use this interface without logging in.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`swift
    AgoraChatClient.shared().getLoggedInDevicesFromServer(withUserId: "userId", token: "token") { deviceConfigs, err in
            if err == nil,
                let resource = deviceConfigs?.first?.resource {
                AgoraChatClient.shared().kickDevice(withUserId: "userId", token: "token", resource: resource) { e in

                }
            }
        }
    \`\`\`

    ### Force the specified account to log out from all devices [#force-the-specified-account-to-log-out-from-all-devices-1]

    Call \`kickAllDevicesWithUserId\` and pass in the user ID and user token to force the specified account to log out from all logged-in devices. The logged-out device will receive the \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` event.

    <CalloutContainer type="info">
      <CalloutDescription>
        You can also use this interface without logging in.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`swift
       AgoraChatClient.shared().kickAllDevices(withUserId: "userId", token: "token") { err in

            }
    \`\`\`

    ### Get operations on other devices [#get-operations-on-other-devices-1]

    Let's say that account A logs in on devices A and B at the same time and performs operations on device A. Device B will receive notifications corresponding to these operations.

    You need to implement the \`AgoraChatMultiDevicesDelegate\` class to listen to operations on other devices, and then call the \`addMultiDevicesDelegate\` method to add multi-device listening.

    \`\`\`swift
    extension AppDelegate: AgoraChatMultiDevicesDelegate {
        func multiDevicesContactEventDidReceive(_ aEvent: AgoraChatMultiDevicesEvent, username aUsername: String, ext aExt: String?) {
            switch aEvent {
                //The current user deletes friends on other devices.
            case .contactRemove:
                break
                //The current user accepts friend requests on other devices.
            case .contactAccept:
                break
                //The current user rejects friend requests on other devices.
            case .contactDecline:
                break
                //The current user adds a user to the blocklist on other devices.
            case .contactBan:
                break
                //The current user removes a user from the blocklist on other devices.
            case .contactAllow:
                break
            default:
                break
            }
        }

        func multiDevicesGroupEventDidReceive(_ aEvent: AgoraChatMultiDevicesEvent, groupId aGroupId: String, ext aExt: Any?) {
            switch aEvent {
                //The current user created a group on another device
            case .groupCreate:
                break
            //The current user destroyed a group on another device
            case .groupDestroy:
                break
            //The current user joined a group on another device
            case .groupJoin:
                break
            //The current user left a group on another device
            case .groupLeave:
                break
            //The current user initiated a group application on another device
            case .groupApply:
                break
            //The current user accepted a group application on another device
            case .groupApplyAccept:
                break
            //The current user rejected a group application on another device
            case .groupApplyDecline:
                break
            //The current user invited group members on another device
            case .groupInvite:
                break
            //The current user has accepted the invitation to join the group on other devices
            case .groupInviteAccept:
                break
            //The current user has rejected the invitation to join the group on other devices
            case .groupInviteDecline:
                break
            //The current user has kicked members out of the group on other devices
            case .groupKick:
                break
            //The current user has added members to the group blocklist on other devices
            case .groupBan:
                break
            //The current user has removed members from the group blocklist on other devices
            case .groupAllow:
                break
            //The current user has blocked the group on other devices
            case .groupBlock:
                break
            //The current user has unblocked the group on other devices
            case .groupUnBlock:
                break
            //The current user has transferred group ownership on other devices
            case .groupAssignOwner:
                break
            //The current user has added an administrator on other devices
            case .groupAddAdmin:
                break
            //The current user has removed an administrator on other devices
            case .groupRemoveAdmin:
                break
            //The current user has muted users on other devices
            case .groupAddMute:
                break
            //The current user removes the mute on other devices
            case .groupRemoveMute:
                break
            //The current user sets the group member custom attributes on other devices
            case .groupMemberAttributesChanged:
                break
            default:
                break
            }
        }

        func multiDevicesChatThreadEventDidReceive(_ aEvent: AgoraChatMultiDevicesEvent, threadId aThreadId: String, ext aExt: Any?) {
            switch aEvent {
            case .chatThreadCreate:
                //The current user creates a message thread on other devices.
                break
            case .chatThreadDestroy:
                //The current user destroys the message thread on other devices.
                break
            case .chatThreadJoin:
                //The current user joins the message thread on other devices.
                break
            case .chatThreadLeave:
                //The current user leaves the message thread on other devices.
                break
            case .chatThreadUpdate:
                //The current user updates the message thread on other devices.
                break
            case .chatThreadKick:
                //The current user kicks a member out of the message thread on other devices.
                break
            default:
                break
            }
        }

        func multiDevicesConversationEvent(_ event: AgoraChatMultiDevicesEvent, conversationId: String, conversationType: AgoraChatConversationType) {
            switch event {
            case .conversationPinned:
                //The current user pins a conversation on other devices.
                break
            case .conversationUnpinned:
                //The current user unpins a conversation on other devices.
                break
            case .conversationDelete:
                //The current user deletes a conversation on other devices.
                break
                //The current user updates the conversation mark on other devices, including adding and removing conversation marks.
            case .conversationUpdateMark:
            default:
                break
            }
        }

        func multiDevicesMessageBeRemoved(_ conversationId: String, deviceId: String) {
            //The current user unidirectionally deletes message history of a conversation on other devices from the server.
        }
    }

    //Add a multi-device listener.
    AgoraChatClient.shared().addMultiDevices(delegate: self, queue: nil)
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
    devices per platform up to 10 by going to **Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device**.

    In cases of multiple device login, all logged-in devices synchronize the following information and operations:

    * Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;
    * Friends and group-related operations;
    * Message-thread-related operations;
    * Conversation-related operations.

    The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    | Single/multi-device login |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Forced logout strategy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | :-----------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
    |    Single-device login    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                The newly logged-in device will force the current device to log out. The logged-out device will receive the \`onDisconnected\` event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    |     Multi-device login    | If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the \`ConnectionParameters#isFixedDeviceId\` parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) \`true\`: Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - \`false\`: Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline. |

    The Agora server provides a RESTful interface to force a specified account to [log out from a single device](/en/api-reference/api-ref/im/user-system-registration#forcing-a-user-offline).

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`ConnectionEventHandler#onUserDidLoginTooManyDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`ConnectionEventHandler#onUserDidLoginTooManyDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`ChatConnectEventListener#onUserDidLoginFromOtherDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`ChatConnectEventListener#onUserDidLoginFromOtherDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    ## Understand the tech [#understand-the-tech-2]

    During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:

    * Get the login ID list of the other logged-in devices of the current user;

    * Get the list of online logged-in devices of the specified account;

    * Force the specified account to log out from a single device;

    * Force the specified account to log out from all devices;

    * Get friend or group operations on other devices.

    * Set the name of the login device;

    * Set the platform of the login device;

    * Get notified about multi-device synchronization.

    Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices.

    ## Prerequisites [#prerequisites-2]

    Before starting this procedure, initialize and connect the SDK to the server. See [SDK quickstart](../../get-started-sdk) for details.

    ## Implement multi-device login [#implement-multi-device-login-2]

    ### Get the login ID list of other login devices of the current user [#get-the-login-id-list-of-other-login-devices-of-the-current-user]

    Call \`getSelfIdsOnOtherPlatform\` to get the login ID list of other logged-in devices, and then select the target login ID as the message recipient to send messages to the specified device.

    \`\`\`javascript
    chatClient.getSelfIdsOnOtherPlatform().then((res) => {
      console.log(
        res,
        "Successfully obtained the login ID list of other login devices of the current user"
      );
      // Select a login ID as the message recipient.
      const toUserId = res.data[0];
      // toUserId as the message recipient.
      const options = {
        type: "txt",
        msg: "message content",
        to: toUserId,
        chatType: "singleChat",
      };
      // Create a message.
      const msg = AgoraChat.message.create(options);
      // Send a message.
      chatClient.send(msg);
    });
    \`\`\`

    ### Get operations on other devices [#get-operations-on-other-devices-2]

    Call \`addEventHandler\` to register listener events and listen to operations on other devices. After the server synchronizes information, the SDK will call back these events, and both the web end and other ends will receive notifications of friend and group-related operations.

    For these operations, multi-device events have the same name as the single-device events. The only difference is the \`from\` field in the event: It is the current user ID in multi-end multi-device events, and the operator ID in single-device events. See [Listen for chat group events](/en/realtime-media/im/build/build-groups-rooms-and-threads/chat-group/manage-chat-groups#listen-for-chat-group-events) and [Listen for contact events](/en/realtime-media/im/build/build-core-messaging/contacts#listen-for-contact-events) for details.

    In addition to friend and group events, the following events will trigger the \`onMultiDeviceEvent\` event:

    \`\`\`javascript
    conn.addEventHandler("handlerId", {
      onContactAgreed: (event) => {},
      onGroupEvent: (event) => {},
      onMultiDeviceEvent: (event) => {
        switch (event.operation) {
          case "chatThreadCreate":
            //The current user creates a message thread on other devices.
            break;
          case "chatThreadDestroy":
            //The current user destroys the message thread on other devices.
            break;
          case "chatThreadJoin":
            //The current user joins the message thread on other devices.
            break;
          case "chatThreadLeave":
            //The current user leaves the message thread on other devices.
            break;
          case "chatThreadNameUpdate":
            //The current user updates the message thread on other devices.
            break;
          case "deleteRoaming":
            //The current user deletes the server conversation on other devices.
            break;
          case "memberAttributesUpdate":
            //The current user has updated the group member attributes on other devices.
            break;
          case "deleteRoaming":
            //The current user unidirectionally deletes message history of a conversation on other devices from the server.
            break;
          case "deleteConversation":
            //The current user has deleted a conversation on other devices.
            break;
          case "pinnedConversation":
            //The current user has pinned a conversation on other devices.
            break;
          case "unpinnedConversation":
            //The current user has unpinned a conversation on other devices.
            break;
          case "markConversation":
            //The current user has marked a conversation on other devices.
            break;
          case "unMarkConversation":
            //The current user has unmarked a conversation on other devices.
            break;
          default:
            break;
        }
      },
    });
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
    devices per platform up to 10 by going to **Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device**.

    In cases of multiple device login, all logged-in devices synchronize the following information and operations:

    * Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;
    * Friends and group-related operations;
    * Message-thread-related operations;
    * Conversation-related operations.

    The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    | Single/multi-device login |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Forced logout strategy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | :-----------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
    |    Single-device login    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                The newly logged-in device will force the current device to log out. The logged-out device will receive the \`onDisconnected\` event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    |     Multi-device login    | If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the \`ConnectionParameters#isFixedDeviceId\` parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) \`true\`: Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - \`false\`: Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline. |

    The Agora server provides a RESTful interface to force a specified account to [log out from a single device](/en/api-reference/api-ref/im/user-system-registration#forcing-a-user-offline).

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`ConnectionEventHandler#onUserDidLoginTooManyDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`ConnectionEventHandler#onUserDidLoginTooManyDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`ChatConnectEventListener#onUserDidLoginFromOtherDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`ChatConnectEventListener#onUserDidLoginFromOtherDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    ## Understand the tech [#understand-the-tech-3]

    During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:

    * Get the login ID list of the other logged-in devices of the current user;

    * Get the list of online logged-in devices of the specified account;

    * Force the specified account to log out from a single device;

    * Force the specified account to log out from all devices;

    * Get friend or group operations on other devices.

    * Set the name of the login device;

    * Set the platform of the login device;

    * Get notified about multi-device synchronization.

    Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices.

    ## Prerequisites [#prerequisites-3]

    Before starting this procedure, initialize and connect the SDK to the server. See [SDK quickstart](../../get-started-sdk) for details.

    ## Implement multi-device login [#implement-multi-device-login-3]

    ### Get the login ID list of other logged-in devices of the current user [#get-the-login-id-list-of-other-logged-in-devices-of-the-current-user-2]

    Call \`getSelfIdsOnOtherPlatform\` to get the login ID list of other logged-in devices, and then select the target login ID as the message recipient to send a message to the specified device.

    \`\`\`dart
    List ids =
        await ChatClient.getInstance.contactManager.getSelfIdsOnOtherPlatform();

    // Select a login ID as the message sender.
    String toChatUserId = ids.first;

    // Create a text message, content is the message text, toChatUserId passes in the login ID as the message sender.
    final msg = ChatMessage.createTxtSendMessage(
        targetId: toChatUserId, content: 'content');
    // Send a message.
    ChatClient.getInstance.chatManager.sendMessage(msg);
    \`\`\`

    ### Get the list of online logged-in devices for the specified account [#get-the-list-of-online-logged-in-devices-for-the-specified-account-2]

    Call \`fetchLoggedInDevices\` to get the list of online logged-in devices for the specified account from the server by passing in the user ID and user token.

    \`\`\`dart
    List deviceInfos =
            await ChatClient.getInstance.fetchLoggedInDevices(
        userId: 'userId',
        pwdOrToken: 'token',
        isPwd: false,
    );
    \`\`\`

    ### Force the specified account to log out from a single device [#force-the-specified-account-to-log-out-from-a-single-device-2]

    Call \`kickDevice\` and pass in the user ID and user token to force the specified account to log out from a single logged-in device. Before calling this method, obtain the device ID through the \`ChatClient#fetchLoggedInDevices\` and \`DeviceInfo#getResource\` methods.
    The logged-out device will receive the \`ConnectionEventHandler#onUserDidLoginTooManyDevice\` event.

    <CalloutContainer type="info">
      <CalloutDescription>
        You can also use this interface without logging in.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`dart
    // userId: user ID, pwdOrToken: user token.
    List deviceInfos =
            await ChatClient.getInstance.fetchLoggedInDevices(
        userId: 'userId',
        pwdOrToken: 'token',
        isPwd: false,
    );
    // userId: user ID, pwdOrToken: user token.
    await ChatClient.getInstance.kickDevice(
        userId: 'userId',
        pwdOrToken: 'token',
        resource: deviceInfos[selectedIndex].resource!,
        isPwd: false,
    );
    \`\`\`

    ### Force the specified account to log out from all devices [#force-the-specified-account-to-log-out-from-all-devices-2]

    Call \`kickAllDevices\` and pass in the user ID and user token to force the specified account to log out from all logged-in devices.

    The logged-out device will receive the \`ConnectionEventHandler#onUserDidLoginTooManyDevice\` event.

    <CalloutContainer type="info">
      <CalloutDescription>
        You can also use this interface without logging in.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`dart
    // userId: user ID, pwdOrToken: user token.
    await ChatClient.getInstance.kickAllDevices(
        userId: 'userId',
        pwdOrToken: 'pwdOrToken',
        isPwd: false,
    );
    \`\`\`

    ### Get operations on other devices [#get-operations-on-other-devices-3]

    Let's say that account A logs in on devices A and B at the same time and performs operations on device A. Device B will receive notifications corresponding to these operations.

    You need to implement the \`ChatMultiDeviceEventHandler\` class to listen to operations on other devices, and then call the \`addMultiDeviceEventHandler\` method to add multi-device listening.

    \`\`\`dart
    //Implement \`ChatMultiDeviceEventHandler\` to monitor operations on other devices.
    private class ChatMultiDeviceListener implements MultiDeviceListener {
    final eventHandler = ChatMultiDeviceEventHandler(
        onContactEvent: (event, userId, ext) {
            switch (event) {
                //The current user deletes friends on other devices.
                case ChatMultiDevicesEvent.CONTACT_REMOVE:
                break;
                //The current user accepts friend requests on other devices.
                case ChatMultiDevicesEvent.CONTACT_ACCEPT:
                break;
                //The current user rejects friend requests on other devices.
                case ChatMultiDevicesEvent.CONTACT_DECLINE:
                break;
                //The current user adds a user to the blocklist on other devices.
                case ChatMultiDevicesEvent.CONTACT_BAN:
                break;
                //The current user removes a user from the blocklist on other devices.
                case ChatMultiDevicesEvent.CONTACT_ALLOW:
                break;
                default:
            }
        },
        onGroupEvent: (event, groupId, userIds) {
            switch (event) {
                //The current user created a group on another device.
                case ChatMultiDevicesEvent.GROUP_CREATE:
                break;
                //The current user destroyed the group on another device.
                case ChatMultiDevicesEvent.GROUP_DESTROY:
                break;
                //The current user joined the group on another device.
                case ChatMultiDevicesEvent.GROUP_JOIN:
                break;
                //The current user left the group on another device.
                case ChatMultiDevicesEvent.GROUP_LEAVE:
                break;
                //The current user initiated a group application on another device.
                case ChatMultiDevicesEvent.GROUP_APPLY:
                break;
                //The current user agreed to the group application on another device.
                case ChatMultiDevicesEvent.GROUP_APPLY_ACCEPT:
                break;
                //The current user rejected the group application on another device.
                case ChatMultiDevicesEvent.GROUP_APPLY_DECLINE:
                break;
                //The current user invited group members on another device.
                case ChatMultiDevicesEvent.GROUP_INVITE:
                break;
                //The current user has accepted the invitation to join the group on other devices.
                case ChatMultiDevicesEvent.GROUP_INVITE_ACCEPT:
                break;
                //The current user has rejected the invitation to join the group on other devices.
                case ChatMultiDevicesEvent.GROUP_INVITE_DECLINE:
                break;
                //The current user has kicked members out of the group on other devices.
                case ChatMultiDevicesEvent.GROUP_KICK:
                break;
                //The current user has added members to the group blocklist on other devices.
                case ChatMultiDevicesEvent.GROUP_BAN:
                break;
                //The current user has removed members from the group blocklist on other devices.
                case ChatMultiDevicesEvent.GROUP_ALLOW:
                break;
                //The current user has blocked the group on other devices.
                case ChatMultiDevicesEvent.GROUP_BLOCK:
                break;
                //The current user has unblocked the group on other devices.
                case ChatMultiDevicesEvent.GROUP_UNBLOCK:
                break;
                //The current user transfers group ownership on other devices.
                case ChatMultiDevicesEvent.GROUP_ASSIGN_OWNER:
                break;
                //The current user adds an administrator on other devices.
                case ChatMultiDevicesEvent.GROUP_ADD_ADMIN:
                break;
                //The current user removes the administrator on other devices.
                case ChatMultiDevicesEvent.GROUP_REMOVE_ADMIN:
                break;
                //The current user mutes users on other devices.
                case ChatMultiDevicesEvent.GROUP_ADD_MUTE:
                break;
                //The current user removes the muting on other devices.
                case ChatMultiDevicesEvent.GROUP_REMOVE_MUTE:
                break;
                //The current user sets custom attributes for group members on other devices.
                case ChatMultiDevicesEvent.GROUP_MEMBER_ATTRIBUTES_CHANGED:
                break;
                default:
            }
        },
        onChatThreadEvent: (event, chatThreadId, userIds) {
            switch (event) {
                case ChatMultiDevicesEvent.CHAT_THREAD_CREATE:
                //The current user creates a message thread on other devices.
                break;
                case ChatMultiDevicesEvent.CHAT_THREAD_DESTROY:
                //The current user destroys the message thread on other devices.
                break;
                case ChatMultiDevicesEvent.CHAT_THREAD_JOIN:
                //The current user joins the message thread on other devices.
                break;
                case ChatMultiDevicesEvent.CHAT_THREAD_LEAVE:
                //The current user leaves the message thread on other devices.
                break;
                case ChatMultiDevicesEvent.CHAT_THREAD_UPDATE:
                //The current user updates the message thread on other devices.
                break;
                case ChatMultiDevicesEvent.CHAT_THREAD_KICK:
                //The current user kicks a member out of the message thread on other devices.
                break;
                default:
            }
        },
        onConversationEvent: (event, conversationId, type) {
            switch (event) {
                case ChatMultiDevicesEvent.CONVERSATION_PINNED:
                //The current user pins a conversation on other devices
                break;
                case ChatMultiDevicesEvent.CONVERSATION_UNPINNED:
                //The current user unpins a conversation on other devices
                break;
                case ChatMultiDevicesEvent.CONVERSATION_DELETE:
                //The current user deletes a conversation on other devices
                break;
                default:
            }
        },
        onRemoteMessagesRemoved: (conversationId, deviceId) {
            //The current user unidirectionally deletes message history of a conversation on other devices from the server.
        },
    );

    //Add a multi-device listener.
    ChatClient.getInstance.addMultiDeviceEventHandler(
        "UNIQUE_HANDLER_ID",
        eventHandler,
    );
    //Remove a multi-device listener.
    ChatClient.getInstance.removeMultiDeviceEventHandler('UNIQUE_HANDLER_ID');
    }
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
    devices per platform up to 10 by going to **Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device**.

    In cases of multiple device login, all logged-in devices synchronize the following information and operations:

    * Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;
    * Friends and group-related operations;
    * Message-thread-related operations;
    * Conversation-related operations.

    The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    | Single/multi-device login |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Forced logout strategy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | :-----------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
    |    Single-device login    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                The newly logged-in device will force the current device to log out. The logged-out device will receive the \`onDisconnected\` event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    |     Multi-device login    | If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the \`ConnectionParameters#isFixedDeviceId\` parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) \`true\`: Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - \`false\`: Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline. |

    The Agora server provides a RESTful interface to force a specified account to [log out from a single device](/en/api-reference/api-ref/im/user-system-registration#forcing-a-user-offline).

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`ConnectionEventHandler#onUserDidLoginTooManyDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`ConnectionEventHandler#onUserDidLoginTooManyDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`ChatConnectEventListener#onUserDidLoginFromOtherDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`ChatConnectEventListener#onUserDidLoginFromOtherDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    ## Understand the tech [#understand-the-tech-4]

    During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:

    * Get the login ID list of the other logged-in devices of the current user;

    * Get the list of online logged-in devices of the specified account;

    * Force the specified account to log out from a single device;

    * Force the specified account to log out from all devices;

    * Set the name of the login device;

    * Set the platform of the login device;

    * Get notified about multi-device synchronization.

    Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices.

    ## Prerequisites [#prerequisites-4]

    Before starting this procedure, initialize and connect the SDK to the server. See [SDK quickstart](../../get-started-sdk) for details.

    ## Implement multi-device login [#implement-multi-device-login-4]

    ### Get the login ID list of other logged-in devices of the current user [#get-the-login-id-list-of-other-logged-in-devices-of-the-current-user-3]

    Call \`getSelfIdsOnOtherPlatform\` to get the login ID list of other logged-in devices, and then select the target login ID as the message recipient to send a message to the specified device.

    \`\`\`typescript
    ChatClient.getInstance()
        .contactManager.getSelfIdsOnOtherPlatform()
        .then((ids) => {
            console.log("get ids success.", ids);
            // content: set text content
    // targetId: asynchronous result from \`getSelfIdsOnOtherPlatform\` method
    // chatType: conversation type
    const targetId = ids[0];
    const msg = ChatMessage.createTextMessage(targetId, content, chatType);
    // execute message sending
    ChatClient.getInstance()
        .chatManager.sendMessage(msg！, new ChatMessageCallback())
        .then(() => {
            // message sending action completed, log will be printed here.
            // message sending result is returned through callback
            console.log("send message operation success.");
        })
        .catch((reason) => {
            // If the message sending operation fails, the log will be printed here.
            console.log("send message operation fail.", reason);
        });
        })
        .catch((reason) => {
            console.log("get ids fail.", reason);
        });
    \`\`\`

    ### Get the list of online logged-in devices for the specified account [#get-the-list-of-online-logged-in-devices-for-the-specified-account-3]

    Call \`getLoggedInDevicesFromServer\` to get the list of online logged-in devices for the specified account from the server by passing in the user ID and user token.

    \`\`\`typescript
    // userId: user ID.
    // pwdOrToken: user token
    ChatClient.getInstance()
        .getLoggedInDevicesFromServer(userId, pwdOrToken, isPassword)
        .then((result) => {
            console.log("devices list:", result);
        })
        .catch((error) => {
            console.warn(error);
        });
    \`\`\`

    ### Force the specified account to log out from a single device [#force-the-specified-account-to-log-out-from-a-single-device-3]

    Call \`kickDevice\` and pass in the user ID and user token to force the specified account to log out from a single logged-in device. Before calling this method, obtain the device ID through the \`ChatClient#getLoggedInDevicesFromServer\` method. The logged-out device will receive the \`ChatConnectEventListener#onUserDidLoginFromOtherDevice\` event.

    <CalloutContainer type="info">
      <CalloutDescription>
        You can also use this interface without logging in.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`typescript
    // The device ID can be obtained through \`getLoggedInDevicesFromServer\`.
    const deviceInfo = await ChatClient.getInstance().getLoggedInDevicesFromServer(
        userId,
        pwdOrToken,
        isPassword
    );
    ChatClient.getInstance()
        .kickDevice(userId, pwdOrToken, deviceInfo.resource, isPassword)
        .then(() => {
            console.log("success");
        })
        .catch((error) => {
            console.warn(error);
        });
    \`\`\`

    ### Force the specified account to log out from all devices [#force-the-specified-account-to-log-out-from-all-devices-3]

    Call \`kickAllDevices\` and pass in the user ID and user token to force the specified account to log out from all logged-in devices. The logged-out device will receive the \`ChatConnectEventListener#onUserDidLoginFromOtherDevice\` event.

    <CalloutContainer type="info">
      <CalloutDescription>
        You can also use this interface without logging in.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`typescript
    ChatClient.getInstance()
        .kickAllDevices(userId, pwdOrToken, isPassword)
        .then(() => {
            console.log("success");
        })
        .catch((error) => {
            console.warn(error);
        });
    \`\`\`

    ### Get operations on other devices [#get-operations-on-other-devices-4]

    Let's say that account A logs in on devices A and B at the same time and performs operations on device A. Device B will receive notifications corresponding to these operations.

    You need to implement the \`ChatMultiDeviceEventListener\` class to listen to operations on other devices, and then set up multi-device listeners.

    \`\`\`typescript
    let listener: ChatMultiDeviceEventListener = new (class
        implements ChatMultiDeviceEventListener
    {
        onContactEvent?(
            event?: ChatMultiDeviceEvent,
            target?: string,
            ext?: string
        ): void {
            // Friend-related multi-device notification.
            switch (event) {
                // The current user deletes friends on other devices.
                case CONTACT_REMOVE:
                    break;
                // The current user accepts friend requests on other devices.
                case CONTACT_ACCEPT:
                    break;
                // The current user rejects friend requests on other devices.
                case CONTACT_DECLINE:
                    break;
                // The current user adds friends to the blocklist on other devices.
                case CONTACT_BAN:
                    break;
                // The current user removes friends from the blocklist on other devices.
                case CONTACT_ALLOW:
                    break;
            }
        }

        onGroupEvent?(
            event?: ChatMultiDeviceEvent,
            target?: string,
            usernames?: Array
        ): void {
            // Group-related multi-device notifications.
            switch (event) {
                //The current user created a group on another device.
                case GROUP_CREATE:
                    break;
                //The current user destroyed the group on another device.
                case GROUP_DESTROY:
                    break;
                //The current user joined the group on another device.
                case GROUP_JOIN:
                    break;
                //The current user left the group on another device.
                case GROUP_LEAVE:
                    break;
                //The current user initiated a group application on another device.
                case GROUP_APPLY:
                    break;
                //The current user agreed to the group application on another device.
                case GROUP_APPLY_ACCEPT:
                    break;
                //The current user rejected the group application on another device.
                case GROUP_APPLY_DECLINE:
                    break;
                //The current user invited group members on another device.
                case GROUP_INVITE:
                    break;
                //The current user agreed to the group invitation on another device.
                case GROUP_INVITE_ACCEPT:
                    break;
                //The current user rejected the invitation to join the group on other devices.
                case GROUP_INVITE_DECLINE:
                    break;
                //The current user kicked members out of the group on other devices.
                case GROUP_KICK:
                    break;
                //The current user added members to the group blocklist on other devices.
                case GROUP_BAN:
                    break;
                //The current user removed members from the group blocklist on other devices.
                case GROUP_ALLOW:
                    break;
                //The current user blocked the group on other devices.
                case GROUP_BLOCK:
                    break;
                //The current user unblocked the group on other devices.
                case GROUP_UNBLOCK:
                    break;
                //The current user transferred group ownership on other devices.
                case GROUP_ASSIGN_OWNER:
                    break;
                //The current user added an administrator on other devices.
                case GROUP_ADD_ADMIN:
                    break;
                //The current user removed the administrator on other devices.
                case GROUP_REMOVE_ADMIN:
                    break;
                //The current user mutes users on other devices.
                case GROUP_ADD_MUTE:
                    break;
                //The current user removes muting on other devices.
                case GROUP_REMOVE_MUTE:
                    break;
                //The current user sets custom attributes for group members on other devices.
                case GROUP_METADATA_CHANGED:
                    break;
                    default:
                    break;
                }
            }

        onThreadEvent?(
            event?: ChatMultiDeviceEvent,
            target?: string,
            usernames?: Array
        ): void {
            //Multi-device notification of message thread messages.
            switch (event) {
                case THREAD_CREATE:
                    //The current user creates a message thread on other devices.
                    break;
                case THREAD_DESTROY:
                    //The current user destroys a message thread on other devices.
                    break;
                case THREAD_JOIN:
                    //The current user joins a message thread on other devices.
                    break;
                case THREAD_LEAVE:
                    //The current user leaves the message thread on other devices.
                    break;
                case THREAD_UPDATE:
                    //The current user updates the message thread on other devices.
                    break;
                case THREAD_KICK:
                    //The current user kicks members out of the message thread on other devices.
                    break;
            }
        }

        onMessageRemoved?(convId?: string, deviceId?: string): void {
            //Roaming message deletion notification.
        }

        onConversationEvent?(
            event?: ChatMultiDeviceEvent,
            convId?: string,
            convType?: ChatConversationType
        ): void {
            //Conversation change notification.
            switch (event) {
                case CONVERSATION_PINNED:
                    //The current user pins a conversation on other devices.
                    break;
                case CONVERSATION_UNPINNED:
                    //The current user unpins a conversation on other devices.
                    break;
                case CONVERSATION_DELETED:
                    //The current user deletes a conversation on other devices.
                    break;
                    default:
                    break;
            }
        }
    })();

    //Remove a multi-device listener.
    ChatClient.getInstance().removeAllMultiDeviceListener();

    //Add a multi-device listener.
    ChatClient.getInstance().addMultiDeviceListener(listener);
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
    devices per platform up to 10 by going to **Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device**.

    In cases of multiple device login, all logged-in devices synchronize the following information and operations:

    * Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;
    * Friends and group-related operations;
    * Message-thread-related operations;
    * Conversation-related operations.

    The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    | Single/multi-device login |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Forced logout strategy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | :-----------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
    |    Single-device login    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                The newly logged-in device will force the current device to log out. The logged-out device will receive the \`onDisconnected\` event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    |     Multi-device login    | If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the \`ConnectionParameters#isFixedDeviceId\` parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) \`true\`: Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - \`false\`: Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline. |

    The Agora server provides a RESTful interface to force a specified account to [log out from a single device](/en/api-reference/api-ref/im/user-system-registration#forcing-a-user-offline).

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`ConnectionEventHandler#onUserDidLoginTooManyDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`ConnectionEventHandler#onUserDidLoginTooManyDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`ChatConnectEventListener#onUserDidLoginFromOtherDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`ChatConnectEventListener#onUserDidLoginFromOtherDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    ## Understand the tech [#understand-the-tech-5]

    During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:

    * Get the login ID list of the other logged-in devices of the current user;

    * Get the list of online logged-in devices of the specified account;

    * Force the specified account to log out from a single device;

    * Force the specified account to log out from all devices;

    * Get operations on other devices.

    * Set the name of the login device;

    * Set the platform of the login device;

    * Get notified about multi-device synchronization.

    Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices.

    ## Prerequisites [#prerequisites-5]

    Before starting this procedure, initialize and connect the SDK to the server. See [SDK quickstart](../../get-started-sdk) for details.

    ## Implement multi-device login [#implement-multi-device-login-5]

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
    devices per platform up to 10 by going to **Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device**.

    In cases of multiple device login, all logged-in devices synchronize the following information and operations:

    * Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;
    * Friends and group-related operations;
    * Message-thread-related operations;
    * Conversation-related operations.

    The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    | Single/multi-device login |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Forced logout strategy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | :-----------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
    |    Single-device login    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                The newly logged-in device will force the current device to log out. The logged-out device will receive the \`onDisconnected\` event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    |     Multi-device login    | If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the \`ConnectionParameters#isFixedDeviceId\` parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) \`true\`: Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - \`false\`: Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline. |

    The Agora server provides a RESTful interface to force a specified account to [log out from a single device](/en/api-reference/api-ref/im/user-system-registration#forcing-a-user-offline).

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`ConnectionEventHandler#onUserDidLoginTooManyDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`ConnectionEventHandler#onUserDidLoginTooManyDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    Single/multi-device login
    Forced logout strategy
    Automatic login security check

    Single-device login
    The newly logged-in device will force the current device to log out. The logged-out device will receive the \`ChatConnectEventListener#onUserDidLoginFromOtherDevice\` event.
    For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact [support@agora.io](mailto\\:support@agora.io). In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit.

    Multi-device login
    If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the \`ChatConnectEventListener#onUserDidLoginFromOtherDevice\` event. Agora Chat only supports forced logout for the devices on the same end.

    ## Understand the tech [#understand-the-tech-6]

    During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:

    * Get the login ID list of the other logged-in devices of the current user;

    * Get the list of online logged-in devices of the specified account;

    * Force the specified account to log out from a single device;

    * Force the specified account to log out from all devices;

    * Get operations on other devices.

    * Set the name of the login device;

    * Set the platform of the login device;

    * Get notified about multi-device synchronization.

    Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices.

    ## Prerequisites [#prerequisites-6]

    Before starting this procedure, initialize and connect the SDK to the server. See [SDK quickstart](../../get-started-sdk) for details.

    ## Implement multi-device login [#implement-multi-device-login-6]

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: `Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
devices per platform up to 10 by going to **Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device**.`
  }, {
    heading: undefined,
    content: "In cases of multiple device login, all logged-in devices synchronize the following information and operations:"
  }, {
    heading: undefined,
    content: "Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;"
  }, {
    heading: undefined,
    content: "Friends and group-related operations;"
  }, {
    heading: undefined,
    content: "Message-thread-related operations;"
  }, {
    heading: undefined,
    content: "Conversation-related operations."
  }, {
    heading: undefined,
    content: "The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:"
  }, {
    heading: undefined,
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: undefined,
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `ConnectionListener#onLogout` callback.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: undefined,
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `ConnectionListener#onLogout` callback. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: undefined,
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: undefined,
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: undefined,
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: undefined,
    content: "Single/multi-device login"
  }, {
    heading: undefined,
    content: "Forced logout strategy"
  }, {
    heading: undefined,
    content: "Single-device login"
  }, {
    heading: undefined,
    content: "The newly logged-in device will force the current device to log out. The logged-out device will receive the `onDisconnected` event."
  }, {
    heading: undefined,
    content: "Multi-device login"
  }, {
    heading: undefined,
    content: "If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the `ConnectionParameters#isFixedDeviceId` parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) `true`: Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - `false`: Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline."
  }, {
    heading: undefined,
    content: "The Agora server provides a RESTful interface to force a specified account to log out from a single device."
  }, {
    heading: undefined,
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: undefined,
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `ConnectionEventHandler#onUserDidLoginTooManyDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: undefined,
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `ConnectionEventHandler#onUserDidLoginTooManyDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: undefined,
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: undefined,
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `ChatConnectEventListener#onUserDidLoginFromOtherDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: undefined,
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `ChatConnectEventListener#onUserDidLoginFromOtherDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "understand-the-tech",
    content: "During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:"
  }, {
    heading: "understand-the-tech",
    content: "Get the login ID list of the other logged-in devices of the current user;"
  }, {
    heading: "understand-the-tech",
    content: "Get the list of online logged-in devices of the specified account;"
  }, {
    heading: "understand-the-tech",
    content: "Force the specified account to log out from a single device;"
  }, {
    heading: "understand-the-tech",
    content: "Force the specified account to log out from all devices;"
  }, {
    heading: "understand-the-tech",
    content: "Get friend or group operations on other devices."
  }, {
    heading: "understand-the-tech",
    content: "Set the name of the login device;"
  }, {
    heading: "understand-the-tech",
    content: "Set the platform of the login device;"
  }, {
    heading: "understand-the-tech",
    content: "Get notified about multi-device synchronization."
  }, {
    heading: "understand-the-tech",
    content: "Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices."
  }, {
    heading: "prerequisites",
    content: "Before starting this procedure, initialize and connect the SDK to the server. See SDK quickstart for details."
  }, {
    heading: "get-the-login-id-list-of-other-logged-in-devices-of-the-current-user",
    content: "Call `getSelfIdsOnOtherPlatform` to get the login ID list of other logged-in devices, and then select the target login ID as the message recipient to send a message to the specified device."
  }, {
    heading: "get-the-list-of-online-logged-in-devices-for-the-specified-account",
    content: "Call `getLoggedInDevicesFromServerWithToken` to get the list of online logged-in devices for the specified account from the server by passing in the user ID and user token."
  }, {
    heading: "force-the-specified-account-to-log-out-from-a-single-device",
    content: "Call `kickDeviceWithToken` and pass in the user ID and user token to force the specified account to log out from a single logged-in device. Before calling this method, obtain the device ID through the `ChatClient#getLoggedInDevicesFromServerWithToken` and `DeviceInfo#getResource` methods. The logged-out device will receive the `ConnectionListener#onLogout` event."
  }, {
    heading: "force-the-specified-account-to-log-out-from-a-single-device",
    content: "You can also use this interface without logging in."
  }, {
    heading: "force-the-specified-account-to-log-out-from-all-devices",
    content: "Call `kickAllDevicesWithToken` and pass in the user ID and user token to force the specified account to log out from all logged-in devices. The logged-out device will receive the `ConnectionListener#onLogout` event."
  }, {
    heading: "force-the-specified-account-to-log-out-from-all-devices",
    content: "You can also use this interface without logging in."
  }, {
    heading: "get-operations-on-other-devices",
    content: "Let's say that account A logs in on devices A and B at the same time and performs operations on device A. Device B will receive notifications corresponding to these operations."
  }, {
    heading: "get-operations-on-other-devices",
    content: "You need to implement the `MultiDeviceListener` class to listen to operations on other devices, and then call the `addMultiDeviceListener` method to add multi-device listening."
  }, {
    heading: "get-operations-on-other-devices",
    content: `Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
devices per platform up to 10 by going to **Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device**.`
  }, {
    heading: "get-operations-on-other-devices",
    content: "In cases of multiple device login, all logged-in devices synchronize the following information and operations:"
  }, {
    heading: "get-operations-on-other-devices",
    content: "Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;"
  }, {
    heading: "get-operations-on-other-devices",
    content: "Friends and group-related operations;"
  }, {
    heading: "get-operations-on-other-devices",
    content: "Message-thread-related operations;"
  }, {
    heading: "get-operations-on-other-devices",
    content: "Conversation-related operations."
  }, {
    heading: "get-operations-on-other-devices",
    content: "The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:"
  }, {
    heading: "get-operations-on-other-devices",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "get-operations-on-other-devices",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "get-operations-on-other-devices",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "get-operations-on-other-devices",
    content: "Single/multi-device login"
  }, {
    heading: "get-operations-on-other-devices",
    content: "Forced logout strategy"
  }, {
    heading: "get-operations-on-other-devices",
    content: "Single-device login"
  }, {
    heading: "get-operations-on-other-devices",
    content: "The newly logged-in device will force the current device to log out. The logged-out device will receive the `onDisconnected` event."
  }, {
    heading: "get-operations-on-other-devices",
    content: "Multi-device login"
  }, {
    heading: "get-operations-on-other-devices",
    content: "If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the `ConnectionParameters#isFixedDeviceId` parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) `true`: Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - `false`: Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline."
  }, {
    heading: "get-operations-on-other-devices",
    content: "The Agora server provides a RESTful interface to force a specified account to log out from a single device."
  }, {
    heading: "get-operations-on-other-devices",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "get-operations-on-other-devices",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `ConnectionEventHandler#onUserDidLoginTooManyDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "get-operations-on-other-devices",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `ConnectionEventHandler#onUserDidLoginTooManyDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "get-operations-on-other-devices",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "get-operations-on-other-devices",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `ChatConnectEventListener#onUserDidLoginFromOtherDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "get-operations-on-other-devices",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `ChatConnectEventListener#onUserDidLoginFromOtherDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "understand-the-tech-1",
    content: "During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:"
  }, {
    heading: "understand-the-tech-1",
    content: "Get the login ID list of the other logged-in devices of the current user;"
  }, {
    heading: "understand-the-tech-1",
    content: "Get the list of online logged-in devices of the specified account;"
  }, {
    heading: "understand-the-tech-1",
    content: "Force the specified account to log out from a single device;"
  }, {
    heading: "understand-the-tech-1",
    content: "Force the specified account to log out from all devices;"
  }, {
    heading: "understand-the-tech-1",
    content: "Get operations on other devices."
  }, {
    heading: "understand-the-tech-1",
    content: "Set the name of the login device;"
  }, {
    heading: "understand-the-tech-1",
    content: "Set the platform of the login device;"
  }, {
    heading: "understand-the-tech-1",
    content: "Get notified about multi-device synchronization."
  }, {
    heading: "understand-the-tech-1",
    content: "Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices."
  }, {
    heading: "prerequisites-1",
    content: "Before starting this procedure, initialize and connect the SDK to the server. See SDK quickstart for details."
  }, {
    heading: "get-the-login-id-list-of-other-logged-in-devices-of-the-current-user-1",
    content: "Call `getSelfIdsOnOtherPlatform` to get the login ID list of other logged-in devices, and then select the target login ID as the message recipient to send a message to the specified device."
  }, {
    heading: "get-the-list-of-online-logged-in-devices-for-the-specified-account-1",
    content: "Call `getLoggedInDevicesFromServerWithToken` to get the list of online logged-in devices for the specified account from the server by passing in the user ID and user token."
  }, {
    heading: "force-the-specified-account-to-log-out-from-a-single-device-1",
    content: "Call `kickDeviceWithUserId` and pass in the user ID and user token to force the specified account to log out from a single logged-in device. Before calling this method, obtain the device ID through the `AgoraChatClient#getLoggedInDevicesFromServer` and `AgoraChatDeviceInfo#resource` methods. The logged-out device will receive the `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` event."
  }, {
    heading: "force-the-specified-account-to-log-out-from-a-single-device-1",
    content: "You can also use this interface without logging in."
  }, {
    heading: "force-the-specified-account-to-log-out-from-all-devices-1",
    content: "Call `kickAllDevicesWithUserId` and pass in the user ID and user token to force the specified account to log out from all logged-in devices. The logged-out device will receive the `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` event."
  }, {
    heading: "force-the-specified-account-to-log-out-from-all-devices-1",
    content: "You can also use this interface without logging in."
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "Let's say that account A logs in on devices A and B at the same time and performs operations on device A. Device B will receive notifications corresponding to these operations."
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "You need to implement the `AgoraChatMultiDevicesDelegate` class to listen to operations on other devices, and then call the `addMultiDevicesDelegate` method to add multi-device listening."
  }, {
    heading: "get-operations-on-other-devices-1",
    content: `Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
devices per platform up to 10 by going to **Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device**.`
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "In cases of multiple device login, all logged-in devices synchronize the following information and operations:"
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;"
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "Friends and group-related operations;"
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "Message-thread-related operations;"
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "Conversation-related operations."
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:"
  }, {
    heading: "get-operations-on-other-devices-1",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "Single/multi-device login"
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "Forced logout strategy"
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "Single-device login"
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "The newly logged-in device will force the current device to log out. The logged-out device will receive the `onDisconnected` event."
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "Multi-device login"
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the `ConnectionParameters#isFixedDeviceId` parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) `true`: Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - `false`: Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline."
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "The Agora server provides a RESTful interface to force a specified account to log out from a single device."
  }, {
    heading: "get-operations-on-other-devices-1",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `ConnectionEventHandler#onUserDidLoginTooManyDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `ConnectionEventHandler#onUserDidLoginTooManyDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "get-operations-on-other-devices-1",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `ChatConnectEventListener#onUserDidLoginFromOtherDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "get-operations-on-other-devices-1",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `ChatConnectEventListener#onUserDidLoginFromOtherDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "understand-the-tech-2",
    content: "During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:"
  }, {
    heading: "understand-the-tech-2",
    content: "Get the login ID list of the other logged-in devices of the current user;"
  }, {
    heading: "understand-the-tech-2",
    content: "Get the list of online logged-in devices of the specified account;"
  }, {
    heading: "understand-the-tech-2",
    content: "Force the specified account to log out from a single device;"
  }, {
    heading: "understand-the-tech-2",
    content: "Force the specified account to log out from all devices;"
  }, {
    heading: "understand-the-tech-2",
    content: "Get friend or group operations on other devices."
  }, {
    heading: "understand-the-tech-2",
    content: "Set the name of the login device;"
  }, {
    heading: "understand-the-tech-2",
    content: "Set the platform of the login device;"
  }, {
    heading: "understand-the-tech-2",
    content: "Get notified about multi-device synchronization."
  }, {
    heading: "understand-the-tech-2",
    content: "Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices."
  }, {
    heading: "prerequisites-2",
    content: "Before starting this procedure, initialize and connect the SDK to the server. See SDK quickstart for details."
  }, {
    heading: "get-the-login-id-list-of-other-login-devices-of-the-current-user",
    content: "Call `getSelfIdsOnOtherPlatform` to get the login ID list of other logged-in devices, and then select the target login ID as the message recipient to send messages to the specified device."
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "Call `addEventHandler` to register listener events and listen to operations on other devices. After the server synchronizes information, the SDK will call back these events, and both the web end and other ends will receive notifications of friend and group-related operations."
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "For these operations, multi-device events have the same name as the single-device events. The only difference is the `from` field in the event: It is the current user ID in multi-end multi-device events, and the operator ID in single-device events. See Listen for chat group events and Listen for contact events for details."
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "In addition to friend and group events, the following events will trigger the `onMultiDeviceEvent` event:"
  }, {
    heading: "get-operations-on-other-devices-2",
    content: `Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
devices per platform up to 10 by going to **Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device**.`
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "In cases of multiple device login, all logged-in devices synchronize the following information and operations:"
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;"
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "Friends and group-related operations;"
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "Message-thread-related operations;"
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "Conversation-related operations."
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:"
  }, {
    heading: "get-operations-on-other-devices-2",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "Single/multi-device login"
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "Forced logout strategy"
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "Single-device login"
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "The newly logged-in device will force the current device to log out. The logged-out device will receive the `onDisconnected` event."
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "Multi-device login"
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the `ConnectionParameters#isFixedDeviceId` parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) `true`: Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - `false`: Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline."
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "The Agora server provides a RESTful interface to force a specified account to log out from a single device."
  }, {
    heading: "get-operations-on-other-devices-2",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `ConnectionEventHandler#onUserDidLoginTooManyDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `ConnectionEventHandler#onUserDidLoginTooManyDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "get-operations-on-other-devices-2",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `ChatConnectEventListener#onUserDidLoginFromOtherDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "get-operations-on-other-devices-2",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `ChatConnectEventListener#onUserDidLoginFromOtherDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "understand-the-tech-3",
    content: "During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:"
  }, {
    heading: "understand-the-tech-3",
    content: "Get the login ID list of the other logged-in devices of the current user;"
  }, {
    heading: "understand-the-tech-3",
    content: "Get the list of online logged-in devices of the specified account;"
  }, {
    heading: "understand-the-tech-3",
    content: "Force the specified account to log out from a single device;"
  }, {
    heading: "understand-the-tech-3",
    content: "Force the specified account to log out from all devices;"
  }, {
    heading: "understand-the-tech-3",
    content: "Get friend or group operations on other devices."
  }, {
    heading: "understand-the-tech-3",
    content: "Set the name of the login device;"
  }, {
    heading: "understand-the-tech-3",
    content: "Set the platform of the login device;"
  }, {
    heading: "understand-the-tech-3",
    content: "Get notified about multi-device synchronization."
  }, {
    heading: "understand-the-tech-3",
    content: "Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices."
  }, {
    heading: "prerequisites-3",
    content: "Before starting this procedure, initialize and connect the SDK to the server. See SDK quickstart for details."
  }, {
    heading: "get-the-login-id-list-of-other-logged-in-devices-of-the-current-user-2",
    content: "Call `getSelfIdsOnOtherPlatform` to get the login ID list of other logged-in devices, and then select the target login ID as the message recipient to send a message to the specified device."
  }, {
    heading: "get-the-list-of-online-logged-in-devices-for-the-specified-account-2",
    content: "Call `fetchLoggedInDevices` to get the list of online logged-in devices for the specified account from the server by passing in the user ID and user token."
  }, {
    heading: "force-the-specified-account-to-log-out-from-a-single-device-2",
    content: "Call `kickDevice` and pass in the user ID and user token to force the specified account to log out from a single logged-in device. Before calling this method, obtain the device ID through the `ChatClient#fetchLoggedInDevices` and `DeviceInfo#getResource` methods.\nThe logged-out device will receive the `ConnectionEventHandler#onUserDidLoginTooManyDevice` event."
  }, {
    heading: "force-the-specified-account-to-log-out-from-a-single-device-2",
    content: "You can also use this interface without logging in."
  }, {
    heading: "force-the-specified-account-to-log-out-from-all-devices-2",
    content: "Call `kickAllDevices` and pass in the user ID and user token to force the specified account to log out from all logged-in devices."
  }, {
    heading: "force-the-specified-account-to-log-out-from-all-devices-2",
    content: "The logged-out device will receive the `ConnectionEventHandler#onUserDidLoginTooManyDevice` event."
  }, {
    heading: "force-the-specified-account-to-log-out-from-all-devices-2",
    content: "You can also use this interface without logging in."
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "Let's say that account A logs in on devices A and B at the same time and performs operations on device A. Device B will receive notifications corresponding to these operations."
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "You need to implement the `ChatMultiDeviceEventHandler` class to listen to operations on other devices, and then call the `addMultiDeviceEventHandler` method to add multi-device listening."
  }, {
    heading: "get-operations-on-other-devices-3",
    content: `Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
devices per platform up to 10 by going to **Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device**.`
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "In cases of multiple device login, all logged-in devices synchronize the following information and operations:"
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;"
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "Friends and group-related operations;"
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "Message-thread-related operations;"
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "Conversation-related operations."
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:"
  }, {
    heading: "get-operations-on-other-devices-3",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "Single/multi-device login"
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "Forced logout strategy"
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "Single-device login"
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "The newly logged-in device will force the current device to log out. The logged-out device will receive the `onDisconnected` event."
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "Multi-device login"
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the `ConnectionParameters#isFixedDeviceId` parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) `true`: Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - `false`: Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline."
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "The Agora server provides a RESTful interface to force a specified account to log out from a single device."
  }, {
    heading: "get-operations-on-other-devices-3",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `ConnectionEventHandler#onUserDidLoginTooManyDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `ConnectionEventHandler#onUserDidLoginTooManyDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "get-operations-on-other-devices-3",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `ChatConnectEventListener#onUserDidLoginFromOtherDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "get-operations-on-other-devices-3",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `ChatConnectEventListener#onUserDidLoginFromOtherDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "understand-the-tech-4",
    content: "During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:"
  }, {
    heading: "understand-the-tech-4",
    content: "Get the login ID list of the other logged-in devices of the current user;"
  }, {
    heading: "understand-the-tech-4",
    content: "Get the list of online logged-in devices of the specified account;"
  }, {
    heading: "understand-the-tech-4",
    content: "Force the specified account to log out from a single device;"
  }, {
    heading: "understand-the-tech-4",
    content: "Force the specified account to log out from all devices;"
  }, {
    heading: "understand-the-tech-4",
    content: "Set the name of the login device;"
  }, {
    heading: "understand-the-tech-4",
    content: "Set the platform of the login device;"
  }, {
    heading: "understand-the-tech-4",
    content: "Get notified about multi-device synchronization."
  }, {
    heading: "understand-the-tech-4",
    content: "Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices."
  }, {
    heading: "prerequisites-4",
    content: "Before starting this procedure, initialize and connect the SDK to the server. See SDK quickstart for details."
  }, {
    heading: "get-the-login-id-list-of-other-logged-in-devices-of-the-current-user-3",
    content: "Call `getSelfIdsOnOtherPlatform` to get the login ID list of other logged-in devices, and then select the target login ID as the message recipient to send a message to the specified device."
  }, {
    heading: "get-the-list-of-online-logged-in-devices-for-the-specified-account-3",
    content: "Call `getLoggedInDevicesFromServer` to get the list of online logged-in devices for the specified account from the server by passing in the user ID and user token."
  }, {
    heading: "force-the-specified-account-to-log-out-from-a-single-device-3",
    content: "Call `kickDevice` and pass in the user ID and user token to force the specified account to log out from a single logged-in device. Before calling this method, obtain the device ID through the `ChatClient#getLoggedInDevicesFromServer` method. The logged-out device will receive the `ChatConnectEventListener#onUserDidLoginFromOtherDevice` event."
  }, {
    heading: "force-the-specified-account-to-log-out-from-a-single-device-3",
    content: "You can also use this interface without logging in."
  }, {
    heading: "force-the-specified-account-to-log-out-from-all-devices-3",
    content: "Call `kickAllDevices` and pass in the user ID and user token to force the specified account to log out from all logged-in devices. The logged-out device will receive the `ChatConnectEventListener#onUserDidLoginFromOtherDevice` event."
  }, {
    heading: "force-the-specified-account-to-log-out-from-all-devices-3",
    content: "You can also use this interface without logging in."
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "Let's say that account A logs in on devices A and B at the same time and performs operations on device A. Device B will receive notifications corresponding to these operations."
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "You need to implement the `ChatMultiDeviceEventListener` class to listen to operations on other devices, and then set up multi-device listeners."
  }, {
    heading: "get-operations-on-other-devices-4",
    content: `Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
devices per platform up to 10 by going to **Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device**.`
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "In cases of multiple device login, all logged-in devices synchronize the following information and operations:"
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;"
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "Friends and group-related operations;"
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "Message-thread-related operations;"
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "Conversation-related operations."
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:"
  }, {
    heading: "get-operations-on-other-devices-4",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "Single/multi-device login"
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "Forced logout strategy"
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "Single-device login"
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "The newly logged-in device will force the current device to log out. The logged-out device will receive the `onDisconnected` event."
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "Multi-device login"
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the `ConnectionParameters#isFixedDeviceId` parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) `true`: Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - `false`: Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline."
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "The Agora server provides a RESTful interface to force a specified account to log out from a single device."
  }, {
    heading: "get-operations-on-other-devices-4",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `ConnectionEventHandler#onUserDidLoginTooManyDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `ConnectionEventHandler#onUserDidLoginTooManyDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "get-operations-on-other-devices-4",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `ChatConnectEventListener#onUserDidLoginFromOtherDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "get-operations-on-other-devices-4",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `ChatConnectEventListener#onUserDidLoginFromOtherDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "understand-the-tech-5",
    content: "During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:"
  }, {
    heading: "understand-the-tech-5",
    content: "Get the login ID list of the other logged-in devices of the current user;"
  }, {
    heading: "understand-the-tech-5",
    content: "Get the list of online logged-in devices of the specified account;"
  }, {
    heading: "understand-the-tech-5",
    content: "Force the specified account to log out from a single device;"
  }, {
    heading: "understand-the-tech-5",
    content: "Force the specified account to log out from all devices;"
  }, {
    heading: "understand-the-tech-5",
    content: "Get operations on other devices."
  }, {
    heading: "understand-the-tech-5",
    content: "Set the name of the login device;"
  }, {
    heading: "understand-the-tech-5",
    content: "Set the platform of the login device;"
  }, {
    heading: "understand-the-tech-5",
    content: "Get notified about multi-device synchronization."
  }, {
    heading: "understand-the-tech-5",
    content: "Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices."
  }, {
    heading: "prerequisites-5",
    content: "Before starting this procedure, initialize and connect the SDK to the server. See SDK quickstart for details."
  }, {
    heading: "implement-multi-device-login-5",
    content: `Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
devices per platform up to 10 by going to **Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device**.`
  }, {
    heading: "implement-multi-device-login-5",
    content: "In cases of multiple device login, all logged-in devices synchronize the following information and operations:"
  }, {
    heading: "implement-multi-device-login-5",
    content: "Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;"
  }, {
    heading: "implement-multi-device-login-5",
    content: "Friends and group-related operations;"
  }, {
    heading: "implement-multi-device-login-5",
    content: "Message-thread-related operations;"
  }, {
    heading: "implement-multi-device-login-5",
    content: "Conversation-related operations."
  }, {
    heading: "implement-multi-device-login-5",
    content: "The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:"
  }, {
    heading: "implement-multi-device-login-5",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "implement-multi-device-login-5",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "implement-multi-device-login-5",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "implement-multi-device-login-5",
    content: "Single/multi-device login"
  }, {
    heading: "implement-multi-device-login-5",
    content: "Forced logout strategy"
  }, {
    heading: "implement-multi-device-login-5",
    content: "Single-device login"
  }, {
    heading: "implement-multi-device-login-5",
    content: "The newly logged-in device will force the current device to log out. The logged-out device will receive the `onDisconnected` event."
  }, {
    heading: "implement-multi-device-login-5",
    content: "Multi-device login"
  }, {
    heading: "implement-multi-device-login-5",
    content: "If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the `ConnectionParameters#isFixedDeviceId` parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) `true`: Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - `false`: Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline."
  }, {
    heading: "implement-multi-device-login-5",
    content: "The Agora server provides a RESTful interface to force a specified account to log out from a single device."
  }, {
    heading: "implement-multi-device-login-5",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "implement-multi-device-login-5",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `ConnectionEventHandler#onUserDidLoginTooManyDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "implement-multi-device-login-5",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `ConnectionEventHandler#onUserDidLoginTooManyDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "implement-multi-device-login-5",
    content: `Single/multi-device login
Forced logout strategy
Automatic login security check`
  }, {
    heading: "implement-multi-device-login-5",
    content: "Single-device login\nThe newly logged-in device will force the current device to log out. The logged-out device will receive the `ChatConnectEventListener#onUserDidLoginFromOtherDevice` event.\nFor devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact support\\@agora.io. In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."
  }, {
    heading: "implement-multi-device-login-5",
    content: "Multi-device login\nIf the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `ChatConnectEventListener#onUserDidLoginFromOtherDevice` event. Agora Chat only supports forced logout for the devices on the same end."
  }, {
    heading: "understand-the-tech-6",
    content: "During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:"
  }, {
    heading: "understand-the-tech-6",
    content: "Get the login ID list of the other logged-in devices of the current user;"
  }, {
    heading: "understand-the-tech-6",
    content: "Get the list of online logged-in devices of the specified account;"
  }, {
    heading: "understand-the-tech-6",
    content: "Force the specified account to log out from a single device;"
  }, {
    heading: "understand-the-tech-6",
    content: "Force the specified account to log out from all devices;"
  }, {
    heading: "understand-the-tech-6",
    content: "Get operations on other devices."
  }, {
    heading: "understand-the-tech-6",
    content: "Set the name of the login device;"
  }, {
    heading: "understand-the-tech-6",
    content: "Set the platform of the login device;"
  }, {
    heading: "understand-the-tech-6",
    content: "Get notified about multi-device synchronization."
  }, {
    heading: "understand-the-tech-6",
    content: "Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices."
  }, {
    heading: "prerequisites-6",
    content: "Before starting this procedure, initialize and connect the SDK to the server. See SDK quickstart for details."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-multi-device-login",
    content: "Implement multi-device login"
  }, {
    id: "get-the-login-id-list-of-other-logged-in-devices-of-the-current-user",
    content: "Get the login ID list of other logged-in devices of the current user"
  }, {
    id: "get-the-list-of-online-logged-in-devices-for-the-specified-account",
    content: "Get the list of online logged-in devices for the specified account"
  }, {
    id: "force-the-specified-account-to-log-out-from-a-single-device",
    content: "Force the specified account to log out from a single device"
  }, {
    id: "force-the-specified-account-to-log-out-from-all-devices",
    content: "Force the specified account to log out from all devices"
  }, {
    id: "get-operations-on-other-devices",
    content: "Get operations on other devices"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "implement-multi-device-login-1",
    content: "Implement multi-device login"
  }, {
    id: "get-the-login-id-list-of-other-logged-in-devices-of-the-current-user-1",
    content: "Get the login ID list of other logged-in devices of the current user"
  }, {
    id: "get-the-list-of-online-logged-in-devices-for-the-specified-account-1",
    content: "Get the list of online logged-in devices for the specified account"
  }, {
    id: "force-the-specified-account-to-log-out-from-a-single-device-1",
    content: "Force the specified account to log out from a single device"
  }, {
    id: "force-the-specified-account-to-log-out-from-all-devices-1",
    content: "Force the specified account to log out from all devices"
  }, {
    id: "get-operations-on-other-devices-1",
    content: "Get operations on other devices"
  }, {
    id: "understand-the-tech-2",
    content: "Understand the tech"
  }, {
    id: "prerequisites-2",
    content: "Prerequisites"
  }, {
    id: "implement-multi-device-login-2",
    content: "Implement multi-device login"
  }, {
    id: "get-the-login-id-list-of-other-login-devices-of-the-current-user",
    content: "Get the login ID list of other login devices of the current user"
  }, {
    id: "get-operations-on-other-devices-2",
    content: "Get operations on other devices"
  }, {
    id: "understand-the-tech-3",
    content: "Understand the tech"
  }, {
    id: "prerequisites-3",
    content: "Prerequisites"
  }, {
    id: "implement-multi-device-login-3",
    content: "Implement multi-device login"
  }, {
    id: "get-the-login-id-list-of-other-logged-in-devices-of-the-current-user-2",
    content: "Get the login ID list of other logged-in devices of the current user"
  }, {
    id: "get-the-list-of-online-logged-in-devices-for-the-specified-account-2",
    content: "Get the list of online logged-in devices for the specified account"
  }, {
    id: "force-the-specified-account-to-log-out-from-a-single-device-2",
    content: "Force the specified account to log out from a single device"
  }, {
    id: "force-the-specified-account-to-log-out-from-all-devices-2",
    content: "Force the specified account to log out from all devices"
  }, {
    id: "get-operations-on-other-devices-3",
    content: "Get operations on other devices"
  }, {
    id: "understand-the-tech-4",
    content: "Understand the tech"
  }, {
    id: "prerequisites-4",
    content: "Prerequisites"
  }, {
    id: "implement-multi-device-login-4",
    content: "Implement multi-device login"
  }, {
    id: "get-the-login-id-list-of-other-logged-in-devices-of-the-current-user-3",
    content: "Get the login ID list of other logged-in devices of the current user"
  }, {
    id: "get-the-list-of-online-logged-in-devices-for-the-specified-account-3",
    content: "Get the list of online logged-in devices for the specified account"
  }, {
    id: "force-the-specified-account-to-log-out-from-a-single-device-3",
    content: "Force the specified account to log out from a single device"
  }, {
    id: "force-the-specified-account-to-log-out-from-all-devices-3",
    content: "Force the specified account to log out from all devices"
  }, {
    id: "get-operations-on-other-devices-4",
    content: "Get operations on other devices"
  }, {
    id: "understand-the-tech-5",
    content: "Understand the tech"
  }, {
    id: "prerequisites-5",
    content: "Prerequisites"
  }, {
    id: "implement-multi-device-login-5",
    content: "Implement multi-device login"
  }, {
    id: "understand-the-tech-6",
    content: "Understand the tech"
  }, {
    id: "prerequisites-6",
    content: "Prerequisites"
  }, {
    id: "implement-multi-device-login-6",
    content: "Implement multi-device login"
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
  url: "#implement-multi-device-login",
  title: _jsx(_Fragment, {
    children: "Implement multi-device login"
  })
}, {
  depth: 3,
  url: "#get-the-login-id-list-of-other-logged-in-devices-of-the-current-user",
  title: _jsx(_Fragment, {
    children: "Get the login ID list of other logged-in devices of the current user"
  })
}, {
  depth: 3,
  url: "#get-the-list-of-online-logged-in-devices-for-the-specified-account",
  title: _jsx(_Fragment, {
    children: "Get the list of online logged-in devices for the specified account"
  })
}, {
  depth: 3,
  url: "#force-the-specified-account-to-log-out-from-a-single-device",
  title: _jsx(_Fragment, {
    children: "Force the specified account to log out from a single device"
  })
}, {
  depth: 3,
  url: "#force-the-specified-account-to-log-out-from-all-devices",
  title: _jsx(_Fragment, {
    children: "Force the specified account to log out from all devices"
  })
}, {
  depth: 3,
  url: "#get-operations-on-other-devices",
  title: _jsx(_Fragment, {
    children: "Get operations on other devices"
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
  url: "#implement-multi-device-login-1",
  title: _jsx(_Fragment, {
    children: "Implement multi-device login"
  })
}, {
  depth: 3,
  url: "#get-the-login-id-list-of-other-logged-in-devices-of-the-current-user-1",
  title: _jsx(_Fragment, {
    children: "Get the login ID list of other logged-in devices of the current user"
  })
}, {
  depth: 3,
  url: "#get-the-list-of-online-logged-in-devices-for-the-specified-account-1",
  title: _jsx(_Fragment, {
    children: "Get the list of online logged-in devices for the specified account"
  })
}, {
  depth: 3,
  url: "#force-the-specified-account-to-log-out-from-a-single-device-1",
  title: _jsx(_Fragment, {
    children: "Force the specified account to log out from a single device"
  })
}, {
  depth: 3,
  url: "#force-the-specified-account-to-log-out-from-all-devices-1",
  title: _jsx(_Fragment, {
    children: "Force the specified account to log out from all devices"
  })
}, {
  depth: 3,
  url: "#get-operations-on-other-devices-1",
  title: _jsx(_Fragment, {
    children: "Get operations on other devices"
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
  url: "#implement-multi-device-login-2",
  title: _jsx(_Fragment, {
    children: "Implement multi-device login"
  })
}, {
  depth: 3,
  url: "#get-the-login-id-list-of-other-login-devices-of-the-current-user",
  title: _jsx(_Fragment, {
    children: "Get the login ID list of other login devices of the current user"
  })
}, {
  depth: 3,
  url: "#get-operations-on-other-devices-2",
  title: _jsx(_Fragment, {
    children: "Get operations on other devices"
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
  url: "#implement-multi-device-login-3",
  title: _jsx(_Fragment, {
    children: "Implement multi-device login"
  })
}, {
  depth: 3,
  url: "#get-the-login-id-list-of-other-logged-in-devices-of-the-current-user-2",
  title: _jsx(_Fragment, {
    children: "Get the login ID list of other logged-in devices of the current user"
  })
}, {
  depth: 3,
  url: "#get-the-list-of-online-logged-in-devices-for-the-specified-account-2",
  title: _jsx(_Fragment, {
    children: "Get the list of online logged-in devices for the specified account"
  })
}, {
  depth: 3,
  url: "#force-the-specified-account-to-log-out-from-a-single-device-2",
  title: _jsx(_Fragment, {
    children: "Force the specified account to log out from a single device"
  })
}, {
  depth: 3,
  url: "#force-the-specified-account-to-log-out-from-all-devices-2",
  title: _jsx(_Fragment, {
    children: "Force the specified account to log out from all devices"
  })
}, {
  depth: 3,
  url: "#get-operations-on-other-devices-3",
  title: _jsx(_Fragment, {
    children: "Get operations on other devices"
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
  url: "#implement-multi-device-login-4",
  title: _jsx(_Fragment, {
    children: "Implement multi-device login"
  })
}, {
  depth: 3,
  url: "#get-the-login-id-list-of-other-logged-in-devices-of-the-current-user-3",
  title: _jsx(_Fragment, {
    children: "Get the login ID list of other logged-in devices of the current user"
  })
}, {
  depth: 3,
  url: "#get-the-list-of-online-logged-in-devices-for-the-specified-account-3",
  title: _jsx(_Fragment, {
    children: "Get the list of online logged-in devices for the specified account"
  })
}, {
  depth: 3,
  url: "#force-the-specified-account-to-log-out-from-a-single-device-3",
  title: _jsx(_Fragment, {
    children: "Force the specified account to log out from a single device"
  })
}, {
  depth: 3,
  url: "#force-the-specified-account-to-log-out-from-all-devices-3",
  title: _jsx(_Fragment, {
    children: "Force the specified account to log out from all devices"
  })
}, {
  depth: 3,
  url: "#get-operations-on-other-devices-4",
  title: _jsx(_Fragment, {
    children: "Get operations on other devices"
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
  url: "#implement-multi-device-login-5",
  title: _jsx(_Fragment, {
    children: "Implement multi-device login"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-6",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-6",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-multi-device-login-6",
  title: _jsx(_Fragment, {
    children: "Implement multi-device login"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
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
  }, { CalloutContainer, CalloutDescription, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
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
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "web",
    platforms: '["android","ios","web","flutter","react-native","windows","unity"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsxs(_components.p, {
        children: [`Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
devices per platform up to 10 by going to `, _jsx(_components.strong, {
          children: "Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device"
        }), "."]
      }), _jsx(_components.p, {
        children: "In cases of multiple device login, all logged-in devices synchronize the following information and operations:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;"
        }), `
`, _jsx(_components.li, {
          children: "Friends and group-related operations;"
        }), `
`, _jsx(_components.li, {
          children: "Message-thread-related operations;"
        }), `
`, _jsx(_components.li, {
          children: "Conversation-related operations."
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:"
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionListener#onLogout"
        }), ` callback.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionListener#onLogout"
        }), " callback. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Single/multi-device login"
            }), _jsx(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Forced logout strategy"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Single-device login"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "center"
              },
              children: ["The newly logged-in device will force the current device to log out. The logged-out device will receive the ", _jsx(_components.code, {
                children: "onDisconnected"
              }), " event."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Multi-device login"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "center"
              },
              children: ["If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the ", _jsx(_components.code, {
                children: "ConnectionParameters#isFixedDeviceId"
              }), " parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) ", _jsx(_components.code, {
                children: "true"
              }), ": Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - ", _jsx(_components.code, {
                children: "false"
              }), ": Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline."]
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: ["The Agora server provides a RESTful interface to force a specified account to ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-system-registration#forcing-a-user-offline",
          children: "log out from a single device"
        }), "."]
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionEventHandler#onUserDidLoginTooManyDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionEventHandler#onUserDidLoginTooManyDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ChatConnectEventListener#onUserDidLoginFromOtherDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ChatConnectEventListener#onUserDidLoginFromOtherDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsx(_components.h2, {
        id: "understand-the-tech",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the login ID list of the other logged-in devices of the current user;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the list of online logged-in devices of the specified account;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Force the specified account to log out from a single device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Force the specified account to log out from all devices;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get friend or group operations on other devices."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the name of the login device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the platform of the login device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get notified about multi-device synchronization."
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices."
      }), _jsx(_components.h2, {
        id: "prerequisites",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Before starting this procedure, initialize and connect the SDK to the server. See ", _jsx(_components.a, {
          href: "../../get-started-sdk",
          children: "SDK quickstart"
        }), " for details."]
      }), _jsx(_components.h2, {
        id: "implement-multi-device-login",
        children: "Implement multi-device login"
      }), _jsx(_components.h3, {
        id: "get-the-login-id-list-of-other-logged-in-devices-of-the-current-user",
        children: "Get the login ID list of other logged-in devices of the current user"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getSelfIdsOnOtherPlatform"
        }), " to get the login ID list of other logged-in devices, and then select the target login ID as the message recipient to send a message to the specified device."]
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
                children: "// A synchronous method that will block the current thread. The asynchronous method is asyncGetSelfIdsOnOtherPlatform(ValueCallBack)."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "List ids "
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
                children: " ChatClient."
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
                children: "contactManager"
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
                children: "getSelfIdsOnOtherPlatform"
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
                children: "// Select a login ID as the message recipient."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "String toChatUserId "
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
                children: " ids."
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
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Create a text message, content is the message text, toChatUserId passes in the login ID as the message recipient."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatMessage message "
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
                children: " ChatMessage."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "createTextSendMessage"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(content, toChatUserId);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Send a message."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
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
                children: "chatManager"
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
                children: "sendMessage"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(message);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "get-the-list-of-online-logged-in-devices-for-the-specified-account",
        children: "Get the list of online logged-in devices for the specified account"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getLoggedInDevicesFromServerWithToken"
        }), " to get the list of online logged-in devices for the specified account from the server by passing in the user ID and user token."]
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
                children: "    try"
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
                children: "        List deviceInfos "
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
                children: " ChatClient."
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
                children: "getLoggedInDevicesFromServerWithToken"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(userId, token);"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (HyphenateException "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "e"
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
                children: "        e."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "printStackTrace"
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
                children: "    }"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "force-the-specified-account-to-log-out-from-a-single-device",
        children: "Force the specified account to log out from a single device"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "kickDeviceWithToken"
        }), " and pass in the user ID and user token to force the specified account to log out from a single logged-in device. Before calling this method, obtain the device ID through the ", _jsx(_components.code, {
          children: "ChatClient#getLoggedInDevicesFromServerWithToken"
        }), " and ", _jsx(_components.code, {
          children: "DeviceInfo#getResource"
        }), " methods. The logged-out device will receive the ", _jsx(_components.code, {
          children: "ConnectionListener#onLogout"
        }), " event."]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "You can also use this interface without logging in."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// userId: User ID, token: User token. Need to be executed in an asynchronous thread."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "List deviceInfos "
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
                children: " ChatClient."
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
                children: "getLoggedInDevicesFromServerWithToken"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(userId, token);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// userId: User ID, token: User token, resource: Device ID. Need to be executed in an asynchronous thread."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
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
                children: "kickDeviceWithToken"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(userId, token, deviceInfos."
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
                children: "(selectedIndex)."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getResource"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "force-the-specified-account-to-log-out-from-all-devices",
        children: "Force the specified account to log out from all devices"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "kickAllDevicesWithToken"
        }), " and pass in the user ID and user token to force the specified account to log out from all logged-in devices. The logged-out device will receive the ", _jsx(_components.code, {
          children: "ConnectionListener#onLogout"
        }), " event."]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "You can also use this interface without logging in."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    try"
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
                children: "        ChatClient."
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
                children: "kickAllDevicesWithToken"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(userId,token);"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (HyphenateException "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "e"
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
                children: "        e."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "printStackTrace"
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
                children: "    }"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "get-operations-on-other-devices",
        children: "Get operations on other devices"
      }), _jsx(_components.p, {
        children: "Let's say that account A logs in on devices A and B at the same time and performs operations on device A. Device B will receive notifications corresponding to these operations."
      }), _jsxs(_components.p, {
        children: ["You need to implement the ", _jsx(_components.code, {
          children: "MultiDeviceListener"
        }), " class to listen to operations on other devices, and then call the ", _jsx(_components.code, {
          children: "addMultiDeviceListener"
        }), " method to add multi-device listening."]
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
                children: "//Implement `MultiDeviceListener` to listen to operations on other devices."
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
                children: " class"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ChatMultiDeviceListener"
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
                children: " MultiDeviceListener"
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
                children: "//@param event event."
              })
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    //@param target friend's user ID; @param ext event extended information."
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
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onContactEvent"
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
                children: " event"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "target"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "ext"
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
                children: "        EMLog."
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
                children: '"onContactEvent event"'
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
                children: "event);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        String message "
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        switch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (event) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user deletes friends on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " CONTACT_REMOVE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user accepts friend requests on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " CONTACT_ACCEPT"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user rejects friend requests on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " CONTACT_DECLINE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user adds a user to the blocklist on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " CONTACT_BAN"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user removes a user from the blocklist on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " CONTACT_ALLOW"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            default:"
              })
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
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onGroupEvent"
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
                children: " event"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "groupId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", List "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "userIds"
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
                children: "        EMLog."
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
                children: '"onGroupEvent event"'
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
                children: "event);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        switch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (event) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user created a group on another device."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_CREATE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user destroyed a group on another device."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_DESTROY"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user joined a group on another device."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_JOIN"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user left a group on another device."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_LEAVE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user initiated a group application on another device."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_APPLY"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user approved the group application on another device."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_APPLY_ACCEPT"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user rejected the group application on another device."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_APPLY_DECLINE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user invited group members on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_INVITE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user accepted the invitation to join the group on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_INVITE_ACCEPT"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user rejected the invitation to join the group on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_INVITE_DECLINE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user kicked members out of the group on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_KICK"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user added members to the group blocklist on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_BAN"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user removed members from the group blocklist on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_ALLOW"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user blocked the group on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_BLOCK"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user unblocked the group on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_UNBLOCK"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user transferred group ownership on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_ASSIGN_OWNER"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user adds an administrator on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_ADD_ADMIN"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user removes the administrator on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_REMOVE_ADMIN"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user mutes users on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_ADD_MUTE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user removes the muting on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_REMOVE_MUTE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user sets custom attributes for group members on other devices."
              })
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " GROUP_METADATA_CHANGED"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            default:"
              })
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
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onChatThreadEvent"
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
                children: " event"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "target"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", List "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "userIds"
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
                children: "        EMLog."
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
                children: '"onChatThreadEvent event"'
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
                children: "event);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        switch"
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " THREAD_CREATE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user creates a message thread on other devices."
              })
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " THREAD_DESTROY"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user destroys the message thread on other devices."
              })
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " THREAD_JOIN"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user joins the message thread on other devices."
              })
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " THREAD_LEAVE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user leaves the message thread on other devices."
              })
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " THREAD_UPDATE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user updates the message thread on other devices."
              })
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " THREAD_KICK"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user kicks a member out of the message thread on other devices."
              })
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            default:"
              })
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
              className: "line"
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
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onConversationEvent"
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
                children: " event"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "conversationId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", Conversation.ConversationType "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "type"
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
                children: "        EMLog."
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
                children: '"onConversationEvent event"'
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
                children: "event);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        switch"
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " CONVERSATION_PINNED"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user pins a conversation on other devices."
              })
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " CONVERSATION_UNPINNED"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user unpins a conversation on other devices."
              })
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " CONVERSATION_DELETED"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user deletes a conversation on other devices."
              })
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " CONVERSATION_MARK_UPDATE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user updates the conversation tag on other devices, including adding and removing conversation tags."
              })
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            default:"
              })
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
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onMessageRemoved"
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
                children: "conversationId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "deviceId"
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
                children: "        EMLog."
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
                children: '"onMessageRemoved conversationId "'
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
                children: "conversationId);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user unidirectionally deletes message history of a conversation on other devices from the server."
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatMultiDeviceListener chatMultiDeviceListener "
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
                children: " ChatMultiDeviceListener"
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
                children: "//Add a multi-device listener."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
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
                children: "addMultiDeviceListener"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(chatMultiDeviceListener);"
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
                children: "//Remove a multi-device listener."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
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
                children: "removeMultiDeviceListener"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(chatMultiDeviceListener);"
              })]
            })]
          })
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
        children: [`Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
devices per platform up to 10 by going to `, _jsx(_components.strong, {
          children: "Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device"
        }), "."]
      }), _jsx(_components.p, {
        children: "In cases of multiple device login, all logged-in devices synchronize the following information and operations:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;"
        }), `
`, _jsx(_components.li, {
          children: "Friends and group-related operations;"
        }), `
`, _jsx(_components.li, {
          children: "Message-thread-related operations;"
        }), `
`, _jsx(_components.li, {
          children: "Conversation-related operations."
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:"
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Single/multi-device login"
            }), _jsx(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Forced logout strategy"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Single-device login"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "center"
              },
              children: ["The newly logged-in device will force the current device to log out. The logged-out device will receive the ", _jsx(_components.code, {
                children: "onDisconnected"
              }), " event."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Multi-device login"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "center"
              },
              children: ["If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the ", _jsx(_components.code, {
                children: "ConnectionParameters#isFixedDeviceId"
              }), " parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) ", _jsx(_components.code, {
                children: "true"
              }), ": Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - ", _jsx(_components.code, {
                children: "false"
              }), ": Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline."]
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: ["The Agora server provides a RESTful interface to force a specified account to ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-system-registration#forcing-a-user-offline",
          children: "log out from a single device"
        }), "."]
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionEventHandler#onUserDidLoginTooManyDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionEventHandler#onUserDidLoginTooManyDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ChatConnectEventListener#onUserDidLoginFromOtherDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ChatConnectEventListener#onUserDidLoginFromOtherDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsx(_components.h2, {
        id: "understand-the-tech-1",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the login ID list of the other logged-in devices of the current user;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the list of online logged-in devices of the specified account;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Force the specified account to log out from a single device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Force the specified account to log out from all devices;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get operations on other devices."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the name of the login device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the platform of the login device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get notified about multi-device synchronization."
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices."
      }), _jsx(_components.h2, {
        id: "prerequisites-1",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Before starting this procedure, initialize and connect the SDK to the server. See ", _jsx(_components.a, {
          href: "../../get-started-sdk",
          children: "SDK quickstart"
        }), " for details."]
      }), _jsx(_components.h2, {
        id: "implement-multi-device-login-1",
        children: "Implement multi-device login"
      }), _jsx(_components.h3, {
        id: "get-the-login-id-list-of-other-logged-in-devices-of-the-current-user-1",
        children: "Get the login ID list of other logged-in devices of the current user"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getSelfIdsOnOtherPlatform"
        }), " to get the login ID list of other logged-in devices, and then select the target login ID as the message recipient to send a message to the specified device."]
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "shared"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "().contactManager"
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
                children: "getSelfIdsOnOtherPlatform"
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
                children: "completion"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": { ids, err "
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " err "
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
                children: " nil"
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
                children: "            let"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " userId "
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
                children: " ids"
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
                children: "first"
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
                children: "            // Select a login ID as the message recipient. Create a text message, content is the message text, conversationId passes the login ID as the message recipient."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            let"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " textMessage "
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
                children: " AgoraChatMessage"
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
                children: "conversationId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": userId, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "body"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "text"
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
                children: "content"
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
                children: '"hello"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "), "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "ext"
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            AgoraChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "shared"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "().chatManager"
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
                children: "send"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(textMessage, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "progress"
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
                children: "completion"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": { msg, e "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "in"
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
                children: "            })"
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
                children: "    })"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "get-the-list-of-online-logged-in-devices-for-the-specified-account-1",
        children: "Get the list of online logged-in devices for the specified account"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getLoggedInDevicesFromServerWithToken"
        }), " to get the list of online logged-in devices for the specified account from the server by passing in the user ID and user token."]
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    AgoraChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "shared"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "getLoggedInDevicesFromServer"
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
                children: "withUserId"
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
                children: '"userId"'
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
                children: "token"
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
                children: '"token"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") { deviceConfigs, err "
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " err "
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
                children: " nil"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
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
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "force-the-specified-account-to-log-out-from-a-single-device-1",
        children: "Force the specified account to log out from a single device"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "kickDeviceWithUserId"
        }), " and pass in the user ID and user token to force the specified account to log out from a single logged-in device. Before calling this method, obtain the device ID through the ", _jsx(_components.code, {
          children: "AgoraChatClient#getLoggedInDevicesFromServer"
        }), " and ", _jsx(_components.code, {
          children: "AgoraChatDeviceInfo#resource"
        }), " methods. The logged-out device will receive the ", _jsx(_components.code, {
          children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
        }), " event."]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "You can also use this interface without logging in."
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "shared"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "getLoggedInDevicesFromServer"
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
                children: "withUserId"
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
                children: '"userId"'
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
                children: "token"
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
                children: '"token"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") { deviceConfigs, err "
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " err "
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
                children: " nil"
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
                children: "            let"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " resource "
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
                children: " deviceConfigs"
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
                children: "first"
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
                children: ".resource {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            AgoraChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "shared"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "kickDevice"
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
                children: "withUserId"
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
                children: '"userId"'
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
                children: "token"
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
                children: '"token"'
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
                children: "resource"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": resource) { e "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "in"
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
                children: "    }"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "force-the-specified-account-to-log-out-from-all-devices-1",
        children: "Force the specified account to log out from all devices"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "kickAllDevicesWithUserId"
        }), " and pass in the user ID and user token to force the specified account to log out from all logged-in devices. The logged-out device will receive the ", _jsx(_components.code, {
          children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
        }), " event."]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "You can also use this interface without logging in."
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   AgoraChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "shared"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "kickAllDevices"
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
                children: "withUserId"
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
                children: '"userId"'
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
                children: "token"
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
                children: '"token"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") { err "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "in"
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
                children: "        }"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "get-operations-on-other-devices-1",
        children: "Get operations on other devices"
      }), _jsx(_components.p, {
        children: "Let's say that account A logs in on devices A and B at the same time and performs operations on device A. Device B will receive notifications corresponding to these operations."
      }), _jsxs(_components.p, {
        children: ["You need to implement the ", _jsx(_components.code, {
          children: "AgoraChatMultiDevicesDelegate"
        }), " class to listen to operations on other devices, and then call the ", _jsx(_components.code, {
          children: "addMultiDevicesDelegate"
        }), " method to add multi-device listening."]
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
                children: "extension"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " AppDelegate"
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
                children: "AgoraChatMultiDevicesDelegate "
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
                children: " multiDevicesContactEventDidReceive"
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
                children: " aEvent: AgoraChatMultiDevicesEvent, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "username"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " aUsername: "
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
                children: "ext"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " aExt: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "String"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        switch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " aEvent {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user deletes friends on other devices."
              })
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
                children: " .contactRemove"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user accepts friend requests on other devices."
              })
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
                children: " .contactAccept"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user rejects friend requests on other devices."
              })
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
                children: " .contactDecline"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user adds a user to the blocklist on other devices."
              })
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
                children: " .contactBan"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user removes a user from the blocklist on other devices."
              })
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
                children: " .contactAllow"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        default:"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
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
                children: "    func"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " multiDevicesGroupEventDidReceive"
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
                children: " aEvent: AgoraChatMultiDevicesEvent, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "groupId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " aGroupId: "
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
                children: "ext"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " aExt: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "Any"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        switch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " aEvent {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user created a group on another device"
              })
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
                children: " .groupCreate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user destroyed a group on another device"
              })
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
                children: " .groupDestroy"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user joined a group on another device"
              })
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
                children: " .groupJoin"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user left a group on another device"
              })
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
                children: " .groupLeave"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user initiated a group application on another device"
              })
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
                children: " .groupApply"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user accepted a group application on another device"
              })
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
                children: " .groupApplyAccept"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user rejected a group application on another device"
              })
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
                children: " .groupApplyDecline"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user invited group members on another device"
              })
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
                children: " .groupInvite"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user has accepted the invitation to join the group on other devices"
              })
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
                children: " .groupInviteAccept"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user has rejected the invitation to join the group on other devices"
              })
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
                children: " .groupInviteDecline"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user has kicked members out of the group on other devices"
              })
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
                children: " .groupKick"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user has added members to the group blocklist on other devices"
              })
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
                children: " .groupBan"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user has removed members from the group blocklist on other devices"
              })
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
                children: " .groupAllow"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user has blocked the group on other devices"
              })
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
                children: " .groupBlock"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user has unblocked the group on other devices"
              })
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
                children: " .groupUnBlock"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user has transferred group ownership on other devices"
              })
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
                children: " .groupAssignOwner"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user has added an administrator on other devices"
              })
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
                children: " .groupAddAdmin"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user has removed an administrator on other devices"
              })
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
                children: " .groupRemoveAdmin"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user has muted users on other devices"
              })
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
                children: " .groupAddMute"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user removes the mute on other devices"
              })
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
                children: " .groupRemoveMute"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user sets the group member custom attributes on other devices"
              })
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
                children: " .groupMemberAttributesChanged"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        default:"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
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
                children: "    func"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " multiDevicesChatThreadEventDidReceive"
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
                children: " aEvent: AgoraChatMultiDevicesEvent, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "threadId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " aThreadId: "
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
                children: "ext"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " aExt: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "Any"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        switch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " aEvent {"
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
                children: " .chatThreadCreate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user creates a message thread on other devices."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
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
                children: " .chatThreadDestroy"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user destroys the message thread on other devices."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
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
                children: " .chatThreadJoin"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user joins the message thread on other devices."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
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
                children: " .chatThreadLeave"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user leaves the message thread on other devices."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
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
                children: " .chatThreadUpdate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user updates the message thread on other devices."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
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
                children: " .chatThreadKick"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user kicks a member out of the message thread on other devices."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        default:"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
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
                children: "    func"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " multiDevicesConversationEvent"
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
                children: " event: AgoraChatMultiDevicesEvent, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "conversationId"
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
                children: "conversationType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": AgoraChatConversationType) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        switch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " event {"
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
                children: " .conversationPinned"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user pins a conversation on other devices."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
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
                children: " .conversationUnpinned"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user unpins a conversation on other devices."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
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
                children: " .conversationDelete"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user deletes a conversation on other devices."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user updates the conversation mark on other devices, including adding and removing conversation marks."
              })
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
                children: " .conversationUpdateMark"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        default:"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            break"
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
                children: "    func"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " multiDevicesMessageBeRemoved"
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
                children: " conversationId: "
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
                children: "deviceId"
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
                children: "        //The current user unidirectionally deletes message history of a conversation on other devices from the server."
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "//Add a multi-device listener."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "shared"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "addMultiDevices"
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
                children: "queue"
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
        children: [`Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
devices per platform up to 10 by going to `, _jsx(_components.strong, {
          children: "Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device"
        }), "."]
      }), _jsx(_components.p, {
        children: "In cases of multiple device login, all logged-in devices synchronize the following information and operations:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;"
        }), `
`, _jsx(_components.li, {
          children: "Friends and group-related operations;"
        }), `
`, _jsx(_components.li, {
          children: "Message-thread-related operations;"
        }), `
`, _jsx(_components.li, {
          children: "Conversation-related operations."
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:"
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Single/multi-device login"
            }), _jsx(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Forced logout strategy"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Single-device login"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "center"
              },
              children: ["The newly logged-in device will force the current device to log out. The logged-out device will receive the ", _jsx(_components.code, {
                children: "onDisconnected"
              }), " event."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Multi-device login"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "center"
              },
              children: ["If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the ", _jsx(_components.code, {
                children: "ConnectionParameters#isFixedDeviceId"
              }), " parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) ", _jsx(_components.code, {
                children: "true"
              }), ": Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - ", _jsx(_components.code, {
                children: "false"
              }), ": Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline."]
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: ["The Agora server provides a RESTful interface to force a specified account to ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-system-registration#forcing-a-user-offline",
          children: "log out from a single device"
        }), "."]
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionEventHandler#onUserDidLoginTooManyDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionEventHandler#onUserDidLoginTooManyDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ChatConnectEventListener#onUserDidLoginFromOtherDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ChatConnectEventListener#onUserDidLoginFromOtherDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsx(_components.h2, {
        id: "understand-the-tech-2",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the login ID list of the other logged-in devices of the current user;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the list of online logged-in devices of the specified account;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Force the specified account to log out from a single device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Force the specified account to log out from all devices;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get friend or group operations on other devices."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the name of the login device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the platform of the login device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get notified about multi-device synchronization."
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices."
      }), _jsx(_components.h2, {
        id: "prerequisites-2",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Before starting this procedure, initialize and connect the SDK to the server. See ", _jsx(_components.a, {
          href: "../../get-started-sdk",
          children: "SDK quickstart"
        }), " for details."]
      }), _jsx(_components.h2, {
        id: "implement-multi-device-login-2",
        children: "Implement multi-device login"
      }), _jsx(_components.h3, {
        id: "get-the-login-id-list-of-other-login-devices-of-the-current-user",
        children: "Get the login ID list of other login devices of the current user"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getSelfIdsOnOtherPlatform"
        }), " to get the login ID list of other logged-in devices, and then select the target login ID as the message recipient to send messages to the specified device."]
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
                children: "chatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getSelfIdsOnOtherPlatform"
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
                children: "then"
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
                children: "res"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  console."
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
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    res,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "Successfully obtained the login ID list of other login devices of the current user"'
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
                children: "  // Select a login ID as the message recipient."
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " toUserId"
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
                children: " res.data["
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
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // toUserId as the message recipient."
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
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
                children: "    type: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"txt"'
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
                children: "    msg: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"message content"'
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
                children: "    to: toUserId,"
              })
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
                children: '"singleChat"'
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
                children: "  };"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Create a message."
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " msg"
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
                children: " AgoraChat.message."
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
                children: "(options);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Send a message."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  chatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "send"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(msg);"
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
      }), _jsx(_components.h3, {
        id: "get-operations-on-other-devices-2",
        children: "Get operations on other devices"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "addEventHandler"
        }), " to register listener events and listen to operations on other devices. After the server synchronizes information, the SDK will call back these events, and both the web end and other ends will receive notifications of friend and group-related operations."]
      }), _jsxs(_components.p, {
        children: ["For these operations, multi-device events have the same name as the single-device events. The only difference is the ", _jsx(_components.code, {
          children: "from"
        }), " field in the event: It is the current user ID in multi-end multi-device events, and the operator ID in single-device events. See ", _jsx(_components.a, {
          href: "/en/realtime-media/im/build/build-groups-rooms-and-threads/chat-group/manage-chat-groups#listen-for-chat-group-events",
          children: "Listen for chat group events"
        }), " and ", _jsx(_components.a, {
          href: "/en/realtime-media/im/build/build-core-messaging/contacts#listen-for-contact-events",
          children: "Listen for contact events"
        }), " for details."]
      }), _jsxs(_components.p, {
        children: ["In addition to friend and group events, the following events will trigger the ", _jsx(_components.code, {
          children: "onMultiDeviceEvent"
        }), " event:"]
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
                children: "conn."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "addEventHandler"
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
                children: '"handlerId"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  onContactAgreed"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": ("
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
                children: " {},"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  onGroupEvent"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": ("
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
                children: " {},"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  onMultiDeviceEvent"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": ("
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
                children: " (event.operation) {"
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
                children: ' "chatThreadCreate"'
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
                children: "        //The current user creates a message thread on other devices."
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
                children: ' "chatThreadDestroy"'
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
                children: "        //The current user destroys the message thread on other devices."
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
                children: ' "chatThreadJoin"'
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
                children: "        //The current user joins the message thread on other devices."
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
                children: ' "chatThreadLeave"'
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
                children: "        //The current user leaves the message thread on other devices."
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
                children: ' "chatThreadNameUpdate"'
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
                children: "        //The current user updates the message thread on other devices."
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
                children: ' "deleteRoaming"'
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
                children: "        //The current user deletes the server conversation on other devices."
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
                children: ' "memberAttributesUpdate"'
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
                children: "        //The current user has updated the group member attributes on other devices."
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
                children: ' "deleteRoaming"'
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
                children: "        //The current user unidirectionally deletes message history of a conversation on other devices from the server."
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
                children: ' "deleteConversation"'
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
                children: "        //The current user has deleted a conversation on other devices."
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
                children: ' "pinnedConversation"'
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
                children: "        //The current user has pinned a conversation on other devices."
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
                children: ' "unpinnedConversation"'
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
                children: "        //The current user has unpinned a conversation on other devices."
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
                children: ' "markConversation"'
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
                children: "        //The current user has marked a conversation on other devices."
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
                children: ' "unMarkConversation"'
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
                children: "        //The current user has unmarked a conversation on other devices."
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
                children: "  },"
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
            })]
          })
        })
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "flutter",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "flutter"
      }), _jsxs(_components.p, {
        children: [`Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
devices per platform up to 10 by going to `, _jsx(_components.strong, {
          children: "Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device"
        }), "."]
      }), _jsx(_components.p, {
        children: "In cases of multiple device login, all logged-in devices synchronize the following information and operations:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;"
        }), `
`, _jsx(_components.li, {
          children: "Friends and group-related operations;"
        }), `
`, _jsx(_components.li, {
          children: "Message-thread-related operations;"
        }), `
`, _jsx(_components.li, {
          children: "Conversation-related operations."
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:"
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Single/multi-device login"
            }), _jsx(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Forced logout strategy"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Single-device login"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "center"
              },
              children: ["The newly logged-in device will force the current device to log out. The logged-out device will receive the ", _jsx(_components.code, {
                children: "onDisconnected"
              }), " event."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Multi-device login"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "center"
              },
              children: ["If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the ", _jsx(_components.code, {
                children: "ConnectionParameters#isFixedDeviceId"
              }), " parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) ", _jsx(_components.code, {
                children: "true"
              }), ": Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - ", _jsx(_components.code, {
                children: "false"
              }), ": Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline."]
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: ["The Agora server provides a RESTful interface to force a specified account to ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-system-registration#forcing-a-user-offline",
          children: "log out from a single device"
        }), "."]
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionEventHandler#onUserDidLoginTooManyDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionEventHandler#onUserDidLoginTooManyDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ChatConnectEventListener#onUserDidLoginFromOtherDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ChatConnectEventListener#onUserDidLoginFromOtherDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsx(_components.h2, {
        id: "understand-the-tech-3",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the login ID list of the other logged-in devices of the current user;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the list of online logged-in devices of the specified account;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Force the specified account to log out from a single device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Force the specified account to log out from all devices;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get friend or group operations on other devices."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the name of the login device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the platform of the login device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get notified about multi-device synchronization."
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices."
      }), _jsx(_components.h2, {
        id: "prerequisites-3",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Before starting this procedure, initialize and connect the SDK to the server. See ", _jsx(_components.a, {
          href: "../../get-started-sdk",
          children: "SDK quickstart"
        }), " for details."]
      }), _jsx(_components.h2, {
        id: "implement-multi-device-login-3",
        children: "Implement multi-device login"
      }), _jsx(_components.h3, {
        id: "get-the-login-id-list-of-other-logged-in-devices-of-the-current-user-2",
        children: "Get the login ID list of other logged-in devices of the current user"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getSelfIdsOnOtherPlatform"
        }), " to get the login ID list of other logged-in devices, and then select the target login ID as the message recipient to send a message to the specified device."]
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "List"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ids "
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    await"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance.contactManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getSelfIdsOnOtherPlatform"
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
                children: "// Select a login ID as the message sender."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: " toChatUserId "
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
                children: " ids.first;"
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
                children: "// Create a text message, content is the message text, toChatUserId passes in the login ID as the message sender."
              })
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
                children: " msg "
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
                children: " ChatMessage"
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
                children: "createTxtSendMessage"
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
                children: "    targetId"
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
                children: " toChatUserId, content"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'content'"
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
                children: "// Send a message."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance.chatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "sendMessage"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(msg);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "get-the-list-of-online-logged-in-devices-for-the-specified-account-2",
        children: "Get the list of online logged-in devices for the specified account"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "fetchLoggedInDevices"
        }), " to get the list of online logged-in devices for the specified account from the server by passing in the user ID and user token."]
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "List"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " deviceInfos "
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        await"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchLoggedInDevices"
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
                children: "    userId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'userId'"
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
                children: "    pwdOrToken"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'token'"
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
                children: "    isPwd"
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
        id: "force-the-specified-account-to-log-out-from-a-single-device-2",
        children: "Force the specified account to log out from a single device"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "kickDevice"
        }), " and pass in the user ID and user token to force the specified account to log out from a single logged-in device. Before calling this method, obtain the device ID through the ", _jsx(_components.code, {
          children: "ChatClient#fetchLoggedInDevices"
        }), " and ", _jsx(_components.code, {
          children: "DeviceInfo#getResource"
        }), ` methods.
The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionEventHandler#onUserDidLoginTooManyDevice"
        }), " event."]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "You can also use this interface without logging in."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// userId: user ID, pwdOrToken: user token."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "List"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " deviceInfos "
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        await"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchLoggedInDevices"
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
                children: "    userId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'userId'"
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
                children: "    pwdOrToken"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'token'"
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
                children: "    isPwd"
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
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// userId: user ID, pwdOrToken: user token."
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "kickDevice"
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
                children: "    userId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'userId'"
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
                children: "    pwdOrToken"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'token'"
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
                children: "    resource"
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
                children: " deviceInfos[selectedIndex].resource"
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
                children: "    isPwd"
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
        id: "force-the-specified-account-to-log-out-from-all-devices-2",
        children: "Force the specified account to log out from all devices"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "kickAllDevices"
        }), " and pass in the user ID and user token to force the specified account to log out from all logged-in devices."]
      }), _jsxs(_components.p, {
        children: ["The logged-out device will receive the ", _jsx(_components.code, {
          children: "ConnectionEventHandler#onUserDidLoginTooManyDevice"
        }), " event."]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "You can also use this interface without logging in."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// userId: user ID, pwdOrToken: user token."
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "kickAllDevices"
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
                children: "    userId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'userId'"
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
                children: "    pwdOrToken"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'pwdOrToken'"
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
                children: "    isPwd"
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
        id: "get-operations-on-other-devices-3",
        children: "Get operations on other devices"
      }), _jsx(_components.p, {
        children: "Let's say that account A logs in on devices A and B at the same time and performs operations on device A. Device B will receive notifications corresponding to these operations."
      }), _jsxs(_components.p, {
        children: ["You need to implement the ", _jsx(_components.code, {
          children: "ChatMultiDeviceEventHandler"
        }), " class to listen to operations on other devices, and then call the ", _jsx(_components.code, {
          children: "addMultiDeviceEventHandler"
        }), " method to add multi-device listening."]
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
                children: "//Implement `ChatMultiDeviceEventHandler` to monitor operations on other devices."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "private "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "class"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDeviceListener"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " implements"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " MultiDeviceListener"
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
                children: "final"
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
                children: " ChatMultiDeviceEventHandler"
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
                children: "    onContactEvent"
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
                children: " (event, userId, ext) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        switch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (event) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user deletes friends on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "CONTACT_REMOVE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user accepts friend requests on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "CONTACT_ACCEPT"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user rejects friend requests on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "CONTACT_DECLINE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user adds a user to the blocklist on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "CONTACT_BAN"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user removes a user from the blocklist on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "CONTACT_ALLOW"
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
                children: "    },"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    onGroupEvent"
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
                children: " (event, groupId, userIds) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        switch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (event) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user created a group on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_CREATE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user destroyed the group on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_DESTROY"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user joined the group on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_JOIN"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user left the group on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_LEAVE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user initiated a group application on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_APPLY"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user agreed to the group application on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_APPLY_ACCEPT"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user rejected the group application on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_APPLY_DECLINE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user invited group members on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_INVITE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user has accepted the invitation to join the group on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_INVITE_ACCEPT"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user has rejected the invitation to join the group on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_INVITE_DECLINE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user has kicked members out of the group on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_KICK"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user has added members to the group blocklist on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_BAN"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user has removed members from the group blocklist on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_ALLOW"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user has blocked the group on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_BLOCK"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user has unblocked the group on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_UNBLOCK"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user transfers group ownership on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_ASSIGN_OWNER"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user adds an administrator on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_ADD_ADMIN"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user removes the administrator on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_REMOVE_ADMIN"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user mutes users on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_ADD_MUTE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user removes the muting on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_REMOVE_MUTE"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user sets custom attributes for group members on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "GROUP_MEMBER_ATTRIBUTES_CHANGED"
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
                children: "    },"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    onChatThreadEvent"
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
                children: " (event, chatThreadId, userIds) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        switch"
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "CHAT_THREAD_CREATE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user creates a message thread on other devices."
              })
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "CHAT_THREAD_DESTROY"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user destroys the message thread on other devices."
              })
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "CHAT_THREAD_JOIN"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user joins the message thread on other devices."
              })
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "CHAT_THREAD_LEAVE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user leaves the message thread on other devices."
              })
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "CHAT_THREAD_UPDATE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user updates the message thread on other devices."
              })
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "CHAT_THREAD_KICK"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user kicks a member out of the message thread on other devices."
              })
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
                children: "    },"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    onConversationEvent"
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
                children: " (event, conversationId, type) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        switch"
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "CONVERSATION_PINNED"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user pins a conversation on other devices"
              })
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "CONVERSATION_UNPINNED"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user unpins a conversation on other devices"
              })
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMultiDevicesEvent"
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
                children: "CONVERSATION_DELETE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
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
                children: "            //The current user deletes a conversation on other devices"
              })
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
                children: "    },"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    onRemoteMessagesRemoved"
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
                children: " (conversationId, deviceId) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        //The current user unidirectionally deletes message history of a conversation on other devices from the server."
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
                children: ");"
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
                children: "//Add a multi-device listener."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "addMultiDeviceEventHandler"
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "UNIQUE_HANDLER_ID"'
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
                children: "    eventHandler,"
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
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "//Remove a multi-device listener."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "removeMultiDeviceEventHandler"
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
                children: "'UNIQUE_HANDLER_ID'"
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
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "react-native",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "react-native"
      }), _jsxs(_components.p, {
        children: [`Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
devices per platform up to 10 by going to `, _jsx(_components.strong, {
          children: "Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device"
        }), "."]
      }), _jsx(_components.p, {
        children: "In cases of multiple device login, all logged-in devices synchronize the following information and operations:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;"
        }), `
`, _jsx(_components.li, {
          children: "Friends and group-related operations;"
        }), `
`, _jsx(_components.li, {
          children: "Message-thread-related operations;"
        }), `
`, _jsx(_components.li, {
          children: "Conversation-related operations."
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:"
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Single/multi-device login"
            }), _jsx(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Forced logout strategy"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Single-device login"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "center"
              },
              children: ["The newly logged-in device will force the current device to log out. The logged-out device will receive the ", _jsx(_components.code, {
                children: "onDisconnected"
              }), " event."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Multi-device login"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "center"
              },
              children: ["If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the ", _jsx(_components.code, {
                children: "ConnectionParameters#isFixedDeviceId"
              }), " parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) ", _jsx(_components.code, {
                children: "true"
              }), ": Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - ", _jsx(_components.code, {
                children: "false"
              }), ": Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline."]
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: ["The Agora server provides a RESTful interface to force a specified account to ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-system-registration#forcing-a-user-offline",
          children: "log out from a single device"
        }), "."]
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionEventHandler#onUserDidLoginTooManyDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionEventHandler#onUserDidLoginTooManyDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ChatConnectEventListener#onUserDidLoginFromOtherDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ChatConnectEventListener#onUserDidLoginFromOtherDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsx(_components.h2, {
        id: "understand-the-tech-4",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the login ID list of the other logged-in devices of the current user;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the list of online logged-in devices of the specified account;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Force the specified account to log out from a single device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Force the specified account to log out from all devices;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the name of the login device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the platform of the login device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get notified about multi-device synchronization."
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices."
      }), _jsx(_components.h2, {
        id: "prerequisites-4",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Before starting this procedure, initialize and connect the SDK to the server. See ", _jsx(_components.a, {
          href: "../../get-started-sdk",
          children: "SDK quickstart"
        }), " for details."]
      }), _jsx(_components.h2, {
        id: "implement-multi-device-login-4",
        children: "Implement multi-device login"
      }), _jsx(_components.h3, {
        id: "get-the-login-id-list-of-other-logged-in-devices-of-the-current-user-3",
        children: "Get the login ID list of other logged-in devices of the current user"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getSelfIdsOnOtherPlatform"
        }), " to get the login ID list of other logged-in devices, and then select the target login ID as the message recipient to send a message to the specified device."]
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
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
                children: "    .contactManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getSelfIdsOnOtherPlatform"
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
                children: "    ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "then"
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
                children: "ids"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        console."
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
                children: '"get ids success."'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", ids);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // content: set text content"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// targetId: asynchronous result from `getSelfIdsOnOtherPlatform` method"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// chatType: conversation type"
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
                children: " targetId"
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
                children: " ids["
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
                children: " msg"
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
                children: " ChatMessage."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "createTextMessage"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(targetId, content, chatType);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// execute message sending"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
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
                children: "    .chatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "sendMessage"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(msg！, "
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
                children: " ChatMessageCallback"
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
                children: "    ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "then"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(() "
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // message sending action completed, log will be printed here."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // message sending result is returned through callback"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        console."
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
                children: '"send message operation success."'
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
                children: "    })"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "catch"
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
                children: "reason"
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // If the message sending operation fails, the log will be printed here."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        console."
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
                children: '"send message operation fail."'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", reason);"
              })]
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
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    })"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "catch"
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
                children: "reason"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        console."
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
                children: '"get ids fail."'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", reason);"
              })]
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
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "get-the-list-of-online-logged-in-devices-for-the-specified-account-3",
        children: "Get the list of online logged-in devices for the specified account"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getLoggedInDevicesFromServer"
        }), " to get the list of online logged-in devices for the specified account from the server by passing in the user ID and user token."]
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
                children: "// userId: user ID."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// pwdOrToken: user token"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
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
                children: "    ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getLoggedInDevicesFromServer"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(userId, pwdOrToken, isPassword)"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "then"
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
                children: "result"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        console."
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
                children: '"devices list:"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", result);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    })"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "catch"
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
                children: "error"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "warn"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(error);"
              })]
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
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "force-the-specified-account-to-log-out-from-a-single-device-3",
        children: "Force the specified account to log out from a single device"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "kickDevice"
        }), " and pass in the user ID and user token to force the specified account to log out from a single logged-in device. Before calling this method, obtain the device ID through the ", _jsx(_components.code, {
          children: "ChatClient#getLoggedInDevicesFromServer"
        }), " method. The logged-out device will receive the ", _jsx(_components.code, {
          children: "ChatConnectEventListener#onUserDidLoginFromOtherDevice"
        }), " event."]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "You can also use this interface without logging in."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// The device ID can be obtained through `getLoggedInDevicesFromServer`."
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
                children: " deviceInfo"
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
                children: " ChatClient."
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
                children: "getLoggedInDevicesFromServer"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    userId,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    pwdOrToken,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    isPassword"
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
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
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
                children: "    ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "kickDevice"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(userId, pwdOrToken, deviceInfo.resource, isPassword)"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "then"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(() "
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        console."
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
                children: '"success"'
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
                children: "    })"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "catch"
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
                children: "error"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "warn"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(error);"
              })]
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
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "force-the-specified-account-to-log-out-from-all-devices-3",
        children: "Force the specified account to log out from all devices"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "kickAllDevices"
        }), " and pass in the user ID and user token to force the specified account to log out from all logged-in devices. The logged-out device will receive the ", _jsx(_components.code, {
          children: "ChatConnectEventListener#onUserDidLoginFromOtherDevice"
        }), " event."]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "You can also use this interface without logging in."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
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
                children: "    ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "kickAllDevices"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(userId, pwdOrToken, isPassword)"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "then"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(() "
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        console."
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
                children: '"success"'
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
                children: "    })"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "catch"
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
                children: "error"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "warn"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(error);"
              })]
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
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "get-operations-on-other-devices-4",
        children: "Get operations on other devices"
      }), _jsx(_components.p, {
        children: "Let's say that account A logs in on devices A and B at the same time and performs operations on device A. Device B will receive notifications corresponding to these operations."
      }), _jsxs(_components.p, {
        children: ["You need to implement the ", _jsx(_components.code, {
          children: "ChatMultiDeviceEventListener"
        }), " class to listen to operations on other devices, and then set up multi-device listeners."]
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
                children: "let"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " listener"
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
                children: " ChatMultiDeviceEventListener"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "class"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    implements"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ChatMultiDeviceEventListener"
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
                children: "    onContactEvent"
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
                children: "("
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "        event"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ChatMultiDeviceEvent"
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
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "        target"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
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
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "        ext"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    )"
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
                children: " void"
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
                children: "        // Friend-related multi-device notification."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        switch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (event) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            // The current user deletes friends on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " CONTACT_REMOVE"
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
                children: "                break"
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
                children: "            // The current user accepts friend requests on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " CONTACT_ACCEPT"
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
                children: "                break"
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
                children: "            // The current user rejects friend requests on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " CONTACT_DECLINE"
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
                children: "                break"
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
                children: "            // The current user adds friends to the blocklist on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " CONTACT_BAN"
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
                children: "                break"
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
                children: "            // The current user removes friends from the blocklist on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " CONTACT_ALLOW"
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
                children: "                break"
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
              className: "line"
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "    onGroupEvent"
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
                children: "("
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "        event"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ChatMultiDeviceEvent"
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
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "        target"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
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
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "        usernames"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " Array"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    )"
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
                children: " void"
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
                children: "        // Group-related multi-device notifications."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        switch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (event) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            //The current user created a group on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_CREATE"
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
                children: "                break"
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
                children: "            //The current user destroyed the group on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_DESTROY"
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
                children: "                break"
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
                children: "            //The current user joined the group on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_JOIN"
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
                children: "                break"
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
                children: "            //The current user left the group on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_LEAVE"
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
                children: "                break"
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
                children: "            //The current user initiated a group application on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_APPLY"
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
                children: "                break"
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
                children: "            //The current user agreed to the group application on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_APPLY_ACCEPT"
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
                children: "                break"
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
                children: "            //The current user rejected the group application on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_APPLY_DECLINE"
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
                children: "                break"
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
                children: "            //The current user invited group members on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_INVITE"
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
                children: "                break"
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
                children: "            //The current user agreed to the group invitation on another device."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_INVITE_ACCEPT"
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
                children: "                break"
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
                children: "            //The current user rejected the invitation to join the group on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_INVITE_DECLINE"
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
                children: "                break"
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
                children: "            //The current user kicked members out of the group on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_KICK"
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
                children: "                break"
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
                children: "            //The current user added members to the group blocklist on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_BAN"
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
                children: "                break"
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
                children: "            //The current user removed members from the group blocklist on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_ALLOW"
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
                children: "                break"
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
                children: "            //The current user blocked the group on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_BLOCK"
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
                children: "                break"
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
                children: "            //The current user unblocked the group on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_UNBLOCK"
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
                children: "                break"
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
                children: "            //The current user transferred group ownership on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_ASSIGN_OWNER"
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
                children: "                break"
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
                children: "            //The current user added an administrator on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_ADD_ADMIN"
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
                children: "                break"
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
                children: "            //The current user removed the administrator on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_REMOVE_ADMIN"
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
                children: "                break"
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
                children: "            //The current user mutes users on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_ADD_MUTE"
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
                children: "                break"
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
                children: "            //The current user removes muting on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_REMOVE_MUTE"
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
                children: "                break"
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
                children: "            //The current user sets custom attributes for group members on other devices."
              })
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " GROUP_METADATA_CHANGED"
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
                children: "                break"
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
                children: "                default"
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
                children: "                break"
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
              className: "line"
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "    onThreadEvent"
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
                children: "("
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "        event"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ChatMultiDeviceEvent"
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
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "        target"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
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
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "        usernames"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " Array"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    )"
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
                children: " void"
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
                children: "        //Multi-device notification of message thread messages."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        switch"
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " THREAD_CREATE"
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
                children: "                //The current user creates a message thread on other devices."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "                break"
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " THREAD_DESTROY"
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
                children: "                //The current user destroys a message thread on other devices."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "                break"
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " THREAD_JOIN"
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
                children: "                //The current user joins a message thread on other devices."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "                break"
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " THREAD_LEAVE"
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
                children: "                //The current user leaves the message thread on other devices."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "                break"
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " THREAD_UPDATE"
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
                children: "                //The current user updates the message thread on other devices."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "                break"
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " THREAD_KICK"
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
                children: "                //The current user kicks members out of the message thread on other devices."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "                break"
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
              className: "line"
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "    onMessageRemoved"
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
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "convId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
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
                children: "deviceId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
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
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " void"
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
                children: "        //Roaming message deletion notification."
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
              className: "line"
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "    onConversationEvent"
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
                children: "("
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "        event"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ChatMultiDeviceEvent"
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
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "        convId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
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
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "        convType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ChatConversationType"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    )"
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
                children: " void"
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
                children: "        //Conversation change notification."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        switch"
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " CONVERSATION_PINNED"
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
                children: "                //The current user pins a conversation on other devices."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "                break"
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " CONVERSATION_UNPINNED"
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
                children: "                //The current user unpins a conversation on other devices."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "                break"
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
                children: "            case"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " CONVERSATION_DELETED"
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
                children: "                //The current user deletes a conversation on other devices."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "                break"
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
                children: "                default"
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
                children: "                break"
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
                children: "})();"
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
                children: "//Remove a multi-device listener."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
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
                children: "removeAllMultiDeviceListener"
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
                children: "//Add a multi-device listener."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
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
                children: "addMultiDeviceListener"
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
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "windows",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "windows"
      }), _jsxs(_components.p, {
        children: [`Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
devices per platform up to 10 by going to `, _jsx(_components.strong, {
          children: "Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device"
        }), "."]
      }), _jsx(_components.p, {
        children: "In cases of multiple device login, all logged-in devices synchronize the following information and operations:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;"
        }), `
`, _jsx(_components.li, {
          children: "Friends and group-related operations;"
        }), `
`, _jsx(_components.li, {
          children: "Message-thread-related operations;"
        }), `
`, _jsx(_components.li, {
          children: "Conversation-related operations."
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:"
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Single/multi-device login"
            }), _jsx(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Forced logout strategy"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Single-device login"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "center"
              },
              children: ["The newly logged-in device will force the current device to log out. The logged-out device will receive the ", _jsx(_components.code, {
                children: "onDisconnected"
              }), " event."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Multi-device login"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "center"
              },
              children: ["If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the ", _jsx(_components.code, {
                children: "ConnectionParameters#isFixedDeviceId"
              }), " parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) ", _jsx(_components.code, {
                children: "true"
              }), ": Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - ", _jsx(_components.code, {
                children: "false"
              }), ": Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline."]
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: ["The Agora server provides a RESTful interface to force a specified account to ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-system-registration#forcing-a-user-offline",
          children: "log out from a single device"
        }), "."]
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionEventHandler#onUserDidLoginTooManyDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionEventHandler#onUserDidLoginTooManyDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ChatConnectEventListener#onUserDidLoginFromOtherDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ChatConnectEventListener#onUserDidLoginFromOtherDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsx(_components.h2, {
        id: "understand-the-tech-5",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the login ID list of the other logged-in devices of the current user;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the list of online logged-in devices of the specified account;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Force the specified account to log out from a single device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Force the specified account to log out from all devices;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get operations on other devices."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the name of the login device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the platform of the login device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get notified about multi-device synchronization."
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices."
      }), _jsx(_components.h2, {
        id: "prerequisites-5",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Before starting this procedure, initialize and connect the SDK to the server. See ", _jsx(_components.a, {
          href: "../../get-started-sdk",
          children: "SDK quickstart"
        }), " for details."]
      }), _jsx(_components.h2, {
        id: "implement-multi-device-login-5",
        children: "Implement multi-device login"
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "unity",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "unity"
      }), _jsxs(_components.p, {
        children: [`Agora Chat supports logging in to the same account from up to 4 devices at the same time by default. You can increase the number of
devices per platform up to 10 by going to `, _jsx(_components.strong, {
          children: "Agora Console > Project management > Relevant project > Agora Chat configuration > Features > Multi Device"
        }), "."]
      }), _jsx(_components.p, {
        children: "In cases of multiple device login, all logged-in devices synchronize the following information and operations:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Messages, including online messages, offline messages, push notifications (if the third-party push service is enabled, the offline device receives it), the corresponding receipts and read status, and so on;"
        }), `
`, _jsx(_components.li, {
          children: "Friends and group-related operations;"
        }), `
`, _jsx(_components.li, {
          children: "Message-thread-related operations;"
        }), `
`, _jsx(_components.li, {
          children: "Conversation-related operations."
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following table summarizes the strategy of forcing other devices to log out and the automatic login security check in the single-device and multi-device login use-cases:"
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Single/multi-device login"
            }), _jsx(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Forced logout strategy"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Single-device login"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "center"
              },
              children: ["The newly logged-in device will force the current device to log out. The logged-out device will receive the ", _jsx(_components.code, {
                children: "onDisconnected"
              }), " event."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Multi-device login"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "center"
              },
              children: ["If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. Agora Chat only supports forced logout for the devices on the same end. When multiple ends are logged in, the use of a fixed device ID affects the forced logout strategy. The SDK generates an ID as the unique device identifier. Previously, the SDK used a different random string as the device identifier for each opened tab. Starting from v1.3.1, the SDK has the ", _jsx(_components.code, {
                children: "ConnectionParameters#isFixedDeviceId"
              }), " parameter, which you can set to use a random device ID or a fixed device ID when initializing the SDK: - (Default) ", _jsx(_components.code, {
                children: "true"
              }), ": Use a fixed device ID. The device ID is stored in local storage. Even when multiple devices are logged in, only one tab can be opened in the same browser. If two are opened, the new tab will force the previous one offline. - ", _jsx(_components.code, {
                children: "false"
              }), ": Use a random device ID. Each tab uses a different device ID. When logging in with multiple devices, a user can open multiple tabs in the same browser. If the number of devices exceeds the set number, the newly opened tab will force the first opened tab offline."]
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: ["The Agora server provides a RESTful interface to force a specified account to ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-system-registration#forcing-a-user-offline",
          children: "log out from a single device"
        }), "."]
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionEventHandler#onUserDidLoginTooManyDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ConnectionEventHandler#onUserDidLoginTooManyDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsx(_components.p, {
        children: `Single/multi-device login
Forced logout strategy
Automatic login security check`
      }), _jsxs(_components.p, {
        children: [`Single-device login
The newly logged-in device will force the current device to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ChatConnectEventListener#onUserDidLoginFromOtherDevice"
        }), ` event.
For devices that log in automatically, the device will automatically reconnect to the Agora server after going offline. If the reconnection is successful, the current logged-in device will be forced to log out by default (for multiple devices, the earliest logged-in device will be logged out). If you want to keep the current device logged in, contact `, _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), ". In this use-case, the device that logs in automatically won't be able to log in and will receive error 214, indicating that the number of currently logged-in devices exceeds the limit."]
      }), _jsxs(_components.p, {
        children: [`Multi-device login
If the number of logged-in devices on one end reaches the limit, the device that logged in the latest will force the device that logged in the earliest to log out. The logged-out device will receive the `, _jsx(_components.code, {
          children: "ChatConnectEventListener#onUserDidLoginFromOtherDevice"
        }), " event. Agora Chat only supports forced logout for the devices on the same end."]
      }), _jsx(_components.h2, {
        id: "understand-the-tech-6",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "During initialization, the SDK generates a login ID to identify the device when multiple devices log in and push messages, and sends this ID to the server. The server automatically sends new messages to the user's logged-in device, monitors operations on other devices, and synchronizes multiple devices. The SDK provides the following multi-device use-case functions:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the login ID list of the other logged-in devices of the current user;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the list of online logged-in devices of the specified account;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Force the specified account to log out from a single device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Force the specified account to log out from all devices;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get operations on other devices."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the name of the login device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set the platform of the login device;"
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get notified about multi-device synchronization."
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Chat SDK generates a new unique login ID every time a user logs in and sends the ID to the server. The server automatically sends new messages to the device where the user logs in, and can automatically monitor friend or group operations on other devices."
      }), _jsx(_components.h2, {
        id: "prerequisites-6",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Before starting this procedure, initialize and connect the SDK to the server. See ", _jsx(_components.a, {
          href: "../../get-started-sdk",
          children: "SDK quickstart"
        }), " for details."]
      }), _jsx(_components.h2, {
        id: "implement-multi-device-login-6",
        children: "Implement multi-device login"
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
