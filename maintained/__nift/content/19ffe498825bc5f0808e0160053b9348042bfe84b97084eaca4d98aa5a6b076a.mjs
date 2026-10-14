import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Set DND mode",
  description: "Set push notifications to DND"
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;web&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;windows&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    To optimize the user experience when dealing with a large number of push notifications, Chat SDK provides fine-grained settings for push notifications and do not disturb mode at the app and conversation levels.

    ## Push notification settings [#push-notification-settings]

    | Parameter      | Description                                                                                                                                                                                                                                                                    | App | One-to-one and group chats |
    | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-- | :------------------------- |
    | \`ALL\`          | Receive push notifications for all offline messages.                                                                                                                                                                                                                           | ✓   | ✓                          |
    | \`MENTION_ONLY\` | Receive push notifications only for mentions. This parameter is recommended for group chats. To mention one or more users, pass \`"em_at_list": [ "user1", "user2" ... ]\` to the \`ext\` field when creating a message. To mention all, pass \`"em_at_list": "all"\` to this field. | ✓   | ✓                          |
    | \`NONE\`         | Do not receive push notifications for offline messages.                                                                                                                                                                                                                        | ✓   | ✓                          |

    The push notification setting at the conversation level takes precedence over the setting at the app level. For conversations where the push notification setting is not configured, the app setting is used by default.

    For example, suppose the push notifications for the app are set to \`MENTION_ONLY\` and the push notifications for a given conversation are set to \`ALL\`. A user will receive all push notifications from that conversation, but for all other conversations, they will only receive push notifications for messages that mention them.

    You can specify the DND time period and duration at the app level, and Chat will not send offline push notifications during these two periods. If both the DND time and DND duration are set, the DND mode will take effect for the sum of the two.

    The following table describes the DND time settings:

    | Setting                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | App | One-to-one and group chats |
    | :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-- | :------------------------- |
    | \`SILENT_MODE_INTERVAL\` | The time period for turning on the DND mode, in the \`H:MH:M\` format, using the 24-hour system and accurate to the minute. For example, \`8:30\`-\`10:0\`. The range of hours and minutes in the start time and end time is \`[0,23]\` and \`[0,59]\`, respectively. The DND mode is set in the following way: After the start time and end time are set, the DND mode is triggered every day. For example, if the time period is set to \`8:0\`-\`10:0\`, the DND mode is effective from 8:00 to 10:00 every day. If you set the start time to \`8:0\` and the end time to \`12:0\` at 11:00, the DND mode is effective from 11:00 to 12:00 on the same day, and from 8:00 to 12:00 every day thereafter. If the start time and end time are the same, the DND mode is effective all day. However, if it is set to \`0:0\`-\`0:0\`, the DND mode will be turned off. If the end time is earlier than the start time, the DND mode will take effect from the start time of each day to the end time of the next day. For example, if the start time is \`10:0\` and the end time is \`8:0\`, the DND mode will take effect from 10:00 on that day to 8:00 on the next day. The DND mode can only be enabled during a specified time period each day. Multiple DND time periods are not supported. The new setting will override the previous setting. If both this parameter and \`SILENT_MODE_DURATION\` are set, the DND mode will be in effect during both time periods on the day. For example, if \`SILENT_MODE_INTERVAL\` is set to \`8:0\`-\`10:0\` and \`SILENT_MODE_DURATION\` is set to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00-12:00 on that day and from 8:00-10:00 every day thereafter. | ✓   | ✗                          |
    | \`SILENT_MODE_DURATION\` | The DND duration, in minutes. The value range of the DND duration is \`[0,10080]\`, where \`0\` means the parameter is invalid and \`10080\` means the DND mode lasts for 7 days. Unlike the setting of the DND time period, which takes effect every day, this parameter is valid once. It takes effect immediately after setting. For example, if you set the app-level \`SILENT_MODE_DURATION\` to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00 to 12:00 on the same day. If both this parameter and \`SILENT_MODE_INTERVAL\` are set, the DND mode will be effective during both time periods on the same day. For example, if the app-level \`SILENT_MODE_INTERVAL\` is set to 8:00-10:00 at 8:00 am and the DND duration is set to 240 minutes (4 hours), the app will be in DND mode from 8:00-12:00 now and from 8:00-10:00 every day thereafter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | ✓   | ✓                          |

    If you need to push messages to specific users during the DND period or effective time, set [Force push](./configure-push-notifications).

    For the app and all conversations in the app, the DND setting takes precedence over the push notification setting. For example, suppose a user specifies a DND time period at the app level and sets push notifications to \`ALL\`. The app enters the DND mode during the specified time period, and the user will not receive any push notifications.

    Alternatively, suppose a conversation is assigned a DND time period. The app does not have any DND settings and its push notifications are set to \`ALL\`. During the specified DND time period, the user will not receive any push notifications from this conversation, while push notifications from all other conversations will remain unchanged.

    ## Set up push notifications for the app [#set-up-push-notifications-for-the-app]

    Call \`setSilentModeForAll\` to set app-level push notifications. Set push notifications and DND mode by specifying the \`SilentModeParam\` field, as shown in the following example:

    \`\`\`java
    // Set push notification mode to \`MENTION_ONLY\`.
    SilentModeParam param =  new  SilentModeParam ( SilentModeParam . SilentModeParamType . REMIND_TYPE )
                                    .setRemindType(PushManager.PushRemindType.MENTION_ONLY);
    // Set the offline push do not disturb timer to 15 minutes.
    SilentModeParam param =  new  SilentModeParam ( SilentModeParam . SilentModeParamType . SILENT_MODE_DURATION )
                                    .setSilentModeDuration(15);
    // Set the do not disturb time period for offline push to 8:30 to 15:00.
    SilentModeParam param =  new  SilentModeParam ( SilentModeParam . SilentModeParamType . SILENT_MODE_INTERVAL )
                                    .setSilentModeInterval(new SilentModeTime(8, 30), new SilentModeTime(15, 0));
    // Set up offline push notifications for the app.
    ChatClient.getInstance().pushManager().setSilentModeForAll(param, new ValueCallBack(){});
    \`\`\`

    ## Get the push notification settings of the app [#get-the-push-notification-settings-of-the-app]

    Call \`getSilentModeForAll\` to get the app-level push notification settings, as shown in the following example:

    \`\`\`java
    ChatClient.getInstance().pushManager().getSilentModeForAll(new ValueCallBack(){
        @Override
        public void onSuccess(SilentModeResult result) {
            // Get the push notification method settings of the app.
            PushManager.PushRemindType remindType = result.getRemindType();
            // Get the Unix timestamp of the app's offline push Do Not Disturb expiration.
            long timestamp = result.getExpireTimestamp();
            // Get the start time of the app's offline push do not disturb time period.
            SilentModeTime startTime = result.getSilentModeStartTime();
            startTime . getHour(); // The hour in the start time of the do not disturb time period.
            startTime . getMinute(); // The number of minutes in the start time of the do not disturb time period.
            // Get the end time of the app's offline push do not disturb time period.
            SilentModeTime endTime = result.getSilentModeEndTime();
            endTime . getHour(); // The number of hours in the end time of the do not disturb period.
            endTime . getMinute(); // The number of minutes in the end time of the do not disturb time period.
        }
        @Override
        public void onError(int error, String errorMsg) {}
    });
    \`\`\`

    ## Set push notifications for a single conversation [#set-push-notifications-for-a-single-conversation]

    Call \`setSilentModeForConversation\` to set push notifications for a specified conversation. Configure push notifications and the DND mode by specifying the \`SilentModeParam\` field, as shown in the following example:

    \`\`\`java
    // Set push notification mode to \`MENTION_ONLY\`.
    SilentModeParam param =  new  SilentModeParam ( SilentModeParam . SilentModeParamType . REMIND_TYPE )
                                    .setRemindType(PushManager.PushRemindType.MENTION_ONLY);

    // Set the offline push do not disturb timer to 15 minutes.
    SilentModeParam param =  new  SilentModeParam ( SilentModeParam . SilentModeParamType . SILENT_MODE_DURATION )
                                    .setSilentDuration(15);
    // Set the offline push do not disturb mode for the conversation. Currently, it does not support setting the do not disturb time period for the conversation.
    ChatClient.getInstance().pushManager().setSilentModeForConversation(conversationId, conversationType, param, new ValueCallBack(){});
    \`\`\`

    ## Get push notification settings for a single conversation [#get-push-notification-settings-for-a-single-conversation]

    Call \`getSilentModeForConversation\` to get the push notification settings for a specified conversation, as shown in the following code example:

    \`\`\`java
    ChatClient.getInstance().pushManager().getSilentModeForConversation(conversationId, conversationType, new ValueCallBack(){
        @Override
        public void onSuccess(SilentModeResult result) {
            // Get whether the push notification method is set for the specified conversation.
            boolean enable = result.isConversationRemindTypeEnabled();
            // Check if the conversation has push notifications set.
            if(enable){
                // Get the push notification method for the conversation.
                PushManager.PushRemindType remindType = result.getRemindType();
            }
            // Get the offline push Do Not Disturb expiration Unix timestamp of the conversation.
            long timestamp = result.getExpireTimestamp();
        }
        @Override
        public void onError(int error, String errorMsg) {}
    });
    \`\`\`

    ## Get push notification settings for multiple conversations [#get-push-notification-settings-for-multiple-conversations]

    You can get push notification settings for up to 20 conversations in each call. If a conversation uses app settings or its push notification settings have expired, the returned dictionary does not contain such conversation.

    Call \`getSilentModeForConversations\` to get the push notification settings for multiple conversations, as shown in the following sample code:

    \`\`\`java
    ChatClient.getInstance().pushManager().getSilentModeForConversations(conversationList, new ValueCallBack>(){
        @Override
        public void onSuccess(Map value) {}
        @Override
        public void onError(int error, String errorMsg) {}
    });
    \`\`\`

    ## Clear push notification settings for a single conversation [#clear-push-notification-settings-for-a-single-conversation]

    Call \`clearRemindTypeForConversation\` to clear the push notification type for a specific conversation. After clearing, the conversation will use the app's settings by default.

    The following code example shows how to clear a conversation's push notifications:

    \`\`\`java
    ChatClient.getInstance().pushManager().clearRemindTypeForConversation(conversationId, conversationType, new CallBack(){});
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    To optimize the user experience when dealing with a large number of push notifications, Chat SDK provides fine-grained settings for push notifications and do not disturb mode at the app and conversation levels.

    ## Push notification settings [#push-notification-settings-1]

    | Parameter     | Description                                                                                                                                                                                                                                                                    | App | One-to-one and group chats |
    | :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-- | :------------------------- |
    | \`All\`         | Receive push notifications for all offline messages.                                                                                                                                                                                                                           | ✓   | ✓                          |
    | \`MentionOnly\` | Receive push notifications only for mentions. This parameter is recommended for group chats. To mention one or more users, pass \`"em_at_list": [ "user1", "user2" ... ]\` to the \`ext\` field when creating a message. To mention all, pass \`"em_at_list": "all"\` to this field. | ✓   | ✓                          |
    | \`NONE\`        | Do not receive push notifications for offline messages.                                                                                                                                                                                                                        | ✓   | ✓                          |

    The push notification setting at the conversation level takes precedence over the setting at the app level. For conversations where the push notification setting is not configured, the app setting is used by default.

    For example, suppose the push notifications for the app are set to \`MentionOnly\` and the push notifications for a given conversation are set to \`ALL\`. A user will receive all push notifications from that conversation, but for all other conversations, they will only receive push notifications for messages that mention them.

    After you have completed SDK initialization and successfully logged into the app, you can enable offline push for the app and various types of conversation, and turn off push by setting the Do Not Disturb mode.

    You can specify the DND time period and duration at the app level, and Chat will not send offline push notifications during these two periods. If both the DND time and DND duration are set, the DND mode will take effect for the sum of the two.

    The following table describes the DND time settings:

    | Quiet time parameters                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | App | Single and group chat conversations |
    | :---------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-- | :---------------------------------- |
    | \`silentModeStartTime & silentModeEndTime\` | The time period for turning on the DND mode, in the \`H:MH:M\` format, using the 24-hour system and accurate to the minute. For example, \`8:30\`-\`10:0\`. The range of hours and minutes in the start time and end time is \`[0,23]\` and \`[0,59]\`, respectively. The DND mode is set in the following way: After the start time and end time are set, the DND mode is triggered every day. For example, if the time period is set to \`8:0\`-\`10:0\`, the DND mode is effective from 8:00 to 10:00 every day. If you set the start time to \`8:0\` and the end time to \`12:0\` at 11:00, the DND mode is effective from 11:00 to 12:00 on the same day, and from 8:00 to 12:00 every day thereafter. If the start time and end time are the same, the DND mode is effective all day. However, if it is set to \`0:0\`-\`0:0\`, the DND mode will be turned off. If the end time is earlier than the start time, the DND mode will take effect from the start time of each day to the end time of the next day. For example, if the start time is \`10:0\` and the end time is \`8:0\`, the DND mode will take effect from 10:00 on that day to 8:00 on the next day. The DND mode can only be enabled during a specified time period each day. Multiple DND time periods are not supported. The new setting will override the previous setting. If both this parameter and \`silentModeDuration\` are set, the DND mode will be in effect during both time periods on the day. For example, if \`silentModeDuration\` is set to \`8:0\`-\`10:0\` and \`silentModeDuration\` is set to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00-12:00 on that day and from 8:00-10:00 every day thereafter. | ✓   | ✗                                   |
    | \`silentModeDuration\`                      | The DND duration, in minutes. The value range of the DND duration is \`[0,10080]\`, where \`0\` means the parameter is invalid and \`10080\` means the DND mode lasts for 7 days. Unlike the setting of the DND time period, which takes effect every day, this parameter is valid once. It takes effect immediately after setting. For example, if you set the app-level \`silentModeDuration\` to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00 to 12:00 on the same day. If both this parameter and \`silentModeStartTime & silentModeEndTime\` are set, the DND mode will be effective during both time periods on the same day. For example, if the app-level \`silentModeStartTime & silentModeEndTime\` is set to 8:00-10:00 at 8:00 am and the DND duration is set to 240 minutes (4 hours), the app will be in DND mode from 8:00-12:00 now and from 8:00-10:00 every day thereafter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | ✓   | ✓                                   |

    If you need to push messages to specific users during the DND period or effective time, set [Force push](./configure-push-notifications).

    For the app and all conversations in the app, the DND setting takes precedence over the push notification setting. For example, suppose a user specifies a DND time period at the app level and sets push notifications to \`ALL\`. The app enters the DND mode during the specified time period, and the user will not receive any push notifications.

    Alternatively, suppose a conversation is assigned a DND time period. The app does not have any DND settings and its push notifications are set to \`ALL\`. During the specified DND time period, the user will not receive any push notifications from this conversation, while push notifications from all other conversations will remain unchanged.

    ## Set up push notifications for the app [#set-up-push-notifications-for-the-app-1]

    Call \`setSilentModeForAll\` to set app-level push notifications. Configure push notifications and the DND mode by specifying the \`AgoraChatSilentModeParam\` field, as shown in the following code example:

    \`\`\`objc
    // Set the push notification method to \`MentionOnly\`.
    AgoraChatSilentModeParam *param = [[AgoraChatSilentModeParam alloc]initWithParamType:AgoraChatSilentModeParamTypeRemindType];
        param.remindType = AgoraChatPushRemindTypeMentionOnly;
    // Set up offline push notifications for the app.
    [[AgoraChatClient sharedClient].pushManager setSilentModeForAll:param completion:^(AgoraChatSilentModeResult *aResult, AgoraChatError *aError) {
                if (aError) {
                    NSLog(@"setSilentModeForAll error---%@",aError.errorDescription);
                }
            }];
    // Set the offline push do not disturb timer to 15 minutes.
    AgoraChatSilentModeParam *param = [[AgoraChatSilentModeParam alloc]initWithParamType:AgoraChatSilentModeParamTypeDuration];
        param.silentModeDuration = 15;
    //Set the do not disturb time period for offline push to 8:30 to 15:00.
    AgoraChatSilentModeParam *param = [[AgoraChatSilentModeParam alloc]initWithParamType:AgoraChatSilentModeParamTypeInterval];
        param.silentModeStartTime = [[AgoraChatSilentModeTime alloc]initWithHours:8 minutes:30];
        param.silentModeEndTime = [[AgoraChatSilentModeTime alloc]initWithHours:15 minutes:0];
    \`\`\`

    ## Get the push notification settings of the app [#get-the-push-notification-settings-of-the-app-1]

    Call \`getSilentModeForAllWithCompletion\` to get the app-level push notification settings, as shown in the following code example:

    \`\`\`objc
    [[AgoraChatClient sharedClient].pushManager getSilentModeForAllWithCompletion:^(AgoraChatSilentModeResult *aResult, AgoraChatError *aError) {
                if (!aError) {
                    // Get the push notification method settings of the app.
                    AgoraChatPushRemindType remindType = aResult.remindType;
                    // Get the Unix timestamp of the app's offline push Do Not Disturb expiration.
                    NSTimeInterval ex = aResult.expireTimestamp;
                    // Get the start time of the app's offline push do not disturb time period.
                    AgoraChatSilentModeTime *startTime = aResult.silentModeStartTime;
                    // Get the end time of the offline push do not disturb time period of the app.
                    AgoraChatSilentModeTime *endTime = aResult.silentModeEndTime;
                }else{
                    NSLog(@"getSilentModeForAll error---%@",aError.errorDescription);
                }
            }];
    \`\`\`

    ## Set push notifications for a single conversation [#set-push-notifications-for-a-single-conversation-1]

    Call \`setSilentModeForConversation\` to set push notifications for a specified conversation. Configure push notifications and the DND mode by specifying the \`SilentModeParam\` field, as shown in the following example:

    \`\`\`objc
    // Set the push notification method to \`MentionOnly\`.
    AgoraChatSilentModeParam *param = [[AgoraChatSilentModeParam alloc]initWithParamType:AgoraChatSilentModeParamTypeRemindType];
        param.remindType = AgoraChatPushRemindTypeMentionOnly;

    // Set the offline push do not disturb timer to 15 minutes.
    AgoraChatSilentModeParam *param = [[AgoraChatSilentModeParam alloc]initWithParamType:AgoraChatSilentModeParamTypeDuration];
        param.silentModeDuration = 15;
    // Set the offline push do not disturb mode for the conversation. Currently, it does not support setting the do not disturb time period for the conversation.
    AgoraChatConversationType conversationType = AgoraChatConversationTypeGroupChat;
    [[AgoraChatClient sharedClient].pushManager setSilentModeForConversation:@"conversationId" conversationType:conversationType params:param completion:^(AgoraChatSilentModeResult *aResult, AgoraChatError *aError) {
            if (aError) {
                    NSLog(@"setSilentModeForConversation error---%@",aError.errorDescription);
             }
         }];
    \`\`\`

    ## Get push notification settings for a single conversation [#get-push-notification-settings-for-a-single-conversation-1]

    You can call getSilentModeForConversation to get the push notification settings for a specific conversation, as shown in the following code example:

    \`\`\`objc
    [[AgoraChatClient sharedClient].pushManager getSilentModeForConversation:@"conversationId" conversationType:AgoraChatConversationTypeChat completion:^(AgoraChatSilentModeResult * _Nullable aResult, AgoraChatError * _Nullable aError) {
        }];
    \`\`\`

    ## Get push notification settings for multiple conversations [#get-push-notification-settings-for-multiple-conversations-1]

    You can get push notification settings for up to 20 conversations in each call. If a conversation uses app settings or its push notification settings have expired, the returned dictionary does not contain that conversation. Call  \`getSilentModeForConversations\` to get the push notification settings for multiple conversations, as shown in the following example:

    \`\`\`objc
    AgoraChatConversation* conv1 = [AgoraChatClient.sharedClient.chatManager getConversationWithConvId:@"conversationId1"];
    NSArray *conversations = @[conv1];
        [[AgoraChatClient sharedClient].pushManager getSilentModeForConversations:conversations completion:^(NSDictionary*aResult, AgoraChatError *aError) {
                if (aError) {
                    NSLog(@"getSilentModeForConversations error---%@",aError.errorDescription);
                }
            }];
    \`\`\`

    ## Clear push notification settings for a single conversation [#clear-push-notification-settings-for-a-single-conversation-1]

    Call \`clearRemindTypeForConversation\` to clear the push notification settings for a specified conversation. After clearing, this conversation will use the app's settings by default:

    \`\`\`objc
        [[AgoraChatClient sharedClient].pushManager clearRemindTypeForConversation:@"" conversationType:conversationType completion:^(AgoraChatSilentModeResult *aResult, AgoraChatError *aError) {
                if (aError) {
                    NSLog(@"clearRemindTypeForConversation error---%@",aError.errorDescription);
                }
        }];
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    To optimize the user experience when dealing with a large number of push notifications, Chat SDK provides fine-grained settings for push notifications and DND mode at the app and conversation levels.

    **Push notifications**

    | Setting | Description                                                                                                                                                                                                                                                                                                                                 | App | One-to-one and group chats |
    | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-- | :------------------------- |
    | \`ALL\`   | Receive push notifications for all offline messages.                                                                                                                                                                                                                                                                                        | ✓   | ✓                          |
    | \`AT\`    | Only receive push notifications for mentions.  This parameter is recommended for group chats. If a user wants to mention one or more users, they need to pass \`"em_at_list": [ "user1", "user2" ... ]\` to the \`ext\` field when creating a message; if they want to mention everyone, they need to pass \`"em_at_list": "all"\` to this field. | ✓   | ✓                          |
    | \`NONE\`  | Do not receive push notifications for offline messages.                                                                                                                                                                                                                                                                                     | ✓   | ✓                          |

    The push notification setting at the conversation level takes precedence over the setting at the app level. For conversations where push notifications are not configured, the app setting is used by default.

    For example, suppose the push notifications are set to \`AT\` for the app and to \`ALL\` for a given conversation. The user will receive all push notifications from that conversation, but for all other conversations, they will only receive push notifications for mentions.

    **Do Not Disturb**

    After you have completed SDK initialization and successfully logged into the app, you can enable offline push for the app and various types of conversations, as well as turning off push by setting the DND mode.

    You can specify the DND time period and duration at the app level, and Chat will not send offline push notifications during these two periods. If both the DND time and DND duration are set, the DND mode will take effect for the sum of the two.

    The following table describes the DND time settings:

    | Setting               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | App | One-to-one and group chats |
    | :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-- | :------------------------- |
    | \`startTime & endTime\` | The time period for turning on the DND mode, in the \`H:MH:M\` format, using the 24-hour system and accurate to the minute. For example, \`8:30\`-\`10:0\`, the range of hours and minutes in the start time and end time is \`[0,23]\` and \`[0,59]\`, respectively. The DND mode is set in the following way: After the start time and end time are set, the DND mode is triggered every day. For example, if the time period is set to \`8:0\`-\`10:0\`, the DND mode is effective from 8:00 to 10:00 every day. If you set the start time to \`8:0\` and the end time to \`12:0\` at 11:00, the DND mode is effective from 11:00 to 12:00 on the same day, and from 8:00 to 12:00 every day thereafter. If the start time and end time are the same, the DND mode is effective all day. However, if it is set to \`0:0\`-\`0:0\`, the DND mode is turned off. If the end time is earlier than the start time, the DND mode takes effect from the start time of each day to the end time of the next day. For example, if the start time is \`10:0\` and the end time is \`8:0\`, the DND mode takes effect from 10:00 on the same day to 8:00 on the next day. Currently, the DND mode is only supported in a specified time period each day. Multiple DND time periods are not supported. The new setting will override the previous setting. If both this parameter and \`duration\` are set, the DND mode takes effect in both time periods on the same day. For example, if \`startTime & endTime\` is set to \`8:0\`-\`10:0\` at 8:00 AM and \`duration\` is set to 240 minutes (4 hours), the app will be in DND mode from 8:00-12:00 on the same day and from 8:00-10:0 every day thereafter. | ✓   | ✗                          |
    | \`duration\`            | The duration of the DND mode, in minutes. The value range of the DND duration is \`[0,10080]\`, \`0\` means that the parameter is invalid, and \`10080\` means that the DND mode lasts for 7 days. Unlike the setting of the DND time period, which takes effect every day, this parameter is valid once. It takes effect immediately after setting. For example, if the app-level \`duration\` is set to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00 to 12:00 on the same day.  - If both this parameter and \`startTime & endTime\` are set, the DND mode will take effect in both time periods on the same day. For example, if the app-level \`startTime & endTime\` is set to 8:00-10:00 at 8:00 AM, and the DND duration is set to 240 minutes (4 hours), the app will be in DND mode from 8:00 to 12:00 and from 8:00 to 10:00 every day thereafter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | ✓   | ✓                          |

    If you need to push messages to specific users during the DND period or effective time, set [Force push](./configure-push-notifications).

    For the app and all conversations in the app, the DND mode setting takes precedence over the push notification setting. For example, suppose you specify a DND time period at the app level and set push notifications for a specified conversation to \`ALL\` . The app enters the DND mode during the specified time period, and you will not receive any push notifications.

    Alternatively, suppose a conversation is assigned a quiet time period, and the app does not have any quiet settings and its push notifications are set to \`ALL\`. During the specified quiet time, you will not receive any push notifications from this conversation, while push notifications from all other conversations remain unchanged.

    ### Set up push notifications for the app [#set-up-push-notifications-for-the-app-2]

    Call \`setSilentModeForAll\` to set app-level push notifications. Configure the push notification and DND settings by specifying the \`paramType\` field, as shown in the following code example:

    \`\`\`javascript
    /**
      options // Push notification configuration options.
      options: {
        paramType: 0, // Push notification method.
        remindType: 'ALL' // Can be set to \`ALL\`, \`AT\` or \`NONE\`.
      }
      options: {
        paramType: 1, // Do not disturb duration.
        duration: 7200000 // Do not disturb duration, in milliseconds.
      }
      options: {
        paramType: 2, // Do not disturb time period.
        startTime: {
          hours: 8, // The number of hours in the start time of the do not disturb period.
          minutes: 0 // The number of minutes in the start time of the do not disturb period.
        }，
        endTime: {
          hours: 12, // The number of hours in the end time of the do not disturb period.
          minutes: 0 // The number of minutes in the end time of the do not disturb period.
        }
      }
    */
    const params = {
      options: {
        paramType: 0,
        remindType: "ALL",
      },
    };
    chatClient.setSilentModeForAll(params);
    \`\`\`

    ### Get the push notification settings of the app [#get-the-push-notification-settings-of-the-app-2]

    Call \`getSilentModeForAll\` to get the push notification settings of the app. The sample code is as follows:

    \`\`\`javascript
    chatClient.getSilentModeForAll();
    \`\`\`

    ### Set push notifications for a single conversation [#set-push-notifications-for-a-single-conversation-2]

    Call \`setSilentModeForConversation\` to configure the push notification settings for a specified conversation. The sample code is as follows:

    \`\`\`javascript
    /**
      const params = {
        conversationId: 'conversationId', // Conversation ID: For one-to-one chat, it is the other party's user ID; for group chat, it is the group ID.
        type: 'singleChat', // Conversation type: singleChat (one-to-one chat), groupChat (group chat).
        options: {
          paramType: 0, // Push notification settings.
          remindType: 'ALL' // Can be set to \`ALL\`, \`AT\` or \`NONE\`.
        }
      }

      const params = {
        conversationId: 'conversationId',
        type: 'groupChat',
        options: {
          paramType: 1, // Do not disturb duration.
          duration: 7200000 // Do not disturb duration, in milliseconds.
        }
      }

      const params = {
        conversationId: 'conversationId',
        type: 'chatRoom',
        options: {
          paramType: 2, // Do not disturb time period.
          startTime: {
            hours: 8, // The number of hours in the start time of the do not disturb period.
            minutes: 0 // The number of minutes in the start time of the do not disturb period.
          }，
          endTime: {
            hours: 12, // The number of hours in the end time of the do not disturb period.
            minutes: 0 // The number of minutes in the end time of the do not disturb period.
          }
        }
      }
    */
    const params = {
      conversationId: "conversationId",
      type: "groupChat",
      options: {
        paramType: 0,
        remindType: "ALL",
      },
    };
    chatClient.setSilentModeForConversation(params);
    \`\`\`

    ### Get push notification settings for a single conversation [#get-push-notification-settings-for-a-single-conversation-2]

    Call \`getSilentModeForConversation\` to get the push notification settings for a single conversation. The sample code is as follows:

    \`\`\`javascript
    const params = {
      conversationId: " conversationId ", // Conversation ID: For one-to-one chat, it is the other party's user ID; for group chat, it is the group ID.
      type: " singleChat ", // Conversation type: singleChat is a one-to-one chat, groupChat is a group chat.
    };
    chatClient.getSilentModeForConversation(params);
    \`\`\`

    ### Get push notification settings for multiple conversations [#get-push-notification-settings-for-multiple-conversations-2]

    1. You can get push notification settings for up to 20 conversations at a time.
    2. If the conversation uses app settings or its push notification settings have expired, the returned dictionary does not contain this conversation.

    Call \`getSilentModeForConversations\` to get the push notification settings for multiple conversations. The sample code is as follows :

    \`\`\`javascript
    const params = {
      conversationList: [
        {
          id: " conversationId ", // Conversation ID: For one-to-one chat, it is the other party's user ID; for group chat, it is the group ID.
          type: " singleChat ", // Conversation type: singleChat is a one-to-one chat, groupChat is a group chat.
        },
        {
          id: "conversationId",
          type: "groupChat",
        },
      ],
    };
    chatClient.getSilentModeForConversations(params);
    \`\`\`

    ### Clear push notification settings for a single conversation [#clear-push-notification-settings-for-a-single-conversation-2]

    Call \`clearRemindTypeForConversation\` to clear the push notification type settings for a specified conversation. After clearing, this conversation will use the app's settings by default. The sample code is as follows:

    \`\`\`javascript
    const params = {
      conversationId: " conversationId ", // Conversation ID: For one-to-one chat, it is the other party's user ID; for group chat, it is the group ID.
      type: " groupChat ", // Conversation type: singleChat is a one-to-one chat, groupChat is a group chat.
    };
    chatClient.clearRemindTypeForConversation(params);
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    To optimize the user experience when dealing with a large number of push notifications, Chat SDK provides fine-grained settings for push notifications and do not disturb mode at the app and conversation levels.

    ## Push notification settings [#push-notification-settings-2]

    | Parameter      | Description                                                                                                                                                                                                                                                                    | App | One-to-one and group chats |
    | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-- | :------------------------- |
    | \`ALL\`          | Receive push notifications for all offline messages.                                                                                                                                                                                                                           | ✓   | ✓                          |
    | \`MENTION_ONLY\` | Receive push notifications only for mentions. This parameter is recommended for group chats. To mention one or more users, pass \`"em_at_list": [ "user1", "user2" ... ]\` to the \`ext\` field when creating a message. To mention all, pass \`"em_at_list": "all"\` to this field. | ✓   | ✓                          |
    | \`NONE\`         | Do not receive push notifications for offline messages.                                                                                                                                                                                                                        | ✓   | ✓                          |

    The push notification setting at the conversation level takes precedence over the setting at the app level. For conversations where the push notification setting is not configured, the app setting is used by default.

    For example, suppose the push notifications for the app are set to \`MENTION_ONLY\` and the push notifications for a given conversation are set to \`ALL\`. A user will receive all push notifications from that conversation, but for all other conversations, they will only receive push notifications for messages that mention them.

    You can specify the DND time period and duration at the app level, and Chat will not send offline push notifications during these two periods. If both the DND time and DND duration are set, the DND mode will take effect for the sum of the two.

    The following table describes the DND time settings:

    | Setting                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | App | One-to-one and group chats |
    | :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-- | :------------------------- |
    | \`SILENT_MODE_INTERVAL\` | The time period for turning on the DND mode, in the \`H:MH:M\` format, using the 24-hour system and accurate to the minute. For example, \`8:30\`-\`10:0\`. The range of hours and minutes in the start time and end time is \`[0,23]\` and \`[0,59]\`, respectively. The DND mode is set in the following way: After the start time and end time are set, the DND mode is triggered every day. For example, if the time period is set to \`8:0\`-\`10:0\`, the DND mode is effective from 8:00 to 10:00 every day. If you set the start time to \`8:0\` and the end time to \`12:0\` at 11:00, the DND mode is effective from 11:00 to 12:00 on the same day, and from 8:00 to 12:00 every day thereafter. If the start time and end time are the same, the DND mode is effective all day. However, if it is set to \`0:0\`-\`0:0\`, the DND mode will be turned off. If the end time is earlier than the start time, the DND mode will take effect from the start time of each day to the end time of the next day. For example, if the start time is \`10:0\` and the end time is \`8:0\`, the DND mode will take effect from 10:00 on that day to 8:00 on the next day. The DND mode can only be enabled during a specified time period each day. Multiple DND time periods are not supported. The new setting will override the previous setting. If both this parameter and \`SILENT_MODE_DURATION\` are set, the DND mode will be in effect during both time periods on the day. For example, if \`SILENT_MODE_INTERVAL\` is set to \`8:0\`-\`10:0\` and \`SILENT_MODE_DURATION\` is set to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00-12:00 on that day and from 8:00-10:00 every day thereafter. | ✓   | ✗                          |
    | \`SILENT_MODE_DURATION\` | The DND duration, in minutes. The value range of the DND duration is \`[0,10080]\`, where \`0\` means the parameter is invalid and \`10080\` means the DND mode lasts for 7 days. Unlike the setting of the DND time period, which takes effect every day, this parameter is valid once. It takes effect immediately after setting. For example, if you set the app-level \`SILENT_MODE_DURATION\` to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00 to 12:00 on the same day. If both this parameter and \`SILENT_MODE_INTERVAL\` are set, the DND mode will be effective during both time periods on the same day. For example, if the app-level \`SILENT_MODE_INTERVAL\` is set to 8:00-10:00 at 8:00 am and the DND duration is set to 240 minutes (4 hours), the app will be in DND mode from 8:00-12:00 now and from 8:00-10:00 every day thereafter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | ✓   | ✓                          |

    If you need to push messages to specific users during the DND period or effective time, set [Force push](./configure-push-notifications).

    For the app and all conversations in the app, the DND setting takes precedence over the push notification setting. For example, suppose a user specifies a DND time period at the app level and sets push notifications to \`ALL\`. The app enters the DND mode during the specified time period, and the user will not receive any push notifications.

    Alternatively, suppose a conversation is assigned a DND time period. The app does not have any DND settings and its push notifications are set to \`ALL\`. During the specified DND time period, the user will not receive any push notifications from this conversation, while push notifications from all other conversations will remain unchanged.

    ## Set up push notifications for the app [#set-up-push-notifications-for-the-app-3]

    Call \`setSilentModeForAll\` to set app-level push notifications. Set push notifications and DND mode by specifying the \`ChatSilentModeParam\` field, as shown in the following example:

    \`\`\`dart
    //Set push notification mode to \`MENTION_ONLY\`.
    ChatSilentModeParam param = ChatSilentModeParam.remindType(ChatPushRemindType.MENTION_ONLY);
    //Set the offline push do not disturb timer to 15 minutes.
    ChatSilentModeParam param = ChatSilentModeParam.silentDuration(15);
    //Set the do not disturb time period for offline push to 8:30 to 15:00.
    ChatSilentModeParam param = ChatSilentModeParam.silentModeInterval(
      startTime: ChatSilentModeTime(hour: 8, minute: 30),
      endTime: ChatSilentModeTime(hour: 15, minute: 0),
    );
    try {
      //Set up offline push notifications for the app.
      await ChatClient.getInstance.pushManager.setSilentModeForAll(param: param);
    } on ChatError catch (e) {}
    \`\`\`

    ## Get the push notification settings of the app [#get-the-push-notification-settings-of-the-app-3]

    Call \`fetchSilentModeForAll\` to retrieve the app-level push notification settings, as shown in the following example:

    \`\`\`dart
    try {
      ChatSilentModeResult result =
          await ChatClient.getInstance.pushManager.fetchSilentModeForAll();
      // Get the push notification method settings of the app.
      ChatPushRemindType? remindType = result.remindType;
      // Get the Unix timestamp of the app's offline push Do Not Disturb expiration.
      int? timestamp = result.expireTimestamp;
      // Get the start time of the app's offline push do not disturb time period.
      ChatSilentModeTime? startTime = result.startTime;
      // The number of hours in which the quiet time period starts.
      startTime?.hour;
      // The number of minutes in the start time of the do not disturb period.
      startTime?.minute;
      // Get the end time of the offline push do not disturb time period of the app.
      ChatSilentModeTime? endTime = result.endTime;
      // The number of hours in which the quiet time period ends.
      endTime?.hour;
      // The number of minutes in the end time of the do not disturb period.
      endTime?.minute;
    } on ChatError catch (e) {}
    \`\`\`

    ## Set push notifications for a single conversation [#set-push-notifications-for-a-single-conversation-3]

    Call \`setSilentModeForConversation\` to set push notifications for a specified conversation. Configure push notifications and the DND mode by specifying the \`SilentModeParam\` field, as shown in the following example :

    \`\`\`dart
    //Set push notification mode to \`MENTION_ONLY\`.
    ChatSilentModeParam param = ChatSilentModeParam.remindType(ChatPushRemindType.MENTION_ONLY);
    //Set the offline push do not disturb timer to 15 minutes.
    ChatSilentModeParam param = ChatSilentModeParam.silentDuration(15);
    try {
      //Set the offline push do not disturb mode for the conversation. Currently, it does not support setting the do not disturb time period for the conversation.
      ChatClient.getInstance.pushManager.setConversationSilentMode(
        conversationId: conversationId,
        type: conversationType,
        stop: stop,
      );
    } on ChatError catch (e) {}
    \`\`\`

    ## Get push notification settings for a single conversation [#get-push-notification-settings-for-a-single-conversation-3]

    Call \`fetchConversationSilentMode\` to retrieve the push notification setting for a specified conversation, as shown in the following example:

    \`\`\`dart
    try {
      //Set the offline push do not disturb mode for the conversation. Currently, it does not support setting the do not disturb time period for the conversation.
      ChatSilentModeResult result =
          await ChatClient.getInstance.pushManager.fetchConversationSilentMode(
        conversationId: conversationId,
        type: conversationType,
      );
      //Get the push notification method for the conversation.
      result.remindType;
      // Get the offline push Do Not Disturb expiration Unix timestamp of the conversation.
      result.expireTimestamp;
    } on ChatError catch (e) {}
    \`\`\`

    ## Get push notification settings for multiple conversations [#get-push-notification-settings-for-multiple-conversations-3]

    You can get push notification settings for up to 20 conversations in each call. If a conversation uses app settings or its push notification settings have expired, the returned dictionary does not contain that conversation.

    Call \`fetchSilentModeForConversations\` to retrieve push notification settings for multiple conversations, as shown in the following sample:

    \`\`\`dart
    try {
      Map map = await ChatClient.getInstance.pushManager.fetchSilentModeForConversations(conversationList);
    } on ChatError catch (e) {}
    \`\`\`

    ## Clear push notification settings for a single conversation [#clear-push-notification-settings-for-a-single-conversation-3]

    Call \`clearRemindTypeForConversation\` to clear the push notification type for a specific conversation. After clearing, the conversation will use the app's settings by default:

    \`\`\`dart
    try {
      await ChatClient.getInstance.pushManager.removeConversationSilentMode(conversationId: conversationId, type: conversationType);
    } on ChatError catch (e) {}
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    To optimize the user experience when dealing with a large number of push notifications, Chat SDK provides fine-grained settings for push notifications and do not disturb mode at the app and conversation levels.

    ## Push notification settings [#push-notification-settings-3]

    | Parameter      | Description                                                                                                                                                                                                                                                                    | App | One-to-one and group chats |
    | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-- | :------------------------- |
    | \`ALL\`          | Receive push notifications for all offline messages.                                                                                                                                                                                                                           | ✓   | ✓                          |
    | \`MENTION_ONLY\` | Receive push notifications only for mentions. This parameter is recommended for group chats. To mention one or more users, pass \`"em_at_list": [ "user1", "user2" ... ]\` to the \`ext\` field when creating a message. To mention all, pass \`"em_at_list": "all"\` to this field. | ✓   | ✓                          |
    | \`NONE\`         | Do not receive push notifications for offline messages.                                                                                                                                                                                                                        | ✓   | ✓                          |

    The push notification setting at the conversation level takes precedence over the setting at the app level. For conversations where the push notification setting is not configured, the app setting is used by default.

    For example, suppose the push notifications for the app are set to \`MENTION_ONLY\` and the push notifications for a given conversation are set to \`ALL\`. A user will receive all push notifications from that conversation, but for all other conversations, they will only receive push notifications for messages that mention them.

    You can specify the DND time period and duration at the app level, and Chat will not send offline push notifications during these two periods. If both the DND time and DND duration are set, the DND mode will take effect for the sum of the two.

    The following table describes the DND time settings:

    | Setting               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | App | One-to-one and group chats |
    | :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-- | :------------------------- |
    | \`startTime & endTime\` | For example, \`8:30\`-\`10:0\`. The range of hours and minutes in the start time and end time is \`[0,23]\` and \`[0,59]\`, respectively. The DND mode is set in the following way: After the start time and end time are set, the DND mode is triggered every day. For example, if the time period is set to \`8:0\`-\`10:0\`, the DND mode is effective from 8:00 to 10:00 every day. If you set the start time to \`8:0\` and the end time to \`12:0\` at 11:00, the DND mode is effective from 11:00 to 12:00 on the same day, and from 8:00 to 12:00 every day thereafter. If the start time and end time are the same, the DND mode is effective all day. However, if it is set to \`0:0\`-\`0:0\`, the DND mode will be turned off. If the end time is earlier than the start time, the DND mode will take effect from the start time of each day to the end time of the next day. For example, if the start time is \`10:0\` and the end time is \`8:0\`, the DND mode will take effect from 10:00 on that day to 8:00 on the next day. The DND mode can only be enabled during a specified time period each day. Multiple DND time periods are not supported. The new setting will override the previous setting. If both this parameter and \`expireTimestamp\` are set, the DND mode will be in effect during both time periods on the day. For example, if \`startTime & endTime\` is set to \`8:0\`-\`10:0\` and \`expireTimestamp\` is set to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00-12:00 on that day and from 8:00-10:00 every day thereafter. | ✓   | ✗                          |
    | \`expireTimestamp\`     | The DND duration, in minutes. The value range of the DND duration is \`[0,10080]\`, where \`0\` means the parameter is invalid and \`10080\` means the DND mode lasts for 7 days. Unlike the setting of the DND time period, which takes effect every day, this parameter is valid once. It takes effect immediately after setting. For example, if you set the app-level \`expireTimestamp\` to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00 to 12:00 on the same day. If both this parameter and \`SILENT_MODE_INTERVAL\` are set, the DND mode will be effective during both time periods on the same day. For example, if the app-level \`startTime & endTime\` is set to 8:00-10:00 at 8:00 am and the DND duration is set to 240 minutes (4 hours), the app will be in DND mode from 8:00-12:00 now and from 8:00-10:00 every day thereafter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | ✓   | ✓                          |

    If you need to push messages to specific users during the DND period or effective time, set [Force push](./configure-push-notifications).

    For the app and all conversations in the app, the DND setting takes precedence over the push notification setting. For example, suppose a user specifies a DND time period at the app level and sets push notifications to \`ALL\`. The app enters the DND mode during the specified time period, and the user will not receive any push notifications.

    Alternatively, suppose a conversation is assigned a DND time period. The app does not have any DND settings and its push notifications are set to \`ALL\`. During the specified DND time period, the user will not receive any push notifications from this conversation, while push notifications from all other conversations will remain unchanged.

    ## Set up push notifications for the app [#set-up-push-notifications-for-the-app-4]

    Call \`setSilentModeForAll\` to set app-level push notifications. Set the push notifications and DND mode by specifying the \`ChatSilentModeParam\` field, as shown in the following example:

    \`\`\`typescript
    // convId: conversation ID.
    // convType: conversation type.
    // Set the push notification method to \`MENTION_ONLY\`.
    const option = ChatSilentModeParam.constructorWithNotification(
      ChatPushRemindType.MENTION_ONLY
    );
    // Set the do not disturb time to 10 minutes.
    const option = ChatSilentModeParam.constructorWithDuration(10);
    // Set the Do Not Disturb time period to 10:10-11:00.
    const option = ChatSilentModeParam.constructorWithPeriod({
      startTime: new ChatSilentModeTime({ hour: 10, minute: 10 }),
      endTime: new ChatSilentModeTime({ hour: 11, minute: 10 }),
    });
    // Set up offline push notifications for the app.
    ChatClient.getInstance()
      .pushManager.setSilentModeForAll(option)
      .then(() => {
        console.log("Succeeded in setting the push notification.");
      })
      .catch((reason) => {
        console.log("Failed to set the push notification.", reason);
      });
    \`\`\`

    ## Get the push notification settings of the app [#get-the-push-notification-settings-of-the-app-4]

    Call \`fetchSilentModeForAll\` to retrieve the app-level push notification settings, as shown in the following code example:

    \`\`\`typescript
    ChatClient.getInstance()
      .pushManager.fetchSilentModeForAll()
      .then((result) => {
        console.log("Succeeded in getting the push notification settings of the app.", result);
      })
      .catch((reason) => {
        console.log("Failed to get the push notification settings of the app.", reason);
      });
    \`\`\`

    ## Set push notifications for a single conversation [#set-push-notifications-for-a-single-conversation-4]

    Call \`setSilentModeForConversation\` to set push notifications for a specified conversation. Set the push notifications and DND mode by specifying the \`ChatSilentModeParam\` field, as shown in the following example:

    \`\`\`typescript
    // convId: conversation ID.
    // convType: conversation type.
    // Set the push notification method to \`MENTION_ONLY\`.
    const option = ChatSilentModeParam.constructorWithNotification(
      ChatPushRemindType.MENTION_ONLY
    );
    // Set the do not disturb time to 10 minutes.
    const option = ChatSilentModeParam.constructorWithDuration(10);
    // Set the Do Not Disturb time period to 10:10-11:00.
    const option = ChatSilentModeParam.constructorWithPeriod({
      startTime: new ChatSilentModeTime({ hour: 10, minute: 10 }),
      endTime: new ChatSilentModeTime({ hour: 11, minute: 10 }),
    });
    // Set push notification for the specified conversation.
    ChatClient.getInstance()
      .pushManager.setSilentModeForConversation({
        invited ,
        convType,
        option,
      })
      .then(() => {
        console.log("Succeeded in getting the push notification settings of the conversation.");
      })
      .catch((reason) => {
        console.log("Failed to get the push notification settings of the conversation.", reason);
      });
    \`\`\`

    ## Get push notifications for a single conversation [#get-push-notifications-for-a-single-conversation]

    Call \`fetchSilentModeForConversation\` to retrieve the push notification settings for a specified conversation, as shown in the following example:

    \`\`\`typescript
    // convId: conversation ID.
    // convType: conversation type.
    ChatClient.getInstance()
      .pushManager.fetchSilentModeForConversation({
        invited ,
        convType,
      })
      .then(() => {
        console.log("Succeeded in getting the push notification settings of the conversation.");
      })
      .catch((reason) => {
        console.log("Failed to get the push notification settings of the conversation.", reason);
      });
    \`\`\`

    ## Get push notification settings for multiple conversations [#get-push-notification-settings-for-multiple-conversations-4]

    You can get push notification settings for up to 20 conversations in each call. If a conversation uses app settings or its push notification settings have expired, the returned dictionary does not contain that conversation.

    Call \`fetchSilentModeForConversations\` to retrieve push notification settings for multiple conversations, as shown in the following example:

    \`\`\`typescript
    // conversations: conversation list.
    ChatClient.getInstance()
      .pushManager.fetchSilentModeForConversations(conversations)
      .then(() => {
        console.log("Succeeded in getting the conversation list.");
      })
      .catch((reason) => {
        console.log("Failed to get the conversation list.", reason);
      });
    \`\`\`

    ## Clear push notification settings for a single conversation [#clear-push-notification-settings-for-a-single-conversation-4]

    Call \`removeSilentModeForConversation\` to clear the push notification mode settings for a specific conversation. After clearing, the conversation will use the app's settings by default.

    The following code example shows how to clear a conversation's push notifications:

    \`\`\`typescript
    // convId: conversation ID.
    // convType: conversation type.
    ChatClient.getInstance()
      .pushManager.removeSilentModeForConversation({
        invited ,
        convType,
      })
      .then(() => {
        console.log("Succeeded in deleting the push notification settings of the conversation.");
      })
      .catch((reason) => {
        console.log("Failed to delete the push notification settings of the conversation.", reason);
      });
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    **This feature is not supported for this platform.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    **This feature is not supported for this platform.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To optimize the user experience when dealing with a large number of push notifications, Chat SDK provides fine-grained settings for push notifications and do not disturb mode at the app and conversation levels."
  }, {
    heading: "push-notification-settings",
    content: "Parameter"
  }, {
    heading: "push-notification-settings",
    content: "Description"
  }, {
    heading: "push-notification-settings",
    content: "App"
  }, {
    heading: "push-notification-settings",
    content: "One-to-one and group chats"
  }, {
    heading: "push-notification-settings",
    content: "`ALL`"
  }, {
    heading: "push-notification-settings",
    content: "Receive push notifications for all offline messages."
  }, {
    heading: "push-notification-settings",
    content: "✓"
  }, {
    heading: "push-notification-settings",
    content: "✓"
  }, {
    heading: "push-notification-settings",
    content: "`MENTION_ONLY`"
  }, {
    heading: "push-notification-settings",
    content: 'Receive push notifications only for mentions. This parameter is recommended for group chats. To mention one or more users, pass `"em_at_list": [ "user1", "user2" ... ]` to the `ext` field when creating a message. To mention all, pass `"em_at_list": "all"` to this field.'
  }, {
    heading: "push-notification-settings",
    content: "✓"
  }, {
    heading: "push-notification-settings",
    content: "✓"
  }, {
    heading: "push-notification-settings",
    content: "`NONE`"
  }, {
    heading: "push-notification-settings",
    content: "Do not receive push notifications for offline messages."
  }, {
    heading: "push-notification-settings",
    content: "✓"
  }, {
    heading: "push-notification-settings",
    content: "✓"
  }, {
    heading: "push-notification-settings",
    content: "The push notification setting at the conversation level takes precedence over the setting at the app level. For conversations where the push notification setting is not configured, the app setting is used by default."
  }, {
    heading: "push-notification-settings",
    content: "For example, suppose the push notifications for the app are set to `MENTION_ONLY` and the push notifications for a given conversation are set to `ALL`. A user will receive all push notifications from that conversation, but for all other conversations, they will only receive push notifications for messages that mention them."
  }, {
    heading: "push-notification-settings",
    content: "You can specify the DND time period and duration at the app level, and Chat will not send offline push notifications during these two periods. If both the DND time and DND duration are set, the DND mode will take effect for the sum of the two."
  }, {
    heading: "push-notification-settings",
    content: "The following table describes the DND time settings:"
  }, {
    heading: "push-notification-settings",
    content: "Setting"
  }, {
    heading: "push-notification-settings",
    content: "Description"
  }, {
    heading: "push-notification-settings",
    content: "App"
  }, {
    heading: "push-notification-settings",
    content: "One-to-one and group chats"
  }, {
    heading: "push-notification-settings",
    content: "`SILENT_MODE_INTERVAL`"
  }, {
    heading: "push-notification-settings",
    content: "The time period for turning on the DND mode, in the `H:MH:M` format, using the 24-hour system and accurate to the minute. For example, `8:30`-`10:0`. The range of hours and minutes in the start time and end time is `[0,23]` and `[0,59]`, respectively. The DND mode is set in the following way: After the start time and end time are set, the DND mode is triggered every day. For example, if the time period is set to `8:0`-`10:0`, the DND mode is effective from 8:00 to 10:00 every day. If you set the start time to `8:0` and the end time to `12:0` at 11:00, the DND mode is effective from 11:00 to 12:00 on the same day, and from 8:00 to 12:00 every day thereafter. If the start time and end time are the same, the DND mode is effective all day. However, if it is set to `0:0`-`0:0`, the DND mode will be turned off. If the end time is earlier than the start time, the DND mode will take effect from the start time of each day to the end time of the next day. For example, if the start time is `10:0` and the end time is `8:0`, the DND mode will take effect from 10:00 on that day to 8:00 on the next day. The DND mode can only be enabled during a specified time period each day. Multiple DND time periods are not supported. The new setting will override the previous setting. If both this parameter and `SILENT_MODE_DURATION` are set, the DND mode will be in effect during both time periods on the day. For example, if `SILENT_MODE_INTERVAL` is set to `8:0`-`10:0` and `SILENT_MODE_DURATION` is set to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00-12:00 on that day and from 8:00-10:00 every day thereafter."
  }, {
    heading: "push-notification-settings",
    content: "✓"
  }, {
    heading: "push-notification-settings",
    content: "✗"
  }, {
    heading: "push-notification-settings",
    content: "`SILENT_MODE_DURATION`"
  }, {
    heading: "push-notification-settings",
    content: "The DND duration, in minutes. The value range of the DND duration is `[0,10080]`, where `0` means the parameter is invalid and `10080` means the DND mode lasts for 7 days. Unlike the setting of the DND time period, which takes effect every day, this parameter is valid once. It takes effect immediately after setting. For example, if you set the app-level `SILENT_MODE_DURATION` to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00 to 12:00 on the same day. If both this parameter and `SILENT_MODE_INTERVAL` are set, the DND mode will be effective during both time periods on the same day. For example, if the app-level `SILENT_MODE_INTERVAL` is set to 8:00-10:00 at 8:00 am and the DND duration is set to 240 minutes (4 hours), the app will be in DND mode from 8:00-12:00 now and from 8:00-10:00 every day thereafter."
  }, {
    heading: "push-notification-settings",
    content: "✓"
  }, {
    heading: "push-notification-settings",
    content: "✓"
  }, {
    heading: "push-notification-settings",
    content: "If you need to push messages to specific users during the DND period or effective time, set Force push."
  }, {
    heading: "push-notification-settings",
    content: "For the app and all conversations in the app, the DND setting takes precedence over the push notification setting. For example, suppose a user specifies a DND time period at the app level and sets push notifications to `ALL`. The app enters the DND mode during the specified time period, and the user will not receive any push notifications."
  }, {
    heading: "push-notification-settings",
    content: "Alternatively, suppose a conversation is assigned a DND time period. The app does not have any DND settings and its push notifications are set to `ALL`. During the specified DND time period, the user will not receive any push notifications from this conversation, while push notifications from all other conversations will remain unchanged."
  }, {
    heading: "set-up-push-notifications-for-the-app",
    content: "Call `setSilentModeForAll` to set app-level push notifications. Set push notifications and DND mode by specifying the `SilentModeParam` field, as shown in the following example:"
  }, {
    heading: "get-the-push-notification-settings-of-the-app",
    content: "Call `getSilentModeForAll` to get the app-level push notification settings, as shown in the following example:"
  }, {
    heading: "set-push-notifications-for-a-single-conversation",
    content: "Call `setSilentModeForConversation` to set push notifications for a specified conversation. Configure push notifications and the DND mode by specifying the `SilentModeParam` field, as shown in the following example:"
  }, {
    heading: "get-push-notification-settings-for-a-single-conversation",
    content: "Call `getSilentModeForConversation` to get the push notification settings for a specified conversation, as shown in the following code example:"
  }, {
    heading: "get-push-notification-settings-for-multiple-conversations",
    content: "You can get push notification settings for up to 20 conversations in each call. If a conversation uses app settings or its push notification settings have expired, the returned dictionary does not contain such conversation."
  }, {
    heading: "get-push-notification-settings-for-multiple-conversations",
    content: "Call `getSilentModeForConversations` to get the push notification settings for multiple conversations, as shown in the following sample code:"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation",
    content: "Call `clearRemindTypeForConversation` to clear the push notification type for a specific conversation. After clearing, the conversation will use the app's settings by default."
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation",
    content: "The following code example shows how to clear a conversation's push notifications:"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation",
    content: "To optimize the user experience when dealing with a large number of push notifications, Chat SDK provides fine-grained settings for push notifications and do not disturb mode at the app and conversation levels."
  }, {
    heading: "push-notification-settings-1",
    content: "Parameter"
  }, {
    heading: "push-notification-settings-1",
    content: "Description"
  }, {
    heading: "push-notification-settings-1",
    content: "App"
  }, {
    heading: "push-notification-settings-1",
    content: "One-to-one and group chats"
  }, {
    heading: "push-notification-settings-1",
    content: "`All`"
  }, {
    heading: "push-notification-settings-1",
    content: "Receive push notifications for all offline messages."
  }, {
    heading: "push-notification-settings-1",
    content: "✓"
  }, {
    heading: "push-notification-settings-1",
    content: "✓"
  }, {
    heading: "push-notification-settings-1",
    content: "`MentionOnly`"
  }, {
    heading: "push-notification-settings-1",
    content: 'Receive push notifications only for mentions. This parameter is recommended for group chats. To mention one or more users, pass `"em_at_list": [ "user1", "user2" ... ]` to the `ext` field when creating a message. To mention all, pass `"em_at_list": "all"` to this field.'
  }, {
    heading: "push-notification-settings-1",
    content: "✓"
  }, {
    heading: "push-notification-settings-1",
    content: "✓"
  }, {
    heading: "push-notification-settings-1",
    content: "`NONE`"
  }, {
    heading: "push-notification-settings-1",
    content: "Do not receive push notifications for offline messages."
  }, {
    heading: "push-notification-settings-1",
    content: "✓"
  }, {
    heading: "push-notification-settings-1",
    content: "✓"
  }, {
    heading: "push-notification-settings-1",
    content: "The push notification setting at the conversation level takes precedence over the setting at the app level. For conversations where the push notification setting is not configured, the app setting is used by default."
  }, {
    heading: "push-notification-settings-1",
    content: "For example, suppose the push notifications for the app are set to `MentionOnly` and the push notifications for a given conversation are set to `ALL`. A user will receive all push notifications from that conversation, but for all other conversations, they will only receive push notifications for messages that mention them."
  }, {
    heading: "push-notification-settings-1",
    content: "After you have completed SDK initialization and successfully logged into the app, you can enable offline push for the app and various types of conversation, and turn off push by setting the Do Not Disturb mode."
  }, {
    heading: "push-notification-settings-1",
    content: "You can specify the DND time period and duration at the app level, and Chat will not send offline push notifications during these two periods. If both the DND time and DND duration are set, the DND mode will take effect for the sum of the two."
  }, {
    heading: "push-notification-settings-1",
    content: "The following table describes the DND time settings:"
  }, {
    heading: "push-notification-settings-1",
    content: "Quiet time parameters"
  }, {
    heading: "push-notification-settings-1",
    content: "Description"
  }, {
    heading: "push-notification-settings-1",
    content: "App"
  }, {
    heading: "push-notification-settings-1",
    content: "Single and group chat conversations"
  }, {
    heading: "push-notification-settings-1",
    content: "`silentModeStartTime & silentModeEndTime`"
  }, {
    heading: "push-notification-settings-1",
    content: "The time period for turning on the DND mode, in the `H:MH:M` format, using the 24-hour system and accurate to the minute. For example, `8:30`-`10:0`. The range of hours and minutes in the start time and end time is `[0,23]` and `[0,59]`, respectively. The DND mode is set in the following way: After the start time and end time are set, the DND mode is triggered every day. For example, if the time period is set to `8:0`-`10:0`, the DND mode is effective from 8:00 to 10:00 every day. If you set the start time to `8:0` and the end time to `12:0` at 11:00, the DND mode is effective from 11:00 to 12:00 on the same day, and from 8:00 to 12:00 every day thereafter. If the start time and end time are the same, the DND mode is effective all day. However, if it is set to `0:0`-`0:0`, the DND mode will be turned off. If the end time is earlier than the start time, the DND mode will take effect from the start time of each day to the end time of the next day. For example, if the start time is `10:0` and the end time is `8:0`, the DND mode will take effect from 10:00 on that day to 8:00 on the next day. The DND mode can only be enabled during a specified time period each day. Multiple DND time periods are not supported. The new setting will override the previous setting. If both this parameter and `silentModeDuration` are set, the DND mode will be in effect during both time periods on the day. For example, if `silentModeDuration` is set to `8:0`-`10:0` and `silentModeDuration` is set to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00-12:00 on that day and from 8:00-10:00 every day thereafter."
  }, {
    heading: "push-notification-settings-1",
    content: "✓"
  }, {
    heading: "push-notification-settings-1",
    content: "✗"
  }, {
    heading: "push-notification-settings-1",
    content: "`silentModeDuration`"
  }, {
    heading: "push-notification-settings-1",
    content: "The DND duration, in minutes. The value range of the DND duration is `[0,10080]`, where `0` means the parameter is invalid and `10080` means the DND mode lasts for 7 days. Unlike the setting of the DND time period, which takes effect every day, this parameter is valid once. It takes effect immediately after setting. For example, if you set the app-level `silentModeDuration` to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00 to 12:00 on the same day. If both this parameter and `silentModeStartTime & silentModeEndTime` are set, the DND mode will be effective during both time periods on the same day. For example, if the app-level `silentModeStartTime & silentModeEndTime` is set to 8:00-10:00 at 8:00 am and the DND duration is set to 240 minutes (4 hours), the app will be in DND mode from 8:00-12:00 now and from 8:00-10:00 every day thereafter."
  }, {
    heading: "push-notification-settings-1",
    content: "✓"
  }, {
    heading: "push-notification-settings-1",
    content: "✓"
  }, {
    heading: "push-notification-settings-1",
    content: "If you need to push messages to specific users during the DND period or effective time, set Force push."
  }, {
    heading: "push-notification-settings-1",
    content: "For the app and all conversations in the app, the DND setting takes precedence over the push notification setting. For example, suppose a user specifies a DND time period at the app level and sets push notifications to `ALL`. The app enters the DND mode during the specified time period, and the user will not receive any push notifications."
  }, {
    heading: "push-notification-settings-1",
    content: "Alternatively, suppose a conversation is assigned a DND time period. The app does not have any DND settings and its push notifications are set to `ALL`. During the specified DND time period, the user will not receive any push notifications from this conversation, while push notifications from all other conversations will remain unchanged."
  }, {
    heading: "set-up-push-notifications-for-the-app-1",
    content: "Call `setSilentModeForAll` to set app-level push notifications. Configure push notifications and the DND mode by specifying the `AgoraChatSilentModeParam` field, as shown in the following code example:"
  }, {
    heading: "get-the-push-notification-settings-of-the-app-1",
    content: "Call `getSilentModeForAllWithCompletion` to get the app-level push notification settings, as shown in the following code example:"
  }, {
    heading: "set-push-notifications-for-a-single-conversation-1",
    content: "Call `setSilentModeForConversation` to set push notifications for a specified conversation. Configure push notifications and the DND mode by specifying the `SilentModeParam` field, as shown in the following example:"
  }, {
    heading: "get-push-notification-settings-for-a-single-conversation-1",
    content: "You can call getSilentModeForConversation to get the push notification settings for a specific conversation, as shown in the following code example:"
  }, {
    heading: "get-push-notification-settings-for-multiple-conversations-1",
    content: "You can get push notification settings for up to 20 conversations in each call. If a conversation uses app settings or its push notification settings have expired, the returned dictionary does not contain that conversation. Call  `getSilentModeForConversations` to get the push notification settings for multiple conversations, as shown in the following example:"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "Call `clearRemindTypeForConversation` to clear the push notification settings for a specified conversation. After clearing, this conversation will use the app's settings by default:"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "To optimize the user experience when dealing with a large number of push notifications, Chat SDK provides fine-grained settings for push notifications and DND mode at the app and conversation levels."
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "**Push notifications**"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "Setting"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "Description"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "App"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "One-to-one and group chats"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "`ALL`"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "Receive push notifications for all offline messages."
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "✓"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "✓"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "`AT`"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: 'Only receive push notifications for mentions.  This parameter is recommended for group chats. If a user wants to mention one or more users, they need to pass `"em_at_list": [ "user1", "user2" ... ]` to the `ext` field when creating a message; if they want to mention everyone, they need to pass `"em_at_list": "all"` to this field.'
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "✓"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "✓"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "`NONE`"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "Do not receive push notifications for offline messages."
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "✓"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "✓"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "The push notification setting at the conversation level takes precedence over the setting at the app level. For conversations where push notifications are not configured, the app setting is used by default."
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "For example, suppose the push notifications are set to `AT` for the app and to `ALL` for a given conversation. The user will receive all push notifications from that conversation, but for all other conversations, they will only receive push notifications for mentions."
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "**Do Not Disturb**"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "After you have completed SDK initialization and successfully logged into the app, you can enable offline push for the app and various types of conversations, as well as turning off push by setting the DND mode."
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "You can specify the DND time period and duration at the app level, and Chat will not send offline push notifications during these two periods. If both the DND time and DND duration are set, the DND mode will take effect for the sum of the two."
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "The following table describes the DND time settings:"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "Setting"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "Description"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "App"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "One-to-one and group chats"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "`startTime & endTime`"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "The time period for turning on the DND mode, in the `H:MH:M` format, using the 24-hour system and accurate to the minute. For example, `8:30`-`10:0`, the range of hours and minutes in the start time and end time is `[0,23]` and `[0,59]`, respectively. The DND mode is set in the following way: After the start time and end time are set, the DND mode is triggered every day. For example, if the time period is set to `8:0`-`10:0`, the DND mode is effective from 8:00 to 10:00 every day. If you set the start time to `8:0` and the end time to `12:0` at 11:00, the DND mode is effective from 11:00 to 12:00 on the same day, and from 8:00 to 12:00 every day thereafter. If the start time and end time are the same, the DND mode is effective all day. However, if it is set to `0:0`-`0:0`, the DND mode is turned off. If the end time is earlier than the start time, the DND mode takes effect from the start time of each day to the end time of the next day. For example, if the start time is `10:0` and the end time is `8:0`, the DND mode takes effect from 10:00 on the same day to 8:00 on the next day. Currently, the DND mode is only supported in a specified time period each day. Multiple DND time periods are not supported. The new setting will override the previous setting. If both this parameter and `duration` are set, the DND mode takes effect in both time periods on the same day. For example, if `startTime & endTime` is set to `8:0`-`10:0` at 8:00 AM and `duration` is set to 240 minutes (4 hours), the app will be in DND mode from 8:00-12:00 on the same day and from 8:00-10:0 every day thereafter."
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "✓"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "✗"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "`duration`"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "The duration of the DND mode, in minutes. The value range of the DND duration is `[0,10080]`, `0` means that the parameter is invalid, and `10080` means that the DND mode lasts for 7 days. Unlike the setting of the DND time period, which takes effect every day, this parameter is valid once. It takes effect immediately after setting. For example, if the app-level `duration` is set to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00 to 12:00 on the same day.  - If both this parameter and `startTime & endTime` are set, the DND mode will take effect in both time periods on the same day. For example, if the app-level `startTime & endTime` is set to 8:00-10:00 at 8:00 AM, and the DND duration is set to 240 minutes (4 hours), the app will be in DND mode from 8:00 to 12:00 and from 8:00 to 10:00 every day thereafter."
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "✓"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "✓"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "If you need to push messages to specific users during the DND period or effective time, set Force push."
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "For the app and all conversations in the app, the DND mode setting takes precedence over the push notification setting. For example, suppose you specify a DND time period at the app level and set push notifications for a specified conversation to `ALL` . The app enters the DND mode during the specified time period, and you will not receive any push notifications."
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "Alternatively, suppose a conversation is assigned a quiet time period, and the app does not have any quiet settings and its push notifications are set to `ALL`. During the specified quiet time, you will not receive any push notifications from this conversation, while push notifications from all other conversations remain unchanged."
  }, {
    heading: "set-up-push-notifications-for-the-app-2",
    content: "Call `setSilentModeForAll` to set app-level push notifications. Configure the push notification and DND settings by specifying the `paramType` field, as shown in the following code example:"
  }, {
    heading: "get-the-push-notification-settings-of-the-app-2",
    content: "Call `getSilentModeForAll` to get the push notification settings of the app. The sample code is as follows:"
  }, {
    heading: "set-push-notifications-for-a-single-conversation-2",
    content: "Call `setSilentModeForConversation` to configure the push notification settings for a specified conversation. The sample code is as follows:"
  }, {
    heading: "get-push-notification-settings-for-a-single-conversation-2",
    content: "Call `getSilentModeForConversation` to get the push notification settings for a single conversation. The sample code is as follows:"
  }, {
    heading: "get-push-notification-settings-for-multiple-conversations-2",
    content: "You can get push notification settings for up to 20 conversations at a time."
  }, {
    heading: "get-push-notification-settings-for-multiple-conversations-2",
    content: "If the conversation uses app settings or its push notification settings have expired, the returned dictionary does not contain this conversation."
  }, {
    heading: "get-push-notification-settings-for-multiple-conversations-2",
    content: "Call `getSilentModeForConversations` to get the push notification settings for multiple conversations. The sample code is as follows :"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-2",
    content: "Call `clearRemindTypeForConversation` to clear the push notification type settings for a specified conversation. After clearing, this conversation will use the app's settings by default. The sample code is as follows:"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-2",
    content: "To optimize the user experience when dealing with a large number of push notifications, Chat SDK provides fine-grained settings for push notifications and do not disturb mode at the app and conversation levels."
  }, {
    heading: "push-notification-settings-2",
    content: "Parameter"
  }, {
    heading: "push-notification-settings-2",
    content: "Description"
  }, {
    heading: "push-notification-settings-2",
    content: "App"
  }, {
    heading: "push-notification-settings-2",
    content: "One-to-one and group chats"
  }, {
    heading: "push-notification-settings-2",
    content: "`ALL`"
  }, {
    heading: "push-notification-settings-2",
    content: "Receive push notifications for all offline messages."
  }, {
    heading: "push-notification-settings-2",
    content: "✓"
  }, {
    heading: "push-notification-settings-2",
    content: "✓"
  }, {
    heading: "push-notification-settings-2",
    content: "`MENTION_ONLY`"
  }, {
    heading: "push-notification-settings-2",
    content: 'Receive push notifications only for mentions. This parameter is recommended for group chats. To mention one or more users, pass `"em_at_list": [ "user1", "user2" ... ]` to the `ext` field when creating a message. To mention all, pass `"em_at_list": "all"` to this field.'
  }, {
    heading: "push-notification-settings-2",
    content: "✓"
  }, {
    heading: "push-notification-settings-2",
    content: "✓"
  }, {
    heading: "push-notification-settings-2",
    content: "`NONE`"
  }, {
    heading: "push-notification-settings-2",
    content: "Do not receive push notifications for offline messages."
  }, {
    heading: "push-notification-settings-2",
    content: "✓"
  }, {
    heading: "push-notification-settings-2",
    content: "✓"
  }, {
    heading: "push-notification-settings-2",
    content: "The push notification setting at the conversation level takes precedence over the setting at the app level. For conversations where the push notification setting is not configured, the app setting is used by default."
  }, {
    heading: "push-notification-settings-2",
    content: "For example, suppose the push notifications for the app are set to `MENTION_ONLY` and the push notifications for a given conversation are set to `ALL`. A user will receive all push notifications from that conversation, but for all other conversations, they will only receive push notifications for messages that mention them."
  }, {
    heading: "push-notification-settings-2",
    content: "You can specify the DND time period and duration at the app level, and Chat will not send offline push notifications during these two periods. If both the DND time and DND duration are set, the DND mode will take effect for the sum of the two."
  }, {
    heading: "push-notification-settings-2",
    content: "The following table describes the DND time settings:"
  }, {
    heading: "push-notification-settings-2",
    content: "Setting"
  }, {
    heading: "push-notification-settings-2",
    content: "Description"
  }, {
    heading: "push-notification-settings-2",
    content: "App"
  }, {
    heading: "push-notification-settings-2",
    content: "One-to-one and group chats"
  }, {
    heading: "push-notification-settings-2",
    content: "`SILENT_MODE_INTERVAL`"
  }, {
    heading: "push-notification-settings-2",
    content: "The time period for turning on the DND mode, in the `H:MH:M` format, using the 24-hour system and accurate to the minute. For example, `8:30`-`10:0`. The range of hours and minutes in the start time and end time is `[0,23]` and `[0,59]`, respectively. The DND mode is set in the following way: After the start time and end time are set, the DND mode is triggered every day. For example, if the time period is set to `8:0`-`10:0`, the DND mode is effective from 8:00 to 10:00 every day. If you set the start time to `8:0` and the end time to `12:0` at 11:00, the DND mode is effective from 11:00 to 12:00 on the same day, and from 8:00 to 12:00 every day thereafter. If the start time and end time are the same, the DND mode is effective all day. However, if it is set to `0:0`-`0:0`, the DND mode will be turned off. If the end time is earlier than the start time, the DND mode will take effect from the start time of each day to the end time of the next day. For example, if the start time is `10:0` and the end time is `8:0`, the DND mode will take effect from 10:00 on that day to 8:00 on the next day. The DND mode can only be enabled during a specified time period each day. Multiple DND time periods are not supported. The new setting will override the previous setting. If both this parameter and `SILENT_MODE_DURATION` are set, the DND mode will be in effect during both time periods on the day. For example, if `SILENT_MODE_INTERVAL` is set to `8:0`-`10:0` and `SILENT_MODE_DURATION` is set to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00-12:00 on that day and from 8:00-10:00 every day thereafter."
  }, {
    heading: "push-notification-settings-2",
    content: "✓"
  }, {
    heading: "push-notification-settings-2",
    content: "✗"
  }, {
    heading: "push-notification-settings-2",
    content: "`SILENT_MODE_DURATION`"
  }, {
    heading: "push-notification-settings-2",
    content: "The DND duration, in minutes. The value range of the DND duration is `[0,10080]`, where `0` means the parameter is invalid and `10080` means the DND mode lasts for 7 days. Unlike the setting of the DND time period, which takes effect every day, this parameter is valid once. It takes effect immediately after setting. For example, if you set the app-level `SILENT_MODE_DURATION` to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00 to 12:00 on the same day. If both this parameter and `SILENT_MODE_INTERVAL` are set, the DND mode will be effective during both time periods on the same day. For example, if the app-level `SILENT_MODE_INTERVAL` is set to 8:00-10:00 at 8:00 am and the DND duration is set to 240 minutes (4 hours), the app will be in DND mode from 8:00-12:00 now and from 8:00-10:00 every day thereafter."
  }, {
    heading: "push-notification-settings-2",
    content: "✓"
  }, {
    heading: "push-notification-settings-2",
    content: "✓"
  }, {
    heading: "push-notification-settings-2",
    content: "If you need to push messages to specific users during the DND period or effective time, set Force push."
  }, {
    heading: "push-notification-settings-2",
    content: "For the app and all conversations in the app, the DND setting takes precedence over the push notification setting. For example, suppose a user specifies a DND time period at the app level and sets push notifications to `ALL`. The app enters the DND mode during the specified time period, and the user will not receive any push notifications."
  }, {
    heading: "push-notification-settings-2",
    content: "Alternatively, suppose a conversation is assigned a DND time period. The app does not have any DND settings and its push notifications are set to `ALL`. During the specified DND time period, the user will not receive any push notifications from this conversation, while push notifications from all other conversations will remain unchanged."
  }, {
    heading: "set-up-push-notifications-for-the-app-3",
    content: "Call `setSilentModeForAll` to set app-level push notifications. Set push notifications and DND mode by specifying the `ChatSilentModeParam` field, as shown in the following example:"
  }, {
    heading: "get-the-push-notification-settings-of-the-app-3",
    content: "Call `fetchSilentModeForAll` to retrieve the app-level push notification settings, as shown in the following example:"
  }, {
    heading: "set-push-notifications-for-a-single-conversation-3",
    content: "Call `setSilentModeForConversation` to set push notifications for a specified conversation. Configure push notifications and the DND mode by specifying the `SilentModeParam` field, as shown in the following example :"
  }, {
    heading: "get-push-notification-settings-for-a-single-conversation-3",
    content: "Call `fetchConversationSilentMode` to retrieve the push notification setting for a specified conversation, as shown in the following example:"
  }, {
    heading: "get-push-notification-settings-for-multiple-conversations-3",
    content: "You can get push notification settings for up to 20 conversations in each call. If a conversation uses app settings or its push notification settings have expired, the returned dictionary does not contain that conversation."
  }, {
    heading: "get-push-notification-settings-for-multiple-conversations-3",
    content: "Call `fetchSilentModeForConversations` to retrieve push notification settings for multiple conversations, as shown in the following sample:"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-3",
    content: "Call `clearRemindTypeForConversation` to clear the push notification type for a specific conversation. After clearing, the conversation will use the app's settings by default:"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-3",
    content: "To optimize the user experience when dealing with a large number of push notifications, Chat SDK provides fine-grained settings for push notifications and do not disturb mode at the app and conversation levels."
  }, {
    heading: "push-notification-settings-3",
    content: "Parameter"
  }, {
    heading: "push-notification-settings-3",
    content: "Description"
  }, {
    heading: "push-notification-settings-3",
    content: "App"
  }, {
    heading: "push-notification-settings-3",
    content: "One-to-one and group chats"
  }, {
    heading: "push-notification-settings-3",
    content: "`ALL`"
  }, {
    heading: "push-notification-settings-3",
    content: "Receive push notifications for all offline messages."
  }, {
    heading: "push-notification-settings-3",
    content: "✓"
  }, {
    heading: "push-notification-settings-3",
    content: "✓"
  }, {
    heading: "push-notification-settings-3",
    content: "`MENTION_ONLY`"
  }, {
    heading: "push-notification-settings-3",
    content: 'Receive push notifications only for mentions. This parameter is recommended for group chats. To mention one or more users, pass `"em_at_list": [ "user1", "user2" ... ]` to the `ext` field when creating a message. To mention all, pass `"em_at_list": "all"` to this field.'
  }, {
    heading: "push-notification-settings-3",
    content: "✓"
  }, {
    heading: "push-notification-settings-3",
    content: "✓"
  }, {
    heading: "push-notification-settings-3",
    content: "`NONE`"
  }, {
    heading: "push-notification-settings-3",
    content: "Do not receive push notifications for offline messages."
  }, {
    heading: "push-notification-settings-3",
    content: "✓"
  }, {
    heading: "push-notification-settings-3",
    content: "✓"
  }, {
    heading: "push-notification-settings-3",
    content: "The push notification setting at the conversation level takes precedence over the setting at the app level. For conversations where the push notification setting is not configured, the app setting is used by default."
  }, {
    heading: "push-notification-settings-3",
    content: "For example, suppose the push notifications for the app are set to `MENTION_ONLY` and the push notifications for a given conversation are set to `ALL`. A user will receive all push notifications from that conversation, but for all other conversations, they will only receive push notifications for messages that mention them."
  }, {
    heading: "push-notification-settings-3",
    content: "You can specify the DND time period and duration at the app level, and Chat will not send offline push notifications during these two periods. If both the DND time and DND duration are set, the DND mode will take effect for the sum of the two."
  }, {
    heading: "push-notification-settings-3",
    content: "The following table describes the DND time settings:"
  }, {
    heading: "push-notification-settings-3",
    content: "Setting"
  }, {
    heading: "push-notification-settings-3",
    content: "Description"
  }, {
    heading: "push-notification-settings-3",
    content: "App"
  }, {
    heading: "push-notification-settings-3",
    content: "One-to-one and group chats"
  }, {
    heading: "push-notification-settings-3",
    content: "`startTime & endTime`"
  }, {
    heading: "push-notification-settings-3",
    content: "For example, `8:30`-`10:0`. The range of hours and minutes in the start time and end time is `[0,23]` and `[0,59]`, respectively. The DND mode is set in the following way: After the start time and end time are set, the DND mode is triggered every day. For example, if the time period is set to `8:0`-`10:0`, the DND mode is effective from 8:00 to 10:00 every day. If you set the start time to `8:0` and the end time to `12:0` at 11:00, the DND mode is effective from 11:00 to 12:00 on the same day, and from 8:00 to 12:00 every day thereafter. If the start time and end time are the same, the DND mode is effective all day. However, if it is set to `0:0`-`0:0`, the DND mode will be turned off. If the end time is earlier than the start time, the DND mode will take effect from the start time of each day to the end time of the next day. For example, if the start time is `10:0` and the end time is `8:0`, the DND mode will take effect from 10:00 on that day to 8:00 on the next day. The DND mode can only be enabled during a specified time period each day. Multiple DND time periods are not supported. The new setting will override the previous setting. If both this parameter and `expireTimestamp` are set, the DND mode will be in effect during both time periods on the day. For example, if `startTime & endTime` is set to `8:0`-`10:0` and `expireTimestamp` is set to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00-12:00 on that day and from 8:00-10:00 every day thereafter."
  }, {
    heading: "push-notification-settings-3",
    content: "✓"
  }, {
    heading: "push-notification-settings-3",
    content: "✗"
  }, {
    heading: "push-notification-settings-3",
    content: "`expireTimestamp`"
  }, {
    heading: "push-notification-settings-3",
    content: "The DND duration, in minutes. The value range of the DND duration is `[0,10080]`, where `0` means the parameter is invalid and `10080` means the DND mode lasts for 7 days. Unlike the setting of the DND time period, which takes effect every day, this parameter is valid once. It takes effect immediately after setting. For example, if you set the app-level `expireTimestamp` to 240 minutes (4 hours) at 8:00 am, the app will be in DND mode from 8:00 to 12:00 on the same day. If both this parameter and `SILENT_MODE_INTERVAL` are set, the DND mode will be effective during both time periods on the same day. For example, if the app-level `startTime & endTime` is set to 8:00-10:00 at 8:00 am and the DND duration is set to 240 minutes (4 hours), the app will be in DND mode from 8:00-12:00 now and from 8:00-10:00 every day thereafter."
  }, {
    heading: "push-notification-settings-3",
    content: "✓"
  }, {
    heading: "push-notification-settings-3",
    content: "✓"
  }, {
    heading: "push-notification-settings-3",
    content: "If you need to push messages to specific users during the DND period or effective time, set Force push."
  }, {
    heading: "push-notification-settings-3",
    content: "For the app and all conversations in the app, the DND setting takes precedence over the push notification setting. For example, suppose a user specifies a DND time period at the app level and sets push notifications to `ALL`. The app enters the DND mode during the specified time period, and the user will not receive any push notifications."
  }, {
    heading: "push-notification-settings-3",
    content: "Alternatively, suppose a conversation is assigned a DND time period. The app does not have any DND settings and its push notifications are set to `ALL`. During the specified DND time period, the user will not receive any push notifications from this conversation, while push notifications from all other conversations will remain unchanged."
  }, {
    heading: "set-up-push-notifications-for-the-app-4",
    content: "Call `setSilentModeForAll` to set app-level push notifications. Set the push notifications and DND mode by specifying the `ChatSilentModeParam` field, as shown in the following example:"
  }, {
    heading: "get-the-push-notification-settings-of-the-app-4",
    content: "Call `fetchSilentModeForAll` to retrieve the app-level push notification settings, as shown in the following code example:"
  }, {
    heading: "set-push-notifications-for-a-single-conversation-4",
    content: "Call `setSilentModeForConversation` to set push notifications for a specified conversation. Set the push notifications and DND mode by specifying the `ChatSilentModeParam` field, as shown in the following example:"
  }, {
    heading: "get-push-notifications-for-a-single-conversation",
    content: "Call `fetchSilentModeForConversation` to retrieve the push notification settings for a specified conversation, as shown in the following example:"
  }, {
    heading: "get-push-notification-settings-for-multiple-conversations-4",
    content: "You can get push notification settings for up to 20 conversations in each call. If a conversation uses app settings or its push notification settings have expired, the returned dictionary does not contain that conversation."
  }, {
    heading: "get-push-notification-settings-for-multiple-conversations-4",
    content: "Call `fetchSilentModeForConversations` to retrieve push notification settings for multiple conversations, as shown in the following example:"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-4",
    content: "Call `removeSilentModeForConversation` to clear the push notification mode settings for a specific conversation. After clearing, the conversation will use the app's settings by default."
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-4",
    content: "The following code example shows how to clear a conversation's push notifications:"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-4",
    content: "**This feature is not supported for this platform.**"
  }, {
    heading: "clear-push-notification-settings-for-a-single-conversation-4",
    content: "**This feature is not supported for this platform.**"
  }],
  headings: [{
    id: "push-notification-settings",
    content: "Push notification settings"
  }, {
    id: "set-up-push-notifications-for-the-app",
    content: "Set up push notifications for the app"
  }, {
    id: "get-the-push-notification-settings-of-the-app",
    content: "Get the push notification settings of the app"
  }, {
    id: "set-push-notifications-for-a-single-conversation",
    content: "Set push notifications for a single conversation"
  }, {
    id: "get-push-notification-settings-for-a-single-conversation",
    content: "Get push notification settings for a single conversation"
  }, {
    id: "get-push-notification-settings-for-multiple-conversations",
    content: "Get push notification settings for multiple conversations"
  }, {
    id: "clear-push-notification-settings-for-a-single-conversation",
    content: "Clear push notification settings for a single conversation"
  }, {
    id: "push-notification-settings-1",
    content: "Push notification settings"
  }, {
    id: "set-up-push-notifications-for-the-app-1",
    content: "Set up push notifications for the app"
  }, {
    id: "get-the-push-notification-settings-of-the-app-1",
    content: "Get the push notification settings of the app"
  }, {
    id: "set-push-notifications-for-a-single-conversation-1",
    content: "Set push notifications for a single conversation"
  }, {
    id: "get-push-notification-settings-for-a-single-conversation-1",
    content: "Get push notification settings for a single conversation"
  }, {
    id: "get-push-notification-settings-for-multiple-conversations-1",
    content: "Get push notification settings for multiple conversations"
  }, {
    id: "clear-push-notification-settings-for-a-single-conversation-1",
    content: "Clear push notification settings for a single conversation"
  }, {
    id: "set-up-push-notifications-for-the-app-2",
    content: "Set up push notifications for the app"
  }, {
    id: "get-the-push-notification-settings-of-the-app-2",
    content: "Get the push notification settings of the app"
  }, {
    id: "set-push-notifications-for-a-single-conversation-2",
    content: "Set push notifications for a single conversation"
  }, {
    id: "get-push-notification-settings-for-a-single-conversation-2",
    content: "Get push notification settings for a single conversation"
  }, {
    id: "get-push-notification-settings-for-multiple-conversations-2",
    content: "Get push notification settings for multiple conversations"
  }, {
    id: "clear-push-notification-settings-for-a-single-conversation-2",
    content: "Clear push notification settings for a single conversation"
  }, {
    id: "push-notification-settings-2",
    content: "Push notification settings"
  }, {
    id: "set-up-push-notifications-for-the-app-3",
    content: "Set up push notifications for the app"
  }, {
    id: "get-the-push-notification-settings-of-the-app-3",
    content: "Get the push notification settings of the app"
  }, {
    id: "set-push-notifications-for-a-single-conversation-3",
    content: "Set push notifications for a single conversation"
  }, {
    id: "get-push-notification-settings-for-a-single-conversation-3",
    content: "Get push notification settings for a single conversation"
  }, {
    id: "get-push-notification-settings-for-multiple-conversations-3",
    content: "Get push notification settings for multiple conversations"
  }, {
    id: "clear-push-notification-settings-for-a-single-conversation-3",
    content: "Clear push notification settings for a single conversation"
  }, {
    id: "push-notification-settings-3",
    content: "Push notification settings"
  }, {
    id: "set-up-push-notifications-for-the-app-4",
    content: "Set up push notifications for the app"
  }, {
    id: "get-the-push-notification-settings-of-the-app-4",
    content: "Get the push notification settings of the app"
  }, {
    id: "set-push-notifications-for-a-single-conversation-4",
    content: "Set push notifications for a single conversation"
  }, {
    id: "get-push-notifications-for-a-single-conversation",
    content: "Get push notifications for a single conversation"
  }, {
    id: "get-push-notification-settings-for-multiple-conversations-4",
    content: "Get push notification settings for multiple conversations"
  }, {
    id: "clear-push-notification-settings-for-a-single-conversation-4",
    content: "Clear push notification settings for a single conversation"
  }]
};
export let toc = [{
  depth: 2,
  url: "#push-notification-settings",
  title: _jsx(_Fragment, {
    children: "Push notification settings"
  })
}, {
  depth: 2,
  url: "#set-up-push-notifications-for-the-app",
  title: _jsx(_Fragment, {
    children: "Set up push notifications for the app"
  })
}, {
  depth: 2,
  url: "#get-the-push-notification-settings-of-the-app",
  title: _jsx(_Fragment, {
    children: "Get the push notification settings of the app"
  })
}, {
  depth: 2,
  url: "#set-push-notifications-for-a-single-conversation",
  title: _jsx(_Fragment, {
    children: "Set push notifications for a single conversation"
  })
}, {
  depth: 2,
  url: "#get-push-notification-settings-for-a-single-conversation",
  title: _jsx(_Fragment, {
    children: "Get push notification settings for a single conversation"
  })
}, {
  depth: 2,
  url: "#get-push-notification-settings-for-multiple-conversations",
  title: _jsx(_Fragment, {
    children: "Get push notification settings for multiple conversations"
  })
}, {
  depth: 2,
  url: "#clear-push-notification-settings-for-a-single-conversation",
  title: _jsx(_Fragment, {
    children: "Clear push notification settings for a single conversation"
  })
}, {
  depth: 2,
  url: "#push-notification-settings-1",
  title: _jsx(_Fragment, {
    children: "Push notification settings"
  })
}, {
  depth: 2,
  url: "#set-up-push-notifications-for-the-app-1",
  title: _jsx(_Fragment, {
    children: "Set up push notifications for the app"
  })
}, {
  depth: 2,
  url: "#get-the-push-notification-settings-of-the-app-1",
  title: _jsx(_Fragment, {
    children: "Get the push notification settings of the app"
  })
}, {
  depth: 2,
  url: "#set-push-notifications-for-a-single-conversation-1",
  title: _jsx(_Fragment, {
    children: "Set push notifications for a single conversation"
  })
}, {
  depth: 2,
  url: "#get-push-notification-settings-for-a-single-conversation-1",
  title: _jsx(_Fragment, {
    children: "Get push notification settings for a single conversation"
  })
}, {
  depth: 2,
  url: "#get-push-notification-settings-for-multiple-conversations-1",
  title: _jsx(_Fragment, {
    children: "Get push notification settings for multiple conversations"
  })
}, {
  depth: 2,
  url: "#clear-push-notification-settings-for-a-single-conversation-1",
  title: _jsx(_Fragment, {
    children: "Clear push notification settings for a single conversation"
  })
}, {
  depth: 3,
  url: "#set-up-push-notifications-for-the-app-2",
  title: _jsx(_Fragment, {
    children: "Set up push notifications for the app"
  })
}, {
  depth: 3,
  url: "#get-the-push-notification-settings-of-the-app-2",
  title: _jsx(_Fragment, {
    children: "Get the push notification settings of the app"
  })
}, {
  depth: 3,
  url: "#set-push-notifications-for-a-single-conversation-2",
  title: _jsx(_Fragment, {
    children: "Set push notifications for a single conversation"
  })
}, {
  depth: 3,
  url: "#get-push-notification-settings-for-a-single-conversation-2",
  title: _jsx(_Fragment, {
    children: "Get push notification settings for a single conversation"
  })
}, {
  depth: 3,
  url: "#get-push-notification-settings-for-multiple-conversations-2",
  title: _jsx(_Fragment, {
    children: "Get push notification settings for multiple conversations"
  })
}, {
  depth: 3,
  url: "#clear-push-notification-settings-for-a-single-conversation-2",
  title: _jsx(_Fragment, {
    children: "Clear push notification settings for a single conversation"
  })
}, {
  depth: 2,
  url: "#push-notification-settings-2",
  title: _jsx(_Fragment, {
    children: "Push notification settings"
  })
}, {
  depth: 2,
  url: "#set-up-push-notifications-for-the-app-3",
  title: _jsx(_Fragment, {
    children: "Set up push notifications for the app"
  })
}, {
  depth: 2,
  url: "#get-the-push-notification-settings-of-the-app-3",
  title: _jsx(_Fragment, {
    children: "Get the push notification settings of the app"
  })
}, {
  depth: 2,
  url: "#set-push-notifications-for-a-single-conversation-3",
  title: _jsx(_Fragment, {
    children: "Set push notifications for a single conversation"
  })
}, {
  depth: 2,
  url: "#get-push-notification-settings-for-a-single-conversation-3",
  title: _jsx(_Fragment, {
    children: "Get push notification settings for a single conversation"
  })
}, {
  depth: 2,
  url: "#get-push-notification-settings-for-multiple-conversations-3",
  title: _jsx(_Fragment, {
    children: "Get push notification settings for multiple conversations"
  })
}, {
  depth: 2,
  url: "#clear-push-notification-settings-for-a-single-conversation-3",
  title: _jsx(_Fragment, {
    children: "Clear push notification settings for a single conversation"
  })
}, {
  depth: 2,
  url: "#push-notification-settings-3",
  title: _jsx(_Fragment, {
    children: "Push notification settings"
  })
}, {
  depth: 2,
  url: "#set-up-push-notifications-for-the-app-4",
  title: _jsx(_Fragment, {
    children: "Set up push notifications for the app"
  })
}, {
  depth: 2,
  url: "#get-the-push-notification-settings-of-the-app-4",
  title: _jsx(_Fragment, {
    children: "Get the push notification settings of the app"
  })
}, {
  depth: 2,
  url: "#set-push-notifications-for-a-single-conversation-4",
  title: _jsx(_Fragment, {
    children: "Set push notifications for a single conversation"
  })
}, {
  depth: 2,
  url: "#get-push-notifications-for-a-single-conversation",
  title: _jsx(_Fragment, {
    children: "Get push notifications for a single conversation"
  })
}, {
  depth: 2,
  url: "#get-push-notification-settings-for-multiple-conversations-4",
  title: _jsx(_Fragment, {
    children: "Get push notification settings for multiple conversations"
  })
}, {
  depth: 2,
  url: "#clear-push-notification-settings-for-a-single-conversation-4",
  title: _jsx(_Fragment, {
    children: "Clear push notification settings for a single conversation"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
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
    platforms: '["android","ios","web","flutter","react-native","windows","unity"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsx(_components.p, {
        children: "To optimize the user experience when dealing with a large number of push notifications, Chat SDK provides fine-grained settings for push notifications and do not disturb mode at the app and conversation levels."
      }), _jsx(_components.h2, {
        id: "push-notification-settings",
        children: "Push notification settings"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "App"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "One-to-one and group chats"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "ALL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Receive push notifications for all offline messages."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MENTION_ONLY"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Receive push notifications only for mentions. This parameter is recommended for group chats. To mention one or more users, pass ", _jsx(_components.code, {
                children: '"em_at_list": [ "user1", "user2" ... ]'
              }), " to the ", _jsx(_components.code, {
                children: "ext"
              }), " field when creating a message. To mention all, pass ", _jsx(_components.code, {
                children: '"em_at_list": "all"'
              }), " to this field."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "NONE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Do not receive push notifications for offline messages."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The push notification setting at the conversation level takes precedence over the setting at the app level. For conversations where the push notification setting is not configured, the app setting is used by default."
      }), _jsxs(_components.p, {
        children: ["For example, suppose the push notifications for the app are set to ", _jsx(_components.code, {
          children: "MENTION_ONLY"
        }), " and the push notifications for a given conversation are set to ", _jsx(_components.code, {
          children: "ALL"
        }), ". A user will receive all push notifications from that conversation, but for all other conversations, they will only receive push notifications for messages that mention them."]
      }), _jsx(_components.p, {
        children: "You can specify the DND time period and duration at the app level, and Chat will not send offline push notifications during these two periods. If both the DND time and DND duration are set, the DND mode will take effect for the sum of the two."
      }), _jsx(_components.p, {
        children: "The following table describes the DND time settings:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Setting"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "App"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "One-to-one and group chats"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SILENT_MODE_INTERVAL"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The time period for turning on the DND mode, in the ", _jsx(_components.code, {
                children: "H:MH:M"
              }), " format, using the 24-hour system and accurate to the minute. For example, ", _jsx(_components.code, {
                children: "8:30"
              }), "-", _jsx(_components.code, {
                children: "10:0"
              }), ". The range of hours and minutes in the start time and end time is ", _jsx(_components.code, {
                children: "[0,23]"
              }), " and ", _jsx(_components.code, {
                children: "[0,59]"
              }), ", respectively. The DND mode is set in the following way: After the start time and end time are set, the DND mode is triggered every day. For example, if the time period is set to ", _jsx(_components.code, {
                children: "8:0"
              }), "-", _jsx(_components.code, {
                children: "10:0"
              }), ", the DND mode is effective from 8", _jsx(_components.div, {}), " to 10", _jsx(_components.div, {}), " every day. If you set the start time to ", _jsx(_components.code, {
                children: "8:0"
              }), " and the end time to ", _jsx(_components.code, {
                children: "12:0"
              }), " at 11", _jsx(_components.div, {}), ", the DND mode is effective from 11", _jsx(_components.div, {}), " to 12", _jsx(_components.div, {}), " on the same day, and from 8", _jsx(_components.div, {}), " to 12", _jsx(_components.div, {}), " every day thereafter. If the start time and end time are the same, the DND mode is effective all day. However, if it is set to ", _jsx(_components.code, {
                children: "0:0"
              }), "-", _jsx(_components.code, {
                children: "0:0"
              }), ", the DND mode will be turned off. If the end time is earlier than the start time, the DND mode will take effect from the start time of each day to the end time of the next day. For example, if the start time is ", _jsx(_components.code, {
                children: "10:0"
              }), " and the end time is ", _jsx(_components.code, {
                children: "8:0"
              }), ", the DND mode will take effect from 10", _jsx(_components.div, {}), " on that day to 8", _jsx(_components.div, {}), " on the next day. The DND mode can only be enabled during a specified time period each day. Multiple DND time periods are not supported. The new setting will override the previous setting. If both this parameter and ", _jsx(_components.code, {
                children: "SILENT_MODE_DURATION"
              }), " are set, the DND mode will be in effect during both time periods on the day. For example, if ", _jsx(_components.code, {
                children: "SILENT_MODE_INTERVAL"
              }), " is set to ", _jsx(_components.code, {
                children: "8:0"
              }), "-", _jsx(_components.code, {
                children: "10:0"
              }), " and ", _jsx(_components.code, {
                children: "SILENT_MODE_DURATION"
              }), " is set to 240 minutes (4 hours) at 8", _jsx(_components.div, {}), " am, the app will be in DND mode from 8:00-12", _jsx(_components.div, {}), " on that day and from 8:00-10", _jsx(_components.div, {}), " every day thereafter."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✗"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SILENT_MODE_DURATION"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The DND duration, in minutes. The value range of the DND duration is ", _jsx(_components.code, {
                children: "[0,10080]"
              }), ", where ", _jsx(_components.code, {
                children: "0"
              }), " means the parameter is invalid and ", _jsx(_components.code, {
                children: "10080"
              }), " means the DND mode lasts for 7 days. Unlike the setting of the DND time period, which takes effect every day, this parameter is valid once. It takes effect immediately after setting. For example, if you set the app-level ", _jsx(_components.code, {
                children: "SILENT_MODE_DURATION"
              }), " to 240 minutes (4 hours) at 8", _jsx(_components.div, {}), " am, the app will be in DND mode from 8", _jsx(_components.div, {}), " to 12", _jsx(_components.div, {}), " on the same day. If both this parameter and ", _jsx(_components.code, {
                children: "SILENT_MODE_INTERVAL"
              }), " are set, the DND mode will be effective during both time periods on the same day. For example, if the app-level ", _jsx(_components.code, {
                children: "SILENT_MODE_INTERVAL"
              }), " is set to 8:00-10", _jsx(_components.div, {}), " at 8", _jsx(_components.div, {}), " am and the DND duration is set to 240 minutes (4 hours), the app will be in DND mode from 8:00-12", _jsx(_components.div, {}), " now and from 8:00-10", _jsx(_components.div, {}), " every day thereafter."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: ["If you need to push messages to specific users during the DND period or effective time, set ", _jsx(_components.a, {
          href: "./configure-push-notifications",
          children: "Force push"
        }), "."]
      }), _jsxs(_components.p, {
        children: ["For the app and all conversations in the app, the DND setting takes precedence over the push notification setting. For example, suppose a user specifies a DND time period at the app level and sets push notifications to ", _jsx(_components.code, {
          children: "ALL"
        }), ". The app enters the DND mode during the specified time period, and the user will not receive any push notifications."]
      }), _jsxs(_components.p, {
        children: ["Alternatively, suppose a conversation is assigned a DND time period. The app does not have any DND settings and its push notifications are set to ", _jsx(_components.code, {
          children: "ALL"
        }), ". During the specified DND time period, the user will not receive any push notifications from this conversation, while push notifications from all other conversations will remain unchanged."]
      }), _jsx(_components.h2, {
        id: "set-up-push-notifications-for-the-app",
        children: "Set up push notifications for the app"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "setSilentModeForAll"
        }), " to set app-level push notifications. Set push notifications and DND mode by specifying the ", _jsx(_components.code, {
          children: "SilentModeParam"
        }), " field, as shown in the following example:"]
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
                children: "// Set push notification mode to `MENTION_ONLY`."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SilentModeParam param "
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
                children: "  new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  SilentModeParam"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ( SilentModeParam . SilentModeParamType . REMIND_TYPE )"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                                ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setRemindType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(PushManager.PushRemindType.MENTION_ONLY);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set the offline push do not disturb timer to 15 minutes."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SilentModeParam param "
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
                children: "  new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  SilentModeParam"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ( SilentModeParam . SilentModeParamType . SILENT_MODE_DURATION )"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                                ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setSilentModeDuration"
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
                children: "15"
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
                children: "// Set the do not disturb time period for offline push to 8:30 to 15:00."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SilentModeParam param "
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
                children: "  new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  SilentModeParam"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ( SilentModeParam . SilentModeParamType . SILENT_MODE_INTERVAL )"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                                ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setSilentModeInterval"
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
                children: "new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " SilentModeTime"
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
                children: "8"
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
                children: "30"
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
                children: "new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " SilentModeTime"
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
                children: "15"
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
                children: "));"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set up offline push notifications for the app."
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
                children: "pushManager"
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
                children: "setSilentModeForAll"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(param, "
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
                children: " ValueCallBack"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(){});"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "get-the-push-notification-settings-of-the-app",
        children: "Get the push notification settings of the app"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getSilentModeForAll"
        }), " to get the app-level push notification settings, as shown in the following example:"]
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
                children: "pushManager"
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
                children: "getSilentModeForAll"
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
                children: "new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ValueCallBack"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(){"
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
                children: " onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(SilentModeResult "
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
                children: "        // Get the push notification method settings of the app."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        PushManager.PushRemindType remindType "
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
                children: " result."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getRemindType"
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
                children: "        // Get the Unix timestamp of the app's offline push Do Not Disturb expiration."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        long"
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
                children: " result."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getExpireTimestamp"
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
                children: "        // Get the start time of the app's offline push do not disturb time period."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        SilentModeTime startTime "
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
                children: " result."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getSilentModeStartTime"
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
                children: "        startTime . "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getHour"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(); "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// The hour in the start time of the do not disturb time period."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        startTime . "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getMinute"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(); "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// The number of minutes in the start time of the do not disturb time period."
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // Get the end time of the app's offline push do not disturb time period."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        SilentModeTime endTime "
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
                children: " result."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getSilentModeEndTime"
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
                children: "        endTime . "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getHour"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(); "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// The number of hours in the end time of the do not disturb period."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        endTime . "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getMinute"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(); "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// The number of minutes in the end time of the do not disturb time period."
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
                children: " onError"
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
                children: " error"
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
                children: "errorMsg"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {}"
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
      }), _jsx(_components.h2, {
        id: "set-push-notifications-for-a-single-conversation",
        children: "Set push notifications for a single conversation"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "setSilentModeForConversation"
        }), " to set push notifications for a specified conversation. Configure push notifications and the DND mode by specifying the ", _jsx(_components.code, {
          children: "SilentModeParam"
        }), " field, as shown in the following example:"]
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
                children: "// Set push notification mode to `MENTION_ONLY`."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SilentModeParam param "
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
                children: "  new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  SilentModeParam"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ( SilentModeParam . SilentModeParamType . REMIND_TYPE )"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                                ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setRemindType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(PushManager.PushRemindType.MENTION_ONLY);"
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
                children: "// Set the offline push do not disturb timer to 15 minutes."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SilentModeParam param "
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
                children: "  new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  SilentModeParam"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ( SilentModeParam . SilentModeParamType . SILENT_MODE_DURATION )"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                                ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setSilentDuration"
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
                children: "15"
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
                children: "// Set the offline push do not disturb mode for the conversation. Currently, it does not support setting the do not disturb time period for the conversation."
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
                children: "pushManager"
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
                children: "setSilentModeForConversation"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(conversationId, conversationType, param, "
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
                children: " ValueCallBack"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(){});"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "get-push-notification-settings-for-a-single-conversation",
        children: "Get push notification settings for a single conversation"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getSilentModeForConversation"
        }), " to get the push notification settings for a specified conversation, as shown in the following code example:"]
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
                children: "pushManager"
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
                children: "getSilentModeForConversation"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(conversationId, conversationType, "
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
                children: " ValueCallBack"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(){"
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
                children: " onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(SilentModeResult "
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
                children: "        // Get whether the push notification method is set for the specified conversation."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        boolean"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " enable "
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
                children: " result."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "isConversationRemindTypeEnabled"
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
                children: "        // Check if the conversation has push notifications set."
              })
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
                children: "(enable){"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            // Get the push notification method for the conversation."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            PushManager.PushRemindType remindType "
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
                children: " result."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getRemindType"
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
                children: "        // Get the offline push Do Not Disturb expiration Unix timestamp of the conversation."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        long"
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
                children: " result."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getExpireTimestamp"
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
                children: " onError"
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
                children: " error"
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
                children: "errorMsg"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {}"
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
      }), _jsx(_components.h2, {
        id: "get-push-notification-settings-for-multiple-conversations",
        children: "Get push notification settings for multiple conversations"
      }), _jsx(_components.p, {
        children: "You can get push notification settings for up to 20 conversations in each call. If a conversation uses app settings or its push notification settings have expired, the returned dictionary does not contain such conversation."
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getSilentModeForConversations"
        }), " to get the push notification settings for multiple conversations, as shown in the following sample code:"]
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
                children: "pushManager"
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
                children: "getSilentModeForConversations"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(conversationList, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ValueCallBack>(){"
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
                children: " onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(Map "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "value"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {}"
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
                children: " onError"
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
                children: " error"
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
                children: "errorMsg"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {}"
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
      }), _jsx(_components.h2, {
        id: "clear-push-notification-settings-for-a-single-conversation",
        children: "Clear push notification settings for a single conversation"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "clearRemindTypeForConversation"
        }), " to clear the push notification type for a specific conversation. After clearing, the conversation will use the app's settings by default."]
      }), _jsx(_components.p, {
        children: "The following code example shows how to clear a conversation's push notifications:"
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
                children: "pushManager"
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
                children: "clearRemindTypeForConversation"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(conversationId, conversationType, "
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
                children: " CallBack"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(){});"
              })]
            })
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
      }), _jsx(_components.p, {
        children: "To optimize the user experience when dealing with a large number of push notifications, Chat SDK provides fine-grained settings for push notifications and do not disturb mode at the app and conversation levels."
      }), _jsx(_components.h2, {
        id: "push-notification-settings-1",
        children: "Push notification settings"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "App"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "One-to-one and group chats"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "All"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Receive push notifications for all offline messages."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MentionOnly"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Receive push notifications only for mentions. This parameter is recommended for group chats. To mention one or more users, pass ", _jsx(_components.code, {
                children: '"em_at_list": [ "user1", "user2" ... ]'
              }), " to the ", _jsx(_components.code, {
                children: "ext"
              }), " field when creating a message. To mention all, pass ", _jsx(_components.code, {
                children: '"em_at_list": "all"'
              }), " to this field."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "NONE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Do not receive push notifications for offline messages."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The push notification setting at the conversation level takes precedence over the setting at the app level. For conversations where the push notification setting is not configured, the app setting is used by default."
      }), _jsxs(_components.p, {
        children: ["For example, suppose the push notifications for the app are set to ", _jsx(_components.code, {
          children: "MentionOnly"
        }), " and the push notifications for a given conversation are set to ", _jsx(_components.code, {
          children: "ALL"
        }), ". A user will receive all push notifications from that conversation, but for all other conversations, they will only receive push notifications for messages that mention them."]
      }), _jsx(_components.p, {
        children: "After you have completed SDK initialization and successfully logged into the app, you can enable offline push for the app and various types of conversation, and turn off push by setting the Do Not Disturb mode."
      }), _jsx(_components.p, {
        children: "You can specify the DND time period and duration at the app level, and Chat will not send offline push notifications during these two periods. If both the DND time and DND duration are set, the DND mode will take effect for the sum of the two."
      }), _jsx(_components.p, {
        children: "The following table describes the DND time settings:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Quiet time parameters"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "App"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Single and group chat conversations"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "silentModeStartTime & silentModeEndTime"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The time period for turning on the DND mode, in the ", _jsx(_components.code, {
                children: "H:MH:M"
              }), " format, using the 24-hour system and accurate to the minute. For example, ", _jsx(_components.code, {
                children: "8:30"
              }), "-", _jsx(_components.code, {
                children: "10:0"
              }), ". The range of hours and minutes in the start time and end time is ", _jsx(_components.code, {
                children: "[0,23]"
              }), " and ", _jsx(_components.code, {
                children: "[0,59]"
              }), ", respectively. The DND mode is set in the following way: After the start time and end time are set, the DND mode is triggered every day. For example, if the time period is set to ", _jsx(_components.code, {
                children: "8:0"
              }), "-", _jsx(_components.code, {
                children: "10:0"
              }), ", the DND mode is effective from 8", _jsx(_components.div, {}), " to 10", _jsx(_components.div, {}), " every day. If you set the start time to ", _jsx(_components.code, {
                children: "8:0"
              }), " and the end time to ", _jsx(_components.code, {
                children: "12:0"
              }), " at 11", _jsx(_components.div, {}), ", the DND mode is effective from 11", _jsx(_components.div, {}), " to 12", _jsx(_components.div, {}), " on the same day, and from 8", _jsx(_components.div, {}), " to 12", _jsx(_components.div, {}), " every day thereafter. If the start time and end time are the same, the DND mode is effective all day. However, if it is set to ", _jsx(_components.code, {
                children: "0:0"
              }), "-", _jsx(_components.code, {
                children: "0:0"
              }), ", the DND mode will be turned off. If the end time is earlier than the start time, the DND mode will take effect from the start time of each day to the end time of the next day. For example, if the start time is ", _jsx(_components.code, {
                children: "10:0"
              }), " and the end time is ", _jsx(_components.code, {
                children: "8:0"
              }), ", the DND mode will take effect from 10", _jsx(_components.div, {}), " on that day to 8", _jsx(_components.div, {}), " on the next day. The DND mode can only be enabled during a specified time period each day. Multiple DND time periods are not supported. The new setting will override the previous setting. If both this parameter and ", _jsx(_components.code, {
                children: "silentModeDuration"
              }), " are set, the DND mode will be in effect during both time periods on the day. For example, if ", _jsx(_components.code, {
                children: "silentModeDuration"
              }), " is set to ", _jsx(_components.code, {
                children: "8:0"
              }), "-", _jsx(_components.code, {
                children: "10:0"
              }), " and ", _jsx(_components.code, {
                children: "silentModeDuration"
              }), " is set to 240 minutes (4 hours) at 8", _jsx(_components.div, {}), " am, the app will be in DND mode from 8:00-12", _jsx(_components.div, {}), " on that day and from 8:00-10", _jsx(_components.div, {}), " every day thereafter."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✗"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "silentModeDuration"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The DND duration, in minutes. The value range of the DND duration is ", _jsx(_components.code, {
                children: "[0,10080]"
              }), ", where ", _jsx(_components.code, {
                children: "0"
              }), " means the parameter is invalid and ", _jsx(_components.code, {
                children: "10080"
              }), " means the DND mode lasts for 7 days. Unlike the setting of the DND time period, which takes effect every day, this parameter is valid once. It takes effect immediately after setting. For example, if you set the app-level ", _jsx(_components.code, {
                children: "silentModeDuration"
              }), " to 240 minutes (4 hours) at 8", _jsx(_components.div, {}), " am, the app will be in DND mode from 8", _jsx(_components.div, {}), " to 12", _jsx(_components.div, {}), " on the same day. If both this parameter and ", _jsx(_components.code, {
                children: "silentModeStartTime & silentModeEndTime"
              }), " are set, the DND mode will be effective during both time periods on the same day. For example, if the app-level ", _jsx(_components.code, {
                children: "silentModeStartTime & silentModeEndTime"
              }), " is set to 8:00-10", _jsx(_components.div, {}), " at 8", _jsx(_components.div, {}), " am and the DND duration is set to 240 minutes (4 hours), the app will be in DND mode from 8:00-12", _jsx(_components.div, {}), " now and from 8:00-10", _jsx(_components.div, {}), " every day thereafter."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: ["If you need to push messages to specific users during the DND period or effective time, set ", _jsx(_components.a, {
          href: "./configure-push-notifications",
          children: "Force push"
        }), "."]
      }), _jsxs(_components.p, {
        children: ["For the app and all conversations in the app, the DND setting takes precedence over the push notification setting. For example, suppose a user specifies a DND time period at the app level and sets push notifications to ", _jsx(_components.code, {
          children: "ALL"
        }), ". The app enters the DND mode during the specified time period, and the user will not receive any push notifications."]
      }), _jsxs(_components.p, {
        children: ["Alternatively, suppose a conversation is assigned a DND time period. The app does not have any DND settings and its push notifications are set to ", _jsx(_components.code, {
          children: "ALL"
        }), ". During the specified DND time period, the user will not receive any push notifications from this conversation, while push notifications from all other conversations will remain unchanged."]
      }), _jsx(_components.h2, {
        id: "set-up-push-notifications-for-the-app-1",
        children: "Set up push notifications for the app"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "setSilentModeForAll"
        }), " to set app-level push notifications. Configure push notifications and the DND mode by specifying the ", _jsx(_components.code, {
          children: "AgoraChatSilentModeParam"
        }), " field, as shown in the following code example:"]
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
                children: "// Set the push notification method to `MentionOnly`."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatSilentModeParam "
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
                children: "param "
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
                children: " [[AgoraChatSilentModeParam "
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
                children: "]initWithParamType:AgoraChatSilentModeParamTypeRemindType];"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    param.remindType "
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
                children: " AgoraChatPushRemindTypeMentionOnly;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set up offline push notifications for the app."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "[[AgoraChatClient "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "sharedClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "].pushManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "setSilentModeForAll:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "param "
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
                children: "(AgoraChatSilentModeResult "
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
                children: "aResult, AgoraChatError "
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
                children: "aError) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (aError) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                NSLog"
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
                children: '@"setSilentModeForAll error---'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "%@"
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
                children: ",aError.errorDescription);"
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
                children: "        }];"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set the offline push do not disturb timer to 15 minutes."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatSilentModeParam "
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
                children: "param "
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
                children: " [[AgoraChatSilentModeParam "
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
                children: "]initWithParamType:AgoraChatSilentModeParamTypeDuration];"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    param.silentModeDuration "
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
                children: " 15"
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
                children: "//Set the do not disturb time period for offline push to 8:30 to 15:00."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatSilentModeParam "
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
                children: "param "
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
                children: " [[AgoraChatSilentModeParam "
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
                children: "]initWithParamType:AgoraChatSilentModeParamTypeInterval];"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    param.silentModeStartTime "
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
                children: " [[AgoraChatSilentModeTime "
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
                children: "]initWithHours:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "8"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " minutes:30"
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
                children: "    param.silentModeEndTime "
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
                children: " [[AgoraChatSilentModeTime "
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
                children: "]initWithHours:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "15"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " minutes:0"
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
      }), _jsx(_components.h2, {
        id: "get-the-push-notification-settings-of-the-app-1",
        children: "Get the push notification settings of the app"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getSilentModeForAllWithCompletion"
        }), " to get the app-level push notification settings, as shown in the following code example:"]
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
                children: "[[AgoraChatClient "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "sharedClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "].pushManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "getSilentModeForAllWithCompletion:"
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
                children: "(AgoraChatSilentModeResult "
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
                children: "aResult, AgoraChatError "
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
                children: "aError) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            if"
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
                children: "aError) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "                // Get the push notification method settings of the app."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                AgoraChatPushRemindType remindType "
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
                children: " aResult.remindType;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "                // Get the Unix timestamp of the app's offline push Do Not Disturb expiration."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                NSTimeInterval"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ex "
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
                children: " aResult.expireTimestamp;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "                // Get the start time of the app's offline push do not disturb time period."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                AgoraChatSilentModeTime "
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
                children: "startTime "
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
                children: " aResult.silentModeStartTime;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "                // Get the end time of the offline push do not disturb time period of the app."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                AgoraChatSilentModeTime "
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
                children: "endTime "
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
                children: " aResult.silentModeEndTime;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            }"
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
                children: "{"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                NSLog"
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
                children: '@"getSilentModeForAll error---'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "%@"
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
                children: ",aError.errorDescription);"
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
                children: "        }];"
              })
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "set-push-notifications-for-a-single-conversation-1",
        children: "Set push notifications for a single conversation"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "setSilentModeForConversation"
        }), " to set push notifications for a specified conversation. Configure push notifications and the DND mode by specifying the ", _jsx(_components.code, {
          children: "SilentModeParam"
        }), " field, as shown in the following example:"]
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
                children: "// Set the push notification method to `MentionOnly`."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatSilentModeParam "
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
                children: "param "
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
                children: " [[AgoraChatSilentModeParam "
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
                children: "]initWithParamType:AgoraChatSilentModeParamTypeRemindType];"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    param.remindType "
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
                children: " AgoraChatPushRemindTypeMentionOnly;"
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
                children: "// Set the offline push do not disturb timer to 15 minutes."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatSilentModeParam "
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
                children: "param "
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
                children: " [[AgoraChatSilentModeParam "
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
                children: "]initWithParamType:AgoraChatSilentModeParamTypeDuration];"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    param.silentModeDuration "
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
                children: " 15"
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
                children: "// Set the offline push do not disturb mode for the conversation. Currently, it does not support setting the do not disturb time period for the conversation."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatConversationType conversationType "
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
                children: " AgoraChatConversationTypeGroupChat;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "[[AgoraChatClient "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "sharedClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "].pushManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "setSilentModeForConversation:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"conversationId"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " conversationType:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "conversationType "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "params:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "param "
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
                children: "(AgoraChatSilentModeResult "
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
                children: "aResult, AgoraChatError "
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
                children: "aError) {"
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
                children: " (aError) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                NSLog"
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
                children: '@"setSilentModeForConversation error---'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "%@"
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
                children: ",aError.errorDescription);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "         }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "     }];"
              })
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "get-push-notification-settings-for-a-single-conversation-1",
        children: "Get push notification settings for a single conversation"
      }), _jsx(_components.p, {
        children: "You can call getSilentModeForConversation to get the push notification settings for a specific conversation, as shown in the following code example:"
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
                children: "[[AgoraChatClient "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "sharedClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "].pushManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "getSilentModeForConversation:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"conversationId"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " conversationType:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatConversationTypeChat "
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
                children: "(AgoraChatSilentModeResult "
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
                children: " _Nullable aResult, AgoraChatError "
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
                children: " _Nullable aError) {"
              })]
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
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "get-push-notification-settings-for-multiple-conversations-1",
        children: "Get push notification settings for multiple conversations"
      }), _jsxs(_components.p, {
        children: ["You can get push notification settings for up to 20 conversations in each call. If a conversation uses app settings or its push notification settings have expired, the returned dictionary does not contain that conversation. Call  ", _jsx(_components.code, {
          children: "getSilentModeForConversations"
        }), " to get the push notification settings for multiple conversations, as shown in the following example:"]
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
                children: "AgoraChatConversation"
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
                children: " conv1 "
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
                children: " [AgoraChatClient.sharedClient.chatManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "getConversationWithConvId:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"conversationId1"'
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
                children: "conversations "
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
                children: " @[conv1];"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    [[AgoraChatClient "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "sharedClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "].pushManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "getSilentModeForConversations:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "conversations "
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
                children: "aResult, AgoraChatError "
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
                children: "aError) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (aError) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                NSLog"
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
                children: '@"getSilentModeForConversations error---'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "%@"
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
                children: ",aError.errorDescription);"
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
                children: "        }];"
              })
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "clear-push-notification-settings-for-a-single-conversation-1",
        children: "Clear push notification settings for a single conversation"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "clearRemindTypeForConversation"
        }), " to clear the push notification settings for a specified conversation. After clearing, this conversation will use the app's settings by default:"]
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
                children: "    [[AgoraChatClient "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "sharedClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "].pushManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "clearRemindTypeForConversation:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@""'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " conversationType:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "conversationType "
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
                children: "(AgoraChatSilentModeResult "
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
                children: "aResult, AgoraChatError "
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
                children: "aError) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (aError) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                NSLog"
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
                children: '@"clearRemindTypeForConversation error---'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "%@"
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
                children: ",aError.errorDescription);"
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
                children: "    }];"
              })
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
      }), _jsx(_components.p, {
        children: "To optimize the user experience when dealing with a large number of push notifications, Chat SDK provides fine-grained settings for push notifications and DND mode at the app and conversation levels."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Push notifications"
        })
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Setting"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "App"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "One-to-one and group chats"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "ALL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Receive push notifications for all offline messages."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AT"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Only receive push notifications for mentions.  This parameter is recommended for group chats. If a user wants to mention one or more users, they need to pass ", _jsx(_components.code, {
                children: '"em_at_list": [ "user1", "user2" ... ]'
              }), " to the ", _jsx(_components.code, {
                children: "ext"
              }), " field when creating a message; if they want to mention everyone, they need to pass ", _jsx(_components.code, {
                children: '"em_at_list": "all"'
              }), " to this field."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "NONE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Do not receive push notifications for offline messages."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The push notification setting at the conversation level takes precedence over the setting at the app level. For conversations where push notifications are not configured, the app setting is used by default."
      }), _jsxs(_components.p, {
        children: ["For example, suppose the push notifications are set to ", _jsx(_components.code, {
          children: "AT"
        }), " for the app and to ", _jsx(_components.code, {
          children: "ALL"
        }), " for a given conversation. The user will receive all push notifications from that conversation, but for all other conversations, they will only receive push notifications for mentions."]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Do Not Disturb"
        })
      }), _jsx(_components.p, {
        children: "After you have completed SDK initialization and successfully logged into the app, you can enable offline push for the app and various types of conversations, as well as turning off push by setting the DND mode."
      }), _jsx(_components.p, {
        children: "You can specify the DND time period and duration at the app level, and Chat will not send offline push notifications during these two periods. If both the DND time and DND duration are set, the DND mode will take effect for the sum of the two."
      }), _jsx(_components.p, {
        children: "The following table describes the DND time settings:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Setting"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "App"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "One-to-one and group chats"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "startTime & endTime"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The time period for turning on the DND mode, in the ", _jsx(_components.code, {
                children: "H:MH:M"
              }), " format, using the 24-hour system and accurate to the minute. For example, ", _jsx(_components.code, {
                children: "8:30"
              }), "-", _jsx(_components.code, {
                children: "10:0"
              }), ", the range of hours and minutes in the start time and end time is ", _jsx(_components.code, {
                children: "[0,23]"
              }), " and ", _jsx(_components.code, {
                children: "[0,59]"
              }), ", respectively. The DND mode is set in the following way: After the start time and end time are set, the DND mode is triggered every day. For example, if the time period is set to ", _jsx(_components.code, {
                children: "8:0"
              }), "-", _jsx(_components.code, {
                children: "10:0"
              }), ", the DND mode is effective from 8", _jsx(_components.div, {}), " to 10", _jsx(_components.div, {}), " every day. If you set the start time to ", _jsx(_components.code, {
                children: "8:0"
              }), " and the end time to ", _jsx(_components.code, {
                children: "12:0"
              }), " at 11", _jsx(_components.div, {}), ", the DND mode is effective from 11", _jsx(_components.div, {}), " to 12", _jsx(_components.div, {}), " on the same day, and from 8", _jsx(_components.div, {}), " to 12", _jsx(_components.div, {}), " every day thereafter. If the start time and end time are the same, the DND mode is effective all day. However, if it is set to ", _jsx(_components.code, {
                children: "0:0"
              }), "-", _jsx(_components.code, {
                children: "0:0"
              }), ", the DND mode is turned off. If the end time is earlier than the start time, the DND mode takes effect from the start time of each day to the end time of the next day. For example, if the start time is ", _jsx(_components.code, {
                children: "10:0"
              }), " and the end time is ", _jsx(_components.code, {
                children: "8:0"
              }), ", the DND mode takes effect from 10", _jsx(_components.div, {}), " on the same day to 8", _jsx(_components.div, {}), " on the next day. Currently, the DND mode is only supported in a specified time period each day. Multiple DND time periods are not supported. The new setting will override the previous setting. If both this parameter and ", _jsx(_components.code, {
                children: "duration"
              }), " are set, the DND mode takes effect in both time periods on the same day. For example, if ", _jsx(_components.code, {
                children: "startTime & endTime"
              }), " is set to ", _jsx(_components.code, {
                children: "8:0"
              }), "-", _jsx(_components.code, {
                children: "10:0"
              }), " at 8", _jsx(_components.div, {}), " AM and ", _jsx(_components.code, {
                children: "duration"
              }), " is set to 240 minutes (4 hours), the app will be in DND mode from 8:00-12", _jsx(_components.div, {}), " on the same day and from 8:00-10", _jsx(_components.div, {}), " every day thereafter."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✗"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "duration"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The duration of the DND mode, in minutes. The value range of the DND duration is ", _jsx(_components.code, {
                children: "[0,10080]"
              }), ", ", _jsx(_components.code, {
                children: "0"
              }), " means that the parameter is invalid, and ", _jsx(_components.code, {
                children: "10080"
              }), " means that the DND mode lasts for 7 days. Unlike the setting of the DND time period, which takes effect every day, this parameter is valid once. It takes effect immediately after setting. For example, if the app-level ", _jsx(_components.code, {
                children: "duration"
              }), " is set to 240 minutes (4 hours) at 8", _jsx(_components.div, {}), " am, the app will be in DND mode from 8", _jsx(_components.div, {}), " to 12", _jsx(_components.div, {}), " on the same day.  - If both this parameter and ", _jsx(_components.code, {
                children: "startTime & endTime"
              }), " are set, the DND mode will take effect in both time periods on the same day. For example, if the app-level ", _jsx(_components.code, {
                children: "startTime & endTime"
              }), " is set to 8:00-10", _jsx(_components.div, {}), " at 8", _jsx(_components.div, {}), " AM, and the DND duration is set to 240 minutes (4 hours), the app will be in DND mode from 8", _jsx(_components.div, {}), " to 12", _jsx(_components.div, {}), " and from 8", _jsx(_components.div, {}), " to 10", _jsx(_components.div, {}), " every day thereafter."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: ["If you need to push messages to specific users during the DND period or effective time, set ", _jsx(_components.a, {
          href: "./configure-push-notifications",
          children: "Force push"
        }), "."]
      }), _jsxs(_components.p, {
        children: ["For the app and all conversations in the app, the DND mode setting takes precedence over the push notification setting. For example, suppose you specify a DND time period at the app level and set push notifications for a specified conversation to ", _jsx(_components.code, {
          children: "ALL"
        }), " . The app enters the DND mode during the specified time period, and you will not receive any push notifications."]
      }), _jsxs(_components.p, {
        children: ["Alternatively, suppose a conversation is assigned a quiet time period, and the app does not have any quiet settings and its push notifications are set to ", _jsx(_components.code, {
          children: "ALL"
        }), ". During the specified quiet time, you will not receive any push notifications from this conversation, while push notifications from all other conversations remain unchanged."]
      }), _jsx(_components.h3, {
        id: "set-up-push-notifications-for-the-app-2",
        children: "Set up push notifications for the app"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "setSilentModeForAll"
        }), " to set app-level push notifications. Configure the push notification and DND settings by specifying the ", _jsx(_components.code, {
          children: "paramType"
        }), " field, as shown in the following code example:"]
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
                children: "  options // Push notification configuration options."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  options: {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    paramType: 0, // Push notification method."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    remindType: 'ALL' // Can be set to `ALL`, `AT` or `NONE`."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  options: {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    paramType: 1, // Do not disturb duration."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    duration: 7200000 // Do not disturb duration, in milliseconds."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  options: {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    paramType: 2, // Do not disturb time period."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    startTime: {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "      hours: 8, // The number of hours in the start time of the do not disturb period."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "      minutes: 0 // The number of minutes in the start time of the do not disturb period."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    }，"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    endTime: {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "      hours: 12, // The number of hours in the end time of the do not disturb period."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "      minutes: 0 // The number of minutes in the end time of the do not disturb period."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  }"
              })
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " params"
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
                children: "  options: {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    paramType: "
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
                children: "    remindType: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"ALL"'
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
                children: "chatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setSilentModeForAll"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(params);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "get-the-push-notification-settings-of-the-app-2",
        children: "Get the push notification settings of the app"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getSilentModeForAll"
        }), " to get the push notification settings of the app. The sample code is as follows:"]
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "chatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getSilentModeForAll"
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
      }), _jsx(_components.h3, {
        id: "set-push-notifications-for-a-single-conversation-2",
        children: "Set push notifications for a single conversation"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "setSilentModeForConversation"
        }), " to configure the push notification settings for a specified conversation. The sample code is as follows:"]
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
                children: "  const params = {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    conversationId: 'conversationId', // Conversation ID: For one-to-one chat, it is the other party's user ID; for group chat, it is the group ID."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    type: 'singleChat', // Conversation type: singleChat (one-to-one chat), groupChat (group chat)."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    options: {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "      paramType: 0, // Push notification settings."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "      remindType: 'ALL' // Can be set to `ALL`, `AT` or `NONE`."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
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
                children: "  const params = {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    conversationId: 'conversationId',"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    type: 'groupChat',"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    options: {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "      paramType: 1, // Do not disturb duration."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "      duration: 7200000 // Do not disturb duration, in milliseconds."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
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
                children: "  const params = {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    conversationId: 'conversationId',"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    type: 'chatRoom',"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    options: {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "      paramType: 2, // Do not disturb time period."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "      startTime: {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        hours: 8, // The number of hours in the start time of the do not disturb period."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        minutes: 0 // The number of minutes in the start time of the do not disturb period."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "      }，"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "      endTime: {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        hours: 12, // The number of hours in the end time of the do not disturb period."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        minutes: 0 // The number of minutes in the end time of the do not disturb period."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "      }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  }"
              })
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " params"
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
                children: "  conversationId: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"conversationId"'
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
                children: "  type: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"groupChat"'
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
                children: "  options: {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    paramType: "
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
                children: "    remindType: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"ALL"'
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
                children: "chatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setSilentModeForConversation"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(params);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "get-push-notification-settings-for-a-single-conversation-2",
        children: "Get push notification settings for a single conversation"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getSilentModeForConversation"
        }), " to get the push notification settings for a single conversation. The sample code is as follows:"]
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " params"
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
                children: "  conversationId: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '" conversationId "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Conversation ID: For one-to-one chat, it is the other party's user ID; for group chat, it is the group ID."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  type: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '" singleChat "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Conversation type: singleChat is a one-to-one chat, groupChat is a group chat."
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
                children: "chatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getSilentModeForConversation"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(params);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "get-push-notification-settings-for-multiple-conversations-2",
        children: "Get push notification settings for multiple conversations"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsx(_components.li, {
          children: "You can get push notification settings for up to 20 conversations at a time."
        }), `
