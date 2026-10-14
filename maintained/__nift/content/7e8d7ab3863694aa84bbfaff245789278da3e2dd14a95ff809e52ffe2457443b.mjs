import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Error codes",
  description: "Introduces the error codes and error messages that might be returned by the SDK when you call the Agora Chat APIs."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;web&#x22;,&#x22;react-native&#x22;,&#x22;windows&#x22;,&#x22;unity&#x22;,&#x22;flutter&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs.

    Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact [support@agora.io](mailto\\:support@agora.io) for assistance.

    You may receive an error code and error message in one of the following ways:

    * As the return value when a method call fails.
    * As the error code reported through the \`onError\` callback.

    | Error code | Error message                               | Possible reason                                                                                                                                                                                                                                                | Fix                                                                                                                                                                |
    | :--------- | :------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`0\`        | \`EM_NO_ERROR\`                               | The operation succeeds.                                                                                                                                                                                                                                        | No action required.                                                                                                                                                |
    | \`1\`        | \`GENERAL_ERROR\`                             | Default error related to the SDK or API requests. Occurs when SDK isn't properly initialized or a request fails without specific reason.                                                                                                                       | Analyze logs and called APIs.                                                                                                                                      |
    | \`2\`        | \`NETWORK_ERROR\`                             | SDK disconnected from server due to network interruption.                                                                                                                                                                                                      | Retry operation after network restoration.                                                                                                                         |
    | \`3\`        | \`DATABASE_ERROR\`                            | Database operation fails.                                                                                                                                                                                                                                      | Analyze called API with logs. Error occurs when updating non-existent messages with \`Conversation#updateMessage\` or when database isn't open during operations.    |
    | \`4\`        | \`EXCEED_SERVICE_LIMIT\`                      | Usage exceeds service limit, such as registered users or contacts exceeding current pricing plan limits.                                                                                                                                                       | Check API parameters. Control \`limit\` parameter values. For rate limiting, retry after delay.                                                                      |
    | \`8\`        | \`APP_ACTIVE_NUMBER_REACH_LIMITATION\`        | App reached maximum daily active users (DAU) or monthly active users (MAU).                                                                                                                                                                                    | Upgrade Chat service in the console.                                                                                                                               |
    | \`100\`      | \`INVALID_APP_KEY\`                           | App Key is invalid.                                                                                                                                                                                                                                            | Initialize with correct App Key.                                                                                                                                   |
    | \`101\`      | \`INVALID_USER_NAME\`                         | User ID is invalid, such as empty string when adding a contact.                                                                                                                                                                                                | Ensure user ID parameter is not null.                                                                                                                              |
    | \`102\`      | \`INVALID_PASSWORD\`                          | Login password is empty or invalid.                                                                                                                                                                                                                            | Verify password parameter is correct.                                                                                                                              |
    | \`103\`      | \`INVALID_URL\`                               | URL is incorrect.                                                                                                                                                                                                                                              | Verify API parameters are correct.                                                                                                                                 |
    | \`104\`      | \`INVALID_TOKEN\`                             | User token is empty or invalid.                                                                                                                                                                                                                                | Verify token parameters are correct.                                                                                                                               |
    | \`105\`      | \`USER_NAME_TOO_LONG\`                        | User ID exceeds 64 bytes limit.                                                                                                                                                                                                                                | Check user ID length.                                                                                                                                              |
    | \`108\`      | \`TOKEN_EXPIRED\`                             | Token has expired.                                                                                                                                                                                                                                             | When callback received, regenerate token and call \`loginWithToken\` to log in again.                                                                                |
    | \`109\`      | \`TOKEN_WILL_EXPIRE\`                         | Token passed half of its validity period.                                                                                                                                                                                                                      | When callback received, regenerate token and call \`ChatClient#renewToken\` to update.                                                                               |
    | \`110\`      | \`INVALID_PARAM\`                             | Invalid parameter.                                                                                                                                                                                                                                             | Verify API parameters are valid.                                                                                                                                   |
    | \`200\`      | \`USER_ALREADY_LOGIN\`                        | User already logged in.                                                                                                                                                                                                                                        | Check if SDK has automatic login enabled or if login method was already called.                                                                                    |
    | \`201\`      | \`USER_NOT_LOGIN\`                            | User not logged in. Session invalid or expired when attempting operations.                                                                                                                                                                                     | Ensure Chat login completes before calling API.                                                                                                                    |
    | \`202\`      | \`USER_AUTHENTICATION_FAILED\`                | User authentication fails due to invalid or expired token.                                                                                                                                                                                                     | If logged out, log in again. Otherwise, regenerate token and call \`ChatClient#renewToken\`.                                                                         |
    | \`203\`      | \`USER_ALREADY_EXIST\`                        | User ID specified during registration already exists.                                                                                                                                                                                                          | Register with a different user ID.                                                                                                                                 |
    | \`204\`      | \`USER_NOT_FOUND\`                            | User does not exist.                                                                                                                                                                                                                                           | Verify user ID parameter is correct.                                                                                                                               |
    | \`205\`      | \`USER_ILLEGAL_ARGUMENT\`                     | Incorrect user parameter. User ID invalid or empty during registration or attribute updates.                                                                                                                                                                   | Verify API parameters are correct.                                                                                                                                 |
    | \`206\`      | \`USER_LOGIN_ANOTHER_DEVICE\`                 | User logged in on another device. Forces logout on current device if multi-device service isn't enabled.                                                                                                                                                       | When \`ConnectionListener#onLogout\` is triggered, log in again.                                                                                                     |
    | \`207\`      | \`USER_REMOVED\`                              | User account deleted in the console.                                                                                                                                                                                                                           | When \`ConnectionListener#onLogout\` is triggered, return to login page. Account no longer available.                                                                |
    | \`209\`      | \`PUSH_UPDATECONFIGS_FAILED\`                 | Failed to update push configurations.                                                                                                                                                                                                                          | Check error-reporting API, wait, then retry.                                                                                                                       |
    | \`210\`      | \`USER_PERMISSION_DENIED\`                    | User lacks permission for operation. User on block list attempts to send messageUser tries to modify another user's messageUser tries to modify custom group member attribute set by anotherUser attempts to destroy message thread without proper permissions | Verify user has operation permission.                                                                                                                              |
    | \`211\`      | \`USER_BINDDEVICETOKEN_FAILED\`               | Failed to bind push token to device.                                                                                                                                                                                                                           | Verify token for device push binding isn't empty.                                                                                                                  |
    | \`212\`      | \`USER_UNBIND_DEVICETOKEN_FAILED\`            | Failed to unbind push token from device.                                                                                                                                                                                                                       | Retry \`ChatClient#logout\`. For guaranteed exit, call with parameter set to \`false\` (unbind).                                                                       |
    | \`213\`      | \`USER_BIND_ANOTHER_DEVICE\`                  | User logged in to another device in single-device login configuration.                                                                                                                                                                                         | Configure for multiple device login or use \`ChatClient#kickDeviceWithToken\` before logging in.                                                                     |
    | \`214\`      | \`USER_LOGIN_TOO_MANY_DEVICES\`               | User reached maximum number of login devices.                                                                                                                                                                                                                  | Increase allowed simultaneous devices or use \`ChatClient#kickDeviceWithToken\` before logging in.                                                                   |
    | \`215\`      | \`USER_MUTED\`                                | User is muted in group or chat room.                                                                                                                                                                                                                           | Restrict message sending in UI for users who are banned.                                                                                                           |
    | \`216\`      | \`USER_KICKED_BY_CHANGE_PASSWORD\`            | User changed login password, ending current session.                                                                                                                                                                                                           | When \`ConnectionListener#onLogout\` is received, call \`ChatClient#logout\` and return to login page.                                                                 |
    | \`217\`      | \`USER_KICKED_BY_OTHER_DEVICE\`               | User kicked off device via console or API call from another device.                                                                                                                                                                                            | When \`ConnectionListener#onLogout\` is received, call \`ChatClient#logout\` and return to login page.                                                                 |
    | \`218\`      | \`USER_ALREADY_LOGIN_ANOTHER\`                | Another user already logged in on device.                                                                                                                                                                                                                      | Call \`ChatClient#logout\` to log out current account before logging in with different account.                                                                      |
    | \`219\`      | \`USER_MUTED_BY_ADMIN\`                       | User cannot send message when all members are muted.                                                                                                                                                                                                           | Restrict message sending in UI when full ban is active.                                                                                                            |
    | \`220\`      | \`USER_DEVICE_CHANGED\`                       | Login attempt on device that isn't the last used device in single-device configuration.                                                                                                                                                                        | When \`ConnectionListener#onLogout\` is received, call \`ChatClient#logout\` and return to login page.                                                                 |
    | \`221\`      | \`USER_NOT_ON_ROSTER\`                        | User cannot send message to non-contact when contacts-only messaging enabled.                                                                                                                                                                                  | Call \`ContactManager#addContact\` first. Send messages after friend request is accepted.                                                                            |
    | \`300\`      | \`SERVER_NOT_REACHABLE\`                      | Server unreachable due to network issues.                                                                                                                                                                                                                      | For login errors, try switching networks or contacting support for TLS encryption in specific regions. For other operations, switch networks or retry after delay. |
    | \`301\`      | \`SERVER_TIMEOUT\`                            | Request timeout when server doesn't respond within specified period.                                                                                                                                                                                           | Retry API after switching networks or waiting.                                                                                                                     |
    | \`302\`      | \`SERVER_BUSY\`                               | Server currently busy.                                                                                                                                                                                                                                         | Check for repeated API calls. May occur when calling again before previous result returned.                                                                        |
    | \`303\`      | \`SERVER_UNKNOWN_ERROR\`                      | Common server request error.                                                                                                                                                                                                                                   | Provide logs and called APIs for troubleshooting.                                                                                                                  |
    | \`304\`      | \`SERVER_GET_DNSLIST_FAILED\`                 | SDK fails to get server configuration.                                                                                                                                                                                                                         | If \`ChatOptions#enableDNSConfig\` is \`false\`, check server settings. Otherwise, likely network issue during \`dnsConfig\` request.                                    |
    | \`305\`      | \`SERVER_SERVICE_RESTRICTED\`                 | App is banned.                                                                                                                                                                                                                                                 | Enable Chat feature in console or contact support.                                                                                                                 |
    | \`400\`      | \`FILE_NOT_FOUND\`                            | File not found.                                                                                                                                                                                                                                                | For log files, retry. For attachments, file no longer exists and cannot be downloaded.                                                                             |
    | \`401\`      | \`FILE_INVALID\`                              | File invalid.                                                                                                                                                                                                                                                  | Select different file and retry upload.                                                                                                                            |
    | \`402\`      | \`FILE_UPLOAD_FAILED\`                        | Failed to upload file.                                                                                                                                                                                                                                         | Analyze with API calls and logs.                                                                                                                                   |
    | \`403\`      | \`FILE_DOWNLOAD_FAILED\`                      | Failed to download file.                                                                                                                                                                                                                                       | Check network or message expiration in logs.                                                                                                                       |
    | \`404\`      | \`FILE_DELETE_FAILED\`                        | Failed to delete existing log file.                                                                                                                                                                                                                            | Check permissions for app log files or chat logs.                                                                                                                  |
    | \`405\`      | \`FILE_TOO_LARGE\`                            | File exceeds size limit.                                                                                                                                                                                                                                       | Select file under 10 MB or contact support to increase limit.                                                                                                      |
    | \`406\`      | \`FILE_CONTENT_IMPROPER\`                     | File content inappropriate.                                                                                                                                                                                                                                    | Select appropriate file and retry.                                                                                                                                 |
    | \`407\`      | \`FILE_IS_EXPIRED\`                           | File expired. Attachments stored for 7 days by default.                                                                                                                                                                                                        | Contact support to increase storage time.                                                                                                                          |
    | \`500\`      | \`MESSAGE_INVALID\`                           | Message invalid. Message object or ID empty, or sender ID inconsistent with login session.                                                                                                                                                                     | Verify message construction, ID, sender, and body settings.                                                                                                        |
    | \`501\`      | \`MESSAGE_INCLUDE_ILLEGAL_CONTENT\`           | Message contains inappropriate content.                                                                                                                                                                                                                        | View blocking logs in console.                                                                                                                                     |
    | \`504\`      | \`MESSAGE_RECALL_TIME_LIMIT\`                 | Message recall timeout.                                                                                                                                                                                                                                        | Show UI error or contact support to extend the retractability time.                                                                                                |
    | \`505\`      | \`SERVICE_NOT_ENABLED\`                       | Feature not enabled.                                                                                                                                                                                                                                           | Enable required functions in console based on API and log analysis.                                                                                                |
    | \`506\`      | \`MESSAGE_EXPIRED\`                           | Group message read receipt period expired. Default validity is 3 days.                                                                                                                                                                                         | Show UI error or contact support to extend the validity time.                                                                                                      |
    | \`507\`      | \`MESSAGE_ILLEGAL_WHITELIST\`                 | User not on allow list when all members are muted.                                                                                                                                                                                                             | Show UI error or check if group-wide ban is enabled.                                                                                                               |
    | \`508\`      | \`MESSAGE_EXTERNAL_LOGIC_BLOCKED\`            | Message blocked by app server filtering rule during pre-sending callback.                                                                                                                                                                                      | Show UI prompt or check the pre-sending callback logs.                                                                                                             |
    | \`510\`      | \`MESSAGE_SIZE_LIMIT\`                        | Message body exceeds limit.                                                                                                                                                                                                                                    | Show UI prompt or reduce the message length (max 5 KB by default).                                                                                                 |
    | \`511\`      | \`MESSAGE_EDIT_FAILED\`                       | Failed to modify message.                                                                                                                                                                                                                                      | Analyze with logs.                                                                                                                                                 |
    | \`600\`      | \`GROUP_INVALID_ID\`                          | Invalid group ID.                                                                                                                                                                                                                                              | Verify group ID parameter isn't null or disbanded.                                                                                                                 |
    | \`601\`      | \`GROUP_ALREADY_JOINED\`                      | User already in chat group.                                                                                                                                                                                                                                    | Handle as successful join.                                                                                                                                         |
    | \`602\`      | \`GROUP_NOT_JOINED\`                          | User not in chat group.                                                                                                                                                                                                                                        | Verify group ID is for joined group that hasn't been disbanded.                                                                                                    |
    | \`603\`      | \`GROUP_PERMISSION_DENIED\`                   | User lacks permission for group operation.                                                                                                                                                                                                                     | Check API call permissions.                                                                                                                                        |
    | \`604\`      | \`GROUP_MEMBERS_FULL\`                        | Group member count reached limit.                                                                                                                                                                                                                              | Show UI prompt or check if the maximum member count exceeds limit (default 200).                                                                                   |
    | \`605\`      | \`GROUP_SHARED_FILE_INVALIDID\`               | Group shared file ID invalid.                                                                                                                                                                                                                                  | Verify \`sharedFileId\` parameter isn't null.                                                                                                                        |
    | \`606\`      | \`GROUP_NOT_EXIST\`                           | Chat group doesn't exist.                                                                                                                                                                                                                                      | Verify group ID is correct or not from disbanded group.                                                                                                            |
    | \`607\`      | \`GROUP_DISABLED\`                            | Chat group is disabled.                                                                                                                                                                                                                                        | Show UI prompt to request unblock from administrator.                                                                                                              |
    | \`608\`      | \`GROUP_NAME_VIOLATION\`                      | Chat group name invalid.                                                                                                                                                                                                                                       | Check if group name contains sensitive information.                                                                                                                |
    | \`609\`      | \`GROUP_MEMBER_ATTRIBUTES_REACH_LIMIT\`       | Custom attributes length reached limit.                                                                                                                                                                                                                        | Total length for single group member cannot exceed 4 KB.                                                                                                           |
    | \`610\`      | \`GROUP_MEMBER_ATTRIBUTES_UPDATE_FAILED\`     | Failed to set custom attributes.                                                                                                                                                                                                                               | Analyze with API calls and logs.                                                                                                                                   |
    | \`611\`      | \`GROUP_MEMBER_ATTRIBUTES_KEY_REACH_LIMIT\`   | Custom attribute key exceeds 16 bytes.                                                                                                                                                                                                                         | Check if attribute key exceeds limit.                                                                                                                              |
    | \`612\`      | \`GROUP_MEMBER_ATTRIBUTES_VALUE_REACH_LIMIT\` | Custom attribute value exceeds 512 bytes.                                                                                                                                                                                                                      | Check if attribute value exceeds limit.                                                                                                                            |
    | \`613\`      | \`GROUP_USER_IN_BLOCKLIST\`                   | User is in group blacklist.                                                                                                                                                                                                                                    | Show UI prompt or check console for blacklist status.                                                                                                              |
    | \`700\`      | \`CHATROOM_INVALID_ID\`                       | Invalid chat room ID.                                                                                                                                                                                                                                          | Check if chat room ID is empty.                                                                                                                                    |
    | \`701\`      | \`CHATROOM_ALREADY_JOINED\`                   | User already in chat room.                                                                                                                                                                                                                                     | Handle as successful join.                                                                                                                                         |
    | \`702\`      | \`CHATROOM_NOT_JOINED\`                       | User not in chat room.                                                                                                                                                                                                                                         | Verify chat room ID is correct, not disbanded, or previously joined.                                                                                               |
    | \`703\`      | \`CHATROOM_PERMISSION_DENIED\`                | User lacks permission for chat room operation.                                                                                                                                                                                                                 | Check API call permissions.                                                                                                                                        |
    | \`704\`      | \`CHATROOM_MEMBERS_FULL\`                     | Chat room member count reached limit.                                                                                                                                                                                                                          | Check maximum member count setting.                                                                                                                                |
    | \`705\`      | \`CHATROOM_NOT_EXIST\`                        | Chat room doesn't exist.                                                                                                                                                                                                                                       | Verify chat room ID is correct, not disbanded, or previously joined.                                                                                               |
    | \`706\`      | \`CHATROOM_OWNER_NOT_ALLOW_LEAVE\`            | Chat room owner not allowed to leave.                                                                                                                                                                                                                          | Check \`ChatOptions#allowChatroomOwnerLeave\` setting.                                                                                                               |
    | \`707\`      | \`CHATROOM_USER_IN_BLOCKLIST\`                | User is in chat room blacklist.                                                                                                                                                                                                                                | Check console for chat room blacklist status.                                                                                                                      |
    | \`900\`      | \`USERINFO_USERCOUNT_EXCEED\`                 | User attribute retrieval count exceeds 100.                                                                                                                                                                                                                    | Get attributes in batches of up to 100 users.                                                                                                                      |
    | \`901\`      | \`USERINFO_DATALENGTH_EXCEED\`                | User attributes too long. Maximum 2 KB per user or 10 GB per app.                                                                                                                                                                                              | Check attribute length limits.                                                                                                                                     |
    | \`1000\`     | \`CONTACT_ADD_FAILED\`                        | Failed to add contact.                                                                                                                                                                                                                                         | Analyze with API calls and error description.                                                                                                                      |
    | \`1001\`     | \`CONTACT_REACH_LIMIT\`                       | Inviter reached maximum contacts limit.                                                                                                                                                                                                                        | Show UI error or contact support to increase limit.                                                                                                                |
    | \`1002\`     | \`CONTACT_REACH_LIMIT_PEER\`                  | Invitee reached maximum contacts limit.                                                                                                                                                                                                                        | Show UI error or contact support to increase limit.                                                                                                                |
    | \`1100\`     | \`PRESENCE_PARAM_LENGTH_EXCEED\`              | Presence parameter length exceeds limit.                                                                                                                                                                                                                       | Presence details cannot exceed 64 bytes.                                                                                                                           |
    | \`1101\`     | \`PRESENCE_CANNOT_SUBSCRIBE_YOURSELF\`        | User cannot subscribe to own presence status.                                                                                                                                                                                                                  | Check if subscribed user ID is own ID.                                                                                                                             |
    | \`1110\`     | \`TRANSLATE_PARAM_INVALID\`                   | Translation parameter error.                                                                                                                                                                                                                                   | Analyze with debug logs.                                                                                                                                           |
    | \`1111\`     | \`TRANSLATE_SERVICE_NOT_ENABLE\`              | Translation service not enabled.                                                                                                                                                                                                                               | Enable translation service in console.                                                                                                                             |
    | \`1112\`     | \`TRANSLATE_USAGE_LIMIT\`                     | Translation usage reached limit.                                                                                                                                                                                                                               | Contact support to renew translation usage.                                                                                                                        |
    | \`1113\`     | \`TRANSLATE_MESSAGE_FAIL\`                    | Failed to translate message.                                                                                                                                                                                                                                   | Analyze with debug logs.                                                                                                                                           |
    | \`1200\`     | \`MODERATION_FAILED\`                         | Third-party content moderation result is \`Rejected\`.                                                                                                                                                                                                           | Check content audit configuration and logs in console.                                                                                                             |
    | \`1299\`     | \`THIRD_SERVER_FAILED\`                       | Non-third-party moderation service result is \`Rejected\`.                                                                                                                                                                                                       | Check content audit configuration and logs in console.                                                                                                             |
    | \`1300\`     | \`REACTION_REACH_LIMIT\`                      | Message Reactions reached maximum allowed.                                                                                                                                                                                                                     | Show UI prompt or contact support to increase limit.                                                                                                               |
    | \`1301\`     | \`REACTION_HAS_BEEN_OPERATED\`                | User already added this Reaction.                                                                                                                                                                                                                              | Handle as successful addition.                                                                                                                                     |
    | \`1302\`     | \`REACTION_OPERATION_IS_ILLEGAL\`             | User lacks permission for Reaction operation.                                                                                                                                                                                                                  | Verify parameters with log analysis.                                                                                                                               |
    | \`1400\`     | \`THREAD_NOT_EXIST\`                          | Thread doesn't exist.                                                                                                                                                                                                                                          | Verify subzone ID is correct.                                                                                                                                      |
    | \`1401\`     | \`THREAD_ALREADY_EXIST\`                      | Thread already exists.                                                                                                                                                                                                                                         | Check if subzone already created under incoming message.                                                                                                           |
    | \`1500\`     | \`PUSH_NOT_SUPPORT\`                          | Third-party push service not supported.                                                                                                                                                                                                                        | Check documentation for missing device vendors or contact support.                                                                                                 |
    | \`1501\`     | \`PUSH_BIND_FAILED\`                          | Failed to bind device with push token.                                                                                                                                                                                                                         | After \`PushHelper#setPushListener\` is registered, check network and retry binding with \`PushManager#bindDeviceToken\`.                                              |
    | \`1502\`     | \`PUSH_UNBIND_FAILED\`                        | Failed to unbind device from push token.                                                                                                                                                                                                                       | After \`PushHelper#setPushListener\` is registered, retry \`ChatClient#logout\` or call with parameter \`false\` (without unbinding).                                    |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs.

    Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact [support@agora.io](mailto\\:support@agora.io) for assistance.

    During the runtime of the Chat SDK, if a method call succeeds, the SDK returns \`nil\`. If it fails, the SDK returns one of the following error codes and error messages:

    | Error code | Error message                                        | Possible reason                                                                                                                                                                                                                                                | Fix                                                                                                                                                               |
    | :--------- | :--------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`0\`        | \`AgoraChatErrorNoError\`                              | The operation succeeds.                                                                                                                                                                                                                                        | No action required.                                                                                                                                               |
    | \`1\`        | \`AgoraChatErrorGeneral\`                              | Default error related to the SDK or API requests. Occurs when SDK isn't properly initialized or a request fails without specific reason.                                                                                                                       | Analyze logs and called APIs.                                                                                                                                     |
    | \`2\`        | \`AgoraChatErrorNetworkUnavailable\`                   | SDK disconnected from server due to network interruption.                                                                                                                                                                                                      | Retry operation after network restoration.                                                                                                                        |
    | \`3\`        | \`AgoraChatErrorDatabaseOperationFailed\`              | Database operation fails.                                                                                                                                                                                                                                      | Analyze called API with logs. Error occurs when updating non-existent messages with \`EMConversation#updateMessage\` or when database isn't open during operations. |
    | \`4\`        | \`AgoraChatErrorExceedServiceLimit\`                   | Usage exceeds service limit, such as registered users or contacts exceeding current pricing plan limits.                                                                                                                                                       | Check API parameters. Control \`limit\` parameter values. For rate limiting, retry after delay.                                                                     |
    | \`8\`        | \`AgoraChatAppActiveNumbersReachLimitation\`           | App reached maximum daily active users (DAU) or monthly active users (MAU).                                                                                                                                                                                    | Upgrade Chat service in the console.                                                                                                                              |
    | \`100\`      | \`AgoraChatErrorInvalidAppkey\`                        | App Key is invalid.                                                                                                                                                                                                                                            | Initialize with correct App Key.                                                                                                                                  |
    | \`101\`      | \`AgoraChatErrorInvalidUsername\`                      | User ID is invalid, such as empty string when adding a contact.                                                                                                                                                                                                | Ensure user ID parameter is not empty.                                                                                                                            |
    | \`102\`      | \`AgoraChatErrorInvalidPassword\`                      | Login password is empty or invalid.                                                                                                                                                                                                                            | Verify password parameter is correct.                                                                                                                             |
    | \`104\`      | \`AgoraChatErrorUsernameTooLong\`                      | User ID is too long.                                                                                                                                                                                                                                           | Log in with valid user ID. Verify token parameters are correct.                                                                                                   |
    | \`105\`      | \`AgoraChatErrorUsernameTooLong\`                      | User ID exceeds 64 bytes limit.                                                                                                                                                                                                                                | Check user ID length.                                                                                                                                             |
    | \`108\`      | \`AgoraChatErrorTokenExpire\`                          | Token has expired.                                                                                                                                                                                                                                             | When callback is received, regenerate token and call \`login\` to log in again.                                                                                     |
    | \`109\`      | \`AgoraChatErrorTokeWillExpire\`                       | Token passed half of its validity period.                                                                                                                                                                                                                      | When callback is received, regenerate token and call \`AgoraChatClient#renewToken\` to update.                                                                      |
    | \`110\`      | \`AgoraChatErrorInvalidParam\`                         | Invalid parameter.                                                                                                                                                                                                                                             | Verify API parameters are valid.                                                                                                                                  |
    | \`200\`      | \`AgoraChatErrorUserAlreadyLoginSame\`                 | User already logged in.                                                                                                                                                                                                                                        | Check if SDK has automatic login enabled or if login method was already called.                                                                                   |
    | \`201\`      | \`AgoraChatErrorUserNotLogin\`                         | User not logged in. Session invalid or expired when attempting operations.                                                                                                                                                                                     | Ensure Chat login completes before calling API.                                                                                                                   |
    | \`202\`      | \`AgoraChatErrorUserAuthenticationFailed\`             | User authentication fails due to invalid or expired token.                                                                                                                                                                                                     | If logged out, log in again. Otherwise, regenerate token and call \`AgoraChatClient#renewToken\`.                                                                   |
    | \`203\`      | \`AgoraChatErrorUserAlreadyExist\`                     | User ID specified during registration already exists.                                                                                                                                                                                                          | Register with a different user ID or consider registration successful.                                                                                            |
    | \`204\`      | \`AgoraChatErrorUserNotFound\`                         | User does not exist.                                                                                                                                                                                                                                           | Verify \`userId\` parameter is correct.                                                                                                                             |
    | \`205\`      | \`AgoraChatErrorUserIllegalArgument\`                  | Incorrect user parameter. User ID invalid or empty during registration or attribute updates.                                                                                                                                                                   | Verify API parameters are correct.                                                                                                                                |
    | \`206\`      | \`AgoraChatErrorUserLoginOnAnotherDevice\`             | User logged in on another device. Forces logout on current device if multi-device service isn't enabled.                                                                                                                                                       | When \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` is triggered, log in again.                                                                     |
    | \`207\`      | \`AgoraChatErrorUserRemoved\`                          | User account deleted in the console.                                                                                                                                                                                                                           | When \`AgoraChatClientDelegate#userAccountDidRemoveFromServer\` is triggered, return to login page. Account no longer available.                                    |
    | \`209\`      | \`AgoraChatErrorUpdateApnsConfigsFailed\`              | Failed to update push configurations.                                                                                                                                                                                                                          | Check error-reporting API, wait, then retry.                                                                                                                      |
    | \`210\`      | \`AgoraChatErrorUserPermissionDenied\`                 | User lacks permission for operation. User on block list attempts to send messageUser tries to modify another user's messageUser tries to modify custom group member attribute set by anotherUser attempts to destroy message thread without proper permissions | Check if user has operational privileges.                                                                                                                         |
    | \`211\`      | \`AgoraChatErrorUserBindDeviceTokenFailed\`            | Failed to bind push token to device.                                                                                                                                                                                                                           | Verify token for device push binding isn't empty.                                                                                                                 |
    | \`213\`      | \`AgoraChatErrorUserBindAnotherDevice\`                | User logged in to another device in single-device login configuration.                                                                                                                                                                                         | Configure for multiple device login or use \`AgoraChatClient#kickDevice\` before logging in.                                                                        |
    | \`214\`      | \`AgoraChatErrorUserLoginTooManyDevices\`              | User reached maximum number of login devices.                                                                                                                                                                                                                  | Increase allowed simultaneous devices or use \`AgoraChatClient#kickDevice\` before logging in.                                                                      |
    | \`215\`      | \`AgoraChatErrorUserMuted\`                            | User is muted in group or chat room.                                                                                                                                                                                                                           | Restrict message sending in UI for users who are banned.                                                                                                          |
    | \`216\`      | \`AgoraChatErrorUserKickedByChangePassword\`           | User changed login password, ending current session.                                                                                                                                                                                                           | When \`AgoraChatClientDelegate#userAccountDidForcedToLogout\` is received, call \`AgoraChatClient#logout\` and return to login page.                                  |
    | \`217\`      | \`AgoraChatErrorUserKickedByOtherDevice\`              | User kicked off device via console or API call from another device.                                                                                                                                                                                            | When \`AgoraChatClientDelegate#userAccountDidForcedToLogout\` is received, call \`AgoraChatClient#logout\` and return to login page.                                  |
    | \`218\`      | \`AgoraChatErrorUserAlreadyLoginAnother\`              | Another user already logged in on device.                                                                                                                                                                                                                      | Call \`AgoraChatClient#logout\` to log out current account before logging in with different account.                                                                |
    | \`219\`      | \`AgoraChatErrorUserMutedByAdmin\`                     | User cannot send message when all members are muted.                                                                                                                                                                                                           | Restrict message sending in UI when full ban is active.                                                                                                           |
    | \`220\`      | \`AgoraChatErrorUserDeviceChanged\`                    | Login attempt on device that isn't the last used device in single-device configuration.                                                                                                                                                                        | When \`AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice\` is received, call \`AgoraChatClient#logout\` and return to login page.                            |
    | \`221\`      | \`AgoraChatErrorUserNotOnRoster\`                      | User cannot send message to non-contact when contacts-only messaging is enabled.                                                                                                                                                                               | Call \`AgoraChatContactManager#addContact\` first. Send messages after friend request is accepted.                                                                  |
    | \`300\`      | \`AgoraChatErrorServerNotReachable\`                   | Server unreachable due to network issues.                                                                                                                                                                                                                      | For login errors, try switching networks or contact support for TLS encryption in specific regions. For other operations, switch networks or retry after delay.   |
    | \`301\`      | \`AgoraChatErrorServerTimeout\`                        | Request timeout when server doesn't respond within specified period.                                                                                                                                                                                           | Retry API after switching networks or waiting.                                                                                                                    |
    | \`302\`      | \`AgoraChatErrorServerBusy\`                           | Server currently busy.                                                                                                                                                                                                                                         | Check for repeated API calls. May occur when calling again before previous result is returned.                                                                    |
    | \`303\`      | \`AgoraChatErrorServerUnknownError\`                   | Common server request error.                                                                                                                                                                                                                                   | Provide logs and called APIs for troubleshooting.                                                                                                                 |
    | \`304\`      | \`AgoraChatErrorServerGetDNSConfigFailed\`             | SDK fails to get server configuration.                                                                                                                                                                                                                         | If \`AgoraChatOptions#enableDnsConfig\` is \`No\`, check server settings. Otherwise, likely network issue during \`dnsConfig\` request.                                 |
    | \`305\`      | \`AgoraChatErrorServerServingForbidden\`               | App is banned.                                                                                                                                                                                                                                                 | Enable Chat feature in console or contact support.                                                                                                                |
    | \`400\`      | \`AgoraChatErrorFileNotFound\`                         | File not found.                                                                                                                                                                                                                                                | For log files, retry. For attachments, file no longer exists and cannot be downloaded.                                                                            |
    | \`401\`      | \`AgoraChatErrorFileInvalid\`                          | File invalid.                                                                                                                                                                                                                                                  | Select different file and retry upload.                                                                                                                           |
    | \`402\`      | \`AgoraChatErrorFileUploadFailed\`                     | Failed to upload file.                                                                                                                                                                                                                                         | Analyze with API calls and logs.                                                                                                                                  |
    | \`403\`      | \`AgoraChatErrorFileDownloadFailed\`                   | Failed to download file.                                                                                                                                                                                                                                       | Check network or message expiration in logs.                                                                                                                      |
    | \`404\`      | \`AgoraChatErrorFileDeleteFailed\`                     | Failed to delete existing log file.                                                                                                                                                                                                                            | Check permissions for app log files or chat logs.                                                                                                                 |
    | \`405\`      | \`AgoraChatErrorFileTooLarge\`                         | File exceeds size limit.                                                                                                                                                                                                                                       | Select file under 10 MB or contact support to increase limit.                                                                                                     |
    | \`406\`      | \`AgoraChatErrorFileContentImproper\`                  | File content inappropriate.                                                                                                                                                                                                                                    | Select appropriate file and retry.                                                                                                                                |
    | \`407\`      | \`AgoraChatErrorFileExpired\`                          | File expired. Attachments stored for 7 days by default.                                                                                                                                                                                                        | Contact support to increase storage time.                                                                                                                         |
    | \`500\`      | \`AgoraChatErrorMessageInvalid\`                       | Message invalid. Message object or ID empty, or sender ID inconsistent with login session.                                                                                                                                                                     | Verify message construction, ID, sender, and body settings meet requirements.                                                                                     |
    | \`504\`      | \`AgoraChatErrorMessageRecallTimeLimit\`               | Message recall timeout.                                                                                                                                                                                                                                        | Show UI error or contact support to extend the retractability time.                                                                                               |
    | \`505\`      | \`AgoraChatErrorServiceNotEnable\`                     | Feature not enabled.                                                                                                                                                                                                                                           | Enable required features in console based on API and log analysis.                                                                                                |
    | \`506\`      | \`AgoraChatErrorMessageExpired\`                       | Group message read receipt period expired. Default validity is 3 days.                                                                                                                                                                                         | Show UI error or contact support to extend the validity time.                                                                                                     |
    | \`507\`      | \`AgoraChatErrorMessageIllegalWhiteList\`              | User not on allow list when all members are muted.                                                                                                                                                                                                             | Show UI error or check if group-wide ban is enabled.                                                                                                              |
    | \`508\`      | \`AgoraChatErrorMessageExternalLogicBlocked\`          | Message blocked by app server filtering rule during pre-sending callback.                                                                                                                                                                                      | Show UI prompt or check the pre-sending callback logs.                                                                                                            |
    | \`510\`      | \`AgoraChatErrorMessageSizeLimit\`                     | Message body exceeds limit.                                                                                                                                                                                                                                    | Show UI prompt or reduce the message length (max 5 KB by default).                                                                                                |
    | \`511\`      | \`AgoraChatErrorEditFailed\`                           | Failed to modify message.                                                                                                                                                                                                                                      | Analyze with logs.                                                                                                                                                |
    | \`600\`      | \`AgoraChatErrorGroupInvalidId\`                       | Invalid group ID.                                                                                                                                                                                                                                              | Verify group ID parameter isn't null or disbanded.                                                                                                                |
    | \`601\`      | \`AgoraChatErrorGroupAlreadyJoined\`                   | User already in chat group.                                                                                                                                                                                                                                    | Handle as successful join.                                                                                                                                        |
    | \`602\`      | \`AgoraChatErrorGroupNotJoined\`                       | User not in chat group.                                                                                                                                                                                                                                        | Verify group ID is for joined group that hasn't been disbanded.                                                                                                   |
    | \`603\`      | \`AgoraChatErrorGroupPermissionDenied\`                | User lacks permission for group operation.                                                                                                                                                                                                                     | Check API call permissions.                                                                                                                                       |
    | \`604\`      | \`AgoraChatErrorGroupMembersFull\`                     | Group member count reached limit.                                                                                                                                                                                                                              | Show UI prompt or check if the maximum member count exceeds limit (default 200).                                                                                  |
    | \`605\`      | \`AgoraChatErrorGroupSharedFileInvalidId\`             | Group shared file ID is empty.                                                                                                                                                                                                                                 | Verify \`sharedFileId\` parameter isn't null.                                                                                                                       |
    | \`606\`      | \`AgoraChatErrorGroupNotExist\`                        | Chat group doesn't exist.                                                                                                                                                                                                                                      | Verify group ID is correct or not from disbanded group.                                                                                                           |
    | \`607\`      | \`AgoraChatErrorGroupDisabled\`                        | Chat group is disabled.                                                                                                                                                                                                                                        | Show UI prompt to request unblock from administrator.                                                                                                             |
    | \`608\`      | \`AgoraChatErrorGroupNameViolation\`                   | Chat group name is invalid.                                                                                                                                                                                                                                    | Check if group name contains sensitive information.                                                                                                               |
    | \`609\`      | \`AgoraChatErrorGroupMemberAttributesReachLimit\`      | Custom attributes size reached limit.                                                                                                                                                                                                                          | Total length for single group member cannot exceed 4 KB.                                                                                                          |
    | \`610\`      | \`AgoraChatErrorGroupMemberAttributesUpdateFailed\`    | Failed to set custom attributes.                                                                                                                                                                                                                               | Analyze with API calls and logs.                                                                                                                                  |
    | \`611\`      | \`AgoraChatErrorGroupMemberAttributesKeyReachLimit\`   | Custom attribute key exceeds 16 bytes.                                                                                                                                                                                                                         | Check if attribute key exceeds limit.                                                                                                                             |
    | \`612\`      | \`AgoraChatErrorGroupMemberAttributesValueReachLimit\` | Custom attribute value exceeds 512 bytes.                                                                                                                                                                                                                      | Check if attribute value exceeds limit.                                                                                                                           |
    | \`700\`      | \`AgoraChatErrorChatroomInvalidId\`                    | Invalid chat room ID.                                                                                                                                                                                                                                          | Check if chat room ID is empty.                                                                                                                                   |
    | \`701\`      | \`AgoraChatErrorChatroomAlreadyJoined\`                | User already in chat room.                                                                                                                                                                                                                                     | Handle as successful join.                                                                                                                                        |
    | \`702\`      | \`AgoraChatErrorChatroomNotJoined\`                    | User not in chat room.                                                                                                                                                                                                                                         | Verify chat room ID is correct, not disbanded, or previously joined.                                                                                              |
    | \`703\`      | \`AgoraChatErrorChatroomPermissionDenied\`             | User lacks permission for chat room operation.                                                                                                                                                                                                                 | Check API call permissions.                                                                                                                                       |
    | \`704\`      | \`AgoraChatErrorChatroomMembersFull\`                  | Chat room member count reached limit.                                                                                                                                                                                                                          | Check maximum member count setting.                                                                                                                               |
    | \`705\`      | \`AgoraChatErrorChatroomNotExist\`                     | Chat room doesn't exist.                                                                                                                                                                                                                                       | Verify chat room ID is correct, not disbanded, or previously joined.                                                                                              |
    | \`706\`      | \`AgoraChatErrorChatroomOwnerNotAllowLeave\`           | Chat room owner not allowed to leave.                                                                                                                                                                                                                          | Check \`AgoraChatOptions#allowChatroomOwnerLeave\` setting.                                                                                                         |
    | \`707\`      | \`EMErrorChatroomUserInBlockList\`                     | User is in chat room blacklist.                                                                                                                                                                                                                                | Check console for chat room blacklist status.                                                                                                                     |
    | \`900\`      | \`AgoraChatErrorUserCountExceed\`                      | User attribute retrieval count exceeds 100.                                                                                                                                                                                                                    | Get attributes in batches of up to 100 users.                                                                                                                     |
    | \`901\`      | \`AgoraChatErrorUserInfoDataLengthExceed\`             | User attributes too long. Maximum 2 KB per user or 10 GB per app.                                                                                                                                                                                              | Check attribute length limits.                                                                                                                                    |
    | \`1000\`     | \`AgoraChatErrorContactAddFailed\`                     | Failed to add contact.                                                                                                                                                                                                                                         | Analyze with API calls and error description.                                                                                                                     |
    | \`1001\`     | \`AgoraChatErrorContactReachLimit\`                    | Inviter reached maximum contacts limit.                                                                                                                                                                                                                        | Show UI error or contact support to increase limit.                                                                                                               |
    | \`1002\`     | \`AgoraChatErrorContactReachLimitPeer\`                | Invitee reached maximum contacts limit.                                                                                                                                                                                                                        | Show UI error or contact support to increase limit.                                                                                                               |
    | \`1100\`     | \`AgoraChatErrorPresenceParamExceed\`                  | Presence parameter length exceeds limit.                                                                                                                                                                                                                       | Online status details cannot exceed 64 bytes.                                                                                                                     |
    | \`1101\`     | \`AgoraChatErrorPresenceCannotSubscribeSelf\`          | User cannot subscribe to own presence status.                                                                                                                                                                                                                  | Check if subscribed user ID is own ID.                                                                                                                            |
    | \`1110\`     | \`AgoraChatErrorTranslateParamError\`                  | Translation parameter error.                                                                                                                                                                                                                                   | Analyze with debug logs.                                                                                                                                          |
    | \`1111\`     | \`AgoraChatErrorTranslateServiceNotEnabled\`           | Translation service not enabled.                                                                                                                                                                                                                               | Enable translation service in console.                                                                                                                            |
    | \`1112\`     | \`AgoraChatErrorTranslateUsageLimit\`                  | Translation usage reached limit.                                                                                                                                                                                                                               | Contact support to renew translation usage.                                                                                                                       |
    | \`1113\`     | \`AgoraChatErrorTranslateServiceFail\`                 | Failed to translate message.                                                                                                                                                                                                                                   | Analyze with debug logs.                                                                                                                                          |
    | \`1200\`     | \`AgoraChatErrorModerationFailed\`                     | Third-party content moderation result is \`Rejected\`.                                                                                                                                                                                                           | Check content audit configuration and logs in console.                                                                                                            |
    | \`1299\`     | \`AgoraChatErrorThirdServiceFailed\`                   | Non-third-party moderation service result is \`Rejected\`.                                                                                                                                                                                                       | Check content audit configuration and logs in console.                                                                                                            |
    | \`1300\`     | \`AgoraChatErrorReactionReachLimit\`                   | Message Reactions reached maximum allowed.                                                                                                                                                                                                                     | Show UI prompt or contact support to increase limit.                                                                                                              |
    | \`1301\`     | \`AgoraChatErrorReactionHasBeenOperated\`              | User already added this Reaction.                                                                                                                                                                                                                              | Handle as successful addition.                                                                                                                                    |
    | \`1302\`     | \`AgoraChatErrorReactionOperationIsIllegal\`           | User lacks permission for Reaction operation.                                                                                                                                                                                                                  | Verify parameters with log analysis.                                                                                                                              |
    | \`1400\`     | \`AgoraChatErrorThreadNotExist\`                       | Thread doesn't exist.                                                                                                                                                                                                                                          | Verify subzone ID is correct.                                                                                                                                     |
    | \`1401\`     | \`AgoraChatErrorThreadAlreadyExist\`                   | Thread already exists.                                                                                                                                                                                                                                         | Check if subzone is already created under incoming message.                                                                                                       |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs.

    Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact [support@agora.io](mailto\\:support@agora.io) for assistance.

    You may receive an error code and error message in one of the following ways:

    * As the return value when a method call fails.
    * As the error code reported through the \`onError\` callback. Register the callback using the \`addEventListener\` method.

    | Error code | Error message                                    | Possible reason                                                                        | Fix                                                                                                    |
    | :--------- | :----------------------------------------------- | :------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
    | \`0\`        | \`REQUEST_SUCCESS\`                                | The operation succeeds.                                                                | No action required.                                                                                    |
    | \`-1\`       | \`REQUEST_TIMEOUT\`                                | Request times out.                                                                     | Retry or prompt for request timeout.                                                                   |
    | \`-2\`       | \`REQUEST_UNKNOWN\`                                | Unidentified error occurs.                                                             | Prompt that request failed.                                                                            |
    | \`-3\`       | \`REQUEST_PARAMETER_ERROR\`                        | Request parameters are invalid.                                                        | Verify parameters are correct.                                                                         |
    | \`-4\`       | \`REQUEST_ABORT\`                                  | Request is aborted.                                                                    | Cancel the request.                                                                                    |
    | \`1\`        | \`WEBIM_CONNCTION_OPEN_ERROR\`                     | Request to retrieve token fails.                                                       | Check for parameter error, already logged in status, or import request failure based on error message. |
    | \`2\`        | \`WEBIM_CONNCTION_AUTH_ERROR\`                     | App Key is invalid. SDK fails to verify App Key.                                       | Verify App Key is initialized correctly, user is logged in, and login token is valid.                  |
    | \`16\`       | \`WEBIM_CONNCTION_DISCONNECTED\`                   | WebSocket disconnected due to network issues.                                          | Prompt that connection is disconnected.                                                                |
    | \`17\`       | \`WEBIM_CONNCTION_AJAX_ERROR\`                     | Common error for server requests.                                                      | Determine cause of current operation failure from error message.                                       |
    | \`27\`       | \`WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR\`        | App Key incorrect or not set during login.                                             | Set correct App Key.                                                                                   |
    | \`28\`       | \`WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR\`         | User fails to pass user token for login.                                               | Ensure successful login.                                                                               |
    | \`31\`       | \`WEBIM_CONNCTION_CALLBACK_INNER_ERROR\`           | Internal error in message sending callback.                                            | Check for errors in callback functions, such as in \`onTextMessage\` message processing.                 |
    | \`39\`       | \`WEBIM_CONNECTION_CLOSED\`                        | User logged out or not logged in attempts to send message.                             | Log in before sending messages.                                                                        |
    | \`40\`       | \`WEBIM_CONNECTION_ERROR\`                         | User authentication fails.                                                             | Prompt that connection is disconnected.                                                                |
    | \`50\`       | \`MAX_LIMIT\`                                      | Usage exceeds service limit. Reactions, DAU, or MAU exceed upper limits.               | Identify which service reached upper limit and limit accordingly.                                      |
    | \`51\`       | \`MESSAGE_NOT_FOUND\`                              | Message not found, such as when reporting.                                             | Prompt that original message wasn't found.                                                             |
    | \`52\`       | \`NO_PERMISSION\`                                  | User lacks permission for operation.                                                   | Indicate user doesn't have permission for operation.                                                   |
    | \`53\`       | \`OPERATION_UNSUPPORTED\`                          | Current operation not supported.                                                       | Prompt that operation isn't supported.                                                                 |
    | \`55\`       | \`LOCAL_DB_OPERATION_FAILED\`                      | Database operation fails.                                                              | Check database connection and permissions.                                                             |
    | \`101\`      | \`WEBIM_UPLOADFILE_ERROR\`                         | Failed to upload file. File may exceed size limit.                                     | Show "Send Failed" when attachment message upload fails.                                               |
    | \`102\`      | \`WEBIM_UPLOADFILE_NO_LOGIN\`                      | User token not included in file upload request.                                        | Ensure user is logged in before uploading.                                                             |
    | \`200\`      | \`WEBIM_DOWNLOADFILE_ERROR\`                       | Failed to download file due to timeout or network failure.                             | Prompt to retry.                                                                                       |
    | \`204\`      | \`USER_NOT_FOUND\`                                 | User not found, such as when inviting to join group.                                   | Verify User ID parameter is correct.                                                                   |
    | \`205\`      | \`MESSAGE_PARAMETER_ERROR\`                        | Message parameter error, such as missing message ID during recall.                     | Ensure message contains message ID (\`id\`) and recipient's user ID (\`to\`).                              |
    | \`206\`      | \`WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE\`      | User logged in on another device. Forces logout if multi-device service isn't enabled. | Enable multi-device function. See Multiple Device Login documentation.                                 |
    | \`207\`      | \`WEBIM_CONNCTION_USER_REMOVED\`                   | User account deleted in console.                                                       | Inform user that account has been canceled.                                                            |
    | \`208\`      | \`WEBIM_USER_ALREADY_LOGIN\`                       | User already logged in and attempting to log in again.                                 | Notify that repeated logins aren't possible.                                                           |
    | \`216\`      | \`WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD\` | User changed login password, ending current session.                                   | Prompt that password has changed and user must log in again.                                           |
    | \`217\`      | \`WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE\`    | User kicked off device via console or API call from another device.                    | Notify user of being kicked offline.                                                                   |
    | \`219\`      | \`USER_MUTED_BY_ADMIN\`                            | User muted globally and cannot send messages.                                          | Inform user they have been banned.                                                                     |
    | \`221\`      | \`USER_NOT_FRIEND\`                                | User cannot send message to non-contact when contacts-only messaging enabled.          | Prompt that recipient isn't user's friend/contact.                                                     |
    | \`500\`      | \`SERVER_BUSY\`                                    | Server is busy.                                                                        | Prompt that service is busy and to try again.                                                          |
    | \`501\`      | \`MESSAGE_INCLUDE_ILLEGAL_CONTENT\`                | Message contains inappropriate content detected by filtering system.                   | Alert that message failed to send due to non-compliant content or sensitive words.                     |
    | \`502\`      | \`MESSAGE_EXTERNAL_LOGIC_BLOCKED\`                 | Message intercepted by anti-spam service.                                              | Prompt that message failed to send.                                                                    |
    | \`503\`      | \`SERVER_UNKNOWN_ERROR\`                           | SDK fails to send message due to unknown error.                                        | Prompt that message failed to send.                                                                    |
    | \`504\`      | \`MESSAGE_RECALL_TIME_LIMIT\`                      | Message recall timeout.                                                                | Notify user that retractable time limit has been exceeded.                                             |
    | \`505\`      | \`SERVICE_NOT_ENABLED\`                            | Feature not enabled. Requires console activation or support contact.                   | Enable function according to error message.                                                            |
    | \`506\`      | \`SERVICE_NOT_ALLOW_MESSAGING\`                    | User not on group/chat room allow list when all members are muted.                     | Inform user that current group/chat room has message restrictions.                                     |
    | \`507\`      | \`SERVICE_NOT_ALLOW_MESSAGING_MUTE\`               | User is muted in group or chat room.                                                   | Inform user they have been banned.                                                                     |
    | \`508\`      | \`MESSAGE_MODERATION_BLOCKED\`                     | Third-party content moderation service rejected message.                               | Prompt that message delivery failed due to non-compliant content.                                      |
    | \`510\`      | \`MESSAGE_WEBSOCKET_DISCONNECTED\`                 | Failed to send message due to network disconnection or reconnection failure.           | Prompt that message failed to send.                                                                    |
    | \`511\`      | \`MESSAGE_SIZE_LIMIT\`                             | Message body exceeds upper limit.                                                      | Alert that message is too large.                                                                       |
    | \`512\`      | \`MESSAGE_SEND_TIMEOUT\`                           | Send message timeout. Connection disconnected while sending.                           | Notify of send timeout.                                                                                |
    | \`601\`      | \`GROUP_ALREADY_JOINED\`                           | User already in chat group.                                                            | Verify invited users aren't already in group to avoid duplicate invitations.                           |
    | \`602\`      | \`GROUP_NOT_JOINED\`                               | User not in chat group when attempting operations.                                     | Ensure user is in group before performing operations.                                                  |
    | \`603\`      | \`PERMISSION_DENIED\`                              | User lacks permission for group operation.                                             | Indicate user doesn't have required permission.                                                        |
    | \`604\`      | \`WEBIM_LOAD_MSG_ERROR\`                           | Internal error in message callback.                                                    | Verify message is formatted correctly as parsing failed.                                               |
    | \`605\`      | \`GROUP_NOT_EXIST\`                                | Group ID doesn't exist.                                                                | Verify group or chat room ID is correct.                                                               |
    | \`606\`      | \`GROUP_MEMBERS_FULL\`                             | Group member count reached upper limit.                                                | Indicate maximum group size has been reached.                                                          |
    | \`607\`      | \`GROUP_MEMBERS_LIMIT\`                            | Maximum group member count exceeds pricing plan limit.                                 | Limit maximum members according to subscription package.                                               |
    | \`609\`      | \`GROUP_MEMBER_ATTRIBUTES_SET_FAILED\`             | Failed to set custom attributes for group member.                                      | Prompt that setup failed and to try again.                                                             |
    | \`700\`      | \`REST_PARAMS_STATUS\`                             | Failed to call API due to missing/incorrect token or App Key.                          | Set App Key correctly.                                                                                 |
    | \`702\`      | \`CHATROOM_NOT_JOINED\`                            | User not in chat room when attempting operations.                                      | Indicate user isn't in current chat room.                                                              |
    | \`704\`      | \`CHATROOM_MEMBERS_FULL\`                          | Chat room member count reached upper limit.                                            | Indicate chat room is at capacity.                                                                     |
    | \`705\`      | \`CHATROOM_NOT_EXIST\`                             | Chat room doesn't exist.                                                               | Verify chat room ID is correct.                                                                        |
    | \`999\`      | \`SDK_RUNTIME_ERROR\`                              | WebSocket error during message sending.                                                | Prompt login failure and suggest logging in again.                                                     |
    | \`1100\`     | \`PRESENCE_PARAM_EXCEED\`                          | Presence parameter length exceeds limit.                                               | Keep custom online status under 1024 bytes.                                                            |
    | \`1101\`     | \`REACTION_ALREADY_ADDED\`                         | User already added this Reaction.                                                      | Avoid adding duplicate Reactions for same user.                                                        |
    | \`1102\`     | \`REACTION_CREATING\`                              | Reaction being created by another user simultaneously.                                 | Indicate another user is creating a Reaction.                                                          |
    | \`1103\`     | \`REACTION_OPERATION_IS_ILLEGAL\`                  | User lacks permission for Reaction operation.                                          | Ensure users operate Reactions correctly with proper permissions.                                      |
    | \`1200\`     | \`TRANSLATION_NOT_VALID\`                          | Language code is invalid.                                                              | Verify correct language code when using translation.                                                   |
    | \`1201\`     | \`TRANSLATION_TEXT_TOO_LONG\`                      | Source text length exceeds translation limit.                                          | Alert that file is too large for translation.                                                          |
    | \`1204\`     | \`TRANSLATION_FAILED\`                             | Failed to translate message.                                                           | Notify of translation failure.                                                                         |
    | \`1300\`     | \`THREAD_NOT_EXIST\`                               | Thread doesn't exist.                                                                  | Verify subzone ID is correct.                                                                          |
    | \`1301\`     | \`THREAD_ALREADY_EXIST\`                           | Thread already exists.                                                                 | Notify that subdivision already exists and cannot be created again.                                    |
    | \`1302\`     | \`MODIFY_MESSAGE_NOT_EXIST\`                       | Message to modify doesn't exist.                                                       | Verify message ID is correct.                                                                          |
    | \`1304\`     | \`MODIFY_MESSAGE_FAILED\`                          | Failed to modify message.                                                              | Inform user that message modification failed.                                                          |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    Refer to the error codes for Android and iOS.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs.

    Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact [support@agora.io](mailto\\:support@agora.io) for assistance.

    During runtime of the Agora Chat SDK, you may receive an error code and error message in one of the following ways:

    * As the return value when a method call fails.
    * As the error code reported through the \`onError\` callback.

    For example, when a user registration request fails because the username already exists, the \`onError\` callback returns the following error code and error message:

    \`\`\`csharp
    SDKClient.Instance.Login(
        username,
        passwd,
        callback: new CallBack(
            onSuccess: () =>
            {
            },
            onError: (code, desc) =>
            {
                // code: 203
                // desc: USER_ALREADY_EXIST
            }
        )
    );
    \`\`\`

    | Error code | Error message                               | Error description                                                                                                                                                                                                                                              | Fix                                                                                                                                                             |
    | :--------- | :------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`0\`        | \`EM_NO_ERROR\`                               | The operation succeeds.                                                                                                                                                                                                                                        | No action required.                                                                                                                                             |
    | \`1\`        | \`GENERAL_ERROR\`                             | The SDK is not properly initialized, or the server cannot identify this error.                                                                                                                                                                                 | Analyze logs and called APIs.                                                                                                                                   |
    | \`2\`        | \`NETWORK_ERROR\`                             | SDK disconnected from server due to network interruption.                                                                                                                                                                                                      | Retry operation after network restoration.                                                                                                                      |
    | \`3\`        | \`DATABASE_ERROR\`                            | Database operation fails.                                                                                                                                                                                                                                      | Analyze called API with logs. Error occurs when updating non-existent messages with \`Conversation#UpdateMessage\` or when database isn't open during operations. |
    | \`4\`        | \`EXCEED_SERVICE_LIMIT\`                      | Usage exceeds service limit, such as registered users exceeding current pricing plan limits.                                                                                                                                                                   | Check API parameters. Control \`limit\` parameter values. For rate limiting, retry after delay.                                                                   |
    | \`8\`        | \`APP_ACTIVE_NUMBER_REACH_LIMITATION\`        | App reached maximum daily active users (DAU) or monthly active users (MAU).                                                                                                                                                                                    | Upgrade Chat service in the console.                                                                                                                            |
    | \`100\`      | \`INVALID_APP_KEY\`                           | App Key is invalid.                                                                                                                                                                                                                                            | Initialize with correct App Key.                                                                                                                                |
    | \`101\`      | \`INVALID_USER_NAME\`                         | User ID is invalid, such as empty string when adding a contact.                                                                                                                                                                                                | Ensure user ID parameter is not null.                                                                                                                           |
    | \`102\`      | \`INVALID_PASSWORD\`                          | Login password is empty or invalid.                                                                                                                                                                                                                            | Verify password parameter is correct.                                                                                                                           |
    | \`103\`      | \`INVALID_URL\`                               | URL is incorrect.                                                                                                                                                                                                                                              | Verify API parameters are correct.                                                                                                                              |
    | \`104\`      | \`INVALID_TOKEN\`                             | Login token is empty or invalid.                                                                                                                                                                                                                               | Verify token parameters are correct.                                                                                                                            |
    | \`105\`      | \`USER_NAME_TOO_LONG\`                        | User ID exceeds 64 bytes limit.                                                                                                                                                                                                                                | Check user ID length.                                                                                                                                           |
    | \`108\`      | \`TOKEN_EXPIRED\`                             | Token has expired.                                                                                                                                                                                                                                             | When callback is received, regenerate token and call \`login\` to log in again.                                                                                   |
    | \`109\`      | \`TOKEN_WILL_EXPIRE\`                         | Token passed half of its validity period.                                                                                                                                                                                                                      | When callback is received, regenerate token and call \`SDKClient#RenewToken\` to update.                                                                          |
    | \`200\`      | \`USER_ALREADY_LOGIN\`                        | User already logged in.                                                                                                                                                                                                                                        | Check if SDK has automatic login enabled or if login method was already called.                                                                                 |
    | \`201\`      | \`USER_NOT_LOGIN\`                            | Login session invalid or expired when attempting operations.                                                                                                                                                                                                   | Ensure Chat login completes before calling API.                                                                                                                 |
    | \`202\`      | \`USER_AUTHENTICATION_FAILED\`                | User authentication fails due to invalid or expired token.                                                                                                                                                                                                     | If logged out, log in again. Otherwise, regenerate token and call \`SDKClient#RenewToken\`.                                                                       |
    | \`203\`      | \`USER_ALREADY_EXIST\`                        | User ID specified during registration already exists.                                                                                                                                                                                                          | Register with a different user ID or consider registration successful.                                                                                          |
    | \`204\`      | \`USER_NOT_FOUND\`                            | User does not exist.                                                                                                                                                                                                                                           | Verify user ID parameter is correct.                                                                                                                            |
    | \`205\`      | \`USER_ILLEGAL_ARGUMENT\`                     | Incorrect user parameter. User ID invalid or empty during registration or attribute updates.                                                                                                                                                                   | Verify API parameters are correct.                                                                                                                              |
    | \`206\`      | \`USER_LOGIN_ANOTHER_DEVICE\`                 | User logged in on another device. Forces logout on current device if multi-device service isn't enabled.                                                                                                                                                       | When \`IConnectionDelegate#OnLoggedOtherDevice\` is triggered, log in again.                                                                                      |
    | \`207\`      | \`USER_REMOVED\`                              | User account deleted in the backend.                                                                                                                                                                                                                           | When \`IConnectionDelegate#OnRemovedFromServer\` is triggered, return to login page. Account no longer available.                                                 |
    | \`208\`      | \`USER_REG_FAILED\`                           | User account registration fails because registration is closed.                                                                                                                                                                                                | Register account with business server instead of using SDK.                                                                                                     |
    | \`210\`      | \`USER_PERMISSION_DENIED\`                    | User lacks permission for operation. User on block list attempts to send messageUser tries to modify another user's messageUser tries to modify custom group member attribute set by anotherUser attempts to destroy message thread without proper permissions | Check if user has operational privileges.                                                                                                                       |
    | \`213\`      | \`USER_BIND_ANOTHER_DEVICE\`                  | User logged in to another device in single-device login configuration.                                                                                                                                                                                         | Configure for multiple device login or use \`SDKClient#KickDevice\` before logging in.                                                                            |
    | \`214\`      | \`USER_LOGIN_TOO_MANY_DEVICES\`               | User reached maximum number of login devices.                                                                                                                                                                                                                  | Increase allowed simultaneous devices or use \`SDKClient#KickDevice\` before logging in.                                                                          |
    | \`215\`      | \`USER_MUTED\`                                | User is muted in group or chat room.                                                                                                                                                                                                                           | Restrict message sending in UI for users who are banned.                                                                                                        |
    | \`216\`      | \`USER_KICKED_BY_CHANGE_PASSWORD\`            | User changed login password, ending current session.                                                                                                                                                                                                           | When \`IConnectionDelegate#OnChangedIMPwd\` is received, call \`SDKClient#Logout\` and return to login page.                                                        |
    | \`217\`      | \`USER_KICKED_BY_OTHER_DEVICE\`               | User kicked off device via console or API call from another device.                                                                                                                                                                                            | When \`IConnectionDelegate#OnKickedByOtherDevice\` is received, call \`SDKClient#Logout\` and return to login page.                                                 |
    | \`218\`      | \`USER_ALREADY_LOGIN_ANOTHER\`                | Another user already logged in on device.                                                                                                                                                                                                                      | Call \`SDKClient#Logout\` to log out current account before logging in with different account.                                                                    |
    | \`219\`      | \`USER_MUTED_BY_ADMIN\`                       | User cannot send message when all members are muted.                                                                                                                                                                                                           | Restrict message sending in UI when full ban is active.                                                                                                         |
    | \`220\`      | \`USER_DEVICE_CHANGED\`                       | Login attempt on device that isn't the last used device in single-device configuration.                                                                                                                                                                        | When \`IConnectionDelegate#OnLoggedOtherDevice\` is received, call \`Client#Logout\` and return to login page.                                                      |
    | \`221\`      | \`USER_NOT_FRIEND\`                           | User cannot send message to non-contact when contacts-only messaging is enabled.                                                                                                                                                                               | Call \`ContactManager#AddContact\` first. Send messages after friend request is accepted.                                                                         |
    | \`300\`      | \`SERVER_NOT_REACHABLE\`                      | Server unreachable due to network issues.                                                                                                                                                                                                                      | For login errors, try switching networks or contact support for TLS encryption in specific regions. For other operations, switch networks or retry after delay. |
    | \`301\`      | \`SERVER_TIMEOUT\`                            | Request timeout when server doesn't respond within specified period.                                                                                                                                                                                           | Retry API after switching networks or waiting.                                                                                                                  |
    | \`302\`      | \`SERVER_BUSY\`                               | Server currently busy.                                                                                                                                                                                                                                         | Check for repeated API calls. May occur when calling again before previous result is returned.                                                                  |
    | \`303\`      | \`SERVER_UNKNOWN_ERROR\`                      | Common server request error.                                                                                                                                                                                                                                   | Provide logs and called APIs for troubleshooting.                                                                                                               |
    | \`304\`      | \`SERVER_GET_DNSLIST_FAILED\`                 | SDK fails to retrieve DNS server information.                                                                                                                                                                                                                  | If \`Options#EnableDNSConfig\` is \`No\`, check server settings. Otherwise, likely network issue during \`dnsConfig\` request.                                        |
    | \`305\`      | \`SERVER_SERVICE_RESTRICTED\`                 | App server is restricted.                                                                                                                                                                                                                                      | Enable Chat feature in console or contact support.                                                                                                              |
    | \`400\`      | \`FILE_NOT_FOUND\`                            | File not found.                                                                                                                                                                                                                                                | For log files, retry. For attachments, file no longer exists and cannot be downloaded.                                                                          |
    | \`401\`      | \`FILE_INVALID\`                              | File invalid.                                                                                                                                                                                                                                                  | Select different file and retry upload.                                                                                                                         |
    | \`402\`      | \`FILE_UPLOAD_FAILED\`                        | Failed to upload file.                                                                                                                                                                                                                                         | Analyze with API calls and logs.                                                                                                                                |
    | \`403\`      | \`FILE_DOWNLOAD_FAILED\`                      | Failed to download file.                                                                                                                                                                                                                                       | Check network or message expiration in logs.                                                                                                                    |
    | \`404\`      | \`FILE_DELETE_FAILED\`                        | Failed to delete existing log file.                                                                                                                                                                                                                            | Check permissions for app log files.                                                                                                                            |
    | \`405\`      | \`FILE_TOO_LARGE\`                            | File exceeds size limit.                                                                                                                                                                                                                                       | Select file under 10 MB or contact support to increase limit.                                                                                                   |
    | \`406\`      | \`FILE_CONTENT_IMPROPER\`                     | File content inappropriate.                                                                                                                                                                                                                                    | Select appropriate file and retry.                                                                                                                              |
    | \`407\`      | \`FILE_IS_EXPIRED\`                           | File expired. Attachments stored for 7 days by default.                                                                                                                                                                                                        | Contact support to increase storage time.                                                                                                                       |
    | \`500\`      | \`MESSAGE_INVALID\`                           | Message invalid. Message body or ID empty, or sender ID inconsistent with login session.                                                                                                                                                                       | Verify message construction, ID, sender, and body settings meet requirements.                                                                                   |
    | \`501\`      | \`MESSAGE_INCLUDE_ILLEGAL_CONTENT\`           | Message contains illegal content.                                                                                                                                                                                                                              | View blocking logs in console.                                                                                                                                  |
    | \`504\`      | \`MESSAGE_RECALL_TIME_LIMIT\`                 | Message recall timeout.                                                                                                                                                                                                                                        | Show UI error or contact support to extend the retractability time.                                                                                             |
    | \`505\`      | \`SERVICE_NOT_ENABLED\`                       | Feature not enabled.                                                                                                                                                                                                                                           | Enable required features in console based on API and log analysis.                                                                                              |
    | \`506\`      | \`MESSAGE_EXPIRED\`                           | Group receipt period expired. Default validity is 3 days.                                                                                                                                                                                                      | Show UI error or contact support to extend the validity time.                                                                                                   |
    | \`507\`      | \`MESSAGE_ILLEGAL_WHITELIST\`                 | User not on allow list when all members are muted.                                                                                                                                                                                                             | Show UI error or check if group-wide ban is enabled.                                                                                                            |
    | \`508\`      | \`MESSAGE_EXTERNAL_LOGIC_BLOCKED\`            | Message blocked by app server filtering rule.                                                                                                                                                                                                                  | Show UI prompt or check the pre-sending callback logs.                                                                                                          |
    | \`510\`      | \`MESSAGE_SIZE_LIMIT\`                        | Message body exceeds limit.                                                                                                                                                                                                                                    | Show UI prompt or reduce the message length (max 5 KB by default).                                                                                              |
    | \`600\`      | \`GROUP_INVALID_ID\`                          | Group ID is invalid or empty.                                                                                                                                                                                                                                  | Verify group ID parameter isn't empty or disbanded.                                                                                                             |
    | \`601\`      | \`GROUP_ALREADY_JOINED\`                      | User already in chat group.                                                                                                                                                                                                                                    | Handle as successful join.                                                                                                                                      |
    | \`602\`      | \`GROUP_NOT_JOINED\`                          | User not in chat group.                                                                                                                                                                                                                                        | Verify group ID is for joined group that hasn't been disbanded.                                                                                                 |
    | \`603\`      | \`GROUP_PERMISSION_DENIED\`                   | User lacks permission for group operation.                                                                                                                                                                                                                     | Check API call permissions.                                                                                                                                     |
    | \`604\`      | \`GROUP_MEMBERS_FULL\`                        | Group member count reached limit.                                                                                                                                                                                                                              | Show UI prompt or check if the maximum member count exceeds limit (default 200).                                                                                |
    | \`605\`      | \`GROUP_NOT_EXIST\`                           | Chat group doesn't exist.                                                                                                                                                                                                                                      | Verify \`sharedFileId\` parameter isn't null.                                                                                                                     |
    | \`606\`      | \`GROUP_NOT_EXIST\`                           | Group doesn't exist. Operation attempted on non-existing group.                                                                                                                                                                                                | Verify group ID is correct or not from disbanded group.                                                                                                         |
    | \`607\`      | \`GROUP_DISABLED\`                            | Groups are disabled.                                                                                                                                                                                                                                           | Show UI prompt to request unblock from administrator.                                                                                                           |
    | \`608\`      | \`GROUP_NAME_VIOLATION\`                      | Group name is invalid.                                                                                                                                                                                                                                         | Check if group name contains sensitive information.                                                                                                             |
    | \`609\`      | \`GROUP_MEMBER_ATTRIBUTES_REACH_LIMIT\`       | Custom attributes count reached limit.                                                                                                                                                                                                                         | Total length for single group member cannot exceed 4 KB.                                                                                                        |
    | \`610\`      | \`GROUP_MEMBER_ATTRIBUTES_UPDATE_FAILED\`     | Failed to set custom attributes.                                                                                                                                                                                                                               | Analyze with API calls and logs.                                                                                                                                |
    | \`611\`      | \`GROUP_MEMBER_ATTRIBUTES_KEY_REACH_LIMIT\`   | Custom attribute key exceeds 16 bytes.                                                                                                                                                                                                                         | Check if attribute key exceeds limit.                                                                                                                           |
    | \`612\`      | \`GROUP_MEMBER_ATTRIBUTES_VALUE_REACH_LIMIT\` | Custom attribute value exceeds 512 bytes.                                                                                                                                                                                                                      | Check if attribute value exceeds limit.                                                                                                                         |
    | \`613\`      | \`GROUP_USER_IN_BLOCKLIST\`                   | User is in group blacklist.                                                                                                                                                                                                                                    | Show UI prompt or check console for blacklist status.                                                                                                           |
    | \`700\`      | \`CHATROOM_INVALID_ID\`                       | Chat room ID is invalid or empty.                                                                                                                                                                                                                              | Check if chat room ID is empty.                                                                                                                                 |
    | \`701\`      | \`CHATROOM_ALREADY_JOINED\`                   | User already in chat room.                                                                                                                                                                                                                                     | Handle as successful join.                                                                                                                                      |
    | \`702\`      | \`CHATROOM_NOT_JOINED\`                       | User not in chat room.                                                                                                                                                                                                                                         | Verify chat room ID is correct, not disbanded, or previously joined.                                                                                            |
    | \`703\`      | \`CHATROOM_PERMISSION_DENIED\`                | User lacks permission for chat room operation.                                                                                                                                                                                                                 | Check API call permissions.                                                                                                                                     |
    | \`704\`      | \`CHATROOM_MEMBERS_FULL\`                     | Chat room member count reached limit.                                                                                                                                                                                                                          | Check maximum member count setting.                                                                                                                             |
    | \`705\`      | \`CHATROOM_NOT_EXIST\`                        | Chat room doesn't exist.                                                                                                                                                                                                                                       | Verify chat room ID is correct, not disbanded, or previously joined.                                                                                            |
    | \`706\`      | \`CHATROOM_OWNER_NOT_ALLOW_LEAVE\`            | Chat room owner not allowed to leave.                                                                                                                                                                                                                          | Check \`Options#IsRoomOwnerLeaveAllowed\` setting when SDK is initialized.                                                                                        |
    | \`707\`      | \`CHATROOM_USER_IN_BLOCKLIST\`                | User is in chat room blacklist.                                                                                                                                                                                                                                | Check console for chat room blacklist status.                                                                                                                   |
    | \`900\`      | \`PUSH_NOT_SUPPORT\`                          | Third-party push service not supported on current device.                                                                                                                                                                                                      | Get user attributes in batches of up to 100 users.                                                                                                              |
    | \`901\`      | \`PUSH_BIND_FAILED\`                          | Failed to upload third-party push service token to server.                                                                                                                                                                                                     | Check attribute length limits.                                                                                                                                  |
    | \`1000\`     | \`CONTACT_ADD_FAILED\`                        | Failed to add contact.                                                                                                                                                                                                                                         | Analyze with API calls and error description.                                                                                                                   |
    | \`1001\`     | \`CONTACT_REACH_LIMIT\`                       | Inviter reached maximum contacts limit.                                                                                                                                                                                                                        | Show UI error or contact support to increase limit.                                                                                                             |
    | \`1002\`     | \`CONTACT_REACH_LIMIT_PEER\`                  | Invitee reached maximum contacts limit.                                                                                                                                                                                                                        | Show UI error or contact support to increase limit.                                                                                                             |
    | \`1100\`     | \`PRESENCE_PARAM_LENGTH_EXCEED\`              | Presence parameter length exceeds limit.                                                                                                                                                                                                                       | Online status details cannot exceed 64 bytes.                                                                                                                   |
    | \`1101\`     | \`PRESENCE_CANNOT_SUBSCRIBE_YOURSELF\`        | User cannot subscribe to own status.                                                                                                                                                                                                                           | Check if subscribed user ID is own ID.                                                                                                                          |
    | \`1110\`     | \`TRANSLATE_PARAM_INVALID\`                   | Translation parameter error.                                                                                                                                                                                                                                   | Analyze with debug logs.                                                                                                                                        |
    | \`1111\`     | \`TRANSLATE_SERVICE_NOT_ENABLE\`              | Translation service not enabled.                                                                                                                                                                                                                               | Enable translation service in console.                                                                                                                          |
    | \`1112\`     | \`TRANSLATE_USAGE_LIMIT\`                     | Translation usage reached limit.                                                                                                                                                                                                                               | Contact support to renew translation usage.                                                                                                                     |
    | \`1113\`     | \`TRANSLATE_MESSAGE_FAIL\`                    | Failed to translate message.                                                                                                                                                                                                                                   | Analyze with debug logs.                                                                                                                                        |
    | \`1200\`     | \`THIRD_MODERATION_FAILED\`                   | Third-party content moderation result is "Reject".                                                                                                                                                                                                             | Check content audit configuration and logs in console.                                                                                                          |
    | \`1299\`     | \`THIRD_DEFAULT_FAILED\`                      | Non-third-party moderation service result is "Reject".                                                                                                                                                                                                         | Check content audit configuration and logs in console.                                                                                                          |
    | \`1300\`     | \`REACTION_REACH_LIMIT\`                      | Message Reactions reached maximum allowed.                                                                                                                                                                                                                     | Show UI prompt or contact support to increase limit.                                                                                                            |
    | \`1301\`     | \`REACTION_HAS_BEEN_OPERATED\`                | User already added this Reaction.                                                                                                                                                                                                                              | Handle as successful addition.                                                                                                                                  |
    | \`1302\`     | \`REACTION_OPERATION_IS_ILLEGAL\`             | User lacks permission for Reaction operation.                                                                                                                                                                                                                  | Verify parameters with log analysis.                                                                                                                            |
    | \`1400\`     | \`THREAD_NOT_EXIST\`                          | Thread doesn't exist.                                                                                                                                                                                                                                          | Verify subzone ID is correct.                                                                                                                                   |
    | \`1401\`     | \`THREAD_ALREADY_EXIST\`                      | Thread already exists under this message ID.                                                                                                                                                                                                                   | Check if subzone already created under incoming message.                                                                                                        |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs.

    Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact [support@agora.io](mailto\\:support@agora.io) for assistance.

    During runtime of the Agora Chat SDK, you may receive an error code and error message in one of the following ways:

    * As the return value when a method call fails.
    * As the error code reported through the \`onError\` callback.

    For example, when a user registration request fails because the username already exists, the \`onError\` callback returns the following error code and error message:

    \`\`\`csharp
    SDKClient.Instance.Login(
        username,
        passwd,
        callback: new CallBack(
            onSuccess: () =>
            {
            },
            onError: (code, desc) =>
            {
                // code: 203
                // desc: USER_ALREADY_EXIST
            }
        )
    );
    \`\`\`

    | Error code | Error message                               | Error description                                                                                                                                                                                                                                              | Fix                                                                                                                                                             |
    | :--------- | :------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`0\`        | \`EM_NO_ERROR\`                               | The operation succeeds.                                                                                                                                                                                                                                        | No action required.                                                                                                                                             |
    | \`1\`        | \`GENERAL_ERROR\`                             | The SDK is not properly initialized, or the server cannot identify this error.                                                                                                                                                                                 | Analyze logs and called APIs.                                                                                                                                   |
    | \`2\`        | \`NETWORK_ERROR\`                             | SDK disconnected from server due to network interruption.                                                                                                                                                                                                      | Retry operation after network restoration.                                                                                                                      |
    | \`3\`        | \`DATABASE_ERROR\`                            | Database operation fails.                                                                                                                                                                                                                                      | Analyze called API with logs. Error occurs when updating non-existent messages with \`Conversation#UpdateMessage\` or when database isn't open during operations. |
    | \`4\`        | \`EXCEED_SERVICE_LIMIT\`                      | Usage exceeds service limit, such as registered users exceeding current pricing plan limits.                                                                                                                                                                   | Check API parameters. Control \`limit\` parameter values. For rate limiting, retry after delay.                                                                   |
    | \`8\`        | \`APP_ACTIVE_NUMBER_REACH_LIMITATION\`        | App reached maximum daily active users (DAU) or monthly active users (MAU).                                                                                                                                                                                    | Upgrade Chat service in the console.                                                                                                                            |
    | \`100\`      | \`INVALID_APP_KEY\`                           | App Key is invalid.                                                                                                                                                                                                                                            | Initialize with correct App Key.                                                                                                                                |
    | \`101\`      | \`INVALID_USER_NAME\`                         | User ID is invalid, such as empty string when adding a contact.                                                                                                                                                                                                | Ensure user ID parameter is not null.                                                                                                                           |
    | \`102\`      | \`INVALID_PASSWORD\`                          | Login password is empty or invalid.                                                                                                                                                                                                                            | Verify password parameter is correct.                                                                                                                           |
    | \`103\`      | \`INVALID_URL\`                               | URL is incorrect.                                                                                                                                                                                                                                              | Verify API parameters are correct.                                                                                                                              |
    | \`104\`      | \`INVALID_TOKEN\`                             | Login token is empty or invalid.                                                                                                                                                                                                                               | Verify token parameters are correct.                                                                                                                            |
    | \`105\`      | \`USER_NAME_TOO_LONG\`                        | User ID exceeds 64 bytes limit.                                                                                                                                                                                                                                | Check user ID length.                                                                                                                                           |
    | \`108\`      | \`TOKEN_EXPIRED\`                             | Token has expired.                                                                                                                                                                                                                                             | When callback is received, regenerate token and call \`login\` to log in again.                                                                                   |
    | \`109\`      | \`TOKEN_WILL_EXPIRE\`                         | Token passed half of its validity period.                                                                                                                                                                                                                      | When callback is received, regenerate token and call \`SDKClient#RenewToken\` to update.                                                                          |
    | \`200\`      | \`USER_ALREADY_LOGIN\`                        | User already logged in.                                                                                                                                                                                                                                        | Check if SDK has automatic login enabled or if login method was already called.                                                                                 |
    | \`201\`      | \`USER_NOT_LOGIN\`                            | Login session invalid or expired when attempting operations.                                                                                                                                                                                                   | Ensure Chat login completes before calling API.                                                                                                                 |
    | \`202\`      | \`USER_AUTHENTICATION_FAILED\`                | User authentication fails due to invalid or expired token.                                                                                                                                                                                                     | If logged out, log in again. Otherwise, regenerate token and call \`SDKClient#RenewToken\`.                                                                       |
    | \`203\`      | \`USER_ALREADY_EXIST\`                        | User ID specified during registration already exists.                                                                                                                                                                                                          | Register with a different user ID or consider registration successful.                                                                                          |
    | \`204\`      | \`USER_NOT_FOUND\`                            | User does not exist.                                                                                                                                                                                                                                           | Verify user ID parameter is correct.                                                                                                                            |
    | \`205\`      | \`USER_ILLEGAL_ARGUMENT\`                     | Incorrect user parameter. User ID invalid or empty during registration or attribute updates.                                                                                                                                                                   | Verify API parameters are correct.                                                                                                                              |
    | \`206\`      | \`USER_LOGIN_ANOTHER_DEVICE\`                 | User logged in on another device. Forces logout on current device if multi-device service isn't enabled.                                                                                                                                                       | When \`IConnectionDelegate#OnLoggedOtherDevice\` is triggered, log in again.                                                                                      |
    | \`207\`      | \`USER_REMOVED\`                              | User account deleted in the backend.                                                                                                                                                                                                                           | When \`IConnectionDelegate#OnRemovedFromServer\` is triggered, return to login page. Account no longer available.                                                 |
    | \`208\`      | \`USER_REG_FAILED\`                           | User account registration fails because registration is closed.                                                                                                                                                                                                | Register account with business server instead of using SDK.                                                                                                     |
    | \`210\`      | \`USER_PERMISSION_DENIED\`                    | User lacks permission for operation. User on block list attempts to send messageUser tries to modify another user's messageUser tries to modify custom group member attribute set by anotherUser attempts to destroy message thread without proper permissions | Check if user has operational privileges.                                                                                                                       |
    | \`213\`      | \`USER_BIND_ANOTHER_DEVICE\`                  | User logged in to another device in single-device login configuration.                                                                                                                                                                                         | Configure for multiple device login or use \`SDKClient#KickDevice\` before logging in.                                                                            |
    | \`214\`      | \`USER_LOGIN_TOO_MANY_DEVICES\`               | User reached maximum number of login devices.                                                                                                                                                                                                                  | Increase allowed simultaneous devices or use \`SDKClient#KickDevice\` before logging in.                                                                          |
    | \`215\`      | \`USER_MUTED\`                                | User is muted in group or chat room.                                                                                                                                                                                                                           | Restrict message sending in UI for users who are banned.                                                                                                        |
    | \`216\`      | \`USER_KICKED_BY_CHANGE_PASSWORD\`            | User changed login password, ending current session.                                                                                                                                                                                                           | When \`IConnectionDelegate#OnChangedIMPwd\` is received, call \`SDKClient#Logout\` and return to login page.                                                        |
    | \`217\`      | \`USER_KICKED_BY_OTHER_DEVICE\`               | User kicked off device via console or API call from another device.                                                                                                                                                                                            | When \`IConnectionDelegate#OnKickedByOtherDevice\` is received, call \`SDKClient#Logout\` and return to login page.                                                 |
    | \`218\`      | \`USER_ALREADY_LOGIN_ANOTHER\`                | Another user already logged in on device.                                                                                                                                                                                                                      | Call \`SDKClient#Logout\` to log out current account before logging in with different account.                                                                    |
    | \`219\`      | \`USER_MUTED_BY_ADMIN\`                       | User cannot send message when all members are muted.                                                                                                                                                                                                           | Restrict message sending in UI when full ban is active.                                                                                                         |
    | \`220\`      | \`USER_DEVICE_CHANGED\`                       | Login attempt on device that isn't the last used device in single-device configuration.                                                                                                                                                                        | When \`IConnectionDelegate#OnLoggedOtherDevice\` is received, call \`Client#Logout\` and return to login page.                                                      |
    | \`221\`      | \`USER_NOT_FRIEND\`                           | User cannot send message to non-contact when contacts-only messaging is enabled.                                                                                                                                                                               | Call \`ContactManager#AddContact\` first. Send messages after friend request is accepted.                                                                         |
    | \`300\`      | \`SERVER_NOT_REACHABLE\`                      | Server unreachable due to network issues.                                                                                                                                                                                                                      | For login errors, try switching networks or contact support for TLS encryption in specific regions. For other operations, switch networks or retry after delay. |
    | \`301\`      | \`SERVER_TIMEOUT\`                            | Request timeout when server doesn't respond within specified period.                                                                                                                                                                                           | Retry API after switching networks or waiting.                                                                                                                  |
    | \`302\`      | \`SERVER_BUSY\`                               | Server currently busy.                                                                                                                                                                                                                                         | Check for repeated API calls. May occur when calling again before previous result is returned.                                                                  |
    | \`303\`      | \`SERVER_UNKNOWN_ERROR\`                      | Common server request error.                                                                                                                                                                                                                                   | Provide logs and called APIs for troubleshooting.                                                                                                               |
    | \`304\`      | \`SERVER_GET_DNSLIST_FAILED\`                 | SDK fails to retrieve DNS server information.                                                                                                                                                                                                                  | If \`Options#EnableDNSConfig\` is \`No\`, check server settings. Otherwise, likely network issue during \`dnsConfig\` request.                                        |
    | \`305\`      | \`SERVER_SERVICE_RESTRICTED\`                 | App server is restricted.                                                                                                                                                                                                                                      | Enable Chat feature in console or contact support.                                                                                                              |
    | \`400\`      | \`FILE_NOT_FOUND\`                            | File not found.                                                                                                                                                                                                                                                | For log files, retry. For attachments, file no longer exists and cannot be downloaded.                                                                          |
    | \`401\`      | \`FILE_INVALID\`                              | File invalid.                                                                                                                                                                                                                                                  | Select different file and retry upload.                                                                                                                         |
    | \`402\`      | \`FILE_UPLOAD_FAILED\`                        | Failed to upload file.                                                                                                                                                                                                                                         | Analyze with API calls and logs.                                                                                                                                |
    | \`403\`      | \`FILE_DOWNLOAD_FAILED\`                      | Failed to download file.                                                                                                                                                                                                                                       | Check network or message expiration in logs.                                                                                                                    |
    | \`404\`      | \`FILE_DELETE_FAILED\`                        | Failed to delete existing log file.                                                                                                                                                                                                                            | Check permissions for app log files.                                                                                                                            |
    | \`405\`      | \`FILE_TOO_LARGE\`                            | File exceeds size limit.                                                                                                                                                                                                                                       | Select file under 10 MB or contact support to increase limit.                                                                                                   |
    | \`406\`      | \`FILE_CONTENT_IMPROPER\`                     | File content inappropriate.                                                                                                                                                                                                                                    | Select appropriate file and retry.                                                                                                                              |
    | \`407\`      | \`FILE_IS_EXPIRED\`                           | File expired. Attachments stored for 7 days by default.                                                                                                                                                                                                        | Contact support to increase storage time.                                                                                                                       |
    | \`500\`      | \`MESSAGE_INVALID\`                           | Message invalid. Message body or ID empty, or sender ID inconsistent with login session.                                                                                                                                                                       | Verify message construction, ID, sender, and body settings meet requirements.                                                                                   |
    | \`501\`      | \`MESSAGE_INCLUDE_ILLEGAL_CONTENT\`           | Message contains illegal content.                                                                                                                                                                                                                              | View blocking logs in console.                                                                                                                                  |
    | \`504\`      | \`MESSAGE_RECALL_TIME_LIMIT\`                 | Message recall timeout.                                                                                                                                                                                                                                        | Show UI error or contact support to extend the retractability time.                                                                                             |
    | \`505\`      | \`SERVICE_NOT_ENABLED\`                       | Feature not enabled.                                                                                                                                                                                                                                           | Enable required features in console based on API and log analysis.                                                                                              |
    | \`506\`      | \`MESSAGE_EXPIRED\`                           | Group receipt period expired. Default validity is 3 days.                                                                                                                                                                                                      | Show UI error or contact support to extend the validity time.                                                                                                   |
    | \`507\`      | \`MESSAGE_ILLEGAL_WHITELIST\`                 | User not on allow list when all members are muted.                                                                                                                                                                                                             | Show UI error or check if group-wide ban is enabled.                                                                                                            |
    | \`508\`      | \`MESSAGE_EXTERNAL_LOGIC_BLOCKED\`            | Message blocked by app server filtering rule.                                                                                                                                                                                                                  | Show UI prompt or check the pre-sending callback logs.                                                                                                          |
    | \`510\`      | \`MESSAGE_SIZE_LIMIT\`                        | Message body exceeds limit.                                                                                                                                                                                                                                    | Show UI prompt or reduce the message length (max 5 KB by default).                                                                                              |
    | \`600\`      | \`GROUP_INVALID_ID\`                          | Group ID is invalid or empty.                                                                                                                                                                                                                                  | Verify group ID parameter isn't empty or disbanded.                                                                                                             |
    | \`601\`      | \`GROUP_ALREADY_JOINED\`                      | User already in chat group.                                                                                                                                                                                                                                    | Handle as successful join.                                                                                                                                      |
    | \`602\`      | \`GROUP_NOT_JOINED\`                          | User not in chat group.                                                                                                                                                                                                                                        | Verify group ID is for joined group that hasn't been disbanded.                                                                                                 |
    | \`603\`      | \`GROUP_PERMISSION_DENIED\`                   | User lacks permission for group operation.                                                                                                                                                                                                                     | Check API call permissions.                                                                                                                                     |
    | \`604\`      | \`GROUP_MEMBERS_FULL\`                        | Group member count reached limit.                                                                                                                                                                                                                              | Show UI prompt or check if the maximum member count exceeds limit (default 200).                                                                                |
    | \`605\`      | \`GROUP_NOT_EXIST\`                           | Chat group doesn't exist.                                                                                                                                                                                                                                      | Verify \`sharedFileId\` parameter isn't null.                                                                                                                     |
    | \`606\`      | \`GROUP_NOT_EXIST\`                           | Group doesn't exist. Operation attempted on non-existing group.                                                                                                                                                                                                | Verify group ID is correct or not from disbanded group.                                                                                                         |
    | \`607\`      | \`GROUP_DISABLED\`                            | Groups are disabled.                                                                                                                                                                                                                                           | Show UI prompt to request unblock from administrator.                                                                                                           |
    | \`608\`      | \`GROUP_NAME_VIOLATION\`                      | Group name is invalid.                                                                                                                                                                                                                                         | Check if group name contains sensitive information.                                                                                                             |
    | \`609\`      | \`GROUP_MEMBER_ATTRIBUTES_REACH_LIMIT\`       | Custom attributes count reached limit.                                                                                                                                                                                                                         | Total length for single group member cannot exceed 4 KB.                                                                                                        |
    | \`610\`      | \`GROUP_MEMBER_ATTRIBUTES_UPDATE_FAILED\`     | Failed to set custom attributes.                                                                                                                                                                                                                               | Analyze with API calls and logs.                                                                                                                                |
    | \`611\`      | \`GROUP_MEMBER_ATTRIBUTES_KEY_REACH_LIMIT\`   | Custom attribute key exceeds 16 bytes.                                                                                                                                                                                                                         | Check if attribute key exceeds limit.                                                                                                                           |
    | \`612\`      | \`GROUP_MEMBER_ATTRIBUTES_VALUE_REACH_LIMIT\` | Custom attribute value exceeds 512 bytes.                                                                                                                                                                                                                      | Check if attribute value exceeds limit.                                                                                                                         |
    | \`613\`      | \`GROUP_USER_IN_BLOCKLIST\`                   | User is in group blacklist.                                                                                                                                                                                                                                    | Show UI prompt or check console for blacklist status.                                                                                                           |
    | \`700\`      | \`CHATROOM_INVALID_ID\`                       | Chat room ID is invalid or empty.                                                                                                                                                                                                                              | Check if chat room ID is empty.                                                                                                                                 |
    | \`701\`      | \`CHATROOM_ALREADY_JOINED\`                   | User already in chat room.                                                                                                                                                                                                                                     | Handle as successful join.                                                                                                                                      |
    | \`702\`      | \`CHATROOM_NOT_JOINED\`                       | User not in chat room.                                                                                                                                                                                                                                         | Verify chat room ID is correct, not disbanded, or previously joined.                                                                                            |
    | \`703\`      | \`CHATROOM_PERMISSION_DENIED\`                | User lacks permission for chat room operation.                                                                                                                                                                                                                 | Check API call permissions.                                                                                                                                     |
    | \`704\`      | \`CHATROOM_MEMBERS_FULL\`                     | Chat room member count reached limit.                                                                                                                                                                                                                          | Check maximum member count setting.                                                                                                                             |
    | \`705\`      | \`CHATROOM_NOT_EXIST\`                        | Chat room doesn't exist.                                                                                                                                                                                                                                       | Verify chat room ID is correct, not disbanded, or previously joined.                                                                                            |
    | \`706\`      | \`CHATROOM_OWNER_NOT_ALLOW_LEAVE\`            | Chat room owner not allowed to leave.                                                                                                                                                                                                                          | Check \`Options#IsRoomOwnerLeaveAllowed\` setting when SDK is initialized.                                                                                        |
    | \`707\`      | \`CHATROOM_USER_IN_BLOCKLIST\`                | User is in chat room blacklist.                                                                                                                                                                                                                                | Check console for chat room blacklist status.                                                                                                                   |
    | \`900\`      | \`PUSH_NOT_SUPPORT\`                          | Third-party push service not supported on current device.                                                                                                                                                                                                      | Get user attributes in batches of up to 100 users.                                                                                                              |
    | \`901\`      | \`PUSH_BIND_FAILED\`                          | Failed to upload third-party push service token to server.                                                                                                                                                                                                     | Check attribute length limits.                                                                                                                                  |
    | \`1000\`     | \`CONTACT_ADD_FAILED\`                        | Failed to add contact.                                                                                                                                                                                                                                         | Analyze with API calls and error description.                                                                                                                   |
    | \`1001\`     | \`CONTACT_REACH_LIMIT\`                       | Inviter reached maximum contacts limit.                                                                                                                                                                                                                        | Show UI error or contact support to increase limit.                                                                                                             |
    | \`1002\`     | \`CONTACT_REACH_LIMIT_PEER\`                  | Invitee reached maximum contacts limit.                                                                                                                                                                                                                        | Show UI error or contact support to increase limit.                                                                                                             |
    | \`1100\`     | \`PRESENCE_PARAM_LENGTH_EXCEED\`              | Presence parameter length exceeds limit.                                                                                                                                                                                                                       | Online status details cannot exceed 64 bytes.                                                                                                                   |
    | \`1101\`     | \`PRESENCE_CANNOT_SUBSCRIBE_YOURSELF\`        | User cannot subscribe to own status.                                                                                                                                                                                                                           | Check if subscribed user ID is own ID.                                                                                                                          |
    | \`1110\`     | \`TRANSLATE_PARAM_INVALID\`                   | Translation parameter error.                                                                                                                                                                                                                                   | Analyze with debug logs.                                                                                                                                        |
    | \`1111\`     | \`TRANSLATE_SERVICE_NOT_ENABLE\`              | Translation service not enabled.                                                                                                                                                                                                                               | Enable translation service in console.                                                                                                                          |
    | \`1112\`     | \`TRANSLATE_USAGE_LIMIT\`                     | Translation usage reached limit.                                                                                                                                                                                                                               | Contact support to renew translation usage.                                                                                                                     |
    | \`1113\`     | \`TRANSLATE_MESSAGE_FAIL\`                    | Failed to translate message.                                                                                                                                                                                                                                   | Analyze with debug logs.                                                                                                                                        |
    | \`1200\`     | \`THIRD_MODERATION_FAILED\`                   | Third-party content moderation result is "Reject".                                                                                                                                                                                                             | Check content audit configuration and logs in console.                                                                                                          |
    | \`1299\`     | \`THIRD_DEFAULT_FAILED\`                      | Non-third-party moderation service result is "Reject".                                                                                                                                                                                                         | Check content audit configuration and logs in console.                                                                                                          |
    | \`1300\`     | \`REACTION_REACH_LIMIT\`                      | Message Reactions reached maximum allowed.                                                                                                                                                                                                                     | Show UI prompt or contact support to increase limit.                                                                                                            |
    | \`1301\`     | \`REACTION_HAS_BEEN_OPERATED\`                | User already added this Reaction.                                                                                                                                                                                                                              | Handle as successful addition.                                                                                                                                  |
    | \`1302\`     | \`REACTION_OPERATION_IS_ILLEGAL\`             | User lacks permission for Reaction operation.                                                                                                                                                                                                                  | Verify parameters with log analysis.                                                                                                                            |
    | \`1400\`     | \`THREAD_NOT_EXIST\`                          | Thread doesn't exist.                                                                                                                                                                                                                                          | Verify subzone ID is correct.                                                                                                                                   |
    | \`1401\`     | \`THREAD_ALREADY_EXIST\`                      | Thread already exists under this message ID.                                                                                                                                                                                                                   | Check if subzone already created under incoming message.                                                                                                        |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs.

    Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact [support@agora.io](mailto\\:support@agora.io) for assistance.

    Refer to the error codes for Android and iOS.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs."
  }, {
    heading: undefined,
    content: "Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact support\\@agora.io for assistance."
  }, {
    heading: undefined,
    content: "You may receive an error code and error message in one of the following ways:"
  }, {
    heading: undefined,
    content: "As the return value when a method call fails."
  }, {
    heading: undefined,
    content: "As the error code reported through the `onError` callback."
  }, {
    heading: undefined,
    content: "Error code"
  }, {
    heading: undefined,
    content: "Error message"
  }, {
    heading: undefined,
    content: "Possible reason"
  }, {
    heading: undefined,
    content: "Fix"
  }, {
    heading: undefined,
    content: "`0`"
  }, {
    heading: undefined,
    content: "`EM_NO_ERROR`"
  }, {
    heading: undefined,
    content: "The operation succeeds."
  }, {
    heading: undefined,
    content: "No action required."
  }, {
    heading: undefined,
    content: "`1`"
  }, {
    heading: undefined,
    content: "`GENERAL_ERROR`"
  }, {
    heading: undefined,
    content: "Default error related to the SDK or API requests. Occurs when SDK isn't properly initialized or a request fails without specific reason."
  }, {
    heading: undefined,
    content: "Analyze logs and called APIs."
  }, {
    heading: undefined,
    content: "`2`"
  }, {
    heading: undefined,
    content: "`NETWORK_ERROR`"
  }, {
    heading: undefined,
    content: "SDK disconnected from server due to network interruption."
  }, {
    heading: undefined,
    content: "Retry operation after network restoration."
  }, {
    heading: undefined,
    content: "`3`"
  }, {
    heading: undefined,
    content: "`DATABASE_ERROR`"
  }, {
    heading: undefined,
    content: "Database operation fails."
  }, {
    heading: undefined,
    content: "Analyze called API with logs. Error occurs when updating non-existent messages with `Conversation#updateMessage` or when database isn't open during operations."
  }, {
    heading: undefined,
    content: "`4`"
  }, {
    heading: undefined,
    content: "`EXCEED_SERVICE_LIMIT`"
  }, {
    heading: undefined,
    content: "Usage exceeds service limit, such as registered users or contacts exceeding current pricing plan limits."
  }, {
    heading: undefined,
    content: "Check API parameters. Control `limit` parameter values. For rate limiting, retry after delay."
  }, {
    heading: undefined,
    content: "`8`"
  }, {
    heading: undefined,
    content: "`APP_ACTIVE_NUMBER_REACH_LIMITATION`"
  }, {
    heading: undefined,
    content: "App reached maximum daily active users (DAU) or monthly active users (MAU)."
  }, {
    heading: undefined,
    content: "Upgrade Chat service in the console."
  }, {
    heading: undefined,
    content: "`100`"
  }, {
    heading: undefined,
    content: "`INVALID_APP_KEY`"
  }, {
    heading: undefined,
    content: "App Key is invalid."
  }, {
    heading: undefined,
    content: "Initialize with correct App Key."
  }, {
    heading: undefined,
    content: "`101`"
  }, {
    heading: undefined,
    content: "`INVALID_USER_NAME`"
  }, {
    heading: undefined,
    content: "User ID is invalid, such as empty string when adding a contact."
  }, {
    heading: undefined,
    content: "Ensure user ID parameter is not null."
  }, {
    heading: undefined,
    content: "`102`"
  }, {
    heading: undefined,
    content: "`INVALID_PASSWORD`"
  }, {
    heading: undefined,
    content: "Login password is empty or invalid."
  }, {
    heading: undefined,
    content: "Verify password parameter is correct."
  }, {
    heading: undefined,
    content: "`103`"
  }, {
    heading: undefined,
    content: "`INVALID_URL`"
  }, {
    heading: undefined,
    content: "URL is incorrect."
  }, {
    heading: undefined,
    content: "Verify API parameters are correct."
  }, {
    heading: undefined,
    content: "`104`"
  }, {
    heading: undefined,
    content: "`INVALID_TOKEN`"
  }, {
    heading: undefined,
    content: "User token is empty or invalid."
  }, {
    heading: undefined,
    content: "Verify token parameters are correct."
  }, {
    heading: undefined,
    content: "`105`"
  }, {
    heading: undefined,
    content: "`USER_NAME_TOO_LONG`"
  }, {
    heading: undefined,
    content: "User ID exceeds 64 bytes limit."
  }, {
    heading: undefined,
    content: "Check user ID length."
  }, {
    heading: undefined,
    content: "`108`"
  }, {
    heading: undefined,
    content: "`TOKEN_EXPIRED`"
  }, {
    heading: undefined,
    content: "Token has expired."
  }, {
    heading: undefined,
    content: "When callback received, regenerate token and call `loginWithToken` to log in again."
  }, {
    heading: undefined,
    content: "`109`"
  }, {
    heading: undefined,
    content: "`TOKEN_WILL_EXPIRE`"
  }, {
    heading: undefined,
    content: "Token passed half of its validity period."
  }, {
    heading: undefined,
    content: "When callback received, regenerate token and call `ChatClient#renewToken` to update."
  }, {
    heading: undefined,
    content: "`110`"
  }, {
    heading: undefined,
    content: "`INVALID_PARAM`"
  }, {
    heading: undefined,
    content: "Invalid parameter."
  }, {
    heading: undefined,
    content: "Verify API parameters are valid."
  }, {
    heading: undefined,
    content: "`200`"
  }, {
    heading: undefined,
    content: "`USER_ALREADY_LOGIN`"
  }, {
    heading: undefined,
    content: "User already logged in."
  }, {
    heading: undefined,
    content: "Check if SDK has automatic login enabled or if login method was already called."
  }, {
    heading: undefined,
    content: "`201`"
  }, {
    heading: undefined,
    content: "`USER_NOT_LOGIN`"
  }, {
    heading: undefined,
    content: "User not logged in. Session invalid or expired when attempting operations."
  }, {
    heading: undefined,
    content: "Ensure Chat login completes before calling API."
  }, {
    heading: undefined,
    content: "`202`"
  }, {
    heading: undefined,
    content: "`USER_AUTHENTICATION_FAILED`"
  }, {
    heading: undefined,
    content: "User authentication fails due to invalid or expired token."
  }, {
    heading: undefined,
    content: "If logged out, log in again. Otherwise, regenerate token and call `ChatClient#renewToken`."
  }, {
    heading: undefined,
    content: "`203`"
  }, {
    heading: undefined,
    content: "`USER_ALREADY_EXIST`"
  }, {
    heading: undefined,
    content: "User ID specified during registration already exists."
  }, {
    heading: undefined,
    content: "Register with a different user ID."
  }, {
    heading: undefined,
    content: "`204`"
  }, {
    heading: undefined,
    content: "`USER_NOT_FOUND`"
  }, {
    heading: undefined,
    content: "User does not exist."
  }, {
    heading: undefined,
    content: "Verify user ID parameter is correct."
  }, {
    heading: undefined,
    content: "`205`"
  }, {
    heading: undefined,
    content: "`USER_ILLEGAL_ARGUMENT`"
  }, {
    heading: undefined,
    content: "Incorrect user parameter. User ID invalid or empty during registration or attribute updates."
  }, {
    heading: undefined,
    content: "Verify API parameters are correct."
  }, {
    heading: undefined,
    content: "`206`"
  }, {
    heading: undefined,
    content: "`USER_LOGIN_ANOTHER_DEVICE`"
  }, {
    heading: undefined,
    content: "User logged in on another device. Forces logout on current device if multi-device service isn't enabled."
  }, {
    heading: undefined,
    content: "When `ConnectionListener#onLogout` is triggered, log in again."
  }, {
    heading: undefined,
    content: "`207`"
  }, {
    heading: undefined,
    content: "`USER_REMOVED`"
  }, {
    heading: undefined,
    content: "User account deleted in the console."
  }, {
    heading: undefined,
    content: "When `ConnectionListener#onLogout` is triggered, return to login page. Account no longer available."
  }, {
    heading: undefined,
    content: "`209`"
  }, {
    heading: undefined,
    content: "`PUSH_UPDATECONFIGS_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to update push configurations."
  }, {
    heading: undefined,
    content: "Check error-reporting API, wait, then retry."
  }, {
    heading: undefined,
    content: "`210`"
  }, {
    heading: undefined,
    content: "`USER_PERMISSION_DENIED`"
  }, {
    heading: undefined,
    content: "User lacks permission for operation. User on block list attempts to send messageUser tries to modify another user's messageUser tries to modify custom group member attribute set by anotherUser attempts to destroy message thread without proper permissions"
  }, {
    heading: undefined,
    content: "Verify user has operation permission."
  }, {
    heading: undefined,
    content: "`211`"
  }, {
    heading: undefined,
    content: "`USER_BINDDEVICETOKEN_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to bind push token to device."
  }, {
    heading: undefined,
    content: "Verify token for device push binding isn't empty."
  }, {
    heading: undefined,
    content: "`212`"
  }, {
    heading: undefined,
    content: "`USER_UNBIND_DEVICETOKEN_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to unbind push token from device."
  }, {
    heading: undefined,
    content: "Retry `ChatClient#logout`. For guaranteed exit, call with parameter set to `false` (unbind)."
  }, {
    heading: undefined,
    content: "`213`"
  }, {
    heading: undefined,
    content: "`USER_BIND_ANOTHER_DEVICE`"
  }, {
    heading: undefined,
    content: "User logged in to another device in single-device login configuration."
  }, {
    heading: undefined,
    content: "Configure for multiple device login or use `ChatClient#kickDeviceWithToken` before logging in."
  }, {
    heading: undefined,
    content: "`214`"
  }, {
    heading: undefined,
    content: "`USER_LOGIN_TOO_MANY_DEVICES`"
  }, {
    heading: undefined,
    content: "User reached maximum number of login devices."
  }, {
    heading: undefined,
    content: "Increase allowed simultaneous devices or use `ChatClient#kickDeviceWithToken` before logging in."
  }, {
    heading: undefined,
    content: "`215`"
  }, {
    heading: undefined,
    content: "`USER_MUTED`"
  }, {
    heading: undefined,
    content: "User is muted in group or chat room."
  }, {
    heading: undefined,
    content: "Restrict message sending in UI for users who are banned."
  }, {
    heading: undefined,
    content: "`216`"
  }, {
    heading: undefined,
    content: "`USER_KICKED_BY_CHANGE_PASSWORD`"
  }, {
    heading: undefined,
    content: "User changed login password, ending current session."
  }, {
    heading: undefined,
    content: "When `ConnectionListener#onLogout` is received, call `ChatClient#logout` and return to login page."
  }, {
    heading: undefined,
    content: "`217`"
  }, {
    heading: undefined,
    content: "`USER_KICKED_BY_OTHER_DEVICE`"
  }, {
    heading: undefined,
    content: "User kicked off device via console or API call from another device."
  }, {
    heading: undefined,
    content: "When `ConnectionListener#onLogout` is received, call `ChatClient#logout` and return to login page."
  }, {
    heading: undefined,
    content: "`218`"
  }, {
    heading: undefined,
    content: "`USER_ALREADY_LOGIN_ANOTHER`"
  }, {
    heading: undefined,
    content: "Another user already logged in on device."
  }, {
    heading: undefined,
    content: "Call `ChatClient#logout` to log out current account before logging in with different account."
  }, {
    heading: undefined,
    content: "`219`"
  }, {
    heading: undefined,
    content: "`USER_MUTED_BY_ADMIN`"
  }, {
    heading: undefined,
    content: "User cannot send message when all members are muted."
  }, {
    heading: undefined,
    content: "Restrict message sending in UI when full ban is active."
  }, {
    heading: undefined,
    content: "`220`"
  }, {
    heading: undefined,
    content: "`USER_DEVICE_CHANGED`"
  }, {
    heading: undefined,
    content: "Login attempt on device that isn't the last used device in single-device configuration."
  }, {
    heading: undefined,
    content: "When `ConnectionListener#onLogout` is received, call `ChatClient#logout` and return to login page."
  }, {
    heading: undefined,
    content: "`221`"
  }, {
    heading: undefined,
    content: "`USER_NOT_ON_ROSTER`"
  }, {
    heading: undefined,
    content: "User cannot send message to non-contact when contacts-only messaging enabled."
  }, {
    heading: undefined,
    content: "Call `ContactManager#addContact` first. Send messages after friend request is accepted."
  }, {
    heading: undefined,
    content: "`300`"
  }, {
    heading: undefined,
    content: "`SERVER_NOT_REACHABLE`"
  }, {
    heading: undefined,
    content: "Server unreachable due to network issues."
  }, {
    heading: undefined,
    content: "For login errors, try switching networks or contacting support for TLS encryption in specific regions. For other operations, switch networks or retry after delay."
  }, {
    heading: undefined,
    content: "`301`"
  }, {
    heading: undefined,
    content: "`SERVER_TIMEOUT`"
  }, {
    heading: undefined,
    content: "Request timeout when server doesn't respond within specified period."
  }, {
    heading: undefined,
    content: "Retry API after switching networks or waiting."
  }, {
    heading: undefined,
    content: "`302`"
  }, {
    heading: undefined,
    content: "`SERVER_BUSY`"
  }, {
    heading: undefined,
    content: "Server currently busy."
  }, {
    heading: undefined,
    content: "Check for repeated API calls. May occur when calling again before previous result returned."
  }, {
    heading: undefined,
    content: "`303`"
  }, {
    heading: undefined,
    content: "`SERVER_UNKNOWN_ERROR`"
  }, {
    heading: undefined,
    content: "Common server request error."
  }, {
    heading: undefined,
    content: "Provide logs and called APIs for troubleshooting."
  }, {
    heading: undefined,
    content: "`304`"
  }, {
    heading: undefined,
    content: "`SERVER_GET_DNSLIST_FAILED`"
  }, {
    heading: undefined,
    content: "SDK fails to get server configuration."
  }, {
    heading: undefined,
    content: "If `ChatOptions#enableDNSConfig` is `false`, check server settings. Otherwise, likely network issue during `dnsConfig` request."
  }, {
    heading: undefined,
    content: "`305`"
  }, {
    heading: undefined,
    content: "`SERVER_SERVICE_RESTRICTED`"
  }, {
    heading: undefined,
    content: "App is banned."
  }, {
    heading: undefined,
    content: "Enable Chat feature in console or contact support."
  }, {
    heading: undefined,
    content: "`400`"
  }, {
    heading: undefined,
    content: "`FILE_NOT_FOUND`"
  }, {
    heading: undefined,
    content: "File not found."
  }, {
    heading: undefined,
    content: "For log files, retry. For attachments, file no longer exists and cannot be downloaded."
  }, {
    heading: undefined,
    content: "`401`"
  }, {
    heading: undefined,
    content: "`FILE_INVALID`"
  }, {
    heading: undefined,
    content: "File invalid."
  }, {
    heading: undefined,
    content: "Select different file and retry upload."
  }, {
    heading: undefined,
    content: "`402`"
  }, {
    heading: undefined,
    content: "`FILE_UPLOAD_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to upload file."
  }, {
    heading: undefined,
    content: "Analyze with API calls and logs."
  }, {
    heading: undefined,
    content: "`403`"
  }, {
    heading: undefined,
    content: "`FILE_DOWNLOAD_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to download file."
  }, {
    heading: undefined,
    content: "Check network or message expiration in logs."
  }, {
    heading: undefined,
    content: "`404`"
  }, {
    heading: undefined,
    content: "`FILE_DELETE_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to delete existing log file."
  }, {
    heading: undefined,
    content: "Check permissions for app log files or chat logs."
  }, {
    heading: undefined,
    content: "`405`"
  }, {
    heading: undefined,
    content: "`FILE_TOO_LARGE`"
  }, {
    heading: undefined,
    content: "File exceeds size limit."
  }, {
    heading: undefined,
    content: "Select file under 10 MB or contact support to increase limit."
  }, {
    heading: undefined,
    content: "`406`"
  }, {
    heading: undefined,
    content: "`FILE_CONTENT_IMPROPER`"
  }, {
    heading: undefined,
    content: "File content inappropriate."
  }, {
    heading: undefined,
    content: "Select appropriate file and retry."
  }, {
    heading: undefined,
    content: "`407`"
  }, {
    heading: undefined,
    content: "`FILE_IS_EXPIRED`"
  }, {
    heading: undefined,
    content: "File expired. Attachments stored for 7 days by default."
  }, {
    heading: undefined,
    content: "Contact support to increase storage time."
  }, {
    heading: undefined,
    content: "`500`"
  }, {
    heading: undefined,
    content: "`MESSAGE_INVALID`"
  }, {
    heading: undefined,
    content: "Message invalid. Message object or ID empty, or sender ID inconsistent with login session."
  }, {
    heading: undefined,
    content: "Verify message construction, ID, sender, and body settings."
  }, {
    heading: undefined,
    content: "`501`"
  }, {
    heading: undefined,
    content: "`MESSAGE_INCLUDE_ILLEGAL_CONTENT`"
  }, {
    heading: undefined,
    content: "Message contains inappropriate content."
  }, {
    heading: undefined,
    content: "View blocking logs in console."
  }, {
    heading: undefined,
    content: "`504`"
  }, {
    heading: undefined,
    content: "`MESSAGE_RECALL_TIME_LIMIT`"
  }, {
    heading: undefined,
    content: "Message recall timeout."
  }, {
    heading: undefined,
    content: "Show UI error or contact support to extend the retractability time."
  }, {
    heading: undefined,
    content: "`505`"
  }, {
    heading: undefined,
    content: "`SERVICE_NOT_ENABLED`"
  }, {
    heading: undefined,
    content: "Feature not enabled."
  }, {
    heading: undefined,
    content: "Enable required functions in console based on API and log analysis."
  }, {
    heading: undefined,
    content: "`506`"
  }, {
    heading: undefined,
    content: "`MESSAGE_EXPIRED`"
  }, {
    heading: undefined,
    content: "Group message read receipt period expired. Default validity is 3 days."
  }, {
    heading: undefined,
    content: "Show UI error or contact support to extend the validity time."
  }, {
    heading: undefined,
    content: "`507`"
  }, {
    heading: undefined,
    content: "`MESSAGE_ILLEGAL_WHITELIST`"
  }, {
    heading: undefined,
    content: "User not on allow list when all members are muted."
  }, {
    heading: undefined,
    content: "Show UI error or check if group-wide ban is enabled."
  }, {
    heading: undefined,
    content: "`508`"
  }, {
    heading: undefined,
    content: "`MESSAGE_EXTERNAL_LOGIC_BLOCKED`"
  }, {
    heading: undefined,
    content: "Message blocked by app server filtering rule during pre-sending callback."
  }, {
    heading: undefined,
    content: "Show UI prompt or check the pre-sending callback logs."
  }, {
    heading: undefined,
    content: "`510`"
  }, {
    heading: undefined,
    content: "`MESSAGE_SIZE_LIMIT`"
  }, {
    heading: undefined,
    content: "Message body exceeds limit."
  }, {
    heading: undefined,
    content: "Show UI prompt or reduce the message length (max 5 KB by default)."
  }, {
    heading: undefined,
    content: "`511`"
  }, {
    heading: undefined,
    content: "`MESSAGE_EDIT_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to modify message."
  }, {
    heading: undefined,
    content: "Analyze with logs."
  }, {
    heading: undefined,
    content: "`600`"
  }, {
    heading: undefined,
    content: "`GROUP_INVALID_ID`"
  }, {
    heading: undefined,
    content: "Invalid group ID."
  }, {
    heading: undefined,
    content: "Verify group ID parameter isn't null or disbanded."
  }, {
    heading: undefined,
    content: "`601`"
  }, {
    heading: undefined,
    content: "`GROUP_ALREADY_JOINED`"
  }, {
    heading: undefined,
    content: "User already in chat group."
  }, {
    heading: undefined,
    content: "Handle as successful join."
  }, {
    heading: undefined,
    content: "`602`"
  }, {
    heading: undefined,
    content: "`GROUP_NOT_JOINED`"
  }, {
    heading: undefined,
    content: "User not in chat group."
  }, {
    heading: undefined,
    content: "Verify group ID is for joined group that hasn't been disbanded."
  }, {
    heading: undefined,
    content: "`603`"
  }, {
    heading: undefined,
    content: "`GROUP_PERMISSION_DENIED`"
  }, {
    heading: undefined,
    content: "User lacks permission for group operation."
  }, {
    heading: undefined,
    content: "Check API call permissions."
  }, {
    heading: undefined,
    content: "`604`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBERS_FULL`"
  }, {
    heading: undefined,
    content: "Group member count reached limit."
  }, {
    heading: undefined,
    content: "Show UI prompt or check if the maximum member count exceeds limit (default 200)."
  }, {
    heading: undefined,
    content: "`605`"
  }, {
    heading: undefined,
    content: "`GROUP_SHARED_FILE_INVALIDID`"
  }, {
    heading: undefined,
    content: "Group shared file ID invalid."
  }, {
    heading: undefined,
    content: "Verify `sharedFileId` parameter isn't null."
  }, {
    heading: undefined,
    content: "`606`"
  }, {
    heading: undefined,
    content: "`GROUP_NOT_EXIST`"
  }, {
    heading: undefined,
    content: "Chat group doesn't exist."
  }, {
    heading: undefined,
    content: "Verify group ID is correct or not from disbanded group."
  }, {
    heading: undefined,
    content: "`607`"
  }, {
    heading: undefined,
    content: "`GROUP_DISABLED`"
  }, {
    heading: undefined,
    content: "Chat group is disabled."
  }, {
    heading: undefined,
    content: "Show UI prompt to request unblock from administrator."
  }, {
    heading: undefined,
    content: "`608`"
  }, {
    heading: undefined,
    content: "`GROUP_NAME_VIOLATION`"
  }, {
    heading: undefined,
    content: "Chat group name invalid."
  }, {
    heading: undefined,
    content: "Check if group name contains sensitive information."
  }, {
    heading: undefined,
    content: "`609`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBER_ATTRIBUTES_REACH_LIMIT`"
  }, {
    heading: undefined,
    content: "Custom attributes length reached limit."
  }, {
    heading: undefined,
    content: "Total length for single group member cannot exceed 4 KB."
  }, {
    heading: undefined,
    content: "`610`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBER_ATTRIBUTES_UPDATE_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to set custom attributes."
  }, {
    heading: undefined,
    content: "Analyze with API calls and logs."
  }, {
    heading: undefined,
    content: "`611`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBER_ATTRIBUTES_KEY_REACH_LIMIT`"
  }, {
    heading: undefined,
    content: "Custom attribute key exceeds 16 bytes."
  }, {
    heading: undefined,
    content: "Check if attribute key exceeds limit."
  }, {
    heading: undefined,
    content: "`612`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBER_ATTRIBUTES_VALUE_REACH_LIMIT`"
  }, {
    heading: undefined,
    content: "Custom attribute value exceeds 512 bytes."
  }, {
    heading: undefined,
    content: "Check if attribute value exceeds limit."
  }, {
    heading: undefined,
    content: "`613`"
  }, {
    heading: undefined,
    content: "`GROUP_USER_IN_BLOCKLIST`"
  }, {
    heading: undefined,
    content: "User is in group blacklist."
  }, {
    heading: undefined,
    content: "Show UI prompt or check console for blacklist status."
  }, {
    heading: undefined,
    content: "`700`"
  }, {
    heading: undefined,
    content: "`CHATROOM_INVALID_ID`"
  }, {
    heading: undefined,
    content: "Invalid chat room ID."
  }, {
    heading: undefined,
    content: "Check if chat room ID is empty."
  }, {
    heading: undefined,
    content: "`701`"
  }, {
    heading: undefined,
    content: "`CHATROOM_ALREADY_JOINED`"
  }, {
    heading: undefined,
    content: "User already in chat room."
  }, {
    heading: undefined,
    content: "Handle as successful join."
  }, {
    heading: undefined,
    content: "`702`"
  }, {
    heading: undefined,
    content: "`CHATROOM_NOT_JOINED`"
  }, {
    heading: undefined,
    content: "User not in chat room."
  }, {
    heading: undefined,
    content: "Verify chat room ID is correct, not disbanded, or previously joined."
  }, {
    heading: undefined,
    content: "`703`"
  }, {
    heading: undefined,
    content: "`CHATROOM_PERMISSION_DENIED`"
  }, {
    heading: undefined,
    content: "User lacks permission for chat room operation."
  }, {
    heading: undefined,
    content: "Check API call permissions."
  }, {
    heading: undefined,
    content: "`704`"
  }, {
    heading: undefined,
    content: "`CHATROOM_MEMBERS_FULL`"
  }, {
    heading: undefined,
    content: "Chat room member count reached limit."
  }, {
    heading: undefined,
    content: "Check maximum member count setting."
  }, {
    heading: undefined,
    content: "`705`"
  }, {
    heading: undefined,
    content: "`CHATROOM_NOT_EXIST`"
  }, {
    heading: undefined,
    content: "Chat room doesn't exist."
  }, {
    heading: undefined,
    content: "Verify chat room ID is correct, not disbanded, or previously joined."
  }, {
    heading: undefined,
    content: "`706`"
  }, {
    heading: undefined,
    content: "`CHATROOM_OWNER_NOT_ALLOW_LEAVE`"
  }, {
    heading: undefined,
    content: "Chat room owner not allowed to leave."
  }, {
    heading: undefined,
    content: "Check `ChatOptions#allowChatroomOwnerLeave` setting."
  }, {
    heading: undefined,
    content: "`707`"
  }, {
    heading: undefined,
    content: "`CHATROOM_USER_IN_BLOCKLIST`"
  }, {
    heading: undefined,
    content: "User is in chat room blacklist."
  }, {
    heading: undefined,
    content: "Check console for chat room blacklist status."
  }, {
    heading: undefined,
    content: "`900`"
  }, {
    heading: undefined,
    content: "`USERINFO_USERCOUNT_EXCEED`"
  }, {
    heading: undefined,
    content: "User attribute retrieval count exceeds 100."
  }, {
    heading: undefined,
    content: "Get attributes in batches of up to 100 users."
  }, {
    heading: undefined,
    content: "`901`"
  }, {
    heading: undefined,
    content: "`USERINFO_DATALENGTH_EXCEED`"
  }, {
    heading: undefined,
    content: "User attributes too long. Maximum 2 KB per user or 10 GB per app."
  }, {
    heading: undefined,
    content: "Check attribute length limits."
  }, {
    heading: undefined,
    content: "`1000`"
  }, {
    heading: undefined,
    content: "`CONTACT_ADD_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to add contact."
  }, {
    heading: undefined,
    content: "Analyze with API calls and error description."
  }, {
    heading: undefined,
    content: "`1001`"
  }, {
    heading: undefined,
    content: "`CONTACT_REACH_LIMIT`"
  }, {
    heading: undefined,
    content: "Inviter reached maximum contacts limit."
  }, {
    heading: undefined,
    content: "Show UI error or contact support to increase limit."
  }, {
    heading: undefined,
    content: "`1002`"
  }, {
    heading: undefined,
    content: "`CONTACT_REACH_LIMIT_PEER`"
  }, {
    heading: undefined,
    content: "Invitee reached maximum contacts limit."
  }, {
    heading: undefined,
    content: "Show UI error or contact support to increase limit."
  }, {
    heading: undefined,
    content: "`1100`"
  }, {
    heading: undefined,
    content: "`PRESENCE_PARAM_LENGTH_EXCEED`"
  }, {
    heading: undefined,
    content: "Presence parameter length exceeds limit."
  }, {
    heading: undefined,
    content: "Presence details cannot exceed 64 bytes."
  }, {
    heading: undefined,
    content: "`1101`"
  }, {
    heading: undefined,
    content: "`PRESENCE_CANNOT_SUBSCRIBE_YOURSELF`"
  }, {
    heading: undefined,
    content: "User cannot subscribe to own presence status."
  }, {
    heading: undefined,
    content: "Check if subscribed user ID is own ID."
  }, {
    heading: undefined,
    content: "`1110`"
  }, {
    heading: undefined,
    content: "`TRANSLATE_PARAM_INVALID`"
  }, {
    heading: undefined,
    content: "Translation parameter error."
  }, {
    heading: undefined,
    content: "Analyze with debug logs."
  }, {
    heading: undefined,
    content: "`1111`"
  }, {
    heading: undefined,
    content: "`TRANSLATE_SERVICE_NOT_ENABLE`"
  }, {
    heading: undefined,
    content: "Translation service not enabled."
  }, {
    heading: undefined,
    content: "Enable translation service in console."
  }, {
    heading: undefined,
    content: "`1112`"
  }, {
    heading: undefined,
    content: "`TRANSLATE_USAGE_LIMIT`"
  }, {
    heading: undefined,
    content: "Translation usage reached limit."
  }, {
    heading: undefined,
    content: "Contact support to renew translation usage."
  }, {
    heading: undefined,
    content: "`1113`"
  }, {
    heading: undefined,
    content: "`TRANSLATE_MESSAGE_FAIL`"
  }, {
    heading: undefined,
    content: "Failed to translate message."
  }, {
    heading: undefined,
    content: "Analyze with debug logs."
  }, {
    heading: undefined,
    content: "`1200`"
  }, {
    heading: undefined,
    content: "`MODERATION_FAILED`"
  }, {
    heading: undefined,
    content: "Third-party content moderation result is `Rejected`."
  }, {
    heading: undefined,
    content: "Check content audit configuration and logs in console."
  }, {
    heading: undefined,
    content: "`1299`"
  }, {
    heading: undefined,
    content: "`THIRD_SERVER_FAILED`"
  }, {
    heading: undefined,
    content: "Non-third-party moderation service result is `Rejected`."
  }, {
    heading: undefined,
    content: "Check content audit configuration and logs in console."
  }, {
    heading: undefined,
    content: "`1300`"
  }, {
    heading: undefined,
    content: "`REACTION_REACH_LIMIT`"
  }, {
    heading: undefined,
    content: "Message Reactions reached maximum allowed."
  }, {
    heading: undefined,
    content: "Show UI prompt or contact support to increase limit."
  }, {
    heading: undefined,
    content: "`1301`"
  }, {
    heading: undefined,
    content: "`REACTION_HAS_BEEN_OPERATED`"
  }, {
    heading: undefined,
    content: "User already added this Reaction."
  }, {
    heading: undefined,
    content: "Handle as successful addition."
  }, {
    heading: undefined,
    content: "`1302`"
  }, {
    heading: undefined,
    content: "`REACTION_OPERATION_IS_ILLEGAL`"
  }, {
    heading: undefined,
    content: "User lacks permission for Reaction operation."
  }, {
    heading: undefined,
    content: "Verify parameters with log analysis."
  }, {
    heading: undefined,
    content: "`1400`"
  }, {
    heading: undefined,
    content: "`THREAD_NOT_EXIST`"
  }, {
    heading: undefined,
    content: "Thread doesn't exist."
  }, {
    heading: undefined,
    content: "Verify subzone ID is correct."
  }, {
    heading: undefined,
    content: "`1401`"
  }, {
    heading: undefined,
    content: "`THREAD_ALREADY_EXIST`"
  }, {
    heading: undefined,
    content: "Thread already exists."
  }, {
    heading: undefined,
    content: "Check if subzone already created under incoming message."
  }, {
    heading: undefined,
    content: "`1500`"
  }, {
    heading: undefined,
    content: "`PUSH_NOT_SUPPORT`"
  }, {
    heading: undefined,
    content: "Third-party push service not supported."
  }, {
    heading: undefined,
    content: "Check documentation for missing device vendors or contact support."
  }, {
    heading: undefined,
    content: "`1501`"
  }, {
    heading: undefined,
    content: "`PUSH_BIND_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to bind device with push token."
  }, {
    heading: undefined,
    content: "After `PushHelper#setPushListener` is registered, check network and retry binding with `PushManager#bindDeviceToken`."
  }, {
    heading: undefined,
    content: "`1502`"
  }, {
    heading: undefined,
    content: "`PUSH_UNBIND_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to unbind device from push token."
  }, {
    heading: undefined,
    content: "After `PushHelper#setPushListener` is registered, retry `ChatClient#logout` or call with parameter `false` (without unbinding)."
  }, {
    heading: undefined,
    content: "This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs."
  }, {
    heading: undefined,
    content: "Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact support\\@agora.io for assistance."
  }, {
    heading: undefined,
    content: "During the runtime of the Chat SDK, if a method call succeeds, the SDK returns `nil`. If it fails, the SDK returns one of the following error codes and error messages:"
  }, {
    heading: undefined,
    content: "Error code"
  }, {
    heading: undefined,
    content: "Error message"
  }, {
    heading: undefined,
    content: "Possible reason"
  }, {
    heading: undefined,
    content: "Fix"
  }, {
    heading: undefined,
    content: "`0`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorNoError`"
  }, {
    heading: undefined,
    content: "The operation succeeds."
  }, {
    heading: undefined,
    content: "No action required."
  }, {
    heading: undefined,
    content: "`1`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorGeneral`"
  }, {
    heading: undefined,
    content: "Default error related to the SDK or API requests. Occurs when SDK isn't properly initialized or a request fails without specific reason."
  }, {
    heading: undefined,
    content: "Analyze logs and called APIs."
  }, {
    heading: undefined,
    content: "`2`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorNetworkUnavailable`"
  }, {
    heading: undefined,
    content: "SDK disconnected from server due to network interruption."
  }, {
    heading: undefined,
    content: "Retry operation after network restoration."
  }, {
    heading: undefined,
    content: "`3`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorDatabaseOperationFailed`"
  }, {
    heading: undefined,
    content: "Database operation fails."
  }, {
    heading: undefined,
    content: "Analyze called API with logs. Error occurs when updating non-existent messages with `EMConversation#updateMessage` or when database isn't open during operations."
  }, {
    heading: undefined,
    content: "`4`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorExceedServiceLimit`"
  }, {
    heading: undefined,
    content: "Usage exceeds service limit, such as registered users or contacts exceeding current pricing plan limits."
  }, {
    heading: undefined,
    content: "Check API parameters. Control `limit` parameter values. For rate limiting, retry after delay."
  }, {
    heading: undefined,
    content: "`8`"
  }, {
    heading: undefined,
    content: "`AgoraChatAppActiveNumbersReachLimitation`"
  }, {
    heading: undefined,
    content: "App reached maximum daily active users (DAU) or monthly active users (MAU)."
  }, {
    heading: undefined,
    content: "Upgrade Chat service in the console."
  }, {
    heading: undefined,
    content: "`100`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorInvalidAppkey`"
  }, {
    heading: undefined,
    content: "App Key is invalid."
  }, {
    heading: undefined,
    content: "Initialize with correct App Key."
  }, {
    heading: undefined,
    content: "`101`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorInvalidUsername`"
  }, {
    heading: undefined,
    content: "User ID is invalid, such as empty string when adding a contact."
  }, {
    heading: undefined,
    content: "Ensure user ID parameter is not empty."
  }, {
    heading: undefined,
    content: "`102`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorInvalidPassword`"
  }, {
    heading: undefined,
    content: "Login password is empty or invalid."
  }, {
    heading: undefined,
    content: "Verify password parameter is correct."
  }, {
    heading: undefined,
    content: "`104`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUsernameTooLong`"
  }, {
    heading: undefined,
    content: "User ID is too long."
  }, {
    heading: undefined,
    content: "Log in with valid user ID. Verify token parameters are correct."
  }, {
    heading: undefined,
    content: "`105`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUsernameTooLong`"
  }, {
    heading: undefined,
    content: "User ID exceeds 64 bytes limit."
  }, {
    heading: undefined,
    content: "Check user ID length."
  }, {
    heading: undefined,
    content: "`108`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorTokenExpire`"
  }, {
    heading: undefined,
    content: "Token has expired."
  }, {
    heading: undefined,
    content: "When callback is received, regenerate token and call `login` to log in again."
  }, {
    heading: undefined,
    content: "`109`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorTokeWillExpire`"
  }, {
    heading: undefined,
    content: "Token passed half of its validity period."
  }, {
    heading: undefined,
    content: "When callback is received, regenerate token and call `AgoraChatClient#renewToken` to update."
  }, {
    heading: undefined,
    content: "`110`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorInvalidParam`"
  }, {
    heading: undefined,
    content: "Invalid parameter."
  }, {
    heading: undefined,
    content: "Verify API parameters are valid."
  }, {
    heading: undefined,
    content: "`200`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserAlreadyLoginSame`"
  }, {
    heading: undefined,
    content: "User already logged in."
  }, {
    heading: undefined,
    content: "Check if SDK has automatic login enabled or if login method was already called."
  }, {
    heading: undefined,
    content: "`201`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserNotLogin`"
  }, {
    heading: undefined,
    content: "User not logged in. Session invalid or expired when attempting operations."
  }, {
    heading: undefined,
    content: "Ensure Chat login completes before calling API."
  }, {
    heading: undefined,
    content: "`202`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserAuthenticationFailed`"
  }, {
    heading: undefined,
    content: "User authentication fails due to invalid or expired token."
  }, {
    heading: undefined,
    content: "If logged out, log in again. Otherwise, regenerate token and call `AgoraChatClient#renewToken`."
  }, {
    heading: undefined,
    content: "`203`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserAlreadyExist`"
  }, {
    heading: undefined,
    content: "User ID specified during registration already exists."
  }, {
    heading: undefined,
    content: "Register with a different user ID or consider registration successful."
  }, {
    heading: undefined,
    content: "`204`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserNotFound`"
  }, {
    heading: undefined,
    content: "User does not exist."
  }, {
    heading: undefined,
    content: "Verify `userId` parameter is correct."
  }, {
    heading: undefined,
    content: "`205`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserIllegalArgument`"
  }, {
    heading: undefined,
    content: "Incorrect user parameter. User ID invalid or empty during registration or attribute updates."
  }, {
    heading: undefined,
    content: "Verify API parameters are correct."
  }, {
    heading: undefined,
    content: "`206`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserLoginOnAnotherDevice`"
  }, {
    heading: undefined,
    content: "User logged in on another device. Forces logout on current device if multi-device service isn't enabled."
  }, {
    heading: undefined,
    content: "When `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` is triggered, log in again."
  }, {
    heading: undefined,
    content: "`207`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserRemoved`"
  }, {
    heading: undefined,
    content: "User account deleted in the console."
  }, {
    heading: undefined,
    content: "When `AgoraChatClientDelegate#userAccountDidRemoveFromServer` is triggered, return to login page. Account no longer available."
  }, {
    heading: undefined,
    content: "`209`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUpdateApnsConfigsFailed`"
  }, {
    heading: undefined,
    content: "Failed to update push configurations."
  }, {
    heading: undefined,
    content: "Check error-reporting API, wait, then retry."
  }, {
    heading: undefined,
    content: "`210`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserPermissionDenied`"
  }, {
    heading: undefined,
    content: "User lacks permission for operation. User on block list attempts to send messageUser tries to modify another user's messageUser tries to modify custom group member attribute set by anotherUser attempts to destroy message thread without proper permissions"
  }, {
    heading: undefined,
    content: "Check if user has operational privileges."
  }, {
    heading: undefined,
    content: "`211`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserBindDeviceTokenFailed`"
  }, {
    heading: undefined,
    content: "Failed to bind push token to device."
  }, {
    heading: undefined,
    content: "Verify token for device push binding isn't empty."
  }, {
    heading: undefined,
    content: "`213`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserBindAnotherDevice`"
  }, {
    heading: undefined,
    content: "User logged in to another device in single-device login configuration."
  }, {
    heading: undefined,
    content: "Configure for multiple device login or use `AgoraChatClient#kickDevice` before logging in."
  }, {
    heading: undefined,
    content: "`214`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserLoginTooManyDevices`"
  }, {
    heading: undefined,
    content: "User reached maximum number of login devices."
  }, {
    heading: undefined,
    content: "Increase allowed simultaneous devices or use `AgoraChatClient#kickDevice` before logging in."
  }, {
    heading: undefined,
    content: "`215`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserMuted`"
  }, {
    heading: undefined,
    content: "User is muted in group or chat room."
  }, {
    heading: undefined,
    content: "Restrict message sending in UI for users who are banned."
  }, {
    heading: undefined,
    content: "`216`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserKickedByChangePassword`"
  }, {
    heading: undefined,
    content: "User changed login password, ending current session."
  }, {
    heading: undefined,
    content: "When `AgoraChatClientDelegate#userAccountDidForcedToLogout` is received, call `AgoraChatClient#logout` and return to login page."
  }, {
    heading: undefined,
    content: "`217`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserKickedByOtherDevice`"
  }, {
    heading: undefined,
    content: "User kicked off device via console or API call from another device."
  }, {
    heading: undefined,
    content: "When `AgoraChatClientDelegate#userAccountDidForcedToLogout` is received, call `AgoraChatClient#logout` and return to login page."
  }, {
    heading: undefined,
    content: "`218`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserAlreadyLoginAnother`"
  }, {
    heading: undefined,
    content: "Another user already logged in on device."
  }, {
    heading: undefined,
    content: "Call `AgoraChatClient#logout` to log out current account before logging in with different account."
  }, {
    heading: undefined,
    content: "`219`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserMutedByAdmin`"
  }, {
    heading: undefined,
    content: "User cannot send message when all members are muted."
  }, {
    heading: undefined,
    content: "Restrict message sending in UI when full ban is active."
  }, {
    heading: undefined,
    content: "`220`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserDeviceChanged`"
  }, {
    heading: undefined,
    content: "Login attempt on device that isn't the last used device in single-device configuration."
  }, {
    heading: undefined,
    content: "When `AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice` is received, call `AgoraChatClient#logout` and return to login page."
  }, {
    heading: undefined,
    content: "`221`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserNotOnRoster`"
  }, {
    heading: undefined,
    content: "User cannot send message to non-contact when contacts-only messaging is enabled."
  }, {
    heading: undefined,
    content: "Call `AgoraChatContactManager#addContact` first. Send messages after friend request is accepted."
  }, {
    heading: undefined,
    content: "`300`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorServerNotReachable`"
  }, {
    heading: undefined,
    content: "Server unreachable due to network issues."
  }, {
    heading: undefined,
    content: "For login errors, try switching networks or contact support for TLS encryption in specific regions. For other operations, switch networks or retry after delay."
  }, {
    heading: undefined,
    content: "`301`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorServerTimeout`"
  }, {
    heading: undefined,
    content: "Request timeout when server doesn't respond within specified period."
  }, {
    heading: undefined,
    content: "Retry API after switching networks or waiting."
  }, {
    heading: undefined,
    content: "`302`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorServerBusy`"
  }, {
    heading: undefined,
    content: "Server currently busy."
  }, {
    heading: undefined,
    content: "Check for repeated API calls. May occur when calling again before previous result is returned."
  }, {
    heading: undefined,
    content: "`303`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorServerUnknownError`"
  }, {
    heading: undefined,
    content: "Common server request error."
  }, {
    heading: undefined,
    content: "Provide logs and called APIs for troubleshooting."
  }, {
    heading: undefined,
    content: "`304`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorServerGetDNSConfigFailed`"
  }, {
    heading: undefined,
    content: "SDK fails to get server configuration."
  }, {
    heading: undefined,
    content: "If `AgoraChatOptions#enableDnsConfig` is `No`, check server settings. Otherwise, likely network issue during `dnsConfig` request."
  }, {
    heading: undefined,
    content: "`305`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorServerServingForbidden`"
  }, {
    heading: undefined,
    content: "App is banned."
  }, {
    heading: undefined,
    content: "Enable Chat feature in console or contact support."
  }, {
    heading: undefined,
    content: "`400`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorFileNotFound`"
  }, {
    heading: undefined,
    content: "File not found."
  }, {
    heading: undefined,
    content: "For log files, retry. For attachments, file no longer exists and cannot be downloaded."
  }, {
    heading: undefined,
    content: "`401`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorFileInvalid`"
  }, {
    heading: undefined,
    content: "File invalid."
  }, {
    heading: undefined,
    content: "Select different file and retry upload."
  }, {
    heading: undefined,
    content: "`402`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorFileUploadFailed`"
  }, {
    heading: undefined,
    content: "Failed to upload file."
  }, {
    heading: undefined,
    content: "Analyze with API calls and logs."
  }, {
    heading: undefined,
    content: "`403`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorFileDownloadFailed`"
  }, {
    heading: undefined,
    content: "Failed to download file."
  }, {
    heading: undefined,
    content: "Check network or message expiration in logs."
  }, {
    heading: undefined,
    content: "`404`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorFileDeleteFailed`"
  }, {
    heading: undefined,
    content: "Failed to delete existing log file."
  }, {
    heading: undefined,
    content: "Check permissions for app log files or chat logs."
  }, {
    heading: undefined,
    content: "`405`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorFileTooLarge`"
  }, {
    heading: undefined,
    content: "File exceeds size limit."
  }, {
    heading: undefined,
    content: "Select file under 10 MB or contact support to increase limit."
  }, {
    heading: undefined,
    content: "`406`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorFileContentImproper`"
  }, {
    heading: undefined,
    content: "File content inappropriate."
  }, {
    heading: undefined,
    content: "Select appropriate file and retry."
  }, {
    heading: undefined,
    content: "`407`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorFileExpired`"
  }, {
    heading: undefined,
    content: "File expired. Attachments stored for 7 days by default."
  }, {
    heading: undefined,
    content: "Contact support to increase storage time."
  }, {
    heading: undefined,
    content: "`500`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorMessageInvalid`"
  }, {
    heading: undefined,
    content: "Message invalid. Message object or ID empty, or sender ID inconsistent with login session."
  }, {
    heading: undefined,
    content: "Verify message construction, ID, sender, and body settings meet requirements."
  }, {
    heading: undefined,
    content: "`504`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorMessageRecallTimeLimit`"
  }, {
    heading: undefined,
    content: "Message recall timeout."
  }, {
    heading: undefined,
    content: "Show UI error or contact support to extend the retractability time."
  }, {
    heading: undefined,
    content: "`505`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorServiceNotEnable`"
  }, {
    heading: undefined,
    content: "Feature not enabled."
  }, {
    heading: undefined,
    content: "Enable required features in console based on API and log analysis."
  }, {
    heading: undefined,
    content: "`506`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorMessageExpired`"
  }, {
    heading: undefined,
    content: "Group message read receipt period expired. Default validity is 3 days."
  }, {
    heading: undefined,
    content: "Show UI error or contact support to extend the validity time."
  }, {
    heading: undefined,
    content: "`507`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorMessageIllegalWhiteList`"
  }, {
    heading: undefined,
    content: "User not on allow list when all members are muted."
  }, {
    heading: undefined,
    content: "Show UI error or check if group-wide ban is enabled."
  }, {
    heading: undefined,
    content: "`508`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorMessageExternalLogicBlocked`"
  }, {
    heading: undefined,
    content: "Message blocked by app server filtering rule during pre-sending callback."
  }, {
    heading: undefined,
    content: "Show UI prompt or check the pre-sending callback logs."
  }, {
    heading: undefined,
    content: "`510`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorMessageSizeLimit`"
  }, {
    heading: undefined,
    content: "Message body exceeds limit."
  }, {
    heading: undefined,
    content: "Show UI prompt or reduce the message length (max 5 KB by default)."
  }, {
    heading: undefined,
    content: "`511`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorEditFailed`"
  }, {
    heading: undefined,
    content: "Failed to modify message."
  }, {
    heading: undefined,
    content: "Analyze with logs."
  }, {
    heading: undefined,
    content: "`600`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorGroupInvalidId`"
  }, {
    heading: undefined,
    content: "Invalid group ID."
  }, {
    heading: undefined,
    content: "Verify group ID parameter isn't null or disbanded."
  }, {
    heading: undefined,
    content: "`601`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorGroupAlreadyJoined`"
  }, {
    heading: undefined,
    content: "User already in chat group."
  }, {
    heading: undefined,
    content: "Handle as successful join."
  }, {
    heading: undefined,
    content: "`602`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorGroupNotJoined`"
  }, {
    heading: undefined,
    content: "User not in chat group."
  }, {
    heading: undefined,
    content: "Verify group ID is for joined group that hasn't been disbanded."
  }, {
    heading: undefined,
    content: "`603`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorGroupPermissionDenied`"
  }, {
    heading: undefined,
    content: "User lacks permission for group operation."
  }, {
    heading: undefined,
    content: "Check API call permissions."
  }, {
    heading: undefined,
    content: "`604`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorGroupMembersFull`"
  }, {
    heading: undefined,
    content: "Group member count reached limit."
  }, {
    heading: undefined,
    content: "Show UI prompt or check if the maximum member count exceeds limit (default 200)."
  }, {
    heading: undefined,
    content: "`605`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorGroupSharedFileInvalidId`"
  }, {
    heading: undefined,
    content: "Group shared file ID is empty."
  }, {
    heading: undefined,
    content: "Verify `sharedFileId` parameter isn't null."
  }, {
    heading: undefined,
    content: "`606`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorGroupNotExist`"
  }, {
    heading: undefined,
    content: "Chat group doesn't exist."
  }, {
    heading: undefined,
    content: "Verify group ID is correct or not from disbanded group."
  }, {
    heading: undefined,
    content: "`607`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorGroupDisabled`"
  }, {
    heading: undefined,
    content: "Chat group is disabled."
  }, {
    heading: undefined,
    content: "Show UI prompt to request unblock from administrator."
  }, {
    heading: undefined,
    content: "`608`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorGroupNameViolation`"
  }, {
    heading: undefined,
    content: "Chat group name is invalid."
  }, {
    heading: undefined,
    content: "Check if group name contains sensitive information."
  }, {
    heading: undefined,
    content: "`609`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorGroupMemberAttributesReachLimit`"
  }, {
    heading: undefined,
    content: "Custom attributes size reached limit."
  }, {
    heading: undefined,
    content: "Total length for single group member cannot exceed 4 KB."
  }, {
    heading: undefined,
    content: "`610`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorGroupMemberAttributesUpdateFailed`"
  }, {
    heading: undefined,
    content: "Failed to set custom attributes."
  }, {
    heading: undefined,
    content: "Analyze with API calls and logs."
  }, {
    heading: undefined,
    content: "`611`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorGroupMemberAttributesKeyReachLimit`"
  }, {
    heading: undefined,
    content: "Custom attribute key exceeds 16 bytes."
  }, {
    heading: undefined,
    content: "Check if attribute key exceeds limit."
  }, {
    heading: undefined,
    content: "`612`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorGroupMemberAttributesValueReachLimit`"
  }, {
    heading: undefined,
    content: "Custom attribute value exceeds 512 bytes."
  }, {
    heading: undefined,
    content: "Check if attribute value exceeds limit."
  }, {
    heading: undefined,
    content: "`700`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorChatroomInvalidId`"
  }, {
    heading: undefined,
    content: "Invalid chat room ID."
  }, {
    heading: undefined,
    content: "Check if chat room ID is empty."
  }, {
    heading: undefined,
    content: "`701`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorChatroomAlreadyJoined`"
  }, {
    heading: undefined,
    content: "User already in chat room."
  }, {
    heading: undefined,
    content: "Handle as successful join."
  }, {
    heading: undefined,
    content: "`702`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorChatroomNotJoined`"
  }, {
    heading: undefined,
    content: "User not in chat room."
  }, {
    heading: undefined,
    content: "Verify chat room ID is correct, not disbanded, or previously joined."
  }, {
    heading: undefined,
    content: "`703`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorChatroomPermissionDenied`"
  }, {
    heading: undefined,
    content: "User lacks permission for chat room operation."
  }, {
    heading: undefined,
    content: "Check API call permissions."
  }, {
    heading: undefined,
    content: "`704`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorChatroomMembersFull`"
  }, {
    heading: undefined,
    content: "Chat room member count reached limit."
  }, {
    heading: undefined,
    content: "Check maximum member count setting."
  }, {
    heading: undefined,
    content: "`705`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorChatroomNotExist`"
  }, {
    heading: undefined,
    content: "Chat room doesn't exist."
  }, {
    heading: undefined,
    content: "Verify chat room ID is correct, not disbanded, or previously joined."
  }, {
    heading: undefined,
    content: "`706`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorChatroomOwnerNotAllowLeave`"
  }, {
    heading: undefined,
    content: "Chat room owner not allowed to leave."
  }, {
    heading: undefined,
    content: "Check `AgoraChatOptions#allowChatroomOwnerLeave` setting."
  }, {
    heading: undefined,
    content: "`707`"
  }, {
    heading: undefined,
    content: "`EMErrorChatroomUserInBlockList`"
  }, {
    heading: undefined,
    content: "User is in chat room blacklist."
  }, {
    heading: undefined,
    content: "Check console for chat room blacklist status."
  }, {
    heading: undefined,
    content: "`900`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserCountExceed`"
  }, {
    heading: undefined,
    content: "User attribute retrieval count exceeds 100."
  }, {
    heading: undefined,
    content: "Get attributes in batches of up to 100 users."
  }, {
    heading: undefined,
    content: "`901`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorUserInfoDataLengthExceed`"
  }, {
    heading: undefined,
    content: "User attributes too long. Maximum 2 KB per user or 10 GB per app."
  }, {
    heading: undefined,
    content: "Check attribute length limits."
  }, {
    heading: undefined,
    content: "`1000`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorContactAddFailed`"
  }, {
    heading: undefined,
    content: "Failed to add contact."
  }, {
    heading: undefined,
    content: "Analyze with API calls and error description."
  }, {
    heading: undefined,
    content: "`1001`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorContactReachLimit`"
  }, {
    heading: undefined,
    content: "Inviter reached maximum contacts limit."
  }, {
    heading: undefined,
    content: "Show UI error or contact support to increase limit."
  }, {
    heading: undefined,
    content: "`1002`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorContactReachLimitPeer`"
  }, {
    heading: undefined,
    content: "Invitee reached maximum contacts limit."
  }, {
    heading: undefined,
    content: "Show UI error or contact support to increase limit."
  }, {
    heading: undefined,
    content: "`1100`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorPresenceParamExceed`"
  }, {
    heading: undefined,
    content: "Presence parameter length exceeds limit."
  }, {
    heading: undefined,
    content: "Online status details cannot exceed 64 bytes."
  }, {
    heading: undefined,
    content: "`1101`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorPresenceCannotSubscribeSelf`"
  }, {
    heading: undefined,
    content: "User cannot subscribe to own presence status."
  }, {
    heading: undefined,
    content: "Check if subscribed user ID is own ID."
  }, {
    heading: undefined,
    content: "`1110`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorTranslateParamError`"
  }, {
    heading: undefined,
    content: "Translation parameter error."
  }, {
    heading: undefined,
    content: "Analyze with debug logs."
  }, {
    heading: undefined,
    content: "`1111`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorTranslateServiceNotEnabled`"
  }, {
    heading: undefined,
    content: "Translation service not enabled."
  }, {
    heading: undefined,
    content: "Enable translation service in console."
  }, {
    heading: undefined,
    content: "`1112`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorTranslateUsageLimit`"
  }, {
    heading: undefined,
    content: "Translation usage reached limit."
  }, {
    heading: undefined,
    content: "Contact support to renew translation usage."
  }, {
    heading: undefined,
    content: "`1113`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorTranslateServiceFail`"
  }, {
    heading: undefined,
    content: "Failed to translate message."
  }, {
    heading: undefined,
    content: "Analyze with debug logs."
  }, {
    heading: undefined,
    content: "`1200`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorModerationFailed`"
  }, {
    heading: undefined,
    content: "Third-party content moderation result is `Rejected`."
  }, {
    heading: undefined,
    content: "Check content audit configuration and logs in console."
  }, {
    heading: undefined,
    content: "`1299`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorThirdServiceFailed`"
  }, {
    heading: undefined,
    content: "Non-third-party moderation service result is `Rejected`."
  }, {
    heading: undefined,
    content: "Check content audit configuration and logs in console."
  }, {
    heading: undefined,
    content: "`1300`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorReactionReachLimit`"
  }, {
    heading: undefined,
    content: "Message Reactions reached maximum allowed."
  }, {
    heading: undefined,
    content: "Show UI prompt or contact support to increase limit."
  }, {
    heading: undefined,
    content: "`1301`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorReactionHasBeenOperated`"
  }, {
    heading: undefined,
    content: "User already added this Reaction."
  }, {
    heading: undefined,
    content: "Handle as successful addition."
  }, {
    heading: undefined,
    content: "`1302`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorReactionOperationIsIllegal`"
  }, {
    heading: undefined,
    content: "User lacks permission for Reaction operation."
  }, {
    heading: undefined,
    content: "Verify parameters with log analysis."
  }, {
    heading: undefined,
    content: "`1400`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorThreadNotExist`"
  }, {
    heading: undefined,
    content: "Thread doesn't exist."
  }, {
    heading: undefined,
    content: "Verify subzone ID is correct."
  }, {
    heading: undefined,
    content: "`1401`"
  }, {
    heading: undefined,
    content: "`AgoraChatErrorThreadAlreadyExist`"
  }, {
    heading: undefined,
    content: "Thread already exists."
  }, {
    heading: undefined,
    content: "Check if subzone is already created under incoming message."
  }, {
    heading: undefined,
    content: "This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs."
  }, {
    heading: undefined,
    content: "Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact support\\@agora.io for assistance."
  }, {
    heading: undefined,
    content: "You may receive an error code and error message in one of the following ways:"
  }, {
    heading: undefined,
    content: "As the return value when a method call fails."
  }, {
    heading: undefined,
    content: "As the error code reported through the `onError` callback. Register the callback using the `addEventListener` method."
  }, {
    heading: undefined,
    content: "Error code"
  }, {
    heading: undefined,
    content: "Error message"
  }, {
    heading: undefined,
    content: "Possible reason"
  }, {
    heading: undefined,
    content: "Fix"
  }, {
    heading: undefined,
    content: "`0`"
  }, {
    heading: undefined,
    content: "`REQUEST_SUCCESS`"
  }, {
    heading: undefined,
    content: "The operation succeeds."
  }, {
    heading: undefined,
    content: "No action required."
  }, {
    heading: undefined,
    content: "`-1`"
  }, {
    heading: undefined,
    content: "`REQUEST_TIMEOUT`"
  }, {
    heading: undefined,
    content: "Request times out."
  }, {
    heading: undefined,
    content: "Retry or prompt for request timeout."
  }, {
    heading: undefined,
    content: "`-2`"
  }, {
    heading: undefined,
    content: "`REQUEST_UNKNOWN`"
  }, {
    heading: undefined,
    content: "Unidentified error occurs."
  }, {
    heading: undefined,
    content: "Prompt that request failed."
  }, {
    heading: undefined,
    content: "`-3`"
  }, {
    heading: undefined,
    content: "`REQUEST_PARAMETER_ERROR`"
  }, {
    heading: undefined,
    content: "Request parameters are invalid."
  }, {
    heading: undefined,
    content: "Verify parameters are correct."
  }, {
    heading: undefined,
    content: "`-4`"
  }, {
    heading: undefined,
    content: "`REQUEST_ABORT`"
  }, {
    heading: undefined,
    content: "Request is aborted."
  }, {
    heading: undefined,
    content: "Cancel the request."
  }, {
    heading: undefined,
    content: "`1`"
  }, {
    heading: undefined,
    content: "`WEBIM_CONNCTION_OPEN_ERROR`"
  }, {
    heading: undefined,
    content: "Request to retrieve token fails."
  }, {
    heading: undefined,
    content: "Check for parameter error, already logged in status, or import request failure based on error message."
  }, {
    heading: undefined,
    content: "`2`"
  }, {
    heading: undefined,
    content: "`WEBIM_CONNCTION_AUTH_ERROR`"
  }, {
    heading: undefined,
    content: "App Key is invalid. SDK fails to verify App Key."
  }, {
    heading: undefined,
    content: "Verify App Key is initialized correctly, user is logged in, and login token is valid."
  }, {
    heading: undefined,
    content: "`16`"
  }, {
    heading: undefined,
    content: "`WEBIM_CONNCTION_DISCONNECTED`"
  }, {
    heading: undefined,
    content: "WebSocket disconnected due to network issues."
  }, {
    heading: undefined,
    content: "Prompt that connection is disconnected."
  }, {
    heading: undefined,
    content: "`17`"
  }, {
    heading: undefined,
    content: "`WEBIM_CONNCTION_AJAX_ERROR`"
  }, {
    heading: undefined,
    content: "Common error for server requests."
  }, {
    heading: undefined,
    content: "Determine cause of current operation failure from error message."
  }, {
    heading: undefined,
    content: "`27`"
  }, {
    heading: undefined,
    content: "`WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR`"
  }, {
    heading: undefined,
    content: "App Key incorrect or not set during login."
  }, {
    heading: undefined,
    content: "Set correct App Key."
  }, {
    heading: undefined,
    content: "`28`"
  }, {
    heading: undefined,
    content: "`WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR`"
  }, {
    heading: undefined,
    content: "User fails to pass user token for login."
  }, {
    heading: undefined,
    content: "Ensure successful login."
  }, {
    heading: undefined,
    content: "`31`"
  }, {
    heading: undefined,
    content: "`WEBIM_CONNCTION_CALLBACK_INNER_ERROR`"
  }, {
    heading: undefined,
    content: "Internal error in message sending callback."
  }, {
    heading: undefined,
    content: "Check for errors in callback functions, such as in `onTextMessage` message processing."
  }, {
    heading: undefined,
    content: "`39`"
  }, {
    heading: undefined,
    content: "`WEBIM_CONNECTION_CLOSED`"
  }, {
    heading: undefined,
    content: "User logged out or not logged in attempts to send message."
  }, {
    heading: undefined,
    content: "Log in before sending messages."
  }, {
    heading: undefined,
    content: "`40`"
  }, {
    heading: undefined,
    content: "`WEBIM_CONNECTION_ERROR`"
  }, {
    heading: undefined,
    content: "User authentication fails."
  }, {
    heading: undefined,
    content: "Prompt that connection is disconnected."
  }, {
    heading: undefined,
    content: "`50`"
  }, {
    heading: undefined,
    content: "`MAX_LIMIT`"
  }, {
    heading: undefined,
    content: "Usage exceeds service limit. Reactions, DAU, or MAU exceed upper limits."
  }, {
    heading: undefined,
    content: "Identify which service reached upper limit and limit accordingly."
  }, {
    heading: undefined,
    content: "`51`"
  }, {
    heading: undefined,
    content: "`MESSAGE_NOT_FOUND`"
  }, {
    heading: undefined,
    content: "Message not found, such as when reporting."
  }, {
    heading: undefined,
    content: "Prompt that original message wasn't found."
  }, {
    heading: undefined,
    content: "`52`"
  }, {
    heading: undefined,
    content: "`NO_PERMISSION`"
  }, {
    heading: undefined,
    content: "User lacks permission for operation."
  }, {
    heading: undefined,
    content: "Indicate user doesn't have permission for operation."
  }, {
    heading: undefined,
    content: "`53`"
  }, {
    heading: undefined,
    content: "`OPERATION_UNSUPPORTED`"
  }, {
    heading: undefined,
    content: "Current operation not supported."
  }, {
    heading: undefined,
    content: "Prompt that operation isn't supported."
  }, {
    heading: undefined,
    content: "`55`"
  }, {
    heading: undefined,
    content: "`LOCAL_DB_OPERATION_FAILED`"
  }, {
    heading: undefined,
    content: "Database operation fails."
  }, {
    heading: undefined,
    content: "Check database connection and permissions."
  }, {
    heading: undefined,
    content: "`101`"
  }, {
    heading: undefined,
    content: "`WEBIM_UPLOADFILE_ERROR`"
  }, {
    heading: undefined,
    content: "Failed to upload file. File may exceed size limit."
  }, {
    heading: undefined,
    content: 'Show "Send Failed" when attachment message upload fails.'
  }, {
    heading: undefined,
    content: "`102`"
  }, {
    heading: undefined,
    content: "`WEBIM_UPLOADFILE_NO_LOGIN`"
  }, {
    heading: undefined,
    content: "User token not included in file upload request."
  }, {
    heading: undefined,
    content: "Ensure user is logged in before uploading."
  }, {
    heading: undefined,
    content: "`200`"
  }, {
    heading: undefined,
    content: "`WEBIM_DOWNLOADFILE_ERROR`"
  }, {
    heading: undefined,
    content: "Failed to download file due to timeout or network failure."
  }, {
    heading: undefined,
    content: "Prompt to retry."
  }, {
    heading: undefined,
    content: "`204`"
  }, {
    heading: undefined,
    content: "`USER_NOT_FOUND`"
  }, {
    heading: undefined,
    content: "User not found, such as when inviting to join group."
  }, {
    heading: undefined,
    content: "Verify User ID parameter is correct."
  }, {
    heading: undefined,
    content: "`205`"
  }, {
    heading: undefined,
    content: "`MESSAGE_PARAMETER_ERROR`"
  }, {
    heading: undefined,
    content: "Message parameter error, such as missing message ID during recall."
  }, {
    heading: undefined,
    content: "Ensure message contains message ID (`id`) and recipient's user ID (`to`)."
  }, {
    heading: undefined,
    content: "`206`"
  }, {
    heading: undefined,
    content: "`WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE`"
  }, {
    heading: undefined,
    content: "User logged in on another device. Forces logout if multi-device service isn't enabled."
  }, {
    heading: undefined,
    content: "Enable multi-device function. See Multiple Device Login documentation."
  }, {
    heading: undefined,
    content: "`207`"
  }, {
    heading: undefined,
    content: "`WEBIM_CONNCTION_USER_REMOVED`"
  }, {
    heading: undefined,
    content: "User account deleted in console."
  }, {
    heading: undefined,
    content: "Inform user that account has been canceled."
  }, {
    heading: undefined,
    content: "`208`"
  }, {
    heading: undefined,
    content: "`WEBIM_USER_ALREADY_LOGIN`"
  }, {
    heading: undefined,
    content: "User already logged in and attempting to log in again."
  }, {
    heading: undefined,
    content: "Notify that repeated logins aren't possible."
  }, {
    heading: undefined,
    content: "`216`"
  }, {
    heading: undefined,
    content: "`WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD`"
  }, {
    heading: undefined,
    content: "User changed login password, ending current session."
  }, {
    heading: undefined,
    content: "Prompt that password has changed and user must log in again."
  }, {
    heading: undefined,
    content: "`217`"
  }, {
    heading: undefined,
    content: "`WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE`"
  }, {
    heading: undefined,
    content: "User kicked off device via console or API call from another device."
  }, {
    heading: undefined,
    content: "Notify user of being kicked offline."
  }, {
    heading: undefined,
    content: "`219`"
  }, {
    heading: undefined,
    content: "`USER_MUTED_BY_ADMIN`"
  }, {
    heading: undefined,
    content: "User muted globally and cannot send messages."
  }, {
    heading: undefined,
    content: "Inform user they have been banned."
  }, {
    heading: undefined,
    content: "`221`"
  }, {
    heading: undefined,
    content: "`USER_NOT_FRIEND`"
  }, {
    heading: undefined,
    content: "User cannot send message to non-contact when contacts-only messaging enabled."
  }, {
    heading: undefined,
    content: "Prompt that recipient isn't user's friend/contact."
  }, {
    heading: undefined,
    content: "`500`"
  }, {
    heading: undefined,
    content: "`SERVER_BUSY`"
  }, {
    heading: undefined,
    content: "Server is busy."
  }, {
    heading: undefined,
    content: "Prompt that service is busy and to try again."
  }, {
    heading: undefined,
    content: "`501`"
  }, {
    heading: undefined,
    content: "`MESSAGE_INCLUDE_ILLEGAL_CONTENT`"
  }, {
    heading: undefined,
    content: "Message contains inappropriate content detected by filtering system."
  }, {
    heading: undefined,
    content: "Alert that message failed to send due to non-compliant content or sensitive words."
  }, {
    heading: undefined,
    content: "`502`"
  }, {
    heading: undefined,
    content: "`MESSAGE_EXTERNAL_LOGIC_BLOCKED`"
  }, {
    heading: undefined,
    content: "Message intercepted by anti-spam service."
  }, {
    heading: undefined,
    content: "Prompt that message failed to send."
  }, {
    heading: undefined,
    content: "`503`"
  }, {
    heading: undefined,
    content: "`SERVER_UNKNOWN_ERROR`"
  }, {
    heading: undefined,
    content: "SDK fails to send message due to unknown error."
  }, {
    heading: undefined,
    content: "Prompt that message failed to send."
  }, {
    heading: undefined,
    content: "`504`"
  }, {
    heading: undefined,
    content: "`MESSAGE_RECALL_TIME_LIMIT`"
  }, {
    heading: undefined,
    content: "Message recall timeout."
  }, {
    heading: undefined,
    content: "Notify user that retractable time limit has been exceeded."
  }, {
    heading: undefined,
    content: "`505`"
  }, {
    heading: undefined,
    content: "`SERVICE_NOT_ENABLED`"
  }, {
    heading: undefined,
    content: "Feature not enabled. Requires console activation or support contact."
  }, {
    heading: undefined,
    content: "Enable function according to error message."
  }, {
    heading: undefined,
    content: "`506`"
  }, {
    heading: undefined,
    content: "`SERVICE_NOT_ALLOW_MESSAGING`"
  }, {
    heading: undefined,
    content: "User not on group/chat room allow list when all members are muted."
  }, {
    heading: undefined,
    content: "Inform user that current group/chat room has message restrictions."
  }, {
    heading: undefined,
    content: "`507`"
  }, {
    heading: undefined,
    content: "`SERVICE_NOT_ALLOW_MESSAGING_MUTE`"
  }, {
    heading: undefined,
    content: "User is muted in group or chat room."
  }, {
    heading: undefined,
    content: "Inform user they have been banned."
  }, {
    heading: undefined,
    content: "`508`"
  }, {
    heading: undefined,
    content: "`MESSAGE_MODERATION_BLOCKED`"
  }, {
    heading: undefined,
    content: "Third-party content moderation service rejected message."
  }, {
    heading: undefined,
    content: "Prompt that message delivery failed due to non-compliant content."
  }, {
    heading: undefined,
    content: "`510`"
  }, {
    heading: undefined,
    content: "`MESSAGE_WEBSOCKET_DISCONNECTED`"
  }, {
    heading: undefined,
    content: "Failed to send message due to network disconnection or reconnection failure."
  }, {
    heading: undefined,
    content: "Prompt that message failed to send."
  }, {
    heading: undefined,
    content: "`511`"
  }, {
    heading: undefined,
    content: "`MESSAGE_SIZE_LIMIT`"
  }, {
    heading: undefined,
    content: "Message body exceeds upper limit."
  }, {
    heading: undefined,
    content: "Alert that message is too large."
  }, {
    heading: undefined,
    content: "`512`"
  }, {
    heading: undefined,
    content: "`MESSAGE_SEND_TIMEOUT`"
  }, {
    heading: undefined,
    content: "Send message timeout. Connection disconnected while sending."
  }, {
    heading: undefined,
    content: "Notify of send timeout."
  }, {
    heading: undefined,
    content: "`601`"
  }, {
    heading: undefined,
    content: "`GROUP_ALREADY_JOINED`"
  }, {
    heading: undefined,
    content: "User already in chat group."
  }, {
    heading: undefined,
    content: "Verify invited users aren't already in group to avoid duplicate invitations."
  }, {
    heading: undefined,
    content: "`602`"
  }, {
    heading: undefined,
    content: "`GROUP_NOT_JOINED`"
  }, {
    heading: undefined,
    content: "User not in chat group when attempting operations."
  }, {
    heading: undefined,
    content: "Ensure user is in group before performing operations."
  }, {
    heading: undefined,
    content: "`603`"
  }, {
    heading: undefined,
    content: "`PERMISSION_DENIED`"
  }, {
    heading: undefined,
    content: "User lacks permission for group operation."
  }, {
    heading: undefined,
    content: "Indicate user doesn't have required permission."
  }, {
    heading: undefined,
    content: "`604`"
  }, {
    heading: undefined,
    content: "`WEBIM_LOAD_MSG_ERROR`"
  }, {
    heading: undefined,
    content: "Internal error in message callback."
  }, {
    heading: undefined,
    content: "Verify message is formatted correctly as parsing failed."
  }, {
    heading: undefined,
    content: "`605`"
  }, {
    heading: undefined,
    content: "`GROUP_NOT_EXIST`"
  }, {
    heading: undefined,
    content: "Group ID doesn't exist."
  }, {
    heading: undefined,
    content: "Verify group or chat room ID is correct."
  }, {
    heading: undefined,
    content: "`606`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBERS_FULL`"
  }, {
    heading: undefined,
    content: "Group member count reached upper limit."
  }, {
    heading: undefined,
    content: "Indicate maximum group size has been reached."
  }, {
    heading: undefined,
    content: "`607`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBERS_LIMIT`"
  }, {
    heading: undefined,
    content: "Maximum group member count exceeds pricing plan limit."
  }, {
    heading: undefined,
    content: "Limit maximum members according to subscription package."
  }, {
    heading: undefined,
    content: "`609`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBER_ATTRIBUTES_SET_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to set custom attributes for group member."
  }, {
    heading: undefined,
    content: "Prompt that setup failed and to try again."
  }, {
    heading: undefined,
    content: "`700`"
  }, {
    heading: undefined,
    content: "`REST_PARAMS_STATUS`"
  }, {
    heading: undefined,
    content: "Failed to call API due to missing/incorrect token or App Key."
  }, {
    heading: undefined,
    content: "Set App Key correctly."
  }, {
    heading: undefined,
    content: "`702`"
  }, {
    heading: undefined,
    content: "`CHATROOM_NOT_JOINED`"
  }, {
    heading: undefined,
    content: "User not in chat room when attempting operations."
  }, {
    heading: undefined,
    content: "Indicate user isn't in current chat room."
  }, {
    heading: undefined,
    content: "`704`"
  }, {
    heading: undefined,
    content: "`CHATROOM_MEMBERS_FULL`"
  }, {
    heading: undefined,
    content: "Chat room member count reached upper limit."
  }, {
    heading: undefined,
    content: "Indicate chat room is at capacity."
  }, {
    heading: undefined,
    content: "`705`"
  }, {
    heading: undefined,
    content: "`CHATROOM_NOT_EXIST`"
  }, {
    heading: undefined,
    content: "Chat room doesn't exist."
  }, {
    heading: undefined,
    content: "Verify chat room ID is correct."
  }, {
    heading: undefined,
    content: "`999`"
  }, {
    heading: undefined,
    content: "`SDK_RUNTIME_ERROR`"
  }, {
    heading: undefined,
    content: "WebSocket error during message sending."
  }, {
    heading: undefined,
    content: "Prompt login failure and suggest logging in again."
  }, {
    heading: undefined,
    content: "`1100`"
  }, {
    heading: undefined,
    content: "`PRESENCE_PARAM_EXCEED`"
  }, {
    heading: undefined,
    content: "Presence parameter length exceeds limit."
  }, {
    heading: undefined,
    content: "Keep custom online status under 1024 bytes."
  }, {
    heading: undefined,
    content: "`1101`"
  }, {
    heading: undefined,
    content: "`REACTION_ALREADY_ADDED`"
  }, {
    heading: undefined,
    content: "User already added this Reaction."
  }, {
    heading: undefined,
    content: "Avoid adding duplicate Reactions for same user."
  }, {
    heading: undefined,
    content: "`1102`"
  }, {
    heading: undefined,
    content: "`REACTION_CREATING`"
  }, {
    heading: undefined,
    content: "Reaction being created by another user simultaneously."
  }, {
    heading: undefined,
    content: "Indicate another user is creating a Reaction."
  }, {
    heading: undefined,
    content: "`1103`"
  }, {
    heading: undefined,
    content: "`REACTION_OPERATION_IS_ILLEGAL`"
  }, {
    heading: undefined,
    content: "User lacks permission for Reaction operation."
  }, {
    heading: undefined,
    content: "Ensure users operate Reactions correctly with proper permissions."
  }, {
    heading: undefined,
    content: "`1200`"
  }, {
    heading: undefined,
    content: "`TRANSLATION_NOT_VALID`"
  }, {
    heading: undefined,
    content: "Language code is invalid."
  }, {
    heading: undefined,
    content: "Verify correct language code when using translation."
  }, {
    heading: undefined,
    content: "`1201`"
  }, {
    heading: undefined,
    content: "`TRANSLATION_TEXT_TOO_LONG`"
  }, {
    heading: undefined,
    content: "Source text length exceeds translation limit."
  }, {
    heading: undefined,
    content: "Alert that file is too large for translation."
  }, {
    heading: undefined,
    content: "`1204`"
  }, {
    heading: undefined,
    content: "`TRANSLATION_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to translate message."
  }, {
    heading: undefined,
    content: "Notify of translation failure."
  }, {
    heading: undefined,
    content: "`1300`"
  }, {
    heading: undefined,
    content: "`THREAD_NOT_EXIST`"
  }, {
    heading: undefined,
    content: "Thread doesn't exist."
  }, {
    heading: undefined,
    content: "Verify subzone ID is correct."
  }, {
    heading: undefined,
    content: "`1301`"
  }, {
    heading: undefined,
    content: "`THREAD_ALREADY_EXIST`"
  }, {
    heading: undefined,
    content: "Thread already exists."
  }, {
    heading: undefined,
    content: "Notify that subdivision already exists and cannot be created again."
  }, {
    heading: undefined,
    content: "`1302`"
  }, {
    heading: undefined,
    content: "`MODIFY_MESSAGE_NOT_EXIST`"
  }, {
    heading: undefined,
    content: "Message to modify doesn't exist."
  }, {
    heading: undefined,
    content: "Verify message ID is correct."
  }, {
    heading: undefined,
    content: "`1304`"
  }, {
    heading: undefined,
    content: "`MODIFY_MESSAGE_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to modify message."
  }, {
    heading: undefined,
    content: "Inform user that message modification failed."
  }, {
    heading: undefined,
    content: "Refer to the error codes for Android and iOS."
  }, {
    heading: undefined,
    content: "This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs."
  }, {
    heading: undefined,
    content: "Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact support\\@agora.io for assistance."
  }, {
    heading: undefined,
    content: "During runtime of the Agora Chat SDK, you may receive an error code and error message in one of the following ways:"
  }, {
    heading: undefined,
    content: "As the return value when a method call fails."
  }, {
    heading: undefined,
    content: "As the error code reported through the `onError` callback."
  }, {
    heading: undefined,
    content: "For example, when a user registration request fails because the username already exists, the `onError` callback returns the following error code and error message:"
  }, {
    heading: undefined,
    content: "Error code"
  }, {
    heading: undefined,
    content: "Error message"
  }, {
    heading: undefined,
    content: "Error description"
  }, {
    heading: undefined,
    content: "Fix"
  }, {
    heading: undefined,
    content: "`0`"
  }, {
    heading: undefined,
    content: "`EM_NO_ERROR`"
  }, {
    heading: undefined,
    content: "The operation succeeds."
  }, {
    heading: undefined,
    content: "No action required."
  }, {
    heading: undefined,
    content: "`1`"
  }, {
    heading: undefined,
    content: "`GENERAL_ERROR`"
  }, {
    heading: undefined,
    content: "The SDK is not properly initialized, or the server cannot identify this error."
  }, {
    heading: undefined,
    content: "Analyze logs and called APIs."
  }, {
    heading: undefined,
    content: "`2`"
  }, {
    heading: undefined,
    content: "`NETWORK_ERROR`"
  }, {
    heading: undefined,
    content: "SDK disconnected from server due to network interruption."
  }, {
    heading: undefined,
    content: "Retry operation after network restoration."
  }, {
    heading: undefined,
    content: "`3`"
  }, {
    heading: undefined,
    content: "`DATABASE_ERROR`"
  }, {
    heading: undefined,
    content: "Database operation fails."
  }, {
    heading: undefined,
    content: "Analyze called API with logs. Error occurs when updating non-existent messages with `Conversation#UpdateMessage` or when database isn't open during operations."
  }, {
    heading: undefined,
    content: "`4`"
  }, {
    heading: undefined,
    content: "`EXCEED_SERVICE_LIMIT`"
  }, {
    heading: undefined,
    content: "Usage exceeds service limit, such as registered users exceeding current pricing plan limits."
  }, {
    heading: undefined,
    content: "Check API parameters. Control `limit` parameter values. For rate limiting, retry after delay."
  }, {
    heading: undefined,
    content: "`8`"
  }, {
    heading: undefined,
    content: "`APP_ACTIVE_NUMBER_REACH_LIMITATION`"
  }, {
    heading: undefined,
    content: "App reached maximum daily active users (DAU) or monthly active users (MAU)."
  }, {
    heading: undefined,
    content: "Upgrade Chat service in the console."
  }, {
    heading: undefined,
    content: "`100`"
  }, {
    heading: undefined,
    content: "`INVALID_APP_KEY`"
  }, {
    heading: undefined,
    content: "App Key is invalid."
  }, {
    heading: undefined,
    content: "Initialize with correct App Key."
  }, {
    heading: undefined,
    content: "`101`"
  }, {
    heading: undefined,
    content: "`INVALID_USER_NAME`"
  }, {
    heading: undefined,
    content: "User ID is invalid, such as empty string when adding a contact."
  }, {
    heading: undefined,
    content: "Ensure user ID parameter is not null."
  }, {
    heading: undefined,
    content: "`102`"
  }, {
    heading: undefined,
    content: "`INVALID_PASSWORD`"
  }, {
    heading: undefined,
    content: "Login password is empty or invalid."
  }, {
    heading: undefined,
    content: "Verify password parameter is correct."
  }, {
    heading: undefined,
    content: "`103`"
  }, {
    heading: undefined,
    content: "`INVALID_URL`"
  }, {
    heading: undefined,
    content: "URL is incorrect."
  }, {
    heading: undefined,
    content: "Verify API parameters are correct."
  }, {
    heading: undefined,
    content: "`104`"
  }, {
    heading: undefined,
    content: "`INVALID_TOKEN`"
  }, {
    heading: undefined,
    content: "Login token is empty or invalid."
  }, {
    heading: undefined,
    content: "Verify token parameters are correct."
  }, {
    heading: undefined,
    content: "`105`"
  }, {
    heading: undefined,
    content: "`USER_NAME_TOO_LONG`"
  }, {
    heading: undefined,
    content: "User ID exceeds 64 bytes limit."
  }, {
    heading: undefined,
    content: "Check user ID length."
  }, {
    heading: undefined,
    content: "`108`"
  }, {
    heading: undefined,
    content: "`TOKEN_EXPIRED`"
  }, {
    heading: undefined,
    content: "Token has expired."
  }, {
    heading: undefined,
    content: "When callback is received, regenerate token and call `login` to log in again."
  }, {
    heading: undefined,
    content: "`109`"
  }, {
    heading: undefined,
    content: "`TOKEN_WILL_EXPIRE`"
  }, {
    heading: undefined,
    content: "Token passed half of its validity period."
  }, {
    heading: undefined,
    content: "When callback is received, regenerate token and call `SDKClient#RenewToken` to update."
  }, {
    heading: undefined,
    content: "`200`"
  }, {
    heading: undefined,
    content: "`USER_ALREADY_LOGIN`"
  }, {
    heading: undefined,
    content: "User already logged in."
  }, {
    heading: undefined,
    content: "Check if SDK has automatic login enabled or if login method was already called."
  }, {
    heading: undefined,
    content: "`201`"
  }, {
    heading: undefined,
    content: "`USER_NOT_LOGIN`"
  }, {
    heading: undefined,
    content: "Login session invalid or expired when attempting operations."
  }, {
    heading: undefined,
    content: "Ensure Chat login completes before calling API."
  }, {
    heading: undefined,
    content: "`202`"
  }, {
    heading: undefined,
    content: "`USER_AUTHENTICATION_FAILED`"
  }, {
    heading: undefined,
    content: "User authentication fails due to invalid or expired token."
  }, {
    heading: undefined,
    content: "If logged out, log in again. Otherwise, regenerate token and call `SDKClient#RenewToken`."
  }, {
    heading: undefined,
    content: "`203`"
  }, {
    heading: undefined,
    content: "`USER_ALREADY_EXIST`"
  }, {
    heading: undefined,
    content: "User ID specified during registration already exists."
  }, {
    heading: undefined,
    content: "Register with a different user ID or consider registration successful."
  }, {
    heading: undefined,
    content: "`204`"
  }, {
    heading: undefined,
    content: "`USER_NOT_FOUND`"
  }, {
    heading: undefined,
    content: "User does not exist."
  }, {
    heading: undefined,
    content: "Verify user ID parameter is correct."
  }, {
    heading: undefined,
    content: "`205`"
  }, {
    heading: undefined,
    content: "`USER_ILLEGAL_ARGUMENT`"
  }, {
    heading: undefined,
    content: "Incorrect user parameter. User ID invalid or empty during registration or attribute updates."
  }, {
    heading: undefined,
    content: "Verify API parameters are correct."
  }, {
    heading: undefined,
    content: "`206`"
  }, {
    heading: undefined,
    content: "`USER_LOGIN_ANOTHER_DEVICE`"
  }, {
    heading: undefined,
    content: "User logged in on another device. Forces logout on current device if multi-device service isn't enabled."
  }, {
    heading: undefined,
    content: "When `IConnectionDelegate#OnLoggedOtherDevice` is triggered, log in again."
  }, {
    heading: undefined,
    content: "`207`"
  }, {
    heading: undefined,
    content: "`USER_REMOVED`"
  }, {
    heading: undefined,
    content: "User account deleted in the backend."
  }, {
    heading: undefined,
    content: "When `IConnectionDelegate#OnRemovedFromServer` is triggered, return to login page. Account no longer available."
  }, {
    heading: undefined,
    content: "`208`"
  }, {
    heading: undefined,
    content: "`USER_REG_FAILED`"
  }, {
    heading: undefined,
    content: "User account registration fails because registration is closed."
  }, {
    heading: undefined,
    content: "Register account with business server instead of using SDK."
  }, {
    heading: undefined,
    content: "`210`"
  }, {
    heading: undefined,
    content: "`USER_PERMISSION_DENIED`"
  }, {
    heading: undefined,
    content: "User lacks permission for operation. User on block list attempts to send messageUser tries to modify another user's messageUser tries to modify custom group member attribute set by anotherUser attempts to destroy message thread without proper permissions"
  }, {
    heading: undefined,
    content: "Check if user has operational privileges."
  }, {
    heading: undefined,
    content: "`213`"
  }, {
    heading: undefined,
    content: "`USER_BIND_ANOTHER_DEVICE`"
  }, {
    heading: undefined,
    content: "User logged in to another device in single-device login configuration."
  }, {
    heading: undefined,
    content: "Configure for multiple device login or use `SDKClient#KickDevice` before logging in."
  }, {
    heading: undefined,
    content: "`214`"
  }, {
    heading: undefined,
    content: "`USER_LOGIN_TOO_MANY_DEVICES`"
  }, {
    heading: undefined,
    content: "User reached maximum number of login devices."
  }, {
    heading: undefined,
    content: "Increase allowed simultaneous devices or use `SDKClient#KickDevice` before logging in."
  }, {
    heading: undefined,
    content: "`215`"
  }, {
    heading: undefined,
    content: "`USER_MUTED`"
  }, {
    heading: undefined,
    content: "User is muted in group or chat room."
  }, {
    heading: undefined,
    content: "Restrict message sending in UI for users who are banned."
  }, {
    heading: undefined,
    content: "`216`"
  }, {
    heading: undefined,
    content: "`USER_KICKED_BY_CHANGE_PASSWORD`"
  }, {
    heading: undefined,
    content: "User changed login password, ending current session."
  }, {
    heading: undefined,
    content: "When `IConnectionDelegate#OnChangedIMPwd` is received, call `SDKClient#Logout` and return to login page."
  }, {
    heading: undefined,
    content: "`217`"
  }, {
    heading: undefined,
    content: "`USER_KICKED_BY_OTHER_DEVICE`"
  }, {
    heading: undefined,
    content: "User kicked off device via console or API call from another device."
  }, {
    heading: undefined,
    content: "When `IConnectionDelegate#OnKickedByOtherDevice` is received, call `SDKClient#Logout` and return to login page."
  }, {
    heading: undefined,
    content: "`218`"
  }, {
    heading: undefined,
    content: "`USER_ALREADY_LOGIN_ANOTHER`"
  }, {
    heading: undefined,
    content: "Another user already logged in on device."
  }, {
    heading: undefined,
    content: "Call `SDKClient#Logout` to log out current account before logging in with different account."
  }, {
    heading: undefined,
    content: "`219`"
  }, {
    heading: undefined,
    content: "`USER_MUTED_BY_ADMIN`"
  }, {
    heading: undefined,
    content: "User cannot send message when all members are muted."
  }, {
    heading: undefined,
    content: "Restrict message sending in UI when full ban is active."
  }, {
    heading: undefined,
    content: "`220`"
  }, {
    heading: undefined,
    content: "`USER_DEVICE_CHANGED`"
  }, {
    heading: undefined,
    content: "Login attempt on device that isn't the last used device in single-device configuration."
  }, {
    heading: undefined,
    content: "When `IConnectionDelegate#OnLoggedOtherDevice` is received, call `Client#Logout` and return to login page."
  }, {
    heading: undefined,
    content: "`221`"
  }, {
    heading: undefined,
    content: "`USER_NOT_FRIEND`"
  }, {
    heading: undefined,
    content: "User cannot send message to non-contact when contacts-only messaging is enabled."
  }, {
    heading: undefined,
    content: "Call `ContactManager#AddContact` first. Send messages after friend request is accepted."
  }, {
    heading: undefined,
    content: "`300`"
  }, {
    heading: undefined,
    content: "`SERVER_NOT_REACHABLE`"
  }, {
    heading: undefined,
    content: "Server unreachable due to network issues."
  }, {
    heading: undefined,
    content: "For login errors, try switching networks or contact support for TLS encryption in specific regions. For other operations, switch networks or retry after delay."
  }, {
    heading: undefined,
    content: "`301`"
  }, {
    heading: undefined,
    content: "`SERVER_TIMEOUT`"
  }, {
    heading: undefined,
    content: "Request timeout when server doesn't respond within specified period."
  }, {
    heading: undefined,
    content: "Retry API after switching networks or waiting."
  }, {
    heading: undefined,
    content: "`302`"
  }, {
    heading: undefined,
    content: "`SERVER_BUSY`"
  }, {
    heading: undefined,
    content: "Server currently busy."
  }, {
    heading: undefined,
    content: "Check for repeated API calls. May occur when calling again before previous result is returned."
  }, {
    heading: undefined,
    content: "`303`"
  }, {
    heading: undefined,
    content: "`SERVER_UNKNOWN_ERROR`"
  }, {
    heading: undefined,
    content: "Common server request error."
  }, {
    heading: undefined,
    content: "Provide logs and called APIs for troubleshooting."
  }, {
    heading: undefined,
    content: "`304`"
  }, {
    heading: undefined,
    content: "`SERVER_GET_DNSLIST_FAILED`"
  }, {
    heading: undefined,
    content: "SDK fails to retrieve DNS server information."
  }, {
    heading: undefined,
    content: "If `Options#EnableDNSConfig` is `No`, check server settings. Otherwise, likely network issue during `dnsConfig` request."
  }, {
    heading: undefined,
    content: "`305`"
  }, {
    heading: undefined,
    content: "`SERVER_SERVICE_RESTRICTED`"
  }, {
    heading: undefined,
    content: "App server is restricted."
  }, {
    heading: undefined,
    content: "Enable Chat feature in console or contact support."
  }, {
    heading: undefined,
    content: "`400`"
  }, {
    heading: undefined,
    content: "`FILE_NOT_FOUND`"
  }, {
    heading: undefined,
    content: "File not found."
  }, {
    heading: undefined,
    content: "For log files, retry. For attachments, file no longer exists and cannot be downloaded."
  }, {
    heading: undefined,
    content: "`401`"
  }, {
    heading: undefined,
    content: "`FILE_INVALID`"
  }, {
    heading: undefined,
    content: "File invalid."
  }, {
    heading: undefined,
    content: "Select different file and retry upload."
  }, {
    heading: undefined,
    content: "`402`"
  }, {
    heading: undefined,
    content: "`FILE_UPLOAD_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to upload file."
  }, {
    heading: undefined,
    content: "Analyze with API calls and logs."
  }, {
    heading: undefined,
    content: "`403`"
  }, {
    heading: undefined,
    content: "`FILE_DOWNLOAD_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to download file."
  }, {
    heading: undefined,
    content: "Check network or message expiration in logs."
  }, {
    heading: undefined,
    content: "`404`"
  }, {
    heading: undefined,
    content: "`FILE_DELETE_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to delete existing log file."
  }, {
    heading: undefined,
    content: "Check permissions for app log files."
  }, {
    heading: undefined,
    content: "`405`"
  }, {
    heading: undefined,
    content: "`FILE_TOO_LARGE`"
  }, {
    heading: undefined,
    content: "File exceeds size limit."
  }, {
    heading: undefined,
    content: "Select file under 10 MB or contact support to increase limit."
  }, {
    heading: undefined,
    content: "`406`"
  }, {
    heading: undefined,
    content: "`FILE_CONTENT_IMPROPER`"
  }, {
    heading: undefined,
    content: "File content inappropriate."
  }, {
    heading: undefined,
    content: "Select appropriate file and retry."
  }, {
    heading: undefined,
    content: "`407`"
  }, {
    heading: undefined,
    content: "`FILE_IS_EXPIRED`"
  }, {
    heading: undefined,
    content: "File expired. Attachments stored for 7 days by default."
  }, {
    heading: undefined,
    content: "Contact support to increase storage time."
  }, {
    heading: undefined,
    content: "`500`"
  }, {
    heading: undefined,
    content: "`MESSAGE_INVALID`"
  }, {
    heading: undefined,
    content: "Message invalid. Message body or ID empty, or sender ID inconsistent with login session."
  }, {
    heading: undefined,
    content: "Verify message construction, ID, sender, and body settings meet requirements."
  }, {
    heading: undefined,
    content: "`501`"
  }, {
    heading: undefined,
    content: "`MESSAGE_INCLUDE_ILLEGAL_CONTENT`"
  }, {
    heading: undefined,
    content: "Message contains illegal content."
  }, {
    heading: undefined,
    content: "View blocking logs in console."
  }, {
    heading: undefined,
    content: "`504`"
  }, {
    heading: undefined,
    content: "`MESSAGE_RECALL_TIME_LIMIT`"
  }, {
    heading: undefined,
    content: "Message recall timeout."
  }, {
    heading: undefined,
    content: "Show UI error or contact support to extend the retractability time."
  }, {
    heading: undefined,
    content: "`505`"
  }, {
    heading: undefined,
    content: "`SERVICE_NOT_ENABLED`"
  }, {
    heading: undefined,
    content: "Feature not enabled."
  }, {
    heading: undefined,
    content: "Enable required features in console based on API and log analysis."
  }, {
    heading: undefined,
    content: "`506`"
  }, {
    heading: undefined,
    content: "`MESSAGE_EXPIRED`"
  }, {
    heading: undefined,
    content: "Group receipt period expired. Default validity is 3 days."
  }, {
    heading: undefined,
    content: "Show UI error or contact support to extend the validity time."
  }, {
    heading: undefined,
    content: "`507`"
  }, {
    heading: undefined,
    content: "`MESSAGE_ILLEGAL_WHITELIST`"
  }, {
    heading: undefined,
    content: "User not on allow list when all members are muted."
  }, {
    heading: undefined,
    content: "Show UI error or check if group-wide ban is enabled."
  }, {
    heading: undefined,
    content: "`508`"
  }, {
    heading: undefined,
    content: "`MESSAGE_EXTERNAL_LOGIC_BLOCKED`"
  }, {
    heading: undefined,
    content: "Message blocked by app server filtering rule."
  }, {
    heading: undefined,
    content: "Show UI prompt or check the pre-sending callback logs."
  }, {
    heading: undefined,
    content: "`510`"
  }, {
    heading: undefined,
    content: "`MESSAGE_SIZE_LIMIT`"
  }, {
    heading: undefined,
    content: "Message body exceeds limit."
  }, {
    heading: undefined,
    content: "Show UI prompt or reduce the message length (max 5 KB by default)."
  }, {
    heading: undefined,
    content: "`600`"
  }, {
    heading: undefined,
    content: "`GROUP_INVALID_ID`"
  }, {
    heading: undefined,
    content: "Group ID is invalid or empty."
  }, {
    heading: undefined,
    content: "Verify group ID parameter isn't empty or disbanded."
  }, {
    heading: undefined,
    content: "`601`"
  }, {
    heading: undefined,
    content: "`GROUP_ALREADY_JOINED`"
  }, {
    heading: undefined,
    content: "User already in chat group."
  }, {
    heading: undefined,
    content: "Handle as successful join."
  }, {
    heading: undefined,
    content: "`602`"
  }, {
    heading: undefined,
    content: "`GROUP_NOT_JOINED`"
  }, {
    heading: undefined,
    content: "User not in chat group."
  }, {
    heading: undefined,
    content: "Verify group ID is for joined group that hasn't been disbanded."
  }, {
    heading: undefined,
    content: "`603`"
  }, {
    heading: undefined,
    content: "`GROUP_PERMISSION_DENIED`"
  }, {
    heading: undefined,
    content: "User lacks permission for group operation."
  }, {
    heading: undefined,
    content: "Check API call permissions."
  }, {
    heading: undefined,
    content: "`604`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBERS_FULL`"
  }, {
    heading: undefined,
    content: "Group member count reached limit."
  }, {
    heading: undefined,
    content: "Show UI prompt or check if the maximum member count exceeds limit (default 200)."
  }, {
    heading: undefined,
    content: "`605`"
  }, {
    heading: undefined,
    content: "`GROUP_NOT_EXIST`"
  }, {
    heading: undefined,
    content: "Chat group doesn't exist."
  }, {
    heading: undefined,
    content: "Verify `sharedFileId` parameter isn't null."
  }, {
    heading: undefined,
    content: "`606`"
  }, {
    heading: undefined,
    content: "`GROUP_NOT_EXIST`"
  }, {
    heading: undefined,
    content: "Group doesn't exist. Operation attempted on non-existing group."
  }, {
    heading: undefined,
    content: "Verify group ID is correct or not from disbanded group."
  }, {
    heading: undefined,
    content: "`607`"
  }, {
    heading: undefined,
    content: "`GROUP_DISABLED`"
  }, {
    heading: undefined,
    content: "Groups are disabled."
  }, {
    heading: undefined,
    content: "Show UI prompt to request unblock from administrator."
  }, {
    heading: undefined,
    content: "`608`"
  }, {
    heading: undefined,
    content: "`GROUP_NAME_VIOLATION`"
  }, {
    heading: undefined,
    content: "Group name is invalid."
  }, {
    heading: undefined,
    content: "Check if group name contains sensitive information."
  }, {
    heading: undefined,
    content: "`609`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBER_ATTRIBUTES_REACH_LIMIT`"
  }, {
    heading: undefined,
    content: "Custom attributes count reached limit."
  }, {
    heading: undefined,
    content: "Total length for single group member cannot exceed 4 KB."
  }, {
    heading: undefined,
    content: "`610`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBER_ATTRIBUTES_UPDATE_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to set custom attributes."
  }, {
    heading: undefined,
    content: "Analyze with API calls and logs."
  }, {
    heading: undefined,
    content: "`611`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBER_ATTRIBUTES_KEY_REACH_LIMIT`"
  }, {
    heading: undefined,
    content: "Custom attribute key exceeds 16 bytes."
  }, {
    heading: undefined,
    content: "Check if attribute key exceeds limit."
  }, {
    heading: undefined,
    content: "`612`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBER_ATTRIBUTES_VALUE_REACH_LIMIT`"
  }, {
    heading: undefined,
    content: "Custom attribute value exceeds 512 bytes."
  }, {
    heading: undefined,
    content: "Check if attribute value exceeds limit."
  }, {
    heading: undefined,
    content: "`613`"
  }, {
    heading: undefined,
    content: "`GROUP_USER_IN_BLOCKLIST`"
  }, {
    heading: undefined,
    content: "User is in group blacklist."
  }, {
    heading: undefined,
    content: "Show UI prompt or check console for blacklist status."
  }, {
    heading: undefined,
    content: "`700`"
  }, {
    heading: undefined,
    content: "`CHATROOM_INVALID_ID`"
  }, {
    heading: undefined,
    content: "Chat room ID is invalid or empty."
  }, {
    heading: undefined,
    content: "Check if chat room ID is empty."
  }, {
    heading: undefined,
    content: "`701`"
  }, {
    heading: undefined,
    content: "`CHATROOM_ALREADY_JOINED`"
  }, {
    heading: undefined,
    content: "User already in chat room."
  }, {
    heading: undefined,
    content: "Handle as successful join."
  }, {
    heading: undefined,
    content: "`702`"
  }, {
    heading: undefined,
    content: "`CHATROOM_NOT_JOINED`"
  }, {
    heading: undefined,
    content: "User not in chat room."
  }, {
    heading: undefined,
    content: "Verify chat room ID is correct, not disbanded, or previously joined."
  }, {
    heading: undefined,
    content: "`703`"
  }, {
    heading: undefined,
    content: "`CHATROOM_PERMISSION_DENIED`"
  }, {
    heading: undefined,
    content: "User lacks permission for chat room operation."
  }, {
    heading: undefined,
    content: "Check API call permissions."
  }, {
    heading: undefined,
    content: "`704`"
  }, {
    heading: undefined,
    content: "`CHATROOM_MEMBERS_FULL`"
  }, {
    heading: undefined,
    content: "Chat room member count reached limit."
  }, {
    heading: undefined,
    content: "Check maximum member count setting."
  }, {
    heading: undefined,
    content: "`705`"
  }, {
    heading: undefined,
    content: "`CHATROOM_NOT_EXIST`"
  }, {
    heading: undefined,
    content: "Chat room doesn't exist."
  }, {
    heading: undefined,
    content: "Verify chat room ID is correct, not disbanded, or previously joined."
  }, {
    heading: undefined,
    content: "`706`"
  }, {
    heading: undefined,
    content: "`CHATROOM_OWNER_NOT_ALLOW_LEAVE`"
  }, {
    heading: undefined,
    content: "Chat room owner not allowed to leave."
  }, {
    heading: undefined,
    content: "Check `Options#IsRoomOwnerLeaveAllowed` setting when SDK is initialized."
  }, {
    heading: undefined,
    content: "`707`"
  }, {
    heading: undefined,
    content: "`CHATROOM_USER_IN_BLOCKLIST`"
  }, {
    heading: undefined,
    content: "User is in chat room blacklist."
  }, {
    heading: undefined,
    content: "Check console for chat room blacklist status."
  }, {
    heading: undefined,
    content: "`900`"
  }, {
    heading: undefined,
    content: "`PUSH_NOT_SUPPORT`"
  }, {
    heading: undefined,
    content: "Third-party push service not supported on current device."
  }, {
    heading: undefined,
    content: "Get user attributes in batches of up to 100 users."
  }, {
    heading: undefined,
    content: "`901`"
  }, {
    heading: undefined,
    content: "`PUSH_BIND_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to upload third-party push service token to server."
  }, {
    heading: undefined,
    content: "Check attribute length limits."
  }, {
    heading: undefined,
    content: "`1000`"
  }, {
    heading: undefined,
    content: "`CONTACT_ADD_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to add contact."
  }, {
    heading: undefined,
    content: "Analyze with API calls and error description."
  }, {
    heading: undefined,
    content: "`1001`"
  }, {
    heading: undefined,
    content: "`CONTACT_REACH_LIMIT`"
  }, {
    heading: undefined,
    content: "Inviter reached maximum contacts limit."
  }, {
    heading: undefined,
    content: "Show UI error or contact support to increase limit."
  }, {
    heading: undefined,
    content: "`1002`"
  }, {
    heading: undefined,
    content: "`CONTACT_REACH_LIMIT_PEER`"
  }, {
    heading: undefined,
    content: "Invitee reached maximum contacts limit."
  }, {
    heading: undefined,
    content: "Show UI error or contact support to increase limit."
  }, {
    heading: undefined,
    content: "`1100`"
  }, {
    heading: undefined,
    content: "`PRESENCE_PARAM_LENGTH_EXCEED`"
  }, {
    heading: undefined,
    content: "Presence parameter length exceeds limit."
  }, {
    heading: undefined,
    content: "Online status details cannot exceed 64 bytes."
  }, {
    heading: undefined,
    content: "`1101`"
  }, {
    heading: undefined,
    content: "`PRESENCE_CANNOT_SUBSCRIBE_YOURSELF`"
  }, {
    heading: undefined,
    content: "User cannot subscribe to own status."
  }, {
    heading: undefined,
    content: "Check if subscribed user ID is own ID."
  }, {
    heading: undefined,
    content: "`1110`"
  }, {
    heading: undefined,
    content: "`TRANSLATE_PARAM_INVALID`"
  }, {
    heading: undefined,
    content: "Translation parameter error."
  }, {
    heading: undefined,
    content: "Analyze with debug logs."
  }, {
    heading: undefined,
    content: "`1111`"
  }, {
    heading: undefined,
    content: "`TRANSLATE_SERVICE_NOT_ENABLE`"
  }, {
    heading: undefined,
    content: "Translation service not enabled."
  }, {
    heading: undefined,
    content: "Enable translation service in console."
  }, {
    heading: undefined,
    content: "`1112`"
  }, {
    heading: undefined,
    content: "`TRANSLATE_USAGE_LIMIT`"
  }, {
    heading: undefined,
    content: "Translation usage reached limit."
  }, {
    heading: undefined,
    content: "Contact support to renew translation usage."
  }, {
    heading: undefined,
    content: "`1113`"
  }, {
    heading: undefined,
    content: "`TRANSLATE_MESSAGE_FAIL`"
  }, {
    heading: undefined,
    content: "Failed to translate message."
  }, {
    heading: undefined,
    content: "Analyze with debug logs."
  }, {
    heading: undefined,
    content: "`1200`"
  }, {
    heading: undefined,
    content: "`THIRD_MODERATION_FAILED`"
  }, {
    heading: undefined,
    content: 'Third-party content moderation result is "Reject".'
  }, {
    heading: undefined,
    content: "Check content audit configuration and logs in console."
  }, {
    heading: undefined,
    content: "`1299`"
  }, {
    heading: undefined,
    content: "`THIRD_DEFAULT_FAILED`"
  }, {
    heading: undefined,
    content: 'Non-third-party moderation service result is "Reject".'
  }, {
    heading: undefined,
    content: "Check content audit configuration and logs in console."
  }, {
    heading: undefined,
    content: "`1300`"
  }, {
    heading: undefined,
    content: "`REACTION_REACH_LIMIT`"
  }, {
    heading: undefined,
    content: "Message Reactions reached maximum allowed."
  }, {
    heading: undefined,
    content: "Show UI prompt or contact support to increase limit."
  }, {
    heading: undefined,
    content: "`1301`"
  }, {
    heading: undefined,
    content: "`REACTION_HAS_BEEN_OPERATED`"
  }, {
    heading: undefined,
    content: "User already added this Reaction."
  }, {
    heading: undefined,
    content: "Handle as successful addition."
  }, {
    heading: undefined,
    content: "`1302`"
  }, {
    heading: undefined,
    content: "`REACTION_OPERATION_IS_ILLEGAL`"
  }, {
    heading: undefined,
    content: "User lacks permission for Reaction operation."
  }, {
    heading: undefined,
    content: "Verify parameters with log analysis."
  }, {
    heading: undefined,
    content: "`1400`"
  }, {
    heading: undefined,
    content: "`THREAD_NOT_EXIST`"
  }, {
    heading: undefined,
    content: "Thread doesn't exist."
  }, {
    heading: undefined,
    content: "Verify subzone ID is correct."
  }, {
    heading: undefined,
    content: "`1401`"
  }, {
    heading: undefined,
    content: "`THREAD_ALREADY_EXIST`"
  }, {
    heading: undefined,
    content: "Thread already exists under this message ID."
  }, {
    heading: undefined,
    content: "Check if subzone already created under incoming message."
  }, {
    heading: undefined,
    content: "This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs."
  }, {
    heading: undefined,
    content: "Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact support\\@agora.io for assistance."
  }, {
    heading: undefined,
    content: "During runtime of the Agora Chat SDK, you may receive an error code and error message in one of the following ways:"
  }, {
    heading: undefined,
    content: "As the return value when a method call fails."
  }, {
    heading: undefined,
    content: "As the error code reported through the `onError` callback."
  }, {
    heading: undefined,
    content: "For example, when a user registration request fails because the username already exists, the `onError` callback returns the following error code and error message:"
  }, {
    heading: undefined,
    content: "Error code"
  }, {
    heading: undefined,
    content: "Error message"
  }, {
    heading: undefined,
    content: "Error description"
  }, {
    heading: undefined,
    content: "Fix"
  }, {
    heading: undefined,
    content: "`0`"
  }, {
    heading: undefined,
    content: "`EM_NO_ERROR`"
  }, {
    heading: undefined,
    content: "The operation succeeds."
  }, {
    heading: undefined,
    content: "No action required."
  }, {
    heading: undefined,
    content: "`1`"
  }, {
    heading: undefined,
    content: "`GENERAL_ERROR`"
  }, {
    heading: undefined,
    content: "The SDK is not properly initialized, or the server cannot identify this error."
  }, {
    heading: undefined,
    content: "Analyze logs and called APIs."
  }, {
    heading: undefined,
    content: "`2`"
  }, {
    heading: undefined,
    content: "`NETWORK_ERROR`"
  }, {
    heading: undefined,
    content: "SDK disconnected from server due to network interruption."
  }, {
    heading: undefined,
    content: "Retry operation after network restoration."
  }, {
    heading: undefined,
    content: "`3`"
  }, {
    heading: undefined,
    content: "`DATABASE_ERROR`"
  }, {
    heading: undefined,
    content: "Database operation fails."
  }, {
    heading: undefined,
    content: "Analyze called API with logs. Error occurs when updating non-existent messages with `Conversation#UpdateMessage` or when database isn't open during operations."
  }, {
    heading: undefined,
    content: "`4`"
  }, {
    heading: undefined,
    content: "`EXCEED_SERVICE_LIMIT`"
  }, {
    heading: undefined,
    content: "Usage exceeds service limit, such as registered users exceeding current pricing plan limits."
  }, {
    heading: undefined,
    content: "Check API parameters. Control `limit` parameter values. For rate limiting, retry after delay."
  }, {
    heading: undefined,
    content: "`8`"
  }, {
    heading: undefined,
    content: "`APP_ACTIVE_NUMBER_REACH_LIMITATION`"
  }, {
    heading: undefined,
    content: "App reached maximum daily active users (DAU) or monthly active users (MAU)."
  }, {
    heading: undefined,
    content: "Upgrade Chat service in the console."
  }, {
    heading: undefined,
    content: "`100`"
  }, {
    heading: undefined,
    content: "`INVALID_APP_KEY`"
  }, {
    heading: undefined,
    content: "App Key is invalid."
  }, {
    heading: undefined,
    content: "Initialize with correct App Key."
  }, {
    heading: undefined,
    content: "`101`"
  }, {
    heading: undefined,
    content: "`INVALID_USER_NAME`"
  }, {
    heading: undefined,
    content: "User ID is invalid, such as empty string when adding a contact."
  }, {
    heading: undefined,
    content: "Ensure user ID parameter is not null."
  }, {
    heading: undefined,
    content: "`102`"
  }, {
    heading: undefined,
    content: "`INVALID_PASSWORD`"
  }, {
    heading: undefined,
    content: "Login password is empty or invalid."
  }, {
    heading: undefined,
    content: "Verify password parameter is correct."
  }, {
    heading: undefined,
    content: "`103`"
  }, {
    heading: undefined,
    content: "`INVALID_URL`"
  }, {
    heading: undefined,
    content: "URL is incorrect."
  }, {
    heading: undefined,
    content: "Verify API parameters are correct."
  }, {
    heading: undefined,
    content: "`104`"
  }, {
    heading: undefined,
    content: "`INVALID_TOKEN`"
  }, {
    heading: undefined,
    content: "Login token is empty or invalid."
  }, {
    heading: undefined,
    content: "Verify token parameters are correct."
  }, {
    heading: undefined,
    content: "`105`"
  }, {
    heading: undefined,
    content: "`USER_NAME_TOO_LONG`"
  }, {
    heading: undefined,
    content: "User ID exceeds 64 bytes limit."
  }, {
    heading: undefined,
    content: "Check user ID length."
  }, {
    heading: undefined,
    content: "`108`"
  }, {
    heading: undefined,
    content: "`TOKEN_EXPIRED`"
  }, {
    heading: undefined,
    content: "Token has expired."
  }, {
    heading: undefined,
    content: "When callback is received, regenerate token and call `login` to log in again."
  }, {
    heading: undefined,
    content: "`109`"
  }, {
    heading: undefined,
    content: "`TOKEN_WILL_EXPIRE`"
  }, {
    heading: undefined,
    content: "Token passed half of its validity period."
  }, {
    heading: undefined,
    content: "When callback is received, regenerate token and call `SDKClient#RenewToken` to update."
  }, {
    heading: undefined,
    content: "`200`"
  }, {
    heading: undefined,
    content: "`USER_ALREADY_LOGIN`"
  }, {
    heading: undefined,
    content: "User already logged in."
  }, {
    heading: undefined,
    content: "Check if SDK has automatic login enabled or if login method was already called."
  }, {
    heading: undefined,
    content: "`201`"
  }, {
    heading: undefined,
    content: "`USER_NOT_LOGIN`"
  }, {
    heading: undefined,
    content: "Login session invalid or expired when attempting operations."
  }, {
    heading: undefined,
    content: "Ensure Chat login completes before calling API."
  }, {
    heading: undefined,
    content: "`202`"
  }, {
    heading: undefined,
    content: "`USER_AUTHENTICATION_FAILED`"
  }, {
    heading: undefined,
    content: "User authentication fails due to invalid or expired token."
  }, {
    heading: undefined,
    content: "If logged out, log in again. Otherwise, regenerate token and call `SDKClient#RenewToken`."
  }, {
    heading: undefined,
    content: "`203`"
  }, {
    heading: undefined,
    content: "`USER_ALREADY_EXIST`"
  }, {
    heading: undefined,
    content: "User ID specified during registration already exists."
  }, {
    heading: undefined,
    content: "Register with a different user ID or consider registration successful."
  }, {
    heading: undefined,
    content: "`204`"
  }, {
    heading: undefined,
    content: "`USER_NOT_FOUND`"
  }, {
    heading: undefined,
    content: "User does not exist."
  }, {
    heading: undefined,
    content: "Verify user ID parameter is correct."
  }, {
    heading: undefined,
    content: "`205`"
  }, {
    heading: undefined,
    content: "`USER_ILLEGAL_ARGUMENT`"
  }, {
    heading: undefined,
    content: "Incorrect user parameter. User ID invalid or empty during registration or attribute updates."
  }, {
    heading: undefined,
    content: "Verify API parameters are correct."
  }, {
    heading: undefined,
    content: "`206`"
  }, {
    heading: undefined,
    content: "`USER_LOGIN_ANOTHER_DEVICE`"
  }, {
    heading: undefined,
    content: "User logged in on another device. Forces logout on current device if multi-device service isn't enabled."
  }, {
    heading: undefined,
    content: "When `IConnectionDelegate#OnLoggedOtherDevice` is triggered, log in again."
  }, {
    heading: undefined,
    content: "`207`"
  }, {
    heading: undefined,
    content: "`USER_REMOVED`"
  }, {
    heading: undefined,
    content: "User account deleted in the backend."
  }, {
    heading: undefined,
    content: "When `IConnectionDelegate#OnRemovedFromServer` is triggered, return to login page. Account no longer available."
  }, {
    heading: undefined,
    content: "`208`"
  }, {
    heading: undefined,
    content: "`USER_REG_FAILED`"
  }, {
    heading: undefined,
    content: "User account registration fails because registration is closed."
  }, {
    heading: undefined,
    content: "Register account with business server instead of using SDK."
  }, {
    heading: undefined,
    content: "`210`"
  }, {
    heading: undefined,
    content: "`USER_PERMISSION_DENIED`"
  }, {
    heading: undefined,
    content: "User lacks permission for operation. User on block list attempts to send messageUser tries to modify another user's messageUser tries to modify custom group member attribute set by anotherUser attempts to destroy message thread without proper permissions"
  }, {
    heading: undefined,
    content: "Check if user has operational privileges."
  }, {
    heading: undefined,
    content: "`213`"
  }, {
    heading: undefined,
    content: "`USER_BIND_ANOTHER_DEVICE`"
  }, {
    heading: undefined,
    content: "User logged in to another device in single-device login configuration."
  }, {
    heading: undefined,
    content: "Configure for multiple device login or use `SDKClient#KickDevice` before logging in."
  }, {
    heading: undefined,
    content: "`214`"
  }, {
    heading: undefined,
    content: "`USER_LOGIN_TOO_MANY_DEVICES`"
  }, {
    heading: undefined,
    content: "User reached maximum number of login devices."
  }, {
    heading: undefined,
    content: "Increase allowed simultaneous devices or use `SDKClient#KickDevice` before logging in."
  }, {
    heading: undefined,
    content: "`215`"
  }, {
    heading: undefined,
    content: "`USER_MUTED`"
  }, {
    heading: undefined,
    content: "User is muted in group or chat room."
  }, {
    heading: undefined,
    content: "Restrict message sending in UI for users who are banned."
  }, {
    heading: undefined,
    content: "`216`"
  }, {
    heading: undefined,
    content: "`USER_KICKED_BY_CHANGE_PASSWORD`"
  }, {
    heading: undefined,
    content: "User changed login password, ending current session."
  }, {
    heading: undefined,
    content: "When `IConnectionDelegate#OnChangedIMPwd` is received, call `SDKClient#Logout` and return to login page."
  }, {
    heading: undefined,
    content: "`217`"
  }, {
    heading: undefined,
    content: "`USER_KICKED_BY_OTHER_DEVICE`"
  }, {
    heading: undefined,
    content: "User kicked off device via console or API call from another device."
  }, {
    heading: undefined,
    content: "When `IConnectionDelegate#OnKickedByOtherDevice` is received, call `SDKClient#Logout` and return to login page."
  }, {
    heading: undefined,
    content: "`218`"
  }, {
    heading: undefined,
    content: "`USER_ALREADY_LOGIN_ANOTHER`"
  }, {
    heading: undefined,
    content: "Another user already logged in on device."
  }, {
    heading: undefined,
    content: "Call `SDKClient#Logout` to log out current account before logging in with different account."
  }, {
    heading: undefined,
    content: "`219`"
  }, {
    heading: undefined,
    content: "`USER_MUTED_BY_ADMIN`"
  }, {
    heading: undefined,
    content: "User cannot send message when all members are muted."
  }, {
    heading: undefined,
    content: "Restrict message sending in UI when full ban is active."
  }, {
    heading: undefined,
    content: "`220`"
  }, {
    heading: undefined,
    content: "`USER_DEVICE_CHANGED`"
  }, {
    heading: undefined,
    content: "Login attempt on device that isn't the last used device in single-device configuration."
  }, {
    heading: undefined,
    content: "When `IConnectionDelegate#OnLoggedOtherDevice` is received, call `Client#Logout` and return to login page."
  }, {
    heading: undefined,
    content: "`221`"
  }, {
    heading: undefined,
    content: "`USER_NOT_FRIEND`"
  }, {
    heading: undefined,
    content: "User cannot send message to non-contact when contacts-only messaging is enabled."
  }, {
    heading: undefined,
    content: "Call `ContactManager#AddContact` first. Send messages after friend request is accepted."
  }, {
    heading: undefined,
    content: "`300`"
  }, {
    heading: undefined,
    content: "`SERVER_NOT_REACHABLE`"
  }, {
    heading: undefined,
    content: "Server unreachable due to network issues."
  }, {
    heading: undefined,
    content: "For login errors, try switching networks or contact support for TLS encryption in specific regions. For other operations, switch networks or retry after delay."
  }, {
    heading: undefined,
    content: "`301`"
  }, {
    heading: undefined,
    content: "`SERVER_TIMEOUT`"
  }, {
    heading: undefined,
    content: "Request timeout when server doesn't respond within specified period."
  }, {
    heading: undefined,
    content: "Retry API after switching networks or waiting."
  }, {
    heading: undefined,
    content: "`302`"
  }, {
    heading: undefined,
    content: "`SERVER_BUSY`"
  }, {
    heading: undefined,
    content: "Server currently busy."
  }, {
    heading: undefined,
    content: "Check for repeated API calls. May occur when calling again before previous result is returned."
  }, {
    heading: undefined,
    content: "`303`"
  }, {
    heading: undefined,
    content: "`SERVER_UNKNOWN_ERROR`"
  }, {
    heading: undefined,
    content: "Common server request error."
  }, {
    heading: undefined,
    content: "Provide logs and called APIs for troubleshooting."
  }, {
    heading: undefined,
    content: "`304`"
  }, {
    heading: undefined,
    content: "`SERVER_GET_DNSLIST_FAILED`"
  }, {
    heading: undefined,
    content: "SDK fails to retrieve DNS server information."
  }, {
    heading: undefined,
    content: "If `Options#EnableDNSConfig` is `No`, check server settings. Otherwise, likely network issue during `dnsConfig` request."
  }, {
    heading: undefined,
    content: "`305`"
  }, {
    heading: undefined,
    content: "`SERVER_SERVICE_RESTRICTED`"
  }, {
    heading: undefined,
    content: "App server is restricted."
  }, {
    heading: undefined,
    content: "Enable Chat feature in console or contact support."
  }, {
    heading: undefined,
    content: "`400`"
  }, {
    heading: undefined,
    content: "`FILE_NOT_FOUND`"
  }, {
    heading: undefined,
    content: "File not found."
  }, {
    heading: undefined,
    content: "For log files, retry. For attachments, file no longer exists and cannot be downloaded."
  }, {
    heading: undefined,
    content: "`401`"
  }, {
    heading: undefined,
    content: "`FILE_INVALID`"
  }, {
    heading: undefined,
    content: "File invalid."
  }, {
    heading: undefined,
    content: "Select different file and retry upload."
  }, {
    heading: undefined,
    content: "`402`"
  }, {
    heading: undefined,
    content: "`FILE_UPLOAD_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to upload file."
  }, {
    heading: undefined,
    content: "Analyze with API calls and logs."
  }, {
    heading: undefined,
    content: "`403`"
  }, {
    heading: undefined,
    content: "`FILE_DOWNLOAD_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to download file."
  }, {
    heading: undefined,
    content: "Check network or message expiration in logs."
  }, {
    heading: undefined,
    content: "`404`"
  }, {
    heading: undefined,
    content: "`FILE_DELETE_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to delete existing log file."
  }, {
    heading: undefined,
    content: "Check permissions for app log files."
  }, {
    heading: undefined,
    content: "`405`"
  }, {
    heading: undefined,
    content: "`FILE_TOO_LARGE`"
  }, {
    heading: undefined,
    content: "File exceeds size limit."
  }, {
    heading: undefined,
    content: "Select file under 10 MB or contact support to increase limit."
  }, {
    heading: undefined,
    content: "`406`"
  }, {
    heading: undefined,
    content: "`FILE_CONTENT_IMPROPER`"
  }, {
    heading: undefined,
    content: "File content inappropriate."
  }, {
    heading: undefined,
    content: "Select appropriate file and retry."
  }, {
    heading: undefined,
    content: "`407`"
  }, {
    heading: undefined,
    content: "`FILE_IS_EXPIRED`"
  }, {
    heading: undefined,
    content: "File expired. Attachments stored for 7 days by default."
  }, {
    heading: undefined,
    content: "Contact support to increase storage time."
  }, {
    heading: undefined,
    content: "`500`"
  }, {
    heading: undefined,
    content: "`MESSAGE_INVALID`"
  }, {
    heading: undefined,
    content: "Message invalid. Message body or ID empty, or sender ID inconsistent with login session."
  }, {
    heading: undefined,
    content: "Verify message construction, ID, sender, and body settings meet requirements."
  }, {
    heading: undefined,
    content: "`501`"
  }, {
    heading: undefined,
    content: "`MESSAGE_INCLUDE_ILLEGAL_CONTENT`"
  }, {
    heading: undefined,
    content: "Message contains illegal content."
  }, {
    heading: undefined,
    content: "View blocking logs in console."
  }, {
    heading: undefined,
    content: "`504`"
  }, {
    heading: undefined,
    content: "`MESSAGE_RECALL_TIME_LIMIT`"
  }, {
    heading: undefined,
    content: "Message recall timeout."
  }, {
    heading: undefined,
    content: "Show UI error or contact support to extend the retractability time."
  }, {
    heading: undefined,
    content: "`505`"
  }, {
    heading: undefined,
    content: "`SERVICE_NOT_ENABLED`"
  }, {
    heading: undefined,
    content: "Feature not enabled."
  }, {
    heading: undefined,
    content: "Enable required features in console based on API and log analysis."
  }, {
    heading: undefined,
    content: "`506`"
  }, {
    heading: undefined,
    content: "`MESSAGE_EXPIRED`"
  }, {
    heading: undefined,
    content: "Group receipt period expired. Default validity is 3 days."
  }, {
    heading: undefined,
    content: "Show UI error or contact support to extend the validity time."
  }, {
    heading: undefined,
    content: "`507`"
  }, {
    heading: undefined,
    content: "`MESSAGE_ILLEGAL_WHITELIST`"
  }, {
    heading: undefined,
    content: "User not on allow list when all members are muted."
  }, {
    heading: undefined,
    content: "Show UI error or check if group-wide ban is enabled."
  }, {
    heading: undefined,
    content: "`508`"
  }, {
    heading: undefined,
    content: "`MESSAGE_EXTERNAL_LOGIC_BLOCKED`"
  }, {
    heading: undefined,
    content: "Message blocked by app server filtering rule."
  }, {
    heading: undefined,
    content: "Show UI prompt or check the pre-sending callback logs."
  }, {
    heading: undefined,
    content: "`510`"
  }, {
    heading: undefined,
    content: "`MESSAGE_SIZE_LIMIT`"
  }, {
    heading: undefined,
    content: "Message body exceeds limit."
  }, {
    heading: undefined,
    content: "Show UI prompt or reduce the message length (max 5 KB by default)."
  }, {
    heading: undefined,
    content: "`600`"
  }, {
    heading: undefined,
    content: "`GROUP_INVALID_ID`"
  }, {
    heading: undefined,
    content: "Group ID is invalid or empty."
  }, {
    heading: undefined,
    content: "Verify group ID parameter isn't empty or disbanded."
  }, {
    heading: undefined,
    content: "`601`"
  }, {
    heading: undefined,
    content: "`GROUP_ALREADY_JOINED`"
  }, {
    heading: undefined,
    content: "User already in chat group."
  }, {
    heading: undefined,
    content: "Handle as successful join."
  }, {
    heading: undefined,
    content: "`602`"
  }, {
    heading: undefined,
    content: "`GROUP_NOT_JOINED`"
  }, {
    heading: undefined,
    content: "User not in chat group."
  }, {
    heading: undefined,
    content: "Verify group ID is for joined group that hasn't been disbanded."
  }, {
    heading: undefined,
    content: "`603`"
  }, {
    heading: undefined,
    content: "`GROUP_PERMISSION_DENIED`"
  }, {
    heading: undefined,
    content: "User lacks permission for group operation."
  }, {
    heading: undefined,
    content: "Check API call permissions."
  }, {
    heading: undefined,
    content: "`604`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBERS_FULL`"
  }, {
    heading: undefined,
    content: "Group member count reached limit."
  }, {
    heading: undefined,
    content: "Show UI prompt or check if the maximum member count exceeds limit (default 200)."
  }, {
    heading: undefined,
    content: "`605`"
  }, {
    heading: undefined,
    content: "`GROUP_NOT_EXIST`"
  }, {
    heading: undefined,
    content: "Chat group doesn't exist."
  }, {
    heading: undefined,
    content: "Verify `sharedFileId` parameter isn't null."
  }, {
    heading: undefined,
    content: "`606`"
  }, {
    heading: undefined,
    content: "`GROUP_NOT_EXIST`"
  }, {
    heading: undefined,
    content: "Group doesn't exist. Operation attempted on non-existing group."
  }, {
    heading: undefined,
    content: "Verify group ID is correct or not from disbanded group."
  }, {
    heading: undefined,
    content: "`607`"
  }, {
    heading: undefined,
    content: "`GROUP_DISABLED`"
  }, {
    heading: undefined,
    content: "Groups are disabled."
  }, {
    heading: undefined,
    content: "Show UI prompt to request unblock from administrator."
  }, {
    heading: undefined,
    content: "`608`"
  }, {
    heading: undefined,
    content: "`GROUP_NAME_VIOLATION`"
  }, {
    heading: undefined,
    content: "Group name is invalid."
  }, {
    heading: undefined,
    content: "Check if group name contains sensitive information."
  }, {
    heading: undefined,
    content: "`609`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBER_ATTRIBUTES_REACH_LIMIT`"
  }, {
    heading: undefined,
    content: "Custom attributes count reached limit."
  }, {
    heading: undefined,
    content: "Total length for single group member cannot exceed 4 KB."
  }, {
    heading: undefined,
    content: "`610`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBER_ATTRIBUTES_UPDATE_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to set custom attributes."
  }, {
    heading: undefined,
    content: "Analyze with API calls and logs."
  }, {
    heading: undefined,
    content: "`611`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBER_ATTRIBUTES_KEY_REACH_LIMIT`"
  }, {
    heading: undefined,
    content: "Custom attribute key exceeds 16 bytes."
  }, {
    heading: undefined,
    content: "Check if attribute key exceeds limit."
  }, {
    heading: undefined,
    content: "`612`"
  }, {
    heading: undefined,
    content: "`GROUP_MEMBER_ATTRIBUTES_VALUE_REACH_LIMIT`"
  }, {
    heading: undefined,
    content: "Custom attribute value exceeds 512 bytes."
  }, {
    heading: undefined,
    content: "Check if attribute value exceeds limit."
  }, {
    heading: undefined,
    content: "`613`"
  }, {
    heading: undefined,
    content: "`GROUP_USER_IN_BLOCKLIST`"
  }, {
    heading: undefined,
    content: "User is in group blacklist."
  }, {
    heading: undefined,
    content: "Show UI prompt or check console for blacklist status."
  }, {
    heading: undefined,
    content: "`700`"
  }, {
    heading: undefined,
    content: "`CHATROOM_INVALID_ID`"
  }, {
    heading: undefined,
    content: "Chat room ID is invalid or empty."
  }, {
    heading: undefined,
    content: "Check if chat room ID is empty."
  }, {
    heading: undefined,
    content: "`701`"
  }, {
    heading: undefined,
    content: "`CHATROOM_ALREADY_JOINED`"
  }, {
    heading: undefined,
    content: "User already in chat room."
  }, {
    heading: undefined,
    content: "Handle as successful join."
  }, {
    heading: undefined,
    content: "`702`"
  }, {
    heading: undefined,
    content: "`CHATROOM_NOT_JOINED`"
  }, {
    heading: undefined,
    content: "User not in chat room."
  }, {
    heading: undefined,
    content: "Verify chat room ID is correct, not disbanded, or previously joined."
  }, {
    heading: undefined,
    content: "`703`"
  }, {
    heading: undefined,
    content: "`CHATROOM_PERMISSION_DENIED`"
  }, {
    heading: undefined,
    content: "User lacks permission for chat room operation."
  }, {
    heading: undefined,
    content: "Check API call permissions."
  }, {
    heading: undefined,
    content: "`704`"
  }, {
    heading: undefined,
    content: "`CHATROOM_MEMBERS_FULL`"
  }, {
    heading: undefined,
    content: "Chat room member count reached limit."
  }, {
    heading: undefined,
    content: "Check maximum member count setting."
  }, {
    heading: undefined,
    content: "`705`"
  }, {
    heading: undefined,
    content: "`CHATROOM_NOT_EXIST`"
  }, {
    heading: undefined,
    content: "Chat room doesn't exist."
  }, {
    heading: undefined,
    content: "Verify chat room ID is correct, not disbanded, or previously joined."
  }, {
    heading: undefined,
    content: "`706`"
  }, {
    heading: undefined,
    content: "`CHATROOM_OWNER_NOT_ALLOW_LEAVE`"
  }, {
    heading: undefined,
    content: "Chat room owner not allowed to leave."
  }, {
    heading: undefined,
    content: "Check `Options#IsRoomOwnerLeaveAllowed` setting when SDK is initialized."
  }, {
    heading: undefined,
    content: "`707`"
  }, {
    heading: undefined,
    content: "`CHATROOM_USER_IN_BLOCKLIST`"
  }, {
    heading: undefined,
    content: "User is in chat room blacklist."
  }, {
    heading: undefined,
    content: "Check console for chat room blacklist status."
  }, {
    heading: undefined,
    content: "`900`"
  }, {
    heading: undefined,
    content: "`PUSH_NOT_SUPPORT`"
  }, {
    heading: undefined,
    content: "Third-party push service not supported on current device."
  }, {
    heading: undefined,
    content: "Get user attributes in batches of up to 100 users."
  }, {
    heading: undefined,
    content: "`901`"
  }, {
    heading: undefined,
    content: "`PUSH_BIND_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to upload third-party push service token to server."
  }, {
    heading: undefined,
    content: "Check attribute length limits."
  }, {
    heading: undefined,
    content: "`1000`"
  }, {
    heading: undefined,
    content: "`CONTACT_ADD_FAILED`"
  }, {
    heading: undefined,
    content: "Failed to add contact."
  }, {
    heading: undefined,
    content: "Analyze with API calls and error description."
  }, {
    heading: undefined,
    content: "`1001`"
  }, {
    heading: undefined,
    content: "`CONTACT_REACH_LIMIT`"
  }, {
    heading: undefined,
    content: "Inviter reached maximum contacts limit."
  }, {
    heading: undefined,
    content: "Show UI error or contact support to increase limit."
  }, {
    heading: undefined,
    content: "`1002`"
  }, {
    heading: undefined,
    content: "`CONTACT_REACH_LIMIT_PEER`"
  }, {
    heading: undefined,
    content: "Invitee reached maximum contacts limit."
  }, {
    heading: undefined,
    content: "Show UI error or contact support to increase limit."
  }, {
    heading: undefined,
    content: "`1100`"
  }, {
    heading: undefined,
    content: "`PRESENCE_PARAM_LENGTH_EXCEED`"
  }, {
    heading: undefined,
    content: "Presence parameter length exceeds limit."
  }, {
    heading: undefined,
    content: "Online status details cannot exceed 64 bytes."
  }, {
    heading: undefined,
    content: "`1101`"
  }, {
    heading: undefined,
    content: "`PRESENCE_CANNOT_SUBSCRIBE_YOURSELF`"
  }, {
    heading: undefined,
    content: "User cannot subscribe to own status."
  }, {
    heading: undefined,
    content: "Check if subscribed user ID is own ID."
  }, {
    heading: undefined,
    content: "`1110`"
  }, {
    heading: undefined,
    content: "`TRANSLATE_PARAM_INVALID`"
  }, {
    heading: undefined,
    content: "Translation parameter error."
  }, {
    heading: undefined,
    content: "Analyze with debug logs."
  }, {
    heading: undefined,
    content: "`1111`"
  }, {
    heading: undefined,
    content: "`TRANSLATE_SERVICE_NOT_ENABLE`"
  }, {
    heading: undefined,
    content: "Translation service not enabled."
  }, {
    heading: undefined,
    content: "Enable translation service in console."
  }, {
    heading: undefined,
    content: "`1112`"
  }, {
    heading: undefined,
    content: "`TRANSLATE_USAGE_LIMIT`"
  }, {
    heading: undefined,
    content: "Translation usage reached limit."
  }, {
    heading: undefined,
    content: "Contact support to renew translation usage."
  }, {
    heading: undefined,
    content: "`1113`"
  }, {
    heading: undefined,
    content: "`TRANSLATE_MESSAGE_FAIL`"
  }, {
    heading: undefined,
    content: "Failed to translate message."
  }, {
    heading: undefined,
    content: "Analyze with debug logs."
  }, {
    heading: undefined,
    content: "`1200`"
  }, {
    heading: undefined,
    content: "`THIRD_MODERATION_FAILED`"
  }, {
    heading: undefined,
    content: 'Third-party content moderation result is "Reject".'
  }, {
    heading: undefined,
    content: "Check content audit configuration and logs in console."
  }, {
    heading: undefined,
    content: "`1299`"
  }, {
    heading: undefined,
    content: "`THIRD_DEFAULT_FAILED`"
  }, {
    heading: undefined,
    content: 'Non-third-party moderation service result is "Reject".'
  }, {
    heading: undefined,
    content: "Check content audit configuration and logs in console."
  }, {
    heading: undefined,
    content: "`1300`"
  }, {
    heading: undefined,
    content: "`REACTION_REACH_LIMIT`"
  }, {
    heading: undefined,
    content: "Message Reactions reached maximum allowed."
  }, {
    heading: undefined,
    content: "Show UI prompt or contact support to increase limit."
  }, {
    heading: undefined,
    content: "`1301`"
  }, {
    heading: undefined,
    content: "`REACTION_HAS_BEEN_OPERATED`"
  }, {
    heading: undefined,
    content: "User already added this Reaction."
  }, {
    heading: undefined,
    content: "Handle as successful addition."
  }, {
    heading: undefined,
    content: "`1302`"
  }, {
    heading: undefined,
    content: "`REACTION_OPERATION_IS_ILLEGAL`"
  }, {
    heading: undefined,
    content: "User lacks permission for Reaction operation."
  }, {
    heading: undefined,
    content: "Verify parameters with log analysis."
  }, {
    heading: undefined,
    content: "`1400`"
  }, {
    heading: undefined,
    content: "`THREAD_NOT_EXIST`"
  }, {
    heading: undefined,
    content: "Thread doesn't exist."
  }, {
    heading: undefined,
    content: "Verify subzone ID is correct."
  }, {
    heading: undefined,
    content: "`1401`"
  }, {
    heading: undefined,
    content: "`THREAD_ALREADY_EXIST`"
  }, {
    heading: undefined,
    content: "Thread already exists under this message ID."
  }, {
    heading: undefined,
    content: "Check if subzone already created under incoming message."
  }, {
    heading: undefined,
    content: "This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs."
  }, {
    heading: undefined,
    content: "Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact support\\@agora.io for assistance."
  }, {
    heading: undefined,
    content: "Refer to the error codes for Android and iOS."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
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
    platforms: '["android","ios","web","react-native","windows","unity","flutter"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsx(_components.p, {
        children: "This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs."
      }), _jsxs(_components.p, {
        children: ["Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), " for assistance."]
      }), _jsx(_components.p, {
        children: "You may receive an error code and error message in one of the following ways:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "As the return value when a method call fails."
        }), `
`, _jsxs(_components.li, {
          children: ["As the error code reported through the ", _jsx(_components.code, {
            children: "onError"
          }), " callback."]
        }), `
`]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Error code"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Error message"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Possible reason"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Fix"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "0"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "EM_NO_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The operation succeeds."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "No action required."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GENERAL_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Default error related to the SDK or API requests. Occurs when SDK isn't properly initialized or a request fails without specific reason."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze logs and called APIs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "2"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "NETWORK_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "SDK disconnected from server due to network interruption."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Retry operation after network restoration."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "3"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "DATABASE_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Database operation fails."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Analyze called API with logs. Error occurs when updating non-existent messages with ", _jsx(_components.code, {
                children: "Conversation#updateMessage"
              }), " or when database isn't open during operations."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "4"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "EXCEED_SERVICE_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Usage exceeds service limit, such as registered users or contacts exceeding current pricing plan limits."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Check API parameters. Control ", _jsx(_components.code, {
                children: "limit"
              }), " parameter values. For rate limiting, retry after delay."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "8"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "APP_ACTIVE_NUMBER_REACH_LIMITATION"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "App reached maximum daily active users (DAU) or monthly active users (MAU)."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Upgrade Chat service in the console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "100"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "INVALID_APP_KEY"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "App Key is invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Initialize with correct App Key."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "101"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "INVALID_USER_NAME"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User ID is invalid, such as empty string when adding a contact."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ensure user ID parameter is not null."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "102"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "INVALID_PASSWORD"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Login password is empty or invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify password parameter is correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "103"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "INVALID_URL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "URL is incorrect."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify API parameters are correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "104"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "INVALID_TOKEN"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User token is empty or invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify token parameters are correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "105"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_NAME_TOO_LONG"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User ID exceeds 64 bytes limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check user ID length."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "108"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TOKEN_EXPIRED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Token has expired."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When callback received, regenerate token and call ", _jsx(_components.code, {
                children: "loginWithToken"
              }), " to log in again."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "109"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TOKEN_WILL_EXPIRE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Token passed half of its validity period."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When callback received, regenerate token and call ", _jsx(_components.code, {
                children: "ChatClient#renewToken"
              }), " to update."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "110"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "INVALID_PARAM"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Invalid parameter."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify API parameters are valid."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "200"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_ALREADY_LOGIN"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already logged in."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if SDK has automatic login enabled or if login method was already called."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "201"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_NOT_LOGIN"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not logged in. Session invalid or expired when attempting operations."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ensure Chat login completes before calling API."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "202"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_AUTHENTICATION_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User authentication fails due to invalid or expired token."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["If logged out, log in again. Otherwise, regenerate token and call ", _jsx(_components.code, {
                children: "ChatClient#renewToken"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "203"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_ALREADY_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User ID specified during registration already exists."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Register with a different user ID."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "204"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_NOT_FOUND"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User does not exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify user ID parameter is correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "205"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_ILLEGAL_ARGUMENT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Incorrect user parameter. User ID invalid or empty during registration or attribute updates."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify API parameters are correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "206"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_LOGIN_ANOTHER_DEVICE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User logged in on another device. Forces logout on current device if multi-device service isn't enabled."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "ConnectionListener#onLogout"
              }), " is triggered, log in again."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "207"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_REMOVED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User account deleted in the console."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "ConnectionListener#onLogout"
              }), " is triggered, return to login page. Account no longer available."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "209"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "PUSH_UPDATECONFIGS_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to update push configurations."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check error-reporting API, wait, then retry."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "210"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_PERMISSION_DENIED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for operation. User on block list attempts to send messageUser tries to modify another user's messageUser tries to modify custom group member attribute set by anotherUser attempts to destroy message thread without proper permissions"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify user has operation permission."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "211"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_BINDDEVICETOKEN_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to bind push token to device."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify token for device push binding isn't empty."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "212"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_UNBIND_DEVICETOKEN_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to unbind push token from device."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Retry ", _jsx(_components.code, {
                children: "ChatClient#logout"
              }), ". For guaranteed exit, call with parameter set to ", _jsx(_components.code, {
                children: "false"
              }), " (unbind)."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "213"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_BIND_ANOTHER_DEVICE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User logged in to another device in single-device login configuration."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Configure for multiple device login or use ", _jsx(_components.code, {
                children: "ChatClient#kickDeviceWithToken"
              }), " before logging in."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "214"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_LOGIN_TOO_MANY_DEVICES"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User reached maximum number of login devices."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Increase allowed simultaneous devices or use ", _jsx(_components.code, {
                children: "ChatClient#kickDeviceWithToken"
              }), " before logging in."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "215"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_MUTED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User is muted in group or chat room."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Restrict message sending in UI for users who are banned."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "216"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_KICKED_BY_CHANGE_PASSWORD"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User changed login password, ending current session."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "ConnectionListener#onLogout"
              }), " is received, call ", _jsx(_components.code, {
                children: "ChatClient#logout"
              }), " and return to login page."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "217"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_KICKED_BY_OTHER_DEVICE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User kicked off device via console or API call from another device."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "ConnectionListener#onLogout"
              }), " is received, call ", _jsx(_components.code, {
                children: "ChatClient#logout"
              }), " and return to login page."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "218"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_ALREADY_LOGIN_ANOTHER"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Another user already logged in on device."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Call ", _jsx(_components.code, {
                children: "ChatClient#logout"
              }), " to log out current account before logging in with different account."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "219"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_MUTED_BY_ADMIN"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User cannot send message when all members are muted."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Restrict message sending in UI when full ban is active."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "220"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_DEVICE_CHANGED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Login attempt on device that isn't the last used device in single-device configuration."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "ConnectionListener#onLogout"
              }), " is received, call ", _jsx(_components.code, {
                children: "ChatClient#logout"
              }), " and return to login page."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "221"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_NOT_ON_ROSTER"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User cannot send message to non-contact when contacts-only messaging enabled."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Call ", _jsx(_components.code, {
                children: "ContactManager#addContact"
              }), " first. Send messages after friend request is accepted."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "300"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_NOT_REACHABLE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Server unreachable due to network issues."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "For login errors, try switching networks or contacting support for TLS encryption in specific regions. For other operations, switch networks or retry after delay."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "301"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_TIMEOUT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Request timeout when server doesn't respond within specified period."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Retry API after switching networks or waiting."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "302"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_BUSY"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Server currently busy."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check for repeated API calls. May occur when calling again before previous result returned."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "303"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_UNKNOWN_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Common server request error."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Provide logs and called APIs for troubleshooting."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "304"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_GET_DNSLIST_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "SDK fails to get server configuration."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["If ", _jsx(_components.code, {
                children: "ChatOptions#enableDNSConfig"
              }), " is ", _jsx(_components.code, {
                children: "false"
              }), ", check server settings. Otherwise, likely network issue during ", _jsx(_components.code, {
                children: "dnsConfig"
              }), " request."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "305"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_SERVICE_RESTRICTED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "App is banned."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable Chat feature in console or contact support."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "400"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_NOT_FOUND"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File not found."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "For log files, retry. For attachments, file no longer exists and cannot be downloaded."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "401"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_INVALID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Select different file and retry upload."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "402"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_UPLOAD_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to upload file."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with API calls and logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "403"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_DOWNLOAD_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to download file."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check network or message expiration in logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "404"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_DELETE_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to delete existing log file."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check permissions for app log files or chat logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "405"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_TOO_LARGE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File exceeds size limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Select file under 10 MB or contact support to increase limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "406"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_CONTENT_IMPROPER"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File content inappropriate."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Select appropriate file and retry."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "407"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_IS_EXPIRED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File expired. Attachments stored for 7 days by default."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Contact support to increase storage time."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "500"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_INVALID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message invalid. Message object or ID empty, or sender ID inconsistent with login session."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify message construction, ID, sender, and body settings."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "501"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_INCLUDE_ILLEGAL_CONTENT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message contains inappropriate content."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "View blocking logs in console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "504"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_RECALL_TIME_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message recall timeout."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or contact support to extend the retractability time."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "505"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVICE_NOT_ENABLED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Feature not enabled."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable required functions in console based on API and log analysis."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "506"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_EXPIRED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group message read receipt period expired. Default validity is 3 days."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or contact support to extend the validity time."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "507"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_ILLEGAL_WHITELIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not on allow list when all members are muted."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or check if group-wide ban is enabled."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "508"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_EXTERNAL_LOGIC_BLOCKED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message blocked by app server filtering rule during pre-sending callback."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or check the pre-sending callback logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "510"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_SIZE_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message body exceeds limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or reduce the message length (max 5 KB by default)."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "511"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_EDIT_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to modify message."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "600"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_INVALID_ID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Invalid group ID."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify group ID parameter isn't null or disbanded."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "601"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_ALREADY_JOINED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already in chat group."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Handle as successful join."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "602"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_NOT_JOINED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not in chat group."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify group ID is for joined group that hasn't been disbanded."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "603"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_PERMISSION_DENIED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for group operation."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check API call permissions."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "604"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBERS_FULL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group member count reached limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or check if the maximum member count exceeds limit (default 200)."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "605"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_SHARED_FILE_INVALIDID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group shared file ID invalid."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Verify ", _jsx(_components.code, {
                children: "sharedFileId"
              }), " parameter isn't null."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "606"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_NOT_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat group doesn't exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify group ID is correct or not from disbanded group."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "607"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_DISABLED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat group is disabled."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt to request unblock from administrator."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "608"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_NAME_VIOLATION"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat group name invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if group name contains sensitive information."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "609"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBER_ATTRIBUTES_REACH_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Custom attributes length reached limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Total length for single group member cannot exceed 4 KB."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "610"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBER_ATTRIBUTES_UPDATE_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to set custom attributes."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with API calls and logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "611"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBER_ATTRIBUTES_KEY_REACH_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Custom attribute key exceeds 16 bytes."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if attribute key exceeds limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "612"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBER_ATTRIBUTES_VALUE_REACH_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Custom attribute value exceeds 512 bytes."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if attribute value exceeds limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "613"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_USER_IN_BLOCKLIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User is in group blacklist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or check console for blacklist status."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "700"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_INVALID_ID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Invalid chat room ID."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if chat room ID is empty."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "701"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_ALREADY_JOINED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already in chat room."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Handle as successful join."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "702"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_NOT_JOINED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not in chat room."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify chat room ID is correct, not disbanded, or previously joined."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "703"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_PERMISSION_DENIED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for chat room operation."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check API call permissions."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "704"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_MEMBERS_FULL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat room member count reached limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check maximum member count setting."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "705"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_NOT_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat room doesn't exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify chat room ID is correct, not disbanded, or previously joined."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "706"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_OWNER_NOT_ALLOW_LEAVE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat room owner not allowed to leave."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Check ", _jsx(_components.code, {
                children: "ChatOptions#allowChatroomOwnerLeave"
              }), " setting."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "707"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_USER_IN_BLOCKLIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User is in chat room blacklist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check console for chat room blacklist status."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "900"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USERINFO_USERCOUNT_EXCEED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User attribute retrieval count exceeds 100."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Get attributes in batches of up to 100 users."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "901"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USERINFO_DATALENGTH_EXCEED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User attributes too long. Maximum 2 KB per user or 10 GB per app."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check attribute length limits."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1000"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CONTACT_ADD_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to add contact."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with API calls and error description."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1001"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CONTACT_REACH_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Inviter reached maximum contacts limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or contact support to increase limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1002"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CONTACT_REACH_LIMIT_PEER"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Invitee reached maximum contacts limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or contact support to increase limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1100"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "PRESENCE_PARAM_LENGTH_EXCEED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Presence parameter length exceeds limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Presence details cannot exceed 64 bytes."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1101"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "PRESENCE_CANNOT_SUBSCRIBE_YOURSELF"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User cannot subscribe to own presence status."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if subscribed user ID is own ID."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1110"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TRANSLATE_PARAM_INVALID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Translation parameter error."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with debug logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1111"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TRANSLATE_SERVICE_NOT_ENABLE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Translation service not enabled."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable translation service in console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1112"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TRANSLATE_USAGE_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Translation usage reached limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Contact support to renew translation usage."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1113"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TRANSLATE_MESSAGE_FAIL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to translate message."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with debug logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1200"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MODERATION_FAILED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Third-party content moderation result is ", _jsx(_components.code, {
                children: "Rejected"
              }), "."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check content audit configuration and logs in console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1299"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "THIRD_SERVER_FAILED"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Non-third-party moderation service result is ", _jsx(_components.code, {
                children: "Rejected"
              }), "."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check content audit configuration and logs in console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1300"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REACTION_REACH_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message Reactions reached maximum allowed."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or contact support to increase limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1301"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REACTION_HAS_BEEN_OPERATED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already added this Reaction."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Handle as successful addition."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1302"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REACTION_OPERATION_IS_ILLEGAL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for Reaction operation."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify parameters with log analysis."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1400"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "THREAD_NOT_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Thread doesn't exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify subzone ID is correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1401"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "THREAD_ALREADY_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Thread already exists."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if subzone already created under incoming message."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1500"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "PUSH_NOT_SUPPORT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Third-party push service not supported."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check documentation for missing device vendors or contact support."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1501"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "PUSH_BIND_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to bind device with push token."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["After ", _jsx(_components.code, {
                children: "PushHelper#setPushListener"
              }), " is registered, check network and retry binding with ", _jsx(_components.code, {
                children: "PushManager#bindDeviceToken"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1502"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "PUSH_UNBIND_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to unbind device from push token."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["After ", _jsx(_components.code, {
                children: "PushHelper#setPushListener"
              }), " is registered, retry ", _jsx(_components.code, {
                children: "ChatClient#logout"
              }), " or call with parameter ", _jsx(_components.code, {
                children: "false"
              }), " (without unbinding)."]
            })]
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
      }), _jsx(_components.p, {
        children: "This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs."
      }), _jsxs(_components.p, {
        children: ["Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), " for assistance."]
      }), _jsxs(_components.p, {
        children: ["During the runtime of the Chat SDK, if a method call succeeds, the SDK returns ", _jsx(_components.code, {
          children: "nil"
        }), ". If it fails, the SDK returns one of the following error codes and error messages:"]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Error code"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Error message"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Possible reason"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Fix"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "0"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorNoError"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The operation succeeds."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "No action required."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorGeneral"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Default error related to the SDK or API requests. Occurs when SDK isn't properly initialized or a request fails without specific reason."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze logs and called APIs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "2"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorNetworkUnavailable"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "SDK disconnected from server due to network interruption."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Retry operation after network restoration."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "3"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorDatabaseOperationFailed"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Database operation fails."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Analyze called API with logs. Error occurs when updating non-existent messages with ", _jsx(_components.code, {
                children: "EMConversation#updateMessage"
              }), " or when database isn't open during operations."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "4"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorExceedServiceLimit"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Usage exceeds service limit, such as registered users or contacts exceeding current pricing plan limits."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Check API parameters. Control ", _jsx(_components.code, {
                children: "limit"
              }), " parameter values. For rate limiting, retry after delay."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "8"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatAppActiveNumbersReachLimitation"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "App reached maximum daily active users (DAU) or monthly active users (MAU)."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Upgrade Chat service in the console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "100"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorInvalidAppkey"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "App Key is invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Initialize with correct App Key."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "101"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorInvalidUsername"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User ID is invalid, such as empty string when adding a contact."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ensure user ID parameter is not empty."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "102"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorInvalidPassword"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Login password is empty or invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify password parameter is correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "104"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUsernameTooLong"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User ID is too long."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Log in with valid user ID. Verify token parameters are correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "105"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUsernameTooLong"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User ID exceeds 64 bytes limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check user ID length."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "108"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorTokenExpire"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Token has expired."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When callback is received, regenerate token and call ", _jsx(_components.code, {
                children: "login"
              }), " to log in again."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "109"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorTokeWillExpire"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Token passed half of its validity period."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When callback is received, regenerate token and call ", _jsx(_components.code, {
                children: "AgoraChatClient#renewToken"
              }), " to update."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "110"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorInvalidParam"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Invalid parameter."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify API parameters are valid."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "200"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserAlreadyLoginSame"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already logged in."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if SDK has automatic login enabled or if login method was already called."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "201"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserNotLogin"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not logged in. Session invalid or expired when attempting operations."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ensure Chat login completes before calling API."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "202"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserAuthenticationFailed"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User authentication fails due to invalid or expired token."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["If logged out, log in again. Otherwise, regenerate token and call ", _jsx(_components.code, {
                children: "AgoraChatClient#renewToken"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "203"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserAlreadyExist"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User ID specified during registration already exists."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Register with a different user ID or consider registration successful."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "204"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserNotFound"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User does not exist."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Verify ", _jsx(_components.code, {
                children: "userId"
              }), " parameter is correct."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "205"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserIllegalArgument"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Incorrect user parameter. User ID invalid or empty during registration or attribute updates."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify API parameters are correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "206"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserLoginOnAnotherDevice"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User logged in on another device. Forces logout on current device if multi-device service isn't enabled."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
              }), " is triggered, log in again."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "207"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserRemoved"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User account deleted in the console."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "AgoraChatClientDelegate#userAccountDidRemoveFromServer"
              }), " is triggered, return to login page. Account no longer available."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "209"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUpdateApnsConfigsFailed"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to update push configurations."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check error-reporting API, wait, then retry."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "210"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserPermissionDenied"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for operation. User on block list attempts to send messageUser tries to modify another user's messageUser tries to modify custom group member attribute set by anotherUser attempts to destroy message thread without proper permissions"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if user has operational privileges."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "211"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserBindDeviceTokenFailed"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to bind push token to device."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify token for device push binding isn't empty."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "213"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserBindAnotherDevice"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User logged in to another device in single-device login configuration."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Configure for multiple device login or use ", _jsx(_components.code, {
                children: "AgoraChatClient#kickDevice"
              }), " before logging in."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "214"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserLoginTooManyDevices"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User reached maximum number of login devices."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Increase allowed simultaneous devices or use ", _jsx(_components.code, {
                children: "AgoraChatClient#kickDevice"
              }), " before logging in."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "215"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserMuted"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User is muted in group or chat room."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Restrict message sending in UI for users who are banned."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "216"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserKickedByChangePassword"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User changed login password, ending current session."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "AgoraChatClientDelegate#userAccountDidForcedToLogout"
              }), " is received, call ", _jsx(_components.code, {
                children: "AgoraChatClient#logout"
              }), " and return to login page."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "217"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserKickedByOtherDevice"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User kicked off device via console or API call from another device."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "AgoraChatClientDelegate#userAccountDidForcedToLogout"
              }), " is received, call ", _jsx(_components.code, {
                children: "AgoraChatClient#logout"
              }), " and return to login page."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "218"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserAlreadyLoginAnother"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Another user already logged in on device."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Call ", _jsx(_components.code, {
                children: "AgoraChatClient#logout"
              }), " to log out current account before logging in with different account."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "219"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserMutedByAdmin"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User cannot send message when all members are muted."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Restrict message sending in UI when full ban is active."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "220"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserDeviceChanged"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Login attempt on device that isn't the last used device in single-device configuration."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "AgoraChatClientDelegate#userAccountDidLoginFromOtherDevice"
              }), " is received, call ", _jsx(_components.code, {
                children: "AgoraChatClient#logout"
              }), " and return to login page."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "221"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserNotOnRoster"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User cannot send message to non-contact when contacts-only messaging is enabled."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Call ", _jsx(_components.code, {
                children: "AgoraChatContactManager#addContact"
              }), " first. Send messages after friend request is accepted."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "300"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorServerNotReachable"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Server unreachable due to network issues."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "For login errors, try switching networks or contact support for TLS encryption in specific regions. For other operations, switch networks or retry after delay."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "301"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorServerTimeout"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Request timeout when server doesn't respond within specified period."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Retry API after switching networks or waiting."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "302"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorServerBusy"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Server currently busy."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check for repeated API calls. May occur when calling again before previous result is returned."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "303"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorServerUnknownError"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Common server request error."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Provide logs and called APIs for troubleshooting."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "304"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorServerGetDNSConfigFailed"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "SDK fails to get server configuration."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["If ", _jsx(_components.code, {
                children: "AgoraChatOptions#enableDnsConfig"
              }), " is ", _jsx(_components.code, {
                children: "No"
              }), ", check server settings. Otherwise, likely network issue during ", _jsx(_components.code, {
                children: "dnsConfig"
              }), " request."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "305"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorServerServingForbidden"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "App is banned."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable Chat feature in console or contact support."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "400"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorFileNotFound"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File not found."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "For log files, retry. For attachments, file no longer exists and cannot be downloaded."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "401"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorFileInvalid"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Select different file and retry upload."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "402"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorFileUploadFailed"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to upload file."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with API calls and logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "403"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorFileDownloadFailed"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to download file."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check network or message expiration in logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "404"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorFileDeleteFailed"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to delete existing log file."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check permissions for app log files or chat logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "405"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorFileTooLarge"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File exceeds size limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Select file under 10 MB or contact support to increase limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "406"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorFileContentImproper"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File content inappropriate."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Select appropriate file and retry."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "407"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorFileExpired"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File expired. Attachments stored for 7 days by default."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Contact support to increase storage time."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "500"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorMessageInvalid"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message invalid. Message object or ID empty, or sender ID inconsistent with login session."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify message construction, ID, sender, and body settings meet requirements."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "504"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorMessageRecallTimeLimit"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message recall timeout."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or contact support to extend the retractability time."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "505"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorServiceNotEnable"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Feature not enabled."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable required features in console based on API and log analysis."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "506"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorMessageExpired"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group message read receipt period expired. Default validity is 3 days."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or contact support to extend the validity time."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "507"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorMessageIllegalWhiteList"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not on allow list when all members are muted."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or check if group-wide ban is enabled."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "508"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorMessageExternalLogicBlocked"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message blocked by app server filtering rule during pre-sending callback."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or check the pre-sending callback logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "510"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorMessageSizeLimit"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message body exceeds limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or reduce the message length (max 5 KB by default)."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "511"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorEditFailed"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to modify message."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "600"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorGroupInvalidId"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Invalid group ID."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify group ID parameter isn't null or disbanded."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "601"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorGroupAlreadyJoined"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already in chat group."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Handle as successful join."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "602"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorGroupNotJoined"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not in chat group."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify group ID is for joined group that hasn't been disbanded."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "603"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorGroupPermissionDenied"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for group operation."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check API call permissions."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "604"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorGroupMembersFull"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group member count reached limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or check if the maximum member count exceeds limit (default 200)."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "605"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorGroupSharedFileInvalidId"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group shared file ID is empty."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Verify ", _jsx(_components.code, {
                children: "sharedFileId"
              }), " parameter isn't null."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "606"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorGroupNotExist"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat group doesn't exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify group ID is correct or not from disbanded group."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "607"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorGroupDisabled"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat group is disabled."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt to request unblock from administrator."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "608"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorGroupNameViolation"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat group name is invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if group name contains sensitive information."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "609"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorGroupMemberAttributesReachLimit"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Custom attributes size reached limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Total length for single group member cannot exceed 4 KB."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "610"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorGroupMemberAttributesUpdateFailed"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to set custom attributes."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with API calls and logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "611"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorGroupMemberAttributesKeyReachLimit"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Custom attribute key exceeds 16 bytes."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if attribute key exceeds limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "612"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorGroupMemberAttributesValueReachLimit"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Custom attribute value exceeds 512 bytes."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if attribute value exceeds limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "700"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorChatroomInvalidId"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Invalid chat room ID."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if chat room ID is empty."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "701"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorChatroomAlreadyJoined"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already in chat room."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Handle as successful join."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "702"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorChatroomNotJoined"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not in chat room."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify chat room ID is correct, not disbanded, or previously joined."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "703"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorChatroomPermissionDenied"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for chat room operation."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check API call permissions."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "704"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorChatroomMembersFull"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat room member count reached limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check maximum member count setting."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "705"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorChatroomNotExist"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat room doesn't exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify chat room ID is correct, not disbanded, or previously joined."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "706"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorChatroomOwnerNotAllowLeave"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat room owner not allowed to leave."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Check ", _jsx(_components.code, {
                children: "AgoraChatOptions#allowChatroomOwnerLeave"
              }), " setting."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "707"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "EMErrorChatroomUserInBlockList"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User is in chat room blacklist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check console for chat room blacklist status."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "900"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserCountExceed"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User attribute retrieval count exceeds 100."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Get attributes in batches of up to 100 users."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "901"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorUserInfoDataLengthExceed"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User attributes too long. Maximum 2 KB per user or 10 GB per app."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check attribute length limits."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1000"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorContactAddFailed"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to add contact."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with API calls and error description."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1001"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorContactReachLimit"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Inviter reached maximum contacts limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or contact support to increase limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1002"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorContactReachLimitPeer"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Invitee reached maximum contacts limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or contact support to increase limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1100"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorPresenceParamExceed"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Presence parameter length exceeds limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Online status details cannot exceed 64 bytes."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1101"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorPresenceCannotSubscribeSelf"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User cannot subscribe to own presence status."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if subscribed user ID is own ID."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1110"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorTranslateParamError"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Translation parameter error."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with debug logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1111"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorTranslateServiceNotEnabled"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Translation service not enabled."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable translation service in console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1112"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorTranslateUsageLimit"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Translation usage reached limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Contact support to renew translation usage."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1113"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorTranslateServiceFail"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to translate message."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with debug logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1200"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorModerationFailed"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Third-party content moderation result is ", _jsx(_components.code, {
                children: "Rejected"
              }), "."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check content audit configuration and logs in console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1299"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorThirdServiceFailed"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Non-third-party moderation service result is ", _jsx(_components.code, {
                children: "Rejected"
              }), "."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check content audit configuration and logs in console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1300"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorReactionReachLimit"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message Reactions reached maximum allowed."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or contact support to increase limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1301"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorReactionHasBeenOperated"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already added this Reaction."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Handle as successful addition."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1302"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorReactionOperationIsIllegal"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for Reaction operation."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify parameters with log analysis."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1400"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorThreadNotExist"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Thread doesn't exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify subzone ID is correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1401"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraChatErrorThreadAlreadyExist"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Thread already exists."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if subzone is already created under incoming message."
            })]
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
      }), _jsx(_components.p, {
        children: "This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs."
      }), _jsxs(_components.p, {
        children: ["Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), " for assistance."]
      }), _jsx(_components.p, {
        children: "You may receive an error code and error message in one of the following ways:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "As the return value when a method call fails."
        }), `
`, _jsxs(_components.li, {
          children: ["As the error code reported through the ", _jsx(_components.code, {
            children: "onError"
          }), " callback. Register the callback using the ", _jsx(_components.code, {
            children: "addEventListener"
          }), " method."]
        }), `
`]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Error code"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Error message"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Possible reason"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Fix"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "0"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REQUEST_SUCCESS"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The operation succeeds."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "No action required."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "-1"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REQUEST_TIMEOUT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Request times out."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Retry or prompt for request timeout."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "-2"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REQUEST_UNKNOWN"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Unidentified error occurs."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Prompt that request failed."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "-3"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REQUEST_PARAMETER_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Request parameters are invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify parameters are correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "-4"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REQUEST_ABORT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Request is aborted."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Cancel the request."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_CONNCTION_OPEN_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Request to retrieve token fails."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check for parameter error, already logged in status, or import request failure based on error message."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "2"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_CONNCTION_AUTH_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "App Key is invalid. SDK fails to verify App Key."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify App Key is initialized correctly, user is logged in, and login token is valid."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "16"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_CONNCTION_DISCONNECTED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "WebSocket disconnected due to network issues."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Prompt that connection is disconnected."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "17"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_CONNCTION_AJAX_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Common error for server requests."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Determine cause of current operation failure from error message."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "27"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "App Key incorrect or not set during login."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set correct App Key."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "28"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User fails to pass user token for login."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ensure successful login."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "31"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_CONNCTION_CALLBACK_INNER_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Internal error in message sending callback."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Check for errors in callback functions, such as in ", _jsx(_components.code, {
                children: "onTextMessage"
              }), " message processing."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "39"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_CONNECTION_CLOSED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User logged out or not logged in attempts to send message."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Log in before sending messages."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "40"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_CONNECTION_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User authentication fails."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Prompt that connection is disconnected."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "50"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MAX_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Usage exceeds service limit. Reactions, DAU, or MAU exceed upper limits."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Identify which service reached upper limit and limit accordingly."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "51"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_NOT_FOUND"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message not found, such as when reporting."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Prompt that original message wasn't found."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "52"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "NO_PERMISSION"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for operation."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Indicate user doesn't have permission for operation."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "53"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "OPERATION_UNSUPPORTED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Current operation not supported."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Prompt that operation isn't supported."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "55"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "LOCAL_DB_OPERATION_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Database operation fails."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check database connection and permissions."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "101"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_UPLOADFILE_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to upload file. File may exceed size limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: 'Show "Send Failed" when attachment message upload fails.'
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "102"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_UPLOADFILE_NO_LOGIN"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User token not included in file upload request."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ensure user is logged in before uploading."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "200"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_DOWNLOADFILE_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to download file due to timeout or network failure."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Prompt to retry."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "204"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_NOT_FOUND"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not found, such as when inviting to join group."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify User ID parameter is correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "205"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_PARAMETER_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message parameter error, such as missing message ID during recall."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Ensure message contains message ID (", _jsx(_components.code, {
                children: "id"
              }), ") and recipient's user ID (", _jsx(_components.code, {
                children: "to"
              }), ")."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "206"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User logged in on another device. Forces logout if multi-device service isn't enabled."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable multi-device function. See Multiple Device Login documentation."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "207"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_CONNCTION_USER_REMOVED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User account deleted in console."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Inform user that account has been canceled."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "208"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_USER_ALREADY_LOGIN"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already logged in and attempting to log in again."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Notify that repeated logins aren't possible."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "216"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User changed login password, ending current session."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Prompt that password has changed and user must log in again."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "217"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User kicked off device via console or API call from another device."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Notify user of being kicked offline."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "219"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_MUTED_BY_ADMIN"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User muted globally and cannot send messages."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Inform user they have been banned."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "221"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_NOT_FRIEND"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User cannot send message to non-contact when contacts-only messaging enabled."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Prompt that recipient isn't user's friend/contact."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "500"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_BUSY"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Server is busy."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Prompt that service is busy and to try again."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "501"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_INCLUDE_ILLEGAL_CONTENT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message contains inappropriate content detected by filtering system."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Alert that message failed to send due to non-compliant content or sensitive words."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "502"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_EXTERNAL_LOGIC_BLOCKED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message intercepted by anti-spam service."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Prompt that message failed to send."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "503"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_UNKNOWN_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "SDK fails to send message due to unknown error."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Prompt that message failed to send."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "504"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_RECALL_TIME_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message recall timeout."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Notify user that retractable time limit has been exceeded."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "505"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVICE_NOT_ENABLED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Feature not enabled. Requires console activation or support contact."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable function according to error message."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "506"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVICE_NOT_ALLOW_MESSAGING"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not on group/chat room allow list when all members are muted."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Inform user that current group/chat room has message restrictions."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "507"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVICE_NOT_ALLOW_MESSAGING_MUTE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User is muted in group or chat room."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Inform user they have been banned."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "508"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_MODERATION_BLOCKED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Third-party content moderation service rejected message."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Prompt that message delivery failed due to non-compliant content."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "510"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_WEBSOCKET_DISCONNECTED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to send message due to network disconnection or reconnection failure."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Prompt that message failed to send."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "511"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_SIZE_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message body exceeds upper limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Alert that message is too large."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "512"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_SEND_TIMEOUT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Send message timeout. Connection disconnected while sending."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Notify of send timeout."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "601"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_ALREADY_JOINED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already in chat group."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify invited users aren't already in group to avoid duplicate invitations."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "602"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_NOT_JOINED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not in chat group when attempting operations."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ensure user is in group before performing operations."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "603"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "PERMISSION_DENIED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for group operation."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Indicate user doesn't have required permission."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "604"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "WEBIM_LOAD_MSG_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Internal error in message callback."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify message is formatted correctly as parsing failed."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "605"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_NOT_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group ID doesn't exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify group or chat room ID is correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "606"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBERS_FULL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group member count reached upper limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Indicate maximum group size has been reached."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "607"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBERS_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Maximum group member count exceeds pricing plan limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Limit maximum members according to subscription package."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "609"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBER_ATTRIBUTES_SET_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to set custom attributes for group member."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Prompt that setup failed and to try again."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "700"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REST_PARAMS_STATUS"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to call API due to missing/incorrect token or App Key."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set App Key correctly."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "702"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_NOT_JOINED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not in chat room when attempting operations."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Indicate user isn't in current chat room."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "704"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_MEMBERS_FULL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat room member count reached upper limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Indicate chat room is at capacity."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "705"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_NOT_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat room doesn't exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify chat room ID is correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "999"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SDK_RUNTIME_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "WebSocket error during message sending."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Prompt login failure and suggest logging in again."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1100"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "PRESENCE_PARAM_EXCEED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Presence parameter length exceeds limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Keep custom online status under 1024 bytes."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1101"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REACTION_ALREADY_ADDED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already added this Reaction."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Avoid adding duplicate Reactions for same user."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1102"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REACTION_CREATING"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Reaction being created by another user simultaneously."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Indicate another user is creating a Reaction."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1103"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REACTION_OPERATION_IS_ILLEGAL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for Reaction operation."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ensure users operate Reactions correctly with proper permissions."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1200"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TRANSLATION_NOT_VALID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Language code is invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify correct language code when using translation."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1201"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TRANSLATION_TEXT_TOO_LONG"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Source text length exceeds translation limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Alert that file is too large for translation."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1204"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TRANSLATION_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to translate message."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Notify of translation failure."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1300"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "THREAD_NOT_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Thread doesn't exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify subzone ID is correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1301"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "THREAD_ALREADY_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Thread already exists."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Notify that subdivision already exists and cannot be created again."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1302"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MODIFY_MESSAGE_NOT_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message to modify doesn't exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify message ID is correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1304"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MODIFY_MESSAGE_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to modify message."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Inform user that message modification failed."
            })]
          })]
        })]
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
        children: "Refer to the error codes for Android and iOS."
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
        children: "This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs."
      }), _jsxs(_components.p, {
        children: ["Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), " for assistance."]
      }), _jsx(_components.p, {
        children: "During runtime of the Agora Chat SDK, you may receive an error code and error message in one of the following ways:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "As the return value when a method call fails."
        }), `
`, _jsxs(_components.li, {
          children: ["As the error code reported through the ", _jsx(_components.code, {
            children: "onError"
          }), " callback."]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["For example, when a user registration request fails because the username already exists, the ", _jsx(_components.code, {
          children: "onError"
        }), " callback returns the following error code and error message:"]
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SDKClient.Instance."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Login"
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
                children: "    username,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    passwd,"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "    callback"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": "
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
                children: "("
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "        onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": () "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        },"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "        onError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "code"
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
                children: "desc"
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
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            // code: 203"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            // desc: USER_ALREADY_EXIST"
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
                children: "    )"
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
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Error code"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Error message"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Error description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Fix"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "0"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "EM_NO_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The operation succeeds."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "No action required."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GENERAL_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The SDK is not properly initialized, or the server cannot identify this error."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze logs and called APIs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "2"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "NETWORK_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "SDK disconnected from server due to network interruption."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Retry operation after network restoration."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "3"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "DATABASE_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Database operation fails."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Analyze called API with logs. Error occurs when updating non-existent messages with ", _jsx(_components.code, {
                children: "Conversation#UpdateMessage"
              }), " or when database isn't open during operations."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "4"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "EXCEED_SERVICE_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Usage exceeds service limit, such as registered users exceeding current pricing plan limits."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Check API parameters. Control ", _jsx(_components.code, {
                children: "limit"
              }), " parameter values. For rate limiting, retry after delay."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "8"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "APP_ACTIVE_NUMBER_REACH_LIMITATION"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "App reached maximum daily active users (DAU) or monthly active users (MAU)."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Upgrade Chat service in the console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "100"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "INVALID_APP_KEY"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "App Key is invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Initialize with correct App Key."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "101"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "INVALID_USER_NAME"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User ID is invalid, such as empty string when adding a contact."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ensure user ID parameter is not null."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "102"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "INVALID_PASSWORD"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Login password is empty or invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify password parameter is correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "103"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "INVALID_URL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "URL is incorrect."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify API parameters are correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "104"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "INVALID_TOKEN"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Login token is empty or invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify token parameters are correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "105"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_NAME_TOO_LONG"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User ID exceeds 64 bytes limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check user ID length."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "108"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TOKEN_EXPIRED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Token has expired."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When callback is received, regenerate token and call ", _jsx(_components.code, {
                children: "login"
              }), " to log in again."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "109"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TOKEN_WILL_EXPIRE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Token passed half of its validity period."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When callback is received, regenerate token and call ", _jsx(_components.code, {
                children: "SDKClient#RenewToken"
              }), " to update."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "200"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_ALREADY_LOGIN"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already logged in."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if SDK has automatic login enabled or if login method was already called."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "201"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_NOT_LOGIN"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Login session invalid or expired when attempting operations."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ensure Chat login completes before calling API."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "202"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_AUTHENTICATION_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User authentication fails due to invalid or expired token."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["If logged out, log in again. Otherwise, regenerate token and call ", _jsx(_components.code, {
                children: "SDKClient#RenewToken"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "203"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_ALREADY_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User ID specified during registration already exists."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Register with a different user ID or consider registration successful."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "204"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_NOT_FOUND"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User does not exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify user ID parameter is correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "205"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_ILLEGAL_ARGUMENT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Incorrect user parameter. User ID invalid or empty during registration or attribute updates."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify API parameters are correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "206"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_LOGIN_ANOTHER_DEVICE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User logged in on another device. Forces logout on current device if multi-device service isn't enabled."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "IConnectionDelegate#OnLoggedOtherDevice"
              }), " is triggered, log in again."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "207"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_REMOVED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User account deleted in the backend."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "IConnectionDelegate#OnRemovedFromServer"
              }), " is triggered, return to login page. Account no longer available."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "208"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_REG_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User account registration fails because registration is closed."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Register account with business server instead of using SDK."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "210"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_PERMISSION_DENIED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for operation. User on block list attempts to send messageUser tries to modify another user's messageUser tries to modify custom group member attribute set by anotherUser attempts to destroy message thread without proper permissions"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if user has operational privileges."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "213"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_BIND_ANOTHER_DEVICE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User logged in to another device in single-device login configuration."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Configure for multiple device login or use ", _jsx(_components.code, {
                children: "SDKClient#KickDevice"
              }), " before logging in."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "214"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_LOGIN_TOO_MANY_DEVICES"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User reached maximum number of login devices."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Increase allowed simultaneous devices or use ", _jsx(_components.code, {
                children: "SDKClient#KickDevice"
              }), " before logging in."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "215"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_MUTED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User is muted in group or chat room."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Restrict message sending in UI for users who are banned."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "216"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_KICKED_BY_CHANGE_PASSWORD"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User changed login password, ending current session."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "IConnectionDelegate#OnChangedIMPwd"
              }), " is received, call ", _jsx(_components.code, {
                children: "SDKClient#Logout"
              }), " and return to login page."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "217"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_KICKED_BY_OTHER_DEVICE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User kicked off device via console or API call from another device."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "IConnectionDelegate#OnKickedByOtherDevice"
              }), " is received, call ", _jsx(_components.code, {
                children: "SDKClient#Logout"
              }), " and return to login page."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "218"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_ALREADY_LOGIN_ANOTHER"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Another user already logged in on device."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Call ", _jsx(_components.code, {
                children: "SDKClient#Logout"
              }), " to log out current account before logging in with different account."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "219"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_MUTED_BY_ADMIN"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User cannot send message when all members are muted."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Restrict message sending in UI when full ban is active."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "220"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_DEVICE_CHANGED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Login attempt on device that isn't the last used device in single-device configuration."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "IConnectionDelegate#OnLoggedOtherDevice"
              }), " is received, call ", _jsx(_components.code, {
                children: "Client#Logout"
              }), " and return to login page."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "221"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_NOT_FRIEND"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User cannot send message to non-contact when contacts-only messaging is enabled."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Call ", _jsx(_components.code, {
                children: "ContactManager#AddContact"
              }), " first. Send messages after friend request is accepted."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "300"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_NOT_REACHABLE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Server unreachable due to network issues."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "For login errors, try switching networks or contact support for TLS encryption in specific regions. For other operations, switch networks or retry after delay."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "301"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_TIMEOUT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Request timeout when server doesn't respond within specified period."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Retry API after switching networks or waiting."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "302"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_BUSY"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Server currently busy."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check for repeated API calls. May occur when calling again before previous result is returned."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "303"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_UNKNOWN_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Common server request error."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Provide logs and called APIs for troubleshooting."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "304"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_GET_DNSLIST_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "SDK fails to retrieve DNS server information."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["If ", _jsx(_components.code, {
                children: "Options#EnableDNSConfig"
              }), " is ", _jsx(_components.code, {
                children: "No"
              }), ", check server settings. Otherwise, likely network issue during ", _jsx(_components.code, {
                children: "dnsConfig"
              }), " request."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "305"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_SERVICE_RESTRICTED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "App server is restricted."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable Chat feature in console or contact support."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "400"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_NOT_FOUND"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File not found."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "For log files, retry. For attachments, file no longer exists and cannot be downloaded."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "401"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_INVALID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Select different file and retry upload."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "402"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_UPLOAD_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to upload file."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with API calls and logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "403"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_DOWNLOAD_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to download file."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check network or message expiration in logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "404"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_DELETE_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to delete existing log file."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check permissions for app log files."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "405"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_TOO_LARGE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File exceeds size limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Select file under 10 MB or contact support to increase limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "406"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_CONTENT_IMPROPER"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File content inappropriate."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Select appropriate file and retry."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "407"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_IS_EXPIRED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File expired. Attachments stored for 7 days by default."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Contact support to increase storage time."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "500"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_INVALID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message invalid. Message body or ID empty, or sender ID inconsistent with login session."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify message construction, ID, sender, and body settings meet requirements."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "501"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_INCLUDE_ILLEGAL_CONTENT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message contains illegal content."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "View blocking logs in console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "504"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_RECALL_TIME_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message recall timeout."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or contact support to extend the retractability time."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "505"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVICE_NOT_ENABLED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Feature not enabled."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable required features in console based on API and log analysis."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "506"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_EXPIRED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group receipt period expired. Default validity is 3 days."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or contact support to extend the validity time."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "507"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_ILLEGAL_WHITELIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not on allow list when all members are muted."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or check if group-wide ban is enabled."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "508"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_EXTERNAL_LOGIC_BLOCKED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message blocked by app server filtering rule."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or check the pre-sending callback logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "510"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_SIZE_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message body exceeds limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or reduce the message length (max 5 KB by default)."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "600"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_INVALID_ID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group ID is invalid or empty."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify group ID parameter isn't empty or disbanded."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "601"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_ALREADY_JOINED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already in chat group."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Handle as successful join."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "602"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_NOT_JOINED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not in chat group."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify group ID is for joined group that hasn't been disbanded."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "603"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_PERMISSION_DENIED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for group operation."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check API call permissions."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "604"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBERS_FULL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group member count reached limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or check if the maximum member count exceeds limit (default 200)."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "605"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_NOT_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat group doesn't exist."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Verify ", _jsx(_components.code, {
                children: "sharedFileId"
              }), " parameter isn't null."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "606"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_NOT_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group doesn't exist. Operation attempted on non-existing group."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify group ID is correct or not from disbanded group."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "607"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_DISABLED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Groups are disabled."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt to request unblock from administrator."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "608"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_NAME_VIOLATION"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group name is invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if group name contains sensitive information."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "609"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBER_ATTRIBUTES_REACH_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Custom attributes count reached limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Total length for single group member cannot exceed 4 KB."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "610"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBER_ATTRIBUTES_UPDATE_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to set custom attributes."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with API calls and logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "611"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBER_ATTRIBUTES_KEY_REACH_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Custom attribute key exceeds 16 bytes."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if attribute key exceeds limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "612"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBER_ATTRIBUTES_VALUE_REACH_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Custom attribute value exceeds 512 bytes."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if attribute value exceeds limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "613"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_USER_IN_BLOCKLIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User is in group blacklist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or check console for blacklist status."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "700"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_INVALID_ID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat room ID is invalid or empty."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if chat room ID is empty."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "701"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_ALREADY_JOINED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already in chat room."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Handle as successful join."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "702"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_NOT_JOINED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not in chat room."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify chat room ID is correct, not disbanded, or previously joined."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "703"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_PERMISSION_DENIED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for chat room operation."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check API call permissions."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "704"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_MEMBERS_FULL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat room member count reached limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check maximum member count setting."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "705"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_NOT_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat room doesn't exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify chat room ID is correct, not disbanded, or previously joined."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "706"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_OWNER_NOT_ALLOW_LEAVE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat room owner not allowed to leave."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Check ", _jsx(_components.code, {
                children: "Options#IsRoomOwnerLeaveAllowed"
              }), " setting when SDK is initialized."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "707"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_USER_IN_BLOCKLIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User is in chat room blacklist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check console for chat room blacklist status."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "900"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "PUSH_NOT_SUPPORT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Third-party push service not supported on current device."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Get user attributes in batches of up to 100 users."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "901"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "PUSH_BIND_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to upload third-party push service token to server."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check attribute length limits."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1000"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CONTACT_ADD_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to add contact."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with API calls and error description."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1001"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CONTACT_REACH_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Inviter reached maximum contacts limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or contact support to increase limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1002"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CONTACT_REACH_LIMIT_PEER"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Invitee reached maximum contacts limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or contact support to increase limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1100"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "PRESENCE_PARAM_LENGTH_EXCEED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Presence parameter length exceeds limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Online status details cannot exceed 64 bytes."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1101"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "PRESENCE_CANNOT_SUBSCRIBE_YOURSELF"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User cannot subscribe to own status."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if subscribed user ID is own ID."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1110"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TRANSLATE_PARAM_INVALID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Translation parameter error."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with debug logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1111"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TRANSLATE_SERVICE_NOT_ENABLE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Translation service not enabled."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable translation service in console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1112"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TRANSLATE_USAGE_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Translation usage reached limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Contact support to renew translation usage."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1113"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TRANSLATE_MESSAGE_FAIL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to translate message."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with debug logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1200"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "THIRD_MODERATION_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: 'Third-party content moderation result is "Reject".'
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check content audit configuration and logs in console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1299"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "THIRD_DEFAULT_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: 'Non-third-party moderation service result is "Reject".'
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check content audit configuration and logs in console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1300"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REACTION_REACH_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message Reactions reached maximum allowed."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or contact support to increase limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1301"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REACTION_HAS_BEEN_OPERATED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already added this Reaction."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Handle as successful addition."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1302"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REACTION_OPERATION_IS_ILLEGAL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for Reaction operation."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify parameters with log analysis."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1400"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "THREAD_NOT_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Thread doesn't exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify subzone ID is correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1401"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "THREAD_ALREADY_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Thread already exists under this message ID."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if subzone already created under incoming message."
            })]
          })]
        })]
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
        children: "This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs."
      }), _jsxs(_components.p, {
        children: ["Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), " for assistance."]
      }), _jsx(_components.p, {
        children: "During runtime of the Agora Chat SDK, you may receive an error code and error message in one of the following ways:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "As the return value when a method call fails."
        }), `
`, _jsxs(_components.li, {
          children: ["As the error code reported through the ", _jsx(_components.code, {
            children: "onError"
          }), " callback."]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["For example, when a user registration request fails because the username already exists, the ", _jsx(_components.code, {
          children: "onError"
        }), " callback returns the following error code and error message:"]
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SDKClient.Instance."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Login"
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
                children: "    username,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    passwd,"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "    callback"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": "
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
                children: "("
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "        onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": () "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        },"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "        onError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "code"
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
                children: "desc"
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
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            // code: 203"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            // desc: USER_ALREADY_EXIST"
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
                children: "    )"
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
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Error code"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Error message"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Error description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Fix"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "0"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "EM_NO_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The operation succeeds."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "No action required."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GENERAL_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The SDK is not properly initialized, or the server cannot identify this error."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze logs and called APIs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "2"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "NETWORK_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "SDK disconnected from server due to network interruption."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Retry operation after network restoration."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "3"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "DATABASE_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Database operation fails."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Analyze called API with logs. Error occurs when updating non-existent messages with ", _jsx(_components.code, {
                children: "Conversation#UpdateMessage"
              }), " or when database isn't open during operations."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "4"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "EXCEED_SERVICE_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Usage exceeds service limit, such as registered users exceeding current pricing plan limits."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Check API parameters. Control ", _jsx(_components.code, {
                children: "limit"
              }), " parameter values. For rate limiting, retry after delay."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "8"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "APP_ACTIVE_NUMBER_REACH_LIMITATION"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "App reached maximum daily active users (DAU) or monthly active users (MAU)."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Upgrade Chat service in the console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "100"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "INVALID_APP_KEY"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "App Key is invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Initialize with correct App Key."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "101"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "INVALID_USER_NAME"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User ID is invalid, such as empty string when adding a contact."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ensure user ID parameter is not null."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "102"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "INVALID_PASSWORD"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Login password is empty or invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify password parameter is correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "103"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "INVALID_URL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "URL is incorrect."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify API parameters are correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "104"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "INVALID_TOKEN"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Login token is empty or invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify token parameters are correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "105"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_NAME_TOO_LONG"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User ID exceeds 64 bytes limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check user ID length."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "108"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TOKEN_EXPIRED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Token has expired."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When callback is received, regenerate token and call ", _jsx(_components.code, {
                children: "login"
              }), " to log in again."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "109"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TOKEN_WILL_EXPIRE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Token passed half of its validity period."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When callback is received, regenerate token and call ", _jsx(_components.code, {
                children: "SDKClient#RenewToken"
              }), " to update."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "200"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_ALREADY_LOGIN"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already logged in."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if SDK has automatic login enabled or if login method was already called."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "201"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_NOT_LOGIN"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Login session invalid or expired when attempting operations."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Ensure Chat login completes before calling API."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "202"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_AUTHENTICATION_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User authentication fails due to invalid or expired token."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["If logged out, log in again. Otherwise, regenerate token and call ", _jsx(_components.code, {
                children: "SDKClient#RenewToken"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "203"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_ALREADY_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User ID specified during registration already exists."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Register with a different user ID or consider registration successful."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "204"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_NOT_FOUND"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User does not exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify user ID parameter is correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "205"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_ILLEGAL_ARGUMENT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Incorrect user parameter. User ID invalid or empty during registration or attribute updates."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify API parameters are correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "206"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_LOGIN_ANOTHER_DEVICE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User logged in on another device. Forces logout on current device if multi-device service isn't enabled."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "IConnectionDelegate#OnLoggedOtherDevice"
              }), " is triggered, log in again."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "207"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_REMOVED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User account deleted in the backend."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "IConnectionDelegate#OnRemovedFromServer"
              }), " is triggered, return to login page. Account no longer available."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "208"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_REG_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User account registration fails because registration is closed."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Register account with business server instead of using SDK."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "210"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_PERMISSION_DENIED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for operation. User on block list attempts to send messageUser tries to modify another user's messageUser tries to modify custom group member attribute set by anotherUser attempts to destroy message thread without proper permissions"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if user has operational privileges."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "213"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_BIND_ANOTHER_DEVICE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User logged in to another device in single-device login configuration."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Configure for multiple device login or use ", _jsx(_components.code, {
                children: "SDKClient#KickDevice"
              }), " before logging in."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "214"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_LOGIN_TOO_MANY_DEVICES"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User reached maximum number of login devices."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Increase allowed simultaneous devices or use ", _jsx(_components.code, {
                children: "SDKClient#KickDevice"
              }), " before logging in."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "215"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_MUTED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User is muted in group or chat room."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Restrict message sending in UI for users who are banned."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "216"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_KICKED_BY_CHANGE_PASSWORD"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User changed login password, ending current session."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "IConnectionDelegate#OnChangedIMPwd"
              }), " is received, call ", _jsx(_components.code, {
                children: "SDKClient#Logout"
              }), " and return to login page."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "217"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_KICKED_BY_OTHER_DEVICE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User kicked off device via console or API call from another device."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "IConnectionDelegate#OnKickedByOtherDevice"
              }), " is received, call ", _jsx(_components.code, {
                children: "SDKClient#Logout"
              }), " and return to login page."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "218"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_ALREADY_LOGIN_ANOTHER"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Another user already logged in on device."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Call ", _jsx(_components.code, {
                children: "SDKClient#Logout"
              }), " to log out current account before logging in with different account."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "219"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_MUTED_BY_ADMIN"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User cannot send message when all members are muted."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Restrict message sending in UI when full ban is active."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "220"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_DEVICE_CHANGED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Login attempt on device that isn't the last used device in single-device configuration."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["When ", _jsx(_components.code, {
                children: "IConnectionDelegate#OnLoggedOtherDevice"
              }), " is received, call ", _jsx(_components.code, {
                children: "Client#Logout"
              }), " and return to login page."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "221"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "USER_NOT_FRIEND"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User cannot send message to non-contact when contacts-only messaging is enabled."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Call ", _jsx(_components.code, {
                children: "ContactManager#AddContact"
              }), " first. Send messages after friend request is accepted."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "300"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_NOT_REACHABLE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Server unreachable due to network issues."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "For login errors, try switching networks or contact support for TLS encryption in specific regions. For other operations, switch networks or retry after delay."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "301"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_TIMEOUT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Request timeout when server doesn't respond within specified period."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Retry API after switching networks or waiting."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "302"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_BUSY"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Server currently busy."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check for repeated API calls. May occur when calling again before previous result is returned."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "303"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_UNKNOWN_ERROR"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Common server request error."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Provide logs and called APIs for troubleshooting."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "304"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_GET_DNSLIST_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "SDK fails to retrieve DNS server information."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["If ", _jsx(_components.code, {
                children: "Options#EnableDNSConfig"
              }), " is ", _jsx(_components.code, {
                children: "No"
              }), ", check server settings. Otherwise, likely network issue during ", _jsx(_components.code, {
                children: "dnsConfig"
              }), " request."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "305"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVER_SERVICE_RESTRICTED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "App server is restricted."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable Chat feature in console or contact support."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "400"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_NOT_FOUND"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File not found."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "For log files, retry. For attachments, file no longer exists and cannot be downloaded."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "401"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_INVALID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Select different file and retry upload."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "402"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_UPLOAD_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to upload file."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with API calls and logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "403"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_DOWNLOAD_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to download file."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check network or message expiration in logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "404"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_DELETE_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to delete existing log file."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check permissions for app log files."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "405"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_TOO_LARGE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File exceeds size limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Select file under 10 MB or contact support to increase limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "406"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_CONTENT_IMPROPER"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File content inappropriate."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Select appropriate file and retry."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "407"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "FILE_IS_EXPIRED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File expired. Attachments stored for 7 days by default."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Contact support to increase storage time."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "500"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_INVALID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message invalid. Message body or ID empty, or sender ID inconsistent with login session."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify message construction, ID, sender, and body settings meet requirements."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "501"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_INCLUDE_ILLEGAL_CONTENT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message contains illegal content."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "View blocking logs in console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "504"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_RECALL_TIME_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message recall timeout."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or contact support to extend the retractability time."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "505"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "SERVICE_NOT_ENABLED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Feature not enabled."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable required features in console based on API and log analysis."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "506"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_EXPIRED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group receipt period expired. Default validity is 3 days."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or contact support to extend the validity time."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "507"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_ILLEGAL_WHITELIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not on allow list when all members are muted."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or check if group-wide ban is enabled."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "508"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_EXTERNAL_LOGIC_BLOCKED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message blocked by app server filtering rule."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or check the pre-sending callback logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "510"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "MESSAGE_SIZE_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message body exceeds limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or reduce the message length (max 5 KB by default)."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "600"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_INVALID_ID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group ID is invalid or empty."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify group ID parameter isn't empty or disbanded."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "601"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_ALREADY_JOINED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already in chat group."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Handle as successful join."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "602"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_NOT_JOINED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not in chat group."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify group ID is for joined group that hasn't been disbanded."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "603"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_PERMISSION_DENIED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for group operation."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check API call permissions."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "604"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBERS_FULL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group member count reached limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or check if the maximum member count exceeds limit (default 200)."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "605"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_NOT_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat group doesn't exist."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Verify ", _jsx(_components.code, {
                children: "sharedFileId"
              }), " parameter isn't null."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "606"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_NOT_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group doesn't exist. Operation attempted on non-existing group."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify group ID is correct or not from disbanded group."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "607"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_DISABLED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Groups are disabled."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt to request unblock from administrator."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "608"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_NAME_VIOLATION"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Group name is invalid."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if group name contains sensitive information."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "609"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBER_ATTRIBUTES_REACH_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Custom attributes count reached limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Total length for single group member cannot exceed 4 KB."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "610"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBER_ATTRIBUTES_UPDATE_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to set custom attributes."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with API calls and logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "611"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBER_ATTRIBUTES_KEY_REACH_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Custom attribute key exceeds 16 bytes."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if attribute key exceeds limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "612"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_MEMBER_ATTRIBUTES_VALUE_REACH_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Custom attribute value exceeds 512 bytes."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if attribute value exceeds limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "613"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "GROUP_USER_IN_BLOCKLIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User is in group blacklist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or check console for blacklist status."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "700"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_INVALID_ID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat room ID is invalid or empty."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if chat room ID is empty."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "701"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_ALREADY_JOINED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already in chat room."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Handle as successful join."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "702"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_NOT_JOINED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User not in chat room."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify chat room ID is correct, not disbanded, or previously joined."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "703"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_PERMISSION_DENIED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for chat room operation."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check API call permissions."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "704"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_MEMBERS_FULL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat room member count reached limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check maximum member count setting."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "705"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_NOT_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat room doesn't exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify chat room ID is correct, not disbanded, or previously joined."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "706"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_OWNER_NOT_ALLOW_LEAVE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chat room owner not allowed to leave."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Check ", _jsx(_components.code, {
                children: "Options#IsRoomOwnerLeaveAllowed"
              }), " setting when SDK is initialized."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "707"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CHATROOM_USER_IN_BLOCKLIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User is in chat room blacklist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check console for chat room blacklist status."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "900"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "PUSH_NOT_SUPPORT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Third-party push service not supported on current device."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Get user attributes in batches of up to 100 users."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "901"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "PUSH_BIND_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to upload third-party push service token to server."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check attribute length limits."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1000"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CONTACT_ADD_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to add contact."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with API calls and error description."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1001"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CONTACT_REACH_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Inviter reached maximum contacts limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or contact support to increase limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1002"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "CONTACT_REACH_LIMIT_PEER"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Invitee reached maximum contacts limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI error or contact support to increase limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1100"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "PRESENCE_PARAM_LENGTH_EXCEED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Presence parameter length exceeds limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Online status details cannot exceed 64 bytes."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1101"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "PRESENCE_CANNOT_SUBSCRIBE_YOURSELF"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User cannot subscribe to own status."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if subscribed user ID is own ID."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1110"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TRANSLATE_PARAM_INVALID"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Translation parameter error."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with debug logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1111"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TRANSLATE_SERVICE_NOT_ENABLE"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Translation service not enabled."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable translation service in console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1112"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TRANSLATE_USAGE_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Translation usage reached limit."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Contact support to renew translation usage."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1113"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TRANSLATE_MESSAGE_FAIL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Failed to translate message."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Analyze with debug logs."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1200"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "THIRD_MODERATION_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: 'Third-party content moderation result is "Reject".'
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check content audit configuration and logs in console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1299"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "THIRD_DEFAULT_FAILED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: 'Non-third-party moderation service result is "Reject".'
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check content audit configuration and logs in console."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1300"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REACTION_REACH_LIMIT"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message Reactions reached maximum allowed."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Show UI prompt or contact support to increase limit."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1301"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REACTION_HAS_BEEN_OPERATED"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User already added this Reaction."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Handle as successful addition."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1302"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "REACTION_OPERATION_IS_ILLEGAL"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User lacks permission for Reaction operation."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify parameters with log analysis."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1400"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "THREAD_NOT_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Thread doesn't exist."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Verify subzone ID is correct."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "1401"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "THREAD_ALREADY_EXIST"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Thread already exists under this message ID."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Check if subzone already created under incoming message."
            })]
          })]
        })]
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
        children: "This page lists the possible error codes and error messages returned by the SDK when you call Chat APIs."
      }), _jsxs(_components.p, {
        children: ["Possible reasons for these errors are provided to help you debug more efficiently. If you encounter an error code that is not listed here, contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), " for assistance."]
      }), _jsx(_components.p, {
        children: "Refer to the error codes for Android and iOS."
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
