import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Prevent and address cyber attacks and disruptions",
  description: "Procedures to prevent and respond to room bombing."
};
export let _markdown = `

Room bombing refers to one or more users maliciously disrupting the order of a channel. It usually occurs in chat rooms, and other multi-user interactive use-cases. Some common patterns of room bombing and disruptive behavior include:

* Intercepting a token and joining a channel illegally, or utilizing the long validity period of a token to join the channel repeatedly.
* Continuously making noise or sending illegal audio or video content.
* Hijacking the signaling messages sent from the application server to the client to disrupt the client's microphone updates and room management.
* Joining a channel when the network is down and reconnecting.

This page describes a series of measures to deal with room bombing and disruptive behavior to help maintain room order and improve business security.

## Basic security solutions [#basic-security-solutions]

This section introduces basic measures to safeguard the security of your client and server in multi-user interaction use-cases.

### Use the latest SDK version [#use-the-latest-sdk-version]

To ensure you have the latest security updates, best practice is to upgrade to the latest version of the RTC SDK. Visit the [SDKs](/sdks) page and download the latest version of the Agora RTC SDK.

### Use token authentication [#use-token-authentication]

To ensure communication security, Agora strongly recommends use of token authentication in your app. Token authentication not only ensures that only authorized users can join a channel, but also controls the user's streaming privileges. To use token authentication, integrate token generation into your business server, and enable token verification on the Agora server. Refer to [Secure authentication with tokens](../authenticate-users/authentication-workflow) for details.

#### Set an appropriate validity period for tokens and permissions [#set-an-appropriate-validity-period-for-tokens-and-permissions]

To prevent unauthorized users from joining a channel by taking advantage of long token validity, use the following token generation parameters to set a suitable validity period:

* \`tokenExpirationInSeconds\`: Sets the validity timestamp of the token. The default and maximum validity period of a token is 24 hours. Best practice is to set the validity period of a token as short as possible while meeting business needs.
* \`privilegeExpirationInSeconds\`: Sets the effective timestamp of the permission. After the permission expires, the user is removed from the channel, and illegal users cannot use the token to log in to the channel again.

#### Update tokens regularly [#update-tokens-regularly]

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;web&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    When a token is about to expire, the SDK triggers the \`onTokenPrivilegeWillExpire\` callback. When you receive this callback, obtain a fresh token from the token server, and call \`renewToken\` to pass the newly generated token to the SDK.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    When a token is about to expire, the SDK triggers the \`onTokenPrivilegeWillExpire\` callback. When you receive this callback, obtain a fresh token from the token server, and call \`renewToken\` to pass the newly generated token to the SDK.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    When a token is about to expire, the SDK triggers the \`onTokenPrivilegeWillExpire\` callback. When you receive this callback, obtain a fresh token from the token server, and call \`renewToken\` to pass the newly generated token to the SDK.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    When a token is about to expire, the SDK triggers the \`onTokenPrivilegeWillExpire\` callback. When you receive this callback, obtain a fresh token from the token server, and call \`renewToken\` to pass the newly generated token to the SDK.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    When a token is about to expire, the SDK triggers the \`onTokenPrivilegeWillExpire\` callback. When you receive this callback, obtain a fresh token from the token server, and call \`renewToken\` to pass the newly generated token to the SDK.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    When a token is about to expire, the SDK triggers the \`onTokenPrivilegeWillExpire\` callback. When you receive this callback, obtain a fresh token from the token server, and call \`renewToken\` to pass the newly generated token to the SDK.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    When a token is about to expire, the SDK triggers the \`onTokenPrivilegeWillExpire\` callback. When you receive this callback, obtain a fresh token from the token server, and call \`renewToken\` to pass the newly generated token to the SDK.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    When a token is about to expire, the SDK triggers the \`onTokenPrivilegeWillExpire\` callback. When you receive this callback, obtain a fresh token from the token server, and call \`renewToken\` to pass the newly generated token to the SDK.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    When a token is about to expire, the SDK triggers the \`token-privilege-will-expire\` callback. When you receive this callback, obtain a fresh token from the token server, and call \`renewToken\` to pass the newly generated token to the SDK.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

<CalloutContainer type="info">
  <CalloutDescription>
    * Agora recommends setting the validity period of \`tokenExpirationInSeconds\` and \`privilegeExpirationInSeconds\` to be the same.
    * Ensure the secrecy of your app ID and app certificate. Agora recommends storing the app ID and app certificate securely on the app server. If you suspect leakage, [Switch to a new primary certificate](/en/realtime-media/rtc/reference/console-overview#switch-to-a-new-primary-certificate).
    * When updating the app certificate, best practice is to choose a time when the number of online users is at a minimum to avoid large-scale user login failure.
  </CalloutDescription>
</CalloutContainer>

### Use Co-host token authentication [#use-co-host-token-authentication]

Typically, using token authentication and strengthening the security performance of token authentication is sufficient to meet the needs of most real-time interaction use-cases. For use-cases where the audience needs to frequently go on and off the microphone, Agora provides authentication of users for publishing streams in a channel. This is known as Co-host token authentication.

<CalloutContainer type="warning">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    Before using this feature, make sure you have enabled **Co-host token authentication** in Agora Console.
  </CalloutDescription>
</CalloutContainer>

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;web&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    To use co-host token authentication, set the user role using the \`role\` parameter when generating a token, and set the expiration time of all privileges using \`privilegeExpirationInSeconds\`. For different use-cases and user roles, refer to the following table to implement your authentication logic:

    | Characters and use-cases                        | Authentication steps                                                                                                                                                                                                                                                             |
    | :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Host joins the channel to send streams          | 1. Request a token with the \`role\` set to \`kRolePublisher\`. This token gives the host permission to send streams. 2. Call \`setClientRole\` to set the role as the host. 3. Call \`joinChannel\` to pass in a token with streaming privileges to join the channel.                   |
    | Audience members join the channel               | 1. Request a token with the \`role\` set to \`kRoleSubscriber\`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call \`joinChannel\` directly and pass in a token to join the channel. |
    | Audience gets the mic after joining the channel | 1. Request a token with the \`role\` set to \`kRolePublisher\` to give the user permission to send streams. 2. Call \`renewToken\` to update the new token on the Agora server. 3. Call \`setClientRole\` to switch the role to host.                                                    |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    To use co-host token authentication, set the user role using the \`role\` parameter when generating a token, and set the expiration time of all privileges using \`privilegeExpirationInSeconds\`. For different use-cases and user roles, refer to the following table to implement your authentication logic:

    | Characters and use-cases                        | Authentication steps                                                                                                                                                                                                                                                             |
    | :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Host joins the channel to send streams          | 1. Request a token with the \`role\` set to \`kRolePublisher\`. This token gives the host permission to send streams. 2. Call \`setClientRole\` to set the role as the host. 3. Call \`joinChannel\` to pass in a token with streaming privileges to join the channel.                   |
    | Audience members join the channel               | 1. Request a token with the \`role\` set to \`kRoleSubscriber\`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call \`joinChannel\` directly and pass in a token to join the channel. |
    | Audience gets the mic after joining the channel | 1. Request a token with the \`role\` set to \`kRolePublisher\` to give the user permission to send streams. 2. Call \`renewToken\` to update the new token on the Agora server. 3. Call \`setClientRole\` to switch the role to host.                                                    |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    To use co-host token authentication, set the user role using the \`role\` parameter when generating a token, and set the expiration time of all privileges using \`privilegeExpirationInSeconds\`. For different use-cases and user roles, refer to the following table to implement your authentication logic:

    | Characters and use-cases                        | Authentication steps                                                                                                                                                                                                                                                             |
    | :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Host joins the channel to send streams          | 1. Request a token with the \`role\` set to \`kRolePublisher\`. This token gives the host permission to send streams. 2. Call \`setClientRole\` to set the role as the host. 3. Call \`joinChannel\` to pass in a token with streaming privileges to join the channel.                   |
    | Audience members join the channel               | 1. Request a token with the \`role\` set to \`kRoleSubscriber\`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call \`joinChannel\` directly and pass in a token to join the channel. |
    | Audience gets the mic after joining the channel | 1. Request a token with the \`role\` set to \`kRolePublisher\` to give the user permission to send streams. 2. Call \`renewToken\` to update the new token on the Agora server. 3. Call \`setClientRole\` to switch the role to host.                                                    |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    To use co-host token authentication, set the user role using the \`role\` parameter when generating a token, and set the expiration time of all privileges using \`privilegeExpirationInSeconds\`. For different use-cases and user roles, refer to the following table to implement your authentication logic:

    | Characters and use-cases                        | Authentication steps                                                                                                                                                                                                                                                             |
    | :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Host joins the channel to send streams          | 1. Request a token with the \`role\` set to \`kRolePublisher\`. This token gives the host permission to send streams. 2. Call \`setClientRole\` to set the role as the host. 3. Call \`joinChannel\` to pass in a token with streaming privileges to join the channel.                   |
    | Audience members join the channel               | 1. Request a token with the \`role\` set to \`kRoleSubscriber\`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call \`joinChannel\` directly and pass in a token to join the channel. |
    | Audience gets the mic after joining the channel | 1. Request a token with the \`role\` set to \`kRolePublisher\` to give the user permission to send streams. 2. Call \`renewToken\` to update the new token on the Agora server. 3. Call \`setClientRole\` to switch the role to host.                                                    |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    To use co-host token authentication, set the user role using the \`role\` parameter when generating a token, and set the expiration time of all privileges using \`privilegeExpirationInSeconds\`. For different use-cases and user roles, refer to the following table to implement your authentication logic:

    | Characters and use-cases                        | Authentication steps                                                                                                                                                                                                                                                             |
    | :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Host joins the channel to send streams          | 1. Request a token with the \`role\` set to \`kRolePublisher\`. This token gives the host permission to send streams. 2. Call \`setClientRole\` to set the role as the host. 3. Call \`joinChannel\` to pass in a token with streaming privileges to join the channel.                   |
    | Audience members join the channel               | 1. Request a token with the \`role\` set to \`kRoleSubscriber\`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call \`joinChannel\` directly and pass in a token to join the channel. |
    | Audience gets the mic after joining the channel | 1. Request a token with the \`role\` set to \`kRolePublisher\` to give the user permission to send streams. 2. Call \`renewToken\` to update the new token on the Agora server. 3. Call \`setClientRole\` to switch the role to host.                                                    |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    To use co-host token authentication, set the user role using the \`role\` parameter when generating a token, and set the expiration time of all privileges using \`privilegeExpirationInSeconds\`. For different use-cases and user roles, refer to the following table to implement your authentication logic:

    | Characters and use-cases                        | Authentication steps                                                                                                                                                                                                                                                             |
    | :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Host joins the channel to send streams          | 1. Request a token with the \`role\` set to \`kRolePublisher\`. This token gives the host permission to send streams. 2. Call \`setClientRole\` to set the role as the host. 3. Call \`joinChannel\` to pass in a token with streaming privileges to join the channel.                   |
    | Audience members join the channel               | 1. Request a token with the \`role\` set to \`kRoleSubscriber\`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call \`joinChannel\` directly and pass in a token to join the channel. |
    | Audience gets the mic after joining the channel | 1. Request a token with the \`role\` set to \`kRolePublisher\` to give the user permission to send streams. 2. Call \`renewToken\` to update the new token on the Agora server. 3. Call \`setClientRole\` to switch the role to host.                                                    |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    To use co-host token authentication, set the user role using the \`role\` parameter when generating a token, and set the expiration time of all privileges using \`privilegeExpirationInSeconds\`. For different use-cases and user roles, refer to the following table to implement your authentication logic:

    | Characters and use-cases                        | Authentication steps                                                                                                                                                                                                                                                             |
    | :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Host joins the channel to send streams          | 1. Request a token with the \`role\` set to \`kRolePublisher\`. This token gives the host permission to send streams. 2. Call \`setClientRole\` to set the role as the host. 3. Call \`joinChannel\` to pass in a token with streaming privileges to join the channel.                   |
    | Audience members join the channel               | 1. Request a token with the \`role\` set to \`kRoleSubscriber\`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call \`joinChannel\` directly and pass in a token to join the channel. |
    | Audience gets the mic after joining the channel | 1. Request a token with the \`role\` set to \`kRolePublisher\` to give the user permission to send streams. 2. Call \`renewToken\` to update the new token on the Agora server. 3. Call \`setClientRole\` to switch the role to host.                                                    |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    To use co-host token authentication, set the user role using the \`role\` parameter when generating a token, and set the expiration time of all privileges using \`privilegeExpirationInSeconds\`. For different use-cases and user roles, refer to the following table to implement your authentication logic:

    | Characters and use-cases                        | Authentication steps                                                                                                                                                                                                                                                             |
    | :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Host joins the channel to send streams          | 1. Request a token with the \`role\` set to \`kRolePublisher\`. This token gives the host permission to send streams. 2. Call \`setClientRole\` to set the role as the host. 3. Call \`joinChannel\` to pass in a token with streaming privileges to join the channel.                   |
    | Audience members join the channel               | 1. Request a token with the \`role\` set to \`kRoleSubscriber\`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call \`joinChannel\` directly and pass in a token to join the channel. |
    | Audience gets the mic after joining the channel | 1. Request a token with the \`role\` set to \`kRolePublisher\` to give the user permission to send streams. 2. Call \`renewToken\` to update the new token on the Agora server. 3. Call \`setClientRole\` to switch the role to host.                                                    |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    To use co-host token authentication, set the user role using the \`role\` parameter when generating a token, and set the expiration time of all privileges using \`privilegeExpirationInSeconds\`. For different use-cases and user roles, refer to the following table to implement your authentication logic:

    | Characters and use-cases                        | Authentication steps                                                                                                                                                                                                                                                      |
    | :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | Host joins the channel to send streams          | 1. Request a token with the \`role\` set to \`kRolePublisher\`. This token gives the host permission to send streams. 2. Call \`setClientRole\` to set the role as the host. 3. Call \`join\` to pass in a token with streaming privileges to join the channel.                   |
    | Audience members join the channel               | 1. Request a token with the \`role\` set to \`kRoleSubscriber\`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call \`join\` directly and pass in a token to join the channel. |
    | Audience gets the mic after joining the channel | 1. Request a token with the \`role\` set to \`kRolePublisher\` to give the user permission to send streams. 2. Call \`renewToken\` to update the new token on the Agora server. 3. Call \`setClientRole\` to switch the role to host.                                             |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

<CalloutContainer type="info">
  <CalloutDescription>
    If your business use-case requires more refined streaming permission control, refer to the [Co-host token authentication](../authenticate-users/deploy-token-server#co-host-token-authentication) guide.
  </CalloutDescription>
</CalloutContainer>

After implementing co-host authentication, use it together with your business logic to verify that the user's ID is legitimate and that they are authorized to broadcast streams.

## Response plan [#response-plan]

This section describes the response measures after a room bombing and disruption occurs. Agora recommends that you implement the preventive measures in the basic security plan before taking the following steps.

### Locate illegal users [#locate-illegal-users]

Regularly call the Agora [RESTful API](/en/api-reference/api-ref/rtc/query-user-list) \`http://api.sd-rtn.com/dev/v1/channel/user/{appid}/{channelName}/{hosts_only}\` on the app server to query the Agora server's online channel user list, and compare it with the list of users maintained on the app server to find illegal users. The API call frequency is capped at 20 times per second.

### Handle illegal users [#handle-illegal-users]

After you identify an illegal user, stop their room bombing and disruptive behavior to restore order to the room. Use one or more of the following methods to stop the disruptive activity:

#### Ban illegal users from posting streams [#ban-illegal-users-from-posting-streams]

Use the following methods to achieve this:

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;web&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    * The app server sends a message to the user's client asking the client to call \`muteLocalAudioStream\` and set \`muted\` to \`true\` to cancel publishing the audio stream.
    * The app server sends a message to the user's client requesting the client to call \`setClientRole\` to set the user's role as audience, and cancel their streaming privileges.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    * The app server sends a message to the user's client asking the client to call \`muteLocalAudioStream\` and set \`muted\` to \`true\` to cancel publishing the audio stream.
    * The app server sends a message to the user's client requesting the client to call \`setClientRole\` to set the user's role as audience, and cancel their streaming privileges.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    * The app server sends a message to the user's client asking the client to call \`muteLocalAudioStream\` and set \`muted\` to \`true\` to cancel publishing the audio stream.
    * The app server sends a message to the user's client requesting the client to call \`setClientRole\` to set the user's role as audience, and cancel their streaming privileges.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    * The app server sends a message to the user's client asking the client to call \`muteLocalAudioStream\` and set \`muted\` to \`true\` to cancel publishing the audio stream.
    * The app server sends a message to the user's client requesting the client to call \`setClientRole\` to set the user's role as audience, and cancel their streaming privileges.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    * The app server sends a message to the user's client asking the client to call \`muteLocalAudioStream\` and set \`muted\` to \`true\` to cancel publishing the audio stream.
    * The app server sends a message to the user's client requesting the client to call \`setClientRole\` to set the user's role as audience, and cancel their streaming privileges.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    * The app server sends a message to the user's client asking the client to call \`muteLocalAudioStream\` and set \`muted\` to \`true\` to cancel publishing the audio stream.
    * The app server sends a message to the user's client requesting the client to call \`setClientRole\` to set the user's role as audience, and cancel their streaming privileges.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    * The app server sends a message to the user's client asking the client to call \`muteLocalAudioStream\` and set \`muted\` to \`true\` to cancel publishing the audio stream.
    * The app server sends a message to the user's client requesting the client to call \`setClientRole\` to set the user's role as audience, and cancel their streaming privileges.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    * The app server sends a message to the user's client asking the client to call \`muteLocalAudioStream\` and set \`muted\` to \`true\` to cancel publishing the audio stream.
    * The app server sends a message to the user's client requesting the client to call \`setClientRole\` to set the user's role as audience, and cancel their streaming privileges.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    * The app server sends a message to the user's client asking the client to call \`setMuted(true)\` on the local audio track to stop publishing the audio stream.
    * The app server sends a message to the user's client requesting the client to call \`setClientRole\` to set the user's role as audience, and cancel their streaming privileges.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

#### Kick illegal users out of the channel [#kick-illegal-users-out-of-the-channel]

The app server calls \`http://api.sd-rtn.com/dev/v1/kicking-rule\`. For the \`privileges\` parameter in the \`join_channel\` request packet body, set the \`cname\`, and \`uid\` fields to kick illegal users out of the channel.

The Agora server kicks the illegal users based on the values in the \`cname\` and \`uid\` fields as follows:

* If you fill in \`cname\` without \`uid\`, no one can join the channel corresponding to that \`cname\` in the app.
* If you fill in \`uid\` without \`cname\`, the \`uid\` cannot join any channel in the app.
* If you fill in \`cname\` and \`uid\`, the \`uid\` cannot join the channel corresponding to the \`cname\` in the app.

## Reference [#reference]

This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

* [Channel Management RESTful API](/en/api-reference/api-ref/video)

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;web&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    ### API reference [#api-reference]

    * [\`onTokenPrivilegeWillExpire\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_ontokenprivilegewillexpire)
    * [\`renewToken\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_renewtoken)
    * [\`setClientRole\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setclientrole)
    * [\`onRejoinChannelSuccess\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onrejoinchannelsuccess)
    * [\`enableAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enableaudiovolumeindication)
    * [\`onAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication)
    * [\`muteRemoteAudioStream\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    ### API reference [#api-reference-1]

    * [\`renewToken\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/renewtoken\\(_:\\))
    * [\`setClientRole\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setclientrole\\(_\\:options:\\))
    * [\`enableAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableaudiovolumeindication\\(_\\:smooth\\:reportvad:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    ### API reference [#api-reference-2]

    * [\`renewToken\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/renewtoken\\(_:\\))
    * [\`setClientRole\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setclientrole\\(_\\:options:\\))
    * [\`enableAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enableaudiovolumeindication\\(_\\:smooth\\:reportvad:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    ### API reference [#api-reference-3]

    * [\`onTokenPrivilegeWillExpire\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_ontokenprivilegewillexpire)
    * [\`renewToken\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_renewtoken)
    * [\`setClientRole\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setclientrole)
    * [\`onRejoinChannelSuccess\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onrejoinchannelsuccess)
    * [\`enableAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_enableaudiovolumeindication)
    * [\`onAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication)
    * [\`muteRemoteAudioStream\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    ### API reference [#api-reference-4]

    * [\`onTokenPrivilegeWillExpire\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_ontokenprivilegewillexpire)
    * [\`renewToken\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_renewtoken)
    * [\`setClientRole\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setclientrole2)
    * [\`onRejoinChannelSuccess\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onrejoinchannelsuccess)
    * [\`enableAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_enableaudiovolumeindication)
    * [\`onAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication)
    * [\`muteRemoteAudioStream\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    ### API reference [#api-reference-5]

    * [\`onTokenPrivilegeWillExpire\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_ontokenprivilegewillexpire)
    * [\`renewToken\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_renewtoken)
    * [\`setClientRole\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setclientrole2)
    * [\`onRejoinChannelSuccess\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onrejoinchannelsuccess)
    * [\`enableAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_enableaudiovolumeindication)
    * [\`onAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication)
    * [\`muteRemoteAudioStream\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    ### API reference [#api-reference-6]

    * [\`onTokenPrivilegeWillExpire\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_ontokenprivilegewillexpire)
    * [\`renewToken\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_renewtoken)
    * [\`setClientRole\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setclientrole2)
    * [\`onRejoinChannelSuccess\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onrejoinchannelsuccess)
    * [\`enableAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_enableaudiovolumeindication)
    * [\`onAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication)
    * [\`muteRemoteAudioStream\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    ### API reference [#api-reference-7]

    * [\`OnTokenPrivilegeWillExpire\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_ontokenprivilegewillexpire)
    * [\`RenewToken\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_renewtoken)
    * [\`SetClientRole\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setclientrole)
    * [\`OnRejoinChannelSuccess\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onrejoinchannelsuccess)
    * [\`EnableAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_enableaudiovolumeindication)
    * [\`OnAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication)
    * [\`MuteRemoteAudioStream\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ### API reference [#api-reference-8]

    * [\`token-privilege-will-expire\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_token_privilege_will_expire)
    * [\`renewToken\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#renewtoken)
    * [\`setClientRole\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#setclientrole)
    * [\`connection-state-change\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_connection_state_change)
    * [\`enableAudioVolumeIndicator\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#enableaudiovolumeindicator)
    * [\`volume-indicator\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_volume_indicator)
    * [\`unsubscribe\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#unsubscribe)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Room bombing refers to one or more users maliciously disrupting the order of a channel. It usually occurs in chat rooms, and other multi-user interactive use-cases. Some common patterns of room bombing and disruptive behavior include:"
  }, {
    heading: undefined,
    content: "Intercepting a token and joining a channel illegally, or utilizing the long validity period of a token to join the channel repeatedly."
  }, {
    heading: undefined,
    content: "Continuously making noise or sending illegal audio or video content."
  }, {
    heading: undefined,
    content: "Hijacking the signaling messages sent from the application server to the client to disrupt the client's microphone updates and room management."
  }, {
    heading: undefined,
    content: "Joining a channel when the network is down and reconnecting."
  }, {
    heading: undefined,
    content: "This page describes a series of measures to deal with room bombing and disruptive behavior to help maintain room order and improve business security."
  }, {
    heading: "basic-security-solutions",
    content: "This section introduces basic measures to safeguard the security of your client and server in multi-user interaction use-cases."
  }, {
    heading: "use-the-latest-sdk-version",
    content: "To ensure you have the latest security updates, best practice is to upgrade to the latest version of the RTC SDK. Visit the SDKs page and download the latest version of the Agora RTC SDK."
  }, {
    heading: "use-token-authentication",
    content: "To ensure communication security, Agora strongly recommends use of token authentication in your app. Token authentication not only ensures that only authorized users can join a channel, but also controls the user's streaming privileges. To use token authentication, integrate token generation into your business server, and enable token verification on the Agora server. Refer to Secure authentication with tokens for details."
  }, {
    heading: "set-an-appropriate-validity-period-for-tokens-and-permissions",
    content: "To prevent unauthorized users from joining a channel by taking advantage of long token validity, use the following token generation parameters to set a suitable validity period:"
  }, {
    heading: "set-an-appropriate-validity-period-for-tokens-and-permissions",
    content: "`tokenExpirationInSeconds`: Sets the validity timestamp of the token. The default and maximum validity period of a token is 24 hours. Best practice is to set the validity period of a token as short as possible while meeting business needs."
  }, {
    heading: "set-an-appropriate-validity-period-for-tokens-and-permissions",
    content: "`privilegeExpirationInSeconds`: Sets the effective timestamp of the permission. After the permission expires, the user is removed from the channel, and illegal users cannot use the token to log in to the channel again."
  }, {
    heading: "update-tokens-regularly",
    content: "When a token is about to expire, the SDK triggers the `onTokenPrivilegeWillExpire` callback. When you receive this callback, obtain a fresh token from the token server, and call `renewToken` to pass the newly generated token to the SDK."
  }, {
    heading: "update-tokens-regularly",
    content: "When a token is about to expire, the SDK triggers the `onTokenPrivilegeWillExpire` callback. When you receive this callback, obtain a fresh token from the token server, and call `renewToken` to pass the newly generated token to the SDK."
  }, {
    heading: "update-tokens-regularly",
    content: "When a token is about to expire, the SDK triggers the `onTokenPrivilegeWillExpire` callback. When you receive this callback, obtain a fresh token from the token server, and call `renewToken` to pass the newly generated token to the SDK."
  }, {
    heading: "update-tokens-regularly",
    content: "When a token is about to expire, the SDK triggers the `onTokenPrivilegeWillExpire` callback. When you receive this callback, obtain a fresh token from the token server, and call `renewToken` to pass the newly generated token to the SDK."
  }, {
    heading: "update-tokens-regularly",
    content: "When a token is about to expire, the SDK triggers the `onTokenPrivilegeWillExpire` callback. When you receive this callback, obtain a fresh token from the token server, and call `renewToken` to pass the newly generated token to the SDK."
  }, {
    heading: "update-tokens-regularly",
    content: "When a token is about to expire, the SDK triggers the `onTokenPrivilegeWillExpire` callback. When you receive this callback, obtain a fresh token from the token server, and call `renewToken` to pass the newly generated token to the SDK."
  }, {
    heading: "update-tokens-regularly",
    content: "When a token is about to expire, the SDK triggers the `onTokenPrivilegeWillExpire` callback. When you receive this callback, obtain a fresh token from the token server, and call `renewToken` to pass the newly generated token to the SDK."
  }, {
    heading: "update-tokens-regularly",
    content: "When a token is about to expire, the SDK triggers the `onTokenPrivilegeWillExpire` callback. When you receive this callback, obtain a fresh token from the token server, and call `renewToken` to pass the newly generated token to the SDK."
  }, {
    heading: "update-tokens-regularly",
    content: "When a token is about to expire, the SDK triggers the `token-privilege-will-expire` callback. When you receive this callback, obtain a fresh token from the token server, and call `renewToken` to pass the newly generated token to the SDK."
  }, {
    heading: "update-tokens-regularly",
    content: "Agora recommends setting the validity period of `tokenExpirationInSeconds` and `privilegeExpirationInSeconds` to be the same."
  }, {
    heading: "update-tokens-regularly",
    content: "Ensure the secrecy of your app ID and app certificate. Agora recommends storing the app ID and app certificate securely on the app server. If you suspect leakage, Switch to a new primary certificate."
  }, {
    heading: "update-tokens-regularly",
    content: "When updating the app certificate, best practice is to choose a time when the number of online users is at a minimum to avoid large-scale user login failure."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Typically, using token authentication and strengthening the security performance of token authentication is sufficient to meet the needs of most real-time interaction use-cases. For use-cases where the audience needs to frequently go on and off the microphone, Agora provides authentication of users for publishing streams in a channel. This is known as Co-host token authentication."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Before using this feature, make sure you have enabled **Co-host token authentication** in Agora Console."
  }, {
    heading: "use-co-host-token-authentication",
    content: "To use co-host token authentication, set the user role using the `role` parameter when generating a token, and set the expiration time of all privileges using `privilegeExpirationInSeconds`. For different use-cases and user roles, refer to the following table to implement your authentication logic:"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Characters and use-cases"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Authentication steps"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Host joins the channel to send streams"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher`. This token gives the host permission to send streams. 2. Call `setClientRole` to set the role as the host. 3. Call `joinChannel` to pass in a token with streaming privileges to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience members join the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRoleSubscriber`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call `joinChannel` directly and pass in a token to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience gets the mic after joining the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher` to give the user permission to send streams. 2. Call `renewToken` to update the new token on the Agora server. 3. Call `setClientRole` to switch the role to host."
  }, {
    heading: "use-co-host-token-authentication",
    content: "To use co-host token authentication, set the user role using the `role` parameter when generating a token, and set the expiration time of all privileges using `privilegeExpirationInSeconds`. For different use-cases and user roles, refer to the following table to implement your authentication logic:"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Characters and use-cases"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Authentication steps"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Host joins the channel to send streams"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher`. This token gives the host permission to send streams. 2. Call `setClientRole` to set the role as the host. 3. Call `joinChannel` to pass in a token with streaming privileges to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience members join the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRoleSubscriber`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call `joinChannel` directly and pass in a token to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience gets the mic after joining the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher` to give the user permission to send streams. 2. Call `renewToken` to update the new token on the Agora server. 3. Call `setClientRole` to switch the role to host."
  }, {
    heading: "use-co-host-token-authentication",
    content: "To use co-host token authentication, set the user role using the `role` parameter when generating a token, and set the expiration time of all privileges using `privilegeExpirationInSeconds`. For different use-cases and user roles, refer to the following table to implement your authentication logic:"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Characters and use-cases"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Authentication steps"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Host joins the channel to send streams"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher`. This token gives the host permission to send streams. 2. Call `setClientRole` to set the role as the host. 3. Call `joinChannel` to pass in a token with streaming privileges to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience members join the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRoleSubscriber`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call `joinChannel` directly and pass in a token to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience gets the mic after joining the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher` to give the user permission to send streams. 2. Call `renewToken` to update the new token on the Agora server. 3. Call `setClientRole` to switch the role to host."
  }, {
    heading: "use-co-host-token-authentication",
    content: "To use co-host token authentication, set the user role using the `role` parameter when generating a token, and set the expiration time of all privileges using `privilegeExpirationInSeconds`. For different use-cases and user roles, refer to the following table to implement your authentication logic:"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Characters and use-cases"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Authentication steps"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Host joins the channel to send streams"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher`. This token gives the host permission to send streams. 2. Call `setClientRole` to set the role as the host. 3. Call `joinChannel` to pass in a token with streaming privileges to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience members join the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRoleSubscriber`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call `joinChannel` directly and pass in a token to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience gets the mic after joining the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher` to give the user permission to send streams. 2. Call `renewToken` to update the new token on the Agora server. 3. Call `setClientRole` to switch the role to host."
  }, {
    heading: "use-co-host-token-authentication",
    content: "To use co-host token authentication, set the user role using the `role` parameter when generating a token, and set the expiration time of all privileges using `privilegeExpirationInSeconds`. For different use-cases and user roles, refer to the following table to implement your authentication logic:"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Characters and use-cases"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Authentication steps"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Host joins the channel to send streams"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher`. This token gives the host permission to send streams. 2. Call `setClientRole` to set the role as the host. 3. Call `joinChannel` to pass in a token with streaming privileges to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience members join the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRoleSubscriber`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call `joinChannel` directly and pass in a token to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience gets the mic after joining the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher` to give the user permission to send streams. 2. Call `renewToken` to update the new token on the Agora server. 3. Call `setClientRole` to switch the role to host."
  }, {
    heading: "use-co-host-token-authentication",
    content: "To use co-host token authentication, set the user role using the `role` parameter when generating a token, and set the expiration time of all privileges using `privilegeExpirationInSeconds`. For different use-cases and user roles, refer to the following table to implement your authentication logic:"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Characters and use-cases"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Authentication steps"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Host joins the channel to send streams"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher`. This token gives the host permission to send streams. 2. Call `setClientRole` to set the role as the host. 3. Call `joinChannel` to pass in a token with streaming privileges to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience members join the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRoleSubscriber`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call `joinChannel` directly and pass in a token to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience gets the mic after joining the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher` to give the user permission to send streams. 2. Call `renewToken` to update the new token on the Agora server. 3. Call `setClientRole` to switch the role to host."
  }, {
    heading: "use-co-host-token-authentication",
    content: "To use co-host token authentication, set the user role using the `role` parameter when generating a token, and set the expiration time of all privileges using `privilegeExpirationInSeconds`. For different use-cases and user roles, refer to the following table to implement your authentication logic:"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Characters and use-cases"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Authentication steps"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Host joins the channel to send streams"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher`. This token gives the host permission to send streams. 2. Call `setClientRole` to set the role as the host. 3. Call `joinChannel` to pass in a token with streaming privileges to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience members join the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRoleSubscriber`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call `joinChannel` directly and pass in a token to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience gets the mic after joining the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher` to give the user permission to send streams. 2. Call `renewToken` to update the new token on the Agora server. 3. Call `setClientRole` to switch the role to host."
  }, {
    heading: "use-co-host-token-authentication",
    content: "To use co-host token authentication, set the user role using the `role` parameter when generating a token, and set the expiration time of all privileges using `privilegeExpirationInSeconds`. For different use-cases and user roles, refer to the following table to implement your authentication logic:"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Characters and use-cases"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Authentication steps"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Host joins the channel to send streams"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher`. This token gives the host permission to send streams. 2. Call `setClientRole` to set the role as the host. 3. Call `joinChannel` to pass in a token with streaming privileges to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience members join the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRoleSubscriber`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call `joinChannel` directly and pass in a token to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience gets the mic after joining the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher` to give the user permission to send streams. 2. Call `renewToken` to update the new token on the Agora server. 3. Call `setClientRole` to switch the role to host."
  }, {
    heading: "use-co-host-token-authentication",
    content: "To use co-host token authentication, set the user role using the `role` parameter when generating a token, and set the expiration time of all privileges using `privilegeExpirationInSeconds`. For different use-cases and user roles, refer to the following table to implement your authentication logic:"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Characters and use-cases"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Authentication steps"
  }, {
    heading: "use-co-host-token-authentication",
    content: "Host joins the channel to send streams"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher`. This token gives the host permission to send streams. 2. Call `setClientRole` to set the role as the host. 3. Call `join` to pass in a token with streaming privileges to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience members join the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRoleSubscriber`. This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call `join` directly and pass in a token to join the channel."
  }, {
    heading: "use-co-host-token-authentication",
    content: "Audience gets the mic after joining the channel"
  }, {
    heading: "use-co-host-token-authentication",
    content: "1. Request a token with the `role` set to `kRolePublisher` to give the user permission to send streams. 2. Call `renewToken` to update the new token on the Agora server. 3. Call `setClientRole` to switch the role to host."
  }, {
    heading: "use-co-host-token-authentication",
    content: "If your business use-case requires more refined streaming permission control, refer to the Co-host token authentication guide."
  }, {
    heading: "use-co-host-token-authentication",
    content: "After implementing co-host authentication, use it together with your business logic to verify that the user's ID is legitimate and that they are authorized to broadcast streams."
  }, {
    heading: "response-plan",
    content: "This section describes the response measures after a room bombing and disruption occurs. Agora recommends that you implement the preventive measures in the basic security plan before taking the following steps."
  }, {
    heading: "locate-illegal-users",
    content: "Regularly call the Agora RESTful API `http://api.sd-rtn.com/dev/v1/channel/user/{appid}/{channelName}/{hosts_only}` on the app server to query the Agora server's online channel user list, and compare it with the list of users maintained on the app server to find illegal users. The API call frequency is capped at 20 times per second."
  }, {
    heading: "handle-illegal-users",
    content: "After you identify an illegal user, stop their room bombing and disruptive behavior to restore order to the room. Use one or more of the following methods to stop the disruptive activity:"
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "Use the following methods to achieve this:"
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client asking the client to call `muteLocalAudioStream` and set `muted` to `true` to cancel publishing the audio stream."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client requesting the client to call `setClientRole` to set the user's role as audience, and cancel their streaming privileges."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client asking the client to call `muteLocalAudioStream` and set `muted` to `true` to cancel publishing the audio stream."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client requesting the client to call `setClientRole` to set the user's role as audience, and cancel their streaming privileges."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client asking the client to call `muteLocalAudioStream` and set `muted` to `true` to cancel publishing the audio stream."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client requesting the client to call `setClientRole` to set the user's role as audience, and cancel their streaming privileges."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client asking the client to call `muteLocalAudioStream` and set `muted` to `true` to cancel publishing the audio stream."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client requesting the client to call `setClientRole` to set the user's role as audience, and cancel their streaming privileges."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client asking the client to call `muteLocalAudioStream` and set `muted` to `true` to cancel publishing the audio stream."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client requesting the client to call `setClientRole` to set the user's role as audience, and cancel their streaming privileges."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client asking the client to call `muteLocalAudioStream` and set `muted` to `true` to cancel publishing the audio stream."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client requesting the client to call `setClientRole` to set the user's role as audience, and cancel their streaming privileges."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client asking the client to call `muteLocalAudioStream` and set `muted` to `true` to cancel publishing the audio stream."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client requesting the client to call `setClientRole` to set the user's role as audience, and cancel their streaming privileges."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client asking the client to call `muteLocalAudioStream` and set `muted` to `true` to cancel publishing the audio stream."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client requesting the client to call `setClientRole` to set the user's role as audience, and cancel their streaming privileges."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client asking the client to call `setMuted(true)` on the local audio track to stop publishing the audio stream."
  }, {
    heading: "ban-illegal-users-from-posting-streams",
    content: "The app server sends a message to the user's client requesting the client to call `setClientRole` to set the user's role as audience, and cancel their streaming privileges."
  }, {
    heading: "kick-illegal-users-out-of-the-channel",
    content: "The app server calls `http://api.sd-rtn.com/dev/v1/kicking-rule`. For the `privileges` parameter in the `join_channel` request packet body, set the `cname`, and `uid` fields to kick illegal users out of the channel."
  }, {
    heading: "kick-illegal-users-out-of-the-channel",
    content: "The Agora server kicks the illegal users based on the values in the `cname` and `uid` fields as follows:"
  }, {
    heading: "kick-illegal-users-out-of-the-channel",
    content: "If you fill in `cname` without `uid`, no one can join the channel corresponding to that `cname` in the app."
  }, {
    heading: "kick-illegal-users-out-of-the-channel",
    content: "If you fill in `uid` without `cname`, the `uid` cannot join any channel in the app."
  }, {
    heading: "kick-illegal-users-out-of-the-channel",
    content: "If you fill in `cname` and `uid`, the `uid` cannot join the channel corresponding to the `cname` in the app."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference",
    content: "Channel Management RESTful API"
  }, {
    heading: "api-reference",
    content: "`onTokenPrivilegeWillExpire`"
  }, {
    heading: "api-reference",
    content: "`renewToken`"
  }, {
    heading: "api-reference",
    content: "`setClientRole`"
  }, {
    heading: "api-reference",
    content: "`onRejoinChannelSuccess`"
  }, {
    heading: "api-reference",
    content: "`enableAudioVolumeIndication`"
  }, {
    heading: "api-reference",
    content: "`onAudioVolumeIndication`"
  }, {
    heading: "api-reference",
    content: "`muteRemoteAudioStream`"
  }, {
    heading: "api-reference-1",
    content: "`renewToken`"
  }, {
    heading: "api-reference-1",
    content: "`setClientRole`"
  }, {
    heading: "api-reference-1",
    content: "`enableAudioVolumeIndication`"
  }, {
    heading: "api-reference-2",
    content: "`renewToken`"
  }, {
    heading: "api-reference-2",
    content: "`setClientRole`"
  }, {
    heading: "api-reference-2",
    content: "`enableAudioVolumeIndication`"
  }, {
    heading: "api-reference-3",
    content: "`onTokenPrivilegeWillExpire`"
  }, {
    heading: "api-reference-3",
    content: "`renewToken`"
  }, {
    heading: "api-reference-3",
    content: "`setClientRole`"
  }, {
    heading: "api-reference-3",
    content: "`onRejoinChannelSuccess`"
  }, {
    heading: "api-reference-3",
    content: "`enableAudioVolumeIndication`"
  }, {
    heading: "api-reference-3",
    content: "`onAudioVolumeIndication`"
  }, {
    heading: "api-reference-3",
    content: "`muteRemoteAudioStream`"
  }, {
    heading: "api-reference-4",
    content: "`onTokenPrivilegeWillExpire`"
  }, {
    heading: "api-reference-4",
    content: "`renewToken`"
  }, {
    heading: "api-reference-4",
    content: "`setClientRole`"
  }, {
    heading: "api-reference-4",
    content: "`onRejoinChannelSuccess`"
  }, {
    heading: "api-reference-4",
    content: "`enableAudioVolumeIndication`"
  }, {
    heading: "api-reference-4",
    content: "`onAudioVolumeIndication`"
  }, {
    heading: "api-reference-4",
    content: "`muteRemoteAudioStream`"
  }, {
    heading: "api-reference-5",
    content: "`onTokenPrivilegeWillExpire`"
  }, {
    heading: "api-reference-5",
    content: "`renewToken`"
  }, {
    heading: "api-reference-5",
    content: "`setClientRole`"
  }, {
    heading: "api-reference-5",
    content: "`onRejoinChannelSuccess`"
  }, {
    heading: "api-reference-5",
    content: "`enableAudioVolumeIndication`"
  }, {
    heading: "api-reference-5",
    content: "`onAudioVolumeIndication`"
  }, {
    heading: "api-reference-5",
    content: "`muteRemoteAudioStream`"
  }, {
    heading: "api-reference-6",
    content: "`onTokenPrivilegeWillExpire`"
  }, {
    heading: "api-reference-6",
    content: "`renewToken`"
  }, {
    heading: "api-reference-6",
    content: "`setClientRole`"
  }, {
    heading: "api-reference-6",
    content: "`onRejoinChannelSuccess`"
  }, {
    heading: "api-reference-6",
    content: "`enableAudioVolumeIndication`"
  }, {
    heading: "api-reference-6",
    content: "`onAudioVolumeIndication`"
  }, {
    heading: "api-reference-6",
    content: "`muteRemoteAudioStream`"
  }, {
    heading: "api-reference-7",
    content: "`OnTokenPrivilegeWillExpire`"
  }, {
    heading: "api-reference-7",
    content: "`RenewToken`"
  }, {
    heading: "api-reference-7",
    content: "`SetClientRole`"
  }, {
    heading: "api-reference-7",
    content: "`OnRejoinChannelSuccess`"
  }, {
    heading: "api-reference-7",
    content: "`EnableAudioVolumeIndication`"
  }, {
    heading: "api-reference-7",
    content: "`OnAudioVolumeIndication`"
  }, {
    heading: "api-reference-7",
    content: "`MuteRemoteAudioStream`"
  }, {
    heading: "api-reference-8",
    content: "`token-privilege-will-expire`"
  }, {
    heading: "api-reference-8",
    content: "`renewToken`"
  }, {
    heading: "api-reference-8",
    content: "`setClientRole`"
  }, {
    heading: "api-reference-8",
    content: "`connection-state-change`"
  }, {
    heading: "api-reference-8",
    content: "`enableAudioVolumeIndicator`"
  }, {
    heading: "api-reference-8",
    content: "`volume-indicator`"
  }, {
    heading: "api-reference-8",
    content: "`unsubscribe`"
  }],
  headings: [{
    id: "basic-security-solutions",
    content: "Basic security solutions"
  }, {
    id: "use-the-latest-sdk-version",
    content: "Use the latest SDK version"
  }, {
    id: "use-token-authentication",
    content: "Use token authentication"
  }, {
    id: "set-an-appropriate-validity-period-for-tokens-and-permissions",
    content: "Set an appropriate validity period for tokens and permissions"
  }, {
    id: "update-tokens-regularly",
    content: "Update tokens regularly"
  }, {
    id: "use-co-host-token-authentication",
    content: "Use Co-host token authentication"
  }, {
    id: "response-plan",
    content: "Response plan"
  }, {
    id: "locate-illegal-users",
    content: "Locate illegal users"
  }, {
    id: "handle-illegal-users",
    content: "Handle illegal users"
  }, {
    id: "ban-illegal-users-from-posting-streams",
    content: "Ban illegal users from posting streams"
  }, {
    id: "kick-illegal-users-out-of-the-channel",
    content: "Kick illegal users out of the channel"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "api-reference-1",
    content: "API reference"
  }, {
    id: "api-reference-2",
    content: "API reference"
  }, {
    id: "api-reference-3",
    content: "API reference"
  }, {
    id: "api-reference-4",
    content: "API reference"
  }, {
    id: "api-reference-5",
    content: "API reference"
  }, {
    id: "api-reference-6",
    content: "API reference"
  }, {
    id: "api-reference-7",
    content: "API reference"
  }, {
    id: "api-reference-8",
    content: "API reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#basic-security-solutions",
  title: _jsx(_Fragment, {
    children: "Basic security solutions"
  })
}, {
  depth: 3,
  url: "#use-the-latest-sdk-version",
  title: _jsx(_Fragment, {
    children: "Use the latest SDK version"
  })
}, {
  depth: 3,
  url: "#use-token-authentication",
  title: _jsx(_Fragment, {
    children: "Use token authentication"
  })
}, {
  depth: 4,
  url: "#set-an-appropriate-validity-period-for-tokens-and-permissions",
  title: _jsx(_Fragment, {
    children: "Set an appropriate validity period for tokens and permissions"
  })
}, {
  depth: 4,
  url: "#update-tokens-regularly",
  title: _jsx(_Fragment, {
    children: "Update tokens regularly"
  })
}, {
  depth: 3,
  url: "#use-co-host-token-authentication",
  title: _jsx(_Fragment, {
    children: "Use Co-host token authentication"
  })
}, {
  depth: 2,
  url: "#response-plan",
  title: _jsx(_Fragment, {
    children: "Response plan"
  })
}, {
  depth: 3,
  url: "#locate-illegal-users",
  title: _jsx(_Fragment, {
    children: "Locate illegal users"
  })
}, {
  depth: 3,
  url: "#handle-illegal-users",
  title: _jsx(_Fragment, {
    children: "Handle illegal users"
  })
}, {
  depth: 4,
  url: "#ban-illegal-users-from-posting-streams",
  title: _jsx(_Fragment, {
    children: "Ban illegal users from posting streams"
  })
}, {
  depth: 4,
  url: "#kick-illegal-users-out-of-the-channel",
  title: _jsx(_Fragment, {
    children: "Kick illegal users out of the channel"
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
  url: "#api-reference-1",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-2",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-3",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-4",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-5",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-6",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-7",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-8",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
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
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Room bombing refers to one or more users maliciously disrupting the order of a channel. It usually occurs in chat rooms, and other multi-user interactive use-cases. Some common patterns of room bombing and disruptive behavior include:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Intercepting a token and joining a channel illegally, or utilizing the long validity period of a token to join the channel repeatedly."
      }), `
`, _jsx(_components.li, {
        children: "Continuously making noise or sending illegal audio or video content."
      }), `
`, _jsx(_components.li, {
        children: "Hijacking the signaling messages sent from the application server to the client to disrupt the client's microphone updates and room management."
      }), `
`, _jsx(_components.li, {
        children: "Joining a channel when the network is down and reconnecting."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This page describes a series of measures to deal with room bombing and disruptive behavior to help maintain room order and improve business security."
    }), `
`, _jsx(_components.h2, {
      id: "basic-security-solutions",
      children: "Basic security solutions"
    }), `
`, _jsx(_components.p, {
      children: "This section introduces basic measures to safeguard the security of your client and server in multi-user interaction use-cases."
    }), `
`, _jsx(_components.h3, {
      id: "use-the-latest-sdk-version",
      children: "Use the latest SDK version"
    }), `
`, _jsxs(_components.p, {
      children: ["To ensure you have the latest security updates, best practice is to upgrade to the latest version of the RTC SDK. Visit the ", _jsx(_components.a, {
        href: "/sdks",
        children: "SDKs"
      }), " page and download the latest version of the Agora RTC SDK."]
    }), `
`, _jsx(_components.h3, {
      id: "use-token-authentication",
      children: "Use token authentication"
    }), `
`, _jsxs(_components.p, {
      children: ["To ensure communication security, Agora strongly recommends use of token authentication in your app. Token authentication not only ensures that only authorized users can join a channel, but also controls the user's streaming privileges. To use token authentication, integrate token generation into your business server, and enable token verification on the Agora server. Refer to ", _jsx(_components.a, {
        href: "../authenticate-users/authentication-workflow",
        children: "Secure authentication with tokens"
      }), " for details."]
    }), `
`, _jsx(_components.h4, {
      id: "set-an-appropriate-validity-period-for-tokens-and-permissions",
      children: "Set an appropriate validity period for tokens and permissions"
    }), `
`, _jsx(_components.p, {
      children: "To prevent unauthorized users from joining a channel by taking advantage of long token validity, use the following token generation parameters to set a suitable validity period:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "tokenExpirationInSeconds"
        }), ": Sets the validity timestamp of the token. The default and maximum validity period of a token is 24 hours. Best practice is to set the validity period of a token as short as possible while meeting business needs."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "privilegeExpirationInSeconds"
        }), ": Sets the effective timestamp of the permission. After the permission expires, the user is removed from the channel, and illegal users cannot use the token to log in to the channel again."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "update-tokens-regularly",
      children: "Update tokens regularly"
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","ios","macos","windows","electron","flutter","react-native","unity","web"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsxs(_components.p, {
          children: ["When a token is about to expire, the SDK triggers the ", _jsx(_components.code, {
            children: "onTokenPrivilegeWillExpire"
          }), " callback. When you receive this callback, obtain a fresh token from the token server, and call ", _jsx(_components.code, {
            children: "renewToken"
          }), " to pass the newly generated token to the SDK."]
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
          children: ["When a token is about to expire, the SDK triggers the ", _jsx(_components.code, {
            children: "onTokenPrivilegeWillExpire"
          }), " callback. When you receive this callback, obtain a fresh token from the token server, and call ", _jsx(_components.code, {
            children: "renewToken"
          }), " to pass the newly generated token to the SDK."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "macos",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "macos"
        }), _jsxs(_components.p, {
          children: ["When a token is about to expire, the SDK triggers the ", _jsx(_components.code, {
            children: "onTokenPrivilegeWillExpire"
          }), " callback. When you receive this callback, obtain a fresh token from the token server, and call ", _jsx(_components.code, {
            children: "renewToken"
          }), " to pass the newly generated token to the SDK."]
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
          children: ["When a token is about to expire, the SDK triggers the ", _jsx(_components.code, {
            children: "onTokenPrivilegeWillExpire"
          }), " callback. When you receive this callback, obtain a fresh token from the token server, and call ", _jsx(_components.code, {
            children: "renewToken"
          }), " to pass the newly generated token to the SDK."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "electron",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "electron"
        }), _jsxs(_components.p, {
          children: ["When a token is about to expire, the SDK triggers the ", _jsx(_components.code, {
            children: "onTokenPrivilegeWillExpire"
          }), " callback. When you receive this callback, obtain a fresh token from the token server, and call ", _jsx(_components.code, {
            children: "renewToken"
          }), " to pass the newly generated token to the SDK."]
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
          children: ["When a token is about to expire, the SDK triggers the ", _jsx(_components.code, {
            children: "onTokenPrivilegeWillExpire"
          }), " callback. When you receive this callback, obtain a fresh token from the token server, and call ", _jsx(_components.code, {
            children: "renewToken"
          }), " to pass the newly generated token to the SDK."]
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
          children: ["When a token is about to expire, the SDK triggers the ", _jsx(_components.code, {
            children: "onTokenPrivilegeWillExpire"
          }), " callback. When you receive this callback, obtain a fresh token from the token server, and call ", _jsx(_components.code, {
            children: "renewToken"
          }), " to pass the newly generated token to the SDK."]
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
          children: ["When a token is about to expire, the SDK triggers the ", _jsx(_components.code, {
            children: "onTokenPrivilegeWillExpire"
          }), " callback. When you receive this callback, obtain a fresh token from the token server, and call ", _jsx(_components.code, {
            children: "renewToken"
          }), " to pass the newly generated token to the SDK."]
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
          children: ["When a token is about to expire, the SDK triggers the ", _jsx(_components.code, {
            children: "token-privilege-will-expire"
          }), " callback. When you receive this callback, obtain a fresh token from the token server, and call ", _jsx(_components.code, {
            children: "renewToken"
          }), " to pass the newly generated token to the SDK."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Agora recommends setting the validity period of ", _jsx(_components.code, {
              children: "tokenExpirationInSeconds"
            }), " and ", _jsx(_components.code, {
              children: "privilegeExpirationInSeconds"
            }), " to be the same."]
          }), `
`, _jsxs(_components.li, {
            children: ["Ensure the secrecy of your app ID and app certificate. Agora recommends storing the app ID and app certificate securely on the app server. If you suspect leakage, ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/reference/console-overview#switch-to-a-new-primary-certificate",
              children: "Switch to a new primary certificate"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "When updating the app certificate, best practice is to choose a time when the number of online users is at a minimum to avoid large-scale user login failure."
          }), `
`]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "use-co-host-token-authentication",
      children: "Use Co-host token authentication"
    }), `
`, _jsx(_components.p, {
      children: "Typically, using token authentication and strengthening the security performance of token authentication is sufficient to meet the needs of most real-time interaction use-cases. For use-cases where the audience needs to frequently go on and off the microphone, Agora provides authentication of users for publishing streams in a channel. This is known as Co-host token authentication."
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Before using this feature, make sure you have enabled ", _jsx(_components.strong, {
            children: "Co-host token authentication"
          }), " in Agora Console."]
        })
      })]
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","ios","macos","windows","electron","flutter","react-native","unity","web"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsxs(_components.p, {
          children: ["To use co-host token authentication, set the user role using the ", _jsx(_components.code, {
            children: "role"
          }), " parameter when generating a token, and set the expiration time of all privileges using ", _jsx(_components.code, {
            children: "privilegeExpirationInSeconds"
          }), ". For different use-cases and user roles, refer to the following table to implement your authentication logic:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Characters and use-cases"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Authentication steps"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Host joins the channel to send streams"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), ". This token gives the host permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to set the role as the host. 3. Call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " to pass in a token with streaming privileges to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience members join the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRoleSubscriber"
                }), ". This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " directly and pass in a token to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience gets the mic after joining the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), " to give the user permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "renewToken"
                }), " to update the new token on the Agora server. 3. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to switch the role to host."]
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
        }), _jsxs(_components.p, {
          children: ["To use co-host token authentication, set the user role using the ", _jsx(_components.code, {
            children: "role"
          }), " parameter when generating a token, and set the expiration time of all privileges using ", _jsx(_components.code, {
            children: "privilegeExpirationInSeconds"
          }), ". For different use-cases and user roles, refer to the following table to implement your authentication logic:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Characters and use-cases"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Authentication steps"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Host joins the channel to send streams"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), ". This token gives the host permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to set the role as the host. 3. Call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " to pass in a token with streaming privileges to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience members join the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRoleSubscriber"
                }), ". This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " directly and pass in a token to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience gets the mic after joining the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), " to give the user permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "renewToken"
                }), " to update the new token on the Agora server. 3. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to switch the role to host."]
              })]
            })]
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "macos",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "macos"
        }), _jsxs(_components.p, {
          children: ["To use co-host token authentication, set the user role using the ", _jsx(_components.code, {
            children: "role"
          }), " parameter when generating a token, and set the expiration time of all privileges using ", _jsx(_components.code, {
            children: "privilegeExpirationInSeconds"
          }), ". For different use-cases and user roles, refer to the following table to implement your authentication logic:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Characters and use-cases"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Authentication steps"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Host joins the channel to send streams"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), ". This token gives the host permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to set the role as the host. 3. Call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " to pass in a token with streaming privileges to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience members join the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRoleSubscriber"
                }), ". This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " directly and pass in a token to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience gets the mic after joining the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), " to give the user permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "renewToken"
                }), " to update the new token on the Agora server. 3. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to switch the role to host."]
              })]
            })]
          })]
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
          children: ["To use co-host token authentication, set the user role using the ", _jsx(_components.code, {
            children: "role"
          }), " parameter when generating a token, and set the expiration time of all privileges using ", _jsx(_components.code, {
            children: "privilegeExpirationInSeconds"
          }), ". For different use-cases and user roles, refer to the following table to implement your authentication logic:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Characters and use-cases"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Authentication steps"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Host joins the channel to send streams"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), ". This token gives the host permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to set the role as the host. 3. Call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " to pass in a token with streaming privileges to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience members join the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRoleSubscriber"
                }), ". This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " directly and pass in a token to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience gets the mic after joining the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), " to give the user permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "renewToken"
                }), " to update the new token on the Agora server. 3. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to switch the role to host."]
              })]
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
        }), _jsxs(_components.p, {
          children: ["To use co-host token authentication, set the user role using the ", _jsx(_components.code, {
            children: "role"
          }), " parameter when generating a token, and set the expiration time of all privileges using ", _jsx(_components.code, {
            children: "privilegeExpirationInSeconds"
          }), ". For different use-cases and user roles, refer to the following table to implement your authentication logic:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Characters and use-cases"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Authentication steps"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Host joins the channel to send streams"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), ". This token gives the host permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to set the role as the host. 3. Call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " to pass in a token with streaming privileges to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience members join the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRoleSubscriber"
                }), ". This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " directly and pass in a token to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience gets the mic after joining the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), " to give the user permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "renewToken"
                }), " to update the new token on the Agora server. 3. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to switch the role to host."]
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
        }), _jsxs(_components.p, {
          children: ["To use co-host token authentication, set the user role using the ", _jsx(_components.code, {
            children: "role"
          }), " parameter when generating a token, and set the expiration time of all privileges using ", _jsx(_components.code, {
            children: "privilegeExpirationInSeconds"
          }), ". For different use-cases and user roles, refer to the following table to implement your authentication logic:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Characters and use-cases"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Authentication steps"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Host joins the channel to send streams"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), ". This token gives the host permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to set the role as the host. 3. Call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " to pass in a token with streaming privileges to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience members join the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRoleSubscriber"
                }), ". This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " directly and pass in a token to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience gets the mic after joining the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), " to give the user permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "renewToken"
                }), " to update the new token on the Agora server. 3. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to switch the role to host."]
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
        }), _jsxs(_components.p, {
          children: ["To use co-host token authentication, set the user role using the ", _jsx(_components.code, {
            children: "role"
          }), " parameter when generating a token, and set the expiration time of all privileges using ", _jsx(_components.code, {
            children: "privilegeExpirationInSeconds"
          }), ". For different use-cases and user roles, refer to the following table to implement your authentication logic:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Characters and use-cases"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Authentication steps"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Host joins the channel to send streams"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), ". This token gives the host permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to set the role as the host. 3. Call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " to pass in a token with streaming privileges to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience members join the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRoleSubscriber"
                }), ". This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " directly and pass in a token to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience gets the mic after joining the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), " to give the user permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "renewToken"
                }), " to update the new token on the Agora server. 3. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to switch the role to host."]
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
        }), _jsxs(_components.p, {
          children: ["To use co-host token authentication, set the user role using the ", _jsx(_components.code, {
            children: "role"
          }), " parameter when generating a token, and set the expiration time of all privileges using ", _jsx(_components.code, {
            children: "privilegeExpirationInSeconds"
          }), ". For different use-cases and user roles, refer to the following table to implement your authentication logic:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Characters and use-cases"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Authentication steps"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Host joins the channel to send streams"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), ". This token gives the host permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to set the role as the host. 3. Call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " to pass in a token with streaming privileges to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience members join the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRoleSubscriber"
                }), ". This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " directly and pass in a token to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience gets the mic after joining the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), " to give the user permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "renewToken"
                }), " to update the new token on the Agora server. 3. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to switch the role to host."]
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
        }), _jsxs(_components.p, {
          children: ["To use co-host token authentication, set the user role using the ", _jsx(_components.code, {
            children: "role"
          }), " parameter when generating a token, and set the expiration time of all privileges using ", _jsx(_components.code, {
            children: "privilegeExpirationInSeconds"
          }), ". For different use-cases and user roles, refer to the following table to implement your authentication logic:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Characters and use-cases"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Authentication steps"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Host joins the channel to send streams"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), ". This token gives the host permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to set the role as the host. 3. Call ", _jsx(_components.code, {
                  children: "join"
                }), " to pass in a token with streaming privileges to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience members join the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRoleSubscriber"
                }), ". This token does not permit the user to send streams. 2. Since a user's role when joining a channel is by default audience, it is sufficient to call ", _jsx(_components.code, {
                  children: "join"
                }), " directly and pass in a token to join the channel."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audience gets the mic after joining the channel"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["1. Request a token with the ", _jsx(_components.code, {
                  children: "role"
                }), " set to ", _jsx(_components.code, {
                  children: "kRolePublisher"
                }), " to give the user permission to send streams. 2. Call ", _jsx(_components.code, {
                  children: "renewToken"
                }), " to update the new token on the Agora server. 3. Call ", _jsx(_components.code, {
                  children: "setClientRole"
                }), " to switch the role to host."]
              })]
            })]
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If your business use-case requires more refined streaming permission control, refer to the ", _jsx(_components.a, {
            href: "../authenticate-users/deploy-token-server#co-host-token-authentication",
            children: "Co-host token authentication"
          }), " guide."]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "After implementing co-host authentication, use it together with your business logic to verify that the user's ID is legitimate and that they are authorized to broadcast streams."
    }), `
`, _jsx(_components.h2, {
      id: "response-plan",
      children: "Response plan"
    }), `
`, _jsx(_components.p, {
      children: "This section describes the response measures after a room bombing and disruption occurs. Agora recommends that you implement the preventive measures in the basic security plan before taking the following steps."
    }), `
`, _jsx(_components.h3, {
      id: "locate-illegal-users",
      children: "Locate illegal users"
    }), `
`, _jsxs(_components.p, {
      children: ["Regularly call the Agora ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/rtc/query-user-list",
        children: "RESTful API"
      }), " ", _jsx(_components.code, {
        children: "http://api.sd-rtn.com/dev/v1/channel/user/{appid}/{channelName}/{hosts_only}"
      }), " on the app server to query the Agora server's online channel user list, and compare it with the list of users maintained on the app server to find illegal users. The API call frequency is capped at 20 times per second."]
    }), `
`, _jsx(_components.h3, {
      id: "handle-illegal-users",
      children: "Handle illegal users"
    }), `
`, _jsx(_components.p, {
      children: "After you identify an illegal user, stop their room bombing and disruptive behavior to restore order to the room. Use one or more of the following methods to stop the disruptive activity:"
    }), `
`, _jsx(_components.h4, {
      id: "ban-illegal-users-from-posting-streams",
      children: "Ban illegal users from posting streams"
    }), `
`, _jsx(_components.p, {
      children: "Use the following methods to achieve this:"
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","ios","macos","windows","electron","flutter","react-native","unity","web"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client asking the client to call ", _jsx(_components.code, {
              children: "muteLocalAudioStream"
            }), " and set ", _jsx(_components.code, {
              children: "muted"
            }), " to ", _jsx(_components.code, {
              children: "true"
            }), " to cancel publishing the audio stream."]
          }), `
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client requesting the client to call ", _jsx(_components.code, {
              children: "setClientRole"
            }), " to set the user's role as audience, and cancel their streaming privileges."]
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
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client asking the client to call ", _jsx(_components.code, {
              children: "muteLocalAudioStream"
            }), " and set ", _jsx(_components.code, {
              children: "muted"
            }), " to ", _jsx(_components.code, {
              children: "true"
            }), " to cancel publishing the audio stream."]
          }), `
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client requesting the client to call ", _jsx(_components.code, {
              children: "setClientRole"
            }), " to set the user's role as audience, and cancel their streaming privileges."]
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
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client asking the client to call ", _jsx(_components.code, {
              children: "muteLocalAudioStream"
            }), " and set ", _jsx(_components.code, {
              children: "muted"
            }), " to ", _jsx(_components.code, {
              children: "true"
            }), " to cancel publishing the audio stream."]
          }), `
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client requesting the client to call ", _jsx(_components.code, {
              children: "setClientRole"
            }), " to set the user's role as audience, and cancel their streaming privileges."]
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
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client asking the client to call ", _jsx(_components.code, {
              children: "muteLocalAudioStream"
            }), " and set ", _jsx(_components.code, {
              children: "muted"
            }), " to ", _jsx(_components.code, {
              children: "true"
            }), " to cancel publishing the audio stream."]
          }), `
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client requesting the client to call ", _jsx(_components.code, {
              children: "setClientRole"
            }), " to set the user's role as audience, and cancel their streaming privileges."]
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
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client asking the client to call ", _jsx(_components.code, {
              children: "muteLocalAudioStream"
            }), " and set ", _jsx(_components.code, {
              children: "muted"
            }), " to ", _jsx(_components.code, {
              children: "true"
            }), " to cancel publishing the audio stream."]
          }), `
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client requesting the client to call ", _jsx(_components.code, {
              children: "setClientRole"
            }), " to set the user's role as audience, and cancel their streaming privileges."]
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
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client asking the client to call ", _jsx(_components.code, {
              children: "muteLocalAudioStream"
            }), " and set ", _jsx(_components.code, {
              children: "muted"
            }), " to ", _jsx(_components.code, {
              children: "true"
            }), " to cancel publishing the audio stream."]
          }), `
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client requesting the client to call ", _jsx(_components.code, {
              children: "setClientRole"
            }), " to set the user's role as audience, and cancel their streaming privileges."]
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
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client asking the client to call ", _jsx(_components.code, {
              children: "muteLocalAudioStream"
            }), " and set ", _jsx(_components.code, {
              children: "muted"
            }), " to ", _jsx(_components.code, {
              children: "true"
            }), " to cancel publishing the audio stream."]
          }), `
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client requesting the client to call ", _jsx(_components.code, {
              children: "setClientRole"
            }), " to set the user's role as audience, and cancel their streaming privileges."]
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
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client asking the client to call ", _jsx(_components.code, {
              children: "muteLocalAudioStream"
            }), " and set ", _jsx(_components.code, {
              children: "muted"
            }), " to ", _jsx(_components.code, {
              children: "true"
            }), " to cancel publishing the audio stream."]
          }), `
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client requesting the client to call ", _jsx(_components.code, {
              children: "setClientRole"
            }), " to set the user's role as audience, and cancel their streaming privileges."]
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
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client asking the client to call ", _jsx(_components.code, {
              children: "setMuted(true)"
            }), " on the local audio track to stop publishing the audio stream."]
          }), `
`, _jsxs(_components.li, {
            children: ["The app server sends a message to the user's client requesting the client to call ", _jsx(_components.code, {
              children: "setClientRole"
            }), " to set the user's role as audience, and cancel their streaming privileges."]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "kick-illegal-users-out-of-the-channel",
      children: "Kick illegal users out of the channel"
    }), `
`, _jsxs(_components.p, {
      children: ["The app server calls ", _jsx(_components.code, {
        children: "http://api.sd-rtn.com/dev/v1/kicking-rule"
      }), ". For the ", _jsx(_components.code, {
        children: "privileges"
      }), " parameter in the ", _jsx(_components.code, {
        children: "join_channel"
      }), " request packet body, set the ", _jsx(_components.code, {
        children: "cname"
      }), ", and ", _jsx(_components.code, {
        children: "uid"
      }), " fields to kick illegal users out of the channel."]
    }), `
`, _jsxs(_components.p, {
      children: ["The Agora server kicks the illegal users based on the values in the ", _jsx(_components.code, {
        children: "cname"
      }), " and ", _jsx(_components.code, {
        children: "uid"
      }), " fields as follows:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If you fill in ", _jsx(_components.code, {
          children: "cname"
        }), " without ", _jsx(_components.code, {
          children: "uid"
        }), ", no one can join the channel corresponding to that ", _jsx(_components.code, {
          children: "cname"
        }), " in the app."]
      }), `
`, _jsxs(_components.li, {
        children: ["If you fill in ", _jsx(_components.code, {
          children: "uid"
        }), " without ", _jsx(_components.code, {
          children: "cname"
        }), ", the ", _jsx(_components.code, {
          children: "uid"
        }), " cannot join any channel in the app."]
      }), `
`, _jsxs(_components.li, {
        children: ["If you fill in ", _jsx(_components.code, {
          children: "cname"
        }), " and ", _jsx(_components.code, {
          children: "uid"
        }), ", the ", _jsx(_components.code, {
          children: "uid"
        }), " cannot join the channel corresponding to the ", _jsx(_components.code, {
          children: "cname"
        }), " in the app."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/video",
          children: "Channel Management RESTful API"
        })
      }), `
`]
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","ios","macos","windows","electron","flutter","react-native","unity","web"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_ontokenprivilegewillexpire",
              children: _jsx(_components.code, {
                children: "onTokenPrivilegeWillExpire"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_renewtoken",
              children: _jsx(_components.code, {
                children: "renewToken"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setclientrole",
              children: _jsx(_components.code, {
                children: "setClientRole"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onrejoinchannelsuccess",
              children: _jsx(_components.code, {
                children: "onRejoinChannelSuccess"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enableaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "enableAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream",
              children: _jsx(_components.code, {
                children: "muteRemoteAudioStream"
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
          id: "api-reference-1",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/renewtoken(_:)",
              children: _jsx(_components.code, {
                children: "renewToken"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setclientrole(_:options:)",
              children: _jsx(_components.code, {
                children: "setClientRole"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableaudiovolumeindication(_:smooth:reportvad:)",
              children: _jsx(_components.code, {
                children: "enableAudioVolumeIndication"
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
          id: "api-reference-2",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/renewtoken(_:)",
              children: _jsx(_components.code, {
                children: "renewToken"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setclientrole(_:options:)",
              children: _jsx(_components.code, {
                children: "setClientRole"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enableaudiovolumeindication(_:smooth:reportvad:)",
              children: _jsx(_components.code, {
                children: "enableAudioVolumeIndication"
              })
            })
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
          id: "api-reference-3",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_ontokenprivilegewillexpire",
              children: _jsx(_components.code, {
                children: "onTokenPrivilegeWillExpire"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_renewtoken",
              children: _jsx(_components.code, {
                children: "renewToken"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setclientrole",
              children: _jsx(_components.code, {
                children: "setClientRole"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onrejoinchannelsuccess",
              children: _jsx(_components.code, {
                children: "onRejoinChannelSuccess"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_enableaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "enableAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream",
              children: _jsx(_components.code, {
                children: "muteRemoteAudioStream"
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
          id: "api-reference-4",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_ontokenprivilegewillexpire",
              children: _jsx(_components.code, {
                children: "onTokenPrivilegeWillExpire"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_renewtoken",
              children: _jsx(_components.code, {
                children: "renewToken"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setclientrole2",
              children: _jsx(_components.code, {
                children: "setClientRole"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onrejoinchannelsuccess",
              children: _jsx(_components.code, {
                children: "onRejoinChannelSuccess"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_enableaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "enableAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream",
              children: _jsx(_components.code, {
                children: "muteRemoteAudioStream"
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
          id: "api-reference-5",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_ontokenprivilegewillexpire",
              children: _jsx(_components.code, {
                children: "onTokenPrivilegeWillExpire"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_renewtoken",
              children: _jsx(_components.code, {
                children: "renewToken"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setclientrole2",
              children: _jsx(_components.code, {
                children: "setClientRole"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onrejoinchannelsuccess",
              children: _jsx(_components.code, {
                children: "onRejoinChannelSuccess"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_enableaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "enableAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream",
              children: _jsx(_components.code, {
                children: "muteRemoteAudioStream"
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
          id: "api-reference-6",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_ontokenprivilegewillexpire",
              children: _jsx(_components.code, {
                children: "onTokenPrivilegeWillExpire"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_renewtoken",
              children: _jsx(_components.code, {
                children: "renewToken"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setclientrole2",
              children: _jsx(_components.code, {
                children: "setClientRole"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onrejoinchannelsuccess",
              children: _jsx(_components.code, {
                children: "onRejoinChannelSuccess"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_enableaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "enableAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream",
              children: _jsx(_components.code, {
                children: "muteRemoteAudioStream"
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
          id: "api-reference-7",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_ontokenprivilegewillexpire",
              children: _jsx(_components.code, {
                children: "OnTokenPrivilegeWillExpire"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_renewtoken",
              children: _jsx(_components.code, {
                children: "RenewToken"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setclientrole",
              children: _jsx(_components.code, {
                children: "SetClientRole"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onrejoinchannelsuccess",
              children: _jsx(_components.code, {
                children: "OnRejoinChannelSuccess"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_enableaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "EnableAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "OnAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream",
              children: _jsx(_components.code, {
                children: "MuteRemoteAudioStream"
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
          id: "api-reference-8",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_token_privilege_will_expire",
              children: _jsx(_components.code, {
                children: "token-privilege-will-expire"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#renewtoken",
              children: _jsx(_components.code, {
                children: "renewToken"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#setclientrole",
              children: _jsx(_components.code, {
                children: "setClientRole"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_connection_state_change",
              children: _jsx(_components.code, {
                children: "connection-state-change"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#enableaudiovolumeindicator",
              children: _jsx(_components.code, {
                children: "enableAudioVolumeIndicator"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_volume_indicator",
              children: _jsx(_components.code, {
                children: "volume-indicator"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#unsubscribe",
              children: _jsx(_components.code, {
                children: "unsubscribe"
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