`, _jsx(_components.li, {
          children: "If the conversation uses app settings or its push notification settings have expired, the returned dictionary does not contain this conversation."
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getSilentModeForConversations"
        }), " to get the push notification settings for multiple conversations. The sample code is as follows :"]
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " params"
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
                children: "  conversationList: ["
              })
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
                children: "      id: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '" conversationId "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Conversation ID: For one-to-one chat, it is the other party's user ID; for group chat, it is the group ID."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "      type: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '" singleChat "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Conversation type: singleChat is a one-to-one chat, groupChat is a group chat."
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
                children: "      id: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"conversationId"'
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
                children: "      type: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"groupChat"'
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
                children: "  ],"
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
`, _jsxs(_components.span, {
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
                children: "getSilentModeForConversations"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(params);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "clear-push-notification-settings-for-a-single-conversation-2",
        children: "Clear push notification settings for a single conversation"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "clearRemindTypeForConversation"
        }), " to clear the push notification type settings for a specified conversation. After clearing, this conversation will use the app's settings by default. The sample code is as follows:"]
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " params"
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
                children: "  conversationId: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '" conversationId "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Conversation ID: For one-to-one chat, it is the other party's user ID; for group chat, it is the group ID."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  type: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '" groupChat "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Conversation type: singleChat is a one-to-one chat, groupChat is a group chat."
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
                children: "chatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "clearRemindTypeForConversation"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(params);"
              })]
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
      }), _jsx(_components.p, {
        children: "To optimize the user experience when dealing with a large number of push notifications, Chat SDK provides fine-grained settings for push notifications and do not disturb mode at the app and conversation levels."
      }), _jsx(_components.h2, {
        id: "push-notification-settings-2",
        children: "Push notification settings"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "App"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "One-to-one and group chats"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "ALL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Receive push notifications for all offline messages."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MENTION_ONLY"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Receive push notifications only for mentions. This parameter is recommended for group chats. To mention one or more users, pass ", _jsx(_components.code, {
                children: '"em_at_list": [ "user1", "user2" ... ]'
              }), " to the ", _jsx(_components.code, {
                children: "ext"
              }), " field when creating a message. To mention all, pass ", _jsx(_components.code, {
                children: '"em_at_list": "all"'
              }), " to this field."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "NONE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Do not receive push notifications for offline messages."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The push notification setting at the conversation level takes precedence over the setting at the app level. For conversations where the push notification setting is not configured, the app setting is used by default."
      }), _jsxs(_components.p, {
        children: ["For example, suppose the push notifications for the app are set to ", _jsx(_components.code, {
          children: "MENTION_ONLY"
        }), " and the push notifications for a given conversation are set to ", _jsx(_components.code, {
          children: "ALL"
        }), ". A user will receive all push notifications from that conversation, but for all other conversations, they will only receive push notifications for messages that mention them."]
      }), _jsx(_components.p, {
        children: "You can specify the DND time period and duration at the app level, and Chat will not send offline push notifications during these two periods. If both the DND time and DND duration are set, the DND mode will take effect for the sum of the two."
      }), _jsx(_components.p, {
        children: "The following table describes the DND time settings:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Setting"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "App"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "One-to-one and group chats"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SILENT_MODE_INTERVAL"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The time period for turning on the DND mode, in the ", _jsx(_components.code, {
                children: "H:MH:M"
              }), " format, using the 24-hour system and accurate to the minute. For example, ", _jsx(_components.code, {
                children: "8:30"
              }), "-", _jsx(_components.code, {
                children: "10:0"
              }), ". The range of hours and minutes in the start time and end time is ", _jsx(_components.code, {
                children: "[0,23]"
              }), " and ", _jsx(_components.code, {
                children: "[0,59]"
              }), ", respectively. The DND mode is set in the following way: After the start time and end time are set, the DND mode is triggered every day. For example, if the time period is set to ", _jsx(_components.code, {
                children: "8:0"
              }), "-", _jsx(_components.code, {
                children: "10:0"
              }), ", the DND mode is effective from 8", _jsx(_components.div, {}), " to 10", _jsx(_components.div, {}), " every day. If you set the start time to ", _jsx(_components.code, {
                children: "8:0"
              }), " and the end time to ", _jsx(_components.code, {
                children: "12:0"
              }), " at 11", _jsx(_components.div, {}), ", the DND mode is effective from 11", _jsx(_components.div, {}), " to 12", _jsx(_components.div, {}), " on the same day, and from 8", _jsx(_components.div, {}), " to 12", _jsx(_components.div, {}), " every day thereafter. If the start time and end time are the same, the DND mode is effective all day. However, if it is set to ", _jsx(_components.code, {
                children: "0:0"
              }), "-", _jsx(_components.code, {
                children: "0:0"
              }), ", the DND mode will be turned off. If the end time is earlier than the start time, the DND mode will take effect from the start time of each day to the end time of the next day. For example, if the start time is ", _jsx(_components.code, {
                children: "10:0"
              }), " and the end time is ", _jsx(_components.code, {
                children: "8:0"
              }), ", the DND mode will take effect from 10", _jsx(_components.div, {}), " on that day to 8", _jsx(_components.div, {}), " on the next day. The DND mode can only be enabled during a specified time period each day. Multiple DND time periods are not supported. The new setting will override the previous setting. If both this parameter and ", _jsx(_components.code, {
                children: "SILENT_MODE_DURATION"
              }), " are set, the DND mode will be in effect during both time periods on the day. For example, if ", _jsx(_components.code, {
                children: "SILENT_MODE_INTERVAL"
              }), " is set to ", _jsx(_components.code, {
                children: "8:0"
              }), "-", _jsx(_components.code, {
                children: "10:0"
              }), " and ", _jsx(_components.code, {
                children: "SILENT_MODE_DURATION"
              }), " is set to 240 minutes (4 hours) at 8", _jsx(_components.div, {}), " am, the app will be in DND mode from 8:00-12", _jsx(_components.div, {}), " on that day and from 8:00-10", _jsx(_components.div, {}), " every day thereafter."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✗"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SILENT_MODE_DURATION"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The DND duration, in minutes. The value range of the DND duration is ", _jsx(_components.code, {
                children: "[0,10080]"
              }), ", where ", _jsx(_components.code, {
                children: "0"
              }), " means the parameter is invalid and ", _jsx(_components.code, {
                children: "10080"
              }), " means the DND mode lasts for 7 days. Unlike the setting of the DND time period, which takes effect every day, this parameter is valid once. It takes effect immediately after setting. For example, if you set the app-level ", _jsx(_components.code, {
                children: "SILENT_MODE_DURATION"
              }), " to 240 minutes (4 hours) at 8", _jsx(_components.div, {}), " am, the app will be in DND mode from 8", _jsx(_components.div, {}), " to 12", _jsx(_components.div, {}), " on the same day. If both this parameter and ", _jsx(_components.code, {
                children: "SILENT_MODE_INTERVAL"
              }), " are set, the DND mode will be effective during both time periods on the same day. For example, if the app-level ", _jsx(_components.code, {
                children: "SILENT_MODE_INTERVAL"
              }), " is set to 8:00-10", _jsx(_components.div, {}), " at 8", _jsx(_components.div, {}), " am and the DND duration is set to 240 minutes (4 hours), the app will be in DND mode from 8:00-12", _jsx(_components.div, {}), " now and from 8:00-10", _jsx(_components.div, {}), " every day thereafter."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: ["If you need to push messages to specific users during the DND period or effective time, set ", _jsx(_components.a, {
          href: "./configure-push-notifications",
          children: "Force push"
        }), "."]
      }), _jsxs(_components.p, {
        children: ["For the app and all conversations in the app, the DND setting takes precedence over the push notification setting. For example, suppose a user specifies a DND time period at the app level and sets push notifications to ", _jsx(_components.code, {
          children: "ALL"
        }), ". The app enters the DND mode during the specified time period, and the user will not receive any push notifications."]
      }), _jsxs(_components.p, {
        children: ["Alternatively, suppose a conversation is assigned a DND time period. The app does not have any DND settings and its push notifications are set to ", _jsx(_components.code, {
          children: "ALL"
        }), ". During the specified DND time period, the user will not receive any push notifications from this conversation, while push notifications from all other conversations will remain unchanged."]
      }), _jsx(_components.h2, {
        id: "set-up-push-notifications-for-the-app-3",
        children: "Set up push notifications for the app"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "setSilentModeForAll"
        }), " to set app-level push notifications. Set push notifications and DND mode by specifying the ", _jsx(_components.code, {
          children: "ChatSilentModeParam"
        }), " field, as shown in the following example:"]
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
                children: "//Set push notification mode to `MENTION_ONLY`."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "ChatSilentModeParam"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " param "
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
                children: " ChatSilentModeParam"
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
                children: "remindType"
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
                children: "ChatPushRemindType"
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
                children: "MENTION_ONLY"
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
                children: "//Set the offline push do not disturb timer to 15 minutes."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "ChatSilentModeParam"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " param "
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
                children: " ChatSilentModeParam"
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
                children: "silentDuration"
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
                children: "15"
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
                children: "//Set the do not disturb time period for offline push to 8:30 to 15:00."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "ChatSilentModeParam"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " param "
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
                children: " ChatSilentModeParam"
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
                children: "silentModeInterval"
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
                children: "  startTime"
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
                children: " ChatSilentModeTime"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(hour"
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
                children: " 8"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", minute"
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
                children: " 30"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "),"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  endTime"
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
                children: " ChatSilentModeTime"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(hour"
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
                children: " 15"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", minute"
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
                children: "),"
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "try"
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
                children: "  //Set up offline push notifications for the app."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "  await"
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
                children: ".getInstance.pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setSilentModeForAll"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(param"
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
                children: " param);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "} "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "on"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (e) {}"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "get-the-push-notification-settings-of-the-app-3",
        children: "Get the push notification settings of the app"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "fetchSilentModeForAll"
        }), " to retrieve the app-level push notification settings, as shown in the following example:"]
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
                children: "try"
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
                children: "  ChatSilentModeResult"
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
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "      await"
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
                children: ".getInstance.pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchSilentModeForAll"
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
                children: "  // Get the push notification method settings of the app."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "  ChatPushRemindType"
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
                children: " remindType "
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
                children: " result.remindType;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Get the Unix timestamp of the app's offline push Do Not Disturb expiration."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "  int"
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
                children: " result.expireTimestamp;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Get the start time of the app's offline push do not disturb time period."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "  ChatSilentModeTime"
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
                children: " startTime "
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
                children: " result.startTime;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // The number of hours in which the quiet time period starts."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  startTime"
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
                children: ".hour;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // The number of minutes in the start time of the do not disturb period."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  startTime"
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
                children: ".minute;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Get the end time of the offline push do not disturb time period of the app."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "  ChatSilentModeTime"
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
                children: " endTime "
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
                children: " result.endTime;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // The number of hours in which the quiet time period ends."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  endTime"
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
                children: ".hour;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // The number of minutes in the end time of the do not disturb period."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  endTime"
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
                children: ".minute;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "} "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "on"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (e) {}"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "set-push-notifications-for-a-single-conversation-3",
        children: "Set push notifications for a single conversation"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "setSilentModeForConversation"
        }), " to set push notifications for a specified conversation. Configure push notifications and the DND mode by specifying the ", _jsx(_components.code, {
          children: "SilentModeParam"
        }), " field, as shown in the following example :"]
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
                children: "//Set push notification mode to `MENTION_ONLY`."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "ChatSilentModeParam"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " param "
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
                children: " ChatSilentModeParam"
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
                children: "remindType"
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
                children: "ChatPushRemindType"
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
                children: "MENTION_ONLY"
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
                children: "//Set the offline push do not disturb timer to 15 minutes."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "ChatSilentModeParam"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " param "
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
                children: " ChatSilentModeParam"
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
                children: "silentDuration"
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
                children: "15"
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
                children: "try"
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
                children: "  //Set the offline push do not disturb mode for the conversation. Currently, it does not support setting the do not disturb time period for the conversation."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "  ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance.pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setConversationSilentMode"
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
                children: "    conversationId"
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
                children: " conversationId,"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    type"
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
                children: " conversationType,"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    stop"
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
                children: " stop,"
              })]
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "} "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "on"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (e) {}"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "get-push-notification-settings-for-a-single-conversation-3",
        children: "Get push notification settings for a single conversation"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "fetchConversationSilentMode"
        }), " to retrieve the push notification setting for a specified conversation, as shown in the following example:"]
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
                children: "try"
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
                children: "  //Set the offline push do not disturb mode for the conversation. Currently, it does not support setting the do not disturb time period for the conversation."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "  ChatSilentModeResult"
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
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "      await"
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
                children: ".getInstance.pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchConversationSilentMode"
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
                children: "    conversationId"
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
                children: " conversationId,"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    type"
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
                children: " conversationType,"
              })]
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
                children: "  //Get the push notification method for the conversation."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  result.remindType;"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Get the offline push Do Not Disturb expiration Unix timestamp of the conversation."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  result.expireTimestamp;"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "} "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "on"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (e) {}"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "get-push-notification-settings-for-multiple-conversations-3",
        children: "Get push notification settings for multiple conversations"
      }), _jsx(_components.p, {
        children: "You can get push notification settings for up to 20 conversations in each call. If a conversation uses app settings or its push notification settings have expired, the returned dictionary does not contain that conversation."
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "fetchSilentModeForConversations"
        }), " to retrieve push notification settings for multiple conversations, as shown in the following sample:"]
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
                children: "try"
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
                children: "  Map"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " map "
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance.pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchSilentModeForConversations"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(conversationList);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "} "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "on"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (e) {}"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "clear-push-notification-settings-for-a-single-conversation-3",
        children: "Clear push notification settings for a single conversation"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "clearRemindTypeForConversation"
        }), " to clear the push notification type for a specific conversation. After clearing, the conversation will use the app's settings by default:"]
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
                children: "try"
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
                children: "  await"
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
                children: ".getInstance.pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "removeConversationSilentMode"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(conversationId"
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
                children: " conversationId, type"
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
                children: " conversationType);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "} "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "on"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (e) {}"
              })]
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
      }), _jsx(_components.p, {
        children: "To optimize the user experience when dealing with a large number of push notifications, Chat SDK provides fine-grained settings for push notifications and do not disturb mode at the app and conversation levels."
      }), _jsx(_components.h2, {
        id: "push-notification-settings-3",
        children: "Push notification settings"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "App"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "One-to-one and group chats"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "ALL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Receive push notifications for all offline messages."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MENTION_ONLY"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Receive push notifications only for mentions. This parameter is recommended for group chats. To mention one or more users, pass ", _jsx(_components.code, {
                children: '"em_at_list": [ "user1", "user2" ... ]'
              }), " to the ", _jsx(_components.code, {
                children: "ext"
              }), " field when creating a message. To mention all, pass ", _jsx(_components.code, {
                children: '"em_at_list": "all"'
              }), " to this field."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "NONE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Do not receive push notifications for offline messages."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: "The push notification setting at the conversation level takes precedence over the setting at the app level. For conversations where the push notification setting is not configured, the app setting is used by default."
      }), _jsxs(_components.p, {
        children: ["For example, suppose the push notifications for the app are set to ", _jsx(_components.code, {
          children: "MENTION_ONLY"
        }), " and the push notifications for a given conversation are set to ", _jsx(_components.code, {
          children: "ALL"
        }), ". A user will receive all push notifications from that conversation, but for all other conversations, they will only receive push notifications for messages that mention them."]
      }), _jsx(_components.p, {
        children: "You can specify the DND time period and duration at the app level, and Chat will not send offline push notifications during these two periods. If both the DND time and DND duration are set, the DND mode will take effect for the sum of the two."
      }), _jsx(_components.p, {
        children: "The following table describes the DND time settings:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Setting"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "App"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "One-to-one and group chats"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "startTime & endTime"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["For example, ", _jsx(_components.code, {
                children: "8:30"
              }), "-", _jsx(_components.code, {
                children: "10:0"
              }), ". The range of hours and minutes in the start time and end time is ", _jsx(_components.code, {
                children: "[0,23]"
              }), " and ", _jsx(_components.code, {
                children: "[0,59]"
              }), ", respectively. The DND mode is set in the following way: After the start time and end time are set, the DND mode is triggered every day. For example, if the time period is set to ", _jsx(_components.code, {
                children: "8:0"
              }), "-", _jsx(_components.code, {
                children: "10:0"
              }), ", the DND mode is effective from 8", _jsx(_components.div, {}), " to 10", _jsx(_components.div, {}), " every day. If you set the start time to ", _jsx(_components.code, {
                children: "8:0"
              }), " and the end time to ", _jsx(_components.code, {
                children: "12:0"
              }), " at 11", _jsx(_components.div, {}), ", the DND mode is effective from 11", _jsx(_components.div, {}), " to 12", _jsx(_components.div, {}), " on the same day, and from 8", _jsx(_components.div, {}), " to 12", _jsx(_components.div, {}), " every day thereafter. If the start time and end time are the same, the DND mode is effective all day. However, if it is set to ", _jsx(_components.code, {
                children: "0:0"
              }), "-", _jsx(_components.code, {
                children: "0:0"
              }), ", the DND mode will be turned off. If the end time is earlier than the start time, the DND mode will take effect from the start time of each day to the end time of the next day. For example, if the start time is ", _jsx(_components.code, {
                children: "10:0"
              }), " and the end time is ", _jsx(_components.code, {
                children: "8:0"
              }), ", the DND mode will take effect from 10", _jsx(_components.div, {}), " on that day to 8", _jsx(_components.div, {}), " on the next day. The DND mode can only be enabled during a specified time period each day. Multiple DND time periods are not supported. The new setting will override the previous setting. If both this parameter and ", _jsx(_components.code, {
                children: "expireTimestamp"
              }), " are set, the DND mode will be in effect during both time periods on the day. For example, if ", _jsx(_components.code, {
                children: "startTime & endTime"
              }), " is set to ", _jsx(_components.code, {
                children: "8:0"
              }), "-", _jsx(_components.code, {
                children: "10:0"
              }), " and ", _jsx(_components.code, {
                children: "expireTimestamp"
              }), " is set to 240 minutes (4 hours) at 8", _jsx(_components.div, {}), " am, the app will be in DND mode from 8:00-12", _jsx(_components.div, {}), " on that day and from 8:00-10", _jsx(_components.div, {}), " every day thereafter."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✗"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "expireTimestamp"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The DND duration, in minutes. The value range of the DND duration is ", _jsx(_components.code, {
                children: "[0,10080]"
              }), ", where ", _jsx(_components.code, {
                children: "0"
              }), " means the parameter is invalid and ", _jsx(_components.code, {
                children: "10080"
              }), " means the DND mode lasts for 7 days. Unlike the setting of the DND time period, which takes effect every day, this parameter is valid once. It takes effect immediately after setting. For example, if you set the app-level ", _jsx(_components.code, {
                children: "expireTimestamp"
              }), " to 240 minutes (4 hours) at 8", _jsx(_components.div, {}), " am, the app will be in DND mode from 8", _jsx(_components.div, {}), " to 12", _jsx(_components.div, {}), " on the same day. If both this parameter and ", _jsx(_components.code, {
                children: "SILENT_MODE_INTERVAL"
              }), " are set, the DND mode will be effective during both time periods on the same day. For example, if the app-level ", _jsx(_components.code, {
                children: "startTime & endTime"
              }), " is set to 8:00-10", _jsx(_components.div, {}), " at 8", _jsx(_components.div, {}), " am and the DND duration is set to 240 minutes (4 hours), the app will be in DND mode from 8:00-12", _jsx(_components.div, {}), " now and from 8:00-10", _jsx(_components.div, {}), " every day thereafter."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "✓"
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: ["If you need to push messages to specific users during the DND period or effective time, set ", _jsx(_components.a, {
          href: "./configure-push-notifications",
          children: "Force push"
        }), "."]
      }), _jsxs(_components.p, {
        children: ["For the app and all conversations in the app, the DND setting takes precedence over the push notification setting. For example, suppose a user specifies a DND time period at the app level and sets push notifications to ", _jsx(_components.code, {
          children: "ALL"
        }), ". The app enters the DND mode during the specified time period, and the user will not receive any push notifications."]
      }), _jsxs(_components.p, {
        children: ["Alternatively, suppose a conversation is assigned a DND time period. The app does not have any DND settings and its push notifications are set to ", _jsx(_components.code, {
          children: "ALL"
        }), ". During the specified DND time period, the user will not receive any push notifications from this conversation, while push notifications from all other conversations will remain unchanged."]
      }), _jsx(_components.h2, {
        id: "set-up-push-notifications-for-the-app-4",
        children: "Set up push notifications for the app"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "setSilentModeForAll"
        }), " to set app-level push notifications. Set the push notifications and DND mode by specifying the ", _jsx(_components.code, {
          children: "ChatSilentModeParam"
        }), " field, as shown in the following example:"]
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
                children: "// convId: conversation ID."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// convType: conversation type."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set the push notification method to `MENTION_ONLY`."
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
                children: " option"
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
                children: " ChatSilentModeParam."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "constructorWithNotification"
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
                children: "  ChatPushRemindType."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "MENTION_ONLY"
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
                children: "// Set the do not disturb time to 10 minutes."
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
                children: " option"
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
                children: " ChatSilentModeParam."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "constructorWithDuration"
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
                children: "10"
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
                children: "// Set the Do Not Disturb time period to 10:10-11:00."
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
                children: " option"
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
                children: " ChatSilentModeParam."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "constructorWithPeriod"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "({"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  startTime: "
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
                children: " ChatSilentModeTime"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "({ hour: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "10"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", minute: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "10"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " }),"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  endTime: "
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
                children: " ChatSilentModeTime"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "({ hour: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "11"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", minute: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "10"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " }),"
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
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set up offline push notifications for the app."
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
                children: "  .pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setSilentModeForAll"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(option)"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
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
                children: '"Succeeded in setting the push notification."'
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
                children: "  })"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
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
                children: '"Failed to set the push notification."'
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
                children: "  });"
              })
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "get-the-push-notification-settings-of-the-app-4",
        children: "Get the push notification settings of the app"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "fetchSilentModeForAll"
        }), " to retrieve the app-level push notification settings, as shown in the following code example:"]
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
                children: "  .pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchSilentModeForAll"
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
                children: "  ."
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
                children: '"Succeeded in getting the push notification settings of the app."'
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
                children: "  })"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
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
                children: '"Failed to get the push notification settings of the app."'
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
                children: "  });"
              })
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "set-push-notifications-for-a-single-conversation-4",
        children: "Set push notifications for a single conversation"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "setSilentModeForConversation"
        }), " to set push notifications for a specified conversation. Set the push notifications and DND mode by specifying the ", _jsx(_components.code, {
          children: "ChatSilentModeParam"
        }), " field, as shown in the following example:"]
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
                children: "// convId: conversation ID."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// convType: conversation type."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set the push notification method to `MENTION_ONLY`."
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
                children: " option"
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
                children: " ChatSilentModeParam."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "constructorWithNotification"
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
                children: "  ChatPushRemindType."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "MENTION_ONLY"
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
                children: "// Set the do not disturb time to 10 minutes."
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
                children: " option"
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
                children: " ChatSilentModeParam."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "constructorWithDuration"
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
                children: "10"
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
                children: "// Set the Do Not Disturb time period to 10:10-11:00."
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
                children: " option"
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
                children: " ChatSilentModeParam."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "constructorWithPeriod"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "({"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  startTime: "
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
                children: " ChatSilentModeTime"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "({ hour: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "10"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", minute: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "10"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " }),"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  endTime: "
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
                children: " ChatSilentModeTime"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "({ hour: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "11"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", minute: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "10"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " }),"
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
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set push notification for the specified conversation."
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
                children: "  .pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setSilentModeForConversation"
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
                children: "    invited ,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    convType,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    option,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  })"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
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
                children: '"Succeeded in getting the push notification settings of the conversation."'
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
                children: "  })"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
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
                children: '"Failed to get the push notification settings of the conversation."'
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
                children: "  });"
              })
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "get-push-notifications-for-a-single-conversation",
        children: "Get push notifications for a single conversation"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "fetchSilentModeForConversation"
        }), " to retrieve the push notification settings for a specified conversation, as shown in the following example:"]
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
                children: "// convId: conversation ID."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// convType: conversation type."
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
                children: "  .pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchSilentModeForConversation"
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
                children: "    invited ,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    convType,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  })"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
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
                children: '"Succeeded in getting the push notification settings of the conversation."'
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
                children: "  })"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
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
                children: '"Failed to get the push notification settings of the conversation."'
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
                children: "  });"
              })
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "get-push-notification-settings-for-multiple-conversations-4",
        children: "Get push notification settings for multiple conversations"
      }), _jsx(_components.p, {
        children: "You can get push notification settings for up to 20 conversations in each call. If a conversation uses app settings or its push notification settings have expired, the returned dictionary does not contain that conversation."
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "fetchSilentModeForConversations"
        }), " to retrieve push notification settings for multiple conversations, as shown in the following example:"]
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
                children: "// conversations: conversation list."
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
                children: "  .pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchSilentModeForConversations"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(conversations)"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
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
                children: '"Succeeded in getting the conversation list."'
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
                children: "  })"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
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
                children: '"Failed to get the conversation list."'
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
                children: "  });"
              })
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "clear-push-notification-settings-for-a-single-conversation-4",
        children: "Clear push notification settings for a single conversation"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "removeSilentModeForConversation"
        }), " to clear the push notification mode settings for a specific conversation. After clearing, the conversation will use the app's settings by default."]
      }), _jsx(_components.p, {
        children: "The following code example shows how to clear a conversation's push notifications:"
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
                children: "// convId: conversation ID."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// convType: conversation type."
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
                children: "  .pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "removeSilentModeForConversation"
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
                children: "    invited ,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    convType,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  })"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
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
                children: '"Succeeded in deleting the push notification settings of the conversation."'
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
                children: "  })"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
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
                children: '"Failed to delete the push notification settings of the conversation."'
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
                children: "  });"
              })
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
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "This feature is not supported for this platform."
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
          children: "This feature is not supported for this platform."
        })
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
